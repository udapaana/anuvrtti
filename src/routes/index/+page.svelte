<script lang="ts">
  import Shell from '$lib/components/ui/Shell.svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript } from '$lib/stores/preferences';

  /*
    Everything else, listed once. This is where home's six tool tiles went: the
    threshold routes you to one of four doors and links here, so nothing is
    unreachable and nothing needs a card on the front page.

    ONE SCRIPT AT A TIME. The list used to read sūtrāṇi · पथः · jargon ·
    pratyāhārāḥ · व्याकरण down a single column — three scripts in six lines,
    because each label had been typed in whatever script whoever added it was
    thinking in. A Sanskrit name is now authored once, in Devanagari, and
    rendered through Sanskrit so it follows the display toggle like every other
    Sanskrit string in the app: set Telugu and the column is Telugu throughout.

    `sa` is the Sanskrit name; `label` is the English one. Tools that have no
    Sanskrit name — settings, about, tables — carry only the English, which is
    not mixing scripts but naming a thing that has one name.
  */
  const groups: {
    door: string | null;
    dev: string | null;
    entries: { href: string; sa?: string; label: string; meta: string; metaSa?: string }[];
  }[] = [
    {
      door: 'read',
      dev: 'पठनम्',
      entries: [{ href: '/reader', sa: 'पठनम्', label: 'reader', meta: 'the graded sequence' }]
    },
    {
      door: 'workbook',
      dev: 'अभ्यास',
      entries: [
        { href: '/workbook', sa: 'बालबोधिनी', label: 'workbook', meta: 'lesson by lesson' },
        { href: '/words', label: 'words', meta: 'your review deck — words kept from lessons and readings' },
        { href: '/review', label: 'review', meta: 'a spaced session over it' }
      ]
    },
    {
      door: 'usage',
      dev: 'प्रयोग',
      entries: [{ href: '/usage', sa: 'प्रयोगः', label: 'usage', meta: 'forms that occur in the readings' }]
    },
    {
      door: 'sūtra',
      dev: 'सूत्र',
      entries: [
        { href: '/ref', sa: 'सूत्राणि', label: 'sūtras', meta: 'browse by adhyāya and pāda' },
        { href: '/ref?mode=path', sa: 'पथः', label: 'paths', meta: 'a syllabus over the sūtras' },
        { href: '/ref/pratyahara', sa: 'प्रत्याहाराः', label: 'pratyāhāras', meta: 'the fourteen śiva-sūtras' },
        { href: '/ref/prakriya', sa: 'प्रक्रिया', label: 'derivation', meta: 'a derivation, step by step' },
        { href: '/ref/jargon', label: 'jargon', meta: 'technical terms, defined' },
        { href: '/ref/tables', label: 'tables', meta: 'paradigms and reference grids' },
        { href: '/conjugate', label: 'conjugate', meta: 'verb forms from a root' }
      ]
    },
    {
      door: 'grammar',
      dev: 'व्याकरण',
      entries: [
        { href: '/grammar', sa: 'व्याकरणम्', label: 'grammar', meta: "Kāle's grammar, rule by rule" }
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
        {#if group.dev}<span class="dev font-{$displayScript}"
            ><Sanskrit text={group.dev} source="devanagari" /></span
          >{/if}
        <span class="label">{group.door ?? 'elsewhere'}</span>
      </div>
      {#each group.entries as entry (entry.href)}
        <a class="entry" href={entry.href}>
          <span class="name">
            {#if entry.sa}<span class="sa font-{$displayScript}"
                ><Sanskrit text={entry.sa} source="devanagari" /></span
              >{/if}<span class="en">{entry.label}</span>
          </span>
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
    /* family comes from the font-<script> class the toggle sets */
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
  /* The Sanskrit name leads and the English follows it, quieter — so the
     column scans as one script with a gloss, not as two competing names. */
  .name {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--ink);
  }
  .name .sa {
    font-size: 15px;
    color: var(--ink);
  }
  /* an entry with a Sanskrit name shows the English as the secondary token;
     one without keeps the English at full strength, since it is the name */
  .name .sa + .en {
    font-size: 12px;
    color: var(--quiet);
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
