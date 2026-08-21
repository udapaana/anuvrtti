<script lang="ts">
  import JargonLookup from '$lib/components/JargonLookup.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
</script>

<svelte:head>
  <title>Jargon | anuvrtti</title>
</svelte:head>

<article class="page">
  <a href="/" class="back-link">← home</a>

  <header class="head">
    <p class="eyebrow"><Sanskrit text="paribhāṣā" source="iast" /> · the language of grammar</p>
    <h1 class="title">jargon</h1>
    <p class="lede">
      Sanskrit grammatical terms used throughout the Aṣṭādhyāyī. Search by term or browse by category.
    </p>
  </header>

  <div class="jargon-container">
    <JargonLookup />
  </div>
</article>

<style>
  .page {
    max-width: 46rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .back-link {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.15s;
  }
  .back-link:hover { color: #0f1419; }

  .head {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 0.5rem;
  }
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
    margin: 0.35rem 0 0.4rem;
  }
  .lede {
    color: #475569;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
    max-width: 32rem;
  }

  .jargon-container {
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
  }
</style>
