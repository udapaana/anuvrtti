#!/usr/bin/env bun
/**
 * snapshot-text.ts — run vidyut over a whole text and commit what it says.
 *
 *   bun scripts/snapshot-text.ts [<id> …]     → data/text-analyses/<id>/<part>.json
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
  SNAP_DIR, textIds, readText, readOverrides, linesOf, wordsOf, inputsOf, snapPath, snapDir, partsOf,
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

/** How many of vidyut's ranked alternatives a snapshot keeps per pada. */
const MAX_ALTS = 12;

/** What each section draws on, so each part's file carries only its own lexicon and kosha. */
type Uses = Record<string, { lemmas: Set<string>; forms: Set<string> }>;

async function snapshot(engine: Engine, id: string): Promise<Snapshot & { uses: Uses }> {
  const t = readText(id);
  const ov = readOverrides(id);
  const sections: Snapshot['sections'] = [];
  const lemmas = new Set<string>();
  const uses: Uses = {};
  for (const s of t.sections) {
    const use = (uses[s.id] = { lemmas: new Set<string>(), forms: new Set<string>() });
    for (const w of Object.values(ov[s.id] ?? {})) {
      for (const p of [...(w.split ?? []), ...Object.values(w.fix ?? {})]) for (const l of [p.lemma, p.root]) if (l) use.lemmas.add(slp(l));
      for (const p of w.split ?? []) if (p.form && !p.member) use.forms.add(kfKey(p.form));
    }
    const words: SnapWord[] = wordsOf(s).map((w) => ({ ...w, padas: [] }));
    let base = 0;
    for (const [li, line] of linesOf(s).entries()) {
      const mine = words.filter((w) => w.line === li);
      const n = mine.length;
      // cheda numbers only the words it reads: a token with no Devanagari letter
      // (the Pañcatantra's free-standing "!" and "?") is not one of them, and a
      // pada must not slide onto the word before its own
      const read = mine.map((w, i) => (/[\u0900-\u097F]/.test(w.surface) ? i : -1)).filter((i) => i >= 0);
      const toks: Token[] = await analyzeSentence(engine, line);
      let last = 0;
      for (const tk of toks) {
        // a pada cheda produced but could not place goes with the word before it
        const wi = tk.word !== undefined && tk.word >= 0 ? tk.word : last;
        last = wi;
        tk.alts.forEach((a) => {
          for (const l of [a.lemma_slp1, a.lemma_full && slp(a.lemma_full)]) if (l) { lemmas.add(l); use.lemmas.add(l); }
        });
        /*
          Only the top alternatives are kept: one pada (ये) had 116, and at ~5 KB
          a word a long text's snapshot would run to tens of MB. They arrive
          ranked best-first, so the cut drops only the improbable tail; vidyut's
          own pick is kept even when it ranks lower, and an author who needs a
          dropped reading writes it in the override (counted as supplied).
        */
        const ranked = [...new Set(tk.alts.map(enc))];
        const pick = tk.vidyut ? enc(tk.vidyut) : null;
        const alts = ranked.slice(0, MAX_ALTS);
        if (pick && ranked.includes(pick) && !alts.includes(pick)) alts.push(pick);
        const v = pick ? alts.indexOf(pick) : -1;
        words[base + (read[wi] ?? Math.min(wi, n - 1))].padas.push({ form: tk.form, slp1: tk.slp1, alts, vidyut: v });
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
  const koshaLemmas: Record<string, string[]> = {};
  for (const f of splitForms(id)) {
    const tk = await analyzeWord(engine, f);
    koshaLemmas[f] = tk.alts.flatMap((a) => [a.lemma_slp1, ...(a.lemma_full ? [slp(a.lemma_full)] : [])]);
    koshaLemmas[f].forEach((l) => lemmas.add(l));
    kosha[f] = [...new Set(tk.alts.map(enc))];
  }
  // a split pada's kosha lemmas belong to the section that splits it
  for (const u of Object.values(uses)) for (const f of u.forms) for (const l of koshaLemmas[f] ?? []) u.lemmas.add(l);
  const lexicon: Snapshot['lexicon'] = {};
  for (const l of [...lemmas].sort()) lexicon[l] = gloss({ type: 'subanta', lemma: '', lemma_slp1: l } as any);
  return {
    id,
    engine: 'vidyut-cheda + vidyut-kosha at VIDYUT_REV, data-0.4.0; glosses: Monier-Williams (CDSL, CC BY-SA 4.0)',
    inputs: inputsOf(id),
    sections,
    kosha,
    lexicon,
    uses
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

/** One file per part: its sections, and only the kosha and lexicon they use. */
function partFiles(snap: Snapshot & { uses: Uses }): { file: string; json: string }[] {
  return partsOf(readText(snap.id)).map((part) => {
    const ids = new Set(part.sections.map((x) => x.id));
    const lem = new Set<string>(), forms = new Set<string>();
    for (const sid of ids) { snap.uses[sid]?.lemmas.forEach((l) => lem.add(l)); snap.uses[sid]?.forms.forEach((f) => forms.add(f)); }
    const pick = <T>(o: Record<string, T>, keep: Set<string>) => Object.fromEntries(Object.entries(o).filter(([k]) => keep.has(k)));
    const piece: Snapshot = {
      id: snap.id, engine: snap.engine, inputs: snap.inputs,
      sections: snap.sections.filter((x) => ids.has(x.id)),
      kosha: pick(snap.kosha, forms),
      lexicon: pick(snap.lexicon, lem)
    };
    return { file: snapPath(snap.id, part.id), json: serialize(piece) };
  });
}

const engine = new Engine();
let stale = 0;
fs.mkdirSync(SNAP_DIR, { recursive: true });
for (const id of ids.length ? ids : textIds()) {
  const t0 = performance.now();
  const snap = await snapshot(engine, id);
  const files = partFiles(snap);
  const rel = path.relative(process.cwd(), snapDir(id));
  if (check) {
    for (const f of files) {
      const old = fs.existsSync(f.file) ? fs.readFileSync(f.file, 'utf-8') : '';
      if (old !== f.json) { stale++; console.log(`✗ ${path.relative(process.cwd(), f.file)} differs from what vidyut gives now — rerun bun scripts/snapshot-text.ts ${id}`); }
    }
    if (!stale) console.log(`✓ ${rel} matches the engine`);
  } else {
    // Written whole, then swapped in: several authors may snapshot one text at
    // once, and a reader must never meet a half-written directory. A part that
    // no longer exists (the parts were redrawn) goes with the old directory.
    const tmp = `${snapDir(id)}.tmp-${process.pid}`;
    fs.rmSync(tmp, { recursive: true, force: true });
    fs.mkdirSync(tmp, { recursive: true });
    for (const f of files) fs.writeFileSync(path.join(tmp, path.basename(f.file)), f.json);
    for (let attempt = 0; ; attempt++) {
      try {
        const old = `${snapDir(id)}.old-${process.pid}`;
        if (fs.existsSync(snapDir(id))) fs.renameSync(snapDir(id), old);
        fs.renameSync(tmp, snapDir(id));
        fs.rmSync(old, { recursive: true, force: true });
        break;
      } catch (e) {
        if (attempt > 20) throw e;
        await new Promise((r) => setTimeout(r, 200 + Math.random() * 400)); // another run is swapping
      }
    }
    const padas = snap.sections.flatMap((s) => s.words.flatMap((w) => w.padas)).length;
    const words = snap.sections.flatMap((s) => s.words).length;
    console.log(`✓ ${rel}/ (${files.length} part${files.length > 1 ? 's' : ''}): ${snap.sections.length} sections, ${words} words, ${padas} padas, ${Object.keys(snap.lexicon).length} lemmas (${Math.round(performance.now() - t0)} ms)`);
  }
}
engine.close();
process.exit(stale ? 1 : 0);
