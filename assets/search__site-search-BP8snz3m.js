const e={slug:"search/site-search",html:`<h2 id="what-goes-into-the-index">What goes into the index</h2>
<p>The build step adds these fields to the search index:</p>
<ul>
<li>document title</li>
<li><code>summary</code></li>
<li><code>description</code></li>
<li><code>tags</code></li>
<li>body text</li>
<li>section titles and section snippets</li>
</ul>
<h2 id="why-this-stays-fast">Why this stays fast</h2>
<p>The page does not scan rendered content to search. It only queries the prebuilt index.</p>
<p>For small and medium docs sites, this is usually the best balance between speed, bundle size, and maintenance cost.</p>
<h2 id="result-ranking">Result ranking</h2>
<p>Results favor:</p>
<ol>
<li>direct title matches</li>
<li>section title matches</li>
<li>summary and keyword matches</li>
<li>body text matches</li>
</ol>
`};export{e as default};
