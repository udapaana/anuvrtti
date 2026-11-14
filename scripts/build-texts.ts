#!/usr/bin/env bun
/**
 * build-texts.ts — whole texts for the reader: vidyut's committed analysis,
 * the author's overrides on top, a paradigm for every inflected word.
 *
 *   content/texts/<id>/text.yaml        the text, verbatim         (authored)
 *   content/texts/<id>/overrides.yaml   the author's decisions     (authored)
 *   data/text-analyses/<id>.json        what vidyut said           (snapshot; scripts/snapshot-text.ts)
 *     → static/data/texts/index.json, static/data/texts/<id>.json  (generated)
 *
 * Runs in CI: it reads only the snapshot, never the native engine. Paradigms
 * come from the vidyut-prakriya WASM already committed under static/wasm/, the
 * same engine and pin as the readings' tables (build-quiz.ts).
 *
 *   bun scripts/build-texts.ts            build, and report the author's fixes by kind
 *   bun scripts/build-texts.ts --report   the report only, written nowhere
 */
import * as fs from 'fs';
import * as path from 'path';
import { slp, deva, mwUrl } from './analyze-text';
import {
  ROOT, textIds, readText, readOverrides, readSnapshot, wordsOf, wordKeys, linesOf,
  parseA, agrees, decodeA, fmtA, type Analysis, type PadaSpec, type MwEntry, type Snapshot
} from './lib/texts';

const OUT = path.join(ROOT, 'static/data/texts');
const WASM_DIR = path.join(ROOT, 'static/wasm/vidyut-prakriya/');

export const CREDIT =
  'Meanings: Monier-Williams, A Sanskrit-English Dictionary (1899), digitised by the Cologne Digital Sanskrit Dictionaries (CDSL), CC BY-SA 4.0 — adapted (first senses only); this adaptation is CC BY-SA 4.0 too. Analysis: vidyut (MIT). Text: GRETIL, CC BY-NC-SA 4.0.';

export type Source = 'vidyut' | 'pick' | 'author' | 'none';
export type OutPada = {
  form: string; lemma: string; a: string; terms: string[]; member?: boolean;
  gloss: string | null; glossBy: 'author' | 'mw' | null;
  mw: { key: string; url: string; lex: string; senses: string[] } | null;
  note?: string; source: Source; alts: number;
  para?: { key: string; row: number; col: number };
};
export type OutWord = { surface: string; padas: OutPada[]; note?: string };
export type FixKind = 'compound' | 'split' | 'pick' | 'supplied' | 'gloss' | 'note';

/** Pausal form of a pada as cheda gives it (नरस् → नरः). */
const pausal = (s: string) => deva(s.replace(/[sr]$/, 'H'));

function termsOf(a: Analysis): string[] {
  if (a.type === 'member') return ['समास'];
  const t: string[] = [];
  if (a.type === 'avyaya') t.push('अव्यय');
  const order = a.type === 'tinanta'
    ? (['लकार', 'पुरुष', 'वचन', 'पद'] as const)
    : (['विभक्ति', 'वचन', 'लिङ्ग', 'लकार'] as const);
  for (const f of order) if (a[f]) t.push(a[f]!);
  if (a.प्रयोग && a.प्रयोग !== 'कर्तरि') t.push(a.प्रयोग);
  if (a.कृत्) t.push(a.कृत्);
  for (const u of a.उपसर्ग ?? []) t.push(u);
  for (const s of a.सनादि ?? []) t.push(s);
  if (a.गण) t.push(a.गण);
  return t;
}

/** MW's entry for a lemma: the prefixed verb first (MW heads उपविश् apart from विश्). */
function mwFor(lex: Snapshot['lexicon'], a: Analysis): MwEntry {
  for (const l of [a.lemma_full, a.lemma]) {
    if (!l) continue;
    const e = lex[slp(l)];
    if (e) return e;
  }
  return null;
}

/** An author's pada, resolved against what vidyut offered for that word. */
function resolveSpec(spec: PadaSpec, base: Analysis | null, pool: Analysis[]): { a: Analysis; source: Source } {
  if (spec.member) return { a: { type: 'member', lemma: spec.lemma ?? base?.lemma ?? spec.form ?? '' }, source: 'author' };
  if (!spec.a && !spec.lemma && base) return { a: base, source: 'vidyut' };
  const lemma = spec.lemma ?? base?.lemma ?? '';
  const want = parseA(spec.a ?? (base ? fmtA(base) : ''), lemma);
  if (!spec.a && base) Object.assign(want, { ...base, lemma });
  const hit = pool.find((x) => agrees(x, want, lemma));
  return hit ? { a: hit, source: 'pick' } : { a: want, source: 'author' };
}

export type Resolved = {
  id: string; snap: Snapshot;
  sections: { id: string; kind: string; lines: number[][]; words: OutWord[] }[];
  fixes: Record<FixKind, number>;
  words: number; padas: number;
  problems: string[];
};

export function resolveText(id: string): Resolved {
  const t = readText(id);
  const snap = readSnapshot(id);
  if (!snap) throw new Error(`data/text-analyses/${id}.json missing — run bun scripts/snapshot-text.ts ${id}`);
  const ov = readOverrides(id);
  const fixes: Record<FixKind, number> = { compound: 0, split: 0, pick: 0, supplied: 0, gloss: 0, note: 0 };
  const problems: string[] = [];
  let words = 0, padas = 0;
  const sections: Resolved['sections'] = [];
  const used = new Set<string>();

  for (const s of t.sections) {
    const ss = snap.sections.find((x) => x.id === s.id);
    if (!ss) { problems.push(`${s.id}: not in the snapshot — rerun snapshot-text.ts`); continue; }
    const ws = wordsOf(s);
    const keys = wordKeys(s);
    const sov = ov[s.id] ?? {};
    const out: OutWord[] = [];
    ws.forEach((w, wi) => {
      words++;
      const sw = ss.words[wi];
      if (!sw || sw.surface !== w.surface) { problems.push(`${s.id}/${w.surface}: the snapshot has ${sw?.surface ?? 'nothing'} here — rerun snapshot-text.ts`); return; }
      const o = sov[keys[wi]];
      if (o) used.add(`${s.id}/${keys[wi]}`);
      const pool = sw.padas.flatMap((p) => p.alts.map(decodeA));
      const kinds = new Set<FixKind>();
      let resolved: { a: Analysis | null; source: Source; spec?: PadaSpec; form: string; alts: number }[];
      if (o?.split) {
        kinds.add(o.split.some((p) => p.member) ? 'compound' : 'split');
        resolved = o.split.map((spec) => {
          const known = spec.form ? snap.kosha?.[slp(spec.form).replace(/H$/, 's')] ?? [] : [];
          const r = resolveSpec(spec, null, [...known.map(decodeA), ...pool]);
          if (r.source === 'author' && !spec.member) kinds.add('supplied');
          return { ...r, spec, form: spec.form ?? '', alts: 0 };
        });
      } else {
        resolved = sw.padas.map((p, pi) => {
          const base = p.alts[0] ? decodeA(p.alts[0]) : null;
          const spec = o?.fix?.[String(pi + 1)];
          if (!spec) return { a: base, source: base ? ('vidyut' as Source) : ('none' as Source), form: pausal(p.slp1), alts: p.alts.length };
          const r = resolveSpec(spec, base, p.alts.map(decodeA));
          if (spec.member) kinds.add('compound');
          else if (r.source === 'pick' && (spec.a || spec.lemma)) kinds.add('pick');
          else if (r.source === 'author') kinds.add('supplied');
          return { ...r, spec, form: spec.form ?? pausal(p.slp1), alts: p.alts.length };
        });
      }
      const outPadas: OutPada[] = resolved.map((r) => {
        padas++;
        const a = r.a;
        if (r.spec?.gloss) kinds.add('gloss');
        if (r.spec?.note) kinds.add('note');
        if (!a) {
          problems.push(`${s.id}/${w.surface}: ${r.form} — vidyut has no analysis; split or fix it in overrides.yaml`);
          return { form: r.form, lemma: '', a: '', terms: [], gloss: null, glossBy: null, mw: null, source: 'none', alts: 0 };
        }
        const m = mwFor(snap.lexicon, a);
        const gloss = r.spec?.gloss ?? m?.senses[0] ?? null;
        if (!gloss) problems.push(`${s.id}/${w.surface}: ${r.form} (${a.lemma}) — no MW entry and no gloss; add gloss: in overrides.yaml`);
        return {
          form: r.form, lemma: a.lemma_full ?? a.lemma, a: fmtA(a), terms: termsOf(a),
          ...(a.type === 'member' ? { member: true } : {}),
          gloss, glossBy: r.spec?.gloss ? 'author' : m ? 'mw' : null,
          mw: m ? { key: m.key, url: m.url ?? mwUrl(m.key), lex: m.lex, senses: m.senses } : null,
          ...(r.spec?.note ? { note: r.spec.note } : {}),
          source: r.source, alts: r.alts,
          _a: a
        } as OutPada & { _a: Analysis };
      });
      if (o?.note) kinds.add('note');
      for (const k of kinds) fixes[k]++;
      out.push({ surface: w.surface, padas: outPadas, ...(o?.note ? { note: o.note } : {}) });
    });
    const lines = linesOf(s).map((_, li) => ws.map((w, i) => (w.line === li ? i : -1)).filter((i) => i >= 0));
    sections.push({ id: s.id, kind: s.kind ?? 'prose', lines, words: out });
  }
  for (const [sid, sec] of Object.entries(ov))
    for (const k of Object.keys(sec ?? {}))
      if (!used.has(`${sid}/${k}`)) problems.push(`overrides.yaml: ${sid}/${k} names no word of the text`);
  return { id, snap, sections, fixes, words, padas, problems };
}

// ── paradigms, from the committed WASM ─────────────────────────────────────
const VIB = ['Prathama', 'Dvitiya', 'Trtiya', 'Caturthi', 'Panchami', 'Sasthi', 'Saptami', 'Sambodhana'];
const VIB_D = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const VAC = ['Eka', 'Dvi', 'Bahu'];
const VAC_D = ['एकवचन', 'द्विवचन', 'बहुवचन'];
const PUR = ['Prathama', 'Madhyama', 'Uttama'];
const PUR_D = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const LING: Record<string, string> = { 'पुंलिङ्ग': 'Pum', 'स्त्रीलिङ्ग': 'Stri', 'नपुंसकलिङ्ग': 'Napumsaka' };
const LAK: Record<string, string> = {
  'लट्': 'Lat', 'लङ्': 'Lan', 'लिट्': 'Lit', 'लुट्': 'Lut', 'लृट्': 'Lrt', 'लोट्': 'Lot',
  'विधिलिङ्': 'VidhiLin', 'आशीर्लिङ्': 'AshirLin', 'लुङ्': 'Lun', 'लृङ्': 'Lrn'
};
const LAK_EN: Record<string, string> = {
  'लट्': 'present', 'लङ्': 'imperfect', 'लिट्': 'perfect', 'लुट्': 'periphrastic future', 'लृट्': 'future',
  'लृङ्': 'conditional', 'लोट्': 'imperative', 'विधिलिङ्': 'optative', 'आशीर्लिङ्': 'benedictive', 'लुङ्': 'aorist'
};
const GANA: Record<string, string> = {
  'भ्वादि': 'Bhvadi', 'अदादि': 'Adadi', 'जुहोत्यादि': 'Juhotyadi', 'दिवादि': 'Divadi', 'स्वादि': 'Svadi',
  'तुदादि': 'Tudadi', 'रुधादि': 'Rudhadi', 'तनादि': 'Tanadi', 'क्र्यादि': 'Kryadi', 'चुरादि': 'Curadi'
};
export type Table = { stem: string; lakara: string | null; kind: string; colHeads: string[]; rowHeads: string[]; rows: string[][] };

async function loadVidyut() {
  const quiet = console.error;
  console.error = () => {};
  const raw = await import(WASM_DIR + 'vidyut_prakriya.js');
  await raw.default({ module_or_path: await Bun.file(WASM_DIR + 'vidyut_prakriya_bg.wasm').arrayBuffer() });
  const v = raw.Vidyut.init();
  console.error = quiet;
  return v;
}
const bare = (f: string) => f.replace(/ं$/, 'म्').replace(/ः$/, 'स्');

function paradigms(v: any, r: Resolved): Record<string, Table> {
  const tables: Record<string, Table> = {};
  const deriveNoun = (lemma: string, lg: string): string[][] | null => {
    const s = slp(lemma);
    // a feminine in -ā/-ī is ṅyāp-derived (धात्री, not *धात्रीः): nyap first
    const cands = /[AI]$/.test(s) && s.length > 2 ? [{ nyap: s }, { basic: s }] : [{ basic: s }];
    const grids = cands.map((pr) =>
      VIB.map((vb) => VAC.map((vc) => {
        try { return deva(v.deriveSubantas({ pratipadika: pr, linga: LING[lg] ?? 'Pum', vibhakti: vb, vacana: vc })[0]?.text ?? ''); } catch { return ''; }
      }))
    );
    return grids.find((g) => g.flat().some(Boolean)) ?? null;
  };
  for (const sec of r.sections)
    for (const w of sec.words)
      for (const p of w.padas as (OutPada & { _a?: Analysis })[]) {
        const a = p._a;
        delete p._a;
        if (!a) continue;
        try {
          if (a.type === 'subanta' && a.विभक्ति && a.वचन && !(a.कृत् && a.stem !== 'basic' && !a.lemma_full && a.aupadeshika)) {
            const lg = a.लिङ्ग ?? 'पुंलिङ्ग';
            const key = `${a.lemma}|${lg}`;
            if (!(key in tables)) {
              const rows = deriveNoun(a.lemma, lg);
              if (rows) tables[key] = { stem: a.lemma, lakara: null, kind: 'declension', colHeads: VAC_D, rowHeads: VIB_D, rows };
            }
            if (tables[key]) {
              const row = VIB_D.indexOf(a.विभक्ति), col = VAC_D.indexOf(a.वचन);
              // a lit cell that is not the word means the stem is not this word's: no table
              const cell = tables[key].rows[row]?.[col] ?? '';
              if (bare(cell) === bare(p.form) || cell.replace(/ः$/, '') === p.form) p.para = { key, row, col };
            }
          } else if (a.type === 'tinanta' && a.aupadeshika && a.गण && GANA[a.गण] && a.लकार && LAK[a.लकार] && a.पुरुष && a.वचन) {
            const pada = a.पद === 'आत्मनेपद' ? 'Atmanepada' : 'Parasmaipada';
            /*
              The word's own verb: its preverbs, its derived stem, its voice. The
              bare root's grid lit अगात् for निरगात्, ययौ for प्रययौ — a cell that
              is not the word (scripts/check-paradigm-lit.ts).
            */
            const prefixes = (a.उपसर्ग ?? []).map((u) => (u === 'आङ्' ? 'AN' : slp(u)));
            const sanadi = (a.सनादि ?? []).map((x) => slp(x));
            const prayoga = a.प्रयोग === 'कर्मणि' ? 'Karmani' : a.प्रयोग === 'भावे' ? 'Bhave' : 'Kartari';
            const key = [a.aupadeshika, a.गण, a.लकार, pada, ...prefixes, ...sanadi, prayoga].join('|');
            if (!(key in tables)) {
              const rows = PUR.map((pu) => VAC.map((vc) => {
                try {
                  const res = v.deriveTinantas({
                    dhatu: { aupadeshika: a.aupadeshika, gana: GANA[a.गण!], sanadi, prefixes },
                    lakara: LAK[a.लकार!], prayoga, purusha: pu, vacana: vc, pada, skip_at_agama: false
                  });
                  // every correct form (ब्रूहि / ब्रूतात्), so the word is in its cell
                  return [...new Set(res.map((x: any) => deva(x.text)))].join(' / ');
                } catch { return ''; }
              }));
              const stem = [...(a.उपसर्ग ?? []), a.lemma, ...(a.सनादि ?? [])].join(' + ');
              if (rows.flat().some(Boolean))
                tables[key] = { stem, lakara: a.लकार, kind: LAK_EN[a.लकार] ?? '', colHeads: VAC_D, rowHeads: PUR_D, rows };
            }
            if (tables[key]) {
              const row = PUR_D.indexOf(a.पुरुष), col = VAC_D.indexOf(a.वचन);
              const cell = tables[key].rows[row]?.[col] ?? '';
              if (cell.split(' / ').some((c) => bare(c) === bare(p.form))) p.para = { key, row, col };
            }
          }
        } catch { /* no table for this word */ }
      }
  return tables;
}

export function report(r: Resolved): string {
  const per = (n: number) => ((100 * n) / r.words).toFixed(0);
  const f = r.fixes;
  return [
    `${r.id}: ${r.words} words, ${r.padas} padas`,
    `  words fixed, by kind (a word can need more than one), per 100 words:`,
    `    compound members marked / rejoined   ${String(f.compound).padStart(3)}  (${per(f.compound)})`,
    `    other segmentation                   ${String(f.split).padStart(3)}  (${per(f.split)})`,
    `    analysis picked from vidyut's list   ${String(f.pick).padStart(3)}  (${per(f.pick)})`,
    `    analysis supplied (not in the list)  ${String(f.supplied).padStart(3)}  (${per(f.supplied)})`,
    `    gloss given in context               ${String(f.gloss).padStart(3)}  (${per(f.gloss)})`,
    `    notes                                ${String(f.note).padStart(3)}  (${per(f.note)})`
  ].join('\n');
}

if (import.meta.main) {
  const only = process.argv.includes('--report');
  const v = only ? null : await loadVidyut();
  const index: any[] = [];
  let bad = 0;
  if (!only) fs.mkdirSync(OUT, { recursive: true });
  for (const id of textIds()) {
    const r = resolveText(id);
    console.log(report(r));
    for (const p of r.problems) console.log(`  ! ${p}`);
    bad += r.problems.length;
    if (only) continue;
    const t = readText(id);
    const tables = paradigms(v, r);
    const lit = r.sections.flatMap((s) => s.words.flatMap((w) => w.padas)).filter((p) => p.para).length;
    console.log(`  ${Object.keys(tables).length} paradigm tables, ${lit} of ${r.padas} padas lit in one`);
    const out = {
      id, title: t.title, title_en: t.title_en, work: t.work, place: t.place, source: t.source,
      credit: CREDIT,
      sections: r.sections.map((s) => ({ ...s, text: linesOf(t.sections.find((x) => x.id === s.id)!) })),
      paradigms: tables
    };
    fs.writeFileSync(path.join(OUT, `${id}.json`), JSON.stringify(out));
    index.push({ id, title: t.title, title_en: t.title_en, work: t.work, place: t.place, sections: r.sections.length, words: r.words });
  }
  if (!only) {
    fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index));
    console.log(`Wrote ${index.length} text(s) → static/data/texts/`);
  }
  if (bad) console.log(`${bad} problem(s) — bun run check fails on these (check-texts.ts)`);
}
