// Embed the pilot in-content figures into article bodies as raw <figure> HTML
// (explicit width/height + loading=lazy => no CLS, no config change). Inserts
// right before each article's first H2. Idempotent: skips if already embedded.
// Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const IMG = 'public/images/articles';
const APPLY = process.argv.includes('--apply');

// slug -> { ext, w, h, alt, caption }
const FIGS = {
  cybersecurity: { ext: 'webp', w: 1344, h: 768, alt: 'A glowing blue padlock floating above an abstract digital network', caption: 'Cybersecurity protects data and systems from digital threats.' },
  'flight-simulation': { ext: 'webp', w: 1344, h: 768, alt: 'A passenger airliner banking through golden sunset clouds', caption: 'Flight simulators recreate the experience of piloting real aircraft.' },
  sandblasting: { ext: 'webp', w: 1344, h: 768, alt: 'An abrasive blasting nozzle stripping rust from metal in a shower of sparks', caption: 'Sandblasting uses high-speed abrasive to clean and prepare surfaces.' },
  'aerospace-engineering': { ext: 'webp', w: 1344, h: 768, alt: 'A white rocket ascending into a clear blue sky on a bright exhaust plume', caption: 'Aerospace engineering designs vehicles that fly within and beyond the atmosphere.' },
  'alternative-energy': { ext: 'webp', w: 1344, h: 768, alt: 'Wind turbines and rows of solar panels in a green field at sunrise', caption: 'Wind and solar are leading sources of renewable energy.' },
  'animal-behavior': { ext: 'webp', w: 1344, h: 768, alt: 'A flock of starlings forming a flowing murmuration against a dusk sky', caption: 'Collective behavior emerges from simple individual rules.' },
  anthropology: { ext: 'webp', w: 1344, h: 768, alt: 'Ancient stone tools and pottery shards arranged on dark soil', caption: 'Anthropology studies humanity through artifacts and culture.' },
  'server-administration': { ext: 'webp', w: 1344, h: 768, alt: 'An aisle of glowing server racks in a modern data center', caption: 'Server administrators keep the machines behind every website running.' },
  paleontology: { ext: 'webp', w: 1344, h: 768, alt: 'A dinosaur skeleton embedded in layered sedimentary rock', caption: 'Paleontology reconstructs ancient life from fossils preserved in rock.' },
  springs: { ext: 'webp', w: 1344, h: 768, alt: 'Several shiny chrome coiled metal compression springs on a reflective surface', caption: 'Springs store and release mechanical energy.' },
  'marine-biology': { ext: 'webp', w: 1344, h: 768, alt: 'A vibrant coral reef teeming with tropical fish beneath sunlit water', caption: 'Marine biology studies life in the ocean, from reefs to the deep sea.' },
  'tire-technology': { ext: 'webp', w: 1344, h: 768, alt: 'An extreme close-up of a rugged tire tread pattern beaded with water', caption: 'Tread design channels water away to keep tires gripping the road.' },
  mapmaking: { ext: 'webp', w: 1344, h: 768, alt: 'An antique brass globe, a compass, and a blank parchment by candlelight', caption: 'Mapmaking turns the world into something you can hold and navigate.' },
  chemistry: { ext: 'webp', w: 1344, h: 768, alt: 'Laboratory glassware filled with brightly colored liquids and a falling droplet', caption: 'Chemistry studies how substances combine, react, and transform.' },
  'reinforcement-learning': { ext: 'svg', w: 1000, h: 440, alt: 'Diagram of the reinforcement learning loop: an agent takes an action on the environment, which returns a new state and reward', caption: 'The agent learns by acting and observing the resulting reward.' },
  optics: { ext: 'svg', w: 1100, h: 520, alt: 'Ray diagram showing a convex lens forming a real, inverted image of an object', caption: 'A convex lens bends light rays to form an image.' },
  hydrology: { ext: 'svg', w: 1100, h: 560, alt: 'Diagram of the water cycle: evaporation, condensation, precipitation, and runoff', caption: 'Water cycles continuously between ocean, air, and land.' },
  'network-security': { ext: 'svg', w: 1100, h: 460, alt: 'Defense-in-depth diagram: internet traffic passes through a firewall, DMZ, and internal network to reach protected data', caption: 'Layered defenses protect critical data at the core.' },
  'data-analysis': { ext: 'svg', w: 1200, h: 360, alt: 'Diagram of the data analysis pipeline: collect, clean, analyze, visualize, decide', caption: 'Raw data becomes a decision through a sequence of steps.' },
};

let embedded = 0;
const problems = [];
for (const [slug, f] of Object.entries(FIGS)) {
  const path = join(DIR, `${slug}.md`);
  if (!existsSync(path)) { problems.push(`${slug}: article missing`); continue; }
  if (!existsSync(join(IMG, `${slug}-fig1.${f.ext}`))) { problems.push(`${slug}: image missing`); continue; }
  let content = readFileSync(path, 'utf8');
  if (content.includes(`${slug}-fig1.${f.ext}`)) { continue; } // already embedded
  const fig = `<figure>\n  <img src="/images/articles/${slug}-fig1.${f.ext}" alt="${f.alt}" width="${f.w}" height="${f.h}" loading="lazy" decoding="async" class="rounded-lg" />\n  <figcaption>${f.caption}</figcaption>\n</figure>`;
  const fmEnd = content.indexOf('\n---', content.indexOf('---') + 3);
  const head = content.slice(0, fmEnd + 4);
  let body = content.slice(fmEnd + 4);
  const h2 = body.search(/\r?\n##\s/);
  if (h2 === -1) { problems.push(`${slug}: no H2 to anchor`); continue; }
  body = body.slice(0, h2) + `\n\n${fig}\n` + body.slice(h2);
  embedded++;
  if (APPLY) writeFileSync(path, head + body);
}

console.log(`${APPLY ? 'APPLIED' : 'DRY RUN'} — embedded ${embedded}/${Object.keys(FIGS).length} figures.`);
if (problems.length) console.log('Issues:\n' + problems.join('\n'));
if (!APPLY) console.log('Re-run with --apply to write changes.');
