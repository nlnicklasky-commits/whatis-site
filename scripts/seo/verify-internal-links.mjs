/**
 * verify-internal-links.mjs
 *
 * Reads data/internal-link-maps/*.yml and confirms each planned inbound link
 * exists in its source file. Run as part of pre-build to keep linkable assets
 * properly cross-linked.
 *
 * Usage: node scripts/seo/verify-internal-links.mjs [--strict]
 *   --strict  Exit non-zero if any non-optional inbound link is missing.
 *             Without --strict, missing optional links print a warning only.
 *
 * Minimal YAML parser — no external dependency. The YAML files use a fixed
 * shape; if we need anything fancier we can swap in `yaml`.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const MAPS_DIR = path.join(ROOT, 'data', 'internal-link-maps');

const strict = process.argv.includes('--strict');

function parseLinkMap(text) {
  // Very narrow parser for the shape we control. Not a general YAML lib.
  const out = { asset: '', inbound_links: [], outbound_links: [] };
  const lines = text.split(/\r?\n/);
  let section = null;
  let current = null;
  for (const raw of lines) {
    const line = raw.replace(/#.*$/, ''); // strip comments
    if (!line.trim()) continue;
    const top = line.match(/^(asset|inbound_links|outbound_links):\s*(.*)$/);
    if (top) {
      section = top[1];
      if (section === 'asset') out.asset = top[2].trim();
      continue;
    }
    if (/^\s*-\s/.test(line)) {
      current = {};
      if (section === 'inbound_links') out.inbound_links.push(current);
      if (section === 'outbound_links') out.outbound_links.push(current);
      const inline = line.match(/^\s*-\s*(\w+):\s*(.+)$/);
      if (inline) {
        current[inline[1]] = inline[2].replace(/^["']|["']$/g, '').trim();
      }
      continue;
    }
    if (current) {
      const kv = line.match(/^\s+(\w+):\s*(.+)$/);
      if (kv) {
        let v = kv[2].replace(/^["']|["']$/g, '').trim();
        if (v === 'true') v = true;
        else if (v === 'false') v = false;
        current[kv[1]] = v;
      }
    }
  }
  return out;
}

function loadMaps() {
  if (!fs.existsSync(MAPS_DIR)) {
    console.log(`No link maps found at ${MAPS_DIR} — skipping verifier.`);
    return [];
  }
  return fs.readdirSync(MAPS_DIR)
    .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
    .map(f => {
      const text = fs.readFileSync(path.join(MAPS_DIR, f), 'utf-8');
      return { file: f, ...parseLinkMap(text) };
    });
}

const maps = loadMaps();
let missing = 0;
let missingRequired = 0;

for (const map of maps) {
  console.log(`\n→ ${map.asset || map.file}`);
  for (const link of map.inbound_links) {
    const from = link.from;
    const fullPath = path.join(ROOT, from);
    if (!fs.existsSync(fullPath)) {
      const note = link.optional ? '[optional, missing source file]' : '[MISSING SOURCE FILE]';
      console.log(`  ⚠ ${from} — ${note}`);
      if (!link.optional) missingRequired++;
      missing++;
      continue;
    }
    const body = fs.readFileSync(fullPath, 'utf-8');
    const needle = link.must_contain_path || map.asset;
    if (needle && body.includes(needle)) {
      console.log(`  ✓ ${from} links to ${needle}`);
    } else {
      const note = link.optional ? '[optional]' : '[REQUIRED]';
      console.log(`  ✗ ${from} does NOT contain "${needle}" ${note}`);
      missing++;
      if (!link.optional) missingRequired++;
    }
  }
}

console.log(`\n→ Total maps checked: ${maps.length}`);
console.log(`→ Missing inbound links: ${missing} (required: ${missingRequired})`);

if (strict && missingRequired > 0) {
  console.error('\nVerifier failed in --strict mode: required inbound links are missing.');
  process.exit(1);
}
