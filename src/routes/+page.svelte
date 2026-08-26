<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { dataUrl } from '$lib/dataUrl';
  import Shell from '$lib/components/ui/Shell.svelte';
  import { learningProgress } from '$lib/stores/learning';
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import { SUTRA_COUNT } from '$lib/data/parser';
  import { pickResumeTarget, type ResumeTarget } from '$lib/learning/resume';
  import { displayScript } from '$lib/stores/preferences';
  import { transliterate } from '$lib/transliteration';
  import { onMount } from 'svelte';

  /*
    Home is a threshold, not a directory. Four blocks — resume, the statement,
    the four doors, one link to everything else — and no shelf, no spine.

    What left: the ten-category grammar tree, which printed forty-odd links
    here and is now Reference's पथः mode, where a path sits beside the sūtras it
    is a syllabus over; and the six tool tiles, which are one /index link.
  */
  let hasProgress = $state(false);
  let currentPathId: string | null = $state(null);
  let pathProgress: Record<string, number[]> = $state({});

  learningProgress.subscribe((p) => {
    hasProgress = p.completedPaths.length > 0 || Object.keys(p.pathProgress).length > 0;
    currentPathId = p.currentPath;
    pathProgress = p.pathProgress;
  });

  let resume: ResumeTarget | null = $state(null);
  let allPaths: PathMeta[] = $state([]);

  /*
    Live counts on the doors — they earn their place there, and each one counts
    what is BEHIND its own door. The सूत्र door used to print the distinct sūtras
    cited by the reader's word notes (187), which is a fact about the reader's
    coverage, not about /ref — the door then handed you 3983. That is /usage's
    kind of number, so it left rather than moved.

    The other three arrive from static/data/stats.json, eighty-three bytes built
    by scripts/build-stats.ts. Reading them live meant fetching readings.json,
    usage.json and balabodhini.json — 5.9 MB of corpora — to end up with three
    integers, on the first page anyone loads.
  */
  let stat = $state({ readings: 0, lessons: 0, cells: 0, sutras: SUTRA_COUNT });

  onMount(async () => {
    try {
      allPaths = await loadPathIndex();
      if (hasProgress) resume = pickResumeTarget(allPaths, currentPathId, pathProgress);
    } catch {
      // fail soft
    }
    loadStats();
    return displayScript.subscribe((s) => rebuildOpening(s));
  });

  async function loadStats() {
    try {
      const r = await fetch(dataUrl('/data/stats.json'));
      if (r.ok) Object.assign(stat, await r.json());
    } catch {
      // fail soft — count() prints an em dash for a zero, and the doors work
    }
  }

  // Only the opening still follows the script toggle; the term table that used
  // to feed the grammar tree moved to Reference with it.
  const OPENING = { atha: 'atha', sabdanusasanam: 'śabdānuśāsanam' };
  let opening = $state(OPENING);

  async function rebuildOpening(script: string) {
    if (script === 'iast') {
      opening = OPENING;
      return;
    }
    opening = {
      atha: await transliterate(OPENING.atha, 'iast', script as any),
      sabdanusasanam: await transliterate(OPENING.sabdanusasanam, 'iast', script as any)
    };
  }

  function count(n: number): string {
    return n ? n.toLocaleString('en-US') : '—';
  }

  const doors = $derived([
    {
      href: '/reader',
      dev: 'पठनम्',
      body: 'Readings in order of difficulty. Any word opens its analysis and derivation.',
      meta: `${count(stat.readings)} readings →`
    },
    {
      href: '/workbook',
      dev: 'अभ्यास',
      body: 'Bālabodhinī lesson by lesson, and the vocabulary it builds.',
      meta: `${count(stat.lessons)} lessons →`
    },
    {
      href: '/usage',
      dev: 'प्रयोग',
      body: 'Which forms occur in the readings, and where.',
      meta: `${count(stat.cells)} cells →`
    },
    {
      href: '/ref',
      dev: 'सूत्र',
      body: 'The Aṣṭādhyāyī by adhyāya and pāda, with a syllabus through it.',
      meta: `${count(stat.sutras)} sūtras →`
    }
  ]);
</script>

<svelte:head>
  <title>anuvrtti | Learn Sanskrit through the Aṣṭādhyāyī</title>
</svelte:head>

<Shell columnMax="1100px">
  {#if resume}
    <a href="/workbook/{resume.path.id}?step={resume.step}" class="resume">
      <div class="resume-what">
        <span class="label">continue</span>
        <span class="resume-title"><Sanskrit text={resume.path.title} source="devanagari" /></span>
      </div>
      <div class="resume-where">
        <div class="track"><div class="bar" style="width:{(resume.step / resume.total) * 100}%"></div></div>
        <span class="resume-step">step {resume.step + 1} / {resume.total}</span>
      </div>
    </a>
  {/if}

  <header class="statement">
    <span class="opening font-{$displayScript}">{opening.atha} {opening.sabdanusasanam}</span>
    <h1>A graded Sanskrit reader, indexed to the Aṣṭādhyāyī.</h1>
    <p>
      Readings are ordered by difficulty, classical and vedic. Each word carries its
      grammatical analysis and the sūtras that derive it.
    </p>
  </header>

  <nav class="doors">
    {#each doors as door (door.href)}
      <a class="door" href={door.href}>
        <span class="door-dev">{door.dev}</span>
        <p class="door-body">{door.body}</p>
        <span class="door-meta">{door.meta}</span>
      </a>
    {/each}
  </nav>

  <a class="everything" href="/index">
    <span class="everything-label">everything else</span>
    <span class="everything-list">
      words · review · conjugate · pratyāhārāḥ · jargon · dukṛṇkaraṇe · about →
    </span>
  </a>
</Shell>

<style>
  /* Resume */
  .resume {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    align-items: flex-end;
    border-top: 2px solid var(--accent);
    padding: 12px 0 4px;
    text-decoration: none;
    color: inherit;
  }
  .resume-what {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .resume-what .label {
    color: var(--accent);
  }
  .resume-title {
    font-family: var(--font-deva);
    font-size: 22px;
    font-weight: 500;
  }
  .resume-where {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    min-width: 180px;
  }
  .track {
    width: 100%;
    height: 2px;
    background: var(--rule);
  }
  .bar {
    height: 2px;
    background: var(--accent);
  }
  .resume-step {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }

  /* Statement */
  .statement {
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 44ch;
  }
  .opening {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .statement h1 {
    margin: 0;
    font-size: 34px;
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.01em;
  }
  .statement p {
    margin: 0;
    font-size: 16px;
    line-height: 1.55;
    color: var(--muted);
  }

  /* The four doors. One hairline grid, no cards, no radii — the counts are what
     distinguish them, not decoration. */
  .doors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--rule-2);
    border: 1px solid var(--rule-2);
  }
  .door {
    background: var(--paper);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 150px;
    text-decoration: none;
    color: inherit;
  }
  .door:hover {
    background: var(--sunken);
  }
  .door-dev {
    font-family: var(--font-deva);
    font-size: 22px;
    font-weight: 600;
    color: var(--accent);
    line-height: 1;
  }
  .door-body {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--muted);
    flex: 1;
  }
  .door-meta {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
  }

  /* Everything else */
  .everything {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
    border-top: 1px solid var(--rule);
    padding-top: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
    text-decoration: none;
  }
  .everything-label {
    color: var(--quiet);
  }
  .everything-list {
    color: var(--accent);
  }

  @media (max-width: 900px) {
    .doors {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 560px) {
    .doors {
      grid-template-columns: 1fr;
    }
    .statement h1 {
      font-size: 28px;
    }
  }
</style>
