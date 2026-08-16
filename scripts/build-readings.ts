#!/usr/bin/env bun
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
import { parseGrid, isRectangular } from '../src/lib/reader/paradigm';

const READINGS_DIR = path.join(process.cwd(), 'content/readings');
const SYLLABUS = path.join(READINGS_DIR, '_syllabus.yaml');
const OUTPUT = path.join(process.cwd(), 'static/data/readings.json');

/** Chapter ids in syllabus order — the intended pedagogical sequence. */
function syllabusOrder(): string[] {
  if (!fs.existsSync(SYLLABUS)) return [];
  const syl = parseYaml(fs.readFileSync(SYLLABUS, 'utf-8')) as any;
  return (syl.chapters ?? []).map((c: any) => c.id);
}

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
    const src = fs.readFileSync(path.join(READINGS_DIR, file), 'utf-8');
    // Catch the recurring authoring slip before the YAML parser does: an
    // unquoted scalar containing a double quote. YAML reports it as
    // "Unexpected scalar at node end" with a line number and no cause, which
    // is a poor error for a mistake that happens on nearly every batch.
    src.split('\n').forEach((line, i) => {
      // Only a value that STARTS with a quote is a problem — YAML then reads it
      // as a quoted scalar and chokes on whatever follows the closing quote.
      // A quote mid-value ('the sense "along with"') parses fine and is common.
      const m = line.match(/^\s+(en|role|gloss|teaches|translation): (".*)$/);
      // A properly quoted scalar closes its quote, allowing \" inside it.
      const wellFormed = m ? /^"(?:[^"\\]|\\.)*"$/.test(m[2].trim()) : true;
      if (m && !wellFormed) {
        throw new Error(
          `${file}:${i + 1} — unquoted scalar contains a double quote.\n` +
            `  ${line.trim()}\n` +
            `  Wrap it in single quotes, or escape the inner quotes as \\".`
        );
      }
    });
    const doc = parseYaml(src) as any;
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
  //
  // Ties break by `order` when authored (see below), then by id. Id order is
  // AUTHORING order and disagrees with pedagogical order on ~33% of pairs —
  // ex119-130 were written late but belong at tier 5 — so it is only ever a
  // stable-sort fallback, never a meaningful sequence.
  // Within one tier, keep a chapter's readings TOGETHER. 25 of 57 tiers have
  // more than one chapter in them, and the old fallback was `id` — authoring
  // order — so chapters interleaved arbitrarily: the reader got kāraka, then
  // sandhi, then kāraka again. That produced 70 topic switches across 223
  // readings, a change every 3.2 readings, 28 of them a single reading before
  // jumping away. Grouping by chapter inside the tier removes the thrash
  // without touching difficulty order, which `segment` still owns entirely.
  //
  // Chapter order within a tier follows the syllabus, so it is a pedagogical
  // decision rather than a filename artefact; chapters absent from the
  // syllabus sort last, alphabetically.
  const chapterRank = new Map<string, number>();
  syllabusOrder().forEach((id, i) => chapterRank.set(id, i));
  const rank = (ch: string) => chapterRank.get(ch) ?? 500;

  const sequence = [...flat].sort(
    (a, b) =>
      (a.segment ?? 9999) - (b.segment ?? 9999) ||
      (a.order ?? 0) - (b.order ?? 0) ||
      rank(a.chapter) - rank(b.chapter) ||
      String(a.chapter).localeCompare(String(b.chapter)) ||
      String(a.id).localeCompare(String(b.id))
  );

  // Gloss-coverage check. The reader matches each sentence token against the
  // `words` table by exact form; a miss renders the token bare with no gloss
  // and no error. That silence is the danger — it looks like a deliberate
  // ungloss. Long prose passages are where it bites (a trailing comma is
  // enough), so report it at build time rather than leaving it to be noticed.
  // Scoped to PROSE — see the skip below. Anusvāra is normalised because ग्रामं and
  // ग्रामम् are the same word — a corpus-wide orthographic split that silently
  // detached glosses in 12 readings before this check existed.
  const anusvara = (s: string) => s.replace(/ं$/, 'म्');
  const orphans: string[] = [];
  for (const r of sequence) {
    const forms = new Set((r.words ?? []).map((w: any) => anusvara(w.form)));
    if (!forms.size) continue;
    // Skip tables and the "क + ख → ग" sandhi display syntax: unglossed tokens
    // are correct in both. Tables are detected by SHAPE via the shared module,
    // not by the `kind` field — ex094 is a paradigm that never declared itself
    // one, so a kind-based test reported all 24 of its cells as missing glosses.
    if (isRectangular(parseGrid(r.sentence)) || String(r.sentence ?? '').includes('→')) continue;
    const toks = String(r.sentence ?? '')
      .replace(/[।॥,;—"“”?!]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .map(anusvara);
    const missed = toks.filter((t) => !forms.has(t));
    const unused = [...forms].filter((f: any) => !toks.includes(f));
    if (missed.length || unused.length) {
      orphans.push(
        `  ${r.id}: ${missed.length ? `${missed.length} token(s) with no gloss [${missed.slice(0, 4).join(' ')}]` : ''}` +
          `${missed.length && unused.length ? ', ' : ''}` +
          `${unused.length ? `${unused.length} gloss entr(ies) matching no token [${unused.slice(0, 4).join(' ')}]` : ''}`
      );
    }
  }
  if (orphans.length) {
    console.warn(`\n⚠ gloss/token mismatches in ${orphans.length} reading(s):`);
    for (const o of orphans.slice(0, 15)) console.warn(o);
    if (orphans.length > 15) console.warn(`  … and ${orphans.length - 15} more`);
    console.warn('');
  }

  // Dense display position, derived. `segment` is the AUTHORED tier and is
  // deliberately sparse (see the ×10 convention in _syllabus.yaml): tiers were
  // packed 1..57 with no gaps, so inserting a consolidation passage between
  // tiers 5 and 6 meant renumbering every reading above it. Authors now number
  // in 10s and insert freely; `position` is what the reader counts with, and it
  // is recomputed on every build so it can never drift from the authored order.
  sequence.forEach((r, i) => (r.position = i + 1));

  fs.writeFileSync(OUTPUT, JSON.stringify({ chapters, sequence }, null, 2));
  console.log(
    `Wrote ${flat.length} readings — ${chapters.length} topical chapters + sequence view → ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main();
