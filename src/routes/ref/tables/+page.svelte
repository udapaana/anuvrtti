<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { tingantaSections } from '$lib/reference/tinganta';
  import { subantaSections } from '$lib/reference/subanta';
  import { sandhiSections } from '$lib/reference/sandhi';
  import { samasaSections } from '$lib/reference/samasa';
  import { karakaSections } from '$lib/reference/karaka';
  import { kridantaSections } from '$lib/reference/kridanta';
  import { taddhitaSections } from '$lib/reference/taddhita';
  import { varnamalaSections } from '$lib/reference/varnamala';
  import ReferenceTable from '$lib/components/ReferenceTable.svelte';
  import MaheshvaraSutras from '$lib/components/MaheshvaraSutras.svelte';

  // Reference categories for navigation
  const categories = [
    { id: 'varnamala', title: 'Alphabet', titleSanskrit: 'वर्णमाला', icon: 'अ', available: true },
    { id: 'tinganta', title: 'Verbs', titleSanskrit: 'तिङन्त', icon: 'ति', available: true },
    { id: 'subanta', title: 'Nouns', titleSanskrit: 'सुबन्त', icon: 'सु', available: true },
    { id: 'karaka', title: 'Cases', titleSanskrit: 'कारक', icon: 'का', available: true },
    { id: 'sandhi', title: 'Sandhi', titleSanskrit: 'सन्धि', icon: '॰', available: true },
    { id: 'samasa', title: 'Compounds', titleSanskrit: 'समास', icon: '॰॰', available: true },
    { id: 'kridanta', title: 'Participles', titleSanskrit: 'कृदन्त', icon: 'कृ', available: true },
    { id: 'taddhita', title: 'Derivation', titleSanskrit: 'तद्धित', icon: 'त', available: true },
  ];

  let activeCategory = $state('varnamala');
  let activeSection = $state('maheshvara');

  function setCategory(id: string) {
    activeCategory = id;
    // Set first section as default
    const sections = getSectionsFor(id);
    activeSection = sections.length > 0 ? sections[0].id : 'overview';
  }

  // Get sections for a category
  function getSectionsFor(categoryId: string) {
    switch (categoryId) {
      case 'tinganta': return tingantaSections;
      case 'subanta': return subantaSections;
      case 'sandhi': return sandhiSections;
      case 'samasa': return samasaSections;
      case 'karaka': return karakaSections;
      case 'kridanta': return kridantaSections;
      case 'taddhita': return taddhitaSections;
      case 'varnamala': return varnamalaSections;
      default: return [];
    }
  }

  let sections = $derived(getSectionsFor(activeCategory));
</script>

<svelte:head>
  <title>Reference Tables | anuvrtti</title>
</svelte:head>

<div class="max-w-6xl mx-auto">
  <header class="text-center mb-6">
    <h1 class="text-2xl font-semibold">
      <Sanskrit text="सन्दर्भः" />
      <span class="text-stone-400 ml-2">Quick Reference</span>
    </h1>
    <p class="text-stone-600 text-sm mt-1">
      Quick-lookup tables for Sanskrit grammar.
    </p>
  </header>

  <div class="grid lg:grid-cols-[180px_1fr] gap-6">
    <!-- Category sidebar -->
    <nav class="flex lg:flex-col gap-1 flex-wrap">
      {#each categories as cat}
        <button
          class="flex items-center gap-2 px-3 py-2 text-left rounded-lg border border-transparent transition-colors
                 {activeCategory === cat.id ? 'bg-stone-100 border-stone-200' : 'hover:bg-stone-50'}
                 {!cat.available ? 'opacity-50 cursor-not-allowed' : ''}"
          onclick={() => cat.available && setCategory(cat.id)}
          disabled={!cat.available}
        >
          <span class="w-6 h-6 flex items-center justify-center rounded text-xs
                       {activeCategory === cat.id ? 'bg-indigo-500 text-white' : 'bg-stone-200 text-stone-600'}">
            {cat.icon}
          </span>
          <span class="font-medium text-sm">
            <Sanskrit text={cat.titleSanskrit} />
          </span>
          <span class="text-xs text-stone-400 ml-auto hidden lg:inline">{cat.title}</span>
        </button>
      {/each}
    </nav>

    <!-- Main content -->
    <main>
      <!-- Section tabs -->
      {#if sections.length > 0}
        <div class="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-lg mb-4">
          {#each sections as section}
            <button
              class="px-3 py-1.5 rounded-md text-sm transition-colors
                     {activeSection === section.id ? 'bg-white shadow-sm text-stone-900' : 'text-stone-600 hover:bg-stone-200'}"
              onclick={() => activeSection = section.id}
            >
              {#if section.titleSanskrit}
                <Sanskrit text={section.titleSanskrit} />
              {:else}
                {section.title}
              {/if}
            </button>
          {/each}
        </div>

        <!-- Section content -->
        {#each sections as section}
          {#if activeSection === section.id}
            <div class="bg-white border border-stone-200 rounded-lg p-4">
              <h2 class="text-xl font-semibold mb-1">
                {#if section.titleSanskrit}
                  <Sanskrit text={section.titleSanskrit} />
                  <span class="text-stone-400 font-normal ml-2">{section.title}</span>
                {:else}
                  {section.title}
                {/if}
              </h2>

              {#if section.description}
                <p class="text-stone-600 text-sm mb-4">{section.description}</p>
              {/if}

              {#if activeCategory === 'varnamala' && activeSection === 'maheshvara'}
                <MaheshvaraSutras />
              {:else if section.tables}
                <div class="space-y-6">
                  {#each section.tables as table}
                    <ReferenceTable {table} />
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      {:else}
        <div class="bg-stone-50 rounded-lg p-8 text-center text-stone-500">
          <p>This reference section is coming soon.</p>
        </div>
      {/if}
    </main>
  </div>
</div>
