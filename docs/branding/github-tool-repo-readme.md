# GitHub Tool Repo README

**Recommended first tool to open-source:** the unit converter. It's the most generally useful, the JS is self-contained (no framework), and "unit-converter" attracts the broadest searcher pool.

**Steps:**

1. In the `whatisdotsite` GitHub org, create a public repo named `unit-converter` (or similar).
2. Extract the conversion logic from `src/pages/unit-converter.astro` into a standalone JS module — the `units` object and the `convertTemp` function plus a tiny wrapper.
3. Add `index.html`, `style.css`, and `unit-converter.js` so it works as a standalone static page (GitHub Pages or any static host).
4. Add LICENSE (MIT) and `package.json`.
5. Paste the README below at the repo root.

The same approach can later spin out the compound interest calculator and word count tool. Each open-source repo is a separate crawlable backlink chain to whatis.site.

---

```markdown
# unit-converter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tool live at whatis.site](https://img.shields.io/badge/Live%20tool-whatis.site-blue)](https://whatis.site/unit-converter)

A free, no-dependency JavaScript unit converter. Supports length, mass, volume, temperature, area, time, speed, energy, pressure, and data storage. Pure client-side — no backend, no tracking, no external dependencies.

Live version: **[whatis.site/unit-converter](https://whatis.site/unit-converter)**

## Why this exists

We needed a unit converter for [whatis.site](https://whatis.site). The good ones online were heavy with ads or tracking; the lightweight ones were missing units. So we wrote one. This repo is the standalone version — usable as-is, embeddable, or forkable.

## Features

- **10 unit categories** with 70+ units total
- **Accurate** — conversion factors from SI definitions and NIST tables
- **Temperature** handled correctly as an offset scale (Celsius, Fahrenheit, Kelvin)
- **Imperial + metric** for length, mass, volume, area, etc.
- **Pure vanilla JS** — no React, no Vue, no build step
- **Tiny** — under 10 KB minified, zero dependencies
- **Accessible** — keyboard-navigable, semantic HTML, no JS popups

## Usage

### As a standalone page

```bash
git clone https://github.com/whatisdotsite/unit-converter.git
cd unit-converter
# Open index.html in a browser
```

Or serve it with any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

### As a module

```javascript
import { convert } from './unit-converter.js';

convert(1, 'm', 'ft', 'length'); // 3.2808399
convert(100, 'C', 'F', 'temperature'); // 212
convert(1, 'GB', 'GiB', 'data'); // 0.9313225746...
```

## Supported categories

| Category | Units |
|---|---|
| Length | mm, cm, m, km, in, ft, yd, mi, nmi |
| Mass | mg, g, kg, t, oz, lb, st, ton (US) |
| Volume | mL, L, m³, tsp, tbsp, fl oz, cup, pt, qt, gal (US/UK) |
| Temperature | °C, °F, K |
| Area | mm², cm², m², ha, km², in², ft², yd², acre, mi² |
| Time | ms, s, min, h, day, week, month, year |
| Speed | m/s, km/h, mph, ft/s, knot |
| Energy | J, kJ, cal, kcal, Wh, kWh, BTU |
| Pressure | Pa, kPa, MPa, bar, atm, mmHg, PSI |
| Data | bit, byte, KB, KiB, MB, MiB, GB, GiB, TB, TiB |

## Accuracy

Conversion factors are sourced from:
- [BIPM SI Brochure](https://www.bipm.org/en/publications/si-brochure)
- [NIST Special Publication 811](https://www.nist.gov/pml/special-publication-811)
- [IEC 60027-2](https://webstore.iec.ch/publication/97) for binary data units

Results are accurate to at least 6 significant figures for everyday use. For high-precision scientific or engineering work, use a domain-specific library.

## License

MIT. See [LICENSE](LICENSE).

## Contributing

Issues and PRs welcome. The conversion factors live in `unit-converter.js` and are pretty self-documenting.

## Related

- [whatis.site/compound-interest-calculator](https://whatis.site/compound-interest-calculator) — free compound interest calculator
- [whatis.site/word-count-reading-time-calculator](https://whatis.site/word-count-reading-time-calculator) — word count, reading time, Flesch-Kincaid grade level
- [whatis.site/free-tools](https://whatis.site/free-tools) — all our free tools
- [whatis.site/statistics](https://whatis.site/statistics) — citation-ready statistics roundups
```

---

## Optimization notes for the repo itself

A few details that make the repo more discoverable and more likely to earn stars:

1. **Topics:** add `unit-converter`, `javascript`, `vanilla-js`, `calculator`, `converter`, `no-dependencies`, `static-site` as repo topics. GitHub search uses these.
2. **About description:** "Free no-dependency unit converter for length, mass, volume, temperature, and 6 more categories. Pure client-side."
3. **Website field:** set to `https://whatis.site/unit-converter`.
4. **Pin the repo on the org profile.**
5. **Open one good issue** describing a future enhancement (e.g., "Add cooking-unit aliases"). Open repos with active issues feel maintained.
