<script lang="ts">
  import { onMount } from 'svelte';
  import Sanskrit from './Sanskrit.svelte';
  import type { Prakriya, PrakriyaStep } from '$lib/prakriya';

  interface Props {
    /** The prakriya (derivation) to display */
    prakriya: Prakriya;
    /** Optional: Highlight steps that apply a specific sutra */
    highlightSutra?: string;
    /** Whether to start expanded */
    expanded?: boolean;
    /** Optional CSS class */
    class?: string;
  }

  let {
    prakriya,
    highlightSutra = '',
    expanded = false,
    class: className = ''
  }: Props = $props();

  let isExpanded = $state(false);
  let selectedStep = $state<number | null>(null);

  // Sync with prop
  $effect(() => {
    isExpanded = expanded;
  });

  // Filter to show only significant steps (skip very technical internal ones)
  function isSignificantStep(step: PrakriyaStep): boolean {
    // Show all ashtadhyayi rules
    if (step.ruleSource === 'ashtadhyayi') return true;
    // Show varttikas
    if (step.ruleSource === 'varttika') return true;
    // Skip dhatupatha entries (internal)
    if (step.ruleSource === 'dhatupatha') return false;
    // Show others
    return true;
  }

  let significantSteps = $derived(
    prakriya.steps.filter(isSignificantStep)
  );

  function formatRuleCode(step: PrakriyaStep): string {
    if (step.ruleSource === 'ashtadhyayi') {
      return step.ruleCode;
    }
    if (step.ruleSource === 'varttika') {
      return `vt. ${step.ruleCode}`;
    }
    return step.rule;
  }

  function isHighlighted(step: PrakriyaStep): boolean {
    if (!highlightSutra) return false;
    return step.ruleCode === highlightSutra;
  }
</script>

<div class="derivation-viewer {className}">
  <!-- Header with final result -->
  <button
    class="derivation-header"
    onclick={() => isExpanded = !isExpanded}
    aria-expanded={isExpanded}
  >
    <div class="result-display">
      <Sanskrit text={prakriya.text} source="slp1" class="result-text" />
    </div>
    <span class="expand-icon" class:rotated={isExpanded}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  </button>

  <!-- Derivation steps -->
  {#if isExpanded}
    <div class="steps-container">
      {#each significantSteps as step, i}
        <div
          class="step"
          class:highlighted={isHighlighted(step)}
          class:selected={selectedStep === i}
          role="button"
          tabindex="0"
          onclick={() => selectedStep = selectedStep === i ? null : i}
          onkeydown={(e) => e.key === 'Enter' && (selectedStep = selectedStep === i ? null : i)}
        >
          <div class="step-content">
            <span class="step-arrow">
              {#if i === 0}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="4" fill="currentColor" opacity="0.3"/>
                </svg>
              {:else}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 2V10M6 10L3 7M6 10L9 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              {/if}
            </span>
            <span class="step-result">
              {#each step.terms as term, j}
                <span class="term" class:changed={term.wasChanged}>
                  <Sanskrit text={term.text} source="slp1" />
                </span>
                {#if j < step.terms.length - 1}
                  <span class="term-separator">+</span>
                {/if}
              {/each}
            </span>
          </div>
          <span class="step-rule" class:highlighted={isHighlighted(step)}>
            {formatRuleCode(step)}
          </span>
        </div>
      {/each}

      <!-- Final result -->
      <div class="step final-step">
        <div class="step-content">
          <span class="step-arrow final-arrow">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="step-result final-result">
            <Sanskrit text={prakriya.text} source="slp1" class="final-text" />
          </span>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .derivation-viewer {
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    overflow: hidden;
    background: #fafaf9;
  }

  .derivation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 1rem;
    background: white;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.15s;
  }

  .derivation-header:hover {
    background: #f5f5f4;
  }

  .result-display {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  :global(.result-text) {
    font-size: 1.125rem;
    font-weight: 500;
    color: #292524;
  }

  .expand-icon {
    color: #78716c;
    transition: transform 0.2s;
  }

  .expand-icon.rotated {
    transform: rotate(180deg);
  }

  .steps-container {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background 0.15s;
  }

  .step:hover {
    background: white;
  }

  .step.selected {
    background: white;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }

  .step.highlighted {
    background: #fef3c7;
    border: 1px solid #fcd34d;
  }

  .step-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .step-arrow {
    color: #a8a29e;
    flex-shrink: 0;
  }

  .final-arrow {
    color: #16a34a;
  }

  .step-result {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.9375rem;
  }

  .term {
    color: #57534e;
  }

  .term.changed {
    color: #0369a1;
    font-weight: 500;
  }

  .term-separator {
    color: #a8a29e;
    font-size: 0.75rem;
    margin: 0 0.125rem;
  }

  .step-rule {
    font-family: ui-monospace, monospace;
    font-size: 0.8125rem;
    color: #78716c;
    background: #f5f5f4;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
  }

  .step-rule.highlighted {
    background: #fcd34d;
    color: #92400e;
    font-weight: 500;
  }

  .final-step {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    cursor: default;
  }

  .final-step:hover {
    background: #f0fdf4;
  }

  .final-result {
    font-weight: 500;
  }

  :global(.final-text) {
    color: #166534;
  }
</style>
