#!/usr/bin/env bun
/**
 * check-register.ts — find notes that assume vocabulary the reader lacks.
 *
 * A `vyakhya_en` note is read by someone who has just met the sentence, not by
 * someone who already knows the grammar. ex001's note used to explain नरः in
 * terms of प्रथमा — a word the reader first meets in that very reading, in the
 * gloss beside it.
 *
 * This walks the corpus in READER ORDER and reports a technical term used in a
 * note before any earlier reading has introduced it. "Introduced" means the term
 * appears as a `term` tag on some word, which is where the glosses live.
 *
 * Ordinary Sanskrit words quoted from the sentence are not flagged — quoting
 * ग्रामम् to talk about ग्रामम् is the point. Only vocabulary that functions as
 * grammatical metalanguage counts, which is exactly the set that appears as a
 * `term` tag somewhere in the corpus.
 *
 * Usage: bun scripts/check-register.ts [--full]
 */
import * as fs from 'fs';
import * as path from 'path';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');

function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8')).sequence as any[];

  // The metalanguage: every term the corpus ever uses as a gloss tag.
  const technical = new Set<string>();
  for (const r of corpus)
    for (const w of r.words ?? [])
      for (const n of w.notes ?? []) if (n.term) technical.add(n.term);

  const introduced = new Set<string>();
  const cold: { id: string; pos: number; term: string; where: string }[] = [];

  for (const r of corpus) {
    // Terms this reading itself introduces are available to its own note.
    const here = new Set<string>();
    for (const w of r.words ?? [])
      for (const n of w.notes ?? []) if (n.term) here.add(n.term);

    for (const [field, text] of [
      ['note', String(r.vyakhya_en ?? '')],
      ['teaches', String(r.teaches ?? '')]
    ] as [string, string][]) {
      for (const m of text.matchAll(/[ऀ-ॿ]+/g)) {
        const t = m[0];
        if (!technical.has(t)) continue; // an ordinary word, not metalanguage
        if (introduced.has(t) || here.has(t)) continue;
        cold.push({ id: r.id, pos: r.position, term: t, where: field });
      }
    }

    for (const t of here) introduced.add(t);
    for (const [, text] of [['', String(r.vyakhya_en ?? '')]] as [string, string][])
      for (const m of text.matchAll(/[ऀ-ॿ]+/g))
        if (technical.has(m[0])) introduced.add(m[0]);
  }

  // Dedupe: the same term cold in the same reading is one problem, not five.
  const seen = new Set<string>();
  const uniq = cold.filter((c) => {
    const k = `${c.id}:${c.term}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  console.log(`\n  REGISTER CHECK — terms used before the reader has them\n`);
  console.log(`    ${uniq.length} occurrence(s) across ${new Set(uniq.map((c) => c.id)).size} reading(s)\n`);
  if (uniq.length) {
    const show = process.argv.includes('--full') ? uniq : uniq.slice(0, 25);
    for (const c of show) {
      console.log(`    pos ${String(c.pos).padStart(3)}  ${c.id.padEnd(7)} ${c.where.padEnd(8)} ${c.term}`);
    }
    if (show.length < uniq.length) console.log(`    … and ${uniq.length - show.length} more (--full)`);
    console.log();
    console.log(`  Not all of these are defects — a term may be self-evident in context,`);
    console.log(`  or glossed inline in the prose. Read before rewriting.\n`);
  }
}

main();
