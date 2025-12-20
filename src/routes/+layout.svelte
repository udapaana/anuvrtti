<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import ScriptToggle from '$lib/components/ScriptToggle.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import type { Script } from '$lib/transliteration';

  let { children } = $props();
  let mobileMenuOpen = $state(false);
  let analysisDropdownOpen = $state(false);

  function handleScriptChange(script: Script) {
    displayScript.set(script);
  }

  function isActive(path: string): boolean {
    return $page.url.pathname === path;
  }

  function isAnalysisActive(): boolean {
    const analysisPaths = ['/types', '/adhikara', '/connected', '/roots', '/leaves', '/graph'];
    return analysisPaths.some(p => $page.url.pathname === p);
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    analysisDropdownOpen = false;
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <!-- Noto Sans fonts for all supported Indic scripts -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&family=Noto+Sans+Gurmukhi:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-stone-50 text-stone-900">
  <header class="border-b border-stone-200 bg-white">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-semibold">
        <Sanskrit text="अनुवृत्ति" />
        <span class="text-stone-400 text-sm ml-2">Ashtadhyayi Explorer</span>
      </a>
      <div class="flex items-center gap-6">
        <nav class="flex items-center gap-4 text-sm">
          <a href="/" class="hover:text-indigo-600">Browse</a>
          <a href="/search" class="hover:text-indigo-600">Search</a>

          <!-- Analysis dropdown -->
          <div class="relative group">
            <button class="hover:text-indigo-600 flex items-center gap-1">
              Analysis
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute right-0 top-full pt-2 hidden group-hover:block">
              <div class="bg-white border border-stone-200 rounded shadow-lg py-1 min-w-40">
                <a href="/types" class="block px-4 py-2 hover:bg-stone-50">By Type</a>
                <a href="/adhikara" class="block px-4 py-2 hover:bg-stone-50">Adhikaras</a>
                <a href="/connected" class="block px-4 py-2 hover:bg-stone-50">Most Connected</a>
                <a href="/roots" class="block px-4 py-2 hover:bg-stone-50">Root Sutras</a>
                <a href="/leaves" class="block px-4 py-2 hover:bg-stone-50">Leaf Sutras</a>
                <a href="/graph" class="block px-4 py-2 hover:bg-stone-50">Graph</a>
              </div>
            </div>
          </div>

          <a href="/pratyahara" class="hover:text-indigo-600">Pratyahara</a>
        </nav>
        <ScriptToggle current={$displayScript} onChange={handleScriptChange} />
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8">
    {@render children()}
  </main>
</div>
