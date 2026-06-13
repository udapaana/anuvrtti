<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import GradedReading from '$lib/components/GradedReading.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { notesFor } from '$lib/readings';

  let chapters = $state<any[]>([]);
  let sequence = $state<any[]>([]);
  let view = $state<'reader' | 'reference'>('reader');
  let loaded = $state(false);
  let selected = $state<string | null>(null);
  let activeReading = $state<string | null>(null);

  onMount(async () => {
    const res = await fetch('/data/readings.json');
    const data = await res.json();
    chapters = data.chapters;
    sequence = data.sequence ?? [];
    loaded = true;
    if (sequence[0]) activeReading = sequence[0].id;
  });

  const all = $derived(chapters.flatMap((c) => c.readings));
  const current = $derived(all.find((r) => r.id === activeReading) ?? null);
  const paneNotes = $derived(current ? notesFor(current) : []);

  function selectFromBody(noteId: string | null) {
    selected = noteId;
    if (!noteId) return;
    const rid = noteId.split('-w')[0].split('-vy')[0];
    activeReading = rid;
    requestAnimationFrame(() =>
      document.getElementById('note-' + noteId)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    );
  }
  function selectFromPane(noteId: string) {
    selected = selected === noteId ? null : noteId;
    if (selected) document.getElementById('m-' + selected)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  function track(id: string) {
    activeReading = id;
  }
</script>

<svelte:head><title>पठनम् · graded reader</title></svelte:head>

<div class="layout">
  <!-- LEFT: nav -->
  <nav class="nav">
    {#if view === 'reader'}
      {#each sequence as r}
        <a class="navitem" class:on={activeReading === r.id} href={'#body-' + r.id} onclick={() => track(r.id)}>
          <Sanskrit text={r.sentence} source="devanagari" />
        </a>
      {/each}
    {:else}
      {#each chapters as ch}
        <div class="navchap">
          <div class="navtitle"><Sanskrit text={ch.title.split(' — ')[0]} source="devanagari" /></div>
          {#each ch.readings as r}
            <a class="navitem" class:on={activeReading === r.id} href={'#body-' + r.id} onclick={() => track(r.id)}>
              <Sanskrit text={r.sentence} source="devanagari" />
            </a>
          {/each}
        </div>
      {/each}
    {/if}
  </nav>

  <!-- CENTER: body -->
  <main class="body">
    <header class="head">
      <h1><Sanskrit text="संस्कृतपठनम्" source="devanagari" /></h1>
      <p class="sub">Sanskrit, learned by reading — every word grounded in the Aṣṭādhyāyī.</p>
      <div class="views">
        <button class:on={view === 'reader'} onclick={() => (view = 'reader')}>reader · by difficulty</button>
        <button class:on={view === 'reference'} onclick={() => (view = 'reference')}>reference · by topic</button>
      </div>
    </header>

    {#if !loaded}
      <p class="loading">loading…</p>
    {:else if view === 'reader'}
      {#each sequence as r}
        <div onmouseenter={() => track(r.id)}>
          <GradedReading reading={r} {selected} onselect={selectFromBody} />
        </div>
      {/each}
    {:else}
      {#each chapters as ch}
        <section>
          <h2 class="ctitle"><Sanskrit text={ch.title} source="devanagari" /></h2>
          {#each ch.readings as r}
            <div onmouseenter={() => track(r.id)}>
              <GradedReading reading={r} {selected} onselect={selectFromBody} />
            </div>
          {/each}
        </section>
      {/each}
    {/if}
  </main>

  <!-- RIGHT: synced notes pane -->
  <aside class="pane">
    <div class="panehead">notes{#if current} · <Sanskrit text={current.sentence} source="devanagari" />{/if}</div>
    {#if current}
      {#if current.teaches}<p class="teaches">{current.teaches}</p>{/if}
      {#each paneNotes as n}
        <button
          class="note"
          class:sel={selected === n.id}
          class:cite={n.kind === 'cite'}
          class:vy={n.kind === 'vyakhya'}
          id={'note-' + n.id}
          onclick={() => selectFromPane(n.id)}
        >
          {#if n.kind === 'term'}
            <span class="nlabel"><Sanskrit text={n.label} source="devanagari" /></span><span class="nen">{n.en}</span>
          {:else if n.kind === 'cite'}
            <span class="nlabel mono">{n.label}</span><span class="nrole">{n.role}</span>
            <span class="open" role="button" tabindex="0"
              onclick={(e) => { e.stopPropagation(); goto('/ref/' + n.label); }}
              onkeydown={(e) => { if (e.key === 'Enter') goto('/ref/' + n.label); }}>↗</span>
          {:else}
            <span class="nen vyen">{n.en}</span>
          {/if}
        </button>
      {/each}
    {/if}
  </aside>
</div>

<style>
  .layout {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr) 340px;
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
  }
  .nav {
    border-right: 1px solid #e7e2d9;
    padding: 1.5rem 1rem;
    position: sticky;
    top: 0;
    align-self: start;
    max-height: 100vh;
    overflow-y: auto;
    font-size: 0.85rem;
  }
  .navchap { margin-top: 1.2rem; }
  .navtitle { font-weight: 700; margin-bottom: 0.4rem; }
  .navitem {
    display: block;
    color: #6b6b6b;
    text-decoration: none;
    padding: 0.2rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .navitem.on { color: var(--color-accent); font-weight: 600; }
  .navitem:hover { color: #0f1419; }

  .body { padding: 1.5rem 2rem; min-width: 0; }
  .head { margin-bottom: 1.5rem; }
  h1 { margin: 0; font-size: 1.7rem; }
  .sub { margin: 0.3rem 0 0; color: #6b6b6b; font-size: 0.9rem; }
  .views { margin-top: 0.8rem; display: flex; gap: 0.5rem; }
  .views button {
    font: inherit;
    font-size: 0.82rem;
    padding: 0.25rem 0.7rem;
    border: 1px solid #e7e2d9;
    border-radius: 999px;
    background: none;
    color: #6b6b6b;
    cursor: pointer;
  }
  .views button.on { background: var(--color-accent); color: #fff; border-color: var(--color-accent); }
  .ctitle { font-size: 1.35rem; color: var(--color-accent); margin: 1.5rem 0 1.2rem; padding-bottom: 0.35rem; border-bottom: 1px solid #e7e2d9; }
  .loading { color: #6b6b6b; }

  .pane {
    border-left: 1px solid #e7e2d9;
    padding: 1.5rem 1.1rem;
    position: sticky;
    top: 0;
    align-self: start;
    max-height: 100vh;
    overflow-y: auto;
  }
  .panehead { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #6b6b6b; margin-bottom: 0.8rem; }
  .teaches { font-size: 0.85rem; color: #6b6b6b; font-style: italic; margin: 0 0 1rem; }
  .note {
    display: block; width: 100%; text-align: left;
    background: none; border: none; border-radius: 4px;
    padding: 0.4rem 0.5rem; margin-bottom: 0.2rem;
    cursor: pointer; font: inherit; line-height: 1.4;
  }
  .note:hover { background: #faf7f0; }
  .note.sel { background: #fde7c8; }
  .nlabel { font-weight: 600; color: #1a4a6e; margin-right: 0.5rem; }
  .note.cite .nlabel { color: var(--color-accent); }
  .mono { font-family: var(--font-mono); font-size: 0.85em; }
  .nen { color: #0f1419; font-size: 0.9rem; }
  .nrole { color: #6b6b6b; font-size: 0.82rem; }
  .vyen { font-style: italic; color: #3a3a3a; }
  .note.vy { border-left: 2px solid var(--color-accent); }
  .open { color: var(--color-accent); margin-left: 0.4rem; cursor: pointer; }

  @media (max-width: 900px) {
    .layout { grid-template-columns: 1fr; }
    .nav, .pane { position: static; max-height: none; border: none; border-top: 1px solid #e7e2d9; }
  }
</style>
