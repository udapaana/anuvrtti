<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import type { Script } from '$lib/transliteration';

  /*
    One chip for the four badge classes and every morphological tag. Category
    reads from the label; the three accents stay reserved for state, not
    taxonomy — which is what retires .badge-samjna / -paribhasha / -vidhi /
    -adhikara and their four hues.
  */
  let {
    label,
    tone = 'quiet',
    script = undefined,
    title = undefined,
    dot = false,
    derived = false
  }: {
    label: string;
    /** 'quiet' is the default; 'on' marks the selected one; 'ok' marks done. */
    tone?: 'quiet' | 'on' | 'ok' | 'ref';
    /** Source script, when the label is Sanskrit — it then follows the toggle. */
    script?: Script;
    title?: string;
    /**
     * A mark on the chip itself, for a property of THIS tag rather than a
     * state of the chip — the reader uses it for "the corpus introduces this
     * term here". A separate labelled block would name the term twice.
     */
    dot?: boolean;
    /**
     * The value was worked out from the form rather than annotated by hand.
     * Dashed, the same way the system card draws a default — true of the word,
     * but nobody wrote it down.
     */
    derived?: boolean;
  } = $props();
</script>

<span class="chip {tone}" class:deva={!!script} class:dotted={dot} class:derived {title}>
  {#if script}<Sanskrit text={label} source={script} />{:else}{label}{/if}
  {#if dot}<span class="dot" aria-hidden="true"></span>{/if}
</span>

<style>
  .chip {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.5;
    padding: 3px 8px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--muted);
    white-space: nowrap;
  }
  .chip.deva {
    font-family: var(--font-deva);
    font-size: 12px;
  }
  /* inline-flex only when there is a dot to align, so an ordinary chip keeps
     its inline-block baseline behaviour in a wrapping row */
  .chip.dotted {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .chip.derived {
    border-style: dashed;
  }
  .dot {
    width: 4px;
    height: 4px;
    flex: none;
    border-radius: 50%;
    background: var(--accent);
  }
  .chip.on {
    border-color: var(--ink);
    color: var(--ink);
  }
  .chip.ok {
    border-color: var(--accent-ok);
    color: var(--accent-ok);
  }
  .chip.ref {
    border-color: var(--accent-ref);
    color: var(--accent-ref);
  }
</style>
