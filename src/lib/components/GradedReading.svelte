<script lang="ts">
  /**
   * One graded reading from the vidvat corpus, three tiers:
   *   कथा    — the story/verse line (hero)
   *   पद-gloss — word-by-word analysis (panel); terms + sūtra citations are markers
   *   व्याख्या — Sanskrit commentary
   * Body Sanskrit renders through <Sanskrit> so anuvrtti's script-switching
   * (devanagari / telugu / iast) and accent handling apply automatically.
   *
   * Selection is shared with the parent's notes pane: clicking a marker selects
   * its note id; the parent scrolls the pane to it (and vice-versa).
   */
  import Sanskrit from './Sanskrit.svelte';

  interface Note {
    term?: string;
    en?: string;
    cite?: string;
    role?: string;
    text?: string;
  }
  interface Word {
    form: string;
    gloss?: string;
    lemma?: string;
    notes?: Note[];
  }
  interface Reading {
    id: string;
    sentence: string;
    vyakhya?: string;
    words?: Word[];
  }

  let {
    reading,
    selected = null,
    onselect
  }: {
    reading: Reading;
    selected?: string | null;
    onselect: (id: string | null) => void;
  } = $props();
</script>

<article class="reading" id={'body-' + reading.id}>
  <!-- कथा -->
  <div class="katha">
    <Sanskrit text={reading.sentence} source="devanagari" />
  </div>

  <!-- पद-gloss -->
  {#if reading.words?.length}
    <div class="gloss">
      {#each reading.words as w, wi}
        <div class="word">
          <span class="form"><Sanskrit text={w.form} source="devanagari" /></span>
          <span class="notes">
            {#each w.notes ?? [] as n, ni}
              {@const id = `${reading.id}-w${wi}n${ni}`}
              {#if n.term}
                <button
                  class="marker term"
                  class:sel={selected === id}
                  id={'m-' + id}
                  onclick={() => onselect(selected === id ? null : id)}
                ><Sanskrit text={n.term} source="devanagari" /></button>
              {:else if n.cite}
                <button
                  class="marker cite"
                  class:sel={selected === id}
                  id={'m-' + id}
                  onclick={() => onselect(selected === id ? null : id)}
                >{n.cite}</button>
              {:else if n.text}
                <span class="txt"><Sanskrit text={n.text} source="devanagari" /></span>
              {/if}
            {/each}
          </span>
        </div>
      {/each}
    </div>
  {/if}

  <!-- व्याख्या -->
  {#if reading.vyakhya}
    {@const vid = `${reading.id}-vy`}
    <button
      class="vyakhya marker-block"
      class:sel={selected === vid}
      id={'m-' + vid}
      onclick={() => onselect(selected === vid ? null : vid)}
    ><Sanskrit text={reading.vyakhya} source="devanagari" /></button>
  {/if}
</article>

<style>
  .reading {
    margin: 0 0 1.5rem;
    padding-bottom: 1.1rem;
    border-bottom: 1px solid var(--rule-2);
  }
  .katha {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--ink);
  }
  .gloss {
    margin: 0.6rem 0;
    padding: 0.6rem 0.85rem;
    background: var(--sunken);
    border-radius: 6px;
    font-size: 0.95rem;
  }
  .word {
    padding: 0.15rem 0;
    line-height: 1.9;
  }
  .form {
    font-weight: 600;
    margin-right: 0.4rem;
  }
  .marker {
    background: none;
    border: none;
    border-bottom: 1px dotted currentColor;
    cursor: pointer;
    padding: 0 0.1rem;
    margin: 0 0.12rem;
    font: inherit;
  }
  .marker.term {
    color: var(--accent-ref);
    font-weight: 600;
  }
  .marker.cite {
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-size: 0.82em;
    border-bottom-style: solid;
  }
  .marker.sel {
    background: var(--accent-soft);
    border-radius: 3px;
    border-bottom-color: transparent;
  }
  .txt {
    margin: 0 0.2rem;
  }
  .vyakhya {
    display: block;
    text-align: left;
    width: 100%;
    border: none;
    border-left: 2px solid var(--color-accent);
    background: none;
    padding: 0.1rem 0 0.1rem 0.85rem;
    margin-top: 0.5rem;
    font-size: 1.05rem;
    color: var(--ink);
    cursor: pointer;
  }
  .vyakhya.sel {
    background: var(--sunken);
  }
</style>
