// Generate photographic hero images for articles missing them, via Replicate
// FLUX 1.1 Pro. Downloads each result, normalizes to 1344x768 webp, and writes
// the -400/-800 responsive variants. Run from project root:
//   node scripts/seo/gen-hero-images.mjs
import { writeFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';
import { config } from 'dotenv';
config({ path: '.env' });

const TOKEN = process.env.REPLICATE_API_TOKEN;
const MODEL = 'black-forest-labs/flux-1.1-pro';
const DIR = 'public/images/articles';

// Editorial, photographic prompts. No text, no logos.
const JOBS = [
  { slug: 'compound-interest', prompt: 'Editorial photograph, a clear glass jar overflowing with coins with a small green seedling growing out of the top, soft natural window light, shallow depth of field, warm tones, concept of money growing over time, professional finance editorial, no text, no words' },
  { slug: 'interest-rate', prompt: 'Editorial photograph, a financial newspaper and a calculator on a clean desk with an upward percentage symbol formed by stacked coins, soft daylight, muted professional blue and grey tones, concept of borrowing cost and percentages, no text, no words' },
  { slug: 'savings', prompt: 'Editorial photograph, a ceramic piggy bank beside neatly stacked coins and a savings passbook on a warm wooden desk, soft window light, shallow depth of field, cozy reassuring tones, concept of saving money, no text, no words' },
  { slug: 'generative-ai', prompt: 'Cinematic editorial render, an abstract neural network of glowing light particles coalescing into organic flowing shapes, deep navy background with electric blue and violet light, sense of creation and emergence, futuristic, high detail, no text, no words' },
  { slug: 'large-language-model', prompt: 'Cinematic editorial render, abstract streams of glowing letters and characters flowing through a vast luminous lattice of nodes, deep blue and teal tones, sense of language becoming data, futuristic and elegant, high detail, no text, no words' },
];

async function generate(prompt) {
  const create = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', Prefer: 'wait' },
    body: JSON.stringify({
      input: {
        prompt,
        aspect_ratio: 'custom',
        width: 1344,
        height: 768,
        output_format: 'webp',
        output_quality: 90,
        prompt_upsampling: true,
        safety_tolerance: 2,
      },
    }),
  });
  let pred = await create.json();
  if (pred.error) throw new Error(JSON.stringify(pred.error));
  // Poll if not finished (Prefer: wait usually returns terminal state).
  while (pred.status && !['succeeded', 'failed', 'canceled'].includes(pred.status)) {
    await new Promise((r) => setTimeout(r, 2000));
    pred = await fetch(pred.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } }).then((r) => r.json());
  }
  if (pred.status !== 'succeeded') throw new Error(`status ${pred.status}: ${JSON.stringify(pred.error)}`);
  return Array.isArray(pred.output) ? pred.output[0] : pred.output;
}

for (const { slug, prompt } of JOBS) {
  const base = `${DIR}/${slug}-hero`;
  try {
    process.stdout.write(`Generating ${slug}... `);
    const url = await generate(prompt);
    const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
    // Normalize to exactly 1344x768 and write hero + variants.
    await sharp(buf).resize(1344, 768, { fit: 'cover' }).webp({ quality: 82 }).toFile(`${base}.webp`);
    await sharp(buf).resize(800).webp({ quality: 80 }).toFile(`${base}-800.webp`);
    await sharp(buf).resize(400).webp({ quality: 80 }).toFile(`${base}-400.webp`);
    console.log('done ->', `${base}.webp (+400,+800)`);
  } catch (e) {
    console.error(`FAILED ${slug}: ${e.message}`);
  }
}
console.log('\nAll done.');
