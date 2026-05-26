// Generate responsive hero image variants (400w for cards, 800w for article
// heroes) from the 1344w originals so components can emit a real `srcset`.
// Cards currently download the full 1344px file to render at ~400px.
// Idempotent: skips variants that already exist. Run from project root.
import sharp from 'sharp';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/images/articles';
const WIDTHS = [400, 800];
const CONCURRENCY = 8;

const heroes = readdirSync(DIR).filter((f) => /-hero\.webp$/.test(f));
const jobs = [];
for (const file of heroes) {
  const base = file.replace(/\.webp$/, '');
  for (const w of WIDTHS) {
    const out = `${base}-${w}.webp`;
    if (!existsSync(join(DIR, out))) jobs.push({ src: join(DIR, file), out: join(DIR, out), w });
  }
}

console.log(`${heroes.length} heroes; ${jobs.length} variants to generate…`);
let done = 0, failed = 0;
async function worker(queue) {
  while (queue.length) {
    const job = queue.pop();
    try {
      await sharp(job.src).resize({ width: job.w }).webp({ quality: 80 }).toFile(job.out);
      if (++done % 500 === 0) console.log(`  ${done}/${jobs.length}`);
    } catch (e) {
      failed++;
      console.error(`  fail ${job.out}: ${e.message}`);
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(jobs)));
console.log(`Done. Generated ${done}, failed ${failed}.`);
