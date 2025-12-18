<script lang="ts">
  import '../app.css';
  import ScriptToggle from '$lib/components/ScriptToggle.svelte';
  import { displayScript } from '$lib/stores/preferences';
  import type { Script } from '$lib/transliteration';

  let { children } = $props();

  function handleScriptChange(script: Script) {
    displayScript.set(script);
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-stone-50 text-stone-900">
  <header class="border-b border-stone-200 bg-white">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="text-xl font-semibold">
        <span class="font-sanskrit">अनुवृत्ति</span>
        <span class="text-stone-400 text-sm ml-2">Aṣṭādhyāyī Explorer</span>
      </a>
      <div class="flex items-center gap-6">
        <nav class="flex gap-6 text-sm">
          <a href="/" class="hover:text-indigo-600">Browse</a>
          <a href="/search" class="hover:text-indigo-600">Search</a>
          <a href="/graph" class="hover:text-indigo-600">Graph</a>
        </nav>
        <ScriptToggle current={$displayScript} onChange={handleScriptChange} />
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 py-8">
    {@render children()}
  </main>
</div>
