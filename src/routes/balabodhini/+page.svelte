<script lang="ts">
  import { onMount } from 'svelte';
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import type { Script } from '$lib/transliteration';
  import { lessonLanguage } from '$lib/stores/preferences';

  // The "language of discourse" — which support language the lesson explains in.
  // Telugu glosses/translations show when 'telugu'; English when 'english'.
  let lang = $state<'telugu' | 'english'>('english');
  onMount(() => lessonLanguage.subscribe((l) => (lang = l)));

  // ── data ───────────────────────────────────────────────────────────────────
  // balabodhini.json is built from the structured TOML lessons
  // (scripts/build-balabodhini.ts) and kept in authored shape; this renderer is
  // the single source of truth for layout. Mirrors the design's Balabodhini view.
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

  // Which volume the current lesson belongs to (for the part-jump tabs).
  const activePart = $derived(lesson?.part ?? 1);

  // Jump to the first lesson of a part — gives direct access to vol 2 without
  // scrolling the long sidebar, and scrolls that part into view in the sidebar.
  function jumpToPart(part: number) {
    const first = flat.findIndex((l) => l.part === part);
    if (first < 0) return;
    setLesson(first);
    requestAnimationFrame(() => {
      document.getElementById('bb-part-' + part)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }

  // Sanskrit is stored in Telugu script (some forms in IAST); each <Sanskrit>
  // transliterates to the global display script, switched from the site nav.
  function pad2(n: any): string {
    return String(n != null ? n : '').padStart(2, '0');
  }

  // Section labels are "sanskritTerm — english gloss" (e.g. "svara — vowels").
  // Only the Sanskrit head should transliterate; the English tail stays Roman.
  function splitLabel(t: string): { skt: string; en: string } {
    const i = t.indexOf(' — ');
    return i >= 0 ? { skt: t.slice(0, i), en: t.slice(i + 3) } : { skt: t, en: '' };
  }

  // ── block model — translate the design's buildBlocks() to a typed structure ──
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
                skt: w.sanskrit_telugu || '',
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
</script>

<svelte:head><title>बालबोधिनी · primer</title></svelte:head>

<div class="bb">
  {#if error}
    <div class="err">{error}</div>
  {:else}
    <div class="grid">
      <!-- LEFT: lesson spine -->
      <nav class="sidebar">
        {#if parts.length > 1}
          <div class="parttabs">
            <div class="partpills">
              {#each parts as pt}
                <button class="parttab" class:on={activePart === pt.part} onclick={() => jumpToPart(pt.part)}>
                  Part {pt.part} <span class="parttabn">{pt.lessons.length}</span>
                </button>
              {/each}
            </div>
          </div>
        {/if}
        {#each parts as pt}
          <div class="navpart" id="bb-part-{pt.part}">
            <div class="navpartlabel">Part {pt.part}</div>
            {#each pt.lessons as ls}
              {@const gi = flat.indexOf(ls)}
              {@const active = gi === lessonIdx}
              <button class="navitem" class:active onclick={() => setLesson(gi)}>
                <span class="navnum" class:active>{pad2(ls.number)}</span>
                <span class="navtxt">
                  <span class="navtitle" class:active><Sanskrit text={ls.title_sanskrit_telugu || ''} source="telugu" /></span>
                  <span class="navfocus">{ls.grammar_focus || ls.title_english || ''}</span>
                </span>
              </button>
            {/each}
          </div>
        {/each}
      </nav>

      <!-- CENTER: the lesson -->
      <main class="lesson">
        {#if ready && lesson}
          <div class="lessonhead">
            <div class="kicker">Part {lesson.part} · Lesson {lesson.number ?? ''}</div>
            <h1><Sanskrit text={lesson.title_sanskrit_telugu || ''} source="telugu" /></h1>
            <div class="subtitle">
              {lang === 'telugu' ? (lesson.title_telugu || '') : (lesson.title_english || '')}
            </div>
            {#if lesson.grammar_focus}
              <div class="metarow">
                <span class="metalabel">focus</span>
                <span class="focuschip">{lesson.grammar_focus}</span>
              </div>
            {/if}
            {#if sutras.length}
              <div class="metarow">
                <span class="metalabel">sūtra</span>
                {#each sutras as su}
                  <a class="sutrachip" href={su.href}>{su.id}</a>
                {/each}
              </div>
            {/if}
          </div>

          {#each blocks as b, bi}
            <section class="block">
              <div class="blockhead">
                <span class="blockkicker">{b.kicker}</span>
                {#if b.label}
                  {@const lbl = splitLabel(b.label)}
                  <span class="blocklabel"><Sanskrit text={lbl.skt} source="iast" />{#if lbl.en}<span class="blocklabelen"> — {lbl.en}</span>{/if}</span>
                {/if}
                {#if b.labelTe && lang === 'telugu'}<span class="blocklabelte">· {b.labelTe}</span>{/if}
              </div>

              {#if b.kind === 'grammar'}
                {#each b.notes as nt}
                  <div class="note">
                    {#if lang === 'telugu'}
                      {#if nt.telugu}<div class="notete">{nt.telugu}</div>{/if}
                      {#if !nt.telugu && nt.english}<div class="notete">{nt.english}</div>{/if}
                    {:else}
                      {#if nt.english}<div class="notete">{nt.english}</div>{/if}
                      {#if !nt.english && nt.telugu}<div class="notete">{nt.telugu}</div>{/if}
                    {/if}
                  </div>
                {/each}
              {/if}

              {#if b.kind === 'script'}
                <div class="scriptgrid">
                  {#each b.cells as c}
                    <div class="scriptcell">
                      <div class="scriptglyph">
                        <span class="glyph"><Sanskrit text={c.iast} source="iast" /></span>
                        <span class="glyphiast">{c.iast}</span>
                      </div>
                      {#if lang === 'telugu' && c.noteTe}
                        <div class="scriptnoteen">{c.noteTe}</div>
                      {:else if c.noteEn}
                        <div class="scriptnoteen">{c.noteEn}</div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}

              {#if b.kind === 'sandhi'}
                <div class="sandhilist">
                  {#each b.rows as r}
                    <div class="sandhirow">
                      <span class="sandhipattern">{r.pattern}</span>
                      <span class="sandhiform">
                        <Sanskrit text={r.before} source="iast" /> <span class="arrow">→</span> <Sanskrit text={r.after} source="iast" />
                      </span>
                      <span class="sandhien">{r.english}</span>
                    </div>
                  {/each}
                </div>
              {/if}

              {#if b.kind === 'vocab'}
                <div class="vocabgrid">
                  {#each b.words as w}
                    <div class="vocabitem">
                      <span class="vocabskt"><Sanskrit text={w.skt} source="telugu" /></span>
                      <span class="vocabglosses">
                        {#if lang === 'telugu'}
                          <span class="vocabgloss">{w.gloss || w.english}</span>
                        {:else}
                          <span class="vocabgloss">{w.english || w.gloss}</span>
                        {/if}
                      </span>
                      {#if w.tag}<span class="vocabtag">{w.tag}</span>{/if}
                    </div>
                  {/each}
                </div>
              {/if}

              {#if b.kind === 'paradigm'}
                <div class="paradigmscroll">
                  <div class="paradigm">
                    {#if b.hasGroups}
                      <div class="prow pgroups">
                        <div class="pcorner"></div>
                        {#each b.groups as g}
                          <div class="pgroup" style="flex:{g.span}"><Sanskrit text={g.label} source={g.source} /></div>
                        {/each}
                      </div>
                    {/if}
                    <div class="prow pheaders">
                      <div class="pcorner pcornerlabel">{b.corner}</div>
                      {#each b.headers as h}
                        <div class="pcol pheader">
                          {#if b.headerSource === 'english'}{h}{:else}<Sanskrit text={h} source={b.headerSource} />{/if}
                        </div>
                      {/each}
                    </div>
                    {#each b.rows as r}
                      <div class="prow">
                        <div class="pcorner prowlabel">
                          {#if r.labelSource === 'english'}{r.label}{:else}<Sanskrit text={r.label} source={r.labelSource} />{/if}
                        </div>
                        {#each r.cells as c}
                          <div class="pcol pcell">
                            {#each c.lines as ln}
                              <span class="pline" class:muted={ln.muted} class:faint={ln.faint}>
                                {#if ln.source === 'english'}{ln.text}{:else}<Sanskrit text={ln.text} source={ln.source} />{/if}
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
                <div class="readinglist">
                  {#each b.items as it}
                    <div class="readingitem">
                      <span class="readingn">{it.n}</span>
                      <div>
                        <div class="readingskt"><Sanskrit text={it.skt} source="telugu" /></div>
                        {#if lang === 'telugu' && it.telugu}
                          <div class="readingen">{it.telugu}</div>
                        {:else if it.english}
                          <div class="readingen">{it.english}</div>
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}

              {#if b.kind === 'exercise'}
                <div class="exhint">tap a hidden answer to reveal it</div>
                <div class="exlist">
                  {#each b.items as it, ii}
                    {@const key = bi + '-' + ii}
                    <div class="exitem">
                      <span class="exn">{it.n}</span>
                      <div class="exbody">
                        {#if lang === 'telugu'}
                          <span class="exprompt">{it.prompt || it.english}</span>
                        {:else}
                          <span class="exprompt">{it.english || it.prompt}</span>
                        {/if}
                        <span
                          class="exanswer"
                          class:revealed={revealed.has(key)}
                          role="button"
                          tabindex="0"
                          onclick={() => reveal(key)}
                          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') reveal(key); }}
                        ><Sanskrit text={it.answer} source="telugu" /></span>
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}

              {#if b.kind === 'passage'}
                <div class="passage">
                  {#each b.items as it}
                    <div class="passageitem">
                      <div class="passageskt"><Sanskrit text={it.skt} source={it.sktSource} /></div>
                      {#if lang === 'telugu' && it.telugu}
                        <div class="passageen">{it.telugu}</div>
                      {:else if it.english}
                        <div class="passageen">{it.english}</div>
                      {/if}
                    </div>
                  {/each}
                </div>
              {/if}
            </section>
          {/each}

          <div class="pager">
            <button class="navbtn" disabled={lessonIdx <= 0} onclick={() => setLesson(lessonIdx - 1)}>← previous</button>
            <button class="navbtn" disabled={lessonIdx >= flat.length - 1} onclick={() => setLesson(lessonIdx + 1)}>next →</button>
          </div>
        {:else if !error}
          <div class="loading">loading the primer…</div>
        {/if}
      </main>
    </div>
  {/if}
</div>

<style>
  /* Old palette: white bg, #f97316 saffron accent, #4f46e5 indigo, #0f1419 ink,
     #e7e2d9 borders, #6b6b6b muted, #faf7f0 panel fill. */
  .bb {
    max-width: 1280px;
    margin: 0 auto;
    color: #0f1419;
  }


  .err, .loading {
    display: flex;
    justify-content: center;
    padding: 7rem 2rem;
    color: #94a3b8;
    font-family: var(--font-mono);
    font-size: 0.82rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 282px minmax(0, 1fr);
    gap: 2.8rem;
    align-items: start;
  }

  /* sidebar */
  .sidebar {
    position: sticky;
    top: 56px;
    max-height: calc(100vh - 64px);
    overflow: auto;
    padding: 1.4rem 0.3rem 3rem;
  }
  /* sticky part-jump tabs so vol 2 is one click away, not a long scroll. The
     outer bar is opaque and full-width so lessons scroll cleanly behind it
     instead of peeking out around the pill. */
  .parttabs {
    position: sticky;
    top: -1.4rem;
    z-index: 2;
    background: #fff;
    padding: 0.4rem 0.25rem 0.7rem;
    margin: -1.4rem -0.3rem 0.5rem;
    border-bottom: 1px solid #f0e9da;
  }
  .partpills {
    display: flex;
    gap: 3px;
    background: #f1eadc;
    border-radius: 999px;
    padding: 3px;
  }
  .parttab {
    flex: 1;
    border: none;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.02em;
    padding: 0.3rem 0.5rem;
    border-radius: 999px;
    background: transparent;
    color: #6b6b6b;
    transition: all 0.15s;
  }
  .parttab.on { background: #fff; color: #0f1419; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); }
  .parttabn { color: #cbbfa9; }
  .parttab.on .parttabn { color: #f97316; }

  .navpart { margin-bottom: 1.4rem; }
  .navpartlabel {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #b08d57;
    padding: 0 0.55rem;
    margin-bottom: 0.6rem;
  }
  .navitem {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    border-radius: 9px;
    padding: 0.4rem 0.55rem;
    margin-bottom: 0.1rem;
    background: transparent;
    transition: background 0.15s;
  }
  .navitem:hover { background: #faf7f0; }
  .navitem.active { background: #fdecd9; }
  .navnum {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: #cbbfa9;
    flex: none;
    width: 1.4rem;
    padding-top: 0.15rem;
  }
  .navnum.active { color: #f97316; }
  .navtxt { display: flex; flex-direction: column; gap: 0.04rem; min-width: 0; }
  .navtitle { font-size: 0.97rem; color: #6b6b6b; line-height: 1.22; }
  .navtitle.active { color: #0f1419; }
  .navfocus {
    font-size: 0.67rem;
    color: #a99e8b;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* lesson body */
  .lesson { min-width: 0; padding: 1.4rem 0 6rem; }
  .lessonhead { border-bottom: 1px solid #e7e2d9; padding-bottom: 1.5rem; }
  .kicker {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b08d57;
    margin-bottom: 0.7rem;
  }
  h1 { font-size: 2.5rem; font-weight: 600; line-height: 1.08; margin: 0; letter-spacing: -0.01em; }
  .subtitle { font-size: 1.12rem; color: #5c5345; margin-top: 0.4rem; }
  .metarow { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; margin-top: 0.85rem; }
  .metalabel {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #94a3b8;
  }
  .focuschip { font-size: 0.96rem; color: #92591f; background: #fdf1e1; border-radius: 7px; padding: 0.18rem 0.6rem; }
  .sutrachip {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: #f97316;
    background: #fdf1e1;
    border: 1px solid #f6d9b4;
    border-radius: 999px;
    padding: 0.14rem 0.6rem;
    text-decoration: none;
  }
  .sutrachip:hover { background: #fbe9cf; }

  .block { padding: 1.7rem 0; border-top: 1px solid #f0e9da; }
  .blockhead { display: flex; align-items: baseline; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.05rem; }
  .blockkicker {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #cbb994;
  }
  .blocklabel { font-size: 1.05rem; color: #0f1419; }
  .blocklabelen { color: #6b6b6b; font-style: italic; }
  .blocklabelte { font-size: 0.9rem; color: #6b6b6b; }

  /* grammar note */
  .note {
    background: #faf7f0;
    border: 1px solid #e7e2d9;
    border-left: 2px solid #f97316;
    border-radius: 11px;
    padding: 0.95rem 1.15rem;
    margin-bottom: 0.6rem;
  }
  .notete { font-size: 1.08rem; color: #0f1419; line-height: 1.55; }

  /* script table */
  .scriptgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px, 1fr)); gap: 0.55rem; }
  .scriptcell { background: #fffdf9; border: 1px solid #e7e2d9; border-radius: 11px; padding: 0.7rem 0.85rem; }
  .scriptglyph { display: flex; align-items: baseline; gap: 0.5rem; }
  .glyph { font-size: 1.75rem; color: #0f1419; line-height: 1.05; }
  .glyphiast { font-family: var(--font-mono); font-size: 0.78rem; color: #b08d57; }
  .scriptnoteen { font-size: 0.8rem; color: #6b6b6b; line-height: 1.35; margin-top: 0.25rem; }

  /* sandhi table */
  .sandhilist { display: flex; flex-direction: column; gap: 0.5rem; }
  .sandhirow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1.1rem;
    background: #fffdf9;
    border: 1px solid #e7e2d9;
    border-radius: 11px;
    padding: 0.7rem 0.95rem;
  }
  .sandhipattern { font-family: var(--font-mono); font-size: 0.85rem; color: #f97316; min-width: 6.5rem; }
  .sandhiform { font-size: 1.3rem; color: #0f1419; }
  .arrow { color: #cbb994; }
  .sandhien { font-size: 0.88rem; color: #6b6b6b; font-style: italic; flex: 1; min-width: 13rem; }

  /* vocabulary */
  .vocabgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(238px, 1fr)); gap: 0.1rem 1rem; }
  .vocabitem { display: flex; align-items: baseline; gap: 0.55rem; padding: 0.42rem 0; border-bottom: 1px solid #f0e9da; }
  .vocabskt { font-size: 1.28rem; color: #0f1419; line-height: 1.2; white-space: nowrap; }
  .vocabglosses { display: flex; flex-direction: column; gap: 0.02rem; min-width: 0; flex: 1; }
  .vocabgloss { font-size: 0.95rem; color: #5c5345; line-height: 1.25; }
  .vocabtag { font-family: var(--font-mono); font-size: 0.6rem; color: #b08d57; white-space: nowrap; align-self: center; }

  /* paradigm table */
  .paradigmscroll { overflow-x: auto; padding-bottom: 0.3rem; }
  .paradigm {
    display: inline-block;
    min-width: min-content;
    border: 1px solid #e7e2d9;
    border-radius: 12px;
    overflow: hidden;
    background: #fffdf9;
  }
  .prow { display: flex; }
  .prow + .prow, .pheaders { border-top: 1px solid #f0e9da; }
  .pgroups { background: #faf7f0; border-bottom: 1px solid #e7e2d9; }
  .pgroup { text-align: center; padding: 0.4rem 0.6rem; border-left: 1px solid #e7e2d9; font-size: 0.95rem; color: #92591f; }
  .pheaders { background: #f7f1e6; border-bottom: 1px solid #e7e2d9; }
  .pcorner { padding: 0.5rem 0.85rem; min-width: 5.4rem; }
  .pcornerlabel {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: #b08d57;
    display: flex;
    align-items: center;
  }
  .pcol { padding: 0.5rem 0.95rem; min-width: 4.6rem; border-left: 1px solid #f0e9da; }
  .pheader { text-align: center; font-size: 0.92rem; color: #6b6b6b; display: flex; align-items: center; justify-content: center; }
  .prowlabel { background: #faf5ec; display: flex; flex-direction: column; justify-content: center; font-size: 0.9rem; color: #92591f; }
  .pcell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.06rem; }
  .pline { font-size: 1.18rem; color: #0f1419; line-height: 1.2; }
  .pline.muted { color: #6b6b6b; }
  .pline.faint { color: #b08d57; font-size: 0.95rem; }

  /* reading */
  .readinglist { display: flex; flex-direction: column; gap: 1rem; }
  .readingitem { display: grid; grid-template-columns: 1.9rem minmax(0, 1fr); gap: 0.6rem; }
  .readingn { font-family: var(--font-mono); font-size: 0.74rem; color: #cbb994; padding-top: 0.5rem; }
  .readingskt { font-size: 1.55rem; color: #0f1419; line-height: 1.4; }
  .readingen { font-size: 1rem; color: #463f33; font-style: italic; margin-top: 0.18rem; line-height: 1.45; }

  /* exercises */
  .exhint { font-size: 0.72rem; color: #b08d57; font-style: italic; margin-bottom: 0.8rem; }
  .exlist { display: flex; flex-direction: column; gap: 0.8rem; }
  .exitem { display: grid; grid-template-columns: 1.9rem minmax(0, 1fr); gap: 0.6rem; align-items: baseline; }
  .exn { font-family: var(--font-mono); font-size: 0.74rem; color: #cbb994; }
  .exbody { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.25rem 0.9rem; }
  .exprompt { font-size: 1.15rem; color: #0f1419; }
  .exanswer {
    font-size: 1.2rem;
    color: #4f46e5;
    margin-left: auto;
    filter: blur(5px);
    transition: filter 0.16s ease;
    cursor: pointer;
  }
  .exanswer:hover, .exanswer.revealed { filter: blur(0); }

  /* passage */
  .passage { display: flex; flex-direction: column; gap: 0.75rem; border-left: 2px solid #f97316; padding-left: 1.15rem; }
  .passageskt { font-size: 1.35rem; color: #0f1419; line-height: 1.5; }
  .passageen { font-size: 0.96rem; color: #6b6b6b; font-style: italic; margin-top: 0.1rem; line-height: 1.4; }

  /* pager */
  .pager { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 2.4rem; padding-top: 1.4rem; border-top: 1px solid #e7e2d9; }
  .navbtn {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.02em;
    padding: 0.5rem 1.1rem;
    border-radius: 999px;
    border: 1px solid #e7e2d9;
    background: #fffdf9;
    cursor: pointer;
    color: #92591f;
  }
  .navbtn:disabled { background: #f6f1e7; cursor: default; color: #cbbfa9; }

  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; }
    .sidebar { position: static; max-height: none; border-bottom: 1px solid #e7e2d9; }
  }
</style>
