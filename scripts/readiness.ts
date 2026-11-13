#!/usr/bin/env bun
/**
 * readiness.ts — when can a reader of this corpus read a whole text? Measured,
 * not guessed (docs/AUTHORING-PLAN.md, "When a reader can handle one").
 *
 * 1. What the reader has met, by tier. Every word in static/data/readings.json
 *    resolves to a set of grammatical ITEMS, each with the lowest tier
 *    (`segment`) at which a reading shows it:
 *      सुबन्त <stem class>·<लिङ्ग>: <विभक्ति> <वचन>    (stem classes as check-paradigms.ts)
 *      सर्वनाम <pronoun>: <विभक्ति> <वचन>            (as check-paradigms.ts)
 *      सर्वादि ·<लिङ्ग>: <विभक्ति> <वचन>              (सर्व, अन्य … decline pronominally)
 *      तिङन्त <लकार>: <पुरुष> <वचन>
 *      तिङन्त प्रयोग·पद: <प्रयोग> <पद>
 *      कृत् X · तद्धित X · उपसर्ग X · सनादि X · समास
 *    and every lemma, with the tier it first appears (vocabulary).
 * 2. What a text needs. scripts/analyze-text.ts runs over the text's sentences;
 *    each pada's re-ranked best analysis maps into the same items. A token is
 *    UNCERTAIN, and reported apart rather than guessed, when the generator has
 *    no analysis, or when its re-ranker overrode vidyut's own pick on the items
 *    (the two disagree about what the word is).
 * 3. Readiness after tier N = share of the confident tokens whose every item was
 *    met at a tier ≤ N; vocabulary readiness = share whose lemma was.
 *
 *   bun run readiness                       every candidate text
 *   bun run readiness -- --text hitopadesa-1  one
 *   bun run readiness -- --md               markdown tables (docs/READINESS.md)
 *
 * Needs the generator's caches: ./scripts/build-vidyut-native.sh, bun scripts/
 * import-mw-gloss.ts (without it the re-ranker loses its dictionary and the
 * numbers shift), bun run texts. Build-time only.
 */
import * as fs from 'fs';
import * as path from 'path';
import {
  typeOf, VIBHAKTI, VACANA, LINGA, PURUSHA, LAKARA, PADA, PRAYOGA, SAMASA, UPASARGA,
  KRT_DECLINING, KRT_INDECLINABLE, TADDHITA_SUFFIX, SANADI, SARVANAMA, SARVADI
} from '../src/lib/usage/schema';
import { typingTermsOf } from '../src/lib/usage/complete';
import { finalSound } from '../src/lib/usage/taxonomy';
import { deaccent } from '../src/lib/usage/normalize';
import { Engine, analyzeSentence, iastToDeva, slp, type Analysis, type Token } from './analyze-text';

const ROOT = process.cwd();
const TEXTS = path.join(ROOT, 'data/texts');
const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };

// ── one shape for both sides ────────────────────────────────────────────────
type Morph = {
  type: 'subanta' | 'tinanta' | 'avyaya';
  lemma: string;
  vb?: string; vc?: string; lg?: string;
  lakara?: string; purusha?: string; pada?: string; prayoga?: string;
  krt?: string; taddhita?: string; upasarga: string[]; sanadi: string[];
  compound?: boolean;
};

const HAL: [RegExp, string][] = [
  [/[क-ह]न्$/, 'अन्'], [/िन्$/, 'इन्'], [/[वम]त्$/, 'वत्/मत्'], [/[क-ह]त्$/, 'अत्'],
  [/[क-ह]स्$/, 'अस्'], [/[िु]स्$/, 'इस्/उस्'], [/[तद]्$/, 'त्/द्'], [/[चज]्$/, 'च्/ज्'],
  [/[शष]्$/, 'श्/ष्'], [/ह्$/, 'ह्'],
];
const stemClass = (lem: string) => {
  const f = finalSound(lem);
  return f === 'hal' ? HAL.find(([re]) => re.test(lem))?.[1] ?? 'हल्' : f;
};
/** A kṛdanta's lemma is its root on both sides, so its declension class comes from the affix. */
const KRT_A = new Set(['क्त', 'शानच्', 'कानच्', 'तव्य', 'अनीयर्', 'ण्यत्', 'यत्', 'क्यप्', 'घञ्', 'ल्युट्', 'अच्', 'अङ्', 'ण्वुल्', 'ल्यु', 'निष्ठा', 'कृत्य', 'अप्', 'क', 'ट', 'ण']);
const KRT_CONS: Record<string, string> = { 'शतृ': 'अत्', 'क्तवतु': 'वत्/मत्', 'तृच्': 'ऋ', 'तृन्': 'ऋ', 'णिनि': 'इन्', 'क्वसु': 'वस्', 'क्तिन्': 'इ' };
function krtClass(krt: string, lg?: string) {
  const fem = lg === 'स्त्रीलिङ्ग';
  if (KRT_A.has(krt)) return fem ? 'आ' : 'अ';
  if (krt === 'क्तिन्') return 'इ';
  if (KRT_CONS[krt]) return fem ? 'ई' : KRT_CONS[krt];
  return krt;  // क्विप् etc.: the affix stands for the class
}
const normKrt = (k: string) => ({ 'तव्यत्': 'तव्य', 'चानश्': 'शानच्' } as Record<string, string>)[k] ?? k;
const normUpa = (u: string) => ({ 'निर्': 'निस्', 'दुर्': 'दुस्', 'आ': 'आङ्' } as Record<string, string>)[u] ?? u;

/** The items a word needs, in a key space the reader and the generator share. */
function needs(m: Morph): string[] {
  const out: string[] = [];
  if (m.type === 'subanta' && m.vb && m.vc) {
    if (SARVANAMA.includes(m.lemma)) out.push(`सर्वनाम ${m.lemma}: ${m.vb} ${m.vc}`);
    else if (m.lg && SARVADI.includes(m.lemma)) out.push(`सर्वादि ·${m.lg}: ${m.vb} ${m.vc}`);
    else if (m.lg) out.push(`सुबन्त ${m.krt ? krtClass(m.krt, m.lg) : stemClass(m.lemma)}·${m.lg}: ${m.vb} ${m.vc}`);
  }
  if (m.type === 'tinanta') {
    if (m.lakara && m.purusha && m.vc) out.push(`तिङन्त ${m.lakara}: ${m.purusha} ${m.vc}`);
    if (m.prayoga && m.pada && m.pada !== 'उभयपद') out.push(`तिङन्त प्रयोग·पद: ${m.prayoga} ${m.pada}`);
  }
  if (m.krt) out.push(`कृत् ${m.krt}`);
  if (m.taddhita) out.push(`तद्धित ${m.taddhita}`);
  for (const u of m.upasarga) out.push(`उपसर्ग ${u}`);
  for (const s of m.sanadi) out.push(`सनादि ${s}`);
  if (m.compound) out.push('समास');
  return out;
}
/** Lemmas compared as bare SLP1 letters, so तद् / tad and accent marks meet. */
const lemmaKey = (l: string) => slp(deaccent(l)).replace(/[^a-zA-Z]/g, '');

// ── 1. what the reader has met ─────────────────────────────────────────────
const pick = (t: Set<string>, pool: readonly string[]) => [...t].find((x) => pool.includes(x));
const KRT_ALL = [...KRT_DECLINING, ...KRT_INDECLINABLE];

function readerMorph(w: any): Morph | null {
  if (!w.lemma) return null;
  const t = typingTermsOf(w);
  const ty = typeOf(t)?.id;
  if (!ty) return null;
  const lemma = deaccent(w.lemma);
  const upasarga = [...t].filter((x) => UPASARGA.includes(x)).map(normUpa);
  const sanadi = [...t].filter((x) => SANADI.includes(x) && x !== 'यक्');
  const compound = [...t].some((x) => SAMASA.includes(x));
  if (ty === 'tinanta')
    return { type: 'tinanta', lemma, lakara: pick(t, LAKARA), purusha: pick(t, PURUSHA), vc: pick(t, VACANA),
      pada: pick(t, PADA), prayoga: pick(t, PRAYOGA), upasarga, sanadi, compound };
  const krtRaw = pick(t, KRT_ALL);
  const krt = krtRaw ? normKrt(krtRaw) : undefined;
  const taddhita = ty === 'taddhita' ? pick(t, TADDHITA_SUFFIX) : undefined;
  if (ty === 'avyaya' || (krt && KRT_INDECLINABLE.includes(krt)))
    return { type: 'avyaya', lemma, krt, upasarga, sanadi, compound };
  return { type: 'subanta', lemma, vb: pick(t, VIBHAKTI), vc: pick(t, VACANA), lg: pick(t, LINGA),
    krt: ty === 'kridanta' || krt ? krt : undefined, taddhita, upasarga, sanadi, compound };
}

const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8')).sequence as any[];
/** item → lowest tier; lemma key → lowest tier. `exclude` drops readings drawn from the text itself. */
function met(exclude?: RegExp) {
  const items = new Map<string, number>(), lemmas = new Map<string, number>();
  const low = (m: Map<string, number>, k: string, tier: number) => { if (!(m.get(k)! <= tier)) m.set(k, tier); };
  for (const r of corpus) {
    if (exclude?.test(r.chapter ?? '')) continue;
    const tier = Number(r.segment);
    for (const w of r.words ?? []) {
      const m = readerMorph(w);
      if (!m) continue;
      low(lemmas, lemmaKey(m.lemma), tier);
      for (const it of needs(m)) low(items, it, tier);
    }
  }
  return { items, lemmas };
}

// ── 2. what a text needs ───────────────────────────────────────────────────
function genMorph(a: Analysis): Morph {
  const krt = a.कृत् ? normKrt(a.कृत्) : undefined;
  return {
    type: a.type, lemma: a.lemma, vb: a.विभक्ति, vc: a.वचन, lg: a.लिङ्ग,
    lakara: a.लकार, purusha: a.पुरुष, pada: a.पद, prayoga: a.प्रयोग,
    krt: a.type === 'tinanta' ? undefined : krt,
    upasarga: (a.उपसर्ग ?? []).map(normUpa), sanadi: a.सनादि ?? []
  };
}
type Need = { form: string; lemma: string | null; items: string[]; alts: string[][]; uncertain: string | null };

/** Per token: its items, and whether the generator can be trusted on them. */
function textNeeds(sents: Token[][]): Need[] {
  const out: Need[] = [];
  for (const toks of sents) {
    // a non-final pada of a surface word read as an a-stem vocative is a compound member
    // (the bare stem of an a-stem equals its vocative — AUTO-ANNOTATION-EVAL §3, pattern 7)
    const lastOfWord = new Map<number, number>();
    toks.forEach((t, i) => lastOfWord.set(t.word ?? -1 - i, i));
    const inCompound = new Set<number>();
    toks.forEach((t, i) => {
      const w = t.word ?? -1;
      if (w < 0 || lastOfWord.get(w) === i) return;
      if (t.best?.type === 'subanta' && t.best.विभक्ति === 'सम्बोधन') { inCompound.add(i); inCompound.add(lastOfWord.get(w)!); }
    });
    toks.forEach((t, i) => {
      if (!t.best) { out.push({ form: t.form, lemma: null, items: [], alts: [], uncertain: 'unanalysed' }); return; }
      const member = inCompound.has(i) && lastOfWord.get(t.word!) !== i;
      if (member) { out.push({ form: t.form, lemma: t.best.lemma, items: ['समास'], alts: [['समास']], uncertain: null }); return; }
      const withC = (m: Morph) => ({ ...m, compound: inCompound.has(i) });
      const items = needs(withC(genMorph(t.best)));
      const vid = t.vidyut ? needs(withC(genMorph(t.vidyut))) : items;
      const same = items.slice().sort().join('|') === vid.slice().sort().join('|');
      out.push({ form: t.form, lemma: t.best.lemma, items, alts: t.alts.map((a) => needs(withC(genMorph(a)))),
        uncertain: same ? null : 'reranked' });
    });
  }
  return out;
}

// ── the candidate texts ────────────────────────────────────────────────────
const read = (slug: string) => {
  const f = path.join(TEXTS, slug + '.txt');
  if (!fs.existsSync(f)) throw new Error(`${f} missing — run bun run texts`);
  return fs.readFileSync(f, 'utf-8');
};
const between = (t: string, a: string, b: string) => {
  const i = t.indexOf(a); const j = t.indexOf(b, i);
  if (i < 0 || j < 0) throw new Error(`text markers not found: ${a} … ${b}`);
  return t.slice(i, j + b.length);
};
const proseSplit = (s: string) => s.replace(/\/\/ *[a-z_]+[\d.]+ *\/\//g, '|').split(/\|+|\/\/|[?!]/).map((x) => x.trim()).filter(Boolean).map(iastToDeva);

type Text = { id: string; title: string; exclude?: RegExp; sentences: () => string[] };
const TEXTS_ALL: Text[] = [
  {
    id: 'panc-kilotpatin', title: 'Pañcatantra 1.1, the monkey and the wedge (with frame verse 1.21)',
    sentences: () => {
      // the sample docs/AUTO-ANNOTATION-EVAL.md §5 ran, cut the same way as analyze-samples.ts
      const t = read('sa_viSNuzarman-paJcatantra');
      const verse = t.slice(t.indexOf('avyāpareṣu vyāpāraṃ'), t.indexOf('||panc_1.21||'));
      const a = t.indexOf('kasmiṃścin nagarābhyāśe');
      const tale = t.slice(a, t.indexOf('avyāpāreṣu iti |', a) + 'avyāpāreṣu iti'.length);
      return [verse, tale].join(' | ').split(/\|+/).map((s) => s.trim()).filter(Boolean).map(iastToDeva);
    }
  },
  {
    id: 'vetala-1', title: 'Vetālapañcaviṃśatikā (Somadeva), tale 1',
    sentences: () => {
      const t = read('sa_somadeva-kathAsaritsAgaravetAlapaJcaviMzatikA');
      const out: string[] = [];
      let buf = '';
      for (const line of t.split('\n')) {
        if (!line.trim()) { buf = ''; continue; }
        buf += ' ' + line;
        if (/\[= Vet_1\]/.test(line)) out.push(iastToDeva(buf.replace(/\/\/.*$/, '').trim()));
        if (/\/\/ SoKs/.test(line)) buf = '';
      }
      return out;
    }
  },
  {
    id: 'hitopadesa-1', title: 'Hitopadeśa 1, kathā 1: the old tiger and the gold bangle (with its verses 1.6–1.21)',
    sentences: () => proseSplit(between(read('sa_nArAyaNa-hitopadeza'), "so 'bravīt-aham ekadā dakṣiṇāraṇye", 'khāditaś ca |'))
  },
  {
    id: 'mbh-150', title: 'Mahābhārata condensed, first 150 verses (Kumbhakonam text via SARIT)',
    sentences: () => {
      const sel = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/texts/mahabharata-condensed/selection.json'), 'utf-8')).entries as any[];
      const xml = read('sa_mahAbhArata-kumbhakonam-sarit');
      const byId = new Map<string, string>();
      for (const m of xml.matchAll(/<lg xml:id="([^"]+)"[^>]*>([\s\S]*?)<\/lg>/g)) byId.set(m[1], m[2]);
      const out: string[] = [];
      for (const e of sel.filter((e) => e.sarit_id && byId.has(e.sarit_id)).slice(0, 150)) {
        const v = byId.get(e.sarit_id)!.replace(/<[^>]+>/g, ' ').replace(/\([^)]*\)/g, '').replace(/[`'‘’]/g, '');
        out.push(...v.split(/[।॥]+/).map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => /[ऀ-ॿ]/.test(s)));
      }
      return out;
    }
  }
  // Kaṭhopaniṣad vallī 1: not pinned (data/texts.json has no Kaṭha; the corpus holds only
  // 1.1.1–1.1.3 as readings ku0101–3). Skipped — see docs/READINESS.md.
];

// ── 3. readiness ───────────────────────────────────────────────────────────
const TIERS = [...new Set(corpus.map((r) => Number(r.segment)))].sort((a, b) => a - b);
const REPORT_TIERS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 570];
const pct = (a: number, b: number) => (b ? (100 * a) / b : 0);
const f1 = (x: number) => x.toFixed(1);

function evaluate(text: Text, ns: Need[], m: ReturnType<typeof met>) {
  const conf = ns.filter((n) => !n.uncertain);
  const tierOf = (items: string[]) => items.reduce((mx, it) => Math.max(mx, m.items.get(it) ?? Infinity), 0);
  const gTier = conf.map((n) => tierOf(n.items));
  const anyTier = ns.filter((n) => n.uncertain !== 'unanalysed').map((n) => Math.min(...(n.alts.length ? n.alts : [n.items]).map(tierOf)));
  const lex = ns.filter((n) => n.lemma);
  const vTier = lex.map((n) => m.lemmas.get(lemmaKey(n.lemma!)) ?? Infinity);
  const at = (arr: number[], N: number) => pct(arr.filter((x) => x <= N).length, arr.length);
  const cross = (arr: number[], x: number) => TIERS.find((N) => at(arr, N) >= x) ?? null;
  const curve = REPORT_TIERS.map((N) => ({ N, g: at(gTier, N), any: at(anyTier, N), v: at(vTier, N) }));
  // unmet items at the top tier, by token frequency
  const unmet = new Map<string, number>();
  for (const n of conf) for (const it of n.items) if (!m.items.has(it)) unmet.set(it, (unmet.get(it) ?? 0) + 1);
  const lateItems = new Map<string, { n: number; tier: number }>();
  for (const n of conf) for (const it of n.items) {
    const t = m.items.get(it);
    if (t !== undefined && t > 200) lateItems.set(it, { n: (lateItems.get(it)?.n ?? 0) + 1, tier: t });
  }
  const unmetLemma = new Map<string, number>();
  for (const n of lex) if (!m.lemmas.has(lemmaKey(n.lemma!))) unmetLemma.set(n.lemma!, (unmetLemma.get(n.lemma!) ?? 0) + 1);
  const unc = { unanalysed: ns.filter((n) => n.uncertain === 'unanalysed').length, reranked: ns.filter((n) => n.uncertain === 'reranked').length };
  return {
    id: text.id, title: text.title, tokens: ns.length, confident: conf.length, uncertain: unc,
    compoundTokens: ns.filter((n) => n.items.includes('समास')).length,
    curve, maxGrammar: at(gTier, Number.MAX_SAFE_INTEGER), maxVocab: at(vTier, Number.MAX_SAFE_INTEGER),
    cross: { g90: cross(gTier, 90), g95: cross(gTier, 95), v90: cross(vTier, 90), v95: cross(vTier, 95), any90: cross(anyTier, 90), any95: cross(anyTier, 95) },
    unmet: [...unmet].sort((a, b) => b[1] - a[1]),
    late: [...lateItems].sort((a, b) => b[1].n - a[1].n),
    unmetLemma: [...unmetLemma].sort((a, b) => b[1] - a[1])
  };
}

const only = opt('--text');
const md = args.includes('--md');
const texts = TEXTS_ALL.filter((t) => !only || t.id === only);
if (!texts.length) { console.error(`no text ${only}; known: ${TEXTS_ALL.map((t) => t.id).join(', ')}`); process.exit(1); }

const engine = new Engine();
const results: ReturnType<typeof evaluate>[] = [];
for (const text of texts) {
  const sents = text.sentences();
  const toks: Token[][] = [];
  for (const s of sents) toks.push(await analyzeSentence(engine, s));
  results.push(evaluate(text, textNeeds(toks), met(text.exclude)));
  console.error(`${text.id}: ${sents.length} sentences, ${toks.flat().length} padas`);
}
engine.close();

const tierStr = (t: number | null) => (t === null ? 'never' : String(t));
for (const r of results) {
  if (md) {
    console.log(`\n### ${r.title}\n\n\`${r.id}\`: ${r.tokens} padas — ${r.confident} confident, ${r.uncertain.unanalysed} unanalysed, ${r.uncertain.reranked} re-ranked away from vidyut (${f1(pct(r.tokens - r.confident, r.tokens))}% uncertain, left out of the grammar column). ${r.compoundTokens} padas carry समास.\n`);
    console.log('| met by tier | grammar % (confident) | grammar % (any alternative) | vocabulary % |\n|---|---|---|---|');
    for (const c of r.curve) console.log(`| ${c.N} | ${f1(c.g)} | ${f1(c.any)} | ${f1(c.v)} |`);
    console.log(`\nCrossings — grammar 90%: **${tierStr(r.cross.g90)}**, 95%: **${tierStr(r.cross.g95)}** (any-alternative: ${tierStr(r.cross.any90)} / ${tierStr(r.cross.any95)}); vocabulary 90%: ${tierStr(r.cross.v90)}, 95%: ${tierStr(r.cross.v95)}. Ceiling (all tiers): grammar ${f1(r.maxGrammar)}%, vocabulary ${f1(r.maxVocab)}%.\n`);
    console.log(`Never met (confident tokens): ${r.unmet.slice(0, 15).map(([k, n]) => `${k} ×${n}`).join(' · ') || '—'}\n`);
    console.log(`Met only after tier 200: ${r.late.slice(0, 10).map(([k, v]) => `${k} ×${v.n} (tier ${v.tier})`).join(' · ') || '—'}\n`);
    console.log(`Commonest unmet lemmas: ${r.unmetLemma.slice(0, 15).map(([k, n]) => `${k} ×${n}`).join(' · ')}`);
  } else {
    console.log(`\n${r.id} — ${r.title}\n  ${r.tokens} padas, ${r.confident} confident (${r.uncertain.unanalysed} unanalysed, ${r.uncertain.reranked} re-ranked)`);
    console.log('  tier   grammar  any-alt  vocab');
    for (const c of r.curve) console.log(`  ${String(c.N).padStart(4)}   ${f1(c.g).padStart(6)}   ${f1(c.any).padStart(6)}  ${f1(c.v).padStart(6)}`);
    console.log(`  grammar crosses 90% at ${tierStr(r.cross.g90)}, 95% at ${tierStr(r.cross.g95)}; vocabulary 90% at ${tierStr(r.cross.v90)}`);
    console.log(`  top unmet: ${r.unmet.slice(0, 12).map(([k, n]) => `${k} ×${n}`).join(' · ')}`);
    console.log(`  unmet lemmas: ${r.unmetLemma.slice(0, 12).map(([k, n]) => `${k} ×${n}`).join(' · ')}`);
  }
}
