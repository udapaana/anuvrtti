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

  const requested = Number(url.searchParams.get('s'));
  const rules = cache!.rules;
  const current =
    rules.find((r) => r.n === requested) ?? rules.find((r) => r.n === 19) ?? rules[0];

  return {
    chapters: cache!.chapters,
    rules,
    current,
    coreCount: cache!.coreCount,
    knownSutraIds: cache!.knownSutraIds ?? [],
  };
}
