const o={slug:"configuration/site-config",html:`<p>The whole site is configured through <code>content/site.config.json</code>.</p>
<h2 id="what-this-file-controls">What this file controls</h2>
<ul>
<li>brand name and version selector labels</li>
<li>home page title and description</li>
<li>group titles, icons, order, and home page link counts</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="language-json">{
  &quot;brand&quot;: {
    &quot;name&quot;: &quot;Docs&quot;,
    &quot;versionLabel&quot;: &quot;Version: Free, Pro, &amp; Team&quot;,
    &quot;versions&quot;: [&quot;Free, Pro, &amp; Team&quot;, &quot;Enterprise Cloud&quot;]
  },
  &quot;hero&quot;: {
    &quot;title&quot;: &quot;High-Performance Markdown Docs Template&quot;,
    &quot;description&quot;: &quot;Keep the UI and simplify the content pipeline.&quot;
  },
  &quot;groups&quot;: [
    {
      &quot;id&quot;: &quot;getting-started&quot;,
      &quot;title&quot;: &quot;Getting Started&quot;,
      &quot;icon&quot;: &quot;Rocket&quot;,
      &quot;order&quot;: 1,
      &quot;homeLinks&quot;: 4
    }
  ]
}
</code></pre>
<h2 id="group-behavior">Group behavior</h2>
<p>A group must exist in the config file first. After that, any document with the same <code>group</code> id will appear under that section in the home page and sidebar.</p>
`};export{o as default};
