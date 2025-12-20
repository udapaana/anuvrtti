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
    class="w-9 h-9 flex items-center justify-center rounded border border-stone-200 hover:border-stone-300 bg-white text-lg"
    style="font-family: '{getCurrentScript().font}', sans-serif"
    onclick={() => open = !open}
    aria-label="Select script"
  >
    {getCurrentScript().ka}
  </button>

  {#if open}
    <div class="absolute right-0 top-full mt-1 bg-white border border-stone-200 rounded shadow-lg py-0.5 z-50 max-h-96 overflow-y-auto">
      <!-- Indic Scripts -->
      <div class="px-2 py-0.5 text-[10px] text-stone-400 uppercase tracking-widest text-center">Indic</div>
      {#each scripts.filter(s => !['iast', 'iso15919', 'slp1', 'hk', 'itrans', 'velthuis'].includes(s.id)) as script}
        <button
          class="w-full px-4 py-1 hover:bg-stone-50 text-center text-lg
                 {current === script.id ? 'text-indigo-600 bg-indigo-50' : 'text-stone-700'}"
          onclick={() => selectScript(script.id)}
          style="font-family: '{script.font}', sans-serif"
        >
          {script.ka}
        </button>
      {/each}

      <!-- Romanization -->
      <div class="px-2 py-0.5 text-[10px] text-stone-400 uppercase tracking-widest text-center mt-1 border-t border-stone-100 pt-1">Roman</div>
      {#each scripts.filter(s => ['iast', 'iso15919', 'slp1', 'hk', 'itrans', 'velthuis'].includes(s.id)) as script}
        <button
          class="w-full px-4 py-1 hover:bg-stone-50 text-center text-[11px] uppercase tracking-widest font-medium
                 {current === script.id ? 'text-indigo-600 bg-indigo-50' : 'text-stone-700'}"
          onclick={() => selectScript(script.id)}
        >
          {script.label}
        </button>
      {/each}
    </div>
  {/if}
</div>
