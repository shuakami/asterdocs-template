import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "performance/performance-strategy",
  "html": "<h2 id=\"what-the-template-does-now\">What the template does now</h2>\n<h3 id=\"build-time-markdown-rendering\">Build-time Markdown rendering</h3>\n<p>Article HTML is prepared during the build, so the browser does not need to parse Markdown at runtime.</p>\n<h3 id=\"on-demand-article-loading\">On-demand article loading</h3>\n<p>Navigation and search metadata load up front, but article bodies are split into separate modules and loaded only when needed.</p>\n<h3 id=\"neighbor-prefetching\">Neighbor prefetching</h3>\n<p>The previous and next article are prefetched after navigation to keep common reading flows smooth.</p>\n<h2 id=\"why-this-matters\">Why this matters</h2>\n<p>If all Markdown content ships in the first bundle, the home page and document view both get heavier as your site grows.</p>\n<p>Splitting metadata from article bodies keeps the initial experience lean while preserving a simple authoring workflow.</p>\n"
};

export default docContent;
