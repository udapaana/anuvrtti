<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { getSutra, getCommentary, getDependencies, getDependents, type Sutra, type Commentary } from '$lib/data';
  import SutraCard from '$lib/components/SutraCard.svelte';

  let sutra: Sutra | undefined = $state();
  let commentary: Commentary | undefined = $state();
  let dependencies: Sutra[] = $state([]);
  let dependents: Sutra[] = $state([]);
  let loading = $state(true);

  $effect(() => {
    const id = $page.params.id;
    loading = true;

    Promise.all([
      getSutra(id),
      getSutra(id).then(s => s ? getCommentary(s.numericId) : undefined),
      getDependencies(id),
      getDependents(id)
    ]).then(([s, c, deps, depts]) => {
      sutra = s;
      commentary = c;
      dependencies = deps;
      dependents = depts.slice(0, 10); // Limit to first 10
      loading = false;
    });
  });

  function handleSutraClick(id: string) {
    goto(`/sutra/${id}`);
  }

  // Navigation to adjacent sūtras
  function prevSutra(): string | null {
    if (!sutra) return null;
    const n = sutra.number - 1;
    if (n < 1) {
      // Go to previous pāda
      const p = sutra.pada - 1;
      if (p < 1) {
        const a = sutra.adhyaya - 1;
        if (a < 1) return null;
        return `${a}.4.999`; // Will need adjustment
      }
      return `${sutra.adhyaya}.${p}.999`;
    }
    return `${sutra.adhyaya}.${sutra.pada}.${n}`;
  }

  function nextSutra(): string | null {
    if (!sutra) return null;
    return `${sutra.adhyaya}.${sutra.pada}.${sutra.number + 1}`;
  }
</script>

<svelte:head>
  <title>{sutra ? `${sutra.id} ${sutra.text}` : 'Loading...'} | Aṣṭādhyāyī</title>
</svelte:head>

{#if loading}
  <div class="text-stone-500">Loading...</div>
{:else if !sutra}
  <div class="text-red-600">Sūtra not found</div>
{:else}
  <div class="max-w-3xl mx-auto">
    <!-- Navigation -->
    <nav class="flex justify-between items-center mb-6">
      <a
        href="/"
        class="text-sm text-stone-500 hover:text-stone-700"
      >
        ← Back to {sutra.adhyaya}.{sutra.pada}
      </a>
      <div class="flex gap-2">
        {#if prevSutra()}
          <a
            href="/sutra/{prevSutra()}"
            class="px-3 py-1 text-sm bg-stone-100 rounded hover:bg-stone-200"
          >
            ← Prev
          </a>
        {/if}
        <a
          href="/sutra/{nextSutra()}"
          class="px-3 py-1 text-sm bg-stone-100 rounded hover:bg-stone-200"
        >
          Next →
        </a>
      </div>
    </nav>

    <!-- Main sūtra display -->
    <SutraCard
      {sutra}
      {commentary}
      expanded={true}
      onSutraClick={handleSutraClick}
    />

    <!-- Dependencies graph -->
    {#if dependencies.length > 0}
      <section class="mt-8">
        <h2 class="text-lg font-medium mb-4">
          Depends on ({dependencies.length})
        </h2>
        <div class="space-y-3">
          {#each dependencies as dep (dep.id)}
            <a href="/sutra/{dep.id}" class="block">
              <div class="p-3 bg-white rounded border border-stone-200 hover:border-indigo-300 transition-colors">
                <div class="flex items-start gap-3">
                  <span class="text-sm font-mono text-stone-400">{dep.id}</span>
                  <p class="font-sanskrit">{dep.text}</p>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    <!-- Dependents -->
    {#if dependents.length > 0}
      <section class="mt-8">
        <h2 class="text-lg font-medium mb-4">
          Used by ({dependents.length}{dependents.length === 10 ? '+' : ''})
        </h2>
        <div class="space-y-3">
          {#each dependents as dep (dep.id)}
            <a href="/sutra/{dep.id}" class="block">
              <div class="p-3 bg-white rounded border border-stone-200 hover:border-indigo-300 transition-colors">
                <div class="flex items-start gap-3">
                  <span class="text-sm font-mono text-stone-400">{dep.id}</span>
                  <p class="font-sanskrit">{dep.text}</p>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    <!-- Visual dependency diagram -->
    <section class="mt-8 p-6 bg-white rounded-lg border border-stone-200">
      <h2 class="text-lg font-medium mb-4">Dependency Flow</h2>
      <div class="flex items-center justify-center gap-4 text-sm overflow-x-auto py-4">
        <!-- Dependencies -->
        {#if dependencies.length > 0}
          <div class="flex flex-col gap-2 items-end">
            {#each dependencies as dep (dep.id)}
              <a
                href="/sutra/{dep.id}"
                class="px-3 py-1 bg-stone-100 rounded-full text-stone-600 hover:bg-indigo-100 hover:text-indigo-700 whitespace-nowrap"
              >
                {dep.id}
              </a>
            {/each}
          </div>
          <div class="text-stone-300 text-2xl">→</div>
        {/if}

        <!-- Current sūtra -->
        <div class="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
          {sutra.id}
        </div>

        <!-- Dependents -->
        {#if dependents.length > 0}
          <div class="text-stone-300 text-2xl">→</div>
          <div class="flex flex-col gap-2 items-start">
            {#each dependents.slice(0, 5) as dep (dep.id)}
              <a
                href="/sutra/{dep.id}"
                class="px-3 py-1 bg-stone-100 rounded-full text-stone-600 hover:bg-indigo-100 hover:text-indigo-700 whitespace-nowrap"
              >
                {dep.id}
              </a>
            {/each}
            {#if dependents.length > 5}
              <span class="text-stone-400 text-xs">+{dependents.length - 5} more</span>
            {/if}
          </div>
        {/if}
      </div>
    </section>
  </div>
{/if}
