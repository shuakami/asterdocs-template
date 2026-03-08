---
title: Site Search
summary: Search data is prepared during the build so runtime search stays light and simple.
description: This search approach is designed for docs templates that want low complexity and solid speed.
group: search
order: 1
tags:
  - search
  - index
  - sections
---

## What goes into the index

The build step adds these fields to the search index:

- document title
- `summary`
- `description`
- `tags`
- body text
- section titles and section snippets

## Why this stays fast

The page does not scan rendered content to search. It only queries the prebuilt index.

For small and medium docs sites, this is usually the best balance between speed, bundle size, and maintenance cost.

## Result ranking

Results favor:

1. direct title matches
2. section title matches
3. summary and keyword matches
4. body text matches
