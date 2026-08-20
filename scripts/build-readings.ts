#!/usr/bin/env bun
/**
 * Build the graded-reader payload from content/readings/*.yaml.
 *
 * Ported from vidvat/grammar/src/build_reader_json.py. Emits TWO projections of
 * one corpus (the reader-vs-reference architecture):
 *   chapters[] — grouped by topic   → the REFERENCE view
 *   sequence[] — flat, by `segment`  → the READER view (difficulty order)
 *
 *   → static/data/readings.json
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';
import { parseGrid, isRectangular } from '../src/lib/reader/paradigm';
import { deaccent } from '../src/lib/usage/normalize';
import { SAMASA, TADDHITA_ARTHA, KRT_DECLINING, KRT_INDECLINABLE, PRAYOGA } from '../src/lib/usage/schema';

const READINGS_DIR = path.join(process.cwd(), 'content/readings');
const SYLLABUS = path.join(READINGS_DIR, '_syllabus.yaml');
const OUTPUT = path.join(process.cwd(), 'static/data/readings.json');

/** Chapter ids in syllabus order — the intended pedagogical sequence. */
function syllabusOrder(): string[] {
  if (!fs.existsSync(SYLLABUS)) return [];
  const syl = parseYaml(fs.readFileSync(SYLLABUS, 'utf-8')) as any;
  return (syl.chapters ?? []).map((c: any) => c.id);
}

function chapterTitles(): Record<string, string> {
  if (!fs.existsSync(SYLLABUS)) return {};
  const syl = parseYaml(fs.readFileSync(SYLLABUS, 'utf-8')) as any;
  const titles: Record<string, string> = {};
  for (const c of syl.chapters ?? []) titles[c.id] = c.title;
  return titles;
}

/**
 * Length bucket — the axis SPLIT OUT from `segment`.
 *
 * `segment` used to carry difficulty and length at once, which forced long
 * passages late: long read as hard. But the two are not correlated. A 40-word
 * narrative using only owned grammar is easier per-word than a 6-word sentence
 * with a णमुल् in it — it is merely longer. Collapsing them meant consolidation
 * passages (the cheapest way to build recurrence, since most words need light
 * glossing rather than full note apparatus) could not sit at the tier whose
 * grammar they consolidate.
 *
 * Split, difficulty ratchets BETWEEN tiers and length breathes WITHIN them:
 * short readings introduce a tier's new rules, then a passage at the SAME tier
 * reuses them at volume.
 *
 * Derived, not authored — it is a fact about the sentence, and hand-maintained
 * copies of derivable facts go stale. An author may still pin `length:`
 * explicitly (e.g. a dense verse that reads longer than its word count).
 * Counted in words rather than characters so it doesn't track script or sandhi.
 */
function lengthOf(r: any): 'short' | 'passage' | 'long' {
  if (r.length === 'short' || r.length === 'passage' || r.length === 'long') return r.length;
  const words = String(r.sentence ?? '')
    .replace(/[।॥]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  if (words <= 8) return 'short';
  if (words <= 25) return 'passage';
  return 'long';
}

/**
 * Quiz data for the reader's rail: tapping a word asks what it is before
 * showing the gloss.
 *
 * Derived rather than authored. The answer is already in the word's `term`
 * tags — a विभक्ति name or a लकार name — and the distractors are the other
 * members of that same closed set. 1,418 of ~2,000 words carry one; the rest
 * (indeclinables, compounds, bare stems) get no question and the rail shows
 * their gloss directly.
 *
 * Distractors are picked deterministically from the word's own form so the
 * options do not reshuffle on every rebuild, which would make the corpus diff
 * churn for no reason.
 */
const VIBHAKTI = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const LAKARA = ['लट्', 'लङ्', 'लिट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'लुङ्'];
const ROLES = ['कर्तृ', 'कर्मन्', 'करण', 'सम्प्रदान', 'अपादान', 'अधिकरण'];

/**
 * Which विभक्तिs a surface form can actually be, derived by vidyut in
 * scripts/build-quiz.ts rather than read off hand-written tags.
 *
 * The tags were wrong for this purpose: वनम् is प्रथमा AND द्वितीया — every
 * neuter is — and asking for one marks the other wrong. Worse, the tags
 * disagreed with each other (फलम् asked as प्रथमा in ex182 and द्वितीया in
 * ex008). vidyut enumerates every cell that produces a form, so "does this form
 * determine its case?" becomes a fact rather than a guess.
 */
type Cells = Record<
  string,
  { linga: string | null; vibhaktis: string[]; cells?: Array<[string, string]> }
>;
let CELLS: Cells = {};
{
  const p = path.join(process.cwd(), 'static/data/quiz-cells.json');
  if (fs.existsSync(p)) CELLS = JSON.parse(fs.readFileSync(p, 'utf-8'));
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Distractors picked deterministically so options do not reshuffle per build. */
function distractors(ans: string, pool: string[], seed: number, n = 3): string[] {
  const others = pool.filter((x) => x !== ans);
  const picks: string[] = [];
  for (let i = 0; i < n && others.length; i++) {
    picks.push(others.splice((seed + i * 7) % others.length, 1)[0]);
  }
  return picks;
}

/**
 * The phrase a word sits in — its immediate neighbours in the sentence.
 *
 * When the form alone cannot settle the case, the sentence can, and the quiz
 * should show enough of it to make the question answerable. वनम् गच्छति is
 * द्वितीया; वनम् शोभते is प्रथमा — and the reader can tell, given the verb.
 */
function phraseAround(sentence: string, form: string): string | null {
  const toks = String(sentence ?? '')
    .replace(/[।॥]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const i = toks.findIndex((t) => t.replace(/[,;—"“”?!]/g, '') === form);
  if (i === -1) return null;
  return toks.slice(Math.max(0, i - 1), Math.min(toks.length, i + 3)).join(' ');
}

/**
 * The प्रयोग index, read back so a word can carry the features nobody authored.
 *
 * 95% of nouns have no वचन and 96% of verbs no पुरुष, and the reader's rail can
 * only show tags that exist — सभाम् displays as "कर्मन् · द्वितीया" with the
 * number missing. The index already resolved those cells; this attaches the
 * answer to the word.
 *
 * Deliberately NOT written back into the YAML. A derived value copied into the
 * source goes stale the moment a reading is edited, and the corpus already
 * carries one round of that. It lives on the built word, marked `derived`, so
 * the rail can show it differently from what an author asserted.
 */
let USAGE: Record<string, string> = {};
let PADAS: Record<string, string> = {};
let LINGAS: Record<string, string> = {};
let GANAS: Record<string, [string, string?]> = {};
// stem → (विभक्ति|वचन) → form, from the vidyut-built paradigm grids. This is what
// a PRODUCTION quiz needs: given a cell, the form that fills it, plus the other
// cells' forms as distractors.
let PARADIGM: Record<string, Record<string, string>> = {};
{
  const p = path.join(process.cwd(), 'static/data/usage.json');
  if (fs.existsSync(p)) {
    const u = JSON.parse(fs.readFileSync(p, 'utf-8'));
    USAGE = u.cells ?? {};
    PADAS = u.padas ?? {};
    LINGAS = u.lingas ?? {};
    GANAS = u.ganas ?? {};
    const sub = (u.sections ?? []).find((s: any) => s.kind === 'subanta');
    for (const e of sub?.entries ?? []) {
      const cellForm: Record<string, string> = {};
      for (const [cell, arr] of Object.entries(e.grid ?? {})) {
        const f = (arr as any[])[0]?.form;
        if (f) cellForm[cell] = f;
      }
      if (Object.keys(cellForm).length) PARADIGM[e.subject] = cellForm;
    }
  }
}
/** Row values that name a पुरुष rather than a विभक्ति — i.e. the word is a verb. */
const PURUSHA_ROWS = new Set(['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष']);

const VACANA_SET = new Set(['एकवचन', 'द्विवचन', 'बहुवचन']);
const PURUSHA_SET = new Set(['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष']);

/**
 * What the index settles for this word, minus whatever the author already said.
 *
 * Only unambiguous cells count. फलम् is प्रथमा *and* द्वितीया and मातुः is
 * पञ्चमी *and* षष्ठी — asserting one would be the same error the quiz made.
 */
const PADA_SET = new Set(['परस्मैपद', 'आत्मनेपद']);
const LINGA_SET = new Set(['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग']);

function derivedFeatures(word: any): Record<string, string> | null {
  if (!word.lemma) return null;
  const key = deaccent(word.lemma) + '|' + deaccent(String(word.form ?? ''));
  const cell = USAGE[key];
  const terms = new Set<string>((word.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
  const out: Record<string, string> = {};

  const pada = PADAS[key];
  if (pada && ![...terms].some((t) => PADA_SET.has(t))) out['पद'] = pada;

  // The gender is a property of the stem, not the occurrence, so it is keyed
  // on the lemma alone. Narrowed from the attested forms in build-quiz; a stem
  // the corpus never disambiguates simply has none.
  const linga = LINGAS[deaccent(word.lemma)];
  if (linga && ![...terms].some((t) => LINGA_SET.has(t))) out['लिङ्ग'] = linga;

  // गण and विकरण are fixed properties of the root, keyed on the lemma. A verb
  // whose root is in the dhātu table gets both without the author writing them;
  // अदादि/जुहोत्यादि have a गण but no शप्-like विकरण, so the tuple may be length 1.
  const gana = GANAS[word.lemma];
  if (gana) {
    if (!terms.has('गण')) out['गण'] = gana[0];
    if (gana[1] && !terms.has('विकरण') && !terms.has(gana[1])) out['विकरण'] = gana[1];
  }

  // विभक्ति from the कारक role, as a FALLBACK. The role is the author's own
  // assertion (कर्मन् → द्वितीया, 2.3.x), so this is not the engine guessing — it
  // is the role's default case, used only where no विभक्ति was written and never
  // to override one. Matches the ROLE_VIB fallback the quiz build already uses.
  const ROLE_VIB: Record<string, string> = {
    'कर्तृ': 'प्रथमा', 'कर्मन्': 'द्वितीया', 'करण': 'तृतीया',
    'सम्प्रदान': 'चतुर्थी', 'अपादान': 'पञ्चमी', 'सम्बन्ध': 'षष्ठी', 'अधिकरण': 'सप्तमी'
  };
  if (![...terms].some((t) => VIBHAKTI.includes(t))) {
    const role = [...terms].find((t) => ROLE_VIB[t]);
    if (role) out['विभक्ति'] = ROLE_VIB[role];
  }

  if (!cell) return Object.keys(out).length ? out : null;

  const [rowVal, colVal] = cell.split('|');

  // The column axis is वचन in every section built so far.
  if (colVal && ![...terms].some((t) => VACANA_SET.has(t))) out['वचन'] = colVal;
  // The row axis is विभक्ति for nominals and पुरुष for verbs. Only the latter is
  // worth adding: विभक्ति is authored by definition, and re-stating it would
  // present the author's own assertion back as a derivation.
  if (PURUSHA_ROWS.has(rowVal) && ![...terms].some((t) => PURUSHA_SET.has(t))) {
    out['पुरुष'] = rowVal;
  }
  return Object.keys(out).length ? out : null;
}

/**
 * The sandhi split of a joined word — the pre-सन्धि parts, for padaccheda mode.
 *
 * The split is authored in free text on the सन्धि note ("वाक् + अत्र — ..."), and
 * sometimes has three parts (तत्र + ऋषिः + उवाच). This scans a word's notes for
 * the FIRST `X + Y [+ Z…]` pattern and returns the parts. Deliberately
 * conservative: a word with no parseable split gets none, so padaccheda simply
 * shows the surface form unchanged rather than a mangled guess.
 *
 * This is the "parse the existing free text" step. A later pass may promote the
 * split to an authored `split: [...]` field checked by the lint; until then the
 * note IS the source, so keep the "A + B" shape when authoring सन्धि (see
 * WORD-TYPES.md §4).
 */
function sandhiSplitOf(word: any): string[] | null {
  const notes = word.notes ?? [];
  const hasSandhi = notes.some((n: any) => n.term === 'सन्धि');
  if (!hasSandhi) return null;
  for (const n of notes) {
    const src = `${n.en ?? ''} ${n.text ?? ''}`;
    // strip a leading "विग्रह:" label, then take everything up to the first
    // dash/semicolon/comma that ends the analysis.
    const head = src.replace(/विग्रह[:：]/, '').split(/[—;,।]/)[0];
    // parts joined by +, each a run of non-space Devanagari
    const m = head.match(/([^\s+]+(?:\s*\+\s*[^\s+]+)+)/);
    if (m) {
      const parts = m[1].split(/\s*\+\s*/).map((p) => p.trim()).filter(Boolean);
      if (parts.length >= 2) return parts;
    }
  }
  return null;
}

// ── the question pool ────────────────────────────────────────────────────
// The quiz used to ask three things (विभक्ति, लकार, role) as flat MCQs. The
// schema now defines ~20 dimensions and 5 relation kinds, so a word can be asked
// about far more, and in more than one shape. `quizFor` builds every question a
// word can carry, then picks one deterministically — so each word gets a stable
// but varied question, and the quiz as a whole exercises the whole grammar.

type Quiz = { q: string; opts: string[]; ans: string; phrase?: string; note?: string; kind?: string };

/**
 * A PRODUCTION quiz: show the cell (देव · प्रथमा · एकवचन), ask which FORM fills
 * it. Distractors are OTHER cells' forms of the same stem — the near-miss forms
 * a learner actually confuses (देवम्, देवेन, देवाः), not random words. Needs the
 * stem's paradigm and the cell to be known; returns null otherwise.
 */
function productionQuiz(lemma: string, form: string, vib: string, vac: string | undefined): Quiz | null {
  const para = PARADIGM[lemma];
  if (!para || !vac) return null;
  const cellKey = `${vib}|${vac}`;
  const ans = para[cellKey];
  if (!ans || deaccent(ans) !== deaccent(form)) return null; // paradigm must agree with the attested form
  // distractors: other filled cells of the same stem
  const others = Object.entries(para)
    .filter(([k, f]) => k !== cellKey && deaccent(f) !== deaccent(ans))
    .map(([, f]) => f);
  const seed = hash(lemma + cellKey);
  const uniq = [...new Set(others)].sort((a, b) => (hash(a + seed) % 89) - (hash(b + seed) % 89)).slice(0, 3);
  if (uniq.length < 2) return null;
  const opts = [ans, ...uniq].sort((a, b) => (hash(a + 'o' + seed) % 83) - (hash(b + 'o' + seed) % 83));
  return { q: `Which form is ${lemma} · ${vib} · ${vac}?`, opts, ans, kind: 'production' };
}

/** A term-tag question: "which <dimension>?" with schema-value distractors. */
function tagQuiz(form: string, ans: string, pool: string[], label: string, kind: string): Quiz {
  const seed = hash(form + ans + kind);
  const opts = [ans, ...distractors(ans, pool, seed)]
    .filter((x, k, a) => a.indexOf(x) === k)
    .sort((a, b) => pool.indexOf(a) - pool.indexOf(b));
  return { q: `Which ${label}?`, opts, ans, kind };
}

/**
 * Every quiz a word can carry, richest first. The caller picks one.
 * `words` and `wi` are passed so relation and production questions can reach the
 * other words in the reading.
 */
function quizPool(word: any, sentence: string, words: any[], wi: number): Quiz[] {
  const terms: string[] = (word.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term);
  const has = (t: string) => terms.includes(t);
  const form = String(word.form ?? '');
  const out: Quiz[] = [];

  const vib = terms.find((t) => VIBHAKTI.includes(t));
  const lak = terms.find((t) => LAKARA.includes(t));
  const role = terms.find((t) => ROLES.includes(t));

  // ── विभक्ति — the core case question, with HARD distractors ──────────────
  if (vib) {
    const cell = CELLS[deaccent(form)];
    const settled = cell ? cell.vibhaktis.length === 1 : false;
    if (settled) {
      out.push(tagQuiz(form, vib, VIBHAKTI, 'विभक्ति', 'vibhakti'));
    } else {
      // Ambiguous form: show the phrase that settles it, and draw distractors
      // from the OTHER cases this form can actually be — the real choice.
      const phrase = phraseAround(sentence, form);
      if (phrase && cell && cell.vibhaktis.includes(vib)) {
        const seed = hash(form + vib);
        const rivals = cell.vibhaktis.filter((c) => c !== vib);
        const filler = distractors(vib, VIBHAKTI, seed, Math.max(0, 3 - rivals.length));
        const opts = [vib, ...rivals, ...filler]
          .filter((x, k, a) => a.indexOf(x) === k)
          .sort((a, b) => VIBHAKTI.indexOf(a) - VIBHAKTI.indexOf(b));
        out.push({ q: 'Which विभक्ति here?', phrase, opts, ans: vib, note: cell.linga ?? undefined, kind: 'vibhakti-phrase' });
      } else if (role) {
        out.push(tagQuiz(form, role, ROLES, 'कारक role', 'role'));
      }
    }
  }

  // ── लकार — the tense/mood question ───────────────────────────────────────
  if (lak) out.push(tagQuiz(form, lak, LAKARA, 'लकार', 'lakara'));

  // ── समास — which compound type? ─────────────────────────────────────────
  const samasa = terms.find((t) => SAMASA.includes(t));
  if (samasa) out.push(tagQuiz(form, samasa, SAMASA, 'समास', 'samasa'));

  // ── कृदन्त — which कृत् suffix formed it? ─────────────────────────────────
  const krt = terms.find((t) => [...KRT_DECLINING, ...KRT_INDECLINABLE].includes(t));
  if (krt) out.push(tagQuiz(form, krt, [...KRT_DECLINING, ...KRT_INDECLINABLE], 'कृत् suffix', 'krt'));

  // ── तद्धित — which sense (अर्थ) does the suffix carry? ────────────────────
  const artha = terms.find((t) => TADDHITA_ARTHA.includes(t));
  if (artha) out.push(tagQuiz(form, artha, TADDHITA_ARTHA, 'तद्धित अर्थ', 'artha'));

  // ── प्रयोग — active or passive? (only when authored, i.e. कर्मणि/भावे) ────
  const prayoga = terms.find((t) => PRAYOGA.includes(t));
  if (prayoga && prayoga !== 'कर्तरि') out.push(tagQuiz(form, prayoga, PRAYOGA, 'प्रयोग (voice)', 'prayoga'));

  // ── RELATION — which word does this agree with / belong to? ──────────────
  // A विशेषण/कर्तृसमानाधिकरण edge whose target is in the same reading. The answer
  // is the target word's FORM; distractors are other words from the reading.
  for (const rel of word.rel ?? []) {
    const target = words[rel.to];
    if (!target || rel.to === wi) continue;
    const others = words
      .filter((w: any, k: number) => k !== wi && k !== rel.to && w.form)
      .map((w: any) => String(w.form));
    const dist = [...new Set(others)].slice(0, 3);
    if (dist.length < 2) continue;
    const label = rel.kind === 'विशेषण' ? 'Which word does this qualify?'
      : rel.kind === 'कर्तृसमानाधिकरण' ? 'Which word is its subject?'
      : rel.kind === 'अवयव' ? 'Which compound is this a member of?'
      : 'Which word does this relate to?';
    const seed = hash(form + rel.kind + rel.to);
    const opts = [String(target.form), ...dist]
      .filter((x, k, a) => a.indexOf(x) === k)
      .sort((a, b) => (hash(a + seed) % 97) - (hash(b + seed) % 97));
    out.push({ q: label, opts, ans: String(target.form), kind: 'relation' });
  }

  // ── PRODUCTION — give the coordinates, ask for the form ──────────────────
  // The recall-first flip: instead of "what case is देवः?", show the cell
  // (देव · प्रथमा · एकवचन) and ask which FORM fills it. Distractors are the
  // OTHER cells' forms of the same stem, from the vidyut-built cell table — a
  // genuinely harder, generative question. Only when the stem's paradigm is known.
  if (vib && word.lemma) {
    const vac = terms.find((t) => VACANA_SET.has(t)) ?? word.derived?.['वचन'];
    const prod = productionQuiz(word.lemma, form, vib, vac);
    if (prod) out.push(prod);
  }

  return out;
}

/** The single quiz a word carries: the pool, with one picked deterministically
 *  so the mix is varied across the corpus but stable per word. */
function quizFor(word: any, sentence: string, words: any[] = [], wi = 0): Quiz | null {
  const pool = quizPool(word, sentence, words, wi);
  if (!pool.length) return null;
  // Prefer the richer questions (relation, production, samasa, krt) over the
  // plain case/tense question when a word carries several — but keep it stable.
  const rank: Record<string, number> = {
    relation: 0, production: 1, samasa: 2, krt: 2, artha: 2, prayoga: 3,
    'vibhakti-phrase': 4, vibhakti: 5, lakara: 5, role: 6
  };
  pool.sort((a, b) => (rank[a.kind ?? ''] ?? 9) - (rank[b.kind ?? ''] ?? 9));
  // Among the top-ranked, pick by hash so the corpus doesn't always show the
  // richest — variety matters. Take from the top two rank tiers.
  const topRank = rank[pool[0].kind ?? ''] ?? 9;
  const candidates = pool.filter((q) => (rank[q.kind ?? ''] ?? 9) <= topRank + 1);
  return candidates[hash(String(word.form)) % candidates.length];
}

function main() {
  const titles = chapterTitles();
  const chapters: any[] = [];
  const flat: any[] = [];

  const files = fs
    .readdirSync(READINGS_DIR)
    .filter((f) => f.endsWith('.yaml') && !f.startsWith('_'))
    .sort();

  for (const file of files) {
    const src = fs.readFileSync(path.join(READINGS_DIR, file), 'utf-8');
    // Catch the recurring authoring slip before the YAML parser does: an
    // unquoted scalar containing a double quote. YAML reports it as
    // "Unexpected scalar at node end" with a line number and no cause, which
    // is a poor error for a mistake that happens on nearly every batch.
    src.split('\n').forEach((line, i) => {
      // Only a value that STARTS with a quote is a problem — YAML then reads it
      // as a quoted scalar and chokes on whatever follows the closing quote.
      // A quote mid-value ('the sense "along with"') parses fine and is common.
      const m = line.match(/^\s+(en|role|gloss|teaches|translation): (".*)$/);
      // A properly quoted scalar closes its quote, allowing \" inside it.
      const wellFormed = m ? /^"(?:[^"\\]|\\.)*"$/.test(m[2].trim()) : true;
      if (m && !wellFormed) {
        throw new Error(
          `${file}:${i + 1} — unquoted scalar contains a double quote.\n` +
            `  ${line.trim()}\n` +
            `  Wrap it in single quotes, or escape the inner quotes as \\".`
        );
      }
    });
    const doc = parseYaml(src) as any;
    const readings = doc?.readings ?? [];
    if (!readings.length) continue;
    const stem = file.replace(/\.yaml$/, ''); // '01_karaka'
    const key = stem.includes('_') ? stem.slice(stem.indexOf('_') + 1) : stem; // 'karaka'
    chapters.push({ id: key, title: titles[key] ?? key, readings });
    for (const r of readings) flat.push({ ...r, chapter: key, length: lengthOf(r) });
  }

  for (const r of flat) {
    const ws = r.words ?? [];
    ws.forEach((w: any, wi: number) => {
      const feats = derivedFeatures(w);
      if (feats) w.derived = feats;
      else delete w.derived;

      const quiz = quizFor(w, r.sentence, ws, wi);
      if (quiz) w.quiz = quiz;
      else delete w.quiz;

      const split = sandhiSplitOf(w);
      if (split) w.split = split;
      else delete w.split;
    });
  }

  // reader view: DIFFICULTY order by `segment` alone — never by length.
  // These are independent axes (see lengthOf): a long passage built from
  // grammar the reader already owns is EASIER per-word than a short sentence
  // carrying a new rule. Sorting on length would push exactly the
  // consolidation passages we want mid-tier to the end of the reader.
  //
  // Ties break by `order` when authored (see below), then by id. Id order is
  // AUTHORING order and disagrees with pedagogical order on ~33% of pairs —
  // ex119-130 were written late but belong at tier 5 — so it is only ever a
  // stable-sort fallback, never a meaningful sequence.
  // Within one tier, keep a chapter's readings TOGETHER. 25 of 57 tiers have
  // more than one chapter in them, and the old fallback was `id` — authoring
  // order — so chapters interleaved arbitrarily: the reader got kāraka, then
  // sandhi, then kāraka again. That produced 70 topic switches across 223
  // readings, a change every 3.2 readings, 28 of them a single reading before
  // jumping away. Grouping by chapter inside the tier removes the thrash
  // without touching difficulty order, which `segment` still owns entirely.
  //
  // Chapter order within a tier follows the syllabus, so it is a pedagogical
  // decision rather than a filename artefact; chapters absent from the
  // syllabus sort last, alphabetically.
  const chapterRank = new Map<string, number>();
  syllabusOrder().forEach((id, i) => chapterRank.set(id, i));
  const rank = (ch: string) => chapterRank.get(ch) ?? 500;

  const sequence = [...flat].sort(
    (a, b) =>
      (a.segment ?? 9999) - (b.segment ?? 9999) ||
      (a.order ?? 0) - (b.order ?? 0) ||
      rank(a.chapter) - rank(b.chapter) ||
      String(a.chapter).localeCompare(String(b.chapter)) ||
      String(a.id).localeCompare(String(b.id))
  );

  // Gloss-coverage check. The reader matches each sentence token against the
  // `words` table by exact form; a miss renders the token bare with no gloss
  // and no error. That silence is the danger — it looks like a deliberate
  // ungloss. Long prose passages are where it bites (a trailing comma is
  // enough), so report it at build time rather than leaving it to be noticed.
  // Scoped to PROSE — see the skip below. Anusvāra is normalised because ग्रामं and
  // ग्रामम् are the same word — a corpus-wide orthographic split that silently
  // detached glosses in 12 readings before this check existed.
  const anusvara = (s: string) => s.replace(/ं$/, 'म्');
  const orphans: string[] = [];
  for (const r of sequence) {
    const forms = new Set((r.words ?? []).map((w: any) => anusvara(w.form)));
    if (!forms.size) continue;
    // Skip tables and the "क + ख → ग" sandhi display syntax: unglossed tokens
    // are correct in both. Tables are detected by SHAPE via the shared module,
    // not by the `kind` field — ex094 is a paradigm that never declared itself
    // one, so a kind-based test reported all 24 of its cells as missing glosses.
    if (isRectangular(parseGrid(r.sentence)) || String(r.sentence ?? '').includes('→')) continue;
    const toks = String(r.sentence ?? '')
      .replace(/[।॥,;—"“”?!]/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
      .map(anusvara);
    const missed = toks.filter((t) => !forms.has(t));
    const unused = [...forms].filter((f: any) => !toks.includes(f));
    if (missed.length || unused.length) {
      orphans.push(
        `  ${r.id}: ${missed.length ? `${missed.length} token(s) with no gloss [${missed.slice(0, 4).join(' ')}]` : ''}` +
          `${missed.length && unused.length ? ', ' : ''}` +
          `${unused.length ? `${unused.length} gloss entr(ies) matching no token [${unused.slice(0, 4).join(' ')}]` : ''}`
      );
    }
  }
  if (orphans.length) {
    console.warn(`\n⚠ gloss/token mismatches in ${orphans.length} reading(s):`);
    for (const o of orphans.slice(0, 15)) console.warn(o);
    if (orphans.length > 15) console.warn(`  … and ${orphans.length - 15} more`);
    console.warn('');
  }

  // Dense display position, derived. `segment` is the AUTHORED tier and is
  // deliberately sparse (see the ×10 convention in _syllabus.yaml): tiers were
  // packed 1..57 with no gaps, so inserting a consolidation passage between
  // tiers 5 and 6 meant renumbering every reading above it. Authors now number
  // in 10s and insert freely; `position` is what the reader counts with, and it
  // is recomputed on every build so it can never drift from the authored order.
  sequence.forEach((r, i) => (r.position = i + 1));

  fs.writeFileSync(OUTPUT, JSON.stringify({ chapters, sequence }, null, 2));
  console.log(
    `Wrote ${flat.length} readings — ${chapters.length} topical chapters + sequence view → ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main();
