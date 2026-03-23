<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import LearningTree from '$lib/components/LearningTree.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import { selectedTerm } from '$lib/stores/jargon';
  import { lookupTerm } from '$lib/jargon';

  let jargonVisible = $state(false);

  selectedTerm.subscribe(term => {
    if (term && lookupTerm(term)) jargonVisible = true;
  });

  function closeJargon() {
    jargonVisible = false;
  }
</script>

<svelte:head>
  <title>Learn | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <div class="mb-6 text-center">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="अध्ययनम्" />
      <span class="text-stone-400 ml-2">Learning Paths</span>
    </h1>
    <p class="text-stone-600 max-w-xl mx-auto">
      Structured paths through the Ashtadhyayi based on Pushpa Dikshit's prakriya method.
      Start with the introduction, then explore systematically or follow the reading track.
    </p>
  </div>

  <!-- Tree Navigation -->
  <section class="bg-white rounded-lg border border-stone-200 p-6 overflow-visible">
    <LearningTree />
  </section>

  <!-- Jargon panel -->
  {#if jargonVisible}
    <section class="mt-4 bg-white rounded-lg border border-stone-200 overflow-hidden">
      <div class="flex items-center justify-between px-4 py-2 border-b border-stone-100 bg-stone-50">
        <span class="text-xs font-medium text-stone-500 uppercase tracking-wide">Dictionary</span>
        <button onclick={closeJargon} class="text-stone-400 hover:text-stone-600 text-lg leading-none">×</button>
      </div>
      <div class="p-4">
        <JargonLookup />
      </div>
    </section>
  {/if}
</div>
