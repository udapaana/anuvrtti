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
import { WORD_TYPES, KARAKA, SENSE_ROLE } from '../src/lib/usage/schema';
import {
  SARVANAMA_BHEDA, SANKHYA_BHEDA, KRT_PRAYOGA, TADDHITA_ARTHA, AVYAYA_BHEDA
} from '../src/lib/usage/lexical';

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
const PRAYOGA = ['कर्तरि', 'कर्मणि', 'भावे'];
/*
  Read off the schema rather than restated, because these two exist only to
  answer "has the author already said this?" — and a hand-copied list that
  drifts from the schema answers it wrongly and silently, overwriting an
  authored tag with a derived one.
*/
const dimValues = (typeId: string, dim: string) =>
  new Set(
    WORD_TYPES.find((t) => t.id === typeId)?.dimensions.find((d) => d.name === dim)?.values ?? []
  );
const ARTHA_SET = dimValues('taddhita', 'अर्थ');
const KRT_SET = dimValues('kridanta', 'कृत्');
const AVYAYA_BHEDA_SET = dimValues('avyaya', 'अव्यय-भेद');
const UPASARGA_SET = new Set([
  'प्र', 'परा', 'अप', 'सम्', 'अनु', 'अव', 'निस्', 'निर्', 'दुस्', 'दुर्', 'वि',
  'आङ्', 'नि', 'अधि', 'अपि', 'अति', 'सु', 'उद्', 'अभि', 'प्रति', 'परि', 'उप'
]);
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
/*
  Gender for a participle, keyed (lemma|form) rather than by stem.

  LINGAS answers "what gender is this stem", which is the right question for a
  noun and the wrong one for a कृदन्त: गच्छन् is masculine, feminine and neuter
  by turns, because it agrees with what it describes. So the gender belongs to
  the occurrence, and this map — built by declining the derived participle stem
  and matching the attested form — is what carries it.
*/
let KRT_LINGAS: Record<string, string> = {};
/*
  The कृत् affix, where the author wrote none.

  91 कृदन्त carried the bare `कृदन्त` marker and nothing else, and the affix is
  what everything else hangs off — प्रयोग comes from it, and without it there is
  no stem to decline and so no लिङ्ग, विभक्ति or वचन either. build-quiz derives
  all twenty-six from the root and keeps the answer only when exactly one fits.
*/
let KRTS: Record<string, string> = {};
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
    KRT_LINGAS = u.krtLingas ?? {};
    KRTS = u.krts ?? {};
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
// The tiṅanta form → parse index (built by build-quiz from vidyut generation):
// root|form → {लकार, पुरुष, वचन, पद}. A verb form gets its full parse here with
// no authoring — the लकार included — because vidyut GENERATES every cell and the
// build records only the features every producing cell agrees on.
let TIN: Record<string, Record<string, string>> = {};
{
  const p = path.join(process.cwd(), 'static/data/tin-forms.json');
  if (fs.existsSync(p)) TIN = JSON.parse(fs.readFileSync(p, 'utf-8'));
}
const LAKARA_SET = new Set(['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'लिङ्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्']);

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

function derivedFeatures(word: any, governed: Set<number> = new Set(), wi = -1): Record<string, string> | null {
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
  // The occurrence's own gender first: for a participle it is the only true
  // answer, and LINGAS holds a stem-level gender that a root simply has not got.
  const linga = KRT_LINGAS[key] ?? LINGAS[deaccent(word.lemma)];
  if (linga && ![...terms].some((t) => LINGA_SET.has(t))) out['लिङ्ग'] = linga;

  // गण and विकरण are fixed properties of the root, keyed on the lemma. A verb
  // whose root is in the dhātu table gets both without the author writing them;
  // अदादि/जुहोत्यादि have a गण but no शप्-like विकरण, so the tuple may be length 1.
  const gana = GANAS[word.lemma];
  if (gana) {
    if (!terms.has('गण')) out['गण'] = gana[0];
    if (gana[1] && !terms.has('विकरण') && !terms.has(gana[1])) out['विकरण'] = gana[1];
  }

  // The full तिङन्त parse from the generated index — लकार, पुरुष, वचन, पद — for
  // any verb form, with NO authoring. Filled only where the author has not
  // already said it, so an authored tag always wins over the derivation.
  const tin = TIN[deaccent(word.lemma) + '|' + deaccent(String(word.form ?? ''))];
  if (tin) {
    if (tin['लकार'] && ![...terms].some((t) => LAKARA_SET.has(t))) out['लकार'] = tin['लकार'];
    if (tin['पुरुष'] && !out['पुरुष'] && ![...terms].some((t) => PURUSHA_SET.has(t))) out['पुरुष'] = tin['पुरुष'];
    if (tin['वचन'] && !out['वचन'] && ![...terms].some((t) => VACANA_SET.has(t))) out['वचन'] = tin['वचन'];
    if (tin['पद'] && !out['पद'] && ![...terms].some((t) => PADA_SET.has(t))) out['पद'] = tin['पद'];
    /*
      The preverb the derivation needed, carried through.

      build-quiz resolves आगच्छति by trying आ + गम् and अधीते by trying अधि + इङ्;
      when a prefix is what made the form derive, that is a fact about the word
      and it was being discovered and thrown away. Only where the author has not
      written one, like every other derived value.
    */
    if (tin['उपसर्ग'] && ![...terms].some((t) => UPASARGA_SET.has(t))) out['उपसर्ग'] = tin['उपसर्ग'];
  }

  /*
    प्रयोग on a finite verb, which is कर्तरि unless the author says otherwise.

    Every तिङन्त has a voice — there is no such thing as a verb outside
    कर्तरि/कर्मणि/भावे — but the form almost never shows it, so 3% of verbs
    carried the tag and the other 97% were simply blank. Blank read as "unknown"
    when it means "the default", which is why the schema calls this derived
    rather than authored: 2.3.x treats कर्तरि as the unmarked case, so absence of
    कर्मणि/भावे IS the assertion. Written out here so the rail, the quiz and
    /usage all see a value instead of inferring one separately.

    तिङन्त only. A कृदन्त's voice follows its suffix — क्त is usually कर्मणि,
    शतृ and क्तवतु कर्तरि, तव्य and ण्यत् कर्मणि — so there is no safe default
    and it stays authored.
  */
  const isTin = [...terms].some((t) => LAKARA_SET.has(t) || PADA_SET.has(t))
    || !!out['लकार'] || !!out['पद'];
  if (isTin && ![...terms].some((t) => PRAYOGA.includes(t))) out['प्रयोग'] = 'कर्तरि';

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

  /*
    …and the कारक back from the विभक्ति, which is the larger half.

    2.3.x assigns the case FROM the role, so reading it backwards is reading a
    rule against its grain — but for five of the eight cases the sūtra names one
    role and no other, and 879 words with no कारक is the corpus's biggest single
    gap by a factor of two:

      द्वितीया  → कर्मन्      2.3.2  कर्मणि द्वितीया
      चतुर्थी   → सम्प्रदान   2.3.13 चतुर्थी सम्प्रदाने
      पञ्चमी    → अपादान     2.3.28 अपादाने पञ्चमी
      षष्ठी     → सम्बन्ध    2.3.50 षष्ठी शेषे
      सप्तमी    → अधिकरण     2.3.36 सप्तम्यधिकरणे च

    प्रथमा and तृतीया are deliberately absent, and the reason is in the sūtras
    themselves. 2.3.18 कर्तृकरणयोस्तृतीया names TWO roles for the instrumental:
    तृतीया is करण in the active and कर्तृ in the passive — देवदत्तेन is the agent
    of ओदनः पच्यते. And प्रथमा by 2.3.1 अनभिहिते marks whatever the verb has not
    already expressed, which is the कर्तृ in कर्तरि and the कर्मन् in कर्मणि. To
    read either backwards you must already know the प्रयोग of the verb this word
    depends on, and that is a sentence-level fact this function does not have.

    Two guards, both for the exceptions the tradition itself names:
      - a सम्बन्धार्थ tag (हेतु, निर्धारण, सति सप्तमी…) means the case comes from
        a rule about MEANING rather than from a कारक, so there is no role to
        infer — and the corpus already marks these.
      - a कर्मप्रवचनीय governing the word (the गोवत् relation) puts it in a case
        by 1.4.83 ff. rather than by its own role: जपम् अनु is द्वितीया and no
        कर्मन् at all.
  */
  const VIB_ROLE: Record<string, string> = {
    'द्वितीया': 'कर्मन्', 'चतुर्थी': 'सम्प्रदान', 'पञ्चमी': 'अपादान',
    'षष्ठी': 'सम्बन्ध', 'सप्तमी': 'अधिकरण'
  };
  if (
    !terms.has('कारक') && ![...terms].some((t) => KARAKA.includes(t))
    && ![...terms].some((t) => SENSE_ROLE.includes(t))
    && !(word.rel ?? []).some((r: any) => r.kind === 'गोवत्')
    && !governed.has(wi)
  ) {
    const vib = [...terms].find((t) => VIB_ROLE[t]);
    if (vib) out['कारक'] = VIB_ROLE[vib];
  }

  /*
    The tags a closed set settles — see src/lib/usage/lexical.ts.

    Each is keyed on something already fixed before the sentence starts: the
    pronoun stem, the numeral stem, the कृत् affix, the तद्धित affix, the
    indeclinable itself. None of them can differ between two occurrences of the
    same word, which is what makes them derivable at all, and every one is
    written only where the author has not already spoken.

    They are matched on `terms` rather than on the word type, because the type
    is what the marker tag establishes: a word carrying शतृ IS a कृदन्त, and
    asking typeOf() first would just be asking the same question twice.
  */
  const lemma = word.lemma ? deaccent(String(word.lemma)) : '';

  const svBheda = SARVANAMA_BHEDA[lemma];
  if (svBheda && terms.has('सर्वनाम') && !terms.has(svBheda)) out['सर्वनाम-भेद'] = svBheda;

  const snBheda = SANKHYA_BHEDA[lemma];
  if (snBheda && terms.has('संख्या') && !terms.has(snBheda)) out['संख्या-भेद'] = snBheda;

  // The affix is itself a tag on the word, so the lookup is over what is there.
  /*
    The affix first, because प्रयोग below reads it. A derived कृत् feeds the
    affix table exactly as an authored one does — it is the same fact, arrived
    at by derivation rather than by hand.
  */
  const krtDerived = KRTS[key];
  if (krtDerived && !terms.has(krtDerived) && !KRT_SET.has([...terms].find((t) => KRT_SET.has(t)) ?? '')) {
    out['कृत्'] = krtDerived;
  }

  const krt = [...terms, ...(out['कृत्'] ? [out['कृत्']] : [])].find((t) => KRT_PRAYOGA[t]);
  if (krt && ![...terms].some((t) => PRAYOGA.includes(t)) && !out['प्रयोग']) {
    out['प्रयोग'] = KRT_PRAYOGA[krt];
  }

  const tad = [...terms].find((t) => TADDHITA_ARTHA[t]);
  if (tad && ![...terms].some((t) => ARTHA_SET.has(t))) out['अर्थ'] = TADDHITA_ARTHA[tad];

  const avBheda = AVYAYA_BHEDA[lemma];
  if (avBheda && terms.has('अव्यय') && ![...terms].some((t) => AVYAYA_BHEDA_SET.has(t))) {
    out['अव्यय-भेद'] = avBheda;
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

/*
  QUIZ GENERATION LIVES IN THE CLIENT — src/lib/reader/quiz.ts.

  It used to be baked here: one question per word, chosen by a hash and frozen
  into readings.json, so every word asked the same thing forever. 1867 questions
  collapsed to 648 distinct cards, and "Which विभक्ति? → प्रथमा" existed in 72
  identical copies. Shipping the whole pool instead fixed the variety and took
  readings.json from 5.1MB to 10.4MB — doubling the download immediately after
  the reader's load time was cut from 13s to under 1s.

  Neither is necessary. The reader already holds everything a question needs —
  the word's tags, its `derived` map, its gloss, its lemma, its citations — and
  usage.json, which it loads anyway for the rail, carries the paradigm tables
  and the cell-ambiguity index. Generating on demand costs no payload, and lets
  the question, its distractors and its answer order differ every time a word
  comes round.

  What still belongs to the build: `derived` (vidyut features) and `split` (the
  sandhi parse). Both are facts about the corpus, not questions about it.
*/

function main() {
  const titles = chapterTitles();
  const chapters: any[] = [];
  const flat: any[] = [];

  // Each chapter is a directory (NN_name/) of one-file-per-reading, so a
  // reading opens by its id with an IDE "Go to File" keystroke. Within a
  // chapter the readings are sorted by id — a stable, filename-driven order;
  // the learning-path (sequence) order is data-driven and independent of this.
  const chapterDirs = fs
    .readdirSync(READINGS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('_'))
    .map((e) => e.name)
    .sort();

  for (const dir of chapterDirs) {
    const dirPath = path.join(READINGS_DIR, dir);
    const readingFiles = fs
      .readdirSync(dirPath)
      .filter((f) => f.endsWith('.yaml') && !f.startsWith('_'))
      .sort();
    const src = readingFiles
      .map((f) => fs.readFileSync(path.join(dirPath, f), 'utf-8'))
      .join('\n');
    const file = dir; // for error messages below
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
    // Per-reading files are bare one-item sequences, so the concatenation is a
    // sequence; a legacy monolithic file would parse to { readings: [...] }.
    const readings = Array.isArray(doc) ? doc : (doc?.readings ?? []);
    if (!readings.length) continue;
    const stem = file.replace(/\.yaml$/, ''); // '01_karaka'
    const key = stem.includes('_') ? stem.slice(stem.indexOf('_') + 1) : stem; // 'karaka'
    chapters.push({ id: key, title: titles[key] ?? key, readings });
    /*
      Each reading carries the file it came from.

      A reading knows its `chapter` as a slug — 'karaka' — but the directory is
      '01_karaka', so the path cannot be reconstructed from the payload. That
      mattered the moment the reader gained an edit control: to open a pull
      request against the annotation you are looking at, the page has to know
      which file to write. Derived from the id rather than tracked through the
      concatenation, because one-file-per-reading is the convention and the
      filename IS the id — the check below refuses to guess when it is not.
    */
    for (const r of readings) {
      const src = `content/readings/${dir}/${r.id}.yaml`;
      if (!fs.existsSync(path.join(process.cwd(), src))) {
        throw new Error(
          `${dir}/${r.id}: no file at ${src}.\n` +
            `  A reading's id must match its filename — that is what lets the ` +
            `reader open an edit against it.`
        );
      }
      flat.push({ ...r, chapter: key, file: src, length: lengthOf(r) });
    }
  }

  let agreedLinga = 0;
  for (const r of flat) {
    const ws = r.words ?? [];
    /*
      Which words a कर्मप्रवचनीय puts in a case. The edge runs FROM the particle
      TO the word it governs, so the governed word cannot see it on itself —
      it has to be collected from the reading first.
    */
    const governed = new Set<number>();
    for (const w of ws) {
      for (const rel of w.rel ?? []) if (rel.kind === 'गोवत्' && typeof rel.to === 'number') governed.add(rel.to);
    }
    ws.forEach((w: any, wi: number) => {
      const feats = derivedFeatures(w, governed, wi);
      if (feats) w.derived = feats;
      else delete w.derived;

      // no quiz is written: the reader builds them from these annotations
      delete w.quizzes;
      delete w.quiz;


      const split = sandhiSplitOf(w);
      if (split) w.split = split;
      else delete w.split;
    });

    /*
      Agreement — a second pass, because an adjective's gender is its noun's.

      श्रेष्ठतरम् is neuter because महत्त्वम् is; द्वे is not masculine because
      विद्ये is not. Neither fact is in the adjective: समानाधिकरण means the
      gender comes from the other word, so no amount of declining श्रेष्ठतर will
      produce it, and the stem-level guess (masculine, from its other
      occurrences) is wrong precisely where the reading is teaching agreement.

      The edge is already authored — `rel: विशेषण, to: N` — and the schema
      already declares लिङ्ग·विभक्ति·वचन as the axes that must agree. So this
      only reads what the annotation has said and copies the value across.

      Second pass because the target's own लिङ्ग may itself be derived, and a
      single forward pass would ask before the answer existed. An authored tag
      on the adjective still wins; this fills a silence, like everything else.
    */
    const LINGA_VALS = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'];
    const lingaOf = (x: any): string | undefined => {
      const authored = (x.notes ?? []).map((n: any) => n.term).find((t: string) => LINGA_VALS.includes(t));
      return authored ?? (x.derived ?? {})['लिङ्ग'];
    };
    for (const w of ws) {
      if (lingaOf(w)) continue;
      for (const rel of w.rel ?? []) {
        if (rel.kind !== 'विशेषण' || typeof rel.to !== 'number') continue;
        const target = ws[rel.to];
        const lg = target ? lingaOf(target) : undefined;
        if (!lg) continue;
        (w.derived ??= {})['लिङ्ग'] = lg;
        agreedLinga++;
        break;
      }
    }
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
  if (agreedLinga) console.log(`  ${agreedLinga} लिङ्ग taken from the noun a विशेषण agrees with`);
  console.log(
    `Wrote ${flat.length} readings — ${chapters.length} topical chapters + sequence view → ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main();
