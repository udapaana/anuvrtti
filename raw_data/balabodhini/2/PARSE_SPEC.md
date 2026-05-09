# Bālabodhini Volume 2 — Stage 1 Parsing Spec

## Goal

Convert each raw lesson (Telugu-script OCR text) into a structured TOML file
matching the Vol 1 `structured/` schema. **Preserve ALL data.** Nothing may be
discarded. If something doesn't fit a clean category, put it in `grammar_note`.

This is Stage 1 (organize). The output must be structurally correct and faithful
to the book. English translations may be left blank — Stage 2 will fill them.

---

## Input

Each lesson is a single `.txt` file. First line is the header:
```
ఏకోనచత్వారింశః పాఠః = ముప్పదితొమ్మిదవ పాఠము
```
or with `## ` prefix. The text uses `&emsp;` for column alignment.
Telugu script throughout — Sanskrit is also in Telugu script.

---

## Output format

Write TOML directly. The file must parse cleanly with Python `tomllib`.

### Top-level fields

```toml
id = "balabodhini-2-39"
source = "balabodhini"
part = 2
number = 39
title_sanskrit_telugu = "ఏకోనచత్వారింశః పాఠః"
title_telugu = "ముప్పదితొమ్మిదవ పాఠము"
title_english = "Thirty-ninth Lesson"
grammar_focus = "√lamb ātmanepada laṭ, laṅ; strīliṅga sarvanāma (sā, eṣā, kā, sarvā)"
sutras = []
```

- `grammar_focus`: Pāṇinian terms. Use lacāra names (laṭ, laṅ, loṭ, vidhiliṅ, lṛṭ, lṛṅ).
- `title_english`: Translate the Telugu ordinal (e.g. "Thirty-ninth Lesson").
- `sutras = []`: Leave empty.

---

## Section types

### 1. vocabulary

**Signals:** Lines with `word = gloss` or `word = gloss &emsp; word = gloss`.
Always first in a lesson, right after header.

```toml
[[sections]]
type = "vocabulary"
language = "bilingual"

[[sections.items]]
words = [
  { sanskrit_telugu = "సా", telugu_gloss = "ఆమె", english = "she" },
  { sanskrit_telugu = "అభిముఖం", telugu_gloss = "ఎదురుగా", english = "facing, in front of" },
]
```

**Rules:**
- One `[[sections.items]]` per visual line in the book.
- `words` array captures all `word=gloss` pairs on that line (1, 2, or 3+).
- Strip `&emsp;` from values.
- Verb roots listed alone (e.g. `లంబ్ = వ్రేలాడుట`) are vocabulary.
- Indented conjugated forms with glosses (e.g. `జ్ఞాయతే = తెలియును`) → vocabulary.
- `|| మో ||` means "and similar" — preserve in `telugu_gloss`.
- `english` — provide a reasonable translation.

### 2. paradigm

A table of verb conjugations or noun/pronoun declensions.

#### Verb paradigm (layout="moods")

**Signals:** Tense/mood header labels (వర్తమానకాలము, భూతకాలము, etc. or లట్, లఙ్, etc.)
followed by person rows (ప్ర., మ., ఉ.) with ` - ` separating sg from pl.

Two or more tenses shown side by side = multi-mood table.

```toml
[[sections]]
type = "paradigm"
layout = "moods"
language = "sanskrit"
label = "√lamb ātmanepada — laṭ · laṅ"
moods = ["laṭ", "laṅ"]

[[sections.items]]
person = "3rd"
singular_iast = ["lambate", "alambata"]
plural_iast = ["lambante", "alambanta"]

[[sections.items]]
person = "2nd"
singular_iast = ["lambase", "alambathāḥ"]
plural_iast = ["lambādhve", "alambādhvam"]

[[sections.items]]
person = "1st"
singular_iast = ["lambe", "alambe"]
plural_iast = ["lambāmahe", "alambāmahi"]
```

**Schema:** `singular_iast` and `plural_iast` are arrays with one element per mood.
If dual column exists, add `dual_iast` (also an array, one per mood).

#### Noun paradigm — single stem

**Signals:** Case abbreviations (ప్ర., ద్వి., తృ., చ., పం., ష., స., సం.)
with columns ఏ. బ. (and optionally ద్వి.).

```toml
[[sections]]
type = "paradigm"
language = "sanskrit"
label = "guru (m.) — u-stem masculine"

[[sections.items]]
case = "prathamā"
singular_iast = "guruḥ"
dual_iast = "gurū"
plural_iast = "guravaḥ"
```

**Schema:** `singular_iast`, `dual_iast`, `plural_iast` are **strings** (one stem).
Omit `dual_iast` if the table has no dual column.

#### Noun paradigm — multiple stems side by side (layout="stems")

**Signals:** Multiple stem names above the table (e.g. `'హారి' 'గౌరి' 'గురు'`).

```toml
[[sections]]
type = "paradigm"
layout = "stems"
language = "sanskrit"
label = "strīliṅga — i/ī/u/ū/ṛ stems"
stems = ["hāri", "gaurī", "guru", "vadhū", "dātṛ"]

[[sections.items]]
case = "prathamā"
singular_iast = ["hāriḥ", "gaurī", "guruḥ", "vadhūḥ", "dātā"]
plural_iast = ["harayaḥ", "gauryaḥ", "guravaḥ", "vadhvaḥ", "dātāraḥ"]
```

**CRITICAL:** `singular_iast` and `plural_iast` are **arrays** with one element per stem.
If dual column exists, add `dual_iast` (array, one per stem).
If the table shows only one vacana (e.g. dvivacana only), use `dual_iast` only.

**NEVER** pack "sg / pl" or "sg — pl" into one string. Each vacana is a separate field.

If the raw table has ఏ. and బ. columns → `singular_iast` + `plural_iast`.
If the raw table has only one unlabeled column (dvivacana) → `dual_iast` only.

#### IAST transliteration rules

Telugu→IAST:
ఆ=ā, ఇ=i, ఈ=ī, ఉ=u, ఊ=ū, ఋ=ṛ, ఏ=e, ఐ=ai, ఓ=o, ఔ=au, అం=aṃ, అః=aḥ
క=ka, ఖ=kha, గ=ga, ఘ=gha, ఙ=ṅa, చ=ca, ఛ=cha, జ=ja, ఝ=jha, ఞ=ña,
ట=ṭa, ఠ=ṭha, డ=ḍa, ఢ=ḍha, ణ=ṇa, త=ta, థ=tha, ద=da, ధ=dha, న=na,
ప=pa, ఫ=pha, బ=ba, భ=bha, మ=ma, య=ya, ర=ra, ల=la, వ=va,
శ=śa, ష=ṣa, స=sa, హ=ha, ళ=ḷa
Virama (్) suppresses inherent -a. anusvāra (ం) = ṃ. visarga (ః) = ḥ.

### 3. passage

Long continuous Sanskrit prose in Telugu script. Split into numbered sentences.

**Signals:** Dense Sanskrit morphology (virama ్, anusvara ం, visarga ః,
verb endings -తి, -న్తి, -త్, -న్ etc.)

```toml
[[sections]]
type = "passage"
language = "sanskrit"

[[sections.items]]
n = 1
sanskrit_telugu = "సా అంగనా కస్య పుత్రికా వా, కిమర్థం గంగాసమీపే సంచరతి వా ఇతి ఏకః నృపః మాం ప్రహ్యః అపృచ్ఛత్."

[[sections.items]]
n = 2
sanskrit_telugu = "తదా అహాం ఈషత్ అలోచ్య 'హేనృప! అహమపి తద్వృత్తాంతం సర్వం విచార్య అనంతరం వదిష్యామి; తావత్పర్యంతం అత్ర ఏధి' ఇతి అవదం."
```

**Rules:**
- Split on sentence boundaries (`.` or `।`). Do NOT split inside quotes.
- Each item has `n` (1-based number) and `sanskrit_telugu` (exact Telugu text).
- **No `english` field** — leave it out entirely. Stage 2 fills it.
- Preserve exact text including punctuation.
- **No data loss.** Concatenating all items must reproduce the original paragraph.

### 4. passage_translation

Colloquial Telugu prose — the student reads and translates. Split into sentences.

**Signals:** Everyday Telugu verb forms (-చున్నాఁడు, -ఁడు, -ిని, -మని, -వారు).

```toml
[[sections]]
type = "passage_translation"
language = "telugu"

[[sections.items]]
n = 1
telugu = "పిమ్మట రాజును జూచి ఆ యాదుండి ఓరాజా! నాయూరియొక్కయు నాయొక్కయు పేరు నీ కెందుకుఁగీవు (నీ త్రోవను = తవమార్గేణ) వెళ్ళుమని చెప్పెను."
```

**Rules:**
- Split on sentence boundaries (`.` followed by space, or end of text).
- Each item has `n` (1-based) and `telugu` (exact Telugu text).
- Parenthetical Sanskrit like `(నీ త్రోవను = తవమార్గేణ)` stays verbatim.
- **No data loss.** Concatenating all items must reproduce the original.

### 5. grammar_note

Telugu meta-commentary about grammar rules.

```toml
[[sections]]
type = "grammar_note"
language = "meta"

[[sections.items]]
telugu = "కతి-త్వం-అహాం అనునవి మూఁడును మూఁడు లింగములలోను ఒక విధముగనే యుండును."
english = "The words kati, tvam, and aham remain the same across all three genders."
```

**Rules:**
- `telugu` — exact text from the book.
- `english` — translate the note. If unsure, leave as `""`.
- Grammar notes interspersed between paradigm tables → separate `grammar_note` section.

---

## Idiosyncrasies

1. **Lesson 39** has no `##` prefix — plain text header on page 1.
2. **Vocabulary bleeds into paradigm** — conjugated forms with glosses
   (జ్ఞాయతే = ...) are vocabulary, NOT paradigm rows.
3. **Parenthetical Sanskrit in Telugu** — `(నీ త్రోవను = తవమార్గేణ)` stays verbatim.
4. **`|| మో ||`** = "and similar forms" — preserve in telugu_gloss.
5. **Multi-stem dvivacana tables** (lessons 77–78) — use `layout="stems"` with `dual_iast` only.
6. **Grammar notes between paradigm rows** → separate `grammar_note` section.
7. **Lesson 78 end marker** — `ద్వితీయభాగఽ సమాప్తఽ` → `grammar_note`.
8. **`&emsp;` spacing** — infer column structure, strip from values.
9. **Lacāra abbreviations:**
   లట్=laṭ, లఙ్=laṅ, లోట్=loṭ, విధి/విధిలిఙ్=vidhiliṅ, లృట్=lṛṭ, లృఙ్=lṛṅ, లిట్=liṭ, లుఙ్=luṅ

---

## TOML escaping reminders

- Use `"..."` for single-line strings. Escape inner `"` as `\"`.
- Use `"""..."""` for multi-line strings (passages, grammar notes).
- Inline tables: `{ key = "val", key2 = "val2" }` — trailing comma OK in arrays.
- Arrays: `["a", "b", "c"]`
