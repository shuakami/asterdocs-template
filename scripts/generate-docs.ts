import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

type IconName =
  | 'Rocket'
  | 'MessageSquare'
  | 'Settings'
  | 'Shield'
  | 'Layout'
  | 'Building'
  | 'Cpu'
  | 'Search'
  | 'Info'
  | 'Globe';

interface SiteGroupConfig {
  id: string;
  title: string;
  icon: IconName;
  order?: number;
  homeLinks?: number;
}

interface SiteConfig {
  brand: {
    name: string;
    browserTitle?: string;
    versionLabel?: string;
    versions?: string[];
    versionMenu?: {
      enabled?: boolean;
      label: string;
      items: string[];
    };
    github?: {
      href: string;
      title?: string;
      openInNewTab?: boolean;
    };
  };
  hero: {
    title: string;
    description: string;
  };
  document?: {
    showDescription?: boolean;
  };
  groups: SiteGroupConfig[];
}

interface DocHeading {
  id: string;
  text: string;
  level: number;
}

interface DocManifestEntry {
  slug: string;
  title: string;
  summary: string;
  description: string;
  groupId: string;
  order: number;
  tags: string[];
  excerpt: string;
  headings: DocHeading[];
  contentModule: string;
}

interface SearchEntry {
  id: string;
  kind: 'doc' | 'section';
  slug: string;
  sectionId?: string;
  title: string;
  description: string;
  keywords: string;
  scoreBoost: number;
}

interface ParsedDoc {
  filePath: string;
  rawContent: string;
  slug: string;
  contentModule: string;
  title: string;
  summary: string;
  description: string;
  groupId: string;
  order: number;
  tags: string[];
  html: string;
  excerpt: string;
  headings: DocHeading[];
  sections: Array<{
    id: string;
    title: string;
    level: number;
    text: string;
  }>;
}

const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'content');
const docsDir = path.join(contentDir, 'docs');
const configPath = path.join(contentDir, 'site.config.json');
const generatedRootDir = path.join(rootDir, 'src', 'docs', 'generated');
const generatedContentDir = path.join(generatedRootDir, 'content');
const manifestPath = path.join(generatedRootDir, 'manifest.ts');
const searchIndexPath = path.join(generatedRootDir, 'search.ts');

function ensureDirectory(dirPath: string) {
  fs.mkdirSync(dirPath, {recursive: true});
}

function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '')) as T;
}

function toPosix(filePath: string) {
  return filePath.replace(/\\/g, '/');
}

function slugify(value: string, counter = new Map<string, number>()) {
  const normalized = value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';

  const currentCount = counter.get(normalized) ?? 0;
  counter.set(normalized, currentCount + 1);

  return currentCount === 0 ? normalized : `${normalized}-${currentCount}`;
}

const GFM_ALERT_LABELS = {
  note: "Note",
  tip: "Tip",
  important: "Important",
  warning: "Warning",
  caution: "Caution",
} as const;

const GFM_ALERT_PATTERN = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(.*)$/i;

const GFM_ALERT_ICONS = {
  note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
  tip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-.63.5-1.2.92-1.68A6 6 0 1 0 8.08 12.3c.42.48.72 1.05.92 1.7"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>',
  important: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10h10"></path><path d="M7 14h6"></path><path d="M17 21l-5-3-5 3V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"></path></svg>',
  warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10.29 3.86-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.71-3.14l-8-14a2 2 0 0 0-3.42 0z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
  caution: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>',
} as const;

function stripGfmAlertMarkers(value: string) {
  return value.replace(
    /^\s*>?\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/gim,
    "",
  );
}

function normalizeLegacyMarkdown(value: string) {
  return value
    .replace(/\*\*([^\r\n*]+?)\s*:\s+\*\*/g, "**$1:**")
    .replace(/\*\*([^\r\n*]+?)\*\*\s+:/g, "**$1:**");
}

function stripMarkdown(value: string) {
  return stripGfmAlertMarkers(normalizeLegacyMarkdown(value))
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^>\s?/gm, "")
    .replace(/^#+\s?/gm, "")
    .replace(/[>*_~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMarkdownFiles(dirPath: string): string[] {
  return fs.readdirSync(dirPath, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      return [fullPath];
    }

    return [] as string[];
  });
}

function createContentModuleName(slug: string) {
  return slug.replace(/[^a-z0-9/\u4e00-\u9fa5_-]+/gi, '-').replace(/\//g, '__');
}

function resolveDocLink(href: string, currentFile: string, slugByFilePath: Map<string, string>) {
  if (!href || /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return null;
  }

  if (href.startsWith('#')) {
    const sectionId = slugify(decodeURIComponent(href.slice(1)));
    return {
      type: 'section' as const,
      sectionId,
    };
  }

  const [relativeDocPath, fragment] = href.split('#');

  if (!relativeDocPath.endsWith('.md')) {
    return null;
  }

  const resolvedPath = path.resolve(path.dirname(currentFile), relativeDocPath);
  const slug = slugByFilePath.get(resolvedPath);

  if (!slug) {
    return null;
  }

  return {
    type: 'doc' as const,
    slug,
    sectionId: fragment ? slugify(decodeURIComponent(fragment)) : undefined,
  };
}

function buildMarkdownRenderer(currentFile: string, slugByFilePath: Map<string, string>, headings: DocHeading[]) {
  const markdown = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  markdown.core.ruler.after("block", "gfm-alerts", (state) => {
    const { Token } = state;

    for (let index = 0; index < state.tokens.length; index += 1) {
      const token = state.tokens[index];

      if (token.type !== "blockquote_open") {
        continue;
      }

      let closeIndex = index;
      let depth = 0;

      while (closeIndex < state.tokens.length) {
        const currentToken = state.tokens[closeIndex];

        if (currentToken.type === "blockquote_open") {
          depth += 1;
        } else if (currentToken.type === "blockquote_close") {
          depth -= 1;

          if (depth === 0) {
            break;
          }
        }

        closeIndex += 1;
      }

      if (closeIndex >= state.tokens.length) {
        continue;
      }

      const firstParagraphOpen = state.tokens[index + 1];
      const firstInline = state.tokens[index + 2];
      const firstParagraphClose = state.tokens[index + 3];

      if (
        firstParagraphOpen?.type !== "paragraph_open" ||
        firstInline?.type !== "inline" ||
        firstParagraphClose?.type !== "paragraph_close"
      ) {
        continue;
      }

      const match = firstInline.content.trim().match(GFM_ALERT_PATTERN);

      if (!match) {
        continue;
      }

      const alertType = match[1].toLowerCase() as keyof typeof GFM_ALERT_LABELS;
      const remainingText = match[2].trim();
      const openToken = new Token("html_block", "", 0);
      openToken.content = `<div class="gfm-alert gfm-alert-${alertType}"><div class="gfm-alert-title"><span class="gfm-alert-icon">${GFM_ALERT_ICONS[alertType]}</span><span>${GFM_ALERT_LABELS[alertType]}</span></div><div class="gfm-alert-body">`;
      const closeToken = new Token("html_block", "", 0);
      closeToken.content = "</div></div>";

      state.tokens[index] = openToken;
      state.tokens[closeIndex] = closeToken;

      if (remainingText) {
        firstInline.content = remainingText;
        firstInline.children = [];
        state.md.inline.parse(
          remainingText,
          state.md,
          state.env,
          firstInline.children,
        );
      } else {
        state.tokens[index + 1] = new Token("html_block", "", 0);
        state.tokens[index + 2] = new Token("html_block", "", 0);
        state.tokens[index + 3] = new Token("html_block", "", 0);
      }
    }
  });

  const defaultHeadingOpen =
    markdown.renderer.rules.heading_open ??
    ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options));

  const defaultLinkOpen =
    markdown.renderer.rules.link_open ??
    ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options));

  const defaultImage =
    markdown.renderer.rules.image ??
    ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options));

  markdown.renderer.rules.heading_open = (tokens, index, options, env, self) => {
    const inlineToken = tokens[index + 1];
    const headingText = inlineToken?.content?.trim() ?? '';
    const level = Number(tokens[index].tag.slice(1));
    const slugCounter = (env as {slugCounter?: Map<string, number>}).slugCounter ?? new Map<string, number>();

    (env as {slugCounter: Map<string, number>}).slugCounter = slugCounter;

    if (headingText) {
      const headingId = slugify(headingText, slugCounter);
      tokens[index].attrSet('id', headingId);

      if (level === 2 || level === 3) {
        headings.push({
          id: headingId,
          text: headingText,
          level,
        });
      }
    }

    return defaultHeadingOpen(tokens, index, options, env, self);
  };

  markdown.renderer.rules.link_open = (tokens, index, options, env, self) => {
    const href = tokens[index].attrGet('href') ?? '';
    const resolved = resolveDocLink(href, currentFile, slugByFilePath);

    if (resolved?.type === 'doc') {
      const params = new URLSearchParams();
      params.set('doc', resolved.slug);

      if (resolved.sectionId) {
        params.set('section', resolved.sectionId);
      }

      tokens[index].attrSet('href', `?${params.toString()}`);
      tokens[index].attrSet('data-doc-slug', resolved.slug);

      if (resolved.sectionId) {
        tokens[index].attrSet('data-doc-section', resolved.sectionId);
      }
    } else if (resolved?.type === 'section') {
      tokens[index].attrSet('href', `#${resolved.sectionId}`);
    } else if (/^https?:\/\//i.test(href)) {
      tokens[index].attrSet('target', '_blank');
      tokens[index].attrSet('rel', 'noreferrer');
    }

    return defaultLinkOpen(tokens, index, options, env, self);
  };

  markdown.renderer.rules.image = (tokens, index, options, env, self) => {
    tokens[index].attrSet('loading', 'lazy');
    tokens[index].attrSet('decoding', 'async');
    tokens[index].attrSet('referrerpolicy', 'no-referrer');
    return defaultImage(tokens, index, options, env, self);
  };

  return markdown;
}

function extractSections(markdown: string, docTitle: string) {
  const parser = new MarkdownIt({html: true, linkify: true, typographer: true});
  const tokens = parser.parse(markdown, {});
  const counter = new Map<string, number>();
  const sections: Array<{id: string; title: string; level: number; text: string}> = [];

  let currentSection = {
    id: 'overview',
    title: docTitle,
    level: 1,
    text: '',
  };

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];

    if (token.type === 'heading_open') {
      const level = Number(token.tag.slice(1));
      const inlineToken = tokens[index + 1];
      const headingText = inlineToken?.type === 'inline' ? inlineToken.content.trim() : '';

      if (headingText) {
        currentSection = {
          id: slugify(headingText, counter),
          title: headingText,
          level,
          text: '',
        };

        if (level === 2 || level === 3) {
          sections.push(currentSection);
        }
      }

      continue;
    }

    if (token.type === "inline") {
      const sectionText = stripGfmAlertMarkers(token.content).trim();

      if (sectionText) {
        currentSection.text = `${currentSection.text} ${sectionText}`.trim();
      }
    }
  }

  return sections;
}

function writeTypeScriptModule(filePath: string, code: string) {
  ensureDirectory(path.dirname(filePath));

  if (fs.existsSync(filePath)) {
    const existingCode = fs.readFileSync(filePath, 'utf8');

    if (existingCode === code) {
      return;
    }
  }

  fs.writeFileSync(filePath, code, 'utf8');
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function normalizeHeadingText(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
}

function stripLeadingDuplicateTitleHeading(html: string, title: string) {
  const match = html.match(/^\s*<h1\b[^>]*>([\s\S]*?)<\/h1>\s*/i);

  if (!match) {
    return html;
  }

  if (normalizeHeadingText(match[1]) !== normalizeHeadingText(title)) {
    return html;
  }

  return html.slice(match[0].length).trimStart();
}

function removeStaleContentModules(expectedModuleNames: Set<string>) {
  if (!fs.existsSync(generatedContentDir)) {
    return;
  }

  for (const entry of fs.readdirSync(generatedContentDir, {withFileTypes: true})) {
    if (!entry.isFile() || !entry.name.endsWith('.ts')) {
      continue;
    }

    const moduleName = entry.name.replace(/\.ts$/, '');

    if (!expectedModuleNames.has(moduleName)) {
      fs.rmSync(path.join(generatedContentDir, entry.name), {force: true});
    }
  }
}

function createManifestModule(manifest: {
  config: SiteConfig;
  groups: Array<SiteGroupConfig & {order: number; homeLinks: number; docs: string[]}>;
  docs: DocManifestEntry[];
  defaultDocSlug: string;
}) {
  return `import type {DocsManifest} from '../types';\n\nexport const docsManifest: DocsManifest = ${JSON.stringify(manifest, null, 2)};\n`;
}

function createContentModule(slug: string, html: string) {
  return `import type {DocContent} from '../../types';\n\nconst docContent: DocContent = ${JSON.stringify({slug, html}, null, 2)};\n\nexport default docContent;\n`;
}

function createSearchModule(searchIndex: SearchEntry[]) {
  return `import type {SearchEntry} from '../types';\n\nexport const searchIndex: SearchEntry[] = ${JSON.stringify(searchIndex, null, 2)};\n`;
}

function main() {
  const siteConfig = readJson<SiteConfig>(configPath);
  const markdownFiles = getMarkdownFiles(docsDir);
  const slugByFilePath = new Map<string, string>();

  for (const filePath of markdownFiles) {
    const relativePath = toPosix(path.relative(docsDir, filePath));
    const slug = relativePath.replace(/\.md$/, '');
    slugByFilePath.set(path.resolve(filePath), slug);
  }

  const parsedDocs = markdownFiles.map<ParsedDoc>((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const {data, content} = matter(fileContent);
    const normalizedContent = normalizeLegacyMarkdown(content);
    const relativePath = toPosix(path.relative(docsDir, filePath));
    const slug = relativePath.replace(/\.md$/, '');
    const contentModule = createContentModuleName(slug);
    const title = typeof data.title === 'string' ? data.title : path.basename(slug);
    const summary = typeof data.summary === 'string' ? data.summary : title;
    const description = typeof data.description === 'string' ? data.description : summary;
    const groupId = typeof data.group === 'string' ? data.group : slug.split('/')[0];
    const order = typeof data.order === 'number' ? data.order : 999;
    const tags = Array.isArray(data.tags) ? data.tags.filter((tag): tag is string => typeof tag === 'string') : [];
    const headings: DocHeading[] = [];
    const markdown = buildMarkdownRenderer(filePath, slugByFilePath, headings);
    const html = stripLeadingDuplicateTitleHeading(
      markdown.render(normalizedContent, {slugCounter: new Map<string, number>()}),
      title,
    );
    const plainText = stripMarkdown(normalizedContent);
    const excerpt = plainText.slice(0, 120);
    const sections = extractSections(normalizedContent, title);

    return {
      filePath,
      rawContent: normalizedContent,
      slug,
      contentModule,
      title,
      summary,
      description,
      groupId,
      order,
      tags,
      html,
      excerpt,
      headings,
      sections,
    };
  });

  const configuredGroups = new Map<string, SiteGroupConfig>(siteConfig.groups.map((group) => [group.id, group]));
  const groupsWithFallback = [...siteConfig.groups];

  for (const doc of parsedDocs) {
    if (!configuredGroups.has(doc.groupId)) {
      const fallbackGroup: SiteGroupConfig = {
        id: doc.groupId,
        title: doc.groupId,
        icon: 'Info',
        order: 999,
        homeLinks: 4,
      };

      configuredGroups.set(doc.groupId, fallbackGroup);
      groupsWithFallback.push(fallbackGroup);
    }
  }

  const sortedDocs = [...parsedDocs].sort((left, right) => {
    const leftGroupOrder = configuredGroups.get(left.groupId)?.order ?? 999;
    const rightGroupOrder = configuredGroups.get(right.groupId)?.order ?? 999;

    if (leftGroupOrder !== rightGroupOrder) {
      return leftGroupOrder - rightGroupOrder;
    }

    if (left.order !== right.order) {
      return left.order - right.order;
    }

    return left.title.localeCompare(right.title, 'zh-CN');
  });

  const manifestDocs: DocManifestEntry[] = sortedDocs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    summary: doc.summary,
    description: doc.description,
    groupId: doc.groupId,
    order: doc.order,
    tags: doc.tags,
    excerpt: doc.excerpt,
    headings: doc.headings,
    contentModule: doc.contentModule,
  }));

  const groups = groupsWithFallback
    .map((group) => ({
      id: group.id,
      title: group.title,
      icon: group.icon,
      order: group.order ?? 999,
      homeLinks: group.homeLinks ?? 4,
      docs: manifestDocs.filter((doc) => doc.groupId === group.id).map((doc) => doc.slug),
    }))
    .sort((left, right) => left.order - right.order);

  const searchIndex: SearchEntry[] = sortedDocs.flatMap((doc) => {
    const groupTitle = configuredGroups.get(doc.groupId)?.title ?? doc.groupId;
    const plainText = stripMarkdown(doc.rawContent);
    const docEntry: SearchEntry = {
      id: `doc:${doc.slug}`,
      kind: 'doc',
      slug: doc.slug,
      title: doc.title,
      description: doc.summary,
      keywords: [groupTitle, doc.description, ...doc.tags, plainText].join(' '),
      scoreBoost: 80,
    };

    const sectionEntries = doc.sections
      .filter((section) => section.level === 2 || section.level === 3)
      .map<SearchEntry>((section) => ({
        id: `section:${doc.slug}:${section.id}`,
        kind: 'section',
        slug: doc.slug,
        sectionId: section.id,
        title: section.title,
        description: section.text.slice(0, 110) || doc.summary,
        keywords: [doc.title, groupTitle, doc.summary, ...doc.tags, section.text].join(' '),
        scoreBoost: 48,
      }));

    return [docEntry, ...sectionEntries];
  });

  ensureDirectory(generatedContentDir);
  removeStaleContentModules(new Set(sortedDocs.map((doc) => doc.contentModule)));

  for (const doc of sortedDocs) {
    writeTypeScriptModule(
      path.join(generatedContentDir, `${doc.contentModule}.ts`),
      createContentModule(doc.slug, doc.html),
    );
  }

  writeTypeScriptModule(searchIndexPath, createSearchModule(searchIndex));

  writeTypeScriptModule(
    manifestPath,
    createManifestModule({
      config: siteConfig,
      groups,
      docs: manifestDocs,
      defaultDocSlug: manifestDocs[0]?.slug ?? '',
    }),
  );

  console.log(`Generated ${manifestDocs.length} documents.`);
}

main();


