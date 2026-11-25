export const ssr = false;

import type { Derivation } from './types';

export type Rule = {
  n: number;
  id: string;
  title: string;
  chapter: string;
  section: string;
  kind: 'rule' | 'appendix';
  pages: { start: number; end: number };
  images: string[];
  scan: 'verified' | 'known-bad' | 'unchecked';
  topics: string[];
  words: string[];
  paniniRefs: { display: string; sutraId: string | null }[];
  crossRefs: number[];
  citedBy: number[];
  derivations: Derivation[];
  body: string;
};

export type Chapter = { title: string; first: number; last: number; count: number };

let cache: {
  chapters: Chapter[];
  rules: Rule[];
  coreCount: number;
  knownSutraIds: string[];
} | null = null;

export async function load({ url }) {
  if (!cache) {
    const resp = await fetch('/data/dukrnkarane.json');
    if (!resp.ok) throw new Error(`dukrnkarane.json: ${resp.status}`);
    cache = await resp.json();
  }

  /*
    With no section asked for, the grammar opens on its contents; a section
    that does not exist says so over the contents, rather than quietly
    showing something else.
  */
  const raw = url.searchParams.get('s');
  const rules = cache!.rules;
  const current = raw === null ? null : (rules.find((r) => r.n === Number(raw)) ?? null);

  return {
    chapters: cache!.chapters,
    rules,
    current,
    missing: raw !== null && current === null ? raw : null,
    coreCount: cache!.coreCount,
    knownSutraIds: cache!.knownSutraIds ?? [],
  };
}
