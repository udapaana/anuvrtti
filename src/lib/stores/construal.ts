/**
 * construal — the reader's own construal of each line, kept in this browser.
 *
 * reading id → pada index (ti) → the question that word answers, and for कस्य
 * and कीदृशः the word it hangs on. Written by Construe.svelte, read by the
 * reader to label each word with its question. One key per reading
 * (anuvrtti:construe:<id>), so it travels with Settings' progress file.
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Assignment } from '$lib/reader/construe';

type Line = Record<number, Assignment>;
const key = (id: string) => `anuvrtti:construe:${id}`;

function load(id: string): Line {
  if (!browser) return {};
  try {
    const v = JSON.parse(localStorage.getItem(key(id)) ?? '{}');
    return v && typeof v === 'object' ? v : {};
  } catch {
    return {};
  }
}

function create() {
  const { subscribe, update } = writable<Record<string, Line>>({});
  const save = (id: string, line: Line) => {
    try {
      if (Object.keys(line).length) localStorage.setItem(key(id), JSON.stringify(line));
      else localStorage.removeItem(key(id));
    } catch { /* forgotten, not broken */ }
  };
  return {
    subscribe,
    /** read a reading's construal into the store, once, before it is shown */
    ensure(id: string) {
      update((all) => (id in all ? all : { ...all, [id]: load(id) }));
    },
    set(id: string, ti: number, a: Assignment | null) {
      update((all) => {
        const line = { ...(all[id] ?? load(id)) };
        if (a) line[ti] = a;
        else {
          delete line[ti];
          // what hung on it hangs on nothing now
          for (const [k, v] of Object.entries(line)) if (v.head === ti) line[Number(k)] = { role: v.role };
        }
        save(id, line);
        return { ...all, [id]: line };
      });
    },
    clear(id: string) {
      update((all) => {
        save(id, {});
        return { ...all, [id]: {} };
      });
    }
  };
}

export const construal = create();

/** The construe toggle: on, the line shows its padas and tapping a word asks its role. */
const ON_KEY = 'anuvrtti-construe';
function createToggle() {
  let initial = false;
  if (browser) {
    try { initial = localStorage.getItem(ON_KEY) === '1'; } catch { /* off */ }
  }
  const { subscribe, set } = writable(initial);
  return {
    subscribe,
    set(v: boolean) {
      try { localStorage.setItem(ON_KEY, v ? '1' : '0'); } catch { /* session only */ }
      set(v);
    }
  };
}
export const construeOn = createToggle();
