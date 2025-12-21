<script lang="ts">
  import Sanskrit from './Sanskrit.svelte';
  import type { Prakriya, PrakriyaStep } from '$lib/prakriya';

  interface Props {
    /** The prakriya (derivation) to display */
    prakriya: Prakriya;
    /** Optional: Highlight steps that apply a specific sutra */
    highlightSutra?: string;
    /** Whether to start expanded */
    expanded?: boolean;
    /** Show simplified view (grouped phases) vs detailed (all steps) */
    mode?: 'simple' | 'detailed';
    /** Optional CSS class */
    class?: string;
  }

  let {
    prakriya,
    highlightSutra = '',
    expanded = false,
    mode = 'simple',
    class: className = ''
  }: Props = $props();

  let isExpanded = $state(false);
  let viewMode = $state<'simple' | 'detailed'>('simple');

  // Sync with props
  $effect(() => {
    isExpanded = expanded;
    viewMode = mode;
  });

  // Categorize steps into pedagogical phases
  interface Phase {
    name: string;
    nameEn: string;
    steps: PrakriyaStep[];
    summary: string; // What changed in this phase
  }

  // Key sutras that mark phase transitions
  const PHASE_MARKERS: Record<string, string> = {
    // Lakara selection
    '3.2.123': 'lakara',  // vartamane lat
    '3.2.111': 'lakara',  // lun
    '3.2.115': 'lakara',  // lit
    '3.3.15': 'lakara',   // lrt
    '3.3.161': 'lakara',  // lot
    '3.2.110': 'lakara',  // lan
    '3.3.161': 'lakara',  // lin
    // Personal endings
    '3.4.78': 'ending',   // tiptasji...
    '3.4.79': 'ending',   // tantas...
    // Vikarana (class affixes)
    '3.1.68': 'vikarana', // kartari shap
    '3.1.77': 'vikarana', // tudadibhyah sha
    '3.1.79': 'vikarana', // tanadi kru
    '3.1.81': 'vikarana', // kryadi shnA
    // Guna/Vrddhi
    '7.3.84': 'guna',     // sArvadhAtukArdhadhAtukayoh
    '7.2.115': 'guna',    // aco niti
    // Sandhi
    '6.1.78': 'sandhi',   // eco'yavAyAvah
    '6.1.77': 'sandhi',   // iko yan aci
    '6.1.87': 'sandhi',   // Ad gunah
    '8.4.68': 'sandhi',   // final cleanup
  };

  const PHASE_INFO: Record<string, { name: string; nameEn: string }> = {
    'base': { name: 'धातु', nameEn: 'root' },
    'lakara': { name: 'लकार', nameEn: 'tense/mood' },
    'ending': { name: 'तिङ्', nameEn: 'personal ending' },
    'vikarana': { name: 'विकरण', nameEn: 'class affix' },
    'guna': { name: 'गुण/वृद्धि', nameEn: 'vowel strengthening' },
    'sandhi': { name: 'सन्धि', nameEn: 'sound combination' },
    'other': { name: 'अन्य', nameEn: 'other' },
  };

  function getPhaseForStep(step: PrakriyaStep): string {
    return PHASE_MARKERS[step.ruleCode] || 'other';
  }

  function groupStepsIntoPhases(steps: PrakriyaStep[]): Phase[] {
    const phases: Phase[] = [];
    let currentPhase: string = 'base';
    let currentSteps: PrakriyaStep[] = [];

    for (const step of steps) {
      const stepPhase = getPhaseForStep(step);

      // Start new phase if we hit a marker
      if (stepPhase !== 'other' && stepPhase !== currentPhase) {
        if (currentSteps.length > 0) {
          const info = PHASE_INFO[currentPhase];
          phases.push({
            name: info.name,
            nameEn: info.nameEn,
            steps: currentSteps,
            summary: currentSteps[currentSteps.length - 1]?.result || '',
          });
        }
        currentPhase = stepPhase;
        currentSteps = [step];
      } else {
        currentSteps.push(step);
      }
    }

    // Push final phase
    if (currentSteps.length > 0) {
      const info = PHASE_INFO[currentPhase] || PHASE_INFO['other'];
      phases.push({
        name: info.name,
        nameEn: info.nameEn,
        steps: currentSteps,
        summary: currentSteps[currentSteps.length - 1]?.result || '',
      });
    }

    return phases;
  }

  // Filter to show only significant steps
  function isSignificantStep(step: PrakriyaStep): boolean {
    if (step.ruleSource === 'ashtadhyayi') return true;
    if (step.ruleSource === 'varttika') return true;
    if (step.ruleSource === 'dhatupatha') return false;
    return true;
  }

  let significantSteps = $derived(prakriya.steps.filter(isSignificantStep));
  let phases = $derived(groupStepsIntoPhases(significantSteps));

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

  function hasHighlightedStep(phase: Phase): boolean {
    return phase.steps.some(isHighlighted);
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

  {#if isExpanded}
    <!-- View mode toggle -->
    <div class="view-toggle">
      <button
        class="toggle-btn"
        class:active={viewMode === 'simple'}
        onclick={() => viewMode = 'simple'}
      >
        Grouped
      </button>
      <button
        class="toggle-btn"
        class:active={viewMode === 'detailed'}
        onclick={() => viewMode = 'detailed'}
      >
        All steps
      </button>
    </div>

    {#if viewMode === 'simple'}
      <!-- Simplified grouped view -->
      <div class="phases-container">
        {#each phases as phase, i}
          <div class="phase" class:highlighted={hasHighlightedStep(phase)}>
            <div class="phase-header">
              <span class="phase-number">{i + 1}</span>
              <span class="phase-name">
                <Sanskrit text={phase.name} />
                <span class="phase-name-en">{phase.nameEn}</span>
              </span>
            </div>
            <div class="phase-result">
              {#each phase.steps[phase.steps.length - 1]?.terms || [] as term, j}
                <span class="term" class:changed={term.wasChanged}>
                  <Sanskrit text={term.text} source="slp1" />
                </span>
                {#if j < (phase.steps[phase.steps.length - 1]?.terms.length || 0) - 1}
                  <span class="term-separator">+</span>
                {/if}
              {/each}
            </div>
            <div class="phase-rules">
              {#each phase.steps.filter(s => isHighlighted(s) || PHASE_MARKERS[s.ruleCode]) as step}
                <a
                  href="/sutra/{step.ruleCode}"
                  class="rule-link"
                  class:highlighted={isHighlighted(step)}
                >
                  {formatRuleCode(step)}
                </a>
              {/each}
            </div>
          </div>
          {#if i < phases.length - 1}
            <div class="phase-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M8 13l-3-3M8 13l3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          {/if}
        {/each}

        <!-- Final result -->
        <div class="phase final-phase">
          <div class="phase-header">
            <span class="phase-number final-number">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="phase-name final-name">
              <Sanskrit text={prakriya.text} source="slp1" />
            </span>
          </div>
        </div>
      </div>
    {:else}
      <!-- Detailed step-by-step view -->
      <div class="steps-container">
        {#each significantSteps as step, i}
          <div
            class="step"
            class:highlighted={isHighlighted(step)}
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
            <a
              href="/sutra/{step.ruleCode}"
              class="step-rule"
              class:highlighted={isHighlighted(step)}
            >
              {formatRuleCode(step)}
            </a>
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

    <div class="step-count">
      {significantSteps.length} rules applied
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

  /* View toggle */
  .view-toggle {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem;
    border-bottom: 1px solid #e7e5e4;
    background: white;
  }

  .toggle-btn {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    border: 1px solid #d6d3d1;
    border-radius: 0.25rem;
    background: white;
    color: #78716c;
    cursor: pointer;
    transition: all 0.15s;
  }

  .toggle-btn:hover {
    background: #f5f5f4;
  }

  .toggle-btn.active {
    background: #292524;
    border-color: #292524;
    color: white;
  }

  /* Phases (simple view) */
  .phases-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .phase {
    width: 100%;
    max-width: 320px;
    padding: 0.75rem 1rem;
    background: white;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
  }

  .phase.highlighted {
    border-color: #fcd34d;
    background: #fffbeb;
  }

  .phase-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .phase-number {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f4;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 500;
    color: #78716c;
  }

  .phase-name {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .phase-name-en {
    font-weight: 400;
    color: #78716c;
    margin-left: 0.25rem;
  }

  .phase-result {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: #fafaf9;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .phase-rules {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.5rem;
    justify-content: center;
  }

  .rule-link {
    font-family: ui-monospace, monospace;
    font-size: 0.6875rem;
    color: #6366f1;
    background: #eef2ff;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    text-decoration: none;
  }

  .rule-link:hover {
    background: #e0e7ff;
  }

  .rule-link.highlighted {
    background: #fcd34d;
    color: #92400e;
    font-weight: 500;
  }

  .phase-arrow {
    color: #a8a29e;
  }

  .final-phase {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .final-number {
    background: #16a34a;
    color: white;
  }

  .final-name {
    color: #166534;
    font-size: 1.125rem;
  }

  /* Steps (detailed view) */
  .steps-container {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-height: 400px;
    overflow-y: auto;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    transition: background 0.15s;
  }

  .step:hover {
    background: white;
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
    text-decoration: none;
  }

  .step-rule:hover {
    background: #e7e5e4;
    color: #292524;
  }

  .step-rule.highlighted {
    background: #fcd34d;
    color: #92400e;
    font-weight: 500;
  }

  .final-step {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
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

  .step-count {
    text-align: center;
    padding: 0.5rem;
    font-size: 0.75rem;
    color: #a8a29e;
    border-top: 1px solid #e7e5e4;
  }
</style>
