#!/usr/bin/env bun
/**
 * check-sandhi.ts — the corpus is written in padas; its sandhi is built.
 *
 * A reading's sentence is its padas (नरः गच्छति), and the build makes the
 * written text, the saṃhitā (नरो गच्छति), by joining them with vidyut-sandhi
 * from the same commit as the grammar engine (scripts/lib/sandhi.ts). That is
 * what lets padaccheda show every word, and what keeps the sandhi right: it is
 * computed, not typed. Before this, 54% of the corpus's word junctions were
 * shown without their sandhi, and words were stored joined (रामश्च under the
 * lemma राम) with no pada behind them.
 *
 * So this checks the one thing that could undo it — a sentence token that is
 * not a pada:
 *   - an ending no pada has: anusvāra (a pada ends म्), -ो where the stem is an
 *     अ-stem (a pada ends ः), a voiced stop (ग्/द्/ड्/ब्), य्/व्/स्/श्/र्;
 *   - an avagraha (सोऽपि is सः + अपि).
 * The sandhi chapter's display syntax (क + ख → ग) and the Vedic text, whose
 * sandhi is not the classical joiner's, are out of scope.
 *
 * `bun scripts/padify.ts` turns such a token back into its pada when the
 * engine can prove which one it is; a multi-word token needs a person.
 *
 *   bun scripts/check-sandhi.ts           # fail on any joined token
 *   bun scripts/check-sandhi.ts --list    # and list them
 */
import * as fs from 'fs';
import * as path from 'path';
import { deaccent } from '../src/lib/usage/normalize';

const ROOT = process.cwd();
const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8')).sequence as any[];

/*
  Words that are one pada however they look: the vocative of an उ-stem ends in
  -ो (गुरो, धेनो), and कश्चित्/कोऽपि-type indefinites and a few particles are
  written as one word by every edition.
*/
const ONE_WORD = /^(कस्मिंश्चित्|कश्चित्|कश्चन|किञ्चित्|कोऽपि|अहो|भो|भोः|नो|अथो)$/;

const joined: string[] = [];
let readings = 0, samhita = 0;
for (const r of corpus) {
  if (/rigveda/.test(r.chapter ?? '') || !r.sentence || /[→=+]/.test(r.sentence)) continue;
  readings++;
  if (r.samhita) samhita++;
  const lemmaOf = new Map((r.words ?? []).map((w: any) => [deaccent(w.form), deaccent(w.lemma ?? '')]));
  for (const raw of String(r.sentence).split(/[\s।॥,;:!?"“”‘’()—–]+/).filter(Boolean)) {
    const t = deaccent(raw);
    if (ONE_WORD.test(t)) continue;
    const lem = lemmaOf.get(t) ?? '';
    const bad =
      /ऽ/.test(t) ? 'an avagraha (two padas)' :
      /ं$/.test(t) ? 'anusvāra at the end (the pada ends म्)' :
      /[गदडबजयवसशषर]्$/.test(t) ? 'an ending no pada has' :
      (/ो$/.test(t) && /[क-ह]$/.test(lem)) ? '-ो of an अ-stem (the pada ends ः)' : '';
    if (bad) joined.push(`${r.id}  ${raw}  — ${bad}`);
  }
}

if (process.argv.includes('--list')) for (const x of joined) console.log('    ' + x);
if (joined.length) {
  console.log(`sandhi: ${joined.length} sentence token(s) are not padas`);
  for (const x of joined.slice(0, 12)) console.log('    ' + x);
  console.log('\n  Write the padas; the build makes the saṃhitā. `bun scripts/padify.ts --write`\n  fixes a token the engine can prove; a joined pair needs splitting by hand.');
  process.exit(1);
}
console.log(`sandhi: every sentence is padas — ${samhita} of ${readings} readings get a saṃhitā built by vidyut-sandhi`);
