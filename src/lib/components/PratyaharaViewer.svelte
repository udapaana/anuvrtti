<script lang="ts">
  import { shivaSutras, commonPratyaharas, expandPratyahara, lookupPratyaharaCanonical, getAllPratyaharaSounds, allSoundsFlat, type Pratyahara } from '$lib/pratyahara';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  interface Interpretation {
    sounds: string[];
    sutraIndex: number;
    startIdx: number;
    endIdx: number;
  }

  let customInput = $state('');
  let interpretations = $state<Interpretation[]>([]);
  let normalizedInput = $state('');
  let selectedPratyahara = $state<Pratyahara | null>(null);

  function selectPratyahara(p: Pratyahara) {
    selectedPratyahara = p;
    customInput = p.name;
    normalizedInput = p.name;
    // For common pratyaharas, just show one interpretation
    interpretations = [{ sounds: p.sounds, sutraIndex: 0, startIdx: 0, endIdx: p.sounds.length - 1 }];
  }

  async function handleCustomInput() {
    if (!customInput.trim()) {
      interpretations = [];
      normalizedInput = '';
      selectedPratyahara = null;
      return;
    }

    const input = customInput.trim();

    // Try precomputed canonical lookup first (handles all known romanization schemes instantly)
    const canonicalName = lookupPratyaharaCanonical(input);
    if (canonicalName) {
      const results = getAllPratyaharaSounds(canonicalName);
      if (results && results.length > 0) {
        normalizedInput = canonicalName;
        interpretations = results;
        selectedPratyahara = commonPratyaharas.find(p => p.name === canonicalName) || null;
        return;
      }
    }

    // Fallback: try direct expansion (for edge cases)
    let result = expandPratyahara(input);
    if (result) {
      normalizedInput = input;
      interpretations = [{ sounds: result, sutraIndex: 0, startIdx: 0, endIdx: result.length - 1 }];
      selectedPratyahara = commonPratyaharas.find(p => p.name === input) || null;
      return;
    }

    // Last resort: try transliterating from various schemes
    const schemes = ['iast', 'slp1', 'hk', 'itrans', 'velthuis'] as const;
    for (const scheme of schemes) {
      try {
        const devaInput = await transliterate(input, scheme, 'devanagari');
        const results = getAllPratyaharaSounds(devaInput);
        if (results && results.length > 0) {
          normalizedInput = devaInput;
          interpretations = results;
          selectedPratyahara = commonPratyaharas.find(p => p.name === devaInput) || null;
          return;
        }
      } catch {
        // Try next scheme
      }
    }

    interpretations = [];
    normalizedInput = '';
    selectedPratyahara = null;
  }

  // Check if a sound at given index is within any interpretation's range
  function isHighlighted(soundIdx: number): boolean {
    return interpretations.some(i => soundIdx >= i.startIdx && soundIdx <= i.endIdx);
  }

  // Check if this position is a start point for any interpretation
  function isStartPoint(soundIdx: number): boolean {
    return interpretations.some(i => i.startIdx === soundIdx);
  }

  // Check if this position is an end point for any interpretation
  function isEndPoint(soundIdx: number): boolean {
    return interpretations.some(i => i.endIdx === soundIdx);
  }

  // Get the global index of a sound within a sutra
  function getSoundGlobalIndex(sutraIndex: number, soundIndexInSutra: number): number {
    let idx = 0;
    for (let i = 0; i < sutraIndex - 1; i++) {
      idx += shivaSutras[i].sounds.length;
    }
    return idx + soundIndexInSutra;
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



  <!-- Shiva Sutras compact view -->
  <div class="space-y-1 text-sm">
    {#each shivaSutras as sutra}
      <div class="flex items-center gap-2">
        <span class="text-stone-400 font-mono text-xs w-4">{sutra.index}</span>
        <div class="flex items-center gap-0.5 flex-wrap">
          {#each sutra.sounds as sound, soundIdx}
            {@const globalIdx = getSoundGlobalIndex(sutra.index, soundIdx)}
            {@const highlighted = isHighlighted(globalIdx)}
            {@const isStart = isStartPoint(globalIdx)}
            {@const isEnd = isEndPoint(globalIdx)}
            <span
              class="px-1.5 py-0.5 transition-colors {highlighted ? 'text-indigo-700' : 'text-stone-700'}"
              class:sound-start={isStart && !isEnd}
              class:sound-end={isEnd && !isStart}
              class:sound-both={isStart && isEnd}
              class:sound-middle={highlighted && !isStart && !isEnd}
            >
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

<style>
  /* Start point: right-pointing arrow shape (green) */
  .sound-start {
    background: linear-gradient(135deg, #22c55e 0%, #22c55e 50%, #dcfce7 50%, #dcfce7 100%);
    background-size: 6px 100%;
    background-repeat: no-repeat;
    background-position: left;
    background-color: #dcfce7;
    padding-left: 0.5rem;
    border-radius: 2px;
  }

  /* End point: left-pointing arrow shape (red) */
  .sound-end {
    background: linear-gradient(45deg, #fecaca 0%, #fecaca 50%, #ef4444 50%, #ef4444 100%);
    background-size: 6px 100%;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #fecaca;
    padding-right: 0.5rem;
    border-radius: 2px;
  }

  /* Both start and end: diamond-ish shape */
  .sound-both {
    background: linear-gradient(135deg, #22c55e 0%, #22c55e 50%, #fef3c7 50%, #fef3c7 100%),
                linear-gradient(45deg, #fef3c7 0%, #fef3c7 50%, #ef4444 50%, #ef4444 100%);
    background-size: 6px 100%, 6px 100%;
    background-repeat: no-repeat, no-repeat;
    background-position: left, right;
    background-color: #fef3c7;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 2px;
  }

  /* Middle highlighted sounds */
  .sound-middle {
    background-color: #e0e7ff;
    border-radius: 2px;
  }
</style>
