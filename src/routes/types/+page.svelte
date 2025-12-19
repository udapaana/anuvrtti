<script lang="ts">
  import type { Sutra } from '$lib/data';
  import Sanskrit from '$lib/components/Sanskrit.svelte';

  let { data } = $props();

  // Track which sections are expanded
  let expanded: Record<string, boolean> = $state({
    samjna: true,
    paribhasha: true,
    adhikara: true,
    atidesa: false,
    vidhi: false
  });

  function toggleSection(type: string) {
    expanded[type] = !expanded[type];
  }

  // For vidhi, group by adhyaya
  function groupByAdhyaya(sutras: Sutra[]): Map<number, Sutra[]> {
    const grouped = new Map<number, Sutra[]>();
    for (const s of sutras) {
      if (!grouped.has(s.adhyaya)) {
        grouped.set(s.adhyaya, []);
      }
      grouped.get(s.adhyaya)!.push(s);
    }
    return grouped;
  }
</script>

<svelte:head>
  <title>Sutras by Type | Astadhyayi Explorer</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
  <header class="mb-8">
    <h1 class="text-2xl font-semibold mb-2">Sutras by Type</h1>
    <p class="text-stone-600">
      The Astadhyayi organizes rules into functional categories.
      Understanding these types is essential for reading the grammar.
    </p>
  </header>

  <div class="space-y-6">
    {#each data.typeGroups as group}
      <section class="bg-white rounded-lg border border-stone-200 overflow-hidden">
        <!-- Section header -->
        <button
          class="w-full px-4 py-3 flex items-center justify-between hover:bg-stone-50 transition-colors"
          onclick={() => toggleSection(group.type)}
        >
          <div class="flex items-center gap-3">
            <span class="badge badge-{group.type}">
              <Sanskrit text={group.labelSanskrit} />
            </span>
            <span class="font-medium">{group.label}</span>
            <span class="text-sm text-stone-500">({group.sutras.length})</span>
          </div>
          <svg
            class="w-5 h-5 text-stone-400 transition-transform {expanded[group.type] ? 'rotate-180' : ''}"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {#if expanded[group.type]}
          <div class="border-t border-stone-100">
            <!-- Description -->
            <p class="px-4 py-2 text-sm text-stone-600 bg-stone-50">
              {group.description}
            </p>

            <!-- Table of sutras -->
            {#if group.type === 'vidhi'}
              <!-- Vidhi: group by adhyaya since there are so many -->
              {@const byAdhyaya = groupByAdhyaya(group.sutras)}
              {#each [...byAdhyaya.entries()] as [adhyaya, sutras]}
                <details class="group">
                  <summary class="px-4 py-2 text-sm font-medium text-stone-700 cursor-pointer hover:bg-stone-50 border-t border-stone-100">
                    Adhyaya {adhyaya}
                    <span class="text-stone-400">({sutras.length} sutras)</span>
                  </summary>
                  <div class="border-t border-stone-100">
                    <table class="w-full text-sm">
                      <tbody>
                        {#each sutras as sutra}
                          <tr class="border-b border-stone-50 hover:bg-stone-50">
                            <td class="px-4 py-2 w-20 font-mono text-stone-500">
                              <a href="/sutra/{sutra.id}" class="hover:text-indigo-600">{sutra.id}</a>
                            </td>
                            <td class="px-4 py-2">
                              <a href="/sutra/{sutra.id}" class="hover:text-indigo-600">
                                <Sanskrit text={sutra.text} />
                              </a>
                            </td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                </details>
              {/each}
            {:else}
              <!-- Other types: show flat table -->
              <table class="w-full text-sm">
                <thead class="bg-stone-50 text-stone-600">
                  <tr>
                    <th class="px-4 py-2 text-left w-20">ID</th>
                    <th class="px-4 py-2 text-left">Sutra</th>
                    {#if group.type === 'samjna'}
                      <th class="px-4 py-2 text-left w-40">Term</th>
                    {/if}
                  </tr>
                </thead>
                <tbody>
                  {#each group.sutras as sutra}
                    <tr class="border-b border-stone-50 hover:bg-stone-50">
                      <td class="px-4 py-2 font-mono text-stone-500">
                        <a href="/sutra/{sutra.id}" class="hover:text-indigo-600">{sutra.id}</a>
                      </td>
                      <td class="px-4 py-2">
                        <a href="/sutra/{sutra.id}" class="block hover:text-indigo-600">
                          <span class="text-lg">
                            <Sanskrit text={sutra.text} />
                          </span>
                        </a>
                      </td>
                      {#if group.type === 'samjna' && sutra.typeName}
                        <td class="px-4 py-2 text-stone-600">
                          <Sanskrit text={sutra.typeName} />
                        </td>
                      {/if}
                    </tr>
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>
        {/if}
      </section>
    {/each}
  </div>
</div>
