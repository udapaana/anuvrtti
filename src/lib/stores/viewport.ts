import { readable } from 'svelte/store';

/**
 * Whether the page is below the layout breakpoint — the width at which Shell
 * stops laying regions out as a grid and gives them their mobile forms.
 *
 * A media QUERY styles what is already in the markup. A sheet is a different
 * element in a different place, so the switch has to reach the markup too, and
 * every page that opts into sheets needs the same fact. It lived as a private
 * `matchMedia` effect in the reader; this is the same thing, once.
 *
 * Server-rendered as false (the grid), corrected on the first client tick.
 * `960px` is the one place the breakpoint is written down for JS; the CSS
 * counterpart lives in Shell.
 */
export const NARROW_QUERY = '(max-width: 960px)';

export const isNarrow = readable(false, (set) => {
  if (typeof window === 'undefined' || !window.matchMedia) return;
  const mq = window.matchMedia(NARROW_QUERY);
  set(mq.matches);
  const sync = () => set(mq.matches);
  mq.addEventListener('change', sync);
  return () => mq.removeEventListener('change', sync);
});
