<script lang="ts">
  /*
    Every paradigm and matrix in the app through one component: the conjugation
    table, /ref/tables, the usage grid, SandhiMatrix, and the reader rail's
    paradigm. Hairline cells on the token surface, one accent for the lit cell,
    axis heads tinted — so a table looks the same wherever it appears.
  */
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import type { Script } from '$lib/transliteration';
  import type { Cell } from './types';

  let {
    colHeads,
    rowHeads = [],
    rows,
    /** [rowIndex, colIndex] of the cell to light. */
    lit = null,
    onpick = undefined,
    /** Rail paradigms sit on the sunken surface; page grids sit on paper. */
    surface = 'paper',
    /** Source script of the heads and cells — they follow the toggle. */
    script = 'devanagari',
    maxWidth = null
  }: {
    colHeads: string[];
    rowHeads?: string[];
    rows: (Cell | string)[][];
    lit?: [number, number] | null;
    onpick?: (row: number, col: number) => void;
    surface?: 'paper' | 'sunken';
    script?: Script | null;
    maxWidth?: string | null;
  } = $props();

  const cells = $derived(
    rows.map((row) => row.map((c) => (typeof c === 'string' ? { text: c } : c)))
  );
  const template = $derived(
    rowHeads.length ? `auto repeat(${colHeads.length}, 1fr)` : `repeat(${colHeads.length}, 1fr)`
  );
</script>

<div
  class="grid {surface}"
  style="grid-template-columns:{template};{maxWidth ? `max-width:${maxWidth}` : ''}"
>
  {#if rowHeads.length}
    <span class="corner"></span>
  {/if}
  {#each colHeads as head, ci (ci)}
    <span class="head col" class:on={lit && lit[1] === ci}>{#if script}<Sanskrit text={head} source={script} />{:else}{head}{/if}</span>
  {/each}

  {#each cells as row, ri (ri)}
    {#if rowHeads.length}
      <span class="head row" class:on={lit && lit[0] === ri}>{#if script}<Sanskrit text={rowHeads[ri]} source={script} />{:else}{rowHeads[ri]}{/if}</span>
    {/if}
    {#each row as cell, ci (ci)}
      {@const on = !!lit && lit[0] === ri && lit[1] === ci}
      {#if cell.live && onpick}
        <button class="cell live" class:on title={cell.title} onclick={() => onpick(ri, ci)}>
          {#if script}<Sanskrit text={cell.text} source={script} />{:else}{cell.text}{/if}
        </button>
      {:else}
        <span class="cell" class:on class:dim={cell.live === false} title={cell.title}>
          {#if script}<Sanskrit text={cell.text} source={script} />{:else}{cell.text}{/if}
        </span>
      {/if}
    {/each}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    font-family: var(--font-deva);
    font-size: 13px;
    overflow-x: auto;
  }

  .corner,
  .head,
  .cell {
    background: var(--paper);
    padding: 7px 10px;
    text-align: left;
    min-width: 0;
  }
  .grid.sunken .corner,
  .grid.sunken .head {
    background: var(--sunken);
  }

  .head {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .head.row {
    font-family: var(--font-deva);
    font-size: 12px;
  }
  .head.on {
    color: var(--accent);
  }

  .cell {
    color: var(--muted);
  }
  .cell.dim {
    color: var(--ghost);
  }
  .cell.on {
    background: var(--accent-soft);
    color: var(--ink);
  }

  button.cell {
    border: none;
    border-radius: var(--radius);
    font: inherit;
    color: var(--accent);
    cursor: pointer;
  }
  button.cell:hover {
    background: var(--accent-soft);
    color: var(--ink);
  }
</style>
