const e={slug:"getting-started/quick-start",html:`<h2 id="install-dependencies">Install dependencies</h2>
<pre><code class="language-bash">npm install
</code></pre>
<h2 id="start-development">Start development</h2>
<pre><code class="language-bash">npm run dev
</code></pre>
<p>Before the dev server starts, the project runs <code>npm run docs:build</code> and generates the manifest, search index, and article modules.</p>
<h2 id="add-a-document">Add a document</h2>
<p>Create a Markdown file like this:</p>
<pre><code class="language-md">---
title: New Document
summary: Summary for the list view
description: Description for the article header
group: getting-started
order: 3
tags:
  - example
---

## First section

Write your content here.
</code></pre>
<h2 id="important-frontmatter-fields">Important frontmatter fields</h2>
<ul>
<li><code>group</code> must match a group id from <code>content/site.config.json</code></li>
<li><code>order</code> controls order inside the same group and defaults to <code>999</code></li>
<li><code>tags</code> are added to the search index</li>
</ul>
<h2 id="rebuild-content-data">Rebuild content data</h2>
<pre><code class="language-bash">npm run docs:build
</code></pre>
`};export{e as default};
