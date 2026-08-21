<script lang="ts">
  import Shell from '$lib/components/ui/Shell.svelte';

  /*
    Everything else, listed once. This is where home's six tool tiles went: the
    threshold routes you to one of four doors and links here, so nothing is
    unreachable and nothing needs a card on the front page.
  */
  const groups = [
    {
      door: 'read',
      dev: 'पठनम्',
      entries: [{ href: '/reader', label: 'reader', meta: 'the graded sequence' }]
    },
    {
      door: 'workbook',
      dev: 'अभ्यास',
      entries: [
        { href: '/workbook', label: 'workbook', meta: 'बालबोधिनी, lesson by lesson' },
        { href: '/words', label: 'words', meta: 'words you have kept' },
        { href: '/review', label: 'review', meta: 'a spaced session over it' }
      ]
    },
    {
      door: 'usage',
      dev: 'प्रयोग',
      entries: [{ href: '/usage', label: 'usage', meta: 'forms that occur in the readings' }]
    },
    {
      door: 'reference',
      dev: 'सूत्र',
      entries: [
        { href: '/ref', label: 'sūtrāṇi', meta: 'browse by adhyāya and pāda' },
        { href: '/ref?mode=path', label: 'पथः', meta: 'a syllabus over the sūtras' },
        { href: '/ref/jargon', label: 'jargon', meta: 'technical terms, defined' },
        { href: '/ref/pratyahara', label: 'pratyāhārāḥ', meta: 'the fourteen śiva-sūtras' },
        { href: '/ref/tables', label: 'tables', meta: 'paradigms and reference grids' },
        { href: '/ref/prakriya', label: 'prakriyā', meta: 'a derivation, step by step' },
        { href: '/conjugate', label: 'conjugate', meta: 'verb forms from a root' },
        { href: '/dukrnkarane', label: 'dukṛṇkaraṇe', meta: 'the sandhi rules, with their matrices' }
      ]
    },
    {
      door: null,
      dev: null,
      entries: [
        { href: '/settings', label: 'settings', meta: 'script, language, everything else' },
        { href: '/about', label: 'about', meta: 'what this project is' }
      ]
    }
  ];
</script>

<svelte:head>
  <title>index | anuvrtti</title>
</svelte:head>

<Shell>
  <header class="head">
    <h1>Index</h1>
    <p>Every page in the site.</p>
  </header>

  {#each groups as group (group.door ?? 'other')}
    <section class="group">
      <div class="group-head">
        {#if group.dev}<span class="dev">{group.dev}</span>{/if}
        <span class="label">{group.door ?? 'elsewhere'}</span>
      </div>
      {#each group.entries as entry (entry.href)}
        <a class="entry" href={entry.href}>
          <span class="name">{entry.label}</span>
          <span class="meta">{entry.meta}</span>
        </a>
      {/each}
    </section>
  {/each}
</Shell>

<style>
  .head {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 52ch;
  }
  .head h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.12;
  }
  .head p {
    margin: 0;
    font-size: 16px;
    color: var(--muted);
  }

  .group {
    display: flex;
    flex-direction: column;
  }
  .group-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
    border-bottom: 1px solid var(--rule-2);
    padding-bottom: 8px;
    margin-bottom: 4px;
  }
  .dev {
    font-family: var(--font-deva);
    font-size: 18px;
    font-weight: 600;
    color: var(--accent);
  }

  .entry {
    display: grid;
    grid-template-columns: 12rem minmax(0, 1fr);
    gap: 14px;
    align-items: baseline;
    padding: 11px 0;
    border-bottom: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
  }
  .entry:hover .name {
    color: var(--accent);
  }
  .name {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--ink);
  }
  .meta {
    font-size: 15px;
    color: var(--muted);
  }

  @media (max-width: 560px) {
    .entry {
      grid-template-columns: 1fr;
      gap: 2px;
    }
  }
</style>
