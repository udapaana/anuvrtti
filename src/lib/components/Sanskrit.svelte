<script lang="ts">
  import { transliterate, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';

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

  // Re-transliterate whenever text, source, or target script changes
  $effect(() => {
    const src = source;
    const target = $displayScript;
    const input = text;

    if (!input) {
      displayText = '';
      return;
    }

    if (src === target) {
      displayText = input;
    } else {
      transliterate(input, src, target)
        .then(result => { displayText = result; })
        .catch(() => { displayText = input; });
    }
  });
</script>

<span class="sanskrit {className}">{displayText}</span>

<style>
  .sanskrit {
    font-family: 'Noto Sans Devanagari', sans-serif;
  }
</style>
