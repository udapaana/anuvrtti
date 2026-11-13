#!/usr/bin/env bun
/**
 * snapshot-text.ts — run vidyut over a whole text and commit what it says.
 *
 *   bun scripts/snapshot-text.ts [<id> …]     → data/text-analyses/<id>.json
 *   bun scripts/snapshot-text.ts --check      regenerate in memory, fail on any difference
 *
 * LOCAL ONLY. It needs the native engine and the MW cache, neither of which CI
 * has (docs/ARCHITECTURE.md, "Whole texts", says why the snapshot is committed
 * instead of built there):
 *   ./scripts/build-vidyut-native.sh   bun scripts/import-mw-gloss.ts
 *
 * For every surface word of every section: cheda's padas, and for each pada
 * every analysis the kosha holds (re-ranked; vidyut's own pick marked). Plus
 * a lexicon: MW's entry for every lemma any alternative or any override names,
 * so an author's corrected lemma is glossed without the MW cache in CI.
 *
 * Rerun after editing text.yaml, after adding an override with a new lemma,
 * and after moving VIDYUT_REV. `bun run check` says when (check-texts.ts).
 */
import * as fs from 'fs';
import * as path from 'path';
import { Engine, analyzeSentence, analyzeWord, gloss, slp, type Token } from './analyze-text';
import {
  SNAP_DIR, textIds, readText, readOverrides, linesOf, wordsOf, inputsOf, snapPath,
  encodeA, type Snapshot, type SnapWord, type Analysis
} from './lib/texts';

const args = process.argv.slice(2);
const check = args.includes('--check');
const ids = args.filter((a) => !a.startsWith('--'));

const enc = (a: any) => encodeA(a as Analysis);

/** Every pada an author's `split` writes, in the SLP1 the kosha keys (final ḥ as s). */
export function splitForms(id: string): string[] {
  const out = new Set<string>();
  for (const sec of Object.values(readOverrides(id)))
    for (const w of Object.values(sec ?? {}))
      for (const p of w.split ?? []) if (p.form && !p.member) out.add(kfKey(p.form));
  return [...out].sort();
}
export const kfKey = (form: string) => slp(form).replace(/H$/, 's');

/** Every lemma an override names, in SLP1. */
export function overrideLemmas(id: string): string[] {
  const out = new Set<string>();
  for (const sec of Object.values(readOverrides(id)))
    for (const w of Object.values(sec ?? {}))
      for (const p of [...(w.split ?? []), ...Object.values(w.fix ?? {})])
        for (const l of [p.lemma, p.root]) if (l) out.add(slp(l));
  return [...out];
}

async function snapshot(engine: Engine, id: string): Promise<Snapshot> {
  const t = readText(id);
  const sections: Snapshot['sections'] = [];
  const lemmas = new Set<string>();
  for (const s of t.sections) {
    const words: SnapWord[] = wordsOf(s).map((w) => ({ ...w, padas: [] }));
    let base = 0;
    for (const [li, line] of linesOf(s).entries()) {
      const n = words.filter((w) => w.line === li).length;
      const toks: Token[] = await analyzeSentence(engine, line);
      let last = 0;
      for (const tk of toks) {
        // a pada cheda produced but could not place goes with the word before it
        const wi = tk.word !== undefined && tk.word >= 0 ? tk.word : last;
        last = wi;
        tk.alts.forEach((a) => { lemmas.add(a.lemma_slp1); if (a.lemma_full) lemmas.add(slp(a.lemma_full)); });
        const alts = [...new Set(tk.alts.map(enc))];
        const v = tk.vidyut ? alts.indexOf(enc(tk.vidyut)) : -1;
        words[base + Math.min(wi, n - 1)].padas.push({ form: tk.form, slp1: tk.slp1, alts, vidyut: v });
      }
      base += n;
    }
    sections.push({ id: s.id, words });
  }
  for (const l of overrideLemmas(id)) lemmas.add(l);
  // what the kosha says of each pada an author split out: if the engine knew
  // the word and only cut the chunk wrong, the author's pada is a pick, and
  // inherits the engine's whole analysis (root, गण — what a paradigm needs)
  const kosha: Snapshot['kosha'] = {};
  for (const f of splitForms(id)) {
    const tk = await analyzeWord(engine, f);
    tk.alts.forEach((a) => { lemmas.add(a.lemma_slp1); if (a.lemma_full) lemmas.add(slp(a.lemma_full)); });
    kosha[f] = [...new Set(tk.alts.map(enc))];
  }
  const lexicon: Snapshot['lexicon'] = {};
  for (const l of [...lemmas].sort()) lexicon[l] = gloss({ type: 'subanta', lemma: '', lemma_slp1: l } as any);
  return {
    id,
    engine: 'vidyut-cheda + vidyut-kosha (patched, see scripts/vidyut-native/patches) at VIDYUT_REV, data-0.4.0; glosses: Monier-Williams (CDSL, CC BY-SA 4.0)',
    inputs: inputsOf(id),
    sections,
    kosha,
    lexicon
  };
}

/**
 * One line per word head, per pada head and per alternative: the diff of an
 * engine move reads as "this pada's alternatives changed", and the file stays
 * at about half the size of indented JSON.
 */
function serialize(s: Snapshot): string {
  const J = JSON.stringify;
  const out: string[] = ['{', ` "id": ${J(s.id)},`, ` "engine": ${J(s.engine)},`, ` "inputs": ${J(s.inputs)},`, ' "sections": ['];
  s.sections.forEach((sec, si) => {
    out.push(`  {"id": ${J(sec.id)}, "words": [`);
    sec.words.forEach((w, wi) => {
      out.push(`   {"surface": ${J(w.surface)}, "line": ${w.line}, "padas": [`);
      w.padas.forEach((p, pi) => {
        out.push(`    {"form": ${J(p.form)}, "slp1": ${J(p.slp1)}, "vidyut": ${p.vidyut}, "alts": [`);
        p.alts.forEach((a, ai) => out.push(`     ${J(a)}${ai < p.alts.length - 1 ? ',' : ''}`));
        out.push(`    ]}${pi < w.padas.length - 1 ? ',' : ''}`);
      });
      out.push(`   ]}${wi < sec.words.length - 1 ? ',' : ''}`);
    });
    out.push(`  ]}${si < s.sections.length - 1 ? ',' : ''}`);
  });
  out.push(' ],', ' "kosha": {');
  const ko = Object.entries(s.kosha);
  ko.forEach(([k, v], i) => {
    out.push(`  ${J(k)}: [`);
    v.forEach((a, ai) => out.push(`   ${J(a)}${ai < v.length - 1 ? ',' : ''}`));
    out.push(`  ]${i < ko.length - 1 ? ',' : ''}`);
  });
  out.push(' },', ' "lexicon": {');
  const lex = Object.entries(s.lexicon);
  lex.forEach(([k, v], i) => out.push(`  ${J(k)}: ${J(v)}${i < lex.length - 1 ? ',' : ''}`));
  out.push(' }', '}');
  return out.join('\n') + '\n';
}

const engine = new Engine();
let stale = 0;
fs.mkdirSync(SNAP_DIR, { recursive: true });
for (const id of ids.length ? ids : textIds()) {
  const t0 = performance.now();
  const snap = await snapshot(engine, id);
  const json = serialize(snap);
  const rel = path.relative(process.cwd(), snapPath(id));
  if (check) {
    const old = fs.existsSync(snapPath(id)) ? fs.readFileSync(snapPath(id), 'utf-8') : '';
    if (old !== json) { stale++; console.log(`✗ ${rel} differs from what vidyut gives now — rerun bun scripts/snapshot-text.ts ${id}`); }
    else console.log(`✓ ${rel} matches the engine`);
  } else {
    fs.writeFileSync(snapPath(id), json);
    const padas = snap.sections.flatMap((s) => s.words.flatMap((w) => w.padas)).length;
    const words = snap.sections.flatMap((s) => s.words).length;
    console.log(`✓ ${rel}: ${snap.sections.length} sections, ${words} words, ${padas} padas, ${Object.keys(snap.lexicon).length} lemmas (${Math.round(performance.now() - t0)} ms)`);
  }
}
engine.close();
process.exit(stale ? 1 : 0);
