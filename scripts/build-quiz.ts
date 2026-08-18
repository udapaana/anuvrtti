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
 * Two sources narrow it:
 *   1. the corpus — intersect the lingas that can produce EVERY attested form
 *      of the stem. ग्रामः only exists as Pum, so ग्राम is masculine and its
 *      ग्रामम् is unambiguously द्वितीया.
 *   2. static/data/vocabulary.json — `partOfSpeech: n.noun` etc., for stems the
 *      corpus does not disambiguate (वन appears only as वनम्/वने).
 *
 * Emits a cache so the reader build does not pay the WASM cost on every run.
 */
import * as fs from 'fs';
import * as path from 'path';
import { deaccent, phraseAround } from '../src/lib/usage/normalize';
import {
  groupFor, sarvanamaGroupFor, isSarvanama, GANA_DEV, LAKARA_ORDER,
  SUBANTA_GROUPS, SARVANAMA_GROUPS
} from '../src/lib/usage/taxonomy';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');
const VOCAB = path.join(process.cwd(), 'static/data/vocabulary.json');
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
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      if ((w.notes ?? []).some((n: any) => n.term === 'सर्वनाम')) {
        pronouns.add(deaccent(w.lemma));
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
    const lingaScore = new Map<string, number>(LINGAS.map((l) => [l, 0]));
    const derivable: Array<[string, string]> = [];
    for (const form of forms) {
      const slp = toSlp1(form);
      if (!slp) continue;
      const cs = cellsFor(stemSlp, slp);
      if (!cs.length) continue;           // not a subanta of this stem (verb, indeclinable)
      derivable.push([form, slp]);
      const { cells: fit } = resolveCells(stem, form, cs);
      for (const lg of new Set(fit.map((c) => c[0]))) {
        lingaScore.set(lg, (lingaScore.get(lg) ?? 0) + 1);
      }
    }
    if (!derivable.length) { underivable++; continue; }

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
    const linga = isPronoun
      ? null
      : top.length === 1
        ? top[0]
        // A tie the lexicon can break — vocabulary.json records the gender for
        // stems the corpus's own forms leave balanced.
        : lex && top.includes(lex)
          ? lex
          : null;

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
      `  ${resolved} determine one विभक्ति, ${ambiguous} do not, ${underivable} stems not derivable as subantas`
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
      pinned: {},
      forms: distinct.size,
      filled: Object.keys(grid).length,
      total: VIBHAKTIS.length * VACANAS.length,
      grid,
      // Only meaningful once the gender is settled: an expected-form grid
      // without a linga would be three guesses stacked on each other.
      paradigm: info.linga ? paradigmOf(info.stemSlp, info.linga) : undefined,
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

  const tinEntries: any[] = [];
  for (const [root, byLak] of tinByRoot) {
    const spec = DHATU[root];
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
              dhatu: { aupadeshika: spec[0], gana: spec[1], sanadi: [], prefixes: [] },
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
