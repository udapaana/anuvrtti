<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    The one page skeleton. A page declares which regions it has — a shelf of
    controls, a spine where the material has an authored order, a rail where a
    selection has depth — and Shell owns the grid and every sticky offset. No
    page sets `top:` again; the offsets come from --sticky-* in app.css, so
    changing the nav height cannot break a page.
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
    spineWidth = '176px'
  }: {
    shelf?: Snippet;
    spine?: Snippet;
    rail?: Snippet;
    children: Snippet;
    measure?: boolean;
    wide?: boolean;
    columnMax?: string;
    spineWidth?: string;
  } = $props();

  const columns = $derived(
    spine && rail ? 'both' : spine ? 'spine' : rail ? 'rail' : 'column'
  );
</script>

{#if shelf}
  {@render shelf()}
{/if}

<div
  class="shell {columns}"
  class:wide
  style={columns === 'column' ? `max-width:${columnMax}` : `--spine-w:${spineWidth}`}
>
  {#if spine}
    <nav class="spine">{@render spine()}</nav>
  {/if}

  <main class="column" class:measure>
    {@render children()}
  </main>

  {#if rail}
    <aside class="rail">{@render rail()}</aside>
  {/if}
</div>

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
  .shell.both {
    grid-template-columns: var(--spine-w, 176px) minmax(0, 1fr) 312px;
  }
  .shell.spine {
    grid-template-columns: var(--spine-w, 176px) minmax(0, 1fr);
  }
  .shell.rail {
    grid-template-columns: minmax(0, 1fr) 312px;
  }
  .shell.column {
    grid-template-columns: minmax(0, 1fr);
    max-width: 900px;
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
  .shell.column > .column {
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
    min-height: 520px;
    min-width: 0;
  }

  /* Below the grid breakpoint the regions stack: shelf stays, spine becomes a
     scrolling row above the column, rail falls to the bottom. Nothing is lost,
     nothing is pinned. */
  @media (max-width: 960px) {
    .shell,
    .shell.both,
    .shell.spine,
    .shell.rail {
      grid-template-columns: minmax(0, 1fr);
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
      min-height: 0;
    }
    .column {
      padding: 24px 16px 60px;
    }
  }
</style>
