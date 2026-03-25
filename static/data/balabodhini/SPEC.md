# Bālabodhini TOML Data Specification

This document defines the canonical data format for all Bālabodhini lesson files
(`static/data/balabodhini/{part}/structured/lesson-{NN}.toml`).

---

## Top-level fields

```toml
id = "balabodhini-1-07"          # "{source}-{part}-{NN}" zero-padded lesson number
source = "balabodhini"
part = 1                          # integer volume number
number = 7                        # integer lesson number (unpadded)
title_sanskrit_telugu = "సప్తమః పాఠః"  # Sanskrit title in Telugu script
title_telugu = "ఏడవ పాఠము"       # Telugu title
title_english = "Seventh Lesson"  # English title
grammar_focus = "√as vidhiliṅ (syāt, syāḥ, syām); ya-śabda bahuvacana; kim; api"
                                  # Brief summary; use Pāṇinian terms (laṭ, laṅ, loṭ, vidhiliṅ, lṛṭ, etc.)
sutras = ["3.3.161", "3.4.116"]   # Aṣṭādhyāyī sūtras directly relevant to this lesson's grammar
```

**Rules:**
- `grammar_focus`: use Pāṇinian lacāra names (laṭ, laṅ, loṭ, vidhiliṅ, lṛṭ), not English equivalents
- `sutras`: only include sūtras whose rule is explicitly taught or practiced; omit tangential ones

---

## Section types

Sections appear as TOML array-of-tables (`[[sections]]`). Each section has a `type` field.

### `vocabulary`

```toml
[[sections]]
type = "vocabulary"
language = "bilingual"

[[sections.items]]
sanskrit_telugu = "స్యాత్"     # Sanskrit in Telugu script (required)
telugu_gloss = "ఉండును, వలెను" # Telugu gloss (required)
english = "he may be; perhaps" # English gloss (required)
```

All three fields required for every vocabulary item.

---

### `paradigm` — single-mood (standard layout)

Used when showing one tense/mood at a time (no `layout` field needed).

```toml
[[sections]]
type = "paradigm"
language = "sanskrit"
label = "√as — laṭ"    # "{dhātu} — {lacāra}"; Pāṇinian terms only
mood = "laṭ"            # scalar lacāra name; used for jargon lookup

[[sections.items]]
person = "3rd"          # "3rd" | "2nd" | "1st"
singular_iast = "asti"
plural_iast = "santi"
```

When only singular forms are introduced (e.g. early lessons), omit `plural_iast`.

---

### `paradigm` — multi-mood side-by-side

Used when comparing two or more moods in one table (e.g. lesson-04: laṭ + laṅ).

```toml
[[sections]]
type = "paradigm"
layout = "moods"
language = "sanskrit"
label = "√as — laṭ · laṅ"    # Pāṇinian terms; join multiple moods with " · "
moods = ["laṭ", "laṅ"]       # array; column order matches singular_iast / plural_iast arrays

[[sections.items]]
person = "3rd"
singular_iast = ["asti", "āsīt"]   # one value per mood, same order as moods[]
plural_iast = ["santi", "āsan"]    # one value per mood, same order as moods[]
```

Rendered as: person | [laṭ sg] [laṭ pl] | [laṅ sg] [laṅ pl] | …

---

### `paradigm` — declension (case/number)

```toml
[[sections]]
type = "paradigm"
language = "sanskrit"
label = "rāma (m.) — a-stem masculine"

[[sections.items]]
case = "prathamā"          # Pāṇinian vibhakti name (see list below)
singular_iast = "rāmaḥ"
plural_iast = "rāmāḥ"
```

Valid `case` values: `prathamā`, `dvitīyā`, `tṛtīyā`, `caturthī`, `pañcamī`, `ṣaṣṭhī`, `saptamī`, `sambodhana`

---

### `reading`

Numbered sentences for practice reading.

```toml
[[sections]]
type = "reading"
language = "sanskrit"

[[sections.items]]
n = 1                                   # sentence number (integer)
sanskrit_telugu = "అహం అపి తత్ర స్యాం"  # Sanskrit in Telugu script
english = "I also may be there."        # English translation
telugu = "నేనును అక్కడ నుండవలెను."      # Telugu translation
```

All three translation fields required.

---

### `exercises`

Translation exercises: given a Telugu/English prompt, student writes Sanskrit.

```toml
[[sections]]
type = "exercises"
language = "telugu"

[[sections.items]]
n = 1
telugu = "తామును అక్కడ లేరు."         # Telugu prompt (primary)
english = "They themselves are not there."  # English prompt
sanskrit_telugu = "తే స్వే అపి తత్ర న సంతి."  # Sanskrit answer in Telugu script
```

---

### `passage`

Extended prose/verse passage.

```toml
[[sections]]
type = "passage"
language = "sanskrit"

[[sections.items]]
sanskrit_telugu = "…"
english = "…"          # optional translation
```

---

### `passage_translation`

Telugu translation of a preceding passage section.

```toml
[[sections]]
type = "passage_translation"
language = "telugu"

[[sections.items]]
telugu = "…"
```

---

### `grammar_note`

Short explanatory note (bilingual).

```toml
[[sections]]
type = "grammar_note"
language = "meta"

[[sections.items]]
telugu = "ధాతువుల రూపములు"
english = "Verb conjugation paradigms"
```

---

## Naming conventions

| Field | Convention |
|---|---|
| Sanskrit content | `*_telugu` suffix for Telugu-script fields; `*_iast` suffix for IAST fields |
| Glosses | `telugu_gloss` (vocabulary items); `telugu` (sentences/exercises) |
| Person | `"3rd"`, `"2nd"`, `"1st"` (English strings; mapped to puruṣa in UI) |
| Case | Pāṇinian vibhakti name in IAST |
| Mood/tense | Pāṇinian lacāra name in IAST; **never** English equivalents |

## Pāṇinian lacāra names

| Lacāra | Use |
|---|---|
| `laṭ` | present (vartamāna) |
| `laṅ` | imperfect (bhūtakāla) |
| `loṭ` | imperative (ājñārthaka) |
| `vidhiliṅ` | optative (vidhyarthaka) |
| `lṛṭ` | future (bhaviṣyat) |
| `āśīrliṅ` | benedictive |
| `liṭ` | perfect |
| `luṅ` | aorist |
| `luṭ` | periphrastic future |

Do **not** use: present, imperfect, optative, imperative, future as labels.
