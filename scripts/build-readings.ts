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
    for (const r of readings) flat.push({ ...r, chapter: key });
  }

  // reader view: difficulty order by `segment`, ties broken by id (stable)
  const sequence = [...flat].sort(
    (a, b) => (a.segment ?? 9999) - (b.segment ?? 9999) || String(a.id).localeCompare(String(b.id))
  );

  fs.writeFileSync(OUTPUT, JSON.stringify({ chapters, sequence }, null, 2));
  console.log(
    `Wrote ${flat.length} readings — ${chapters.length} topical chapters + sequence view → ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main();
