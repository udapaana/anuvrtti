#!/usr/bin/env bun
/**
 * audit-mechanical.ts — the checks a machine can make on every word of a whole
 * text, before any reader looks: the first tier of an audit (AUDIT-LOG.md).
 *
 *   bun scripts/audit-mechanical.ts <id> [--json out.json] [--first S --last S]
 *
 * For each analysed pada:
 *   form    the analysis does not produce the form. A noun's lemma, gender,
 *           case and number, or a verb's root, tense, person, number and pada,
 *           are given to vidyut-prakriya; if it derives forms and none is the
 *           word printed, the analysis (or the lemma) is wrong. Silent where the
 *           engine derives nothing (an indeclinable, an unknown stem).
 *   gloss   a noun or particle glossed with a verb's sense ("to know, …"): the
 *           usual sign of Monier-Williams's entry for a homonymous root.
 *   member  a compound member carrying a case analysis, or an inflected word
 *           marked as a member.
 * A flag is a question, not a verdict: the reader settles it. The figures say
 * how many padas each check could judge, so its silence can be weighed.
 */
import * as fs from 'fs';
import { resolveText, loadVidyut, VIB, VIB_D, VAC, VAC_D, PUR, PUR_D, LING, LAK, GANA, bare } from './build-texts';
import { readText, type Analysis } from './lib/texts';
import { slp, deva } from './analyze-text';

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const id = args.find((a, i) => !a.startsWith('--') && !(args[i - 1] ?? '').startsWith('--'));
if (!id) { console.error('usage: bun scripts/audit-mechanical.ts <id> [--json out.json] [--first S --last S]'); process.exit(1); }

const t = readText(id);
const ids = t.sections.map((s) => s.id);
const lo = opt('--first') ? ids.indexOf(opt('--first')!) : 0;
const hi = opt('--last') ? ids.indexOf(opt('--last')!) : ids.length - 1;
const want = new Set(ids.slice(lo, hi + 1));

const v = await loadVidyut();
const r = resolveText(id);

type Flag = { section: string; word: string; pada: number; form: string; lemma: string; a: string; check: 'form' | 'gloss' | 'member'; detail: string };
const flags: Flag[] = [];
const judged = { form: 0, gloss: 0, padas: 0 };
const nounCache = new Map<string, string[] | null>();
const verbCache = new Map<string, string[] | null>();

function nounForms(lemma: string, lg: string, vib: string, vac: string): string[] | null {
  const key = [lemma, lg, vib, vac].join('|');
  if (nounCache.has(key)) return nounCache.get(key)!;
  const s = slp(lemma);
  const cands: any[] = /[AI]$/.test(s) && s.length > 2 ? [{ nyap: s }, { basic: s }] : [{ basic: s }];
  // a feminine adjective is often cited by its masculine stem: try the
  // feminine stems it takes (गुरु → गुर्वी, ईदृश → ईदृशी, वृद्धिमत् → वृद्धिमती, कर → करी)
  if (lg === 'स्त्रीलिङ्ग') {
    if (/a$/.test(s)) cands.push({ nyap: s.slice(0, -1) + 'I' }, { nyap: s.slice(0, -1) + 'A' });
    if (/u$/.test(s)) cands.push({ nyap: s.slice(0, -1) + 'vI' });
    if (/[td]$/.test(s)) cands.push({ nyap: s.slice(0, -1) + 'tI' }, { nyap: s.slice(0, -2) + 'ntI' });
  }
  let out: string[] | null = null;
  for (const pr of cands) {
    try {
      const res = v.deriveSubantas({ pratipadika: pr, linga: LING[lg], vibhakti: VIB[VIB_D.indexOf(vib)], vacana: VAC[VAC_D.indexOf(vac)] });
      const fs = [...new Set(res.map((x: any) => deva(x.text)))] as string[];
      if (fs.length) { out = [...(out ?? []), ...fs]; }
    } catch { /* not derivable */ }
  }
  nounCache.set(key, out);
  return out;
}
function verbForms(a: Analysis): string[] | null {
  if (!a.aupadeshika || !a.गण || !a.लकार || !a.पुरुष || !a.वचन || !GANA[a.गण] || !LAK[a.लकार]) return null;
  const pada = a.पद === 'आत्मनेपद' ? 'Atmanepada' : 'Parasmaipada';
  const prefixes = (a.उपसर्ग ?? []).map((u) => (u === 'आङ्' ? 'AN' : slp(u)));
  const sanadi = (a.सनादि ?? []).map((x) => slp(x));
  const prayoga = a.प्रयोग === 'कर्मणि' ? 'Karmani' : a.प्रयोग === 'भावे' ? 'Bhave' : 'Kartari';
  const key = [a.aupadeshika, a.गण, a.लकार, a.पुरुष, a.वचन, pada, ...prefixes, ...sanadi, prayoga].join('|');
  if (verbCache.has(key)) return verbCache.get(key)!;
  let out: string[] | null = null;
  try {
    const res = v.deriveTinantas({
      dhatu: { aupadeshika: a.aupadeshika, gana: GANA[a.गण], sanadi, prefixes },
      lakara: LAK[a.लकार], prayoga, purusha: PUR[PUR_D.indexOf(a.पुरुष)], vacana: VAC[VAC_D.indexOf(a.वचन)], pada, skip_at_agama: false
    });
    const fs = [...new Set(res.map((x: any) => deva(x.text)))] as string[];
    out = fs.length ? fs : null;
  } catch { out = null; }
  verbCache.set(key, out);
  return out;
}

for (const s of r.sections) {
  if (!want.has(s.id)) continue;
  for (const w of s.words)
    w.padas.forEach((p: any, pi: number) => {
      judged.padas++;
      const a: Analysis | undefined = p._a;
      if (!a) return;
      const f = (check: Flag['check'], detail: string) =>
        flags.push({ section: s.id, word: w.surface, pada: pi + 1, form: p.form, lemma: p.lemma, a: p.a, check, detail });
      // compound members
      if (p.member && a.विभक्ति) f('member', 'marked a member, yet carries a case');
      if (p.member) return;
      // the form the analysis makes
      let forms: string[] | null = null;
      if (a.type === 'subanta' && a.विभक्ति && a.वचन && a.लिङ्ग && !a.कृत्) forms = nounForms(a.lemma, a.लिङ्ग, a.विभक्ति, a.वचन);
      else if (a.type === 'tinanta') forms = verbForms(a);
      if (forms) {
        judged.form++;
        const all = forms.flatMap((x) => x.split(' / '));
        const ok = all.some((x) => bare(x) === bare(p.form) || (x.replace(/ः$/, '') === p.form && /^(सः|एषः)$/.test(x)));
        if (!ok) f('form', `the analysis gives ${all.slice(0, 3).join(', ')}`);
      }
      // a verb's sense on a noun or particle
      if (p.gloss && a.type !== 'tinanta' && !a.कृत्) {
        judged.gloss++;
        if (/^to [a-z]/.test(p.gloss)) f('gloss', `glossed as a verb: "${p.gloss.slice(0, 50)}"`);
      }
    });
}

const by = (c: string) => flags.filter((x) => x.check === c).length;
console.log(`${id}${opt('--first') ? ` ${opt('--first')}–${opt('--last')}` : ''}: ${judged.padas} padas; form checked on ${judged.form}, flagged ${by('form')}; gloss checked on ${judged.gloss}, flagged ${by('gloss')}; members flagged ${by('member')}`);
if (opt('--json')) fs.writeFileSync(opt('--json')!, JSON.stringify(flags, null, 1));
else for (const x of flags.slice(0, 40)) console.log(`  ${x.section} ${x.word} [${x.pada}] ${x.form} (${x.lemma}: ${x.a}) — ${x.check}: ${x.detail}`);
