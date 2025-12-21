<script lang="ts">
  import { onMount } from 'svelte';
  import DerivationViewer from './DerivationViewer.svelte';
  import Sanskrit from './Sanskrit.svelte';
  import {
    initPrakriya,
    isPrakriyaAvailable,
    deriveTinanta,
    deriveSubanta,
    type Prakriya,
    type Gana,
    type Lakara,
    type Prayoga,
    type Purusha,
    type Vacana,
    type Linga,
    type Vibhakti
  } from '$lib/prakriya';

  interface TinantaExample {
    type: 'tinanta';
    dhatu: string;
    gana: Gana;
    lakara: Lakara;
    prayoga?: Prayoga;
    purusha?: Purusha;
    vacana?: Vacana;
    label?: string;
  }

  interface SubantaExample {
    type: 'subanta';
    pratipadika: string;
    linga: Linga;
    vibhakti: Vibhakti;
    vacana: Vacana;
    label?: string;
  }

  type ExampleConfig = TinantaExample | SubantaExample;

  interface Props {
    /** Configuration for the example derivation */
    example: ExampleConfig;
    /** Optional: highlight a specific sutra in the derivation */
    highlightSutra?: string;
    /** Whether to show expanded by default */
    expanded?: boolean;
  }

  let { example, highlightSutra = '', expanded = false }: Props = $props();

  let isOpen = $state(false);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let prakriya = $state<Prakriya | null>(null);

  async function loadDerivation() {
    if (prakriya) {
      isOpen = !isOpen;
      return;
    }

    loading = true;
    error = null;

    try {
      const available = await initPrakriya();
      if (!available) {
        error = 'Derivation engine not available';
        loading = false;
        return;
      }

      let results: Prakriya[] = [];

      if (example.type === 'tinanta') {
        results = await deriveTinanta(
          example.dhatu,
          example.gana,
          example.lakara,
          example.prayoga || 'Kartari',
          example.purusha || 'Prathama',
          example.vacana || 'Eka'
        );
      } else if (example.type === 'subanta') {
        results = await deriveSubanta(
          example.pratipadika,
          example.linga,
          example.vibhakti,
          example.vacana
        );
      }

      if (results.length > 0) {
        prakriya = results[0];
        isOpen = true;
      } else {
        error = 'No derivation found';
      }
    } catch (e) {
      console.error('Derivation error:', e);
      error = 'Failed to load derivation';
    }

    loading = false;
  }

  function getLabel(): string {
    if (example.label) return example.label;

    if (example.type === 'tinanta') {
      return `${example.dhatu} → ?`;
    } else {
      return `${example.pratipadika} → ?`;
    }
  }

  // Auto-expand if prop is set
  $effect(() => {
    if (expanded && !prakriya && !loading) {
      loadDerivation();
    }
  });
</script>

<div class="derivation-example">
  {#if !isOpen && !prakriya}
    <button
      class="trigger-button"
      onclick={loadDerivation}
      disabled={loading}
    >
      {#if loading}
        <span class="loading-spinner"></span>
        <span>Loading derivation...</span>
      {:else}
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M8 13l-3-3M8 13l3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span>prakriyā: <Sanskrit text={example.type === 'tinanta' ? example.dhatu : example.pratipadika} source="slp1" /></span>
      {/if}
    </button>
  {:else if error}
    <div class="error-message">
      {error}
    </div>
  {:else if prakriya}
    <DerivationViewer
      {prakriya}
      {highlightSutra}
      expanded={isOpen}
    />
  {/if}
</div>

<style>
  .derivation-example {
    margin: 1rem 0;
  }

  .trigger-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(to bottom, #f5f5f4, #e7e5e4);
    border: 1px solid #d6d3d1;
    border-radius: 0.5rem;
    color: #57534e;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.15s;
  }

  .trigger-button:hover:not(:disabled) {
    background: linear-gradient(to bottom, #fafaf9, #f5f5f4);
    border-color: #a8a29e;
    color: #292524;
  }

  .trigger-button:disabled {
    opacity: 0.7;
    cursor: wait;
  }

  .icon {
    color: #78716c;
  }

  .loading-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid #d6d3d1;
    border-top-color: #78716c;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .error-message {
    padding: 0.75rem 1rem;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 0.5rem;
    color: #991b1b;
    font-size: 0.875rem;
  }
</style>
