// Split over-long opening paragraphs so the lede is a <=3-sentence citable
// definition (GEO rule). Finds the first prose paragraph; if it has >=4
// sentences, inserts a paragraph break after the 3rd sentence. No words are
// changed or removed — only a "\n\n" is inserted.
//
// Dry-run by default; apply with --apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/articles';
const APPLY = process.argv.includes('--apply');
const ABBR = /\b(e\.g|i\.e|Dr|Mr|Mrs|Ms|St|vs|U\.S|U\.K|etc|approx|Inc|Ltd|No|Fig|al|Jr|Sr|Ph\.D|p\.m|a\.m|c)\.$/i;

function findFirstParagraph(content, bodyStart) {
  const body = content.slice(bodyStart);
  const lines = body.split('\n');
  let offset = bodyStart, started = false, start = -1, end = -1;
  for (const line of lines) {
    const t = line.trim();
    const lineStart = offset;
    offset += line.length + 1;
    if (!started) {
      if (t === '' || /^#{1,6}\s/.test(t) || /^[-*>|]/.test(t)) continue;
      started = true; start = lineStart; end = lineStart + line.length;
    } else {
      if (t === '') break;
      end = lineStart + line.length;
    }
  }
  return start === -1 ? null : { start, end, text: content.slice(start, end) };
}

// Returns char offset of the end of the Nth sentence's terminal punctuation,
// and the length of the whitespace that follows it.
function nthSentenceBreak(para, n) {
  const re = /([.!?])(\s+)(?=[A-Z0-9"'(])/g;
  let m, count = 0;
  while ((m = re.exec(para))) {
    const upTo = para.slice(0, m.index + 1).trimEnd();
    if (ABBR.test(upTo)) continue;          // not a real sentence end
    count++;
    if (count === n) return { punctEnd: m.index + 1, wsLen: m[2].length };
  }
  return null;
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
let fixed = 0;
const sample = [];

for (const file of files) {
  const path = join(DIR, file);
  const content = readFileSync(path, 'utf8');
  const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
  const para = findFirstParagraph(content, fmEnd + 3);
  if (!para) continue;
  // Count sentences; only act on 4+.
  if (!nthSentenceBreak(para.text, 4)) continue;
  const brk = nthSentenceBreak(para.text, 3);
  if (!brk) continue;
  const newPara = para.text.slice(0, brk.punctEnd) + '\n\n' + para.text.slice(brk.punctEnd + brk.wsLen);
  fixed++;
  if (sample.length < 4) sample.push(`### ${file}\n${newPara.split('\n\n')[0]}  ⏎⏎  ${newPara.split('\n\n')[1].slice(0, 60)}…`);
  if (APPLY) writeFileSync(path, content.slice(0, para.start) + newPara + content.slice(para.end));
}

console.log(sample.join('\n\n'));
console.log(`\n${APPLY ? 'APPLIED' : 'DRY RUN'} — ${fixed} first paragraph(s) split.`);
if (!APPLY) console.log('Re-run with --apply to write changes.');
