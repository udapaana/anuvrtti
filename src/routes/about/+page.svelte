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
    <p>What this is, and what it is built out of.</p>
  </header>

  <section class="entry">
    <h2>अनुवृत्ति · anuvrtti</h2>
    <span class="label">what the site is</span>
    <p>
      A graded Sanskrit reader indexed to the Aṣṭādhyāyī. Readings are ordered by difficulty,
      classical and Vedic; every word carries its grammatical analysis and the sūtras that derive
      it. Five doors: <a href="/reader">read</a> is the sequence,
      <a href="/workbook">workbook</a> is the Bālabodhinī lesson by lesson,
      <a href="/usage">usage</a> is which forms the corpus actually attests,
      <a href="/ref">sūtra</a> is Pāṇini in full, and <a href="/grammar">grammar</a> is Kāle.
    </p>
    <p class="note">
      The last two used to be one door. They are different books answering different questions —
      Pāṇini states the rules that generate the language; Kāle describes how the language behaves,
      in the order a learner meets it — so they are two.
    </p>
  </section>

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
    <h2>व्याकरण · A Higher Sanskrit Grammar</h2>
    <span class="label">the grammar door</span>
    <p>
      Moreśvara Rāmacandra Kāle's <em>A Higher Sanskrit Grammar</em>, 1894 — 988 sections across
      26 chapters, from the alphabet through sandhi, declension, compounds, the feminine bases and
      the verb. Each section is a page here, cross-referenced to the sūtras it discusses: 656 of
      Kāle's citations resolve to an Aṣṭādhyāyī rule, and every sūtra page links back to the
      sections that treat it.
    </p>

    <dl>
      <dt>author</dt>
      <dd>मोरेश्वर रामचन्द्र काले · M. R. Kāle</dd>

      <dt>published</dt>
      <dd>1894</dd>

      <dt>copyright</dt>
      <dd>out of copyright — public domain</dd>

      <dt>page scans</dt>
      <dd>
        <a href="https://dukrnkarane.udapaana.in" target="_blank" rel="noopener noreferrer">
          dukrnkarane.udapaana.in
        </a>
      </dd>
    </dl>
  </section>

  <section class="entry">
    <h2>the tools underneath</h2>
    <span class="label">open-source software this depends on</span>
    <dl>
      <dt>vidyut-prakriya</dt>
      <dd>
        derives forms from a root, step by step, with the sūtra applied at each step — it is what
        <a href="/conjugate">conjugate</a> and <a href="/ref/prakriya">derivation</a> run on, and
        what the paradigm grids in <a href="/usage">usage</a> are checked against
      </dd>

      <dt>shlesha</dt>
      <dd>transliteration — every script the display toggle offers passes through it</dd>

      <dt>SvelteKit</dt>
      <dd>the application, deployed on Cloudflare Pages</dd>
    </dl>
  </section>

  <section class="entry">
    <h2>the source</h2>
    <span class="label">corrections welcome</span>
    <p>
      An open-source project. The readings, the commentary and the glossary are hand-authored and
      certainly contain errors; the code and the corpus are both on
      <a href="https://github.com/udapaana/anuvrtti" target="_blank" rel="noopener noreferrer"
        >GitHub</a
      >, and any page can be corrected from the site itself with a GitHub account.
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
