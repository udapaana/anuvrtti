/**
 * Vocabulary progress store
 * Tracks which vocabulary words the user has encountered and learned
 */
import { writable, get } from "svelte/store";
import { browser } from "$app/environment";
import type { VocabularyProgress } from "$lib/data/types";

export interface VocabularyState {
  /** Map of wordId -> VocabularyProgress */
  words: Record<string, VocabularyProgress>;
  /** Total words encountered */
  totalEncountered: number;
  /** Words marked as learned (encountered 3+ times) */
  learnedCount: number;
}

const defaultState: VocabularyState = {
  words: {},
  totalEncountered: 0,
  learnedCount: 0,
};

const STORAGE_KEY = "anuvrtti-vocabulary-progress";
const LEARNED_THRESHOLD = 3; // Encounters needed to mark as "learned"

function loadVocabulary(): VocabularyState {
  if (!browser) return defaultState;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return defaultState;
    }
  }
  return defaultState;
}

function recalculateCounts(words: Record<string, VocabularyProgress>): { totalEncountered: number; learnedCount: number } {
  const entries = Object.values(words);
  return {
    totalEncountered: entries.length,
    learnedCount: entries.filter(w => w.status === 'learned').length,
  };
}

function createVocabularyStore() {
  const { subscribe, set, update } = writable<VocabularyState>(loadVocabulary());

  // Persist to localStorage on every update
  if (browser) {
    subscribe((value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    });
  }

  return {
    subscribe,

    /**
     * Record that a word was encountered in a passage
     */
    encounterWord(wordId: string) {
      update((state) => {
        const now = new Date().toISOString();
        const existing = state.words[wordId];

        let newEntry: VocabularyProgress;

        if (existing) {
          const newCount = existing.timesEncountered + 1;
          const newStatus = newCount >= LEARNED_THRESHOLD ? 'learned' :
                           newCount >= 1 ? 'learning' : 'new';
          newEntry = {
            ...existing,
            timesEncountered: newCount,
            lastSeen: now,
            status: newStatus,
          };
        } else {
          newEntry = {
            wordId,
            timesEncountered: 1,
            lastSeen: now,
            status: 'new',
          };
        }

        const newWords = {
          ...state.words,
          [wordId]: newEntry,
        };

        const counts = recalculateCounts(newWords);

        return {
          words: newWords,
          ...counts,
        };
      });
    },

    /**
     * Record multiple words encountered at once (e.g., from a passage)
     */
    encounterWords(wordIds: string[]) {
      update((state) => {
        const now = new Date().toISOString();
        const newWords = { ...state.words };

        for (const wordId of wordIds) {
          const existing = newWords[wordId];

          if (existing) {
            const newCount = existing.timesEncountered + 1;
            newWords[wordId] = {
              ...existing,
              timesEncountered: newCount,
              lastSeen: now,
              status: newCount >= LEARNED_THRESHOLD ? 'learned' : 'learning',
            };
          } else {
            newWords[wordId] = {
              wordId,
              timesEncountered: 1,
              lastSeen: now,
              status: 'new',
            };
          }
        }

        const counts = recalculateCounts(newWords);

        return {
          words: newWords,
          ...counts,
        };
      });
    },

    /**
     * Manually mark a word as learned
     */
    markLearned(wordId: string) {
      update((state) => {
        const existing = state.words[wordId];
        if (!existing) return state;

        const newWords = {
          ...state.words,
          [wordId]: {
            ...existing,
            status: 'learned' as const,
          },
        };

        const counts = recalculateCounts(newWords);

        return {
          words: newWords,
          ...counts,
        };
      });
    },

    /**
     * Get progress for a specific word
     */
    getWordProgress(wordId: string): VocabularyProgress | null {
      const state = get({ subscribe });
      return state.words[wordId] || null;
    },

    /**
     * Check if a word has been encountered
     */
    hasEncountered(wordId: string): boolean {
      const state = get({ subscribe });
      return wordId in state.words;
    },

    /**
     * Check if a word is learned
     */
    isLearned(wordId: string): boolean {
      const state = get({ subscribe });
      return state.words[wordId]?.status === 'learned';
    },

    /**
     * Get all words by status
     */
    getWordsByStatus(status: 'new' | 'learning' | 'learned'): VocabularyProgress[] {
      const state = get({ subscribe });
      return Object.values(state.words).filter(w => w.status === status);
    },

    /**
     * Get recently encountered words (last 7 days)
     */
    getRecentWords(days: number = 7): VocabularyProgress[] {
      const state = get({ subscribe });
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      const cutoffStr = cutoff.toISOString();

      return Object.values(state.words)
        .filter(w => w.lastSeen >= cutoffStr)
        .sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
    },

    /**
     * Reset all vocabulary progress
     */
    reset() {
      set(defaultState);
    },

    /**
     * Export progress data
     */
    export(): VocabularyState {
      return get({ subscribe });
    },

    /**
     * Import progress data
     */
    import(data: VocabularyState) {
      set(data);
    },
  };
}

export const vocabularyProgress = createVocabularyStore();
