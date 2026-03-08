import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "search/site-search",
  "html": "<h2 id=\"what-goes-into-the-index\">What goes into the index</h2>\n<p>The build step adds these fields to the search index:</p>\n<ul>\n<li>document title</li>\n<li><code>summary</code></li>\n<li><code>description</code></li>\n<li><code>tags</code></li>\n<li>body text</li>\n<li>section titles and section snippets</li>\n</ul>\n<h2 id=\"why-this-stays-fast\">Why this stays fast</h2>\n<p>The page does not scan rendered content to search. It only queries the prebuilt index.</p>\n<p>For small and medium docs sites, this is usually the best balance between speed, bundle size, and maintenance cost.</p>\n<h2 id=\"result-ranking\">Result ranking</h2>\n<p>Results favor:</p>\n<ol>\n<li>direct title matches</li>\n<li>section title matches</li>\n<li>summary and keyword matches</li>\n<li>body text matches</li>\n</ol>\n"
};

export default docContent;
