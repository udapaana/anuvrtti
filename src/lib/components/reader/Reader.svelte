<script lang="ts">
  import { onMount, onDestroy, untrack } from 'svelte';
  import { dataUrl } from '$lib/dataUrl';
  import { goto } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import Disclose from '$lib/components/ui/Disclose.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Chip from '$lib/components/ui/Chip.svelte';
  import InlineMarkup from '$lib/components/InlineMarkup.svelte';
  import SystemCard from '$lib/components/SystemCard.svelte';
  import { lookupTerm, citesFor } from '$lib/jargon';
  import { scrollHint } from '$lib/actions/scrollHint';
  import { loadReaderProgress, saveReaderProgress, loadTextRead, saveTextRead } from '$lib/progress';
  import { systemForTerm, systemsForTerm } from '$lib/systems';
  import { KARAKA, VIBHAKTI, impliedTerms } from '$lib/usage/schema';
  import { wordBank } from '$lib/stores/wordBank';
  import { displayScript, authoringMode, romanAside } from '$lib/stores/preferences';
  import { transliterate } from '$lib/transliteration';
  import { isNarrow } from '$lib/stores/viewport';
  import { editModal } from '$lib/stores/editModal';
  // aliased: this route already has a `page` of its own (the reading list's)
  import { page as appPage } from '$app/stores';
  import SheetButton from '$lib/components/ui/SheetButton.svelte';
  import SaveControls from '$lib/components/reader/SaveControls.svelte';
  import { chapterToHtml, textToHtml, type ExportText } from '$lib/export';
  import {
    partAsChapter, partLabel, type TextMeta, type PartMeta, type TextPart, type TextExtra
  } from '$lib/reader/textAsReadings';

  import { paradigmIndex, resolve as resolveParadigm, PARADIGM_READING_IDS } from '$lib/reader/wordParadigm';
  import { questionsFor, drawQuestion, type Question } from '$lib/reader/quiz';
  import { decompose } from '$lib/reader/wordDecomp';
  import { deaccent } from '$lib/usage/normalize';
  // Graded reader: a chapter spine (left), interlinear gloss reading with
  // word-identity tags (centre), and a scroll-synced sūtra derivation rail
  // (right), all on the shared Shell. Paginated (PAGE per page) so it scales
  // past a few thousand readings. Colour comes from the tokens in app.css.
  /*
    A whole text reads through this same page. `text` names it — its id, and
    the path its pages live under — and the page loads that text's parts in
    place of the graded corpus (textAsReadings.ts maps a part into readings).
    Everything a graded reading has, a section has; what only a text has —
    its parts, the dictionary, the editor's notes, the save controls for a
    text — is drawn where `textMode` says so. Without `text` the page is the
    graded reader exactly as it was.
  */
  let { text = null }: { text?: { id: string; base: string } | null } = $props();
  // fixed for the component's life: the route remounts it per text ({#key})
  // svelte-ignore state_referenced_locally
  const textMode = !!text;
  /* a whole part is one page: its sections are read through, not paged */
  const PAGE = textMode ? Infinity : 20;

  type Reading = any;
  type Chapter = { id: string; title: string; attested?: boolean; textId?: string; readings: Reading[] };

  let chapters = $state<Chapter[]>([]);
  let sequence = $state<Reading[]>([]);
  let usage = $state<any>(null); // usage.json — carries per-word paradigms
  // whole texts (scripts/build-texts.ts): the shelf beside the chapters
  let texts = $state<{ id: string; title: string; title_en: string; sections: number }[]>([]);
  let error = $state('');
  let loaded = $state(false);

  let page = $state(0);
  let focusedId = $state<string | null>(null);
  let jumpQuery = $state('');

  // ── the design's reader model ──────────────────────────────────────────
  // Three reading modes, and a rail that shows ONE word at a time behind a
  // quiz gate: tap a word, name its विभक्ति or लकार, then the gloss, the tags
  // and the sūtras follow. The always-open list the rail used to show gave the
  // answer away before the reader had tried.
  // Two INDEPENDENT axes: `mode` is how much gloss shows (recall vs glossed);
  // `padaccheda` is whether words are split at their sandhi joins — off, a
  // reading from tier 80 up shows its saṃhitā; on, its padas. They compose —
  // you can have cheda WITH glosses — so padaccheda is its own toggle, not a
  // third mutually-exclusive mode.
  type Mode = 'recall' | 'marked' | 'gloss';
  let mode = $state<Mode>('recall');
  // On by default — a learner sees the padas first and turns the saṃhitā on —
  // and remembered, like the rail width.
  const PADACCHEDA_KEY = 'anuvrtti-padaccheda';
  let padaccheda = $state(!textMode);
  let sel = $state<{ id: string; ti: number } | null>(null);
  let pick = $state<string | null>(null);
  let checked = $state<Set<string>>(new Set());
  /*
    Recall hides each reading's translation until the reader asks for it:
    read the line first, then check. The switch existed and did nothing —
    `mode` was set and never read, and every translation was always shown,
    so the reader was never asked to read unaided before reaching the texts,
    which have none. Glossed shows them all, as before. A translation once
    opened stays open for the visit.
  */
  let revealed = $state<Set<string>>(new Set());
  /*
    A whole text's translation may open with who speaks: Hume's "[Death:]",
    Ganguli's "Vaisampayana said:". It is stage direction, not translation,
    so it is set apart as a label. Only a short first line in brackets or
    ending in a colon counts, and only in a whole text.
  */
  function splitSpeaker(t: string): { who: string; said: string } {
    const nl = t.indexOf('\n');
    if (!textMode || nl < 0) return { who: '', said: t };
    const first = t.slice(0, nl).trim();
    const m = first.match(/^\[(.{1,60})\]$/) ?? first.match(/^([^.?!]{1,60}):$/);
    return m ? { who: m[1].replace(/:$/, ''), said: t.slice(nl + 1) } : { who: '', said: t };
  }
  function toggleReveal(id: string) {
    const next = new Set(revealed);
    if (next.has(id)) next.delete(id); else next.add(id);
    revealed = next;
  }
  /* a modernized translation's original, shown on request, per section */
  let originalShown = $state<Set<string>>(new Set());
  /*
    A whole text in glossed mode reads interlinear: each word's meaning under
    it, the same gloss the pane shows. The translation then waits behind the
    eye in the verse's corner, as it does in recall.
  */
  const interlinear = $derived(textMode && mode === 'gloss');
  const marked = $derived(mode === 'marked');
  const MARK_TITLE = (m: Mark) => (!m ? '' : m.k === 'verb' ? 'finite verb' : m.k === 'voc' ? 'सम्बोधन (address)' : `${m.name} (${m.n})`);
  /* is the translation open? A whole text's only when asked; a graded
     reading's always in glossed mode, as before */
  const trOpen = (row: any) => (textMode ? revealed.has(row.id) : mode === 'gloss' || revealed.has(row.id)) || !row.translation;
  function toggleOriginal(id: string) {
    const next = new Set(originalShown);
    if (next.has(id)) next.delete(id); else next.add(id);
    originalShown = next;
  }
  let hoverEx = $state<string | null>(null);
  let hoverWi = $state<number | null>(null);

  // SEEN — every reading whose card has scrolled ABOVE the fold: you read it and
  // moved on. This is the quiz deck: the quiz draws a random word from any seen
  // reading, NOT the word you just clicked (which you already know). "Seen" is
  // defined by the scroll itself — no card-compression, no forced single-card.
  let seen = $state<Set<string>>(new Set());
  // A quiz drawn from the seen deck: {id, wi} of a random word, or null.
  /* The drawn card: which word, and the question built for this showing. */
  let deckQuiz = $state<{ id: string; wi: number; q: Question } | null>(null);

  let io: IntersectionObserver | null = null;
  let vis = new Map<string, number>();

  // ── a whole text ───────────────────────────────────────────────────────
  let tMeta = $state<TextMeta | null>(null);
  let tPart = $state<TextPart | null>(null);
  let partIdx = $state(0);
  let others = $state<{ id: string; title: string; title_en: string }[]>([]);
  const T_PADACCHEDA_KEY = 'anuvrtti:text-padaccheda';
  const progressKey = (tid: string) => `anuvrtti:text-progress:${tid}`;
  const tBase = (tid: string) => `/data/texts/${tid}`;
  const partUrl = (tid: string, p: PartMeta) => `${tBase(tid)}/${p.file}`;
  /* A text merged into another keeps its address: it opens its new home at the
     part it became. */
  const RETIRED: Record<string, { to: string; part: string }> = {
    'pancatantra-kilotpatin': { to: 'pancatantra', part: '1.1' }
  };
  async function fetchPart(p: PartMeta): Promise<TextPart> {
    const r = await fetch(dataUrl(partUrl(text!.id, p)));
    if (!r.ok) throw new Error(`no part “${p.id}” of “${text!.id}”`);
    return r.json();
  }
  /** Open a part at a section (by its index in the part), and select its first word. */
  async function openPart(i: number, at = 0) {
    const p = tMeta!.parts[i];
    const data = await fetchPart(p);
    const mapped = partAsChapter(tMeta!, p, data);
    tokenCache.clear();
    sel = null;
    deckQuiz = null;
    pick = null;
    // the line opened on counts as read, so the quiz has a deck at once (as
    // the graded reader marks its first line)
    // and what of it was read before (src/lib/progress.ts), so the section
    // list shows it and the quiz has the deck it had
    const before = loadTextRead(text!.id);
    seen = new Set([
      ...mapped.readings.map((r: any) => r.id).filter((id: string) => before.has(id)),
      ...([mapped.readings[Math.max(0, Math.min(at, mapped.readings.length - 1))]?.id].filter(Boolean) as string[])
    ]);
    page = 0;
    partIdx = i;
    tPart = data;
    usage = mapped.usage;
    chapters = [mapped.chapter];
    sequence = mapped.readings;
    const target = mapped.readings[Math.max(0, Math.min(at, mapped.readings.length - 1))];
    focusedId = target?.id ?? null;
    saveProgress();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (target && at > 0) {
        const el = document.querySelector('[data-ex-id="' + target.id + '"]') as HTMLElement | null;
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - ANCHOR });
      } else window.scrollTo({ top: 0 });
      observe();
      if (target) {
        // the first inflected pada, not a bare compound member
        const toks = tokensOf(target).filter((t: any) => t.isWord);
        const first = toks.find((t: any) => !String(t.text).endsWith('-')) ?? toks[0];
        if (first) selectToken(target.id, first.ti);
        focusedId = target.id;
      }
    }));
  }
  function saveProgress() {
    if (!text || !tMeta) return;
    const s = Math.max(0, list.findIndex((r) => r.id === (hereId ?? focusedId)));
    try { localStorage.setItem(progressKey(text.id), JSON.stringify({ part: tMeta.parts[partIdx]?.id, s })); } catch { /* session only */ }
  }
  // where the reader is, kept as they go
  /*
    Where you are: the reading you were LAST on, by whichever came last — a
    word tapped in it, or scrolling it into focus. Not the furthest: tap
    verse 12, scroll back to verse 5, and you are at 5. Each effect below
    watches one of the two, so the later change is the one that holds.
  */
  let hereId = $state<string | null>(null);
  $effect(() => {
    const f = focusedId;
    if (f) untrack(() => (hereId = f));
  });
  $effect(() => {
    const t = sel?.id;
    if (t) untrack(() => (hereId = t));
  });
  $effect(() => {
    hereId;
    if (textMode && tPart) untrack(saveProgress);
  });
  /*
    A reading you have been on — focused, or a word in it tapped — counts as
    read, not only one scrolled off the top. Pages are one chapter's run, often six or seven cards that never
    leave the screen, so "scrolled past" alone left most readings unread
    however long you spent on them.
  */
  $effect(() => {
    const ids = [focusedId, sel?.id].filter(Boolean) as string[];
    if (!loaded || !ids.length) return;
    untrack(() => {
      if (ids.every((id) => seen.has(id))) return;
      seen = new Set([...seen, ...ids]);
    });
  });
  // a text's read sections, added to its record as they are read
  $effect(() => {
    const read = seen;
    if (!textMode || !text || !tPart) return;
    saveTextRead(text.id, read);
  });
  // the graded reader's place and what has been read
  $effect(() => {
    const at = hereId;
    const read = seen;
    if (textMode || !loaded || !at) return;
    saveReaderProgress(at, read);
  });
  async function loadText(id: string) {
    const gone = RETIRED[id];
    // a full load: the same page component would be reused for the new id
    // without running this again
    if (gone) { location.replace(`${text!.base}/${gone.to}?part=${encodeURIComponent(gone.part)}`); return; }
    const [m, idx] = await Promise.all([
      fetch(dataUrl(`${tBase(id)}/index.json`)).then((r) => { if (!r.ok) throw new Error(`no text “${id}”`); return r.json(); }),
      fetch(dataUrl('/data/texts/index.json')).then((r) => (r.ok ? r.json() : []))
    ]);
    tMeta = m;
    others = idx;
    // back to where the reader left off: a part and a section in it (an
    // older bare number is a section of the whole text)
    let at = { part: m.parts[0].id as string, s: 0 };
    try {
      const v = localStorage.getItem(progressKey(id));
      if (v) at = /^\d+$/.test(v) ? { part: m.parts[0].id, s: Number(v) } : { ...at, ...JSON.parse(v) };
    } catch { /* none */ }
    // ?part=… names a part to open at its start (a link, or a retired text)
    const asked = $appPage.url.searchParams.get('part');
    if (asked && m.parts.some((p: PartMeta) => p.id === asked)) at = { part: asked, s: 0 };
    // …and ?section=… a section in it (a word kept in the deck links back here)
    const askedSec = $appPage.url.searchParams.get('section');
    const inPart = m.parts.find((p: PartMeta) => p.id === at.part);
    if (asked && askedSec && inPart) at.s = Math.max(0, inPart.sections.indexOf(askedSec));
    loaded = true;
    await openPart(Math.max(0, m.parts.findIndex((p: PartMeta) => p.id === at.part)), at.s);
  }
  /* the downloads: the whole text (every part), this part, this section */
  async function wholeText(): Promise<ExportText> {
    const parts = await Promise.all(tMeta!.parts.map(fetchPart));
    return { ...(tMeta as any), sections: parts.flatMap((x) => x.sections) } as ExportText;
  }
  const slugOf = (s: string) => s.replace(/[^A-Za-z0-9._-]/g, '_');
  const tPartMeta = $derived(tMeta ? tMeta.parts[partIdx] : null);

  onMount(async () => {
    if (text) {
      try {
        await loadText(text.id);
      } catch (e) {
        error = String((e as Error).message || e);
      }
      window.addEventListener('keydown', onKeydown);
      window.addEventListener('scroll', onScroll, { passive: true });
      return;
    }
    try {
      const res = await fetch(dataUrl('/data/readings.json'));
      if (!res.ok) throw new Error('could not load readings (' + res.status + ')');
      const data = await res.json();
      chapters = data.chapters ?? [];
      sequence = data.sequence ?? [];
      // usage.json carries the per-word paradigms (all cells, from vidyut) that
      // the rail's table needs. Best-effort: no table if it fails to load.
      try { usage = await (await fetch(dataUrl('/data/usage.json'))).json(); } catch { usage = null; }
      try {
        texts = await (await fetch(dataUrl('/data/texts/index.json'))).json();
      } catch { texts = []; }
      loaded = true;
      focusedId = sequence[0]?.id ?? null;
      requestAnimationFrame(observe);
      // ?reading=ex191 — how प्रयोग sends the reader to the line that attests a
      // cell. Runs after the corpus is in hand, since the page a reading sits
      // on depends on the content boundaries computed from it.
      const want = new URLSearchParams(location.search).get('reading');
      // Back where you were: the reading you were on, and every reading you
      // had scrolled past (src/lib/progress.ts) — which is also the quiz's
      // deck, so it does not start empty on every visit.
      const saved = loadReaderProgress();
      const ids = new Set(list.map((r) => r.id));
      const kept = saved.read.filter((id) => ids.has(id));
      if (kept.length) seen = new Set(kept);
      if (want) requestAnimationFrame(() => jumpToReading(want));
      else if (saved.at && ids.has(saved.at)) {
        const at = saved.at;
        requestAnimationFrame(() => {
          jumpToReading(at);
          const r = list.find((x) => x.id === at);
          const tis = r ? wordTis(r) : [];
          if (r && tis.length) selectToken(r.id, tis[0]);
        });
      }
      // Open on the first word of the first line. Without a selection, ↑↓ only
      // scrolls (it never selects), so the rail and the quiz stayed empty until
      // the reader clicked a word — "read a line first" with no way in. Marking
      // that first line read gives the quiz a deck to draw from at once. A
      // ?reading= deep-link wins, so only do this when there is none.
      else requestAnimationFrame(() => {
        const r0 = list[0];
        if (!r0) return;
        const tis = wordTis(r0);
        if (tis.length) selectToken(r0.id, tis[0]);
        seen = new Set([...seen, r0.id]);
      });
    } catch (e) {
      error = String((e as Error).message || e);
    }
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('scroll', onScroll, { passive: true });
  });
  onDestroy(() => {
    io?.disconnect();
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('scroll', onScroll);
    }
  });

  // Throttle markSeen to scroll — cheap, and catches fast scrolls the observer's
  // shrunk region misses. scrollTick is a reactive counter bumped on every scroll
  // frame; the $effect below watches it so `seen` updates inside Svelte's reactive
  // system (a plain listener reassigning $state proved not to propagate here).
  let seenRaf = 0;
  let scrollTick = $state(0);
  function onScroll() {
    if (seenRaf) return;
    seenRaf = requestAnimationFrame(() => { seenRaf = 0; scrollTick++; });
  }
  $effect(() => {
    scrollTick; // dependency
    markSeen();
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

  /*
    "Chapters" (graded grammar, pedagogical order) and "sources" (a handful of
    verses picked from a real text, annotated like any reading) used to sit in
    one undifferentiated list, with nothing saying which was which. Worse: a
    source with a whole-text twin — the Kaṭha, the one Pañcatantra tale —
    appeared a SECOND time on an unrelated "texts" shelf below, with no link
    between the two faces of the same work.
    One place per source instead: its excerpt stays a normal chapter entry,
    and where a full text exists (chapterMeta().textId, build-readings.ts),
    the same entry also carries a "read it all" link straight to it. A whole
    text with no excerpt chapter of its own (the Vetāla) still needs a way in,
    so it gets a source entry too — just one that opens the text directly.
  */
  const gradedChapters = $derived(chapters.filter((c) => !c.attested));
  const sourceChapters = $derived(chapters.filter((c) => c.attested));
  const sourceItems = $derived.by(() => {
    const fromChapters = sourceChapters.map((c) => {
      const t = titles[c.id] ?? { dev: c.id, en: '' };
      const text = c.textId ? texts.find((x) => x.id === c.textId) : undefined;
      return {
        id: c.id,
        label: t.dev,
        script: 'devanagari' as const,
        sub: shortEn(t.en),
        extra: text ? { label: `read it all · ${text.sections}`, href: `/reader/text/${text.id}` } : undefined
      };
    });
    // A whole text with no excerpt chapter is not listed here: the works live
    // under the "texts" door (/texts). The reader holds the excerpts — passages
    // chosen for their level — each linked to its whole text by "read it all".
    return fromChapters;
  });

  // ── the reading list (graded order), paginated. The chapter spine is the only
  //    table of contents; readings stay in their authored difficulty sequence. ──
  // The four paradigm readings (देव, फल, नदी, भू) are tables, not readings, and
  // no longer appear as cards in the main column — their tables now open in the
  // rail when a word of that class is clicked. Build the table index from the
  // FULL sequence first (so the tables survive), then drop those ids from the
  // reading list so they neither render as cards nor take a slot in paging.
  const paradigms = $derived(paradigmIndex(usage));
  const paradigmIds = new Set(PARADIGM_READING_IDS);
  const list = $derived(sequence.filter((r) => !paradigmIds.has(r.id)).map((r) => ({ ...r })));
  /** Of each chapter's readings, how many have been read — for the spine. */
  const chapterRead = $derived.by(() => {
    const m: Record<string, { read: number; total: number }> = {};
    for (const r of list) {
      const c = (m[r.chapter] ??= { read: 0, total: 0 });
      c.total++;
      if (seen.has(r.id)) c.read++;
    }
    return m;
  });
  // ── page boundaries: one chapter per page, never several bundled together ──
  //
  // Fixed 20-reading slices used to cut across a sequence ordered by
  // difficulty, so a page could hold readings from several different chapters
  // at once — clicking a chapter in the spine landed you on "page 4 of 14"
  // alongside bits of its neighbours, not inside the chapter itself. Late in
  // the corpus that was severe: pāṭhāḥ spans 37 tiers (210-570) and kathā
  // spans 160-460, so past tier 220 they braid one reading at a time. Page 10
  // held THIRTEEN chapter switches across 20 readings.
  //
  // So a page is now exactly one chapter's run — never two chapters sharing a
  // page. A run longer than PAGE still splits into PAGE-sized pages of its
  // own chapter, so one page never grows unbounded; a run of 1 still gets a
  // page to itself. Pages come out uneven, which is correct — they follow the
  // material, and "page" now means "chapter," the thing the spine names.
  const bounds = $derived.by(() => {
    const runs: { start: number; len: number; chapter: string }[] = [];
    for (let i = 0; i < list.length; i++) {
      const prev = runs[runs.length - 1];
      if (prev && list[i].chapter === prev.chapter) prev.len++;
      else runs.push({ start: i, len: 1, chapter: list[i].chapter });
    }
    const out: { start: number; end: number; chapter: string }[] = [];
    for (const run of runs) {
      const end = run.start + run.len;
      for (let s = run.start; s < end; s += PAGE) {
        out.push({ start: s, end: Math.min(s + PAGE, end), chapter: run.chapter });
      }
    }
    return out.length ? out : [{ start: 0, end: list.length, chapter: list[0]?.chapter ?? '' }];
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
  /*
    ONE tokenizer, shared by the rendered card and by the selection layer.

    It used to live inside processEx, which only runs for readings on the
    current page, so nothing else could ask "which word is token 7 of ex181?".
    Selection needs exactly that: a token, not a word — see below.
  */
  const tokenCache = new Map<string, any[]>();
  function tokensOf(r: Reading): any[] {
    const hit = tokenCache.get(r.id);
    if (hit) return hit;
    // a text's section comes with its tokens built (textAsReadings.ts)
    if (r.tokens) {
      // …and its marks are read here, from each pada's tags
      const ws = r.words || [];
      const toks = r.tokens.map((t: any) => ({ ...t, mark: t.isWord && !String(t.text).endsWith('-') ? markOf(ws[t.wi]) : null }));
      tokenCache.set(r.id, toks);
      return toks;
    }

    // Normalise anusvāra when indexing: the corpus writes both ग्रामं and
    // ग्रामम् for the same word, and an unnormalised lookup silently drops the
    // gloss (the token just renders bare). Affected 12 readings.
    const anusvara = (s2: string) => s2.replace(/ं$/, 'म्');
    const wordsRaw = r.words || [];
    const formIndex: Record<string, number> = {};
    wordsRaw.forEach((w: any, wi: number) => {
      const k = anusvara(w.form);
      if (!(k in formIndex)) formIndex[k] = wi;
    });

    /*
      Tokens take their word BY POSITION, walking words[] in order, rather than
      looking the surface form up. Keyed by text, every occurrence of a repeated
      word resolved to the first one: both बालः in ex181 lit together, shared a
      gloss, and word-stepping landed on the same index twice. 59 of the 274
      readings repeat a form, so this was a fifth of the corpus.

      The dictionary stays as a fallback, because the corpus annotates a
      repeated form ONCE — ex181 has 37 tokens against 29 word entries — so the
      second occurrence has no word of its own to point at. It borrows the
      annotation without consuming the cursor. That is why selection cannot be
      keyed on the word index either: see `sel`, which holds a token index.
    */
    let cursor = 0;
    const out = String(r.sentence ?? '')
      .replace(/॥/g, ' ॥ ')
      .replace(/।/g, ' । ')
      .split(/\s+/)
      .filter(Boolean)
      .map((tx: string, ti: number) => {
        // Strip trailing punctuation before matching against the gloss table.
        // Prose passages (kind:sangraha, katha) use commas inside a sentence,
        // and a token like "क्रुध्यति," would otherwise miss its gloss and
        // render bare — the failure is silent, so it must be handled here.
        const clean = anusvara(tx.replace(/[।॥,;—"“”?!]/g, '').trim());
        let wi = -1;
        if (clean) {
          for (let k = cursor; k < wordsRaw.length; k++) {
            if (anusvara(wordsRaw[k].form) === clean) {
              wi = k;
              cursor = k + 1;
              break;
            }
          }
          if (wi < 0 && clean in formIndex) wi = formIndex[clean];
        }
        // A word is FOCAL (the reading's new/derived word) when it carries a sūtra
        // citation. Focal words show their gloss by default; KNOWN words collapse
        // to bare Devanagari and reveal on hover — so the reader can try to recall.
        const focal = wi >= 0 && (wordsRaw[wi].notes || []).some((nt: any) => nt.cite);
        // padaccheda: the pre-sandhi split (देवोऽत्र → देवः + अत्र), when authored.
        const split = wi >= 0 ? (wordsRaw[wi].split ?? null) : null;
        // a compound's inner member (written with a trailing hyphen) takes no mark
        const mark = wi >= 0 && !tx.trim().endsWith('-') ? markOf(wordsRaw[wi]) : null;
        return { ti, text: tx, wi, gloss: wi >= 0 ? wordsRaw[wi].gloss || '' : '', isWord: wi >= 0, focal, split, mark };
      });
    /*
      A Ṛgveda verse is stored as its saṃhitā (पूर्वे॑भि॒र्ऋषि॑भि॒रीड्यो॒) and its
      words as the pada-pāṭha (पूर्वे॑भिः ऋषि॑ऽभिः ईड्यः॑), and these readings
      are frozen, so no saṃhitā was ever built from the padas to match them:
      split at spaces, a joined word finds no pada, and 157 words in 28
      verses could not be tapped (rd012 and rd017 not one). When an accented
      verse's words mostly go unmatched, the line is its pada-pāṭha instead —
      the way the Veda is learned word by word — and the saṃhitā is shown
      beneath it as written (`vedicSamhita`).
    */
    const matched = new Set(out.filter((t) => t.wi >= 0).map((t) => t.wi)).size;
    if (/[॒॑]/.test(String(r.sentence ?? '')) && wordsRaw.length && matched < wordsRaw.length * 0.6) {
      const padas = wordsRaw.map((w: any, wi: number) => ({
        ti: wi, text: w.form, wi, gloss: w.gloss || '', isWord: true,
        focal: (w.notes || []).some((nt: any) => nt.cite), split: null, mark: markOf(w)
      }));
      padas.push({ ti: padas.length, text: '॥', wi: -1, gloss: '', isWord: false, focal: false, split: null, mark: null });
      vedicSamhita.add(r.id);
      tokenCache.set(r.id, padas);
      return padas;
    }
    tokenCache.set(r.id, out);
    return out;
  }
  /** **bold** and *italic* in an explanation, as runs to set in their weight */
  function emphasis(text: string): { t: string; b?: boolean; i?: boolean }[] {
    const out: { t: string; b?: boolean; i?: boolean }[] = [];
    const re = /\*\*([^*]+)\*\*|\*([^*\s][^*]*?)\*/g;
    let at = 0;
    for (const m of text.matchAll(re)) {
      if (m.index! > at) out.push({ t: text.slice(at, m.index) });
      out.push(m[1] != null ? { t: m[1], b: true } : { t: m[2], i: true });
      at = m.index! + m[0].length;
    }
    if (at < text.length) out.push({ t: text.slice(at) });
    return out;
  }
  /*
    Marked mode: a small sign over each word for what it does in the sentence,
    and nothing else. A case ending shows its number as dots (Sanskrit numbers
    its cases: prathamā one, dvitīyā two … saptamī seven), address a ring, a
    finite verb a bar. An indeclinable, a gerund, a compound's inner member
    has none. The reader sees subject, object and verb at a glance and still
    has to find the meanings.
  */
  type Mark = { k: 'case'; n: number; name: string } | { k: 'voc' } | { k: 'verb' } | null;
  const CASES = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी'];
  function markOf(w: any): Mark {
    if (!w) return null;
    const tags = new Set<string>([...((w.notes ?? []).map((n: any) => n.term)), ...Object.values(w.derived ?? {}).map(String)]);
    if (tags.has('प्रथमपुरुष') || tags.has('मध्यमपुरुष') || tags.has('उत्तमपुरुष')) return { k: 'verb' };
    if (tags.has('सम्बोधन')) return { k: 'voc' };
    const n = CASES.findIndex((c) => tags.has(c));
    return n >= 0 ? { k: 'case', n: n + 1, name: CASES[n] } : null;
  }
  /** a written word of several padas: its verb if it has one, else its last case */
  function markOfParts(parts: any[]): Mark {
    const ms = parts.map((t) => t.mark).filter(Boolean) as Exclude<Mark, null>[];
    return ms.find((m) => m.k === 'verb') ?? ms[ms.length - 1] ?? null;
  }
  /** readings shown as pada-pāṭha, whose saṃhitā goes beneath the line */
  const vedicSamhita = new Set<string>();

  // ── interlinear token + word identity processing (matches design) ───────────
  function processEx(r: Reading, n: number) {
    const id = r.id;
    const words = (r.words || []).map((w: any, wi: number) => {
      const terms = (w.notes || []).filter((nt: any) => nt.term).map((nt: any) => ({ term: nt.term, en: nt.en || '' }));
      return { wi, form: w.form, gloss: w.gloss || '', terms };
    });

    const tokens = tokensOf(r);

    /*
      The saṃhitā — the sentence as it is written, sandhi applied — built by
      the corpus build from the padas (scripts/lib/sandhi.ts). Each written
      word knows the pada tokens it came from, so selecting inside सोऽपि still
      lands on सः or अपि. Shown from the sandhi chapter (tier 80) up; below it
      the reader has not met sandhi, and sees the padas.
    */
    const SANDHI_TIER = 80;
    const written =
      r.samhita && Number(r.segment ?? 0) >= SANDHI_TIER
        ? r.samhita.map((g: any) => {
            const parts = g.from.map((i: number) => tokens[i]).filter(Boolean);
            const word = parts.find((t: any) => t.isWord);
            return {
              text: g.text,
              from: g.from,
              // a text names the pada a tap on the written word opens (textAsReadings.ts)
              ti: g.ti ?? (word ? word.ti : g.from[0]),
              isWord: !!word,
              br: !!g.br,
              focal: parts.some((t: any) => t.focal),
              mark: markOfParts(parts),
              gloss: parts.filter((t: any) => t.isWord).map((t: any) => t.gloss).filter(Boolean).join(' · ')
            };
          })
        : null;

    return {
      ex: true,
      written,
      id,
      chId: r.chapter,
      indexLabel: r.label ?? String(n).padStart(2, '0'),
      verse: r.kind === 'verse',
      teaches: r.teaches || '',
      tokens,
      words,
      translation: r.translation || '',
      translationOriginal: r.translationOriginal || '',
      translationWith: (r as any).translationWith || '',
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
    // A SELECTION wins over the scroll. focusedId is recomputed from whatever
    // the observer sees while a smooth scroll is still running, so stepping with
    // the arrows left the marker a card behind the word actually selected. If a
    // word is selected, the line you are on is that word's line, full stop.
    const id = sel?.id ?? focusedId ?? slice[0]?.id;
    return list.find((r) => r.id === id) ?? slice[0] ?? null;
  });

  /*
    Two INDEPENDENT things can be open in the rail at once, so both are read
    through the same lookup:

      `sel`      — the word you clicked. The grammar block, for the line you
                   are on. Always shown in full; a click is inspection.
      `deckQuiz` — a card drawn from a reading you have already scrolled past.
                   Its own block, BELOW the grammar.

    Drawing a card used to overwrite `sel`, which is why the grammar vanished
    the moment a question appeared and came back only once you had answered.
    Keeping them apart means the line you are reading stays explained while you
    are quizzed — and because the card comes from a DIFFERENT reading, nothing
    on screen gives its answer away.
  */
  function wordAt(id: string, wi: number) {
    const r = list.find((x) => x.id === id);
    const w = r?.words?.[wi];
    if (!r || !w) return null;
    const terms = (w.notes ?? []).filter((n: any) => n.term).map((n: any) => ({ term: n.term, en: n.en ?? '' }));
    /*
      DERIVED values are grammar too.

      `terms` is what a human wrote in the YAML. `derived` is what the build
      worked out from the form with vidyut — पुरुष, वचन, पद, गण and the rest.
      गच्छति is authored as गम् · धातु · शप् · लट् · तिप् and derived as
      प्रथमपुरुष · एकवचन · परस्मैपद · भ्वादि: nine facts, of which the rail
      showed five, because only `terms` ever became chips.

      That is 3998 facts across 2058 words — 77% of the corpus — known to the
      app and invisible in it. They join the tag row now, kept separate so they
      can be drawn as what they are: worked out, not written down.
    */
    const authored = new Set(terms.map((t: any) => t.term));
    const derivedTerms = Object.entries(w.derived ?? {})
      .filter(([, v]) => v && !authored.has(v as string))
      .map(([dim, v]) => ({ term: v as string, en: `${dim} — worked out from the form`, dim }));
    const cites = (w.notes ?? []).filter((n: any) => n.cite).map((n: any) => ({ cite: n.cite, role: n.role ?? '' }));
    return { id: r.id, wi, form: w.form, lemma: w.lemma ?? '', gloss: w.gloss ?? '', quizzes: (w.quizzes ?? []) as any[], terms, derivedTerms, cites, notes: w.notes ?? [], derived: w.derived ?? {}, sentence: r.sentence ?? '', translation: r.translation ?? '',
      // a text's word: its own table and what the rail shows of it beyond this
      paradigm: (w.paradigm ?? null) as any, text: (w.text ?? null) as TextExtra | null };
  }

  /**
   * The clicked TOKEN, resolved to the word it points at.
   *
   * Selection is a position in the sentence, not a word: a repeated form has
   * only one entry in words[], so two occurrences of बालः share an annotation
   * but must still be two separate things to click. `ti` is the identity; `wi`
   * is where the annotation is read from.
   */
  function tokenAt(id: string, ti: number) {
    const r = list.find((x) => x.id === id);
    if (!r) return null;
    const t = tokensOf(r)[ti];
    if (!t || t.wi < 0) return null;
    const w = wordAt(id, t.wi);
    return w ? { ...w, ti } : null;
  }

  /** The clicked word — the grammar block. */
  const selWord = $derived(sel ? tokenAt(sel.id, sel.ti) : null);

  /*
    When the selection lands inside a word saṃhitā fused with its neighbour —
    देवोऽत्र is देवः + अत्र, written as one run — this is that written group.
    The rail reads it for its "in this word" chips, one per pada, each
    selectable. The line keeps the word as written: rewriting it in place as
    padas joined by pluses was rejected, and the chips are that breakdown.
  */
  const selFused = $derived.by(() => {
    if (!sel) return null;
    const r = rows.find((x: any) => x.id === sel.id);
    const w = r?.written?.find((g: any) => g.from.length > 1 && g.from.includes(sel!.ti));
    return w ?? null;
  });

  /*
    The file the selected word is annotated in.

    Every annotation the rail shows — the कारक, the विभक्ति, the gloss — is
    authored in one YAML file, and until now the reader was the one place you
    could see a wrong tag and not fix it: the edit control was wired on
    /ref/[id] and /workbook/[lessonId] only. build-readings stamps each reading
    with its source path (`content/readings/06_readings/rd088.yaml`), because
    the payload knows its chapter as a slug and cannot reconstruct the
    directory. A suggestion against that path is a pull request against the
    annotation itself, not against a build artefact that the next build erases.
  */
  const selFile = $derived.by(() => {
    if (!sel) return undefined;
    return (list.find((x) => x.id === sel.id) as any)?.file as string | undefined;
  });

  // The shelf's authoring control follows the selection, so "edit" always means
  // the reading in front of you.
  $effect(() => {
    editModal.setPageContext(selFile);
    return () => editModal.setPageContext(undefined);
  });

  function editThisReading() {
    if (!selFile) return;
    /*
      The editor only mounts for a signed-in user — +layout.svelte gates it on
      `!!user && $authoringMode` — so for everyone else this button did nothing
      at all, which is worse than not offering it. A reader who has just spotted
      a wrong tag is exactly the person worth asking to sign in, and signing in
      costs them nothing: the OAuth scope is `read:user`, and the pull request
      is opened by a service account on their behalf. They come back to the
      reading they were on.
    */
    if (!$appPage.data.user) {
      goto('/auth?returnTo=' + encodeURIComponent($appPage.url.pathname + $appPage.url.search));
      return;
    }
    // Opening the editor turns the mode on, the way the sūtra page does.
    authoringMode.set(true);
    editModal.open(selFile);
  }

  // A tapped term chip opens its concept card: the glossary explains what the
  // tag MEANS and how to recognise it, so the quiz question has an answer the
  // reader can reason to. Reset when the selected word changes.
  let openTerm = $state<string | null>(null);
  $effect(() => { sel; openTerm = null; });
  const termInfo = $derived(openTerm ? lookupTerm(openTerm) : null);
  const termCites = $derived(openTerm ? citesFor(openTerm) : null);
  /*
    What the author wrote about THIS tag on THIS word — "शी is आत्मनेपदी, the
    ending is ते, not ति". 4,582 such notes were authored and none was shown:
    the tag opened only the glossary's general entry. The word's note comes
    first; the glossary follows it. A bare restatement of the tag (लट् →
    "present") adds nothing to the glossary and is not repeated.
  */
  const termNote = $derived.by(() => {
    if (!openTerm || !selWord) return '';
    const en = ((selWord.terms ?? []) as any[]).find((t) => t.term === openTerm)?.en ?? '';
    return en.split(/\s+/).length > 2 ? en : '';
  });

  // Which cells of a system the learner has met — every tag carried by a word in
  // a reading already read. The system card under a concept card lights these, so
  // the shape fills in as the reader moves: "7 of 10 lakāras met" made visible.
  const metTerms = $derived.by(() => {
    const s = new Set<string>();
    for (const r of list) {
      if (!seen.has(r.id)) continue;
      for (const w of r.words ?? []) for (const n of w.notes ?? []) if (n.term) s.add(n.term);
    }
    return s;
  });
  /*
    The system the open term belongs to ON THIS WORD.

    A tag is not the property of one word class: वचन is an axis of both सुप् and
    तिङ्, so the selected word's OTHER tags are what say which table you are
    looking at. Without them, पादाभ्याम् — करण · तृतीया · द्विवचन, a noun — opened
    the verb's card, because तिङ् is declared first and also has a वचन axis.
  */
  const selTermNames = $derived([
    ...((selWord?.terms ?? []) as any[]).map((t) => t.term),
    ...Object.values(selWord?.derived ?? {})
  ] as string[]);

  /*
    Values the word carries by CONVENTION rather than by annotation — see
    `impliedTerms`. Kept apart from the authored ones so the card can mark them
    as defaults instead of passing them off as something the corpus states.
  */
  const selImplied = $derived(impliedTerms(selTermNames));

  // Tapping "also in …" pins the other system, for a tag the word's own tags
  // cannot settle or when you want to see the shared axis from the other side.
  let systemPin = $state<string | null>(null);
  $effect(() => { openTerm; systemPin = null; });

  /** Every system this tag belongs to — one for most, two for the वचन values. */
  const openSystems = $derived(termInfo ? systemsForTerm(termInfo.term) : []);
  const openSystem = $derived.by(() => {
    if (!termInfo) return undefined;
    if (systemPin) return openSystems.find((s) => s.id === systemPin);
    return systemForTerm(termInfo.term, selTermNames);
  });
  /** The other homes of a shared tag, named rather than silently dropped. */
  const alsoSystems = $derived(openSystems.filter((s) => s.id !== openSystem?.id));

  // The reading each structural tag is FIRST introduced at, in corpus order —
  // the curriculum's own arc. A tag "new here" is one the sequence opens at this
  // reading; the rest is review. This is the through-line the stream hid.
  const firstSeenAt = $derived.by(() => {
    const m = new Map<string, string>();
    for (const r of list)
      for (const w of r.words ?? [])
        for (const n of w.notes ?? []) if (n.term && !m.has(n.term)) m.set(n.term, r.id);
    return m;
  });
  const newHere = $derived.by(() => {
    const r = railReading;
    // a text is not a curriculum: no tag is introduced by a verse
    if (!r || textMode) return [] as string[];
    const out: string[] = [];
    const seenLocal = new Set<string>();
    for (const w of r.words ?? [])
      for (const n of w.notes ?? []) {
        const t = n.term;
        // Only structural tags (those that belong to a system) — and only the
        // first time the whole corpus introduces them.
        if (t && !seenLocal.has(t) && firstSeenAt.get(t) === r.id && systemsForTerm(t).length) {
          seenLocal.add(t);
          out.push(t);
        }
      }
    return out;
  });
  /** The drawn card — the quiz block. Never the word you are looking at. */
  const quizWord = $derived(deckQuiz ? wordAt(deckQuiz.id, deckQuiz.wi) : null);

  /** The question being asked. Built when drawn, not read from the corpus. */
  const activeQuiz = $derived(deckQuiz?.q ?? null);

  /** Every gloss in the corpus, for meaning distractors. Built once. */
  const glossPool = $derived.by(() =>
    [...new Set(list.flatMap((r: any) => (r.words ?? []).map((w: any) => String(w.gloss ?? '').trim())))]
      .filter((g) => g.length > 1)
  );

  /** The tokens of the quizzed reading, for a tap-the-word question. */
  const quizTokens = $derived.by(() => {
    const d = deckQuiz;
    if (!d || activeQuiz?.ui !== 'token') return [];
    const r = list.find((x) => x.id === d.id);
    return r ? tokensOf(r) : [];
  });

  /*
    The paradigm grid a cell question is answered on, cells blank.

    Heads are ABBREVIATED here and nowhere else. The rail is 312px, and in IAST
    the full names run to `prathamapuruṣa` × `bahuvacana` — wide enough that the
    third column falls off the edge. A reference table may scroll; a table you
    have to click cannot hide a third of its answers.
  */
  const SHORT: Record<string, string> = {
    प्रथमपुरुष: 'प्रथम', मध्यमपुरुष: 'मध्यम', उत्तमपुरुष: 'उत्तम',
    एकवचन: 'एक', द्विवचन: 'द्वि', बहुवचन: 'बहु'
  };
  const quizGrid = $derived.by(() => {
    const a = activeQuiz;
    if (a?.ui !== 'cell' || !a.rows || !a.cols) return null;
    return {
      rows: a.rows.map((r) => SHORT[r] ?? r),
      cols: a.cols.map((c) => SHORT[c] ?? c),
      cells: a.rows.map(() => a.cols!.map(() => '·'))
    };
  });

  /** A question is on screen and unanswered. Governs the QUIZ block alone. */
  const asking = $derived(!!activeQuiz && pick === null);

  /*
    What to show above the question, if anything.

    A quiz that asks for a TAG — which लकार, which विभक्ति — needs the clause,
    and the clause cannot give a tag away. A quiz that asks for a FORM is a
    different matter: `production` asks "which form is राम · तृतीया · एकवचन?"
    and the answer is the word itself, sitting in the sentence printed directly
    above. 374 of the 408 production quizzes leaked their answer that way, 22%
    of the deck overall. It needs no context at all — it is paradigm recall.

    `relation` also names another word, but there the sentence IS the question
    ("which word does this qualify?"), so it stays.

    What does show is trimmed to the CLAUSE holding the word rather than the
    whole passage: a सङ्ग्रह reading runs to 556 characters, and eight lines of
    prose to ask about one word buries it.
  */

  /*
    The clause comes as TOKENS, not as a string, so the word under question can
    be marked inside it. "Which लकार?" over `नरः ग्रामं गच्छति।` names no word,
    and three of them are in the line — the reader has to guess which one is
    being asked about, and on a longer clause guessing is hopeless.

    Only the FIRST token carrying the word's index is marked. A form used twice
    resolves to one annotation (see tokensOf), so marking every match would lit
    two words for one question — the same duplicate-highlight fault selection
    already had to be moved off form-matching to avoid.
  */
  const quizContextTokens = $derived.by(() => {
    const d = deckQuiz, a = activeQuiz;
    if (!d || !a || !a.context) return [];
    const r = list.find((x) => x.id === d.id);
    if (!r) return [];
    const toks = tokensOf(r);
    const markTi = toks.find((t: any) => t.wi === d.wi)?.ti ?? -1;

    // Split on the daṇḍa, which closes the clause it ends rather than opening
    // the next one.
    const clauses: any[][] = [];
    let cur: any[] = [];
    for (const t of toks) {
      cur.push(t);
      if (/[।॥]/.test(t.text)) {
        clauses.push(cur);
        cur = [];
      }
    }
    if (cur.length) clauses.push(cur);

    const hit = clauses.find((c) => c.some((t: any) => t.ti === markTi)) ?? clauses[0] ?? [];
    return hit.map((t: any) => ({ ...t, on: t.ti === markTi }));
  });

  // The word-for-word run of the line in the rail.
  const runRows = $derived.by(() => {
    // Keyed on the RAIL's reading, not on the selection. The run is the line
    // read word for word — sentence scope, not word scope — so it belongs to
    // the reading block and survives having no word selected. Nested under the
    // word, it disappeared the moment you deselected the thing it was about.
    const r = railReading;
    if (!r) return [];
    const s = sel?.id === r.id ? sel : null;
    // one row per word-bearing TOKEN — a form used twice is two rows, each
    // selecting its own position, rather than one row standing for both
    return tokensOf(r)
      .filter((t: any) => t.isWord)
      .map((t: any) => ({
        ti: t.ti,
        on: t.ti === s?.ti,
        // a sandhi word under padaccheda: its padas, each its own chip (as the
        // text page's "in this word"), not one string joined by pluses
        padas: (padaccheda && t.split?.length ? t.split : [t.text]) as string[],
        gloss: t.gloss ?? ''
      }));
  });

  // The paradigm the selected word belongs to — its declension or conjugation
  // table, shown in the rail below the quiz with the word's own cell lit. Null
  // for words outside the four classes we hold a table for (the rail then shows
  // no table, rather than guessing).
  const selParadigm = $derived.by(() => {
    if (!selWord) return null;
    // a text's word has its own table, built with the text; no table, none shown
    if (textMode) return selWord.paradigm;
    // Include DERIVED features (पुरुष/वचन/विभक्ति the build filled from vidyut) so
    // the cell lights up even when the word doesn't author them — verbs rarely do.
    const termNames = [...(selWord.terms ?? []).map((t: any) => t.term), ...Object.values(selWord.derived ?? {})];
    return resolveParadigm(paradigms, selWord.lemma ?? '', selWord.form ?? '', termNames as string[]);
  });

  // For a word that is NOT in a grid — a compound, a derivative, a plain sandhi
  // join — the exhibit below the quiz is a decomposition, not a table: the
  // विग्रह of a compound, the affix chain of a कृदन्त/तद्धित, the split of a
  // सन्धि. Null when the word declines (its paradigm shows instead) or when no
  // decomposition is authored.
  const selDecomp = $derived.by(() => {
    if (!selWord || textMode) return null;
    const termNames = (selWord.terms ?? []).map((t: any) => t.term);
    return decompose(termNames, selWord.notes ?? []);
  });

  /*
    The verdict, for whichever shape was answered.

    `pick` holds what the reader chose, normalised to a string: an option for a
    choice, "row,col" for a cell, the word index for a tap. A cell answer that
    is right in one axis and wrong in the other is a different mistake from a
    guess, and says so.
  */
  const verdict = $derived.by(() => {
    const q = activeQuiz;
    if (!q || pick === null) return null;

    if (pick === '\u2014') {
      const shown = q.ui === 'cell'
        ? `${q.rows?.[q.ansRow ?? 0]} \u00b7 ${q.cols?.[q.ansCol ?? 0]}`
        : q.ui === 'token'
          ? String(wordAt(deckQuiz!.id, q.ansWi ?? 0)?.form ?? '')
          : String(q.ans ?? '');
      return { text: 'shown \u00b7 ' + shown, tone: 'shown' };
    }

    if (q.ui === 'cell') {
      const [r, c] = pick.split(',').map(Number);
      const right = r === q.ansRow && c === q.ansCol;
      const cell = `${q.rows?.[q.ansRow ?? 0]} \u00b7 ${q.cols?.[q.ansCol ?? 0]}`;
      if (right) return { text: '\u2713 ' + cell, tone: 'ok' };
      // half right is worth naming — the axes are learned separately
      const axis = r === q.ansRow ? 'right row, wrong column'
        : c === q.ansCol ? 'right column, wrong row' : '';
      return { text: '\u2717 ' + (axis ? axis + ' \u00b7 ' : '') + cell, tone: 'miss' };
    }

    if (q.ui === 'token') {
      const right = Number(pick) === q.ansWi;
      const form = String(wordAt(deckQuiz!.id, q.ansWi ?? 0)?.form ?? '');
      return right
        ? { text: '\u2713 ' + form, tone: 'ok' }
        : { text: '\u2717 it is ' + form, tone: 'miss' };
    }

    return pick === q.ans
      ? { text: '\u2713 ' + q.ans, tone: 'ok' }
      : { text: '\u2717 you said ' + pick + ' \u00b7 it is ' + q.ans, tone: 'miss' };
  });

  // The reasoning behind the answer, not just right/wrong. A verdict names the
  // \u0935\u093f\u092d\u0915\u094d\u0924\u093f; this names WHY \u2014 the \u0915\u093e\u0930\u0915 role that assigns it (\u0905\u0927\u093f\u0915\u0930\u0923 \u2192 \u0938\u092a\u094d\u0924\u092e\u0940) and
  // the s\u016btra that governs it, as a /ref link. The chain and the citation are
  // already on the word; here they become the lesson the graded answer implied.
  const quizWhy = $derived.by(() => {
    const q = activeQuiz;
    if (!q || pick === null || !deckQuiz) return null;
    // For a "tap the word" question the answer sits elsewhere; explain THAT word.
    const w = q.ui === 'token' && q.ansWi != null ? wordAt(deckQuiz.id, q.ansWi) : quizWord;
    if (!w) return null;
    const termNames: string[] = (w.terms ?? []).map((t: any) => t.term);
    const karaka = termNames.find((t) => (KARAKA as readonly string[]).includes(t));
    const vibhakti = termNames.find((t) => (VIBHAKTI as readonly string[]).includes(t));
    const cites = (w.cites ?? []) as { cite: string; role: string }[];
    const chain = karaka && vibhakti ? `${karaka} \u2192 ${vibhakti}` : null;
    // Prefer the s\u016btra whose role actually names the case or role in play.
    const gov =
      cites.find((c) => (vibhakti && c.role?.includes(vibhakti)) || (karaka && c.role?.includes(karaka))) ??
      cites[0] ??
      null;
    if (!chain && !gov) return null;
    return { chain, cite: gov?.cite ?? null };
  });

  /** Cards answered wrongly (or revealed), by `id:wi`. They come back sooner. */
  let missed = $state<Set<string>>(new Set());

  /** A cell answer is stored as "row,col"; a tap as the word index. */
  function pickCell(r: number, c: number) {
    record(`${r},${c}`, r === activeQuiz?.ansRow && c === activeQuiz?.ansCol);
  }
  function pickToken(wi: number) {
    record(String(wi), wi === activeQuiz?.ansWi);
  }
  function pickOption(o: string) {
    record(o, o === activeQuiz?.ans);
  }

  function record(answer: string, right: boolean) {
    pick = answer;
    // The card that was answered is the QUIZ word, not whatever is selected.
    if (!quizWord) return;
    const key = quizWord.id + ':' + quizWord.wi;
    checked = new Set([...checked, key]);
    // Getting it wrong, or giving up and revealing it, is what marks a card as
    // needing another look; getting it right retires it from that set.
    const next = new Set(missed);
    if (right && answer !== '\u2014') next.delete(key);
    else next.add(key);
    missed = next;
  }

  /*
    The two evidence blocks fold, and both start SHUT.

    What the rail owes you on sight is the word — form, meaning, tags — and the
    line it sits in. The derivation and the paradigm are what you ask for when
    the identity is not enough, and both are tall: five sūtras and an eight-row
    table together run past two screens of a 360px rail, which buried the
    reading under evidence nobody had asked for.

    Shut, each is one labelled row with a `+` and its size on it, so the rail
    opens at a predictable height and says what is behind each row. This is not
    the old single fold over the whole payload — the word and the reading are
    never behind a tap.

    They also reset on every new selection, so moving through the line does not
    leave a table open under a word that has a different one.
  */
  let formedOpen = $state(false);
  let paraOpen = $state(false);

  /*
    The rail can be widened. A paradigm is four columns of Devanagari and a
    sūtra line is a sentence, and both were being asked to live in 312px; the
    frame starts at 360 and opens to 520 for the reader who wants the table
    rather than the text. It is a preference, so it outlives the page.
  */
  const RAIL_WIDE_KEY = 'anuvrtti-rail-wide';
  let railWide = $state(false);
  onMount(() => {
    try {
      railWide = localStorage.getItem(RAIL_WIDE_KEY) === '1';
      // a text is read as written: saṃhitā unless asked
      padaccheda = textMode ? localStorage.getItem(T_PADACCHEDA_KEY) === '1' : localStorage.getItem(PADACCHEDA_KEY) !== '0';
    } catch { /* private mode: the default width is fine */ }
  });
  function toggleRailWidth() {
    railWide = !railWide;
    try {
      localStorage.setItem(RAIL_WIDE_KEY, railWide ? '1' : '0');
    } catch { /* nothing to persist to; the session still widens */ }
  }

  /*
    The head prints the form twice: once in the reader's own script, once in
    Latin underneath. That is only useful while the two differ — on an IAST page
    it would print `grāmam` beside `grāmam` — so it is computed against the
    toggle and left empty when the page is already roman. shlesha is async, so
    this is an effect rather than a derived, and it re-checks the selection on
    resolve in case the reader moved on mid-flight.
  */
  const LATIN_SCRIPTS = new Set(['iast', 'iso15919', 'slp1', 'hk', 'itrans', 'velthuis', 'english']);
  let wordRoman = $state('');
  $effect(() => {
    const w = selWord;
    const script = $displayScript;
    wordRoman = '';
    if (!w?.form || LATIN_SCRIPTS.has(script)) return;
    transliterate(w.form, 'devanagari', 'iast')
      .then((r) => {
        if (selWord === w) wordRoman = r;
      })
      .catch(() => { /* no romanisation is better than a broken one */ });
  });

  // A click moves the selection and nothing else. It no longer clears a quiz in
  // progress: the two blocks are independent, so looking a word up mid-question
  // is allowed — and expected, since the question is about another reading.
  function selectToken(id: string, ti: number) {
    formedOpen = false;
    // a text's rail opened with its table, as the text page always did
    paraOpen = textMode;
    if (sel && sel.id === id && sel.ti === ti) { sel = null; return; }
    sel = { id, ti };
  }

  /*
    A tap on a written word. One pada: select it, or let it go. Several
    (सोऽपि): the first tap opens the one the text names, and each tap after
    steps to the next pada, the last letting go — so the line itself walks
    a fused word, as the head's buttons do.
  */
  function tapWritten(id: string, w: { ti: number; from: number[] }) {
    const toks = tokensOf(list.find((x) => x.id === id));
    const padas = w.from.filter((i) => toks[i]?.isWord);
    if (padas.length < 2 || sel?.id !== id || !padas.includes(sel.ti)) return selectToken(id, w.ti);
    const next = padas[padas.indexOf(sel.ti) + 1];
    if (next === undefined) sel = null;
    else selectToken(id, next);
  }

  // Every (reading, word-index) that has a quiz and lives in a SEEN reading —
  // the deck. A word you have scrolled past is fair game; the one you are
  // currently looking at (sel) is not, so the quiz tests recall, not the obvious.
  const deckCards = $derived.by(() => {
    // `seen` only records cards the scroll carried clear off the top of the
    // window, so at the head of the corpus it is empty and the quiz had nothing
    // to draw on — the control simply vanished, with no way to tell whether it
    // was broken or merely early. Everything BEFORE the card you are on counts
    // as read too, which also covers arriving by "go to" or a paradigm link
    // rather than by scrolling the whole way down.
    const here = list.findIndex((r) => r.id === railReading?.id);
    const cards: { id: string; wi: number }[] = [];
    list.forEach((r, i) => {
      if (!((here >= 0 && i < here) || seen.has(r.id))) return;
      // every annotated word is a card now — the questions are built on demand,
      // so a word no longer needs a baked quiz to be worth asking about
      (r.words ?? []).forEach((w: any, wi: number) => {
        if (w.form) cards.push({ id: r.id, wi });
      });
    });
    return cards;
  });

  // What the page is showing right now — the readings in the current slice, and
  // every form printed in them. The deck tests RECALL of words scrolled past, so
  // a word still on screen is not a fair card, and a form sitting anywhere on the
  // page is not a fair ANSWER. `seen`/`i < here` treated "before the rail reading"
  // as "scrolled away", but a page holds ~20 readings, so the ones just above the
  // rail are still in view — and a form can recur in a different reading that is
  // also on screen (the गृहेषु card drawn while गृहेषु sat in the reading above).
  // normForm folds accent and a final anusvāra (व्यापारं ↔ व्यापारम्) so those
  // spelling variants still count as the same visible word.
  const normForm = (s: string) => deaccent(String(s ?? '')).replace(/ं$/, 'म्');
  const visibleIds = $derived(new Set(slice.map((r) => r.id)));
  const visibleForms = $derived.by(() => {
    const s = new Set<string>();
    for (const r of slice)
      for (const w of r.words ?? [])
        if (w.form) s.add(normForm(w.form));
    return s;
  });

  // Draw a random card from the seen deck. It sets `deckQuiz` ONLY — the
  // selection stays where the reader put it, so the line being read keeps its
  // explanation while the question sits underneath.
  /*
    Draw the card you most need, not a card at random.

    A uniform draw over the deck ignores everything already known about the
    reader. It also repeats heavily: the deck's 1867 quizzes are only 648
    distinct cards — "Which विभक्ति? → प्रथमा" alone exists in 72 copies — so a
    random pick keeps asking the same question in different clothes while
    other cards go untouched.

    Order of preference: a card previously missed, then one never answered,
    then anything. Never the card just shown, and never the word being read.
  */
  function drawFromDeck() {
    const here = selWord ? selWord.id + ':' + selWord.wi : '';
    const last = deckQuiz ? deckQuiz.id + ':' + deckQuiz.wi : '';
    const key = (c: { id: string; wi: number }) => c.id + ':' + c.wi;
    const deck = deckCards.filter((c) => key(c) !== here && key(c) !== last);
    if (!deck.length) return;

    // Prefer a card whose reading is OFF the current page: its line, gloss and
    // neighbours are not in view, so the question is recall. Fall back to the
    // whole deck only at the head of the corpus, where everything seen is still
    // on screen and a faintly-visible card beats no card at all.
    const offscreen = deck.filter((c) => !visibleIds.has(c.id));
    const base = offscreen.length ? offscreen : deck;

    const again = base.filter((c) => missed.has(key(c)));
    const fresh = base.filter((c) => !checked.has(key(c)));
    // Missed cards get priority, but not exclusively — drilling only failures
    // stops new material ever coming round.
    const pool = again.length && (!fresh.length || Math.random() < 0.4) ? again : fresh.length ? fresh : base;

    // Try cards until one yields a question. A word with no annotation at all
    // produces none, and silently drawing nothing would read as a broken button.
    const order = shuffleCards(pool);
    // A produce question whose answer FORM is printed on the page is answerable
    // by looking up, not from memory — keep one aside and use it only if no
    // unleaked question turns up, so the button never silently does nothing.
    let leaked: { id: string; wi: number; q: Question } | null = null;
    for (const card of order) {
      const r = list.find((x) => x.id === card.id);
      const w = r?.words?.[card.wi];
      if (!w) continue;
      const q = drawQuestion(questionsFor(w, card.wi, r, usage, glossPool));
      if (!q) continue;
      if (q.ui === 'produce' && q.ans && visibleForms.has(normForm(q.ans))) {
        leaked ??= { ...card, q };
        continue;
      }
      deckQuiz = { ...card, q };
      pick = null;
      return;
    }
    if (leaked) {
      deckQuiz = leaked;
      pick = null;
    }
  }

  function shuffleCards<T>(xs: T[]): T[] {
    const a = [...xs];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /**
   * Jump to the quizzed word in its own reading. The deck is keyed by word
   * index (that is what carries the quiz), so find the token standing at it.
   */
  function selectQuizWord() {
    const q = quizWord;
    if (!q) return;
    const r = list.find((x) => x.id === q.id);
    if (!r) return;
    const t = tokensOf(r).find((tk: any) => tk.isWord && tk.wi === q.wi);
    if (!t) return;
    selectToken(r.id, t.ti);
    jumpToReading(r.id);
  }

  /** Put the question away without answering it. */
  function closeQuiz() {
    deckQuiz = null;
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
    // a second press takes the word back out of the deck
    if (wordBank.has('rdr:' + w.form)) { wordBank.removeWord('rdr:' + w.form); inDeck = false; return; }
    wordBank.addWord({
      id: 'rdr:' + w.form,
      display: w.form,
      iast: null,
      englishGloss: w.gloss,
      tag: w.terms.map((t: any) => t.term).join(' '),
      // where it was met, so the deck can name the place and link back: the
      // reading's id (not the word's own index, which is what it once kept),
      // or a text's part and section
      sourceId: textMode && tMeta && tPartMeta
        ? `text:${tMeta.id}:${tPartMeta.id}:${sel!.id}`
        : 'reader:' + sel!.id
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
      if (m) window.scrollTo({ top: m.getBoundingClientRect().top + window.scrollY - ANCHOR, behavior: 'smooth' });
      observe();
    });
  }

  // Scroll a reading (by id) so its top sits at the anchor line, and focus it.
  /*
    Scroll a card to the anchor ONLY if it is not already fully on screen.

    Both stepping paths go through here. That matters: stepLine falls back to
    stepReading when no word is selected, and pressing down without clicking a
    word first is the ordinary thing to do — so the unconditional scroll that
    used to live here was what most people actually hit. Every press hauled the
    next card up to the anchor, taking everything above it off the top, which
    is the "leaps four cards" that survived fixing the selected-word path.

    Judged against where the page is GOING (pendingScroll), not where a smooth
    scroll currently happens to be, so a quick second press does not measure a
    half-finished animation.
  */
  function scrollCardIntoView(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const absTop = rect.top + window.scrollY;
    const settledY = pendingScroll ?? window.scrollY;
    const top = absTop - settledY;
    if (top >= ANCHOR && top + rect.height <= window.innerHeight - 24) return;
    const target = absTop - ANCHOR;
    pendingScroll = target;
    window.scrollTo({ top: target, behavior: 'smooth' });
    clearTimeout(pendingScrollTimer);
    pendingScrollTimer = setTimeout(() => (pendingScroll = null), 700);
  }

  function scrollToReading(id: string) {
    const el = document.querySelector('[data-ex-id="' + id + '"]') as HTMLElement | null;
    if (!el) return;
    focusedId = id;
    scrollCardIntoView(el);
  }

  // The reading line arrows step relative to the bottom of the sticky chrome,
  // which is now exactly nav + shelf — two layers, not four. Every scroll in
  // this page reads this one number.
  const ANCHOR = 100;
  // Destination of a smooth scroll still in flight, so a second keypress can
  // reason about where the page will be rather than where it currently is.
  let pendingScroll: number | null = null;
  let pendingScrollTimer: ReturnType<typeof setTimeout> | undefined;

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

  // ← → walk the words of a line, wrapping into the next line at either end.
  // Selecting a word is what opens the rail, so this is how you read a line
  // word by word without touching the mouse.
  /** The word-bearing token indices of a reading, in sentence order. */
  function wordTis(r: Reading): number[] {
    return tokensOf(r).filter((t: any) => t.isWord).map((t: any) => t.ti);
  }

  function stepWord(dir: 1 | -1) {
    if (!list.length) return;
    const s = sel;
    if (!s) {
      const r = list.find((x) => x.id === (focusedId ?? slice[0]?.id)) ?? slice[0];
      if (r) {
        const tis = wordTis(r);
        if (tis.length) selectToken(r.id, dir > 0 ? tis[0] : tis[tis.length - 1]);
      }
      return;
    }
    let ri = list.findIndex((x) => x.id === s.id);
    if (ri < 0) return;
    // walk the word-bearing tokens, so a repeated form is two stops, not one
    const tis = wordTis(list[ri]);
    let at = tis.indexOf(s.ti) + dir;
    if (at >= tis.length) {
      ri = (ri + 1) % list.length;
      const next = wordTis(list[ri]);
      if (!next.length) return;
      selectToken(list[ri].id, next[0]);
      jumpToReading(list[ri].id);
      return;
    }
    if (at < 0) {
      ri = (ri - 1 + list.length) % list.length;
      const prev = wordTis(list[ri]);
      if (!prev.length) return;
      selectToken(list[ri].id, prev[prev.length - 1]);
      jumpToReading(list[ri].id);
      return;
    }
    selectToken(list[ri].id, tis[at]);
  }

  // ↑ ↓ move line to line, keeping your place within the line.
  /*
    Bring a card into view with the LEAST movement that does the job.

    Stepping used to go through jumpToReading, which re-anchors the card to a
    fixed 100px from the top of the window on every press. The selection moved
    by exactly one card — that part was always right — but the page travelled by
    the height of the card you had just left, so one arrow press slid a
    single-line reading a little and a six-line सङ्ग्रह passage a long way. Same
    keystroke, different distance, which is what made it feel like it skipped
    two lines sometimes and four others. jumpToReading also blanked focusedId
    for half a second, so the current-line marker blinked on every press.

    Here the card is only scrolled when it is not already fully visible, and
    then by the minimum (`block: 'nearest'`, with the sticky chrome accounted
    for by scroll-margin on .ex). Step through cards that already fit on screen
    and the page does not move at all.
  */
  function revealReading(id: string) {
    const idx = list.findIndex((r) => r.id === id);
    if (idx < 0) return;
    const b = bounds[clampedPage];
    if (!b || idx < b.start || idx >= b.end) { jumpToReading(id); return; }
    focusedId = id;
    const el = document.querySelector('[data-ex-id="' + id + '"]') as HTMLElement | null;
    if (!el) return;
    /*
      Move the page only when the card would otherwise be off screen.

      Pinning every selection to the anchor is what made stepping "leap four
      cards": the highlight always advanced by exactly one, but hauling that
      card to the top takes everything above it off the screen with it. Word
      stepping never had the problem because it never scrolls at all.
    */
    // shared with stepReading — see scrollCardIntoView
    scrollCardIntoView(el);
  }

  function stepLine(dir: 1 | -1) {
    const s = sel;
    if (!s) return stepReading(dir);
    const ri = list.findIndex((x) => x.id === s.id);
    if (ri < 0) return stepReading(dir);
    const next = (ri + dir + list.length) % list.length;
    const target = list[next];
    if (!target) return;
    // keep your ordinal place in the line, measured in word-bearing tokens
    const here = wordTis(list[ri]).indexOf(s.ti);
    const tis = wordTis(target);
    if (!tis.length) return;
    selectToken(target.id, tis[Math.min(Math.max(here, 0), tis.length - 1)]);
    revealReading(target.id);
  }

  function onKeydown(e: KeyboardEvent) {
    // ignore when typing in a field or with modifiers
    const t = e.target as HTMLElement;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); stepWord(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); stepWord(-1); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); stepLine(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); stepLine(-1); }
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
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - ANCHOR, behavior: 'smooth' });
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
        window.scrollTo({ top: anchor.getBoundingClientRect().top + window.scrollY - ANCHOR, behavior: 'smooth' });
        if (target) setTimeout(() => { focusedId = target.id; }, 500);
      })
    );
  }

  // Resolve the jump box's query to a reading id, then reuse jumpToReading. The
  // query is an id ("ex210") or a difficulty tier ("tier 210" / "210" → the
  // reading at that segment, or the nearest at/above it).
  function jumpFromQuery(e?: Event) {
    e?.preventDefault();
    const q = jumpQuery.trim();
    if (!q) return;
    let id: string | null = null;
    const idMatch = q.match(/(ex|rd)\s*0*(\d+)/i);
    if (idMatch) {
      const cand = idMatch[1].toLowerCase() + String(idMatch[2]).padStart(3, '0');
      if (list.some((r) => r.id === cand)) id = cand;
    } else {
      const n = Number(q.replace(/tier|segment|\s/gi, ''));
      if (!Number.isNaN(n)) {
        let r = list.find((x) => (x.segment ?? -1) === n);
        if (!r) r = list.find((x) => (x.segment ?? Infinity) >= n);
        id = r?.id ?? null;
      }
    }
    if (!id) return;
    jumpQuery = '';
    jumpToReading(id);
  }

  // Mark every card whose bottom is now above the viewport top as SEEN. Called
  // from the observer and on scroll, so fast scrolls don't skip any.
  function markSeen() {
    if (typeof document === 'undefined') return;
    // Recompute the union without reading the reactive `seen` for the guard, so
    // this is safe to call from an $effect: gather every card past the top, add
    // any not already recorded. Reassign only when it actually grew.
    const current = seen;
    const next = new Set(current);
    let grew = false;
    for (const el of document.querySelectorAll('[data-ex-id]')) {
      const id = (el as HTMLElement).getAttribute('data-ex-id')!;
      if (!next.has(id) && el.getBoundingClientRect().bottom < 0) { next.add(id); grew = true; }
    }
    if (grew) seen = next;
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
        // SEEN is computed from live geometry, not the observer's captured rect:
        // the shrunk rootMargin fires the "left" event while the card's real
        // bottom is still on-screen, so sweep the DOM and mark every card whose
        // bottom is now above the viewport top — read and scrolled past.
        markSeen();
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

  // ── the phone ───────────────────────────────────────────────────────────────
  /*
    On a phone the rail is a bottom sheet and the spine is a sheet you open, so
    the reader has to know which layout it is in — a media query styles what is
    already there, but these are different controls in different places. The
    fact is shared with Shell and every other sheeted page.
  */
  const narrow = $derived($isNarrow);

  /** 0 peek · 1 half · 2 full. Bound to Shell, which owns the sheet. */
  let railDetent = $state(0);
  let spineOpen = $state(false);

  /** The chapter's own title, for the shelf's picker. */
  function chapterTitle(id: string | null) {
    return titles[id ?? ''] ?? { dev: id ?? 'chapters', en: '' };
  }

  /*
    A question takes the sheet to full, and putting it away comes back to half —
    the word it was about, not the peek you would then have to re-open. The
    desktop takeover needs neither, since the rail is always the full height.
  */
  $effect(() => {
    if (!narrow) return;
    if (deckQuiz) railDetent = 2;
  });

  /*
    Swipes replace the arrow keys, which a phone has none of. Horizontal in both
    cases: vertical belongs to scrolling the text and to the sheet's own
    detents, and a gesture that means two things means neither.

      on the sheet head   ← → step word   (the desktop's ← →)
                          ↑ ↓ raise or lower the sheet (it has no grip)
      on the text         ← → step line   (the desktop's ↑ ↓)
  */
  const SWIPE_X = 40;
  /** The word sheet's highest detent (Shell.svelte: peek, 62dvh, full). */
  const RAIL_TOP = 2;
  /** When a swipe last fired, so the click it drags behind it can be ignored. */
  let swipedAt = 0;
  function swipe(onstep: (dir: 1 | -1) => void, onlift?: (dir: 1 | -1) => void) {
    let x = 0;
    let y = 0;
    let live = false;
    return {
      onpointerdown(e: PointerEvent) {
        // the tap half works with a mouse too; only the SWIPE is touch-only,
        // because a mouse drag across text is a selection
        x = e.clientX;
        y = e.clientY;
        live = true;
      },
      onpointerup(e: PointerEvent) {
        if (!live) return;
        live = false;
        const dx = e.clientX - x;
        const dy = e.clientY - y;
        // up or down, where the caller takes it: the word head is the sheet's
        // handle now that the sheet has no grip
        if (onlift && Math.abs(dy) >= SWIPE_X && Math.abs(dy) >= Math.abs(dx) * 1.5) {
          swipedAt = performance.now();
          onlift(dy < 0 ? 1 : -1);
          return;
        }
        const swiped =
          e.pointerType !== 'mouse' &&
          Math.abs(dx) >= SWIPE_X &&
          Math.abs(dx) >= Math.abs(e.clientY - y) * 1.5;
        if (!swiped) return;
        // the click that follows this gesture is not a tap on anything
        swipedAt = performance.now();
        onstep(dx < 0 ? 1 : -1);
      },
      onpointercancel() {
        live = false;
      }
    };
  }
  /*
    The whole peek head opens the drawer.

    "↑ pull up" named the gesture but was not the target: the only thing that
    actually opened the sheet was the 4px grey bar above it, which is a hard
    thing to hit and an unlikely thing to try. The head is ~100px of the screen
    and is already the thing you are looking at, so it is the handle — tap
    anywhere on it and the drawer comes up.

    Not from a real control: ★ banks the word and a tag opens its note, and
    neither should be a second thing at once. A tag tapped at peek DOES raise
    the sheet, because the note it opens lives in the evidence, which peek does
    not show — the tap would otherwise appear to do nothing.

    On CLICK, not on pointerup. Raising the sheet moves the layout under the
    finger, and a click dispatched after that lands on whatever has taken the
    spot — which here is the `quiz me` button arriving at the bottom of the
    grown sheet. Click fires against the element the press began on, so the
    drawer opens and nothing else does.
  */
  function openFromHead(e: MouseEvent) {
    if (!narrow || railDetent > 0) return;
    if (performance.now() - swipedAt < 400) return;
    if ((e.target as HTMLElement | null)?.closest('.wh-act, .wh-pada')) return;
    railDetent = 1;
  }
  /** Whose analysis a text's word carries, for the rail's last line. */
  const SOURCE: Record<string, string> = {
    vidyut: 'vidyut’s analysis',
    pick: 'vidyut’s alternative, chosen by the editor',
    author: 'the editor’s analysis (vidyut had none that fits)',
    none: 'unanalysed'
  };
  const swipeWord = swipe(
    (d) => stepWord(d),
    (d) => (railDetent = Math.max(0, Math.min(RAIL_TOP, railDetent + d)))
  );
  const swipeLine = swipe((d) => stepLine(d));
</script>

<svelte:head><title>{textMode ? (tMeta ? `${tMeta.title_en} · texts · पठनम्` : 'texts · पठनम्') : 'पठनम् · graded reader'}</title></svelte:head>

{#snippet shelfLeft()}
  {#if narrow}
    <!-- The chapter you are in, and the way into the rest of them. On the
         phone the spine is a sheet, so it needs a door on the shelf; on the
         desktop it is a column that is simply there. -->
    {#snippet chapterLabel()}
      {#if textMode}
        <!-- a text: the section being read (the part is named in the head and
             the sheet; beside the gloss mode a long part name pushes the
             padaccheda toggle off the phone) -->
        § {focused?.label ?? ''}
      {:else}
        <Sanskrit text={chapterTitle(focusedChapter).dev} source="devanagari" />
      {/if}
    {/snippet}
    <SheetButton label={chapterLabel} onopen={() => (spineOpen = true)} title={textMode ? 'sections' : 'chapters'} />
    <span class="shelf-rule" aria-hidden="true"></span>
  {:else}
    <span class="quiet">gloss</span>
  {/if}
  <Segmented
    options={[
      { id: 'recall', label: 'recall' },
      { id: 'marked', label: 'marked' },
      { id: 'gloss', label: 'glossed' }
    ]}
    value={mode}
    onchange={(id) => (mode = id as Mode)}
    ariaLabel="gloss mode"
  />
  <!-- independent axis: split at sandhi joins, composes with either gloss mode -->
  <button class="toggle" class:on={padaccheda} onclick={() => {
    padaccheda = !padaccheda;
    try { localStorage.setItem(textMode ? T_PADACCHEDA_KEY : PADACCHEDA_KEY, padaccheda ? '1' : '0'); } catch { /* session only */ }
  }}>
    padaccheda
  </button>
  <!-- A jump inside the corpus you are already reading is not a search, so it
       stays here rather than folding into ⌘K. On the phone it travels with the
       spine into its sheet, where there is room for it. -->
  {#if !narrow && !textMode}
    <form class="jump" onsubmit={jumpFromQuery}>
      <label class="quiet" for="jumpto">go to</label>
      <input id="jumpto" bind:value={jumpQuery} placeholder="ex210 or tier 210" spellcheck="false" />
    </form>
  {/if}
{/snippet}

{#snippet shelfRight()}
  <!--
    Nothing on the phone. The keyboard hints name keys it does not have, and a
    390px shelf that already carries the chapter, the gloss mode and padaccheda
    has no room to spend on counts. The gestures are the sheet's grip and the
    swipes, which announce themselves by being there.
  -->
  {#if !narrow}
    <span class="keys">← → word · ↑ ↓ line</span>
    {#if textMode}
      <!-- a text: where in it you are, as the text page said it -->
      {#if tMeta && tPartMeta && focused}
        {@const at = list.findIndex((r) => r.id === focused.id)}
        <span>{#if tMeta.parts.length > 1}<Sanskrit text={partLabel(tPartMeta)} source="devanagari" /> ({partIdx + 1} of {tMeta.parts.length}){' · '}{/if}§ {focused.id} · {at + 1} of {list.length}</span>
      {/if}
    {:else}
    <!-- `checked` and `read` moved to the rail's own footer, beside the drill
         they describe. What stays here is the review bank's due count, which is
         a different deck and belongs to no one pane. -->
    <span>{deckCount} in deck</span>
    {/if}
  {/if}
{/snippet}

{#snippet spine()}
  {#if textMode}
    <!-- a text's spine: its parts, the sections of the part open, the other texts -->
    {#if narrow}<a class="back sheet-back" href="/texts">← texts</a>{/if}
    {#if tMeta && tMeta.parts.length > 1}
      <Spine
        title="parts"
        items={tMeta.parts.map((p, i) => ({ id: String(i), label: partLabel(p), script: 'devanagari' as const, sub: `${p.sections.length} sections` }))}
        activeId={String(partIdx)}
        onpick={(i) => { spineOpen = false; openPart(Number(i)); }}
      />
    {/if}
    <div class={tMeta && tMeta.parts.length > 1 ? 'sources-shelf' : ''}>
      <Spine
        title="sections"
        items={list.map((r: any) => ({ id: r.id, label: r.kind === 'verse' ? `verse ${r.id}` : `§ ${r.id}`, done: seen.has(r.id) }))}
        activeId={focused?.id ?? null}
        onpick={(id) => { spineOpen = false; jumpToReading(id); }}
      />
    </div>
    {#if others.length > 1 && text}
      <div class="sources-shelf">
        <Spine
          title="texts"
          items={others.map((o) => ({ id: o.id, label: o.title, script: 'devanagari' as const, sub: o.title_en, href: `${text.base}/${o.id}` }))}
          activeId={text.id}
        />
      </div>
    {/if}
  {:else}
  {#if narrow}
    <!-- the sheet's own head: what this is, and the jump that came with it -->
    <div class="spinehead">
      <span class="label">chapters</span>
      <form class="jump" onsubmit={jumpFromQuery}>
        <input
          id="jumpto-sheet"
          bind:value={jumpQuery}
          placeholder="jump to ex…"
          spellcheck="false"
          aria-label="jump to a reading"
        />
      </form>
    </div>
  {/if}
  <Spine
    title={narrow ? null : 'chapters'}
    items={gradedChapters.map((c) => {
      const t = titles[c.id] ?? { dev: c.id, en: '' };
      const p = chapterRead[c.id];
      return {
        id: c.id, label: t.dev, script: 'devanagari' as const, sub: shortEn(t.en),
        progress: p && p.read ? `${p.read}/${p.total}` : undefined,
        done: !!p && p.read === p.total
      };
    })}
    activeId={focusedChapter}
    onpick={(id) => {
      jumpToChapter(id);
      spineOpen = false;
    }}
  />
  {#if sourceItems.length}
    <!-- Sources: verses picked from a real text, and, where one exists, the
         whole text itself — one entry each, not a chapter plus a separate
         shelf entry for the same work. -->
    <div class="sources-shelf">
      <Spine
        title="sources"
        items={sourceItems}
        activeId={focusedChapter}
        onpick={(id) => {
          jumpToChapter(id);
          spineOpen = false;
        }}
      />
    </div>
  {/if}
  {/if}
{/snippet}

{#snippet quizBlock()}
  <!--
    The question, built when it is drawn. Its word comes from a reading already
    passed, never the one selected, so the explanation below cannot answer it.

    Four shapes, because a column of four buttons is right for a closed set and
    wrong for everything else:
      choice   pick one of N
      cell     point at a square of the word's own paradigm
      token    tap the word in its line
      produce  the coordinates, give the form

    It is a TAKEOVER: it covers the rail rather than sitting in the stack.
    Answering used to push the word, its sūtras and its paradigm down the
    column — the reader lost the thing being explained at exactly the moment
    of being tested on it. Here the rail underneath is untouched (it keeps its
    scroll position), and the back control names what you return to, so the
    interruption looks like one and ends cleanly.
  -->
  {#if activeQuiz}
    {@const q = activeQuiz}
    <div class="takeover">
      <div class="tk-head">
        <!-- On the phone the question IS the sheet's top detent, so leaving it
             is a downward move, and it lands on the word at half rather than
             on a peek you would have to re-open. -->
        <button
          class="tk-back"
          onclick={() => {
            closeQuiz();
            if (narrow) railDetent = 1;
          }}
        >
          <span aria-hidden="true">{narrow ? '↓' : '←'}</span>
          {#if selWord}<Sanskrit text={selWord.form} source="devanagari" />{:else}back{/if}
        </button>
        <span class="tk-src">from what you have read</span>
      </div>

      <div class="tk-body">
      {#if quizContextTokens.length}
        <div class="phrase context">
          {#each quizContextTokens as tok (tok.ti)}
            <span class="ctok" class:on={tok.on} class:punct={!tok.isWord}
              ><Sanskrit text={tok.text} source="devanagari" /></span
            >
          {/each}
        </div>
      {/if}

      <span class="question"><Sanskrit text={q.prompt} source="devanagari" /></span>

      {#if asking}
        {#if q.ui === 'choice' || q.ui === 'produce'}
          <div class="options">
            {#each q.opts ?? [] as o}
              <button class="opt" onclick={() => pickOption(o)}>
                {#if q.sanskritOpts}<Sanskrit text={o} source="devanagari" />{:else}{o}{/if}
              </button>
            {/each}
          </div>

        {:else if q.ui === 'cell' && quizGrid}
          <!-- the table with its cells blank: a coordinate space to point at,
               not an answer key to read -->
          <Grid
            script="devanagari"
            surface="sunken"
            colHeads={quizGrid.cols}
            rowHeads={quizGrid.rows}
            rows={quizGrid.cells.map((row) => row.map((c) => ({ text: c, live: true })))}
            onpick={(r, c) => pickCell(r, c)}
          />

        {:else if q.ui === 'token'}
          <!-- answered in the line itself, rendered the way the reader renders
               it, so the question looks like the text it is about -->
          <div class="quiz-line">
            {#each quizTokens as tok (tok.ti)}
              {#if tok.isWord}
                <button class="qtok" onclick={() => pickToken(tok.wi)}>
                  <Sanskrit text={tok.text} source="devanagari" />
                </button>
              {:else}
                <span class="qtok punct"><Sanskrit text={tok.text} source="devanagari" /></span>
              {/if}
            {/each}
          </div>
        {/if}

        <button class="skip" onclick={() => pickOption('—')}>show the answer</button>
      {:else}
        {#if verdict}
          <!-- the verdict names schema values, so it follows the toggle like
               any other Sanskrit; it is mixed with English, hence the prose font -->
          <span class="verdict {verdict.tone}"
            ><Sanskrit text={verdict.text} source="devanagari" /></span
          >
        {/if}
        {#if verdict && quizWhy}
          <!-- not just the answer, but why: the कारक that assigns the case and
               the sūtra behind it — the reasoning the graded verdict implied. -->
          <div class="quiz-why">
            {#if quizWhy.chain}
              <span class="why-chain"><Sanskrit text={quizWhy.chain} source="devanagari" /></span>
            {/if}
            {#if quizWhy.cite}
              <!-- सूत्र is a Sanskrit word, so the label follows the toggle like
                   any other — printed raw it stayed Devanagari on an IAST page -->
              <a class="why-ref" href={`/ref/${quizWhy.cite}`}
                ><Sanskrit text="सूत्र" source="devanagari" /> {quizWhy.cite} →</a
              >
            {/if}
          </div>
        {/if}
        {#if quizWord}
          <button class="run-row on" onclick={() => selectQuizWord()}>
            <span class="run-form"><Sanskrit text={quizWord.form} source="devanagari" /></span>
            <span class="run-gloss"><Sanskrit text={quizWord.gloss} source="devanagari" /></span>
          </button>
        {/if}
      {/if}
      </div>

      <!-- The takeover keeps a footer of its own, in the same place the rail's
           is, so "quiz another" lands where "quiz me" was pressed. -->
      <div class="tk-foot">
        <button class="quizme foot" onclick={drawFromDeck} disabled={deckCards.length <= 1}>
          quiz another →
        </button>
        <span class="foot-counts">{Math.max(deckCards.length - 1, 0)} left</span>
      </div>
    </div>
  {/if}
{/snippet}

{#snippet rail()}
  <!--
    The rail is a PANEL, not a scroll of blocks.

    It used to be six peer labels in a column — quiz, new here, this reading,
    word, the line word for word, then two folds — with the word you clicked
    somewhere in the middle of them, its whole payload behind a single `−`, and
    the quiz trigger sitting above everything it would displace. Nothing told
    you what the rail was ABOUT, and scrolling to the paradigm scrolled the word
    off the top.

    Three regions now, and the order never changes:

      pinned head    the word — form, meaning, tags. Never scrolls, never folds.
      evidence       how it is formed → its paradigm → the reading it sits in,
                     always in that order, word scope before sentence scope.
      pinned foot    the drill, and how far you have got.

    The quiz is no longer in the stack at all: it takes the panel over (see
    `quizBlock`) so answering never pushes the word away.
  -->
  <!--
    On the phone this same frame is the bottom sheet's content, and the detent
    decides how much of it shows: `peek` is the head alone, so the line stays on
    screen while its word is identified. `.at-peek` is what hides the rest —
    the markup is one frame in both layouts, not two.
  -->
  <div class="railframe" class:sheeted={narrow} class:at-peek={narrow && railDetent === 0}>

    <!-- ── pinned: the word ─────────────────────────────────────────────── -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="wordhead"
      onclick={narrow ? openFromHead : undefined}
      onpointerdown={narrow ? swipeWord.onpointerdown : undefined}
      onpointerup={narrow ? swipeWord.onpointerup : undefined}
      onpointercancel={narrow ? swipeWord.onpointercancel : undefined}
    >
      <div class="wh-top">
        {#if selWord}
          <span class="wh-form"><Sanskrit text={selWord.form} source="devanagari" /></span>
          <!-- At peek the gloss rides on this line: the head is ~112px, and the
               word without its meaning is not worth the space. -->
          {#if narrow && railDetent === 0}
            <span class="wh-en peek"><Sanskrit text={selWord.gloss} source="devanagari" /></span>
          {:else if wordRoman}
            <!-- the Latin reading, only while it differs from the page's own script -->
            <span class="wh-rom">{wordRoman}</span>
          {/if}
        {:else}
          <span class="wh-form none">—</span>
          <span class="wh-rom">tap a word in the line</span>
        {/if}
        <span class="wh-acts">
          <!-- the other half of "pull up": once the sheet is open, the way back
               down is a button too, not only a swipe -->
          {#if selWord}
            <!-- banking was the last button under a long column; it is the
                 word's own action, so it lives beside the word -->
            <button
              class="wh-act"
              class:on={inDeck}
              onclick={bankWord}
              aria-pressed={inDeck}
              title={inDeck ? 'in your deck — press again to remove it' : 'keep for review'}
              aria-label={inDeck ? 'in your deck; press to remove' : 'keep for review'}
            >★</button>
            {#if selFile}
              <!-- The rail is where a wrong tag is visible, so it is where the
                   correction starts. Opens a pull request against the reading's
                   own YAML — see docs/ARCHITECTURE.md. -->
              <button
                class="wh-act"
                onclick={editThisReading}
                title={$appPage.data.user
                  ? 'suggest a correction to this reading'
                  : 'sign in to suggest a correction'}
                aria-label="suggest a correction to this reading"
              >✎</button>
            {/if}
          {/if}
          <!-- widening is a desktop affordance: the sheet is already the width
               of the phone, and its detents do what widening does -->
          {#if !narrow}
            <button
              class="wh-act"
              onclick={toggleRailWidth}
              title={railWide ? 'narrow the rail' : 'widen the rail'}
              aria-label={railWide ? 'narrow the rail' : 'widen the rail'}
            >⤢</button>
          {/if}
          <!--
            The sheet's three heights as buttons: ⌃ raises it one, ⌄ lowers it
            one. Both are always there, the one with nowhere to go greyed out,
            so neither moves as the sheet does — ⌃ is always under the same
            thumb. They sit last, where the eye ends the row.
          -->
          {#if narrow && (selWord || railDetent > 0)}
            <button class="wh-act wh-pull" disabled={railDetent >= RAIL_TOP} onclick={() => (railDetent = Math.min(RAIL_TOP, railDetent + 1))} title={railDetent === 0 ? 'open the panel' : 'open it fully'} aria-label={railDetent === 0 ? 'open the panel' : 'open the panel fully'}><svg width="14" height="9" viewBox="0 0 14 9" aria-hidden="true"><path d="M1 8 7 2l6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
            <button class="wh-act wh-pull" disabled={railDetent <= 0} onclick={() => (railDetent = Math.max(0, railDetent - 1))} title="lower the panel" aria-label="lower the panel"><svg width="14" height="9" viewBox="0 0 14 9" aria-hidden="true"><path d="M1 1l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
          {/if}
        </span>
      </div>

      {#if selWord}
        <div class="wh-mean">
          <span class="wh-en"><Sanskrit text={selWord.gloss} source="devanagari" /></span>
          {#if selWord.lemma}
            <span class="wh-stem">← <Sanskrit text={selWord.lemma} source="devanagari" /></span>
          {/if}
        </div>
        <!--
          The pada-pāṭha's ऽ is not the classical avagraha. In सोऽपि it marks an
          elided अ; in a Vedic pada (ऋषि॑ऽभिः) it marks where the stem meets an
          ending in भ् or स्, or one member of a compound the next — nothing is
          lost. A learner who knows only the first reads the second wrong, so
          the pane says which it is, wherever such a word is open.
        -->
        {#if sel && vedicSamhita.has(sel.id) && /.ऽ/.test(selWord.form)}
          <p class="wh-seam"><Sanskrit text="ऽ" source="devanagari" /> here marks where the stem meets its ending, or one part of a compound the next, as the pada-pāṭha writes it — not an elided a.</p>
        {/if}
        <!-- (a text's word may carry only vidyut's tags, which are derived) -->
          {#if selFused}
            <!--
              A word written as several padas (बहूनामेमि is बहूनाम् + एमि)
              gets a line of its own, above the tags: the written word, cut
              into its padas, the one in the head filled. It used to stand in the
              head's own place, the shown pada large and the rest beside
              it — which put the gloss after the LAST pada, so "of many"
              read as the meaning of एमि. The head now names one pada and
              its meaning, as for any word; this switches between them.
            -->
            {@const fusedTokens = tokensOf(list.find((x) => x.id === sel?.id))}
            <div class="wh-padrow" use:scrollHint>
            <div class="wh-padas" role="group" aria-label="the padas of this written word">
              {#each selFused.from.filter((ti: number) => fusedTokens[ti]?.isWord) as ti}
                <button
                  class="wh-pada"
                  class:on={sel?.ti === ti}
                  type="button"
                  aria-pressed={sel?.ti === ti}
                  onclick={() => sel?.ti !== ti && selectToken(sel!.id, ti)}
                ><Sanskrit text={fusedTokens[ti]?.text ?? ''} source="devanagari" /></button>
              {/each}
            </div>
            </div>
          {/if}
        {#if selWord.terms.length || (textMode && selWord.derivedTerms.length)}
          <!--
            Newness is a DOT on the tag, not a block of its own.

            "new here" used to be a second labelled list further down the rail,
            which named the same term twice — once as the thing the reading
            introduces, once as a tag on the word carrying it — and left the
            reader to match them up. The dot puts the fact on the tag it is
            about, and the tag is already the way into the term's note.
          -->
          <div class="wh-tags" use:scrollHint>
            {#each selWord.terms as t}
              <button
                class="chip-btn"
                type="button"
                title={newHere.includes(t.term) ? `${t.en} · new here` : t.en}
                onclick={() => (openTerm = openTerm === t.term ? null : t.term)}
              >
                <Chip
                  label={t.term}
                  script="devanagari"
                  tone={openTerm === t.term ? 'on' : 'quiet'}
                  dot={newHere.includes(t.term)}
                />
              </button>
            {/each}
            <!-- then what the build worked out from the form: the same grammar,
                 dashed because no one authored it -->
            {#each selWord.derivedTerms ?? [] as t}
              <button
                class="chip-btn"
                type="button"
                title={t.en}
                onclick={() => (openTerm = openTerm === t.term ? null : t.term)}
              >
                <Chip
                  label={t.term}
                  script="devanagari"
                  tone={openTerm === t.term ? 'on' : 'quiet'}
                  derived
                />
              </button>
            {/each}
            {#if selWord.terms.some((t: any) => newHere.includes(t.term))}
              <span class="wh-legend">• new here</span>
            {/if}
          </div>
        {/if}
      {/if}
    </div>

    <!-- ── scrolls: the evidence, always this order ─────────────────────── -->
    <div class="evidence">

      {#if openTerm}
        <!-- The tapped tag's note. The tags are pinned in the head, so their
             explanation opens here at the top of the evidence rather than
             growing the head without limit. -->
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">what it means</span>
            <button class="ev-fold" onclick={() => (openTerm = null)} aria-label="close the note">×</button>
          </div>
          <div class="concept">
            {#if termNote}
              <div class="concept-body concept-here">
                <InlineMarkup text={termNote} autoLink onpick={(t) => (openTerm = t)} />
              </div>
            {/if}
            {#if termInfo}
              <div class="concept-head">
                <Sanskrit text={termInfo.term} source="devanagari" />
                {#if $romanAside}<span class="concept-rom">{termInfo.termRoman}</span>{/if}
              </div>
              <div class="concept-body">
                <InlineMarkup text={termInfo.meaning} autoLink onpick={(t) => (openTerm = t)} />
              </div>

            {:else if !termNote}
              <div class="concept-body concept-empty">
                No glossary note yet for <Sanskrit text={openTerm} source="devanagari" />.
              </div>
            {/if}
            {#if termInfo?.sutraRef || termCites?.kale?.length}
              <!--
                Where to read more, one book a line: Kāle's grammar, which
                explains the term in prose (on this site, /grammar), then
                Pāṇini's rule. Each names its section, so the reader knows
                what a link opens before opening it.
              -->
              <dl class="readmore">
                {#if termCites?.kale?.length}
                  <dt>Kāle</dt>
                  <dd>
                    {#each termCites.kale as c}
                      <a href={`/grammar?s=${c.s}`} title={c.why ?? ''}><span class="cite-n"><span class="sec">§</span>{c.s}</span><span class="cite-t"><InlineMarkup text={c.title ?? ''} /></span></a>
                    {/each}
                  </dd>
                {/if}
                {#if termInfo?.sutraRef}
                  <dt>Pāṇini</dt>
                  <dd><a class="sutra" href={`/ref/${termInfo.sutraRef}`}><span class="cite-n">{termInfo.sutraRef}</span></a></dd>
                {/if}
              </dl>
            {/if}
          </div>
          {#if openSystem}
            <!-- The note points into its system: the shape drawn once, this
                 cell boxed, the cells already read lit, the rest still dim. -->
            <SystemCard
              system={openSystem}
              activeTerm={termInfo?.term ?? null}
              wordTerms={new Set(selTermNames)}
              impliedTerms={new Set(selImplied)}
              {metTerms}
              onpick={(t) => (openTerm = t)}
            />
          {:else if openSystems.length > 1}
            <!-- The word's tags do not settle which table this is. Saying so is
                 the honest answer, and the ambiguity is itself the lesson: the
                 tag is an axis of more than one system. -->
            <p class="ambiguous">
              <Sanskrit text={termInfo?.term ?? openTerm} source="devanagari" /> is an axis of more
              than one system, and this word's other tags do not say which.
            </p>
          {/if}

          {#if alsoSystems.length}
            <!-- A shared tag has more than one home; the schema says which, so
                 the rail does too instead of silently picking one. -->
            <div class="also">
              <span class="also-label">also an axis of</span>
              {#each alsoSystems as sys (sys.id)}
                <button class="also-btn" onclick={() => (systemPin = sys.id)}>
                  <Sanskrit text={sys.name} source="devanagari" />
                </button>
              {/each}
              {#if systemPin}
                <button class="also-btn back" onclick={() => (systemPin = null)}>← this word's</button>
              {/if}
            </div>
          {/if}
        </div>
      {/if}

      {#if selWord?.text}
        {@const tx = selWord.text}
        {#if tx.note || tx.wordNote || tx.printed}
          <div class="ev">
            <div class="ev-head"><span class="ev-label">note</span></div>
            {#if tx.note}<p class="tnote"><Sanskrit text={tx.note} source="devanagari" /></p>{/if}
            {#if tx.wordNote}<p class="tnote"><Sanskrit text={tx.wordNote} source="devanagari" /></p>{/if}
            <!-- the source's own reading of a slip the line prints corrected
                 (content/texts/<id>/corrections.yaml) -->
            {#if tx.printed}<p class="tnote printed" title={tx.printedNote ?? undefined}>printed: <Sanskrit text={tx.printed} source="devanagari" /></p>{/if}
          </div>
        {/if}
        <!-- the dictionary: Monier-Williams' first senses, or the editor's
             gloss for this text where it differs -->
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">dictionary</span>
            {#if tx.mw}<span class="ev-meta rom">Monier-Williams{tx.mw.lex ? ` · ${tx.mw.lex}` : ''}</span>{/if}
          </div>
          {#if tx.glossBy === 'author'}
            <p class="sense">{tx.gloss} <span class="by">— in this text</span></p>
          {/if}
          {#if tx.mw}
            <ol class="senses">
              {#each tx.mw.senses.slice(0, 3) as sense}<li>{sense}</li>{/each}
            </ol>
            <a class="mwlink" href={tx.mw.url} target="_blank" rel="noopener">
              <Sanskrit text={selWord.lemma} source="devanagari" /> in Monier-Williams (Cologne) ↗
            </a>
          {:else}
            <p class="sense quietp">Not a headword in Monier-Williams.</p>
          {/if}
        </div>
      {/if}

      {#if selWord && (selWord.cites.length || selDecomp)}
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">how it is formed</span>
            <!-- the count on the shut row, so it says what is behind it rather
                 than making you open it to find out -->
            {#if selWord.cites.length}
              <span class="ev-meta rom">
                {selWord.cites.length}
                {selWord.cites.length === 1 ? 'sūtra' : 'sūtras'}
              </span>
            {/if}
            <button
              class="ev-fold"
              onclick={() => (formedOpen = !formedOpen)}
              aria-expanded={formedOpen}
              aria-label={formedOpen ? 'fold the derivation away' : 'show how it is formed'}
            >{formedOpen ? '−' : '+'}</button>
          </div>
          {#if formedOpen}
            {#if selDecomp}
              <div class="formed">
                <span class="formed-parts"><Sanskrit text={selDecomp.parts} source="devanagari" /></span>
                <span class="formed-kind"><Sanskrit text={selDecomp.label} source="devanagari" /></span>
              </div>
            {/if}
            <div class="cites">
              {#each selWord.cites as c}
                <button class="cite" onclick={() => goto('/ref/' + c.cite)}>
                  <span class="cite-id">{c.cite}</span>
                  <span class="cite-role"><Sanskrit text={c.role} source="devanagari" /></span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      {/if}

      {#if selParadigm}
        <div class="ev">
          <div class="ev-head">
            <span class="ev-label">paradigm</span>
            <span class="ev-meta">
              <Sanskrit text={selParadigm.stem} source="devanagari" /> ·
              {#if selParadigm.lakara}<Sanskrit
                  text={selParadigm.lakara}
                  source="devanagari"
                /> ({selParadigm.kind}){:else}{selParadigm.kind}{/if}
              {#if selParadigm.source}
                <!-- a table vidyut cannot derive, built from the grammar's rule -->
                · <a class="ev-cite" href="/grammar?s={selParadigm.source.replace(/\D/g, '')}"
                  title="constructed from this section of Kāle's grammar">{selParadigm.source}</a>
              {/if}
            </span>
            <button
              class="ev-fold"
              onclick={() => (paraOpen = !paraOpen)}
              aria-expanded={paraOpen}
              aria-label={paraOpen ? 'fold the paradigm away' : 'show the paradigm'}
            >{paraOpen ? '−' : '+'}</button>
          </div>
          {#if paraOpen}
            <Grid
              script="devanagari"
              surface="sunken"
              colHeads={selParadigm.grid.colHeads}
              rowHeads={selParadigm.grid.rows.map((r: any) => r.label)}
              rows={selParadigm.grid.rows.map((r: any) => r.cells)}
              lit={[selParadigm.row, selParadigm.col]}
            />
          {/if}
        </div>
      {/if}

      {#if railReading}
        <!-- Sentence scope, on its own surface. The line word for word used to
             be nested INSIDE the word block, which made a property of the
             sentence look like a property of the word — and made it vanish
             whenever nothing was selected. -->
        <div class="ev reading">
          <span class="ev-label quiet">{textMode ? (railReading.kind === 'verse' ? 'the verse' : 'the section') : 'the reading'} · {railReading.id}</span>

          {#if runRows.length}
            <div class="run">
              {#each runRows as g (g.ti)}
                <button class="run-row" class:on={g.on} onclick={() => selectToken(railReading.id, g.ti)}>
                  <span class="run-form">{#each g.padas as p}<span class="run-pada" class:split={g.padas.length > 1}><Sanskrit text={p} source="devanagari" /></span>{/each}</span>
                  <span class="run-gloss"><Sanskrit text={g.gloss} source="devanagari" /></span>
                </button>
              {/each}
            </div>
          {/if}

          {#if railReading.vyakhya || railReading.vyakhya_en}
            <div class="vyakhya">
              {#if railReading.vyakhya}
                <span class="vyakhya-dev"><Sanskrit text={railReading.vyakhya} source="devanagari" /></span>
              {/if}
              {#if railReading.vyakhya_en}
                <!-- the explanations are written with **bold** and *italic*; 94 of
                     them showed the asterisks -->
                <p class="vyakhya-en">
                  {#each emphasis(railReading.vyakhya_en.trim()) as part}
                    {#if part.b}<strong><Sanskrit text={part.t} source="devanagari" /></strong>{:else if part.i}<em><Sanskrit text={part.t} source="devanagari" /></em>{:else}<Sanskrit text={part.t} source="devanagari" />{/if}
                  {/each}
                </p>
              {/if}
            </div>
          {/if}

        </div>
      {/if}

      {#if selWord?.text}
        <!-- whose analysis this is: vidyut's, or the editor's -->
        <div class="ev provenance">
          <span>{SOURCE[selWord.text.source]}{selWord.text.alts > 1 ? ` · ${selWord.text.alts} analyses offered` : ''}</span>
          <span>§ {selWord.text.section}</span>
        </div>
      {/if}
    </div>

    <!-- ── pinned: the drill ────────────────────────────────────────────── -->
    <div class="railfoot">
      <button class="quizme foot accent" onclick={drawFromDeck} disabled={!deckCards.length}>
        {deckCards.length ? `quiz me · ${deckCards.length} ready` : 'quiz me · read a line first'}
      </button>
      <span class="foot-counts">{checked.size} checked<br />{seen.size} read</span>
    </div>

    {@render quizBlock()}
  </div>
{/snippet}

{#if error}
  <div class="status">{error}</div>
{:else if !loaded}
  <div class="status">loading the reader…</div>
{:else}
  <Shelf left={shelfLeft} right={shelfRight} progress={progressPct} />

  <Shell
    {spine}
    {rail}
    railFrame
    sheets
    bind:railDetent
    bind:spineOpen
    railWidth={railWide ? '520px' : '360px'}
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      data-reading-top
      class="body"
      onpointerdown={narrow ? swipeLine.onpointerdown : undefined}
      onpointerup={narrow ? swipeLine.onpointerup : undefined}
      onpointercancel={narrow ? swipeLine.onpointercancel : undefined}
    >
      {#each rows as row}
        {#if row.head && row.resumed}
          <!-- a chapter already opened: one hairline with the name inline, so a
               thrashing page reads as texture rather than as thirteen headings -->
          <div data-ch-id={row.chId} class="ch-resume">
            <span class="ch-resume-dev"><Sanskrit text={row.dev} source="devanagari" /></span>
          </div>
        {:else if row.head && textMode}
          <!-- a text's head: the work, its title, the part open, and the ways
               to take it away — the text, this part, this section -->
          <div data-ch-id={row.chId} class="ch-head">
            {#if tMeta}
              {@const tm = tMeta}
              {@const p = tm.parts[partIdx]}
              {@const sec = tPart?.sections.find((x) => x.id === focused?.id) ?? tPart?.sections[0]}
              <span class="label"><Sanskrit text={tm.work} source="devanagari" /> · {tm.place}</span>
              <span class="ch-dev"><Sanskrit text={tm.title} source="devanagari" /></span>
              <span class="ch-en">{tm.title_en}{#if tm.parts.length > 1}{' · '}<Sanskrit text={partLabel(p)} source="devanagari" />{/if}</span>
              <SaveControls kind="text" id={tm.id}
                files={[`${tBase(tm.id)}/index.json`, ...tm.parts.map((q) => partUrl(tm.id, q))]}
                downloads={[
                  { label: 'the text', filename: `${tm.id}.html`, html: async () => textToHtml(await wholeText()) },
                  ...(tm.parts.length > 1 ? [{ label: partLabel(p), filename: `${tm.id}-${slugOf(p.id)}.html`,
                    html: async () => textToHtml({ ...(tm as any), sections: tPart!.sections, place: `${tm.place ?? ''} · ${partLabel(p)}` } as ExportText) }] : []),
                  ...(sec ? [{ label: `§ ${sec.id}`, filename: `${tm.id}-${slugOf(sec.id)}.html`,
                    html: async () => textToHtml({ ...(tm as any), sections: [sec], place: `§ ${sec.id}` } as ExportText) }] : [])
                ]} />
            {/if}
          </div>
        {:else if row.head}
          <div data-ch-id={row.chId} class="ch-head">
            <span class="label">chapter</span>
            <span class="ch-dev"><Sanskrit text={row.dev} source="devanagari" /></span>
            <span class="ch-en"><Sanskrit text={row.en} source="devanagari" /></span>
            <SaveControls kind="chapter" id={row.chId} downloads={[{ label: 'chapter', filename: `${row.chId}.html`,
              html: () => chapterToHtml({ id: row.chId, dev: row.dev, en: row.en }, list.filter((r) => r.chapter === row.chId)) }]} />
          </div>
        {:else}
          <article
            data-ex-id={row.id}
            class="ex"
            class:roman={$displayScript === 'iast'}
            class:active={railReading?.id === row.id}
            class:grouped={row.grouped}
            class:runstart={row.runStart}
            class:runend={row.runEnd}
            class:verse={row.verse}
            role="presentation"
            onmouseenter={() => enterReading(row.id)}
            onmouseleave={() => leaveReading(row.id)}
          >
            <div class="ex-head">
              <span class="ex-index">{row.indexLabel}</span>
              <span class="ex-teaches"><Sanskrit text={row.teaches} source="devanagari" /></span>
              {#if row.translation && !row.translationWith && !(!textMode && mode === 'gloss')}
                <button class="tr-ctl tr-eye" aria-pressed={revealed.has(row.id)} onclick={() => toggleReveal(row.id)}
                  title={revealed.has(row.id) ? 'hide the translation' : 'show the translation'}
                  aria-label={revealed.has(row.id) ? 'hide the translation' : 'show the translation'}>
                  <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6s2.6-5 7-5 7 5 7 5-2.6 5-7 5-7-5-7-5z" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1.3"/>{#if revealed.has(row.id)}<path d="M2 11 14 1" stroke="currentColor" stroke-width="1.3"/>{/if}</svg>
                </button>
              {/if}
            </div>

            <!-- interlinear sentence. Paradigm readings (देव, फल, नदी, भू) are
                 filtered out of the column upstream — their tables show in the
                 rail now — so every card here is a sentence. -->
            <!-- A token is the word and nothing else. Nothing sits beneath it,
                 so no gloss can set the column width and pull the line apart;
                 word-for-word glossing is the rail's job now. -->
            <div class="tokens" class:il={interlinear} class:mkd={marked}>
              {#if !padaccheda && row.written}
                {#each row.written as w}
                  {#if w.br}
                    <span class="line-br" aria-hidden="true"></span>
                  {:else if w.isWord}
                    <span
                      class="token"
                      class:hot={w.from.some((i: number) => hl(row.id, i))}
                      class:focal={w.focal}
                      class:sel={sel?.id === row.id && w.from.includes(sel?.ti)}
                      role="presentation"
                      title={w.gloss}
                      onmouseenter={() => enterWord(row.id, w.ti)}
                      onmouseleave={leaveWord}
                      onclick={() => tapWritten(row.id, w)}
                    >{#if marked}<span class="mk" aria-hidden="true" title={MARK_TITLE(w.mark)}>{#if w.mark?.k === 'case'}{#each Array(w.mark.n) as _}<i class="dot"></i>{/each}{:else if w.mark?.k === 'voc'}<i class="ring"></i>{:else if w.mark?.k === 'verb'}<i class="bar"></i>{/if}</span>{/if}
                      <!-- a word written as several padas stays as written when
                           selected: the head names its padas -->
                      <Sanskrit text={w.text} source="devanagari" />{#if interlinear}<span class="ilg">{w.gloss || ' '}</span>{/if}</span>
                  {:else}
                    <span class="token punct"><Sanskrit text={w.text} source="devanagari" /></span>
                  {/if}
                {/each}
              {:else}
              {#each row.tokens as tok}
                {#if tok.br}
                  <span class="line-br" aria-hidden="true"></span>
                {:else if tok.isWord}
                  <span
                    class="token"
                    class:hot={hl(row.id, tok.ti)}
                    class:focal={tok.focal}
                    class:sel={sel?.id === row.id && sel?.ti === tok.ti}
                    role="presentation"
                    title={tok.gloss}
                    onmouseenter={() => enterWord(row.id, tok.ti)}
                    onmouseleave={leaveWord}
                    onclick={() => selectToken(row.id, tok.ti)}
                  >{#if marked}<span class="mk" aria-hidden="true" title={MARK_TITLE(tok.mark)}>{#if tok.mark?.k === 'case'}{#each Array(tok.mark.n) as _}<i class="dot"></i>{/each}{:else if tok.mark?.k === 'voc'}<i class="ring"></i>{:else if tok.mark?.k === 'verb'}<i class="bar"></i>{/if}</span>{/if}
                    {#if padaccheda && tok.split}
                      {#each tok.split as part, pi}
                        {#if pi > 0}<span class="split-plus">+</span>{/if}<Sanskrit
                          text={part}
                          source="devanagari"
                        />
                      {/each}
                    {:else}
                      <Sanskrit text={tok.text} source="devanagari" />
                    {/if}
                    {#if interlinear}<span class="ilg">{tok.gloss || ' '}</span>{/if}
                  </span>
                {:else}
                  <span class="token punct"><Sanskrit text={tok.text} source="devanagari" /></span>
                {/if}
              {/each}
              {/if}
            </div>

            {#if vedicSamhita.has(row.id)}
              <p class="samhita-line" lang="sa"><Sanskrit text={list.find((x) => x.id === row.id)?.sentence ?? ''} source="devanagari" /></p>
            {/if}

            <!--
              The translation and its controls. One quiet row under the verse:
              the eye shows or hides the translation (in recall; glossed shows
              it always), and the translator's name shows his own wording under
              a modernized one. A verse he rendered with another says so, in
              the same row.
            -->
            {#if row.translationWith}
              {#if trOpen(row) || interlinear || mode === 'gloss'}<div class="tr-bar"><span class="tr-with">{row.translationWith}</span></div>{/if}
            {:else if row.translation || !textMode}
              {@const who = (tMeta as any)?.translation?.translator?.split(' ').at(-1) ?? 'translator'}
              {#if trOpen(row)}
                {@const sp = splitSpeaker(row.translation)}
                {#if sp.who}<p class="tr-speaker">{sp.who}</p>{/if}
                <p class="translation"><Sanskrit text={sp.said} source="devanagari" /></p>
                {#if row.translationOriginal && originalShown.has(row.id)}
                  <p class="translation original"><Sanskrit text={row.translationOriginal} source="devanagari" /></p>
                {/if}
                {#if row.translationOriginal}
                  <div class="tr-bar">
                    <button class="tr-ctl tr-who" aria-pressed={originalShown.has(row.id)} onclick={() => toggleOriginal(row.id)}
                      title={`${originalShown.has(row.id) ? 'hide' : 'show'} ${who}'s own wording`}>{who}</button>
                  </div>
                {/if}
              {/if}
            {/if}
          </article>
        {/if}
      {/each}

      {#if totalPages > 1}
        {@const chId = bounds[clampedPage]?.chapter ?? null}
        {@const ct = chapterTitle(chId)}
        {@const siblings = bounds.filter((b) => b.chapter === chId)}
        {@const part = siblings.length > 1 ? siblings.indexOf(bounds[clampedPage]) + 1 : 0}
        <div class="pager">
          <button disabled={clampedPage <= 0} onclick={() => setPage(clampedPage - 1)}>
            ← previous
          </button>
          <span class="range">
            <Sanskrit text={ct.dev} source="devanagari" />{#if part}
              · part {part}/{siblings.length}{/if}
            · {startIdx + 1}–{endIdx} of {list.length}
          </span>
          <button disabled={clampedPage >= totalPages - 1} onclick={() => setPage(clampedPage + 1)}>
            next →
          </button>
        </div>
      {/if}

      {#if textMode && tMeta}
        {#if tMeta.parts.length > 1}
          <!-- a text's pager walks its parts -->
          <nav class="pager" aria-label="parts">
            <button disabled={partIdx <= 0} onclick={() => openPart(partIdx - 1)}>
              ← {#if partIdx > 0}<Sanskrit text={partLabel(tMeta.parts[partIdx - 1])} source="devanagari" />{/if}
            </button>
            <span class="range"><Sanskrit text={partLabel(tMeta.parts[partIdx])} source="devanagari" /> · {partIdx + 1} of {tMeta.parts.length}</span>
            <button disabled={partIdx >= tMeta.parts.length - 1} onclick={() => openPart(partIdx + 1)}>
              {#if partIdx < tMeta.parts.length - 1}<Sanskrit text={partLabel(tMeta.parts[partIdx + 1])} source="devanagari" />{/if} →
            </button>
          </nav>
        {/if}
        <footer class="credit">
          <p>{tMeta.source.edition}; source <code>{tMeta.source.file}</code>{#if tMeta.source.ref}, {tMeta.source.ref}{/if}.</p>
          {#if (tMeta as any).translation}
            {@const tr = (tMeta as any).translation}
            {#if tr.adapted}
              <p>Translation adapted from {tr.translator}, <i>{tr.title}</i> ({tr.publisher}, {tr.year}; public domain), modernized for this site; his own wording is one tap away under each section.</p>
            {:else}
              <p>Translation: {tr.translator}, <i>{tr.title}</i> ({tr.publisher}, {tr.year}); public domain.</p>
            {/if}
          {/if}
          <p>
            Segmentation and analysis by <a href="https://github.com/ambuda-org/vidyut" target="_blank" rel="noopener">vidyut</a>,
            checked and corrected by the editor. Meanings from Monier-Williams, <i>A Sanskrit-English Dictionary</i> (1899),
            digitised by the <a href="https://www.sanskrit-lexicon.uni-koeln.de/" target="_blank" rel="noopener">Cologne Digital Sanskrit Dictionaries</a>,
            used under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>
            (first senses only, lightly cleaned); this text's glosses are shared under the same licence.
            <a href="/about#credits">Credits</a>.
          </p>
        </footer>
      {/if}

    </div>
  </Shell>
{/if}

<style>
  .sources-shelf {
    margin-top: 18px;
    padding-top: 12px;
    border-top: 1px solid var(--rule);
    display: flex;
    flex-direction: column;
  }
  .status {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
    padding: 40px 24px;
    text-align: center;
  }

  /* ── shelf ───────────────────────────────────────────────────────────── */
  .quiet {
    color: var(--faint);
  }
  .toggle {
    font-family: var(--font-mono);
    font-size: 12px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--muted);
    padding: 4px 11px;
    cursor: pointer;
  }
  .toggle.on {
    border-color: var(--accent);
    color: var(--accent);
  }
  .jump {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .jump input {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 3px 8px;
    width: 130px;
    outline: none;
  }
  .jump input:focus {
    border-color: var(--accent);
  }
  .jump input::placeholder {
    color: var(--faint);
  }

  /* ── column ──────────────────────────────────────────────────────────── */
  .body {
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 0;
  }

  .ch-head {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 13px;
  }
  .ch-dev {
    font-family: var(--font-deva);
    font-size: 27px;
    font-weight: 600;
  }
  .ch-en {
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }

  /* A chapter the reader is returning to: a 1px rule with the name inline. */
  .ch-resume {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--faint);
  }
  .ch-resume::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--rule);
  }
  .ch-resume-dev {
    font-family: var(--font-deva);
    font-size: 14px;
  }

  .ex {
    display: flex;
    flex-direction: column;
    gap: 13px;
    /* room for the marker, always reserved, so lighting a card cannot shift the
       column sideways as you move down it */
    border-left: 2px solid transparent;
    padding-left: 16px;
    margin-left: -18px;
    /* keeps scrollIntoView from tucking a card under the sticky nav and shelf */
    scroll-margin-top: calc(var(--sticky-rail) + 14px);
    scroll-margin-bottom: 24px;
  }
  /*
    Which line you are on. The class was already being set from `railReading`
    and had no rule behind it, so nothing was marked: the rail would fill with
    a reading's commentary while the column gave no clue which of a dozen cards
    it belonged to. A rule in the accent and a barely-tinted ground — enough to
    find at a glance, too little to compete with the text.
  */
  .ex.active {
    border-left-color: var(--accent);
    background: var(--sunken);
  }
  /* A run of short readings at one tier is one lesson delivered as N cards:
     tighten them into a single block rather than N sets of chrome. */
  .ex.grouped {
    gap: 10px;
  }
  .ex.grouped:not(.runstart) .ex-head {
    display: none;
  }
  .ex.grouped:not(.runend) {
    margin-bottom: -18px;
  }

  .ex-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }
  .ex-teaches {
    color: var(--quiet);
  }

  .tokens {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 10px;
    align-items: flex-end;
  }
  .token {
    font-family: var(--font-deva);
    /* --read-scale is the reader's text size (the aa menu; preferences.ts) */
    font-size: calc(26px * var(--read-scale, 1));
    color: var(--ink);
    line-height: 1.35;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    cursor: default;
  }
  .token.punct {
    color: var(--faint);
  }
  /* On a phone, roman runs wider than Devanagari for the same word: a long
     compound in IAST takes a whole line at 26px. A size smaller, roman only. */
  @media (max-width: 560px) {
    .ex.roman .token { font-size: calc(21px * var(--read-scale, 1)); }
  }
  .split-plus {
    color: var(--faint);
    padding: 0 4px;
  }

  /* Focal words carry a saffron underline, not a fill. */
  .token.focal {
    border-bottom-color: var(--accent-soft);
    cursor: pointer;
  }
  .token.hot {
    color: var(--ink-2);
  }
  .token.sel {
    border-bottom-color: var(--accent);
    color: var(--accent);
  }

  .wh-seam {
    margin: 0;
    font-family: var(--font-prose);
    font-size: 13px;
    line-height: 1.4;
    color: var(--muted);
  }
  /* a Vedic verse's saṃhitā, under its pada-pāṭha line */
  .samhita-line {
    margin: 0;
    font-family: var(--font-deva);
    font-size: calc(17px * var(--read-scale, 1));
    color: var(--muted);
  }
  .translation.original {
    font-size: calc(14.5px * var(--read-scale, 1));
    border-left: 2px solid var(--rule-2);
    padding-left: 10px;
  }
  .tr-speaker {
    margin: 0 0 -4px;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
  }
  /* the eye sits in the verse's top corner */
  .tr-ctl.tr-eye {
    margin: -10px -8px -10px auto;
  }
  .ex-head:has(.tr-eye) {
    align-self: stretch;
  }
  /* interlinear: each word over its meaning, the meaning small and clipped so
     a long gloss cannot pull the line apart (the whole sense is in the pane) */
  .tokens.il {
    align-items: flex-start;
    row-gap: 14px;
  }
  .tokens.il .token {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .ilg {
    font-family: var(--font-serif, Georgia, serif);
    font-style: italic;
    font-size: calc(12.5px * var(--read-scale, 1));
    line-height: 1.25;
    color: var(--muted);
    /* a short word may take a gloss up to this wide; a longer one wraps */
    max-width: 8.5em;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 2px;
  }
  /* marked: a sign above each word for its function (dots = the case's number) */
  .tokens.mkd .token {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .mk {
    display: flex;
    gap: 2px;
    height: 7px;
    align-items: center;
    margin-bottom: 1px;
  }
  .mk .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--muted);
  }
  .mk .ring {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.2px solid var(--muted);
  }
  .mk .bar {
    width: 16px;
    height: 3px;
    border-radius: 1px;
    background: var(--ink-2);
  }
  /* the translation's controls: one row, one size, one colour */
  .tr-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 20px;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
  }
  .tr-ctl {
    display: inline-flex;
    align-items: center;
    background: none;
    border: none;
    /* a finger-sized target around a small mark */
    padding: 10px 8px;
    margin: -10px -8px;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  .tr-ctl:hover,
  .tr-ctl[aria-pressed='true'] {
    color: var(--ink-2);
  }
  .tr-who[aria-pressed='true'] {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .translation {
    margin: 0;
    /* a verse translation keeps its translator's lines */
    white-space: pre-line;
    font-size: calc(16px * var(--read-scale, 1));
    color: var(--muted);
    font-style: italic;
  }

  /*
    The English side of the reader, in one typeface whatever the toggle says.

    Each of these runs through <Sanskrit> so a form quoted inside it follows the
    script — that part is right. What was wrong is that the component's font
    class landed on the whole span, so the surrounding English changed face too.
    The :global(span) reaches that element (it belongs to the child component,
    so the scoped selector alone cannot) and hands the stack back down.
  */
  .translation,
  .vyakhya-en,
  .ch-en,
  .gloss,
  .run-gloss,
  .ex-teaches,
  .cite-role,
  .question,
  .verdict {
    font-family: var(--font-prose);
  }
  .quiz-why {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    font-size: 12px;
    color: var(--muted);
  }
  .why-chain {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--ink-2, var(--ink));
  }
  .why-ref {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    text-decoration: none;
  }
  .why-ref:hover {
    text-decoration: underline;
  }
  .translation :global(span),
  .vyakhya-en :global(span),
  .ch-en :global(span),
  .gloss :global(span),
  .run-gloss :global(span),
  .ex-teaches :global(span),
  .cite-role :global(span),
  .question :global(span),
  .verdict :global(span) {
    font-family: inherit;
  }

  .pager {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    border-top: 1px solid var(--rule);
    padding-top: 16px;
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .pager button {
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--ink);
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 5px 11px;
    cursor: pointer;
  }
  .pager button:disabled {
    color: var(--faint);
    border-color: var(--rule);
    cursor: default;
  }
  .range {
    color: var(--quiet);
  }

  .keys {
    color: var(--faint);
  }

  /* ── rail ────────────────────────────────────────────────────────────── */
  /*
    Three regions, and only the middle one scrolls. The head and the foot are
    `flex: none` so the word and the drill hold their place however long the
    evidence between them runs.
  */
  .railframe {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
  }

  /* ── pinned head: the word ── */
  .wordhead {
    flex: none;
    background: var(--sunken);
    border-bottom: 1px solid var(--rule-2);
    padding: 14px 16px 13px;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .wh-top {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .wh-form {
    font-family: var(--font-deva);
    font-size: 28px;
    line-height: 1.15;
    font-weight: 600;
    color: var(--ink);
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .wh-form.none {
    color: var(--faint);
    font-weight: 400;
  }
  .wh-rom {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .wh-acts {
    margin-left: auto;
    display: flex;
    gap: 6px;
    flex: none;
  }
  .wh-act {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1;
    color: var(--ink-2);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .wh-act:hover:not(:disabled) {
    border-color: var(--accent);
    color: var(--accent);
  }
  /* already banked: the star stays lit rather than going grey, since "in your
     deck" is a state to see, not a control to mourn */
  .wh-act.on,
  .wh-act.on:disabled {
    color: var(--accent);
    border-color: var(--accent);
    cursor: default;
  }
  .wh-mean {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }
  .wh-en {
    font-family: var(--font-prose);
    font-size: 15px;
    color: var(--ink);
  }
  .wh-stem {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--quiet);
  }
  .wh-tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }
  /* the scroll hint (scrollHint): a hairline track, a short bar for the view */
  .wh-padrow:global(.scrolls),
  .wh-tags:global(.scrolls) {
    padding-bottom: 7px;
    background-image: linear-gradient(var(--rule-2), var(--rule-2)), linear-gradient(var(--muted), var(--muted));
    background-repeat: no-repeat;
    background-size: 100% 1px, var(--thumb-w, 30%) 2px;
    background-position: 0 100%, var(--thumb-x, 0%) 100%;
  }
  /* what the dot on a tag means, said once at the end of the row */
  .wh-legend {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }

  /* ── the scrolling middle ── */
  .evidence {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
  }
  .ev {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 13px 16px 15px;
    border-bottom: 1px solid var(--rule);
  }
  /* the reading is sentence scope, so it sits on the other surface — word scope
     and sentence scope read apart without needing a heading to say so */
  .ev.reading {
    background: var(--sunken);
    border-bottom-color: var(--rule-2);
    gap: 12px;
  }
  .ev-label {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .ev-label.quiet {
    color: var(--muted);
  }
  .ev-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .ev-meta {
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--quiet);
    min-width: 0;
  }
  /* a count is not Sanskrit, so it does not take the Devanagari face */
  .ev-meta.rom {
    font-family: var(--font-mono);
    font-size: 11px;
  }
  .ev-fold {
    margin-left: auto;
    flex: none;
    font-family: var(--font-mono);
    font-size: 13px;
    line-height: 1;
    color: var(--accent);
    background: transparent;
    border: none;
    padding: 2px 0 2px 8px;
    cursor: pointer;
  }
  .ev-fold:hover {
    color: var(--accent-hover);
  }

  /* how it is formed: the parts, then the rules */
  .formed {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
  }
  .formed-parts {
    font-family: var(--font-deva);
    font-size: 16px;
    color: var(--ink);
  }
  .formed-kind {
    font-family: var(--font-deva);
    font-size: 12px;
    color: var(--faint);
  }

  .vyakhya {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: 1px solid var(--rule-2);
    padding-top: 11px;
  }
  .vyakhya-dev {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
  }
  .vyakhya-en {
    margin: 0;
    font-size: 14px;
    color: var(--muted);
    font-style: italic;
  }

  /* the line, word for word */
  .run {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .run-row {
    display: grid;
    grid-template-columns: 5.5rem minmax(0, 1fr);
    gap: 10px;
    align-items: baseline;
    text-align: left;
    background: transparent;
    border: none;
    border-left: 2px solid transparent;
    border-radius: var(--radius);
    padding: 2px 0 3px 8px;
    margin-left: -10px;
    cursor: pointer;
    font: inherit;
  }
  .run-row.on {
    border-left-color: var(--accent);
  }
  .run-form {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
  }
  .run-row.on .run-form {
    color: var(--accent);
  }
  /* a sandhi word's padas, each a chip like the text page's "in this word" */
  .run-form { display: flex; flex-wrap: wrap; gap: 4px; }
  .run-pada.split {
    border: 1px solid var(--rule-2);
    padding: 0 6px;
    line-height: 1.5;
  }
  .run-gloss {
    font-size: 13px;
    line-height: 1.45;
    color: var(--muted);
  }
  .run-row.on .run-gloss {
    color: var(--ink);
  }

  .quizme {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 8px 10px;
    text-align: left;
    cursor: pointer;
  }
  /* Nothing read yet: the control stays put and says why, rather than vanishing
     and leaving you to wonder whether the quiz is broken. */
  .quizme:disabled {
    color: var(--quiet);
    border-color: var(--rule);
    cursor: default;
  }
  .quizme:hover:not(:disabled) {
    border-color: var(--accent);
    color: var(--accent);
  }

  /* ── pinned foot: the drill ── */
  .railfoot {
    flex: none;
    border-top: 1px solid var(--rule-2);
    background: var(--paper);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* In the foot the control is the primary action of the pane, so it is filled
     rather than outlined — the one saturated thing in the rail. */
  .quizme.foot {
    flex: 1 1 auto;
    text-align: center;
    padding: 9px 10px;
    font-size: 11.5px;
    letter-spacing: 0.04em;
  }
  .quizme.foot.accent:not(:disabled) {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--paper);
  }
  .quizme.foot.accent:not(:disabled):hover {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
    color: var(--paper);
  }
  .foot-counts {
    flex: none;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.3;
    color: var(--quiet);
  }

  /*
    ── the quiz takeover ──

    Absolutely positioned over the frame rather than swapped in for it: the rail
    underneath keeps its scroll position, so returning from a question puts you
    back exactly where you were reading. Its own head and foot line up with the
    frame's, so the panel's furniture does not jump when it opens.
  */
  .takeover {
    position: absolute;
    inset: 0;
    z-index: 3;
    background: var(--paper);
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  .tk-head {
    flex: none;
    background: var(--ink);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* the way out names what you go back to, so leaving costs no thought */
  .tk-back {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 11.5px;
    color: var(--sunken);
    background: transparent;
    border: none;
    border-radius: var(--radius);
    padding: 2px 4px 2px 0;
    cursor: pointer;
  }
  .tk-back:hover {
    color: var(--accent);
  }
  .tk-src {
    margin-left: auto;
    font-family: var(--font-mono);
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .tk-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .tk-foot {
    flex: none;
    border-top: 1px solid var(--rule-2);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* the sentence as an answer space — tokens you tap, not options you read */
  .quiz-line {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    align-items: baseline;
    padding: 2px 0 4px;
  }
  .qtok {
    font-family: var(--font-deva);
    font-size: 17px;
    color: var(--ink);
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 1px 0 2px;
    cursor: pointer;
  }
  .qtok:hover {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }
  .qtok.punct {
    color: var(--faint);
    border-bottom-color: transparent;
    cursor: default;
  }

  .ask {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid var(--rule);
    padding-top: 14px;
  }
  .phrase {
    font-family: var(--font-deva);
    font-size: 16px;
    color: var(--ink);
  }
  .phrase.context {
    color: var(--faint);
    font-size: 19px;
    display: flex;
    flex-wrap: wrap;
    gap: 2px 8px;
    align-items: baseline;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 16px;
  }
  .ctok {
    border-bottom: 2px solid transparent;
    padding-bottom: 1px;
  }
  /* the word the question is about. The rest of the clause drops to faint, so
     the mark is the only thing at full weight in the line. */
  .ctok.on {
    color: var(--ink);
    border-bottom-color: var(--accent);
  }
  /* the daṇḍa belongs to the word before it, not to the gap */
  .ctok.punct {
    margin-left: -6px;
    color: var(--faint);
  }
  .question {
    font-size: 17px;
    line-height: 1.5;
    color: var(--ink);
    text-wrap: pretty;
  }
  /*
    One column, full width. A two-up grid put four Sanskrit options in half the
    rail each, which truncated the long ones (सर्वनाम-भेद values run to 14
    characters) and made the pair on each row look like a choice between two.
  */
  .options {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .opt {
    font-family: var(--font-deva);
    font-size: 16px;
    text-align: left;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 10px 12px;
    cursor: pointer;
  }
  .opt:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
  }
  .skip {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .skip:hover {
    color: var(--ink);
  }

  /* Right in the done accent, wrong in saffron, shown in quiet — the same pair
     the review session uses, so a right answer looks the same everywhere. */
  .verdict {
    font-family: var(--font-mono);
    font-size: 12px;
  }
  .verdict.ok {
    color: var(--accent-ok);
  }
  .verdict.miss {
    color: var(--accent);
  }
  .verdict.shown {
    color: var(--quiet);
  }

  .gloss {
    font-size: 17px;
    color: var(--ink);
  }
  /* Each tag is a button that opens its glossary note below the row. */
  .chip-btn {
    all: unset;
    cursor: pointer;
    border-radius: var(--radius);
  }
  .chip-btn:focus-visible {
    outline: 2px solid var(--accent-ref);
    outline-offset: 1px;
  }

  .concept {
    margin-top: 8px;
    padding: 10px 12px;
    border: 1px solid var(--rule-2);
    border-left: 2px solid var(--accent-ref);
    border-radius: var(--radius);
    background: var(--surface-1, transparent);
  }
  .concept-head {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .concept-rom {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
  .concept-body {
    font-size: 13px;
    line-height: 1.6;
    color: var(--ink-2, var(--ink));
  }
  .concept-empty {
    color: var(--muted);
  }
  /* this word's own note, above the glossary's general one */
  .concept-here {
    color: var(--ink);
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--rule);
  }
  /* where to read more: the book in a narrow mono column, its sections beside */
  .readmore {
    margin: 10px 0 0;
    padding-top: 8px;
    border-top: 1px solid var(--rule);
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    column-gap: 12px;
    row-gap: 6px;
    align-items: baseline;
  }
  .readmore dt {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .readmore dd {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  /* one citation: the number in a fixed column, the title wrapping beside it */
  .readmore a {
    display: grid;
    grid-template-columns: 3.4em minmax(0, 1fr);
    align-items: baseline;
    text-decoration: none;
  }
  .cite-n {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--accent-ref);
  }
  .cite-n .sec {
    font-family: var(--font-prose);
    font-size: 13px;
    margin-right: 2px;
  }
  .readmore a.sutra {
    display: inline;
  }
  .readmore a:hover .cite-t,
  .readmore a.sutra:hover .cite-n {
    text-decoration: underline;
  }
  .cite-t {
    font-family: var(--font-prose);
    font-size: 14px;
    line-height: 1.35;
    color: var(--ink-2);
  }

  /* a tag with more than one home says so, rather than the rail picking one */
  .also {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 8px;
    margin-top: 8px;
  }
  .also-label {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--faint);
  }
  .also-btn {
    font-family: var(--font-deva);
    font-size: 12px;
    color: var(--accent-ref);
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 2px 8px;
    cursor: pointer;
  }
  .also-btn:hover {
    border-color: var(--accent-ref);
  }
  .also-btn.back {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--muted);
  }
  .ambiguous {
    margin: 8px 0 0;
    font-family: var(--font-prose);
    font-size: 13px;
    line-height: 1.55;
    color: var(--muted);
  }

  .decomp {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .decomp-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }
  .decomp-parts {
    font-family: var(--font-deva);
    font-size: 15px;
    color: var(--ink);
  }

  /*
    One rule per ROW: the reference in its own column, the description beside
    it. Stacked, five citations ran to ten lines and pushed the paradigm off
    the panel; ranged left in a fixed column they read as a list of rules,
    which is what they are.
  */
  .cite {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 10px;
    align-items: baseline;
    text-align: left;
    background: var(--sunken);
    border: none;
    border-radius: var(--radius);
    padding: 6px 8px;
    cursor: pointer;
  }
  .cites {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .cite:hover {
    background: var(--accent-soft);
  }
  .cite-id {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--accent-ref);
  }
  .cite-role {
    font-size: 13.5px;
    line-height: 1.45;
    color: var(--ink-2);
  }
  .cite:hover .cite-id {
    text-decoration: underline;
  }

  /* ── the phone ───────────────────────────────────────────────────────── */
  @media (max-width: 960px) {
    /*
      The rail is a SHEET here, so it is pinned again — to the viewport rather
      than to a grid cell — and keeps the whole frame: head, scrolling middle,
      foot. Only how much of it shows changes, with the detent.
    */
    .railframe.sheeted {
      height: 100%;
      overflow: hidden;
    }

    /* PEEK — the head and nothing else, so the line stays on screen behind it */
    .railframe.at-peek .evidence,
    .railframe.at-peek .railfoot {
      display: none;
    }
    /*
      PEEK is the one place the sheet's height is the word's, so every pixel
      the head spends is a pixel of the line hidden behind it. Two rows, no
      more: the word, its meaning and its actions; then its tags. There is no
      grip above: the head is the handle (tap, or swipe up and down), and ⌃
      ⌄ say what it does.
    */
    .railframe.at-peek .wordhead {
      position: relative;
      border-bottom: none;
      /* the same side padding as the open sheet, so ⌃ ⌄ do not shift */
      padding: 10px 18px;
      gap: 6px;
      cursor: pointer;
    }
    /* the gloss rides on the top line at peek, and the legend has no room */
    .railframe.at-peek .wh-mean,
    .railframe.at-peek .wh-legend {
      display: none;
    }
    /*
      The form never breaks mid-word — a long compound ends in an ellipsis —
      and the gloss takes whatever the form and the three small actions leave.
    */
    .railframe.at-peek .wh-top {
      flex-wrap: nowrap;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }
    .railframe.at-peek .wh-form {
      font-size: 22px;
      flex: 0 1 auto;
      max-width: 42%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: normal;
    }
    .railframe.at-peek .wh-en.peek {
      flex: 1 1 0;
    }
    .railframe.at-peek .wh-pada {
      padding: 4px 10px;
    }
    .wh-en.peek {
      font-size: 15px;
      color: var(--ink-2);
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /*
      One line of tags, which scrolls sideways rather than wrapping: a sixth
      tag costs nothing in height. The chips lose their padding here, not
      their borders, so authored and derived still read apart.
    */
    .railframe.at-peek .wh-tags {
      flex-wrap: nowrap;
      overflow-x: auto;
      scrollbar-width: none;
      gap: 4px;
    }
    .railframe.at-peek .wh-tags::-webkit-scrollbar {
      display: none;
    }
    .railframe.at-peek .wh-tags .chip-btn {
      flex: none;
    }
    .railframe.at-peek .wh-tags :global(.chip) {
      padding: 0 6px;
      line-height: 1.6;
    }
    /*
      The actions at peek are glyphs, not boxes: a 44px square drawn around ★
      spent a fifth of the row on a border. The TARGET stays a thumb's width —
      the button is 40px tall and 36 wide — only the drawing shrinks.
    */
    .railframe.at-peek .wh-acts {
      margin-left: 0;
      gap: 0;
      margin-block: -8px;
    }
    /* the same glyphs at every height of the sheet, so ⌃ ⌄ ★ ✎ do not
       change their look as the sheet moves */
    .railframe.sheeted .wh-act {
      width: 36px;
      height: 40px;
      border-color: transparent;
      background: none;
      font-size: 17px;
    }
    .railframe.sheeted .wh-act.on {
      border-color: transparent;
    }
    .railframe.sheeted .wh-act:disabled {
      color: var(--ghost);
      cursor: default;
    }
    .railframe.sheeted .wh-acts {
      gap: 0;
    }
    .wh-pull {
      font-size: 17px;
    }

    /* touch targets: a pointer is 1px, a thumb is 44 */
    .wh-act {
      width: 44px;
      height: 44px;
      font-size: 15px;
    }
    .opt {
      padding: 14px;
      font-size: 17px;
    }
    /* tap-the-word answers are words, so they cannot grow sideways — they grow
       their hit area instead */
    .quiz-line {
      gap: 10px 14px;
    }
    .qtok {
      font-size: 19px;
      padding: 6px 2px 8px;
    }
    .skip {
      font-size: 12px;
      padding: 8px 0;
    }
    .question {
      font-size: 18px;
    }
    .quizme.foot {
      padding: 13px 10px;
      font-size: 12px;
    }
    .wordhead,
    .ev,
    .railfoot {
      padding-left: 18px;
      padding-right: 18px;
    }
    /* clear of the home indicator */
    .tk-foot,
    .railfoot {
      padding-bottom: 20px;
    }
    /* the counts are desktop furniture; the phone's footer is the action alone */
    .railfoot .foot-counts {
      display: none;
    }
    .run-row {
      padding-top: 6px;
      padding-bottom: 7px;
    }

    .spinehead {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 18px 12px;
      border-bottom: 1px solid var(--rule-2);
    }
    .spinehead .jump input {
      width: 116px;
    }
    /* padaccheda goes to the far edge, so the shelf reads as two groups rather
       than one run of controls */
    .toggle {
      margin-left: auto;
    }

    /*
      Before hydration decides the layout, and on any page that does not opt
      into sheets, the rail is still a block in the flow: nothing is pinned, so
      the evidence must not own a scroll box inside a long page and the takeover
      has nothing to take over.
    */
    .railframe:not(.sheeted) {
      height: auto;
      overflow: visible;
    }
    .railframe:not(.sheeted) .evidence,
    .railframe:not(.sheeted) .tk-body {
      overflow-y: visible;
      min-height: 0;
    }
    .railframe:not(.sheeted) .takeover {
      position: static;
      border: 1px solid var(--rule-2);
    }
  }

  /* ── a whole text (textMode) ─────────────────────────────────────────── */
  /* a verse's lines each start a row of their own */
  .line-br {
    flex-basis: 100%;
    height: 0;
  }
  .back {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--muted);
    text-decoration: none;
  }
  .back:hover {
    color: var(--accent);
  }
  .sheet-back {
    display: block;
    padding: 4px 0 12px;
  }
  /* a fused word's padas: one control, the written word cut where it joins */
  .wh-padrow {
    overflow-x: auto;
    scrollbar-width: none;
  }
  .wh-padrow::-webkit-scrollbar {
    display: none;
  }
  .wh-padas {
    display: flex;
    width: max-content;
    border: 1px solid var(--ink-2);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .wh-pada {
    flex: none;
    font-family: var(--font-deva);
    font-size: 13px;
    line-height: 1.5;
    padding: 2px 9px;
    color: var(--ink-2);
    background: var(--paper);
    border: none;
    cursor: pointer;
  }
  .wh-pada + .wh-pada {
    border-left: 1px solid var(--ink-2);
  }
  .wh-pada.on {
    background: var(--ink);
    color: var(--paper);
    cursor: default;
  }
  .tnote {
    margin: 0;
    font-family: var(--font-prose);
    font-size: 14px;
    line-height: 1.55;
    color: var(--ink);
  }
  .tnote :global(span) {
    font-family: inherit;
  }
  .tnote.printed {
    color: var(--quiet);
    font-size: 13px;
  }
  .sense {
    margin: 0;
    font-family: var(--font-prose);
    font-size: 14px;
    color: var(--ink);
  }
  .sense .by {
    color: var(--quiet);
    font-size: 12px;
  }
  .quietp {
    color: var(--muted);
  }
  .senses {
    margin: 0;
    padding-left: 18px;
    font-family: var(--font-prose);
    font-size: 13px;
    line-height: 1.5;
    color: var(--ink-2);
  }
  .mwlink {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-ref);
    text-decoration: none;
  }
  .mwlink:hover {
    text-decoration: underline;
  }
  .ev.provenance {
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
    border-bottom: none;
  }
  .credit {
    border-top: 1px solid var(--rule);
    padding-top: 12px;
    font-family: var(--font-prose);
    font-size: 12.5px;
    color: var(--muted);
    line-height: 1.55;
  }
  .credit p {
    margin: 0 0 6px;
  }
  .credit a {
    color: var(--accent-ref);
  }
</style>
