<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    Exactly one shelf per surface, 40px, sticky under the nav. Page controls on
    the left, counts and state on the right. Its bottom hairline doubles as the
    progress track — which is what lets the reader drop its separate 2px rail
    and go from four stacked sticky layers to two.
  */
  let {
    left,
    right,
    progress = null
  }: {
    left?: Snippet;
    right?: Snippet;
    /** 0–100. Null hides the bar and leaves a plain hairline. */
    progress?: number | null;
  } = $props();

  const width = $derived(
    progress === null ? 0 : Math.max(0, Math.min(100, progress))
  );
</script>

<div class="shelf">
  <div class="inner">
    <div class="left">{#if left}{@render left()}{/if}</div>
    <div class="right">{#if right}{@render right()}{/if}</div>
  </div>
  <div class="track">
    {#if progress !== null}
      <div class="bar" style="width:{width}%"></div>
    {/if}
  </div>
</div>

<style>
  .shelf {
    position: sticky;
    top: var(--sticky-shelf);
    z-index: 19;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 24px;
    height: var(--shelf-h);
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--muted);
    overflow-x: auto;
    scrollbar-width: none;
  }
  .inner::-webkit-scrollbar {
    display: none;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 14px;
    white-space: nowrap;
  }
  .left {
    flex: 1;
    min-width: 0;
  }
  .right {
    color: var(--faint);
  }

  .track {
    height: 2px;
    background: var(--rule);
  }
  .bar {
    height: 100%;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  @media (max-width: 720px) {
    .inner {
      padding: 0 16px;
      gap: 10px;
    }
  }
</style>
