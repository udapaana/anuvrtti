<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import type { System } from '$lib/systems';

  let {
    system,
    activeTerm = null,
    wordTerms = new Set<string>(),
    metTerms = new Set<string>(),
    onpick
  }: {
    system: System;
    /** The cell whose note is open — the one you tapped. */
    activeTerm?: string | null;
    /**
     * WHERE THIS WORD SITS, on every axis at once.
     *
     * The card used to mark only the tag you tapped and the tags you had met
     * elsewhere, which is why a form said to fix five things at once showed one
     * or two of them lit and the rest grey: `gacchati` is लट् · प्रथमपुरुष ·
     * एकवचन · परस्मैपद · कर्तरि, and the card lit लट् (tapped) and एकवचन (met
     * before) and left the three it had not happened to meet looking as though
     * they did not apply. The system is a coordinate space; a word has a value
     * on each axis, so each one is marked.
     */
    wordTerms?: Set<string>;
    /** Cells the learner has met elsewhere — lit, but not this word's. */
    metTerms?: Set<string>;
    /** Tapping a cell opens its concept card. */
    onpick?: (term: string) => void;
  } = $props();
</script>

<div class="system-card">
  <div class="sys-head">
    <span class="sys-name"><Sanskrit text={system.name} source="devanagari" /></span>
    <span class="sys-scope">· {system.scope}</span>
    <!-- counted from the axes actually drawn, so the card can never claim a
         number it does not show -->
    <span class="sys-axes">{system.groups.length} {system.groups.length === 1 ? 'axis' : 'axes'}</span>
  </div>
  <p class="sys-shape">{system.shape}</p>
  {#each system.groups as g}
    <div class="sys-group">
      <div class="sys-axis">
        <Sanskrit text={g.axis} source="devanagari" />{#if g.roman}<span class="sys-roman"> · {g.roman}</span>{/if}
      </div>
      <div class="sys-items">
        {#each g.items as it}
          {@const here = wordTerms.has(it.t)}
          <button
            class="sys-chip"
            class:here
            class:active={it.t === activeTerm}
            class:met={metTerms.has(it.t) && !here && it.t !== activeTerm}
            title={here ? `${it.en} — this word` : it.en}
            onclick={() => onpick?.(it.t)}
          >
            <Sanskrit text={it.t} source="devanagari" />
          </button>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .system-card {
    margin-top: 8px;
    padding: 10px 12px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
  }
  .sys-head {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 4px;
  }
  .sys-name {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--ink);
  }
  .sys-scope {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
  .sys-axes {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--faint);
  }
  .sys-shape {
    margin: 0 0 8px;
    font-size: 12px;
    line-height: 1.5;
    color: var(--ink-2, var(--ink));
  }
  .sys-group {
    margin-top: 8px;
  }
  .sys-axis {
    font-family: var(--font-deva);
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 4px;
  }
  .sys-roman {
    font-family: var(--font-mono);
  }
  .sys-items {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  /* The cells: dim by default (the map), lit when met, boxed when current. */
  .sys-chip {
    cursor: pointer;
    font-family: var(--font-deva);
    font-size: 12px;
    padding: 2px 7px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    background: none;
    color: var(--muted);
    opacity: 0.6;
    transition: opacity 0.15s, border-color 0.15s, color 0.15s;
  }
  .sys-chip:hover {
    opacity: 1;
    color: var(--ink);
    border-color: var(--accent);
  }
  .sys-chip.met {
    opacity: 1;
    color: var(--ink);
  }
  /* this word's value on this axis — the accent, because it is the answer to
     "where does this word sit?" that the whole card exists to give */
  .sys-chip.here {
    opacity: 1;
    color: var(--accent);
    border-color: var(--accent);
  }
  /* and the one whose note is open, filled so it reads as the current subject */
  .sys-chip.active {
    opacity: 1;
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-soft);
  }
</style>
