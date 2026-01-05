/**
 * Reading Passage Data Loading
 */

import type { ReadingPassage, TextSource } from "./types";

interface PassageFile {
  source: TextSource;
  passages: ReadingPassage[];
}

// Cache for loaded passage data
let passageCache: Map<string, PassageFile> = new Map();
let allPassagesCache: ReadingPassage[] | null = null;

/**
 * Load passages from a specific source
 */
export async function loadPassageSource(
  sourceId: string,
): Promise<PassageFile | null> {
  if (passageCache.has(sourceId)) {
    return passageCache.get(sourceId)!;
  }

  try {
    const response = await fetch(`/data/passages/${sourceId}.json`);
    if (!response.ok) return null;

    const data: PassageFile = await response.json();
    passageCache.set(sourceId, data);
    return data;
  } catch (e) {
    console.error(`Failed to load passages for ${sourceId}:`, e);
    return null;
  }
}

/**
 * Get a specific passage by ID
 */
export async function getPassage(
  passageId: string,
): Promise<ReadingPassage | null> {
  // passageId format: "meghaduta-1-1" -> source is "meghaduta"
  const sourceId = passageId.split("-")[0];
  const file = await loadPassageSource(sourceId);
  if (!file) return null;

  return file.passages.find((p) => p.id === passageId) || null;
}

/**
 * Get all passages from a source
 */
export async function getPassagesBySource(
  sourceId: string,
): Promise<ReadingPassage[]> {
  const file = await loadPassageSource(sourceId);
  return file?.passages || [];
}

/**
 * Get passages by difficulty level
 */
export async function getPassagesByDifficulty(
  difficulty: 1 | 2 | 3 | 4 | 5,
  sources?: string[],
): Promise<ReadingPassage[]> {
  const allPassages = await getAllPassages(sources);
  return allPassages.filter((p) => p.difficulty === difficulty);
}

/**
 * Get all available passages, optionally filtered by sources
 */
export async function getAllPassages(
  sources?: string[],
): Promise<ReadingPassage[]> {
  const defaultSources = ["meghaduta", "pancatantra", "subhasitas"];
  const sourcesToLoad = sources || defaultSources;

  const results: ReadingPassage[] = [];

  for (const sourceId of sourcesToLoad) {
    const file = await loadPassageSource(sourceId);
    if (file) {
      results.push(...file.passages);
    }
  }

  return results;
}

/**
 * Get passages that match prerequisites
 */
export async function getPassagesForGrammar(
  completedPaths: string[],
  sources?: string[],
): Promise<ReadingPassage[]> {
  const allPassages = await getAllPassages(sources);

  return allPassages.filter((p) => {
    if (!p.prerequisiteGrammar || p.prerequisiteGrammar.length === 0) {
      return true; // No prerequisites means always available
    }
    // Check if all prerequisites are met
    return p.prerequisiteGrammar.every((prereq) =>
      completedPaths.includes(prereq),
    );
  });
}

/**
 * Get source metadata
 */
export async function getSourceMetadata(
  sourceId: string,
): Promise<TextSource | null> {
  const file = await loadPassageSource(sourceId);
  return file?.source || null;
}

/**
 * Get all passage sources (for filtering UI)
 */
export async function getPassageSources(): Promise<TextSource[]> {
  const defaultSources = ["meghaduta", "pancatantra", "subhasitas"];
  const sources: TextSource[] = [];

  for (const sourceId of defaultSources) {
    const file = await loadPassageSource(sourceId);
    if (file?.source) {
      sources.push(file.source);
    }
  }

  return sources;
}

/**
 * Clear the passage cache
 */
export function clearPassageCache(): void {
  passageCache.clear();
  allPassagesCache = null;
}
