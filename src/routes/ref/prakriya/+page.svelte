<script lang="ts">
  import { onMount } from 'svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import DerivationViewer from '$lib/components/DerivationViewer.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import ToolRow from '../ToolRow.svelte';
  import {
    initPrakriya,
    isPrakriyaAvailable,
    deriveTinanta,
    COMMON_DHATUS,
    type Prakriya,
    type Gana,
    type Lakara
  } from '$lib/prakriya';

  // Form state
  let selectedDhatu = $state('bhU');
  let selectedLakara = $state<Lakara>('Lat');

  // Results
  let prakriya = $state<Prakriya | null>(null);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let wasmReady = $state(false);
  let wasmLoading = $state(true);

  const lakaras: { value: Lakara; label: string; sanskrit: string }[] = [
    { value: 'Lat', label: 'Present', sanskrit: 'लट्' },
    { value: 'Lit', label: 'Perfect', sanskrit: 'लिट्' },
    { value: 'Lut', label: 'Periphrastic Future', sanskrit: 'लुट्' },
    { value: 'Lrt', label: 'Simple Future', sanskrit: 'लृट्' },
    { value: 'Lot', label: 'Imperative', sanskrit: 'लोट्' },
    { value: 'Lan', label: 'Imperfect', sanskrit: 'लङ्' },
    { value: 'VidhiLin', label: 'Optative', sanskrit: 'विधिलिङ्' },
    { value: 'AshirLin', label: 'Benedictive', sanskrit: 'आशीर्लिङ्' },
    { value: 'Lun', label: 'Aorist', sanskrit: 'लुङ्' },
    { value: 'Lrn', label: 'Conditional', sanskrit: 'लृङ्' },
  ];

  const dhatuList = Object.entries(COMMON_DHATUS).map(([key, info]) => ({
    key,
    ...info
  }));

  onMount(async () => {
    wasmReady = await initPrakriya();
    wasmLoading = false;
    if (wasmReady) {
      await derive();
    }
  });

  async function derive() {
    const dhatu = COMMON_DHATUS[selectedDhatu];
    if (!dhatu || !wasmReady) return;

    loading = true;
    error = null;
    prakriya = null;

    try {
      const results = await deriveTinanta(
        dhatu.aupadeshika,
        dhatu.gana,
        selectedLakara,
        'Kartari',
        'Prathama',
        'Eka'
      );

      if (results.length > 0) {
        prakriya = results[0];
      } else {
        error = 'No derivation found for this combination';
      }
    } catch (e) {
      console.error('Derivation error:', e);
      error = 'Failed to generate derivation';
    }

    loading = false;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    derive();
  }
</script>

<svelte:head>
  <title>प्रक्रिया · derivation | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <ToolRow current="prakriya" />
{/snippet}

{#snippet shelfRight()}
  {#if prakriya}<span>{prakriya.steps.length} rules applied</span>{/if}
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} />

<Shell>
  <header class="head">
    <h1><Sanskrit text="प्रक्रिया" /></h1>
    <p>Derivation of a verb form, one sūtra to a step.</p>
  </header>

  {#if wasmLoading}
    <p class="status">loading the derivation engine…</p>
  {:else if !wasmReady}
    <!-- The amber and red alert cards go; an error is one line above the
         exhibit, like every other error in the app. -->
    <p class="status">
      The derivation engine could not be loaded — it needs WebAssembly support.
    </p>
  {:else}
    <form class="controls" onsubmit={handleSubmit}>
      <label>
        <span class="label"><Sanskrit text="धातु" /> · root</span>
        <select id="dhatu" bind:value={selectedDhatu} onchange={() => derive()}>
          {#each dhatuList as dhatu}
            <option value={dhatu.key}>{dhatu.key} — {dhatu.meaning}</option>
          {/each}
        </select>
      </label>

      <label>
        <span class="label"><Sanskrit text="लकार" /> · tense</span>
        <select id="lakara" bind:value={selectedLakara} onchange={() => derive()}>
          {#each lakaras as lakara}
            <option value={lakara.value}>{lakara.label} ({lakara.sanskrit})</option>
          {/each}
        </select>
      </label>

      <span class="fixed">
        <Sanskrit text="प्रथमपुरुष" /> · <Sanskrit text="एकवचन" /> · <Sanskrit text="कर्तरि" />
      </span>
    </form>

    {#if loading}
      <p class="status">deriving…</p>
    {:else if error}
      <p class="status">{error}</p>
    {:else if prakriya}
      <DerivationViewer {prakriya} expanded={true} />
    {/if}
  {/if}
</Shell>

<style>
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

  .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 16px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 14px 0;
  }
  .controls label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .controls select {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 5px 8px;
    min-width: 14rem;
  }
  .controls select:focus {
    outline: none;
    border-color: var(--accent);
  }
  .fixed {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--quiet);
    padding-bottom: 6px;
  }

  .status {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
</style>
