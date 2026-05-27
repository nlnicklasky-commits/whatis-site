# FLUX 1.1 Pro Image Playbook & Hero QA — WhatIs.site

Author: AI Image Prompt Engineer · Target model: `black-forest-labs/flux-1.1-pro` via Replicate
Reference setup: `scripts/seo/gen-hero-images.mjs`

This is the working manual for generating artifact-free hero and in-content images. Part A is the prompt-engineering playbook. Part B is the QA verdict on the 5 heroes generated last session.

---

## Part A — Playbook

### A1. Why text artifacts happen, and what actually suppresses them

FLUX 1.1 Pro is unusually good at rendering legible text — which is exactly the problem. The moment a scene *implies* text (a sign, a newspaper, a calculator face, a book spine, a chart axis, a keyboard, a clock, a label), the model will try to fill that surface with characters. It usually fails, producing gibberish, mangled glyphs, or fake watermark-looking smears. The current script appends `no text, no words` to every prompt. That helps, but understand its real limits:

1. **FLUX 1.1 Pro (basic Replicate endpoint) has no `negative_prompt` input.** Confirm in `gen-hero-images.mjs`: the `input` object passes `prompt`, `aspect_ratio`, `width`, `height`, `output_format`, `output_quality`, `prompt_upsampling`, `safety_tolerance` — there is no negative field. So "no text, no words" lives *inside the positive prompt*.
2. **Negation inside a positive prompt is weak.** Diffusion models attend to tokens, not logic. "no text" can paradoxically *summon* text because the token "text" is now in the conditioning. It nudges, but it does not guarantee.
3. **The reliable lever is subject choice, not negation.** The single biggest win is never depicting a text-bearing object in the first place. You cannot get gibberish on a newspaper you never asked for.

**Rule of thumb:** suppress text by *composition*, reinforce with *phrasing*, and verify with *OCR*. All three. Never rely on phrasing alone.

#### Subjects to AVOID (text-prone — high artifact risk)
Keyboards, newspapers, magazines, street/store signage, book spines and open book pages, calculators, computer/phone screens with UI, dashboards, charts with axis labels, license plates, clocks/watch faces, product packaging, branded objects, whiteboards, sticky notes, documents and forms, certificates, banners.

#### Subjects that stay clean (text-free by nature)
Single physical objects (jar, seedling, piggy bank, coins shot from angles where faces aren't legible), natural materials, hands holding non-labeled objects, abstract light/particle fields, geometric forms, macro textures, landscapes, tools without markings, blurred backgrounds.

### A2. Prompt construction rules

1. **Lead with medium + composition.** `Editorial photograph,` or `Cinematic editorial render,` sets style consistency across the site.
2. **Name ONE clear hero subject.** Accessibility and scannability both want a single obvious focal point. Avoid cluttered multi-object scenes.
3. **Specify lighting explicitly** — `soft natural window light`, `soft daylight`, `rim light`. Lighting is what separates editorial-grade from stock-looking.
4. **Add depth of field** — `shallow depth of field`, `blurred background`. Blur destroys would-be text surfaces in the background before they form.
5. **Bias coins/medallions away from legibility** — `coins shown from the side / edge-on / stacked / slightly out of focus` so the model never tries to engrave a denomination.
6. **Reserve the right third for text overlay.** Heroes get titles overlaid in-template; keep the subject weighted to one side, negative space on the other.
7. **End with the suppression suffix** (below) every single time.
8. **Never request symbols/letters/glyphs as decoration.** This is what broke the LLM hero — see Part B.

#### Canonical suppression suffix (paste verbatim, every prompt)
```
clean composition, no text, no words, no letters, no numbers, no captions,
no logos, no watermark, no signature, no UI, no labels, no signage
```

### A3. Reusable master template

```
[STYLE: "Editorial photograph," or "Cinematic editorial render,"]
[ONE HERO SUBJECT, concrete and specific],
[SUPPORTING CONTEXT, kept minimal and text-free],
[LIGHTING], [DEPTH OF FIELD], [COLOR/TONE PALETTE],
[the concept it represents in plain words],
[negative space on one side for title overlay],
clean composition, no text, no words, no letters, no numbers, no captions,
no logos, no watermark, no signature, no UI, no labels, no signage
```

### A4. Ready category templates (8)

```
FINANCE
Editorial photograph, a single glass jar of mixed coins with one green
seedling sprouting from the top, coins shown edge-on and slightly out of
focus so no denomination is legible, soft natural window light, shallow
depth of field, warm gold and green tones, concept of money growing,
negative space on the left, clean composition, no text, no words, no
letters, no numbers, no captions, no logos, no watermark, no signage
```

```
TECHNOLOGY / AI
Cinematic editorial render, an abstract network of glowing light particles
coalescing into smooth organic flowing shapes, deep navy background with
electric blue and violet light, no symbols and no characters of any kind,
sense of emergence and computation, high detail, negative space on the
right, clean composition, no text, no words, no letters, no numbers, no
glyphs, no symbols, no logos, no watermark, no signage
```

```
SCIENCE
Editorial macro photograph, abstract laboratory glassware with a single
drop of colored liquid suspended mid-fall, clean white seamless background,
soft diffused studio light, shallow depth of field, cool clinical blue and
clear tones, sense of discovery and precision, clean composition, no text,
no words, no letters, no numbers, no labels, no logos, no watermark, no
signage
```

```
HISTORY
Cinematic editorial photograph, an aged textured parchment surface (blank,
no writing) beside a brass compass and a wax seal, warm candlelit tones,
shallow depth of field, dramatic side light, sense of the past and
discovery, blank surfaces only, clean composition, no text, no words, no
letters, no numbers, no script, no logos, no watermark, no signage
```

```
ARTS
Editorial photograph, an artist's palette with rich swirls of wet oil paint
and a single brush, warm studio light from the side, shallow depth of
field, vibrant saturated color palette, sense of creativity, blurred
background, clean composition, no text, no words, no letters, no numbers,
no signature, no logos, no watermark, no signage
```

```
HEALTH
Editorial photograph, a smooth ceramic mortar and pestle with fresh green
herbs and a few whole seeds, bright airy white kitchen setting, soft
diffused daylight, shallow depth of field, fresh clean green and white
tones, sense of wellness and natural care, clean composition, no text, no
words, no letters, no numbers, no labels, no logos, no watermark, no signage
```

```
SPORTS
Editorial photograph, a single worn leather ball on fresh green grass with
morning dew, low golden-hour side light, shallow depth of field, dynamic
diagonal composition, energetic warm tones, sense of motion and effort,
no jersey numbers, clean composition, no text, no words, no letters, no
numbers, no logos, no watermark, no signage
```

```
EVERYDAY CONCEPTS
Editorial photograph, a single steaming ceramic mug on a wooden table beside
a soft folded blanket, warm afternoon window light, shallow depth of field,
cozy muted earth tones, calm reassuring mood, blurred background, negative
space on one side, clean composition, no text, no words, no letters, no
numbers, no logos, no watermark, no signage
```

### A5. Best-practice parameters for `flux-1.1-pro`

Match the existing script and lock these:

| Param | Value | Why |
|---|---|---|
| `aspect_ratio` | `custom` | Required to pass explicit width/height. |
| `width` / `height` | `1344` × `768` | Exact 16:9 hero frame the layout expects (1.75:1). Avoids a re-crop that can clip the subject. |
| `output_format` | `webp` | Native site format; saves a conversion step. |
| `output_quality` | `90` from API, then re-encode to `82` in sharp | Generate rich, compress for delivery. |
| `prompt_upsampling` | `true` | FLUX expands the prompt — good for editorial richness, BUT it can re-introduce text concepts. If OCR flags creep up, **set `false`** and write a fuller manual prompt instead. This is the first knob to flip when fighting artifacts. |
| `safety_tolerance` | `2` | Conservative; fine for editorial. |
| `seed` | **add this** | Not currently passed. Add `seed: <int>` to `input` to make a good result reproducible and to A/B prompt tweaks against a fixed seed. Log the winning seed per slug. |

**Recommendation:** add a `seed` field to each job in `JOBS` so a passing image can be regenerated byte-stable and so prompt edits are isolated from RNG noise. Without it, every rerun is a fresh gamble.

### A6. QA / verification process (catch artifacts at scale before publishing)

**Stage 1 — Automated OCR text scan (the key control).** Run Tesseract over every generated `*-hero.webp` immediately after generation. Any meaningful character run = flag for human review. Tesseract reads WebP via a PNG step. Example gate to bolt onto the generator (run after `sharp` writes the file):

```bash
# one-off install: choco install tesseract  (Windows)
# convert + OCR each hero, flag any with detected character runs
for f in public/images/articles/*-hero.webp; do
  png="${f%.webp}.ocr.png"
  magick "$f" "$png"
  txt=$(tesseract "$png" stdout --psm 11 2>/dev/null | tr -d '[:space:]')
  if [ ${#txt} -ge 3 ]; then echo "FLAG $f -> '$txt'"; fi
  rm -f "$png"
done
```

Tune the threshold: `--psm 11` (sparse text) catches floating glyphs; a 3+ character run is the practical flag line (1–2 chars are usually false positives from coin edges or bokeh). Anything flagged does NOT publish until a human clears it or it's regenerated.

**Stage 2 — Human spot-check checklist (every image, 20 seconds each):**
- [ ] **Text:** zero legible words, letters, numbers, glyphs, or symbols anywhere — including blurred background and object faces (coins, screens, spines).
- [ ] **Pseudo-text:** no gibberish that *looks* like a language or a watermark/signature smear.
- [ ] **Watermark/logo:** no corner stamp, no embossed brand, no stock-site overlay.
- [ ] **Anatomy (if any people/hands):** correct finger count, natural joints, no fused digits, plausible eyes/teeth, no uncanny face. *Prefer subjects with no people at all for hero images — it removes the entire anatomy risk class.*
- [ ] **Subject clarity:** one obvious focal point; reads at thumbnail (400px) size for accessibility.
- [ ] **Framing:** subject respects negative space for title overlay; nothing critical cropped at 1344×768.
- [ ] **Style consistency:** editorial photographic or cinematic render, matches sibling articles.
- [ ] **Lighting/quality:** no banding, no obvious upscaling mush, no plastic skin.

**Stage 3 — Log the seed** of every PASS so it can be regenerated and so it's traceable.

---

## Part B — QA of the 5 existing heroes

Verdicts from direct visual inspection of each file at full resolution.

### 1. `compound-interest-hero.webp` — **PASS**
Glass jar of coins with a seedling, soft window light, shallow depth of field, blurred green background. Clean single subject, good negative space on the left for a title. Coins are angled/overlapping so no denomination text resolves. No watermark, no people, no anatomy risk, no legible text. Textbook editorial hero. Ship it.

### 2. `interest-rate-hero.webp` — **FIX**
Composition is attractive (coin stacks rising into a gold arrow), but it has the predicted problems from the text-prone scene:
- The **calculator** at left shows garbled, nonsensical key glyphs — the digits and symbols on the keys are mangled (the kind of fake-character artifact that fails QA and looks AI-generated on close inspection).
- The **newspaper** in the background is covered in pseudo-text smears that read as gibberish columns.
- Coin faces carry faint illegible engravings.
This is exactly the calculator + newspaper double-risk the brief flagged. **FIX** — drop both text-bearing objects entirely.

**Improved prompt:**
```
Editorial photograph, three rising stacks of gold coins on a clean glossy
desk with a single smooth golden upward arrow rising above them, coins shown
edge-on and stacked so no faces are legible, soft daylight, muted
professional blue and grey tones, shallow depth of field, blurred clean
background with no objects, concept of rising percentages and borrowing
cost, negative space on the right, clean composition, no calculator, no
newspaper, no text, no words, no letters, no numbers, no labels, no logos,
no watermark, no signage
```

### 3. `savings-hero.webp` — **PASS (minor watch-item)**
Ceramic piggy bank, stacked and scattered coins, a closed book, warm cozy desk light. Single clear subject, reassuring tone, strong thumbnail readability. No legible text. Two small things, neither disqualifying: the book is a blank-spine closed book (good — no gibberish title), and a couple of coin faces have faint pseudo-engraving. None of it resolves into characters, so it **passes**. If regenerating for any other reason, specify `coins edge-on, blank book` to fully remove the residual risk.

### 4. `generative-ai-hero.webp` — **PASS**
Abstract particle/light field — flowing blue and violet waves of glowing dots on a deep navy background. No subject that could carry text, no people, no anatomy, no symbols, no watermark. Exactly the kind of text-free abstract that's safe for the technology/AI category. Clean and on-brand. Ship it.

### 5. `large-language-model-hero.webp` — **FIX**
This is the worst offender and confirms the brief's warning. The prompt literally asked for *"abstract streams of glowing letters and characters."* FLUX delivered: the lattice is studded with **floating glyph-like characters** — Greek-ish letters (delta/lambda-like forms), pi-like marks, and assorted mangled symbols glowing orange. They are not real words, but they are unmistakably letter/symbol artifacts, and an OCR pass would flag them. **FIX** — the root cause is the prompt requesting letters; the fix is to convey "language as data" through *abstraction*, never literal characters.

**Improved prompt:**
```
Cinematic editorial render, an abstract luminous lattice of interconnected
glowing nodes and flowing light threads, deep blue and teal tones with warm
amber accents, smooth particle streams suggesting information moving through
a network, no symbols and no characters of any kind, sense of language
becoming data conveyed purely through flowing abstract light, high detail,
clean composition, no text, no words, no letters, no numbers, no glyphs, no
symbols, no logos, no watermark, no signage
```
Note the doubled defense: removed "letters and characters" from the subject, and explicitly negated `glyphs` and `symbols` in the suffix. After regenerating, run the Stage-1 OCR gate to confirm zero character runs before publishing.

---

### Summary scorecard

| Image | Verdict | Primary issue |
|---|---|---|
| compound-interest | PASS | — |
| interest-rate | **FIX** | Garbled calculator keys + gibberish newspaper |
| savings | PASS | Minor coin-face pseudo-engraving (non-blocking) |
| generative-ai | PASS | — |
| large-language-model | **FIX** | Floating glyph/letter artifacts (prompt requested letters) |

**Process takeaway:** both failures trace to text-prone subject choices baked into the original prompts (a calculator, and a literal request for "letters and characters"). The playbook's first rule — suppress by composition, not just phrasing — would have prevented both. Add the OCR gate (A6) so the next batch can't ship a glyph artifact unnoticed.
