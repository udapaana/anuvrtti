/**
 * Store for pending file edits — staged changes waiting to be submitted as a PR.
 * Keyed by file path (relative to repo root, e.g. "static/data/commentary/1/1/1.toml").
 * Persists to sessionStorage across page navigations.
 */

import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';

export interface FileEdit {
  path: string;      // e.g. "static/data/commentary/1/1/1.toml"
  label: string;     // human-readable e.g. "Commentary 1.1.1"
  original: string;  // content before edit (for diff display)
  content: string;   // edited content
}

type FileEditMap = Record<string, FileEdit>; // keyed by path

const SESSION_KEY = 'anuvrtti-pending-file-edits';

function loadFromSession(): FileEditMap {
  if (!browser) return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToSession(edits: FileEditMap) {
  if (!browser) return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(edits));
}

function createFileEditStore() {
  const store = writable<FileEditMap>(loadFromSession());

  return {
    subscribe: store.subscribe,

    upsert(edit: FileEdit) {
      store.update(current => {
        const next = { ...current, [edit.path]: edit };
        saveToSession(next);
        return next;
      });
    },

    remove(path: string) {
      store.update(current => {
        const next = { ...current };
        delete next[path];
        saveToSession(next);
        return next;
      });
    },

    clear() {
      store.set({});
      if (browser) sessionStorage.removeItem(SESSION_KEY);
    },

    snapshot(): FileEditMap {
      return get(store);
    },

    get count(): number {
      return Object.keys(get(store)).length;
    },
  };
}

export const fileEdits = createFileEditStore();
