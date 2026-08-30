#!/usr/bin/env bun
/**
 * check-coverage.ts — the detail we have must not quietly get thinner.
 *
 * Most of what the reader shows about a word is derived, through a chain that
 * is several inferences long: the dhātupāṭha names a root's candidates,
 * derivation picks between them, that yields a stem, the stem declines, and the
 * matching cell settles लिङ्ग and वचन. Every link is silent when it breaks. A
 * refactor that severs deriveKrdantas does not make any word look WRONG — it
 * makes लिङ्ग on कृदन्त fall from 60% to 4%, every affected word keeps its
 * remaining tags, the build succeeds, and the corpus is quietly poorer.
 *
 * The same is true from the other end. As readings are added, a batch authored
 * with less care dilutes the corpus, and a percentage that drifts down two
 * points per session is invisible in any single diff.
 *
 * So both directions are ratcheted against a recorded floor. A number may go
 * up freely and a drop fails the build, which turns "the derivation still
 * works" and "the new readings are as complete as the old ones" from things
 * somebody has to remember into things the build knows.
 *
 *   bun scripts/check-coverage.ts             check against the floors
 *   bun scripts/check-coverage.ts --update    re-record them (see below)
 *
 * WHEN TO RAISE. After improving derivation or clearing backlog, run --update
 * and commit the new floors with the change that earned them. That is the whole
 * discipline: the floors move in their own commit, deliberately, with a diff a
 * reviewer can read — never as a side effect of the change that lowered them.
 *
 * WHEN TO LOWER. Almost never. A genuine reason exists — importing a large
 * batch of raw text that has not been annotated yet will lower every share at
 * once — and in that case lower them in a commit that says so. If the reason
 * is "the check is failing", the check is working.
 *
 * WHY SHARES AND NOT COUNTS. A count rises whenever a reading is added, so a
 * count-based floor would pass while the corpus got thinner per word, which is
 * exactly the failure it is meant to catch. `complete/total` is stable under
 * adding good content and falls under adding careless content.
 */
import * as fs from 'fs';
import * as path from 'path';

const FLOORS = path.join(process.cwd(), 'content/coverage-floors.json');

type Shape = {
  types: Record<string, { complete: number; total: number }>;
  dimensions: Record<string, { filled: number; total: number }>;
  untyped: number;
};

/**
 * Dimensions worth ratcheting.
 *
 * Not every one: a dimension the corpus has barely started on (सुबन्त|स्वर at
 * 0%) has no floor to defend, and pinning it at zero is noise in the report.
 * These are the ones a derivation currently fills, which makes them exactly the
 * ones a broken derivation would empty.
 */
const WATCHED = /\|(लिङ्ग|वचन|विभक्ति|पुरुष|पद|लकार|गण|प्रयोग|कारक|कृत्|अर्थ|सर्वनाम-भेद|संख्या-भेद|अव्यय-भेद)$/;

/** Below this share, a dimension is not yet established enough to defend. */
const WATCH_MIN = 0.2;

function measure(): Shape {
  const p = Bun.spawnSync(['bun', 'scripts/check-complete.ts', '--json'], { stdout: 'pipe', stderr: 'pipe' });
  const out = new TextDecoder().decode(p.stdout).trim();
  if (!out.startsWith('{')) {
    console.error('check-complete --json produced no JSON:\n' + new TextDecoder().decode(p.stderr));
    process.exit(1);
  }
  return JSON.parse(out);
}

const now = measure();

/** share, rounded down to a tenth of a percent so noise cannot trip the gate. */
const share = (a: number, b: number) => (b ? Math.floor((1000 * a) / b) / 10 : 0);

const current: Record<string, number> = {};
for (const [t, v] of Object.entries(now.types)) {
  if (t === 'untyped') continue;
  current[`type:${t}`] = share(v.complete, v.total);
}
for (const [k, v] of Object.entries(now.dimensions)) {
  if (!WATCHED.test(k)) continue;
  const s = share(v.filled, v.total);
  if (s < WATCH_MIN * 100) continue;
  current[`dim:${k}`] = s;
}
// Untyped words are the one COUNT that is ratcheted, and as a ceiling rather
// than a floor: a word with no type is outside every paradigm, so it is not a
// share of anything — there is no denominator it belongs to.
current['untyped'] = now.untyped;

if (process.argv.includes('--update')) {
  fs.mkdirSync(path.dirname(FLOORS), { recursive: true });
  fs.writeFileSync(FLOORS, JSON.stringify(current, null, 2) + '\n');
  console.log(`Recorded ${Object.keys(current).length} floors → ${path.relative(process.cwd(), FLOORS)}`);
  process.exit(0);
}

if (!fs.existsSync(FLOORS)) {
  console.error(`No floors recorded. Run: bun scripts/check-coverage.ts --update`);
  process.exit(1);
}
const floors: Record<string, number> = JSON.parse(fs.readFileSync(FLOORS, 'utf-8'));

const dropped: string[] = [];
const gained: string[] = [];
for (const [k, floor] of Object.entries(floors)) {
  const val = current[k];
  if (val === undefined) {
    // A floor with nothing to measure is itself a regression: the type or
    // dimension stopped being produced at all.
    dropped.push(`${k}: no longer measured (floor ${floor})`);
    continue;
  }
  if (k === 'untyped') {
    if (val > floor) dropped.push(`untyped words rose to ${val} (ceiling ${floor})`);
    else if (val < floor) gained.push(`untyped ${floor} → ${val}`);
    continue;
  }
  if (val < floor) dropped.push(`${k}: ${val}% (floor ${floor}%)`);
  else if (val > floor) gained.push(`${k}: ${floor}% → ${val}%`);
}

const newKeys = Object.keys(current).filter((k) => !(k in floors));

console.log(
  `coverage: ${Object.keys(floors).length} floors held` +
    (gained.length ? `, ${gained.length} improved` : '') +
    (newKeys.length ? `, ${newKeys.length} new not yet recorded` : '')
);
if (gained.length) {
  console.log(`  improved (run --update to lock in): ${gained.slice(0, 6).join(', ')}`);
}
if (newKeys.length) console.log(`  new: ${newKeys.slice(0, 6).join(', ')}`);

if (dropped.length) {
  console.error(`\n${dropped.length} coverage regression(s):`);
  for (const d of dropped) console.error(`    ${d}`);
  console.error(
    '\n  Something that used to be filled is not any more. Either a derivation\n' +
      '  broke, or new readings were authored with less detail than the corpus\n' +
      '  standard. If the drop is intended, lower the floor in a commit that\n' +
      '  says why: bun scripts/check-coverage.ts --update'
  );
  process.exit(1);
}
