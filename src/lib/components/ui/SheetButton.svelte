<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    The door to a region that has become a sheet.

    On a phone the spine and the rail are no longer beside the column, so each
    one needs somewhere to be opened from. That somewhere is the shelf, which
    is the only per-page bar the layout keeps at every width. One control, so
    the gesture is the same on every surface: read the label, tap the caret,
    the sheet comes up.
  */
  let {
    /** Plain text, or a snippet when the label is Sanskrit and follows the toggle. */
    label,
    onopen,
    title = undefined
  }: {
    label: string | Snippet;
    onopen: () => void;
    title?: string;
  } = $props();
</script>

<button class="sheetbtn" onclick={onopen} {title}>
  {#if typeof label === 'string'}{label}{:else}{@render label()}{/if}
  <span class="caret" aria-hidden="true">▾</span>
</button>

<style>
  .sheetbtn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: transparent;
    border: none;
    border-radius: var(--radius);
    padding: 4px 0;
    cursor: pointer;
    white-space: nowrap;
    flex: none;
  }
  .sheetbtn:hover {
    color: var(--accent);
  }
  .caret {
    font-size: 11px;
    color: var(--faint);
  }
  .sheetbtn:hover .caret {
    color: var(--accent);
  }
</style>
