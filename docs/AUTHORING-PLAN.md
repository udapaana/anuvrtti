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
Order is set by the readiness score below, not by tradition — the owner's
condition is that each text is calibrated to where the reader is. Candidates,
all pinned or already read from:

| text | shape | notes |
|------|-------|-------|
| **Pañcatantra — one complete tale** | prose frame + embedded verses | already a chapter (12 attested readings, GRETIL Jha ed.); its prose is the plainest narrative Sanskrit — the Hitopadeśa is a later reworking of it |
| **Hitopadeśa — one complete kathā** | prose + verse | already a chapter; slightly more ornate than the Pañcatantra |
| **Vetālapañcaviṃśati — tale 1** (from the Kathāsaritsāgara) | continuous narrative with a frame and a riddle | pinned; the way into the Kathāsaritsāgara (≈22,000 ślokas whole) |
| **Kaṭhopaniṣad**, whole | 119 verses, a dialogue | three verses already read |
| **Nalopākhyāna** (MBh 3.50–78) | ~1,000 epic ślokas, read in sections | needs the Mahābhārata pinned — deferred by the owner |
| **Raghuvaṃśa canto 1 / Meghadūta** | kāvya | pinned; later |

The likely first is a Pañcatantra tale; the readiness score decides between it
and the Hitopadeśa kathā.

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

### How a text is annotated — generated, not hand-typed
Owner's direction: generate the data with vidyut rather than hard-coding it,
and link out to a dictionary rather than writing glosses. So a text is
annotated by the build, and the author only confirms and adds:

- **Segmentation and analysis from vidyut.** The repo builds two vidyut crates
  today (prakriya, sandhi). The same project has **vidyut-cheda** (splits a
  saṃhitā into padas) and **vidyut-kosha** (every derivable form → lemma and
  analysis). Built at the pinned `VIDYUT_REV` and run at build time (Node, not
  the browser — the kosha is large), they give each token its padas, lemma,
  case/number/gender or लकार/person/number, with alternatives where a form is
  ambiguous.
- **Disambiguation is the author's one job.** Where vidyut returns more than
  one analysis (देवौ: nominative or accusative dual), the author picks; a
  small overrides file per section holds only those choices. Everything else
  is regenerated on every build, so an engine improvement improves every text.
- **Meanings from the dictionary.** Monier-Williams is already imported
  (`scripts/import-mw.ts`, used for genders). The rail shows the MW headword
  sense for the lemma and links to the full entry (Cologne digital MW / Ambuda);
  a hand gloss only where the sense in context is not MW's first.
- **Notes only where they teach**: a form the corpus has not met, a hard
  construction. The glossary covers every tag, so the rail always explains.
- `check-new-readings` gets a `text` profile: every token segmented and
  analysed (vidyut or override), every lemma linked; no notes required.

### First milestone
1. The readiness script, run over the candidate texts — so the first choice is
   measured. *(Not built: the first tale was the one the eval had already run.)*
2. ~~vidyut-cheda and vidyut-kosha built at the pin; a build step that analyses
   a text's sections and reports what it could not settle.~~ Done —
   `scripts/snapshot-text.ts` (local) → committed snapshot → `build-texts.ts`.
3. ~~The `text` kind, shelf and gate, with MW meanings and links.~~ Done —
   `/reader/text/<id>`, the "texts" shelf under the chapters, `check-texts.ts`.
4. ~~One complete Pañcatantra tale through it end to end.~~ Done — the monkey
   and the wedge (`content/texts/pancatantra-kilotpatin/`); the author pass is
   measured in `docs/AUTO-ANNOTATION-EVAL.md` §7.

To add a text: `content/texts/<id>/text.yaml` (sections verbatim), then
`bun scripts/snapshot-text.ts <id>`, read `bun scripts/build-texts.ts`'s
report, write `overrides.yaml`, re-snapshot (new lemmas and split padas are
looked up), and `bun run check` until the `texts` line is green.

## Decisions taken
- First text: any of the candidates, chosen by measured readiness (owner).
- Annotation: generated by vidyut, meanings linked to a dictionary (owner).
- Mahābhārata: not pinned yet (owner).

## Owed checks
- ~~**The lit cell must be the word.**~~ Done — `scripts/check-paradigm-lit.ts`,
  a ratchet at 0 (`content/paradigm-lit-floor.json`), run by `bun run check`
  and inside `npm run build`. It found 914 of 8,035 lit cells wrong. Fixed:
  each verb word gets its own table (preverb, णिच्/सन्/passive, dhātu entry:
  आगच्छति lights आङ् + गम्, not गच्छति); adjectives get their word's gender;
  pronoun doublets (मम / मे) show both; prefixed kṛdantas their own table;
  ā/ī feminines are ṅyāp stems. Where no correct table exists the rail now
  shows none, rather than a wrong one. A rescue pass in build-quiz then gives
  such words their real derivation — मतुप् for -मत्/-वत् (भगवान्), the kṛdanta
  for a stem or root (दाता, दिक्, विद्वान्, कर्तव्यम्), the stem plain or ṅyāp
  (लक्ष्मीः, बालिका) — kept only if its cell is the word. The check also
  surfaced ~20 wrong tags (लते as एकवचन, कृतवती as नपुंसक, a passive's subject
  as द्वितीया), now fixed. Then every remaining word but four got its own
  table: derived from its tags (कुन्ती + ढक् → कौन्तेय, सत्य + वद् + णिनि), from
  its preverbs fused or respelled (उदि → उद् + इ, मूर्च्छ् → मुर्छ्), as the a-stem
  it attests (तृषित, where vidyut gives तृष्ट), or — where vidyut declines a stem
  wrongly — constructed from Kāle in `content/paradigms-constructed.yaml` and
  cited beside the table: महत् §115, आशिष् §114, उदञ्च् §104, कामदुह् §97,
  दीर्घायुस् §42 (ṣatva), एतद्'s एन- doublets §135, किम् + चित्/चन/अपि §141.
  Left without a table: three Vedic forms (स्वे, धिष्ण्या, हरिवः) and the
  āmreḍita एकैकम्.
- The kṛt-affix guess (`krts` in `scripts/build-quiz.ts`) also guesses for
  finite verbs (अस्ति → `अस्+क्तिन्`); it should only run on non-finite forms.

## Notes
- The 18 owed paradigm cells were searched for in all 13 pinned texts: none
  occurs as an address or in that case. They stay owed; a text that addresses
  seasons, rivers or directions (Ṛtusaṃhāra, stotras) is where they live.
