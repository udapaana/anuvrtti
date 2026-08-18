#!/usr/bin/env bun
/**
 * check-complete.ts — which words are missing the tags their type needs.
 *
 * docs/AUTHORING.md states what each word type owes: a सुबन्त needs विभक्ति and
 * वचन, a तिङन्त needs लकार, पुरुष and वचन, and everything needs a lemma. Nothing
 * enforced it, so the corpus drifted to 5% वचन coverage on nouns and 4% on
 * verbs without any single edit looking wrong.
 *
 * This reports the gap the way the ledger reports rule coverage: not as a
 * failure — the backlog is 1,600 words deep and blocking on it would make the
 * command useless — but as a work queue, sorted so the next reading to fix is
 * obvious.
 *
 * Usage:
 *   bun scripts/check-complete.ts               summary by type
 *   bun scripts/check-complete.ts --reading ex209   one reading, word by word
 *   bun scripts/check-complete.ts --worst 20    the readings to fix first
 *   bun scripts/check-complete.ts --untyped     words with no type tag at all
 */
import * as fs from 'fs';
import * as path from 'path';

const CORPUS = path.join(process.cwd(), 'static/data/readings.json');

const VIBHAKTI = new Set(['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन']);
const VACANA = new Set(['एकवचन', 'द्विवचन', 'बहुवचन']);
const LAKARA = new Set(['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्']);
const PURUSHA = new Set(['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष']);
const PADA = new Set(['परस्मैपद', 'आत्मनेपद']);
const KARAKA = new Set(['कर्तृ', 'कर्मन्', 'करण', 'सम्प्रदान', 'अपादान', 'अधिकरण', 'सम्बन्ध']);
const KRT = new Set([
  'कृदन्त', 'निष्ठा', 'शतृ', 'शानच्', 'क्त्वा', 'कृत्य', 'तुमुन्', 'ल्युट्',
  'ण्वुल्', 'तृच्', 'क्त', 'क्तवतु', 'यत्', 'ण्यत्', 'ल्यप्', 'तव्य', 'अनीयर्'
]);

type Word = { form: string; lemma?: string; notes?: any[] };
type Finding = { reading: string; form: string; type: string; missing: string[] };

/** What kind of word this is, by the tag that identifies its paradigm. */
function typeOf(terms: Set<string>): string {
  for (const t of terms) if (VIBHAKTI.has(t)) return 'सुबन्त';
  for (const t of terms) if (LAKARA.has(t)) return 'तिङन्त';
  for (const t of terms) if (KRT.has(t)) return 'कृदन्त';
  if (terms.has('अव्यय')) return 'अव्यय';
  return 'untyped';
}

/**
 * What this word still owes.
 *
 * Deliberately narrow: only the features that place a word in its paradigm.
 * A missing `cite` is a lost teaching opportunity, not an incompleteness, and
 * lumping the two would bury the signal under 1,700 entries.
 */
function missingFor(type: string, w: Word, terms: Set<string>): string[] {
  const miss: string[] = [];
  const has = (s: Set<string>) => [...terms].some((t) => s.has(t));

  if (type !== 'untyped' && !w.lemma) miss.push('lemma');

  if (type === 'सुबन्त') {
    if (!has(VACANA)) miss.push('वचन');
    // The kāraka role is what supplies the विभक्ति when it is absent and is the
    // answer to "what is it doing here?", so it is worth naming — but it is a
    // property of the sentence, and plenty of words genuinely have no role.
    // Reported separately rather than as a defect.
  } else if (type === 'तिङन्त') {
    if (!has(PURUSHA)) miss.push('पुरुष');
    if (!has(VACANA)) miss.push('वचन');
    if (!has(PADA)) miss.push('पद');
  } else if (type === 'कृदन्त') {
    // A participle that declines is a सुबन्त too. An indeclinable one (क्त्वा,
    // तुमुन्, ल्यप्) is not, so only ask when the suffix is a declining kind.
    const indeclinable = terms.has('क्त्वा') || terms.has('तुमुन्') || terms.has('ल्यप्');
    if (!indeclinable) {
      if (!has(VIBHAKTI)) miss.push('विभक्ति');
      if (!has(VACANA)) miss.push('वचन');
    }
  }
  return miss;
}

function main() {
  const corpus = JSON.parse(fs.readFileSync(CORPUS, 'utf-8'));
  const args = process.argv.slice(2);
  const one = args.includes('--reading') ? args[args.indexOf('--reading') + 1] : null;
  const worstN = args.includes('--worst') ? Number(args[args.indexOf('--worst') + 1] || 20) : 0;
  const untypedOnly = args.includes('--untyped');

  const findings: Finding[] = [];
  const byType: Record<string, { total: number; complete: number }> = {};
  const byReading = new Map<string, number>();
  const untyped: Array<{ reading: string; form: string; tags: string[] }> = [];

  for (const r of corpus.sequence ?? []) {
    if (one && r.id !== one) continue;
    for (const w of r.words ?? []) {
      const terms = new Set<string>((w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term));
      const type = typeOf(terms);
      byType[type] ??= { total: 0, complete: 0 };
      byType[type].total++;

      if (type === 'untyped') {
        untyped.push({ reading: r.id, form: w.form, tags: [...terms] });
        byReading.set(r.id, (byReading.get(r.id) ?? 0) + 1);
        continue;
      }
      const missing = missingFor(type, w, terms);
      if (!missing.length) { byType[type].complete++; continue; }
      findings.push({ reading: r.id, form: w.form, type, missing });
      byReading.set(r.id, (byReading.get(r.id) ?? 0) + 1);
    }
  }

  // ── one reading, word by word ──────────────────────────────────────────
  if (one) {
    const rows = findings.filter((f) => f.reading === one);
    console.log(`\n${one} — ${rows.length} word(s) underspecified\n`);
    for (const f of rows) {
      console.log(`  ${f.form.padEnd(16)} ${f.type.padEnd(8)} needs ${f.missing.join(', ')}`);
    }
    const u = untyped.filter((x) => x.reading === one);
    if (u.length) {
      console.log(`\n  no type tag (${u.length}):`);
      for (const x of u) console.log(`    ${x.form.padEnd(16)} has [${x.tags.join(', ')}]`);
    }
    if (!rows.length && !u.length) console.log('  complete.');
    console.log();
    return;
  }

  // ── the untyped list ───────────────────────────────────────────────────
  if (untypedOnly) {
    console.log(`\n${untyped.length} word(s) with no type tag\n`);
    for (const x of untyped.slice(0, 80)) {
      console.log(`  ${x.reading.padEnd(8)} ${x.form.padEnd(16)} [${x.tags.join(', ') || '—'}]`);
    }
    if (untyped.length > 80) console.log(`  … and ${untyped.length - 80} more`);
    console.log();
    return;
  }

  // ── the work queue ─────────────────────────────────────────────────────
  if (worstN) {
    const ranked = [...byReading.entries()].sort((a, b) => b[1] - a[1]).slice(0, worstN);
    console.log(`\nreadings with the most underspecified words\n`);
    for (const [id, n] of ranked) console.log(`  ${String(n).padStart(3)}  ${id}`);
    console.log(`\n  bun scripts/check-complete.ts --reading <id>   to see one\n`);
    return;
  }

  // ── the summary ────────────────────────────────────────────────────────
  console.log('\n═══ grammatical completeness ═══\n');
  const order = ['सुबन्त', 'तिङन्त', 'कृदन्त', 'अव्यय', 'untyped'];
  for (const t of order) {
    const s = byType[t];
    if (!s) continue;
    if (t === 'untyped') {
      console.log(`  ${t.padEnd(8)} ${String(s.total).padStart(5)}   no type tag — cannot be placed in any paradigm`);
      continue;
    }
    const pct = s.total ? Math.round((s.complete / s.total) * 100) : 0;
    const bar = '█'.repeat(Math.round(pct / 5)).padEnd(20, '·');
    console.log(`  ${t.padEnd(8)} ${String(s.total).padStart(5)}   ${bar} ${pct}% complete`);
  }

  const need: Record<string, number> = {};
  for (const f of findings) for (const m of f.missing) need[m] = (need[m] ?? 0) + 1;
  console.log('\n  most-needed tag:');
  for (const [k, v] of Object.entries(need).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${String(v).padStart(5)}  ${k}`);
  }
  console.log(
    `\n  --worst 20      the readings to fix first` +
    `\n  --reading <id>  one reading, word by word` +
    `\n  --untyped       words carrying no type tag\n`
  );
}

main();
