<script lang="ts">
  /*
    One segmented control for the six pill styles the app grew: script pills,
    reader gloss modes, commentary tiers, volume tabs, list/by-lesson, due/all.
    Square, one border, ink fill when on.
  */
  import type { Segment } from './types';

  let {
    options,
    value,
    onchange,
    /** 'sm' is the shelf size; 'md' gives the popover a little more room. */
    size = 'sm',
    ariaLabel = undefined
  }: {
    options: Segment[];
    value: string;
    onchange: (id: string) => void;
    size?: 'sm' | 'md';
    ariaLabel?: string;
  } = $props();
</script>

<div class="seg {size}" role="group" aria-label={ariaLabel}>
  {#each options as opt (opt.id)}
    <button
      class:on={opt.id === value}
      class:deva={opt.deva}
      title={opt.title}
      aria-pressed={opt.id === value}
      onclick={() => onchange(opt.id)}
    >
      {opt.label}
    </button>
  {/each}
</div>

<style>
  .seg {
    display: flex;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    flex: none;
  }
  .seg button {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    color: var(--muted);
    border: none;
    border-left: 1px solid var(--rule-2);
    padding: 4px 11px;
    cursor: pointer;
    white-space: nowrap;
  }
  .seg.md button {
    font-size: 12px;
    padding: 5px 12px;
  }
  .seg button:first-child {
    border-left: none;
  }
  .seg button:hover {
    color: var(--ink);
  }
  .seg button.on {
    background: var(--ink);
    color: var(--paper);
  }
  .seg button.deva {
    font-family: var(--font-deva);
    font-size: 13px;
  }
</style>
