import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "getting-started/quick-start",
  "html": "<h2 id=\"install-dependencies\">Install dependencies</h2>\n<pre><code class=\"language-bash\">npm install\n</code></pre>\n<h2 id=\"start-development\">Start development</h2>\n<pre><code class=\"language-bash\">npm run dev\n</code></pre>\n<p>Before the dev server starts, the project runs <code>npm run docs:build</code> and generates the manifest, search index, and article modules.</p>\n<h2 id=\"add-a-document\">Add a document</h2>\n<p>Create a Markdown file like this:</p>\n<pre><code class=\"language-md\">---\ntitle: New Document\nsummary: Summary for the list view\ndescription: Description for the article header\ngroup: getting-started\norder: 3\ntags:\n  - example\n---\n\n## First section\n\nWrite your content here.\n</code></pre>\n<h2 id=\"important-frontmatter-fields\">Important frontmatter fields</h2>\n<ul>\n<li><code>group</code> must match a group id from <code>content/site.config.json</code></li>\n<li><code>order</code> controls order inside the same group and defaults to <code>999</code></li>\n<li><code>tags</code> are added to the search index</li>\n</ul>\n<h2 id=\"rebuild-content-data\">Rebuild content data</h2>\n<pre><code class=\"language-bash\">npm run docs:build\n</code></pre>\n"
};

export default docContent;
