<script lang="ts">
  import { transliterate, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';
  import { selectedTerm } from '$lib/stores/jargon';

  interface Props {
    text: string;
  }

  let { text }: Props = $props();

  interface Span {
    type: 'text' | 'iast' | 'deva' | 'slp1';
    content: string;
  }

  // Source-script of a bare term inside @term[…]: Devanagari, IAST (diacritics),
  // else SLP1. Matches the same classification CommentaryText uses.
  function termSource(t: string): 'deva' | 'iast' | 'slp1' {
    if (/[ऀ-ॿ]/.test(t)) return 'deva';
    if (/[āīūṛṝḷḹṅñṭḍṇśṣṃḥ]/.test(t)) return 'iast';
    return 'slp1';
  }

  // Handle all inline markup tags the content uses:
  //   @[iast] @deva[deva] @term[word] @ref[id] @pratyahara[code]
  function parse(raw: string): Span[] {
    const spans: Span[] = [];
    const re = /@(deva|term|ref|pratyahara)?\[([^\]]+)\](?:\{[^}]*\})?/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(raw)) !== null) {
      if (m.index > last) spans.push({ type: 'text', content: raw.slice(last, m.index) });
      const tag = m[1];
      const content = m[2];
      if (tag === 'deva') {
        spans.push({ type: 'deva', content });
      } else if (tag === 'ref') {
        // a sūtra cross-reference id — show verbatim (it's a number like 1.4.49)
        spans.push({ type: 'text', content });
      } else if (tag === 'term' || tag === 'pratyahara') {
        // a Sanskrit term in iast/slp1/deva — classify and transliterate
        spans.push({ type: termSource(content), content });
      } else {
        // @[…] — IAST source
        spans.push({ type: 'iast', content });
      }
      last = m.index + m[0].length;
    }
    if (last < raw.length) spans.push({ type: 'text', content: raw.slice(last) });
    return spans;
  }

  let spans: Span[] = $derived(parse(text));

  let script: Script = $state('devanagari');
  displayScript.subscribe(s => { script = s; });

  async function render(span: Span): Promise<string> {
    if (span.type === 'text') return span.content;
    if (span.type === 'deva') {
      return script === 'devanagari' ? span.content : await transliterate(span.content, 'devanagari', script);
    }
    if (span.type === 'slp1') {
      return await transliterate(span.content, 'slp1', script);
    }
    // iast — case-insensitive; lowercase so a stray capital doesn't break parsing.
    const iast = span.content.toLowerCase();
    return script === 'iast' ? iast : await transliterate(iast, 'iast', script);
  }

  // Rendered text per span, updated reactively
  let rendered: string[] = $state([]);

  $effect(() => {
    const s = spans;
    const sc = script;
    Promise.all(s.map(render)).then(r => { rendered = r; });
  });

  function click(e: MouseEvent, span: Span) {
    e.preventDefault();
    e.stopPropagation();
    if (span.type === 'deva') {
      selectedTerm.set(span.content);
    }
  }
</script>

<span class="inline-markup">{#each spans as span, i}{#if span.type === 'deva'}<button class="jargon-inline font-{script}" onclick={(e) => click(e, span)}>{rendered[i] ?? ''}</button>{:else if span.type === 'iast' || span.type === 'slp1'}<span class="font-{script}">{rendered[i] ?? ''}</span>{:else}{rendered[i] ?? ''}{/if}{/each}</span>

<style>
  .inline-markup {
    font-size: inherit;
    color: inherit;
  }

  .jargon-inline {
    cursor: pointer;
    border: none;
    border-bottom: 1px dotted transparent;
    padding: 0;
    background: none;
    font: inherit;
    color: inherit;
    transition: border-color 0.15s, color 0.15s;
  }

  .jargon-inline:hover {
    color: #f97316;
    border-bottom-color: #f97316;
  }
</style>
