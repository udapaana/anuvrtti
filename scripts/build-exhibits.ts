#!/usr/bin/env bun
/**
 * build-exhibits.ts — which sūtras each reading SHOWS, not only which it cites.
 *
 * The ledger counts an encounter when a reading cites a rule or carries a term
 * that names it. That is the right measure of what a reading EXPLAINS, and the
 * wrong one for deciding what to write next: it cannot tell a rule the corpus
 * never shows from a rule it shows everywhere and never annotated. 8.4.1 णत्व
 * stood at 1/8 while रामेण, पुरुषेण and कर्णेन ran through dozens of readings;
 * the remedy there is a tag on words that already exist, not a new reading.
 *
 * So: every word the build has fully parsed is derived again by vidyut, from
 * the coordinates the annotation and the derivation agreed on. Only a
 * derivation that reproduces the attested form is kept — a पुंलिङ्ग guess that
 * yields a different string proves nothing about this word — and the sūtras in
 * its prakriyā are what the reading exhibits.
 *
 *   → static/data/rule-exhibits.json   { "8.4.1": ["ex012", "ex044", …], … }
 *
 * Read by readings-ledger.ts, which reports each under-taught rule's exhibit
 * count beside its encounter count. Generated, not committed.
 */
import * as fs from 'fs';
import * as path from 'path';
import { deaccent } from '../src/lib/usage/normalize';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');
const DHATU_MAP = path.join(process.cwd(), 'static/data/dhatu-map.json');
const WASM_DIR = path.join(process.cwd(), 'static/wasm/vidyut-prakriya/');
const OUT = path.join(process.cwd(), 'static/data/rule-exhibits.json');
// rule → [reading id, word index, form]: which WORD shows it, for an author
// (or scripts/cite-exhibited.ts) to cite on.
const OUT_WORDS = path.join(process.cwd(), 'static/data/rule-exhibit-words.json');

const VIB: Record<string, string> = {
  'प्रथमा': 'Prathama', 'द्वितीया': 'Dvitiya', 'तृतीया': 'Trtiya', 'चतुर्थी': 'Caturthi',
  'पञ्चमी': 'Panchami', 'षष्ठी': 'Sasthi', 'सप्तमी': 'Saptami', 'सम्बोधन': 'Sambodhana'
};
const VAC: Record<string, string> = { 'एकवचन': 'Eka', 'द्विवचन': 'Dvi', 'बहुवचन': 'Bahu' };
const LING: Record<string, string> = { 'पुंलिङ्ग': 'Pum', 'स्त्रीलिङ्ग': 'Stri', 'नपुंसकलिङ्ग': 'Napumsaka' };
const PUR: Record<string, string> = { 'प्रथमपुरुष': 'Prathama', 'मध्यमपुरुष': 'Madhyama', 'उत्तमपुरुष': 'Uttama' };
const PADA: Record<string, string> = { 'परस्मैपद': 'Parasmaipada', 'आत्मनेपद': 'Atmanepada' };
const LAK: Record<string, string> = {
  'लट्': 'Lat', 'लङ्': 'Lan', 'लिट्': 'Lit', 'लुट्': 'Lut', 'लृट्': 'Lrt', 'लोट्': 'Lot',
  'विधिलिङ्': 'VidhiLin', 'आशीर्लिङ्': 'AshirLin', 'लुङ्': 'Lun', 'लृङ्': 'Lrn'
};
const SAN: Record<string, string> = { 'णिच्': 'Ric', 'सन्': 'san' };
const PRAY: Record<string, string> = { 'कर्तरि': 'Kartari', 'कर्मणि': 'Karmani', 'भावे': 'Bhave' };
const UPA: Record<string, string> = {
  'आङ्': 'A', 'आ': 'A', 'प्र': 'pra', 'सम्': 'sam', 'वि': 'vi', 'नि': 'ni', 'अनु': 'anu',
  'उप': 'upa', 'अधि': 'aDi', 'अव': 'ava', 'उद्': 'ud', 'उत्': 'ud', 'परि': 'pari',
  'प्रति': 'prati', 'अप': 'apa', 'अभि': 'aBi', 'निस्': 'nis', 'निर्': 'nis', 'दुस्': 'dus',
  'दुर्': 'dus', 'सु': 'su', 'परा': 'parA', 'अपि': 'api', 'अति': 'ati'
};

const MAP: Record<string, string> = {
  'अ':'a','आ':'A','इ':'i','ई':'I','उ':'u','ऊ':'U','ऋ':'f','ॠ':'F','ए':'e','ऐ':'E','ओ':'o','औ':'O',
  'क':'k','ख':'K','ग':'g','घ':'G','ङ':'N','च':'c','छ':'C','ज':'j','झ':'J','ञ':'Y',
  'ट':'w','ठ':'W','ड':'q','ढ':'Q','ण':'R','त':'t','थ':'T','द':'d','ध':'D','न':'n',
  'प':'p','फ':'P','ब':'b','भ':'B','म':'m','य':'y','र':'r','ल':'l','व':'v',
  'श':'S','ष':'z','स':'s','ह':'h',
  'ा':'A','ि':'i','ी':'I','ु':'u','ू':'U','ृ':'f','े':'e','ै':'E','ो':'o','ौ':'O','ं':'M','ः':'H'
};
function slp(dev: string): string | null {
  let out = '';
  const cs = [...dev];
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i];
    if (c === '्') continue;
    const m = MAP[c];
    if (m === undefined) return null;
    out += m;
    const next = cs[i + 1];
    if (/[कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह]/.test(c) && next !== '्' && !(next && /[ािीुूृेैोौ]/.test(next))) out += 'a';
  }
  return out;
}

async function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8')).sequence as any[];
  const dmap: Record<string, [string, string][]> = fs.existsSync(DHATU_MAP)
    ? JSON.parse(fs.readFileSync(DHATU_MAP, 'utf-8')) : {};
  console.error = () => {};
  const raw = await import(WASM_DIR + 'vidyut_prakriya.js');
  await raw.default({ module_or_path: await Bun.file(WASM_DIR + 'vidyut_prakriya_bg.wasm').arrayBuffer() });
  const v = raw.Vidyut.init();

  const byRule = new Map<string, Set<string>>();
  const byRuleWords = new Map<string, [string, number, string][]>();
  let words = 0, derived = 0;
  const memo = new Map<string, string[] | null>();

  const rulesOf = (res: any[], want: string): string[] | null => {
    const hit = res.find((p: any) => p.text === want);
    return hit ? [...new Set<string>(hit.history.map((s: any) => s.rule.code))] : null;
  };

  for (const r of corpus) {
    for (const [wi, w] of (r.words ?? []).entries()) {
      if (!w.lemma || !w.form) continue;
      const t = new Set<string>([
        ...(w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term),
        ...(Object.values(w.derived ?? {}) as string[])
      ]);
      const form = slp(deaccent(String(w.form)).replace(/ं$/, 'म्'));
      const lemma = deaccent(String(w.lemma));
      if (!form) continue;
      words++;
      const pick = (tab: Record<string, string>) => [...t].map((x) => tab[x]).find(Boolean);
      let rules: string[] | null = null;

      const lak = pick(LAK);
      if (lak) {
        const pu = pick(PUR), vc = pick(VAC);
        if (!pu || !vc) continue;
        const key = `t|${lemma}|${form}|${lak}|${pu}|${vc}|${[...t].sort().join(',')}`;
        if (memo.has(key)) rules = memo.get(key)!;
        else {
          const pre = pick(UPA);
          const san = pick(SAN);
          const pr = pick(PRAY) ?? 'Kartari';
          for (const [aup, gana] of dmap[lemma] ?? dmap[lemma.replace(/्$/, '')] ?? []) {
            try {
              const res = v.deriveTinantas({
                dhatu: { aupadeshika: aup, gana, sanadi: san ? [san] : [], prefixes: pre ? [pre] : [] },
                lakara: lak, prayoga: pr, purusha: pu, vacana: vc, pada: pick(PADA) ?? null,
                skip_at_agama: false
              });
              rules = rulesOf(res, form);
            } catch { /* not this candidate */ }
            if (rules) break;
          }
          memo.set(key, rules);
        }
      } else {
        const vib = pick(VIB), vc = pick(VAC);
        const stem = slp(lemma);
        if (!vib || !vc || !stem) continue;
        const lg = pick(LING);
        const key = `s|${stem}|${form}|${vib}|${vc}|${lg ?? '*'}`;
        if (memo.has(key)) rules = memo.get(key)!;
        else {
          const prats = /[AI]$/.test(stem) && stem.length > 2 ? [{ basic: stem }, { nyap: stem }] : [{ basic: stem }];
          outer: for (const linga of lg ? [lg] : ['Pum', 'Stri', 'Napumsaka'])
            for (const pratipadika of prats) {
              try {
                rules = rulesOf(v.deriveSubantas({ pratipadika, linga, vibhakti: vib, vacana: vc }), form);
              } catch { /* not this spelling */ }
              if (rules) break outer;
            }
          memo.set(key, rules);
        }
      }
      if (!rules) continue;
      derived++;
      for (const c of rules) {
        (byRule.get(c) ?? byRule.set(c, new Set()).get(c)!).add(r.id);
        (byRuleWords.get(c) ?? byRuleWords.set(c, []).get(c)!).push([r.id, wi, String(w.form)]);
      }
    }
  }

  const out: Record<string, string[]> = {};
  for (const [c, ids] of [...byRule].sort((a, b) => b[1].size - a[1].size)) out[c] = [...ids];
  fs.writeFileSync(OUT, JSON.stringify(out));
  fs.writeFileSync(OUT_WORDS, JSON.stringify(Object.fromEntries(byRuleWords)));
  console.log(
    `Wrote ${byRule.size} sūtras exhibited across the corpus → ${path.relative(process.cwd(), OUT)} ` +
    `(${derived} of ${words} lemmatized words re-derived to their attested form)`
  );
}

main();
