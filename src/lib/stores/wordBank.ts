/**
 * Word bank store — flat ordered list of vocabulary words seen across lessons.
 * lessonIndex maps lessonId → index of the last word from that lesson.
 * Review range is a slice of the words array.
 */
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export interface WordEntry {
  id: string;               // iast if available, else "tel:" + sanskrit_telugu
  display: string;          // sanskrit_telugu (Telugu script)
  iast: string | null;
  gloss: string;            // Telugu gloss (primary)
  englishGloss: string;     // English gloss
  tag: string | null;       // e.g. "p.p. e.v. laṭ"
  lessonId: string;         // e.g. "balabodhini-1-05"
  lessonNum: number;        // extracted lesson number for range filtering
  // SRS
  interval: number;         // days (0 = new)
  dueDate: string | null;   // ISO date string
  streak: number;           // consecutive "knew it"
}

export interface WordBankState {
  words: WordEntry[];
  lessonIndex: Record<string, number>; // lessonId → index of last word from that lesson
}

const INTERVALS = [1, 3, 7, 21, 60];
const STORAGE_KEY = "anuvrtti-word-bank";

const defaultState: WordBankState = { words: [], lessonIndex: {} };

function loadState(): WordBankState {
  if (!browser) return defaultState;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return defaultState;
}

function createWordBank() {
  const { subscribe, set, update } = writable<WordBankState>(loadState());

  if (browser) {
    subscribe(value => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    });
  }

  return {
    subscribe,

    /** Add words from a lesson TOML sections array. Idempotent — skips known ids. */
    addWordsFromLesson(lessonId: string, sections: any[]) {
      update(state => {
        const knownIds = new Set(state.words.map(w => w.id));
        const lessonNum = parseInt(lessonId.match(/(\d+)$/)?.[1] ?? '0', 10);
        const newWords: WordEntry[] = [];

        for (const section of sections) {
          if (section.type !== 'vocabulary') continue;
          for (const item of section.items ?? []) {
            for (const word of item.words ?? []) {
              const id = word.iast ?? `tel:${word.sanskrit_telugu}`;
              if (knownIds.has(id)) continue;
              knownIds.add(id);
              newWords.push({
                id,
                display: word.sanskrit_telugu,
                iast: word.iast ?? null,
                gloss: word.telugu_gloss ?? word.english ?? '',
                englishGloss: word.english ?? '',
                tag: word.tag ?? null,
                lessonId,
                lessonNum,
                interval: 0,
                dueDate: null,
                streak: 0,
              });
            }
          }
        }

        if (newWords.length === 0) return state;

        const words = [...state.words, ...newWords];
        const lessonIndex = {
          ...state.lessonIndex,
          [lessonId]: words.length - 1,
        };
        return { words, lessonIndex };
      });
    },

    /** Record a review result. knew=true advances interval, knew=false resets. */
    recordReview(id: string, knew: boolean) {
      update(state => {
        const words = state.words.map(w => {
          if (w.id !== id) return w;
          const streak = knew ? Math.min(w.streak + 1, INTERVALS.length - 1) : 0;
          const interval = INTERVALS[streak];
          const due = new Date();
          due.setDate(due.getDate() + interval);
          return { ...w, streak, interval, dueDate: due.toISOString().slice(0, 10) };
        });
        return { ...state, words };
      });
    },

    /** Words due for review within [fromNum, toNum] lesson range. */
    getDueInRange(fromNum: number, toNum: number): WordEntry[] {
      let state: WordBankState = defaultState;
      subscribe(s => { state = s; })();
      const today = new Date().toISOString().slice(0, 10);
      return state.words.filter(w =>
        w.lessonNum >= fromNum &&
        w.lessonNum <= toNum &&
        (w.dueDate === null || w.dueDate <= today)
      );
    },

    /** All words in [fromNum, toNum] lesson range. */
    getWordsInRange(fromNum: number, toNum: number): WordEntry[] {
      let state: WordBankState = defaultState;
      subscribe(s => { state = s; })();
      return state.words.filter(w => w.lessonNum >= fromNum && w.lessonNum <= toNum);
    },

    /** Highest lesson number seen in the bank. */
    getMaxLesson(): number {
      let state: WordBankState = defaultState;
      subscribe(s => { state = s; })();
      return state.words.reduce((max, w) => Math.max(max, w.lessonNum), 0);
    },

    reset() { set(defaultState); },
  };
}

export const wordBank = createWordBank();
