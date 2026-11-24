/**
 * textAsReadings.ts — a part of a whole text, read as graded readings.
 *
 * A whole text is built by scripts/build-texts.ts: an index (meta + parts) and
 * one file per part, whose sections hold words, each word one or more padas,
 * every pada analysed by vidyut (or settled by the editor) and glossed from
 * Monier-Williams. The graded reader reads a different shape — chapters of
 * readings, each a list of annotated words and the tokens of its line — and it
 * is the reader's presentation a text is now shown in. This module is the one
 * place the two shapes meet: a section becomes a reading, a pada becomes a
 * reader word, and the part's paradigm tables become each word's own table.
 *
 * Nothing here is new grammar. Every tag, gloss and table comes from the part
 * file as built; what this adds is only where each one goes:
 *
 *   section            → a reading (id = the section id, label = shortId)
 *   pada               → a word: form, lemma, gloss (the head sense)
 *   pada.terms         → the editor's own (`pick`, `author`) as authored notes;
 *                        vidyut's as `derived`, keyed by the schema dimension
 *                        they fill — the reader draws those dashed, as the text
 *                        page drew vidyut's tags
 *   pada.para          → `paradigm`, the part's table laid out as the rail's
 *                        grid with the word's cell lit
 *   word (several padas) → the saṃhitā group the padas were written as, so
 *                        padaccheda off shows the word as printed and on shows
 *                        each pada as its own token
 *   lines              → punctuation (। within a verse, ॥ at its close) and a
 *                        line break between them
 *
 * What a reader word has no slot for — the dictionary entry, the notes, which
 * analysis it is — rides along as `text`, for the rail to show as the text
 * page did.
 */

import {
  VIBHAKTI, VACANA, LINGA, PURUSHA, LAKARA, PADA, GANA, PRAYOGA, SAMASA, SANADI, UPASARGA
} from '$lib/usage/schema';
import type { ResolvedParadigm } from './wordParadigm';

// ── the built shape (scripts/build-texts.ts) ────────────────────────────────
export type TextPada = {
  form: string;
  lemma: string;
  a: string;
  terms: string[];
  member?: boolean;
  gloss: string | null;
  glossBy: 'author' | 'mw' | null;
  mw: { key: string; url: string; lex: string; senses: string[] } | null;
  note?: string;
  source: 'vidyut' | 'pick' | 'author' | 'none';
  alts: number;
  para?: { key: string; row: number; col: number };
};
/** `printed`: the source's own reading of a word corrections.yaml put right (`surface` is the corrected word) */
export type TextWord = { surface: string; padas: TextPada[]; note?: string; printed?: string; printedNote?: string };
/** `translation`: a published translation of the section, where the text has one (Hume's Kaṭha) —
 *  modernized where `translationOriginal` holds the translator's own wording */
export type TextSection = { id: string; kind: string; lines: number[][]; words: TextWord[]; text: string[]; translation?: string; translationOriginal?: string; translationWith?: { id: string; above: boolean }; translationSpeaker?: string };
export type TextTable = {
  stem: string;
  lakara: string | null;
  kind: string;
  colHeads: string[];
  rowHeads: string[];
  rows: string[][];
};
export type TextPart = { sections: TextSection[]; paradigms: Record<string, TextTable> };
export type PartMeta = { id: string; title?: string; file: string; sections: string[]; words: number };
export type TextMeta = {
  id: string;
  title: string;
  title_en: string;
  work: string;
  place?: string;
  source: Record<string, string>;
  credit: string;
  parts: PartMeta[];
};

/** What the rail shows of a pada beyond a reader word's own fields. */
export type TextExtra = {
  /** the section's id, for the provenance line */
  section: string;
  member: boolean;
  /** the whole gloss: the editor's, or Monier-Williams' senses joined */
  gloss: string | null;
  glossBy: 'author' | 'mw' | null;
  mw: TextPada['mw'];
  source: TextPada['source'];
  alts: number;
  /** the pada's own note and the note on the word it is part of */
  note: string | null;
  wordNote: string | null;
  /** the written word this pada belongs to */
  surface: string;
  /** the source's own reading of that word, where it was a slip put right; and why */
  printed: string | null;
  printedNote: string | null;
};

export const partLabel = (p: PartMeta) => p.title ?? (p.id === 'all' ? 'the whole text' : `part ${p.id}`);

/*
  The number printed beside a verse: the section's place within its part, not
  its whole id, which outgrows the margin. The part names the rest.
  Mahābhārata adi-1-1-1 (in the Ādiparvan) → 1.1, chapter and verse;
  Bhāgavata 11.11.29 (in skandha 11) → 11.29; Pañcatantra 1.21+3 (in tantra 1)
  → 21+3. The whole id stays in the picker, the links and the aria-label.
*/
export function shortId(secId: string, partId: string | undefined): string {
  const named = secId.match(/^[A-Za-z]+-\d+-(.+)$/); // parvan-number-chapter-verse
  if (named) return named[1].replace(/-/g, '.');
  const head = partId?.match(/^\d+/)?.[0];
  return head && secId.startsWith(head + '.') && secId.length > head.length + 1 ? secId.slice(head.length + 1) : secId;
}

/** The head carries one sense; the dictionary block has the rest. */
export const headGloss = (p: TextPada) =>
  !p.gloss ? '' : p.glossBy === 'author' ? p.gloss : p.gloss.split(/;\s/)[0];

/* The schema dimension each tag fills — the keys the reader's `derived` map
   and the quiz read (`derived['विभक्ति']`). A tag no dimension holds keeps
   its own name as its key. */
const DIMS: [string, readonly string[]][] = [
  ['विभक्ति', VIBHAKTI], ['वचन', VACANA], ['लिङ्ग', LINGA], ['पुरुष', PURUSHA],
  ['लकार', LAKARA], ['पद', PADA], ['गण', GANA], ['प्रयोग', PRAYOGA], ['समास', SAMASA],
  ['सनादि', SANADI], ['उपसर्ग', UPASARGA]
];
function derivedOf(terms: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const t of terms) {
    const dim = DIMS.find(([k, pool]) => pool.includes(t) && !(k in out))?.[0];
    out[dim ?? t] = t;
  }
  return out;
}

/** A part's table, laid out as the rail's grid with this pada's cell lit. */
function paradigmOf(p: TextPada, tables: Record<string, TextTable>): ResolvedParadigm | null {
  const t = p.para ? tables[p.para.key] : undefined;
  if (!t || !p.para) return null;
  return {
    stem: t.stem,
    lakara: t.lakara,
    kind: t.kind,
    grid: {
      cols: t.colHeads.length,
      colHeads: t.colHeads,
      rows: t.rowHeads.map((label, i) => ({ label, cells: t.rows[i] ?? [] }))
    },
    row: p.para.row,
    col: p.para.col
  };
}

export type TextReading = {
  id: string;
  chapter: string;
  /** printed above the section, where a graded reading prints its number */
  label: string;
  kind: string;
  /** high enough that the reader shows the saṃhitā (it does from tier 80) */
  segment: number;
  teaches: string;
  sentence: string;
  translation: string;
  words: any[];
  /** the tokens, built here rather than split from `sentence` */
  tokens: any[];
  samhita: { text: string; from: number[]; ti?: number; br?: boolean }[];
};

/** One section as a reading. */
export function sectionAsReading(
  sec: TextSection,
  partId: string,
  tables: Record<string, TextTable>
): TextReading {
  const words: any[] = [];
  const tokens: any[] = [];
  const samhita: TextReading['samhita'] = [];
  const said: string[] = [];
  const punct = (text: string, br = false) => {
    const ti = tokens.length;
    tokens.push({ ti, text, wi: -1, gloss: '', isWord: false, focal: false, split: null, ...(br ? { br } : {}) });
    samhita.push({ text, from: [ti], ...(br ? { br } : {}) });
  };
  sec.lines.forEach((line, li) => {
    const forms: string[] = [];
    for (const wIdx of line) {
      const w = sec.words[wIdx];
      if (!w) continue;
      // no pada: punctuation the edition printed, or its mark for a verse
      if (!w.padas.length) {
        punct(w.surface);
        continue;
      }
      const from: number[] = [];
      for (const p of w.padas) {
        const wi = words.length;
        const vidyut = p.source === 'vidyut';
        const extra: TextExtra = {
          section: sec.id,
          member: !!p.member,
          gloss: p.gloss,
          glossBy: p.glossBy,
          mw: p.mw,
          source: p.source,
          alts: p.alts,
          note: p.note ?? null,
          wordNote: w.note ?? null,
          surface: w.surface,
          printed: w.printed ?? null,
          printedNote: w.printedNote ?? null
        };
        words.push({
          form: p.form,
          lemma: p.lemma ?? '',
          gloss: headGloss(p),
          notes: vidyut ? [] : p.terms.map((term) => ({ term })),
          derived: vidyut ? derivedOf(p.terms) : {},
          paradigm: paradigmOf(p, tables),
          text: extra
        });
        const ti = tokens.length;
        tokens.push({
          ti,
          // a compound member hangs on its hyphen to the next member
          text: p.form + (p.member ? '-' : ''),
          wi,
          gloss: headGloss(p),
          isWord: true,
          focal: false,
          split: null
        });
        from.push(ti);
        forms.push(p.form);
      }
      // a tap on the written word opens its first inflected pada, not a bare
      // compound member
      const firstInflected = w.padas.findIndex((p) => !p.member);
      if (from.length) samhita.push({ text: w.surface, from, ti: from[Math.max(0, firstInflected)] });
    }
    const last = li === sec.lines.length - 1;
    punct(sec.kind === 'verse' && last ? '॥' : '।');
    if (!last) punct('', true);
    said.push(forms.join(' ') + (sec.kind === 'verse' && last ? ' ॥' : ' ।'));
  });
  return {
    id: sec.id,
    chapter: partId,
    label: shortId(sec.id, partId),
    kind: sec.kind,
    segment: 1000,
    teaches: '',
    sentence: said.join(' '),
    translation: sec.translation ?? '',
    translationOriginal: sec.translationOriginal ?? '',
    // rendered by the translator together with an earlier verse
    translationSpeaker: sec.translationSpeaker ?? '',
    translationWith: sec.translationWith ? (sec.translationWith.above ? 'translated with the verse above' : `translated with ${shortId(sec.translationWith.id, partId)}`) : '',
    words,
    tokens,
    samhita
  };
}

/**
 * A part as the reader's chapter, plus the paradigm data the quiz reads.
 *
 * The quiz asks for a cell of the word's table by lemma (usage.json's
 * `nounParadigms[lemma]`, `verbParadigms[root][लकार]`); a text's tables are
 * keyed by stem and gender instead, so they are laid out under the lemmas that
 * use them. First table wins for a lemma used in two genders — the quiz only
 * asks which cell, and a form question checks the cell is the word.
 */
export function partAsChapter(meta: TextMeta, part: PartMeta, data: TextPart) {
  const readings = data.sections.map((s) => sectionAsReading(s, part.id, data.paradigms));
  const nounParadigms: Record<string, Record<string, string>> = {};
  const verbParadigms: Record<string, Record<string, Record<string, string>>> = {};
  for (const s of data.sections)
    for (const w of s.words)
      for (const p of w.padas) {
        const t = p.para ? data.paradigms[p.para.key] : undefined;
        if (!t || !p.lemma) continue;
        const cells: Record<string, string> = {};
        t.rowHeads.forEach((r, i) => t.colHeads.forEach((c, j) => (cells[`${r}|${c}`] = t.rows[i]?.[j] ?? '')));
        if (t.lakara) {
          const lak = t.lakara + (p.terms.includes('आत्मनेपद') ? '·आत्मनेपद' : '');
          (verbParadigms[p.lemma] ??= {})[lak] ??= cells;
        } else nounParadigms[p.lemma] ??= cells;
      }
  return {
    chapter: {
      id: part.id,
      // the reader splits a title at ' — ' into its Devanagari and its English
      title: part.title ? `${part.title} — part ${part.id}` : `${meta.title} — ${meta.title_en}`,
      readings
    },
    readings,
    usage: { nounParadigms, verbParadigms }
  };
}
