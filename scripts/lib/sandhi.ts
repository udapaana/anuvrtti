/**
 * sandhi.ts — the saṃhitā a reading's padas make, by vidyut-sandhi.
 *
 * Readings are authored as padas — नरः गच्छति — because that is what a word
 * list can annotate and what a beginner can read. But Sanskrit is written in
 * saṃhitā, नरो गच्छति, and 54% of the corpus's word junctions were shown
 * without the sandhi that applies to them. This builds the written text from
 * the padas, with the external-sandhi joiner from the same vidyut commit as
 * the grammar engine (static/wasm/vidyut-sandhi, built by build-wasm.sh).
 *
 * Each written token remembers which pada tokens it came from, so a reader can
 * show सोऽपि and still select सः or अपि inside it, and padaccheda is just the
 * padas again.
 *
 * Tokenisation mirrors the reader's tokensOf() exactly (daṇḍas spaced out,
 * split on whitespace), so a `from` index IS the reader's token index.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
initSync({ module: fs.readFileSync(require.resolve('shlesha/shlesha_bg.wasm')) });
const tr = (s: string, a: string, b: string) => transliterate(s, a, b) as string;

const DIR = path.join(process.cwd(), 'static/wasm/vidyut-sandhi');
const mod = await import(path.join(DIR, 'vidyut_sandhi.js'));
await mod.default({ module_or_path: fs.readFileSync(path.join(DIR, 'vidyut_sandhi_bg.wasm')) });
const ENGINE = mod.Sandhi.init();

export type Written = { text: string; from: number[] };
/** What the build knows about the pada at a token: enough to find its final sound. */
export type PadaInfo = { lemma?: string; vocative?: boolean } | null;

const PUNCT = /[।॥,;—"“”?!:()]/g;
const VOWEL = /^[aAiIuUfFxXeEoO]/;

/*
  A visarga is not a sound with one fate: it is स् or र् underneath (8.2.66),
  and which one decides the sandhi — रामः + अत्र is रामोऽत्र, पुनः + अत्र is
  पुनरत्र. It is र् when the word's own stem ends in र् (पुनर्, प्रातर्, अन्तर्)
  and in the vocative of an ऋ-stem (पितः, भ्रातः ← पितर्); स् otherwise.
*/
function underlying(slp: string, info: PadaInfo): string {
  if (slp.endsWith('M')) return slp.slice(0, -1) + 'm';
  if (!slp.endsWith('H')) return slp;
  const lem = info?.lemma ? tr(info.lemma, 'devanagari', 'slp1') : '';
  const r = /r$/.test(lem) || (info?.vocative && /f$/.test(lem));
  return slp.slice(0, -1) + (r ? 'r' : 's');
}
/** At a pause the underlying स्/र् is visarga again, and म् is written म्. */
const pausal = (slp: string) => slp.replace(/[sr]$/, 'H');

/**
 * Join two adjacent words. Returns the written result — one token, or two
 * separated by a space. vidyut's join concatenates when no rule applies; for
 * two whole words that means they simply stay apart, except a consonant
 * before a vowel, which really does attach (वनम् + अगच्छताम् → वनमगच्छताम्).
 */
function join(a: string, b: string): string {
  const j = ENGINE.join(a, b) as string;
  // no rule fired: two words stay apart — unless the first ends in a consonant,
  // which in Devanagari binds to whatever follows (विनयाद्याति)
  if (j === a + b && !/[^aAiIuUfFxXeEoOHM]$/.test(a)) return pausal(a) + ' ' + b;
  /*
    vidyut writes as GRETIL romanises — रामश् चात्र, पुनर् अत्र, so 'pi — with
    a space after a word that ends in a consonant. Devanagari does not: a
    consonant cannot close a written word mid-sentence, so it binds to what
    follows (रामश्चात्र, पुनरत्र, सोऽपि). Visarga and anusvāra are not
    consonants in this sense; they stand at a word's end.
  */
  return j.replace(/ '/g, "'").replace(/([^aAiIuUfFxXeEoOHM']) (?=\S)/g, '$1');
}

export function samhitaOf(sentence: string, padaAt: (clean: string, ti: number) => PadaInfo): Written[] {
  const raw = sentence.replace(/॥/g, ' ॥ ').replace(/।/g, ' । ').split(/\s+/).filter(Boolean);
  const out: { slp: string; trail: string; from: number[]; punct?: string }[] = [];
  let open = false;   // can the last written token still join the next?
  raw.forEach((tx, ti) => {
    const clean = tx.replace(PUNCT, '').trim();
    const trail = tx.slice(tx.replace(/[।॥,;—"“”?!:()]+$/, '').length);
    if (!clean) { out.push({ slp: '', trail: tx, from: [ti], punct: tx }); open = false; return; }
    // a token written with display syntax (→, +) is not Sanskrit to join
    if (/[→+=]/.test(clean)) { out.push({ slp: '', trail: '', from: [ti], punct: tx }); open = false; return; }
    const cur = underlying(tr(clean, 'devanagari', 'slp1'), padaAt(clean, ti));
    const last = out[out.length - 1];
    if (open && last) {
      const j = join(last.slp, cur);
      const sp = j.lastIndexOf(' ');
      if (sp < 0) { last.slp = j; last.from.push(ti); last.trail = trail; }
      else { last.slp = j.slice(0, sp); out.push({ slp: j.slice(sp + 1), trail, from: [ti] }); }
    } else {
      out.push({ slp: cur, trail, from: [ti] });
    }
    open = !trail;   // punctuation is a pause: no sandhi across it
  });
  return out.map((o) =>
    o.punct !== undefined
      ? { text: o.punct, from: o.from }
      : { text: tr(pausal(o.slp), 'slp1', 'devanagari').replace(/'/g, 'ऽ') + o.trail, from: o.from });
}
