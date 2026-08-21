<script lang="ts">
  import type { Sutra, Commentary, LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import Sanskrit from './Sanskrit.svelte';
  import CommentaryText from './CommentaryText.svelte';

  type Variant = 'compact' | 'card' | 'full';

  interface Props {
    sutra: Sutra;
    variant?: Variant;
    /** The vidvat one-line rule rewrite — the primary explanation. */
    rule?: string | null;
    commentary?: Commentary;
    layeredCommentary?: LayeredSutraCommentary;
    depth?: CommentaryDepth;
    fallbackCommentary?: string;
    onDepthChange?: (depth: CommentaryDepth) => void;
    onEdit?: () => void;
    user?: { login: string; avatar_url: string } | null;
    href?: string;
    onClick?: (id: string) => void;
  }

  let {
    sutra,
    variant = 'compact',
    rule = null,
    commentary,
    layeredCommentary,
    depth = 'standard',
    fallbackCommentary,
    onDepthChange,
    onEdit,
    user = null,
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

  // The vidvat `rule` is the primary explanation (replaces the old simple/
  // standard/advanced layered commentary). Fall back to Kāśikā/short gloss only
  // if no rule exists.
  let explanation = $derived(rule || fallbackCommentary || commentary?.kashikaEnglish || commentary?.englishShort);
  let hasCommentary = $derived(!!explanation);
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
      <span class="sutra-type type-{sutra.type}"><Sanskrit text={typeLabels[sutra.type]} /></span>
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
        <span class="sutra-type type-{sutra.type}"><Sanskrit text={typeLabels[sutra.type]} /></span>
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
        <span class="sutra-type type-{sutra.type}"><Sanskrit text={typeLabels[sutra.type]} /></span>
      {/if}
    </header>

    <div class="sutra-text-hero">
      <Sanskrit text={sutra.text} />
    </div>

    {#if sutra.expanded && sutra.expanded !== sutra.text}
      <section class="section">
        <h3 class="section-label">with <Sanskrit text="anuvṛtti" source="iast" /></h3>
        <div class="section-content">
          <Sanskrit text={sutra.expanded} />
        </div>
      </section>
    {/if}

    {#if sutra.anuvrtti.length > 0}
      <section class="section anuvrtti-section">
        <h3 class="section-label">inherits from</h3>
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
        <div class="vyakhya-head">
          <span class="section-label" style="margin: 0;"><Sanskrit text="vyākhyā" source="iast" /></span>
          {#if onEdit}
            {#if user}
              <button class="edit-btn" onclick={onEdit} title="Suggest edit">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.992.596l-2.502.834a.25.25 0 0 1-.315-.316l.834-2.501c.12-.361.32-.686.596-.993z" />
                </svg>
              </button>
            {:else}
              <a href="/auth/github?returnTo=/ref/{sutra.id}" class="edit-btn edit-btn-signin" title="Sign in to suggest edits">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.992.596l-2.502.834a.25.25 0 0 1-.315-.316l.834-2.501c.12-.361.32-.686.596-.993z" />
                </svg>
              </a>
            {/if}
          {/if}
        </div>
        <div class="commentary-content">
          <CommentaryText text={explanation} />
        </div>
      </section>
    {/if}

    {#if commentary?.kashika}
      <section class="section">
        <h3 class="section-label"><Sanskrit text="kāśikā vṛtti" source="iast" /></h3>
        <div class="section-content kashika">
          <Sanskrit text={commentary.kashika} />
        </div>
      </section>
    {/if}

    {#if commentary?.vartika && commentary.vartika.length > 0}
      <section class="section">
        <h3 class="section-label"><Sanskrit text="vārttikas" source="iast" /> · {commentary.vartika.length}</h3>
        <ol class="vartika-list">
          {#each commentary.vartika as v}
            <li><Sanskrit text={v} /></li>
          {/each}
        </ol>
      </section>
    {/if}

    {#if commentary?.englishFull}
      <details class="section expandable">
        <summary class="section-label">full translation · vasu</summary>
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
    align-items: baseline;
    gap: 0.85rem;
    padding: 0.5rem 0;
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
    transition: background 0.1s;
  }
  .sutra-compact.clickable:hover {
    background: var(--sunken);
  }

  /* Card variant */
  .sutra-card {
    display: block;
    padding: 1rem;
    background: white;
    border: 1px solid var(--rule-2);
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
    border-color: var(--rule-2);
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Full variant — no card, the artifact is the page. */
  .sutra-full {
    background: none;
    border: none;
    padding: 0;
  }
  .full-header {
    display: flex;
    align-items: baseline;
    gap: 0.85rem;
    padding: 0;
    margin-bottom: 0.5rem;
  }
  .sutra-text-hero {
    font-size: 2.4rem;
    line-height: 1.15;
    font-weight: 400;
    padding: 0;
    margin: 0.25rem 0 1.25rem;
    text-align: left;
    background: none;
  }

  /* Common elements */
  .sutra-id {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--muted);
    flex-shrink: 0;
  }
  .sutra-id-large {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--quiet);
    letter-spacing: 0.04em;
    font-weight: 400;
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
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    flex-shrink: 0;
    color: var(--quiet);
  }
  .type-samjna,
  .type-paribhasha,
  .type-vidhi,
  .type-adhikara,
  .type-atidesa {
    background: none;
    color: var(--quiet);
  }

  /* Anuvrtti — bare list, no chips */
  .anuvrtti-refs {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 0.78rem;
    color: var(--quiet);
  }
  .anuvrtti-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--quiet);
    letter-spacing: 0.04em;
  }
  .anuvrtti-ref {
    padding: 0;
    background: none;
    color: var(--muted);
  }
  .anuvrtti-more { color: var(--faint); }
  .anuvrtti-section .anuvrtti-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 0.35rem;
  }
  .anuvrtti-link {
    display: inline-flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0;
    background: none;
    text-decoration: none;
    color: var(--ink);
    font-size: 0.95rem;
    transition: color 0.15s;
  }
  .anuvrtti-link:hover { color: var(--accent); }
  .anuvrtti-link .ref-id {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--quiet);
  }

  /* Sections — hairlines, monospace eyebrows */
  .section {
    border-top: 1px solid var(--rule-2);
    padding: 1rem 0;
  }
  .section-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 400;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    color: var(--quiet);
    margin: 0 0 0.65rem 0;
  }
  .section-content {
    font-size: 1rem;
    line-height: 1.65;
    color: var(--ink);
  }
  /* Commentary section — no yellow card; just a section with the depth dots */
  .commentary-section {
    background: none;
    padding: 1rem 0;
  }
  .commentary-section .section-label { color: var(--quiet); }

  .depth-toggle {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.65rem;
  }
  .depth-toggle-right {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }
  .edit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    color: var(--faint);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.15s;
    text-decoration: none;
  }
  .edit-btn:hover { color: var(--accent); background: none; }
  .edit-btn svg { width: 0.85rem; height: 0.85rem; }
  .edit-btn-signin { color: var(--rule-2); }
  .edit-btn-signin:hover { color: var(--quiet); }

  /* Depth toggle: three filled dots of increasing size, no labels.
     The active one is saffron. Hover reveals the depth name as a title. */
  .depth-buttons {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .depth-btn {
    padding: 0;
    border: 1px solid var(--faint);
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.15s;
    /* hide the text label visually but keep it accessible */
    color: transparent;
    font-size: 0;
    overflow: hidden;
  }
  .depth-btn:nth-child(1) { width: 0.4rem;  height: 0.4rem; }
  .depth-btn:nth-child(2) { width: 0.55rem; height: 0.55rem; }
  .depth-btn:nth-child(3) { width: 0.7rem;  height: 0.7rem; }
  .depth-btn:hover { border-color: var(--ink); }
  .depth-btn.active {
    background: var(--accent);
    border-color: var(--accent);
  }

  .commentary-content {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--ink);
  }
  .kashika {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 0.95rem;
    border-left: 2px solid var(--rule-2);
    padding-left: 0.85rem;
    color: var(--muted);
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
    color: var(--quiet);
    transition: transform 0.15s;
  }
  .expandable[open] summary::after {
    transform: rotate(90deg);
  }
  .expandable .section-content {
    margin-top: 0.75rem;
  }
</style>
