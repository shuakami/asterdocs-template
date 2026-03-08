---
title: Quick Start
summary: Run the project and add your first document with the smallest possible setup.
description: This page shows the minimum steps needed to start using the template.
group: getting-started
order: 2
tags:
  - setup
  - install
  - docs
---

## Install dependencies

```bash
npm install
```

## Start development

```bash
npm run dev
```

Before the dev server starts, the project runs `npm run docs:build` and generates the manifest, search index, and article modules.

## Add a document

Create a Markdown file like this:

```md
---
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
```

## Important frontmatter fields

- `group` must match a group id from `content/site.config.json`
- `order` controls order inside the same group and defaults to `999`
- `tags` are added to the search index

## Rebuild content data

```bash
npm run docs:build
```
