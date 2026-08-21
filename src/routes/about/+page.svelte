<script lang="ts">
  import Shell from '$lib/components/ui/Shell.svelte';

  /*
    Three rounded-lg Tailwind sections become one prose column at a reading
    measure. There is nothing here to browse or filter — it is a page you read
    top to bottom — so it has no shelf, no spine, and no cards.
  */
</script>

<svelte:head>
  <title>about | anuvrtti</title>
</svelte:head>

<Shell measure>
  <header class="head">
    <h1>about</h1>
    <p>Sources, attributions, and acknowledgements.</p>
  </header>

  <section class="entry">
    <h2>బాలబోధిని · Bālabodhini</h2>
    <span class="label">primary source for the reading track</span>
    <p>
      A digitisation of the first volume of the Telugu-medium Sanskrit primer
      <em>బాలబోధిని — ప్రథమ భాగము</em> (<em>Bālabodhini, Part One</em>) by Kāśī Kṛṣṇācārya.
    </p>

    <dl>
      <dt>author</dt>
      <dd>కాశీ కృష్ణాచార్య · Kāśī Kṛṣṇācārya</dd>

      <dt>published</dt>
      <dd>1956</dd>

      <dt>language</dt>
      <dd>Telugu, with Sanskrit in Telugu script</dd>

      <dt>pages</dt>
      <dd>124</dd>

      <dt>copyright</dt>
      <dd>out of copyright — public domain</dd>

      <dt>digitised by</dt>
      <dd>Digital Library of India · IIIT Hyderabad</dd>

      <dt>source</dt>
      <dd>
        <a
          href="https://archive.org/details/in.ernet.dli.2015.371072"
          target="_blank"
          rel="noopener noreferrer"
        >
          archive.org/details/in.ernet.dli.2015.371072
        </a>
      </dd>
    </dl>

    <p class="note">
      The structured lesson data on this site — vocabulary, reading sentences, exercises and
      paradigms — was extracted from the digitised scan. English translations and glosses were
      added editorially, to support learners without Telugu.
    </p>
  </section>

  <section class="entry">
    <h2>अष्टाध्यायी · Aṣṭādhyāyī</h2>
    <span class="label">grammar reference and commentary</span>
    <p>
      The sūtra text and commentary are drawn from Śrīśa Chandra Vasu's 1891 translation of
      Pāṇini's Aṣṭādhyāyī, via
      <a href="https://ashtadhyayi.com" target="_blank" rel="noopener noreferrer">ashtadhyayi.com</a>.
      The layered commentary is an original editorial work.
    </p>
  </section>

  <section class="entry">
    <h2>अनुवृत्ति · anuvrtti</h2>
    <span class="label">this site</span>
    <p>
      An open-source Sanskrit learning tool. The source is on
      <a href="https://github.com/udapaana/anuvrtti" target="_blank" rel="noopener noreferrer"
        >GitHub</a
      >.
    </p>
  </section>
</Shell>

<style>
  .head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .head h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }
  .head p {
    margin: 0;
    font-size: 16px;
    color: var(--muted);
    font-style: italic;
  }

  .entry {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid var(--rule);
    padding-top: 20px;
  }
  .entry h2 {
    margin: 0;
    font-size: 19px;
    font-weight: 600;
  }
  .entry p {
    margin: 0;
    font-size: 16px;
    line-height: 1.65;
    color: var(--ink-2);
  }
  .entry a {
    color: var(--accent-ref);
  }

  dl {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 6px 20px;
    margin: 4px 0;
    font-size: 15px;
  }
  dt {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
    padding-top: 3px;
  }
  dd {
    margin: 0;
    color: var(--ink-2);
  }

  .note {
    border-top: 1px solid var(--rule);
    padding-top: 12px;
    font-size: 14px !important;
    color: var(--muted) !important;
  }
</style>
