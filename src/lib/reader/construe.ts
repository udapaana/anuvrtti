/**
 * construe.ts — the questions a sentence is construed by.
 *
 * The traditional way to read a Sanskrit sentence (anvaya) is not to reorder
 * it but to ask. Find the action, the क्रिया; then ask its questions — कः?
 * who, किम्? what, केन? with what — and each answer is a word in the case
 * that question takes. Each of those words asks its own: कीदृशः? what kind,
 * answered by a word agreeing with it; कस्य? whose, by a genitive. The prose
 * order falls out of the answers.
 *
 * The reader does the asking and answering (Construe.svelte). This module
 * holds the questions, and the ONE thing the app checks: whether a word's
 * ending can answer the question it was given. Never whether it is the right
 * word — that is the reader's.
 */
import { compare, type Features } from './agreement';

export type RoleId = 'kriya' | 'kah' | 'kim' | 'kena' | 'kasmai' | 'kutah' | 'kutra' | 'kasya' | 'kidrsah' | 'krtva' | 'anyat';

export type Role = {
  id: RoleId;
  /** the question, as a reader is taught to ask it */
  q: string;
  /** what it asks for, in English */
  en: string;
  /** the cases that can answer it (none for the verb, the qualifier, a particle) */
  cases?: string[];
  /** answered by a word that hangs on another construed word, not on the verb */
  attaches?: boolean;
};

export const ROLES: Role[] = [
  { id: 'kriya', q: 'क्रिया', en: 'the action' },
  // a passive verb's agent is in the तृतीया and its object in the प्रथमा
  { id: 'kah', q: 'कः', en: 'who does it', cases: ['प्रथमा', 'तृतीया'] },
  { id: 'kim', q: 'किम्', en: 'what is done', cases: ['द्वितीया', 'प्रथमा'] },
  { id: 'kena', q: 'केन', en: 'with what, by what', cases: ['तृतीया'] },
  { id: 'kasmai', q: 'कस्मै', en: 'for whom, to whom', cases: ['चतुर्थी'] },
  { id: 'kutah', q: 'कुतः', en: 'from where', cases: ['पञ्चमी'] },
  { id: 'kutra', q: 'कुत्र', en: 'where, when', cases: ['सप्तमी'] },
  { id: 'kasya', q: 'कस्य', en: 'whose — of another word', cases: ['षष्ठी'], attaches: true },
  { id: 'kidrsah', q: 'कीदृशः', en: 'what kind — qualifies another word', attaches: true },
  { id: 'krtva', q: 'किं कृत्वा', en: 'having done what, first' },
  { id: 'anyat', q: 'अव्ययम्', en: 'a particle, as it stands' }
];
export const ROLE = Object.fromEntries(ROLES.map((r) => [r.id, r])) as Record<RoleId, Role>;

/** A word's construal: the question it answers, and for कस्य/कीदृशः, the word it hangs on. */
export type Assignment = { role: RoleId; head?: number };

const ABSOLUTIVES = ['क्त्वा', 'ल्यप्'];

/**
 * What the ending says about a role — a fact, or nothing. Returns a sentence
 * when the word's ending cannot answer the question; null when it can, or
 * when too little is known of the word to say.
 */
export function checkRole(role: RoleId, f: Features, tags: Set<string>, form: string, headFeats?: Features): string | null {
  const r = ROLE[role];
  if (form.endsWith('-')) return 'This is a compound’s first part: it has no ending of its own. The whole compound answers together; give the role to its last part.';
  if (role === 'kriya') {
    if (f.finite) return null;
    if (f.case) return `A क्रिया has a personal ending; this word has a case ending (${f.case}).`;
    return null; // a participle or an understood verb: the reader's call
  }
  if (role === 'krtva') {
    return ABSOLUTIVES.some((a) => tags.has(a)) ? null : 'किं कृत्वा is answered by an absolutive, in -त्वा or -य; this word is not one.';
  }
  if (role === 'anyat') return f.case || f.finite ? 'This word inflects; an indeclinable does not.' : null;
  if (f.finite) return `${r.q}? is answered by a noun or pronoun; this word is a verb.`;
  if (role === 'kidrsah') {
    if (!headFeats) return null;
    const v = compare(f, headFeats);
    if (v.agree === false) return `A qualifier agrees with its word in case, number and gender. ${v.differences.map(([w, a, b]) => `${w}: ${a} / ${b}`).join('; ')}.`;
    return null;
  }
  if (r.cases && f.case && !r.cases.includes(f.case)) {
    return `${r.q}? is answered by ${r.cases.join(' or ')}; this word is ${f.case}.`;
  }
  return null;
}

/*
  The reader's construal, read off in prose order: each word with what hangs
  on it before it (whose, what kind), the agent first, then what is done and
  the rest, the absolutives, and the verb last — the order a commentator's
  anvaya takes.
*/
const ORDER: RoleId[] = ['kah', 'kim', 'kena', 'kasmai', 'kutah', 'kutra', 'anyat', 'krtva', 'kriya'];

export function anvaya(assigned: Map<number, Assignment>, position: (ti: number) => number): number[] {
  const out: number[] = [];
  const placed = new Set<number>();
  const dependents = (head: number) =>
    [...assigned.entries()]
      .filter(([, a]) => a.head === head)
      .sort((a, b) => position(a[0]) - position(b[0]));
  const put = (ti: number) => {
    if (placed.has(ti)) return;
    placed.add(ti);
    // whose comes first, then what kind, then the word itself
    for (const [d, a] of dependents(ti)) if (a.role === 'kasya') put(d);
    for (const [d, a] of dependents(ti)) if (a.role === 'kidrsah') put(d);
    out.push(ti);
  };
  for (const role of ORDER) {
    const ws = [...assigned.entries()].filter(([, a]) => a.role === role).sort((a, b) => position(a[0]) - position(b[0]));
    for (const [ti] of ws) put(ti);
  }
  // anything hanging on a word that was never construed itself
  for (const [ti] of assigned) put(ti);
  return out;
}
