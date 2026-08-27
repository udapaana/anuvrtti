#!/usr/bin/env bun
/**
 * check-suggest-paths.ts — what a suggestion from the site may and may not edit.
 *
 * /api/suggest opens a pull request on a reader's behalf using a service token,
 * so its path allowlist is the boundary between "a reader corrected a gloss" and
 * "a reader wrote to an arbitrary file in the repository". An allowlist is worth
 * exactly what its rejections prove, and nothing was proving them.
 *
 * The cases below are the ones that matter: the authored files a correction must
 * reach, the generated files an edit would be erased by, and the traversal
 * attempts that would slip past a naive prefix test.
 */
import { ALLOWED_PREFIXES, ALLOWED_FILES, validatePath } from '../src/routes/api/suggest/paths';

type Case = [path: string, allowed: boolean, why: string];

const CASES: Case[] = [
  // ── authored: a correction must be able to land here ──────────────────────
  ['content/readings/06_readings/rd088.yaml', true, 'an annotation — the whole point'],
  ['content/readings/_syllabus.yaml', true, 'the plan'],
  ['static/data/commentary/1/1/1.toml', true, 'per-sūtra commentary'],
  ['static/data/jargon.yaml', true, 'the glossary'],
  ['static/data/systems.toml', true, 'the systems book'],
  ['static/content/paths/samjna.md', true, 'a syllabus path'],
  ['static/data/passages/kumara.json', true, 'a passage'],

  // ── generated: an edit here is erased by the next build ───────────────────
  ['static/data/readings.json', false, 'generated — the build overwrites it'],
  ['static/data/usage.json', false, 'generated'],
  ['static/data/sutras.json', false, 'generated'],
  ['static/data/sutra-refs/1/1/1.json', false, 'generated'],
  ['static/data/stats.json', false, 'generated'],
  ['static/content/paths-index.json', false, 'generated'],
  ['static/data/jargon.json', false, 'generated FROM jargon.yaml — edit the yaml'],

  // ── vendored: corrections belong upstream ─────────────────────────────────
  ['static/data/kashika.json', false, 'vendored corpus'],
  ['data/dhatupatha.tsv', false, 'vendored, and not an editable type'],

  // ── outside the data trees entirely ───────────────────────────────────────
  ['src/routes/api/suggest/+server.ts', false, 'source code'],
  ['package.json', false, 'not a data file'],
  ['.github/workflows/deploy.yml', false, 'CI'],

  // ── traversal: prefix-matching alone would let these through ──────────────
  ['content/../static/data/readings.json', false, 'climbs out of content/'],
  ['content/../../etc/passwd', false, 'climbs out of the repo'],
  ['content//readings/x.yaml', false, 'double slash'],
  ['/content/readings/x.yaml', false, 'absolute'],

  // ── right tree, wrong type ────────────────────────────────────────────────
  ['content/readings/rd088.exe', false, 'not an editable type'],
  ['content/readings/rd088', false, 'no extension'],
];

let bad = 0;
for (const [path, want, why] of CASES) {
  const err = validatePath(path);
  const got = err === null;
  if (got !== want) {
    bad++;
    console.error(
      `  ${want ? 'SHOULD ALLOW' : 'SHOULD REJECT'}  ${path}\n` +
        `      (${why})${err ? `\n      got: ${err}` : '\n      got: allowed'}`
    );
  }
}

if (bad) {
  console.error(`\n${bad} of ${CASES.length} suggestion-path case(s) wrong`);
  process.exit(1);
}
console.log(
  `suggest paths: ${CASES.length} cases pass ` +
    `(${ALLOWED_PREFIXES.length} prefixes, ${ALLOWED_FILES.length} single files)`
);
