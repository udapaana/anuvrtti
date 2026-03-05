import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { Script } from "$lib/transliteration";
import type { CommentaryDepth } from "$lib/data/types";

const SCRIPT_KEY = "anuvrtti-display-script";

function getStoredScript(): Script {
  if (!browser) return "devanagari";
  const stored = localStorage.getItem(SCRIPT_KEY) as Script | null;
  if (stored) return stored;
  return "devanagari";
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
