#!/usr/bin/env bun
/**
 * scaffold-reading.ts — the first draft of a reading's annotation, generated.
 *
 * "Complete on generation" has a gate now: a new reading must arrive 100%
 * annotated or the build fails. This is the other half — the tool that makes
 * clearing that gate cheap, so the standard raises quality instead of raising
 * friction.
 *
 * The observation it rests on: THE CORPUS IS ITS OWN LEXICON. After 348
 * readings, most words in a new sentence have been seen before, and their
 * hardest annotations — lemma, type, the authored kernel — were already made
 * by someone who thought about exactly this form. So for every token that
 * matches a known form, the scaffold copies the annotation from its CLEANEST
 * prior occurrence (fewest missing dimensions), and the author confirms
 * rather than transcribes.
 *
 * What is copied, and what is flagged:
 *
 *   - `term` notes with their glosses — the annotation itself.
 *   - NOT `cite` notes. A citation ties a word to what its reading was
 *     teaching; new readings teach something else, and inherited citations are
 *     how the reveal-density number rotted last time.
 *   - Context-dependent values (कारक, प्रयोग, सम्बन्धार्थ) are copied but
 *     marked `CONFIRM`: देवम् is द्वितीया wherever it appears, but whether it
 *     is कर्मन् is a fact about THIS sentence, and only the author has read it.
 *
 * A token never seen before becomes a stub with the kernel it owes spelled
 * out, because "what do I still have to write?" should be answered in the
 * file, not by running the checker and reading the schema.
 *
 *   bun scripts/scaffold-reading.ts <chapter-dir> <id> "<sentence>"
 *   bun scripts/scaffold-reading.ts 09_katha ex300 "रामः वनम् गच्छति।"
 *   … --stdout   print instead of writing
 *
 * Refuses to overwrite: a scaffold is a starting point, and clobbering a file
 * someone has worked on with a fresh skeleton would be the tool at its worst.
 */
import * as fs from 'fs';
import * as path from 'path';
import { typeOf } from '../src/lib/usage/schema';
import { missingFor, termsOf, typingTermsOf, type AnnotatedWord } from '../src/lib/usage/complete';
import { deaccent } from '../src/lib/usage/normalize';

const [chapter, id, sentence] = process.argv.slice(2).filter((a) => a !== '--stdout');
const toStdout = process.argv.includes('--stdout');

if (!chapter || !id || !sentence) {
  console.error('usage: bun scripts/scaffold-reading.ts <chapter-dir> <id> "<sentence>" [--stdout]');
  process.exit(1);
}

const outPath = path.join('content/readings', chapter, `${id}.yaml`);
if (!toStdout && fs.existsSync(outPath)) {
  console.error(`${outPath} already exists — a scaffold never overwrites worked-on files.`);
  process.exit(1);
}
if (!toStdout && !fs.existsSync(path.dirname(outPath))) {
  console.error(`no such chapter: content/readings/${chapter}/`);
  process.exit(1);
}

const R = JSON.parse(fs.readFileSync('static/data/readings.json', 'utf-8'));

/** Values the sentence decides, which a copy therefore cannot. */
const CONTEXT_DEPENDENT = new Set([
  'कर्तृ', 'कर्मन्', 'करण', 'सम्प्रदान', 'अपादान', 'अधिकरण', 'सम्बन्ध',
  'कर्तरि', 'कर्मणि', 'भावे',
  'हेतु', 'सहार्थ', 'निर्धारण', 'अर्थ', 'इत्थंभूतलक्षण', 'सति सप्तमी', 'तत्र भवः'
]);

type Best = { w: AnnotatedWord & { notes?: any[] }; reading: string; missing: number };
const bestByForm = new Map<string, Best>();
for (const r of R.sequence ?? []) {
  for (const w of (r.words ?? []) as any[]) {
    const key = deaccent(String(w.form ?? ''));
    if (!key) continue;
    const t = typeOf(typingTermsOf(w));
    const missing = t ? missingFor(t, w, termsOf(w)).length : 99;
    const prev = bestByForm.get(key);
    if (!prev || missing < prev.missing) bestByForm.set(key, { w, reading: r.id, missing });
  }
}

const yq = (s: string) => `'${String(s).replace(/'/g, "''")}'`;

const tokens = sentence
  .replace(/[।॥]/g, ' ')
  .split(/\s+/)
  .filter(Boolean)
  .map((t) => t.replace(/[,;—"“”?!]/g, ''))
  .filter(Boolean);

const lines: string[] = [];
lines.push(`- id: ${id}`);
lines.push(`  kind: graded`);
lines.push(`  # FIXME segment: where this sits in the difficulty order — see the`);
lines.push(`  # neighbouring files in this chapter for the local range.`);
lines.push(`  segment: 999`);
lines.push(`  sentence: ${yq(sentence)}`);
lines.push(`  translation: 'FIXME'`);
lines.push(`  # One line naming what is IN the passage, not what it is for. Corpus median: 78 chars.`);
lines.push(`  teaches: 'FIXME'`);
lines.push(`  words:`);

let copied = 0, partial = 0, fresh = 0;
const report: string[] = [];

for (const tok of tokens) {
  const hit = bestByForm.get(deaccent(tok));
  lines.push(`  - form: ${tok}`);
  if (hit) {
    const w = hit.w as any;
    if (w.lemma) lines.push(`    lemma: ${w.lemma}`);
    if (w.gloss) lines.push(`    gloss: ${yq(String(w.gloss))}`);
    const terms = (w.notes ?? []).filter((n: any) => n.term);
    if (terms.length) {
      lines.push(`    notes:`);
      for (const n of terms) {
        lines.push(`    - term: ${n.term}`);
        if (n.en) lines.push(`      en: ${yq(String(n.en))}`);
        if (CONTEXT_DEPENDENT.has(n.term)) {
          lines.push(`      # CONFIRM: context-dependent — copied from ${hit.reading}, but whether`);
          lines.push(`      # it holds HERE is a fact about this sentence, not about the form.`);
        }
      }
    }
    if (hit.missing === 0) { copied++; report.push(`  ✓ ${tok} — copied complete from ${hit.reading}`); }
    else { partial++; report.push(`  ◐ ${tok} — copied from ${hit.reading}, which itself misses ${hit.missing} tag(s)`); }
  } else {
    fresh++;
    report.push(`  ✚ ${tok} — new to the corpus`);
    lines.push(`    lemma: FIXME`);
    lines.push(`    gloss: 'FIXME'`);
    lines.push(`    notes:`);
    lines.push(`    # The authored kernel, by type — the build derives the rest:`);
    lines.push(`    #   noun      विभक्ति + कारक        (e.g. term: प्रथमा / term: कर्तृ)`);
    lines.push(`    #   verb      लकार                  (e.g. term: लट्)`);
    lines.push(`    #   participle कृत् affix            (e.g. term: क्त — or bare term: कृदन्त)`);
    lines.push(`    #   indeclinable                     term: अव्यय`);
    lines.push(`    - term: FIXME`);
    lines.push(`      en: 'FIXME'`);
  }
}

const yaml = lines.join('\n') + '\n';

if (toStdout) {
  console.log(yaml);
} else {
  fs.writeFileSync(outPath, yaml);
  console.log(`wrote ${outPath}`);
}

console.log(
  `\n${tokens.length} token(s): ${copied} copied complete, ${partial} copied partial, ${fresh} new\n` +
    report.join('\n') +
    `\n\nthen: fill the FIXMEs, and\n` +
    `  bun run build:readings && bun scripts/check-complete.ts --reading ${id}\n` +
    `The gate (bun run check) holds a new reading at 100%.`
);
