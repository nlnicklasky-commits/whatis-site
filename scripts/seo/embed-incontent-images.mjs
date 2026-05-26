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

  // Wave 2 — Tier-1 Science
  'climate-change': { ext: 'webp', w: 1344, h: 768, alt: 'A lone melting iceberg adrift on a calm ocean under a moody sky', caption: 'Climate change is reshaping ice, oceans, and weather worldwide.' },
  'semiconductor-physics': { ext: 'webp', w: 1344, h: 768, alt: 'A silicon wafer covered in shimmering iridescent microcircuitry', caption: 'Semiconductor physics governs how chips switch and compute.' },
  algebra: { ext: 'webp', w: 1344, h: 768, alt: 'A polished brass balance scale resting in perfect equilibrium', caption: 'Algebra is about keeping both sides of an equation in balance.' },
  acoustics: { ext: 'webp', w: 1344, h: 768, alt: 'A metal tuning fork above concentric rings of sound waves', caption: 'Acoustics is the science of how sound is produced and travels.' },
  anatomy: { ext: 'webp', w: 1344, h: 768, alt: 'An illustration of the human skeleton and major muscle groups', caption: 'Anatomy maps the structures that make up the body.' },
  'river-ecology': { ext: 'webp', w: 1344, h: 768, alt: 'An aerial view of a clear river winding through green forest', caption: 'River ecology studies the life and flow of freshwater systems.' },
  agriculture: { ext: 'webp', w: 1344, h: 768, alt: 'Rows of green crops stretching to the horizon at sunset', caption: 'Agriculture feeds the world by cultivating plants and animals.' },
  'abstract-algebra': { ext: 'webp', w: 1344, h: 768, alt: 'Colorful interlocking symmetric three-dimensional forms', caption: 'Abstract algebra studies symmetry and structure itself.' },
  'fractal-geometry': { ext: 'webp', w: 1344, h: 768, alt: 'A vivid fractal of infinitely repeating spiral patterns', caption: 'Fractals repeat their structure at every scale.' },
  seismology: { ext: 'webp', w: 1344, h: 768, alt: 'A deep fissure splitting cracked, dry ground toward the horizon', caption: 'Seismology studies earthquakes and the waves they send through Earth.' },
  'rainforest-ecology': { ext: 'webp', w: 1344, h: 768, alt: 'Sunlight streaming through a dense, misty rainforest canopy', caption: "Rainforests hold much of the planet's biodiversity." },
  agronomy: { ext: 'webp', w: 1344, h: 768, alt: 'Young seedlings sprouting from rich soil beside a garden trowel', caption: 'Agronomy is the science of soil and crop production.' },
  'cognitive-neuroscience': { ext: 'webp', w: 1344, h: 768, alt: 'A glowing brain with neural signals firing outward', caption: 'Cognitive neuroscience links the brain to thought and behavior.' },
  cosmology: { ext: 'webp', w: 1344, h: 768, alt: 'A luminous galaxy and nebula stretching across deep space', caption: 'Cosmology studies the origin and structure of the universe.' },
  'experimental-physics': { ext: 'webp', w: 1344, h: 768, alt: 'Glowing blue and orange particle trails in a dark laboratory', caption: 'Experimental physics tests theory against measurement.' },
  elasticity: { ext: 'webp', w: 1344, h: 768, alt: 'A coiled metal spring on a clean white surface', caption: 'Elasticity is a material’s ability to spring back after deforming.' },
  geometry: { ext: 'webp', w: 1344, h: 768, alt: 'Floating geometric solids: a sphere, cube, octahedron, and torus', caption: 'Geometry studies shape, size, and space.' },
  'fluid-dynamics': { ext: 'webp', w: 1344, h: 768, alt: 'Swirling blue ink plumes spreading through water', caption: 'Fluid dynamics describes how liquids and gases flow.' },
  horticulture: { ext: 'webp', w: 1344, h: 768, alt: 'A lush greenhouse filled with potted plants and flowers', caption: 'Horticulture is the art and science of growing plants.' },
  psycholinguistics: { ext: 'webp', w: 1344, h: 768, alt: 'A glowing brain connected to flowing waves of sound', caption: 'Psycholinguistics studies how the mind produces and understands language.' },
  'scanning-electron-microscopy': { ext: 'webp', w: 1344, h: 768, alt: 'A black-and-white electron micrograph of spherical pollen grains', caption: 'Scanning electron microscopy reveals surfaces at extreme magnification.' },
  aerodynamics: { ext: 'svg', w: 1000, h: 540, alt: 'Diagram of the four forces of flight on an airfoil: lift up, weight down, thrust forward, drag backward', caption: 'Steady flight balances lift against weight and thrust against drag.' },
  'linear-algebra': { ext: 'svg', w: 1000, h: 520, alt: 'Diagram of a linear transformation shearing a square grid into a parallelogram grid via the basis vectors i-hat and j-hat', caption: 'Move the basis vectors and the whole grid follows.' },
  'scientific-method': { ext: 'svg', w: 1200, h: 440, alt: 'Diagram of the scientific method cycle: question, hypothesis, experiment, analyze, conclude, then refine and repeat', caption: 'Each conclusion raises new questions, and the cycle repeats.' },

  // Wave 3 — Tier-1 Technology
  'aircraft-mechanics': { ext: 'webp', w: 1344, h: 768, alt: 'A technician inspecting the turbine blades of a jet engine', caption: 'Aircraft mechanics keep planes safe and airworthy.' },
  cryptocurrency: { ext: 'webp', w: 1344, h: 768, alt: 'Glowing golden coins linked across a digital network', caption: 'Cryptocurrency records value on a decentralized network.' },
  'amateur-radio': { ext: 'webp', w: 1344, h: 768, alt: 'A radio antenna tower broadcasting glowing signal waves against a dusk sky', caption: 'Amateur radio operators communicate worldwide over the airwaves.' },
  'motion-graphics': { ext: 'webp', w: 1344, h: 768, alt: 'Vibrant flowing ribbons of color and floating spheres in motion', caption: 'Motion graphics bring design to life through movement.' },
  'air-conditioning': { ext: 'webp', w: 1344, h: 768, alt: 'A wall air-conditioning unit releasing cool blue mist into a room', caption: 'Air conditioning moves heat to keep indoor air cool.' },
  scaffolding: { ext: 'webp', w: 1344, h: 768, alt: 'A metal scaffolding framework rising against a building under a blue sky', caption: 'Scaffolding gives workers safe access to a structure during construction.' },
  'seo-search-engine-optimization': { ext: 'webp', w: 1344, h: 768, alt: 'A luminous glass sphere above an abstract network of connected panels', caption: 'SEO helps the right pages get found by search engines.' },
  'app-development': { ext: 'webp', w: 1344, h: 768, alt: 'A smartphone displaying abstract colorful app shapes', caption: 'App development builds the software that runs on your phone.' },
  'manufacturing-engineering': { ext: 'webp', w: 1344, h: 768, alt: 'Orange robotic arms working along an automated assembly line', caption: 'Manufacturing engineering designs how products get made at scale.' },
  'satellite-communication': { ext: 'webp', w: 1344, h: 768, alt: 'A communications satellite orbiting above Earth', caption: 'Satellites relay signals across the globe.' },
  'seaplane-piloting': { ext: 'webp', w: 1344, h: 768, alt: 'A floatplane skimming across a calm mountain lake', caption: 'Seaplanes take off and land on water.' },
  'signal-processing': { ext: 'webp', w: 1344, h: 768, alt: 'Smooth glowing blue waveforms flowing across a dark field', caption: 'Signal processing extracts meaning from waves and data streams.' },
  'telescope-making': { ext: 'webp', w: 1344, h: 768, alt: 'A telescope silhouetted against the Milky Way', caption: 'Telescope makers grind and align optics to gather distant light.' },
  'lean-manufacturing': { ext: 'webp', w: 1344, h: 768, alt: 'An organized factory floor with clear flow lanes and workstations', caption: 'Lean manufacturing removes waste from production.' },
  'music-engineering': { ext: 'webp', w: 1344, h: 768, alt: 'A studio mixing console with rows of faders and glowing controls', caption: 'Music engineers shape how a recording sounds.' },
  'design-patterns': { ext: 'webp', w: 1344, h: 768, alt: 'Abstract modular blocks and spheres connected into an ordered structure', caption: 'Design patterns are reusable solutions to common coding problems.' },
  biotechnology: { ext: 'webp', w: 1344, h: 768, alt: 'A glowing DNA double helix rising above laboratory glassware', caption: 'Biotechnology engineers living systems to solve problems.' },
  soldering: { ext: 'webp', w: 1344, h: 768, alt: 'A soldering iron melting a glowing bead of solder on a circuit board', caption: 'Soldering joins electronic components with molten metal.' },
  'plant-breeding': { ext: 'webp', w: 1344, h: 768, alt: 'A gloved hand tending young seedlings in a greenhouse', caption: 'Plant breeding develops crops with better traits.' },
  'renewable-energy': { ext: 'webp', w: 1344, h: 768, alt: 'An aerial view of a solar farm beside a hydroelectric dam at sunset', caption: 'Renewable energy draws power from sun, water, and wind.' },
  algorithms: { ext: 'svg', w: 760, h: 560, alt: 'Flowchart of an algorithm: start, do a step, check if done, loop back if not, and end', caption: 'An algorithm is a precise sequence of steps with clear stopping rules.' },
  'data-structures': { ext: 'svg', w: 1200, h: 480, alt: 'Comparison of three data structures: an array of cells, a linked list of nodes, and a branching tree', caption: 'The structure you choose shapes how fast you can work with data.' },
  'machine-learning': { ext: 'svg', w: 900, h: 520, alt: 'A neural network diagram with input, hidden, and output layers of connected nodes', caption: 'A neural network adjusts weighted connections until its output matches the data.' },
  'agile-software-development': { ext: 'svg', w: 1200, h: 440, alt: 'The agile sprint cycle: plan, build, test, review, then start the next sprint', caption: 'Agile delivers software in short, repeating, feedback-driven cycles.' },
  'computer-architecture': { ext: 'svg', w: 1000, h: 540, alt: 'Von Neumann architecture diagram: a CPU with control unit and ALU, plus memory, input, and output, joined by a system bus', caption: 'One shared bus moves data and instructions between the CPU, memory, and I/O.' },
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
