---
title: Deployment
summary: Understand what is generated during build and what should be checked before shipping.
description: This page explains the build pipeline and the safest release checklist for the template.
group: deployment
order: 1
tags:
  - deployment
  - build
  - validation
---

## Build pipeline

`npm run build` runs `npm run docs:build` first.

That generates:

- the docs manifest, groups, and search index
- one content module per article

Then Vite bundles everything into the final static site.

## Recommended checks

Before shipping, verify these steps:

1. `npm run lint`
2. `npm run build`
3. new documents appear in the home page and sidebar
4. search finds new titles and keywords
