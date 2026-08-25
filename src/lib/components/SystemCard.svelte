<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import type { System } from '$lib/systems';

  let {
    system,
    activeTerm = null,
    metTerms = new Set<string>(),
    onpick
  }: {
    system: System;
    /** The cell the current word occupies — drawn strongest. */
    activeTerm?: string | null;
    /** Cells the learner has already met — lit; the rest sit dim. */
    metTerms?: Set<string>;
    /** Tapping a cell opens its concept card. */
    onpick?: (term: string) => void;
  } = $props();
</script>

<div class="system-card">
  <div class="sys-head">
    <span class="sys-name"><Sanskrit text={system.name} source="devanagari" /></span>
    <span class="sys-scope">· {system.scope}</span>
  </div>
  <p class="sys-shape">{system.shape}</p>
  {#each system.groups as g}
    <div class="sys-group">
      <div class="sys-axis">
        <Sanskrit text={g.axis} source="devanagari" />{#if g.roman}<span class="sys-roman"> · {g.roman}</span>{/if}
      </div>
      <div class="sys-items">
        {#each g.items as it}
          <button
            class="sys-chip"
            class:active={it.t === activeTerm}
            class:met={metTerms.has(it.t) && it.t !== activeTerm}
            title={it.en}
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
  .sys-chip.active {
    opacity: 1;
    color: var(--ink);
    border-color: var(--ink);
    background: var(--surface-2, transparent);
  }
</style>
