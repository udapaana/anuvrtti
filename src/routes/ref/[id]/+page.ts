export const ssr = false;

// Cache the sutra-paths index (enriched with path titles)
type SutraPathMap = Record<
  string,
  { pathId: string; pathTitle: string; stepIndex: number }[]
>;
let sutraPathsCache: SutraPathMap | null = null;

async function loadSutraPaths(): Promise<
  Record<string, { pathId: string; pathTitle: string; stepIndex: number }[]>
> {
  if (sutraPathsCache) return sutraPathsCache;
  try {
    const [sutraResp, indexResp] = await Promise.all([
      fetch("/content/sutra-paths.json"),
      fetch("/content/paths-index.json"),
    ]);
    if (!sutraResp.ok) return {};

    const raw: Record<string, { pathId: string; stepIndex: number }[]> =
      await sutraResp.json();

    // Build a title lookup from paths-index.json
    const titleMap: Record<string, string> = {};
    if (indexResp.ok) {
      const index: { id: string; title: string }[] = await indexResp.json();
      for (const p of index) titleMap[p.id] = p.title;
    }

    // Enrich raw entries with titles
    const enriched: SutraPathMap = {};
    for (const [sutraId, entries] of Object.entries(raw)) {
      enriched[sutraId] = entries.map((e) => ({
        ...e,
        pathTitle: titleMap[e.pathId] || e.pathId,
      }));
    }

    sutraPathsCache = enriched;
    return sutraPathsCache;
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
