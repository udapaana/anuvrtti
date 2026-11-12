# Authoring plan

What to write next, and the road from graded readings to whole texts. Edit this
file as work lands; it is the backlog a new session reads first.

## Where the corpus stands (Nov 2026)

508 readings, 7,726 annotated words. 803 paradigm cells carried, 18 owed
(`content/paradigm-wanted.json` — vocatives nobody plausibly says).

| tiers   | graded | attested | what is there |
|---------|-------:|---------:|---------------|
| 10–140  | 107    | 0        | drills and short scenes: kāraka, sup, tiṅ, sandhi |
| 150–200 | 164    | 0        | the paradigm chapters — case × number × stem class |
| 200–300 | 78     | 13       | kathā, kṛt, taddhita, saṃjñā; first attested lines |
| 300–400 | 6      | 62       | almost all attested: Hitopadeśa, Rāmāyaṇa, Nītiśataka, Purāṇa |
| 400–570 | 11     | 33       | sparse; Ṛgveda, Kaṭha, longer kathā |

Three audits have been run over the graded readings; contrived examples are
being removed rather than polished.

## The shape that's wrong

The curve is a cliff. Graded prose stops at ~tier 300 and what follows is
single attested verses, each a puzzle on its own. Nothing in between teaches a
reader to keep going — to read a paragraph whose third sentence depends on the
first, with compounds, participles, relative clauses and absolutives together.
A whole text is that skill. So the plan is a ramp, then texts.

## Tracks, in order

### 1. The ramp (tiers 300–450): connected graded prose
Graded kathā of 6–12 sentences that combine what the paradigm chapters teach
one at a time:
- absolutive chains (गत्वा … दृष्ट्वा … अवदत्), participles as clauses (गच्छन्,
  गतः), the locative absolute;
- relative–correlative (यः … सः, यदा … तदा, यत्र … तत्र);
- compounds read in context — tatpuruṣa, karmadhāraya, bahuvrīhi, dvandva;
- passives and the impersonal (तेन गम्यते), causatives, desideratives;
- direct speech with इति, nested.

Retellings of stories the first full texts contain (the crow and the deer, Nala
and the swan) — a reader who meets them graded first reads the original as a
reward. ~40 readings.

### 2. Attested chapters for the pinned texts not yet read
Nine pinned texts have no chapter yet: Raghuvaṃśa, Kumārasambhava, Meghadūta,
Śakuntalā, Bhaṭṭikāvya, Kirātārjunīya, Buddhacarita, Vetālapañcaviṃśati,
Daśakumāracarita. Bhaṭṭikāvya is the natural one for a grammar reader — it was
written to illustrate Pāṇini. 6–10 famous verses each, at tiers 400–550.

### 3. Notes for words that carry tags only
~2,900 later occurrences have tags but no note. Prioritise the words whose
first meeting is in an attested reading (the hardest for a reader), then by
frequency.

### 4. Whole texts (below)

## Whole texts

### Which, and in what order
The traditional first-reader sequence still holds, and all but one are pinned:

| # | text | why first/next | length | pinned |
|---|------|----------------|--------|--------|
| 1 | **Hitopadeśa — one complete kathā** (e.g. Mitralābha's crow, deer and jackal) | prose + verse, the plainest narrative Sanskrit, already a chapter | ~80 sentences | yes |
| 2 | **Vetālapañcaviṃśati — tale 1** | continuous prose narrative, a frame and a riddle | ~120 sentences | yes |
| 3 | **Nalopākhyāna** (Mahābhārata 3.50–78) | the classic first long text; plain epic śloka | ~1,000 verses, read in sections | **no — pin GRETIL MBh** |
| 4 | **Kaṭhopaniṣad**, whole (chapter exists, 3 readings) | short, famous, a dialogue | 119 verses | partly |
| 5 | **Raghuvaṃśa canto 1 / Meghadūta** | the step to kāvya | 95 / 111 verses | yes |

### When a reader can handle one — measured, not guessed
"Graded" can be made exact. Every annotated word already resolves to a cell
(stem class × case × number, लकार × person × number, kṛt, taddhita, samāsa
type) and every reading has a tier. So for a text:

> readiness at tier N = share of the text's tokens whose cell, affix and
> compound type the reader has already met in a reading below N.

A script (`bun run readiness -- --text <id>`) reports that share by tier and
lists what is unmet. A text unlocks at the tier where readiness crosses ~95%;
what is unmet becomes the ramp's to-do list. The same number says where
Nala belongs relative to the Hitopadeśa, instead of tradition saying so.

### How a text is presented
- A new kind, `text`: one per file set, `content/texts/<id>/` with sections
  (sarga, kathā, adhyāya) as ordered files; a "Texts" shelf in the reader
  beside the chapters; progress per text and per section.
- Saṃhitā by default (a whole text is read as written), padaccheda on demand,
  verse numbers in the margin, the rail and quiz exactly as for readings.

### How a text is annotated — the real cost
The "born complete" gate (every word fully typed and noted) is what today's
readings meet, and it is slow: the whole corpus so far is ~7,700 words, and
Nala alone is roughly as long again. So texts get a lighter contract:
- **Required**: padas (sandhi undone), lemma and gloss for every word, the
  case/लकार tags the build cannot derive. The build already derives gender,
  number, person, pada, gaṇa and kṛt from vidyut; for texts it also proposes
  the lemma and cell for every token and the author confirms.
- **Notes only where they teach**: a word's first meeting in the corpus, a
  form not yet met, a hard construction. Everything else falls back on the
  glossary, which now covers every tag.
- `check-new-readings` gets a `text` profile that gates on the required set,
  not on notes.

### First milestone
One Hitopadeśa kathā, end to end: the readiness script, the `text` kind and
shelf, the lighter gate, the kathā itself annotated. That proves the pipeline
on ~80 sentences before committing to Nala.

## Decisions for the owner
1. First text: a Hitopadeśa kathā (recommended), or straight to Nala?
2. The lighter annotation contract for texts — acceptable?
3. Pin the Mahābhārata (GRETIL) for Nala now, so the readiness numbers can be
   run on it early?
