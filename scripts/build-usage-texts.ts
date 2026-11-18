#!/usr/bin/env bun
/**
 * build-usage-texts.ts — the whole texts' attestations of the प्रयोग index.
 *
 *   bun scripts/build-usage-texts.ts   (after build:quiz and build:texts)
 *   → static/data/usage-texts.json
 *
 * usage.json is the graded corpus: hand-annotated readings, every form checked.
 * The whole texts are another matter — 88,000 words annotated by vidyut, an
 * editor's decisions on top, audited by sample rather than word by word. So
 * they are kept OUT of usage.json and its ratchets, in a layer of their own
 * that the page shows beside the graded attestations and names as the texts'.
 * Nothing here can move a coverage floor or change what a reading shows.
 *
 * A text word is placed only where it FITS: the cell's form in vidyut's
 * paradigm for the entry is the very form the text has. That is a check the
 * texts' analyses had not had. A word that does not fit — vidyut or the
 * editor chose the wrong cell (गावः filed as an accusative), the text is
 * misprinted, or the paradigm itself is wrong (दिट्सु for दिक्षु) — is not
 * shown, and goes to the misfit report (--misfits FILE) for review. A stem
 * with no paradigm to test against is left out for the same reason.
 *
 * Only the subjects /usage already has are indexed — the stems and roots the
 * graded reader teaches. The texts fill and confirm those paradigms; they do
 * not add ten thousand stems the page has no way to present. Participles are
 * left out for now: the texts file them under their own lemma or as
 * indeclinables, not as root + affix as the graded corpus does.
 */
import * as fs from 'fs';
import * as path from 'path';
import { entryKey, type UsageTexts, type TextCell } from '../src/lib/usage/textsKey';
import { cellKey, VIBHAKTIS, VACANAS, LINGAS } from '../src/lib/usage/normalize';

const ROOT = process.cwd();
const USAGE = path.join(ROOT, 'static/data/usage.json');
const TEXTS = path.join(ROOT, 'static/data/texts');
const OUT = path.join(ROOT, 'static/data/usage-texts.json');
const EXAMPLES = 3;

if (!fs.existsSync(USAGE) || !fs.existsSync(path.join(TEXTS, 'index.json'))) {
  console.error('  usage-texts: needs usage.json and the built texts — run build:quiz and build:texts first');
  process.exit(1);
}

const NOUN_KINDS = new Set(['subanta', 'sarvanama', 'sankhya', 'sarvadi', 'taddhita']);
const LAKARAS = ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्', 'लेट्'];
const PURUSHAS = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const pick = (terms: string[], from: readonly string[]) => terms.find((t) => from.includes(t)) ?? null;

// ── the subjects /usage shows ─────────────────────────────────────────────
const usage = JSON.parse(fs.readFileSync(USAGE, 'utf-8'));
const nounKind = new Map<string, string[]>(); // "subject|linga" → kinds having it
const verbs = new Set<string>(); // entryKey of every tinanta entry
/** entryKey → vidyut's paradigm for it (cellKey → forms), the test of fit */
const paradigms = new Map<string, Record<string, string[]>>();
/** a pronoun's entry has no one gender: its paradigm per लिङ्ग */
const byLinga = new Map<string, Record<string, Record<string, string[]>>>();
for (const sec of usage.sections ?? []) {
  for (const e of sec.entries ?? []) {
    const par = e.paradigm ?? e.paradigmByLinga?.[e.linga ?? ''] ?? null;
    if (NOUN_KINDS.has(sec.kind)) {
      const k = `${e.subject}|${e.linga ?? ''}`;
      nounKind.set(k, [...(nounKind.get(k) ?? []), sec.kind]);
      if (e.paradigmByLinga && !e.linga) byLinga.set(entryKey(sec.kind, e.subject, e.linga), e.paradigmByLinga);
      else if (par) paradigms.set(entryKey(sec.kind, e.subject, e.linga), par);
    } else if (sec.kind === 'tinanta') {
      const key = entryKey('tinanta', e.subject, e.pinned?.['लकार']);
      verbs.add(key);
      if (par) paradigms.set(key, par);
    }
  }
}

// ── the texts ────────────────────────────────────────────────────────────
const index: { id: string; title: string; title_en: string }[] = JSON.parse(fs.readFileSync(path.join(TEXTS, 'index.json'), 'utf-8'));
const out: UsageTexts = { generated: new Date().toISOString(), titles: {}, entries: {} };
let placed = 0;
const misfits: { entry: string; cell: string; form: string; expected: string[]; at: string }[] = [];
let untested = 0;

/*
  Does the text's form fill the cell? The paradigm's form, or that form with
  its final visarga lost to sandhi (सः written स before a consonant — the
  pada as the text writes it). The reader's own paradigm check allows the
  same, and only that.
*/
function fits(forms: string[], form: string): boolean {
  return forms.includes(form) || forms.some((f) => f.endsWith('ः') && f.slice(0, -1) === form);
}

function add(key: string, cell: string, ex: TextCell['ex'][number], linga: string | null) {
  const par = byLinga.has(key) ? (linga ? byLinga.get(key)![linga] : undefined) : paradigms.get(key);
  if (!par) { untested++; return; }
  if (!fits(par[cell] ?? [], ex.form)) {
    misfits.push({ entry: key, cell, form: ex.form, expected: par[cell] ?? [], at: `${ex.t} ${ex.s}` });
    return;
  }
  const cells = (out.entries[key] ??= {});
  const c = (cells[cell] ??= { n: 0, ex: [] });
  c.n++;
  placed++;
  // up to three, from as many texts as possible, one per form
  if (c.ex.length >= EXAMPLES) return;
  if (c.ex.some((x) => x.form === ex.form && x.t === ex.t)) return;
  if (c.ex.length && c.ex.some((x) => x.t === ex.t) && c.ex.length >= EXAMPLES - 1) return;
  c.ex.push(ex);
}

for (const t of index) {
  // the text's own name, short and in the reader's script, for the links
  out.titles[t.id] = t.title;
  const dir = path.join(TEXTS, t.id);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'index.json'), 'utf-8'));
  for (const part of meta.parts ?? []) {
    const data = JSON.parse(fs.readFileSync(path.join(dir, part.file), 'utf-8'));
    for (const s of data.sections ?? []) {
      const words: any[] = s.words ?? [];
      words.forEach((w, wi) => {
        const phrase = words.slice(Math.max(0, wi - 2), wi + 3).map((x) => x.surface).join(' ');
        for (const p of w.padas ?? []) {
          const terms: string[] = p.terms ?? [];
          if (!p.lemma || !p.form) continue;
          const ex = { t: t.id, p: part.id, s: s.id, form: p.form, phrase };
          const lakara = pick(terms, LAKARAS);
          if (lakara) {
            const pur = pick(terms, PURUSHAS), vac = pick(terms, VACANAS);
            const key = entryKey('tinanta', p.lemma, lakara);
            if (pur && vac && verbs.has(key)) add(key, cellKey(pur, vac), ex, null);
            continue;
          }
          const vib = pick(terms, VIBHAKTIS), vac = pick(terms, VACANAS);
          if (!vib || !vac) continue;
          const linga = pick(terms, LINGAS);
          // a noun's entry is its stem in one gender; a pronoun's, often none
          for (const k of [`${p.lemma}|${linga ?? ''}`, `${p.lemma}|`]) {
            const kinds = nounKind.get(k);
            if (!kinds) continue;
            for (const kind of kinds) add(entryKey(kind, p.lemma, k.slice(k.indexOf('|') + 1)), cellKey(vib, vac), ex, linga);
            break;
          }
        }
      });
    }
  }
}

fs.writeFileSync(OUT, JSON.stringify(out));
const mi = process.argv.indexOf('--misfits');
if (mi > 0 && process.argv[mi + 1]) fs.writeFileSync(process.argv[mi + 1], JSON.stringify(misfits, null, 1));
const subjects = Object.keys(out.entries).length;
const cells = Object.values(out.entries).reduce((n, c) => n + Object.keys(c).length, 0);
const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`  usage-texts: ${placed} text words placed in ${cells} cells of ${subjects} /usage entries → ${path.relative(ROOT, OUT)} (${kb} KB)`);
console.log(`  usage-texts: ${misfits.length} left out for not fitting their cell's paradigm (--misfits FILE lists them), ${untested} for having no paradigm to test`);
