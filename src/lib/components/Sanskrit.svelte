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

  // Map script to CSS class for font styling
  const scriptClasses: Record<Script, string> = {
    devanagari: 'font-devanagari',
    telugu: 'font-telugu',
    kannada: 'font-kannada',
    malayalam: 'font-malayalam',
    tamil: 'font-tamil',
    bengali: 'font-bengali',
    gujarati: 'font-gujarati',
    gurmukhi: 'font-gurmukhi',
    odia: 'font-odia',
    sinhala: 'font-sinhala',
    iast: 'font-iast',
    iso15919: 'font-iast',
    slp1: 'font-iast',
    hk: 'font-iast',
    itrans: 'font-iast',
    velthuis: 'font-iast',
  };

  let fontClass = $derived(scriptClasses[currentTarget]);

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

<span class="{fontClass} {className}">{displayText || text}</span>
