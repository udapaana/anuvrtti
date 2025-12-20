import { getSutra, getCommentary, getDependencies, getDependents } from '$lib/data';

export async function load({ params }) {
  const id = params.id;

  const sutra = await getSutra(id);
  if (!sutra) {
    return { sutra: null, commentary: null, dependencies: [], dependents: [] };
  }

  const [commentary, dependencies, dependents] = await Promise.all([
    getCommentary(sutra.numericId),
    getDependencies(id),
    getDependents(id)
  ]);

  return {
    sutra,
    commentary,
    dependencies,
    dependents: dependents.slice(0, 10)
  };
}
