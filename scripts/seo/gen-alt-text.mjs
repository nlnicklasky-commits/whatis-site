// gen-alt-text.mjs — Vision-captioning pipeline for hero alt text.
//
// Reads each article's heroImage + title from src/content/articles/*.md,
// sends the actual hero .webp (as a base64 data URI) to Replicate's
// lucataco/moondream2 vision model with the alt-generation prompt from
// out/<run>/t2-plan.md §1c, cleans the caption -> alt per §2, and writes
// an incremental, resumable {slug -> alt} map to out/<run>/alt-text.json
// plus a per-slug QA sidecar out/<run>/alt-text-qa.json.
//
// A wrong description is worse than a generic one (audit §3): any
// LOW_CONFIDENCE / empty / too-short / fabrication / banned-word case
// falls back to the existing truthful heroAlt, tagged source:"fallback".
//
// The 5 known AI heroes are pre-seeded (source:"known-ai") and skipped.
// This script NEVER edits article markdown — it only produces the dataset
// a separate downstream task consumes.
//
// Run from project root:
//   node scripts/seo/gen-alt-text.mjs                 # all undone slugs
//   node scripts/seo/gen-alt-text.mjs abacus surfing  # only these slugs
//   node scripts/seo/gen-alt-text.mjs --limit 40      # first 40 undone slugs
//   node scripts/seo/gen-alt-text.mjs --limit 40 --pilot   # pilot stratum
//   node scripts/seo/gen-alt-text.mjs --concurrency 8
//
// Resumable: slugs already present in alt-text.json are skipped, so a
// crash / rate-limit / Ctrl-C never loses completed work.

import {
  readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');

config({ path: path.join(REPO_ROOT, '.env') });

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const TOKEN = process.env.REPLICATE_API_TOKEN;
// moondream2: cheapest credible instruction-following VLM on Replicate
// (~$0.0012/run, ~2 s). The model-name predictions endpoint 404s for this
// model, so we use the versioned /v1/predictions endpoint with the hash.
const MODEL_OWNER_NAME = 'lucataco/moondream2';
const MODEL_VERSION = '72ccb656353c348c1385df54b237eeb7bfa874bf11486cf0b9473e691b662d31';
const COST_PER_RUN = 0.0012; // USD, per replicate.com/lucataco/moondream2

const RUN_ID = 'r-1779838900';
const OUT_DIR = path.join(REPO_ROOT, 'out', RUN_ID);
const DATA_PATH = path.join(OUT_DIR, 'alt-text.json');
const QA_PATH = path.join(OUT_DIR, 'alt-text-qa.json');

const ARTICLES_DIR = path.join(REPO_ROOT, 'src', 'content', 'articles');
const IMAGES_DIR = path.join(REPO_ROOT, 'public', 'images', 'articles');
const PLACEHOLDER = 'placeholder.svg';

const MAX_LEN = 125;
const MIN_LEN = 12;       // chars; below this -> fallback
const MIN_WORDS = 6;      // words; below this -> needsReview (terse/vague)
const MAX_RETRIES = 3;
const FLUSH_EVERY = 10;   // persist the map every K completions

// ---------------------------------------------------------------------------
// Banned words/phrases — mirrors scripts/audits/banned-words-scan.mjs + CLAUDE.md
// ---------------------------------------------------------------------------
const BANNED_WORDS = [
  'delve', 'tapestry', 'multifaceted', 'comprehensive', 'realm', 'landscape',
  'paradigm', 'innovative', 'cutting-edge', 'leverage', 'utilize', 'harness',
  'robust', 'pivotal', 'testament', 'cornerstone', 'underpinning', 'embark',
  'navigate', 'foster', 'cultivate', 'synergy', 'holistic', 'dynamic',
  'transformative', 'groundbreaking', 'spearhead', 'revolutionize', 'advent',
  'plethora',
];
const BANNED_PHRASES = [
  "it's important to note", "it's worth noting", "in today's world",
  "at its core", "in the realm of", "serves as a", "plays a crucial role",
  "it is important to understand", "one cannot overstate", "the power of",
  "when it comes to", "at the end of the day", "has become increasingly",
  "in an era of",
];
const bannedWordRe = new RegExp(
  '(?<![A-Za-z0-9_-])(' + BANNED_WORDS.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')(?![A-Za-z0-9_-])',
  'i',
);

// ---------------------------------------------------------------------------
// Pre-seeded known AI heroes (plan §5). source:"known-ai", skipped by the run.
// CAVEAT (plan §5): interest-rate & large-language-model were FIX-verdicts;
// these alts match the FIXED renders. Only locked here per the plan's pre-seed
// instruction — if the old files were still live, the downstream editor should
// re-run them through the vision path.
// ---------------------------------------------------------------------------
const KNOWN_AI = {
  'compound-interest': 'Glass jar of mixed coins with a green seedling sprouting from the top',
  'interest-rate': 'Rising stacks of gold coins beside a smooth golden upward arrow',
  savings: 'Ceramic piggy bank beside stacked coins and a closed book on a wooden desk',
  'generative-ai': 'Flowing blue and violet light particles on a deep navy background',
  'large-language-model': 'Glowing lattice of connected nodes and light threads in blue and amber',
};

// ---------------------------------------------------------------------------
// Pilot stratum (plan §6): concrete nouns, abstractions, audit hand-checks,
// known-AI siblings — stratified across categories/tiers/image types.
// ---------------------------------------------------------------------------
// All 40 confirmed-present in src/content/articles; stratified across
// categories, tiers (t1/t2/t3), and image types (concrete nouns, crafts,
// abstractions, audit hand-checks).
const PILOT_SLUGS = [
  // obviously-photographable concrete nouns / activities
  'abacus', 'surfing', 'grilling', 'archery', 'baking', 'gardening',
  'calligraphy', 'cartography', 'camping', 'basketball', 'american-football',
  // crafts (everyday-concepts / arts)
  'blacksmithing', 'bookbinding', 'beadwork', 'wood-carving', 'ballet',
  // audit hand-checked
  'crystallography', 'digital-photography',
  // abstractions / hard-to-depict (philosophy / finance / social)
  'philosophy', 'ethics', 'aesthetics', 'capitalism', 'sociology',
  'cognitive-bias', 'social-psychology',
  // science / technical (tier 1/2)
  'algorithms', 'artificial-intelligence', 'acoustics', 'aerodynamics', 'anatomy',
  // history / religion
  'alchemy', 'astrology', 'buddhism', 'islam', 'theology',
  // business / law / nature
  'accounting', 'marketing', 'family-law', 'wine-tasting', 'wildlife-conservation',
];

// ---------------------------------------------------------------------------
// Prompt template (plan §1c). {TOPIC} is context, never an instruction to assert.
// ---------------------------------------------------------------------------
function buildPrompt(topic) {
  return `You are writing alt text for the hero photo of an encyclopedia article about "${topic}".

Describe ONLY what is actually visible in this image: the main subject, the setting, and one notable visual detail. Write a single concrete noun phrase a sighted person would say when glancing at the photo.

Rules:
- 6 to 16 words. No sentence; no "is/are" definition of the topic.
- Do NOT begin with "an image of", "a photo of", "this shows", or similar.
- Mention "${topic}" ONLY if that exact thing is clearly visible in the frame. If the photo is abstract, generic, or unrelated, describe what you actually see and do not force the topic in.
- Do NOT invent text, brand names, numbers, dates, or any detail you are not sure is in the image. If you cannot identify the subject with confidence, reply with exactly: LOW_CONFIDENCE

Alt text:`;
}

// ---------------------------------------------------------------------------
// Frontmatter parsing — read title, heroImage, heroAlt, category, tier.
// We only read the three load-bearing fields + category/tier for stratifying;
// we never modify the markdown.
// ---------------------------------------------------------------------------
function fmField(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!m) return '';
  return m[1].trim().replace(/^['"]|['"]$/g, '');
}

function topicFromTitle(title) {
  // "What Is Abacus?" -> "abacus"; strip leading "What Is/Are", trailing "?".
  let t = title.replace(/^what\s+(is|are)\s+/i, '').replace(/\?+\s*$/, '').trim();
  return t || title;
}

function loadArticles() {
  const files = readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  const out = [];
  for (const f of files) {
    const raw = readFileSync(path.join(ARTICLES_DIR, f), 'utf8');
    if (!raw.startsWith('---')) continue;
    const end = raw.indexOf('\n---', 3);
    const fm = end === -1 ? raw : raw.slice(0, end);
    const slug = fmField(fm, 'slug') || f.replace(/\.md$/, '');
    out.push({
      slug,
      title: fmField(fm, 'title'),
      heroImage: fmField(fm, 'heroImage'),
      heroAlt: fmField(fm, 'heroAlt'),
      category: fmField(fm, 'category'),
      tier: fmField(fm, 'tier'),
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Caption -> alt cleaning pipeline (plan §2). Pure string ops, order matters.
// Returns { alt, source, reason?, needsReview, flags[] }.
// ---------------------------------------------------------------------------
// "an image of", "the photo showing", "the image shows", "a close-up of", etc.
// The connector set includes bare "shows"/"depicts"/"features"/"contains"/"is"/"appears"
// because moondream emits "The image shows …", "The picture depicts …".
const FILLER_PREFIX_RE = /^\s*(?:an?\s+|the\s+|this\s+)?(?:image|photo|picture|photograph|illustration|close[-\s]?up|shot|view|rendering|render|graphic|scene)\s+(?:of|showing|shows|depicting|depicts|that\s+shows|with|features|featuring|contains|is(?:\s+(?:of|a|an))?|appears\s+to\s+(?:show|be))\b[:,]?\s*/i;
// Sentence-style lead-ins: "the main subject is/of", "here we see", "it shows", "we can see".
const FILLER_BARE_RE = /^\s*(?:the\s+main\s+subject\s+(?:is|of|appears(?:\s+to\s+be)?)|here\s+(?:is|we\s+see)|(?:we|you)\s+can\s+see|it\s+(?:is|shows|depicts)|depicting|featuring|showing|pictured\s+(?:is|here))\b[:,]?\s*/i;
const TRAILING_META_RE = /\s*(?:,?\s*(?:used\s+in|for)\s+the\s+article(?:\s+about[^.]*)?|—\s*alt\s+text|\.\s*alt\s+text)\s*$/i;
const FABRICATION_RE = /(\d{2,})|["“”'']{1}[^"“”'']{3,}["“”'']{1}|[™®©]/;

function cleanCaption(raw, existingAlt, topic, topicIsConcrete) {
  const flags = [];
  const fallback = (reason) => ({
    alt: existingAlt, source: 'fallback', reason, needsReview: true, flags: [...flags, reason],
  });

  if (raw == null) return fallback('empty-output');
  // 1. Trim, collapse whitespace, strip wrapping quotes.
  let s = String(raw).replace(/\s+/g, ' ').trim();
  s = s.replace(/^["“”'']+|["“”'']+$/g, '').trim();

  // 2. Sentinel / empty / too-short check.
  if (/^LOW_CONFIDENCE$/i.test(s)) return fallback('low-confidence');
  if (s === '') return fallback('empty-output');

  // 3. Strip leading filler prefixes (repeat until none match).
  for (let i = 0; i < 4; i += 1) {
    const before = s;
    s = s.replace(FILLER_PREFIX_RE, '').replace(FILLER_BARE_RE, '');
    if (s === before) break;
  }
  s = s.trim();

  // 4. Strip trailing meta.
  s = s.replace(TRAILING_META_RE, '').trim();

  // re-check too-short after stripping.
  if (s.length < MIN_LEN) return fallback('too-short');

  // 8. Fabrication guard (before casing/capping so we judge the model output).
  if (FABRICATION_RE.test(s)) return fallback('fabrication-marker');

  // 9. Banned filler / humanization guard.
  if (FILLER_PREFIX_RE.test(s) || FILLER_BARE_RE.test(s)) return fallback('residual-filler');
  if (bannedWordRe.test(s)) return fallback('banned-word');
  const lowerForPhrase = s.toLowerCase();
  if (BANNED_PHRASES.some((p) => lowerForPhrase.includes(p))) return fallback('banned-phrase');

  // 6. No trailing terminal punctuation (do this before casing the cap).
  s = s.replace(/[.!?;:]+\s*$/g, '').trim();

  // 5. Sentence case — uppercase first letter only; leave the rest intact.
  s = s.charAt(0).toUpperCase() + s.slice(1);

  // 7. Hard cap 125 at a clean word boundary.
  if (s.length > MAX_LEN) {
    let cut = s.slice(0, MAX_LEN);
    const lastSpace = cut.lastIndexOf(' ');
    if (lastSpace > 0) cut = cut.slice(0, lastSpace);
    // drop an orphaned trailing connector
    cut = cut.replace(/[,]\s*$/, '').replace(/\s+(and|with|on|of|a|the|in|to|for|at)$/i, '');
    cut = cut.replace(/[,]\s*$/, '').trim();
    s = cut;
    flags.push('capped-125');
  }

  // final empties / too-short guard after capping.
  if (s.length < MIN_LEN) return fallback('too-short-after-cap');

  // 10. Not-a-description guard. The model sometimes echoes the topic instead
  // of describing the frame ("Cognitive Bias", "Marketing strategies"). A
  // string that is essentially just the topic word(s) is not alt text — it
  // describes nothing visible — so fall back to the truthful existing alt.
  if (topic) {
    const norm = (x) => x.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
    const altN = norm(s);
    const topicN = norm(topic);
    const extra = altN.replace(topicN, '').trim();
    // If removing the topic phrase leaves <= 1 short trailing word, it is a
    // topic echo (e.g. "marketing strategies" -> "strategies"), not a scene.
    if (altN === topicN || (altN.startsWith(topicN) && extra.split(' ').filter(Boolean).length <= 1 && extra.length <= 12)) {
      return fallback('topic-echo-not-description');
    }
  }
  // 10b. Identical-to-existing guard.
  if (s.toLowerCase() === String(existingAlt).toLowerCase()) return fallback('identical-to-existing');

  // Tier-2 needsReview signals (do not block the write).
  let needsReview = false;
  const wordCount = s.split(/\s+/).filter(Boolean).length;
  if (wordCount < MIN_WORDS) { needsReview = true; flags.push('terse-under-6-words'); }
  if (topicIsConcrete && topic) {
    const topicWords = topic.toLowerCase().split(/[\s-]+/).filter((w) => w.length > 3);
    const altLower = s.toLowerCase();
    const present = topicWords.length === 0 || topicWords.some((w) => altLower.includes(w));
    if (!present) { needsReview = true; flags.push('topic-not-present'); }
  }

  return { alt: s, source: 'vision', needsReview, flags };
}

// Heuristic: is the topic a concrete, photographable noun? Abstractions are not.
const ABSTRACT_TOPICS = new Set([
  'philosophy', 'inflation', 'ethics', 'logic', 'democracy', 'capitalism',
  'entropy', 'probability', 'epistemology', 'metaphysics', 'justice',
  'freedom', 'consciousness', 'morality', 'economics', 'theology',
  'aesthetics', 'ideology', 'sovereignty', 'globalization', 'liberalism',
]);
function isConcreteTopic(topic) {
  const t = topic.toLowerCase().trim();
  return !ABSTRACT_TOPICS.has(t);
}

// ---------------------------------------------------------------------------
// Replicate request — versioned endpoint, Prefer:wait, poll, retry/backoff.
// ---------------------------------------------------------------------------
async function callModel(dataUri, prompt) {
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const t0 = Date.now(); // wall time across create + (any) poll
      const create = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          Prefer: 'wait',
        },
        body: JSON.stringify({ version: MODEL_VERSION, input: { image: dataUri, prompt } }),
      });
      if (create.status === 429) {
        const wait = Number(create.headers.get('retry-after') || 2);
        await sleep(wait * 1000);
        throw new Error('rate-limited');
      }
      let pred = await create.json();
      if (pred.detail || pred.status === 404) throw new Error(`api: ${pred.detail || 'not found'}`);
      if (pred.error) throw new Error(`api: ${JSON.stringify(pred.error)}`);
      while (pred.status && !['succeeded', 'failed', 'canceled'].includes(pred.status)) {
        await sleep(1200);
        pred = await fetch(pred.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } }).then((r) => r.json());
      }
      if (pred.status !== 'succeeded') throw new Error(`status ${pred.status}: ${JSON.stringify(pred.error)}`);
      const out = Array.isArray(pred.output) ? pred.output.join('') : pred.output;
      return { text: out, predictTime: pred.metrics?.predict_time ?? null, wallMs: Date.now() - t0 };
    } catch (e) {
      lastErr = e;
      if (attempt < MAX_RETRIES) await sleep(1000 * 2 ** (attempt - 1));
    }
  }
  throw lastErr;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------
function loadJson(p, fallback) {
  if (!existsSync(p)) return fallback;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return fallback; }
}
function saveJson(p, obj) {
  writeFileSync(p, JSON.stringify(obj, null, 2));
}

// ---------------------------------------------------------------------------
// Image resolution + data URI
// ---------------------------------------------------------------------------
function resolveImage(heroImage, slug) {
  // heroImage is "/images/articles/{slug}-hero.webp"
  const name = heroImage ? path.basename(heroImage) : `${slug}-hero.webp`;
  if (name === PLACEHOLDER) return { ok: false, reason: 'placeholder' };
  const full = path.join(IMAGES_DIR, name);
  if (!existsSync(full)) return { ok: false, reason: 'no-image' };
  if (statSync(full).size === 0) return { ok: false, reason: 'zero-byte-image' };
  return { ok: true, full };
}

function toDataUri(full) {
  const buf = readFileSync(full);
  const ext = path.extname(full).slice(1).toLowerCase();
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/webp';
  return `data:${mime};base64,${buf.toString('base64')}`;
}

// ---------------------------------------------------------------------------
// Bounded worker pool
// ---------------------------------------------------------------------------
async function runPool(items, concurrency, worker) {
  let idx = 0;
  let completed = 0;
  const total = items.length;
  async function next() {
    while (idx < items.length) {
      const i = idx; idx += 1;
      await worker(items[i], i);
      completed += 1;
      if (completed % FLUSH_EVERY === 0) flush();
      process.stdout.write(`  [${completed}/${total}] ${items[i].slug}\n`);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => next());
  await Promise.all(workers);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
let altMap;
let qaMap;
let latencies = [];
let predictTimes = [];
let apiRuns = 0;

function flush() {
  saveJson(DATA_PATH, altMap);
  saveJson(QA_PATH, qaMap);
}

async function main() {
  if (!TOKEN) {
    console.error('REPLICATE_API_TOKEN missing in .env — aborting.');
    process.exit(1);
  }
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  // args
  const argv = process.argv.slice(2);
  let limit = Infinity;
  let concurrency = Number(process.env.ALT_CONCURRENCY || 8);
  let pilot = false;
  let reclean = false; // re-run cleaning over stored raw captions; no API calls
  const slugFilter = [];
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--limit') { limit = Number(argv[i + 1]); i += 1; }
    else if (a === '--concurrency') { concurrency = Number(argv[i + 1]); i += 1; }
    else if (a === '--pilot') pilot = true;
    else if (a === '--reclean') reclean = true;
    else if (!a.startsWith('-')) slugFilter.push(a);
  }

  const articles = loadArticles();
  const bySlug = new Map(articles.map((a) => [a.slug, a]));

  // load existing maps for resumability
  altMap = loadJson(DATA_PATH, {});
  qaMap = loadJson(QA_PATH, {});

  // --reclean: deterministically re-apply the cleaning pipeline to every
  // vision/fallback record that has a stored raw caption, with NO API calls.
  // Lets us iterate on the cleaning rules without re-paying for predictions.
  if (reclean) {
    let touched = 0;
    for (const [slug, qa] of Object.entries(qaMap)) {
      if (qa.source === 'known-ai' || qa.raw == null) continue;
      const art = bySlug.get(slug);
      if (!art) continue;
      const topic = topicFromTitle(art.title);
      const cleaned = cleanCaption(qa.raw, art.heroAlt, topic, isConcreteTopic(topic));
      altMap[slug] = cleaned.alt;
      qaMap[slug] = {
        source: cleaned.source,
        needsReview: cleaned.needsReview,
        reason: cleaned.reason || (cleaned.flags.length ? cleaned.flags.join(',') : 'ok'),
        raw: qa.raw,
        predictTime: qa.predictTime ?? null,
      };
      touched += 1;
    }
    resolveCollisions();
    flush();
    console.log(`Recleaned ${touched} records from stored raw captions (no API calls).`);
    printSummary();
    return;
  }

  // pre-seed known AI heroes (only if not already present)
  for (const [slug, alt] of Object.entries(KNOWN_AI)) {
    if (!(slug in altMap)) {
      altMap[slug] = alt;
      qaMap[slug] = { source: 'known-ai', needsReview: false, reason: 'pre-seeded from verified render (plan §5)' };
    }
  }
  flush();

  // build work queue
  let candidates;
  if (slugFilter.length) {
    candidates = slugFilter;
  } else if (pilot) {
    candidates = PILOT_SLUGS;
  } else {
    candidates = articles.map((a) => a.slug);
  }
  // skip already-done (present in altMap), skip known-ai, dedupe
  const queue = [];
  const seen = new Set();
  for (const slug of candidates) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    if (slug in KNOWN_AI) continue;
    if (slug in altMap) continue;
    const art = bySlug.get(slug);
    if (!art) { console.warn(`  skip unknown slug: ${slug}`); continue; }
    queue.push(art);
    if (queue.length >= limit) break;
  }

  console.log(`Model: ${MODEL_OWNER_NAME}@${MODEL_VERSION.slice(0, 12)}`);
  console.log(`Articles: ${articles.length} | already done: ${Object.keys(altMap).length} | queued: ${queue.length} | concurrency: ${concurrency}\n`);

  const worker = async (art) => {
    const { slug, title, heroImage, heroAlt } = art;
    const topic = topicFromTitle(title);
    const topicConcrete = isConcreteTopic(topic);

    const img = resolveImage(heroImage, slug);
    if (!img.ok) {
      altMap[slug] = heroAlt;
      qaMap[slug] = { source: 'fallback', needsReview: true, reason: img.reason };
      return;
    }
    try {
      const dataUri = toDataUri(img.full);
      const res = await callModel(dataUri, buildPrompt(topic));
      apiRuns += 1;
      if (res.wallMs != null) latencies.push(res.wallMs);
      if (res.predictTime != null) predictTimes.push(res.predictTime);
      const cleaned = cleanCaption(res.text, heroAlt, topic, topicConcrete);
      altMap[slug] = cleaned.alt;
      qaMap[slug] = {
        source: cleaned.source,
        needsReview: cleaned.needsReview,
        reason: cleaned.reason || (cleaned.flags.length ? cleaned.flags.join(',') : 'ok'),
        raw: String(res.text).trim().slice(0, 160),
        predictTime: res.predictTime,
      };
    } catch (e) {
      altMap[slug] = heroAlt;
      qaMap[slug] = { source: 'fallback', needsReview: true, reason: `api-error: ${e.message}`.slice(0, 120) };
    }
  };

  await runPool(queue, concurrency, worker);

  // ---- post-batch uniqueness pass (plan §2.12) over vision-sourced alts ----
  resolveCollisions();
  flush();

  printSummary();
}

function resolveCollisions() {
  const byValue = new Map();
  for (const [slug, alt] of Object.entries(altMap)) {
    const key = alt.toLowerCase();
    if (!byValue.has(key)) byValue.set(key, []);
    byValue.get(key).push(slug);
  }
  for (const [, slugs] of byValue) {
    if (slugs.length < 2) continue;
    // keep the first; for each subsequent vision-sourced collision, fall back.
    for (let i = 1; i < slugs.length; i += 1) {
      const slug = slugs[i];
      const qa = qaMap[slug];
      if (qa && qa.source === 'vision') {
        // can't re-query cheaply here; flag for review (fallback handled downstream
        // by re-running the slug). Mark distinct by leaving as-is + needsReview.
        qa.needsReview = true;
        qa.reason = `${qa.reason};duplicate-collision`;
      }
    }
  }
}

function pct(arr, p) {
  if (!arr.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))];
}

function printSummary() {
  const total = Object.keys(altMap).length;
  const sources = { vision: 0, fallback: 0, 'known-ai': 0 };
  let needsReview = 0;
  for (const q of Object.values(qaMap)) {
    sources[q.source] = (sources[q.source] || 0) + 1;
    if (q.needsReview) needsReview += 1;
  }
  const avgWall = latencies.length ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length) : 0;
  const avgPredict = predictTimes.length ? (predictTimes.reduce((a, b) => a + b, 0) / predictTimes.length) : 0;
  console.log('\n--- summary ---');
  console.log(`map entries: ${total}`);
  console.log(`sources: vision=${sources.vision} fallback=${sources.fallback} known-ai=${sources['known-ai']}`);
  console.log(`needsReview: ${needsReview}`);
  console.log(`api runs this session: ${apiRuns} | est cost: $${(apiRuns * COST_PER_RUN).toFixed(4)}`);
  console.log(`latency wall ms: avg=${avgWall} p50=${pct(latencies, 50)} p95=${pct(latencies, 95)}`);
  console.log(`predict_time s: avg=${avgPredict.toFixed(3)}`);
  console.log(`\nwrote: ${DATA_PATH}`);
  console.log(`wrote: ${QA_PATH}`);
}

main().catch((e) => { console.error(e); flush(); process.exit(1); });
