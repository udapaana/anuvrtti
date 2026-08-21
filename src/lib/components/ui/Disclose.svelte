<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    The workhorse of the cleanup. Secondary depth stays one tap away and costs
    one line of height, with its payload counted on the row — so the reader's
    rail shows identity first and nine stacked blocks never again, and every
    raw <details> in the lesson and reference pages reads the same.
  */
  let {
    /**
     * Plain text, or a snippet when the row's heading mixes scripts. A
     * paradigm reads "paradigm · देव · declension": the stem has to follow the
     * script toggle while the English around it must not, which a single
     * string cannot express.
     */
    label,
    /** Counted payload, e.g. "3 sūtras". Shown before the +/− mark. */
    count = null,
    open = $bindable(false),
    /** Nothing to show: the row renders inert with an em dash. */
    empty = false,
    children
  }: {
    label: string | Snippet;
    count?: string | null;
    open?: boolean;
    empty?: boolean;
    children: Snippet;
  } = $props();

  const hint = $derived(empty ? '—' : open ? '−' : count ? `${count} +` : '+');
</script>

<button
  class="row"
  class:empty
  disabled={empty}
  aria-expanded={empty ? undefined : open}
  onclick={() => (open = !open)}
>
  <span>{#if typeof label === 'string'}{label}{:else}{@render label()}{/if}</span>
  <span class="hint">{hint}</span>
</button>

{#if open && !empty}
  <div class="payload">
    {@render children()}
  </div>
{/if}

<style>
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    border-radius: var(--radius);
    background: transparent;
    padding: 11px 0;
    margin-bottom: -1px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    cursor: pointer;
    text-align: left;
  }
  .row:hover:not(.empty) .hint {
    color: var(--accent-hover);
  }
  .row.empty {
    cursor: default;
    color: var(--quiet);
  }

  .hint {
    color: var(--accent);
    flex: none;
    padding-left: 12px;
  }
  .row.empty .hint {
    color: var(--faint);
  }

  .payload {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 12px 0 4px;
  }
</style>
