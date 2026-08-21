<script lang="ts">
  import { onMount } from 'svelte';
  import {
    initPrakriya, deriveTinanta, COMMON_DHATUS,
    type Lakara, type Gana, type Prayoga, type Purusha, type Vacana,
  } from '$lib/prakriya';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript } from '$lib/stores/preferences';

  // ── Selection state ──────────────────────────────────────────────

  // Preset dhātus drawn from COMMON_DHATUS
  const DHATU_LIST = Object.entries(COMMON_DHATUS).map(([key, v]) => ({
    key,
    aupadeshika: v.aupadeshika,
    gana: v.gana as Gana,
    meaning: v.meaning,
    // Render label — map key to readable IAST
    label: keyToIast(key),
  }));

  function keyToIast(k: string): string {
    const map: Record<string, string> = {
      bhU: 'bhū', gam: 'gam', kR: 'kṛ', paTh: 'pāṭh', likh: 'likh',
      dRz: 'dṛś', zru: 'śru', vad: 'vad', pac: 'pac', nI: 'nī',
    };
    return map[k] ?? k;
  }

  const LAKARA_LIST: { id: Lakara; label: string; iast: string }[] = [
    { id: 'Lat',      label: 'laṭ',       iast: 'laṭ — present'          },
    { id: 'Lot',      label: 'loṭ',       iast: 'loṭ — imperative'       },
    { id: 'Lan',      label: 'laṅ',       iast: 'laṅ — imperfect'        },
    { id: 'VidhiLin', label: 'vidhiliṅ',  iast: 'vidhiliṅ — optative'   },
    { id: 'Lrt',      label: 'lṛṭ',       iast: 'lṛṭ — future'           },
    { id: 'Lut',      label: 'luṭ',       iast: 'luṭ — periphrastic fut.' },
    { id: 'Lit',      label: 'liṭ',       iast: 'liṭ — perfect'          },
    { id: 'Lun',      label: 'luṅ',       iast: 'luṅ — aorist'           },
    { id: 'AshirLin', label: 'āśīrliṅ',   iast: 'āśīrliṅ — benedictive' },
    { id: 'Lrn',      label: 'lṛṅ',       iast: 'lṛṅ — conditional'     },
  ];

  const PRAYOGA_LIST: { id: Prayoga; label: string }[] = [
    { id: 'Kartari', label: 'kartari' },
    { id: 'Karmani', label: 'karmaṇi' },
  ];

  const GANA_LIST: { id: Gana; label: string }[] = [
    { id: 'Bhvadi',    label: '1 · bhvādi'   },
    { id: 'Adadi',     label: '2 · adādi'    },
    { id: 'Juhotyadi', label: '3 · juhotyādi'},
    { id: 'Divadi',    label: '4 · divādi'   },
    { id: 'Svadi',     label: '5 · svādi'    },
    { id: 'Tudadi',    label: '6 · tudādi'   },
    { id: 'Rudhadi',   label: '7 · rudhādi'  },
    { id: 'Tanadi',    label: '8 · tanādi'   },
    { id: 'Kryadi',    label: '9 · kryādi'   },
    { id: 'Curadi',    label: '10 · curādi'  },
  ];

  // ── Current picks ──────────────────────────────────────────────

  let selectedDhatu = $state(DHATU_LIST[0]);
  let selectedLakara = $state(LAKARA_LIST[0]);
  let selectedPrayoga = $state(PRAYOGA_LIST[0]);

  // Custom root mode
  let customMode = $state(false);
  let customSlp1 = $state('');
  let customGana = $state<Gana>('Bhvadi');
  let customIast = $state('');

  // ── WASM / results ──────────────────────────────────────────────

  const PERSONS: Purusha[] = ['Prathama', 'Madhyama', 'Uttama'];
  const VACANAS: Vacana[]   = ['Eka', 'Dvi', 'Bahu'];
  const PERSON_LABELS = ['3rd · prathamā', '2nd · madhyamā', '1st · uttamā'];
  const VACANA_LABELS = ['eka · singular', 'dvi · dual', 'bahu · plural'];

  type Cell = { forms: string[]; loading: boolean };
  type TableRow = [Cell, Cell, Cell];

  let table = $state<TableRow[]>([
    [{ forms: [], loading: false }, { forms: [], loading: false }, { forms: [], loading: false }],
    [{ forms: [], loading: false }, { forms: [], loading: false }, { forms: [], loading: false }],
    [{ forms: [], loading: false }, { forms: [], loading: false }, { forms: [], loading: false }],
  ]);

  let wasmReady = $state(false);
  let computing = $state(false);
  let error = $state('');

  onMount(async () => {
    wasmReady = await initPrakriya();
    if (wasmReady) generate();
  });

  async function generate() {
    if (!wasmReady) return;
    error = '';
    computing = true;

    const aupadeshika = customMode ? customSlp1.trim() : selectedDhatu.aupadeshika;
    const gana        = customMode ? customGana        : selectedDhatu.gana;
    const lakara      = selectedLakara.id;
    const prayoga     = selectedPrayoga.id;

    if (!aupadeshika) { computing = false; return; }

    // Reset to loading state
    table = PERSONS.map(() =>
      VACANAS.map(() => ({ forms: [], loading: true })) as TableRow
    ) as TableRow[];

    try {
      // Fire all 9 derivations in parallel
      const promises = PERSONS.flatMap((p, pi) =>
        VACANAS.map((v, vi) =>
          deriveTinanta(aupadeshika, gana, lakara, prayoga, p, v).then(prakriyas => {
            table[pi][vi] = {
              forms: prakriyas.map(pr => pr.text),
              loading: false,
            };
            // trigger reactivity
            table = [...table] as TableRow[];
          })
        )
      );
      await Promise.all(promises);
    } catch (e) {
      error = 'Derivation failed. Check the root and gana.';
    }
    computing = false;
  }

  function pickDhatu(d: typeof DHATU_LIST[0]) {
    selectedDhatu = d;
    customMode = false;
    generate();
  }

  function pickLakara(l: typeof LAKARA_LIST[0]) {
    selectedLakara = l;
    generate();
  }

  function pickPrayoga(p: typeof PRAYOGA_LIST[0]) {
    selectedPrayoga = p;
    generate();
  }

  // Active dhātu label for header
  let headerLabel = $derived(
    customMode
      ? (customIast || customSlp1 || '—')
      : `√${selectedDhatu.label}`
  );
  let headerMeaning = $derived(
    customMode ? '' : selectedDhatu.meaning
  );
</script>

<svelte:head>
  <title>Conjugate | anuvrtti</title>
</svelte:head>

<article class="page">
  <a href="/" class="back-link">← home</a>
  <p class="eyebrow">tiṅanta · verb forms</p>
  <h1 class="title">conjugate</h1>

  <div class="conjugator">
    <!-- LEFT: controls -->
    <aside class="controls">

      <!-- Dhātu picker -->
      <section class="control-block">
        <p class="control-label">dhātu</p>
        <ul class="dhatu-list">
          {#each DHATU_LIST as d (d.key)}
            <li>
              <button
                class="dhatu-btn"
                class:active={!customMode && selectedDhatu.key === d.key}
                onclick={() => pickDhatu(d)}
              >
                <span class="dhatu-root font-{$displayScript}">
                  <Sanskrit text={`√${d.label}`} source="iast" />
                </span>
                <span class="dhatu-meaning">{d.meaning}</span>
              </button>
            </li>
          {/each}
          <li>
            <button
              class="dhatu-btn custom-toggle"
              class:active={customMode}
              onclick={() => { customMode = true; }}
            >
              <span class="dhatu-root">custom…</span>
            </button>
          </li>
        </ul>

        {#if customMode}
          <div class="custom-fields">
            <div class="custom-row">
              <label class="custom-lbl">SLP1 root</label>
              <input class="custom-input" bind:value={customSlp1} placeholder="e.g. BU" spellcheck="false" />
            </div>
            <div class="custom-row">
              <label class="custom-lbl">IAST label</label>
              <input class="custom-input" bind:value={customIast} placeholder="e.g. bhū" spellcheck="false" />
            </div>
            <div class="custom-row">
              <label class="custom-lbl">gaṇa</label>
              <select class="custom-select" bind:value={customGana}>
                {#each GANA_LIST as g}
                  <option value={g.id}>{g.label}</option>
                {/each}
              </select>
            </div>
            <button class="derive-btn" onclick={generate} disabled={!customSlp1.trim()}>derive →</button>
          </div>
        {/if}
      </section>

      <!-- Lakāra picker -->
      <section class="control-block">
        <p class="control-label">lakāra</p>
        <ul class="lakara-list">
          {#each LAKARA_LIST as l (l.id)}
            <li>
              <button
                class="lakara-btn"
                class:active={selectedLakara.id === l.id}
                onclick={() => pickLakara(l)}
              >
                <span class="lakara-iast font-{$displayScript}">
                  <Sanskrit text={l.label} source="iast" />
                </span>
                <span class="lakara-desc">{l.iast.split('—')[1]?.trim() ?? ''}</span>
              </button>
            </li>
          {/each}
        </ul>
      </section>

      <!-- Prayoga picker -->
      <section class="control-block">
        <p class="control-label">prayoga</p>
        <div class="prayoga-row">
          {#each PRAYOGA_LIST as p (p.id)}
            <button
              class="prayoga-btn"
              class:active={selectedPrayoga.id === p.id}
              onclick={() => pickPrayoga(p)}
            >
              <Sanskrit text={p.label} source="iast" />
            </button>
          {/each}
        </div>
      </section>

    </aside>

    <!-- RIGHT: table -->
    <div class="table-area">
      <div class="table-header">
        <h2 class="table-root font-{$displayScript}">
          <Sanskrit text={headerLabel} source="iast" />
        </h2>
        {#if headerMeaning}
          <span class="table-meaning">{headerMeaning}</span>
        {/if}
        <span class="table-lakara">
          <Sanskrit text={selectedLakara.label} source="iast" />
          · <Sanskrit text={selectedPrayoga.label} source="iast" />
        </span>
      </div>

      {#if !wasmReady}
        <p class="status">loading derivation engine…</p>
      {:else if error}
        <p class="status error">{error}</p>
      {:else}
        <div class="conj-table">
          <!-- Column headers -->
          <div class="conj-head">
            <div class="corner"></div>
            {#each VACANA_LABELS as vl}
              <div class="col-head">
                <Sanskrit text={vl.split(' · ')[0]} source="iast" />
                <span class="head-sub">{vl.split(' · ')[1]}</span>
              </div>
            {/each}
          </div>

          <!-- Rows -->
          {#each PERSONS as _p, pi}
            <div class="conj-row">
              <div class="row-head">
                <Sanskrit text={PERSON_LABELS[pi].split(' · ')[0]} source="iast" />
                <span class="head-sub">{PERSON_LABELS[pi].split(' · ')[1]}</span>
              </div>
              {#each VACANAS as _v, vi}
                {@const cell = table[pi][vi]}
                <div class="conj-cell" class:loading={cell.loading}>
                  {#if cell.loading}
                    <span class="cell-dots">···</span>
                  {:else if cell.forms.length === 0}
                    <span class="cell-empty">—</span>
                  {:else}
                    {#each cell.forms as form, fi}
                      {#if fi > 0}<span class="form-sep"> / </span>{/if}
                      <span class="cell-form font-{$displayScript}">
                        <Sanskrit text={form} source="slp1" />
                      </span>
                    {/each}
                  {/if}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</article>

<style>
  .page {
    max-width: 60rem;
    margin: 0 auto;
  }

  .back-link {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    margin-bottom: 0.85rem;
    transition: color 0.15s;
  }
  .back-link:hover { color: #0f1419; }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0;
  }
  .title {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.4rem 0 1.5rem;
  }

  /* Two-column layout: controls left, table right */
  .conjugator {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 680px) {
    .conjugator {
      grid-template-columns: 14rem 1fr;
      gap: 3rem;
    }
  }

  /* ── Controls ── */
  .controls {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .control-block {}

  .control-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    color: #94a3b8;
    text-transform: lowercase;
    margin: 0 0 0.5rem;
  }

  .dhatu-list,
  .lakara-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .dhatu-btn,
  .lakara-btn {
    background: none;
    border: none;
    padding: 0.25rem 0;
    cursor: pointer;
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    width: 100%;
    text-align: left;
    border-left: 2px solid transparent;
    padding-left: 0.5rem;
    transition: border-color 0.12s, color 0.12s;
  }

  .dhatu-btn:hover .dhatu-root,
  .dhatu-btn:hover .dhatu-meaning,
  .lakara-btn:hover .lakara-iast,
  .lakara-btn:hover .lakara-desc {
    color: #0f1419;
  }

  .dhatu-btn.active,
  .lakara-btn.active {
    border-left-color: #f97316;
  }

  .dhatu-root {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1rem;
    color: #0f1419;
    min-width: 2.5rem;
    transition: color 0.12s;
  }
  .dhatu-meaning {
    font-size: 0.75rem;
    color: #94a3b8;
    transition: color 0.12s;
  }

  .lakara-iast {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #0f1419;
    min-width: 4.5rem;
    transition: color 0.12s;
  }
  .lakara-desc {
    font-size: 0.72rem;
    color: #94a3b8;
    transition: color 0.12s;
  }

  .custom-toggle .dhatu-root {
    font-family: var(--font-mono);
    font-style: normal;
    font-size: 0.75rem;
    color: #94a3b8;
  }

  .custom-fields {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 0.75rem;
    padding-left: 0.5rem;
    border-left: 2px solid #f97316;
  }

  .custom-row {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .custom-lbl {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }

  .custom-input,
  .custom-select {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.2rem 0;
    background: transparent;
    color: #0f1419;
    outline: none;
    transition: border-color 0.15s;
  }
  .custom-input:focus,
  .custom-select:focus { border-bottom-color: #f97316; }

  .derive-btn {
    margin-top: 0.25rem;
    background: none;
    border: none;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #f97316;
    cursor: pointer;
    padding: 0;
    text-align: left;
    transition: color 0.15s;
  }
  .derive-btn:hover { color: #0f1419; }
  .derive-btn:disabled { color: #cbd5e1; cursor: default; }

  .prayoga-row {
    display: flex;
    gap: 1.25rem;
  }

  .prayoga-btn {
    background: none;
    border: none;
    padding: 0 0 2px;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #94a3b8;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: color 0.12s, border-color 0.12s;
  }
  .prayoga-btn:hover { color: #0f1419; }
  .prayoga-btn.active {
    color: #0f1419;
    border-bottom-color: #f97316;
  }

  /* ── Table ── */
  .table-area {
    min-width: 0;
  }

  .table-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  .table-root {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    font-size: 1.75rem;
    margin: 0;
    color: #0f1419;
  }

  .table-meaning {
    font-size: 0.85rem;
    color: #94a3b8;
    font-style: italic;
  }

  .table-lakara {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin-left: auto;
  }

  .status {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
  }
  .status.error { color: #e11d48; }

  .conj-table {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #0f1419;
  }

  .conj-head,
  .conj-row {
    display: grid;
    grid-template-columns: 6rem 1fr 1fr 1fr;
    border-bottom: 1px solid #e2e8f0;
  }

  .corner { }

  .col-head,
  .row-head {
    padding: 0.5rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .col-head {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.9rem;
    color: #0f1419;
    border-left: 1px solid #e2e8f0;
    font-weight: 500;
  }

  .row-head {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 0.03em;
    color: #94a3b8;
    align-self: center;
  }

  .head-sub {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.03em;
    color: #cbd5e1;
    font-style: normal;
  }

  .conj-cell {
    padding: 0.65rem 0.75rem;
    border-left: 1px solid #e2e8f0;
    font-size: 1.15rem;
    line-height: 1.4;
    min-height: 2.8rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.1rem;
    transition: background 0.15s;
  }

  .conj-cell.loading {
    background: #fafafa;
  }

  .cell-dots {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #cbd5e1;
    letter-spacing: 0.2em;
  }

  .cell-empty {
    color: #e2e8f0;
    font-size: 0.85rem;
  }

  .cell-form {
    color: #0f1419;
  }

  .form-sep {
    font-size: 0.75rem;
    color: #cbd5e1;
  }
</style>
