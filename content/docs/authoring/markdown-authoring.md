---
title: Markdown Authoring
summary: Learn how headings, code blocks, lists, and internal links work in this template.
description: The authoring rules are intentionally simple so content stays portable and stable.
group: authoring
order: 1
tags:
  - markdown
  - content
  - headings
---

## Heading levels

Headings drive three parts of the experience:

- in-article anchor ids
- the right-side table of contents
- section-level search entries

Use `##` and `###` for the clearest structure.

## Code blocks

```ts
export function createDoc(slug: string) {
  return { slug };
}
```

The template does not do heavy runtime code processing, which keeps article switching fast.

## Internal links

Relative `.md` links are converted into app-level document navigation during the build.

```md
[Open site config](../configuration/site-config.md)
```

## Images

Store images in `public/` and reference them with root-based paths for the simplest setup.
