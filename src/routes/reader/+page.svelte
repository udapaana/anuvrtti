<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
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
  import { wordBank } from '$lib/stores/wordBank';

  import { paradigmIndex, resolve as resolveParadigm, PARADIGM_READING_IDS } from '$lib/reader/wordParadigm';
  import { decompose } from '$lib/reader/wordDecomp';
  // Graded reader: a chapter spine (left), interlinear gloss reading with
  // word-identity tags (centre), and a scroll-synced sūtra derivation rail
  // (right), all on the shared Shell. Paginated (PAGE per page) so it scales
  // past a few thousand readings. Colour comes from the tokens in app.css.
  const PAGE = 20;

  type Reading = any;
  type Chapter = { id: string; title: string; readings: Reading[] };

  let chapters = $state<Chapter[]>([]);
  let sequence = $state<Reading[]>([]);
  let usage = $state<any>(null); // usage.json — carries per-word paradigms
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
  // `padaccheda` is whether words are split at their sandhi joins. They compose —
  // you can have cheda WITH glosses — so padaccheda is its own toggle, not a
  // third mutually-exclusive mode.
  type Mode = 'recall' | 'gloss';
  let mode = $state<Mode>('recall');
  let padaccheda = $state(false);
  let sel = $state<{ id: string; ti: number } | null>(null);
  let pick = $state<string | null>(null);
  let checked = $state<Set<string>>(new Set());
  let showTr = $state(false);
  let hoverEx = $state<string | null>(null);
  let hoverWi = $state<number | null>(null);

  // SEEN — every reading whose card has scrolled ABOVE the fold: you read it and
  // moved on. This is the quiz deck: the quiz draws a random word from any seen
  // reading, NOT the word you just clicked (which you already know). "Seen" is
  // defined by the scroll itself — no card-compression, no forced single-card.
  let seen = $state<Set<string>>(new Set());
  // A quiz drawn from the seen deck: {id, wi} of a random word, or null.
  let deckQuiz = $state<{ id: string; wi: number } | null>(null);

  let io: IntersectionObserver | null = null;
  let vis = new Map<string, number>();

  onMount(async () => {
    try {
      const res = await fetch(dataUrl('/data/readings.json'));
      if (!res.ok) throw new Error('could not load readings (' + res.status + ')');
      const data = await res.json();
      chapters = data.chapters ?? [];
      sequence = data.sequence ?? [];
      // usage.json carries the per-word paradigms (all cells, from vidyut) that
      // the rail's table needs. Best-effort: no table if it fails to load.
      try { usage = await (await fetch(dataUrl('/data/usage.json'))).json(); } catch { usage = null; }
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
        return { ti, text: tx, wi, gloss: wi >= 0 ? wordsRaw[wi].gloss || '' : '', isWord: wi >= 0, focal, split };
      });
    tokenCache.set(r.id, out);
    return out;
  }

  // ── interlinear token + word identity processing (matches design) ───────────
  function processEx(r: Reading, n: number) {
    const id = r.id;
    const words = (r.words || []).map((w: any, wi: number) => {
      const terms = (w.notes || []).filter((nt: any) => nt.term).map((nt: any) => ({ term: nt.term, en: nt.en || '' }));
      return { wi, form: w.form, gloss: w.gloss || '', terms };
    });

    const tokens = tokensOf(r);

    return {
      ex: true,
      id,
      chId: r.chapter,
      indexLabel: String(n).padStart(2, '0'),
      teaches: r.teaches || '',
      tokens,
      words,
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
    const cites = (w.notes ?? []).filter((n: any) => n.cite).map((n: any) => ({ cite: n.cite, role: n.role ?? '' }));
    return { id: r.id, wi, form: w.form, lemma: w.lemma ?? '', gloss: w.gloss ?? '', quiz: w.quiz ?? null, terms, cites, notes: w.notes ?? [], derived: w.derived ?? {}, sentence: r.sentence ?? '', translation: r.translation ?? '' };
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
  /** The drawn card — the quiz block. Never the word you are looking at. */
  const quizWord = $derived(deckQuiz ? wordAt(deckQuiz.id, deckQuiz.wi) : null);

  /** A question is on screen and unanswered. Governs the QUIZ block alone. */
  const asking = $derived(!!quizWord?.quiz && pick === null);

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
  const quizContext = $derived.by(() => {
    const q = quizWord;
    if (!q?.quiz) return '';
    if (q.quiz.kind === 'production') return '';
    if (q.quiz.phrase) return q.quiz.phrase;
    const clauses = String(q.sentence ?? '')
      .split(/(?<=[।॥])/)
      .map((c: string) => c.trim())
      .filter(Boolean);
    return clauses.find((c: string) => c.includes(q.form)) ?? q.sentence ?? '';
  });

  // The word-for-word run of the selected line. It belongs to the grammar, so
  // it no longer waits on a quiz — the question is about another reading.
  const runRows = $derived.by(() => {
    const s = sel;
    if (!s) return [];
    const r = list.find((x) => x.id === s.id);
    if (!r) return [];
    // one row per word-bearing TOKEN — a form used twice is two rows, each
    // selecting its own position, rather than one row standing for both
    return tokensOf(r)
      .filter((t: any) => t.isWord)
      .map((t: any) => ({
        ti: t.ti,
        on: t.ti === s.ti,
        form: padaccheda && t.split ? t.split.join(' + ') : t.text,
        gloss: t.gloss ?? ''
      }));
  });

  // The paradigm the selected word belongs to — its declension or conjugation
  // table, shown in the rail below the quiz with the word's own cell lit. Null
  // for words outside the four classes we hold a table for (the rail then shows
  // no table, rather than guessing).
  const selParadigm = $derived.by(() => {
    if (!selWord) return null;
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
    if (!selWord) return null;
    const termNames = (selWord.terms ?? []).map((t: any) => t.term);
    return decompose(termNames, selWord.notes ?? []);
  });

  const verdict = $derived.by(() => {
    const w = quizWord;
    if (!w?.quiz || pick === null) return null;
    // The verdict inks are tokens now, not two hexes of their own: right takes
    // the done accent, wrong takes saffron, shown stays quiet — the same pair
    // the review session uses, so a right answer looks the same everywhere.
    if (pick === '—') return { text: 'shown \u00b7 ' + w.quiz.ans, tone: 'shown' };
    return pick === w.quiz.ans
      ? { text: '\u2713 ' + w.quiz.ans, tone: 'ok' }
      : { text: '\u2717 you said ' + pick + ' \u00b7 it is ' + w.quiz.ans, tone: 'miss' };
  });

  function pickOption(o: string) {
    pick = o;
    // The card that was answered is the QUIZ word, not whatever is selected.
    if (quizWord) checked = new Set([...checked, quizWord.id + ':' + quizWord.wi]);
  }

  // The rail's two disclosure rows. Both close on every new selection, so the
  // rail opens at a predictable height whatever the last word left open.
  let formedOpen = $state(false);
  let paraOpen = $state(false);
  // The grammar block as a whole folds away, for when the question is what you
  // want the rail for. Reopens on the next click, since clicking a word is a
  // request to read it.
  let grammarOpen = $state(true);

  // A click moves the selection and nothing else. It no longer clears a quiz in
  // progress: the two blocks are independent, so looking a word up mid-question
  // is allowed — and expected, since the question is about another reading.
  function selectToken(id: string, ti: number) {
    formedOpen = false;
    paraOpen = false;
    grammarOpen = true;
    if (sel && sel.id === id && sel.ti === ti) { sel = null; return; }
    sel = { id, ti };
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
      (r.words ?? []).forEach((w: any, wi: number) => {
        if (w.quiz) cards.push({ id: r.id, wi });
      });
    });
    return cards;
  });

  // Draw a random card from the seen deck. It sets `deckQuiz` ONLY — the
  // selection stays where the reader put it, so the line being read keeps its
  // explanation while the question sits underneath.
  function drawFromDeck() {
    const deck = deckCards.filter((c) => !(sel && sel.id === c.id && selWord?.wi === c.wi));
    if (!deck.length) return;
    deckQuiz = deck[Math.floor(Math.random() * deck.length)];
    pick = null;
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
</script>

<svelte:head><title>पठनम् · graded reader</title></svelte:head>

{#snippet shelfLeft()}
  <span class="quiet">gloss</span>
  <Segmented
    options={[
      { id: 'recall', label: 'recall' },
      { id: 'gloss', label: 'glossed' }
    ]}
    value={mode}
    onchange={(id) => (mode = id as Mode)}
    ariaLabel="gloss mode"
  />
  <!-- independent axis: split at sandhi joins, composes with either gloss mode -->
  <button class="toggle" class:on={padaccheda} onclick={() => (padaccheda = !padaccheda)}>
    padaccheda
  </button>
  <!-- A jump inside the corpus you are already reading is not a search, so it
       stays here rather than folding into ⌘K. -->
  <form class="jump" onsubmit={jumpFromQuery}>
    <label class="quiet" for="jumpto">go to</label>
    <input id="jumpto" bind:value={jumpQuery} placeholder="ex210 or tier 210" spellcheck="false" />
  </form>
{/snippet}

{#snippet shelfRight()}
  <span class="keys">← → word · ↑ ↓ line</span>
  <span>{checked.size} checked · {seen.size} read · {deckCount} in deck</span>
  <!-- The quiz lives on the shelf, not on the text. It used to be reachable
       only from an empty rail, so the way to get a question was to clear your
       selection or keep clicking words — and a click is for looking a word up.
       Here it is available whatever is selected, and it always draws from the
       deck of readings already scrolled past. -->
  <!-- deckCards, NOT deckCount: `deckCount` is the review bank's due count, a
       different deck. This button draws from readings scrolled past. -->
  <button class="quizme shelf" onclick={drawFromDeck} disabled={!deckCards.length}>
    quiz me{deckCards.length ? ` · ${deckCards.length}` : ''}
  </button>
{/snippet}

{#snippet spine()}
  <Spine
    title="chapters"
    items={chapters.map((c) => {
      const t = titles[c.id] ?? { dev: c.id, en: '' };
      return { id: c.id, label: t.dev, script: 'devanagari' as const, sub: shortEn(t.en) };
    })}
    activeId={focusedChapter}
    onpick={jumpToChapter}
  />
{/snippet}

{#snippet quizBlock()}
  <!--
    The question, as its own block under the grammar. Its word is drawn from a
    reading already scrolled past, never the one selected, so the explanation
    above it cannot give the answer away.
  -->
  {#if quizWord?.quiz}
    <div class="quiz-block">
      <div class="quiz-head">
        <span class="label">from what you have read</span>
        <button class="quiz-close" onclick={closeQuiz} aria-label="close the question">×</button>
      </div>

      {#if quizContext}
        <div class="phrase context"><Sanskrit text={quizContext} source="devanagari" /></div>
      {/if}

      {#if asking}
        <span class="question"><Sanskrit text={quizWord.quiz.q} source="devanagari" /></span>
        <div class="options">
          {#each quizWord.quiz.opts as o}
            <button class="opt" onclick={() => pickOption(o)}>
              <Sanskrit text={o} source="devanagari" />
            </button>
          {/each}
        </div>
        <button class="skip" onclick={() => pickOption('—')}>show the answer</button>
      {:else}
        {#if verdict}
          <span class="verdict {verdict.tone}">{verdict.text}</span>
        {/if}
        <button class="run-row on" onclick={() => selectQuizWord()}>
          <span class="run-form"><Sanskrit text={quizWord.form} source="devanagari" /></span>
          <span class="run-gloss"><Sanskrit text={quizWord.gloss} source="devanagari" /></span>
        </button>
        {#if deckCards.length > 1}
          <button class="quizme" onclick={drawFromDeck}>quiz another →</button>
        {/if}
      {/if}
    </div>
  {/if}
{/snippet}

{#snippet rail()}
  <!--
    The rail stacks, and nothing here replaces anything else:

      the QUESTION — shut by default, opening at the top when you ask for it
      the READING's own commentary (the vyākhyā) — the card you are on
      the WORD you clicked, with its gloss, tags, sūtras and paradigm

    The commentary used to be swapped out for the word block the moment you
    clicked anything, so the note explaining the sentence disappeared exactly
    when you started looking into it. It stays put now; the word arrives below.
  -->
  {#if !deckQuiz}
    <button class="quizme top" onclick={drawFromDeck} disabled={!deckCards.length}>
      {deckCards.length ? `quiz me · ${deckCards.length} to draw from` : 'quiz me · read a line first'}
    </button>
  {/if}
  {@render quizBlock()}

  {#if railReading?.vyakhya || railReading?.vyakhya_en}
    <div class="vyakhya">
      <span class="label">this reading</span>
      {#if railReading.vyakhya}
        <span class="vyakhya-dev"><Sanskrit text={railReading.vyakhya} source="devanagari" /></span>
      {/if}
      {#if railReading.vyakhya_en}
        <p class="vyakhya-en">
          <Sanskrit text={railReading.vyakhya_en.trim()} source="devanagari" />
        </p>
      {/if}
    </div>
  {/if}

  {#if selWord}
    <span class="label word-label">word</span>
    <div class="word">
      <div class="word-head">
        <span class="word-form"><Sanskrit text={selWord.form} source="devanagari" /></span>
        {#if selWord.lemma}
          <!-- the stem is Sanskrit, so it follows the toggle like the form above
               it — printed raw it stayed Devanagari beside a Telugu page -->
          <span class="word-stem"><Sanskrit text={selWord.lemma} source="devanagari" /></span>
        {/if}
        <button
          class="fold"
          onclick={() => (grammarOpen = !grammarOpen)}
          aria-expanded={grammarOpen}
        >{grammarOpen ? '−' : '+'}</button>
      </div>

      {#if grammarOpen}
      <!-- The line, word for word. This is where the glosses went: a list in
           the rail rather than a second row under every word. -->
      <div class="run">
        <span class="label">the line, word for word</span>
        {#each runRows as g (g.ti)}
          <button class="run-row" class:on={g.on} onclick={() => selectToken(selWord.id, g.ti)}>
            <span class="run-form"><Sanskrit text={g.form} source="devanagari" /></span>
            <span class="run-gloss"><Sanskrit text={g.gloss} source="devanagari" /></span>
          </button>
        {/each}
      </div>

        <span class="gloss"><Sanskrit text={selWord.gloss} source="devanagari" /></span>

        {#if selWord.terms.length}
          <div class="terms">
            {#each selWord.terms as t}
              <Chip label={t.term} script="devanagari" title={t.en} />
            {/each}
          </div>
        {/if}

        <!-- Everything the old rail stacked open is still here, as two closed
             rows: the derivation with its sūtras and, when the word sits in no
             grid, its decomposition; then the paradigm. -->
        <!-- A row with nothing behind it is not rendered at all: an inert
             control reads as broken, and absence is the honest answer. -->
        {#if selWord.cites.length || selDecomp}
        <Disclose
          label="how it is formed"
          count={selWord.cites.length
            ? `${selWord.cites.length} ${selWord.cites.length === 1 ? 'sūtra' : 'sūtras'}`
            : null}
          bind:open={formedOpen}
        >
          {#if selDecomp}
            <!-- the decomposition strip: what a NON-declining word is made of.
                 विग्रह for a compound, the affix chain for a derivative, the
                 split for a सन्धि join. -->
            <div class="decomp">
              <span class="decomp-label"><Sanskrit text={selDecomp.label} source="devanagari" /></span>
              <span class="decomp-parts"><Sanskrit text={selDecomp.parts} source="devanagari" /></span>
            </div>
          {/if}
          {#each selWord.cites as c}
            <button class="cite" onclick={() => goto('/ref/' + c.cite)}>
              <span class="cite-id">{c.cite}</span>
              <span class="cite-role"><Sanskrit text={c.role} source="devanagari" /></span>
            </button>
          {/each}
        </Disclose>
        {/if}

        {#if selParadigm}
          <!-- The heading mixes scripts, so it goes in as a snippet: the stem and
               the लकार follow the toggle, the English words never do. -->
          {#snippet paradigmLabel()}
            paradigm ·
            <Sanskrit text={selParadigm.stem} source="devanagari" /> ·
            {#if selParadigm.lakara}<Sanskrit
                text={selParadigm.lakara}
                source="devanagari"
              /> ({selParadigm.kind}){:else}{selParadigm.kind}{/if}
          {/snippet}
          <Disclose label={paradigmLabel} bind:open={paraOpen}>
            <Grid
              script="devanagari"
              surface="sunken"
              colHeads={selParadigm.grid.colHeads}
              rowHeads={selParadigm.grid.rows.map((r: any) => r.label)}
              rows={selParadigm.grid.rows.map((r: any) => r.cells)}
              lit={[selParadigm.row, selParadigm.col]}
            />
          </Disclose>
        {/if}

        <button class="bank" class:has={inDeck} onclick={bankWord} disabled={inDeck}>
          {inDeck ? 'in your deck' : '+ keep for review'}
        </button>
      {/if}
    </div>
  {/if}

{/snippet}

{#if error}
  <div class="status">{error}</div>
{:else if !loaded}
  <div class="status">loading the reader…</div>
{:else}
  <Shelf left={shelfLeft} right={shelfRight} progress={progressPct} />

  <Shell {spine} {rail}>
    <div data-reading-top class="body">
      {#each rows as row}
        {#if row.head && row.resumed}
          <!-- a chapter already opened: one hairline with the name inline, so a
               thrashing page reads as texture rather than as thirteen headings -->
          <div data-ch-id={row.chId} class="ch-resume">
            <span class="ch-resume-dev"><Sanskrit text={row.dev} source="devanagari" /></span>
          </div>
        {:else if row.head}
          <div data-ch-id={row.chId} class="ch-head">
            <span class="label">chapter</span>
            <span class="ch-dev"><Sanskrit text={row.dev} source="devanagari" /></span>
            <span class="ch-en"><Sanskrit text={row.en} source="devanagari" /></span>
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
            <div class="ex-head">
              <span class="ex-index">{row.indexLabel}</span>
              <span class="ex-teaches"><Sanskrit text={row.teaches} source="devanagari" /></span>
            </div>

            <!-- interlinear sentence. Paradigm readings (देव, फल, नदी, भू) are
                 filtered out of the column upstream — their tables show in the
                 rail now — so every card here is a sentence. -->
            <!-- A token is the word and nothing else. Nothing sits beneath it,
                 so no gloss can set the column width and pull the line apart;
                 word-for-word glossing is the rail's job now. -->
            <div class="tokens">
              {#each row.tokens as tok}
                {#if tok.isWord}
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
                  >
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
                  </span>
                {:else}
                  <span class="token punct"><Sanskrit text={tok.text} source="devanagari" /></span>
                {/if}
              {/each}
            </div>

            <p class="translation"><Sanskrit text={row.translation} source="devanagari" /></p>
          </article>
        {/if}
      {/each}

      {#if totalPages > 1}
        <div class="pager">
          <button disabled={clampedPage <= 0} onclick={() => setPage(clampedPage - 1)}>
            ← previous
          </button>
          <span class="range">
            page {clampedPage + 1} / {totalPages} · {startIdx + 1}–{endIdx} of {list.length}
          </span>
          <button disabled={clampedPage >= totalPages - 1} onclick={() => setPage(clampedPage + 1)}>
            next →
          </button>
        </div>
      {/if}

    </div>
  </Shell>
{/if}

<style>
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
    font-size: 26px;
    color: var(--ink);
    line-height: 1.35;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    cursor: default;
  }
  .token.punct {
    color: var(--faint);
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

  .translation {
    margin: 0;
    font-size: 16px;
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
  .cite-role {
    font-family: var(--font-prose);
  }
  .translation :global(span),
  .vyakhya-en :global(span),
  .ch-en :global(span),
  .gloss :global(span),
  .run-gloss :global(span),
  .ex-teaches :global(span),
  .cite-role :global(span) {
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
  .vyakhya {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 14px;
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

  .prompt {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: var(--muted);
  }

  /* the line, word for word */
  .run {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: 1px solid var(--rule);
    padding-top: 13px;
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
  /* The word block sits under the reading's note now, so it needs its own
     heading — the single "word" label at the top of the rail used to serve. */
  .word-label {
    margin-top: 2px;
  }
  /* On the shelf the same control has to sit in a 40px bar, so it loses the
     block padding the rail version needs. */
  .quizme.shelf {
    padding: 3px 9px;
    color: var(--accent);
  }
  .quizme.shelf:hover {
    border-color: var(--accent);
  }
  .quizme:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .word {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .word-head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 0 10px;
  }
  .word-form {
    font-family: var(--font-deva);
    font-size: 28px;
    font-weight: 600;
  }
  .word-stem {
    grid-column: 1;
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  /* folds the whole grammar away, for when the rail is wanted for the question */
  .fold {
    grid-column: 2;
    grid-row: 1;
    font-family: var(--font-mono);
    font-size: 14px;
    line-height: 1;
    color: var(--accent);
    background: transparent;
    border: none;
    padding: 4px 2px;
    cursor: pointer;
  }

  /*
    The question, under the grammar rather than in place of it. The sunken
    surface and the rule above set it apart as a second thing on the rail: what
    is above belongs to the line being read, what is here comes from elsewhere.
  */
  .quiz-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* it sits at the TOP of the rail now, so the rule goes underneath it —
       separating the question from the reading it is not about */
    border-bottom: 1px solid var(--rule-2);
    margin-bottom: 4px;
    padding-bottom: 16px;
  }
  .quizme.top {
    margin-bottom: 2px;
  }
  .quiz-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
  .quiz-close {
    font-family: var(--font-mono);
    font-size: 15px;
    line-height: 1;
    color: var(--quiet);
    background: transparent;
    border: none;
    padding: 2px 4px;
    cursor: pointer;
  }
  .quiz-close:hover {
    color: var(--ink);
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
    color: var(--muted);
    font-size: 15px;
  }
  .question {
    font-size: 15px;
    color: var(--ink-2);
  }
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .opt {
    font-family: var(--font-deva);
    font-size: 15px;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    padding: 7px 10px;
    cursor: pointer;
  }
  .opt:hover {
    border-color: var(--ink);
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
  .terms {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
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

  .cite {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    text-align: left;
    background: transparent;
    border: none;
    border-radius: var(--radius);
    padding: 0;
    cursor: pointer;
  }
  .cite-id {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--accent-ref);
  }
  .cite-role {
    font-size: 13px;
    color: var(--quiet);
    font-style: italic;
  }
  .cite:hover .cite-id {
    text-decoration: underline;
  }

  .bank {
    font-family: var(--font-mono);
    font-size: 12px;
    text-align: left;
    padding: 8px 10px;
    cursor: pointer;
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--accent);
  }
  .bank.has {
    border-color: var(--accent-ok);
    color: var(--accent-ok);
    cursor: default;
  }

  @media (max-width: 960px) {
    .options {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
