import type {DocsManifest} from '../types';

export const docsManifest: DocsManifest = {
  "config": {
    "brand": {
      "name": "AsterDocs",
      "browserTitle": "AsterDocs Template",
      "versionMenu": {
        "enabled": false,
        "label": "Version",
        "items": [
          "Free, Pro, & Team",
          "Enterprise Cloud",
          "Enterprise Server 3.11"
        ]
      },
      "github": {
        "href": "https://github.com/shuakami/asterdocs-template",
        "title": "Open repository",
        "openInNewTab": true
      }
    },
    "hero": {
      "title": "High-performance Markdown documentation, without fighting your UI.",
      "description": "AsterDocs keeps the current visual style, pushes content and search into Markdown, and ships a production-ready GitHub Pages workflow with fast builds and simple configuration."
    },
    "groups": [
      {
        "id": "getting-started",
        "title": "Getting Started",
        "icon": "Rocket",
        "order": 1,
        "homeLinks": 4
      },
      {
        "id": "authoring",
        "title": "Authoring",
        "icon": "MessageSquare",
        "order": 2,
        "homeLinks": 4
      },
      {
        "id": "configuration",
        "title": "Configuration",
        "icon": "Settings",
        "order": 3,
        "homeLinks": 4
      },
      {
        "id": "navigation",
        "title": "Navigation",
        "icon": "Layout",
        "order": 4,
        "homeLinks": 4
      },
      {
        "id": "search",
        "title": "Search",
        "icon": "Search",
        "order": 5,
        "homeLinks": 4
      },
      {
        "id": "performance",
        "title": "Performance",
        "icon": "Cpu",
        "order": 6,
        "homeLinks": 4
      },
      {
        "id": "deployment",
        "title": "Deployment",
        "icon": "Globe",
        "order": 7,
        "homeLinks": 4
      },
      {
        "id": "extension",
        "title": "Extension",
        "icon": "Building",
        "order": 8,
        "homeLinks": 4
      }
    ],
    "document": {
      "showDescription": true
    }
  },
  "groups": [
    {
      "id": "getting-started",
      "title": "Getting Started",
      "icon": "Rocket",
      "order": 1,
      "homeLinks": 4,
      "docs": [
        "getting-started/overview",
        "getting-started/quick-start"
      ]
    },
    {
      "id": "authoring",
      "title": "Authoring",
      "icon": "MessageSquare",
      "order": 2,
      "homeLinks": 4,
      "docs": [
        "authoring/markdown-authoring"
      ]
    },
    {
      "id": "configuration",
      "title": "Configuration",
      "icon": "Settings",
      "order": 3,
      "homeLinks": 4,
      "docs": [
        "configuration/site-config"
      ]
    },
    {
      "id": "navigation",
      "title": "Navigation",
      "icon": "Layout",
      "order": 4,
      "homeLinks": 4,
      "docs": [
        "navigation/sidebar-and-toc"
      ]
    },
    {
      "id": "search",
      "title": "Search",
      "icon": "Search",
      "order": 5,
      "homeLinks": 4,
      "docs": [
        "search/site-search"
      ]
    },
    {
      "id": "performance",
      "title": "Performance",
      "icon": "Cpu",
      "order": 6,
      "homeLinks": 4,
      "docs": [
        "performance/performance-strategy"
      ]
    },
    {
      "id": "deployment",
      "title": "Deployment",
      "icon": "Globe",
      "order": 7,
      "homeLinks": 4,
      "docs": [
        "deployment/deployment"
      ]
    },
    {
      "id": "extension",
      "title": "Extension",
      "icon": "Building",
      "order": 8,
      "homeLinks": 4,
      "docs": [
        "extension/extensibility"
      ]
    }
  ],
  "docs": [
    {
      "slug": "getting-started/overview",
      "title": "Overview",
      "summary": "Understand the goal of the template before you start adding content.",
      "description": "This page explains the architecture so the next changes stay easy to maintain.",
      "groupId": "getting-started",
      "order": 1,
      "tags": [
        "template",
        "markdown",
        "performance"
      ],
      "excerpt": "This template keeps the current UI style, but replaces hard coded article content with a Markdown content system. If you",
      "headings": [
        {
          "id": "what-changed",
          "text": "What changed",
          "level": 2
        },
        {
          "id": "why-this-is-better",
          "text": "Why this is better",
          "level": 2
        },
        {
          "id": "content-is-easier-to-maintain",
          "text": "Content is easier to maintain",
          "level": 3
        },
        {
          "id": "search-is-no-longer-tied-to-page-markup",
          "text": "Search is no longer tied to page markup",
          "level": 3
        },
        {
          "id": "ui-stays-stable",
          "text": "UI stays stable",
          "level": 3
        },
        {
          "id": "suggested-workflow",
          "text": "Suggested workflow",
          "level": 2
        }
      ],
      "contentModule": "getting-started__overview"
    },
    {
      "slug": "getting-started/quick-start",
      "title": "Quick Start",
      "summary": "Run the project and add your first document with the smallest possible setup.",
      "description": "This page shows the minimum steps needed to start using the template.",
      "groupId": "getting-started",
      "order": 2,
      "tags": [
        "setup",
        "install",
        "docs"
      ],
      "excerpt": "Install dependencies Start development Before the dev server starts, the project runs npm run docs:build and generates t",
      "headings": [
        {
          "id": "install-dependencies",
          "text": "Install dependencies",
          "level": 2
        },
        {
          "id": "start-development",
          "text": "Start development",
          "level": 2
        },
        {
          "id": "add-a-document",
          "text": "Add a document",
          "level": 2
        },
        {
          "id": "important-frontmatter-fields",
          "text": "Important frontmatter fields",
          "level": 2
        },
        {
          "id": "rebuild-content-data",
          "text": "Rebuild content data",
          "level": 2
        }
      ],
      "contentModule": "getting-started__quick-start"
    },
    {
      "slug": "authoring/markdown-authoring",
      "title": "Markdown Authoring",
      "summary": "Learn how headings, code blocks, lists, and internal links work in this template.",
      "description": "The authoring rules are intentionally simple so content stays portable and stable.",
      "groupId": "authoring",
      "order": 1,
      "tags": [
        "markdown",
        "content",
        "headings"
      ],
      "excerpt": "Heading levels Headings drive three parts of the experience: in article anchor ids the right side table of contents sect",
      "headings": [
        {
          "id": "heading-levels",
          "text": "Heading levels",
          "level": 2
        },
        {
          "id": "code-blocks",
          "text": "Code blocks",
          "level": 2
        },
        {
          "id": "internal-links",
          "text": "Internal links",
          "level": 2
        },
        {
          "id": "images",
          "text": "Images",
          "level": 2
        }
      ],
      "contentModule": "authoring__markdown-authoring"
    },
    {
      "slug": "configuration/site-config",
      "title": "Site Configuration",
      "summary": "Control the brand, hero section, groups, and icons from one JSON file.",
      "description": "Site-level settings are kept in one place so they do not leak across components.",
      "groupId": "configuration",
      "order": 1,
      "tags": [
        "config",
        "groups",
        "icons"
      ],
      "excerpt": "The whole site is configured through content/site.config.json. What this file controls brand name and version selector l",
      "headings": [
        {
          "id": "what-this-file-controls",
          "text": "What this file controls",
          "level": 2
        },
        {
          "id": "example",
          "text": "Example",
          "level": 2
        },
        {
          "id": "group-behavior",
          "text": "Group behavior",
          "level": 2
        }
      ],
      "contentModule": "configuration__site-config"
    },
    {
      "slug": "navigation/sidebar-and-toc",
      "title": "Sidebar and TOC",
      "summary": "The sidebar and the table of contents are generated from config and Markdown headings.",
      "description": "Navigation becomes part of the content system instead of being hard-coded in the page.",
      "groupId": "navigation",
      "order": 1,
      "tags": [
        "sidebar",
        "toc",
        "anchors"
      ],
      "excerpt": "Sidebar generation The sidebar order comes from content/site.config.json, while article order comes from document frontm",
      "headings": [
        {
          "id": "sidebar-generation",
          "text": "Sidebar generation",
          "level": 2
        },
        {
          "id": "table-of-contents-generation",
          "text": "Table of contents generation",
          "level": 2
        },
        {
          "id": "unified-navigation-behavior",
          "text": "Unified navigation behavior",
          "level": 2
        }
      ],
      "contentModule": "navigation__sidebar-and-toc"
    },
    {
      "slug": "search/site-search",
      "title": "Site Search",
      "summary": "Search data is prepared during the build so runtime search stays light and simple.",
      "description": "This search approach is designed for docs templates that want low complexity and solid speed.",
      "groupId": "search",
      "order": 1,
      "tags": [
        "search",
        "index",
        "sections"
      ],
      "excerpt": "What goes into the index The build step adds these fields to the search index: document title summary description tags b",
      "headings": [
        {
          "id": "what-goes-into-the-index",
          "text": "What goes into the index",
          "level": 2
        },
        {
          "id": "why-this-stays-fast",
          "text": "Why this stays fast",
          "level": 2
        },
        {
          "id": "result-ranking",
          "text": "Result ranking",
          "level": 2
        }
      ],
      "contentModule": "search__site-search"
    },
    {
      "slug": "performance/performance-strategy",
      "title": "Performance Strategy",
      "summary": "The template focuses on build-time generation, light runtime logic, and on-demand article loading.",
      "description": "If this project is going to be your long-term template, the performance model should be clear from day one.",
      "groupId": "performance",
      "order": 1,
      "tags": [
        "performance",
        "lazy-loading",
        "build-time"
      ],
      "excerpt": "What the template does now Build time Markdown rendering Article HTML is prepared during the build, so the browser does ",
      "headings": [
        {
          "id": "what-the-template-does-now",
          "text": "What the template does now",
          "level": 2
        },
        {
          "id": "build-time-markdown-rendering",
          "text": "Build-time Markdown rendering",
          "level": 3
        },
        {
          "id": "on-demand-article-loading",
          "text": "On-demand article loading",
          "level": 3
        },
        {
          "id": "neighbor-prefetching",
          "text": "Neighbor prefetching",
          "level": 3
        },
        {
          "id": "why-this-matters",
          "text": "Why this matters",
          "level": 2
        }
      ],
      "contentModule": "performance__performance-strategy"
    },
    {
      "slug": "deployment/deployment",
      "title": "Deployment",
      "summary": "Understand what is generated during build and what should be checked before shipping.",
      "description": "This page explains the build pipeline and the safest release checklist for the template.",
      "groupId": "deployment",
      "order": 1,
      "tags": [
        "deployment",
        "build",
        "validation"
      ],
      "excerpt": "Build pipeline npm run build runs npm run docs:build first. That generates: the docs manifest, groups, and search index ",
      "headings": [
        {
          "id": "build-pipeline",
          "text": "Build pipeline",
          "level": 2
        },
        {
          "id": "recommended-checks",
          "text": "Recommended checks",
          "level": 2
        }
      ],
      "contentModule": "deployment__deployment"
    },
    {
      "slug": "extension/extensibility",
      "title": "Extensibility",
      "summary": "The template already separates content, config, generation, and runtime, so future changes stay manageable.",
      "description": "This page shows where to extend the template without undoing the current structure.",
      "groupId": "extension",
      "order": 1,
      "tags": [
        "extension",
        "multi-language",
        "content-source"
      ],
      "excerpt": "Current layers The project is already split into four clear layers: content: content/docs/ / .md config: content/site.co",
      "headings": [
        {
          "id": "current-layers",
          "text": "Current layers",
          "level": 2
        },
        {
          "id": "easy-next-steps",
          "text": "Easy next steps",
          "level": 2
        },
        {
          "id": "multi-language-docs",
          "text": "Multi-language docs",
          "level": 3
        },
        {
          "id": "stronger-search",
          "text": "Stronger search",
          "level": 3
        },
        {
          "id": "custom-markdown-blocks",
          "text": "Custom Markdown blocks",
          "level": 3
        },
        {
          "id": "remote-content-sources",
          "text": "Remote content sources",
          "level": 3
        }
      ],
      "contentModule": "extension__extensibility"
    }
  ],
  "defaultDocSlug": "getting-started/overview"
};
