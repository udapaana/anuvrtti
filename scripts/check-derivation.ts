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
 * Ratcheted, not zeroed. Twenty-four survive, and some are limits of the engine
 * rather than faults: ङीप् stems (नदी, देवी) cannot be expressed through the
 * WASM's `basic` प्रातिपदिक at all, and a form belonging to two lemmas (ततः is
 * both ततस् and तद्) is checked against whichever the index recorded. Demanding
 * zero would mean annotating around the engine, which is backwards. Demanding
 * NO MORE THAN TODAY means every new disagreement gets looked at.
 */
import * as fs from 'fs';
import * as path from 'path';

/**
 * The ceiling. Lower it as the queue is worked off; raise it only with a reason
 * in the commit message, the same discipline as the coverage floors.
 */
const BASELINE = 24;

const R = JSON.parse(fs.readFileSync('static/data/readings.json', 'utf-8'));
const CELLS = JSON.parse(fs.readFileSync('static/data/quiz-cells.json', 'utf-8'));
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

for (const r of R.sequence ?? []) {
  for (const w of r.words ?? []) {
    const terms = new Set<string>((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
    const form = de(w.form);
    const lemma = de(w.lemma ?? '');

    const c = CELLS[form];
    if (c?.vibhaktis?.length) {
      const said = [...terms].find((t) => VIB.includes(t));
      if (said) {
        checked++;
        if (!c.vibhaktis.includes(said)) {
          rows.push({ reading: r.id, form, dim: 'विभक्ति', said, engine: c.vibhaktis.join('/') });
        }
      }
      const saidVac = [...terms].find((t) => VAC.includes(t));
      if (saidVac && c.cells?.length) {
        checked++;
        const eng = [...new Set((c.cells as any[]).map((x) => x[1]))];
        if (!eng.includes(saidVac)) {
          rows.push({ reading: r.id, form, dim: 'वचन', said: saidVac, engine: eng.join('/') });
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
    `(baseline ${BASELINE}, of ${checked} checked)` +
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
