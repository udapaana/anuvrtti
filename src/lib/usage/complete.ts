/**
 * complete.ts — "what does this word still owe?", in one place.
 *
 * This test had started to multiply. check-complete owned it, check-coverage
 * consumed it through `--json` (deliberately, so the ratchet could not guard a
 * number nobody else computed), and then exemplars.ts reimplemented it — and
 * got it wrong within an hour, by demanding a विभक्ति of क्त्वा and तुमुन्,
 * which are अव्यय by 1.1.40 and take nothing further. The worklist duly told an
 * author to go and add a case to an indeclinable.
 *
 * A rule with three copies has three behaviours. So it lives here, and every
 * caller asks the same question of the same function.
 */
import { krtDeclines, type WordType } from './schema';

export type AnnotatedWord = {
  form: string;
  lemma?: string;
  notes?: Array<{ term?: string }>;
  derived?: Record<string, string>;
};

/** The `term` tags an author wrote on this word. */
export function termsOf(w: AnnotatedWord): Set<string> {
  return new Set((w.notes ?? []).filter((n) => n.term).map((n) => n.term as string));
}

/**
 * Everything known about the word, authored or derived — the set to TYPE it by.
 *
 * A type marker is a tag like any other and the build derives plenty of them:
 * आगच्छति carries the single note [गम्] and the तिङन्त index works out that it
 * is लट्, which IS the marker for तिङन्त. Typing from `notes` alone throws that
 * away and counts the word as untyped.
 */
export function typingTermsOf(w: AnnotatedWord): Set<string> {
  return new Set<string>([...termsOf(w), ...(Object.values(w.derived ?? {}) as string[])]);
}

/**
 * Which required dimensions this word still owes.
 *
 * `conditional` dimensions never count: गच्छति has no उपसर्ग, and demanding one
 * is not a stricter standard but an impossible one. A derived value satisfies a
 * dimension exactly as an authored one does — the reader cannot tell them apart
 * and neither should the count.
 */
export function missingFor(type: WordType, w: AnnotatedWord, terms: Set<string>): string[] {
  const miss: string[] = [];
  const derived = w.derived ?? {};

  for (const d of type.dimensions) {
    if (d.source === 'conditional') continue;

    // A कृदन्त owes विभक्ति only if its suffix declines. क्त्वा and तुमुन् are
    // अव्यय by 1.1.40 and take nothing further.
    if (type.id === 'kridanta' && (d.name === 'विभक्ति' || d.name === 'वचन')
        && !krtDeclines(terms)) continue;

    if (d.name === 'lemma') {
      if (!w.lemma) miss.push('lemma');
      continue;
    }
    const authored = d.values.some((v) => terms.has(v));
    if (authored || d.name in derived) continue;
    miss.push(d.name);
  }
  return miss;
}

/** Does this word carry this value, whether the author wrote it or the build derived it? */
export function carries(w: AnnotatedWord, terms: Set<string>, dimension: string, value: string): boolean {
  return terms.has(value) || (w.derived ?? {})[dimension] === value;
}
