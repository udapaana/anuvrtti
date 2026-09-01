#!/usr/bin/env bun
/**
 * check-new-readings.ts — new work gets no backlog to hide in.
 *
 * The corpus carries an annotation backlog, and the ratchets govern it: shares
 * may not fall, thin readings may not multiply. But a ratchet judges the whole
 * corpus, and a single new reading is a rounding error in every number it
 * checks — 348 readings absorb one thin one without any floor moving. That is
 * how the backlog was built in the first place: one reading at a time, each
 * individually invisible.
 *
 * So new readings are judged one at a time, against the only standard that
 * makes "complete on generation" mean something:
 *
 *   a reading ADDED relative to main must be 100% complete — every word typed,
 *   every required dimension filled, after derivation has done its part.
 *
 * That is a smaller ask than it sounds, deliberately. The authored kernel is
 * only the `source: 'authored'` dimensions; the build derives the rest (वचन,
 * लिङ्ग, पुरुष, पद, गण, प्रयोग, the closed-set tags…). An author who writes the
 * kernel gets completeness for free; this gate exists for the reading that
 * skips part of the kernel.
 *
 * MODIFIED readings are reported, not gated. Touching one word in a thin
 * backlog reading is an improvement, and a gate that demands the whole file be
 * cleared before a one-line fix can land would stop people fixing things —
 * the exact opposite of its job. The global ratchets still hold the line.
 *
 * The baseline is `origin/main`, because that is what a suggestion or a branch
 * lands against. On main itself the diff is empty and the gate passes — it has
 * already run on the branch. If origin/main is unreachable (a shallow or
 * detached checkout), the gate says so and passes rather than failing work it
 * cannot judge.
 */
import * as path from 'path';

function git(args: string[]): string | null {
  const p = Bun.spawnSync(['git', ...args], { stdout: 'pipe', stderr: 'pipe' });
  return p.exitCode === 0 ? new TextDecoder().decode(p.stdout).trim() : null;
}

const base = git(['merge-base', 'HEAD', 'origin/main']);
if (!base) {
  console.log('new readings: origin/main unreachable — gate skipped, ratchets still apply');
  process.exit(0);
}

// Working tree against the merge base, so uncommitted work is judged too —
// the point is to hear about a thin reading before it is committed, not after.
const diff = git(['diff', '--name-status', base, '--', 'content/readings/']) ?? '';
const added: string[] = [];
const modified: string[] = [];
for (const line of diff.split('\n').filter(Boolean)) {
  const [status, file] = line.split('\t');
  if (!file?.endsWith('.yaml') || path.basename(file).startsWith('_')) continue;
  if (status === 'A') added.push(file);
  else if (status === 'M') modified.push(file);
}
/*
  Untracked files are invisible to `git diff` — it compares content git knows
  about, and a brand-new YAML is not yet content git knows about. Which is
  exactly the file this gate most needs to see: the smoke test wrote a
  one-word reading, and the diff-only version waved it straight through.
*/
const untracked = git(['ls-files', '--others', '--exclude-standard', '--', 'content/readings/']) ?? '';
for (const file of untracked.split('\n').filter(Boolean)) {
  if (!file.endsWith('.yaml') || path.basename(file).startsWith('_')) continue;
  added.push(file);
}

if (!added.length && !modified.length) {
  console.log('new readings: none changed relative to origin/main');
  process.exit(0);
}

/** file → reading id: content/readings/07_kridanta/rd088.yaml → rd088 */
const idOf = (f: string) => path.basename(f, '.yaml');

const json = Bun.spawnSync(['bun', 'scripts/check-complete.ts', '--json'], { stdout: 'pipe', stderr: 'pipe' });
const out = new TextDecoder().decode(json.stdout).trim();
if (!out.startsWith('{')) {
  console.error('new readings: check-complete --json produced no JSON');
  process.exit(1);
}
const readings: Record<string, { complete: number; total: number }> = JSON.parse(out).readings ?? {};

const failures: string[] = [];
for (const f of added) {
  const id = idOf(f);
  const r = readings[id];
  if (!r) {
    // In the diff but not in the build: the id/filename mismatch build-readings
    // refuses, or the file never made it into readings.json. Either way the
    // reading does not exist as far as the app is concerned.
    failures.push(`${id}: added but absent from the built corpus — does its id match its filename?`);
    continue;
  }
  if (r.complete < r.total) {
    failures.push(`${id}: ${r.complete}/${r.total} words complete — run: bun scripts/check-complete.ts --reading ${id}`);
  }
}

const worked: string[] = [];
for (const f of modified) {
  const id = idOf(f);
  const r = readings[id];
  if (r) worked.push(`${id} ${r.complete}/${r.total}`);
}

console.log(
  `new readings: ${added.length} added, ${modified.length} modified vs origin/main` +
    (worked.length ? ` — modified now at: ${worked.slice(0, 6).join(', ')}` : '')
);

if (failures.length) {
  console.error(`\n${failures.length} new reading(s) below the standard — new work is born complete:`);
  for (const x of failures) console.error(`    ${x}`);
  console.error(
    '\n  The authored kernel is small: the `source: authored` dimensions in\n' +
      '  src/lib/usage/schema.ts. Everything else derives. See docs/AUTHORING.md.'
  );
  process.exit(1);
}
