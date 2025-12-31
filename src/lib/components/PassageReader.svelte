<script lang="ts">
  import type { ReadingPassage, PassageVocabulary } from '$lib/data/types';
  import Sanskrit from './Sanskrit.svelte';

  interface Props {
    passage: ReadingPassage;
    showTranslation?: boolean;
    showVocabulary?: boolean;
    showGrammarNotes?: boolean;
  }

  let {
    passage,
    showTranslation = true,
    showVocabulary = true,
    showGrammarNotes = true
  }: Props = $props();

  let translationVisible = $state(false);
  let vocabExpanded = $state(false);
  let notesExpanded = $state(false);

  function toggleTranslation() {
    translationVisible = !translationVisible;
  }

  function getDifficultyLabel(d: number): string {
    const labels = ['', 'Beginner', 'Easy', 'Intermediate', 'Advanced', 'Challenging'];
    return labels[d] || '';
  }

  function getDifficultyColor(d: number): string {
    const colors = ['', '#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444'];
    return colors[d] || '#78716c';
  }
</script>

<article class="passage-reader">
  <header class="passage-header">
    {#if passage.title}
      <h3 class="passage-title">{passage.title}</h3>
    {/if}
    <div class="passage-meta">
      <span class="passage-source">{passage.source}</span>
      <span class="passage-ref">{passage.reference}</span>
      {#if passage.meterInfo}
        <span class="passage-meter">{passage.meterInfo}</span>
      {/if}
      <span class="passage-difficulty" style="color: {getDifficultyColor(passage.difficulty)}">
        {getDifficultyLabel(passage.difficulty)}
      </span>
    </div>
  </header>

  <div class="passage-text">
    <div class="sanskrit-text">
      <Sanskrit text={passage.sanskrit} />
    </div>

    {#if passage.padaccheda}
      <details class="padaccheda">
        <summary>Word-by-word</summary>
        <div class="padaccheda-text">
          <Sanskrit text={passage.padaccheda} />
        </div>
      </details>
    {/if}
  </div>

  {#if showTranslation}
    <div class="translation-section">
      <button class="toggle-btn" onclick={toggleTranslation}>
        {translationVisible ? 'Hide' : 'Show'} Translation
      </button>
      {#if translationVisible}
        <p class="translation">{passage.translation}</p>
      {/if}
    </div>
  {/if}

  {#if showVocabulary && passage.vocabulary.length > 0}
    <details class="vocab-section" bind:open={vocabExpanded}>
      <summary class="section-summary">
        Vocabulary ({passage.vocabulary.length} words)
      </summary>
      <ul class="vocab-list">
        {#each passage.vocabulary as item}
          <li class="vocab-item">
            <span class="vocab-form">
              <Sanskrit text={item.formInText} />
            </span>
            <span class="vocab-roman">{item.formRoman}</span>
            {#if item.glossHint}
              <span class="vocab-gloss">{item.glossHint}</span>
            {/if}
          </li>
        {/each}
      </ul>
    </details>
  {/if}

  {#if showGrammarNotes && passage.grammarNotes}
    <details class="notes-section" bind:open={notesExpanded}>
      <summary class="section-summary">Grammar Notes</summary>
      <div class="grammar-notes">
        {@html passage.grammarNotes.replace(/\n/g, '<br>')}
      </div>
    </details>
  {/if}
</article>

<style>
  .passage-reader {
    background: #fefefe;
    border: 1px solid #e7e5e4;
    border-radius: 8px;
    padding: 1.25rem;
    margin: 1rem 0;
  }

  .passage-header {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f5f5f4;
  }

  .passage-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1c1917;
    margin: 0 0 0.5rem 0;
  }

  .passage-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: 0.75rem;
    color: #78716c;
  }

  .passage-source {
    font-style: italic;
  }

  .passage-ref {
    font-weight: 500;
  }

  .passage-meter {
    color: #a8a29e;
  }

  .passage-difficulty {
    font-weight: 500;
  }

  .passage-text {
    margin-bottom: 1rem;
  }

  .sanskrit-text {
    font-size: 1.25rem;
    line-height: 2;
    color: #1c1917;
    padding: 0.75rem;
    background: #fafaf9;
    border-radius: 6px;
  }

  .padaccheda {
    margin-top: 0.5rem;
  }

  .padaccheda summary {
    font-size: 0.75rem;
    color: #78716c;
    cursor: pointer;
    padding: 0.25rem 0;
  }

  .padaccheda-text {
    font-size: 0.9rem;
    color: #57534e;
    padding: 0.5rem;
    background: #f5f5f4;
    border-radius: 4px;
    margin-top: 0.25rem;
  }

  .translation-section {
    margin-bottom: 1rem;
  }

  .toggle-btn {
    font-size: 0.75rem;
    color: #6366f1;
    background: none;
    border: 1px solid #c7d2fe;
    border-radius: 4px;
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    transition: all 0.15s;
  }

  .toggle-btn:hover {
    background: #eef2ff;
  }

  .translation {
    margin: 0.75rem 0 0 0;
    font-size: 0.9rem;
    color: #44403c;
    line-height: 1.6;
    padding: 0.75rem;
    background: #fffbeb;
    border-radius: 4px;
    border-left: 3px solid #fbbf24;
  }

  .section-summary {
    font-size: 0.8rem;
    font-weight: 500;
    color: #57534e;
    cursor: pointer;
    padding: 0.5rem 0;
  }

  .vocab-section, .notes-section {
    border-top: 1px solid #f5f5f4;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
  }

  .vocab-list {
    list-style: none;
    margin: 0.5rem 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .vocab-item {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.85rem;
    padding: 0.35rem 0.5rem;
    background: #f5f5f4;
    border-radius: 4px;
  }

  .vocab-form {
    font-weight: 500;
    color: #1c1917;
  }

  .vocab-roman {
    color: #78716c;
    font-size: 0.8rem;
  }

  .vocab-gloss {
    color: #57534e;
    font-style: italic;
    margin-left: auto;
  }

  .grammar-notes {
    font-size: 0.85rem;
    color: #44403c;
    line-height: 1.6;
    padding: 0.75rem;
    background: #f0fdf4;
    border-radius: 4px;
    margin-top: 0.5rem;
  }

  .grammar-notes :global(strong) {
    color: #166534;
  }
</style>
