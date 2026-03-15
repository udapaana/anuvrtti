<script lang="ts">
  import type { LayeredSutraCommentary, CommentaryDepth } from '$lib/data/types';
  import { pendingEdits } from '$lib/stores/edits';

  interface Props {
    sutraId: string;
    numericId: string;
    layeredCommentary: LayeredSutraCommentary;
    depth: CommentaryDepth;
    onDone: () => void;
  }

  let { sutraId, numericId, layeredCommentary, depth, onDone }: Props = $props();

  let simpleText = $state(layeredCommentary.en.simple);
  let standardText = $state(layeredCommentary.en.standard);
  let advancedText = $state(layeredCommentary.en.advanced);
  let showAllTiers = $state(false);

  let activeTier: 'simple' | 'standard' | 'advanced' = $derived(
    depth as 'simple' | 'standard' | 'advanced'
  );

  function save() {
    const edit: { sutraId: string; numericId: string; simple?: string; standard?: string; advanced?: string } = {
      sutraId,
      numericId,
    };
    if (showAllTiers) {
      edit.simple = simpleText;
      edit.standard = standardText;
      edit.advanced = advancedText;
    } else if (activeTier === 'simple') {
      edit.simple = simpleText;
    } else if (activeTier === 'standard') {
      edit.standard = standardText;
    } else {
      edit.advanced = advancedText;
    }
    pendingEdits.upsert(edit);
    onDone();
  }

  function cancel() {
    onDone();
  }
</script>

<div class="editor">
  {#if showAllTiers || activeTier === 'simple'}
    <div class="tier">
      <label class="tier-label" for="edit-simple">Simple</label>
      <textarea id="edit-simple" class="tier-textarea" bind:value={simpleText} rows={4} spellcheck></textarea>
    </div>
  {/if}

  {#if showAllTiers || activeTier === 'standard'}
    <div class="tier">
      <label class="tier-label" for="edit-standard">Standard</label>
      <textarea id="edit-standard" class="tier-textarea" bind:value={standardText} rows={5} spellcheck></textarea>
    </div>
  {/if}

  {#if showAllTiers || activeTier === 'advanced'}
    <div class="tier">
      <label class="tier-label" for="edit-advanced">Advanced</label>
      <textarea id="edit-advanced" class="tier-textarea" bind:value={advancedText} rows={6} spellcheck></textarea>
    </div>
  {/if}

  {#if !showAllTiers}
    <button class="expand-btn" onclick={() => (showAllTiers = true)}>Edit all tiers</button>
  {/if}

  <div class="actions">
    <button class="btn-cancel" onclick={cancel}>Cancel</button>
    <button class="btn-save" onclick={save}>Save edit</button>
  </div>
</div>

<style>
  .editor {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    background: #fafaf9;
    border: 1px solid #d6d3d1;
    border-radius: 0.5rem;
  }

  .tier {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .tier-label {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #78716c;
  }

  .tier-textarea {
    font-family: inherit;
    font-size: 0.9375rem;
    line-height: 1.625;
    color: #1c1917;
    background: white;
    border: 1px solid #d6d3d1;
    border-radius: 0.375rem;
    padding: 0.5rem 0.625rem;
    width: 100%;
    resize: vertical;
    outline: none;
    transition: border-color 0.1s;
  }
  .tier-textarea:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px #eef2ff;
  }

  .expand-btn {
    align-self: flex-start;
    font-size: 0.8125rem;
    color: #6366f1;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .expand-btn:hover { color: #4338ca; }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .btn-cancel {
    font-size: 0.875rem;
    color: #78716c;
    background: none;
    border: 1px solid #e7e5e4;
    border-radius: 0.375rem;
    padding: 0.375rem 0.875rem;
    cursor: pointer;
    transition: all 0.1s;
  }
  .btn-cancel:hover { border-color: #d6d3d1; color: #44403c; }

  .btn-save {
    font-size: 0.875rem;
    color: white;
    background: #4f46e5;
    border: 1px solid transparent;
    border-radius: 0.375rem;
    padding: 0.375rem 0.875rem;
    cursor: pointer;
    transition: background 0.1s;
  }
  .btn-save:hover { background: #4338ca; }
</style>
