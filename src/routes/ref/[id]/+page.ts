export const ssr = false;

// Cache the sutra-paths index (enriched with path titles)
type SutraPathEntry = { type: 'path'; pathId: string; pathTitle: string; stepIndex: number };
type SutraLessonEntry = { type: 'lesson'; lessonRef: string; lessonNumber: number; part: number; title: string };
type SutraPathMap = Record<string, (SutraPathEntry | SutraLessonEntry)[]>;
let sutraPathsCache: SutraPathMap | null = null;

async function loadSutraPaths(): Promise<SutraPathMap> {
  if (sutraPathsCache) return sutraPathsCache;
  try {
    const [sutraResp, indexResp] = await Promise.all([
      fetch("/content/sutra-paths.json"),
      fetch("/content/paths-index.json"),
    ]);
    if (!sutraResp.ok) return {};

    const raw: Record<string, any[]> = await sutraResp.json();

    // Build a title lookup from paths-index.json
    const titleMap: Record<string, string> = {};
    if (indexResp.ok) {
      const index: { id: string; title: string }[] = await indexResp.json();
      for (const p of index) titleMap[p.id] = p.title;
    }

    // Enrich raw entries — path entries get pathTitle, lesson entries pass through
    const enriched: SutraPathMap = {};
    for (const [sutraId, entries] of Object.entries(raw)) {
      enriched[sutraId] = entries.map((e) => {
        if (e.type === 'lesson') return e as SutraLessonEntry;
        return { ...e, type: 'path', pathTitle: titleMap[e.pathId] || e.pathId } as SutraPathEntry;
      });
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

  const allEntries = sutraPaths[id] || [];
  const learningPaths = allEntries.filter(e => e.type === 'path') as SutraPathEntry[];
  const balabodhiniLessons = allEntries.filter(e => e.type === 'lesson') as SutraLessonEntry[];

  return {
    sutra,
    commentary,
    layeredCommentary,
    dependencies,
    dependents: dependents.slice(0, 20),
    prevSutraId: prevSutra?.id ?? null,
    nextSutraId: nextSutra?.id ?? null,
    learningPaths,
    balabodhiniLessons,
  };
}
