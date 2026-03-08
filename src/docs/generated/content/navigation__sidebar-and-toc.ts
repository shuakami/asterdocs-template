import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "navigation/sidebar-and-toc",
  "html": "<h2 id=\"sidebar-generation\">Sidebar generation</h2>\n<p>The sidebar order comes from <code>content/site.config.json</code>, while article order comes from document frontmatter.</p>\n<p>This keeps structure predictable and makes article maintenance easier for content authors.</p>\n<h2 id=\"table-of-contents-generation\">Table of contents generation</h2>\n<p>The right-side table of contents is built from <code>##</code> and <code>###</code> headings during the build.</p>\n<p>That means the page does not need to scan the DOM again after every article load.</p>\n<h2 id=\"unified-navigation-behavior\">Unified navigation behavior</h2>\n<p>Clicks from the sidebar, search panel, and table of contents all go through the same app-level navigation flow:</p>\n<ol>\n<li>open the target document</li>\n<li>load the generated article module</li>\n<li>scroll to the target section if needed</li>\n</ol>\n"
};

export default docContent;
