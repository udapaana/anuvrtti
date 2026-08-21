<script lang="ts">
  /*
    One spine for every ordered list of places: reader chapters, primer lessons,
    path categories, sūtra types, usage dimensions, dukṛṇkaraṇe rules. This
    replaces the three private `.spine` implementations (reader, usage,
    dukṛṇkaraṇe) — the single biggest dedupe in the cleanup.
  */
  import type { SpineItem } from './types';

  let {
    title = null,
    items,
    activeId = null,
    onpick
  }: {
    title?: string | null;
    items: SpineItem[];
    activeId?: string | null;
    onpick?: (id: string) => void;
  } = $props();

  function meta(item: SpineItem): string {
    const parts: string[] = [];
    if (item.sub) parts.push(item.sub);
    if (item.count !== undefined) parts.push(String(item.count));
    return parts.join(' · ');
  }
</script>

{#if title}
  <span class="label">{title}</span>
{/if}

{#each items as item (item.id)}
  {@const on = item.id === activeId}
  {#if item.href}
    <a class="item" class:on class:done={item.done} href={item.href}>
      <span class="name">{item.label}</span>
      {#if meta(item)}<span class="meta">{meta(item)}</span>{/if}
    </a>
  {:else}
    <button class="item" class:on class:done={item.done} onclick={() => onpick?.(item.id)}>
      <span class="name">{item.label}</span>
      {#if meta(item)}<span class="meta">{meta(item)}</span>{/if}
    </button>
  {/if}
{/each}

<style>
  .item {
    display: flex;
    flex-direction: column;
    gap: 1px;
    align-items: flex-start;
    text-align: left;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    border-radius: var(--radius);
    padding: 0 0 0 10px;
    cursor: pointer;
    color: var(--muted);
    text-decoration: none;
    font: inherit;
  }
  .item:hover {
    color: var(--ink);
  }
  .item.on {
    border-left-color: var(--accent);
    color: var(--ink);
  }
  .item.done .name {
    color: var(--accent-ok);
  }

  .name {
    font-family: var(--font-deva);
    font-size: 15px;
    color: inherit;
  }
  /* A spine item is one line of name and one of gloss; a long gloss clips
     rather than growing the item to three lines and losing the arc's shape. */
  .meta {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 960px) {
    .item {
      border-left: none;
      border-bottom: 2px solid transparent;
      padding: 0 0 4px;
      flex: none;
    }
    .item.on {
      border-bottom-color: var(--accent);
    }
  }
</style>
