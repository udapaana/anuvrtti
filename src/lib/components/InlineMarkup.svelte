<script lang="ts">
  import { transliterate, type Script } from '$lib/transliteration';
  import { displayScript } from '$lib/stores/preferences';
  import { selectedTerm } from '$lib/stores/jargon';

  interface Props {
    text: string;
  }

  let { text }: Props = $props();

  interface Span {
    type: 'text' | 'iast' | 'deva';
    content: string;
  }

  function parse(raw: string): Span[] {
    const spans: Span[] = [];
    const re = /@(deva)?\[([^\]]+)\]/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(raw)) !== null) {
      if (m.index > last) spans.push({ type: 'text', content: raw.slice(last, m.index) });
      spans.push({ type: m[1] === 'deva' ? 'deva' : 'iast', content: m[2] });
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
    // iast
    return script === 'iast' ? span.content : await transliterate(span.content, 'iast', script);
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

<span class="inline-markup">{#each spans as span, i}{#if span.type === 'deva'}<button class="jargon-inline" onclick={(e) => click(e, span)}>{rendered[i] ?? ''}</button>{:else}{rendered[i] ?? ''}{/if}{/each}</span>

<style>
  .inline-markup {
    font-size: inherit;
    color: inherit;
  }

  .jargon-inline {
    cursor: pointer;
    border-bottom: 1px dashed currentColor;
    padding: 0;
    background: none;
    font: inherit;
    color: inherit;
    opacity: 0.85;
  }

  .jargon-inline:hover {
    opacity: 1;
    background: rgba(0,0,0,0.05);
    border-radius: 2px;
  }
</style>
