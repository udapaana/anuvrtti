import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { Script } from "$lib/transliteration";
import type { CommentaryDepth } from "$lib/data/types";

/** User's preferred display script */
export const displayScript = writable<Script>("devanagari");

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
