<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import LearningTree from '$lib/components/LearningTree.svelte';
  import JargonLookup from '$lib/components/JargonLookup.svelte';

</script>

<svelte:head>
  <title>Learn | anuvrtti</title>
</svelte:head>

<div class="max-w-7xl mx-auto">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <!-- Left sidebar: Jargon (hidden on mobile) -->
    <aside class="hidden lg:block lg:col-span-3">
      <div class="sticky top-4">
        <JargonLookup />
      </div>
    </aside>

    <!-- Main: Tree Navigation -->
    <main class="lg:col-span-9">
      <section class="bg-white rounded-lg border border-stone-200 p-6 overflow-visible">
        <LearningTree />
      </section>
    </main>
  </div>
</div>
