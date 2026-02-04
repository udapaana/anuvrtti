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

  // Determine which mode is active based on current path
  type Mode = 'learn' | 'ref' | 'none';
  let currentMode: Mode = $derived.by(() => {
    const path = $page.url.pathname;
    if (path === '/learn' || path.startsWith('/learn/') || path === '/') return 'learn';
    if (path === '/ref' || path.startsWith('/ref/')) return 'ref';
    return 'none';
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&family=Noto+Sans+Gurmukhi:wght@400;500;600&family=Noto+Sans+Oriya:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-stone-50 text-stone-900">
  <header class="border-b border-stone-200 bg-white sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="text-lg font-semibold hover:text-indigo-600 transition-colors">
        <Sanskrit text="अनुवृत्ति" />
      </a>

      <nav class="flex items-center gap-1">
        <a
          href="/learn"
          class="nav-link"
          class:active={currentMode === 'learn'}
        >
          Learn
        </a>
        <a
          href="/ref"
          class="nav-link"
          class:active={currentMode === 'ref'}
        >
          Reference
        </a>
      </nav>

      <ScriptToggle current={$displayScript} onChange={handleScriptChange} />
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-6">
    {@render children()}
  </main>

  <footer class="border-t border-stone-200 bg-white mt-12">
    <div class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-stone-500">
        <div>
          Data from <a href="https://ashtadhyayi.com" target="_blank" rel="noopener" class="text-indigo-600 hover:underline">ashtadhyayi.com</a>
        </div>
        <div class="flex items-center gap-4">
          <a href="/about" class="hover:text-stone-700">About</a>
          <a href="https://github.com/udapaana/anuvrtti" target="_blank" rel="noopener" class="hover:text-stone-700">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #57534e;
    border-radius: 0.375rem;
    transition: all 0.15s;
  }
  .nav-link:hover {
    color: #1c1917;
    background: #f5f5f4;
  }
  .nav-link.active {
    color: #4f46e5;
    background: #eef2ff;
  }
</style>
