<script lang="ts">
  import type { Snippet } from 'svelte';
  import Sheet from './Sheet.svelte';

  /*
    The one page skeleton. A page declares which regions it has — a shelf of
    controls, a spine where the material has an authored order, a rail where a
    selection has depth — and Shell owns the grid and every sticky offset. No
    page sets `top:` again; the offsets come from --sticky-* in app.css, so
    changing the nav height cannot break a page.

    On a phone the grid cannot simply collapse. Stacking put the spine on its
    side as a chip row and dropped the rail to the bottom of the page, below
    every card — which is where a commentary on what you are reading is least
    use. Under 960px each region takes its native mobile form instead: the
    shelf stays where it is, and the spine and the rail become bottom sheets.
    A page opts in with `sheets`; everything else still stacks.
  */
  let {
    shelf,
    spine,
    rail,
    children,
    /** Constrain the column to a reading measure. Prose pages want this. */
    measure = false,
    /** Widest exhibit in the app (the conjugation table) opts out of the cap. */
    wide = false,
    /** Column-only pages set their own cap; the default is a comfortable page. */
    columnMax = '900px',
    /** A spine of long Devanagari labels or a matrix needs more than 176px. */
    spineWidth = '176px',
    /** The rail's column width. The reader widens its own; everything else takes the default. */
    railWidth = '312px',
    /**
     * The rail owns its own frame: a pinned head, a scrolling middle and a
     * pinned foot. Shell then supplies the box and nothing else — no padding,
     * no gap, no scrolling of its own — because the region inside decides
     * which part scrolls. Every other page keeps the padded, scrolling rail.
     */
    railFrame = false,
    /**
     * Under 960px, make the spine and the rail bottom sheets instead of
     * stacking them into the column. Requires `railFrame` — a sheet is a
     * pinned head over a scrolling middle, which is what the frame already is.
     */
    sheets = false,
    /** Which rail detent is showing: 0 peek, 1 half, 2 full. Bindable so a page
        can open the sheet itself — the reader does when a question is drawn. */
    railDetent = $bindable(0),
    /** Whether the spine sheet is up. The page provides the control that opens it. */
    spineOpen = $bindable(false)
  }: {
    shelf?: Snippet;
    spine?: Snippet;
    rail?: Snippet;
    children: Snippet;
    measure?: boolean;
    wide?: boolean;
    columnMax?: string;
    spineWidth?: string;
    railWidth?: string;
    railFrame?: boolean;
    sheets?: boolean;
    railDetent?: number;
    spineOpen?: boolean;
  } = $props();

  /*
    Which form the regions take. A media QUERY styles what is already there;
    a sheet is a different element in a different place, so the switch has to
    reach the markup. Server-rendered as desktop, corrected on mount — the
    phone then renders sheets from its first paint after hydration.
  */
  let narrow = $state(false);
  $effect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(max-width: 960px)');
    const sync = () => (narrow = mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  });
  const asSheets = $derived(sheets && narrow);

  // Leaving the phone with a sheet open would strand the spine's scrim on a
  // layout that has no sheet to dismiss.
  $effect(() => {
    if (!asSheets) spineOpen = false;
  });

  /*
    The wrapper's layout modifier is prefixed, so it cannot collide with the
    region classes below it — `.shell.spine` would otherwise match the nav's
    own `.spine` rule and take its display:flex over the grid.
  */
  const columns = $derived(
    spine && rail ? 'has-both' : spine ? 'has-spine' : rail ? 'has-rail' : 'col-only'
  );
</script>

{#if shelf}
  {@render shelf()}
{/if}

<div
  class="shell {columns}"
  class:wide
  style={columns === 'col-only'
    ? `max-width:${columnMax}`
    : `--spine-w:${spineWidth};--rail-w:${railWidth}`}
>
  {#if spine && !asSheets}
    <nav class="spine">{@render spine()}</nav>
  {/if}

  <main class="column" class:measure class:under-sheet={asSheets && !!rail}>
    {@render children()}
  </main>

  {#if rail && !asSheets}
    <aside class="rail" class:framed={railFrame}>{@render rail()}</aside>
  {/if}
</div>

{#if asSheets}
  <!--
    The rail, as the sheet it becomes. Peek is content-sized — the word head and
    nothing else — so the line stays on screen while its word is identified,
    which is the co-presence the desktop layout gets for free.
  -->
  {#if rail}
    <Sheet detents={['auto', '62dvh', '100dvh']} bind:detent={railDetent} label="word detail">
      <aside class="rail framed sheeted">{@render rail()}</aside>
    </Sheet>
  {/if}

  <!-- The spine, as a sheet over the reading. One detent: it is a place you go
       to and come back from, not a thing you keep half open. -->
  {#if spine && spineOpen}
    <Sheet
      detents={['74dvh']}
      detent={0}
      scrim
      label="chapters"
      ondismiss={() => (spineOpen = false)}
    >
      <nav class="spine sheeted">{@render spine()}</nav>
    </Sheet>
  {/if}
{/if}

<style>
  .shell {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    align-items: start;
  }
  .shell.wide {
    max-width: none;
  }
  .shell.has-both {
    grid-template-columns: var(--spine-w, 176px) minmax(0, 1fr) var(--rail-w, 312px);
  }
  .shell.has-spine {
    grid-template-columns: var(--spine-w, 176px) minmax(0, 1fr);
  }
  .shell.has-rail {
    grid-template-columns: minmax(0, 1fr) var(--rail-w, 312px);
  }
  .shell.col-only {
    grid-template-columns: minmax(0, 1fr);
    max-width: 900px;
  }

  /*
    The spine and the rail are sticky, and each one scrolls INSIDE its own box.

    Without the max-height a sticky column is as tall as its content, so sticky
    pins its top and the only way to reach its bottom is to scroll the whole
    page — you had to run the centre column to its end before the last chapter
    or the paradigm came into view. Capping the height at the viewport (less the
    nav and shelf above it) makes each column a scroll container of its own.

    `auto`, not `scroll`: a short spine or a rail holding two lines is shorter
    than the cap, so it never becomes scrollable and the wheel keeps falling
    through to the page. `overscroll-behavior: contain` stops a column that IS
    scrollable from grabbing the page once it hits its own end.
  */
  .spine,
  .rail {
    max-height: calc(100vh - var(--sticky-rail));
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
  }

  .spine {
    border-right: 1px solid var(--rule);
    padding: 26px 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: start;
    position: sticky;
    top: var(--sticky-rail);
    min-width: 0;
  }

  .column {
    padding: 30px 40px 80px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 0;
  }
  .column.measure {
    max-width: 68ch;
  }
  .shell.col-only > .column {
    padding: 40px 24px 80px;
  }

  .rail {
    border-left: 1px solid var(--rule);
    background: var(--sunken);
    padding: 26px 20px 60px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: start;
    position: sticky;
    top: var(--sticky-rail);
    /*
      The rail runs the full height of the viewport, not the height of whatever
      is in it. It is the only region carrying its own surface, so when it was
      sized by its content the sunken ground and the left border stopped in mid
      air — a panel with a torn edge partway down the page. A fixed height puts
      the bottom of the panel at the bottom of the window, and the content
      inside it scrolls (or does not) exactly as before.
    */
    height: calc(100vh - var(--sticky-rail));
    min-width: 0;
    transition: width 0.18s ease;
  }

  /*
    A framed rail is a panel, not a scroll of blocks: the region inside pins its
    own head and foot and scrolls only the middle. Shell hands it the box and
    gets out of the way — padding here would sit outside the pinned head, and a
    scrollbar here would be a second one beside the middle's own.
  */
  .rail.framed {
    padding: 0;
    gap: 0;
    overflow: hidden;
    background: var(--paper);
  }

  /* Below the grid breakpoint the regions stack: shelf stays, spine becomes a
     scrolling row above the column, rail falls to the bottom. Nothing is lost,
     nothing is pinned. */
  @media (max-width: 960px) {
    .shell,
    .shell.has-both,
    .shell.has-spine,
    .shell.has-rail {
      grid-template-columns: minmax(0, 1fr);
    }
    /* Stacked, nothing is pinned, so neither column owns a viewport-tall scroll
       box any more — they grow with the page like the column between them. */
    .spine,
    .rail {
      max-height: none;
      overflow-y: visible;
    }
    .spine {
      position: static;
      flex-direction: row;
      overflow-x: auto;
      gap: 18px;
      border-right: none;
      border-bottom: 1px solid var(--rule);
      padding: 12px 16px;
    }
    .rail {
      position: static;
      border-left: none;
      border-top: 1px solid var(--rule);
      /* stacked, it is a block in the flow again, not a viewport-tall panel */
      height: auto;
      min-height: 0;
    }
    /* nothing is pinned when stacked, so the frame stops clipping too */
    .rail.framed {
      overflow: visible;
    }
    /*
      …unless it is a SHEET, which is pinned again — to the viewport rather than
      to a grid cell. It fills the sheet, keeps its own head/middle/foot frame,
      and drops the border and surface the sheet already provides.
    */
    .rail.framed.sheeted {
      position: static;
      height: 100%;
      max-height: none;
      overflow: hidden;
      border-left: none;
      border-top: none;
      width: auto;
      /* the grid rail sits at the TOP of its cell; in the sheet it must fill
         the width instead, or it shrink-wraps to the widest word and leaves
         the sheet's own surface showing down one side */
      align-self: stretch;
    }
    .spine.sheeted {
      position: static;
      align-self: stretch;
      height: 100%;
      max-height: none;
      overflow-y: auto;
      overscroll-behavior: contain;
      flex-direction: column;
      border-right: none;
      border-bottom: none;
      padding: 4px 0 24px;
      gap: 2px;
    }
    /* the last card must clear the sheet's peek, or it is unreadable under it */
    .column.under-sheet {
      padding-bottom: 160px;
    }
    .column {
      padding: 24px 16px 60px;
    }
  }
</style>
