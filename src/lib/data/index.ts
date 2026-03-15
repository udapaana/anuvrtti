import { parse as parseToml } from 'smol-toml';
import { parseSutras, numericToDisplayId, displayToNumericId } from "./parser";
import type { Sutra, Commentary, LayeredSutraCommentary } from "./types";

// Caches for loaded data
let sutrasCache: Sutra[] | null = null;
let sutrasById: Map<string, Sutra> | null = null;
let kashikaCache: Record<string, string> | null = null;
let vartikaCache: Record<string, string> | null = null;
let englishShortCache: Record<string, string> | null = null;
let englishFullCache: Record<string, string> | null = null;
let englishRewrittenCache: Record<string, string> | null = null;
let kashikaEnglishCache: Record<string, string> | null = null;
// Per-sūtra commentary cache (keyed by numericId)
const layeredCommentaryCache = new Map<string, LayeredSutraCommentary>();

/** Convert a numeric sūtra ID to its TOML file path e.g. "11001" → "/data/commentary/1/1/1.toml" */
function commentaryPath(numericId: string): string {
  const a = numericId[0];
  const p = numericId[1];
  const s = parseInt(numericId.slice(2));
  return `/data/commentary/${a}/${p}/${s}.toml`;
}

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

/** Load rewritten English translations (cleaner Vasu rewrites) */
async function loadEnglishRewritten(): Promise<Record<string, string>> {
  if (englishRewrittenCache) return englishRewrittenCache;
  englishRewrittenCache = await fetchJson<Record<string, string>>(
    "vasu_rewritten.json",
  );
  return englishRewrittenCache;
}

/** Load Kāśikā English translations (concise Zinsser-style) */
async function loadKashikaEnglish(): Promise<Record<string, string>> {
  if (kashikaEnglishCache) return kashikaEnglishCache;
  kashikaEnglishCache = await fetchJson<Record<string, string>>(
    "kashika_english.json",
  );
  return kashikaEnglishCache;
}

/** Load layered commentary for a single sūtra from its TOML file */
async function loadLayeredCommentaryForSutra(
  numericId: string,
): Promise<LayeredSutraCommentary | undefined> {
  if (layeredCommentaryCache.has(numericId)) {
    return layeredCommentaryCache.get(numericId);
  }
  try {
    const res = await fetch(commentaryPath(numericId));
    if (!res.ok) return undefined;
    const toml = parseToml(await res.text()) as unknown as {
      en: { simple: string; standard: string; advanced: string };
    };
    const entry: LayeredSutraCommentary = { en: toml.en };
    layeredCommentaryCache.set(numericId, entry);
    return entry;
  } catch {
    return undefined;
  }
}

/** Strip @deva[...] markers from text, keeping just the content */
function stripDevaMarkers(text: string | undefined): string | undefined {
  if (!text) return text;
  return text.replace(/@deva\[([^\]]*)\]/g, "$1");
}

/** Get all commentary for a sūtra */
export async function getCommentary(numericId: string): Promise<Commentary> {
  const [
    kashika,
    kashikaEnglish,
    vartika,
    englishShort,
    englishFull,
    englishRewritten,
  ] = await Promise.all([
    loadKashika(),
    loadKashikaEnglish(),
    loadVartika(),
    loadEnglishShort(),
    loadEnglishFull(),
    loadEnglishRewritten(),
  ]);

  // Use rewritten translation if available, otherwise fall back to original Vasu
  const fullTranslation = englishRewritten[numericId] || englishFull[numericId];

  return {
    kashika: kashika[numericId],
    kashikaEnglish: kashikaEnglish[numericId],
    vartika: vartika[numericId]?.split("\n\n") || undefined,
    englishShort: stripDevaMarkers(englishShort[numericId]),
    englishFull: stripDevaMarkers(fullTranslation),
  };
}

/** Get layered commentary for a sūtra (if available) */
export async function getLayeredCommentary(
  numericId: string,
): Promise<LayeredSutraCommentary | undefined> {
  return loadLayeredCommentaryForSutra(numericId);
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

/** Get the adjacent sutra by offset (-1 for previous, +1 for next) */
export async function getAdjacentSutra(
  id: string,
  offset: number,
): Promise<Sutra | undefined> {
  const sutras = await loadSutras();
  const index = sutras.findIndex((s) => s.id === id || s.numericId === id);
  if (index < 0) return undefined;
  const target = index + offset;
  if (target < 0 || target >= sutras.length) return undefined;
  return sutras[target];
}

export { numericToDisplayId, displayToNumericId };
export type {
  Sutra,
  Commentary,
  SutraType,
  AnuvrttiRef,
  LayeredSutraCommentary,
  CommentaryDepth,
} from "./types";
