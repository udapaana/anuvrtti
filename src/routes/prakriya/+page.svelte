<script lang="ts">
  import { onMount } from 'svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import {
    initPrakriya,
    isPrakriyaAvailable,
    deriveTinanta,
    COMMON_DHATUS,
    type Prakriya,
    type Gana,
    type Lakara
  } from '$lib/prakriya';

  // Form state
  let selectedDhatu = $state('bhU');
  let selectedLakara = $state<Lakara>('Lat');

  // Results
  let prakriya = $state<Prakriya | null>(null);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let wasmReady = $state(false);
  let wasmLoading = $state(true);

  const lakaras: { value: Lakara; label: string; sanskrit: string }[] = [
    { value: 'Lat', label: 'Present', sanskrit: 'लट्' },
    { value: 'Lit', label: 'Perfect', sanskrit: 'लिट्' },
    { value: 'Lut', label: 'Periphrastic Future', sanskrit: 'लुट्' },
    { value: 'Lrt', label: 'Simple Future', sanskrit: 'लृट्' },
    { value: 'Lot', label: 'Imperative', sanskrit: 'लोट्' },
    { value: 'Lan', label: 'Imperfect', sanskrit: 'लङ्' },
    { value: 'VidhiLin', label: 'Optative', sanskrit: 'विधिलिङ्' },
    { value: 'AshirLin', label: 'Benedictive', sanskrit: 'आशीर्लिङ्' },
    { value: 'Lun', label: 'Aorist', sanskrit: 'लुङ्' },
    { value: 'Lrn', label: 'Conditional', sanskrit: 'लृङ्' },
  ];

  const dhatuList = Object.entries(COMMON_DHATUS).map(([key, info]) => ({
    key,
    ...info
  }));

  onMount(async () => {
    wasmReady = await initPrakriya();
    wasmLoading = false;
    if (wasmReady) {
      await derive();
    }
  });

  async function derive() {
    const dhatu = COMMON_DHATUS[selectedDhatu];
    if (!dhatu || !wasmReady) return;

    loading = true;
    error = null;
    prakriya = null;

    try {
      const results = await deriveTinanta(
        dhatu.aupadeshika,
        dhatu.gana,
        selectedLakara,
        'Kartari',
        'Prathama',
        'Eka'
      );

      if (results.length > 0) {
        prakriya = results[0];
      } else {
        error = 'No derivation found for this combination';
      }
    } catch (e) {
      console.error('Derivation error:', e);
      error = 'Failed to generate derivation';
    }

    loading = false;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    derive();
  }
</script>

<svelte:head>
  <title>prakriyā | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <header class="mb-8">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="प्रक्रिया" />
      <span class="text-stone-400 ml-2">Derivation Explorer</span>
    </h1>
    <p class="text-stone-600">
      Watch Paninian rules apply step-by-step to derive Sanskrit word forms.
    </p>
  </header>

  {#if wasmLoading}
    <div class="bg-white rounded-lg border border-stone-200 p-8 text-center">
      <div class="inline-block w-6 h-6 border-2 border-stone-300 border-t-indigo-500 rounded-full animate-spin mb-3"></div>
      <p class="text-stone-500">Loading derivation engine...</p>
    </div>
  {:else if !wasmReady}
    <div class="bg-amber-50 border border-amber-200 rounded-lg p-6">
      <p class="text-amber-800">
        The derivation engine could not be loaded. This feature requires WebAssembly support.
      </p>
    </div>
  {:else}
    <!-- Input form -->
    <form onsubmit={handleSubmit} class="bg-white rounded-lg border border-stone-200 p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Dhatu selection -->
        <div>
          <label for="dhatu" class="block text-sm font-medium text-stone-700 mb-2">
            <Sanskrit text="धातु" /> (root)
          </label>
          <select
            id="dhatu"
            bind:value={selectedDhatu}
            onchange={() => derive()}
            class="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {#each dhatuList as dhatu}
              <option value={dhatu.key}>
                {dhatu.key} — {dhatu.meaning}
              </option>
            {/each}
          </select>
        </div>

        <!-- Lakara selection -->
        <div>
          <label for="lakara" class="block text-sm font-medium text-stone-700 mb-2">
            <Sanskrit text="लकार" /> (tense/mood)
          </label>
          <select
            id="lakara"
            bind:value={selectedLakara}
            onchange={() => derive()}
            class="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {#each lakaras as lakara}
              <option value={lakara.value}>
                {lakara.label} ({lakara.sanskrit})
              </option>
            {/each}
          </select>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-stone-100 text-sm text-stone-500">
        Showing: <Sanskrit text="प्रथमपुरुष" /> (3rd person) · <Sanskrit text="एकवचन" /> (singular) · <Sanskrit text="कर्तरि" /> (active)
      </div>
    </form>

    <!-- Results -->
    <div class="space-y-4">
      {#if loading}
        <div class="bg-white rounded-lg border border-stone-200 p-8 text-center">
          <div class="inline-block w-6 h-6 border-2 border-stone-300 border-t-indigo-500 rounded-full animate-spin"></div>
        </div>
      {:else if error}
        <div class="bg-red-50 border border-red-200 rounded-lg p-6">
          <p class="text-red-800">{error}</p>
        </div>
      {:else if prakriya}
        <DerivationViewer {prakriya} expanded={true} />

        <!-- Stats -->
        <div class="text-sm text-stone-500 text-center">
          {prakriya.steps.length} rules applied
        </div>
      {/if}
    </div>
  {/if}
</div>
