/**
 * kale-roman.ts — take out the roman Kāle printed beside his Devanagari.
 *
 * The 1894 book was set for readers who might not read Devanagari, so it
 * glosses a term with its own transliteration: "देव (deva)", "Prātipadika
 * (प्रातिपदिक)". The site has a script toggle, so the reader already sees
 * every word in the script they chose, and the bracket says the same word
 * twice — in roman mode, literally twice. Three shapes: देव (deva), the
 * reverse Prātipadika (प्रातिपदिक), and the bracketless अ a — except in the alphabet's own tables, which teach
 * the letters by that pairing.
 *
 * Only a bracket that IS the word goes. Kāle's spelling is older than IAST
 * ("refa", "Vṛitti"), so the comparison drops diacritics and folds ri→r,
 * sh→s, ch→c, f→ph; anything that does not match after that — a meaning, a
 * derivation, "of six kinds" — is his gloss and stays.
 *
 *   bun scripts/lib/kale-roman.ts            rewrite the vendored payload
 *   import { dropRoman } from './lib/kale-roman'   (build-dukrnkarane.ts)
 */
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
initSync({ module: fs.readFileSync(require.resolve('shlesha/shlesha_bg.wasm')) });
const iast = (s: string) => transliterate(s, 'devanagari', 'iast') as string;

/** The letters of a roman spelling, whatever system it was written in. */
function letters(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[-\s'’.,*@[\]()]/g, '')
    .replace(/ri/g, 'r')
    .replace(/sh/g, 's')
    .replace(/ch/g, 'c')
    .replace(/f/g, 'ph');
}
const same = (roman: string, deva: string) => letters(roman) === letters(iast(deva));

/** One roman word or a few, bare, italic or @[…]-marked — never a sentence. */
const ROMAN = String.raw`(?:@\[[^\]\n]+\]|\*?[A-Za-zĀ-ſḀ-ỿ'’-]+\*?(?: [A-Za-zĀ-ſḀ-ỿ'’-]+){0,3})`;

/** The alphabet chapter (§§ 1–17): its tables pair each letter with its sound
 *  (अ a, क k, क्ष kṣa) to teach the letters, and a reader there may not yet
 *  read either script — so its bracketless pairs stay. */
export const ALPHABET_LAST = 17;

export function dropRoman(text: string, opts: { keepPairs?: boolean } = {}): { text: string; dropped: number } {
  let dropped = 0;
  // देव (deva)
  let out = text.replace(new RegExp(String.raw`(@deva\[([^\]]+)\])[ \t]*\((${ROMAN})\)`, 'g'), (all, tag, deva, roman) =>
    same(roman, deva) ? (dropped++, tag) : all
  );
  // Prātipadika (प्रातिपदिक) — the term set in the chosen script stands for both
  out = out.replace(new RegExp(String.raw`(@\[[^\]\n]+\]|[A-Za-zĀ-ſḀ-ỿ'’-]+)[ \t]*\((@deva\[([^\]]+)\])\)`, 'g'), (all, roman, tag, deva) =>
    same(roman, deva) ? (dropped++, tag) : all
  );
  // अ a — the same pairing with no bracket (kept in the alphabet chapter)
  if (!opts.keepPairs) out = out.replace(/(@deva\[([^\]]+)\])[ \t]*@\[([^\]\n]+)\]/g, (all, tag, deva, roman) =>
    same(roman, deva) ? (dropped++, tag) : all
  );
  return { text: out, dropped };
}

if (import.meta.main) {
  const file = path.join(process.cwd(), 'static/data/dukrnkarane.json');
  const d = JSON.parse(fs.readFileSync(file, 'utf-8'));
  let n = 0;
  for (const r of d.rules) {
    for (const k of ['body', 'title'] as const) {
      if (typeof r[k] !== 'string') continue;
      const x = dropRoman(r[k], { keepPairs: r.n <= ALPHABET_LAST });
      r[k] = x.text;
      n += x.dropped;
    }
  }
  fs.writeFileSync(file, JSON.stringify(d));
  console.log(`dropped ${n} transliterations Kāle printed beside the Devanagari`);
}
