#!/usr/bin/env npx tsx
/**
 * Build the graded-reader payload from content/readings/*.yaml.
 *
 * Ported from vidvat/grammar/src/build_reader_json.py. Emits TWO projections of
 * one corpus (the reader-vs-reference architecture):
 *   chapters[] — grouped by topic   → the REFERENCE view
 *   sequence[] — flat, by `segment`  → the READER view (difficulty order)
 *
 *   → static/data/readings.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const READINGS_DIR = path.join(process.cwd(), 'content/readings');
const SYLLABUS = path.join(READINGS_DIR, '_syllabus.yaml');
const OUTPUT = path.join(process.cwd(), 'static/data/readings.json');

function chapterTitles(): Record<string, string> {
  if (!fs.existsSync(SYLLABUS)) return {};
  const syl = parseYaml(fs.readFileSync(SYLLABUS, 'utf-8')) as any;
  const titles: Record<string, string> = {};
  for (const c of syl.chapters ?? []) titles[c.id] = c.title;
  return titles;
}

/**
 * Length bucket — the axis SPLIT OUT from `segment`.
 *
 * `segment` used to carry difficulty and length at once, which forced long
 * passages late: long read as hard. But the two are not correlated. A 40-word
 * narrative using only owned grammar is easier per-word than a 6-word sentence
 * with a णमुल् in it — it is merely longer. Collapsing them meant consolidation
 * passages (the cheapest way to build recurrence, since most words need light
 * glossing rather than full note apparatus) could not sit at the tier whose
 * grammar they consolidate.
 *
 * Split, difficulty ratchets BETWEEN tiers and length breathes WITHIN them:
 * short readings introduce a tier's new rules, then a passage at the SAME tier
 * reuses them at volume.
 *
 * Derived, not authored — it is a fact about the sentence, and hand-maintained
 * copies of derivable facts go stale. An author may still pin `length:`
 * explicitly (e.g. a dense verse that reads longer than its word count).
 * Counted in words rather than characters so it doesn't track script or sandhi.
 */
function lengthOf(r: any): 'short' | 'passage' | 'long' {
  if (r.length === 'short' || r.length === 'passage' || r.length === 'long') return r.length;
  const words = String(r.sentence ?? '')
    .replace(/[।॥]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  if (words <= 8) return 'short';
  if (words <= 25) return 'passage';
  return 'long';
}

function main() {
  const titles = chapterTitles();
  const chapters: any[] = [];
  const flat: any[] = [];

  const files = fs
    .readdirSync(READINGS_DIR)
    .filter((f) => f.endsWith('.yaml') && !f.startsWith('_'))
    .sort();

  for (const file of files) {
    const doc = parseYaml(fs.readFileSync(path.join(READINGS_DIR, file), 'utf-8')) as any;
    const readings = doc?.readings ?? [];
    if (!readings.length) continue;
    const stem = file.replace(/\.yaml$/, ''); // '01_karaka'
    const key = stem.includes('_') ? stem.slice(stem.indexOf('_') + 1) : stem; // 'karaka'
    chapters.push({ id: key, title: titles[key] ?? key, readings });
    for (const r of readings) flat.push({ ...r, chapter: key, length: lengthOf(r) });
  }

  // reader view: DIFFICULTY order by `segment` alone — never by length.
  // These are independent axes (see lengthOf): a long passage built from
  // grammar the reader already owns is EASIER per-word than a short sentence
  // carrying a new rule. Sorting on length would push exactly the
  // consolidation passages we want mid-tier to the end of the reader.
  const sequence = [...flat].sort(
    (a, b) => (a.segment ?? 9999) - (b.segment ?? 9999) || String(a.id).localeCompare(String(b.id))
  );

  fs.writeFileSync(OUTPUT, JSON.stringify({ chapters, sequence }, null, 2));
  console.log(
    `Wrote ${flat.length} readings — ${chapters.length} topical chapters + sequence view → ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main();
