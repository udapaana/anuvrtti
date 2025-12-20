<script lang="ts">
  import { onMount } from 'svelte';
  import { getAdhikaras, getSutrasUnderAdhikara, type Sutra } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let adhikaras: { sutra: Sutra; scopeCount: number }[] = $state([]);
  let loading = $state(true);
  let expanded = $state<string | null>(null);
  let expandedSutras = $state<Sutra[]>([]);
  let loadingExpanded = $state(false);

  onMount(async () => {
    adhikaras = await getAdhikaras();
    loading = false;
  });

  async function toggleExpand(id: string) {
    if (expanded === id) {
      expanded = null;
      expandedSutras = [];
    } else {
      expanded = id;
      loadingExpanded = true;
      expandedSutras = await getSutrasUnderAdhikara(id);
      loadingExpanded = false;
    }
  }
</script>

<svelte:head>
  <title>Adhikaras | Ashtadhyayi Explorer</title>
</svelte:head>

<div>
  <div class="mb-6">
    <h1 class="text-2xl font-semibold">Adhikaras</h1>
    <p class="text-stone-500 text-sm mt-1">
      Governing rules that apply to subsequent sutras within their scope
    </p>
  </div>

  {#if loading}
    <div class="text-stone-500">Loading...</div>
  {:else}
    <p class="text-sm text-stone-600 mb-4">{adhikaras.length} adhikaras found</p>

    <div class="space-y-2">
      {#each adhikaras as { sutra, scopeCount }}
        <div class="bg-white rounded border border-stone-200">
          <button
            class="w-full p-3 text-left hover:bg-stone-50 transition-colors flex items-center gap-3"
            onclick={() => toggleExpand(sutra.id)}
          >
            <span class="text-stone-400 w-5">
              {#if expanded === sutra.id}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              {:else}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              {/if}
            </span>
            <span
              class="w-2 h-2 rounded-full shrink-0 bg-purple-500"
            ></span>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline gap-2">
                <span class="font-mono text-sm text-stone-500">{sutra.id}</span>
                <span class="text-lg"><Sanskrit text={sutra.text} /></span>
              </div>
            </div>
            <span class="text-sm text-stone-500 shrink-0">
              {scopeCount} sutras
            </span>
          </button>

          {#if expanded === sutra.id}
            <div class="border-t border-stone-100 p-3 bg-stone-50">
              {#if loadingExpanded}
                <div class="text-stone-500 text-sm">Loading...</div>
              {:else}
                <div class="grid gap-1 max-h-64 overflow-y-auto">
                  {#each expandedSutras.slice(0, 50) as s}
                    <a
                      href="/sutra/{s.id}"
                      class="text-sm py-1 px-2 hover:bg-white rounded flex items-baseline gap-2"
                    >
                      <span class="font-mono text-xs text-stone-400">{s.id}</span>
                      <span><Sanskrit text={s.text} /></span>
                    </a>
                  {/each}
                  {#if expandedSutras.length > 50}
                    <div class="text-xs text-stone-400 py-1 px-2">
                      +{expandedSutras.length - 50} more...
                    </div>
                  {/if}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>
