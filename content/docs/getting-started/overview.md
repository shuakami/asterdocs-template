---
title: Overview
summary: Understand the goal of the template before you start adding content.
description: This page explains the architecture so the next changes stay easy to maintain.
group: getting-started
order: 1
tags:
  - template
  - markdown
  - performance
---

This template keeps the current UI style, but replaces hard-coded article content with a Markdown content system.

If you want the fastest path to a working site, continue with [Quick Start](./quick-start.md).

## What changed

The main layout still looks the same, but the data source is now different:

- `content/docs/**/*.md` stores article content
- `content/site.config.json` stores global site settings
- `scripts/generate-docs.ts` builds navigation, search data, and article HTML
- React only renders prepared data instead of parsing Markdown in the browser

## Why this is better

### Content is easier to maintain

Adding a new document no longer requires editing the main page component. You add a Markdown file and fill in a small frontmatter block.

### Search is no longer tied to page markup

Search data is prepared during the build, so runtime logic stays light and predictable.

### UI stays stable

The header, home grid, left navigation, main article area, and right table of contents all keep the current style. Only the content pipeline changes.

## Suggested workflow

1. Define your groups in `site.config.json`
2. Add Markdown files under `content/docs`
3. Keep article content out of React components
