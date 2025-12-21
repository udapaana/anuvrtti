<script lang="ts">
  import { shivaSutras, commonPratyaharas, expandPratyahara, type Pratyahara } from '$lib/pratyahara';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let selectedPratyahara = $state<Pratyahara | null>(null);
  let customInput = $state('');
  let customResult = $state<string[] | null>(null);
  let customError = $state('');
  let normalizedInput = $state('');

  function selectPratyahara(p: Pratyahara) {
    selectedPratyahara = p;
    customInput = p.name;
    normalizedInput = p.name;
    customResult = p.sounds;
    customError = '';
  }

  async function handleCustomInput() {
    if (!customInput.trim()) {
      customResult = null;
      customError = '';
      normalizedInput = '';
      return;
    }

    const input = customInput.trim();

    // Try to expand directly first (if already Devanagari)
    let result = expandPratyahara(input);
    if (result) {
      normalizedInput = input;
      customResult = result;
      customError = '';
      selectedPratyahara = null;
      return;
    }

    // Try transliterating from various romanization schemes
    const schemes = ['iast', 'slp1', 'hk', 'itrans', 'velthuis'] as const;
    for (const scheme of schemes) {
      try {
        const devaInput = await transliterate(input, scheme, 'devanagari');
        result = expandPratyahara(devaInput);
        if (result) {
          normalizedInput = devaInput;
          customResult = result;
          customError = '';
          selectedPratyahara = null;
          return;
        }
      } catch {
        // Try next scheme
      }
    }

    // Nothing worked
    customResult = null;
    normalizedInput = '';
    customError = 'Invalid pratyahara. Try: ac, hal, aN, ik, ec, yaR, Sal';
  }

  // Highlight sounds in the Shiva Sutras that are part of the current selection
  function isHighlighted(sound: string): boolean {
    return customResult ? customResult.includes(sound) : false;
  }
</script>

<svelte:head>
  <title>Pratyahara Explorer | Ashtadhyayi Explorer</title>
</svelte:head>

<div>
  <div class="mb-6">
    <h1 class="text-2xl font-semibold">Pratyahara Explorer</h1>
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
              {#each sutra.sounds as sound}
                <span
                  class="text-xl px-1.5 py-0.5 rounded transition-colors {isHighlighted(sound) ? 'bg-indigo-100 text-indigo-700' : ''}"
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

    <!-- Pratyahara Input & Results -->
    <div>
      <h2 class="text-lg font-medium mb-4">Expand a Pratyahara</h2>

      <div class="mb-6">
        <div class="flex gap-2">
          <input
            type="text"
            bind:value={customInput}
            oninput={handleCustomInput}
            placeholder="Enter pratyahara (e.g., ac, hal, yaR)"
            class="flex-1 px-3 py-2 text-lg border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <p class="mt-2 text-xs text-stone-400">
          Accepts Devanagari, IAST, SLP1, Harvard-Kyoto, ITRANS
        </p>
        {#if customError}
          <p class="mt-1 text-sm text-red-500">{customError}</p>
        {/if}
      </div>

      {#if customResult}
        <div class="bg-indigo-50 rounded p-4 mb-6">
          <div class="text-sm text-indigo-600 mb-2">
            <Sanskrit text={normalizedInput} /> = {customResult.length} sounds:
          </div>
          <div class="flex flex-wrap gap-2">
            {#each customResult as sound}
              <span class="text-2xl bg-white px-2 py-1 rounded border border-indigo-200">
                <Sanskrit text={sound} />
              </span>
            {/each}
          </div>
          {#if selectedPratyahara}
            <p class="mt-3 text-sm text-stone-600">{selectedPratyahara.description}</p>
          {/if}
        </div>
      {/if}

      <h3 class="text-md font-medium mb-3">Common Pratyaharas</h3>
      <div class="grid grid-cols-2 gap-2">
        {#each commonPratyaharas as p}
          <button
            class="p-3 text-left bg-white rounded border border-stone-200 hover:border-indigo-300 transition-colors
                   {selectedPratyahara?.name === p.name ? 'border-indigo-500 bg-indigo-50' : ''}"
            onclick={() => selectPratyahara(p)}
          >
            <div class="text-lg font-medium">
              <Sanskrit text={p.name} />
            </div>
            <div class="text-xs text-stone-500 mt-1">{p.description}</div>
          </button>
        {/each}
      </div>
    </div>
  </div>
</div>
