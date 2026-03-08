import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "extension/extensibility",
  "html": "<h2 id=\"current-layers\">Current layers</h2>\n<p>The project is already split into four clear layers:</p>\n<ul>\n<li>content: <code>content/docs/**/*.md</code></li>\n<li>config: <code>content/site.config.json</code></li>\n<li>generation: <code>scripts/generate-docs.ts</code></li>\n<li>runtime: <code>src/App.tsx</code> and <code>src/docs/runtime.ts</code></li>\n</ul>\n<h2 id=\"easy-next-steps\">Easy next steps</h2>\n<h3 id=\"multi-language-docs\">Multi-language docs</h3>\n<p>You can add language folders and let the build step create separate manifests.</p>\n<h3 id=\"stronger-search\">Stronger search</h3>\n<p>You can keep the UI and replace only the query logic in <code>src/docs/runtime.ts</code>.</p>\n<h3 id=\"custom-markdown-blocks\">Custom Markdown blocks</h3>\n<p>You can extend the build step with extra Markdown rules instead of moving content logic back into page components.</p>\n<h3 id=\"remote-content-sources\">Remote content sources</h3>\n<p>You can fetch content in the generation step and still output the same manifest and article modules.</p>\n"
};

export default docContent;
