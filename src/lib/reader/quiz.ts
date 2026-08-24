/**
 * quiz.ts — every question a word can be asked, built when it is asked.
 *
 * This used to run at build time, one question per word, frozen into
 * readings.json. A word therefore asked the same thing forever: 1867 questions
 * across the corpus were only 648 distinct cards, and "Which विभक्ति? → प्रथमा"
 * existed in 72 identical copies. Shipping the whole pool instead fixed the
 * variety and doubled readings.json to 10.4MB.
 *
 * Neither was needed. Everything a question requires is already in the client:
 * the word's authored tags, the `derived` map vidyut filled in, its gloss, its
 * lemma, its citations — and, from usage.json which the rail loads anyway, the
 * paradigm tables and the cell-ambiguity index. Building on demand costs no
 * payload (readings.json went 5.1MB → 3.8MB when the old blob came out) and
 * lets the question, the distractors and the answer order all differ each time
 * the same word comes round.
 *
 * A question is one of four SHAPES, because "four buttons in a column" is the
 * right answer for a closed set and the wrong one for everything else:
 *
 *   choice   pick one of N          — a tag from a closed schema set
 *   cell     point at a paradigm    — विभक्ति × वचन in one action
 *   token    tap a word in the line — the answer is another word
 *   produce  type the form          — real production, not recognition
 */

import {
  VIBHAKTI, VACANA, LINGA, PURUSHA, PADA, GANA, VIKARANA, UPASARGA, SANADI,
  KARAKA, LAKARA, PRAYOGA, SAMASA, TADDHITA_ARTHA, TADDHITA_SUFFIX,
  KRT_DECLINING, KRT_INDECLINABLE, SENSE_ROLE, AVYAYA_SUBTYPES,
  SARVANAMA_SUBTYPE, SANKHYA_SUBTYPE, STRI_PRATYAYA, SANDHI
} from '$lib/usage/schema';

export type QuizUI = 'choice' | 'cell' | 'token' | 'produce';

export interface Question {
  ui: QuizUI;
  /** Which question this is, for scoring and for the reader's labels. */
  kind: string;
  /** Shown above the options. May mix English and Sanskrit. */
  prompt: string;
  /** The clause to show, or '' when showing it would give the answer away. */
  context: string;

  // choice
  opts?: string[];
  ans?: string;
  /** True when the options are Sanskrit and must follow the script toggle. */
  sanskritOpts?: boolean;

  // cell
  rows?: string[];
  cols?: string[];
  ansRow?: number;
  ansCol?: number;
  /** The stem whose table is shown — देव, गम्. */
  stem?: string;

  // token — the answer is a word in this reading
  ansWi?: number;

  // produce
  accept?: string[];
}

export interface UsageData {
  cells?: Record<string, string>;
  nounParadigms?: Record<string, Record<string, string>>;
  verbParadigms?: Record<string, Record<string, string>>;
  lingas?: Record<string, string>;
  ganas?: Record<string, string[]>;
}

const deaccent = (s: string) => String(s ?? '').replace(/[॒॑᳚꣡ऽ]/g, '');
const anusvara = (s: string) => String(s ?? '').replace(/ं$/, 'म्');

/** Pick n distinct members of `pool` that are not `ans`. */
function others(ans: string, pool: string[], n = 3): string[] {
  const rest = pool.filter((x) => x !== ans);
  const out: string[] = [];
  while (out.length < n && rest.length) {
    out.push(rest.splice(Math.floor(Math.random() * rest.length), 1)[0]);
  }
  return out;
}

/**
 * The clause a word sits in, rather than the whole reading.
 *
 * A सङ्ग्रह passage runs to 556 characters; eight lines of prose to ask about one
 * word buries the word.
 */
function clauseOf(sentence: string, form: string): string {
  const clauses = String(sentence ?? '')
    .split(/(?<=[।॥])/)
    .map((c) => c.trim())
    .filter(Boolean);
  return clauses.find((c) => c.includes(form)) ?? String(sentence ?? '');
}

/** Every dimension a word may carry, with the closed set its distractors come from. */
const DIMENSIONS: { key: string; pool: string[]; label: string; kind: string }[] = [
  { key: 'विभक्ति', pool: VIBHAKTI, label: 'विभक्ति', kind: 'vibhakti' },
  { key: 'वचन', pool: VACANA, label: 'वचन', kind: 'vacana' },
  { key: 'लिङ्ग', pool: LINGA, label: 'लिङ्ग', kind: 'linga' },
  { key: 'कारक', pool: KARAKA, label: 'कारक role', kind: 'karaka' },
  { key: 'लकार', pool: LAKARA, label: 'लकार', kind: 'lakara' },
  { key: 'पुरुष', pool: PURUSHA, label: 'पुरुष', kind: 'purusha' },
  { key: 'पद', pool: PADA, label: 'पद', kind: 'pada' },
  { key: 'गण', pool: GANA, label: 'गण', kind: 'gana' },
  { key: 'विकरण', pool: VIKARANA, label: 'विकरण', kind: 'vikarana' },
  { key: 'उपसर्ग', pool: UPASARGA, label: 'उपसर्ग', kind: 'upasarga' },
  { key: 'सनादि', pool: SANADI, label: 'सनादि affix', kind: 'sanadi' },
  { key: 'प्रयोग', pool: PRAYOGA, label: 'प्रयोग', kind: 'prayoga' },
  { key: 'समास', pool: SAMASA, label: 'समास', kind: 'samasa' },
  { key: 'कृत्', pool: [...KRT_DECLINING, ...KRT_INDECLINABLE], label: 'कृत् suffix', kind: 'krt' },
  { key: 'तद्धित', pool: TADDHITA_SUFFIX, label: 'तद्धित suffix', kind: 'taddhita' },
  { key: 'अर्थ', pool: TADDHITA_ARTHA, label: 'तद्धित अर्थ', kind: 'artha' },
  { key: 'सम्बन्धार्थ', pool: SENSE_ROLE, label: 'sense-role', kind: 'sense' },
  { key: 'अव्यय-भेद', pool: AVYAYA_SUBTYPES, label: 'अव्यय type', kind: 'avyaya' },
  { key: 'सर्वनाम-भेद', pool: SARVANAMA_SUBTYPE, label: 'सर्वनाम type', kind: 'sarvanama' },
  { key: 'संख्या-भेद', pool: SANKHYA_SUBTYPE, label: 'संख्या type', kind: 'sankhya' },
  { key: 'स्त्रीप्रत्यय', pool: STRI_PRATYAYA, label: 'स्त्रीप्रत्यय', kind: 'stri' },
  { key: 'सन्धि', pool: SANDHI, label: 'सन्धि', kind: 'sandhi' }
];

/**
 * Build every question this word supports.
 *
 * `words` is the reading's word list, so relation and tap-the-word questions can
 * reach the rest of the line; `glossPool` is the corpus's glosses, for meaning
 * distractors that a learner would actually meet.
 */
export function questionsFor(
  word: any,
  wi: number,
  reading: any,
  usage: UsageData | null,
  glossPool: string[] = []
): Question[] {
  if (!word) return [];
  const out: Question[] = [];
  const form = String(word.form ?? '');
  const sentence = String(reading?.sentence ?? '');
  const clause = clauseOf(sentence, form);
  const words: any[] = reading?.words ?? [];

  const terms: string[] = (word.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term);
  const derived: Record<string, string> = word.derived ?? {};
  const valueOf = (dim: { key: string; pool: string[] }) =>
    terms.find((t) => dim.pool.includes(t)) ?? derived[dim.key] ?? '';

  // ── 1. every schema dimension the word carries ─────────────────────────
  for (const dim of DIMENSIONS) {
    const ans = valueOf(dim);
    if (!ans || !dim.pool.includes(ans)) continue;
    const distract = others(ans, dim.pool, 3);
    if (distract.length < 2) continue;
    out.push({
      ui: 'choice',
      kind: dim.kind,
      prompt: `Which ${dim.label}?`,
      context: clause,
      opts: [ans, ...distract],
      ans,
      sanskritOpts: true
    });
  }

  // ── 2. the paradigm cell — two dimensions in one action ────────────────
  // Point at where the word sits in its own table, rather than answering
  // विभक्ति and वचन as two separate four-button questions. A case system is a
  // coordinate space; this is the only question shaped like one.
  const lemma = deaccent(String(word.lemma ?? ''));
  const vib = valueOf({ key: 'विभक्ति', pool: VIBHAKTI });
  const vac = valueOf({ key: 'वचन', pool: VACANA });
  const pur = valueOf({ key: 'पुरुष', pool: PURUSHA });

  if (lemma && vib && vac && usage?.nounParadigms?.[lemma]) {
    out.push({
      ui: 'cell',
      kind: 'cell-sup',
      prompt: `Where does ${form} sit in the ${lemma} table?`,
      context: clause,
      stem: lemma,
      rows: VIBHAKTI,
      cols: VACANA,
      ansRow: VIBHAKTI.indexOf(vib),
      ansCol: VACANA.indexOf(vac)
    });
  }
  if (lemma && pur && vac && usage?.verbParadigms?.[lemma]) {
    out.push({
      ui: 'cell',
      kind: 'cell-tin',
      prompt: `Where does ${form} sit in the ${lemma} table?`,
      context: clause,
      stem: lemma,
      rows: PURUSHA,
      cols: VACANA,
      ansRow: PURUSHA.indexOf(pur),
      ansCol: VACANA.indexOf(vac)
    });
  }

  // ── 3. produce the form — the coordinates, ask for the word ────────────
  // Distractors are the neighbouring cells of the same paradigm: the forms a
  // learner actually confuses, not random words. No context is shown, because
  // the answer IS the word and the clause contains it.
  const para = lemma ? usage?.nounParadigms?.[lemma] ?? usage?.verbParadigms?.[lemma] : null;
  if (para && vac) {
    const rowVal = vib || pur;
    const cell = `${rowVal}|${vac}`;
    const ans = para[cell];
    if (ans && deaccent(ans) === deaccent(form)) {
      const rivals = [...new Set(Object.values(para))].filter((f) => deaccent(f) !== deaccent(ans));
      const distract = others('', rivals, 3);
      if (distract.length >= 2) {
        out.push({
          ui: 'produce',
          kind: 'produce',
          prompt: `Which form is ${lemma} · ${rowVal} · ${vac}?`,
          context: '',
          opts: [ans, ...distract],
          ans,
          accept: [ans, deaccent(ans), anusvara(ans)],
          sanskritOpts: true
        });
      }
    }
  }

  // ── 4. meaning, both directions ────────────────────────────────────────
  // The plainest question there is, and the deck never asked it. Every word has
  // a gloss, so this is the only type with complete coverage — and the only one
  // a reader can answer before any grammar has been learned.
  const gloss = String(word.gloss ?? '').trim();
  if (gloss) {
    const near = words
      .filter((w: any, k: number) => k !== wi && w.gloss && String(w.gloss).trim() !== gloss)
      .map((w: any) => String(w.gloss).trim());
    const distract = [...new Set([...others('', near, 2), ...others(gloss, glossPool, 3)])]
      .filter((g) => g && g !== gloss)
      .slice(0, 3);
    if (distract.length >= 2) {
      out.push({
        ui: 'choice',
        kind: 'meaning',
        prompt: `What does ${form} mean here?`,
        context: clause,
        opts: [gloss, ...distract],
        ans: gloss,
        sanskritOpts: false
      });
    }
    // …and the reverse, answered by tapping the word in the line
    if (words.filter((w: any) => w.form).length >= 3) {
      out.push({
        ui: 'token',
        kind: 'find-meaning',
        prompt: `Which word means “${gloss}”?`,
        context: '',
        ansWi: wi
      });
    }
  }

  // ── 5. tap the word — कारक and the relation edges ──────────────────────
  // The answer is another word in the sentence, so the sentence is the answer
  // space. You find the agent by looking at the clause, not by recalling a label.
  const karaka = valueOf({ key: 'कारक', pool: KARAKA });
  if (karaka && words.filter((w: any) => w.form).length >= 3) {
    out.push({
      ui: 'token',
      kind: 'find-karaka',
      prompt: `Which word is the ${karaka}?`,
      context: '',
      ansWi: wi
    });
  }
  for (const rel of word.rel ?? []) {
    const target = words[rel.to];
    if (!target || rel.to === wi) continue;
    const label =
      rel.kind === 'विशेषण' ? 'Which word does this qualify?'
      : rel.kind === 'कर्तृसमानाधिकरण' ? 'Which word is its subject?'
      : rel.kind === 'अवयव' ? 'Which compound is this a member of?'
      : 'Which word does this relate to?';
    out.push({
      ui: 'token',
      kind: 'relation',
      prompt: `${form} — ${label}`,
      context: '',
      ansWi: rel.to
    });
  }

  // ── 6. which rule did this ─────────────────────────────────────────────
  // The question the whole reader exists to make answerable, and it was never
  // asked. Distractors are the other sūtras cited nearby, so it is a real
  // discrimination rather than a lookup.
  const cites: string[] = (word.notes ?? []).filter((n: any) => n.cite).map((n: any) => String(n.cite));
  if (cites.length) {
    const ans = cites[Math.floor(Math.random() * cites.length)];
    const near = words
      .flatMap((w: any) => (w.notes ?? []).filter((n: any) => n.cite).map((n: any) => String(n.cite)))
      .filter((c: string) => c !== ans);
    const distract = [...new Set(near)].slice(0, 3);
    if (distract.length >= 2) {
      const role = (word.notes ?? []).find((n: any) => n.cite === ans)?.role ?? '';
      out.push({
        ui: 'choice',
        kind: 'sutra',
        prompt: `Which sūtra gives ${form}${role ? ' — ' + String(role).split('—')[0].trim() : ''}?`,
        context: clause,
        opts: [ans, ...distract],
        ans,
        sanskritOpts: false
      });
    }
  }

  // ── 7. split the join ──────────────────────────────────────────────────
  // The only question that tests sandhi as a process rather than as a label.
  if (Array.isArray(word.split) && word.split.length >= 2) {
    const ans = word.split.join(' + ');
    const wrong = [
      word.split.slice().reverse().join(' + '),
      word.split.join('') === form ? `${form} + ${word.split[0]}` : word.split[0] + ' + ' + form
    ].filter((w) => w !== ans);
    if (wrong.length >= 2) {
      out.push({
        ui: 'choice',
        kind: 'split',
        prompt: `${form} — what does it come apart into?`,
        context: clause,
        opts: [ans, ...wrong.slice(0, 3)],
        ans,
        sanskritOpts: true
      });
    }
  }

  return out;
}

/** Fisher–Yates. The answer must not sit in the same slot twice running. */
export function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** One question from a word's pool, with its options in a fresh order. */
export function drawQuestion(pool: Question[]): Question | null {
  if (!pool.length) return null;
  const q = pool[Math.floor(Math.random() * pool.length)];
  return q.opts ? { ...q, opts: shuffle(q.opts) } : q;
}
