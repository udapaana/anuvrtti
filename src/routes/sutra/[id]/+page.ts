// Run only on client side to avoid SSR fetch issues
export const ssr = false;

export async function load({ params }) {
  // Dynamic import to avoid SSR issues with fetch
  const { getSutra, getCommentary, getDependencies, getDependents } =
    await import("$lib/data");

  const id = params.id;

  const sutra = await getSutra(id);
  if (!sutra) {
    return { sutra: null, commentary: null, dependencies: [], dependents: [] };
  }

  const [commentary, dependencies, dependents] = await Promise.all([
    getCommentary(sutra.numericId),
    getDependencies(id),
    getDependents(id),
  ]);

  return {
    sutra,
    commentary,
    dependencies,
    dependents: dependents.slice(0, 10),
  };
}
