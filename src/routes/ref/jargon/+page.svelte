<script lang="ts">
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import ToolRow from '../ToolRow.svelte';

  /*
    Already the right shape — it only needed the shared frame: the tool row on
    the shelf, one exhibit in the column.
  */
</script>

<svelte:head>
  <title>paribhāṣā · jargon | anuvrtti</title>
</svelte:head>

{#snippet shelfLeft()}
  <ToolRow current="jargon" />
{/snippet}

<Shelf left={shelfLeft} />

<Shell>
  <header class="head">
    <h1><Sanskrit text="paribhāṣā" source="iast" /></h1>
    <p>
      The language of grammar: the terms the Aṣṭādhyāyī uses about itself. Search by term or browse
      by category.
    </p>
  </header>

  <JargonLookup />
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
</style>
