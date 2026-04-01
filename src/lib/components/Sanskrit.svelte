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

  // IAST characters that are NOT in shlesha's token set and will be silently
  // passed through (rather than wrapped in [...]) when encountered.
  // ḻ (U+1E3B) is not a shlesha IAST token — the retroflex lateral is ḷ (ConsonantLl).
  const UNRECOGNIZED_IAST = /[\u1E3B]/;

  /** Returns true if shlesha signalled a rendering failure — either via [token]
   *  markers or by silently passing through IAST diacritics into Indic output. */
  function hasRenderingFailure(result: string, src: Script, tgt: Script): boolean {
    if (/\[.+?\]/.test(result)) return true;
    // shlesha silently passes through unrecognized IAST chars (no brackets)
    if (src === 'iast' && UNRECOGNIZED_IAST.test(result)) return true;
    return false;
  }

  let displayText = $state<string | null>(null);
  let usingFallback = $state(false);
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
    nandinagari: 'font-nandinagari',
    iast: 'font-iast',
    iso15919: 'font-iast',
    slp1: 'font-iast',
    hk: 'font-iast',
    itrans: 'font-iast',
    velthuis: 'font-iast',
    english: '',
  };

  // When the fallback fires, render the original source text in its own script font
  let fontClass = $derived(
    usingFallback ? scriptClasses[source] :
    INDIC_SCRIPTS.has(source) ? scriptClasses[currentTarget] : scriptClasses[source]
  );

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
      usingFallback = false;
      return;
    }

    if (!INDIC_SCRIPTS.has(src) || src === target) {
      displayText = input;
      usingFallback = false;
    } else {
      transliterate(input, src, target)
        .then(result => {
          if (hasRenderingFailure(result, src, target)) {
            // shlesha couldn't render this sound in target script
            const fb = fallback !== undefined ? (fallback ?? '') : input;
            displayText = fb;
            usingFallback = fb !== result;
          } else {
            displayText = result;
            usingFallback = false;
          }
        })
        .catch((e) => {
          console.error('Transliteration error:', e);
          displayText = fallback !== undefined ? (fallback ?? '') : input;
          usingFallback = true;
        });
    }
  });
</script>

<span class="{fontClass} {usingFallback ? 'opacity-40 text-sm' : ''} {className}">{displayText !== null ? displayText : text}</span>
