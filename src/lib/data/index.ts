import { parseSutras, numericToDisplayId, displayToNumericId } from "./parser";
import type { Sutra, Commentary } from "./types";

// Caches for loaded data
let sutrasCache: Sutra[] | null = null;
let sutrasById: Map<string, Sutra> | null = null;
let kashikaCache: Record<string, string> | null = null;
let vartikaCache: Record<string, string> | null = null;
let englishShortCache: Record<string, string> | null = null;
let englishFullCache: Record<string, string> | null = null;

/** Fetch JSON from static data folder */
async function fetchJson<T>(filename: string): Promise<T> {
  const response = await fetch(`/data/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to load ${filename}: ${response.statusText}`);
  }
  return response.json();
}

/** Load and parse all sūtras */
export async function loadSutras(): Promise<Sutra[]> {
  if (sutrasCache) return sutrasCache;

  const rawData = await fetchJson<{ data: unknown[] }>("sutras.json");
  sutrasCache = parseSutras(rawData);

  // Build index by ID
  sutrasById = new Map();
  for (const sutra of sutrasCache) {
    sutrasById.set(sutra.id, sutra);
    sutrasById.set(sutra.numericId, sutra);
  }

  return sutrasCache;
}

/** Get a sūtra by ID (either format) */
export async function getSutra(id: string): Promise<Sutra | undefined> {
  await loadSutras();
  return sutrasById?.get(id);
}

/** Get all sūtras in an adhyāya */
export async function getSutrasInAdhyaya(adhyaya: number): Promise<Sutra[]> {
  const sutras = await loadSutras();
  return sutras.filter((s) => s.adhyaya === adhyaya);
}

/** Get all sūtras in a pāda */
export async function getSutrasInPada(
  adhyaya: number,
  pada: number,
): Promise<Sutra[]> {
  const sutras = await loadSutras();
  return sutras.filter((s) => s.adhyaya === adhyaya && s.pada === pada);
}

/** Load Kāśikā commentary */
async function loadKashika(): Promise<Record<string, string>> {
  if (kashikaCache) return kashikaCache;
  kashikaCache = await fetchJson<Record<string, string>>("kashika.json");
  return kashikaCache;
}

/** Load vārttikas */
async function loadVartika(): Promise<Record<string, string>> {
  if (vartikaCache) return vartikaCache;
  vartikaCache = await fetchJson<Record<string, string>>("vartika.json");
  return vartikaCache;
}

/** Load short English translations */
async function loadEnglishShort(): Promise<Record<string, string>> {
  if (englishShortCache) return englishShortCache;
  englishShortCache = await fetchJson<Record<string, string>>(
    "sutrartha_english.json",
  );
  return englishShortCache;
}

/** Load full English translations (Vasu) */
async function loadEnglishFull(): Promise<Record<string, string>> {
  if (englishFullCache) return englishFullCache;
  englishFullCache =
    await fetchJson<Record<string, string>>("vasu_english.json");
  return englishFullCache;
}

/** Get all commentary for a sūtra */
export async function getCommentary(numericId: string): Promise<Commentary> {
  const [kashika, vartika, englishShort, englishFull] = await Promise.all([
    loadKashika(),
    loadVartika(),
    loadEnglishShort(),
    loadEnglishFull(),
  ]);

  return {
    kashika: kashika[numericId],
    vartika: vartika[numericId]?.split("\n\n") || undefined,
    englishShort: englishShort[numericId],
    englishFull: englishFull[numericId],
  };
}

/** Search sūtras by text */
export async function searchSutras(query: string): Promise<Sutra[]> {
  const sutras = await loadSutras();
  const lowerQuery = query.toLowerCase();

  return sutras.filter(
    (s) =>
      s.text.includes(query) ||
      s.textRoman.toLowerCase().includes(lowerQuery) ||
      s.expanded.includes(query) ||
      s.id.includes(query),
  );
}

/** Get sūtras that this one depends on (via anuvṛtti) */
export async function getDependencies(id: string): Promise<Sutra[]> {
  const sutra = await getSutra(id);
  if (!sutra) return [];

  const deps: Sutra[] = [];
  for (const ref of sutra.anuvrtti) {
    const dep = await getSutra(ref.fromId);
    if (dep) deps.push(dep);
  }
  return deps;
}

/** Get sūtras that depend on this one */
export async function getDependents(id: string): Promise<Sutra[]> {
  const sutras = await loadSutras();
  const targetId = id.includes(".") ? id : numericToDisplayId(id);

  return sutras.filter((s) =>
    s.anuvrtti.some((ref) => ref.fromId === targetId),
  );
}

export { numericToDisplayId, displayToNumericId };
export type { Sutra, Commentary, SutraType, AnuvrttiRef } from "./types";
