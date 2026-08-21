<script lang="ts">
  import type { Snippet } from 'svelte';

  /*
    One word row, so a word looks the same in the deck list, in a lesson's
    vocabulary, and in the reader's rail. The actions slot is what carries
    "+ keep for review" and the Monier-Williams link.
  */
  let {
    word,
    gloss = null,
    lesson = null,
    href = null,
    onpick = undefined,
    actions
  }: {
    word: string;
    gloss?: string | null;
    lesson?: string | null;
    href?: string | null;
    onpick?: () => void;
    actions?: Snippet;
  } = $props();
</script>

<div class="row">
  {#if href}
    <a class="word" {href}>{word}</a>
  {:else if onpick}
    <button class="word as-button" onclick={onpick}>{word}</button>
  {:else}
    <span class="word">{word}</span>
  {/if}
  <span class="gloss">{gloss ?? ''}</span>
  <span class="lesson">{lesson ?? ''}</span>
  <span class="actions">{#if actions}{@render actions()}{/if}</span>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: minmax(6rem, 2fr) minmax(0, 3fr) 4rem auto;
    gap: 14px;
    align-items: baseline;
    padding: 11px 0;
    border-top: 1px solid var(--rule);
  }

  .word {
    font-family: var(--font-deva);
    font-size: 16px;
    color: var(--ink);
    text-decoration: none;
  }
  .word.as-button {
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    font: inherit;
    font-family: var(--font-deva);
    font-size: 16px;
  }
  a.word:hover,
  .word.as-button:hover {
    color: var(--accent);
  }

  .gloss {
    font-size: 15px;
    color: var(--muted);
    min-width: 0;
  }
  .lesson,
  .actions {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    text-align: right;
  }

  @media (max-width: 640px) {
    .row {
      grid-template-columns: minmax(0, 1fr) auto;
    }
    .lesson {
      display: none;
    }
    .gloss {
      grid-column: 1 / -1;
    }
  }
</style>
