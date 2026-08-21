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
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import ToolRow from '../ToolRow.svelte';

  /*
    One of the five single-purpose tools, all on one template now: the tool row
    on the shelf, a category spine because this one has categories, and one
    exhibit in the column. What goes is its own frame — the indigo count pills
    and the second pill row in a stone tray.
  */
  const categories = [
    { id: 'varnamala', title: 'alphabet', titleSanskrit: 'वर्णमाला' },
    { id: 'tinganta', title: 'verbs', titleSanskrit: 'तिङन्त' },
    { id: 'subanta', title: 'nouns', titleSanskrit: 'सुबन्त' },
    { id: 'karaka', title: 'cases', titleSanskrit: 'कारक' },
    { id: 'sandhi', title: 'sandhi', titleSanskrit: 'सन्धि' },
    { id: 'samasa', title: 'compounds', titleSanskrit: 'समास' },
    { id: 'kridanta', title: 'participles', titleSanskrit: 'कृदन्त' },
    { id: 'taddhita', title: 'derivation', titleSanskrit: 'तद्धित' }
  ];

  let activeCategory = $state('varnamala');
  let activeSection = $state('maheshvara');

  function setCategory(id: string) {
    activeCategory = id;
    const list = getSectionsFor(id);
    activeSection = list.length > 0 ? list[0].id : 'overview';
  }

  function getSectionsFor(categoryId: string) {
    switch (categoryId) {
      case 'tinganta':
        return tingantaSections;
      case 'subanta':
        return subantaSections;
      case 'sandhi':
        return sandhiSections;
      case 'samasa':
        return samasaSections;
      case 'karaka':
        return karakaSections;
      case 'kridanta':
        return kridantaSections;
      case 'taddhita':
        return taddhitaSections;
      case 'varnamala':
        return varnamalaSections;
      default:
        return [];
    }
  }

  let sections = $derived(getSectionsFor(activeCategory));
  let section = $derived(sections.find((s) => s.id === activeSection) ?? sections[0]);
</script>

<svelte:head>
  <title>सन्दर्भः · tables | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <ToolRow current="tables" />
{/snippet}

{#snippet shelfRight()}
  <span>{sections.length} table{sections.length === 1 ? '' : 's'}</span>
{/snippet}

{#snippet spine()}
  <Spine
    title="category"
    items={categories.map((c) => ({ id: c.id, label: c.titleSanskrit, sub: c.title }))}
    activeId={activeCategory}
    onpick={setCategory}
  />
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} />

<Shell {spine}>
  {#if sections.length > 1}
    <nav class="sections">
      {#each sections as s (s.id)}
        <button class:on={activeSection === s.id} onclick={() => (activeSection = s.id)}>
          {#if s.titleSanskrit}<Sanskrit text={s.titleSanskrit} />{:else}{s.title}{/if}
        </button>
      {/each}
    </nav>
  {/if}

  {#if section}
    <header class="head">
      <h1>
        {#if section.titleSanskrit}
          <Sanskrit text={section.titleSanskrit} />
        {:else}
          {section.title}
        {/if}
      </h1>
      <p>{section.description ?? section.title}</p>
    </header>

    {#if activeCategory === 'varnamala' && activeSection === 'maheshvara'}
      <MaheshvaraSutras />
    {:else if section.tables}
      <div class="tables">
        {#each section.tables as table}
          <ReferenceTable {table} />
        {/each}
      </div>
    {/if}
  {:else}
    <p class="empty">This reference section is coming soon.</p>
  {/if}
</Shell>

<style>
  .sections {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .sections button {
    font-family: var(--font-deva);
    font-size: 13px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--muted);
    padding: 4px 10px;
    cursor: pointer;
  }
  .sections button.on {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--paper);
  }

  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 27px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
    max-width: 62ch;
  }

  .tables {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .empty {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
  }
</style>
