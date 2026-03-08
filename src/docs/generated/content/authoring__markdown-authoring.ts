import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "authoring/markdown-authoring",
  "html": "<h2 id=\"heading-levels\">Heading levels</h2>\n<p>Headings drive three parts of the experience:</p>\n<ul>\n<li>in-article anchor ids</li>\n<li>the right-side table of contents</li>\n<li>section-level search entries</li>\n</ul>\n<p>Use <code>##</code> and <code>###</code> for the clearest structure.</p>\n<h2 id=\"code-blocks\">Code blocks</h2>\n<pre><code class=\"language-ts\">export function createDoc(slug: string) {\n  return { slug };\n}\n</code></pre>\n<p>The template does not do heavy runtime code processing, which keeps article switching fast.</p>\n<h2 id=\"internal-links\">Internal links</h2>\n<p>Relative <code>.md</code> links are converted into app-level document navigation during the build.</p>\n<pre><code class=\"language-md\">[Open site config](../configuration/site-config.md)\n</code></pre>\n<h2 id=\"images\">Images</h2>\n<p>Store images in <code>public/</code> and reference them with root-based paths for the simplest setup.</p>\n"
};

export default docContent;
