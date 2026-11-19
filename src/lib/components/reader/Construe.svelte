<script lang="ts">
  /*
    Construe: the panel under a line while the construe toggle is on.

    The reader taps a word in the line, then says which question it answers
    — the क्रिया, or कः? किम्? केन? … as a sentence is taught to be read. A
    word that answers कस्य? or कीदृशः? hangs on another word, chosen next.
    The app says one thing back: whether the word's ending CAN answer that
    question (construe.ts) — a fact about the form, never a verdict on the
    reading. The reader's own anvaya builds itself underneath, in prose
    order, from the answers.
  */
  import Sanskrit from '$lib/components/Sanskrit.svelte';
  import { ROLES, ROLE, checkRole, anvaya, type RoleId } from '$lib/reader/construe';
  import type { Features } from '$lib/reader/agreement';
  import { construal } from '$lib/stores/construal';

  type Word = { ti: number; text: string; feats: Features; tags: Set<string> };
  let {
    readingId,
    words,
    selected
  }: { readingId: string; words: Word[]; selected: number | null } = $props();

  $effect(() => construal.ensure(readingId));
  const line = $derived($construal[readingId] ?? {});
  const byTi = $derived(new Map(words.map((w) => [w.ti, w])));
  const here = $derived(selected != null ? byTi.get(selected) ?? null : null);
  const mine = $derived(here ? line[here.ti] ?? null : null);

  function give(role: RoleId) {
    if (!here) return;
    if (mine?.role === role) construal.set(readingId, here.ti, null);
    else construal.set(readingId, here.ti, { role, head: ROLE[role].attaches ? mine?.head : undefined });
  }
  function hangOn(head: number) {
    if (!here || !mine) return;
    construal.set(readingId, here.ti, { role: mine.role, head: mine.head === head ? undefined : head });
  }

  const note = $derived.by(() => {
    if (!here || !mine) return null;
    const head = mine.head != null ? byTi.get(mine.head) : undefined;
    return checkRole(mine.role, here.feats, here.tags, here.text, head?.feats);
  });

  const order = $derived.by(() => {
    const assigned = new Map(Object.entries(line).map(([k, v]) => [Number(k), v]));
    const pos = new Map(words.map((w, i) => [w.ti, i]));
    return anvaya(assigned, (ti) => pos.get(ti) ?? 0).filter((ti) => byTi.has(ti));
  });
  const hasVerb = $derived(Object.values(line).some((a) => a.role === 'kriya'));
</script>

<div class="construe">
  {#if here}
    <div class="ask">
      <span class="word"><Sanskrit text={here.text} source="devanagari" /></span>
      <span class="answers">answers</span>
    </div>
    <div class="roles" role="group" aria-label="the question this word answers">
      {#each ROLES as r (r.id)}
        <button class="q" class:on={mine?.role === r.id} title={r.en} aria-pressed={mine?.role === r.id} onclick={() => give(r.id)}>
          <Sanskrit text={r.q} source="devanagari" />{#if r.id !== 'kriya' && r.id !== 'anyat'}?{/if}
        </button>
      {/each}
    </div>
    {#if mine && ROLE[mine.role].attaches}
      <div class="heads">
        <span class="answers">of which word?</span>
        {#each words.filter((w) => w.ti !== here.ti) as w (w.ti)}
          <button class="h" class:on={mine.head === w.ti} onclick={() => hangOn(w.ti)}>
            <Sanskrit text={w.text} source="devanagari" />
          </button>
        {/each}
      </div>
    {/if}
    {#if note}
      <p class="note"><Sanskrit text={note} source="devanagari" /></p>
    {/if}
  {:else if !order.length}
    <p class="hint">Tap a word, then say which question it answers. Start with the <Sanskrit text="क्रिया" source="devanagari" />.</p>
  {/if}

  {#if order.length}
    <div class="anvaya">
      <span class="answers">your anvaya</span>
      <span class="line">
        {#each order as ti (ti)}
          {@const a = line[ti]}
          <span class="aw">
            <span class="aq"><Sanskrit text={ROLE[a.role].q} source="devanagari" /></span>
            <Sanskrit text={byTi.get(ti)?.text ?? ''} source="devanagari" />
          </span>
        {/each}
        {#if !hasVerb}<span class="aw missing"><span class="aq"><Sanskrit text="क्रिया" source="devanagari" /></span>…</span>{/if}
      </span>
      <button class="clear" onclick={() => construal.clear(readingId)}>start again</button>
    </div>
  {/if}
</div>

<style>
  .construe {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ask {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .word {
    font-family: var(--font-deva);
    font-size: 17px;
    color: var(--accent);
  }
  .answers {
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
  }
  .roles,
  .heads {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: baseline;
  }
  .q,
  .h {
    font-family: var(--font-deva);
    font-size: 14px;
    line-height: 1.4;
    padding: 3px 9px;
    color: var(--ink-2);
    background: var(--paper);
    border: 1px solid var(--rule-2);
    border-radius: var(--radius);
    cursor: pointer;
  }
  .q.on,
  .h.on {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--paper);
  }
  .note {
    margin: 0;
    font-family: var(--font-prose);
    font-size: 14px;
    color: var(--ink-2);
    border-left: 2px solid var(--accent);
    padding-left: 9px;
  }
  .hint {
    margin: 0;
    font-family: var(--font-prose);
    font-size: 14px;
    color: var(--quiet);
  }
  .anvaya {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 8px;
    border-top: 1px solid var(--rule);
  }
  .line {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 6px;
    font-family: var(--font-deva);
    font-size: calc(17px * var(--read-scale, 1));
    color: var(--ink);
  }
  .aw {
    display: inline-flex;
    flex-direction: column;
  }
  .aq {
    font-size: 10.5px;
    color: var(--accent-ref);
    line-height: 1.2;
  }
  .aw.missing {
    color: var(--faint);
  }
  .clear {
    align-self: flex-start;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--quiet);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-decoration: underline;
  }
</style>
