#!/usr/bin/env bun
/**
 * Build the Dukṛṇkaraṇe payload from the dukrnkarane repo's markdown corpus.
 *
 * Kale's "A Higher Sanskrit Grammar" (1894) — 973 numbered rules plus a 15-part
 * prosody appendix, each a markdown file with YAML frontmatter and the same
 * @deva[...] / @[...] markup anuvṛtti already speaks (see src/lib/markup.ts).
 *
 * Source lives in a sibling checkout rather than in this repo: the corpus is
 * ~5MB of markdown plus 400MB of page scans, and it is maintained (and
 * proof-corrected against those scans) on its own. Point DUKR_SRC elsewhere to
 * build from a different checkout.
 *
 * What this script derives that the source does not carry:
 *   - panini_refs normalized from Roman ("VI. 1. 101") to anuvṛtti's packed
 *     sūtra ids ("61101"), so Kale's citations resolve against /ref/[id].
 *   - a reverse index of @ref[n] cross-references, giving each rule its
 *     "cited by" list.
 *   - derivation triples (A + B = C) parsed out of the prose, where the rule
 *     states them in that regular form. Only ~40 rules do; the rest render as
 *     prose and that is not a defect to paper over.
 *
 *   → static/data/dukrnkarane.json
 */
import * as fs from 'fs';
import * as path from 'path';

const SRC =
  process.env.DUKR_SRC ??
  path.resolve(process.cwd(), '../dukrnkarane');
const OUTPUT = path.join(process.cwd(), 'static/data/dukrnkarane.json');

const ROMAN: Record<string, number> = {
  I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10,
};

/**
 * "Pāṇ. VI. 1. 101" → "61101", matching the keys in sutrartha_english.json.
 * Returns null for the ~3% of refs that cite something other than a single
 * Aṣṭādhyāyī sūtra — Bhaṭṭikāvya verses, chapter pointers, and ranges. Those
 * keep their display text and simply do not become links.
 */
function toSutraId(ref: string): string | null {
  const m = /^(?:Pāṇ\.?|P\.)?\s*([IVX]+)\.\s*(\d+)\.\s*(\d+)\.?$/.exec(ref.trim());
  if (!m) return null;
  const adhyaya = ROMAN[m[1]];
  if (!adhyaya) return null;
  const pada = Number(m[2]);
  const sutra = Number(m[3]);
  if (pada < 1 || pada > 8 || sutra < 1) return null;
  return `${adhyaya}${pada}${String(sutra).padStart(3, '0')}`;
}

/**
 * Kale (1894) follows a recension whose sūtra divisions do not always match
 * the text behind /ref. Numbering agrees for the overwhelming majority —
 * spot-checked against landmark sūtras (6.1.101 savarṇa-dīrgha, 6.1.77 iko
 * yaṇaci, 6.1.88 vṛddhir eci), all of which land correctly — but two pādas
 * run longer in his edition than in ours (2.2 to at least 47 against our 38,
 * 8.1 to at least 96 against our 74), and both of ours are gap-free, so the
 * difference is editorial rather than missing data.
 *
 * So a derived id is only turned into a link once it is known to exist. An id
 * that does not resolve keeps its display text and is reported below, rather
 * than shipping a link into a 404.
 */
function loadKnownSutraIds(): Set<string> | null {
  const p = path.join(process.cwd(), 'static/data/sutrartha_english.json');
  if (!fs.existsSync(p)) return null;
  try {
    return new Set(Object.keys(JSON.parse(fs.readFileSync(p, 'utf-8'))));
  } catch {
    return null;
  }
}

type Frontmatter = Record<string, string | string[]>;

/** Minimal YAML reader — the corpus only ever uses scalars and "- " lists. */
function parseFrontmatter(raw: string): Frontmatter {
  const fm: Frontmatter = {};
  let key: string | null = null;
  for (const line of raw.split('\n')) {
    const item = /^\s+-\s*(.*)$/.exec(line);
    if (item && key) {
      (fm[key] as string[]).push(unquote(item[1]));
      continue;
    }
    const pair = /^([A-Za-z_]+):\s*(.*)$/.exec(line);
    if (!pair) continue;
    key = pair[1];
    const value = pair[2].trim();
    if (value === '' || value === '[]') fm[key] = value === '[]' ? [] : [];
    else fm[key] = unquote(value);
  }
  return fm;
}

function unquote(s: string): string {
  const t = s.trim();
  if (t.startsWith('"') && t.endsWith('"')) return t.slice(1, -1);
  return t;
}

function str(fm: Frontmatter, k: string): string {
  const v = fm[k];
  return typeof v === 'string' ? v : '';
}

function list(fm: Frontmatter, k: string): string[] {
  const v = fm[k];
  return Array.isArray(v) ? v : [];
}

export type Derivation = {
  left: string;
  right: string;
  result: string;
  gloss?: string;
};

/**
 * Pull "@deva[देव] + @deva[अरि:] = @deva[देवारि:] gloss" out of the prose.
 * A gloss is the run of plain words immediately after the result, before the
 * next marker or sentence break — Kale sets them without any delimiter.
 */
function parseDerivations(body: string): Derivation[] {
  const re =
    /@deva\[([^\]]+)\]\s*\+\s*@deva\[([^\]]+)\]\s*=\s*@deva\[([^\]]+)\]([^;.@]*)/g;
  const out: Derivation[] = [];
  for (const m of body.matchAll(re)) {
    const gloss = m[4].replace(/^[\s,]+/, '').trim();
    out.push({
      left: m[1],
      right: m[2],
      result: m[3],
      ...(gloss && /^[A-Za-z]/.test(gloss) ? { gloss } : {}),
    });
  }
  return out;
}

type Rule = {
  n: number;
  id: string;
  title: string;
  chapter: string;
  section: string;
  kind: 'rule' | 'appendix';
  pages: { start: number; end: number };
  images: string[];
  topics: string[];
  words: string[];
  paniniRefs: { display: string; sutraId: string | null }[];
  crossRefs: number[];
  citedBy: number[];
  derivations: Derivation[];
  body: string;
};

const knownSutras = loadKnownSutraIds();
const unresolved: { rule: number; display: string; id: string }[] = [];

function loadDir(dir: string, kind: Rule['kind'], offset: number): Rule[] {
  const full = path.join(SRC, dir);
  if (!fs.existsSync(full)) {
    throw new Error(
      `dukrnkarane source not found at ${full}\n` +
        `Set DUKR_SRC to the dukrnkarane checkout, e.g.\n` +
        `  DUKR_SRC=/path/to/dukrnkarane bun scripts/build-dukrnkarane.ts`,
    );
  }
  const rules: Rule[] = [];
  for (const file of fs.readdirSync(full).filter((f) => f.endsWith('.md')).sort()) {
    const raw = fs.readFileSync(path.join(full, file), 'utf-8');
    const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
    if (!m) {
      console.error(`  ✗ ${dir}/${file}: no frontmatter`);
      continue;
    }
    const fm = parseFrontmatter(m[1]);
    const body = m[2].trim();
    const fileNum = Number(file.slice(0, 3));

    rules.push({
      n: offset + fileNum,
      id: str(fm, 'rule_id') || `§ ${fileNum}`,
      title: str(fm, 'title'),
      chapter: str(fm, 'chapter'),
      section: str(fm, 'section'),
      kind,
      pages: {
        start: Number(str(fm, 'page_start')) || 0,
        end: Number(str(fm, 'page_end')) || 0,
      },
      images: list(fm, 'image_files'),
      topics: list(fm, 'topics'),
      words: list(fm, 'word_index'),
      paniniRefs: list(fm, 'panini_refs').map((r) => {
        const id = toSutraId(r);
        // Only link ids the reference text actually has; see loadKnownSutraIds.
        const known = !id || !knownSutras || knownSutras.has(id);
        if (id && !known) unresolved.push({ rule: offset + fileNum, display: r, id });
        return { display: r, sutraId: known ? id : null };
      }),
      crossRefs: [...body.matchAll(/@ref\[(\d+)\]/g)].map((x) => Number(x[1])),
      citedBy: [],
      derivations: parseDerivations(body),
      body,
    });
  }
  return rules;
}

const CORE_COUNT = 972;

const rules = [
  ...loadDir('data/rules', 'rule', 0),
  ...loadDir('data/appendix', 'appendix', CORE_COUNT),
];

// Reverse the cross-reference edges: @ref[23] in § 19 makes § 19 a citer of § 23.
const byNumber = new Map(rules.map((r) => [r.n, r]));
for (const r of rules) {
  for (const target of new Set(r.crossRefs)) {
    byNumber.get(target)?.citedBy.push(r.n);
  }
}
for (const r of rules) r.citedBy.sort((a, b) => a - b);

// Chapters, in the order they first appear — the corpus is already in book order.
const chapters: { title: string; first: number; last: number; count: number }[] = [];
for (const r of rules) {
  const last = chapters[chapters.length - 1];
  if (last && last.title === r.chapter) {
    last.last = r.n;
    last.count++;
  } else {
    chapters.push({ title: r.chapter, first: r.n, last: r.n, count: 1 });
  }
}

const withDerivations = rules.filter((r) => r.derivations.length > 0).length;
const linkedRefs = rules.reduce(
  (n, r) => n + r.paniniRefs.filter((p) => p.sutraId).length,
  0,
);
const totalRefs = rules.reduce((n, r) => n + r.paniniRefs.length, 0);

// Reverse index for the other direction: given a sūtra, which sections of Kale
// cite it. Lets /ref surface "discussed in डुकृण्करणे § 19" beside the sūtra.
const bySutra: Record<string, number[]> = {};
for (const r of rules) {
  for (const p of r.paniniRefs) {
    if (!p.sutraId) continue;
    (bySutra[p.sutraId] ??= []).push(r.n);
  }
}
for (const k of Object.keys(bySutra)) bySutra[k] = [...new Set(bySutra[k])].sort((a, b) => a - b);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(
  OUTPUT,
  JSON.stringify({ chapters, rules, coreCount: CORE_COUNT }),
);
fs.writeFileSync(
  path.join(process.cwd(), 'static/data/dukrnkarane-by-sutra.json'),
  JSON.stringify(bySutra),
);

console.log(`✓ ${rules.length} sections (${chapters.length} chapters)`);
console.log(`✓ ${linkedRefs}/${totalRefs} Pāṇini refs link to a sūtra in /ref`);
if (!knownSutras) {
  console.warn('  ! sutrartha_english.json absent — ids were not validated');
} else if (unresolved.length) {
  console.warn(
    `  ! ${unresolved.length} citation(s) name a sūtra this text does not have ` +
      `(recension difference); left unlinked:`,
  );
  for (const u of unresolved) {
    console.warn(`      § ${u.rule}  ${u.display}`);
  }
}
console.log(`✓ ${withDerivations} sections carry parseable derivations`);
console.log(`✓ ${Object.keys(bySutra).length} sūtras gain a back-reference into Kale`);
console.log(`→ ${path.relative(process.cwd(), OUTPUT)}`);
