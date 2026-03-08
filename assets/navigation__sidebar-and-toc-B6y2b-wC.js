const e={slug:"navigation/sidebar-and-toc",html:`<h2 id="sidebar-generation">Sidebar generation</h2>
<p>The sidebar order comes from <code>content/site.config.json</code>, while article order comes from document frontmatter.</p>
<p>This keeps structure predictable and makes article maintenance easier for content authors.</p>
<h2 id="table-of-contents-generation">Table of contents generation</h2>
<p>The right-side table of contents is built from <code>##</code> and <code>###</code> headings during the build.</p>
<p>That means the page does not need to scan the DOM again after every article load.</p>
<h2 id="unified-navigation-behavior">Unified navigation behavior</h2>
<p>Clicks from the sidebar, search panel, and table of contents all go through the same app-level navigation flow:</p>
<ol>
<li>open the target document</li>
<li>load the generated article module</li>
<li>scroll to the target section if needed</li>
</ol>
`};export{e as default};
