#!/usr/bin/env bun
/**
 * check-derivation.ts — where the corpus and the engine disagree.
 *
 * Every other check asks one source whether it is self-consistent. The lint
 * asks whether a tag is legal for its type; the coverage ratchet asks whether a
 * dimension is still being filled; the fixture asks whether a derived gender
 * matches a hand-written one. None of them can see the case where an annotation
 * and a derivation are each internally fine and flatly contradict each other.
 *
 * That gap hid a real bug for as long as the प्रयोग index has existed. वидyut's
 * प्रातिपदिक for सेना is what stands BEFORE टाप् (4.1.4 अजाद्यतष्टाप्) — it adds
 * the आ itself once told the gender — so handing it `senA` declined a stem that
 * never took टाप्, and made प्रथमा एकवचन सेनाः. Every ā-stem feminine in the
 * corpus was on the wrong paradigm: कन्या, विद्या, कथा, सेना, गङ्गा, यशोदा,
 * पूतना, सभा — the second declension every beginner learns. The quiz asked for
 * the case of सेना and wanted तृतीया.
 *
 * The corpus had been saying so all along, 44 times. Nobody heard, because
 * `resolveCells` falls back to the raw candidates whenever the two disagree —
 * which is the right thing to DO and the wrong thing to do SILENTLY. A wrong
 * cell became indistinguishable from an ambiguous one.
 *
 * So this makes the disagreement audible. Each one is a genuine question with
 * exactly two answers, and both are worth having:
 *
 *   - the ANNOTATION is wrong — a real tagging error, the kind no schema check
 *     can catch because the tag is perfectly legal, just untrue of this word.
 *   - the DERIVATION is wrong — the stem is being spelt in a way vidyut reads
 *     as a different word, which is a bug affecting every word of its class.
 *
 * WHAT THE FIRST PASS FOUND. Of twenty-four, exactly two were annotation errors
 * — अहसत् tagged लुङ् when हस् makes अहसीत् there, and अबिभयुः tagged लिट् when
 * the अट् augment makes it लङ्. Every other one was the corpus being right and
 * the pipeline being wrong, in four distinct ways, each now fixed or scoped:
 *
 *   the ā-stem paradigm      44   सेना declined without टाप्          fixed
 *   Vedic duals in -ā        12   अश्विना is अश्विनौ (7.1.39)         out of scope
 *   lost विसर्ग               3   पुत्रः → पुत्र before a vowel        restored
 *   एष before a consonant     1   6.1.132 सुलोप                       restored
 *
 * Ratcheted at two, not zeroed. Both survivors are adjectives whose gender
 * comes from the noun they agree with — श्रेष्ठतरम् is neuter because महत्त्वम्
 * is — and build-readings now takes it from the `rel: विशेषण` edge. The cell
 * index cannot: it is built in build-quiz, which runs BEFORE agreement is
 * known, from a stem-level gender that for an adjective does not exist. That is
 * an ordering limit in the pipeline, not a fault in either source, and closing
 * it means feeding agreement back into a build that produces its own input.
 *
 * Demanding zero would mean annotating around the engine, which is backwards.
 * Demanding NO MORE THAN TODAY means every new disagreement gets looked at.
 */
import * as fs from 'fs';
import * as path from 'path';

/**
 * The ceiling. Lower it as the queue is worked off; raise it only with a reason
 * in the commit message, the same discipline as the coverage floors.
 */
const BASELINE = 2;

const R = JSON.parse(fs.readFileSync('static/data/readings.json', 'utf-8'));
/*
  usage.json's `cells`, not quiz-cells.json.

  Both hold the same derivation, but quiz-cells is keyed by SURFACE FORM alone
  and twenty-one forms in the corpus belong to two lemmas — ततः is both ततस्
  and तद्, ते is both युष्मद् and तद्, नाम is both नामन् and नाम. Keyed that way
  the second lemma overwrites the first, so checking against it reported
  disagreements that were really one word being told it is another.

  `cells` is keyed (lemma|form) and holds only cells the derivation settled
  unambiguously, which is both correct and the stricter test: a form the index
  says is exactly one cell, annotated as a different one, is a real conflict.
*/
const U = JSON.parse(fs.readFileSync('static/data/usage.json', 'utf-8'));
const CELLS: Record<string, string> = U.cells ?? {};
/*
  The engine's own list of cells a form can occupy, before any narrowing —
  quiz-cells.json, keyed by surface form.

  Used only to ABSOLVE, never to accuse, which is what makes its form-keying
  harmless here. `cells` above is narrowed by the annotation and by the stem's
  settled gender, so it names ONE cell even where the language offers two: तत्
  is प्रथमा and द्वितीया both, every neuter is, and the narrowed index picks
  द्वितीया. Flagging on that alone would report the neuter singular of तद् as an
  error in three readings.

  So a disagreement counts only when the annotated case is not in the engine's
  unnarrowed list either — when the form CANNOT be what the annotation says.
  A collision between two lemmas sharing a form only ever lengthens that list,
  which makes the check quieter rather than wronger.
*/
const RAW: Record<string, { vibhaktis?: string[]; cells?: [string, string][] }> =
  fs.existsSync('static/data/quiz-cells.json')
    ? JSON.parse(fs.readFileSync('static/data/quiz-cells.json', 'utf-8'))
    : {};
const TIN = fs.existsSync('static/data/tin-forms.json')
  ? JSON.parse(fs.readFileSync('static/data/tin-forms.json', 'utf-8'))
  : {};

const de = (s: unknown) => String(s ?? '').replace(/[॑-॔᳐-᳿꣠-ꣿ]/g, '');

const VIB = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const VAC = ['एकवचन', 'द्विवचन', 'बहुवचन'];
const LAK = ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्', 'लेट्'];
const PUR = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const PADA = ['परस्मैपद', 'आत्मनेपद'];

type Row = { reading: string; form: string; dim: string; said: string; engine: string };
const rows: Row[] = [];
let checked = 0;
let vedicSkipped = 0;

/*
  vidyut derives CLASSICAL Sanskrit. A Vedic form it cannot produce is out of
  scope, not a disagreement.

  The Ṛgveda readings are where this bites: the Vedic dual of an अ-stem ends in
  -ā, so अश्विना is अश्विनौ and धिष्ण्या is धिष्ण्यौ (7.1.39's Vedic ādeśas).
  vidyut offers only the classical parse — अश्विना as तृतीया एकवचन of अश्विन् —
  so twelve correct annotations across rd026–rd028 read as errors. Holding the
  corpus to a paradigm its own text predates would mean annotating around the
  engine, which is backwards.

  Scoped by provenance, not by form: only a reading whose source IS the Veda is
  exempt, so a classical reading cannot quietly acquire Vedic licence.
*/
const VEDIC = /ऋग्वेद|ऋक्|संहिता|Ṛgveda|RV /;
for (const r of R.sequence ?? []) {
  const src = `${r.source?.text ?? ''} ${r.source?.ref ?? ''}`;
  if (VEDIC.test(src)) { vedicSkipped += (r.words ?? []).length; continue; }
  for (const w of r.words ?? []) {
    const terms = new Set<string>((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
    const form = de(w.form);
    const lemma = de(w.lemma ?? '');

    // "विभक्ति|वचन" for a nominal, "पुरुष|वचन" for a verb — the verb's row is
    // covered by the तिङन्त index below, so only the nominal reading is used.
    const cell = CELLS[lemma + '|' + form];
    if (cell) {
      const [row, col] = cell.split('|');
      if (VIB.includes(row)) {
        const raw = RAW[form];
        const said = [...terms].find((t) => VIB.includes(t));
        if (said) {
          checked++;
          const possible = raw?.vibhaktis?.includes(said) ?? false;
          if (said !== row && !possible) {
            rows.push({ reading: r.id, form, dim: 'विभक्ति', said, engine: row });
          }
        }
        const saidVac = [...terms].find((t) => VAC.includes(t));
        if (saidVac && col) {
          checked++;
          const possible = (raw?.cells ?? []).some((c) => c[1] === saidVac);
          if (saidVac !== col && !possible) {
            rows.push({ reading: r.id, form, dim: 'वचन', said: saidVac, engine: col });
          }
        }
      }
    }

    const t = TIN[lemma + '|' + form];
    if (t) {
      for (const [dim, pool] of [['लकार', LAK], ['पुरुष', PUR], ['वचन', VAC], ['पद', PADA]] as [string, string[]][]) {
        const said = [...terms].find((x) => pool.includes(x));
        if (!said || !t[dim]) continue;
        checked++;
        if (t[dim] !== said) rows.push({ reading: r.id, form, dim, said, engine: t[dim] });
      }
    }
  }
}

const by = new Map<string, number>();
for (const x of rows) by.set(x.dim, (by.get(x.dim) ?? 0) + 1);

console.log(
  `derivation: ${rows.length} annotation(s) disagree with vidyut ` +
    `(baseline ${BASELINE}, of ${checked} checked; ${vedicSkipped} Vedic word(s) out of scope)` +
    (by.size ? ` — ${[...by].map(([k, v]) => `${k}:${v}`).join(' ')}` : '')
);

if (process.argv.includes('--list') || rows.length > BASELINE) {
  for (const x of rows) {
    console.log(`    ${x.reading.padEnd(8)} ${x.form.padEnd(18)} ${x.dim}: annotated ${x.said}, derives as ${x.engine}`);
  }
}

if (rows.length > BASELINE) {
  console.error(
    `\n  ${rows.length - BASELINE} new disagreement(s). One of the two is wrong:\n` +
      '    · the annotation — a legal tag that is untrue of this word, which no\n' +
      '      schema check can catch; or\n' +
      '    · the derivation — the stem spelt so vidyut reads a different word,\n' +
      '      which is a bug affecting every word of its class.\n' +
      '  Run with --list to see them.'
  );
  process.exit(1);
}
