<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { wordBank } from '$lib/stores/wordBank';

  import { toParadigm } from '$lib/reader/paradigm';
  // Graded reader — the design's redesign: a chapter spine (left), interlinear
  // gloss reading with word-identity tags (center), and a scroll-synced sūtra
  // derivation rail (right). Paginated (PAGE per page) so it scales past a few
  // thousand readings. Old palette: white bg, #f97316 accent, #4f46e5 indigo.
  const PAGE = 20;

  type Reading = any;
  type Chapter = { id: string; title: string; readings: Reading[] };

  let chapters = $state<Chapter[]>([]);
  let sequence = $state<Reading[]>([]);
  let error = $state('');
  let loaded = $state(false);

  let page = $state(0);
  let focusedId = $state<string | null>(null);

  // ── the design's reader model ──────────────────────────────────────────
  // Three reading modes, and a rail that shows ONE word at a time behind a
  // quiz gate: tap a word, name its विभक्ति or लकार, then the gloss, the tags
  // and the sūtras follow. The always-open list the rail used to show gave the
  // answer away before the reader had tried.
  type Mode = 'recall' | 'split' | 'gloss';
  let mode = $state<Mode>('recall');
  let sel = $state<{ id: string; wi: number } | null>(null);
  let pick = $state<string | null>(null);
  let checked = $state<Set<string>>(new Set());
  let showTr = $state(false);
  let hoverEx = $state<string | null>(null);
  let hoverWi = $state<number | null>(null);

  let io: IntersectionObserver | null = null;
  let vis = new Map<string, number>();

  onMount(async () => {
    try {
      const res = await fetch('/data/readings.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('could not load readings (' + res.status + ')');
      const data = await res.json();
      chapters = data.chapters ?? [];
      sequence = data.sequence ?? [];
      loaded = true;
      focusedId = sequence[0]?.id ?? null;
      requestAnimationFrame(observe);
      // ?reading=ex191 — how प्रयोग sends the reader to the line that attests a
      // cell. Runs after the corpus is in hand, since the page a reading sits
      // on depends on the content boundaries computed from it.
      const want = new URLSearchParams(location.search).get('reading');
      if (want) requestAnimationFrame(() => jumpToReading(want));
    } catch (e) {
      error = String((e as Error).message || e);
    }
    window.addEventListener('keydown', onKeydown);
  });
  onDestroy(() => {
    io?.disconnect();
    if (typeof window !== 'undefined') window.removeEventListener('keydown', onKeydown);
  });

  // ── chapter title split: "देव — english gloss" ──────────────────────────────
  function splitTitle(t: string): { dev: string; en: string } {
    const i = t.indexOf(' — ');
    return i >= 0 ? { dev: t.slice(0, i), en: t.slice(i + 3) } : { dev: t, en: '' };
  }
  const titles = $derived.by(() => {
    const m: Record<string, { dev: string; en: string }> = {};
    chapters.forEach((c) => (m[c.id] = splitTitle(c.title)));
    return m;
  });

  // ── the reading list (graded order), paginated. The chapter spine is the only
  //    table of contents; readings stay in their authored difficulty sequence. ──
  const list = $derived(sequence.map((r) => ({ ...r })));
  // ── page boundaries: cut where the CONTENT breaks, not every PAGE readings ──
  //
  // Fixed 20-reading slices cut across a sequence ordered by difficulty, so
  // chapters landed wherever they landed. Late in the corpus that was severe:
  // pāṭhāḥ spans 37 tiers (210-570) and kathā spans 160-460, so past tier 220
  // they braid one reading at a time. Page 10 held THIRTEEN chapter switches
  // across 20 readings, nine of them a single reading, with pāṭhāḥ marked five
  // separate times — 11,819px of scrolling past markers that said nothing.
  //
  // So: accumulate readings into a page until adding the next chapter-run would
  // overshoot PAGE, then break. A run longer than PAGE gets a page to itself and
  // overflows rather than being split mid-chapter. Pages come out uneven, which
  // is correct — they follow the material.
  const bounds = $derived.by(() => {
    const runs: { start: number; len: number }[] = [];
    for (let i = 0; i < list.length; i++) {
      const prev = runs[runs.length - 1];
      if (prev && list[i].chapter === list[prev.start].chapter) prev.len++;
      else runs.push({ start: i, len: 1 });
    }
    const out: { start: number; end: number }[] = [];
    let start = 0;
    let count = 0;
    for (const run of runs) {
      if (count > 0 && count + run.len > PAGE) {
        out.push({ start, end: run.start });
        start = run.start;
        count = 0;
      }
      count += run.len;
    }
    if (start < list.length) out.push({ start, end: list.length });
    return out.length ? out : [{ start: 0, end: list.length }];
  });

  const totalPages = $derived(bounds.length);
  // Clamp BOTH ends. This only had Math.min, so `page` could run negative:
  // every caller assigns a raw value (setPage, stepReading, jumpToChapter) and
  // nothing floored it at zero. Cards kept rendering because slice() tolerates
  // negative indices, so the only visible symptom was the pager label reading
  // "page -3 / 12 · -79–-60 of 228".
  const clampedPage = $derived(Math.max(0, Math.min(page, totalPages - 1)));
  const startIdx = $derived(bounds[clampedPage]?.start ?? 0);
  const endIdx = $derived(bounds[clampedPage]?.end ?? list.length);
  const slice = $derived(list.slice(startIdx, endIdx));

  const focused = $derived.by(() => {
    const inSlice = focusedId && slice.some((r) => r.id === focusedId);
    const id = inSlice ? focusedId : slice[0]?.id;
    return slice.find((r) => r.id === id) ?? slice[0] ?? null;
  });
  const focusedChapter = $derived(focused?.chapter ?? null);

  // first global index of each chapter, for spine/contents jumps
  const firstIdx = $derived.by(() => {
    const m: Record<string, number> = {};
    list.forEach((r, i) => {
      if (m[r.chapter] === undefined) m[r.chapter] = i;
    });
    return m;
  });

  // rows = chapter heads interleaved with example articles
  // Chapters braid through the reader by design: the sequence is graded by
  // difficulty, and sup spans tiers 20-200 while karaka spans 10-130, so the
  // topic changes ~63 times across the corpus. A full banner at every switch
  // printed the same chapter title dozens of times — 27 of those runs are a
  // single reading — which read as disorganisation rather than as grading.
  //
  // So: full heading the FIRST time a chapter appears, a light marker when the
  // reader returns to one already seen.
  const rows = $derived.by(() => {
    const out: any[] = [];
    let last: string | null = null;
    const seen = new Set<string>();
    // Chapters opened before this page, so page 2+ doesn't re-announce them.
    for (let i = 0; i < startIdx; i++) seen.add(list[i]?.chapter);
    // A tier's short readings are ONE lesson delivered as N cards: ex001-ex007
    // is the six kārakas, each sentence differing from the last by one word.
    // Rendered as seven separate cards with seven sets of chrome, that lesson
    // costs seven screens of scrolling. Mark each run of shorts sharing a tier
    // so they can be bound into a single visual block; the consolidation
    // passage that follows keeps its own card, since it is a different thing.
    const runKey = (r: any) => (r.length === 'short' ? `${r.chapter}:${Math.floor((r.segment ?? 0) / 10)}` : null);
    // A page is thrashing when its chapters change hands more often than they
    // hold: more runs than distinct chapters + 1.
    const distinct = new Set(slice.map((r: any) => r.chapter)).size;
    let runCount = 0;
    let prevCh: string | null = null;
    for (const r of slice) {
      if (r.chapter !== prevCh) runCount++;
      prevCh = r.chapter;
    }
    const thrashing = runCount > distinct + 1;
    slice.forEach((r, k) => {
      if (r.chapter !== last) {
        const t = titles[r.chapter] ?? { dev: r.chapter, en: '' };
        // Suppress a RESUME marker when chapters are thrashing — a run of one
        // reading whose chapter was already open a row or two back. Late in the
        // corpus pāṭhāḥ and kathā alternate one reading at a time, so page 13
        // carries 13 switches; marking each return says nothing the spine and
        // the card's own metadata do not already say, and five identical
        // "pāṭhāḥ" hairlines on one page read as noise rather than structure.
        // A chapter's FIRST appearance always gets its full banner.
        // Two heuristics were tried here and both failed on the real pattern:
        // suppressing single-reading runs, and suppressing when the chapter was
        // already the last one marked. Neither helps when chapters genuinely
        // alternate A→B→A→B, which is what pāṭhāḥ and kathā do from tier 220 on
        // — page 13 is pāṭhāḥ(4) kathā(1) pāṭhāḥ(2) kathā(1) … all the way down.
        //
        // So the marker is suppressed wholesale on a THRASHING page: one where
        // resume markers would outnumber the chapters they mark. On such a page
        // the marker communicates nothing — the spine already shows which
        // chapter is in view, and each card carries its own identity — while
        // thirteen hairlines read as structure that is not there. A chapter's
        // FIRST appearance still gets its full banner, always.
        const isFirst = !seen.has(r.chapter);
        if (isFirst || !thrashing) {
          out.push({ head: true, chId: r.chapter, dev: t.dev, en: t.en, resumed: !isFirst });
        }
        seen.add(r.chapter);
        last = r.chapter;
      }
      const key = runKey(r);
      const prevKey = k > 0 ? runKey(slice[k - 1]) : null;
      const nextKey = k < slice.length - 1 ? runKey(slice[k + 1]) : null;
      const ex = processEx(r, startIdx + k + 1);
      // grouped only when the run is longer than one — a lone short reading
      // between two passages is not a lesson, it is just a reading.
      const grouped = !!key && (key === prevKey || key === nextKey);
      out.push({ ...ex, grouped, runStart: grouped && key !== prevKey, runEnd: grouped && key !== nextKey });
    });
    return out;
  });

  const progressPct = $derived.by(() => {
    const idx = list.findIndex((r) => r.id === (focused?.id ?? focusedId));
    return list.length > 1 && idx >= 0 ? (idx / (list.length - 1)) * 100 : 0;
  });

  // Paradigm recognition lives in src/lib/reader/paradigm.ts — see the note
  // there on ex094 vs ex172. Recognition is by SHAPE, not by the `kind` field.
  // ── interlinear token + word identity processing (matches design) ───────────
  function processEx(r: Reading, n: number) {
    const id = r.id;
    // Normalise anusvāra when indexing: the corpus writes both ग्रामं and
    // ग्रामम् for the same word, and an unnormalised lookup silently drops the
    // gloss (the token just renders bare). Affected 12 readings.
    const anusvara = (s: string) => s.replace(/ं$/, 'म्');
    const formIndex: Record<string, number> = {};
    (r.words || []).forEach((w: any, wi: number) => {
      const k = anusvara(w.form);
      if (!(k in formIndex)) formIndex[k] = wi;
    });

    const words = (r.words || []).map((w: any, wi: number) => {
      const terms = (w.notes || []).filter((nt: any) => nt.term).map((nt: any) => ({ term: nt.term, en: nt.en || '' }));
      return { wi, form: w.form, gloss: w.gloss || '', terms };
    });

    const tokens = r.sentence
      .replace(/॥/g, ' ॥ ')
      .replace(/।/g, ' । ')
      .split(/\s+/)
      .filter(Boolean)
      .map((tx: string) => {
        // Strip trailing punctuation before matching against the gloss table.
        // Prose passages (kind:sangraha, katha) use commas inside a sentence,
        // and a token like "क्रुध्यति," would otherwise miss its gloss and
        // render bare — the failure is silent, so it must be handled here.
        const clean = anusvara(tx.replace(/[।॥,;—"“”?!]/g, '').trim());
        const wi = clean in formIndex ? formIndex[clean] : -1;
        // A word is FOCAL (the reading's new/derived word) when it carries a sūtra
        // citation. Focal words show their gloss by default; KNOWN words collapse
        // to bare Devanagari and reveal on hover — so the reader can try to recall.
        const focal = wi >= 0 && (r.words[wi].notes || []).some((nt: any) => nt.cite);
        return { text: tx, wi, gloss: wi >= 0 ? r.words[wi].gloss || '' : '', isWord: wi >= 0, focal };
      });

    return {
      ex: true,
      id,
      chId: r.chapter,
      indexLabel: String(n).padStart(2, '0'),
      teaches: r.teaches || '',
      tokens,
      words,
      grid: toParadigm(r.sentence),
      translation: r.translation || '',
      vyakhya: r.vyakhya || '',
      vyakhya_en: (r.vyakhya_en || '').trim()
    };
  }

  // ── rail: focused example's full per-word breakdown ─────────────────────────
  // Each word carries its grammatical IDENTITY (role · case · number tags) and,
  // when the source cites them, its DERIVATION (sūtra steps). Many words are
  // identity-only — the graded data derives the newly-taught word and leaves
  // earlier words as tags — so we always show tags and only mark a word
  // "no rule cited" when it has neither.
  //
  // The rail follows the HOVERED reading when the pointer is over one, otherwise
  // the scroll-focused reading — so hovering a lower card swaps the machinery to
  // that card instead of leaving the top one showing.
  const railReading = $derived.by(() => {
    return list.find((r) => r.id === (focusedId ?? slice[0]?.id)) ?? slice[0] ?? null;
  });

  // The one word the rail is showing, if any.
  const selWord = $derived.by(() => {
    if (!sel) return null;
    const r = list.find((x) => x.id === sel.id);
    const w = r?.words?.[sel.wi];
    if (!r || !w) return null;
    const terms = (w.notes ?? []).filter((n: any) => n.term).map((n: any) => ({ term: n.term, en: n.en ?? '' }));
    const cites = (w.notes ?? []).filter((n: any) => n.cite).map((n: any) => ({ cite: n.cite, role: n.role ?? '' }));
    return { id: r.id, wi: sel.wi, form: w.form, lemma: w.lemma ?? '', gloss: w.gloss ?? '', quiz: w.quiz ?? null, terms, cites };
  });

  const asking = $derived(!!selWord?.quiz && pick === null);
  const answered = $derived(!!selWord && (pick !== null || !selWord.quiz));

  const verdict = $derived.by(() => {
    const w = selWord;
    if (!w?.quiz || pick === null) return null;
    if (pick === '—') return { text: 'shown: ' + w.quiz.ans, ink: '#a99e8b' };
    return pick === w.quiz.ans
      ? { text: '\u2713 ' + w.quiz.ans, ink: '#2f8a5b' }
      : { text: '\u2717 you said ' + pick + ' \u00b7 it is ' + w.quiz.ans, ink: '#c2410c' };
  });

  function pickOption(o: string) {
    pick = o;
    if (selWord) checked = new Set([...checked, selWord.id + ':' + selWord.wi]);
  }

  function selectWord(id: string, wi: number) {
    if (sel && sel.id === id && sel.wi === wi) { sel = null; pick = null; return; }
    sel = { id, wi };
    pick = null;
  }

  // Deck banking — the last step of examining a word, per the design.
  let deckCount = $state(0);
  let inDeck = $state(false);
  wordBank.subscribe(() => {
    deckCount = wordBank.getDue().length;
    inDeck = selWord ? wordBank.has('rdr:' + selWord.form) : false;
  });
  $effect(() => {
    inDeck = selWord ? wordBank.has('rdr:' + selWord.form) : false;
  });
  function bankWord() {
    const w = selWord;
    if (!w) return;
    wordBank.addWord({
      id: 'rdr:' + w.form,
      display: w.form,
      iast: null,
      englishGloss: w.gloss,
      tag: w.terms.map((t: any) => t.term).join(' '),
      sourceId: 'reader:' + w.id
    });
    inDeck = true;
  }

  // ── interaction ─────────────────────────────────────────────────────────────
  // hoverEx = which reading the pointer is over (drives the rail subject);
  // hoverWi = which word within it (drives the cross-highlight). They're set
  // separately: entering an article sets hoverEx (word cleared), entering a
  // token/word sets hoverWi while staying in the same article.
  function enterReading(ex: string) {
    if (hoverEx !== ex) { hoverEx = ex; hoverWi = null; }
  }
  function leaveReading(ex: string) {
    if (hoverEx === ex) { hoverEx = null; hoverWi = null; }
  }
  function enterWord(ex: string, wi: number) {
    if (hoverEx !== ex) hoverEx = ex;
    if (hoverWi !== wi) hoverWi = wi;
  }
  function leaveWord() {
    if (hoverWi !== null) hoverWi = null;
  }
  function hl(exId: string, wi: number) {
    return hoverEx === exId && hoverWi === wi;
  }

  function setPage(p: number) {
    page = p;
    focusedId = null;
    requestAnimationFrame(() => {
      const m = document.querySelector('[data-reading-top]');
      if (m) window.scrollTo({ top: m.getBoundingClientRect().top + window.scrollY - 58, behavior: 'smooth' });
      observe();
    });
  }

  // Scroll a reading (by id) so its top sits at the anchor line, and focus it.
  function scrollToReading(id: string) {
    const el = document.querySelector('[data-ex-id="' + id + '"]') as HTMLElement | null;
    if (!el) return;
    focusedId = id;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - ANCHOR, behavior: 'smooth' });
  }

  // The reading line arrows step relative to: the top of the sticky chrome.
  const ANCHOR = 72;

  // ← →  /  ↑ ↓  step through readings — always relative to the card actually at
  // the top of the viewport RIGHT NOW (read live from the DOM), so it stays in
  // sync no matter how the user got there (manual scroll, wheel, jump, etc.).
  function stepReading(dir: 1 | -1) {
    const els = Array.from(document.querySelectorAll('[data-ex-id]')) as HTMLElement[];
    if (!els.length) return;

    if (dir === 1) {
      // first card whose top sits below the anchor line (a few px of slack so the
      // current top card isn't re-selected when it's flush with the anchor)
      const target = els.find((el) => el.getBoundingClientRect().top > ANCHOR + 4);
      if (target) { scrollToReading(target.getAttribute('data-ex-id')!); return; }
      if (clampedPage < totalPages - 1) {
        // Compute the landing card from `list` and the NEXT page index directly.
        // Reading `slice` inside the callback took whatever the derived held at
        // that moment, which on a fast keypress is still the old page.
        const nextFirst = list[bounds[clampedPage + 1]?.start ?? 0];
        page = clampedPage + 1;
        requestAnimationFrame(() => requestAnimationFrame(() => { observe(); if (nextFirst) scrollToReading(nextFirst.id); }));
      }
    } else {
      // last card whose top is above the anchor line — i.e. the previous one
      const above = els.filter((el) => el.getBoundingClientRect().top < ANCHOR - 4);
      const target = above[above.length - 1];
      if (target) { scrollToReading(target.getAttribute('data-ex-id')!); return; }
      if (clampedPage > 0) {
        const prevLast = list[(bounds[clampedPage - 1]?.end ?? 1) - 1];
        page = clampedPage - 1;
        requestAnimationFrame(() => requestAnimationFrame(() => { observe(); if (prevLast) scrollToReading(prevLast.id); }));
      }
    }
  }

  function onKeydown(e: KeyboardEvent) {
    // ignore when typing in a field or with modifiers
    const t = e.target as HTMLElement;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); stepReading(1); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); stepReading(-1); }
  }
  // Jump to a chapter's FIRST READING, and focus it.
  //
  // Chapters are braided through the sequence by difficulty, not contiguous:
  // the 12 सङ्ग्रह passages are spread over 8 different pages, and सङ्ग्रह's
  // first one (ex182) sits at position 8 — on page 1, surrounded by kāraka.
  // The old code paged to floor(firstIdx/PAGE) and then scrolled to a
  // [data-ch-id] heading, so clicking सङ्ग्रह in the spine landed you on page 1
  // looking at kāraka, and scrolling down never reached the chapter you asked
  // for. Target the reading itself so the jump lands on actual content.
  /**
   * Open the reader on one reading, by id.
   *
   * The reader paginates on content boundaries, so a reading is usually not on
   * the page that happens to be showing — a bare `#id` anchor finds nothing in
   * the DOM. प्रयोग links here from a paradigm cell to the line that attests it,
   * so the page has to be found first and scrolled to second.
   */
  function jumpToReading(id: string) {
    const idx = list.findIndex((r) => r.id === id);
    if (idx < 0) return;
    page = Math.max(0, bounds.findIndex((b) => idx >= b.start && idx < b.end));
    focusedId = null;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        observe();
        const el = document.querySelector('[data-ex-id="' + id + '"]') as HTMLElement | null;
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
        setTimeout(() => { focusedId = id; }, 500);
      })
    );
  }

  function jumpToChapter(chId: string) {
    const idx = firstIdx[chId];
    if (idx === undefined) return;
    const target = list[idx];
    page = Math.max(0, bounds.findIndex((b) => idx >= b.start && idx < b.end));
    // Do NOT set focusedId before scrolling: focus re-renders the rail and the
    // card, and that re-render cancels an in-flight smooth scroll — the jump
    // stalled a few hundred px in. Scroll first, focus once we've arrived.
    focusedId = null;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        observe();
        const el = target && (document.querySelector('[data-ex-id="' + target.id + '"]') as HTMLElement | null);
        const head = document.querySelector('[data-ch-id="' + chId + '"]') as HTMLElement | null;
        // Prefer the chapter heading when it is directly above that reading, so
        // the title stays in view; otherwise go to the reading.
        const anchor = head && el && el.getBoundingClientRect().top - head.getBoundingClientRect().top < 400 ? head : el;
        if (!anchor) { window.scrollTo({ top: 0 }); return; }
        window.scrollTo({ top: anchor.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
        if (target) setTimeout(() => { focusedId = target.id; }, 500);
      })
    );
  }

  function observe() {
    if (typeof IntersectionObserver === 'undefined') return;
    io?.disconnect();
    vis = new Map();
    const els = Array.from(document.querySelectorAll('[data-ex-id]'));
    if (!els.length) return;
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).getAttribute('data-ex-id')!;
          if (e.isIntersecting) vis.set(id, e.boundingClientRect.top);
          else vis.delete(id);
        }
        let best: string | null = null;
        let bd = Infinity;
        for (const [id, top] of vis) {
          const d = Math.abs(top - 130);
          if (d < bd) {
            bd = d;
            best = id;
          }
        }
        if (best && best !== focusedId) focusedId = best;
      },
      { threshold: [0], rootMargin: '-12% 0px -55% 0px' }
    );
    els.forEach((el) => io!.observe(el));
  }

  // short label for the spine
  function shortEn(en: string): string {
    return en.replace(/\s*[—(].*$/, '').split(':')[0].split(',')[0];
  }
</script>

<svelte:head><title>पठनम् · graded reader</title></svelte:head>

<div class="reader">
  <!-- reading-progress rail (the pillar nav lives in the global SiteNav) -->
  <div class="progress"><div class="bar" style="width:{progressPct}%"></div></div>

  {#if error}
    <div class="status">{error}</div>
  {:else if !loaded}
    <div class="status">loading the reader…</div>
  {:else}
    <div class="inner">
      <div class="titlerow">
        <div>
          <div class="bigtitle"><Sanskrit text="संस्कृतपठनम्" source="devanagari" /></div>
          <div class="bigsub">Sanskrit, learned by reading — every word traced to the Aṣṭādhyāyī.</div>
        </div>
        <div class="modes">
          <span class="modelabel">mode</span>
          {#each [{ k: 'recall', label: 'recall' }, { k: 'split', label: 'padaccheda' }, { k: 'gloss', label: 'glossed' }] as m}
            <button class="modepill" class:on={mode === m.k} onclick={() => (mode = m.k as Mode)}>{m.label}</button>
          {/each}
        </div>
        <div class="kbdhint"><kbd>↑</kbd><kbd>↓</kbd> step through readings</div>
      </div>

      <div class="grid">
        <!-- LEFT: the arc -->
        <nav class="spine">
          <div class="spinelabel">the arc</div>
          {#each chapters as c}
            {@const t = titles[c.id] ?? { dev: c.id, en: '' }}
            {@const active = c.id === focusedChapter}
            <button class="spineitem" class:active onclick={() => jumpToChapter(c.id)}>
              <div class="spinedev" class:active><Sanskrit text={t.dev} source="devanagari" /></div>
              <div class="spineen">{shortEn(t.en)}</div>
            </button>
          {/each}
        </nav>

        <!-- CENTER: reading -->
        <main data-reading-top class="body">
          {#each rows as row}
            {#if row.head && row.resumed}
              <div data-ch-id={row.chId} class="chresume">
                <span class="chresumedev"><Sanskrit text={row.dev} source="devanagari" /></span>
              </div>
            {:else if row.head}
              <div data-ch-id={row.chId} class="chhead">
                <div class="chkicker">chapter</div>
                <div class="chdev"><Sanskrit text={row.dev} source="devanagari" /></div>
                <div class="chen">{row.en}</div>
              </div>
            {:else}
              <article
                data-ex-id={row.id}
                class="ex"
                class:active={railReading?.id === row.id}
                class:grouped={row.grouped}
                class:runstart={row.runStart}
                class:runend={row.runEnd}
                role="presentation"
                onmouseenter={() => enterReading(row.id)}
                onmouseleave={() => leaveReading(row.id)}
              >
                <div class="exhead">
                  <span class="exindex">{row.indexLabel}</span>
                  <span class="exteaches">{row.teaches}</span>
                </div>

                {#if row.grid}
                  <!-- paradigm: a real grid, aligned by वचन -->
                  <div class="pgrid" style="--cols:{row.grid.cols}">
                    <div class="pgcorner"></div>
                    {#each row.grid.colHeads as h}
                      <div class="pgcolhead"><Sanskrit text={h} source="devanagari" /></div>
                    {/each}
                    {#each row.grid.rows as gr}
                      <div class="pgrowhead"><Sanskrit text={gr.label} source="devanagari" /></div>
                      {#each gr.cells as cell}
                        <div class="pgcell"><Sanskrit text={cell} source="devanagari" /></div>
                      {/each}
                    {/each}
                  </div>
                {:else}
                <!-- interlinear sentence -->
                <div class="tokens">
                  {#each row.tokens as tok}
                    {#if tok.isWord}
                      <span
                        class="token"
                        class:hot={hl(row.id, tok.wi)}
                        class:focal={tok.focal}
                        role="presentation"
                        onmouseenter={() => enterWord(row.id, tok.wi)}
                        onmouseleave={leaveWord}
                        onclick={() => selectWord(row.id, tok.wi)}
                      >
                        <span class="tokform" class:sel={sel?.id === row.id && sel?.wi === tok.wi}
                          ><Sanskrit text={tok.text} source="devanagari" /></span
                        >
                        <!-- In `gloss` mode every gloss is shown for checking; in
                             `recall` only the selected word's, so the reader tries
                             first. Selection is what opens the rail. -->
                        <span
                          class="tokgloss"
                          class:reveal={mode === 'gloss' || (sel?.id === row.id && sel?.wi === tok.wi)}
                          >{tok.gloss}</span
                        >
                      </span>
                    {:else}
                      <span class="token">
                        <span class="tokform"><Sanskrit text={tok.text} source="devanagari" /></span>
                        <span class="tokgloss"></span>
                      </span>
                    {/if}
                  {/each}
                </div>
                {/if}

                <p class="translation">{row.translation}</p>

                {#if row.vyakhya}
                  <div class="vyakhya">
                    <div class="vydev"><Sanskrit text={row.vyakhya} source="devanagari" /></div>
                    {#if row.vyakhya_en}<p class="vyen">{row.vyakhya_en}</p>{/if}
                  </div>
                {/if}
              </article>
            {/if}
          {/each}

          {#if totalPages > 1}
            <div class="pager">
              <button class="navbtn" disabled={clampedPage <= 0} onclick={() => setPage(clampedPage - 1)}>← previous</button>
              <span class="range">
                page {clampedPage + 1} / {totalPages} · {startIdx + 1}–{endIdx} of {list.length}
              </span>
              <button class="navbtn" disabled={clampedPage >= totalPages - 1} onclick={() => setPage(clampedPage + 1)}>next →</button>
            </div>
          {/if}
          <div class="tail"></div>
        </main>

        <!-- RIGHT: the machinery -->
        <aside class="rail">
          <div class="raillabel">in the <span class="accent">अष्टाध्यायी</span></div>

          {#if !selWord}
            <div class="railempty">
              Tap a word to see how it is formed. You are asked to name its case
              or lakāra first; the gloss and the sūtras follow.
            </div>
          {:else}
            <div class="railcard">
              <div class="railhead">
                <span class="railform"><Sanskrit text={selWord.form} source="devanagari" /></span>
                {#if selWord.lemma}<span class="railstem">{selWord.lemma}</span>{/if}
              </div>

              {#if asking && selWord.quiz}
                <div class="railq">{selWord.quiz.q}</div>
                {#if selWord.quiz.phrase}
                  <!-- The form alone cannot settle the case, so the phrase that
                       does is shown. Reading the case off the sentence rather
                       than the ending is the skill being asked for. -->
                  <div class="railphrase">
                    <Sanskrit text={selWord.quiz.phrase} source="devanagari" />
                  </div>
                {/if}
                <div class="railopts">
                  {#each selWord.quiz.opts as o}
                    <button class="opt" onclick={() => pickOption(o)}>
                      <Sanskrit text={o} source="devanagari" />
                    </button>
                  {/each}
                </div>
                <button class="skip" onclick={() => pickOption('—')}>
                  I am not sure — show the answer
                </button>
              {/if}

              {#if answered}
                {#if verdict}
                  <div class="verdict" style="color:{verdict.ink}">{verdict.text}</div>
                {/if}
                <div class="railgloss">{selWord.gloss}</div>

                {#if selWord.terms.length}
                  <div class="railterms">
                    {#each selWord.terms as t}
                      <span class="term">
                        <span class="termdev"><Sanskrit text={t.term} source="devanagari" /></span>
                        <span class="termen">{t.en}</span>
                      </span>
                    {/each}
                  </div>
                {/if}

                {#if selWord.cites.length}
                  <div class="railcites">
                    {#each selWord.cites as c}
                      <button class="derivrow" onclick={() => goto('/ref/' + c.cite)}>
                        <span class="derivcite">{c.cite}</span>
                        <span class="derivrole">{c.role}</span>
                      </button>
                    {/each}
                  </div>
                {/if}

                <button class="bank" class:has={inDeck} onclick={bankWord} disabled={inDeck}>
                  {inDeck ? 'in your deck' : '+ keep for review'}
                </button>
              {/if}
            </div>
          {/if}

          <div class="railstats">
            <div>this session · {checked.size} {checked.size === 1 ? 'word' : 'words'} checked</div>
            <div>in your deck · {deckCount}</div>
          </div>
        </aside>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Old palette: white bg, #f97316 saffron, #4f46e5 indigo, #0f1419 ink,
     #e7e2d9 borders, #6b6b6b muted, #faf7f0 panel fill, #fde7c8 highlight. */
  .reader { max-width: 1240px; margin: 0 auto; color: #0f1419; }

  /* sticky reading-progress rail, just under the global SiteNav. The track is
     transparent (no stray rule at 0%); only the saffron fill shows progress. */
  .progress {
    position: sticky;
    top: 0;
    z-index: 10;
    height: 2px;
    background: transparent;
    pointer-events: none;
  }
  .progress .bar { height: 100%; background: #f97316; transition: width 0.35s ease; }

  .status {
    display: flex;
    justify-content: center;
    padding: 7rem 2rem;
    color: #94a3b8;
    font-family: ui-monospace, monospace;
    font-size: 0.82rem;
    letter-spacing: 0.06em;
  }

  .inner { padding: 1.8rem 0.25rem 5rem; }

  .titlerow {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1.4rem;
  }
  .bigtitle { font-size: 1.85rem; font-weight: 600; line-height: 1.1; }
  .bigsub { font-size: 1rem; color: #6b6b6b; font-style: italic; margin-top: 0.2rem; }
  /* Mode pills — the design's 999px pill, accent fill when active. */
  .modes { display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.5rem; }
  .modelabel {
    font-family: ui-monospace, monospace;
    font-size: 0.6rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-right: 0.2rem;
  }
  .modepill {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    border: 1px solid #e7e2d9;
    background: #fff;
    color: #6b6b6b;
    cursor: pointer;
  }
  .modepill.on { background: #fdecd9; border-color: #f4c98b; color: #92591f; }

  /* Rail card — #faf7f0 on #efe7d8 at 13px, per the design. */
  .railempty,
  .railcard {
    background: #faf7f0;
    border: 1px solid #efe7d8;
    border-radius: 13px;
  }
  .railempty { padding: 1.4rem 1.1rem; font-size: 0.92rem; color: #6b6b6b; font-style: italic; line-height: 1.5; }
  .railcard { padding: 1rem; }
  .railhead { display: flex; align-items: baseline; justify-content: space-between; gap: 0.5rem; }
  .railform { font-size: 1.5rem; color: #0f1419; }
  .railstem { font-family: ui-monospace, monospace; font-size: 0.7rem; color: #b08d57; }
  .railq { font-size: 0.85rem; color: #6b6b6b; font-style: italic; margin: 0.7rem 0 0.5rem; }
  .railphrase {
    font-size: 1.02rem;
    line-height: 1.5;
    color: #0f1419;
    background: #fff;
    border: 1px solid #efe7d8;
    border-radius: 8px;
    padding: 0.45rem 0.6rem;
    margin-bottom: 0.6rem;
  }
  .railopts { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .opt {
    font-size: 0.95rem;
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    border: 1px solid #e7e2d9;
    background: #fff;
    color: #0f1419;
    cursor: pointer;
  }
  .opt:hover { border-color: #cbb994; }
  .skip {
    font-family: ui-monospace, monospace;
    font-size: 0.66rem;
    margin-top: 0.7rem;
    background: none;
    border: none;
    color: #a99e8b;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
  }
  .verdict {
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    margin: 0.7rem 0 0.5rem;
  }
  .railgloss { font-size: 0.95rem; color: #463f33; font-style: italic; margin-bottom: 0.6rem; }
  .railcites { border-top: 1px solid #e7e2d9; padding-top: 0.7rem; margin-top: 0.2rem; }
  .bank {
    width: 100%;
    margin-top: 0.85rem;
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    padding: 0.42rem;
    border-radius: 9px;
    border: 1px solid #f4c98b;
    background: #fff;
    color: #92591f;
    cursor: pointer;
  }
  .bank.has { border-color: #e7e2d9; background: #f6f1e7; color: #a99e8b; cursor: default; }
  .railstats {
    margin-top: 1rem;
    font-family: ui-monospace, monospace;
    font-size: 0.66rem;
    color: #a99e8b;
    line-height: 1.7;
  }
  .tokform.sel { background: #fde7c8; border-radius: 5px; }

  .kbdhint {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    color: #94a3b8;
  }
  .kbdhint kbd {
    font-family: inherit;
    font-size: 0.7rem;
    line-height: 1;
    padding: 0.15rem 0.35rem;
    border: 1px solid #e7e2d9;
    border-bottom-width: 2px;
    border-radius: 4px;
    background: #fff;
    color: #6b6b6b;
  }
  .kbdhint kbd + kbd { margin-left: -0.1rem; }

  .grid { display: grid; grid-template-columns: 150px minmax(0, 1fr) 318px; gap: 2.6rem; align-items: start; }

  /* spine */
  .spine {
    position: sticky;
    top: 58px;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    max-height: calc(100vh - 110px);
    overflow: auto;
  }
  .spinelabel {
    font-size: 0.62rem;
    font-family: ui-monospace, monospace;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 0.7rem;
  }
  .spineitem {
    text-align: left;
    background: none;
    border: none;
    border-left: 2px solid #e7e2d9;
    padding: 0.32rem 0 0.32rem 0.65rem;
    cursor: pointer;
    display: block;
    transition: border-color 0.2s;
  }
  .spineitem.active { border-left-color: #f97316; }
  .spinedev { font-size: 0.96rem; line-height: 1.2; color: #6b6b6b; }
  .spinedev.active { color: #0f1419; }
  .spineen { font-size: 0.63rem; color: #a99e8b; line-height: 1.3; margin-top: 0.1rem; }

  /* body */
  .body { min-width: 0; }
  .chhead { margin: 1.8rem 0 0.4rem; scroll-margin-top: 66px; }
  .chkicker {
    font-size: 0.62rem;
    font-family: ui-monospace, monospace;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #cbb994;
    margin-bottom: 0.5rem;
  }
  .chdev { font-size: 1.6rem; color: #f97316; font-weight: 600; line-height: 1.1; }
  .chen { font-size: 0.98rem; color: #6b6b6b; font-style: italic; margin-top: 0.25rem; max-width: 34em; line-height: 1.4; }
  /* Returning to a chapter already opened: a quiet rule, not a second banner.
     The sequence braids topics by difficulty, so these recur often. */
  .chresume {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 1.5rem 0 0.3rem;
    scroll-margin-top: 66px;
  }
  .chresume::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e7e2da;
  }
  .chresumedev { font-size: 0.95rem; color: #b8b0a4; font-weight: 500; letter-spacing: 0.01em; }

  /* Paradigm grid. Cells are the point, so they get the type; the labels are
     scaffolding and stay quiet. Scrolls on its own axis so a wide paradigm
     never makes the page scroll sideways. */
  .pgrid {
    display: grid;
    grid-template-columns: auto repeat(var(--cols), minmax(5.5rem, 1fr));
    gap: 0.1rem 0.9rem;
    align-items: baseline;
    margin: 1.1rem 0 0.4rem;
    overflow-x: auto;
    padding-bottom: 0.2rem;
  }
  .pgcolhead,
  .pgrowhead {
    font-size: 0.78rem;
    color: #a89f92;
    font-weight: 500;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }
  .pgcolhead { padding-bottom: 0.35rem; border-bottom: 1px solid #ece3d3; margin-bottom: 0.35rem; }
  .pgcorner { border-bottom: 1px solid #ece3d3; margin-bottom: 0.35rem; }
  .pgrowhead { text-align: right; padding-right: 0.3rem; }
  .pgcell {
    font-size: 1.12rem;
    color: #2b2723;
    line-height: 1.85;
    white-space: nowrap;
  }

  .ex {
    padding: 1.7rem 0 1.7rem 1rem;
    margin-left: -1rem;
    border-top: 1px solid #ece3d3;
    border-left: 2px solid transparent;
    transition: border-color 0.15s;
  }
  /* A run of short readings at one tier is one lesson. Tighten the spacing and
     drop the full-width rule between them so the run reads as a block rather
     than as N separate cards; keep the rule that opens the run. */
  .ex.grouped { padding-top: 0.75rem; padding-bottom: 0.75rem; border-top-color: transparent; }
  .ex.grouped.runstart { padding-top: 1.7rem; border-top-color: #ece3d3; }
  .ex.grouped.runend { padding-bottom: 1.7rem; }
  /* the run's own hairline, indented so it reads as internal to the block */
  .ex.grouped:not(.runstart)::before {
    content: '';
    display: block;
    width: 2.2rem;
    height: 1px;
    background: #f0e9dc;
    margin: 0 0 0.75rem 0;
  }
  /* the reading whose machinery the rail is currently showing */
  .ex.active { border-left-color: #f3d9b8; }
  .exhead { display: flex; align-items: baseline; gap: 0.7rem; margin-bottom: 0.9rem; }
  .exindex { font-family: ui-monospace, monospace; font-size: 0.7rem; color: #cbb994; }
  .exteaches { font-family: ui-monospace, monospace; font-size: 0.7rem; color: #f97316; letter-spacing: 0.02em; line-height: 1.4; }

  .tokens { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 0.3rem 0.5rem; margin-bottom: 1.05rem; }
  .token { display: inline-flex; flex-direction: column; align-items: center; gap: 0.18rem; }
  .token .tokform {
    font-size: 2.05rem;
    font-weight: 500;
    color: #0f1419;
    border-radius: 5px;
    padding: 0 0.1em;
    line-height: 1.25;
    transition: background 0.15s;
    background: transparent;
  }
  .token.hot .tokform { background: #fde7c8; cursor: pointer; }
  /* focal (new) word: a faint underline marks it as the reading's point */
  .token.focal .tokform { border-bottom: 1px solid #f4c98b; border-radius: 0; cursor: help; }
  .token .tokgloss {
    font-size: 0.68rem; color: #a99e8b; font-style: italic;
    min-height: 0.8rem; line-height: 1.1;
    /* recall-first: glosses are hidden until revealed (focal-by-default or hover) */
    opacity: 0; transition: opacity 0.12s;
  }
  .token .tokgloss.reveal { opacity: 1; }
  /* known words invite a tap: subtle cursor cue */
  .token:not(.focal) .tokform { cursor: pointer; }

  .translation { font-size: 1.2rem; color: #463f33; line-height: 1.5; margin: 0 0 1.35rem; max-width: 34em; }

  /* identity tags — shown per word in the right rail (role · case · number) */
  .term {
    display: inline-flex;
    align-items: baseline;
    gap: 0.3rem;
    background: #fff;
    border: 1px solid #e7e2d9;
    border-radius: 999px;
    padding: 0.1rem 0.5rem;
  }
  .termdev { font-size: 0.86rem; color: #4f46e5; }
  .termen { font-size: 0.68rem; color: #6b6b6b; }

  .vyakhya { margin-top: 1.25rem; border-left: 2px solid #f97316; padding-left: 1.05rem; }
  .vydev { font-size: 1.15rem; color: #0f1419; line-height: 1.5; }
  .vyen { font-size: 1rem; color: #6b6b6b; line-height: 1.55; margin: 0.45rem 0 0; font-style: italic; max-width: 34em; }

  .pager { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 2rem; padding-top: 1.3rem; border-top: 1px solid #ece3d3; }
  .navbtn {
    font-family: ui-monospace, monospace;
    font-size: 0.74rem;
    padding: 0.4rem 0.95rem;
    border-radius: 999px;
    border: 1px solid #e7e2d9;
    background: #fff;
    cursor: pointer;
    color: #6b6b6b;
  }
  .navbtn:disabled { color: #d3cab8; cursor: default; }
  .range { font-family: ui-monospace, monospace; font-size: 0.72rem; color: #6b6b6b; }
  .tail { height: 30vh; }

  /* rail */
  .rail { position: sticky; top: 58px; }
  .raillabel {
    font-size: 0.62rem;
    font-family: ui-monospace, monospace;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 0.7rem;
  }
  .raillabel .accent { color: #f97316; }
  .railbox {
    background: #faf7f0;
    border: 1px solid #efe7d8;
    border-radius: 13px;
    padding: 0.95rem;
    max-height: calc(100vh - 130px);
    overflow: auto;
  }
  .railteaches {
    font-size: 0.74rem;
    color: #6b6b6b;
    font-style: italic;
    line-height: 1.5;
    margin-bottom: 0.85rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #e7e2d9;
  }
  .railword { border-radius: 9px; padding: 0.5rem 0.55rem; margin-bottom: 0.35rem; transition: background 0.15s; background: transparent; }
  .railword.hot { background: #fde7c8; }
  .railform { font-size: 1rem; color: #0f1419; margin-bottom: 0.3rem; }
  .railgloss { font-size: 0.76rem; color: #6b6b6b; font-style: italic; }
  .railterms { display: flex; flex-wrap: wrap; gap: 0.25rem 0.3rem; margin-bottom: 0.4rem; }
  .derivrow {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    padding: 0.13rem 0;
    align-items: baseline;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }
  .derivcite { font-family: ui-monospace, monospace; font-size: 0.73rem; color: #f97316; white-space: nowrap; }
  .derivrole { font-size: 0.76rem; color: #6b6b6b; line-height: 1.4; }
  .derivrow:hover .derivrole { color: #0f1419; }
  .derivtext { font-family: ui-monospace, monospace; font-size: 0.71rem; color: #a99e8b; padding: 0.1rem 0 0.1rem 0.25rem; }
  .noderiv { font-size: 0.73rem; color: #cbb994; font-style: italic; }

  @media (max-width: 980px) {
    .grid { grid-template-columns: 1fr; }
    .spine, .rail { position: static; max-height: none; }
    .rail { border-top: 1px solid #e7e2d9; padding-top: 1rem; }
  }
</style>
