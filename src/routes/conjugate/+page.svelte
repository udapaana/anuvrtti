<script lang="ts">
  import { onMount } from 'svelte';
  import {
    initPrakriya, deriveTinanta, COMMON_DHATUS,
    type Lakara, type Gana, type Prayoga, type Purusha, type Vacana,
  } from '$lib/prakriya';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import ToolRow from '../ref/ToolRow.svelte';
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
  <title>तिङन्त · conjugate | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <ToolRow current="conjugate" />
  <!-- The controls that were an aside: on the shelf, the table gets the full
       measure — it is the widest exhibit in the app. -->
  <label class="pick">
    <span class="quiet">dhātu</span>
    <select
      value={customMode ? '__custom' : selectedDhatu.key}
      onchange={(e) => {
        const v = (e.currentTarget as HTMLSelectElement).value;
        if (v === '__custom') { customMode = true; return; }
        const d = DHATU_LIST.find((x) => x.key === v);
        if (d) pickDhatu(d);
      }}
    >
      {#each DHATU_LIST as d (d.key)}
        <option value={d.key}>√{d.label} — {d.meaning}</option>
      {/each}
      <option value="__custom">custom…</option>
    </select>
  </label>

  <label class="pick">
    <span class="quiet">lakāra</span>
    <select
      value={selectedLakara.id}
      onchange={(e) => {
        const l = LAKARA_LIST.find((x) => x.id === (e.currentTarget as HTMLSelectElement).value);
        if (l) pickLakara(l);
      }}
    >
      {#each LAKARA_LIST as l (l.id)}
        <option value={l.id}>{l.label}</option>
      {/each}
    </select>
  </label>

  <Segmented
    options={PRAYOGA_LIST.map((p) => ({ id: p.id, label: p.label }))}
    value={selectedPrayoga.id}
    onchange={(id) => {
      const p = PRAYOGA_LIST.find((x) => x.id === id);
      if (p) pickPrayoga(p);
    }}
    ariaLabel="prayoga"
  />
{/snippet}

{#snippet shelfRight()}
  <span>
    <Sanskrit text={selectedLakara.label} source="iast" /> ·
    <Sanskrit text={selectedPrayoga.label} source="iast" />
  </span>
{/snippet}

<Shelf left={shelfLeft} right={shelfRight} />

<Shell columnMax="1100px">
  {#if customMode}
    <div class="custom">
      <label>
        <span class="quiet">SLP1 root</span>
        <input bind:value={customSlp1} placeholder="e.g. BU" spellcheck="false" />
      </label>
      <label>
        <span class="quiet">IAST label</span>
        <input bind:value={customIast} placeholder="e.g. bhū" spellcheck="false" />
      </label>
      <label>
        <span class="quiet">gaṇa</span>
        <select bind:value={customGana}>
          {#each GANA_LIST as g}
            <option value={g.id}>{g.label}</option>
          {/each}
        </select>
      </label>
      <button class="derive" onclick={generate} disabled={!customSlp1.trim()}>derive →</button>
      <button class="cancel" onclick={() => (customMode = false)}>cancel</button>
    </div>
  {/if}

  <header class="head">
    <h1><Sanskrit text={headerLabel} source="iast" /></h1>
    {#if headerMeaning}<p>{headerMeaning}</p>{/if}
  </header>

  {#if !wasmReady}
    <p class="status">loading the derivation engine…</p>
  {:else if error}
    <p class="status">{error}</p>
  {:else}
    <div class="table-scroll">
      <div class="conj">
        <div class="corner"></div>
        {#each VACANA_LABELS as vl}
          <div class="col-head">
            <Sanskrit text={vl.split(' · ')[0]} source="iast" />
            <span class="sub">{vl.split(' · ')[1]}</span>
          </div>
        {/each}

        {#each PERSONS as _p, pi}
          <div class="row-head">
            <Sanskrit text={PERSON_LABELS[pi].split(' · ')[0]} source="iast" />
            <span class="sub">{PERSON_LABELS[pi].split(' · ')[1]}</span>
          </div>
          {#each VACANAS as _v, vi}
            {@const cell = table[pi][vi]}
            <div class="cell">
              {#if cell.loading}
                <span class="dots">···</span>
              {:else if cell.forms.length === 0}
                <span class="dots">—</span>
              {:else}
                {#each cell.forms as form, fi}
                  {#if fi > 0}<span class="sep">/</span>{/if}
                  <span class="form"><Sanskrit text={form} source="slp1" /></span>
                {/each}
              {/if}
            </div>
          {/each}
        {/each}
      </div>
    </div>
  {/if}
</Shell>

<style>
  .quiet {
    color: var(--faint);
  }
  .pick {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .pick select,
  .custom select,
  .custom input {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 7px;
    max-width: 15rem;
  }
  .pick select:focus,
  .custom select:focus,
  .custom input:focus {
    outline: none;
    border-color: var(--accent);
  }

  .custom {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 14px;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 14px;
  }
  .custom label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: var(--font-mono);
    font-size: 11px;
  }
  .derive,
  .cancel {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 4px 10px;
    cursor: pointer;
  }
  .derive:disabled {
    color: var(--faint);
    cursor: default;
  }
  .cancel {
    border: none;
    color: var(--quiet);
  }

  .head {
    display: flex;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;
  }
  .head h1 {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 30px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }

  .status {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }

  .table-scroll {
    overflow-x: auto;
  }
  .conj {
    display: grid;
    grid-template-columns: auto repeat(3, minmax(9rem, 1fr));
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    min-width: 100%;
    width: max-content;
  }
  .corner,
  .col-head,
  .row-head {
    background: var(--sunken);
    padding: 8px 12px;
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--muted);
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .sub {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }

  .cell {
    background: var(--paper);
    padding: 10px 12px;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 4px;
  }
  .form {
    font-family: var(--font-deva);
    font-size: 19px;
    color: var(--ink);
  }
  .sep,
  .dots {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--faint);
  }
</style>
