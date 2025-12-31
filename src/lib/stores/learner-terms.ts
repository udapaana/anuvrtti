import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'anuvrtti-learner-terms';

interface LearnerTermState {
  /** Terms the learner has encountered */
  knownTerms: string[];
  /** When each term was first encountered */
  termFirstSeen: Record<string, number>;
}

function loadState(): LearnerTermState {
  if (!browser) {
    return { knownTerms: [], termFirstSeen: {} };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        knownTerms: parsed.knownTerms || [],
        termFirstSeen: parsed.termFirstSeen || {}
      };
    }
  } catch (e) {
    console.error('Failed to load learner terms:', e);
  }

  return { knownTerms: [], termFirstSeen: {} };
}

function saveState(state: LearnerTermState) {
  if (!browser) return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save learner terms:', e);
  }
}

function createLearnerTermsStore() {
  const { subscribe, set, update } = writable<LearnerTermState>(loadState());

  return {
    subscribe,

    /**
     * Introduce a term to the learner's vocabulary.
     * Returns true if this is the first time the term is encountered.
     */
    introduce: (term: string): boolean => {
      let isNew = false;

      update(state => {
        const normalized = term.toLowerCase().trim();

        if (!state.knownTerms.includes(normalized)) {
          isNew = true;
          const newState = {
            knownTerms: [...state.knownTerms, normalized],
            termFirstSeen: {
              ...state.termFirstSeen,
              [normalized]: Date.now()
            }
          };
          saveState(newState);
          return newState;
        }

        return state;
      });

      return isNew;
    },

    /**
     * Introduce multiple terms at once.
     * Returns the list of terms that were new.
     */
    introduceMany: (terms: string[]): string[] => {
      const newTerms: string[] = [];

      update(state => {
        const now = Date.now();
        const newKnownTerms = [...state.knownTerms];
        const newTermFirstSeen = { ...state.termFirstSeen };

        for (const term of terms) {
          const normalized = term.toLowerCase().trim();
          if (!newKnownTerms.includes(normalized)) {
            newKnownTerms.push(normalized);
            newTermFirstSeen[normalized] = now;
            newTerms.push(normalized);
          }
        }

        if (newTerms.length > 0) {
          const newState = {
            knownTerms: newKnownTerms,
            termFirstSeen: newTermFirstSeen
          };
          saveState(newState);
          return newState;
        }

        return state;
      });

      return newTerms;
    },

    /**
     * Check if a term is known to the learner.
     */
    isKnown: (term: string): boolean => {
      const state = get({ subscribe });
      return state.knownTerms.includes(term.toLowerCase().trim());
    },

    /**
     * Get all known terms.
     */
    getKnownTerms: (): string[] => {
      const state = get({ subscribe });
      return [...state.knownTerms];
    },

    /**
     * Get the count of known terms.
     */
    getCount: (): number => {
      const state = get({ subscribe });
      return state.knownTerms.length;
    },

    /**
     * Reset all learned terms (for testing or starting fresh).
     */
    reset: () => {
      const emptyState = { knownTerms: [], termFirstSeen: {} };
      saveState(emptyState);
      set(emptyState);
    },

    /**
     * Remove a specific term (if learner wants to "forget" it).
     */
    forget: (term: string) => {
      update(state => {
        const normalized = term.toLowerCase().trim();
        const newKnownTerms = state.knownTerms.filter(t => t !== normalized);
        const { [normalized]: _, ...newTermFirstSeen } = state.termFirstSeen;

        const newState = {
          knownTerms: newKnownTerms,
          termFirstSeen: newTermFirstSeen
        };
        saveState(newState);
        return newState;
      });
    }
  };
}

export const learnerTerms = createLearnerTermsStore();

/**
 * Helper to check if a term should show inline definition.
 * Returns true for the first encounter (should show definition).
 */
export function shouldShowDefinition(term: string): boolean {
  return !learnerTerms.isKnown(term);
}
