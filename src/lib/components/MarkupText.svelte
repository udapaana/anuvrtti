<script lang="ts">
  import { parseMarkup, type ParsedContent, type SanskritSpan } from '$lib/markup';
  import { transliterate, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';

  interface Props {
    text: string;
    class?: string;
  }

  let { text, class: className = '' }: Props = $props();

  let segments: ParsedContent[] = $derived(parseMarkup(text));

  // Map source script names to our Script type
  function mapScript(source: 'devanagari' | 'iast'): Script {
    return source === 'devanagari' ? 'devanagari' : 'iast';
  }

  // Transliterate a Sanskrit span to the target script
  async function transliterateSpan(span: SanskritSpan, targetScript: Script): Promise<string> {
    const sourceScript = mapScript(span.sourceScript);

    // If target matches source, return original
    if (sourceScript === targetScript) {
      return span.text;
    }

    // If we have an alt in the target script, use it
    if (span.altScript && mapScript(span.altScript) === targetScript && span.altText) {
      return span.altText;
    }

    // Otherwise transliterate
    try {
      return await transliterate(span.text, sourceScript, targetScript);
    } catch {
      return span.text;
    }
  }
</script>

<span class={className}>{#each segments as segment}{#if segment.type === 'text'}{segment.content}{:else}{@const span = segment.content as SanskritSpan}{#await transliterateSpan(span, $displayScript)}<span class="sanskrit-inline" data-source-script={span.sourceScript}>{span.text}</span>{:then result}<span class="sanskrit-inline" data-source-script={span.sourceScript}>{result}</span>{/await}{/if}{/each}</span>
