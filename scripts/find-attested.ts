#!/usr/bin/env bun
/**
 * find-attested.ts — where did a real author use this form?
 *
 * The reader's aim is a complete reference by example, and an example is best
 * when an author wrote it, in a context that wanted it. This searches the
 * pinned source texts (data/texts.json, fetched by fetch-texts.ts) for a form
 * and prints the verses or sentences that use it, with their references.
 *
 *   bun scripts/find-attested.ts --form मनः            # one form
 *   bun scripts/find-attested.ts --cell "सुबन्त अस्·नपुंसकलिङ्ग: सम्बोधन एकवचन"
 *   bun scripts/find-attested.ts --wanted               # every owed cell
 *   … --limit 8                                         # hits per form
 *
 * For a cell, the candidate forms are derived by vidyut for every stem of that
 * class the corpus and vocabulary already know. A hit is a CANDIDATE: a form
 * like मनः is nominative, accusative and vocative alike, and only the context
 * says which. Reading the verse is the check; this only finds it.
 *
 * Matching is on IAST word tokens, allowing for the sandhi a word-final sound
 * undergoes (मनः → मनो / मनस् / मनश्; -म् → -ं), since the texts print words
 * separated but sandhi applied.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';
import { typeOf, VIBHAKTI, VACANA, LINGA } from '../src/lib/usage/schema';
import { typingTermsOf } from '../src/lib/usage/complete';
import { finalSound } from '../src/lib/usage/taxonomy';
import { deaccent } from '../src/lib/usage/normalize';

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
initSync({ module: fs.readFileSync(require.resolve('shlesha/shlesha_bg.wasm')) });
const tr = (s: string, a: string, b: string) => transliterate(s, a, b) as string;

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const LIMIT = Number(opt('--limit') ?? 5);

// ── the texts, as verses ────────────────────────────────────────────────────
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/texts.json'), 'utf-8'));
type Verse = { title: string; ref: string; text: string; tokens: Set<string> };
const verses: Verse[] = [];
const REF = /\b([A-Za-z]+_[0-9][0-9.,a-z]*)/;
for (const t of manifest.texts) {
  const file = path.join(ROOT, 'data/texts', t.slug + '.txt');
  if (!fs.existsSync(file)) { console.error(`missing ${t.slug} — run bun scripts/fetch-texts.ts`); process.exit(1); }
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  const body = lines.findIndex((l) => /^# Text/.test(l));
  let buf: string[] = [];
  lines.slice(body >= 0 ? body + 1 : 0).forEach((line, i) => {
    const l = line.trim();
    if (!l) return;
    const m = l.match(REF);
    buf.push(l.replace(/\/*\s*\(?[A-Za-z]+_[0-9][0-9.,a-z]*\)?.*$/, '').replace(/[|/]+\s*$/, '').trim());
    // Prose has no verse numbers: a sentence (ending in /) stands alone.
    if (m || /\/\s*$/.test(l) || buf.length >= 4) {
      const text = buf.join(' ').trim();
      const tokens = new Set(text.toLowerCase().split(/[\s\-–—,.;:!?|/()'"‘’“”]+/).filter(Boolean));
      if (text) verses.push({ title: t.title, ref: m ? m[1] : `line ${i + 1}`, text, tokens });
      buf = [];
    }
  });
}

// ── a form, in the shapes sandhi gives its last sound ──────────────────────
function shapes(dev: string): string[] {
  const iast = tr(dev, 'devanagari', 'iast').replace(/ṁ/g, 'ṃ');
  const out = new Set([iast]);
  if (iast.endsWith('ḥ')) {
    const b = iast.slice(0, -1);
    for (const e of ['r', 's', 'ś', 'ṣ']) out.add(b + e);
    if (/a$/.test(b)) out.add(b.slice(0, -1) + 'o');
    if (/[āiīuūeo]$/.test(b) || /a$/.test(b)) out.add(b);   // ḥ lost before a vowel / soft sound
  }
  if (iast.endsWith('m')) out.add(iast.slice(0, -1) + 'ṃ');
  if (iast.endsWith('t')) for (const e of ['d', 'n', 'c', 'j', 'l']) out.add(iast.slice(0, -1) + e);
  if (iast.endsWith('k')) for (const e of ['g', 'ṅ']) out.add(iast.slice(0, -1) + e);
  if (iast.endsWith('n')) for (const e of ['ṃ', 'ñ']) out.add(iast.slice(0, -1) + e);
  return [...out];
}

/*
  A vocative is the form of its nominative, so a bare match cannot tell them
  apart. Address leaves traces, though: हे / भोः / अयि before it, or a second
  person within a few words. Those verses are ranked first for a सम्बोधन cell.
*/
const ADDRESS = new Set(['he', 'bho', 'bhoḥ', 'bhos', 'ayi', 'aye', 're', 'are', 'tvam', 'tvaṃ', 'yūyam', 'yūyaṃ', 'yuvām', 'yuvāṃ', 'te', 'vaḥ', 'vām', 'tava', 'tvayā']);
function addressScore(v: Verse, sh: string[]): number {
  const toks = v.text.toLowerCase().split(/[\s\-–—,.;:!?|/()'"]+/).filter(Boolean);
  let best = 0;
  toks.forEach((t, i) => {
    if (!sh.includes(t)) return;
    const near = toks.slice(Math.max(0, i - 2), i + 4);
    best = Math.max(best, near.filter((x) => ADDRESS.has(x)).length);
  });
  return best;
}
let VOCATIVE = false;
function search(dev: string): Verse[] {
  const sh = shapes(dev);
  const hits = verses.filter((v) => sh.some((s) => v.tokens.has(s)));
  if (!VOCATIVE) return hits;
  return hits.map((v) => [addressScore(v, sh), v] as const).filter(([s]) => s > 0).sort((a, b) => b[0] - a[0]).map(([, v]) => v);
}

// ── a cell's candidate forms, from the stems the corpus knows ──────────────
const W = '/static/wasm/vidyut-prakriya/';
const raw = await import(path.join(ROOT, W, 'vidyut_prakriya.js'));
await raw.default({ module_or_path: await Bun.file(path.join(ROOT, W, 'vidyut_prakriya_bg.wasm')).arrayBuffer() });
const V = raw.Vidyut.init();
const VIB_EN: Record<string, string> = { 'प्रथमा': 'Prathama', 'द्वितीया': 'Dvitiya', 'तृतीया': 'Trtiya', 'चतुर्थी': 'Caturthi', 'पञ्चमी': 'Panchami', 'षष्ठी': 'Sasthi', 'सप्तमी': 'Saptami', 'सम्बोधन': 'Sambodhana' };
const VAC_EN: Record<string, string> = { 'एकवचन': 'Eka', 'द्विवचन': 'Dvi', 'बहुवचन': 'Bahu' };
const LIN_EN: Record<string, string> = { 'पुंलिङ्ग': 'Pum', 'स्त्रीलिङ्ग': 'Stri', 'नपुंसकलिङ्ग': 'Napumsaka' };
const HAL: [RegExp, string][] = [
  [/[क-ह]न्$/, 'अन्'], [/िन्$/, 'इन्'], [/[वम]त्$/, 'वत्/मत्'], [/[क-ह]त्$/, 'अत्'],
  [/[क-ह]स्$/, 'अस्'], [/[िु]स्$/, 'इस्/उस्'], [/[तद]्$/, 'त्/द्'], [/[चज]्$/, 'च्/ज्'],
  [/[शष]्$/, 'श्/ष्'], [/ह्$/, 'ह्'],
];
const classOf = (lem: string) => { const f = finalSound(lem); return f === 'hal' ? HAL.find(([re]) => re.test(lem))?.[1] : f; };

const stems = new Map<string, Set<string>>();   // "class·linga" → lemmas
const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8')).sequence as any[];
for (const r of corpus) for (const w of r.words ?? []) {
  const t = typingTermsOf(w);
  if (typeOf(t)?.id !== 'subanta' || !w.lemma) continue;
  const lg = [...t].find((x) => LINGA.includes(x));
  const lem = deaccent(w.lemma), c = classOf(lem);
  if (lg && c) (stems.get(`${c}·${lg}`) ?? stems.set(`${c}·${lg}`, new Set()).get(`${c}·${lg}`)!).add(lem);
}

function formsFor(cell: string): string[] {
  const m = cell.match(/^सुबन्त (.+?)·(\S+): (\S+) (\S+)$/);
  if (!m) return [];
  const [, cls, lg, vib, vac] = m;
  const out = new Set<string>();
  for (const lem of stems.get(`${cls}·${lg}`) ?? []) {
    const slp = tr(lem, 'devanagari', 'slp1');
    for (const pratipadika of lg === 'स्त्रीलिङ्ग' ? [{ basic: slp }, { nyap: slp }] : [{ basic: slp }]) {
      try {
        for (const p of V.deriveSubantas({ pratipadika, linga: LIN_EN[lg], vibhakti: VIB_EN[vib], vacana: VAC_EN[vac] }))
          out.add(tr(p.text, 'slp1', 'devanagari'));
      } catch { /* not a stem of this kind */ }
    }
  }
  return [...out];
}

function report(label: string, forms: string[]) {
  VOCATIVE = /सम्बोधन/.test(label);
  console.log(`\n${label}` + (VOCATIVE ? '   (ranked by signs of address)' : ''));
  let any = false;
  for (const f of forms) {
    const hits = search(f);
    if (!hits.length) continue;
    any = true;
    console.log(`  ${f} — ${hits.length} hit(s)`);
    for (const v of hits.slice(0, LIMIT)) console.log(`    ${v.title} ${v.ref}: ${tr(v.text, 'iast', 'devanagari')}`);
  }
  if (!any) console.log('  no attested candidate in the pinned texts');
}

if (opt('--form')) report(opt('--form')!, [opt('--form')!]);
else if (opt('--cell')) report(opt('--cell')!, formsFor(opt('--cell')!));
else if (args.includes('--wanted')) {
  const wanted: string[] = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/paradigm-wanted.json'), 'utf-8'));
  for (const c of wanted) report(c, formsFor(c));
} else {
  console.log('usage: --form <form> | --cell "<cell>" | --wanted   [--limit N]');
}
