<script lang="ts">
  /*
    The settings CONTENT, with no opinion about where it lives.

    It is shown two ways: as the /settings page (a deep link, or the long way
    round from /index) and as a modal over whatever you were reading. Keeping
    one copy means the two cannot drift, which they would immediately — the
    page is four hundred lines of options.
  */
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { displayScript, lessonLanguage, commentaryDepth } from '$lib/stores/preferences';
  import type { Script } from '$lib/transliteration';
  import type { LessonLanguage } from '$lib/stores/preferences';
  import type { CommentaryDepth } from '$lib/data/types';

  type ScriptOption = { id: Script; glyph: string; font: string; name: string; italic?: boolean };
  type GlossOption = { id: LessonLanguage; label: string; font: string; italic?: boolean };

  // Three primary scripts shown as the design specifies. The long tail is
  // accessible via the overflow row underneath.
  const primaryScripts: ScriptOption[] = [
    { id: 'devanagari', glyph: 'क',  font: "'Noto Sans Devanagari', sans-serif", name: 'devanagari' },
    { id: 'iast',       glyph: 'ka', font: "var(--font-serif)",                name: 'iast', italic: true },
    { id: 'telugu',     glyph: 'క',  font: "'Noto Sans Telugu', sans-serif",     name: 'telugu' },
  ];

  const otherScripts: ScriptOption[] = [
    { id: 'kannada',     glyph: 'ಕ',  font: "'Noto Sans Kannada', sans-serif",   name: 'kannada' },
    { id: 'malayalam',   glyph: 'ക',  font: "'Noto Sans Malayalam', sans-serif", name: 'malayalam' },
    { id: 'tamil',       glyph: 'க',  font: "'Noto Sans Tamil', sans-serif",     name: 'tamil' },
    { id: 'bengali',     glyph: 'ক',  font: "'Noto Sans Bengali', sans-serif",   name: 'bengali' },
    { id: 'gujarati',    glyph: 'ક',  font: "'Noto Sans Gujarati', sans-serif",  name: 'gujarati' },
    { id: 'gurmukhi',    glyph: 'ਕ',  font: "'Noto Sans Gurmukhi', sans-serif",  name: 'gurmukhi' },
    { id: 'odia',        glyph: 'କ',  font: "'Noto Sans Oriya', sans-serif",     name: 'odia' },
    { id: 'sinhala',     glyph: 'ක',  font: "'Noto Sans Sinhala', sans-serif",   name: 'sinhala' },
    { id: 'nandinagari', glyph: '𑦮',  font: "'Noto Sans Nandinagari', sans-serif", name: 'nandinagari' },
    { id: 'iso15919',    glyph: 'ka', font: "var(--font-serif)",              name: 'iso 15919', italic: true },
    { id: 'slp1',        glyph: 'ka', font: "var(--font-mono)",           name: 'slp1' },
    { id: 'hk',          glyph: 'ka', font: "var(--font-mono)",           name: 'harvard-kyoto' },
    { id: 'itrans',      glyph: 'ka', font: "var(--font-mono)",           name: 'itrans' },
    { id: 'velthuis',    glyph: 'ka', font: "var(--font-mono)",           name: 'velthuis' },
  ];

  const glossOptions: GlossOption[] = [
    { id: 'telugu',  label: 'తెలుగు',  font: "'Noto Sans Telugu', sans-serif" },
    { id: 'english', label: 'English', font: "var(--font-serif)", italic: true },
  ];

  // Three depths, ordered shallow → deep. The dot affordance grows in size
  // to mirror "more depth"; the label below each dot makes the position
  // explicit here on the settings page where the user first encounters it.
  const depthOptions: { id: CommentaryDepth; label: string }[] = [
    { id: 'simple',   label: 'simple'   },
    { id: 'standard', label: 'standard' },
    { id: 'advanced', label: 'advanced' },
  ];

  function pickScript(id: Script) {
    displayScript.set(id);
  }

  function pickLanguage(id: LessonLanguage) {
    lessonLanguage.set(id);
  }

  function pickDepth(id: CommentaryDepth) {
    commentaryDepth.set(id);
  }
</script>

<svelte:head>
  <title>Settings | anuvrtti</title>
</svelte:head>

<!--
  The `aa` popover holds the three or four preferences people change while
  reading; this page keeps the rest, as one plain column.
-->
  <div class="page">
  <p class="eyebrow">preferences</p>
  <h1 class="title">settings</h1>
  <p class="lede">
    Two languages share this page: the Sanskrit you are learning, and the language explaining it.
    Set how each appears.
  </p>

  <div class="section-head">
    <em class="section-name"><Sanskrit text="bhāṣā" source="iast" /></em>
    <span class="section-mono">· language</span>
  </div>

  <section class="block">
    <p class="field-label">→ sanskrit appears as</p>
    <p class="field-help">Every passage, paradigm, and <Sanskrit text="sūtra" source="iast" /> renders in this script.</p>

    <div class="script-row">
      {#each primaryScripts as s}
        <button
          class="script-card"
          class:active={$displayScript === s.id}
          onclick={() => pickScript(s.id)}
          aria-label="display sanskrit in {s.name}"
        >
          <span class="glyph" class:italic={s.italic} style="font-family: {s.font}">{s.glyph}</span>
          <span class="glyph-label">{s.name}</span>
          <span class="underline"></span>
        </button>
      {/each}
    </div>

    <details class="more-scripts">
      <summary>more scripts</summary>
      <div class="script-row script-row-overflow">
        {#each otherScripts as s}
          <button
            class="script-card small"
            class:active={$displayScript === s.id}
            onclick={() => pickScript(s.id)}
            aria-label="display sanskrit in {s.name}"
          >
            <span class="glyph small" class:italic={s.italic} style="font-family: {s.font}">{s.glyph}</span>
            <span class="glyph-label">{s.name}</span>
            <span class="underline"></span>
          </button>
        {/each}
      </div>
    </details>
  </section>

  <section class="block">
    <p class="field-label">→ explanations appear in</p>
    <p class="field-help">
      Glosses, vocabulary, and exercise prompts in Bālabodhini lessons.
      Grammar-path commentary is always English.
    </p>

    <div class="gloss-row">
      {#each glossOptions as g}
        <button
          class="gloss"
          class:active={$lessonLanguage === g.id}
          class:italic={g.italic}
          style="font-family: {g.font}"
          onclick={() => pickLanguage(g.id)}
        >{g.label}</button>
      {/each}
    </div>
  </section>

  <!-- Commentary depth: the same dot affordance used on every sūtra page,
       shown here with explicit labels so the user learns to recognize it. -->
  <div class="section-head">
    <em class="section-name"><Sanskrit text="vyākhyā" source="iast" /></em>
    <span class="section-mono">· commentary depth</span>
  </div>

  <section class="block">
    <p class="field-label">→ explanations are written at three depths</p>
    <p class="field-help">
      Each <Sanskrit text="sūtra" source="iast" /> carries simple, standard, and advanced
      explanations. Pick a default here; click the dots on any sūtra page to switch.
    </p>

    <div class="depth-row">
      {#each depthOptions as d, i}
        <button
          class="depth-card"
          class:active={$commentaryDepth === d.id}
          onclick={() => pickDepth(d.id)}
          aria-label="set commentary depth to {d.label}"
        >
          <span class="depth-dot" data-size={i}></span>
          <span class="depth-label">{d.label}</span>
        </button>
      {/each}
    </div>
  </section>
  </div>

<style>
  .page {
    display: flex;
    flex-direction: column;
  }

  .back-link {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--quiet);
    text-decoration: none;
    margin-bottom: 0.85rem;
    transition: color 0.15s;
  }
  .back-link:hover { color: var(--ink); }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--quiet);
    margin: 0;
  }
  .title {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.4rem 0 0.4rem;
  }
  .lede {
    font-size: 0.88rem;
    color: var(--quiet);
    line-height: 1.55;
    font-style: italic;
    max-width: 28rem;
    margin: 0 0 2rem;
  }

  .section-head {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
  .section-name {
    font-style: italic;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .section-mono {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--quiet);
    letter-spacing: 0.04em;
  }

  .block {
    margin-bottom: 2rem;
  }

  .field-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--muted);
    margin: 0;
  }
  .field-help {
    font-size: 0.82rem;
    color: var(--quiet);
    line-height: 1.55;
    max-width: 28rem;
    margin: 0.3rem 0 1rem;
  }

  /* Each script is a stack: big glyph, name, underline that turns saffron when active. */
  .script-row {
    display: flex;
    gap: 3rem;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  .script-row-overflow {
    margin-top: 1rem;
    gap: 1.75rem;
  }
  .script-card {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
  }
  .glyph {
    font-size: 2.2rem;
    line-height: 1;
    color: var(--faint);
    transition: color 0.15s;
  }
  .glyph.italic { font-style: italic; }
  .glyph.small { font-size: 1.5rem; }

  .script-card.active .glyph,
  .script-card:hover .glyph {
    color: var(--ink);
  }

  .glyph-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--faint);
    transition: color 0.15s;
  }
  .script-card.active .glyph-label,
  .script-card:hover .glyph-label {
    color: var(--ink);
  }
  .underline {
    height: 2px;
    width: 100%;
    background: transparent;
    transition: background 0.15s;
  }
  .script-card.active .underline {
    background: var(--accent);
  }

  .more-scripts {
    margin-top: 1.25rem;
  }
  .more-scripts summary {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--quiet);
    cursor: pointer;
    list-style: none;
  }
  .more-scripts summary::-webkit-details-marker { display: none; }
  .more-scripts summary::before { content: '+ '; color: var(--faint); }
  .more-scripts[open] summary::before { content: '− '; }
  .more-scripts summary:hover { color: var(--ink); }

  .gloss-row {
    display: flex;
    gap: 2rem;
    align-items: baseline;
  }
  .gloss {
    background: none;
    border: none;
    padding: 0 0 1px;
    cursor: pointer;
    font-size: 1.05rem;
    color: var(--faint);
    border-bottom: 2px solid transparent;
    transition: color 0.15s, border-color 0.15s;
  }
  .gloss.italic { font-style: italic; }
  .gloss:hover { color: var(--ink); }
  .gloss.active {
    color: var(--ink);
    border-bottom-color: var(--accent);
  }

  /* Depth row: three dots of increasing size with explicit labels.
     The dots are the same visual affordance used on every sūtra page;
     showing them here with labels teaches the user what to click elsewhere. */
  .depth-row {
    display: flex;
    align-items: flex-end;
    gap: 2.5rem;
  }
  .depth-card {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
  }
  .depth-dot {
    border-radius: 50%;
    border: 1px solid var(--faint);
    background: transparent;
    transition: all 0.15s;
  }
  .depth-dot[data-size="0"] { width: 0.55rem; height: 0.55rem; }
  .depth-dot[data-size="1"] { width: 0.75rem; height: 0.75rem; }
  .depth-dot[data-size="2"] { width: 0.95rem; height: 0.95rem; }

  .depth-card:hover .depth-dot {
    border-color: var(--ink);
  }
  .depth-card.active .depth-dot {
    background: var(--accent);
    border-color: var(--accent);
  }

  .depth-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--faint);
    transition: color 0.15s;
  }
  .depth-card:hover .depth-label,
  .depth-card.active .depth-label {
    color: var(--ink);
  }
</style>
