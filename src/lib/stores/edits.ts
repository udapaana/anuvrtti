import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';

export interface PendingEdit {
  sutraId: string;      // display id e.g. "1.1.1"
  numericId: string;    // JSON key e.g. "11001"
  simple?: string;
  standard?: string;
}

type EditMap = Record<string, PendingEdit>; // keyed by numericId

const SESSION_KEY = 'anuvrtti-pending-edits';

function loadFromSession(): EditMap {
  if (!browser) return {};
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToSession(edits: EditMap) {
  if (!browser) return;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(edits));
}

function createEditStore() {
  const store = writable<EditMap>(loadFromSession());

  return {
    subscribe: store.subscribe,

    upsert(edit: PendingEdit) {
      store.update(current => {
        const next = {
          ...current,
          [edit.numericId]: { ...current[edit.numericId], ...edit },
        };
        saveToSession(next);
        return next;
      });
    },

    remove(numericId: string) {
      store.update(current => {
        const next = { ...current };
        delete next[numericId];
        saveToSession(next);
        return next;
      });
    },

    clear() {
      store.set({});
      if (browser) sessionStorage.removeItem(SESSION_KEY);
    },

    get count() {
      return Object.keys(get(store)).length;
    },

    snapshot(): EditMap {
      return get(store);
    },
  };
}

export const pendingEdits = createEditStore();
