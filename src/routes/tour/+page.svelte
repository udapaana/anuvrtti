<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
</script>

<svelte:head>
  <title>Tour | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
  <div class="mb-8 text-center">
    <h1 class="text-2xl font-semibold mb-2">
      <Sanskrit text="परिचयः" />
      <span class="text-stone-400 ml-2">Welcome Tour</span>
    </h1>
    <p class="text-stone-600">
      A quick guide to exploring the Ashtadhyayi with this app.
    </p>
  </div>

  <div class="space-y-6">
    <!-- Learn -->
    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-2">
            <a href="/" class="hover:text-indigo-600">Learn</a>
            <span class="ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 rounded">AI</span>
          </h2>
          <p class="text-stone-600 text-sm mb-3">
            Structured learning paths through the Ashtadhyayi. Two modes:
          </p>
          <ul class="text-sm text-stone-600 space-y-2">
            <li class="flex gap-2">
              <span class="font-medium text-stone-800">पठनम् (Reading Path)</span>
              <span>— A curated sequence to reach reading fluency. Covers essentials from each topic.</span>
            </li>
            <li class="flex gap-2">
              <span class="font-medium text-stone-800">पाण्डित्यम् (Full Topics)</span>
              <span>— Deep dive by category. Master one area before moving on.</span>
            </li>
          </ul>
          <p class="text-stone-500 text-xs mt-3">
            Each path includes sutras with commentary, examples, and AI-powered explanations.
          </p>
        </div>
      </div>
    </section>

    <!-- Browse -->
    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-2">
            <a href="/browse" class="hover:text-indigo-600">Browse</a>
          </h2>
          <p class="text-stone-600 text-sm mb-3">
            Explore all ~4000 sutras organized by chapter (Adhyaya) and section (Pada).
          </p>
          <ul class="text-sm text-stone-600 space-y-1">
            <li>• Click any sutra to see its full details, anuvrtti, and connections</li>
            <li>• Filter by sutra type (samjna, vidhi, paribhasha, etc.)</li>
            <li>• See which sutras reference or depend on each other</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Search -->
    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-2">
            <a href="/search" class="hover:text-indigo-600">Search</a>
          </h2>
          <p class="text-stone-600 text-sm mb-3">
            Find sutras by text, meaning, or technical terms.
          </p>
          <ul class="text-sm text-stone-600 space-y-1">
            <li>• Search in Devanagari, IAST, or any supported script</li>
            <li>• Find sutras containing specific pratyaharas or terms</li>
            <li>• Results show context and matching highlights</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Reference Tools -->
    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-2">Reference Tools</h2>
          <p class="text-stone-600 text-sm mb-3">
            Specialized views for deeper analysis:
          </p>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <a href="/prakriya" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Prakriya</span>
              <p class="text-xs text-stone-500">Step-by-step derivations</p>
            </a>
            <a href="/pratyahara" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Pratyahara</span>
              <p class="text-xs text-stone-500">Sound group notation</p>
            </a>
            <a href="/adhikara" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Adhikaras</span>
              <p class="text-xs text-stone-500">Governing rules & scope</p>
            </a>
            <a href="/connected" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Most Connected</span>
              <p class="text-xs text-stone-500">Hub sutras in the network</p>
            </a>
            <a href="/roots" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Root Sutras</span>
              <p class="text-xs text-stone-500">Starting points</p>
            </a>
            <a href="/leaves" class="p-2 rounded bg-stone-50 hover:bg-stone-100">
              <span class="font-medium text-stone-800">Leaf Sutras</span>
              <p class="text-xs text-stone-500">End points</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Script Toggle -->
    <section class="bg-white rounded-lg border border-stone-200 p-6">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
          <span class="text-lg font-bold">क</span>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-semibold mb-2">Script Toggle</h2>
          <p class="text-stone-600 text-sm mb-3">
            View content in your preferred script. Click the <span class="px-1.5 py-0.5 bg-stone-100 rounded text-xs font-medium">क</span> button in the header.
          </p>
          <p class="text-stone-500 text-xs">
            Supports: Devanagari, Telugu, Kannada, Malayalam, Tamil, Bengali, Gujarati, Gurmukhi, Odia, Sinhala, IAST, and more.
          </p>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="bg-indigo-50 rounded-lg border border-indigo-200 p-6 text-center">
      <h2 class="text-lg font-semibold mb-2 text-indigo-900">Ready to begin?</h2>
      <p class="text-indigo-700 text-sm mb-4">
        Start with the Reading Path for a guided introduction, or dive into any topic that interests you.
      </p>
      <a
        href="/"
        class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Start Learning
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </section>
  </div>
</div>
