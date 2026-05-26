// Generate concept-specific WORDLESS in-content illustrations via FLUX 1.1 Pro.
// Output: public/images/articles/<slug>-fig1.webp (1344x768). Artifact-safe
// prompts (no text/labels); every image must still be visually inspected before
// going live. Graceful OCR gate flags any rendered text. Run from project root:
//   node scripts/seo/gen-incontent-images.mjs [slug ...]
import { rmSync } from 'node:fs';
import { execSync } from 'node:child_process';
import sharp from 'sharp';
import { config } from 'dotenv';
config({ path: '.env' });

const TOKEN = process.env.REPLICATE_API_TOKEN;
const MODEL = 'black-forest-labs/flux-1.1-pro';
const DIR = 'public/images/articles';
const SUFFIX = 'clean composition, no text, no words, no letters, no numbers, no captions, no logos, no watermark, no signature, no UI, no labels, no signage, no diagrams';

const JOBS = [
  { slug: 'cybersecurity', prompt: `Editorial 3D render, a glowing blue padlock and a translucent shield floating above an abstract network of connected light nodes, deep dark-blue background, cinematic rim light, sense of digital protection, ${SUFFIX}` },
  { slug: 'flight-simulation', prompt: `Editorial photograph, a sleek modern airliner banking gracefully through golden sunset clouds high above, dramatic atmospheric light, shallow depth of field, sense of flight, no cockpit instruments, ${SUFFIX}` },
  { slug: 'sandblasting', prompt: `Editorial photograph, a close-up stream of abrasive sand blasting against a rusty metal surface revealing bright bare steel, flying dust and sparks, dramatic side light, shallow depth of field, ${SUFFIX}` },
  { slug: 'aerospace-engineering', prompt: `Editorial photograph, a sleek white rocket ascending with a brilliant exhaust plume against a clear blue sky, dynamic upward diagonal, sense of engineering power, ${SUFFIX}` },
  { slug: 'alternative-energy', prompt: `Editorial photograph, white wind turbines and rows of solar panels in a lush green field at golden hour, clean blue sky, hopeful sustainable mood, ${SUFFIX}` },
  { slug: 'animal-behavior', prompt: `Editorial wildlife photograph, a sweeping murmuration of starlings forming flowing organic shapes against a dusk sky, sense of collective behavior, soft natural light, ${SUFFIX}` },
  { slug: 'anthropology', prompt: `Editorial photograph, ancient stone hand tools and weathered clay pottery shards arranged on dark earth, warm museum spotlight, shallow depth of field, sense of human history, ${SUFFIX}` },
  { slug: 'server-administration', prompt: `Editorial photograph, rows of sleek server racks in a modern data center glowing with soft blue ambient light, receding perspective, no screens, no displays, ${SUFFIX}` },
  { slug: 'paleontology', prompt: `Editorial photograph, a large dinosaur skeleton fossil partially embedded in layered rock, dramatic museum lighting, sense of deep time and discovery, ${SUFFIX}` },
  { slug: 'springs', prompt: `Editorial macro photograph, several shiny chrome coiled metal compression springs of varying sizes on a clean reflective surface, soft studio light, shallow depth of field, ${SUFFIX}` },
  { slug: 'marine-biology', prompt: `Editorial underwater photograph, a vibrant healthy coral reef teeming with colorful tropical fish, shafts of sunlight piercing clear blue water, ${SUFFIX}` },
  { slug: 'tire-technology', prompt: `Editorial macro photograph, an extreme close-up of a rugged car tire tread pattern glistening with water droplets, dramatic low side light, deep blacks, ${SUFFIX}` },
  { slug: 'mapmaking', prompt: `Editorial photograph, an antique brass globe, a brass compass, and a blank rolled parchment with absolutely no writing, on a dark wooden table, warm candlelight, blank surfaces only, ${SUFFIX}, no map, no markings` },
  { slug: 'chemistry', prompt: `Editorial photograph, elegant laboratory glassware with vivid colored liquids and a single droplet mid-fall, clean bright lab background, soft diffused light, no labels on glassware, ${SUFFIX}` },

  // Wave 2 — Tier-1 Science
  { slug: 'climate-change', prompt: `Editorial photograph, a lone melting iceberg under a hazy warm sky with dark storm clouds gathering, moody atmospheric light, sense of a warming planet, ${SUFFIX}` },
  { slug: 'semiconductor-physics', prompt: `Editorial macro photograph, a silicon wafer with shimmering iridescent rainbow micro-circuitry patterns, clean studio light, deep tech, ${SUFFIX}, no numbers` },
  { slug: 'algebra', prompt: `Editorial photograph, a polished brass balance scale in perfect equilibrium holding smooth abstract geometric shapes on each pan, soft studio light, concept of balance and equality, ${SUFFIX}, no numbers, no equations` },
  { slug: 'acoustics', prompt: `Editorial 3D render, abstract concentric sound waves rippling outward through air around a metal tuning fork, soft blue tones, dark background, ${SUFFIX}, no numbers` },
  { slug: 'anatomy', prompt: `Anatomical illustration, a clean medical-editorial render of human musculature and skeleton on a plain neutral background, no labels, no leader lines, ${SUFFIX}, no numbers` },
  { slug: 'river-ecology', prompt: `Editorial aerial photograph, a clear winding river meandering through a lush green forest valley, healthy ecosystem, soft morning light, ${SUFFIX}` },
  { slug: 'agriculture', prompt: `Editorial photograph, neat rows of green crops stretching across a vast farm field at golden hour, distant tractor, warm light, ${SUFFIX}, no numbers` },
  { slug: 'abstract-algebra', prompt: `Cinematic 3D render, abstract interlocking symmetric geometric structures showing rotational symmetry, deep jewel tones, smooth forms, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'fractal-geometry', prompt: `Mesmerizing organic fractal pattern with infinite self-similar spirals and branching, vivid iridescent colors, mathematical beauty, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'seismology', prompt: `Editorial photograph, a dramatic cracked earth fault line splitting dry ground in a jagged fissure, moody side light, tectonic power, ${SUFFIX}, no numbers` },
  { slug: 'rainforest-ecology', prompt: `Editorial photograph, a lush dense tropical rainforest canopy with drifting mist and shafts of sunlight, rich biodiversity, ${SUFFIX}` },
  { slug: 'agronomy', prompt: `Editorial close-up photograph, rich dark soil with young crop seedlings sprouting and a metal hand trowel, warm natural light, ${SUFFIX}, no numbers` },
  { slug: 'cognitive-neuroscience', prompt: `Cinematic 3D render, a glowing human brain with luminous neural pathways firing, dark background, electric blue and gold light, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'cosmology', prompt: `Editorial astrophotography, a vast cosmic web of glowing galaxies and colorful nebulae across deep space, awe-inspiring scale, ${SUFFIX}, no numbers` },
  { slug: 'experimental-physics', prompt: `Cinematic photograph, glowing particle-collision light trails arcing through a dark physics laboratory, dramatic blue and orange light, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'elasticity', prompt: `Editorial macro photograph, a stretched coiled metal spring and a deforming rubber band under visible tension, clean studio light, ${SUFFIX}, no numbers` },
  { slug: 'geometry', prompt: `Editorial 3D render, elegant geometric solids — sphere, cube, tetrahedron, torus — floating with soft shadows on a clean studio background, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'fluid-dynamics', prompt: `Cinematic macro photograph, mesmerizing swirling ink-in-water plumes forming smooth vortices, blue and white on dark background, laminar and turbulent flow, ${SUFFIX}, no numbers` },
  { slug: 'horticulture', prompt: `Editorial photograph, a flourishing greenhouse full of potted green plants and blooming flowers, soft diffused natural light, ${SUFFIX}, no numbers` },
  { slug: 'psycholinguistics', prompt: `Cinematic 3D render, an abstract glowing brain connected to flowing smooth sound waves, language and mind, blue and violet tones, ${SUFFIX}, no letters, no numbers, no symbols, no glyphs` },
  { slug: 'scanning-electron-microscopy', prompt: `A highly detailed black and white scanning electron micrograph style image of pollen grains at extreme magnification, intricate surface texture, ${SUFFIX}, no scale bar, no numbers` },

  // Wave 3 — Tier-1 Technology
  { slug: 'aircraft-mechanics', prompt: `Editorial photograph, a technician at the open cowling of a jet engine inspecting polished turbine blades, bright hangar light, no gauges, ${SUFFIX}, no numbers` },
  { slug: 'cryptocurrency', prompt: `Cinematic 3D render, abstract glowing golden coins and interconnected blockchain links floating over a dark digital grid, blank coins with no markings, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'amateur-radio', prompt: `Editorial photograph, a tall steel lattice radio antenna tower silhouetted against a deep blue dusk sky, abstract glowing concentric radio-wave rings emanating outward from the top, sense of broadcasting signals, ${SUFFIX}, no numbers, no equipment` },
  { slug: 'motion-graphics', prompt: `Cinematic 3D render, vibrant abstract flowing geometric shapes and ribbons of color in motion against a dark background, dynamic energy, ${SUFFIX}, no numbers` },
  { slug: 'air-conditioning', prompt: `Editorial photograph, a sleek white wall air-conditioning unit with cool blue mist and delicate frost crystals drifting from it, clean modern interior, ${SUFFIX}, no numbers` },
  { slug: 'scaffolding', prompt: `Editorial photograph, a geometric metal scaffolding framework rising against a building facade under a clear blue sky, strong lines, ${SUFFIX}, no numbers` },
  { slug: 'seo-search-engine-optimization', prompt: `Cinematic 3D render, a glowing glass magnifying lens hovering over an abstract network of connected glowing nodes and floating blank panels, clean blue tones, no search bar, ${SUFFIX}, no numbers` },
  { slug: 'app-development', prompt: `Editorial photograph, a smartphone standing upright displaying abstract colorful rounded app-icon shapes with no text, soft studio light, clean background, ${SUFFIX}, no numbers, no interface text` },
  { slug: 'manufacturing-engineering', prompt: `Editorial photograph, orange robotic arms working on a clean automated assembly line in a bright modern factory, precision and motion, ${SUFFIX}, no numbers` },
  { slug: 'satellite-communication', prompt: `Cinematic photograph, a communications satellite with wide solar panels orbiting above Earth, a glowing signal beam reaching the surface, deep space, ${SUFFIX}, no numbers` },
  { slug: 'seaplane-piloting', prompt: `Editorial photograph, a floatplane skimming across a calm mountain lake throwing a fan of spray, scenic wilderness, ${SUFFIX}, no numbers` },
  { slug: 'signal-processing', prompt: `Cinematic 3D render, abstract smooth glowing sine waveforms flowing across a dark background in blue and teal, no grid lines, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'telescope-making', prompt: `Editorial photograph, a large reflecting telescope silhouetted against a brilliant starry night sky and the Milky Way, ${SUFFIX}, no numbers` },
  { slug: 'lean-manufacturing', prompt: `Editorial photograph, a spotless highly organized factory floor with neatly arranged workstations and clear flow lanes, bright and efficient, ${SUFFIX}, no numbers` },
  { slug: 'music-engineering', prompt: `Editorial photograph, a recording studio mixing console with rows of faders and softly glowing knobs, warm studio light, blank unlabeled controls, ${SUFFIX}, no numbers, no labels` },
  { slug: 'design-patterns', prompt: `Cinematic 3D render, abstract modular interlocking building blocks and connected geometric components forming an elegant ordered structure, blue tones, ${SUFFIX}, no numbers, no symbols` },
  { slug: 'biotechnology', prompt: `Editorial photograph, a glowing blue DNA double helix rising above clear laboratory glassware filled with softly colored liquids on a clean bench, no electronic devices, no screens, no monitors, ${SUFFIX}, no numbers` },
  { slug: 'soldering', prompt: `Editorial extreme macro photograph, the glowing hot tip of a soldering iron melting a bright bead of molten silver solder, intense orange glow and a wisp of smoke, the circuit board fully blurred into soft bokeh behind with no chips in focus, ${SUFFIX}, no numbers, no components with markings` },
  { slug: 'plant-breeding', prompt: `Editorial photograph, rows of young hybrid plant seedlings in a greenhouse with a researcher's gloved hands gently tending one, soft natural light, ${SUFFIX}, no numbers` },
  { slug: 'renewable-energy', prompt: `Editorial aerial photograph, a vast solar panel farm beside a hydroelectric dam and flowing river at golden hour, clean energy landscape, ${SUFFIX}, no numbers` },
];

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const jobs = only.length ? JOBS.filter((j) => only.includes(j.slug)) : JOBS;

function hasCmd(c) { try { execSync(process.platform === 'win32' ? `where ${c}` : `command -v ${c}`, { stdio: 'ignore' }); return true; } catch { return false; } }
function ocrCheck(file) {
  if (!hasCmd('tesseract') || !hasCmd('magick')) return null;
  const png = file.replace(/\.webp$/, '.ocr.png');
  try { execSync(`magick "${file}" "${png}"`, { stdio: 'ignore' }); const txt = execSync(`tesseract "${png}" stdout --psm 11`, { encoding: 'utf8' }).replace(/\s+/g, ''); return txt.length >= 3 ? txt : ''; }
  catch { return null; } finally { rmSync(png, { force: true }); }
}

async function generate(prompt) {
  const create = await fetch(`https://api.replicate.com/v1/models/${MODEL}/predictions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json', Prefer: 'wait' },
    body: JSON.stringify({ input: { prompt, aspect_ratio: 'custom', width: 1344, height: 768, output_format: 'webp', output_quality: 90, prompt_upsampling: true, safety_tolerance: 2 } }),
  });
  let pred = await create.json();
  if (pred.error) throw new Error(JSON.stringify(pred.error));
  while (pred.status && !['succeeded', 'failed', 'canceled'].includes(pred.status)) {
    await new Promise((r) => setTimeout(r, 2000));
    pred = await fetch(pred.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } }).then((r) => r.json());
  }
  if (pred.status !== 'succeeded') throw new Error(`status ${pred.status}`);
  return Array.isArray(pred.output) ? pred.output[0] : pred.output;
}

for (const { slug, prompt } of jobs) {
  const out = `${DIR}/${slug}-fig1.webp`;
  try {
    process.stdout.write(`Generating ${slug}-fig1... `);
    const url = await generate(prompt);
    const buf = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
    await sharp(buf).resize(1344, 768, { fit: 'cover' }).webp({ quality: 82 }).toFile(out);
    const ocr = ocrCheck(out);
    const note = ocr === null ? '(OCR skipped)' : ocr ? `⚠ OCR "${ocr}"` : 'OCR clean';
    console.log(`done | ${note}`);
  } catch (e) { console.error(`FAILED ${slug}: ${e.message}`); }
}
console.log('\nAll done.');
