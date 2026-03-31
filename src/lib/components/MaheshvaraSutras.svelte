<script lang="ts">
  import { shivaSutras, commonPratyaharas, expandPratyahara, lookupPratyaharaCanonical, getAllPratyaharaSounds, type Pratyahara } from '$lib/pratyahara';
  import { transliterate } from '$lib/transliteration';
  import Sanskrit from './Sanskrit.svelte';

  interface Interpretation {
    sounds: string[];
    sutraIndex: number;
    startIdx: number;
    endIdx: number;
  }

  // Map each it marker to a color index (shared it → same color)
  const itColors: Record<string, string> = (() => {
    const palette = [
      'it-red', 'it-orange', 'it-amber', 'it-lime',
      'it-teal', 'it-cyan', 'it-violet', 'it-fuchsia',
      'it-rose', 'it-sky', 'it-green', 'it-indigo',
    ];
    const map: Record<string, string> = {};
    let i = 0;
    for (const s of shivaSutras) {
      if (!(s.marker in map)) {
        map[s.marker] = palette[i % palette.length];
        i++;
      }
    }
    return map;
  })();

  let selectedPratyahara = $state<Pratyahara | null>(null);
  let customInput = $state('');
  let interpretations = $state<Interpretation[]>([]);
  let customError = $state('');
  let normalizedInput = $state('');

  function selectPratyahara(p: Pratyahara) {
    selectedPratyahara = p;
    customInput = p.name;
    normalizedInput = p.name;
    customError = '';
    const results = getAllPratyaharaSounds(p.name);
    if (results) {
      interpretations = results;
    } else {
      interpretations = [{ sounds: p.sounds, sutraIndex: 0, startIdx: 0, endIdx: p.sounds.length - 1 }];
    }
  }

  async function handleCustomInput() {
    if (!customInput.trim()) {
      interpretations = [];
      customError = '';
      normalizedInput = '';
      selectedPratyahara = null;
      return;
    }
    const input = customInput.trim();
    const canonicalName = lookupPratyaharaCanonical(input);
    if (canonicalName) {
      const results = getAllPratyaharaSounds(canonicalName);
      if (results && results.length > 0) {
        normalizedInput = canonicalName;
        interpretations = results;
        customError = '';
        selectedPratyahara = commonPratyaharas.find(p => p.name === canonicalName) || null;
        return;
      }
    }
    let result = expandPratyahara(input);
    if (result) {
      normalizedInput = input;
      interpretations = [{ sounds: result, sutraIndex: 0, startIdx: 0, endIdx: result.length - 1 }];
      customError = '';
      selectedPratyahara = null;
      return;
    }
    const schemes = ['iast', 'slp1', 'hk', 'itrans', 'velthuis'] as const;
    for (const scheme of schemes) {
      try {
        const devaInput = await transliterate(input, scheme, 'devanagari');
        const results = getAllPratyaharaSounds(devaInput);
        if (results && results.length > 0) {
          normalizedInput = devaInput;
          interpretations = results;
          customError = '';
          selectedPratyahara = null;
          return;
        }
      } catch { /* try next */ }
    }
    interpretations = [];
    normalizedInput = '';
    customError = 'Invalid pratyahara. Try: ac, hal, aN, ik, ec, yaR, Sal';
  }

  function isHighlighted(soundIdx: number): boolean {
    return interpretations.some(i => soundIdx >= i.startIdx && soundIdx <= i.endIdx);
  }
  function isStartPoint(soundIdx: number): boolean {
    return interpretations.some(i => i.startIdx === soundIdx);
  }
  function isEndPoint(soundIdx: number): boolean {
    return interpretations.some(i => i.endIdx === soundIdx);
  }
  function getSoundGlobalIndex(sutraIndex: number, soundIndexInSutra: number): number {
    let idx = 0;
    for (let i = 0; i < sutraIndex - 1; i++) idx += shivaSutras[i].sounds.length;
    return idx + soundIndexInSutra;
  }
</script>

<div class="maheshvara-wrap">
  <!-- Sutras column -->
  <div class="sutras-col">
    <div class="sutras-list">
      {#each shivaSutras as sutra}
        <div class="sutra-row">
          <span class="sutra-num">{sutra.index}</span>
          <div class="sutra-sounds">
            {#each sutra.sounds as sound, soundIdx}
              {@const globalIdx = getSoundGlobalIndex(sutra.index, soundIdx)}
              {@const highlighted = isHighlighted(globalIdx)}
              {@const isStart = isStartPoint(globalIdx)}
              {@const isEnd = isEndPoint(globalIdx)}
              <span
                class="sound"
                class:hl={highlighted}
                class:sound-start={isStart && !isEnd}
                class:sound-end={isEnd && !isStart}
                class:sound-both={isStart && isEnd}
                class:sound-middle={highlighted && !isStart && !isEnd}
              >
                <Sanskrit text={sound} />
              </span>
            {/each}
            <span class="it-marker {itColors[sutra.marker] ?? 'it-red'}">
              <Sanskrit text={sutra.marker} />
            </span>
          </div>
        </div>
      {/each}
    </div>
    <p class="it-note">
      Colored markers (<Sanskrit text="इत्" />) are not pronounced — they serve as pratyahara endpoints. Same color = same marker.
    </p>
  </div>

  <!-- Pratyahara explorer column -->
  <div class="explorer-col">
    <div class="input-wrap">
      <input
        type="text"
        bind:value={customInput}
        oninput={handleCustomInput}
        placeholder="Enter pratyahara (e.g., ac, hal, yaR)"
        class="pratyahara-input"
      />
      <p class="input-hint">Devanagari, IAST, SLP1, Harvard-Kyoto, ITRANS</p>
      {#if customError}<p class="input-error">{customError}</p>{/if}
    </div>

    <div class="common-list">
      {#each commonPratyaharas as p}
        <button
          class="pratyahara-row"
          class:selected={selectedPratyahara?.name === p.name}
          onclick={() => selectPratyahara(p)}
        >
          <span class="p-name"><Sanskrit text={p.name} /></span>
          <span class="p-desc">{p.description}</span>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  .maheshvara-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 720px) {
    .maheshvara-wrap { grid-template-columns: 1fr; }
  }

  /* ── Sutras ── */
  .sutras-list {
    border: 1px solid #e7e5e4;
    border-radius: 6px;
    overflow: hidden;
  }

  .sutra-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #f5f5f4;
  }
  .sutra-row:last-child { border-bottom: none; }

  .sutra-num {
    font-size: 0.7rem;
    color: #a8a29e;
    font-variant-numeric: tabular-nums;
    width: 1rem;
    flex-shrink: 0;
    text-align: right;
  }

  .sutra-sounds {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.1rem;
  }

  .sound {
    font-size: 1.125rem;
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
    transition: background 0.12s;
  }

  .sound-start {
    background: linear-gradient(135deg, #22c55e 0%, #22c55e 50%, #dcfce7 50%, #dcfce7 100%);
    background-size: 7px 100%;
    background-repeat: no-repeat;
    background-position: left;
    background-color: #dcfce7;
  }
  .sound-end {
    background: linear-gradient(45deg, #fecaca 0%, #fecaca 50%, #ef4444 50%, #ef4444 100%);
    background-size: 7px 100%;
    background-repeat: no-repeat;
    background-position: right;
    background-color: #fecaca;
  }
  .sound-both {
    background-color: #fef3c7;
  }
  .sound-middle { background-color: #e0e7ff; }

  .it-marker {
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.15rem 0.35rem;
    border-radius: 3px;
    margin-left: 0.25rem;
  }

  /* it color palette */
  .it-red     { color: #dc2626; background: #fef2f2; }
  .it-orange  { color: #ea580c; background: #fff7ed; }
  .it-amber   { color: #d97706; background: #fffbeb; }
  .it-lime    { color: #65a30d; background: #f7fee7; }
  .it-teal    { color: #0d9488; background: #f0fdfa; }
  .it-cyan    { color: #0891b2; background: #ecfeff; }
  .it-violet  { color: #7c3aed; background: #f5f3ff; }
  .it-fuchsia { color: #a21caf; background: #fdf4ff; }
  .it-rose    { color: #e11d48; background: #fff1f2; }
  .it-sky     { color: #0284c7; background: #f0f9ff; }
  .it-green   { color: #16a34a; background: #f0fdf4; }
  .it-indigo  { color: #4338ca; background: #eef2ff; }

  .it-note {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: #78716c;
  }

  /* ── Explorer ── */
  .pratyahara-input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border: 1px solid #d6d3d1;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .pratyahara-input:focus {
    border-color: #818cf8;
    box-shadow: 0 0 0 2px #e0e7ff;
  }

  .input-hint {
    margin-top: 0.25rem;
    font-size: 0.7rem;
    color: #a8a29e;
  }
  .input-error {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: #ef4444;
  }
  .input-wrap { margin-bottom: 1rem; }

  .common-list {
    border: 1px solid #e7e5e4;
    border-radius: 6px;
    overflow: hidden;
  }

  .pratyahara-row {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    width: 100%;
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid #f5f5f4;
    background: white;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;
  }
  .pratyahara-row:last-child { border-bottom: none; }
  .pratyahara-row:hover { background: #fafaf9; }
  .pratyahara-row.selected { background: #eef2ff; }

  .p-name {
    font-size: 1.1rem;
    font-weight: 500;
    white-space: nowrap;
    min-width: 3.5rem;
  }
  .p-desc {
    font-size: 0.8rem;
    color: #78716c;
  }
</style>
