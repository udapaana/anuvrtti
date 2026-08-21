<script lang="ts">
  /*
    One chip for the four badge classes and every morphological tag. Category
    reads from the label; the three accents stay reserved for state, not
    taxonomy — which is what retires .badge-samjna / -paribhasha / -vidhi /
    -adhikara and their four hues.
  */
  let {
    label,
    tone = 'quiet',
    deva = false,
    title = undefined
  }: {
    label: string;
    /** 'quiet' is the default; 'on' marks the selected one; 'ok' marks done. */
    tone?: 'quiet' | 'on' | 'ok' | 'ref';
    deva?: boolean;
    title?: string;
  } = $props();
</script>

<span class="chip {tone}" class:deva {title}>{label}</span>

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
