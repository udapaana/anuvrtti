import type { PathMeta } from '$lib/content';

export interface ResumeTarget {
  path: PathMeta;
  step: number;
  total: number;
}

/**
 * Pick the path the user should resume on the home page.
 *
 * Preference: the explicitly current path; otherwise the in-progress path with
 * the most completed steps. Returns null when nothing is resumable (no progress
 * or every started path is already complete).
 *
 * Pure function — easy to unit-test by passing fixtures for index/progress.
 */
export function pickResumeTarget(
  index: PathMeta[],
  currentPathId: string | null,
  pathProgress: Record<string, number[]>
): ResumeTarget | null {
  const isResumable = (id: string): ResumeTarget | null => {
    const meta = index.find(p => p.id === id);
    if (!meta) return null;
    const stepsDone = (pathProgress[id] ?? []).length;
    if (stepsDone >= meta.stepCount) return null;
    return { path: meta, step: stepsDone, total: meta.stepCount };
  };

  if (currentPathId) {
    const target = isResumable(currentPathId);
    if (target) return target;
  }

  let best: ResumeTarget | null = null;
  for (const [id, steps] of Object.entries(pathProgress)) {
    if (steps.length === 0) continue;
    const target = isResumable(id);
    if (target && (!best || target.step > best.step)) {
      best = target;
    }
  }
  return best;
}
