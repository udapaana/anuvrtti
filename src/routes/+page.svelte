<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import LearningTree from '$lib/components/LearningTree.svelte';
</script>

<svelte:head>
  <title>Anuvrtti | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <div class="mb-6 text-center">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="अध्ययनम्" />
      <span class="text-stone-400 ml-2">Learning Paths</span>
    </h1>
    <p class="text-stone-600 max-w-xl mx-auto">
      Structured paths through the Ashtadhyayi based on Pushpa Dikshit's prakriyā method.
    </p>
  </div>

  <section class="bg-white rounded-lg border border-stone-200 p-6">
    <LearningTree />
  </section>
</div>
