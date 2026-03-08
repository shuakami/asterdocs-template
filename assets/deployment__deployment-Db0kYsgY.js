const e={slug:"deployment/deployment",html:`<h2 id="build-pipeline">Build pipeline</h2>
<p><code>npm run build</code> runs <code>npm run docs:build</code> first.</p>
<p>That generates:</p>
<ul>
<li>the docs manifest, groups, and search index</li>
<li>one content module per article</li>
</ul>
<p>Then Vite bundles everything into the final static site.</p>
<h2 id="recommended-checks">Recommended checks</h2>
<p>Before shipping, verify these steps:</p>
<ol>
<li><code>npm run lint</code></li>
<li><code>npm run build</code></li>
<li>new documents appear in the home page and sidebar</li>
<li>search finds new titles and keywords</li>
</ol>
`};export{e as default};
