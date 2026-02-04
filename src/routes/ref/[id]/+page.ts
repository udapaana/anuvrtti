export const ssr = false;

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
    };
  }

  const [
    commentary,
    layeredCommentary,
    dependencies,
    dependents,
    prevSutra,
    nextSutra,
  ] = await Promise.all([
    getCommentary(sutra.numericId),
    getLayeredCommentary(sutra.numericId),
    getDependencies(id),
    getDependents(id),
    getAdjacentSutra(sutra.id, -1),
    getAdjacentSutra(sutra.id, 1),
  ]);

  return {
    sutra,
    commentary,
    layeredCommentary,
    dependencies,
    dependents: dependents.slice(0, 20),
    prevSutraId: prevSutra?.id ?? null,
    nextSutraId: nextSutra?.id ?? null,
  };
}
