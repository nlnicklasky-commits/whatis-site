// Generate photographic hero images via Replicate FLUX 1.1 Pro. Downloads each
// result, normalizes to 1344x768 webp, writes the -400/-800 responsive variants,
// and runs an OCR gate to flag any rendered-text artifacts (skips gracefully if
// tesseract/imagemagick aren't installed). Run from project root:
//   node scripts/seo/gen-hero-images.mjs                       # all JOBS
//   node scripts/seo/gen-hero-images.mjs interest-rate         # only these slugs
//
// Artifact-safe prompting (per out/<run>/t3-prompt-playbook.md): suppress text by
// composition (avoid text-prone subjects), reinforce with phrasing, verify with OCR.
import { writeFileSync, existsSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import sharp from 'sharp';
import { config } from 'dotenv';
config({ path: '.env' });

const TOKEN = process.env.REPLICATE_API_TOKEN;
const MODEL = 'black-forest-labs/flux-1.1-pro';
const DIR = 'public/images/articles';

const SUFFIX = 'clean composition, no text, no words, no letters, no numbers, no captions, no logos, no watermark, no signature, no UI, no labels, no signage';

// Editorial, photographic prompts that avoid text-prone subjects.
const JOBS = [
  { slug: 'compound-interest', prompt: `Editorial photograph, a clear glass jar of mixed coins with one green seedling sprouting from the top, coins edge-on and slightly out of focus so no denomination is legible, soft natural window light, shallow depth of field, warm gold and green tones, concept of money growing over time, negative space on the left, ${SUFFIX}` },
  { slug: 'interest-rate', prompt: `Editorial photograph, three rising stacks of gold coins on a clean glossy desk with a single smooth golden upward arrow rising above them, coins shown edge-on and stacked so no faces are legible, soft daylight, muted professional blue and grey tones, shallow depth of field, blurred clean background with no objects, concept of rising percentages and borrowing cost, negative space on the right, no calculator, no newspaper, ${SUFFIX}` },
  { slug: 'savings', prompt: `Editorial photograph, a ceramic piggy bank beside neatly stacked coins and a closed blank-spine book on a warm wooden desk, coins edge-on, soft window light, shallow depth of field, cozy reassuring tones, concept of saving money, ${SUFFIX}` },
  { slug: 'generative-ai', prompt: `Cinematic editorial render, an abstract network of glowing light particles coalescing into smooth organic flowing shapes, deep navy background with electric blue and violet light, no symbols and no characters of any kind, sense of emergence and computation, high detail, negative space on the right, ${SUFFIX}, no glyphs, no symbols` },
  { slug: 'large-language-model', prompt: `Cinematic editorial render, an abstract luminous lattice of interconnected glowing nodes and flowing light threads, deep blue and teal tones with warm amber accents, smooth particle streams suggesting information moving through a network, no symbols and no characters of any kind, sense of language becoming data conveyed purely through flowing abstract light, high detail, ${SUFFIX}, no glyphs, no symbols` },
];

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const jobs = only.length ? JOBS.filter((j) => only.includes(j.slug)) : JOBS;

function hasCmd(c) {
  try { execSync(process.platform === 'win32' ? `where ${c}` : `command -v ${c}`, { stdio: 'ignore' }); return true; }
  catch { return false; }
}
// Returns: null = OCR unavailable (skipped); '' = clean; string = flagged text.
function ocrCheck(file) {
  if (!hasCmd('tesseract') || !hasCmd('magick')) return null;
  const png = file.replace(/\.webp$/, '.ocr.png');
  try {
    execSync(`magick "${file}" "${png}"`, { stdio: 'ignore' });
    const txt = execSync(`tesseract "${png}" stdout --psm 11`, { encoding: 'utf8' }).replace(/\s+/g, '');
    return txt.length >= 3 ? txt : '';
  } catch { return null; } finally { rmSync(png, { force: true }); }
}

async function generate(prompt) {
  const create = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', Prefer: 'wait' },
    body: JSON.stringify({
      input: { prompt, aspect_ratio: 'custom', width: 1344, height: 768, output_format: 'webp', output_quality: 90, prompt_upsampling: true, safety_tolerance: 2 },
    }),
  });
  let pred = await create.json();
  if (pred.error) throw new Error(JSON.stringify(pred.error));
  while (pred.status && !['succeeded', 'failed', 'canceled'].includes(pred.status)) {
    await new Promise((r) => setTimeout(r, 2000));
    pred = await fetch(pred.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } }).then((r) => r.json());
  }
  if (pred.status !== 'succeeded') throw new Error(`status ${pred.status}: ${JSON.stringify(pred.error)}`);
  return Array.isArray(pred.output) ? pred.output[0] : pred.output;
}

for (const { slug, prompt } of jobs) {
  const base = `${DIR}/${slug}-hero`;
  try {
    process.stdout.write(`Generating ${slug}... `);
    const url = await generate(prompt);
    const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
    await sharp(buf).resize(1344, 768, { fit: 'cover' }).webp({ quality: 82 }).toFile(`${base}.webp`);
    await sharp(buf).resize(800).webp({ quality: 80 }).toFile(`${base}-800.webp`);
    await sharp(buf).resize(400).webp({ quality: 80 }).toFile(`${base}-400.webp`);
    const ocr = ocrCheck(`${base}.webp`);
    const note = ocr === null ? '(OCR skipped — install tesseract+imagemagick to enable)'
      : ocr ? `⚠ OCR flagged text "${ocr}" — review/regenerate` : 'OCR clean';
    console.log(`done -> ${base}.webp (+400,+800) | ${note}`);
  } catch (e) {
    console.error(`FAILED ${slug}: ${e.message}`);
  }
}
console.log('\nAll done.');
