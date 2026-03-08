const e={slug:"authoring/markdown-authoring",html:`<h2 id="heading-levels">Heading levels</h2>
<p>Headings drive three parts of the experience:</p>
<ul>
<li>in-article anchor ids</li>
<li>the right-side table of contents</li>
<li>section-level search entries</li>
</ul>
<p>Use <code>##</code> and <code>###</code> for the clearest structure.</p>
<h2 id="code-blocks">Code blocks</h2>
<pre><code class="language-ts">export function createDoc(slug: string) {
  return { slug };
}
</code></pre>
<p>The template does not do heavy runtime code processing, which keeps article switching fast.</p>
<h2 id="internal-links">Internal links</h2>
<p>Relative <code>.md</code> links are converted into app-level document navigation during the build.</p>
<pre><code class="language-md">[Open site config](../configuration/site-config.md)
</code></pre>
<h2 id="images">Images</h2>
<p>Store images in <code>public/</code> and reference them with root-based paths for the simplest setup.</p>
`};export{e as default};
