import { parse as parseToml } from 'smol-toml';
import { dataUrl } from '$lib/dataUrl';
import { numericToDisplayId, displayToNumericId } from "./parser";
import type { Sutra, Commentary, LayeredSutraCommentary } from "./types";

// Caches for loaded data
let sutrasCache: Sutra[] | null = null;
let sutrasById: Map<string, Sutra> | null = null;
// Per-sūtra commentary cache (keyed by numericId)
const layeredCommentaryCache = new Map<string, LayeredSutraCommentary>();

/** Convert a numeric sūtra ID to its TOML file path e.g. "11001" → "/data/commentary/1/1/1.toml" */
function commentaryPath(numericId: string): string {
  const a = numericId[0];
  const p = numericId[1];
  const s = parseInt(numericId.slice(2));
  return `/data/commentary/${a}/${p}/${s}.toml`;
}

/**
 * Fetch JSON from static data folder.
 *
 * Through dataUrl, so each deploy gets its own URL and the browser may cache
 * these normally — sutras.json is 2.82 MB and re-downloading it on every visit
 * to /ref would undo the point of moving it out of the bundle.
 */
async function fetchJson<T>(filename: string): Promise<T> {
  const response = await fetch(dataUrl(`/data/${filename}`));
  if (!response.ok) {
    throw new Error(`Failed to load ${filename}: ${response.statusText}`);
  }
  return response.json();
}

/*
  THE SŪTRAS ARE FETCHED, NOT BUNDLED.

  src/lib/data/sutras/*.yaml is still the source — vidvat's records, copied
  verbatim (sync = cp). This module used to reach them with

    import.meta.glob('./sutras/*.yaml', { query: '?raw', eager: true })

  which inlines all 6.9 MB into the JS bundle. Vite put it in one chunk that
  /ref, /ref/[id] and /ref/jargon each pulled: 6.99 MB of JavaScript to parse
  before either page could draw a line of Sanskrit, and 25 MB transferred for
  /ref/1.1.1, which took 2.7s to first paint on localhost — where there is no
  network to blame.

  Most of it was never displayed from here. Every record carries `kashika`, the
  full Kāśikā commentary and the largest field on it, and parseVidvatSutra
  keeps none of it: the commentary a sūtra page shows is fetched per sūtra from
  static/data/commentary/*.toml. The bundle was carrying a whole second copy of
  a commentary corpus in order to discard it at parse time.

  scripts/build-sutras.ts now does that parse at build and writes the result to
  static/data/sutras.json — 2.82 MB, on the CDN with the other payloads rather
  than in the critical path, and compressed on the wire as JSON is.
*/
let rulesCache: Record<string, string> | null = null;

/** Load the built sūtra payload (cached). Also fills the rule map. */
export async function loadSutras(): Promise<Sutra[]> {
  if (sutrasCache) return sutrasCache;

  const { sutras, rules } = await fetchJson<{ sutras: Sutra[]; rules: Record<string, string> }>(
    'sutras.json'
  );
  rulesCache = rules ?? {};
  // already sorted by numericId at build — see build-sutras.ts
  sutrasCache = sutras ?? [];

  sutrasById = new Map();
  for (const sutra of sutrasCache) {
    sutrasById.set(sutra.id, sutra);
    sutrasById.set(sutra.numericId, sutra);
  }
  return sutrasCache;
}

/** Sūtra one-line explanation (vidvat `rule`), keyed by dotted id "1.1.1". */
export async function getRule(id: string): Promise<string | null> {
  if (!rulesCache) await loadSutras();
  return rulesCache?.[id] ?? null;
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

/*
  The six whole-corpus loaders that stood here are gone — loadKashika,
  loadKashikaEnglish, loadVartika, loadEnglishShort, loadEnglishFull,
  loadEnglishRewritten. Each fetched a file keyed by numericId and held it in a
  module cache so that one lookup could be served; together they were 12 MB
  pulled onto a page that needed six strings. build-sutra-refs.ts splits them
  per sūtra at build time and getCommentary fetches one file. The JSONs they
  read remain in static/data/ as the import source.
*/

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

/**
 * Get all commentary for a sūtra — ONE small file, not six corpora.
 *
 * This used to await loadKashika(), loadEnglishFull() and four more, which is
 * 12 MB of JSON downloaded and parsed so that six strings could be read out of
 * it by key. A page about one sūtra now fetches one sūtra's worth:
 * static/data/sutra-refs/{a}/{p}/{n}.json, written by build-sutra-refs.ts with
 * the @deva[] stripping and the rewritten-over-Vasu preference already applied.
 *
 * A missing file is not an error — plenty of sūtras have no vārttika and some
 * have no translation at all. The page renders the sections it has.
 */
export async function getCommentary(numericId: string): Promise<Commentary> {
  const a = numericId[0];
  const p = numericId[1];
  const n = parseInt(numericId.slice(2));
  try {
    const res = await fetch(dataUrl(`/data/sutra-refs/${a}/${p}/${n}.json`));
    if (!res.ok) return {};
    return (await res.json()) as Commentary;
  } catch {
    return {};
  }
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
