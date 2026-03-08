const e={slug:"getting-started/overview",html:`<p>This template keeps the current UI style, but replaces hard-coded article content with a Markdown content system.</p>
<p>If you want the fastest path to a working site, continue with <a href="?doc=getting-started%2Fquick-start" data-doc-slug="getting-started/quick-start">Quick Start</a>.</p>
<h2 id="what-changed">What changed</h2>
<p>The main layout still looks the same, but the data source is now different:</p>
<ul>
<li><code>content/docs/**/*.md</code> stores article content</li>
<li><code>content/site.config.json</code> stores global site settings</li>
<li><code>scripts/generate-docs.ts</code> builds navigation, search data, and article HTML</li>
<li>React only renders prepared data instead of parsing Markdown in the browser</li>
</ul>
<h2 id="why-this-is-better">Why this is better</h2>
<h3 id="content-is-easier-to-maintain">Content is easier to maintain</h3>
<p>Adding a new document no longer requires editing the main page component. You add a Markdown file and fill in a small frontmatter block.</p>
<h3 id="search-is-no-longer-tied-to-page-markup">Search is no longer tied to page markup</h3>
<p>Search data is prepared during the build, so runtime logic stays light and predictable.</p>
<h3 id="ui-stays-stable">UI stays stable</h3>
<p>The header, home grid, left navigation, main article area, and right table of contents all keep the current style. Only the content pipeline changes.</p>
<h2 id="suggested-workflow">Suggested workflow</h2>
<ol>
<li>Define your groups in <code>site.config.json</code></li>
<li>Add Markdown files under <code>content/docs</code></li>
<li>Keep article content out of React components</li>
</ol>
`};export{e as default};
