# AI-Run, No-Outreach Backlink Plan (Claude Playbook)

## Goal

Start from **zero backlinks** and build a growing base of **earned links** over time,
without cold outreach.

Claude (Code + Cowork) should:

- Continuously research my niche and competitors.
- Design and publish **linkable assets** (stats pages, deep guides, tools, artifacts).
- Ensure strong internal linking, schema, and discovery.
- Maintain high-quality citations/directories and entity signals.
- Monitor and clean up backlinks over time.

No cold emails or DMs. No link schemes.

---

## 1. Foundation: Understand My Niche & Competitors

### 1.1 Market & SERP mapping

Tasks for Claude:

1. Use SEO tools (Ahrefs / Semrush / DataForSEO) or exported reports I provide to:
   - Identify my top competitors for the main topics.
   - Extract:
     - Their best-performing pages (organic traffic, backlinks).
     - Their "stats", "tools", "resources", and glossary pages.

2. Build a **"Linkable Assets Map"**:
   - For each competitor:
     - List URLs of:
       - Statistics pages
       - Definitive guides
       - Tools/calculators
       - Glossaries / resource hubs
     - Note:
       - Topics covered
       - Depth (word count, sections)
       - Approximate backlink count (from exports)

Output: `linkable-assets-map.md` summarizing what the market links to.

---

## 2. Strategy: Decide What We'll Build

### 2.1 Linkable asset strategy

Based on the assets map, Claude should propose:

- 3–5 **statistics pages** that could realistically earn links:
  - E.g., "{Year} {Niche} Statistics", segmented by region, company size, etc.
- 3–5 **deep guides / canonical explainers**:
  - Longform, near-book-chapter depth for key concepts.
- 1–3 **simple tools or calculators**:
  - Interactive or at least input→output tools that are genuinely useful.

For each proposed asset, Claude should define:

- Target keyword cluster
- Intended audience & use case (who would link to it and why)
- Brief outline (H1–H3 structure, sections, data sources where relevant)

Output: `linkable-assets-strategy.md`.

---

## 3. Production: Generate & Publish Assets

### 3.1 Stats pages

For each approved stats topic:

1. Claude drafts a **statistics article** that:
   - Is neutral and non-promotional (good for journalists & bloggers).
   - Aggregates and cites real external sources (studies, surveys, government data).
   - Includes:
     - Executive summary
     - Thematic sections (adoption, usage, growth, etc.)
     - Charts/tables structure (even if rendered as HTML/Markdown)

2. Claude ensures:
   - Target keyword in H1 and early in the body.
   - Clean internal structure (H2/H3 hierarchy).
   - Suggestions for internal links (where to link from within my site).

3. Publishing:
   - If using **Claude Artifacts**:
     - Generate the full page as an Artifact with optimized title/H1 and meta description.
   - If using my own site:
     - Generate:
       - Markdown/HTML content
       - `meta` tags
       - JSON-LD schema (WebPage + potentially FAQ)

---

### 3.2 Deep guides / canonical explainers

For each guide topic:

1. Claude creates:
   - Detailed outline.
   - 3–5k word draft (or larger if appropriate).
   - Code/examples/diagrams where relevant.

2. Claude adds:
   - Internal link suggestions to/from related posts.
   - FAQ and HowTo sections that can be turned into schema.

---

### 3.3 Tools and calculators

For each chosen tool idea:

1. Claude designs:
   - Input parameters and validation.
   - Core formula / logic.
   - UX outline (fields, labels, result area, optional chart/table).

2. Claude generates:
   - Frontend code (e.g., React / Svelte / plain JS).
   - Basic styling.
   - Documentation page explaining the tool and use cases.

3. I (optionally) deploy the tool.
   - Claude can generate deployment configs (Vercel/Netlify) and sitemap updates.

---

## 4. Distribution Without Outreach

Even without outreach, Claude should optimize discoverability:

### 4.1 Internal linking & site architecture

Claude tasks:

- Create an **internal linking map**:
  - For each new asset, recommend:
    - Inbound links (from existing pages).
    - Outbound links (to related content, tools).
- Propose additions to:
  - Main nav / footer / resources hub.
  - Sitemap and HTML index pages.

Goal: any user or crawler landing anywhere on the site can easily find these assets.

---

### 4.2 Profiles, directories, and entity building

Within "no outreach" constraints, Claude (with Cowork/browser) can:

1. Maintain a canonical **brand profile**:
   - Name, URL(s), logo, social links, one-line and long descriptions.

2. Create / update profiles on:
   - Major relevant directories (industry, SaaS, dev, local, etc.).
   - Author profiles for you (where relevant) on content platforms.

3. Ensure:
   - Consistent NAP/entity info (for Knowledge Graph and AI Overviews).
   - Links to key assets (stats pages, tools) where appropriate and allowed.

Note: avoid low-quality, auto-approve spam directories.

---

## 5. Monitoring & Iteration (Fully AI-Run)

### 5.1 Backlink detection & reporting

Claude should:

1. Periodically (e.g., weekly) analyze backlink exports from Ahrefs/Semrush/DataForSEO:
   - Identify **new links**.
   - Classify each new link by:
     - Type: editorial, citation, directory, tool reference, etc.
     - Quality: high / medium / low / spam.

2. Report:
   - Which of our assets are attracting links.
   - Which referring domains have potential for deeper collaboration (even if we don't do outreach now).

Output: `backlink-growth-report-YYYY-MM.md`.

---

### 5.2 Asset tuning

For underperforming assets, Claude should:

- Suggest improvements:
  - More up-to-date stats.
  - Better structure, examples, or visuals.
  - Additional internal links.

- Propose **new adjacent topics** based on what is earning links for competitors and similar sites.

---

## 6. Optional: AI Overview & Perplexity Optimization

Because links now also function as **"truth signals" for AI Overviews**, Claude should:

1. Analyze which sites AI Overviews and Perplexity currently cite in our niche.
2. Bias linkable asset topics towards gaps where:
   - Existing cited content is weak or outdated.
   - Our brand can provide better, fresher data.

This increases the odds that:
- Our assets are used as sources by AI systems.
- We gain visibility and indirect links when people cite those answers.

---

## 7. Implementation Notes

- Claude should handle:
  - Research, outlining, drafting, internal linking plans, schema, and profile copy.
  - File generation (Markdown/HTML/JSON-LD) and WordPress/import-ready formats.
- I will:
  - Approve and publish pages/tools.
  - Hook up SEO tools (Ahrefs/Semrush/DataForSEO) and provide exports.
  - Optionally seed a few posts in communities (not required for this plan).

No cold outreach is required; links are earned through **high-quality, AI-generated assets and consistent entity presence**, not direct asks.
