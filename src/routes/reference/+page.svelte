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
  <title>Reference | Ashtadhyayi Explorer</title>
</svelte:head>

<div class="reference-page">
  <header class="page-header">
    <h1>
      <Sanskrit text="सन्दर्भः" />
      <span class="subtitle">Quick Reference</span>
      <sup class="draft-tag">DRAFT</sup>
    </h1>
    <p class="description">
      Quick-lookup tables for Sanskrit grammar. No explanations — just the facts.
    </p>
  </header>

  <div class="layout">
    <!-- Category sidebar -->
    <nav class="category-nav">
      {#each categories as cat}
        <button
          class="category-btn"
          class:active={activeCategory === cat.id}
          class:disabled={!cat.available}
          onclick={() => cat.available && setCategory(cat.id)}
          disabled={!cat.available}
        >
          <span class="cat-icon">{cat.icon}</span>
          <span class="cat-label">
            <Sanskrit text={cat.titleSanskrit} />
          </span>
          <span class="cat-english">{cat.title}</span>
          {#if !cat.available}
            <span class="coming-soon">soon</span>
          {/if}
        </button>
      {/each}
    </nav>

    <!-- Main content -->
    <main class="content">
      <!-- Section tabs -->
      {#if sections.length > 0}
        <div class="section-tabs">
          {#each sections as section}
            <button
              class="section-tab"
              class:active={activeSection === section.id}
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
            <div class="section-content">
              <h2 class="section-title">
                {#if section.titleSanskrit}
                  <Sanskrit text={section.titleSanskrit} />
                  <span class="section-english">{section.title}</span>
                {:else}
                  {section.title}
                {/if}
              </h2>

              {#if section.description}
                <p class="section-desc">{section.description}</p>
              {/if}

              {#if section.tables}
                <div class="tables-grid">
                  {#each section.tables as table}
                    <ReferenceTable {table} />
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      {:else}
        <div class="coming-soon-msg">
          <p>This reference section is coming soon.</p>
        </div>
      {/if}
    </main>
  </div>
</div>

<style>
  .reference-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .page-header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .page-header h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
  }

  .subtitle {
    color: #78716c;
    font-weight: 400;
    margin-left: 0.5rem;
  }

  .description {
    color: #57534e;
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0;
  }

  .layout {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .layout {
      grid-template-columns: 1fr;
    }
    .category-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .category-btn {
      flex: 1;
      min-width: 100px;
    }
  }

  /* Category navigation */
  .category-nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .category-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: none;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s;
  }

  .category-btn:hover:not(.disabled) {
    background: #f5f5f4;
  }

  .category-btn.active {
    background: #f5f5f4;
    border-color: #d6d3d1;
  }

  .category-btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .cat-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7e5e4;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #57534e;
  }

  .category-btn.active .cat-icon {
    background: #6366f1;
    color: white;
  }

  .cat-label {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .cat-english {
    font-size: 0.7rem;
    color: #a8a29e;
    margin-left: auto;
  }

  .coming-soon {
    font-size: 0.6rem;
    color: #a8a29e;
    background: #f5f5f4;
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
  }

  /* Content area */
  .content {
    min-width: 0;
  }

  .section-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.25rem;
    background: #f5f5f4;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .section-tab {
    padding: 0.4rem 0.75rem;
    background: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    color: #57534e;
    transition: all 0.15s;
  }

  .section-tab:hover {
    background: #e7e5e4;
  }

  .section-tab.active {
    background: white;
    color: #1c1917;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .section-content {
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 8px;
    padding: 1rem;
  }

  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
  }

  .section-english {
    font-weight: 400;
    color: #78716c;
    margin-left: 0.5rem;
    font-size: 1rem;
  }

  .section-desc {
    color: #57534e;
    font-size: 0.85rem;
    margin: 0 0 1rem 0;
  }

  .tables-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .coming-soon-msg {
    padding: 3rem;
    text-align: center;
    color: #78716c;
    background: #fafaf9;
    border-radius: 8px;
  }

  .draft-tag {
    font-size: 0.6rem;
    font-weight: 600;
    color: #d97706;
    background: #fef3c7;
    padding: 0.1rem 0.4rem;
    border-radius: 3px;
    vertical-align: super;
    margin-left: 0.25rem;
  }
</style>
