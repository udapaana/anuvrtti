<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { replaceState } from '$app/navigation';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import Shell from '$lib/components/ui/Shell.svelte';
  import Shelf from '$lib/components/ui/Shelf.svelte';
  import Spine from '$lib/components/ui/Spine.svelte';
  import Segmented from '$lib/components/ui/Segmented.svelte';
  import Chip from '$lib/components/ui/Chip.svelte';
  import type { Script } from '$lib/transliteration';
  import { lessonLanguage } from '$lib/stores/preferences';
  import { wordBank } from '$lib/stores/wordBank';

  /*
    The workbook door: बालबोधिनी, the primer, plus the practice that comes off
    it. A lesson is read start to finish, so its sections stay as anchored
    blocks in one column — no accordions here. The volume split moved from the
    page body to the shelf and is ?vol= driven, and every vocabulary row carries
    the same "+ keep" affordance as the reader's rail, which is what feeds
    /words and /review.

    The guided path through the Aṣṭādhyāyī is NOT here: it is a syllabus over
    the sūtras, so it sits in Reference as its पथः mode.
  */

  // The "language of discourse" — which support language the lesson explains in.
  let lang = $state<'telugu' | 'english'>('english');
  onMount(() => lessonLanguage.subscribe((l) => (lang = l)));

  // ── data ───────────────────────────────────────────────────────────────────
  // balabodhini.json is built from the structured TOML lessons
  // (scripts/build-balabodhini.ts) and kept in authored shape; this renderer is
  // the single source of truth for layout.
  type Lesson = any;
  let parts = $state<{ part: number; lessons: Lesson[] }[]>([]);
  let flat = $state<Lesson[]>([]);
  let error = $state('');
  let ready = $state(false);
  let lessonIdx = $state(0);

  const LESSON_KEY = 'bb-lesson';

  onMount(async () => {
    try {
      const v = localStorage.getItem(LESSON_KEY);
      if (v != null) lessonIdx = parseInt(v, 10) || 0;
    } catch {}
    try {
      const res = await fetch('/data/balabodhini.json');
      if (!res.ok) throw new Error('could not load the primer (' + res.status + ')');
      const data = await res.json();
      parts = data.parts ?? [];
      flat = parts.flatMap((p) => p.lessons);
      lessonIdx = Math.min(lessonIdx, Math.max(0, flat.length - 1));
      // ?vol= wins over the remembered lesson, so either volume is linkable.
      const wantVol = Number($page.url.searchParams.get('vol'));
      if (wantVol) {
        const first = flat.findIndex((l) => l.part === wantVol);
        if (first >= 0) lessonIdx = first;
      }
      ready = true;
    } catch (e) {
      error = String((e as Error).message || e);
    }
  });

  const lesson = $derived(flat[Math.max(0, Math.min(lessonIdx, flat.length - 1))] ?? null);

  function setLesson(i: number) {
    lessonIdx = i;
    try {
      localStorage.setItem(LESSON_KEY, String(i));
    } catch {}
    requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    });
  }

  // Which volume the current lesson belongs to.
  const activePart = $derived(lesson?.part ?? 1);

  // Jump to the first lesson of a volume, and record it in the URL.
  function jumpToPart(part: number) {
    const first = flat.findIndex((l) => l.part === part);
    if (first < 0) return;
    setLesson(first);
    const url = new URL($page.url);
    url.searchParams.set('vol', String(part));
    replaceState(url, {});
  }

  function pad2(n: any): string {
    return String(n != null ? n : '').padStart(2, '0');
  }

  // The spine shows one volume at a time — 78 lessons in one list is a scroll,
  // not a spine. The shelf chooses which.
  const spineLessons = $derived(
    flat
      .map((l, i) => ({ l, i }))
      .filter(({ l }) => l.part === activePart)
      .map(({ l, i }) => ({
        id: String(i),
        label: l.title_sanskrit_telugu || '',
        script: 'telugu' as const,
        // The number belongs with the gloss, not the title: a lesson number is
        // not Sanskrit and must not go through the transliterator.
        sub: `${pad2(l.number)} · ${l.grammar_focus || l.title_english || ''}`
      }))
  );

  // Section labels are "sanskritTerm — english gloss" (e.g. "svara — vowels").
  // Only the Sanskrit head should transliterate; the English tail stays Roman.
  function splitLabel(t: string): { skt: string; en: string } {
    const i = t.indexOf(' — ');
    return i >= 0 ? { skt: t.slice(0, i), en: t.slice(i + 3) } : { skt: t, en: '' };
  }

  // ── block model ────────────────────────────────────────────────────────────
  type Block = any;

  function buildBlocks(sections: any[]): Block[] {
    const out: Block[] = [];
    let lastPassage: any = null;
    (sections || []).forEach((s) => {
      switch (s.type) {
        case 'grammar_note':
          out.push({
            kind: 'grammar',
            kicker: 'note',
            notes: (s.items || []).map((it: any) => ({ telugu: it.telugu || '', english: it.english || '' }))
          });
          break;
        case 'script_table':
          out.push({
            kind: 'script',
            kicker: 'script',
            label: s.label || '',
            labelTe: s.label_telugu || '',
            cells: (s.items || []).map((it: any) => ({
              iast: it.iast || '',
              noteEn: it.note_english || '',
              noteTe: it.note_telugu || ''
            }))
          });
          break;
        case 'sandhi_table':
          out.push({
            kind: 'sandhi',
            kicker: 'sandhi',
            label: s.label || '',
            labelTe: s.label_telugu || '',
            rows: (s.items || []).map((it: any) => ({
              pattern: it.pattern || '',
              before: it.iast_before || '',
              after: it.iast_after || '',
              english: it.english || ''
            }))
          });
          break;
        case 'vocabulary': {
          const words: any[] = [];
          (s.items || []).forEach((it: any) =>
            (it.words || []).forEach((w: any) =>
              words.push({
                id: w.iast ?? `tel:${w.sanskrit_telugu}`,
                skt: w.sanskrit_telugu || '',
                iast: w.iast ?? null,
                gloss: w.telugu_gloss || '',
                english: w.english || '',
                tag: w.tag || ''
              })
            )
          );
          out.push({ kind: 'vocab', kicker: 'vocabulary', words });
          break;
        }
        case 'reading':
          out.push({
            kind: 'reading',
            kicker: 'reading',
            items: (s.items || []).map((it: any) => ({
              n: pad2(it.n),
              skt: it.sanskrit_telugu || '',
              english: it.english || '',
              telugu: it.telugu || ''
            }))
          });
          break;
        case 'exercises':
          out.push({
            kind: 'exercise',
            kicker: 'exercises',
            items: (s.items || []).map((it: any) => ({
              n: pad2(it.n),
              prompt: it.telugu || '',
              english: it.english || '',
              answer: it.sanskrit_telugu || ''
            }))
          });
          break;
        case 'paradigm':
          out.push(processParadigm(s));
          break;
        case 'passage': {
          const items = (s.items || [])
            .filter((it: any) => !it.sensitive)
            .map((it: any) => ({
              n: it.n,
              skt: it.sanskrit_telugu || '',
              sktSource: 'telugu' as Script,
              english: it.english || '',
              telugu: ''
            }));
          const block = { kind: 'passage', kicker: 'passage', label: s.title || '', items, _byN: {} as any };
          items.forEach((it: any) => (block._byN[it.n] = it));
          out.push(block);
          lastPassage = block;
          break;
        }
        case 'passage_translation': {
          if (lastPassage) {
            (s.items || []).forEach((it: any) => {
              const tgt = lastPassage._byN[it.n];
              if (tgt) tgt.telugu = it.telugu || '';
            });
          } else {
            out.push({
              kind: 'passage',
              kicker: 'passage · translation',
              label: s.title || '',
              items: (s.items || [])
                .filter((it: any) => !it.sensitive)
                .map((it: any) => ({
                  n: it.n,
                  // a bare translation block carries Telugu prose, not Sanskrit
                  skt: it.telugu || '',
                  sktSource: 'telugu' as Script,
                  english: it.english || '',
                  telugu: ''
                }))
            });
          }
          break;
        }
        default:
          break;
      }
    });
    return out;
  }

  // Paradigm tables come in three layouts (moods / stems / standard). Every
  // Sanskrit cell is IAST in the source, rendered through <Sanskrit source="iast">.
  function processParadigm(s: any): Block {
    const base: any = { kind: 'paradigm', kicker: 'paradigm', label: s.label || '', hasGroups: false, groups: [], corner: '' };

    if (s.layout === 'moods' && Array.isArray(s.moods)) {
      const headers: string[] = [];
      s.moods.forEach(() => {
        headers.push('sg.');
        headers.push('pl.');
      });
      const rows = (s.items || []).map((it: any) => ({
        label: it.person || '',
        labelSource: 'english' as Script,
        cells: s.moods.flatMap((_m: string, mi: number) => [
          { lines: [{ text: (it.singular_iast || [])[mi] || '—', source: 'iast' as Script }] },
          { lines: [{ text: (it.plural_iast || [])[mi] || '—', source: 'iast' as Script }] }
        ])
      }));
      return {
        ...base,
        hasGroups: true,
        groups: s.moods.map((m: string) => ({ label: m, source: 'iast' as Script, span: 2 })),
        headers,
        headerSource: 'english' as Script,
        rows
      };
    }

    if (s.layout === 'stems' && Array.isArray(s.stems)) {
      const headers = s.stems.map((st: string) => st);
      const rows = (s.items || []).map((it: any) => {
        let cells: any[];
        if (Array.isArray(it.dual_iast)) {
          cells = s.stems.map((_: string, si: number) => ({
            lines: [{ text: it.dual_iast[si] || '—', source: 'iast' as Script }]
          }));
        } else {
          cells = s.stems.map((_: string, si: number) => {
            const lines: any[] = [
              { text: (it.singular_iast || [])[si] || '—', source: 'iast' as Script, muted: false },
              { text: (it.plural_iast || [])[si] || '—', source: 'iast' as Script, muted: true }
            ];
            if (Array.isArray(it.singular_telugu)) lines.push({ text: it.singular_telugu[si] || '', source: 'telugu' as Script, faint: true });
            if (Array.isArray(it.plural_telugu)) lines.push({ text: it.plural_telugu[si] || '', source: 'telugu' as Script, faint: true });
            return { lines };
          });
        }
        return { label: it.case || '', labelSource: 'iast' as Script, cells };
      });
      return { ...base, corner: 'vibhakti', headers, headerSource: 'iast' as Script, rows };
    }

    // standard single paradigm (case- or person-keyed)
    const byCase = (s.items || [])[0] && (s.items[0].case !== undefined);
    const headers = ['ekavacana', 'bahuvacana'];
    const rows = (s.items || []).map((it: any) => ({
      label: byCase ? it.case || '' : it.person || '',
      labelSource: (byCase ? 'iast' : 'english') as Script,
      cells: [
        { lines: [{ text: it.singular_iast || '—', source: 'iast' as Script }] },
        { lines: [{ text: it.plural_iast || '—', source: 'iast' as Script }] }
      ]
    }));
    return { ...base, corner: byCase ? 'vibhakti' : 'puruṣa', headers, headerSource: 'iast' as Script, rows };
  }

  const blocks = $derived(lesson ? buildBlocks(lesson.sections) : []);
  const sutras = $derived((lesson?.sutras || []).map((id: string) => ({ id, href: '/ref/' + id })));

  // Track which exercise answers have been revealed (keyed by block+item index).
  let revealed = $state<Set<string>>(new Set());
  function reveal(key: string) {
    const next = new Set(revealed);
    next.add(key);
    revealed = next;
  }

  // Keeping a word from a lesson is the same act as keeping one from the
  // reader's rail, and it lands in the same deck.
  function keep(w: any) {
    wordBank.addWord({
      id: w.id,
      display: w.skt,
      iast: w.iast,
      gloss: w.gloss,
      englishGloss: w.english,
      tag: w.tag || null,
      sourceId: lesson ? `balabodhini-${lesson.part}-${pad2(lesson.number)}` : 'workbook'
    });
  }
  const kept = $derived(new Set($wordBank.words.map((w) => w.id)));
</script>

<svelte:head><title>अभ्यास · workbook</title></svelte:head>

{#snippet shelfLeft()}
  {#if parts.length > 1}
    <span class="quiet">volume</span>
    <Segmented
      options={parts.map((pt) => ({ id: String(pt.part), label: `vol ${pt.part}` }))}
      value={String(activePart)}
      onchange={(id) => jumpToPart(Number(id))}
      ariaLabel="volume"
    />
  {/if}
{/snippet}

{#snippet shelfRight()}
  <span>{flat.length} lessons · {parts.length} volume{parts.length === 1 ? '' : 's'}</span>
{/snippet}

{#snippet spine()}
  <Spine
    title="lessons"
    items={spineLessons}
    activeId={String(lessonIdx)}
    onpick={(id) => setLesson(Number(id))}
  />
{/snippet}

{#if error}
  <div class="status">{error}</div>
{:else if !ready}
  <div class="status">loading the primer…</div>
{:else}
  <Shelf
    left={shelfLeft}
    right={shelfRight}
    progress={flat.length > 1 ? (lessonIdx / (flat.length - 1)) * 100 : null}
  />

  <Shell {spine}>
    {#if lesson}
      <header class="lesson-head">
        <span class="label">part {lesson.part} · lesson {lesson.number ?? ''}</span>
        <h1><Sanskrit text={lesson.title_sanskrit_telugu || ''} source="telugu" /></h1>
        <span class="subtitle">
          {lang === 'telugu' ? lesson.title_telugu || '' : lesson.title_english || ''}
        </span>
        {#if lesson.grammar_focus || sutras.length}
          <div class="meta">
            {#if lesson.grammar_focus}<Chip label={lesson.grammar_focus} />{/if}
            {#each sutras as su}
              <a class="sutra-chip" href={su.href}>{su.id}</a>
            {/each}
          </div>
        {/if}
      </header>

      {#each blocks as b, bi}
        <section class="block">
          <div class="block-head">
            <span class="label">{b.kicker}</span>
            {#if b.label}
              {@const lbl = splitLabel(b.label)}
              <span class="block-label"
                ><Sanskrit text={lbl.skt} source="iast" />{#if lbl.en}<span class="block-label-en">
                    — {lbl.en}</span
                  >{/if}</span
              >
            {/if}
            {#if b.labelTe && lang === 'telugu'}<span class="block-label-te">· {b.labelTe}</span>{/if}
          </div>

          {#if b.kind === 'grammar'}
            {#each b.notes as nt}
              <p class="note">
                <Sanskrit
                  text={lang === 'telugu' ? nt.telugu || nt.english : nt.english || nt.telugu}
                  source="devanagari"
                />
              </p>
            {/each}
          {/if}

          {#if b.kind === 'script'}
            <div class="script-grid">
              {#each b.cells as c}
                <div class="script-cell">
                  <span class="glyph"><Sanskrit text={c.iast} source="iast" /></span>
                  <span class="glyph-iast">{c.iast}</span>
                  {#if lang === 'telugu' && c.noteTe}
                    <span class="glyph-note">{c.noteTe}</span>
                  {:else if c.noteEn}
                    <span class="glyph-note">{c.noteEn}</span>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}

          {#if b.kind === 'sandhi'}
            <div class="rows">
              {#each b.rows as r}
                <div class="sandhi-row">
                  <span class="sandhi-pattern">{r.pattern}</span>
                  <span class="sandhi-form">
                    <Sanskrit text={r.before} source="iast" />
                    <span class="arrow">→</span>
                    <Sanskrit text={r.after} source="iast" />
                  </span>
                  <span class="sandhi-en">{r.english}</span>
                </div>
              {/each}
            </div>
          {/if}

          {#if b.kind === 'vocab' && b.words.length}
            <div class="rows">
              {#each b.words as w}
                <div class="vocab-row">
                  <span class="vocab-skt"><Sanskrit text={w.skt} source="telugu" /></span>
                  <span class="vocab-gloss">
                    <Sanskrit
                      text={lang === 'telugu' ? w.gloss || w.english : w.english || w.gloss}
                      source="devanagari"
                    />
                  </span>
                  <span class="vocab-tag">{w.tag}</span>
                  <button
                    class="keep"
                    class:has={kept.has(w.id)}
                    disabled={kept.has(w.id)}
                    onclick={() => keep(w)}
                  >
                    {kept.has(w.id) ? 'kept' : '+ keep'}
                  </button>
                </div>
              {/each}
            </div>
          {/if}

          {#if b.kind === 'paradigm'}
            <!-- The primer's paradigms carry per-cell line stacks (sg over pl,
                 with a Telugu line beneath), which the shared Grid does not
                 model; they keep their own table, on the shared hairline
                 treatment. -->
            <div class="paradigm-scroll">
              <div class="paradigm">
                {#if b.hasGroups}
                  <div class="prow pgroups">
                    <div class="pcorner"></div>
                    {#each b.groups as g}
                      <div class="pgroup" style="flex:{g.span}">
                        <Sanskrit text={g.label} source={g.source} />
                      </div>
                    {/each}
                  </div>
                {/if}
                <div class="prow pheaders">
                  <div class="pcorner pcorner-label">{b.corner}</div>
                  {#each b.headers as h}
                    <div class="pcol pheader">
                      {#if b.headerSource === 'english'}{h}{:else}<Sanskrit
                          text={h}
                          source={b.headerSource}
                        />{/if}
                    </div>
                  {/each}
                </div>
                {#each b.rows as r}
                  <div class="prow">
                    <div class="pcorner prow-label">
                      {#if r.labelSource === 'english'}{r.label}{:else}<Sanskrit
                          text={r.label}
                          source={r.labelSource}
                        />{/if}
                    </div>
                    {#each r.cells as c}
                      <div class="pcol pcell">
                        {#each c.lines as ln}
                          <span class="pline" class:muted={ln.muted} class:faint={ln.faint}>
                            {#if ln.source === 'english'}{ln.text}{:else}<Sanskrit
                                text={ln.text}
                                source={ln.source}
                              />{/if}
                          </span>
                        {/each}
                      </div>
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          {#if b.kind === 'reading'}
            <div class="rows">
              {#each b.items as it}
                <div class="reading-row">
                  <span class="n">{it.n}</span>
                  <div class="reading-body">
                    <span class="reading-skt"><Sanskrit text={it.skt} source="telugu" /></span>
                    {#if lang === 'telugu' && it.telugu}
                      <span class="reading-en">{it.telugu}</span>
                    {:else if it.english}
                      <span class="reading-en">{it.english}</span>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          {/if}

          {#if b.kind === 'exercise'}
            <span class="hint">answers are hidden; select one to show it</span>
            <div class="rows">
              {#each b.items as it, ii}
                {@const key = bi + '-' + ii}
                <div class="reading-row">
                  <span class="n">{it.n}</span>
                  <div class="reading-body">
                    <span class="prompt">
                      {lang === 'telugu' ? it.prompt || it.english : it.english || it.prompt}
                    </span>
                    <button
                      class="answer"
                      class:revealed={revealed.has(key)}
                      onclick={() => reveal(key)}><Sanskrit text={it.answer} source="telugu" /></button
                    >
                  </div>
                </div>
              {/each}
            </div>
          {/if}

          {#if b.kind === 'passage'}
            <div class="rows">
              {#each b.items as it}
                <div class="passage-item">
                  <span class="passage-skt"><Sanskrit text={it.skt} source={it.sktSource} /></span>
                  {#if lang === 'telugu' && it.telugu}
                    <span class="passage-en">{it.telugu}</span>
                  {:else if it.english}
                    <span class="passage-en">{it.english}</span>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </section>
      {/each}

      <div class="pager">
        <button disabled={lessonIdx <= 0} onclick={() => setLesson(lessonIdx - 1)}>← previous</button>
        <a class="practice" href="/words">words from this lesson →</a>
        <button disabled={lessonIdx >= flat.length - 1} onclick={() => setLesson(lessonIdx + 1)}>
          next lesson →
        </button>
      </div>
    {/if}
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
  .quiet {
    color: var(--faint);
  }

  /* ── lesson head ─────────────────────────────────────────────────────── */
  .lesson-head {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 16px;
  }
  .lesson-head h1 {
    margin: 0;
    font-family: var(--font-deva);
    font-size: 27px;
    font-weight: 600;
  }
  .subtitle {
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 6px;
  }
  .sutra-chip {
    font-family: var(--font-mono);
    font-size: 11px;
    padding: 3px 8px;
    border: 1px solid var(--rule-2);
    color: var(--accent-ref);
    text-decoration: none;
  }
  .sutra-chip:hover {
    border-color: var(--accent-ref);
  }

  /* ── blocks ──────────────────────────────────────────────────────────── */
  .block {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .block-head {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
  }
  .block-label {
    font-family: var(--font-deva);
    font-size: 16px;
    color: var(--ink);
  }
  .block-label-en,
  .block-label-te {
    font-family: var(--font-serif);
    font-size: 14px;
    color: var(--muted);
    font-style: italic;
  }

  .note {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: var(--ink-2);
    max-width: 66ch;
  }

  .rows {
    display: flex;
    flex-direction: column;
  }
  .hint {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--faint);
  }

  /* script table */
  .script-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
  }
  .script-cell {
    background: var(--paper);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .glyph {
    font-family: var(--font-deva);
    font-size: 22px;
  }
  .glyph-iast {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .glyph-note {
    font-size: 13px;
    color: var(--muted);
  }

  /* sandhi */
  .sandhi-row {
    display: grid;
    grid-template-columns: 8rem minmax(0, 1fr) minmax(0, 1.4fr);
    gap: 14px;
    align-items: baseline;
    padding: 9px 0;
    border-top: 1px solid var(--rule);
  }
  .sandhi-pattern {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--quiet);
  }
  .sandhi-form {
    font-family: var(--font-deva);
    font-size: 16px;
  }
  .arrow {
    color: var(--faint);
    padding: 0 4px;
  }
  .sandhi-en {
    font-size: 14px;
    color: var(--muted);
  }

  /* vocabulary — the row that feeds the deck */
  .vocab-row {
    display: grid;
    grid-template-columns: minmax(6rem, 1.4fr) minmax(0, 2fr) 7rem 4.5rem;
    gap: 14px;
    align-items: baseline;
    padding: 9px 0;
    border-top: 1px solid var(--rule);
  }
  .vocab-skt {
    font-family: var(--font-deva);
    font-size: 17px;
  }
  .vocab-gloss {
    font-size: 15px;
    color: var(--muted);
  }
  .vocab-tag {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .keep {
    font-family: var(--font-mono);
    font-size: 11px;
    background: transparent;
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    color: var(--accent);
    padding: 2px 7px;
    cursor: pointer;
    justify-self: end;
  }
  .keep.has {
    border-color: var(--accent-ok);
    color: var(--accent-ok);
    cursor: default;
  }

  /* paradigm */
  .paradigm-scroll {
    overflow-x: auto;
  }
  .paradigm {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--rule);
    border: 1px solid var(--rule);
    min-width: 420px;
  }
  .prow {
    display: flex;
    gap: 1px;
  }
  .pcorner {
    background: var(--sunken);
    width: 9rem;
    flex: none;
    padding: 7px 10px;
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--muted);
  }
  .pcorner-label {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .pcol {
    background: var(--paper);
    flex: 1;
    padding: 7px 10px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .pgroup {
    background: var(--sunken);
    padding: 6px 10px;
    font-family: var(--font-deva);
    font-size: 13px;
    color: var(--ink);
  }
  .pheader {
    background: var(--sunken);
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--quiet);
  }
  .pcell .pline {
    font-family: var(--font-deva);
    font-size: 14px;
    color: var(--ink);
  }
  .pline.muted {
    color: var(--muted);
  }
  .pline.faint {
    color: var(--faint);
    font-size: 13px;
  }

  /* reading / exercises / passage */
  .reading-row {
    display: grid;
    grid-template-columns: 2.5rem minmax(0, 1fr);
    gap: 14px;
    align-items: baseline;
    padding: 10px 0;
    border-top: 1px solid var(--rule);
  }
  .n {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--quiet);
  }
  .reading-body {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  .reading-skt {
    font-family: var(--font-deva);
    font-size: 18px;
  }
  .reading-en,
  .prompt {
    font-size: 15px;
    color: var(--muted);
  }

  .answer {
    font-family: var(--font-deva);
    font-size: 17px;
    text-align: left;
    background: var(--sunken);
    border: 1px solid var(--rule);
    border-radius: var(--radius);
    padding: 4px 8px;
    color: transparent;
    cursor: pointer;
    align-self: flex-start;
  }
  .answer.revealed {
    background: transparent;
    border-color: transparent;
    color: var(--ink);
    padding-left: 0;
    cursor: default;
  }

  .passage-item {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 10px 0;
    border-top: 1px solid var(--rule);
  }
  .passage-skt {
    font-family: var(--font-deva);
    font-size: 18px;
    line-height: 1.7;
  }
  .passage-en {
    font-size: 15px;
    color: var(--muted);
    font-style: italic;
  }

  /* pager */
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
  .practice {
    color: var(--accent);
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .vocab-row,
    .sandhi-row {
      grid-template-columns: minmax(0, 1fr) auto;
    }
    .vocab-tag,
    .sandhi-pattern {
      display: none;
    }
  }
</style>
