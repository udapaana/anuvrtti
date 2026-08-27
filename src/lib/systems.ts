/**
 * systems.ts — the grammatical systems as first-class objects.
 *
 * The reader is strong at the atom (a reading) and the cell (a paradigm grid),
 * but the SYSTEM in between — तिङ् as person × number × pada × lakāra, सुप् as
 * case × number, the four compound types and the one test that sorts them — has
 * lived only implicitly, re-narrated ad hoc in each reading's vyākhyā. This makes
 * each system a canonical, reusable object: its shape drawn once, its parts tied
 * to the same schema tags the corpus uses, so a reading can point INTO it and it
 * can light up as the material (or the learner) covers it.
 *
 * A system is a few GROUPS (its axes / families); a group is a row of ITEMS;
 * an item is one schema `term` with a one-line gloss. Because every item is a
 * real tag, it lights from `metTerms` and opens the same glossary concept card
 * the reader's tag chips do — the systems view and the explanation view are one.
 *
 * THE CONTENT IS NOT HERE. Sixty-six one-line glosses and six framing sentences
 * are a grammar book, and a grammar book does not belong in a TypeScript array
 * literal where editing it means editing source. They live in
 * static/data/systems.toml, beside jargon.yaml, which says the same of itself.
 * This file reads that and gives it types.
 */
import { parse } from 'smol-toml';
import rawToml from '../../static/data/systems.toml?raw';

export interface SystemItem {
  /** The schema tag — what a word carries, what the glossary defines. */
  t: string;
  /** One line: what this value is / how to recognise it. */
  en: string;
}

export interface SystemGroup {
  /** The axis or family this row of items forms. */
  axis: string;
  /** Roman label for the axis. */
  roman?: string;
  items: SystemItem[];
}

export interface System {
  id: string;
  /** Devanagari name. */
  name: string;
  roman: string;
  /** Which reader chapter / word-type this system governs. */
  scope: string;
  /** One sentence: the shape of the whole. */
  shape: string;
  groups: SystemGroup[];
}

export const SYSTEMS: System[] = (parse(rawToml) as { systems: System[] }).systems ?? [];

/** All the tags a system references, for quick membership tests. */
export function systemTerms(sys: System): Set<string> {
  const s = new Set<string>();
  for (const g of sys.groups) for (const it of g.items) s.add(it.t);
  return s;
}

/**
 * EVERY system a tag belongs to.
 *
 * A tag is not the property of one word class. वचन is a dimension of both
 * सुप् and तिङ् — नरौ and गच्छतः are both द्विवचन — so three of the sixty-odd
 * tags here sit in two systems at once, and the schema has to say so rather
 * than pretend each tag has one home.
 */
export function systemsForTerm(term: string): System[] {
  return SYSTEMS.filter((sys) => sys.groups.some((g) => g.items.some((it) => it.t === term)));
}

/**
 * The system a tag belongs to ON THIS WORD.
 *
 * Returning the first match was wrong for exactly the tags that matter:
 * पादाभ्याम् is a noun in करण · तृतीया · द्विवचन, and asking about its द्विवचन
 * opened the VERB's card, because तिङ् happens to be declared first and also
 * has a वचन axis. The word's other tags settle it — तृतीया and करण are सुप्
 * territory, लकार and पुरुष are तिङ् — so `context` is the rest of what the
 * word carries, and the system sharing most of it wins.
 *
 * With nothing to go on the answer is undefined, not a guess: a tag with no
 * disambiguating company is genuinely ambiguous, and the caller can say so.
 */
export function systemForTerm(term: string, context: string[] = []): System | undefined {
  const found = systemsForTerm(term);
  if (found.length <= 1) return found[0];

  const others = context.filter((t) => t !== term);
  const score = (sys: System) => {
    const own = systemTerms(sys);
    return others.filter((t) => own.has(t)).length;
  };

  const ranked = found
    .map((sys) => ({ sys, n: score(sys) }))
    .sort((a, b) => b.n - a.n);
  // a tie is still ambiguous — two systems claiming it equally is no answer
  if (!ranked[0].n || ranked[0].n === ranked[1]?.n) return undefined;
  return ranked[0].sys;
}
