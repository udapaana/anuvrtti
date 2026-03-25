<script lang="ts">
  import { transliterate, INDIC_SCRIPTS, type Script } from '$lib/transliteration';
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
    /** Text to show when target script cannot render this sound (default: same as text) */
    fallback?: string | null;
  }

  let { text, source = 'devanagari', class: className = '', fallback = undefined }: Props = $props();

  /** Returns true if shlesha returned an unparsed-token marker like [ḷ] */
  function hasUnparsedTokens(s: string): boolean {
    return /\[.+?\]/.test(s);
  }

  let displayText = $state<string | null>(null);
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
    english: '',
  };

  // Non-Indic sources always render as-is in the source's own script class
  let fontClass = $derived(INDIC_SCRIPTS.has(source) ? scriptClasses[currentTarget] : scriptClasses[source]);

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
      displayText = input || null;
      return;
    }

    if (!INDIC_SCRIPTS.has(src) || src === target) {
      displayText = input;
    } else {
      transliterate(input, src, target)
        .then(result => {
          if (hasUnparsedTokens(result)) {
            // shlesha couldn't render this sound in target script
            displayText = fallback !== undefined ? (fallback ?? '') : input;
          } else {
            displayText = result;
          }
        })
        .catch((e) => {
          console.error('Transliteration error:', e);
          displayText = fallback !== undefined ? (fallback ?? '') : input;
        });
    }
  });
</script>

<span class="{fontClass} {className}">{displayText !== null ? displayText : text}</span>
