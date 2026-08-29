#!/usr/bin/env bun
/**
 * build-quiz.ts — quiz data derived from vidyut, not from hand-written tags.
 *
 * The first version asked "which विभक्ति?" using the word's `term` tags as the
 * answer. That was wrong twice over:
 *
 *   - वनम् is प्रथमा AND द्वितीया. Every neuter is. Asking for one marks the
 *     other wrong, contradicting the corpus's own text (ex172: "the प्रथमा and
 *     द्वितीया are always identical in the neuter").
 *   - The tags disagreed with each other: फलम् was asked as प्रथमा in ex182 and
 *     द्वितीया in ex008. Same form, same question, opposite answers.
 *
 * Patching around it with ending heuristics was the wrong fix. The right one is
 * to ask the grammar engine: derive every (linga, vibhakti, vacana) cell of a
 * stem and see which ones actually produce this surface form. If exactly one
 * does, the form determines its case and the question is fair. If several do,
 * the form does NOT determine its case and no amount of phrasing makes "which
 * विभक्ति?" answerable — so we ask what the word is doing instead, which the
 * sentence genuinely settles.
 *
 * Gender is an input to derivation, not an output, so vidyut cannot supply it.
 * Three sources narrow it, in this order of authority:
 *   1. the corpus — intersect the lingas that can produce EVERY attested form
 *      of the stem. ग्रामः only exists as Pum, so ग्राम is masculine and its
 *      ग्रामम् is unambiguously द्वितीया.
 *   2. static/data/vocabulary.json — `partOfSpeech: n.noun` etc., for stems the
 *      corpus does not disambiguate (वन appears only as वनम्/वने).
 *   3. data/mw-linga.tsv — Monier-Williams, the lexicon Ambuda seeds from.
 *      See scripts/import-mw.ts for how it is projected out of MW.
 *
 * WHY MW IS THIRD AND NOT FIRST. It is a union over every sense of a headword,
 * so it is generous where the corpus is exact: गृह comes back f,m,n and सुख
 * comes back m,n. Used as the answer it would assert a gender the text does not
 * support; used as a BOUND it is exactly right — it says which genders are
 * possible, and derivation against the annotated विभक्ति says which one is here.
 * That is the same shape as the dhātupāṭha fix for verbs: the dictionary
 * proposes, the derivation disposes.
 *
 * Where the corpus offers no evidence at all — a stem attested once, in a form
 * every gender produces — MW's own answer stands, but only when MW gives ONE
 * gender. This is what closes most of the backlog: of the 382 stems with no
 * settled गender, MW knows 344 and 199 of those are unambiguous in MW itself.
 *
 * A stem MW records with no gender is not a gap. `m:f:n` is the mfn adjective
 * pattern and `ind` is an indeclinable; neither has a gender of its own to
 * carry, so those stems are left unset deliberately rather than guessed at.
 *
 * Emits a cache so the reader build does not pay the WASM cost on every run.
 */
import * as fs from 'fs';
import * as path from 'path';
import { deaccent, phraseAround } from '../src/lib/usage/normalize';
import {
  groupFor, sarvanamaGroupFor, isSarvanama, GANA_DEV, LAKARA_ORDER,
  SUBANTA_GROUPS, SARVANAMA_GROUPS, finalSound
} from '../src/lib/usage/taxonomy';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');
const VOCAB = path.join(process.cwd(), 'static/data/vocabulary.json');
const MW = path.join(process.cwd(), 'data/mw-linga.tsv');
const WASM_DIR = path.join(process.cwd(), 'static/wasm/vidyut-prakriya/');
const OUT = path.join(process.cwd(), 'static/data/quiz-cells.json');
const USAGE_OUT = path.join(process.cwd(), 'static/data/usage.json');

const LINGAS = ['Pum', 'Stri', 'Napumsaka'] as const;
const VIBHAKTIS = [
  'Prathama', 'Dvitiya', 'Trtiya', 'Caturthi',
  'Panchami', 'Sasthi', 'Saptami', 'Sambodhana'
] as const;
const VACANAS = ['Eka', 'Dvi', 'Bahu'] as const;

/** vidyut key → the Devanagari name the corpus and the reader use. */
const VIB_DEV: Record<string, string> = {
  Prathama: 'प्रथमा', Dvitiya: 'द्वितीया', Trtiya: 'तृतीया', Caturthi: 'चतुर्थी',
  Panchami: 'पञ्चमी', Sasthi: 'षष्ठी', Saptami: 'सप्तमी', Sambodhana: 'सम्बोधन'
};
const LINGA_DEV: Record<string, string> = {
  Pum: 'पुंलिङ्ग', Stri: 'स्त्रीलिङ्ग', Napumsaka: 'नपुंसकलिङ्ग'
};
const VAC_DEV: Record<string, string> = {
  Eka: 'एकवचन', Dvi: 'द्विवचन', Bahu: 'बहुवचन'
};

// ── तिङन्त ──────────────────────────────────────────────────────────────
const PURUSHAS = ['Prathama', 'Madhyama', 'Uttama'] as const;
const PUR_DEV: Record<string, string> = {
  Prathama: 'प्रथमपुरुष', Madhyama: 'मध्यमपुरुष', Uttama: 'उत्तमपुरुष'
};
const LAK_KEY: Record<string, string> = {
  'लट्': 'Lat', 'लङ्': 'Lan', 'लिट्': 'Lit', 'लुट्': 'Lut', 'लृट्': 'Lrt',
  'लोट्': 'Lot', 'विधिलिङ्': 'VidhiLin', 'आशीर्लिङ्': 'AshirLin',
  'लुङ्': 'Lun', 'लृङ्': 'Lrn'
};

/**
 * Root → (aupadeśika, gaṇa), the dhātupāṭha spelling vidyut needs.
 *
 * The corpus records only the citation form (गम्), and a wrong gaṇa silently
 * derives a different verb rather than failing — so every entry here was
 * checked by deriving a form the corpus actually uses and comparing. Roots
 * whose spelling could not be confirmed are omitted rather than guessed;
 * they surface in the build's "root not in the dhātu table" count.
 */
const DHATU: Record<string, [string, string]> = {
  'भू': ['BU', 'Bhvadi'], 'वस्': ['vasa~', 'Bhvadi'], 'पठ्': ['paWa~', 'Bhvadi'],
  'पच्': ['qupaca~^', 'Bhvadi'], 'रक्ष्': ['rakza~', 'Bhvadi'], 'वद्': ['vada~', 'Bhvadi'],
  'क्रुध्': ['kruDa~', 'Divadi'], 'तुष्': ['tuza~', 'Divadi'], 'रुच्': ['ruca~\\', 'Bhvadi'],
  'नी': ['RI\\Y', 'Bhvadi'], 'ज्ञा': ['jYA\\', 'Kryadi'], 'श्रु': ['Sru\\', 'Bhvadi'],
  'कृ': ['qukf\\Y', 'Tanadi'], 'गम्': ['ga\\mx~', 'Bhvadi'], 'दा': ['qudA\\Y', 'Juhotyadi'],
  'दृश्': ['df\\Si~r', 'Bhvadi'], 'अस्': ['asa~', 'Adadi'], 'इष्': ['izu~', 'Tudadi'],
  'स्था': ['zWA\\', 'Bhvadi'], 'प्रच्छ्': ['pra\\Ca~', 'Tudadi'], 'खाद्': ['KAdf~', 'Bhvadi'],
  'चिन्त्': ['citi~', 'Curadi'], 'या': ['yA\\', 'Bhvadi'], 'पत्': ['patx~', 'Bhvadi'],
  'भी': ['YiBi\\', 'Juhotyadi'], 'इ': ['i\\R', 'Adadi'], 'हन्': ['ha\\na~', 'Adadi'],
  'लभ्': ['qula\\Ba~\\', 'Bhvadi'], 'मन्': ['ma\\na~\\', 'Divadi'], 'सद्': ['za\\dx~', 'Bhvadi']
};


/**
 * Preverbs tried when a form does not derive from the bare root.
 *
 * आगच्छति, प्रभवति and अधीते are गम्, भू and इ with an उपसर्ग fused on, and vidyut
 * takes the prefix as a separate input — without it the whole form derives to
 * nothing. Trying the common preverbs recovered 19 of the 45 forms that
 * otherwise fell out of the index.
 */
const UPASARGAS = [
  'A', 'pra', 'sam', 'vi', 'ni', 'anu', 'upa', 'aDi', 'ava',
  'ud', 'pari', 'prati', 'apa', 'aBi', 'nis', 'dus', 'su'
];

function toSlp1(dev: string): string | null {
  const map: Record<string, string> = {
    'अ':'a','आ':'A','इ':'i','ई':'I','उ':'u','ऊ':'U','ऋ':'f','ॠ':'F','ए':'e','ऐ':'E','ओ':'o','औ':'O',
    'क':'k','ख':'K','ग':'g','घ':'G','ङ':'N','च':'c','छ':'C','ज':'j','झ':'J','ञ':'Y',
    'ट':'w','ठ':'W','ड':'q','ढ':'Q','ण':'R','त':'t','थ':'T','द':'d','ध':'D','न':'n',
    'प':'p','फ':'P','ब':'b','भ':'B','म':'m','य':'y','र':'r','ल':'l','व':'v',
    'श':'S','ष':'z','स':'s','ह':'h',
    'ा':'A','ि':'i','ी':'I','ु':'u','ू':'U','ृ':'f','े':'e','ै':'E','ो':'o','ौ':'O','ं':'M','ः':'H'
  };
  let out = '';
  const chars = [...dev];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === '्') continue;
    const m = map[c];
    if (m === undefined) return null;
    out += m;
    const isCons = /[कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह]/.test(c);
    const next = chars[i + 1];
    if (isCons && next !== '्' && !(next && /[ािीुूृेैोौ]/.test(next))) out += 'a';
  }
  return out;
}

/**
 * SLP1 → Devanagari, for showing vidyut's own output.
 *
 * The cache only ever needed Devanagari → SLP1, because it asks "does this
 * corpus form derive?" and throws the engine's spelling away. The प्रयोग grid
 * shows the UNATTESTED cells too, and those forms exist only as vidyut emits
 * them, so they have to come back the other way.
 */
const SLP_VOWEL: Record<string, string> = {
  a: 'अ', A: 'आ', i: 'इ', I: 'ई', u: 'उ', U: 'ऊ', f: 'ऋ', F: 'ॠ',
  e: 'ए', E: 'ऐ', o: 'ओ', O: 'औ'
};
const SLP_MATRA: Record<string, string> = {
  a: '', A: 'ा', i: 'ि', I: 'ी', u: 'ु', U: 'ू', f: 'ृ',
  e: 'े', E: 'ै', o: 'ो', O: 'ौ'
};
const SLP_CONS: Record<string, string> = {
  k: 'क', K: 'ख', g: 'ग', G: 'घ', N: 'ङ', c: 'च', C: 'छ', j: 'ज', J: 'झ', Y: 'ञ',
  w: 'ट', W: 'ठ', q: 'ड', Q: 'ढ', R: 'ण', t: 'त', T: 'थ', d: 'द', D: 'ध', n: 'न',
  p: 'प', P: 'फ', b: 'ब', B: 'भ', m: 'म', y: 'य', r: 'र', l: 'ल', v: 'व',
  S: 'श', z: 'ष', s: 'स', h: 'ह'
};
function toDeva(slp: string): string {
  let out = '';
  let i = 0;
  while (i < slp.length) {
    const c = slp[i];
    if (SLP_CONS[c]) {
      out += SLP_CONS[c];
      const n = slp[i + 1];
      if (n !== undefined && SLP_MATRA[n] !== undefined) { out += SLP_MATRA[n]; i += 2; }
      else { out += '्'; i += 1; }
      continue;
    }
    if (SLP_VOWEL[c]) { out += SLP_VOWEL[c]; i++; continue; }
    if (c === 'M') { out += 'ं'; i++; continue; }
    if (c === 'H') { out += 'ः'; i++; continue; }
    i++;
  }
  return out;
}

async function loadVidyut() {
  console.error = () => {};
  const raw = await import(WASM_DIR + 'vidyut_prakriya.js');
  const bytes = await Bun.file(WASM_DIR + 'vidyut_prakriya_bg.wasm').arrayBuffer();
  await raw.default({ module_or_path: bytes });
  return raw.Vidyut.init();
}

async function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8')).sequence as any[];
  const v = await loadVidyut();

  // Gender hints from the project's own lexicon.
  const lexGender = new Map<string, string>();
  if (fs.existsSync(VOCAB)) {
    const vocab = JSON.parse(fs.readFileSync(VOCAB, 'utf-8'));
    for (const w of vocab.words ?? []) {
      const g = /^m\./.test(w.partOfSpeech) ? 'Pum'
        : /^f\./.test(w.partOfSpeech) ? 'Stri'
          : /^n\./.test(w.partOfSpeech) ? 'Napumsaka' : null;
      if (g && w.stem) lexGender.set(w.stem, g);
    }
  }

  /*
    Monier-Williams, as a bound on which genders a stem can take.

    Two maps, because "MW says this stem is masculine or neuter" and "MW says
    this stem has no gender" are different facts and only the first is a
    candidate list. `mwNone` holds the adjectives and indeclinables — stems that
    correctly have no लिङ्ग — so a later report can tell them apart from stems
    MW has simply never heard of.
  */
  const mwGender = new Map<string, string[]>();
  const mwNone = new Set<string>();
  const MW_DEV: Record<string, string> = { m: 'Pum', f: 'Stri', n: 'Napumsaka' };
  if (fs.existsSync(MW)) {
    for (const line of fs.readFileSync(MW, 'utf-8').split('\n')) {
      if (!line || line.startsWith('#')) continue;
      const [stem, g, kind] = line.split('\t');
      const gs = (g ?? '').split(',').filter(Boolean).map((x) => MW_DEV[x]).filter(Boolean);
      /*
        Stems MW records both as a noun and as an mfn adjective still vote.

        They are the obvious thing to distrust, because the genders listed
        belong to the noun senses and the corpus may mean the adjective —
        पुस्तक is exactly that trap: MW gives `m.` for "a protuberant ornament"
        and `mf(ikA)n.` for "a manuscript, book", which is the only sense this
        corpus ever uses, so the m. broke a tie the wrong way and printed
        पुंलिङ्ग on a neuter.

        Excluding them was measured against scripts/check-linga.ts and is not
        worth it: 201/201 right and 66 stems left blank, against 227/228 right
        and 39 blank when they vote. Twenty-six true answers is a bad price for
        one false one, and the false one has a proper home — vocabulary.json is
        consulted BEFORE this and is where a stem MW is wrong about belongs.
        The fixture is what makes that a measurement instead of a preference.
      */
      if (gs.length) mwGender.set(stem, gs);
      else mwNone.add(stem);
    }
  } else {
    console.log(`  note: ${path.relative(process.cwd(), MW)} absent — gender falls back to corpus evidence alone`);
  }

  // Every surface form the corpus uses, grouped by stem.
  //
  // Deaccented on the way in. The Ṛgveda readings carry Vedic accents (दे॒वम्,
  // दे॒वेषु॑) and `toSlp1` has no mapping for those marks, so it returned null and
  // the form fell out of the cache entirely — all 196 accented (lemma, form)
  // pairs in the corpus were missing, including every oblique of देव. Accents are
  // display data; they never belong in a lookup key.
  const formsByStem = new Map<string, Set<string>>();
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      const stem = deaccent(w.lemma);
      if (!formsByStem.has(stem)) formsByStem.set(stem, new Set());
      formsByStem.get(stem)!.add(deaccent(w.form));
    }
  }

  /** Which (linga, vibhakti, vacana) cells of `stem` produce `form`? */
  const memo = new Map<string, Array<[string, string, string]>>();
  function cellsFor(stemSlp: string, form: string): Array<[string, string, string]> {
    const key = stemSlp + '|' + form;
    const hit = memo.get(key);
    if (hit) return hit;
    const out: Array<[string, string, string]> = [];
    for (const lg of LINGAS)
      for (const vb of VIBHAKTIS)
        for (const vc of VACANAS) {
          try {
            const res = v.deriveSubantas({ pratipadika: { basic: stemSlp }, linga: lg, vibhakti: vb, vacana: vc });
            for (const p of res) if (p.text === form) out.push([lg, vb, vc]);
          } catch { /* this cell does not derive */ }
        }
    memo.set(key, out);
    return out;
  }

  // `vibhaktis` is what quizFor() in build-readings.ts reads, and it stays
  // exactly as it was. `cells` is added beside it: the (विभक्ति, वचन) pairs the
  // form fills, which the same derivation already computed and then threw away.
  // Number cannot come from the annotation — only 5% of case-tagged words carry
  // a वचन tag — so the प्रयोग grid's second axis has to come from here.
  const cells: Record<
    string,
    { linga: string | null; vibhaktis: string[]; cells: Array<[string, string]> }
  > = {};
  let resolved = 0, ambiguous = 0, underivable = 0;
  /** Genders MW supplied where the corpus had nothing to weigh, and the tie-breaks it settled. */
  const mwOnly = new Map<string, string>();
  const mwConflicts: string[] = [];
  /** Stems left without a लिङ्ग, split by whether MW says there is one to find. */
  const mwRightlyBlank: string[] = [];
  const mwStillUnknown: string[] = [];
  let mwBroke = 0;

  /** अस्मद् and युष्मद् have no gender at all — one paradigm, not three. */
  const GENDERLESS = new Set(['अस्मद्', 'युष्मद्']);

  /** Per-stem results the प्रयोग index reuses rather than recomputing. */
  const stemInfo = new Map<string, { stemSlp: string; linga: string | null; isPronoun: boolean; isSarvadi: boolean }>();

  // ── what the corpus itself says a form is ──────────────────────────────
  //
  // The annotation is the primary evidence and the engine is the secondary.
  // कूपे is ambiguous as a string — vidyut offers सप्तमी एक, प्रथमा द्वि, द्वितीया
  // द्वि, सम्बोधन एक/द्वि — but the reading it stands in says सप्तमी, and that is
  // not a guess. Intersecting the two settles 96% of forms; asking the engine
  // alone smeared one word across five cells.
  const annot = new Map<string, { vib: Set<string>; vac: Set<string> }>();
  /** Every annotated occurrence of a stem, kept separate — see the note below. */
  const annotOcc = new Map<string, Array<{ form: string; vib: string; vac: string | null }>>();
  const VIB_SET = new Set(Object.values(VIB_DEV));
  const VAC_SET = new Set(Object.values(VAC_DEV));

  /**
   * The कारक role a word is tagged with implies its विभक्ति, by 2.3.
   *
   * Many words carry only the role — गोकुले is tagged अधिकरण and nothing else —
   * and without this the form falls back to the engine's five candidates.
   * The mapping is the default assignment only; a role can take another case
   * under specific rules, so it is used strictly as a fallback where no
   * विभक्ति was recorded, never to override one.
   */
  const ROLE_VIB: Record<string, string> = {
    'कर्तृ': 'प्रथमा', 'कर्मन्': 'द्वितीया', 'करण': 'तृतीया',
    'सम्प्रदान': 'चतुर्थी', 'अपादान': 'पञ्चमी', 'सम्बन्ध': 'षष्ठी',
    'अधिकरण': 'सप्तमी'
  };

  /** Stems the corpus tags सर्वनाम anywhere — they inflect for all three genders. */
  const pronouns = new Set<string>();
  /*
    Stems the corpus tags विशेषण anywhere.

    An adjective's gender is a fact about the occurrence, not about the stem —
    सुन्दरः and सुन्दरी are the same word agreeing with different nouns. MW
    marks the obvious ones (`m:f:n`) and they are excluded already, but it also
    lists plenty of adjectives under a single gender because that is the sense
    it happened to record. Asserting that as the stem's gender would print
    "पुंलिङ्ग" beside a word standing next to a feminine noun. The corpus's own
    tag is the more reliable signal here, so it vetoes.
  */
  const adjectives = new Set<string>();
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      if ((w.notes ?? []).some((n: any) => n.term === 'सर्वनाम')) {
        pronouns.add(deaccent(w.lemma));
      }
      if ((w.notes ?? []).some((n: any) => n.term === 'विशेषण')) {
        adjectives.add(deaccent(w.lemma));
      }
    }
  }

  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      const notes = w.notes ?? [];
      const v = notes.find((n: any) => VIB_SET.has(n.term));
      const role = notes.find((n: any) => ROLE_VIB[n.term]);
      const vib = v ? v.term : role ? ROLE_VIB[role.term] : null;
      if (!vib) continue;
      const n = notes.find((x: any) => VAC_SET.has(x.term));
      const key = deaccent(w.lemma) + '|' + deaccent(w.form);
      if (!annot.has(key)) annot.set(key, { vib: new Set(), vac: new Set() });
      annot.get(key)!.vib.add(vib);
      if (n) annot.get(key)!.vac.add(n.term);

      /*
        The same annotation, kept per OCCURRENCE as well as unioned.

        `annot` answers "which cells can this form occupy anywhere in the
        corpus", which is the right question for the quiz cache. It is the wrong
        question for gender, and unioning actively destroys the evidence: सुखम्
        is tagged प्रथमा in one reading and द्वितीया in another, so the union is
        {प्रथमा, द्वितीया} — and a masculine सुख can make द्वितीया सुखम्, so the
        masculine survives a test the corpus had already failed it on. The one
        occurrence tagged प्रथमा settles it, because only a neuter has प्रथमा
        सुखम् at all. Scoring per occurrence keeps that.
      */
      const st = deaccent(w.lemma);
      if (!annotOcc.has(st)) annotOcc.set(st, []);
      annotOcc.get(st)!.push({ form: deaccent(w.form), vib, vac: n ? n.term : null });
    }
  }

  /**
   * The cells a form actually occupies, narrowing the engine's candidates by
   * what the corpus asserts. Returns the engine's raw list when the corpus is
   * silent — better a candidate set than nothing — and flags which happened.
   */
  function resolveCells(
    stem: string, form: string, cands: Array<[string, string, string]>
  ): { cells: Array<[string, string, string]>; byAnnotation: boolean } {
    const a = annot.get(stem + '|' + form);
    if (!a || !a.vib.size) return { cells: cands, byAnnotation: false };
    let keep = cands.filter((c) => a.vib.has(VIB_DEV[c[1]]));
    // The engine and the annotation have never disagreed across the corpus
    // (0 conflicts in 507 pairs). If one ever appears, trust neither silently:
    // fall back to the candidates and let the cell show as ambiguous.
    if (!keep.length) return { cells: cands, byAnnotation: false };
    if (a.vac.size) {
      const k = keep.filter((c) => a.vac.has(VAC_DEV[c[2]]));
      if (k.length) keep = k;
    }
    return { cells: keep, byAnnotation: true };
  }

  for (const [stem, forms] of formsByStem) {
    const stemSlp = toSlp1(stem);
    if (!stemSlp) continue;

    // Narrow the gender: keep only lingas that can produce EVERY attested form
    // IN THE CASE THE CORPUS ASSIGNS IT.
    //
    // Requiring only that the linga produce the string was too weak. विश्वे is
    // derivable as a feminine of विश्वा, so विश्व came out स्त्रीलिङ्ग on the
    // strength of one Vedic dual — and then its whole expected-form grid was
    // the wrong declension. Demanding agreement with the annotated विभक्ति
    // removes that class of false narrowing.
    // Scored, not intersected. Requiring EVERY form to admit the same linga is
    // too brittle for a corpus with Vedic text in it: नरः, नरस्य, नरौ, नरेण are
    // all plainly masculine, but the Ṛgvedic vocative नरा derives only as a
    // feminine, and that one form emptied the intersection and left नर
    // genderless. Counting instead, a single odd form cannot outvote four.
    //
    // Counted per OCCURRENCE, not per distinct form. A form annotated two
    // different ways in two readings is two pieces of evidence and the stricter
    // one is usually the decisive one — see the note where `annotOcc` is built.
    const lingaScore = new Map<string, number>(LINGAS.map((l) => [l, 0]));
    const derivable: Array<[string, string]> = [];
    for (const form of forms) {
      const slp = toSlp1(form);
      if (!slp) continue;
      const cs = cellsFor(stemSlp, slp);
      if (!cs.length) continue;           // not a subanta of this stem (verb, indeclinable)
      derivable.push([form, slp]);
    }
    for (const occ of annotOcc.get(stem) ?? []) {
      const slp = toSlp1(occ.form);
      if (!slp) continue;
      const cs = cellsFor(stemSlp, slp);
      if (!cs.length) continue;
      let fit = cs.filter((c) => VIB_DEV[c[1]] === occ.vib);
      // The engine and the annotation disagreeing is itself information we do
      // not have — fall back to the engine's candidates rather than scoring
      // nothing, exactly as resolveCells does.
      if (!fit.length) fit = cs;
      else if (occ.vac) {
        const k = fit.filter((c) => VAC_DEV[c[2]] === occ.vac);
        if (k.length) fit = k;
      }
      for (const lg of new Set(fit.map((c) => c[0]))) {
        lingaScore.set(lg, (lingaScore.get(lg) ?? 0) + 1);
      }
    }
    /*
      Forms the corpus never annotated still count, once each. Without this a
      stem whose every occurrence lacks a विभक्ति tag would score zero and lose
      the gender it used to have — the annotated evidence is better, not the
      only evidence.
    */
    if (![...lingaScore.values()].some((n) => n > 0)) {
      for (const [form, slp] of derivable) {
        const { cells: fit } = resolveCells(stem, form, cellsFor(stemSlp, slp));
        for (const lg of new Set(fit.map((c) => c[0]))) {
          lingaScore.set(lg, (lingaScore.get(lg) ?? 0) + 1);
        }
      }
    }
    if (!derivable.length) {
      underivable++;
      /*
        No form of this stem derives as a सुबन्त, so there is no grid to build
        and no corpus evidence to weigh — but MW may still know what the word
        is. भगवत् appears seven times and its stem does not decline through
        vidyut's basic pratipadika; MW says masculine, and that is worth showing
        even though the paradigm is not. Recorded on its own so the paradigm
        pass below is untouched: this only reaches the लिङ्ग tag.
      */
      const only = mwGender.get(stem);
      if (only?.length === 1 && !isSarvanama(stem) && !pronouns.has(stem) && !adjectives.has(stem)) {
        mwOnly.set(stem, only[0]);
      }
      continue;
    }

    // A सर्वनाम has no gender of its own — it takes the gender of whatever it
    // points at, so तद् really does appear as सः, सा and तत् in one corpus. That
    // is a fact about the word, not missing evidence, and calling it "unsettled"
    // told the reader to expect an answer that does not exist.
    //
    // The corpus's सर्वनाम tag is not the test, though. It is applied — rightly,
    // by 1.1.27 — to सर्व, एक and अन्य, which take pronominal endings but are
    // adjectives with a gender of their own. Only the closed list counts as a
    // pronoun; the rest stay सुबन्त and are marked सर्वादि.
    const isPronoun = isSarvanama(stem);
    const isSarvadi = !isPronoun && pronouns.has(stem);

    const lex = lexGender.get(stem);
    const best = Math.max(...lingaScore.values());
    const top = LINGAS.filter((l) => (lingaScore.get(l) ?? 0) === best && best > 0);
    /*
      MW as the last tie-break, under the corpus and under our own lexicon.

      The ordering is the whole point. Derivation against the annotated विभक्ति
      is evidence about THIS text; MW is a union over every sense a headword ever
      had, so it is a wider net and a weaker claim. It gets consulted only where
      the corpus genuinely could not choose — and even then it must agree with
      one of the candidates derivation left standing, so it can narrow a tie but
      never overrule the text. A stem the corpus tags विशेषण is skipped: its
      gender belongs to the occurrence.
    */
    const mw = adjectives.has(stem) ? undefined : mwGender.get(stem);
    const mwTop = mw ? top.filter((l) => mw.includes(l)) : [];
    const linga = isPronoun
      ? null
      : top.length === 1
        ? top[0]
        // A tie the lexicon can break — vocabulary.json records the gender for
        // stems the corpus's own forms leave balanced.
        : lex && top.includes(lex)
          ? lex
          : mwTop.length === 1
            ? mwTop[0]
            : null;

    /*
      A blank is not always a gap. MW records some of these stems with no gender
      at all — they are mfn adjectives or indeclinables, and having no gender is
      the correct answer rather than a missing one. Counted apart so the backlog
      figure is not inflated by words that will never have a लिङ्ग to find.
    */
    if (!linga && !isPronoun) (mwNone.has(stem) ? mwRightlyBlank : mwStillUnknown).push(stem);

    // Where the corpus DID settle a gender and MW lists genders that exclude it,
    // one of the two is wrong about this stem. Neither is silently preferred —
    // the corpus wins, as it must, and the disagreement is reported so it can be
    // looked at rather than absorbed.
    if (linga && top.length === 1 && mw && !mw.includes(linga)) {
      mwConflicts.push(`${stem}: corpus ${LINGA_DEV[linga]}, MW ${mw.map((l) => LINGA_DEV[l]).join('/')}`);
    }
    // MW was the deciding vote: the corpus tied and our own lexicon was silent.
    if (!isPronoun && top.length > 1 && !(lex && top.includes(lex)) && mwTop.length === 1) mwBroke++;

    for (const [form, slp] of derivable) {
      const cs = cellsFor(stemSlp, slp).filter((c) => (linga ? c[0] === linga : true));
      // The quiz cache keeps the ENGINE's view: "does this form, by its shape
      // alone, determine a case?" That is the right question for a quiz gate,
      // and narrowing it by the annotation would make the answer trivially yes.
      const vibs = [...new Set(cs.map((c) => VIB_DEV[c[1]]))];
      const pairs = [...new Set(cs.map((c) => VIB_DEV[c[1]] + '|' + VAC_DEV[c[2]]))]
        .map((k) => k.split('|') as [string, string]);
      cells[form] = { linga: linga ? LINGA_DEV[linga] : null, vibhaktis: vibs, cells: pairs };
      if (vibs.length === 1) resolved++; else ambiguous++;
    }

    // Keep what the प्रयोग index needs: the narrowed gender and the SLP1 stem,
    // so the paradigm pass below does not have to re-derive either.
    stemInfo.set(stem, { stemSlp, linga, isPronoun, isSarvadi });
  }

  fs.writeFileSync(OUT, JSON.stringify(cells, null, 0));
  console.log(
    `Wrote ${Object.keys(cells).length} forms → ${path.relative(process.cwd(), OUT)}\n` +
      `  ${resolved} determine one विभक्ति, ${ambiguous} do not, ${underivable} stems not derivable as subantas\n` +
      `  लिङ्ग from MW: ${mwBroke} tie(s) broken, ${mwOnly.size} stem(s) answered where nothing derived\n` +
      `  still unset: ${mwStillUnknown.length} stem(s) undetermined, ${mwRightlyBlank.length} that MW gives no gender (adjective or indeclinable)` +
      (mwConflicts.length
        ? `\n  ${mwConflicts.length} stem(s) where MW disagrees with the corpus (corpus kept): ` +
          mwConflicts.slice(0, 6).join('; ')
        : '')
  );

  // ── the प्रयोग index ───────────────────────────────────────────────────
  //
  // Same corpus, indexed the other way: by what the language declines rather
  // than by what the reader meets next. Built here because everything it needs
  // is already in hand — the WASM instance, the memoised derivations, and the
  // gender each stem was narrowed to.

  /** Every cell of a stem's paradigm, attested or not. Memoised per (stem, linga). */
  const paraMemo = new Map<string, Record<string, string[]>>();
  function paradigmOf(stemSlp: string, linga: string): Record<string, string[]> {
    const key = stemSlp + '|' + linga;
    const hit = paraMemo.get(key);
    if (hit) return hit;
    const out: Record<string, string[]> = {};
    for (const vb of VIBHAKTIS)
      for (const vc of VACANAS) {
        try {
          const res = v.deriveSubantas({
            pratipadika: { basic: stemSlp }, linga, vibhakti: vb, vacana: vc
          });
          const forms = [...new Set(res.map((p: any) => p.text))] as string[];
          if (forms.length) out[VIB_DEV[vb] + '|' + VAC_DEV[vc]] = forms.map(toDeva);
        } catch { /* this cell does not derive for this stem */ }
      }
    paraMemo.set(key, out);
    return out;
  }

  // Occurrences grouped by stem, carrying the reading each one came from.
  type Occ = {
    form: string; formRaw: string; reading: string; position: number;
    chapter: string; phrase: string | null; gloss: string;
    cites: Array<{ cite: string; role: string }>;
  };
  const occByStem = new Map<string, Occ[]>();
  let unlemmatized = 0;
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) { unlemmatized++; continue; }
      const stem = deaccent(w.lemma);
      if (!occByStem.has(stem)) occByStem.set(stem, []);
      occByStem.get(stem)!.push({
        form: deaccent(w.form),
        formRaw: String(w.form ?? ''),
        reading: String(r.id ?? ''),
        position: Number(r.position ?? 0),
        chapter: String(r.chapter ?? ''),
        phrase: phraseAround(String(r.sentence ?? ''), String(w.form ?? '')),
        gloss: String(w.gloss ?? ''),
        cites: (w.notes ?? [])
          .filter((n: any) => n.cite)
          .map((n: any) => ({ cite: String(n.cite), role: String(n.role ?? '') }))
      });
    }
  }

  const entries: any[] = [];
  for (const [stem, info] of stemInfo) {
    const occs = occByStem.get(stem) ?? [];
    if (!occs.length) continue;

    const grid: Record<string, any[]> = {};
    const unplaced: any[] = [];
    const distinct = new Set<string>();

    for (const o of occs) {
      const slp = toSlp1(o.form);
      const cs = slp
        ? cellsFor(info.stemSlp, slp).filter((c) => (info.linga ? c[0] === info.linga : true))
        : [];
      if (!cs.length) {
        // Attested but outside the classical paradigm — the Vedic forms
        // (देवासः, देवेभिः) Pāṇini's core rules do not produce. Kept and shown
        // apart rather than dropped: the Ṛgveda block is a third of the
        // attested corpus, and silently losing it would make a page whose
        // whole premise is corpus evidence quietly incomplete.
        unplaced.push({ ...o, ambiguous: false });
        continue;
      }
      distinct.add(o.form);
      // What the corpus says it is here, not everything its shape could be.
      const { cells: fit, byAnnotation } = resolveCells(stem, o.form, cs);
      const keys = [...new Set(fit.map((c) => VIB_DEV[c[1]] + '|' + VAC_DEV[c[2]]))];
      for (const k of keys) {
        (grid[k] ??= []).push({
          ...o,
          // Genuinely two cells — every neuter's प्रथमा/द्वितीया, the ऋ-stem's
          // पञ्चमी/षष्ठी. Not a failure to decide: the language does not decide.
          ambiguous: keys.length > 1,
          // False when the corpus never tagged this word's case, so the cell
          // rests on the engine alone and is weaker evidence.
          attested: byAnnotation
        });
      }
    }

    // One reading can use the same form twice; the cell wants distinct evidence.
    for (const k of Object.keys(grid)) {
      const seen = new Set<string>();
      grid[k] = grid[k].filter((a: any) => {
        const id = a.reading + ':' + a.formRaw;
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
    }

    // `ambiguous` is a fact about a FORM within this paradigm, not about one
    // occurrence of it. Two readings can resolve the same string differently —
    // ताः is द्वितीया बहुवचन in both places it occurs, but its candidate set was
    // wider — so the flag is recomputed from where the form actually landed.
    // Otherwise a cell reads "this fills more than one cell" while filling one.
    const placedIn = new Map<string, Set<string>>();
    for (const [k, list] of Object.entries(grid))
      for (const a of list as any[]) {
        if (!placedIn.has(a.form)) placedIn.set(a.form, new Set());
        placedIn.get(a.form)!.add(k);
      }
    for (const list of Object.values(grid))
      for (const a of list as any[]) a.ambiguous = (placedIn.get(a.form)?.size ?? 1) > 1;

    // A cell wants evidence, not an inventory. तद् alone occurs hundreds of
    // times, and shipping every occurrence put the index at 977KB — a payload
    // the reader downloads to look at one stem. Keep the earliest few per cell
    // (earliest = simplest, by the corpus's own difficulty order) and record
    // how many were dropped so the count stays honest.
    for (const k of Object.keys(grid)) {
      grid[k].sort((a: any, b: any) => a.position - b.position);
      const total = grid[k].length;
      grid[k] = grid[k].slice(0, 3);
      if (total > 3) grid[k][0].more = total - 3;
    }

    if (!distinct.size && !unplaced.length) continue;

    entries.push({
      subject: stem,
      kind: 'subanta',
      linga: info.linga ? LINGA_DEV[info.linga] : null,
      // Distinguishes "has no gender of its own" from "we could not tell".
      isPronoun: info.isPronoun,
      // Takes pronominal endings (सर्वस्मै) but has a gender and qualifies a
      // noun — an adjective under 1.1.27, not a pronoun. Worth showing, since
      // it explains why सर्वे declines unlike देवे.
      isSarvadi: info.isSarvadi,
      // Filed into the tradition's own classes — the same arrangement
      // /ref/tables uses, so the two views of the corpus agree.
      group: info.isPronoun
        ? sarvanamaGroupFor(stem).id
        : groupFor(stem, info.linga ? LINGA_DEV[info.linga] : null).id,
      // The matrix coordinate: which sound the stem ends in. Paired with
      // `linga` it names the declension — अकारान्त × पुंलिङ्ग is देव's paradigm.
      terminal: finalSound(stem),
      pinned: {},
      forms: distinct.size,
      filled: Object.keys(grid).length,
      total: VIBHAKTIS.length * VACANAS.length,
      grid,
      // For a noun, only meaningful once the gender is settled: an
      // expected-form grid without a liṅga would be three guesses stacked.
      //
      // A सर्वनाम is the opposite case. Its liṅga is null because it HAS no
      // gender of its own, not because the evidence is thin — and its
      // paradigms are the most regular in the language. Withholding them left
      // अस्मद् showing five attested forms and nothing else, when all 21 cells
      // derive. So a pronoun gets one grid per gender, and अस्मद्/युष्मद् (which
      // are genderless outright) get the single grid they actually have.
      paradigm: info.linga
        ? paradigmOf(info.stemSlp, info.linga)
        : info.isPronoun
          ? paradigmOf(info.stemSlp, 'Pum')
          : undefined,
      /** A pronoun's other two genders, when it has them. */
      paradigmByLinga: info.isPronoun && !GENDERLESS.has(stem)
        ? {
            'पुंलिङ्ग': paradigmOf(info.stemSlp, 'Pum'),
            'स्त्रीलिङ्ग': paradigmOf(info.stemSlp, 'Stri'),
            'नपुंसकलिङ्ग': paradigmOf(info.stemSlp, 'Napumsaka')
          }
        : undefined,
      unplaced: unplaced.slice(0, 6)
    });
  }

  entries.sort((a, b) => b.filled - a.filled || b.forms - a.forms);

  // 310 of the 409 stems are attested exactly once. A single form cannot show
  // what a paradigm looks like, and carrying all of them with their grids put
  // the payload near a megabyte. So the shipped index holds the stems with more
  // than one attested form, and the rest stay as a name and a count — enough to
  // list them, and to say honestly how much of the corpus is single-sighting.
  const summarise = (e: any) =>
    ({ subject: e.subject, linga: e.linga, forms: e.forms, filled: e.filled });


  // सर्वनाम takes सुप् endings but is not a सुबन्त class: the endings themselves
  // differ (तस्मै for देवाय, तस्मिन् for देवे) under rules that apply to pronouns
  // alone, and one lemma carries three genders where a noun carries one. It
  // gets its own section rather than a group inside a list keyed by gender.
  const nouns = entries.filter((e: any) => !e.isPronoun);
  const pronouns2 = entries.filter((e: any) => e.isPronoun);

  const rich = nouns.filter((e) => e.forms >= 2);
  const sparse = nouns.filter((e) => e.forms < 2).map(summarise);
  const sarvaRich = pronouns2.filter((e) => e.forms >= 2);
  const sarvaSparse = pronouns2.filter((e) => e.forms < 2).map(summarise);

  // ── तिङन्त ─────────────────────────────────────────────────────────────
  //
  // The same shape one axis over: पुरुष × वचन, once लकार is pinned. The corpus
  // annotates लकार on every verb and पुरुष on 4% of them, so unlike सुबन्त there
  // is almost no annotation to intersect with — the cell comes from the engine
  // alone. That is sound here in a way it was not for nouns: a तिङ् ending is
  // far more distinctive than a सुप् one, and 237 of 286 derivable forms land in
  // exactly one cell with no help from the tags.

  /** Which (पुरुष, वचन) cells of a root+lakāra produce this form? */
  const tinMemo = new Map<string, Array<[string, string]>>();
  function tinCellsFor(
    aup: string, gana: string, lak: string, formSlp: string
  ): { cells: Array<[string, string]>; prefix: string } {
    const key = aup + '|' + gana + '|' + lak + '|' + formSlp;
    const hit = tinMemo.get(key);
    if (hit) return { cells: hit, prefix: '' };
    // Bare root first; only reach for preverbs when nothing derives, so a form
    // that works plainly is never attributed to a prefix it does not have.
    for (const pre of ['', ...UPASARGAS]) {
      const out: Array<[string, string]> = [];
      for (const pu of PURUSHAS)
        for (const vc of VACANAS)
          for (const pada of [null, 'Parasmaipada', 'Atmanepada']) {
            try {
              const res = v.deriveTinantas({
                dhatu: { aupadeshika: aup, gana, sanadi: [], prefixes: pre ? [pre] : [] },
                lakara: lak, prayoga: 'Kartari', purusha: pu, vacana: vc, pada
              });
              if (res.some((p: any) => p.text === formSlp)) {
                out.push([PUR_DEV[pu], VAC_DEV[vc]]);
              }
            } catch { /* this cell does not derive */ }
          }
      const uniq = [...new Set(out.map((c) => c[0] + '|' + c[1]))]
        .map((k) => k.split('|') as [string, string]);
      if (uniq.length) {
        if (!pre) tinMemo.set(key, uniq);
        return { cells: uniq, prefix: pre };
      }
    }
    tinMemo.set(key, []);
    return { cells: [], prefix: '' };
  }

  /**
   * Which पद a form belongs to — परस्मैपद or आत्मनेपद.
   *
   * पद is tagged 16 times in the whole corpus, so it is effectively unauthored,
   * and it is the one तिङन्त feature the cell coordinate does not carry: the
   * grid is पुरुष × वचन, and पद is a property of the form that fills it. Asking
   * separately keeps the grid shape unchanged.
   *
   * Only an unambiguous answer counts. A root that takes both padas produces the
   * same string in neither, so a form that derives under only one pada settles
   * it; a form that derives under both does not, and is left alone.
   */
  const padaMemo = new Map<string, string>();
  function padaFor(aup: string, gana: string, lak: string, formSlp: string): string | null {
    const key = aup + '|' + gana + '|' + lak + '|' + formSlp;
    if (padaMemo.has(key)) return padaMemo.get(key) || null;
    const hits = new Set<string>();
    for (const pada of ['Parasmaipada', 'Atmanepada'])
      for (const pu of PURUSHAS)
        for (const vc of VACANAS) {
          try {
            const res = v.deriveTinantas({
              dhatu: { aupadeshika: aup, gana, sanadi: [], prefixes: [] },
              lakara: lak, prayoga: 'Kartari', purusha: pu, vacana: vc, pada
            });
            if (res.some((p: any) => p.text === formSlp)) hits.add(pada);
          } catch { /* not this cell */ }
        }
    const ans = hits.size === 1
      ? (hits.has('Parasmaipada') ? 'परस्मैपद' : 'आत्मनेपद')
      : '';
    padaMemo.set(key, ans);
    return ans || null;
  }

  const DHATU_MAP: Record<string, [string, string][]> = fs.existsSync(
    path.join(process.cwd(), 'static/data/dhatu-map.json')
  )
    ? JSON.parse(fs.readFileSync(path.join(process.cwd(), 'static/data/dhatu-map.json'), 'utf-8'))
    : {};

  /*
    A cheap pre-filter on which preverbs are worth trying for a given form.

    It matches the preverb's FIRST LETTER only, deliberately. Matching the whole
    preverb looks tighter and is wrong: अधि + इ fuses to अधीते, which does not
    start with "अधि" at all, so a literal test skipped the very word that
    prompted this. Sandhi rewrites the join — आ + गम् keeps आ, but अधि loses its
    इ, नि and वि become न्य and व्य before a vowel — and enumerating every
    surface form of every preverb is a second grammar to maintain.

    A first-letter test cannot produce a wrong answer, only wasted work: the
    candidate still has to actually DERIVE the attested form to be accepted. So
    the filter is allowed to be generous, and it costs one cached paradigm
    enumeration per false lead.
  */
  const PFX_FIRST: Record<string, string> = {
    A: 'आ', pra: 'प', sam: 'स', vi: 'व', ni: 'न', anu: 'अ', upa: 'उ', aDi: 'अ',
    ava: 'अ', ud: 'उ', pari: 'प', prati: 'प', apa: 'अ', aBi: 'अ', nis: 'न',
    dus: 'द', su: 'स', parA: 'प', api: 'अ', ati: 'अ'
  };
  const PFX_DEV: Record<string, string> = {
    A: 'आङ्', pra: 'प्र', sam: 'सम्', vi: 'वि', ni: 'नि', anu: 'अनु', upa: 'उप', aDi: 'अधि',
    ava: 'अव', ud: 'उद्', pari: 'परि', prati: 'प्रति', apa: 'अप', aBi: 'अभि', nis: 'निस्',
    dus: 'दुस्', su: 'सु', parA: 'परा', api: 'अपि', ati: 'अति'
  };

  /** (aupadeśika|gaṇa|prefix) → form → the cells that produce it. */
  const paraCache = new Map<string, Map<string, { lak: string; pu: string; vc: string; pada: string }[]>>();
  function tinParadigm(aup: string, gana: string, pre: string) {
    const key = `${aup}|${gana}|${pre}`;
    const hit = paraCache.get(key);
    if (hit) return hit;
    const m = new Map<string, { lak: string; pu: string; vc: string; pada: string }[]>();
    for (const [lakDev, lakKey] of Object.entries(LAK_KEY))
      for (const pu of PURUSHAS)
        for (const vc of VACANAS)
          for (const pada of ['Parasmaipada', 'Atmanepada'] as const) {
            let res: any[] = [];
            try {
              res = v.deriveTinantas({
                dhatu: { aupadeshika: aup, gana, sanadi: [], prefixes: pre ? [pre] : [] },
                lakara: lakKey, prayoga: 'Kartari', purusha: pu, vacana: vc, pada
              });
            } catch { continue; }
            for (const pr of res) {
              const dev = toDeva(pr.text);
              (m.get(dev) ?? m.set(dev, []).get(dev)!).push({
                lak: lakDev, pu: PUR_DEV[pu], vc: VAC_DEV[vc],
                pada: pada === 'Parasmaipada' ? 'परस्मैपद' : 'आत्मनेपद'
              });
            }
          }
    paraCache.set(key, m);
    return m;
  }

  const LAK_SET = new Set(Object.keys(LAK_KEY));
  type TinOcc = Occ & { lakara: string };
  const tinByRoot = new Map<string, Map<string, TinOcc[]>>();  // root → lakāra → occurrences
  let tinUnmapped = 0, tinUnderivable = 0, tinResolved = 0, tinAmbiguous = 0;
  const unmappedRoots = new Map<string, number>();

  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      const terms = (w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term);
      const lak = terms.find((t: string) => LAK_SET.has(t));
      if (!lak) continue;
      const root = deaccent(w.lemma);
      if (!tinByRoot.has(root)) tinByRoot.set(root, new Map());
      const byLak = tinByRoot.get(root)!;
      if (!byLak.has(lak)) byLak.set(lak, []);
      byLak.get(lak)!.push({
        form: deaccent(w.form),
        formRaw: String(w.form ?? ''),
        reading: String(r.id ?? ''),
        position: Number(r.position ?? 0),
        chapter: String(r.chapter ?? ''),
        phrase: phraseAround(String(r.sentence ?? ''), String(w.form ?? '')),
        gloss: String(w.gloss ?? ''),
        cites: (w.notes ?? [])
          .filter((n: any) => n.cite)
          .map((n: any) => ({ cite: String(n.cite), role: String(n.role ?? '') })),
        lakara: lak
      });
    }
  }

  /*
    Which dhātupāṭha entry each root actually is, settled by derivation.

    The grids used to come from DHATU alone — thirty roots transcribed by hand,
    because a wrong गण derives a different verb silently and guessing is worse
    than omitting. Everything else was reported as "root not in the dhātu table",
    which was never quite true: पूज्, त्यज्, हस् and विश् are all in
    dhatu-map.json. What was missing was not the entry but a way to choose
    between its candidates — धृ alone offers three — and to know which preverb
    the corpus's form carries.

    That is the same problem the tiṅanta rescue below already solves, and the
    same answer: enumerate each candidate's paradigm and keep the one that
    actually produces a form the corpus attests. The corpus is the arbiter, so
    nothing is guessed; a root whose candidates all fail to derive any attested
    form stays unmapped, exactly as before.

    A root the hand table names keeps that entry. It was checked by a person and
    outranks a match — and where both agree, nothing changes anyway.
  */
  const resolvedRoot = new Map<string, [string, string, string]>();
  let rootsResolved = 0;
  for (const [root, byLak] of tinByRoot) {
    if (DHATU[root]) continue;
    /*
      The corpus cites a root with a final virāma (कथ्, चुर्); the dhātupāṭha
      spells several of the Curādi ones without it (कथ = kaTa), because there the
      अ is part of the entry rather than an inherent vowel to be cut. Trying the
      bare stem costs one lookup and the candidate still has to derive an
      attested form, so a wrong match cannot get through.
    */
    const cands = DHATU_MAP[root] ?? DHATU_MAP[root.replace(/्$/, '')];
    if (!cands?.length) continue;
    const forms = new Set<string>();
    for (const list of byLak.values()) for (const o of list) forms.add(o.form);
    let hit: [string, string, string] | null = null;
    for (const form of forms) {
      // '' first, so a bare form is never credited with a preverb it lacks.
      const prefixes = ['', ...Object.keys(PFX_FIRST).filter((k) => form.startsWith(PFX_FIRST[k]))];
      for (const pre of prefixes) {
        for (const [aup, gana] of cands) {
          if (tinParadigm(aup, gana, pre).get(form)?.length) { hit = [aup, gana, pre]; break; }
        }
        if (hit) break;
      }
      if (hit) break;
    }
    if (hit) { resolvedRoot.set(root, hit); rootsResolved++; }
  }

  const tinEntries: any[] = [];
  for (const [root, byLak] of tinByRoot) {
    const resolved = resolvedRoot.get(root);
    const spec: [string, string] | undefined = DHATU[root] ?? (resolved ? [resolved[0], resolved[1]] : undefined);
    // The preverb the corpus's own forms needed, so the grid is built for the
    // verb the reader actually met — अधीते belongs in अधि+इ's paradigm, not इ's.
    const rootPre = DHATU[root] ? '' : (resolved?.[2] ?? '');
    if (!spec) {
      let n = 0; for (const list of byLak.values()) n += list.length;
      tinUnmapped += n;
      unmappedRoots.set(root, n);
      continue;
    }
    // One entry per (root, लकार): the लकार is the pinned feature that turns
    // पुरुष × वचन into a grid at all.
    for (const [lak, occs] of byLak) {
      const grid: Record<string, any[]> = {};
      const unplaced: any[] = [];
      const distinct = new Set<string>();

      for (const o of occs) {
        const fs = toSlp1(o.form);
        const { cells } = fs
          ? tinCellsFor(spec[0], spec[1], LAK_KEY[lak], fs)
          : { cells: [] as Array<[string, string]> };
        if (!cells.length) { tinUnderivable++; unplaced.push({ ...o, ambiguous: false }); continue; }
        distinct.add(o.form);
        if (cells.length === 1) tinResolved++; else tinAmbiguous++;
        for (const [pu, vc] of cells) {
          (grid[pu + '|' + vc] ??= []).push({ ...o, ambiguous: cells.length > 1, attested: false });
        }
      }
      if (!distinct.size && !unplaced.length) continue;

      for (const k of Object.keys(grid)) {
        const seen = new Set<string>();
        grid[k] = grid[k].filter((a: any) => {
          const id = a.reading + ':' + a.formRaw;
          if (seen.has(id)) return false;
          seen.add(id);
          return true;
        });
        grid[k].sort((a: any, b: any) => a.position - b.position);
        const total = grid[k].length;
        grid[k] = grid[k].slice(0, 3);
        if (total > 3) grid[k][0].more = total - 3;
      }

      // The full 3×3 for this लकार, so unattested cells can be shown too.
      const paradigm: Record<string, string[]> = {};
      for (const pu of PURUSHAS)
        for (const vc of VACANAS) {
          try {
            const res = v.deriveTinantas({
              dhatu: {
                aupadeshika: spec[0], gana: spec[1], sanadi: [],
                // The preverb the corpus's forms needed. Without it the grid
                // beside अधीते would be इ's — एति, इतः, यन्ति — a different verb.
                prefixes: rootPre ? [rootPre] : []
              },
              lakara: LAK_KEY[lak], prayoga: 'Kartari', purusha: pu, vacana: vc, pada: null
            });
            const forms = [...new Set(res.map((p: any) => p.text))] as string[];
            if (forms.length) paradigm[PUR_DEV[pu] + '|' + VAC_DEV[vc]] = forms.map(toDeva);
          } catch { /* not derivable for this root */ }
        }

      tinEntries.push({
        subject: root,
        kind: 'tinanta',
        linga: null,
        // Verbs group by गण — the class that decides how the stem is formed,
        // and the axis every dhātupāṭha is arranged on.
        group: spec[1],
        groupDev: GANA_DEV[spec[1]] ?? spec[1],
        pinned: { 'लकार': lak },
        forms: distinct.size,
        filled: Object.keys(grid).length,
        total: PURUSHAS.length * VACANAS.length,
        grid,
        paradigm: Object.keys(paradigm).length ? paradigm : undefined,
        unplaced: unplaced.slice(0, 6)
      });
    }
  }
  // Within a गण, by root, then by the तradition's लकार order — लट् before लङ्
  // before लोट् — rather than by how much the corpus happens to attest.
  const lakRank = (e: any) => {
    const i = LAKARA_ORDER.indexOf(e.pinned?.['लकार']);
    return i < 0 ? LAKARA_ORDER.length : i;
  };
  tinEntries.sort(
    (a, b) => a.subject.localeCompare(b.subject) || lakRank(a) - lakRank(b)
  );

  /**
   * Every resolved cell, for every subject — including the ~310 stems attested
   * exactly once.
   *
   * The sections' `entries` carry only multi-form subjects, because one form
   * cannot show a paradigm and shipping all of them cost a megabyte. But the
   * reader still needs the cell for those words: सभा occurs five times in the
   * corpus and every one displayed without its वचन, purely because its stem sat
   * below the payload threshold.
   *
   * So the cells travel separately from the grids — a flat map small enough to
   * carry in full, with no phrases and no citations, just the coordinate.
   */
  const cellIndex: Record<string, string> = {};
  /** (root|form) → पद, for the तिङन्त the engine settles. */
  const padaIndex: Record<string, string> = {};
  /** stem → लिङ्ग, once the attested forms narrow it. Nouns only. */
  const lingaIndex: Record<string, string> = {};
  for (const [stem, info] of stemInfo) {
    if (info.linga && !info.isPronoun) lingaIndex[stem] = LINGA_DEV[info.linga];
  }
  // Stems with no derivable form, where MW alone answers. Added after the loop
  // above, and never over it: a gender the corpus settled always stands.
  for (const [stem, lg] of mwOnly) {
    if (!lingaIndex[stem]) lingaIndex[stem] = LINGA_DEV[lg];
  }
  // root → [गण, विकरण], straight from the dhātupāṭha spelling the DHATU table
  // already records. गण is a fixed property of the root, and its विकरण follows
  // from the गण, so both are derived here rather than authored per-verb. The
  // bare Devanagari name (भ्वादि, not "१ भ्वादि") matches the schema's value set.
  const GANA_BARE: Record<string, string> = {
    Bhvadi: 'भ्वादि', Adadi: 'अदादि', Juhotyadi: 'जुहोत्यादि', Divadi: 'दिवादि',
    Svadi: 'स्वादि', Tudadi: 'तुदादि', Rudhadi: 'रुधादि', Tanadi: 'तनादि',
    Kryadi: 'क्र्यादि', Curadi: 'चुरादि'
  };
  const VIKARANA_OF: Record<string, string> = {
    'भ्वादि': 'शप्', 'दिवादि': 'श्यन्', 'स्वादि': 'श्नु', 'तुदादि': 'श',
    'रुधादि': 'श्नम्', 'तनादि': 'उ', 'क्र्यादि': 'श्ना', 'चुरादि': 'णिच्'
    // अदादि takes लुक् (no विकरण) and जुहोत्यादि श्लु (reduplication) — no शप्-like
    // affix to name, so those गणs get गण but no विकरण.
  };
  const ganaIndex: Record<string, [string, string?]> = {};
  for (const [root, spec] of Object.entries(DHATU)) {
    const gana = GANA_BARE[spec[1]];
    if (!gana) continue;
    const vik = VIKARANA_OF[gana];
    ganaIndex[root] = vik ? [gana, vik] : [gana];
  }

  // stem → its FULL declension (all 24 cells, attested or not), so the reader's
  // rail can show the WORD'S OWN paradigm — नर's table for a नर-word — instead of
  // one of four fixed exemplars. Devanagari lemma key → {विभक्ति|वचन → form}.
  const nounParadigms: Record<string, Record<string, string>> = {};
  for (const [stem, info] of stemInfo) {
    if (info.isPronoun || info.isSarvadi || !info.linga) continue;
    try {
      const grid = paradigmOf(info.stemSlp, info.linga); // {cell → forms[]}
      const flat: Record<string, string> = {};
      for (const [cell, forms] of Object.entries(grid)) if (forms[0]) flat[cell] = forms[0];
      if (Object.keys(flat).length) nounParadigms[stem] = flat;
    } catch { /* stem vidyut cannot decline — no table */ }
  }

  // root → its लट् conjugation (पुरुष|वचन → form), so a verb-word shows its OWN
  // present-tense table with its cell lit, not the fixed भू exemplar.
  const verbParadigms: Record<string, Record<string, string>> = {};
  for (const [root, spec] of Object.entries(DHATU)) {
    const flat: Record<string, string> = {};
    for (const pu of PURUSHAS)
      for (const vc of VACANAS) {
        try {
          const res = v.deriveTinantas({
            dhatu: { aupadeshika: spec[0], gana: spec[1], sanadi: [], prefixes: [] },
            lakara: 'Lat', prayoga: 'Kartari', purusha: pu, vacana: vc, pada: null
          });
          const f = [...new Set(res.map((p: any) => p.text))][0] as string | undefined;
          if (f) flat[PUR_DEV[pu] + '|' + VAC_DEV[vc]] = toDeva(f);
        } catch { /* cell not derivable */ }
      }
    if (Object.keys(flat).length) verbParadigms[root] = flat;
  }
  for (const [root, byLak] of tinByRoot) {
    const spec = DHATU[root];
    if (!spec) continue;
    for (const [lak, occs] of byLak) {
      for (const o of occs) {
        const fs2 = toSlp1(o.form);
        if (!fs2) continue;
        const p = padaFor(spec[0], spec[1], LAK_KEY[lak], fs2);
        if (p) padaIndex[root + '|' + o.form] = p;
      }
    }
  }
  /*
    ── कृदन्त ──────────────────────────────────────────────────────────────

    A participle is the one place where लिङ्ग really is a fact about the
    occurrence rather than the stem. गच्छन् declines in all three genders,
    because it agrees with whatever it describes, so गच्छन्तम् IS masculine and
    गच्छन्तीम् IS feminine — the form settles it, and the stem cannot.

    Nothing was settling it. 204 of 250 कृदन्त had no लिङ्ग and 209 no वचन,
    because the सुबन्त pass keys on the lemma and a participle's lemma is a
    ROOT: it tried to decline गम् as a प्रातिपदिक, which is not a word. The
    missing step is the one vidyut entry point the build never used —
    deriveKrdantas, which turns (root, कृत्) into the stem that then declines.

        गम् + शतृ  →  गच्छत्  →  गच्छन्तम्   (पुंलिङ्ग द्वितीया एकवचन)

    So: derive the stem, decline it in every cell, and keep the cells that
    produce the attested form. Same generate-and-match as everywhere else, and
    the same rule about ambiguity — a form two cells produce settles neither.

    The अव्यय कृत् (क्त्वा, ल्यप्, तुमुन्, णमुल्) take no ending at all. For
    those the derived string IS the word, so a match confirms the affix and the
    preverb and stops there; asking for their विभक्ति would be asking what case
    an indeclinable is in.
  */
  const krtLinga: Record<string, string> = {};
  let krtResolved = 0, krtAvyaya = 0, krtUnderivable = 0, krtNoSlp = 0, krtNoRoot = 0, krtPlacedNoAgree = 0;
  {
    /** corpus tag → vidyut's affix name. */
    const KRT_KEY: Record<string, string> = {
      'क्त': 'kta', 'क्तवतु': 'ktavatu', 'शतृ': 'Satf', 'शानच्': 'SAnac',
      'क्वसु': 'kvasu', 'कानच्': 'kAnac', 'तव्य': 'tavya', 'अनीयर्': 'anIyar',
      'ण्यत्': 'Ryat', 'यत्': 'yat', 'क्यप्': 'kyap', 'तृच्': 'tfc',
      'तृन्': 'tfn', 'ण्वुल्': 'Rvul', 'णिनि': 'Rini', 'घञ्': 'GaY',
      'ल्युट्': 'lyuw', 'क्तिन्': 'ktin', 'अच्': 'ac', 'अङ्': 'aN',
      'क्विप्': 'kvip', 'विच्': 'vic', 'क्त्वा': 'ktvA', 'तुमुन्': 'tumun',
      'णमुल्': 'Ramul',
      /*
        ल्यप् is the only one vidyut rejects by name, and rightly: by 7.1.37 it
        is not an affix you choose but what क्त्वा BECOMES after a preverb —
        प्रकृत्य, not *प्रकृत्वा. So it is asked for as क्त्वा, and the preverb
        the corpus's own form carries is what turns it into ल्यप्.
      */
      'ल्यप्': 'ktvA'
    };
    /** निष्ठा names the pair क्त + क्तवतु (1.1.26); try both. */
    const KRT_ALIAS: Record<string, string[]> = { 'निष्ठा': ['kta', 'ktavatu'],
      'कृत्य': ['tavya', 'anIyar', 'Ryat', 'yat', 'kyap'] };
    const AVYAYA_KRT = new Set(['ktvA', 'tumun', 'Ramul']);

    /** (aupadeśika|gana|prefix|krt) → the stems it makes. */
    const krtStems = new Map<string, string[]>();
    function stemsFor(aup: string, gana: string, pre: string, krt: string): string[] {
      const key = `${aup}|${gana}|${pre}|${krt}`;
      const hit = krtStems.get(key);
      if (hit) return hit;
      let out: string[] = [];
      try {
        const res = v.deriveKrdantas({
          dhatu: { aupadeshika: aup, gana, sanadi: [], prefixes: pre ? [pre] : [] }, krt
        });
        out = [...new Set(res.map((p: any) => p.text))] as string[];
      } catch { /* this root does not take this affix */ }
      krtStems.set(key, out);
      return out;
    }

    for (const r of corpus) {
      for (const w of r.words ?? []) {
        if (!w.lemma) continue;
        const terms = new Set<string>((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
        const named = [...terms].filter((t) => KRT_KEY[t] || KRT_ALIAS[t]);
        if (!named.length) continue;
        const root = deaccent(w.lemma), form = deaccent(String(w.form ?? ''));
        const formSlp = toSlp1(form);
        if (!formSlp) { krtNoSlp++; continue; }

        const cands = DHATU_MAP[root] ?? DHATU_MAP[root.replace(/्$/, '')]
          ?? (DHATU[root] ? [DHATU[root]] : []);
        if (!cands?.length) { krtNoRoot++; continue; }
        const krts = named.flatMap((t) => KRT_ALIAS[t] ?? [KRT_KEY[t]]);
        const prefixes = ['', ...Object.keys(PFX_FIRST).filter((k) => form.startsWith(PFX_FIRST[k]))];

        let placed = false;
        outer:
        for (const pre of prefixes) {
          for (const [aup, gana] of cands) {
            for (const krt of krts) {
              for (const stem of stemsFor(aup, gana, pre, krt)) {
                // Indeclinable: the derived string is the whole word.
                if (AVYAYA_KRT.has(krt)) {
                  if (stem === formSlp) { krtAvyaya++; placed = true; break outer; }
                  continue;
                }
                const raw = cellsFor(stem, formSlp);
                if (!raw.length) continue;
                /*
                  Narrowed by what THIS occurrence is annotated as.

                  गतम् is neuter प्रथमा, neuter द्वितीया and masculine द्वितीया
                  all at once, so the string alone settles neither gender nor
                  case — 35 occurrences came back ambiguous on exactly this. But
                  the author has already written the विभक्ति on the word, and
                  once it says प्रथमा only the neuter survives. The annotation is
                  not competing with the derivation here; it is the second
                  coordinate the derivation needs.
                */
                const aVib = [...terms].find((t) => VIB_SET.has(t));
                const aVac = [...terms].find((t) => VAC_SET.has(t));
                let cells = aVib ? raw.filter((c) => VIB_DEV[c[1]] === aVib) : raw;
                if (!cells.length) cells = raw;      // engine and author disagree — trust neither
                else if (aVac) {
                  const k = cells.filter((c) => VAC_DEV[c[2]] === aVac);
                  if (k.length) cells = k;
                }
                const key = root + '|' + form;
                const lg = new Set(cells.map((c) => c[0]));
                const vb = new Set(cells.map((c) => VIB_DEV[c[1]] + '|' + VAC_DEV[c[2]]));
                // Only what every producing cell agrees on. गच्छन्तम् is
                // masculine in all of them; a form that is two cases is neither.
                if (lg.size === 1) krtLinga[key] = LINGA_DEV[[...lg][0]];
                if (vb.size === 1 && !(key in cellIndex)) cellIndex[key] = [...vb][0];
                if (lg.size === 1 || vb.size === 1) krtResolved++; else krtPlacedNoAgree++;
                placed = true;
                break outer;
              }
            }
          }
        }
        if (!placed) krtUnderivable++;
      }
    }
    console.log(
      `  कृदन्त: ${krtResolved} placed, ${krtAvyaya} indeclinable, ${krtUnderivable} not derivable, ` +
        `${krtPlacedNoAgree} ambiguous, ${krtNoRoot} lemma not a dhātu, ${krtNoSlp} form not convertible`
    );
  }

  const ambiguousKeys = new Set<string>();
  for (const e of [...entries, ...tinEntries]) {
    for (const [cell, list] of Object.entries(e.grid as any)) {
      for (const a of list as any[]) {
        const key = e.subject + '|' + a.form;
        if (ambiguousKeys.has(key)) continue;
        // Only unambiguous placements survive. फलम् is प्रथमा and द्वितीया both,
        // and asserting one would repeat the error the quiz was built to avoid.
        if (key in cellIndex && cellIndex[key] !== cell) {
          ambiguousKeys.add(key);
          delete cellIndex[key];
          continue;
        }
        cellIndex[key] = cell;
      }
    }
  }

  const index = {
    generated: new Date().toISOString(),
    cells: cellIndex,
    padas: padaIndex,
    lingas: lingaIndex,
    // Per-OCCURRENCE gender, for participles. Keyed (lemma|form) rather than by
    // stem, because a participle agrees and so has no one gender of its own.
    krtLingas: krtLinga,
    ganas: ganaIndex,
    nounParadigms,
    verbParadigms,
    sections: [
      {
        kind: 'subanta',
        dev: 'सुबन्त',
        en: 'nouns',
        axes: [
          { feature: 'विभक्ति', values: VIBHAKTIS.map((k) => VIB_DEV[k]) },
          { feature: 'वचन', values: VACANAS.map((k) => VAC_DEV[k]) }
        ],
        entries: rich,
        sparse,
        // Only the classes the corpus actually populates, in the tradition's
        // order. An empty class is not worth a heading.
        groups: SUBANTA_GROUPS
          .filter((g) => rich.some((e: any) => e.group === g.id))
          .map((g) => ({ id: g.id, dev: g.dev, en: g.en, exemplar: g.exemplar })),
        groupBy: 'प्रातिपदिकान्त'
      },
      {
        kind: 'sarvanama',
        dev: 'सर्वनाम',
        en: 'pronouns',
        axes: [
          { feature: 'विभक्ति', values: VIBHAKTIS.map((k) => VIB_DEV[k]) },
          { feature: 'वचन', values: VACANAS.map((k) => VAC_DEV[k]) }
        ],
        entries: sarvaRich,
        sparse: sarvaSparse,
        groups: SARVANAMA_GROUPS
          .filter((g) => sarvaRich.some((e: any) => e.group === g.id))
          .map((g) => ({ id: g.id, dev: g.dev, en: g.en, exemplar: g.exemplar })),
        groupBy: 'प्रकार'
      },
      {
        kind: 'tinanta',
        dev: 'तिङन्त',
        en: 'verbs',
        axes: [
          { feature: 'पुरुष', values: PURUSHAS.map((k) => PUR_DEV[k]) },
          { feature: 'वचन', values: VACANAS.map((k) => VAC_DEV[k]) }
        ],
        entries: tinEntries,
        sparse: [],
        groups: Object.keys(GANA_DEV)
          .filter((g) => tinEntries.some((e: any) => e.group === g))
          .map((g) => ({ id: g, dev: GANA_DEV[g], en: '' })),
        groupBy: 'गण'
      }
    ],
    unlemmatized
  };

  fs.writeFileSync(USAGE_OUT, JSON.stringify(index, null, 0));

  // ── tiṅanta form → parse index ────────────────────────────────────────────
  // vidyut is a GENERATOR: to know what अगच्छन् IS, generate every cell of every
  // root and see what produces it. This inverts the whole verbal paradigm —
  // root × लकार × पुरुष × वचन × पद — into a form → features map, so a verb gets
  // its लकार, पुरुष, वचन and पद with NO authoring (the लकार tag included). A
  // feature is recorded only when every cell producing the form AGREES on it;
  // ambiguous features are left out rather than guessed.
  const TIN_OUT = path.join(process.cwd(), 'static/data/tin-forms.json');
  const tinIndex: Record<string, Record<string, string>> = {};
  const raw2: Record<string, { lak: Set<string>; pu: Set<string>; vc: Set<string>; pada: Set<string> }> = {};
  for (const [root, [aup, gana]] of Object.entries(DHATU)) {
    for (const [lakDev, lakKey] of Object.entries(LAK_KEY)) {
      for (const pu of PURUSHAS)
        for (const vc of VACANAS)
          for (const pada of ['Parasmaipada', 'Atmanepada'] as const) {
            let res: any[] = [];
            try {
              res = v.deriveTinantas({
                dhatu: { aupadeshika: aup, gana, sanadi: [], prefixes: [] },
                lakara: lakKey, prayoga: 'Kartari', purusha: pu, vacana: vc, pada
              });
            } catch { continue; }
            for (const p of res) {
              const dev = toDeva(p.text);
              const k = root + '|' + dev;
              const b = (raw2[k] ??= { lak: new Set(), pu: new Set(), vc: new Set(), pada: new Set() });
              b.lak.add(lakDev); b.pu.add(PUR_DEV[pu]); b.vc.add(VAC_DEV[vc]); b.pada.add(pada === 'Parasmaipada' ? 'परस्मैपद' : 'आत्मनेपद');
            }
          }
    }
  }
  for (const [k, b] of Object.entries(raw2)) {
    const out: Record<string, string> = {};
    if (b.lak.size === 1) out['लकार'] = [...b.lak][0];
    if (b.pu.size === 1) out['पुरुष'] = [...b.pu][0];
    if (b.vc.size === 1) out['वचन'] = [...b.vc][0];
    if (b.pada.size === 1) out['पद'] = [...b.pada][0];
    if (Object.keys(out).length) tinIndex[k] = out;
  }
  /*
    THE SECOND PASS: the verbs the first pass cannot see.

    The enumeration above walks the thirty hand-written roots with `prefixes:
    []`, so two whole classes of form fall out of the index and reach the reader
    with no लकार, no पुरुष, no वचन and no पद:

      A PREVERB FUSES INTO THE STEM. आगच्छति is आ + गम् and अधीते is अधि + इ;
      neither derives from the bare root, so neither is a key. 208 of 666 finite
      verbs were unmatched.

      THE ROOT IS NOT IN THE HAND TABLE, or is the wrong homonym of it. अधीते is
      the sharper case: `इ` is three dhātus — इण् gatau, इङ् adhyayane, इक्
      smaraṇe — and the hand table has only इण्, which is parasmaipada. अधि + इण्
      derives अध्येति. The form on the page is अधीते, and only इङ् produces it.

    So this pass takes the forms the index still misses and asks the Dhātupāṭha
    proper (static/data/dhatu-map.json, 1579 roots with every candidate kept)
    with the preverbs the form could plausibly carry. A candidate that produces
    the attested form is the right one — derivation settles the homonym, which
    is why build-dhatu-map refuses to choose and hands over the whole list.

    Cost is held down two ways: only prefixes whose surface the form actually
    starts with are tried, and each (candidate, prefix) paradigm is enumerated
    once and cached, since many forms share a root.
  */
  // every finite verb the corpus attests, as (lemma, form)
  const wanted = new Map<string, { lemma: string; form: string }>();
  for (const r of corpus)
    for (const w of r.words ?? []) {
      const tags = [...(w.notes ?? []).map((n: any) => n.term).filter(Boolean),
                    ...Object.values(w.derived ?? {})] as string[];
      if (!tags.some((t) => LAK_KEY[t] !== undefined || t === 'परस्मैपद' || t === 'आत्मनेपद')) continue;
      if (!w.lemma) continue;
      const lemma = deaccent(w.lemma), form = deaccent(String(w.form ?? ''));
      if (!form || tinIndex[`${lemma}|${form}`]) continue;
      wanted.set(`${lemma}|${form}`, { lemma, form });
    }

  let rescued = 0, withPrefix = 0;
  for (const { lemma, form } of wanted.values()) {
    const cands = DHATU_MAP[lemma] ?? (DHATU[lemma] ? [DHATU[lemma]] : []);
    if (!cands.length) continue;
    // '' first: a bare form should never be credited with a preverb
    const prefixes = ['', ...Object.keys(PFX_FIRST).filter((k) => form.startsWith(PFX_FIRST[k]))];
    let found: { cells: { lak: string; pu: string; vc: string; pada: string }[]; pre: string } | null = null;
    for (const pre of prefixes) {
      for (const [aup, gana] of cands) {
        const cells = tinParadigm(aup, gana, pre).get(form);
        if (cells?.length) { found = { cells, pre }; break; }
      }
      if (found) break;
    }
    if (!found) continue;
    const agree = (f: (c: any) => string) => {
      const set = new Set(found!.cells.map(f));
      return set.size === 1 ? [...set][0] : undefined;
    };
    const out: Record<string, string> = {};
    const lak = agree((c) => c.lak); if (lak) out['लकार'] = lak;
    const pu = agree((c) => c.pu); if (pu) out['पुरुष'] = pu;
    const vc = agree((c) => c.vc); if (vc) out['वचन'] = vc;
    const pd = agree((c) => c.pada); if (pd) out['पद'] = pd;
    // The preverb the derivation NEEDED is a fact about the word, not a guess.
    if (found.pre && PFX_DEV[found.pre]) { out['उपसर्ग'] = PFX_DEV[found.pre]; withPrefix++; }
    if (Object.keys(out).length) { tinIndex[`${lemma}|${form}`] = out; rescued++; }
  }

  fs.writeFileSync(TIN_OUT, JSON.stringify(tinIndex, null, 0));
  console.log(
    `  tiṅanta index: ${Object.keys(tinIndex).length} forms → parse, ` +
      `${Object.keys(DHATU).length} hand-checked roots + ${rootsResolved} resolved by derivation` +
      `\n    + ${rescued} of ${wanted.size} unmatched corpus form(s) resolved from the dhātupāṭha` +
      ` (${withPrefix} needed a preverb)`
  );

  const withGrid = rich.filter((e) => e.paradigm).length;
  const unplacedTotal = rich.reduce((n, e) => n + e.unplaced.length, 0);
  const kb = Math.round(fs.statSync(USAGE_OUT).size / 1024);
  const topUnmapped = [...unmappedRoots.entries()]
    .sort((a, b) => b[1] - a[1]).slice(0, 8).map(([r, n]) => `${r}:${n}`).join(' ');
  console.log(
    `Wrote → ${path.relative(process.cwd(), USAGE_OUT)} (${kb}KB)\n` +
      `  सुबन्त: ${rich.length} stems — ${withGrid} with a settled gender and a full grid,\n` +
      `          ${rich.length - withGrid} attested-forms-only, ${sparse.length} seen once,\n` +
      `          ${unplacedTotal} form(s) outside the classical paradigm (Vedic)\n` +
      `  सर्वनाम: ${sarvaRich.length} pronouns, ${sarvaSparse.length} seen once\n` +
      `  तिङन्त: ${tinEntries.length} (root, लकार) grids — ${tinResolved} form(s) resolve to one cell,\n` +
      `          ${tinAmbiguous} to several, ${tinUnderivable} do not derive\n` +
      `          ${tinUnmapped} occurrence(s) skipped: root not in the dhātu table (${topUnmapped})\n` +
      `  ${unlemmatized} annotated word(s) carry no lemma and cannot be indexed`
  );
}

main();
