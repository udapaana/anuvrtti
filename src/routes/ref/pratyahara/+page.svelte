<script lang="ts">
  import { shivaSutras, commonPratyaharas, expandPratyahara, lookupPratyaharaCanonical, getAllPratyaharaSounds, type Pratyahara } from '$lib/pratyahara';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  interface Interpretation {
    sounds: string[];
    sutraIndex: number;
    startIdx: number;
    endIdx: number;
  }

  let selectedPratyahara = $state<Pratyahara | null>(null);
  let customInput = $state('');
  let interpretations = $state<Interpretation[]>([]);
  let customError = $state('');
  let normalizedInput = $state('');

  function selectPratyahara(p: Pratyahara) {
    selectedPratyahara = p;
    customInput = p.name;
    normalizedInput = p.name;
    customError = '';
    // Use precomputed lookup for accurate indices
    const results = getAllPratyaharaSounds(p.name);
    if (results) {
      interpretations = results;
    } else {
      interpretations = [{ sounds: p.sounds, sutraIndex: 0, startIdx: 0, endIdx: p.sounds.length - 1 }];
    }
  }

  async function handleCustomInput() {
    if (!customInput.trim()) {
      interpretations = [];
      customError = '';
      normalizedInput = '';
      selectedPratyahara = null;
      return;
    }

    const input = customInput.trim();

    // Try precomputed canonical lookup first
    const canonicalName = lookupPratyaharaCanonical(input);
    if (canonicalName) {
      const results = getAllPratyaharaSounds(canonicalName);
      if (results && results.length > 0) {
        normalizedInput = canonicalName;
        interpretations = results;
        customError = '';
        selectedPratyahara = commonPratyaharas.find(p => p.name === canonicalName) || null;
        return;
      }
    }

    // Fallback: try direct expansion
    let result = expandPratyahara(input);
    if (result) {
      normalizedInput = input;
      interpretations = [{ sounds: result, sutraIndex: 0, startIdx: 0, endIdx: result.length - 1 }];
      customError = '';
      selectedPratyahara = null;
      return;
    }

    // Try transliterating from various romanization schemes
    const schemes = ['iast', 'slp1', 'hk', 'itrans', 'velthuis'] as const;
    for (const scheme of schemes) {
      try {
        const devaInput = await transliterate(input, scheme, 'devanagari');
        const results = getAllPratyaharaSounds(devaInput);
        if (results && results.length > 0) {
          normalizedInput = devaInput;
          interpretations = results;
          customError = '';
          selectedPratyahara = null;
          return;
        }
      } catch {
        // Try next scheme
      }
    }

    // Nothing worked
    interpretations = [];
    normalizedInput = '';
    customError = 'Invalid pratyahara. Try: ac, hal, aN, ik, ec, yaR, Sal';
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

<svelte:head>
  <title>Pratyahara | anuvrtti</title>
</svelte:head>

<div>
  <div class="mb-6">
    <h1 class="text-2xl font-semibold">
      <Sanskrit text="प्रत्याहार" />
      <span class="text-stone-400 ml-2">Pratyahara Explorer</span>
    </h1>
    <p class="text-stone-500 text-sm mt-1">
      Explore the Shiva Sutras and pratyahara notation system
    </p>
  </div>

  <div class="grid lg:grid-cols-2 gap-8">
    <!-- Shiva Sutras -->
    <div>
      <h2 class="text-lg font-medium mb-4">Shiva Sutras (Maheshvara Sutras)</h2>
      <div class="bg-white rounded border border-stone-200 divide-y divide-stone-100">
        {#each shivaSutras as sutra}
          <div class="p-3 flex items-center gap-4">
            <span class="text-stone-400 font-mono text-sm w-6">{sutra.index}</span>
            <div class="flex-1 flex items-center gap-1 flex-wrap">
              {#each sutra.sounds as sound, soundIdx}
                {@const globalIdx = getSoundGlobalIndex(sutra.index, soundIdx)}
                {@const highlighted = isHighlighted(globalIdx)}
                {@const isStart = isStartPoint(globalIdx)}
                {@const isEnd = isEndPoint(globalIdx)}
                <span
                  class="text-xl px-3 py-1 transition-colors {highlighted ? 'text-indigo-700' : ''}"
                  class:sound-start={isStart && !isEnd}
                  class:sound-end={isEnd && !isStart}
                  class:sound-both={isStart && isEnd}
                  class:sound-middle={highlighted && !isStart && !isEnd}
                >
                  <Sanskrit text={sound} />
                </span>
              {/each}
              <span class="text-xl text-red-600 font-medium px-1">
                <Sanskrit text={sutra.marker} />
              </span>
            </div>
          </div>
        {/each}
      </div>
      <p class="mt-3 text-sm text-stone-500">
        The <span class="text-red-600">red markers</span> (<Sanskrit text="इत्" />) are not pronounced but serve as end-points for pratyaharas.
      </p>
    </div>

    <!-- Pratyahara Input -->
    <div>
      <h2 class="text-lg font-medium mb-4">Expand a Pratyahara</h2>

      <div class="mb-6">
        <input
          type="text"
          bind:value={customInput}
          oninput={handleCustomInput}
          placeholder="Enter pratyahara (e.g., ac, hal, yaR)"
          class="w-full px-3 py-2 text-lg border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p class="mt-2 text-xs text-stone-400">
          Accepts Devanagari, IAST, SLP1, Harvard-Kyoto, ITRANS
        </p>
        {#if customError}
          <p class="mt-1 text-sm text-red-500">{customError}</p>
        {/if}
      </div>

      <h3 class="text-md font-medium mb-3">Common Pratyaharas</h3>
      <table class="pratyahara-table">
        <tbody>
          {#each commonPratyaharas as p}
            <tr
              class="pratyahara-row"
              class:selected={selectedPratyahara?.name === p.name}
              onclick={() => selectPratyahara(p)}
            >
              <td class="pratyahara-name"><Sanskrit text={p.name} /></td>
              <td class="pratyahara-desc">{p.description}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>

<style>
  /* Start point: right-pointing arrow shape (green) */
  .sound-start {
    background: linear-gradient(135deg, #22c55e 0%, #22c55e 50%, #dcfce7 50%, #dcfce7 100%);
    background-size: 8px 100%;
    background-repeat: no-repeat;
    background-position: left;
    background-color: #dcfce7;
    padding-left: 0.75rem;
    border-radius: 3px;
  }

  /* End point: left-pointing arrow shape (red) */
  .sound-end {
    background: linear-gradient(45deg, #fecaca 0%, #fecaca 50%, #ef4444 50%, #ef4444 100%);
    background-size: 8px 100%;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #fecaca;
    padding-right: 0.75rem;
    border-radius: 3px;
  }

  /* Both start and end: diamond-ish shape */
  .sound-both {
    background: linear-gradient(135deg, #22c55e 0%, #22c55e 50%, #fef3c7 50%, #fef3c7 100%),
                linear-gradient(45deg, #fef3c7 0%, #fef3c7 50%, #ef4444 50%, #ef4444 100%);
    background-size: 8px 100%, 8px 100%;
    background-repeat: no-repeat, no-repeat;
    background-position: left, right;
    background-color: #fef3c7;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 3px;
  }

  /* Middle highlighted sounds */
  .sound-middle {
    background-color: #e0e7ff;
    border-radius: 3px;
  }

  /* Pratyahara table */
  .pratyahara-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e7e5e4;
    border-radius: 0.375rem;
    overflow: hidden;
  }

  .pratyahara-row {
    cursor: pointer;
    transition: background 0.1s;
  }

  .pratyahara-row:hover {
    background: #f5f5f4;
  }

  .pratyahara-row.selected {
    background: #eef2ff;
  }

  .pratyahara-row:not(:last-child) td {
    border-bottom: 1px solid #f5f5f4;
  }

  .pratyahara-name {
    padding: 0.5rem 0.75rem;
    font-size: 1.125rem;
    font-weight: 500;
    white-space: nowrap;
    width: 1%;
  }

  .pratyahara-desc {
    padding: 0.5rem 0.75rem;
    font-size: 0.8125rem;
    color: #78716c;
  }
</style>
