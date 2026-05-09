# Bālabodhini Volume 2 — Processing Pipeline

## Overview

Four stages, each producing files in a separate directory. Each stage reads the
output of the previous stage plus the raw text for verification.

```
pages/          → raw_lessons/       → lessons/            → structured/
(80 .md files)    (40 .txt files)      (40 .toml files)     (40 .toml files)
OCR pages         per-lesson split     organized data       render-ready
```

**Current state:** `pages/` and `raw_lessons/` are done and clean.
`json/` contains AI-parsed JSON — useful as a starting point but has
inconsistencies. `structured/` was generated from that bad JSON and must be
rebuilt.

---

## Stage 0: pages → raw_lessons (DONE)

Script `scripts/parse-balabodhini-2.py` concatenates 80 page files, splits on
lesson headers (పాఠః = pattern), outputs 40 `lesson-NN.txt` files.
**No re-work needed.** The raw lesson splits are clean.

---

## Stage 1: raw_lessons + json → lessons/ (ORGANIZE)

**Goal:** Produce one clean TOML per lesson that faithfully represents the
book's structure. No invented content. Fix structural inconsistencies from the
AI pass.

**Input:** `raw_lessons/lesson-NN.txt` (ground truth) + `json/lesson-NN.json`
(AI parse, use as starting point but verify against raw text).

**Output:** `raw_data/balabodhini/2/lessons/lesson-NN.toml`

### What this stage does:

1. **Top-level fields** — copy from JSON, verify against raw text:
   - `id`, `number`, `title_sanskrit_telugu`, `title_telugu`
   - `title_english` — keep the agent's translation
   - `grammar_focus` — keep the agent's summary
   - `sutras = []` — leave empty

2. **Vocabulary sections** — verify word=gloss pairs against raw text lines.
   Each visual line → one `[[sections.items]]` with a `words` array.
   Fields per word: `sanskrit_telugu`, `telugu_gloss`, `english`.
   Strip `&emsp;`. Keep column grouping faithful to the book.

3. **Paradigm sections** — normalize to consistent schema:
   - **Verb (layout="moods"):** `moods` array, items have `person`,
     `singular_iast` (array, one per mood), `plural_iast` (array).
     If dual column exists: `dual_iast` (array).
   - **Noun (layout="stems"):** `stems` array, items have `case`,
     `singular_iast` (array, one per stem), `plural_iast` (array).
     If dual column exists: `dual_iast` (array).
     **DO NOT** pack "sg / pl" into one string. Each number column is separate.
   - **Noun (single stem, no layout):** items have `case`,
     `singular_iast` (string), `plural_iast` (string),
     optionally `dual_iast` (string).
   - Verify IAST against Telugu-script forms in raw text.

4. **Passage sections** — split into numbered sentences:
   - Split on `.` (purna virama) boundaries, not mid-sentence.
   - Each item: `n` (1-based), `sanskrit_telugu` (exact Telugu text).
   - `english = ""` — leave blank for Stage 2.
   - The split must be verified against raw text: no text lost, no text added.

5. **Passage-translation sections** — split into numbered sentences:
   - Split on `.` boundaries in colloquial Telugu.
   - Each item: `n` (1-based), `telugu` (exact Telugu text).
   - Parenthetical Sanskrit like `(నీ త్రోవను = తవమార్గేణ)` stays verbatim.
   - `english = ""` — leave blank.

6. **Grammar-note sections** — keep as-is from JSON.
   Each item: `telugu`, `english` (agent's translation, or blank).

### Consistency rules:

- **No invented text.** Every Telugu string must be verifiable in the raw file.
- **IAST must be correct.** Verify transliteration against Telugu script.
- **No data loss.** Every line of the raw text must appear somewhere in the
  output. If a line doesn't fit any section, put it in `grammar_note`.
- **Section ordering** must match the book's pedagogical flow.

---

## Stage 2: lessons/ → lessons/ (AUGMENT)

**Goal:** Add English translations, IAST transliterations, and tags that make
the lesson render comparably to Vol 1.

**Input:** `raw_data/balabodhini/2/lessons/lesson-NN.toml`

**Output:** Same files, updated in place.

### What this stage adds:

1. **Vocabulary:** `iast` field for each word (IAST of `sanskrit_telugu`).
   `tag` field for verb forms (e.g. `"p.p. e.v. laṭ"`).

2. **Passage items:** `english` translation for each numbered sentence.

3. **Passage-translation items:** `english` field (English of the Telugu).
   `sanskrit_telugu` field where possible (the Sanskrit equivalent).

4. **Grammar-note items:** `english` if not already present.

---

## Stage 3: lessons/ → structured/ (FINALIZE)

**Goal:** Copy the augmented lessons into the location `LessonStep.svelte`
reads: `static/data/balabodhini/2/structured/lesson-NN.toml`.

This is a straight copy or a light transformation (e.g., adding `source`,
`part` if not already present). The file must pass `tomllib.load()`.

---

## Reference: Vol 1 structured format

Section types used in Vol 1 (38 lessons):
- `vocabulary` (36) — bilingual word lists with `english`, optional `tag`
- `reading` (35) — numbered Sanskrit sentences with `english` + `telugu`
- `exercises` (35) — numbered Telugu→Sanskrit translation exercises
- `paradigm` (34) — verb/noun tables with IAST
- `grammar_note` (27) — Telugu explanations with English
- `script_table` (11) — alphabet/script tables (Vol 1 only)
- `sandhi_table` (1) — sandhi rules (Vol 1 only)
- `passage` (1) — in lesson 38 only, numbered Sanskrit sentences
- `passage_translation` (1) — in lesson 38 only

**Key difference:** Vol 1 uses `reading`/`exercises` (numbered sentence pairs).
Vol 2 lessons 39+ have longer continuous prose → `passage`/`passage_translation`
with numbered sentences split on sentence boundaries.

**Paradigm schema in Vol 1:**
- Verb moods: `singular_iast` is an **array** (one element per mood).
  Field name is `singular_iast` even for dual-only tables (Vol 1 lesson 38
  uses `singular_iast` for the dual column — it's the only number column).
- No `layout="stems"` in Vol 1 — that's new in Vol 2.
