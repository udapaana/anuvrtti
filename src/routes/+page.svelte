<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import LearningTree from '$lib/components/LearningTree.svelte';
  import { learningProgress } from '$lib/stores/learning';
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import { onMount } from 'svelte';

  // Check if user has started any learning path
  let hasProgress = $state(false);
  let currentPathId: string | null = $state(null);
  let currentStep = $state(0);
  let pathProgress: Record<string, number[]> = $state({});

  learningProgress.subscribe(p => {
    hasProgress = p.completedPaths.length > 0 || Object.keys(p.pathProgress).length > 0;
    currentPathId = p.currentPath;
    currentStep = p.currentStep;
    pathProgress = p.pathProgress;
  });

  // Resolve the current/last active path for resume card
  let resumePath: PathMeta | null = $state(null);
  let resumeStep = $state(0);
  let resumeTotal = $state(0);

  onMount(async () => {
    if (!hasProgress) return;
    try {
      const index = await loadPathIndex();

      // Find the path to resume: either the explicitly current one,
      // or the most recently touched (most completed steps)
      let targetId = currentPathId;
      if (!targetId) {
        // Find the path with progress that isn't completed
        let bestId: string | null = null;
        let bestSteps = -1;
        for (const [id, steps] of Object.entries(pathProgress)) {
          const meta = index.find(p => p.id === id);
          if (meta && steps.length > 0 && steps.length < meta.stepCount && steps.length > bestSteps) {
            bestId = id;
            bestSteps = steps.length;
          }
        }
        targetId = bestId;
      }

      if (targetId) {
        const meta = index.find(p => p.id === targetId);
        if (meta) {
          const steps = pathProgress[targetId] || [];
          // Only show resume if path isn't fully completed
          if (steps.length < meta.stepCount) {
            resumePath = meta;
            resumeStep = steps.length;
            resumeTotal = meta.stepCount;
          }
        }
      }
    } catch (e) {
      // Silently fail — resume card is optional
    }
  });

</script>

<svelte:head>
  <title>Anuvrtti | Learn Sanskrit through the Ashtadhyayi</title>
</svelte:head>

{#if hasProgress}
  <!-- Returning user: show resume card + learning tree -->
  <div class="max-w-4xl mx-auto">

    {#if resumePath}
      <!-- Resume learning card -->
      <a
        href="/learn/{resumePath.id}?step={resumeStep}"
        class="block mb-6 bg-gradient-to-r from-indigo-50 to-white rounded-xl border border-indigo-200 p-5 hover:border-indigo-400 hover:shadow-md transition-all group"
      >
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1 min-w-0">
            <p class="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">Continue learning</p>
            <h2 class="text-lg font-semibold text-stone-900 truncate"><Sanskrit text={resumePath.title} source="devanagari" /></h2>
            <p class="text-sm text-stone-500 mt-0.5">Step {resumeStep + 1} of {resumeTotal}</p>
          </div>
          <div class="flex items-center gap-3 flex-shrink-0">
            <div class="w-24">
              <div class="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <div class="h-full bg-indigo-500 rounded-full" style="width: {(resumeStep / resumeTotal) * 100}%"></div>
              </div>
            </div>
            <span class="text-indigo-500 group-hover:translate-x-0.5 transition-transform">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    {/if}

    <div class="mb-6 text-center">
      <h1 class="text-2xl font-semibold mb-2">
        <Sanskrit text="अध्ययनम्" />
        <span class="text-stone-400 ml-2">Learning Paths</span>
      </h1>
      <p class="text-stone-600 max-w-xl mx-auto">
        Structured paths through the Ashtadhyayi based on Pushpa Dikshit's prakriya method.
      </p>
    </div>

    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <LearningTree />
    </section>

    <!-- Quick tools (always visible) -->
    <div class="mt-6 flex items-center justify-center gap-6 text-sm">
      <a href="/ref/prakriya" class="flex items-center gap-1.5 text-stone-500 hover:text-purple-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Prakriya</span>
      </a>
      <a href="/ref/pratyahara" class="flex items-center gap-1.5 text-stone-500 hover:text-cyan-600 transition-colors">
        <span class="text-xs font-bold">ac</span>
        <span>Pratyahara</span>
      </a>
      <a href="/ref/tables" class="flex items-center gap-1.5 text-stone-500 hover:text-teal-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span>Tables</span>
      </a>
      <a href="/ref" class="flex items-center gap-1.5 text-stone-500 hover:text-rose-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
      </a>
    </div>
  </div>
{:else}
  <!-- New user: show the two modes -->
  <div class="max-w-4xl mx-auto">
    <!-- Hero -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-semibold mb-3">
        Learn Sanskrit through the <Sanskrit text="अष्टाध्यायी" />
      </h1>
      <p class="text-stone-600 max-w-2xl mx-auto text-lg">
        The traditional way teaches Sanskrit first, grammar later. We flip that:
        use Panini's grammar as your scaffold to learn Sanskrit itself.
      </p>
    </div>

    <!-- Two Modes -->
    <div class="grid md:grid-cols-2 gap-6 mb-10">
      <!-- Learn -->
      <a
        href="/learn"
        class="group block bg-white rounded-xl border border-stone-200 p-8 hover:border-indigo-300 hover:shadow-lg transition-all text-left w-full"
      >
        <div class="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold mb-2 group-hover:text-indigo-700">
          <Sanskrit text="अध्ययनम्" />
          <span class="text-stone-400 ml-2 font-normal">Learn</span>
        </h2>
        <p class="text-stone-600 mb-4">
          Structured learning paths that teach Sanskrit grammar through reading.
          Start from zero, build systematically. The Pushpa Dikshit method.
        </p>
        <ul class="text-sm text-stone-500 space-y-1 mb-4">
          <li>• Guided path for beginners</li>
          <li>• Grammar organized by topic</li>
          <li>• Track your progress</li>
        </ul>
        <div class="text-sm text-indigo-600 font-medium flex items-center gap-1">
          Start Learning
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>

      <!-- Reference -->
      <a
        href="/ref"
        class="group block bg-white rounded-xl border border-stone-200 p-8 hover:border-amber-300 hover:shadow-lg transition-all"
      >
        <div class="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold mb-2 group-hover:text-amber-700">
          <Sanskrit text="सन्दर्भः" />
          <span class="text-stone-400 ml-2 font-normal">Reference</span>
        </h2>
        <p class="text-stone-600 mb-4">
          Browse all 4,000 sutras. Search by text, type, or concept.
          Tools for analysis and lookup.
        </p>
        <ul class="text-sm text-stone-500 space-y-1 mb-4">
          <li>• Browse & search sutras</li>
          <li>• Prakriya derivation engine</li>
          <li>• Grammar tables & charts</li>
        </ul>
        <div class="text-sm text-amber-600 font-medium flex items-center gap-1">
          Browse Reference
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>

    <!-- How it works -->
    <div class="bg-stone-50 rounded-xl p-8 mb-10">
      <h2 class="text-lg font-semibold mb-6 text-center">How This Works</h2>
      <div class="grid md:grid-cols-3 gap-8 text-sm">
        <div class="text-center">
          <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
          <h3 class="font-medium mb-2">Three Depth Levels</h3>
          <p class="text-stone-600">
            Every rule has Simple, Standard, and Advanced explanations.
            Start simple, go deeper as you grow.
          </p>
        </div>
        <div class="text-center">
          <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
          <h3 class="font-medium mb-2">See Rules in Action</h3>
          <p class="text-stone-600">
            Watch word derivations step by step.
            The prakriya engine shows exactly which rules apply.
          </p>
        </div>
        <div class="text-center">
          <div class="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
          <h3 class="font-medium mb-2">Learn by Reading</h3>
          <p class="text-stone-600">
            Grammar taught through real Sanskrit passages.
            See rules applied in context.
          </p>
        </div>
      </div>
    </div>

    <!-- Quick tools -->
    <div class="flex items-center justify-center gap-6 text-sm">
      <a href="/ref/prakriya" class="flex items-center gap-1.5 text-stone-500 hover:text-purple-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Prakriya</span>
      </a>
      <a href="/ref/pratyahara" class="flex items-center gap-1.5 text-stone-500 hover:text-cyan-600 transition-colors">
        <span class="text-xs font-bold">ac</span>
        <span>Pratyahara</span>
      </a>
      <a href="/ref/tables" class="flex items-center gap-1.5 text-stone-500 hover:text-teal-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span>Tables</span>
      </a>
      <a href="/ref" class="flex items-center gap-1.5 text-stone-500 hover:text-rose-600 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
      </a>
    </div>
  </div>
{/if}
