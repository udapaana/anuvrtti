import { parseSutras } from '$lib/data/parser';
import type { RawSutra, Sutra } from '$lib/data/types';

export async function load({ fetch }) {
  const response = await fetch('/data/sutras.json');
  const rawData: { data: RawSutra[] } = await response.json();
  const sutras = parseSutras(rawData);

  return {
    sutras
  };
}
