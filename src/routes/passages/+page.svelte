<script lang="ts">
  import { onMount } from 'svelte';
  import { getAllPassages, getPassageSources, type TextSource } from '$lib/data/passages';
  import type { ReadingPassage } from '$lib/data/types';
  import PassageReader from '$lib/components/PassageReader.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let passages: ReadingPassage[] = $state([]);
  let sources: TextSource[] = $state([]);
  let selectedSource: string = $state('all');
  let selectedDifficulty: number = $state(0);
  let loading = $state(true);

  onMount(async () => {
    sources = await getPassageSources();
    passages = await getAllPassages();
    loading = false;
  });

  let filteredPassages = $derived(() => {
    let result = passages;

    if (selectedSource !== 'all') {
      result = result.filter(p => p.source === selectedSource);
    }

    if (selectedDifficulty > 0) {
      result = result.filter(p => p.difficulty === selectedDifficulty);
    }

    return result;
  });

  function getDifficultyLabel(d: number): string {
    const labels = ['', 'Beginner', 'Easy', 'Intermediate', 'Advanced', 'Challenging'];
    return labels[d] || '';
  }
</script>

<svelte:head>
  <title>Reading Passages | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <header class="mb-8">
    <h1 class="text-2xl font-semibold text-stone-800">Reading Passages</h1>
    <p class="text-stone-600 mt-2">
      Practice reading Sanskrit with passages from classical literature.
      Each passage includes vocabulary, grammar notes, and links to relevant sūtras.
    </p>
  </header>

  <!-- Filters -->
  <div class="flex flex-wrap gap-4 mb-6 p-4 bg-stone-50 rounded-lg">
    <div>
      <label for="source" class="block text-xs font-medium text-stone-500 mb-1">Source</label>
      <select
        id="source"
        bind:value={selectedSource}
        class="px-3 py-1.5 border border-stone-200 rounded text-sm"
      >
        <option value="all">All Sources</option>
        {#each sources as source}
          <option value={source.id}>{source.title}</option>
        {/each}
      </select>
    </div>

    <div>
      <label for="difficulty" class="block text-xs font-medium text-stone-500 mb-1">Difficulty</label>
      <select
        id="difficulty"
        bind:value={selectedDifficulty}
        class="px-3 py-1.5 border border-stone-200 rounded text-sm"
      >
        <option value={0}>All Levels</option>
        <option value={1}>Beginner</option>
        <option value={2}>Easy</option>
        <option value={3}>Intermediate</option>
        <option value={4}>Advanced</option>
        <option value={5}>Challenging</option>
      </select>
    </div>

    <div class="ml-auto self-end">
      <span class="text-sm text-stone-500">
        {filteredPassages().length} passage{filteredPassages().length !== 1 ? 's' : ''}
      </span>
    </div>
  </div>

  {#if loading}
    <div class="space-y-4">
      {#each [1, 2, 3] as _}
        <div class="animate-pulse bg-white border border-stone-200 rounded-lg p-6">
          <div class="h-4 w-48 bg-stone-200 rounded mb-4"></div>
          <div class="h-8 w-full bg-stone-200 rounded mb-4"></div>
          <div class="h-20 w-full bg-stone-200 rounded"></div>
        </div>
      {/each}
    </div>
  {:else if filteredPassages().length === 0}
    <div class="text-center py-12 text-stone-500">
      No passages found matching your filters.
    </div>
  {:else}
    <div class="space-y-6">
      {#each filteredPassages() as passage (passage.id)}
        <PassageReader
          {passage}
          showTranslation={true}
          showVocabulary={true}
          showGrammarNotes={true}
          showSutraRefs={true}
        />
      {/each}
    </div>
  {/if}
</div>
