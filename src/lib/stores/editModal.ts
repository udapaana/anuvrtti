/**
 * Global edit modal state.
 * Import `editModal` anywhere to open/close the modal and set the initial file.
 */

import { writable } from 'svelte/store';

export type EditMode = 'paths' | 'commentary' | 'reference';

export interface EditModalState {
  open: boolean;
  initialPath?: string;
  initialMode?: EditMode;
  /** Set by pages to indicate the file relevant to the current view */
  currentPagePath?: string;
}

function modeFromPath(path: string | undefined): EditMode | undefined {
  if (!path) return undefined;
  if (path.includes('/paths/')) return 'paths';
  if (path.includes('/commentary/')) return 'commentary';
  return 'reference';
}

function createEditModalStore() {
  const { subscribe, set, update } = writable<EditModalState>({ open: false });

  return {
    subscribe,

    open(initialPath?: string) {
      update(s => {
        const resolved = initialPath ?? s.currentPagePath;
        return {
          ...s,
          open: true,
          initialPath: resolved,
          initialMode: modeFromPath(resolved),
        };
      });
    },

    close() {
      update(s => ({ ...s, open: false }));
    },

    /** Pages call this to register which file the edit button should open */
    setPageContext(path: string | undefined) {
      update(s => ({ ...s, currentPagePath: path }));
    },
  };
}

export const editModal = createEditModalStore();
