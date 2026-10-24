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
import { krtDeclines, SENSE_ROLE, type WordType } from './schema';

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
 * Whether a word of this type, carrying these tags, owes this dimension at all.
 *
 * One definition, used by missingFor (what a word still owes) and by the
 * coverage ratchet (how full a dimension is): when they disagreed, twenty
 * vocatives — which owe no कारक — lowered the सुबन्त कारक floor as if a
 * derivation had broken.
 */
export function exemptFrom(type: WordType, dim: string, terms: Set<string>, rel: Array<{ kind?: string }> = []): boolean {
  // A कृदन्त owes विभक्ति, वचन and लिङ्ग only if its suffix declines. क्त्वा,
  // तुमुन्, ल्यप् and णमुल् are अव्यय by 1.1.40 and take no declension at all —
  // an indeclinable has no gender any more than it has a case.
  if (type.id === 'kridanta' && (dim === 'विभक्ति' || dim === 'वचन' || dim === 'लिङ्ग')
      && !krtDeclines(terms)) return true;

  // A vocative takes no कारक. सम्बोधन is address, not a participant role —
  // प्रथमा-in-address (2.3.47), outside the कारक system (1.4.23) — so a word in
  // it owes no कारक any more than a subject owes a case it does not fill.
  if (dim === 'कारक' && terms.has('सम्बोधन')) return true;

  // Nor does a word whose case comes from MEANING. हेतु (2.3.23), सहार्थ
  // (2.3.19), निर्धारण (2.3.41), सति सप्तमी (2.3.37) and the rest are
  // उपपद/अर्थ cases, outside the कारक system — पुत्रेण सह is तृतीया because of
  // सह, not because पुत्र plays a part in the action. The build already refuses
  // to infer a कारक for these (build-readings, VIB_ROLE); demanding one here
  // asked for a role the grammar says the word does not have.
  if (dim === 'कारक' && SENSE_ROLE.some((x) => terms.has(x))) return true;

  // A predicate (विधेय) is said OF its subject and plays no part in the action:
  // भ्रातरौ in एतौ मम भ्रातरौ has the subject's case and no role of its own.
  if (dim === 'कारक' && rel.some((r) => r.kind === 'विधेय')) return true;
  return false;
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

    if (exemptFrom(type, d.name, terms, (w as any).rel ?? [])) continue;

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
