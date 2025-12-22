<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import ScriptToggle from '$lib/components/ScriptToggle.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import type { Script } from '$lib/transliteration';

  let { children } = $props();
  let mobileMenuOpen = $state(false);
  let analysisDropdownOpen = $state(false);

  // Handle GitHub Pages SPA redirect
  onMount(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect && redirect !== '/') {
      sessionStorage.removeItem('redirect');
      goto(redirect);
    }
  });

  function handleScriptChange(script: Script) {
    displayScript.set(script);
  }

  function isActive(path: string): boolean {
    return $page.url.pathname === path;
  }

  function isReferenceActive(): boolean {
    const referencePaths = ['/types', '/adhikara', '/connected', '/roots', '/leaves', '/pratyahara', '/prakriya'];
    return referencePaths.some(p => $page.url.pathname === p);
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
          <a href="/tour" class="hover:text-indigo-600 flex items-center gap-1 text-indigo-600">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tour
          </a>
          <a href="/" class="hover:text-indigo-600">Learn <span class="ml-1 px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 rounded">AI</span></a>
          <a href="/browse" class="hover:text-indigo-600">Browse</a>
          <a href="/search" class="hover:text-indigo-600">Search</a>

          <!-- Reference dropdown -->
          <div class="relative group">
            <button class="hover:text-indigo-600 flex items-center gap-1">
              Reference
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
              <div class="bg-white border border-stone-200 rounded shadow-lg py-1 min-w-40">
                <a href="/prakriya" class="block px-4 py-2 hover:bg-stone-50">Prakriya</a>
                <a href="/pratyahara" class="block px-4 py-2 hover:bg-stone-50">Pratyahara</a>
                <a href="/adhikara" class="block px-4 py-2 hover:bg-stone-50">Adhikaras</a>
                <a href="/connected" class="block px-4 py-2 hover:bg-stone-50">Most Connected</a>
                <a href="/roots" class="block px-4 py-2 hover:bg-stone-50">Root Sutras</a>
                <a href="/leaves" class="block px-4 py-2 hover:bg-stone-50">Leaf Sutras</a>
                <a href="/types" class="block px-4 py-2 hover:bg-stone-50">By Type</a>
              </div>
            </div>
          </div>
        </nav>
        <ScriptToggle current={$displayScript} onChange={handleScriptChange} />
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8">
    {@render children()}
  </main>

  <footer class="border-t border-stone-200 bg-white mt-16">
    <div class="max-w-6xl mx-auto px-4 py-6">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
        <div>
          Data sourced from <a href="https://ashtadhyayi.com" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">ashtadhyayi.com</a>
        </div>
        <div class="flex items-center gap-4">
          <a href="https://github.com/udapaana/anuvrtti" target="_blank" rel="noopener" class="hover:text-stone-700">GitHub</a>
          <span class="text-stone-300">|</span>
          <span>Built by <a href="https://udapaana.in" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">Udapaana</a></span>
        </div>
      </div>
    </div>
  </footer>
</div>
