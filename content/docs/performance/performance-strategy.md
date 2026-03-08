---
title: Performance Strategy
summary: The template focuses on build-time generation, light runtime logic, and on-demand article loading.
description: If this project is going to be your long-term template, the performance model should be clear from day one.
group: performance
order: 1
tags:
  - performance
  - lazy-loading
  - build-time
---

## What the template does now

### Build-time Markdown rendering

Article HTML is prepared during the build, so the browser does not need to parse Markdown at runtime.

### On-demand article loading

Navigation and search metadata load up front, but article bodies are split into separate modules and loaded only when needed.

### Neighbor prefetching

The previous and next article are prefetched after navigation to keep common reading flows smooth.

## Why this matters

If all Markdown content ships in the first bundle, the home page and document view both get heavier as your site grows.

Splitting metadata from article bodies keeps the initial experience lean while preserving a simple authoring workflow.
