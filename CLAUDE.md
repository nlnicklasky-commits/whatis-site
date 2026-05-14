# WhatIs.site — Claude Code Operating Instructions

> **Bootstrapped by the setup agent** in `C:\Users\nlnic\Documents\Pre-project Builders`. Settings, hooks, and this CLAUDE.md were initialized from the starter kit.

## Project Overview

WhatIs.site is an educational content platform with 1,600+ "What Is..." articles. Built with Astro 5, deployed on Vercel, optimized for SEO, AI engine citation (GEO), and ad monetization.

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS 3 + @tailwindcss/typography
- **Deployment:** Vercel (auto-deploy on git push)
- **Content:** Markdown files with Zod-validated frontmatter in `src/content/articles/`
- **Images:** WebP, stored in `public/images/articles/`

## Architecture Rules

1. **Zero JavaScript by default.** Never add client-side JS unless absolutely required for interactivity.
2. **Content lives in git.** Articles are markdown files. No CMS, no database.
3. **Build-time computation.** TOC, reading time, related articles, link graph — all computed at build.
4. **Flat URL structure.** Articles at `site.com/[slug]`, categories at `site.com/category/[slug]`.

## Content Collection Schema

All articles must validate against the Zod schema in `src/content/config.ts`. Required fields:
- title, slug, description (max 160 chars), category, tags (2-8), heroImage, heroAlt
- datePublished, dateModified, readingTime, wordCount, tier (1/2/3)
- faq (min 3 items), externalSources, relatedArticles

## Content Tiers

| Tier | Word Count | Depth |
|------|-----------|-------|
| 1 | 3,000-5,000 | Definitive, comprehensive |
| 2 | 2,000-3,000 | Thorough coverage |
| 3 | 1,200-2,000 | Clear overview |

## Humanization Rules (CRITICAL)

### Banned Words — NEVER use these:
delve, tapestry, multifaceted, comprehensive, realm, landscape, paradigm, innovative, cutting-edge, leverage, utilize, harness, robust, pivotal, testament, cornerstone, underpinning, embark, navigate, foster, cultivate, synergy, holistic, dynamic, transformative, groundbreaking, spearhead, revolutionize, advent, plethora

### Banned Phrases — NEVER use these:
"it's important to note", "it's worth noting", "in today's world", "at its core", "in the realm of", "serves as a", "plays a crucial role", "it is important to understand", "one cannot overstate", "the power of", "when it comes to", "at the end of the day", "has become increasingly", "in an era of"

### Voice Rules:
- Write like a smart friend explaining something, not a textbook
- Use "you" and "your" — address the reader directly
- Include opinions: "frankly," "the weird part is," "here's what most people miss"
- Vary sentence length dramatically — fragments are fine
- Use em dashes, parenthetical asides, and conversational transitions
- Include specific numbers, dates, and facts (not vague claims)
- Every H2 should be varied in phrasing — never follow a formula

## SEO Rules

- Title tag: `{title} | WhatIs.site` (under 60 chars)
- Meta description: 150-160 chars from frontmatter `description`
- One H1 per page, H2 for sections, H3 for subsections, never skip levels
- 5-10 internal links per article, embedded naturally in text
- 2-5 external links to authoritative sources (.gov, .edu, Wikipedia)
- Canonical tag on every page
- Article, FAQPage, and BreadcrumbList schema on every article

## GEO Rules

- First paragraph must be citation-worthy (clean definition, under 3 sentences)
- Include statistics (improves AI citation by ~41%)
- FAQ answers should be self-contained and quotable
- Don't block any AI crawlers in robots.txt
- Keep llms.txt updated with top articles

## Ad Slots

Controlled by `PUBLIC_AD_NETWORK` env var. Currently set to `none`. Positions:
- header-leaderboard, in-content, sidebar-sticky, end-of-article, mobile-anchor

## File Locations

- Articles: `src/content/articles/*.md`
- Categories: `src/data/categories.json`
- Link graph: `src/data/link-graph.json`
- Topics master list: `data/topics-master.json`
- Article status tracking: `data/article-status.json`
- Audit reports: `data/audit-report.json`
- Edit log: `data/edit-log.json`
- Hero images: `public/images/articles/`

## Commands

```bash
npm run build      # Build the site — must pass before deploying
npm run dev        # Local dev server at localhost:4321
npm run preview    # Preview production build locally
npx astro check    # Type-check content collections
```

## Common Workflows

- **Generate article:** Research topic → write markdown → save to `src/content/articles/{slug}.md` → update `data/article-status.json`
- **Batch generate:** Read `data/topics-master.json` → filter ungenerated → write articles in batches of 50-100 → update status → build after each batch → commit and push after each successful build
- **Build link graph:** Read all articles → extract internal links → output `src/data/link-graph.json`
- **Audit:** Check all articles against quality/SEO/humanization rules → output `data/audit-report.json`
- **Edit:** Make surgical, targeted edits based on audit or feedback — never rewrite whole articles
- **Deploy:** `npm run build` → `git add/commit/push` → Vercel auto-deploys from main

## Subagents

Custom agents are in `.claude/agents/`:
- `article-writer.md` — Generates a single publication-ready article
- `content-auditor.md` — Audits articles for quality, SEO, and humanization compliance
- `build-deployer.md` — Builds, verifies, commits, and pushes for deployment

## Astro 5 Gotchas

These are known issues that have already been solved. DO NOT revert these patterns:

1. **Content collections use glob loader, NOT `type: 'content'`.**
   The schema in `src/content/config.ts` uses `loader: glob({ pattern: '**/*.md', base: './src/content/articles' })`.
   Do NOT change this to `type: 'content'` — it breaks the `slug` field.

2. **Rendering uses `render()` from `astro:content`, NOT `article.render()`.**
   In `src/pages/[...slug].astro`: `import { render } from 'astro:content'` then `const { Content, headings } = await render(article)`.
   Do NOT change this to `article.render()` — that method doesn't exist with the glob loader.

3. **Tailwind must be v3, NOT v4.**
   `@astrojs/tailwind@6` requires `tailwindcss@^3.0.24`. Do NOT upgrade to Tailwind v4.

4. **Hero images fall back to placeholder.**
   The ArticleLayout has `onerror="this.onerror=null;this.src='/images/articles/placeholder.svg'"`.
   Missing images show a blue placeholder, not broken image icons.

## Environment Variables (Vercel)

```
PUBLIC_SITE_URL=https://whatis.site
PUBLIC_SITE_NAME=WhatIs.site
PUBLIC_AD_NETWORK=none
```

## Environment

- **OS:** Windows 11 — PowerShell is the local shell. Do not assume macOS/Linux paths or tools on the client side.
- **User path:** C:\Users\nlnic\
- **Plan:** Claude Max subscription. NOT using the Anthropic API key. Do not reference ANTHROPIC_API_KEY or attempt API-key-based workflows.
- **Model:** Opus (set in .claude/settings.json)
- **GitHub:** github.com/nlnicklasky-commits — all repos live under this org
- **Email:** nl.nicklasky@gmail.com
- **SSH key (DigitalOcean):** C:\Users\nlnic\.ssh\digitalocean

## API Keys & Services

All secrets live in `.env` or `.env.local` at project root (gitignored). NEVER hardcode keys in source files or this CLAUDE.md.

Available service accounts (use whichever are relevant to this project):

| Service | Env Var(s) | What it's for |
|---------|-----------|---------------|
| **Vercel** | Vercel CLI auth | Deployment platform. Vercel org: `nick-laskys-projects`. Deploy with `vercel --prod`. |

## Conventions

- Astro 5 with static output only
- TailwindCSS v3 (NOT v4) — paired with @astrojs/tailwind@6
- Content collections use glob loader (not type: 'content')
- Rendering uses `render()` from 'astro:content', NOT `article.render()`
- Zero JavaScript by default — all features build-time computed
- All articles in markdown with Zod-validated frontmatter

## Working with Nick

- Give full, copy-pasteable commands. Never abbreviate or say "just SSH in" — paste the complete command with flags, paths, and env expansions in PowerShell-ready form.
- Be concise. Don't summarize what he just told you back to him.
- Notion is the source of truth for project state, roadmap, and data pipeline status. Search Notion before making assumptions about project status.
- When a step is slow or long-running, explain what's happening and set expectations on timing.
- Prefer practical, working code over theoretical explanations.

## Hooks (active via .claude/settings.json)

Defined in .claude/settings.json. Current setup allows specific build, dev, and git commands with full read/write/edit access.

## Project-Specific Notes

- Content tiers: Tier 1 (3-5K words, definitive), Tier 2 (2-3K, thorough), Tier 3 (1.2-2K, overview)
- Humanization rules enforced: no "delve/tapestry/paradigm" banned words, no generic phrases like "it's important to note"
- SEO requires first paragraph as citation-worthy (clean definition under 3 sentences)
- Articles: 1,600+ pieces in src/content/articles/
- Ad network disabled (PUBLIC_AD_NETWORK=none)

## SEO Tooling

Scripts in `scripts/seo/` and `scripts/audits/` for ongoing health:

- `scripts/seo/weekly-progress.mjs` — GSC snapshot of indexation, search totals, and sitemap status against a fixed 50-URL sample. Appends one row to `data/progress-log.json` per run. Needs `GOOGLE_SERVICE_ACCOUNT_JSON` and `GSC_SITE_URL` in `.env.local`.
- `scripts/audits/banned-words-scan.mjs` — Scans all articles against the banned words/phrases list. Writes `.audit-content-quality.json`.
- `scripts/audits/link-graph-audit.mjs` — Orphans, underlinked, bad related-article refs. Writes `.audit-link-graph.json`.
- `scripts/audits/image-audit.mjs` — Hero image sizes, alt text, orphans. Writes `.audit-images.json`.

All `.audit-*.json` files are gitignored scratch outputs.
