<script lang="ts">
  import { parseMarkup, type SanskritSpan } from '$lib/markup';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  // Section titles carry Devanagari inline ("Guṇa Combination: @deva[अ]/@deva[आ]
  // + …"), so they need the same markup pass the body gets — otherwise the
  // spine and headings stay Devanagari while the reader is set to Telugu.
  // Separators (/, →, +) sit outside the markers and are left as written.

  let { text }: { text: string } = $props();

  let segments = $derived(parseMarkup(text));
</script>

{#each segments as seg}{#if seg.type === 'text'}{seg.content}{:else}{@const s =
      seg.content as SanskritSpan}<Sanskrit
      text={s.text}
      source={s.sourceScript === 'devanagari' ? 'devanagari' : 'iast'}
    />{/if}{/each}
