<script lang="ts">
  import type { Sutra, Commentary, LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import Sanskrit from './Sanskrit.svelte';
  import CommentaryText from './CommentaryText.svelte';

  type Variant = 'compact' | 'card' | 'full';

  interface Props {
    sutra: Sutra;
    variant?: Variant;
    commentary?: Commentary;
    layeredCommentary?: LayeredSutraCommentary;
    depth?: CommentaryDepth;
    href?: string;
    onClick?: (id: string) => void;
  }

  let {
    sutra,
    variant = 'compact',
    commentary,
    layeredCommentary,
    depth = 'standard',
    href,
    onClick
  }: Props = $props();

  const typeLabels: Record<string, string> = {
    samjna: 'संज्ञा',
    paribhasha: 'परिभाषा',
    vidhi: 'विधि',
    adhikara: 'अधिकार',
    atidesa: 'अतिदेश',
  };

  function handleClick() {
    if (onClick) onClick(sutra.id);
  }

  let layeredText = $derived(layeredCommentary?.en[depth]);
  let hasCommentary = $derived(layeredText || commentary?.kashikaEnglish || commentary?.englishShort);
</script>

{#if variant === 'compact'}
  <!-- Compact: ID + text + type badge, single row -->
  <svelte:element
    this={href ? 'a' : onClick ? 'button' : 'div'}
    {href}
    onclick={onClick ? handleClick : undefined}
    class="sutra-compact"
    class:clickable={href || onClick}
  >
    <span class="sutra-id">{sutra.id}</span>
    <span class="sutra-text"><Sanskrit text={sutra.text} /></span>
    {#if sutra.type !== 'other' && typeLabels[sutra.type]}
      <span class="sutra-type type-{sutra.type}">{typeLabels[sutra.type]}</span>
    {/if}
  </svelte:element>

{:else if variant === 'card'}
  <!-- Card: Compact + anuvrtti, for browse/search -->
  <svelte:element
    this={href ? 'a' : onClick ? 'button' : 'article'}
    {href}
    onclick={onClick ? handleClick : undefined}
    class="sutra-card"
    class:clickable={href || onClick}
  >
    <div class="card-header">
      <span class="sutra-id">{sutra.id}</span>
      {#if sutra.type !== 'other' && typeLabels[sutra.type]}
        <span class="sutra-type type-{sutra.type}">{typeLabels[sutra.type]}</span>
      {/if}
    </div>
    <div class="sutra-text-large"><Sanskrit text={sutra.text} /></div>
    {#if sutra.anuvrtti.length > 0}
      <div class="anuvrtti-refs">
        <span class="anuvrtti-label">from:</span>
        {#each sutra.anuvrtti.slice(0, 3) as ref}
          <span class="anuvrtti-ref"><Sanskrit text={ref.term} /></span>
        {/each}
        {#if sutra.anuvrtti.length > 3}
          <span class="anuvrtti-more">+{sutra.anuvrtti.length - 3}</span>
        {/if}
      </div>
    {/if}
  </svelte:element>

{:else}
  <!-- Full: Everything, for detail page -->
  <article class="sutra-full">
    <header class="full-header">
      <span class="sutra-id-large">{sutra.id}</span>
      {#if sutra.type !== 'other' && typeLabels[sutra.type]}
        <span class="sutra-type type-{sutra.type}">{typeLabels[sutra.type]}</span>
      {/if}
    </header>

    <div class="sutra-text-hero">
      <Sanskrit text={sutra.text} />
    </div>

    {#if sutra.expanded && sutra.expanded !== sutra.text}
      <section class="section">
        <h3 class="section-label">With Anuvrtti</h3>
        <div class="section-content">
          <Sanskrit text={sutra.expanded} />
        </div>
      </section>
    {/if}

    {#if sutra.anuvrtti.length > 0}
      <section class="section anuvrtti-section">
        <h3 class="section-label">Inherits from</h3>
        <div class="anuvrtti-list">
          {#each sutra.anuvrtti as ref}
            <a href="/ref/{ref.fromId}" class="anuvrtti-link">
              <Sanskrit text={ref.term} />
              <span class="ref-id">{ref.fromId}</span>
            </a>
          {/each}
        </div>
      </section>
    {/if}

    {#if hasCommentary}
      <section class="section commentary-section">
        <h3 class="section-label">
          {depth === 'simple' ? 'Explanation' : depth === 'standard' ? 'Explanation' : 'Advanced Explanation'}
        </h3>
        <div class="commentary-content">
          {#if layeredText}
            <CommentaryText text={layeredText} expandableRefs={depth === 'advanced'} />
          {:else if commentary?.kashikaEnglish}
            <CommentaryText text={commentary.kashikaEnglish} />
          {:else if commentary?.englishShort}
            <CommentaryText text={commentary.englishShort} />
          {/if}
        </div>
      </section>
    {/if}

    {#if depth === 'advanced' && commentary?.kashika}
      <section class="section">
        <h3 class="section-label">Kashika Vrtti</h3>
        <div class="section-content kashika">
          <Sanskrit text={commentary.kashika} />
        </div>
      </section>
    {/if}

    {#if depth === 'advanced' && commentary?.vartika && commentary.vartika.length > 0}
      <section class="section">
        <h3 class="section-label">Varttikas ({commentary.vartika.length})</h3>
        <ol class="vartika-list">
          {#each commentary.vartika as v}
            <li><Sanskrit text={v} /></li>
          {/each}
        </ol>
      </section>
    {/if}

    {#if !layeredText && commentary?.englishFull && depth === 'advanced'}
      <details class="section expandable">
        <summary class="section-label">Full Translation (Vasu)</summary>
        <div class="section-content">
          {#each commentary.englishFull.split('\n') as para}
            {#if para.trim()}
              <p><CommentaryText text={para} /></p>
            {/if}
          {/each}
        </div>
      </details>
    {/if}
  </article>
{/if}

<style>
  /* Compact variant */
  .sutra-compact {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font: inherit;
  }
  .sutra-compact.clickable {
    cursor: pointer;
  }
  .sutra-compact.clickable:hover {
    background: #f5f5f4;
  }

  /* Card variant */
  .sutra-card {
    display: block;
    padding: 1rem;
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
    font: inherit;
    width: 100%;
    text-align: left;
  }
  .sutra-card.clickable {
    cursor: pointer;
  }
  .sutra-card.clickable:hover {
    border-color: #c7d2fe;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Full variant */
  .sutra-full {
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .full-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f5f5f4;
  }
  .sutra-text-hero {
    font-size: 1.75rem;
    line-height: 1.4;
    padding: 1.5rem;
    text-align: center;
    background: linear-gradient(to bottom, #fafaf9, white);
  }

  /* Common elements */
  .sutra-id {
    font-family: ui-monospace, monospace;
    font-size: 0.8125rem;
    color: #78716c;
    flex-shrink: 0;
  }
  .sutra-id-large {
    font-family: ui-monospace, monospace;
    font-size: 0.875rem;
    color: #6366f1;
    font-weight: 500;
  }
  .sutra-text {
    flex: 1;
    min-width: 0;
  }
  .sutra-text-large {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .sutra-type {
    font-size: 0.6875rem;
    padding: 0.125rem 0.5rem;
    border-radius: 1rem;
    flex-shrink: 0;
  }
  .type-samjna { background: #dbeafe; color: #1e40af; }
  .type-paribhasha { background: #fef3c7; color: #92400e; }
  .type-vidhi { background: #d1fae5; color: #065f46; }
  .type-adhikara { background: #ede9fe; color: #5b21b6; }
  .type-atidesa { background: #fce7f3; color: #9d174d; }

  /* Anuvrtti */
  .anuvrtti-refs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #78716c;
  }
  .anuvrtti-label {
    color: #a8a29e;
  }
  .anuvrtti-ref {
    padding: 0.125rem 0.375rem;
    background: #f5f5f4;
    border-radius: 0.25rem;
  }
  .anuvrtti-more {
    color: #a8a29e;
  }
  .anuvrtti-section .anuvrtti-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .anuvrtti-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.5rem;
    background: #f5f5f4;
    border-radius: 0.375rem;
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
  }
  .anuvrtti-link:hover {
    background: #e7e5e4;
  }
  .anuvrtti-link .ref-id {
    font-size: 0.75rem;
    color: #78716c;
  }

  /* Sections */
  .section {
    border-top: 1px solid #f5f5f4;
    padding: 1rem;
  }
  .section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #78716c;
    margin: 0 0 0.75rem 0;
  }
  .section-content {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #44403c;
  }
  .commentary-section {
    background: #fefce8;
  }
  .commentary-section .section-label {
    color: #a16207;
  }
  .commentary-content {
    font-size: 0.9375rem;
    line-height: 1.7;
  }
  .kashika {
    background: #fffbeb;
    padding: 0.75rem;
    border-radius: 0.375rem;
    font-size: 0.9375rem;
  }
  .vartika-list {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.9375rem;
  }
  .vartika-list li {
    margin-bottom: 0.5rem;
  }

  /* Expandable sections */
  .expandable {
    cursor: pointer;
  }
  .expandable summary {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .expandable summary::after {
    content: '▸';
    font-size: 0.75rem;
    color: #a8a29e;
    transition: transform 0.15s;
  }
  .expandable[open] summary::after {
    transform: rotate(90deg);
  }
  .expandable .section-content {
    margin-top: 0.75rem;
  }
</style>
