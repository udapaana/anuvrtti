<script lang="ts">
  import { parseMarkup, type ParsedContent, type SanskritSpan } from '$lib/markup';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    text: string;
    class?: string;
  }

  let { text, class: className = '' }: Props = $props();

  let segments = $derived(parseMarkup(text));
</script>

<span class={className}>{#each segments as segment}{#if segment.type === 'text'}{segment.content}{:else}{@const span = segment.content as SanskritSpan}<Sanskrit text={span.text} source={span.sourceScript === 'devanagari' ? 'devanagari' : 'iast'} />{/if}{/each}</span>
