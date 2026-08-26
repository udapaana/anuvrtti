<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { VOWELS, MATRIX } from './sandhi-matrix';

  // Where the current rule stops. Kale states §§ 19-24 as six prose rules; laid
  // out first-vowel × second-vowel, the rule being read lights up and the rest
  // of the grid shows which neighbouring rule takes over. Nothing else in the
  // reader shows a reader the boundary of a rule.

  let { rule, onpick }: { rule: number; onpick: (n: number) => void } = $props();

  const RULE_NAMES: Record<number, string> = {
    19: 'savarṇa dīrgha',
    20: 'guṇa',
    21: 'vṛddhi',
    22: 'yaṇ',
    24: 'ayavāyāv',
  };

  // Rules appearing anywhere in the grid, in section order, for the legend.
  let present = $derived(
    [...new Set(Object.values(MATRIX).flatMap((row) => Object.values(row).map((c) => c.rule)))].sort(
      (a, b) => a - b,
    ),
  );
</script>

<section class="matrix">
  <div class="head">
    <span class="eyebrow">where this rule stops</span>
    <span class="sub">first vowel · second vowel</span>
  </div>

  <div class="grid" style="grid-template-columns:repeat({VOWELS.length + 1}, minmax(0, 1fr))">
    <div class="corner">+</div>
    {#each VOWELS as v}
      <div class="colhead"><Sanskrit text={v} source="devanagari" /></div>
    {/each}

    {#each VOWELS as first}
      <div class="rowhead"><Sanskrit text={first} source="devanagari" /></div>
      {#each VOWELS as second}
        {@const cell = MATRIX[first]?.[second]}
        {#if cell}
          <button
            class="cell"
            class:on={cell.rule === rule}
            onclick={() => onpick(cell.rule)}
            title="§ {cell.rule} — {RULE_NAMES[cell.rule] ?? ''}"
          >
            <span class="out"><Sanskrit text={cell.out} source="devanagari" /></span>
            <span class="tag">§ {cell.rule}</span>
          </button>
        {:else}
          <div class="cell blank"></div>
        {/if}
      {/each}
    {/each}
  </div>

  <div class="legend">
    {#each present as n}
      <button class="key" class:on={n === rule} onclick={() => onpick(n)}>
        <span class="swatch" class:lit={n === rule}></span>
        § {n}
        <span class="kname">{RULE_NAMES[n] ?? ''}</span>
      </button>
    {/each}
  </div>
</section>

<style>
  .matrix {
    margin-top: 28px;
    padding-top: 18px;
    border-top: 1px solid var(--rule);
  }
  .head {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-bottom: 11px;
  }
  .eyebrow {
    font: 600 11px/1 var(--font-mono);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .sub {
    font:
      400 11.5px/1 var(--font-serif);
    color: var(--quiet);
  }
  .grid {
    display: grid;
    gap: 1px;
    background: var(--rule-2);
    border: 1px solid var(--rule-2);
    border-radius: 6px;
    overflow: hidden;
  }
  .corner,
  .colhead,
  .rowhead {
    background: var(--sunken);
    padding: 6px 4px;
    text-align: center;
    font-family: 'Noto Serif Devanagari', 'Noto Serif Telugu', serif;
    font-size: 14px;
    color: var(--ink-2);
  }
  .corner {
    font: 400 11px var(--font-mono);
    color: var(--quiet);
  }
  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 7px 4px;
    background: #fff;
    border: 0;
    cursor: pointer;
    font: inherit;
  }
  .cell:hover {
    background: var(--sunken);
  }
  .cell.blank {
    background: var(--sunken);
    cursor: default;
  }
  .out {
    font-family: 'Noto Serif Devanagari', 'Noto Serif Telugu', serif;
    font-size: 15px;
    color: var(--quiet);
  }
  .tag {
    font: 400 9.5px/1 var(--font-mono);
    color: var(--faint);
  }
  /* The rule being read. Everything else is a neighbour. */
  .cell.on {
    background: var(--sunken);
  }
  .cell.on .out {
    color: var(--accent-hover);
    font-weight: 600;
  }
  .cell.on .tag {
    color: var(--accent);
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    margin-top: 10px;
  }
  .key {
    display: flex;
    align-items: center;
    gap: 6px;
    border: 0;
    background: none;
    padding: 2px 0;
    cursor: pointer;
    font:
      400 11.5px/1 var(--font-serif);
    color: var(--muted);
  }
  .key:hover {
    color: var(--accent);
  }
  .key.on {
    color: var(--ink);
    font-weight: 600;
  }
  .swatch {
    width: 9px;
    height: 9px;
    border-radius: 2px;
    background: var(--rule-2);
    display: inline-block;
  }
  .swatch.lit {
    background: var(--accent);
  }
  .kname {
    color: var(--quiet);
    font-style: italic;
  }
  .key.on .kname {
    color: var(--muted);
  }
</style>
