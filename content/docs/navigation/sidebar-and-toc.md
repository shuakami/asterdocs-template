---
title: Sidebar and TOC
summary: The sidebar and the table of contents are generated from config and Markdown headings.
description: Navigation becomes part of the content system instead of being hard-coded in the page.
group: navigation
order: 1
tags:
  - sidebar
  - toc
  - anchors
---

## Sidebar generation

The sidebar order comes from `content/site.config.json`, while article order comes from document frontmatter.

This keeps structure predictable and makes article maintenance easier for content authors.

## Table of contents generation

The right-side table of contents is built from `##` and `###` headings during the build.

That means the page does not need to scan the DOM again after every article load.

## Unified navigation behavior

Clicks from the sidebar, search panel, and table of contents all go through the same app-level navigation flow:

1. open the target document
2. load the generated article module
3. scroll to the target section if needed
