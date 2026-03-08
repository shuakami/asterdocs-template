import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "deployment/deployment",
  "html": "<h2 id=\"build-pipeline\">Build pipeline</h2>\n<p><code>npm run build</code> runs <code>npm run docs:build</code> first.</p>\n<p>That generates:</p>\n<ul>\n<li>the docs manifest, groups, and search index</li>\n<li>one content module per article</li>\n</ul>\n<p>Then Vite bundles everything into the final static site.</p>\n<h2 id=\"recommended-checks\">Recommended checks</h2>\n<p>Before shipping, verify these steps:</p>\n<ol>\n<li><code>npm run lint</code></li>\n<li><code>npm run build</code></li>\n<li>new documents appear in the home page and sidebar</li>\n<li>search finds new titles and keywords</li>\n</ol>\n"
};

export default docContent;
