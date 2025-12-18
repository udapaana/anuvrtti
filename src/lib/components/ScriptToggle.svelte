<script lang="ts">
  import { type Script, scriptLabels } from '$lib/transliteration';

  interface Props {
    current: Script;
    onChange: (script: Script) => void;
  }

  let { current, onChange }: Props = $props();

  const scripts: Script[] = ['devanagari', 'iast', 'slp1', 'hk'];
</script>

<div class="flex gap-1 text-xs">
  {#each scripts as script}
    <button
      class="px-2 py-1 rounded transition-colors
             {current === script
               ? 'bg-indigo-600 text-white'
               : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}"
      onclick={() => onChange(script)}
    >
      {scriptLabels[script]}
    </button>
  {/each}
</div>
