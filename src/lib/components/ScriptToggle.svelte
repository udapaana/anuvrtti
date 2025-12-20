<script lang="ts">
  import { type Script } from '$lib/transliteration';

  interface Props {
    current: Script;
    onChange: (script: Script) => void;
  }

  let { current, onChange }: Props = $props();

  let open = $state(false);

  // Script options with "ka" character in each script
  const scripts: { id: Script; ka: string }[] = [
    { id: 'devanagari', ka: 'क' },
    { id: 'iast', ka: 'ka' },
    { id: 'slp1', ka: 'ka' },
    { id: 'hk', ka: 'ka' },
  ];

  function getCurrentKa(): string {
    return scripts.find(s => s.id === current)?.ka || 'क';
  }

  function selectScript(script: Script) {
    onChange(script);
    open = false;
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.script-toggle')) {
      open = false;
    }
  }
</script>

<svelte:window onclick={handleClickOutside} />

<div class="script-toggle relative">
  <button
    class="w-9 h-9 flex items-center justify-center rounded border border-stone-200 hover:border-stone-300 bg-white text-lg"
    onclick={() => open = !open}
    aria-label="Select script"
  >
    <span class="script-char">{getCurrentKa()}</span>
  </button>

  {#if open}
    <div class="absolute right-0 top-full mt-1 bg-white border border-stone-200 rounded shadow-lg py-1 min-w-32 z-50">
      {#each scripts as script}
        <button
          class="w-full px-3 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-3
                 {current === script.id ? 'text-indigo-600 bg-indigo-50' : 'text-stone-700'}"
          onclick={() => selectScript(script.id)}
        >
          <span class="w-6 text-center text-base script-char">{script.ka}</span>
          <span class="text-xs uppercase tracking-wide">{script.id}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .script-char {
    font-family: 'Noto Sans Devanagari', sans-serif;
  }
</style>
