<script lang="ts">
  import { transliterate, type Script } from '$lib/transliteration';

  interface Props {
    text: string;
    sourceScript?: Script;
    targetScript: Script;
    class?: string;
  }

  let { text, sourceScript = 'devanagari', targetScript, class: className = '' }: Props = $props();

  let displayText = $state(text);

  $effect(() => {
    const currentText = text;
    const from = sourceScript;
    const to = targetScript;

    if (from === to) {
      displayText = currentText;
    } else {
      transliterate(currentText, from, to)
        .then(result => { displayText = result; })
        .catch(() => { displayText = currentText; });
    }
  });
</script>

<span class="font-sanskrit {className}">{displayText}</span>
