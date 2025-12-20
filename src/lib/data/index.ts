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

/** Strip @deva[...] markers from text, keeping just the content */
function stripDevaMarkers(text: string | undefined): string | undefined {
  if (!text) return text;
  return text.replace(/@deva\[([^\]]*)\]/g, "$1");
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
    englishShort: stripDevaMarkers(englishShort[numericId]),
    englishFull: stripDevaMarkers(englishFull[numericId]),
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

/** Get leaf nodes - sutras that don't contribute anuvrtti to any later sutra */
export async function getLeafSutras(): Promise<Sutra[]> {
  const sutras = await loadSutras();

  // Build set of all sutra IDs that are referenced by others
  const referencedIds = new Set<string>();
  for (const s of sutras) {
    for (const ref of s.anuvrtti) {
      referencedIds.add(ref.fromId);
    }
  }

  // Leaf nodes are those not referenced by anyone
  return sutras.filter((s) => !referencedIds.has(s.id));
}

/** Get root nodes - sutras that don't inherit from any other sutra */
export async function getRootSutras(): Promise<Sutra[]> {
  const sutras = await loadSutras();
  return sutras.filter((s) => s.anuvrtti.length === 0);
}

/** Get sutras ranked by number of dependents (most connected first) */
export async function getMostConnectedSutras(): Promise<
  { sutra: Sutra; dependentCount: number }[]
> {
  const sutras = await loadSutras();

  // Count how many sutras reference each sutra
  const dependentCounts = new Map<string, number>();
  for (const s of sutras) {
    for (const ref of s.anuvrtti) {
      dependentCounts.set(
        ref.fromId,
        (dependentCounts.get(ref.fromId) || 0) + 1,
      );
    }
  }

  // Build result with counts
  const result: { sutra: Sutra; dependentCount: number }[] = [];
  for (const s of sutras) {
    const count = dependentCounts.get(s.id) || 0;
    if (count > 0) {
      result.push({ sutra: s, dependentCount: count });
    }
  }

  // Sort by count descending
  result.sort((a, b) => b.dependentCount - a.dependentCount);
  return result;
}

/** Get all sutras under a specific adhikara */
export async function getSutrasUnderAdhikara(
  adhikaraId: string,
): Promise<Sutra[]> {
  const sutras = await loadSutras();
  return sutras.filter((s) => s.adhikara.includes(adhikaraId));
}

/** Get all adhikaras with their scope */
export async function getAdhikaras(): Promise<
  { sutra: Sutra; scopeCount: number }[]
> {
  const sutras = await loadSutras();
  const adhikaraSutras = sutras.filter((s) => s.type === "adhikara");

  const result: { sutra: Sutra; scopeCount: number }[] = [];
  for (const adhikara of adhikaraSutras) {
    const scopeCount = sutras.filter((s) =>
      s.adhikara.includes(adhikara.id),
    ).length;
    result.push({ sutra: adhikara, scopeCount });
  }

  return result;
}

/** Search sutras by pada (word) */
export async function searchByPada(pada: string): Promise<Sutra[]> {
  const sutras = await loadSutras();
  return sutras.filter(
    (s) =>
      s.padaCcheda.some((p) => p.word.includes(pada)) ||
      s.text.includes(pada) ||
      s.expanded.includes(pada),
  );
}

export { numericToDisplayId, displayToNumericId };
export type { Sutra, Commentary, SutraType, AnuvrttiRef } from "./types";
