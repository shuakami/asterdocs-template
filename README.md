# AsterDocs

[![Deploy Website](https://github.com/shuakami/asterdocs-template/actions/workflows/deploy-website.yml/badge.svg)](https://github.com/shuakami/asterdocs-template/actions/workflows/deploy-website.yml)
[![Type Check](https://img.shields.io/badge/typecheck-passing-22c55e)](https://github.com/shuakami/asterdocs-template)
[![GitHub Pages](https://img.shields.io/badge/demo-live-2563eb)](https://shuakami.github.io/asterdocs-template/)

AsterDocs is a high-performance Markdown documentation template built for teams that want a polished docs experience without rewriting their existing UI style.

It keeps the current visual language intact, moves content maintenance to Markdown, generates navigation and search at build time, and ships with a ready-to-use GitHub Pages deployment workflow.

## Why AsterDocs

- Markdown-first content workflow with simple structure and low maintenance cost
- Build-time rendering for predictable output and fast runtime performance
- On-demand document loading instead of pushing every page into the initial bundle
- Generated search index with lazy loading and no client-side Markdown parsing
- GitHub Pages deployment included out of the box
- Easy branding through one config file instead of editing application code everywhere

## Highlights

- Keep your current UI style instead of replacing it with a generic docs theme
- Configure site branding, hero copy, groups, icons, and header links in `content/site.config.json`
- Write docs in `content/docs/**/*.md`
- Support headings, tables, code blocks, nested lists, links, images, and GFM alerts
- Generate sidebar, table of contents, and search data automatically
- Deploy static output to GitHub Pages through the `website` branch

## Demo

- Live site: `https://shuakami.github.io/asterdocs-template/`

## Quick Start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Type check:

```bash
npm run lint
```

## Project Structure

```text
content/
  site.config.json
  docs/
scripts/
  generate-docs.ts
src/
  App.tsx
  docs/
    generated/
    runtime.ts
    types.ts
```

## How Content Works

Every document lives in Markdown. AsterDocs converts it into HTML during the build, extracts headings for the table of contents, and builds a searchable index ahead of time.

Example frontmatter:

```md
---
title: Quick Start
summary: Set up the project in a few minutes.
description: A short introduction to local development and deployment.
group: getting-started
order: 10
tags:
  - docs
  - markdown
---

## Installation

Your content goes here.
```

## Configuration

`content/site.config.json` controls:

- brand name and browser title
- optional GitHub icon and link
- optional version menu
- hero title and description
- document page description visibility through `document.showDescription`
- group titles, icons, order, and home page counts

## Deployment

This repository includes a GitHub Actions workflow that:

1. installs dependencies
2. builds the static site
3. publishes the generated output to the `website` branch
4. serves GitHub Pages from that branch

After you create a repository from this template, GitHub Pages can be enabled with the `website` branch as the source.

## Performance Notes

- document HTML is generated at build time
- content pages are split into separate modules
- search index is lazy-loaded
- sidebar and routing data are precomputed
- vendor chunks are separated for better browser caching
- generated files are written incrementally to avoid unnecessary rebuild churn

## Best For

- SDK documentation
- internal developer portals
- product handbooks
- API references
- team knowledge bases that want a clean custom UI

## License

You can use this template as the starting point for your own documentation projects.
