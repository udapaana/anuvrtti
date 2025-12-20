/**
 * Learning progress store
 * Tracks which paths and steps the user has completed
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface LearningProgress {
  completedPaths: string[];
  pathProgress: Record<string, number[]>; // pathId -> array of completed step indices
  currentPath: string | null;
  currentStep: number;
}

const defaultProgress: LearningProgress = {
  completedPaths: [],
  pathProgress: {},
  currentPath: null,
  currentStep: 0
};

function loadProgress(): LearningProgress {
  if (!browser) return defaultProgress;
  const stored = localStorage.getItem('anuvrtti-learning-progress');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultProgress;
    }
  }
  return defaultProgress;
}

function createLearningStore() {
  const { subscribe, set, update } = writable<LearningProgress>(loadProgress());

  // Persist to localStorage on every update
  if (browser) {
    subscribe(value => {
      localStorage.setItem('anuvrtti-learning-progress', JSON.stringify(value));
    });
  }

  return {
    subscribe,

    startPath(pathId: string) {
      update(p => ({
        ...p,
        currentPath: pathId,
        currentStep: p.pathProgress[pathId]?.length || 0
      }));
    },

    completeStep(pathId: string, stepIndex: number) {
      update(p => {
        const progress = p.pathProgress[pathId] || [];
        if (!progress.includes(stepIndex)) {
          progress.push(stepIndex);
        }
        return {
          ...p,
          pathProgress: { ...p.pathProgress, [pathId]: progress },
          currentStep: stepIndex + 1
        };
      });
    },

    completePath(pathId: string) {
      update(p => ({
        ...p,
        completedPaths: p.completedPaths.includes(pathId)
          ? p.completedPaths
          : [...p.completedPaths, pathId],
        currentPath: null,
        currentStep: 0
      }));
    },

    goToStep(stepIndex: number) {
      update(p => ({ ...p, currentStep: stepIndex }));
    },

    reset() {
      set(defaultProgress);
    },

    isStepCompleted(pathId: string, stepIndex: number): boolean {
      let result = false;
      subscribe(p => {
        result = p.pathProgress[pathId]?.includes(stepIndex) || false;
      })();
      return result;
    },

    getPathProgress(pathId: string): number {
      let completed = 0;
      subscribe(p => {
        completed = p.pathProgress[pathId]?.length || 0;
      })();
      return completed;
    }
  };
}

export const learningProgress = createLearningStore();
