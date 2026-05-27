# Monetization Activation Plan — WhatIs.site

**Role:** UX/Performance & Monetization Engineer
**Status:** Strategy only. Ads stay OFF (`PUBLIC_AD_NETWORK=none`) until traffic justifies them. Nothing in this plan ships now.

The honest headline: traffic is near-zero because of the indexation problem. No network selection, RPM model, or activation switch matters until pages get indexed and sessions arrive. This plan is sequenced to that reality — the "turn it on" step sits at the *end*, gated on real pageview milestones, not on a calendar date.

---

## 1. Readiness assessment — what's wired vs missing

**What exists.** The slot scaffolding is solid and already placed:

- `src/components/AdSlot.astro` is a presentational container keyed by `position` (`header-leaderboard | in-content | sidebar-sticky | end-of-article | mobile-anchor`). It reads `import.meta.env.PUBLIC_AD_NETWORK` and renders **nothing** when the value is `'none'` (current state).
- All five positions are placed in `src/layouts/ArticleLayout.astro` (lines 66, 108, 132, 158, 163). `header-leaderboard` is also in `CategoryLayout.astro` (line 80).
- When enabled, each slot emits `<div class="ad-slot …" data-ad-position data-ad-network aria-label="Advertisement">`. Positioning classes are reasonable (sidebar is `sticky top-64`, mobile-anchor is `fixed bottom-0 … z-50 lg:hidden`).

**What's missing — the whole back half.** The component is a *box*, not an ad. Specifically:

1. **No network loader script.** `BaseLayout.astro` `<head>` (lines 21–92) has zero ad-script injection. AdSense/Ezoic/Mediavine all need a `<script>` in `<head>` or before `</body>`. That hook does not exist.
2. **No per-slot ad unit IDs.** The inner div is empty (comments only, AdSlot.astro lines 25–28). AdSense needs `<ins class="adsbygoogle" data-ad-client data-ad-slot>` per unit; nothing maps positions → unit IDs.
3. **No reserved height.** Slot wrappers carry margin classes but **no `min-height`**. Injecting ads into zero-height boxes will shift content downward — a direct CLS hit (see §4).
4. **`ads.txt` not present** in `public/`. AdSense and every premium network require it before they'll fill or approve.
5. **No consent layer.** No CMP/GDPR consent string. Required for EEA/UK fill and for AdSense in those geos.

**What "turn it on" looks like (copy-ready notes — do NOT ship now):**

- Set env in Vercel: `PUBLIC_AD_NETWORK=adsense` (then `mediavine` / `raptive` later).
- Add to `BaseLayout.astro` head slot, gated:
  `{adNetwork === 'adsense' && <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX" crossorigin="anonymous" />}`
- In `AdSlot.astro`, branch on `adNetwork`: render `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXX" data-ad-slot={slotIdMap[position]} data-ad-format="auto" data-full-width-responsive="true" />` plus a one-line push script, mapping each `position` to a real AdSense unit ID.
- Add `min-height` to each `positionClasses` entry (e.g. `min-h-[90px]` header, `min-h-[250px]` in-content/sidebar, `min-h-[100px]` mobile-anchor) to pre-reserve space.
- Add `public/ads.txt` with the network's authorized-seller line.

Effort to make it live once approved: roughly **half a day of engineering** (script hook, slot ID map, min-heights, ads.txt) plus the network's review window. The architecture is ready; the wiring is not.

---

## 2. Network selection — realistic options

For a brand-new high-pageview educational site, networks are tiered by **traffic gates**, not by who you'd prefer:

| Network | Entry gate | Approx. RPM (content/edu) | Notes |
|---|---|---|---|
| **Google AdSense** | None (just approval) | $3–$12 | Start here. Low gate, decent fill, easy slot wiring. Approval needs real content + `ads.txt` + privacy policy. |
| **Ezoic** | ~10k visits/mo (Access Now removes hard floor) | $8–$18 | Mid-tier. AI placement testing, but heavier scripts — watch CWV. Good bridge before premium. |
| **Mediavine** | **50k sessions/30 days** | $15–$35 | Premium. Strong content-site RPMs, good UX defaults. |
| **Raptive (AdThrive)** | **100k pageviews/mo** | $20–$40+ | Top tier. Highest RPMs, hands-on, strict quality bar. |

RPM ranges are directional for English, US-heavy, informational traffic; reference/educational verticals sit at the lower-to-middle end of display RPMs, well below finance or insurance.

**Non-ad options that fit this content:**

- **Contextual affiliate inside articles** — the best non-display lever here. 1,620 articles across tech, science, and finance map cleanly to relevant offers (tools, courses, books). Tech/software explainers → SaaS or hosting affiliate; finance explainers → broker/budgeting tools; any topic → Amazon/Bookshop book links via the existing `externalSources` / "Further Reading" block. This monetizes the long tail that display under-serves.
- **Sponsorships / sponsored explainers** — viable only after the site has authority and traffic in a niche; premature now.
- **Newsletter capture → later sponsorship** — build the list during traffic ramp; monetize once it has scale.

**Recommendation:** AdSense + lightweight in-article affiliate at first traffic, graduate to Mediavine at 50k sessions, Raptive at 100k+ pageviews.

---

## 3. Revenue projection model

Footprint: **1,620 articles, 25 categories.** Assume the indexation fix lands and pages rank gradually. Modeling on **monthly sessions** and a blended **session RPM** (display + light affiliate). Roughly 1.3 pageviews/session for informational traffic.

| Scenario | Avg sessions/article/mo | Monthly sessions | Network tier | Blended RPM | Est. monthly revenue |
|---|---|---|---|---|---|
| **Pessimistic** | ~6 | ~10k | AdSense | $6 | **~$60–$80** |
| **Base** | ~30 | ~50k | Mediavine | $18 | **~$900–$1,100** |
| **Optimistic** | ~75 | ~120k | Raptive | $28 | **~$3,300–$3,800** |

These are *post-recovery steady-state* figures, not month-one. A 1,600-article reference site that indexes and earns even 30 sessions/article/month is a credible base case; that's where the meaningful money starts.

**Pageview milestones that unlock better economics:**

- **~10k visits/mo** → Ezoic eligible (optional bridge).
- **50k sessions/30 days** → Mediavine — the single biggest RPM jump; prioritize hitting this.
- **100k pageviews/mo** → Raptive — top-tier RPMs.

The takeaway: revenue is roughly linear in sessions but *steps up* at each network gate. Chasing the 50k-session Mediavine threshold is worth more than squeezing AdSense.

---

## 4. Sequenced activation timeline + UX / CWV guardrails

Tied to **traffic milestones**, not dates. Each phase gates on the previous.

**Phase 0 — Now (sessions ≈ 0): do nothing on ads.**
Keep `PUBLIC_AD_NETWORK=none`. Every hour goes to indexation recovery. Turning ads on now adds CWV risk and approval baggage for ~$0 return. Do prepare paperwork in the background: privacy policy, cookie/consent notice, and draft `ads.txt`.

**Phase 1 — First real traffic (~1k–5k sessions/mo): AdSense + affiliate, conservatively.**
Apply to AdSense once indexation produces steady traffic. Enable **2–3 slots only** — `in-content` and `end-of-article` (and `header-leaderboard` if LCP holds). Skip `mobile-anchor` and `sidebar-sticky` initially. Begin adding contextual affiliate links to high-traffic articles.

**Phase 2 — Mid traffic (~10k–50k sessions/mo): optimize density.**
Optionally trial Ezoic as a bridge, or stay on AdSense and tune. Add `sidebar-sticky` (desktop) and `mobile-anchor` (mobile) once min-heights are in. Watch viewability and CWV after every change.

**Phase 3 — 50k+ sessions: migrate to Mediavine; 100k+ pageviews: Raptive.**
This is the real revenue inflection. Premium networks manage density and CWV better than hand-rolled AdSense, so the migration improves both RPM and UX.

**Core Web Vitals trade-offs (non-negotiable — protect the SEO that earns the traffic):**

- **CLS:** Every slot needs reserved `min-height` *before* any script loads. The current slots have none — this is the #1 fix before enabling. `mobile-anchor` (`fixed bottom-0`) must not overlap content; reserve bottom padding on `<main>` when active.
- **LCP:** The hero image is `loading="eager" fetchpriority="high"` (ArticleLayout 95–96). Ad scripts must load `async` and never compete with the hero. Keep `header-leaderboard` *below* the LCP element or lazy-load it. Avoid render-blocking ad JS in `<head>`.
- **INP/main-thread:** Ad scripts are heavy. Lazy-load below-fold slots (IntersectionObserver or network-native lazy load) so off-screen ads don't block interaction.
- **Density discipline:** Cap visible ads to ~1 per viewport-and-a-half. Five slots firing at once on mobile would tank both CWV and bounce. Enable incrementally and measure.

**Bottom line:** the slot system is well-placed but unfinished, and the timeline is correct only if it stays gated on traffic. Fix indexation, let sessions arrive, then flip AdSense on with reserved heights — and treat the 50k-session Mediavine threshold as the goal that actually moves revenue.
