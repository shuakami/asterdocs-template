import type {DocContent} from '../../types';

const docContent: DocContent = {
  "slug": "configuration/site-config",
  "html": "<p>The whole site is configured through <code>content/site.config.json</code>.</p>\n<h2 id=\"what-this-file-controls\">What this file controls</h2>\n<ul>\n<li>brand name and version selector labels</li>\n<li>home page title and description</li>\n<li>group titles, icons, order, and home page link counts</li>\n</ul>\n<h2 id=\"example\">Example</h2>\n<pre><code class=\"language-json\">{\n  &quot;brand&quot;: {\n    &quot;name&quot;: &quot;Docs&quot;,\n    &quot;versionLabel&quot;: &quot;Version: Free, Pro, &amp; Team&quot;,\n    &quot;versions&quot;: [&quot;Free, Pro, &amp; Team&quot;, &quot;Enterprise Cloud&quot;]\n  },\n  &quot;hero&quot;: {\n    &quot;title&quot;: &quot;High-Performance Markdown Docs Template&quot;,\n    &quot;description&quot;: &quot;Keep the UI and simplify the content pipeline.&quot;\n  },\n  &quot;groups&quot;: [\n    {\n      &quot;id&quot;: &quot;getting-started&quot;,\n      &quot;title&quot;: &quot;Getting Started&quot;,\n      &quot;icon&quot;: &quot;Rocket&quot;,\n      &quot;order&quot;: 1,\n      &quot;homeLinks&quot;: 4\n    }\n  ]\n}\n</code></pre>\n<h2 id=\"group-behavior\">Group behavior</h2>\n<p>A group must exist in the config file first. After that, any document with the same <code>group</code> id will appear under that section in the home page and sidebar.</p>\n"
};

export default docContent;
