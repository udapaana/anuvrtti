<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    A bottom sheet, for the regions that have nowhere to go on a phone.

    Under 960px Shell used to collapse all three regions into one column: the
    spine became a horizontal chip row and the rail fell to the BOTTOM of the
    page, below every card. The rail was the real loss — it updates off-screen,
    twenty cards down, so the co-presence that makes the reader work was gone.
    A region that comments on what you are looking at has to stay on screen.

    So each region takes its native mobile form instead, and this is it. The
    sheet is fixed to the bottom of the viewport at one of a few DETENTS, and
    the page decides what to show at each one — the rail's peek is its pinned
    word head and nothing else, its half adds the evidence, its full is the
    quiz.

    Movement is by discrete gesture rather than free dragging: a swipe up or
    down moves one detent, a tap on the grip moves up (and wraps at the top).
    Free dragging would need pixel heights for detents that are content-sized,
    and buys nothing a swipe does not — the sheet has three positions, not a
    continuum.
  */
  let {
    /** CSS heights, smallest first. `auto` means "as tall as the content". */
    detents = ['auto'],
    /** Which detent is showing. Bindable so the page can push it — a drawn
        question opens the sheet to its last detent without a gesture. */
    detent = $bindable(0),
    /** Dim what is behind. The spine covers the reading; the rail sits under it. */
    scrim = false,
    /** Announced on the grip, e.g. "word detail". */
    label = 'panel',
    /** Called when the scrim is tapped or Escape is pressed. */
    ondismiss,
    children
  }: {
    detents?: string[];
    detent?: number;
    scrim?: boolean;
    label?: string;
    ondismiss?: () => void;
    children: Snippet;
  } = $props();

  const top = $derived(detents.length - 1);
  const height = $derived(detents[Math.max(0, Math.min(detent, top))] ?? 'auto');

  /*
    "Covering" is not the same as "raised". A sheet with several detents rests
    at 0 and covers nothing — that is the rail's peek. A sheet with ONE detent
    is covering the moment it exists; it is mounted when it opens and unmounted
    when it closes, so detent 0 is its open state, not its resting state.
  */
  const covering = $derived(top === 0 || detent > 0);

  function close() {
    if (ondismiss) ondismiss();
    else detent = 0;
  }

  function step(by: number) {
    // a one-detent sheet has nowhere to go but away
    if (top === 0) {
      if (by < 0) close();
      return;
    }
    detent = Math.max(0, Math.min(detent + by, top));
  }

  /** Tap the grip: up a detent, wrapping — and on a one-detent sheet, away. */
  function cycle() {
    if (top === 0) close();
    else detent = detent >= top ? 0 : detent + 1;
  }

  /*
    A swipe is a pointer that travels far enough vertically before it lifts.
    24px is past the noise of a tap but well short of a scroll, and the grip is
    not a scrolling surface, so there is nothing to steal the gesture from.
  */
  const SWIPE = 24;
  let startY = 0;
  let dragging = $state(false);

  function down(e: PointerEvent) {
    startY = e.clientY;
    dragging = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  }
  function up(e: PointerEvent) {
    if (!dragging) return;
    dragging = false;
    const dy = e.clientY - startY;
    if (dy <= -SWIPE) step(1);
    else if (dy >= SWIPE) step(-1);
    // a tap, not a swipe: go up, and wrap so the gesture is never a dead end
    else cycle();
  }

  function onkey(e: KeyboardEvent) {
    if (e.key === 'ArrowUp') { e.preventDefault(); step(1); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); step(-1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cycle(); }
  }

  /*
    Above the first detent the sheet owns the screen, so the page behind it must
    not scroll under your thumb. Locked on the root element rather than <body>
    so a page that sets its own body background keeps it.
  */
  $effect(() => {
    if (typeof document === 'undefined') return;
    const lock = covering;
    const el = document.documentElement;
    const had = el.style.overflow;
    if (lock) el.style.overflow = 'hidden';
    return () => {
      if (lock) el.style.overflow = had;
    };
  });
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === 'Escape' && covering) close();
  }}
/>

{#if scrim && covering}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="scrim"
    onclick={close}
    onkeydown={(e) => e.key === 'Enter' && close()}
  ></div>
{/if}

<div class="sheet" class:dragging style="height:{height}">
  <!-- The grip is the whole gesture surface, not just the 38px bar: a 4px line
       is a target you miss. -->
  <div
    class="grip"
    role="slider"
    tabindex="0"
    aria-label="{label} — swipe up or down to resize"
    aria-valuemin={0}
    aria-valuemax={top}
    aria-valuenow={detent}
    onpointerdown={down}
    onpointerup={up}
    onpointercancel={() => (dragging = false)}
    onkeydown={onkey}
  >
    <span class="bar"></span>
  </div>

  <div class="body">
    {@render children()}
  </div>
</div>

<style>
  .scrim {
    position: fixed;
    inset: 0;
    z-index: 29;
    background: rgba(15, 20, 25, 0.32);
  }

  .sheet {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    max-height: 100dvh;
    background: var(--paper);
    border-top: 1px solid var(--ghost);
    /* the one shadow in the app: it is the only surface that floats over another */
    box-shadow: 0 -8px 24px rgba(15, 20, 25, 0.08);
    display: flex;
    flex-direction: column;
    min-height: 0;
    transition: height 0.22s ease;
  }
  .sheet.dragging {
    transition: none;
  }

  .grip {
    flex: none;
    padding: 8px 0 4px;
    display: flex;
    justify-content: center;
    cursor: grab;
    touch-action: none;
    background: var(--sunken);
  }
  .grip:focus-visible {
    outline: 2px solid var(--accent-ref);
    outline-offset: -2px;
  }
  .bar {
    width: 38px;
    height: 4px;
    border-radius: var(--radius);
    background: var(--ghost);
  }

  .body {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }
</style>
