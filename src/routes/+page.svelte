<script lang="ts">
  import type { Sutra } from '$lib/data';
  import SutraCard from '$lib/components/SutraCard.svelte';
  import AdhyayaNav from '$lib/components/AdhyayaNav.svelte';

  let { data } = $props();

  let selectedAdhyaya = $state(1);
  let selectedPada = $state(1);

  // Filtered sutras based on selection
  let sutras = $derived(
    data.sutras.filter((s: Sutra) => s.adhyaya === selectedAdhyaya && s.pada === selectedPada)
  );

  function handleSutraClick(id: string) {
    window.location.href = `/sutra/${id}`;
  }

  // Stats for the overview
  let stats = $derived({
    total: sutras.length,
    samjna: sutras.filter((s: Sutra) => s.type === 'samjna').length,
    paribhasha: sutras.filter((s: Sutra) => s.type === 'paribhasha').length,
    vidhi: sutras.filter((s: Sutra) => s.type === 'vidhi').length,
  });
</script>

<svelte:head>
  <title>Astadhyayi Explorer</title>
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
          Pada {selectedAdhyaya}.{selectedPada}
        </h3>
        <dl class="text-sm space-y-1">
          <div class="flex justify-between">
            <dt class="text-stone-500">Sutras</dt>
            <dd class="font-medium">{stats.total}</dd>
          </div>
          {#if stats.samjna > 0}
            <div class="flex justify-between">
              <dt class="text-stone-500">Samjna</dt>
              <dd><span class="badge badge-samjna">{stats.samjna}</span></dd>
            </div>
          {/if}
          {#if stats.paribhasha > 0}
            <div class="flex justify-between">
              <dt class="text-stone-500">Paribhasa</dt>
              <dd><span class="badge badge-paribhasha">{stats.paribhasha}</span></dd>
            </div>
          {/if}
        </dl>
      </div>

      <!-- Quick navigation -->
      <div class="mt-4">
        <label class="block text-sm font-medium text-stone-500 mb-2">
          Go to Pada
        </label>
        <div class="flex gap-2">
          <select
            bind:value={selectedAdhyaya}
            class="flex-1 text-sm border border-stone-200 rounded px-2 py-1"
          >
            {#each [1,2,3,4,5,6,7,8] as a}
              <option value={a}>Adhyaya {a}</option>
            {/each}
          </select>
          <select
            bind:value={selectedPada}
            class="flex-1 text-sm border border-stone-200 rounded px-2 py-1"
          >
            {#each [1,2,3,4] as p}
              <option value={p}>Pada {p}</option>
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

    <div class="space-y-4">
      {#each sutras as sutra (sutra.id)}
        <a href="/sutra/{sutra.id}" class="block">
          <SutraCard {sutra} onSutraClick={handleSutraClick} />
        </a>
      {/each}
    </div>
  </main>
</div>
