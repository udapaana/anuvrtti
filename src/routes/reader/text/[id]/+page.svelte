<script lang="ts">
  /*
    A whole text in the reader — the first is the Pañcatantra's monkey and the
    wedge. The words come from a build, not from authored readings: vidyut
    segments and analyses every token, Monier-Williams glosses its lemma, and
    an author's overrides settle what the engine could not
    (scripts/build-texts.ts, docs/ARCHITECTURE.md "Whole texts").

    Same frame as the graded reader — shelf, spine, the framed rail that is a
    bottom sheet on the phone — and the same rail head: the word, its meaning,
    its tags, then the evidence (the tag's note, the dictionary, the author's
    note, the paradigm). What it does not have is the reader's drill: a text is
    read through, not quizzed card by card.
  */
  import { onMount } from 'svelte';
  import { page as appPage } from '$app/stores';
  import { dataUrl } from '$lib/dataUrl';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import SheetButton from '$lib/components/ui/SheetButton.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Chip from '$lib/components/ui/Chip.svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import { lookupTerm } from '$lib/jargon';
  import { isNarrow } from '$lib/stores/viewport';
  import { transliterate } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';

  type Pada = {
    form: string; lemma: string; a: string; terms: string[]; member?: boolean;
    gloss: string | null; glossBy: 'author' | 'mw' | null;
    mw: { key: string; url: string; lex: string; senses: string[] } | null;
    note?: string; source: 'vidyut' | 'pick' | 'author' | 'none'; alts: number;
    para?: { key: string; row: number; col: number };
  };
  type Word = { surface: string; padas: Pada[]; note?: string };
  type Section = { id: string; kind: string; lines: number[][]; words: Word[]; text: string[] };
  type Table = { stem: string; lakara: string | null; kind: string; colHeads: string[]; rowHeads: string[]; rows: string[][] };
  type Text = {
    id: string; title: string; title_en: string; work: string; place?: string;
    source: Record<string, string>; credit: string; sections: Section[]; paradigms: Record<string, Table>;
  };

  const id = $derived($appPage.params.id ?? '');
  let text = $state<Text | null>(null);
  let others = $state<{ id: string; title: string; title_en: string }[]>([]);
  let error = $state('');

  const PADACCHEDA_KEY = 'anuvrtti:text-padaccheda';
  const progressKey = (tid: string) => `anuvrtti:text-progress:${tid}`;
  /* saṃhitā by default: a whole text is read as written */
  let padaccheda = $state(false);
  let sel = $state<{ s: number; w: number; p: number } | null>(null);
  let openTerm = $state<string | null>(null);
  let paraOpen = $state(true);
  let railDetent = $state(0);
  let spineOpen = $state(false);
  let current = $state(0);
  const narrow = $derived($isNarrow);

  onMount(async () => {
    try { padaccheda = localStorage.getItem(PADACCHEDA_KEY) === '1'; } catch { /* session only */ }
    try {
      const [t, idx] = await Promise.all([
        fetch(dataUrl(`/data/texts/${id}.json`)).then((r) => { if (!r.ok) throw new Error(`no text “${id}”`); return r.json(); }),
        fetch(dataUrl('/data/texts/index.json')).then((r) => (r.ok ? r.json() : []))
      ]);
      text = t;
      others = idx;
    } catch (e) {
      error = String((e as Error).message ?? e);
      return;
    }
    // back to where the reader left off
    let last = 0;
    try { last = Number(localStorage.getItem(progressKey(id)) ?? 0) || 0; } catch { /* none */ }
    current = Math.min(last, (text?.sections.length ?? 1) - 1);
    requestAnimationFrame(() => {
      if (current > 0) scrollToSection(current, 'instant');
      observe();
    });
  });

  let io: IntersectionObserver | null = null;
  function observe() {
    io?.disconnect();
    io = new IntersectionObserver(
      (es) => {
        // the topmost section on screen is the one being read
        const vis = es.filter((e) => e.isIntersecting).map((e) => Number((e.target as HTMLElement).dataset.si));
        if (!vis.length) return;
        current = Math.min(...vis);
        try { localStorage.setItem(progressKey(id), String(current)); } catch { /* session only */ }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    document.querySelectorAll('[data-si]').forEach((el) => io!.observe(el));
  }
  function scrollToSection(si: number, behavior: ScrollBehavior = 'smooth') {
    document.querySelector(`[data-si="${si}"]`)?.scrollIntoView({ behavior, block: 'start' });
  }

  const selWord = $derived(text && sel ? text.sections[sel.s].words[sel.w] : null);
  const selPada = $derived(selWord && sel ? selWord.padas[sel.p] : null);
  /* the head carries one sense; the dictionary block below has the rest */
  const headGloss = $derived(
    !selPada?.gloss ? '' : selPada.glossBy === 'author' ? selPada.gloss : selPada.gloss.split(/;\s/)[0]
  );
  const selTable = $derived(text && selPada?.para ? text.paradigms[selPada.para.key] ?? null : null);
  const termInfo = $derived(openTerm ? lookupTerm(openTerm) : null);
  const selSection = $derived(text && sel ? text.sections[sel.s] : null);

  function pick(s: number, w: number, p = -1) {
    const word = text!.sections[s].words[w];
    // tapping a whole word in saṃhitā opens its first inflected pada, not a bare compound member
    const first = p >= 0 ? p : Math.max(0, word.padas.findIndex((x) => !x.member));
    sel = { s, w, p: first };
    openTerm = null;
  }
  const isSel = (s: number, w: number, p = -1) => !!sel && sel.s === s && sel.w === w && (p < 0 || sel.p === p);

  const sectionLabel = (sec: Section, _i: number) => sec.id;
  // the Latin reading under the word, only while the page shows Devanagari
  let roman = $state('');
  $effect(() => {
    const p = selPada;
    roman = '';
    if (!p || $displayScript !== 'devanagari') return;
    transliterate(p.form, 'devanagari', 'iast').then((r) => { if (selPada === p) roman = r; }).catch(() => {});
  });
  const SOURCE: Record<string, string> = {
    vidyut: 'vidyut’s analysis',
    pick: 'vidyut’s alternative, chosen by the editor',
    author: 'the editor’s analysis (vidyut had none that fits)',
    none: 'unanalysed'
  };
</script>

<svelte:head><title>{text ? `${text.title_en} · texts` : 'texts'} · पठनम्</title></svelte:head>

{#snippet shelfLeft()}
  {#if narrow}
    {#snippet secLabel()}
      § {text ? sectionLabel(text.sections[current], current) : ''}
    {/snippet}
    <SheetButton label={secLabel} onopen={() => (spineOpen = true)} title="sections" />
    <span class="shelf-rule" aria-hidden="true"></span>
  {:else}
    <a class="back" href="/reader">← chapters</a>
  {/if}
  <button
    class="toggle"
    class:on={padaccheda}
    onclick={() => {
      padaccheda = !padaccheda;
      try { localStorage.setItem(PADACCHEDA_KEY, padaccheda ? '1' : '0'); } catch { /* session only */ }
    }}
  >padaccheda</button>
{/snippet}

{#snippet shelfRight()}
  {#if text && !narrow}
    <span>§ {sectionLabel(text.sections[current], current)} · {current + 1} of {text.sections.length}</span>
  {/if}
{/snippet}

{#snippet spine()}
  {#if text}
    {#if narrow}<a class="back sheet-back" href="/reader">← chapters</a>{/if}
    <Spine
      title="sections"
      items={text.sections.map((s, i) => ({
        id: String(i),
        label: s.kind === 'verse' ? `verse ${s.id}` : `§ ${s.id}`
      }))}
      activeId={String(current)}
      onpick={(i) => { spineOpen = false; scrollToSection(Number(i)); }}
    />
    {#if others.length > 1}
      <Spine
        title="texts"
        items={others.map((o) => ({ id: o.id, label: o.title, script: 'devanagari' as const, sub: o.title_en, href: `/reader/text/${o.id}` }))}
        activeId={text.id}
      />
    {/if}
  {/if}
{/snippet}

{#snippet rail()}
  <div class="railframe" class:sheeted={narrow} class:at-peek={narrow && railDetent === 0}>
    <div class="wordhead">
      <div class="wh-top">
        {#if selPada}
          <span class="wh-form"><Sanskrit text={selPada.form + (selPada.member ? '-' : '')} source="devanagari" /></span>
          {#if narrow && railDetent === 0}
            <span class="wh-en peek">{headGloss}</span>
            <button class="wh-pull" onclick={() => (railDetent = 1)}>↑ more</button>
          {:else if roman}
            <span class="wh-rom">{roman}</span>
          {/if}
        {:else}
          <span class="wh-form none">—</span>
          <span class="wh-rom">tap a word in the text</span>
        {/if}
        {#if narrow && railDetent > 0}
          <span class="wh-acts">
            <button class="wh-act" onclick={() => (railDetent = railDetent - 1)} aria-label="collapse the panel">↓</button>
          </span>
        {/if}
      </div>
      {#if selPada}
        <div class="wh-mean">
          <span class="wh-en">{headGloss}</span>
          {#if selPada.lemma && selPada.lemma !== selPada.form}
            <span class="wh-stem">← <Sanskrit text={selPada.lemma} source="devanagari" /></span>
          {/if}
        </div>
        <div class="wh-tags">
          {#each selPada.terms as t}
            <button class="chip-btn" type="button" onclick={() => (openTerm = openTerm === t ? null : t)}>
              <Chip label={t} script="devanagari" tone={openTerm === t ? 'on' : 'quiet'} derived={selPada.source === 'vidyut'} />
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <div class="evidence">
      {#if selWord && selWord.padas.length > 1}
        <!-- a saṃhitā word is several padas: each one is its own entry -->
        <div class="ev">
          <div class="ev-head"><span class="ev-label quiet">in this word</span>
            <span class="ev-meta"><Sanskrit text={selWord.surface} source="devanagari" /></span></div>
          <div class="padarow">
            {#each selWord.padas as p, pi}
              <button class="padabtn" class:on={sel?.p === pi} onclick={() => sel && (sel = { ...sel, p: pi }, openTerm = null)}>
                <Sanskrit text={p.form + (p.member ? '-' : '')} source="devanagari" />
              </button>
            {/each}
          </div>
        </div>
      {/if}

      {#if openTerm}
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">what it means</span>
            <button class="ev-fold" onclick={() => (openTerm = null)} aria-label="close the note">×</button>
          </div>
          <div class="concept">
            {#if termInfo}
              <div class="concept-head">
                <Sanskrit text={termInfo.term} source="devanagari" />
                <span class="concept-rom">{termInfo.termRoman}</span>
              </div>
              <div class="concept-body">
                <InlineMarkup text={termInfo.meaning} autoLink onpick={(t) => (openTerm = t)} />
              </div>
              {#if termInfo.sutraRef}
                <a class="concept-ref" href={`/ref/${termInfo.sutraRef}`}><Sanskrit text="सूत्र" source="devanagari" /> {termInfo.sutraRef} →</a>
              {/if}
            {:else}
              <div class="concept-body concept-empty">No glossary note yet for <Sanskrit text={openTerm} source="devanagari" />.</div>
            {/if}
          </div>
        </div>
      {/if}

      {#if selPada?.note || selWord?.note}
        <div class="ev">
          <div class="ev-head"><span class="ev-label">note</span></div>
          {#if selPada?.note}<p class="note"><Sanskrit text={selPada.note} source="devanagari" /></p>{/if}
          {#if selWord?.note}<p class="note"><Sanskrit text={selWord.note} source="devanagari" /></p>{/if}
        </div>
      {/if}

      {#if selPada}
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">dictionary</span>
            {#if selPada.mw}<span class="ev-meta rom">Monier-Williams{selPada.mw.lex ? ` · ${selPada.mw.lex}` : ''}</span>{/if}
          </div>
          {#if selPada.glossBy === 'author'}
            <p class="sense here">{selPada.gloss} <span class="by">— in this text</span></p>
          {/if}
          {#if selPada.mw}
            <ol class="senses">
              {#each selPada.mw.senses.slice(0, 3) as s}<li>{s}</li>{/each}
            </ol>
            <a class="mwlink" href={selPada.mw.url} target="_blank" rel="noopener">
              <Sanskrit text={selPada.lemma} source="devanagari" /> in Monier-Williams (Cologne) ↗
            </a>
          {:else}
            <p class="sense quietp">Not a headword in Monier-Williams.</p>
          {/if}
        </div>
      {/if}

      {#if selTable && selPada?.para}
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">paradigm</span>
            <span class="ev-meta">
              <Sanskrit text={selTable.stem} source="devanagari" /> ·
              {#if selTable.lakara}<Sanskrit text={selTable.lakara} source="devanagari" /> ({selTable.kind}){:else}{selTable.kind}{/if}
            </span>
            <button class="ev-fold" onclick={() => (paraOpen = !paraOpen)} aria-expanded={paraOpen}
              aria-label={paraOpen ? 'fold the paradigm away' : 'show the paradigm'}>{paraOpen ? '−' : '+'}</button>
          </div>
          {#if paraOpen}
            <Grid script="devanagari" surface="sunken" colHeads={selTable.colHeads} rowHeads={selTable.rowHeads}
              rows={selTable.rows} lit={[selPada.para.row, selPada.para.col]} />
          {/if}
        </div>
      {/if}

      {#if selPada}
        <div class="ev provenance">
          <span>{SOURCE[selPada.source]}{selPada.alts > 1 ? ` · ${selPada.alts} analyses offered` : ''}</span>
          {#if selSection}<span>§ {selSection.id}</span>{/if}
        </div>
      {/if}
    </div>
  </div>
{/snippet}

{#if error}
  <div class="status">{error}</div>
{:else if !text}
  <div class="status">loading the text…</div>
{:else}
  <Shelf left={shelfLeft} right={shelfRight} progress={((current + 1) / text.sections.length) * 100} />
  <Shell {spine} {rail} railFrame sheets bind:railDetent bind:spineOpen railWidth="360px">
    <div class="body">
      <header class="ch-head">
        <span class="label"><Sanskrit text={text.work} source="devanagari" /> · {text.place}</span>
        <span class="ch-dev"><Sanskrit text={text.title} source="devanagari" /></span>
        <span class="ch-en">{text.title_en}</span>
      </header>

      {#each text.sections as sec, si}
        <article class="sec" class:verse={sec.kind === 'verse'} data-si={si}>
          <span class="num" aria-label={`section ${sec.id}`}>{sec.id}</span>
          <div class="lines">
            {#each sec.lines as line, li}
              <div class="tokens">
                {#each line as wi}
                  {@const w = sec.words[wi]}
                  {#if padaccheda}
                    <span class="word">
                      {#each w.padas as p, pi}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <span class="token pada" class:member={p.member} class:sel={isSel(si, wi, pi)}
                          role="button" tabindex="0" onclick={() => pick(si, wi, pi)}
                        ><Sanskrit text={p.form} source="devanagari" />{#if p.member}<span class="hy">-</span>{/if}</span>
                      {/each}
                    </span>
                  {:else}
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <span class="token" class:sel={isSel(si, wi)} role="button" tabindex="0" onclick={() => pick(si, wi)}
                    ><Sanskrit text={w.surface} source="devanagari" /></span>
                  {/if}
                {/each}
                <span class="token punct">{sec.kind === 'verse' ? (li === sec.lines.length - 1 ? `॥ ${sec.id} ॥` : '।') : '।'}</span>
              </div>
            {/each}
          </div>
        </article>
      {/each}

      <footer class="credit">
        <p>{text.source.edition}; GRETIL file <code>{text.source.file}</code>, lines {text.source.lines}.</p>
        <p>
          Segmentation and analysis by <a href="https://github.com/ambuda-org/vidyut" target="_blank" rel="noopener">vidyut</a>,
          checked and corrected by the editor. Meanings from Monier-Williams, <i>A Sanskrit-English Dictionary</i> (1899),
          digitised by the <a href="https://www.sanskrit-lexicon.uni-koeln.de/" target="_blank" rel="noopener">Cologne Digital Sanskrit Dictionaries</a>,
          used under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>
          (first senses only, lightly cleaned); this text's glosses are shared under the same licence.
          <a href="/about#credits">Credits</a>.
        </p>
      </footer>
    </div>
  </Shell>
{/if}

<style>
  .status { font-family: var(--font-mono); font-size: 12px; color: var(--quiet); padding: 40px 24px; text-align: center; }
  .toggle {
    font-family: var(--font-mono); font-size: 12px; background: transparent; border: 1px solid var(--rule-2);
    border-radius: var(--radius); color: var(--muted); padding: 4px 11px; cursor: pointer;
  }
  .toggle.on { border-color: var(--accent); color: var(--accent); }
  .back { font-family: var(--font-mono); font-size: 12px; color: var(--muted); text-decoration: none; }
  .back:hover { color: var(--accent); }
  .sheet-back { display: block; padding: 4px 0 12px; }
  .shelf-rule { width: 1px; height: 18px; background: var(--rule-2); }

  .body { display: flex; flex-direction: column; gap: 26px; min-width: 0; padding-bottom: 24px; }
  .ch-head { display: flex; flex-direction: column; gap: 5px; border-bottom: 1px solid var(--rule); padding-bottom: 13px; }
  .label { font-family: var(--font-mono); font-size: 11px; color: var(--faint); letter-spacing: 0.04em; }
  .ch-dev { font-family: var(--font-deva); font-size: 27px; font-weight: 600; }
  .ch-en { font-family: var(--font-prose); font-size: 15px; color: var(--muted); font-style: italic; }

  /* the number in the margin, the text beside it */
  .sec {
    display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 4px;
    scroll-margin-top: calc(var(--sticky-rail) + 14px);
  }
  .num { font-family: var(--font-mono); font-size: 11px; color: var(--faint); padding-top: 12px; text-align: right; padding-right: 8px; }
  .sec.verse .num { color: var(--accent); }
  .lines { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
  .sec.verse .lines { padding-left: 14px; border-left: 2px solid var(--rule); }
  .tokens { display: flex; flex-wrap: wrap; column-gap: 16px; row-gap: 6px; align-items: flex-end; }
  .word { display: inline-flex; flex-wrap: wrap; column-gap: 10px; }
  .token {
    font-family: var(--font-deva); font-size: 24px; color: var(--ink); line-height: 1.4;
    border-bottom: 2px solid transparent; padding-bottom: 1px; cursor: pointer; overflow-wrap: anywhere;
  }
  .token:hover { color: var(--ink-2); border-bottom-color: var(--accent-soft); }
  .token.sel { border-bottom-color: var(--accent); color: var(--accent); }
  .token.punct { color: var(--faint); cursor: default; border: none; }
  /* a compound member hangs on its hyphen to the next member */
  .token.member { margin-right: -10px; }
  .hy { color: var(--faint); }

  .credit { border-top: 1px solid var(--rule); padding-top: 12px; font-family: var(--font-prose); font-size: 12.5px; color: var(--muted); line-height: 1.55; }
  .credit p { margin: 0 0 6px; }
  .credit a { color: var(--accent-ref); }

  /* ── rail: the reader's frame ── */
  .railframe { position: relative; height: 100%; display: flex; flex-direction: column; min-height: 0; overflow: hidden; }
  .wordhead { flex: none; background: var(--sunken); border-bottom: 1px solid var(--rule-2); padding: 14px 16px 13px; display: flex; flex-direction: column; gap: 9px; }
  .wh-top { display: flex; align-items: baseline; gap: 10px; }
  .wh-form { font-family: var(--font-deva); font-size: 28px; line-height: 1.15; font-weight: 600; color: var(--ink); min-width: 0; overflow-wrap: anywhere; }
  .wh-form.none { color: var(--faint); font-weight: 400; }
  .wh-rom { font-family: var(--font-mono); font-size: 12px; color: var(--quiet); }
  .wh-acts { margin-left: auto; display: flex; gap: 6px; flex: none; }
  .wh-act {
    width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-family: var(--font-mono);
    font-size: 13px; color: var(--ink-2); background: var(--paper); border: 1px solid var(--rule-2); border-radius: var(--radius); cursor: pointer;
  }
  .wh-mean { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
  .wh-en { font-family: var(--font-prose); font-size: 15px; color: var(--ink); }
  .wh-stem { font-family: var(--font-deva); font-size: 13px; color: var(--quiet); }
  .wh-tags { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .chip-btn { all: unset; cursor: pointer; border-radius: var(--radius); }
  .chip-btn:focus-visible { outline: 2px solid var(--accent-ref); outline-offset: 1px; }

  .evidence { flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; display: flex; flex-direction: column; }
  .ev { display: flex; flex-direction: column; gap: 9px; padding: 13px 16px 15px; border-bottom: 1px solid var(--rule); }
  .ev-head { display: flex; align-items: baseline; gap: 8px; }
  .ev-label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
  .ev-label.quiet { color: var(--muted); }
  .ev-meta { font-family: var(--font-deva); font-size: 13px; color: var(--quiet); min-width: 0; }
  .ev-meta.rom { font-family: var(--font-mono); font-size: 11px; }
  .ev-fold { margin-left: auto; flex: none; font-family: var(--font-mono); font-size: 13px; color: var(--accent); background: transparent; border: none; padding: 2px 0 2px 8px; cursor: pointer; }
  .padarow { display: flex; flex-wrap: wrap; gap: 6px; }
  .padabtn {
    font-family: var(--font-deva); font-size: 16px; padding: 3px 9px; background: var(--paper); color: var(--ink-2);
    border: 1px solid var(--rule-2); border-radius: var(--radius); cursor: pointer;
  }
  .padabtn.on { border-color: var(--accent); color: var(--accent); }
  .note { margin: 0; font-family: var(--font-prose); font-size: 14px; line-height: 1.55; color: var(--ink); }
  .note :global(span) { font-family: inherit; }
  .sense { margin: 0; font-family: var(--font-prose); font-size: 14px; color: var(--ink); }
  .sense .by { color: var(--quiet); font-size: 12px; }
  .quietp { color: var(--muted); }
  .senses { margin: 0; padding-left: 18px; font-family: var(--font-prose); font-size: 13px; line-height: 1.5; color: var(--ink-2); }
  .mwlink { font-family: var(--font-mono); font-size: 11px; color: var(--accent-ref); text-decoration: none; }
  .mwlink:hover { text-decoration: underline; }
  .provenance { flex-direction: row; justify-content: space-between; font-family: var(--font-mono); font-size: 10.5px; color: var(--quiet); border-bottom: none; }

  .concept { padding: 10px 12px; border: 1px solid var(--rule-2); border-left: 2px solid var(--accent-ref); border-radius: var(--radius); }
  .concept-head { display: flex; align-items: baseline; gap: 8px; font-family: var(--font-deva); font-size: 15px; color: var(--ink); margin-bottom: 4px; }
  .concept-rom { font-family: var(--font-mono); font-size: 11px; color: var(--muted); }
  .concept-body { font-size: 13px; line-height: 1.6; color: var(--ink-2, var(--ink)); }
  .concept-empty { color: var(--muted); }
  .concept-ref { display: inline-block; margin-top: 6px; font-family: var(--font-mono); font-size: 11px; color: var(--accent-ref); text-decoration: none; }

  @media (max-width: 960px) {
    .sec { grid-template-columns: 26px minmax(0, 1fr); }
    .num { padding-right: 4px; }
    .token { font-size: 22px; }
    .tokens { column-gap: 13px; }
    .railframe.sheeted { height: 100%; overflow: hidden; }
    .railframe.at-peek .evidence { display: none; }
    .railframe.at-peek .wordhead { border-bottom: none; padding: 2px 18px 16px; gap: 10px; }
    .railframe.at-peek .wh-mean { display: none; }
    .railframe.at-peek .wh-form { font-size: 24px; flex: none; white-space: nowrap; max-width: 55%; overflow: hidden; text-overflow: ellipsis; }
    .railframe.at-peek .wh-tags { flex-wrap: nowrap; overflow: hidden; }
    .wh-en.peek { font-size: 15px; color: var(--ink-2); min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1 1 auto; }
    .wh-pull {
      margin-left: auto; flex: none; font-family: var(--font-mono); font-size: 11px; color: var(--ink-2); background: var(--paper);
      border: 1px solid var(--rule-2); border-radius: var(--radius); padding: 6px 9px; cursor: pointer;
    }
  }
</style>
