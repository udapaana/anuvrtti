<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import LearningTree from '$lib/components/LearningTree.svelte';
</script>

<svelte:head>
  <title>Learn | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-6xl mx-auto">
  <div class="mb-6 text-center">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="अध्ययनम्" />
      <span class="text-stone-400 ml-2">Learning Paths</span>
    </h1>
    <p class="text-stone-600 max-w-xl mx-auto">
      Explore the Ashtadhyayi through structured paths. Start with the introduction, then follow any branch based on what you want to learn.
    </p>
  </div>

  <!-- Tree Navigation -->
  <section class="bg-white rounded-lg border border-stone-200 p-6 overflow-visible">
    <LearningTree />
  </section>
</div>
