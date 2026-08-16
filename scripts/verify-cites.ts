#!/usr/bin/env bun
/**
 * verify-cites.ts — check hand-written sūtra citations against vidyut-prakriya.
 *
 * Every `cite` in the corpus is a human assertion that a given rule applies to a
 * given form. Those assertions have been wrong: 7.3.103 was attached to देवे and
 * देवेषु (it governs भ्यस् only), and two of those were pre-existing rather than
 * introduced by this tooling. Hand-checking caught them, but hand-checking is not
 * a system.
 *
 * vidyut-prakriya derives a form and reports every sūtra it fired, so a citation
 * can be checked rather than trusted: derive the word, and ask whether the cited
 * rule appears in its derivation.
 *
 * Scoped to MORPHOLOGICAL rules only, and this scoping is the whole subtlety.
 * Deriving बालाय fires 4.1.2, 7.1.13, 7.3.102 — the rules that BUILD the form.
 * It never fires 2.3.13 (चतुर्थी सम्प्रदाने) or 1.4.33 (रुच्यर्थानां प्रीयमाणः),
 * because those are semantic: they decide which case to use, and the derivation
 * is GIVEN the case as input. Checking a semantic cite against a derivation
 * would report every correct citation as missing.
 *
 * So: adhyāyas 6-8 plus 4.1.2 and the 7.x aṅga operations are checkable here.
 * The 1.4 kāraka rules and the 2.3 vibhakti-assignment rules are not, and are
 * reported as `semantic` rather than silently passed or failed.
 *
 * This reports:
 *   confirmed — the cited rule appears in the derivation
 *   MISSING   — the derivation succeeded and the cited morphological rule is NOT in it
 *   semantic  — a role/case-assignment rule, outside what a derivation can confirm
 *   unchecked — no derivation available (lemma/case/number incomplete)
 *
 * Usage: bun scripts/verify-cites.ts [--full]
 */
import * as fs from 'fs';
import * as path from 'path';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');
const WASM_DIR = path.join(process.cwd(), 'static/wasm/vidyut-prakriya/');

/**
 * Rules a derivation cannot confirm: they operate on MEANING, upstream of the
 * morphology. 1.4.x names the कारक role, 2.3.x chooses the विभक्ति from that
 * role, 1.2.x and 3.2/3.3 select an affix from the intended sense. vidyut is
 * handed the case (or the lakāra) as input, so it never fires them.
 */
function isSemantic(cite: string): boolean {
  return /^1\.4\.|^2\.3\.|^1\.2\.|^2\.1\.|^2\.2\.|^3\.2\.|^3\.3\.|^3\.4\.2[0-9]|^5\./.test(cite);
}

/** Case name → vidyut Vibhakti key. */
const VIBHAKTI: Record<string, string> = {
  'प्रथमा': 'Prathama',
  'द्वितीया': 'Dvitiya',
  'तृतीया': 'Trtiya',
  'चतुर्थी': 'Caturthi',
  'पञ्चमी': 'Panchami',
  'षष्ठी': 'Sasthi',
  'सप्तमी': 'Saptami',
  'सम्बोधन': 'Sambodhana'
};
const VACANA: Record<string, string> = {
  'एकवचन': 'Eka',
  'द्विवचन': 'Dvi',
  'बहुवचन': 'Bahu'
};


/** Lakāra tag → vidyut key. */
const LAKARA: Record<string, string> = {
  'लट्': 'Lat', 'लङ्': 'Lan', 'लिट्': 'Lit', 'लुङ्': 'Lun', 'लृट्': 'Lrt',
  'लोट्': 'Lot', 'विधिलिङ्': 'VidhiLin', 'आशीर्लिङ्': 'AshirLin', 'लृङ्': 'Lrn', 'लुट्': 'Lut'
};

/**
 * Root → (aupadeśika, gaṇa). vidyut needs the root in its dhātupāṭha spelling
 * with its class, and the corpus records only the citation form. Only roots the
 * corpus actually cites are listed; an unlisted root is reported as unchecked
 * rather than guessed at, since a wrong gaṇa silently derives a different word.
 */
const DHATU: Record<string, [string, string]> = {
  // Each entry was checked by deriving the 3sg present and comparing against the
  // form the corpus actually uses. Roots whose spelling could not be confirmed
  // are OMITTED rather than guessed: गम् and दृश् both derive to the wrong word
  // under every aupadeśika tried (gamx~ gives gamati, not gacCati), and a wrong
  // gaṇa silently derives a different verb instead of failing.
  'भू': ['BU', 'Bhvadi'],
  'वस्': ['vasa~', 'Bhvadi'],
  'पठ्': ['paWa~', 'Bhvadi'],
  'पच्': ['qupaca~^', 'Bhvadi'],
  'रक्ष्': ['rakza~', 'Bhvadi'],
  'वद्': ['vada~', 'Bhvadi'],
  'क्रुध्': ['kruDa~', 'Divadi'],
  'तुष्': ['tuza~', 'Divadi'],
  'रुच्': ['ruca~\\', 'Bhvadi'],
  'नी': ['RI\\Y', 'Bhvadi'],
  'ज्ञा': ['jYA\\', 'Kryadi'],
  'श्रु': ['Sru\\', 'Bhvadi'],
  'कृ': ['qukf\\Y', 'Tanadi']
};

/** Person and number, read off the ending — the corpus rarely tags them. */
function personNumber(form: string): [string, string] | null {
  const f = form.replace(/[॒॑]/g, '');
  if (/(ामि|मि)$/.test(f)) return ['Uttama', 'Eka'];
  if (/(ावः|वः)$/.test(f)) return ['Uttama', 'Dvi'];
  if (/(ामः|मः)$/.test(f)) return ['Uttama', 'Bahu'];
  if (/सि$/.test(f)) return ['Madhyama', 'Eka'];
  if (/थः$/.test(f)) return ['Madhyama', 'Dvi'];
  if (/थ$/.test(f)) return ['Madhyama', 'Bahu'];
  if (/(न्ति|अन्ति)$/.test(f)) return ['Prathama', 'Bahu'];
  if (/तः$/.test(f)) return ['Prathama', 'Dvi'];
  if (/ति$/.test(f)) return ['Prathama', 'Eka'];
  if (/त्$/.test(f)) return ['Prathama', 'Eka'];   // लङ् 3sg
  if (/म्$/.test(f)) return ['Uttama', 'Eka'];     // लङ् 1sg
  return null;
}

/** Devanagari → SLP1, which is what vidyut takes. */
function toSlp1(dev: string): string | null {
  const map: Record<string, string> = {
    'अ': 'a', 'आ': 'A', 'इ': 'i', 'ई': 'I', 'उ': 'u', 'ऊ': 'U', 'ऋ': 'f', 'ॠ': 'F',
    'ए': 'e', 'ऐ': 'E', 'ओ': 'o', 'औ': 'O',
    'क': 'k', 'ख': 'K', 'ग': 'g', 'घ': 'G', 'ङ': 'N',
    'च': 'c', 'छ': 'C', 'ज': 'j', 'झ': 'J', 'ञ': 'Y',
    'ट': 'w', 'ठ': 'W', 'ड': 'q', 'ढ': 'Q', 'ण': 'R',
    'त': 't', 'थ': 'T', 'द': 'd', 'ध': 'D', 'न': 'n',
    'प': 'p', 'फ': 'P', 'ब': 'b', 'भ': 'B', 'म': 'm',
    'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
    'श': 'S', 'ष': 'z', 'स': 's', 'ह': 'h',
    'ा': 'A', 'ि': 'i', 'ी': 'I', 'ु': 'u', 'ू': 'U', 'ृ': 'f',
    'े': 'e', 'ै': 'E', 'ो': 'o', 'ौ': 'O', 'ं': 'M', 'ः': 'H'
  };
  let out = '';
  const chars = [...dev];
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    if (c === '्') { continue; }
    const m = map[c];
    if (m === undefined) return null;
    out += m;
    // a consonant with no following vowel-sign or virāma carries inherent 'a'
    const isCons = /[कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह]/.test(c);
    const next = chars[i + 1];
    if (isCons && next !== '्' && !(next && /[ािीुूृेैोौ]/.test(next))) out += 'a';
  }
  return out;
}

async function loadVidyut() {
  // vidyut logs "[vidyut] Derivation error" to the console for every spec it
  // cannot derive. That is an expected outcome here — we probe three lingas and
  // two prayogas per word and keep whichever succeed — so the log is pure noise.
  console.error = () => {};
  const raw = await import(WASM_DIR + 'vidyut_prakriya.js');
  const bytes = await Bun.file(WASM_DIR + 'vidyut_prakriya_bg.wasm').arrayBuffer();
  await raw.default({ module_or_path: bytes });
  return { w: raw.Vidyut.init(), mod: raw };
}

async function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8')).sequence as any[];
  const { w, mod } = await loadVidyut();

  let ok = 0, missing = 0, unchecked = 0, semantic = 0;
  const problems: string[] = [];

  for (const r of corpus) {
    for (const word of r.words ?? []) {
      const cites = (word.notes ?? []).filter((n: any) => n.cite).map((n: any) => n.cite);
      if (!cites.length) continue;
      const terms = (word.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term);

      // A tiṅanta is checkable when we know the root, its gaṇa, the lakāra, and
      // can read person/number off the ending.
      const lak = terms.map((t: string) => LAKARA[t]).find(Boolean);
      if (lak) {
        const spec = word.lemma ? DHATU[word.lemma] : undefined;
        const pn = personNumber(word.form);
        if (!spec || !pn) { unchecked += cites.length; continue; }
        let vfired: Set<string> | null = null;
        for (const prayoga of ['Kartari', 'Karmani']) {
          try {
            const res = w.deriveTinantas({
              dhatu: { aupadeshika: spec[0], gana: spec[1], sanadi: [], prefixes: [] },
              lakara: lak, prayoga, purusha: pn[0], vacana: pn[1], pada: null
            });
            for (const p of res) {
              const set = new Set<string>(p.history.map((s: any) => s.rule.code));
              if (!vfired) vfired = set; else for (const c of set) vfired.add(c);
            }
          } catch { /* try the other prayoga */ }
        }
        if (!vfired || !vfired.size) { unchecked += cites.length; continue; }
        for (const c of cites) {
          if (isSemantic(c)) { semantic++; continue; }
          if (vfired.has(c)) ok++;
          else {
            missing++;
            problems.push(`  ${r.id} ${word.form} (${word.lemma}) cites ${c} — not in derivation of ${word.form}`);
          }
        }
        continue;
      }

      // A subanta is checkable when the annotation names both case and number.
      const vib = terms.map((t: string) => VIBHAKTI[t]).find(Boolean);
      const vac = terms.map((t: string) => VACANA[t]).find(Boolean) ?? 'Eka';
      const stem = word.lemma ? toSlp1(word.lemma) : null;
      if (!vib || !stem) { unchecked += cites.length; continue; }

      let fired: Set<string> | null = null;
      for (const linga of ['Pum', 'Napumsaka', 'Stri']) {
        try {
          const res = w.deriveSubantas({
            pratipadika: { basic: stem },
            // The raw module deserialises these as named enum variants, not
            // as the numeric values mod.Linga[...] returns.
            linga,
            vibhakti: vib,
            vacana: vac
          });
          for (const p of res) {
            const set = new Set<string>(p.history.map((s: any) => s.rule.code));
            if (!fired) fired = set;
            else for (const c of set) fired.add(c);
          }
        } catch { /* this linga does not derive; try the next */ }
      }
      if (!fired || !fired.size) { unchecked += cites.length; continue; }

      for (const c of cites) {
        if (isSemantic(c)) { semantic++; continue; }
        if (fired.has(c)) ok++;
        else {
          missing++;
          problems.push(`  ${r.id} ${word.form} (${word.lemma}) cites ${c} — not in derivation of ${word.form}`);
        }
      }
    }
  }

  console.log(`\n  CITE VERIFICATION — against vidyut-prakriya\n`);
  console.log(`    confirmed   ${ok}`);
  console.log(`    MISSING     ${missing}   (cited rule absent from the derivation)`);
  console.log(`    semantic    ${semantic}   (role/case-assignment — outside what a derivation shows)`);
  console.log(`    unchecked   ${unchecked}   (no derivable spec — lemma/case/number incomplete)\n`);
  if (problems.length) {
    const show = process.argv.includes('--full') ? problems : problems.slice(0, 30);
    console.log(`  ── citations to review ──`);
    for (const p of show) console.log(p);
    if (show.length < problems.length) console.log(`    … and ${problems.length - show.length} more (--full)`);
    console.log();
  }
}

main();
