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

<div class="py-1">
  <h3 class="font-mono text-[0.7rem] tracking-wider lowercase text-[var(--quiet)] mb-3">
    <Sanskrit text="pratyāhāra" source="iast" />
  </h3>

  <input
    type="text"
    bind:value={customInput}
    oninput={handleCustomInput}
    placeholder="ac · hal · iK"
    class="w-full px-0 py-1.5 text-sm bg-transparent border-0 border-b border-[var(--rule-2)] focus:outline-none focus:border-[var(--accent)] mb-4 placeholder:text-[var(--faint)]"
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
              class="px-1 py-0.5 transition-colors {highlighted ? 'text-[var(--accent)]' : 'text-[var(--ink)]'}"
              class:sound-start={isStart && !isEnd}
              class:sound-end={isEnd && !isStart}
              class:sound-both={isStart && isEnd}
              class:sound-middle={highlighted && !isStart && !isEnd}
            >
              <Sanskrit text={sound} />
            </span>
          {/each}
          <span class="text-[var(--ink)] font-semibold ml-0.5">
            <Sanskrit text={sutra.marker} />
          </span>
        </div>
      </div>
    {/each}
  </div>

  <div class="mt-3 pt-3 border-t border-[var(--rule-2)]">
    <div class="font-mono text-[0.65rem] tracking-wider lowercase text-[var(--quiet)] mb-2">common</div>
    <div class="flex flex-wrap gap-x-3 gap-y-1">
      {#each commonPratyaharas.slice(0, 6) as p}
        <button
          onclick={() => selectPratyahara(p)}
          class="font-serif italic text-sm transition-colors {selectedPratyahara?.name === p.name ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}"
        >
          <Sanskrit text={p.name} />
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Start point: a saffron tint, no decorative gradient */
  .sound-start {
    background: var(--sunken);
    border-left: 2px solid var(--accent);
    padding-left: 0.5rem;
  }

  /* End point: a saffron tint capped on the right */
  .sound-end {
    background: var(--sunken);
    border-right: 2px solid var(--accent);
    padding-right: 0.5rem;
  }

  /* Both start and end: saffron tint with both edges marked */
  .sound-both {
    background: var(--sunken);
    border-left: 2px solid var(--accent);
    border-right: 2px solid var(--accent);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  /* Middle highlighted sounds — washed saffron */
  .sound-middle {
    background: var(--sunken);
  }
</style>
