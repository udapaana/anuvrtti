<script lang="ts">
  import { shivaSutras, commonPratyaharas, expandPratyahara, romanPratyaharaMap, type Pratyahara } from '$lib/pratyahara';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let customInput = $state('');
  let customResult = $state<string[] | null>(null);
  let normalizedInput = $state('');
  let selectedPratyahara = $state<Pratyahara | null>(null);

  function selectPratyahara(p: Pratyahara) {
    selectedPratyahara = p;
    customInput = p.name;
    normalizedInput = p.name;
    customResult = p.sounds;
  }

  async function handleCustomInput() {
    if (!customInput.trim()) {
      customResult = null;
      normalizedInput = '';
      selectedPratyahara = null;
      return;
    }

    const input = customInput.trim();

    // Try direct expansion first (for Devanagari input)
    let result = expandPratyahara(input);
    if (result) {
      normalizedInput = input;
      customResult = result;
      selectedPratyahara = commonPratyaharas.find(p => p.name === input) || null;
      return;
    }

    // Try looking up in Roman pratyahara map (case-insensitive)
    const lowerInput = input.toLowerCase();
    const mappedDeva = romanPratyaharaMap[lowerInput];
    if (mappedDeva) {
      result = expandPratyahara(mappedDeva);
      if (result) {
        normalizedInput = mappedDeva;
        customResult = result;
        selectedPratyahara = commonPratyaharas.find(p => p.name === mappedDeva) || null;
        return;
      }
    }

    // Try transliterating from various schemes
    const schemes = ['iast', 'slp1', 'hk', 'itrans', 'velthuis'] as const;
    for (const scheme of schemes) {
      try {
        const devaInput = await transliterate(input, scheme, 'devanagari');
        result = expandPratyahara(devaInput);
        if (result) {
          normalizedInput = devaInput;
          customResult = result;
          selectedPratyahara = commonPratyaharas.find(p => p.name === devaInput) || null;
          return;
        }
      } catch {
        // Try next scheme
      }
    }

    customResult = null;
    normalizedInput = '';
    selectedPratyahara = null;
  }

  function isHighlighted(sound: string): boolean {
    return customResult ? customResult.includes(sound) : false;
  }
</script>

<div class="bg-white rounded-lg border border-stone-200 p-4">
  <h3 class="text-sm font-medium text-stone-500 mb-3">Pratyahara</h3>

  <!-- Input -->
  <input
    type="text"
    bind:value={customInput}
    oninput={handleCustomInput}
    placeholder="e.g., ac, hal, iK"
    class="w-full px-2 py-1.5 text-sm border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 mb-3"
  />

  <!-- Result -->
  {#if customResult}
    <div class="bg-indigo-50 rounded p-2 mb-3">
      <div class="text-xs text-indigo-600 mb-1">
        <Sanskrit text={normalizedInput} /> ({customResult.length}):
      </div>
      <div class="flex flex-wrap gap-1">
        {#each customResult as sound}
          <span class="text-lg bg-white px-1.5 py-0.5 rounded border border-indigo-200">
            <Sanskrit text={sound} />
          </span>
        {/each}
      </div>
      {#if selectedPratyahara}
        <p class="mt-2 text-xs text-stone-600">{selectedPratyahara.description}</p>
      {/if}
    </div>
  {/if}

  <!-- Shiva Sutras compact view -->
  <div class="space-y-1 text-sm">
    {#each shivaSutras as sutra}
      <div class="flex items-center gap-2">
        <span class="text-stone-400 font-mono text-xs w-4">{sutra.index}</span>
        <div class="flex items-center gap-0.5 flex-wrap">
          {#each sutra.sounds as sound}
            <span class="px-0.5 rounded transition-colors {isHighlighted(sound) ? 'bg-indigo-100 text-indigo-700' : 'text-stone-700'}">
              <Sanskrit text={sound} />
            </span>
          {/each}
          <span class="text-red-500 font-medium">
            <Sanskrit text={sutra.marker} />
          </span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Quick buttons for common pratyaharas -->
  <div class="mt-3 pt-3 border-t border-stone-100">
    <div class="text-xs text-stone-400 mb-2">Common:</div>
    <div class="flex flex-wrap gap-1">
      {#each commonPratyaharas.slice(0, 6) as p}
        <button
          onclick={() => selectPratyahara(p)}
          class="px-2 py-0.5 text-xs rounded border transition-colors
                 {selectedPratyahara?.name === p.name
                   ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                   : 'border-stone-200 hover:border-indigo-300 text-stone-600'}"
        >
          <Sanskrit text={p.name} />
        </button>
      {/each}
    </div>
  </div>
</div>
