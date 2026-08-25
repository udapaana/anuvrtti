<script lang="ts">
  import { onMount } from 'svelte';
  import { dataUrl } from '$lib/dataUrl';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import SystemCard from '$lib/components/SystemCard.svelte';
  import ToolRow from '../ToolRow.svelte';
  import { SYSTEMS, systemForTerm } from '$lib/systems';
  import { lookupTerm } from '$lib/jargon';

  /*
    The grammar mapped as systems. Each system is drawn once, in full; a cell is
    lit when the graded reader actually teaches it (some reading carries the tag)
    and dim when it is only defined. Tapping a cell opens its concept note, and
    the note's own terms are clickable in turn — the bird's-eye of the same map
    the reader shows one cell at a time.
  */

  // Which tags the corpus attests — the cells the material actually teaches.
  let metTerms = $state<Set<string>>(new Set());
  onMount(async () => {
    try {
      const data = await (await fetch(dataUrl('/data/readings.json'))).json();
      const s = new Set<string>();
      for (const r of data.sequence ?? [])
        for (const w of r.words ?? [])
          for (const n of w.notes ?? []) if (n.term) s.add(n.term);
      metTerms = s;
    } catch {
      metTerms = new Set();
    }
  });

  let openTerm = $state<string | null>(null);
  const termInfo = $derived(openTerm ? lookupTerm(openTerm) : null);

  // How much of each system the reader teaches — the progress line per card.
  function taught(sysId: string): { met: number; total: number } {
    const sys = SYSTEMS.find((x) => x.id === sysId)!;
    let met = 0,
      total = 0;
    for (const g of sys.groups)
      for (const it of g.items) {
        total++;
        if (metTerms.has(it.t)) met++;
      }
    return { met, total };
  }
</script>

<svelte:head>
  <title>systems · the grammar mapped | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <ToolRow current="systems" />
{/snippet}

<Shelf left={shelfLeft} />

<Shell>
  <header class="head">
    <h1>systems</h1>
    <p>
      The grammar as a handful of shapes. Each cell is a real tag: lit where the
      reader teaches it, dim where it is only defined. Tap any cell for its note.
    </p>
  </header>

  {#if openTerm}
    <div class="concept">
      {#if termInfo}
        <div class="concept-head">
          <Sanskrit text={termInfo.term} source="devanagari" />
          <span class="concept-rom">{termInfo.termRoman}</span>
          {#if systemForTerm(termInfo.term)}
            <span class="concept-sys">· {systemForTerm(termInfo.term)!.scope}</span>
          {/if}
          <button class="concept-x" onclick={() => (openTerm = null)} aria-label="close">×</button>
        </div>
        <div class="concept-body">
          <InlineMarkup text={termInfo.meaning} autoLink onpick={(t) => (openTerm = t)} />
        </div>
        {#if termInfo.sutraRef}
          <a class="concept-ref" href={`/ref/${termInfo.sutraRef}`}>सूत्र {termInfo.sutraRef} →</a>
        {/if}
      {:else}
        <div class="concept-body concept-empty">
          No glossary note yet for <Sanskrit text={openTerm} source="devanagari" />.
        </div>
      {/if}
    </div>
  {/if}

  <div class="grid">
    {#each SYSTEMS as sys (sys.id)}
      {@const t = taught(sys.id)}
      <section class="sys">
        <div class="sys-count">{t.met}/{t.total} taught</div>
        <SystemCard system={sys} {metTerms} activeTerm={openTerm} onpick={(x) => (openTerm = x)} />
      </section>
    {/each}
  </div>
</Shell>

<style>
  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
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

  .concept {
    margin: 14px 0;
    padding: 12px 14px;
    border: 1px solid var(--rule-2);
    border-left: 2px solid var(--accent-ref);
    border-radius: var(--radius);
  }
  .concept-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-family: var(--font-deva);
    font-size: 16px;
    color: var(--ink);
    margin-bottom: 5px;
  }
  .concept-rom {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
  .concept-sys {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
  .concept-x {
    margin-left: auto;
    cursor: pointer;
    border: none;
    background: none;
    color: var(--muted);
    font-size: 18px;
    line-height: 1;
  }
  .concept-body {
    font-size: 14px;
    line-height: 1.6;
    color: var(--ink);
  }
  .concept-empty {
    color: var(--muted);
  }
  .concept-ref {
    display: inline-block;
    margin-top: 6px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    text-decoration: none;
  }
  .concept-ref:hover {
    text-decoration: underline;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;
    margin-top: 16px;
  }
  .sys {
    position: relative;
  }
  .sys-count {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
    margin-bottom: 2px;
  }
</style>
