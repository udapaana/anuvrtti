<script lang="ts">
  import { type Script } from '$lib/transliteration';

  interface Props {
    current: Script;
    onChange: (script: Script) => void;
  }

  let { current, onChange }: Props = $props();

  let open = $state(false);

  // Script options with "ka" character in each script and Noto font
  const scripts: { id: Script; ka: string; label: string; font: string }[] = [
    // Indic scripts
    { id: 'devanagari', ka: 'क', label: 'Devanagari', font: 'Noto Sans Devanagari' },
    { id: 'telugu', ka: 'క', label: 'Telugu', font: 'Noto Sans Telugu' },
    { id: 'kannada', ka: 'ಕ', label: 'Kannada', font: 'Noto Sans Kannada' },
    { id: 'malayalam', ka: 'ക', label: 'Malayalam', font: 'Noto Sans Malayalam' },
    { id: 'tamil', ka: 'க', label: 'Tamil', font: 'Noto Sans Tamil' },
    { id: 'bengali', ka: 'ক', label: 'Bengali', font: 'Noto Sans Bengali' },
    { id: 'gujarati', ka: 'ક', label: 'Gujarati', font: 'Noto Sans Gujarati' },
    { id: 'gurmukhi', ka: 'ਕ', label: 'Gurmukhi', font: 'Noto Sans Gurmukhi' },
    { id: 'odia', ka: 'କ', label: 'Odia', font: 'Noto Sans Oriya' },
    { id: 'sinhala', ka: 'ක', label: 'Sinhala', font: 'Noto Sans Sinhala' },
    { id: 'nandinagari', ka: '𑦮', label: 'Nāndīnāgarī', font: 'Noto Sans Nandinagari' },
    // Romanization - use abbreviation as the display
    { id: 'iast', ka: 'IAST', label: 'IAST', font: 'Noto Sans' },
    { id: 'iso15919', ka: 'ISO', label: 'ISO 15919', font: 'Noto Sans' },
    { id: 'slp1', ka: 'SLP1', label: 'SLP1', font: 'Noto Sans' },
    { id: 'hk', ka: 'HK', label: 'Harvard-Kyoto', font: 'Noto Sans' },
    { id: 'itrans', ka: 'ITRANS', label: 'ITRANS', font: 'Noto Sans' },
    { id: 'velthuis', ka: 'Vel', label: 'Velthuis', font: 'Noto Sans' },
  ];

  function getCurrentScript() {
    return scripts.find(s => s.id === current) || scripts[0];
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
    class="min-w-9 h-9 px-2 flex items-center gap-1.5 rounded border border-stone-200 hover:border-stone-300 bg-white"
    onclick={() => open = !open}
    aria-label="Select script: {getCurrentScript().label}"
  >
    <span class="text-lg leading-none" style="font-family: '{getCurrentScript().font}', sans-serif">{getCurrentScript().ka}</span>
  </button>

  {#if open}
    <div class="absolute right-0 top-full mt-1 bg-white border border-stone-200 rounded shadow-lg py-0.5 z-50 w-44 max-h-96 overflow-y-auto">
      <!-- Indic Scripts -->
      <div class="px-3 py-1 text-[10px] text-stone-400 uppercase tracking-widest">Indic</div>
      {#each scripts.filter(s => !['iast', 'iso15919', 'slp1', 'hk', 'itrans', 'velthuis'].includes(s.id)) as script}
        <button
          class="w-full px-3 py-1.5 hover:bg-stone-50 flex items-center gap-2.5
                 {current === script.id ? 'text-indigo-600 bg-indigo-50' : 'text-stone-700'}"
          onclick={() => selectScript(script.id)}
        >
          <span class="text-lg w-7 text-center flex-shrink-0" style="font-family: '{script.font}', sans-serif">{script.ka}</span>
          <span class="text-xs text-stone-500 {current === script.id ? 'text-indigo-500' : ''}">{script.label}</span>
        </button>
      {/each}

      <!-- Romanization -->
      <div class="px-3 py-1 text-[10px] text-stone-400 uppercase tracking-widest mt-1 border-t border-stone-100 pt-1">Roman</div>
      {#each scripts.filter(s => ['iast', 'iso15919', 'slp1', 'hk', 'itrans', 'velthuis'].includes(s.id)) as script}
        <button
          class="w-full px-3 py-1.5 hover:bg-stone-50 flex items-center gap-2.5
                 {current === script.id ? 'text-indigo-600 bg-indigo-50' : 'text-stone-700'}"
          onclick={() => selectScript(script.id)}
        >
          <span class="text-xs font-mono font-semibold w-7 text-center flex-shrink-0">{script.ka}</span>
          <span class="text-xs text-stone-500 {current === script.id ? 'text-indigo-500' : ''}">{script.label}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>
