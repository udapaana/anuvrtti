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

  learningProgress.subscribe(p => {
    hasProgress = p.completedPaths.length > 0 || Object.keys(p.pathProgress).length > 0;
    currentPathId = p.currentPath;
    pathProgress = p.pathProgress;
    completedPaths = p.completedPaths;
  });

  let resume: ResumeTarget | null = $state(null);
  let allPaths: PathMeta[] = $state([]);

  onMount(async () => {
    try {
      allPaths = await loadPathIndex();
      if (hasProgress) {
        resume = pickResumeTarget(allPaths, currentPathId, pathProgress);
      }
      rebuildLabels($displayScript);
    } catch {
      // fail soft
    }
    return displayScript.subscribe(s => rebuildLabels(s));
  });

  // The grammar category order — mirrors the design's PageGrammarList ordering
  // (foundation first, then verbs, nouns, kāraka, kṛdanta, taddhita, sandhi,
  // samāsa, then the deeper tracks).
  // Category id maps to the Sanskrit term lookup key + an English subtitle.
  const grammarCategories: { id: string; termKey: string; english: string }[] = [
    { id: 'foundation', termKey: 'adhara',    english: 'foundations' },
    { id: 'tinganta',   termKey: 'tinganta',  english: 'verbs' },
    { id: 'subanta',    termKey: 'subanta',   english: 'nouns' },
    { id: 'karaka',     termKey: 'karaka',    english: 'cases' },
    { id: 'kridanta',   termKey: 'kridanta',  english: 'participles' },
    { id: 'taddhita',   termKey: 'taddhita',  english: 'derivation' },
    { id: 'sandhi',     termKey: 'sandhi',    english: 'sandhi' },
    { id: 'samasa',     termKey: 'samasa',    english: 'compounds' },
    { id: 'prakarana',  termKey: 'prakarana', english: 'deep dives' },
    { id: 'prakriya',   termKey: 'prakriya',  english: 'derivations' },
  ];

  // Detect source script for a path's label so we transliterate correctly.
  function detectSource(s: string): Script {
    if (/[ఀ-౿]/.test(s)) return 'telugu';
    if (/[ऀ-ॿ]/.test(s)) return 'devanagari';
    return 'iast';
  }

  // Static Sanskrit strings on the page that should follow the script toggle.
  // Wrapped here so we can transliterate them in one pass.
  const sanskritTerms: Record<string, string> = {
    pathana:       'pathana',
    reading:       'reading',
    vyakarana:     'vyākaraṇa',
    grammar:       'grammar',
    reference:     'reference',
    adhara:        'ādhāraḥ',
    tinganta:      'tiṅanta',
    subanta:       'subanta',
    karaka:        'kāraka',
    kridanta:      'kṛdanta',
    taddhita:      'taddhita',
    sandhi:        'sandhi',
    samasa:        'samāsa',
    prakarana:     'prakaraṇa',
    prakriya:      'prakriyā',
    balabodhini:   'bālabodhinī',
    atha:          'atha',
    sabdanusasanam: 'śabdānuśāsanam',
    pratyahara:    'pratyāhārāḥ',
    sutrani:       'sūtrāṇi',
    shivasutras:   'śivasūtrāṇi',
    sutras:        'sūtrāṇi',
  };

  // Precomputed: path labels + static term map, both rebuilt on script change.
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

  // Extract the English half of a "Sanskrit — English" title.
  function englishOf(title: string): string {
    const m = title.match(/—\s*(.+)$/);
    return m ? m[1] : title;
  }

  // Helpers
  function isDone(id: string) { return completedPaths.includes(id); }
  function pct(p: PathMeta): number {
    const done = (pathProgress[p.id] ?? []).length;
    return p.stepCount === 0 ? 0 : done / p.stepCount;
  }

  // Grammar paths grouped by category, in the configured order.
  let grammarByCategory = $derived.by(() => {
    const result: Record<string, PathMeta[]> = {};
    for (const cat of grammarCategories) {
      const paths = allPaths
        .filter(p => p.track === 'grammar' && p.category === cat.id)
        .sort((a, b) => a.order - b.order);
      if (paths.length > 0) result[cat.id] = paths;
    }
    return result;
  });

  function balabodhiniProgress(vol: 1 | 2): { done: number; total: number; pct: number } {
    const vols = allPaths.filter(p => p.id.startsWith(`balabodhini-${vol}-`));
    const done = vols.filter(p => isDone(p.id)).length;
    return { done, total: vols.length, pct: vols.length ? done / vols.length : 0 };
  }
</script>

<svelte:head>
  <title>Anuvrtti | Learn Sanskrit through the Ashtadhyayi</title>
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
    <p class="hero-opening"><span class="san font-{$displayScript}">{term('atha')}</span> <span class="san font-{$displayScript}">{term('sabdanusasanam')}</span></p>
  </header>

  <!-- READING -->
  <section>
    <p class="eyebrow"><span class="san font-{$displayScript}">{term('pathana')}</span> · reading</p>
    <ul class="path-list">
      {#each [1, 2] as vol}
        {@const prog = balabodhiniProgress(vol as 1 | 2)}
        <li>
          <a href="/learn?vol={vol}">
            <span class="path-body">
              <span class="path-head">
                <span class="dot dot-link"></span>
                <em class="path-name font-{$displayScript}">{term('balabodhini')}</em>
                <span class="path-meta">vol {vol}</span>
              </span>
              <span class="path-sub">
                {vol === 1 ? '38 lessons · graded reader, Telugu & English' : '40 lessons · longer passages, more grammar'}
              </span>
            </span>
            <span class="path-cta cta-link">
              {#if prog.pct === 0}begin →
              {:else if prog.pct === 1}✓ done
              {:else}{Math.round(prog.pct * 100)}%{/if}
            </span>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <!-- GRAMMAR — full tree, one block per category -->
  <section>
    <p class="eyebrow"><span class="san font-{$displayScript}">{term('vyakarana')}</span> · grammar</p>
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

  <!-- REFERENCE -->
  <section>
    <p class="eyebrow">reference</p>
    <ul class="path-list">
      <li>
        <a href="/ref/pratyahara">
          <span class="path-body">
            <span class="path-head">
              <span class="dot dot-ok"></span>
              <em class="path-name font-{$displayScript}">{term('pratyahara')}</em>
            </span>
            <span class="path-sub">14 <span class="san font-{$displayScript}">{term('shivasutras')}</span> · the encoded alphabet</span>
          </span>
          <span class="path-cta cta-ok">→</span>
        </a>
      </li>
      <li>
        <a href="/ref">
          <span class="path-body">
            <span class="path-head">
              <span class="dot dot-ok"></span>
              <em class="path-name font-{$displayScript}">{term('sutrani')}</em>
            </span>
            <span class="path-sub">3,983 <span class="san font-{$displayScript}">{term('sutras')}</span> · browsable, searchable</span>
          </span>
          <span class="path-cta cta-ok">→</span>
        </a>
      </li>
    </ul>
  </section>

  <!-- TOOLS -->
  <nav class="tools">
    <a href="/review">
      <em>review</em>
      <span class="tool-meta">vocabulary</span>
    </a>
    <a href="/ref">
      <em>lookup</em>
      <span class="tool-meta">sūtrāṇi</span>
    </a>
    <a href="/words">
      <em>words</em>
      <span class="tool-meta">vocabulary</span>
    </a>
    <a href="/conjugate">
      <em>conjugate</em>
      <span class="tool-meta">verb forms</span>
    </a>
<a href="/ref/jargon">
      <em>jargon</em>
      <span class="tool-meta">terms</span>
    </a>
    <a href="/ref/pratyahara">
      <em class="font-{$displayScript}">{term('pratyahara')}</em>
      <span class="tool-meta">14</span>
    </a>
  </nav>
</article>

<style>
  /* Centered narrow column — design uses 40rem for the home. */
  .page {
    max-width: 40rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .hero {
    margin-bottom: 0.25rem;
  }
  .hero-opening {
    margin: 0;
    font-family: 'Crimson Pro', serif;
    font-style: italic;
    font-size: 1.35rem;
    line-height: 1.4;
    color: #0f1419;
    letter-spacing: 0.01em;
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

  /* Eyebrows + sections */
  section { margin: 0; }
  .eyebrow {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
    margin: 0 0 0.5rem;
  }

  /* Path list (used in reading + reference) */
  .path-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .path-list li a {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 0;
    border-top: 1px solid #e2e8f0;
    text-decoration: none;
    color: #0f1419;
    transition: background 0.1s;
  }
  .path-list li:last-child a { border-bottom: 1px solid #e2e8f0; }
  .path-list li a:hover { background: #fff7ed; }

  .path-body { display: flex; flex-direction: column; min-width: 0; }
  .path-head { display: flex; align-items: baseline; gap: 0.75rem; }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    display: inline-block;
    margin-bottom: 1px;
  }
  .dot-link  { background: #4f46e5; }
  .dot-mark  { background: #f97316; }
  .dot-ok    { background: #059669; }

  .path-name {
    font-style: italic;
    font-size: 1.05rem;
    font-weight: 500;
  }
  .path-meta {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
  }
  .path-sub {
    margin-top: 0.15rem;
    padding-left: 1.1rem;
    font-size: 0.82rem;
    color: #94a3b8;
    line-height: 1.45;
  }
  .path-cta {
    width: 4.5rem;
    text-align: right;
    align-self: center;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
  }
  .cta-link { color: #4f46e5; }
  .cta-mark { color: #f97316; }
  .cta-ok   { color: #059669; }
  .cta-mute { color: #cbd5e1; }

  /* Grammar tree — one block per category. The category head is the same row
     pattern as the path list (dot + italic name + meta + count). Sub-paths
     hang under it as a quieter list, indented to align with the name. */
  .grammar-tree { margin-top: 0.25rem; }

  .category { margin-bottom: 0.25rem; }
  .cat-head {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    padding: 0.7rem 0 0.4rem;
    border-top: 1px solid #e2e8f0;
  }
  .cat-name {
    font-style: italic;
    font-size: 1.05rem;
    font-weight: 500;
  }
  .cat-english {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #94a3b8;
    letter-spacing: 0.04em;
  }
  .cat-count {
    margin-left: auto;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #cbd5e1;
    letter-spacing: 0.04em;
  }

  .cat-paths {
    list-style: none;
    padding: 0 0 0.4rem;
    margin: 0;
  }
  .cat-paths li a {
    display: grid;
    grid-template-columns: 7rem 1fr auto;
    gap: 0.85rem;
    align-items: baseline;
    padding: 0.35rem 0 0.35rem 1.1rem;
    text-decoration: none;
    color: #0f1419;
    transition: background 0.1s;
  }
  .cat-paths li a:hover { background: #fff7ed; }
  .path-name-deva {
    font-size: 0.95rem;
    color: #0f1419;
  }
  .path-en {
    font-size: 0.85rem;
    color: #94a3b8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .path-status {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    text-align: right;
    min-width: 2.5rem;
  }

  /* Tools strip — italic name on top, monospace meta below. */
  .tools {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }
  .tools a {
    text-decoration: none;
    color: #0f1419;
    display: inline-block;
    transition: opacity 0.15s;
  }
  .tools a em {
    font-family: 'Crimson Pro', Georgia, serif;
    font-style: italic;
    font-size: 0.95rem;
    font-weight: 400;
  }
  .tools a:hover em { color: #f97316; }
  .tool-meta {
    display: block;
    margin-top: 0.1rem;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }
  .meta-due { color: #e11d48; }

  @media (max-width: 540px) {
    .path-list li a {
      grid-template-columns: 1fr auto;
      column-gap: 0.75rem;
    }
    .path-cta { font-size: 0.65rem; }
    .cat-paths li a {
      grid-template-columns: 5rem 1fr auto;
    }
    .tools {
      gap: 1.25rem 1.5rem;
    }
  }

  @media (max-width: 400px) {
    .cat-paths li a {
      grid-template-columns: 4rem 1fr auto;
      gap: 0.5rem;
      padding-left: 0.75rem;
    }
    .resume {
      gap: 1rem;
    }
    .resume-progress {
      min-width: 6rem;
    }
    .path-sub {
      padding-left: 0.75rem;
    }
  }
</style>
