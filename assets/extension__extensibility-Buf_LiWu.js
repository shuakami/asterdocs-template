const e={slug:"extension/extensibility",html:`<h2 id="current-layers">Current layers</h2>
<p>The project is already split into four clear layers:</p>
<ul>
<li>content: <code>content/docs/**/*.md</code></li>
<li>config: <code>content/site.config.json</code></li>
<li>generation: <code>scripts/generate-docs.ts</code></li>
<li>runtime: <code>src/App.tsx</code> and <code>src/docs/runtime.ts</code></li>
</ul>
<h2 id="easy-next-steps">Easy next steps</h2>
<h3 id="multi-language-docs">Multi-language docs</h3>
<p>You can add language folders and let the build step create separate manifests.</p>
<h3 id="stronger-search">Stronger search</h3>
<p>You can keep the UI and replace only the query logic in <code>src/docs/runtime.ts</code>.</p>
<h3 id="custom-markdown-blocks">Custom Markdown blocks</h3>
<p>You can extend the build step with extra Markdown rules instead of moving content logic back into page components.</p>
<h3 id="remote-content-sources">Remote content sources</h3>
<p>You can fetch content in the generation step and still output the same manifest and article modules.</p>
`};export{e as default};
