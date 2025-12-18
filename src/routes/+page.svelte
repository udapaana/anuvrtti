<script lang="ts">
  import { onMount } from 'svelte';
  import { loadSutras, type Sutra } from '$lib/data';
  import SutraCard from '$lib/components/SutraCard.svelte';
  import AdhyayaNav from '$lib/components/AdhyayaNav.svelte';

  let sutras: Sutra[] = $state([]);
  let loading = $state(true);
  let selectedAdhyaya = $state(1);
  let selectedPada = $state(1);

  $effect(() => {
    loadSutras().then(all => {
      sutras = all.filter(s => s.adhyaya === selectedAdhyaya && s.pada === selectedPada);
      loading = false;
    });
  });

  function handleSutraClick(id: string) {
    window.location.href = `/sutra/${id}`;
  }

  // Stats for the overview
  let stats = $derived({
    total: sutras.length,
    samjna: sutras.filter(s => s.type === 'samjna').length,
    paribhasha: sutras.filter(s => s.type === 'paribhasha').length,
    vidhi: sutras.filter(s => s.type === 'vidhi').length,
  });
</script>

<svelte:head>
  <title>Aṣṭādhyāyī Explorer</title>
</svelte:head>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <!-- Sidebar -->
  <aside class="lg:col-span-1">
    <div class="sticky top-8">
      <AdhyayaNav
        currentAdhyaya={selectedAdhyaya}
        currentPada={selectedPada}
      />

      <div class="mt-6 p-4 bg-white rounded-lg border border-stone-200">
        <h3 class="text-sm font-medium text-stone-500 mb-2">
          Pāda {selectedAdhyaya}.{selectedPada}
        </h3>
        <dl class="text-sm space-y-1">
          <div class="flex justify-between">
            <dt class="text-stone-500">Sūtras</dt>
            <dd class="font-medium">{stats.total}</dd>
          </div>
          {#if stats.samjna > 0}
            <div class="flex justify-between">
              <dt class="text-stone-500">Saṃjñā</dt>
              <dd><span class="badge badge-samjna">{stats.samjna}</span></dd>
            </div>
          {/if}
          {#if stats.paribhasha > 0}
            <div class="flex justify-between">
              <dt class="text-stone-500">Paribhāṣā</dt>
              <dd><span class="badge badge-paribhasha">{stats.paribhasha}</span></dd>
            </div>
          {/if}
        </dl>
      </div>

      <!-- Quick navigation -->
      <div class="mt-4">
        <label class="block text-sm font-medium text-stone-500 mb-2">
          Go to Pāda
        </label>
        <div class="flex gap-2">
          <select
            bind:value={selectedAdhyaya}
            class="flex-1 text-sm border border-stone-200 rounded px-2 py-1"
          >
            {#each [1,2,3,4,5,6,7,8] as a}
              <option value={a}>Adhyāya {a}</option>
            {/each}
          </select>
          <select
            bind:value={selectedPada}
            class="flex-1 text-sm border border-stone-200 rounded px-2 py-1"
          >
            {#each [1,2,3,4] as p}
              <option value={p}>Pāda {p}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main content -->
  <main class="lg:col-span-3">
    <h1 class="text-2xl font-semibold mb-6">
      <span class="font-sanskrit">अष्टाध्यायी</span>
      <span class="text-stone-400 text-lg ml-2">{selectedAdhyaya}.{selectedPada}</span>
    </h1>

    {#if loading}
      <div class="text-stone-500">Loading sūtras...</div>
    {:else}
      <div class="space-y-4">
        {#each sutras as sutra (sutra.id)}
          <a href="/sutra/{sutra.id}" class="block">
            <SutraCard {sutra} onSutraClick={handleSutraClick} />
          </a>
        {/each}
      </div>
    {/if}
  </main>
</div>
