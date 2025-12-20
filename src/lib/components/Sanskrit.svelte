<script lang="ts">
  import { transliterate, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';

  interface Props {
    /** The Sanskrit text to display */
    text: string;
    /** Source script of the text (default: devanagari) */
    source?: Script;
    /** Optional CSS class */
    class?: string;
  }

  let { text, source = 'devanagari', class: className = '' }: Props = $props();

  let displayText = $state('');
  let currentTarget = $state<Script>('devanagari');
  let mounted = $state(false);

  // Map script to appropriate Noto Sans font
  const scriptFonts: Record<Script, string> = {
    devanagari: "'Noto Sans Devanagari'",
    telugu: "'Noto Sans Telugu'",
    kannada: "'Noto Sans Kannada'",
    malayalam: "'Noto Sans Malayalam'",
    tamil: "'Noto Sans Tamil'",
    bengali: "'Noto Sans Bengali'",
    gujarati: "'Noto Sans Gujarati'",
    gurmukhi: "'Noto Sans Gurmukhi'",
    odia: "'Noto Sans Oriya'",
    sinhala: "'Noto Sans Sinhala'",
    iast: "'Noto Sans'",
    iso15919: "'Noto Sans'",
    slp1: "'Noto Sans'",
    hk: "'Noto Sans'",
    itrans: "'Noto Sans'",
    velthuis: "'Noto Sans'",
  };

  let fontFamily = $derived(scriptFonts[currentTarget] + ', sans-serif');

  onMount(() => {
    mounted = true;
    currentTarget = get(displayScript);

    // Subscribe to store changes
    const unsubscribe = displayScript.subscribe(value => {
      currentTarget = value;
    });

    return unsubscribe;
  });

  // Re-transliterate whenever text, source, or target script changes
  $effect(() => {
    const src = source;
    const target = currentTarget;
    const input = text;

    if (!mounted || !input) {
      displayText = input || '';
      return;
    }

    if (src === target) {
      displayText = input;
    } else {
      transliterate(input, src, target)
        .then(result => { displayText = result; })
        .catch((e) => {
          console.error('Transliteration error:', e);
          displayText = input;
        });
    }
  });
</script>

<span class={className} style="font-family: {fontFamily}">{displayText || text}</span>
