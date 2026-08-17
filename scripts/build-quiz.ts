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

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');
const VOCAB = path.join(process.cwd(), 'static/data/vocabulary.json');
const WASM_DIR = path.join(process.cwd(), 'static/wasm/vidyut-prakriya/');
const OUT = path.join(process.cwd(), 'static/data/quiz-cells.json');

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
  const formsByStem = new Map<string, Set<string>>();
  for (const r of corpus) {
    for (const w of r.words ?? []) {
      if (!w.lemma) continue;
      if (!formsByStem.has(w.lemma)) formsByStem.set(w.lemma, new Set());
      formsByStem.get(w.lemma)!.add(w.form);
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

  const cells: Record<string, { linga: string | null; vibhaktis: string[] }> = {};
  let resolved = 0, ambiguous = 0, underivable = 0;

  for (const [stem, forms] of formsByStem) {
    const stemSlp = toSlp1(stem);
    if (!stemSlp) continue;

    // Narrow the gender: keep only lingas that can produce EVERY attested form.
    let possible = new Set<string>(LINGAS);
    const derivable: Array<[string, string]> = [];
    for (const form of forms) {
      const slp = toSlp1(form);
      if (!slp) continue;
      const cs = cellsFor(stemSlp, slp);
      if (!cs.length) continue;           // not a subanta of this stem (verb, indeclinable)
      derivable.push([form, slp]);
      const seen = new Set(cs.map((c) => c[0]));
      possible = new Set([...possible].filter((lg) => seen.has(lg)));
    }
    if (!derivable.length) { underivable++; continue; }

    const lex = lexGender.get(stem);
    const linga = possible.size === 1 ? [...possible][0] : (lex && possible.has(lex) ? lex : null);

    for (const [form, slp] of derivable) {
      const cs = cellsFor(stemSlp, slp).filter((c) => (linga ? c[0] === linga : true));
      const vibs = [...new Set(cs.map((c) => VIB_DEV[c[1]]))];
      cells[form] = { linga: linga ? LINGA_DEV[linga] : null, vibhaktis: vibs };
      if (vibs.length === 1) resolved++; else ambiguous++;
    }
  }

  fs.writeFileSync(OUT, JSON.stringify(cells, null, 0));
  console.log(
    `Wrote ${Object.keys(cells).length} forms → ${path.relative(process.cwd(), OUT)}\n` +
      `  ${resolved} determine one विभक्ति, ${ambiguous} do not, ${underivable} stems not derivable as subantas`
  );
}

main();
