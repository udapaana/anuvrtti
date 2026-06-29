<script lang="ts">
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { learningProgress } from '$lib/stores/learning';
  import { loadPathIndex, type PathMeta } from '$lib/content';
  import { pickResumeTarget, type ResumeTarget } from '$lib/learning/resume';
  import { displayScript } from '$lib/stores/preferences';
  import { transliterate, type Script } from '$lib/transliteration';
  import { onMount } from 'svelte';

  let hasProgress = $state(false);
  let currentPathId: string | null = $state(null);
  let pathProgress: Record<string, number[]> = $state({});
  let completedPaths: string[] = $state([]);

  learningProgress.subscribe((p) => {
    hasProgress = p.completedPaths.length > 0 || Object.keys(p.pathProgress).length > 0;
    currentPathId = p.currentPath;
    pathProgress = p.pathProgress;
    completedPaths = p.completedPaths;
  });

  let resume: ResumeTarget | null = $state(null);
  let allPaths: PathMeta[] = $state([]);

  // Live counts for the pillar cards, pulled from the real corpora.
  let stat = $state({ readings: 0, lessons: 0, sutras: 0 });

  onMount(async () => {
    try {
      allPaths = await loadPathIndex();
      if (hasProgress) resume = pickResumeTarget(allPaths, currentPathId, pathProgress);
      rebuildLabels($displayScript);
    } catch {
      // fail soft
    }
    loadStats();
    return displayScript.subscribe((s) => rebuildLabels(s));
  });

  async function loadStats() {
    try {
      const r = await fetch('/data/readings.json', { cache: 'no-store' });
      if (r.ok) {
        const d = await r.json();
        const cites = new Set<string>();
        (d.sequence ?? []).forEach((rd: any) =>
          (rd.words ?? []).forEach((w: any) => (w.notes ?? []).forEach((n: any) => n.cite && cites.add(n.cite)))
        );
        stat.readings = (d.sequence ?? []).length;
        stat.sutras = cites.size;
      }
    } catch {}
    try {
      const r = await fetch('/data/balabodhini.json', { cache: 'no-store' });
      if (r.ok) {
        const b = await r.json();
        stat.lessons = (b.parts ?? []).reduce((a: number, p: any) => a + p.lessons.length, 0);
      }
    } catch {}
  }

  // The grammar category order (foundation → verbs → nouns → … → derivations).
  const grammarCategories: { id: string; termKey: string; english: string }[] = [
    { id: 'foundation', termKey: 'adhara', english: 'foundations' },
    { id: 'tinganta', termKey: 'tinganta', english: 'verbs' },
    { id: 'subanta', termKey: 'subanta', english: 'nouns' },
    { id: 'karaka', termKey: 'karaka', english: 'cases' },
    { id: 'kridanta', termKey: 'kridanta', english: 'participles' },
    { id: 'taddhita', termKey: 'taddhita', english: 'derivation' },
    { id: 'sandhi', termKey: 'sandhi', english: 'sandhi' },
    { id: 'samasa', termKey: 'samasa', english: 'compounds' },
    { id: 'prakarana', termKey: 'prakarana', english: 'deep dives' },
    { id: 'prakriya', termKey: 'prakriya', english: 'derivations' }
  ];

  function detectSource(s: string): Script {
    if (/[ఀ-౿]/.test(s)) return 'telugu';
    if (/[ऀ-ॿ]/.test(s)) return 'devanagari';
    return 'iast';
  }

  // Static Sanskrit strings that follow the script toggle.
  const sanskritTerms: Record<string, string> = {
    vyakarana: 'vyākaraṇa',
    adhara: 'ādhāraḥ',
    tinganta: 'tiṅanta',
    subanta: 'subanta',
    karaka: 'kāraka',
    kridanta: 'kṛdanta',
    taddhita: 'taddhita',
    sandhi: 'sandhi',
    samasa: 'samāsa',
    prakarana: 'prakaraṇa',
    prakriya: 'prakriyā',
    atha: 'atha',
    sabdanusasanam: 'śabdānuśāsanam'
  };

  let labels: Map<string, string> = $state(new Map());
  let terms: Map<string, string> = $state(new Map());

  async function rebuildLabels(script: Script) {
    const m = new Map<string, string>();
    for (const p of allPaths) {
      const src = detectSource(p.label);
      m.set(p.id, script === src ? p.label : await transliterate(p.label, src, script));
    }
    labels = m;

    const t = new Map<string, string>();
    for (const [key, iast] of Object.entries(sanskritTerms)) {
      t.set(key, script === 'iast' ? iast : await transliterate(iast, 'iast', script));
    }
    terms = t;
  }

  function label(id: string, fallback: string) {
    return labels.get(id) || fallback;
  }
  function term(key: string): string {
    return terms.get(key) ?? sanskritTerms[key] ?? key;
  }
  function englishOf(title: string): string {
    const m = title.match(/—\s*(.+)$/);
    return m ? m[1] : title;
  }
  function isDone(id: string) {
    return completedPaths.includes(id);
  }
  function pct(p: PathMeta): number {
    const done = (pathProgress[p.id] ?? []).length;
    return p.stepCount === 0 ? 0 : done / p.stepCount;
  }

  let grammarByCategory = $derived.by(() => {
    const result: Record<string, PathMeta[]> = {};
    for (const cat of grammarCategories) {
      const paths = allPaths
        .filter((p) => p.track === 'grammar' && p.category === cat.id)
        .sort((a, b) => a.order - b.order);
      if (paths.length > 0) result[cat.id] = paths;
    }
    return result;
  });
</script>

<svelte:head>
  <title>anuvrtti | Learn Sanskrit through the Aṣṭādhyāyī</title>
</svelte:head>

<article class="page">
  {#if resume}
    <a href="/learn/{resume.path.id}?step={resume.step}" class="resume">
      <div>
        <p class="resume-label">continue</p>
        <h2 class="resume-title"><Sanskrit text={resume.path.title} source="devanagari" /></h2>
      </div>
      <div class="resume-progress">
        <div class="bar"><div class="fill" style="width: {(resume.step / resume.total) * 100}%"></div></div>
        <p class="resume-step">step {resume.step + 1} / {resume.total}</p>
      </div>
    </a>
  {/if}

  <header class="hero">
    <p class="hero-opening">
      <span class="san font-{$displayScript}">{term('atha')}</span>
      <span class="san font-{$displayScript}">{term('sabdanusasanam')}</span>
    </p>
    <h3 class="hero-title">A graded reader and a grammar, bridged — for both the classical and the vedic dialects.</h3>
    <p class="hero-sub">
      The poets and logicians of old started their study of grammar already knowing a vedic corpus by heart. These tools try to close that gap.
    </p>
  </header>

  <!-- THE THREE PILLARS -->
  <section class="pillars">
    <a class="pillar" href="/reader">
      <div class="pillar-dev">पठनम्</div>
      <div class="pillar-kicker">the graded reader</div>
      <p class="pillar-body">
        A built sequence where the same word returns in new roles — कारक to विभक्ति felt, not
        memorised. Each word opens its full derivation.
      </p>
      <div class="pillar-foot">
        <span class="pillar-num">{stat.readings || '—'}</span>
        <span class="pillar-meta">graded readings →</span>
      </div>
    </a>

    <a class="pillar" href="/balabodhini">
      <div class="pillar-dev">बालबोधिनी</div>
      <div class="pillar-kicker">the classical primer</div>
      <p class="pillar-body">
        Kāśī Kṛṣṇa's graded course teaching Sanskrit through Telugu — vocabulary, paradigms, reading
        and exercises, lesson by lesson.
      </p>
      <div class="pillar-foot">
        <span class="pillar-num">{stat.lessons || '—'}</span>
        <span class="pillar-meta">lessons · 2 volumes →</span>
      </div>
    </a>

    <a class="pillar" href="/ref">
      <div class="pillar-dev">सूत्र</div>
      <div class="pillar-kicker">the reference</div>
      <p class="pillar-body">
        The Aṣṭādhyāyī as it lives in this corpus: every sūtra invoked, grouped by adhyāya, with the
        roles it plays and the readings that use it.
      </p>
      <div class="pillar-foot">
        <span class="pillar-num">{stat.sutras || '—'}</span>
        <span class="pillar-meta">sūtras in play →</span>
      </div>
    </a>
  </section>

  <!-- PRACTICE & LESSONS — the guided /learn paths, demoted below the pillars -->
  <section class="grammar">
    <p class="eyebrow"><span class="san font-{$displayScript}">{term('vyakarana')}</span> · guided lessons</p>
    <div class="grammar-tree">
      {#each grammarCategories as cat}
        {@const paths = grammarByCategory[cat.id] ?? []}
        {#if paths.length > 0}
          <div class="category">
            <div class="cat-head">
              <span class="dot dot-mark"></span>
              <em class="cat-name font-{$displayScript}">{term(cat.termKey)}</em>
              <span class="cat-count">{paths.length}</span>
            </div>
            <ul class="cat-paths">
              {#each paths as p}
                {@const done = isDone(p.id)}
                {@const percent = pct(p)}
                <li>
                  <a href="/learn/{p.id}">
                    <span class="path-name-deva font-{$displayScript}">{label(p.id, p.label)}</span>
                    <span class="path-en">{englishOf(p.title)}</span>
                    <span class="path-status">
                      {#if done}<span class="cta-ok">✓</span>
                      {:else if percent > 0}<span class="cta-mark">{Math.round(percent * 100)}%</span>
                      {:else}<span class="cta-mute">→</span>{/if}
                    </span>
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      {/each}
    </div>
  </section>

  <!-- TOOLS — single row, no duplicates with the pillars above -->
  <nav class="tools">
    <a href="/words"><em>words</em><span class="tool-meta">vocabulary</span></a>
    <a href="/review"><em>review</em><span class="tool-meta">spaced recall</span></a>
    <a href="/conjugate"><em>conjugate</em><span class="tool-meta">verb forms</span></a>
    <a href="/ref/pratyahara"><em>pratyāhārāḥ</em><span class="tool-meta">14</span></a>
    <a href="/ref/jargon"><em>jargon</em><span class="tool-meta">terms</span></a>
    <a href="/about"><em>about</em><span class="tool-meta">the project</span></a>
  </nav>
</article>

<style>
  .page {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Resume row */
  .resume {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: end;
    border-top: 2px solid #f97316;
    padding: 0.75rem 0 0.5rem;
    text-decoration: none;
    color: inherit;
  }
  .resume-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #f97316;
    margin: 0 0 0.3rem;
  }
  .resume-title { margin: 0; font-weight: 500; font-size: 1.2rem; }
  .resume-progress { text-align: right; min-width: 9rem; }
  .bar { height: 2px; background: #e2e8f0; position: relative; }
  .fill { position: absolute; inset: 0 auto 0 0; background: #f97316; }
  .resume-step {
    margin: 0.35rem 0 0;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
  }

  /* Hero */
  .hero { max-width: 46rem; }
  .hero-opening {
    margin: 0 0 1.2rem;
    font-family: ui-monospace, monospace;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #c2a878;
  }
  .hero-title {
    margin: 0;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.01em;
    color: #0f1419;
    max-width: 18ch;
  }
  .hero-sub {
    font-size: 1.2rem;
    color: #5c5345;
    line-height: 1.55;
    margin: 1.2rem 0 0;
    max-width: 46ch;
  }
  .hero-sub em { font-style: italic; color: #0f1419; }

  /* Pillars */
  .pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
  .pillar {
    display: flex;
    flex-direction: column;
    background: #fffdf9;
    border: 1px solid #ebe1cf;
    border-radius: 16px;
    padding: 1.4rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }
  .pillar:hover { border-color: #f97316; }
  .pillar-dev { font-size: 1.7rem; color: #f97316; font-weight: 600; line-height: 1; }
  .pillar-kicker {
    font-family: ui-monospace, monospace;
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #bcb29d;
    margin-top: 0.45rem;
  }
  .pillar-body { font-size: 1rem; color: #5c5345; line-height: 1.55; margin: 0.85rem 0 1.1rem; flex: 1; }
  .pillar-foot {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    border-top: 1px solid #f0e9da;
    padding-top: 0.8rem;
  }
  .pillar-num { font-size: 1.5rem; color: #0f1419; font-weight: 600; }
  .pillar-meta { font-size: 0.85rem; color: #6b6b6b; }

  /* Guided lessons (demoted grammar tree) */
  .eyebrow {
    font-size: 0.95rem;
    color: #6b6b6b;
    margin: 0 0 1.1rem;
  }
  .eyebrow .san { color: #0f1419; }
  .grammar-tree {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1.5rem 2rem;
  }
  .category { break-inside: avoid; }
  .cat-head {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid #ece3d3;
  }
  .dot-mark { width: 5px; height: 5px; border-radius: 50%; background: #dcb36a; display: inline-block; }
  .cat-name { font-style: normal; font-size: 1.05rem; color: #92591f; }
  .cat-count { font-family: ui-monospace, monospace; font-size: 0.7rem; color: #bcb29d; margin-left: auto; }
  .cat-paths { list-style: none; margin: 0; padding: 0; }
  .cat-paths a {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.3rem 0.2rem;
    text-decoration: none;
    color: inherit;
    border-radius: 6px;
  }
  .cat-paths a:hover { background: #faf7f0; }
  .path-name-deva { font-size: 0.97rem; color: #0f1419; }
  .path-en { font-size: 0.85rem; color: #94a3b8; }
  .path-status { font-family: ui-monospace, monospace; font-size: 0.75rem; }
  .cta-ok { color: #f97316; }
  .cta-mark { color: #92591f; }
  .cta-mute { color: #cbbfa9; }

  /* Tools */
  .tools {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
    gap: 0.75rem;
    border-top: 1px solid #ece3d3;
    padding-top: 1.5rem;
  }
  .tools a {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    padding: 0.6rem 0.8rem;
    border: 1px solid #ebe1cf;
    border-radius: 11px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s;
  }
  .tools a:hover { border-color: #f97316; }
  .tools em { font-style: normal; font-weight: 600; font-size: 0.95rem; color: #0f1419; }
  .tool-meta { font-family: ui-monospace, monospace; font-size: 0.66rem; color: #94a3b8; }

  @media (max-width: 820px) {
    .pillars { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.1rem; }
  }
</style>
