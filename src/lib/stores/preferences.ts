import { writable, derived } from "svelte/store";
import { browser } from "$app/environment";
import type { Script } from "$lib/transliteration";
import type { CommentaryDepth } from "$lib/data/types";

const SCRIPT_KEY = "anuvrtti-display-script";

function getStoredScript(): Script {
  if (!browser) return "iast";
  const stored = localStorage.getItem(SCRIPT_KEY) as Script | null;
  if (stored) return stored;
  return "iast";
}

function createDisplayScriptStore() {
  const { subscribe, set } = writable<Script>(getStoredScript());
  return {
    subscribe,
    set: (value: Script) => {
      if (browser) localStorage.setItem(SCRIPT_KEY, value);
      set(value);
    },
  };
}

/** User's preferred display script */
export const displayScript = createDisplayScriptStore();

/**
 * Whether a term's roman spelling says anything the page does not. In a
 * Latin script the term is already shown in roman, so printing termRoman
 * beside it gives "karman karman"; in Devanagari or another Indic script it
 * is the reading aid it was meant to be.
 */
export const romanAside = derived(displayScript, (s) =>
  !["iast", "iso15919", "slp1", "hk", "itrans", "velthuis", "english"].includes(s)
);

/**
 * The size of the text being read: the line and its translation, in the
 * reader and in a whole text. Three steps, not a slider — a reading size is
 * a choice made once, and three can be told apart at a glance. Applied as
 * --read-scale on the root, so any page can size its reading text by it.
 */
export type TextSize = "small" | "medium" | "large";
const TEXT_SIZE_KEY = "anuvrtti-text-size";
export const TEXT_SCALE: Record<TextSize, number> = { small: 0.85, medium: 1, large: 1.2 };

function createTextSizeStore() {
  let initial: TextSize = "medium";
  if (browser) {
    const v = localStorage.getItem(TEXT_SIZE_KEY);
    if (v === "small" || v === "medium" || v === "large") initial = v;
  }
  const { subscribe, set } = writable<TextSize>(initial);
  const apply = (v: TextSize) => {
    if (browser) document.documentElement.style.setProperty("--read-scale", String(TEXT_SCALE[v]));
  };
  apply(initial);
  return {
    subscribe,
    set: (v: TextSize) => {
      if (browser) localStorage.setItem(TEXT_SIZE_KEY, v);
      apply(v);
      set(v);
    },
  };
}

export const textSize = createTextSizeStore();

/** User's preferred commentary depth */
const DEPTH_KEY = "anuvrtti-commentary-depth";

function getStoredDepth(): CommentaryDepth {
  if (!browser) return "standard";
  const stored = localStorage.getItem(DEPTH_KEY);
  if (stored === "simple" || stored === "standard" || stored === "advanced") {
    return stored;
  }
  return "standard";
}

function createCommentaryDepthStore() {
  const { subscribe, set, update } =
    writable<CommentaryDepth>(getStoredDepth());

  return {
    subscribe,
    set: (value: CommentaryDepth) => {
      if (browser) {
        localStorage.setItem(DEPTH_KEY, value);
      }
      set(value);
    },
    cycle: () => {
      update((current) => {
        const next: CommentaryDepth =
          current === "simple"
            ? "standard"
            : current === "standard"
              ? "advanced"
              : "simple";
        if (browser) {
          localStorage.setItem(DEPTH_KEY, next);
        }
        return next;
      });
    },
  };
}

/** User's preferred commentary depth level */
export const commentaryDepth = createCommentaryDepthStore();

/** User's preferred support language for Bālabodhini lessons */
export type LessonLanguage = 'telugu' | 'english';
const LESSON_LANG_KEY = 'balabodhini-lang';

function getStoredLessonLanguage(): LessonLanguage {
  if (!browser) return 'english';
  const stored = localStorage.getItem(LESSON_LANG_KEY);
  if (stored === 'telugu' || stored === 'english') return stored;
  return 'english';
}

function createLessonLanguageStore() {
  const { subscribe, set } = writable<LessonLanguage>(getStoredLessonLanguage());
  return {
    subscribe,
    set: (value: LessonLanguage) => {
      if (browser) localStorage.setItem(LESSON_LANG_KEY, value);
      set(value);
    },
  };
}

export const lessonLanguage = createLessonLanguageStore();

/*
  Authoring is a mode you switch into, not a button hovering over every screen.
  The floating pencil is retired: signing in adds a switch to the `aa` popover,
  and while the mode is on the shelf carries edit controls and the editor opens
  as a rail beside the content. Nothing changes for readers who are not signed
  in — this flag is only ever set from the popover, which only renders for a
  signed-in user.
*/
const AUTHORING_KEY = "anuvrtti-authoring-mode";

function getStoredAuthoring(): boolean {
  if (!browser) return false;
  return localStorage.getItem(AUTHORING_KEY) === "on";
}

function createAuthoringStore() {
  const { subscribe, set, update } = writable<boolean>(getStoredAuthoring());
  const persist = (value: boolean) => {
    if (browser) localStorage.setItem(AUTHORING_KEY, value ? "on" : "off");
    return value;
  };
  return {
    subscribe,
    set: (value: boolean) => set(persist(value)),
    toggle: () => update((current) => persist(!current)),
  };
}

export const authoringMode = createAuthoringStore();

/**
 * Agreement colours (the reader): with this on, tapping a word paints the
 * words its ending ties it to in one colour (agreement.ts familyOf). Off by
 * default — an aid to construing, not a way of reading.
 */
const FAMILIES_KEY = "anuvrtti-agreement-colours";
function createFamiliesToggle() {
  let initial = false;
  if (browser) {
    try { initial = localStorage.getItem(FAMILIES_KEY) === "1"; } catch { /* off */ }
  }
  const { subscribe, set } = writable<boolean>(initial);
  return {
    subscribe,
    set: (v: boolean) => {
      try { if (browser) localStorage.setItem(FAMILIES_KEY, v ? "1" : "0"); } catch { /* session only */ }
      set(v);
    },
  };
}
export const agreementColours = createFamiliesToggle();
