---
title: Site Configuration
summary: Control the brand, hero section, groups, and icons from one JSON file.
description: Site-level settings are kept in one place so they do not leak across components.
group: configuration
order: 1
tags:
  - config
  - groups
  - icons
---

The whole site is configured through `content/site.config.json`.

## What this file controls

- brand name and version selector labels
- home page title and description
- group titles, icons, order, and home page link counts

## Example

```json
{
  "brand": {
    "name": "Docs",
    "versionLabel": "Version: Free, Pro, & Team",
    "versions": ["Free, Pro, & Team", "Enterprise Cloud"]
  },
  "hero": {
    "title": "High-Performance Markdown Docs Template",
    "description": "Keep the UI and simplify the content pipeline."
  },
  "groups": [
    {
      "id": "getting-started",
      "title": "Getting Started",
      "icon": "Rocket",
      "order": 1,
      "homeLinks": 4
    }
  ]
}
```

## Group behavior

A group must exist in the config file first. After that, any document with the same `group` id will appear under that section in the home page and sidebar.
