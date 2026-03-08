---
title: Extensibility
summary: The template already separates content, config, generation, and runtime, so future changes stay manageable.
description: This page shows where to extend the template without undoing the current structure.
group: extension
order: 1
tags:
  - extension
  - multi-language
  - content-source
---

## Current layers

The project is already split into four clear layers:

- content: `content/docs/**/*.md`
- config: `content/site.config.json`
- generation: `scripts/generate-docs.ts`
- runtime: `src/App.tsx` and `src/docs/runtime.ts`

## Easy next steps

### Multi-language docs

You can add language folders and let the build step create separate manifests.

### Stronger search

You can keep the UI and replace only the query logic in `src/docs/runtime.ts`.

### Custom Markdown blocks

You can extend the build step with extra Markdown rules instead of moving content logic back into page components.

### Remote content sources

You can fetch content in the generation step and still output the same manifest and article modules.
