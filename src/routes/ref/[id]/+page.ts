export const ssr = false;

// Cache the sutra-paths index
let sutraPathsCache: Record<
  string,
  { pathId: string; pathTitle: string }[]
> | null = null;

async function loadSutraPaths(): Promise<
  Record<string, { pathId: string; pathTitle: string }[]>
> {
  if (sutraPathsCache) return sutraPathsCache;
  try {
    const resp = await fetch("/content/sutra-paths.json");
    if (resp.ok) {
      sutraPathsCache = await resp.json();
      return sutraPathsCache!;
    }
  } catch {
    /* non-critical */
  }
  return {};
}

export async function load({ params }) {
  const {
    getSutra,
    getCommentary,
    getLayeredCommentary,
    getDependencies,
    getDependents,
    getAdjacentSutra,
  } = await import("$lib/data");

  const id = params.id;
  const sutra = await getSutra(id);

  if (!sutra) {
    return {
      sutra: null,
      commentary: null,
      layeredCommentary: null,
      dependencies: [],
      dependents: [],
      prevSutraId: null,
      nextSutraId: null,
      learningPaths: [],
    };
  }

  const [
    commentary,
    layeredCommentary,
    dependencies,
    dependents,
    prevSutra,
    nextSutra,
    sutraPaths,
  ] = await Promise.all([
    getCommentary(sutra.numericId),
    getLayeredCommentary(sutra.numericId),
    getDependencies(id),
    getDependents(id),
    getAdjacentSutra(sutra.id, -1),
    getAdjacentSutra(sutra.id, 1),
    loadSutraPaths(),
  ]);

  const learningPaths = sutraPaths[id] || [];

  return {
    sutra,
    commentary,
    layeredCommentary,
    dependencies,
    dependents: dependents.slice(0, 20),
    prevSutraId: prevSutra?.id ?? null,
    nextSutraId: nextSutra?.id ?? null,
    learningPaths,
  };
}
