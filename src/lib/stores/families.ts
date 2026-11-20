/**
 * families — the agreement colours painted on each line.
 *
 * reading id → pada index (ti) → colour (0–4). Painted by the reader when a
 * word is tapped with agreement colours on; kept in this browser, one key per
 * reading (anuvrtti:families:<id>), so a line coloured yesterday is coloured
 * today, and Settings' progress file carries it.
 */
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const COLOURS = 5;
type Line = Record<number, number>;
const key = (id: string) => `anuvrtti:families:${id}`;

function load(id: string): Line {
  if (!browser) return {};
  try {
    const v = JSON.parse(localStorage.getItem(key(id)) ?? '{}');
    return v && typeof v === 'object' ? v : {};
  } catch {
    return {};
  }
}
function save(id: string, line: Line) {
  try {
    if (Object.keys(line).length) localStorage.setItem(key(id), JSON.stringify(line));
    else localStorage.removeItem(key(id));
  } catch { /* forgotten, not broken */ }
}

function create() {
  const { subscribe, update } = writable<Record<string, Line>>({});
  return {
    subscribe,
    ensure(id: string) {
      update((all) => (id in all ? all : { ...all, [id]: load(id) }));
    },
    /** paint these words in the line's next colour; words already painted keep theirs */
    paint(id: string, tis: number[]) {
      update((all) => {
        const line = { ...(all[id] ?? load(id)) };
        const used = new Set(Object.values(line));
        let colour = 0;
        while (used.has(colour) && colour < COLOURS - 1) colour++;
        if (used.size >= COLOURS) colour = used.size % COLOURS;
        for (const ti of tis) if (!(ti in line)) line[ti] = colour;
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

export const families = create();
