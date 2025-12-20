<script lang="ts">
  import { learningPaths } from '$lib/learning/paths';
  import { learningProgress } from '$lib/stores/learning';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let completedPaths: string[] = [];

  learningProgress.subscribe(p => {
    completedPaths = p.completedPaths;
  });

  function getProgress(pathId: string): number {
    const path = learningPaths.find(p => p.id === pathId);
    if (!path) return 0;
    return learningProgress.getPathProgress(pathId);
  }

  function isCompleted(pathId: string): boolean {
    return completedPaths.includes(pathId);
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };
</script>

<svelte:head>
  <title>Learn | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <div class="mb-8">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="अध्ययनम्" />
      <span class="text-stone-400 ml-2">Learning Paths</span>
    </h1>
    <p class="text-stone-600">
      Structured paths through the Ashtadhyayi based on Pushpa Dikshit's prakriyā method.
    </p>
  </div>

  <!-- All Paths -->
  <section class="mb-8">
    <div class="grid gap-4">
      {#each learningPaths as path}
        {@const progress = getProgress(path.id)}
        {@const completed = isCompleted(path.id)}
        <a
          href="/learn/{path.id}"
          class="block p-5 bg-white rounded-lg border border-stone-200 hover:border-indigo-300 hover:shadow-md transition-all"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-lg font-medium">
                  <Sanskrit text={path.titleSanskrit} />
                  <span class="text-stone-500 ml-2">{path.title}</span>
                </h3>
                <span class="px-2 py-0.5 text-xs rounded-full {difficultyColors[path.difficulty]}">
                  {path.difficulty}
                </span>
                {#if completed}
                  <span class="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    ✓ Completed
                  </span>
                {/if}
              </div>
              <p class="text-sm text-stone-600 mb-3">{path.description}</p>
              <div class="flex items-center gap-4 text-xs text-stone-500">
                <span>{path.steps.length} sutras</span>
                <span>·</span>
                <span>{path.estimatedTime}</span>
                {#if progress > 0 && !completed}
                  <span>·</span>
                  <span class="text-indigo-600">{progress}/{path.steps.length} completed</span>
                {/if}
              </div>
            </div>
            <div class="text-stone-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Progress bar -->
          {#if progress > 0 || completed}
            <div class="mt-4 h-1.5 bg-stone-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-indigo-500 rounded-full transition-all"
                style="width: {completed ? 100 : (progress / path.steps.length) * 100}%"
              ></div>
            </div>
          {/if}
        </a>
      {/each}
    </div>
  </section>
</div>
