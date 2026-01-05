# Data Inventory

## Overview

The app has **3,983 sūtras** with multiple layers of commentary and supporting reference material.

---

## 1. Core Sūtra Data

### `static/data/sutras.json` (3.6 MB, 3,983 entries)

The master sūtra file. Array format with rich metadata.

| Field | Description | Example |
|-------|-------------|---------|
| `i` | Unique ID (adhyāya+pāda+number) | `"11001"` |
| `a` | Adhyāya | `"1"` |
| `p` | Pāda | `"1"` |
| `n` | Number within pāda | `"1"` |
| `s` | Sūtra text (Devanagari) | `"वृद्धिरादैच्"` |
| `e` | Transliteration | `"vruddhiraadaich"` |
| `ss` | Anvaya (reordered for clarity) | `"आत्-ऐच् वृद्धिः"` |
| `type` | Category | `"S$वृद्धिसंज्ञा$"` |
| `an` | Anuvṛtti (inherited terms) | `"वृद्धिः$11001"` |
| `pc` | Pada-ccheda (word splits) | `"वृद्धिः$S$1$1$##आत्-ऐच्$S$1$1$"` |

**Use for:** Sūtra display, search, navigation, derivation references.

---

## 2. Commentary Data

### `static/data/vasu_rewritten.json` (2.0 MB, 3,974 entries) ✨ NEW

Zinsser-style clear commentary. Our primary commentary source.

```
"11001": "The vowels @deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि].

The sūtra has three words: @deva[वृद्धिः] (the term being defined), @deva[आत्] (the vowel @deva[आ]), and @deva[ऐच्] (the pratyāhāra covering @deva[ऐ] and @deva[औ])..."
```

**Markup conventions:**
- `@deva[...]` — Devanagari text
- `@ref[X.Y.Z]` — Sūtra reference
- `@[...]` — IAST technical term
- `@b[...]` — Bold emphasis
- Tables in markdown format

**Use for:** Grammar path, sūtra detail views, advanced learners.

---

### `static/data/layered_commentary.json` (6.5 MB, 3,983 entries)

Three-level explanations for adaptive depth.

```json
{
  "11001": {
    "en": {
      "simple": "The vowels aa, ai, and au are called \"vrddhi\" (strengthening).",
      "standard": "The vowels @deva[आ], @deva[ऐ], and @deva[औ] receive the technical name...",
      "advanced": "This @deva[संज्ञासूत्र] has three words: @deva[वृद्धिः]..."
    }
  }
}
```

| Level | Audience | Style |
|-------|----------|-------|
| `simple` | Beginners, reading path | Plain English, no jargon |
| `standard` | Intermediate | Technical terms explained |
| `advanced` | Grammar path | Full technical detail |

**Use for:** User-selectable depth, reading path (simple), grammar path (standard/advanced).

---

### `static/data/vasu_english.json` (5.1 MB, 3,983 entries)

Original Vasu commentary (verbose Victorian style). Archival.

**Use for:** Historical reference, comparison, full quotes.

---

### `static/data/vasu_english_summary.json` (805 KB, 3,983 entries)

One-line summaries of each sūtra.

**Use for:** Tooltips, quick previews, search results.

---

### `static/data/kashika.json` (3.6 MB, 3,983 entries)

Kāśikā commentary in Sanskrit.

**Use for:** Sanskrit-medium learners, scholarly reference.

---

### `static/data/kashika_english.json` (737 KB, 3,907 entries)

Kāśikā English translation (76 entries missing).

**Use for:** Alternative commentary view.

---

### `static/data/sutrartha_english.json` (240 KB, 3,983 entries)

Brief sūtra meanings (one sentence).

**Use for:** Inline sūtra display, card views.

---

### `static/data/vartika.json` (134 KB)

Vārtikas (supplementary rules). Currently only metadata.

**Status:** Needs content population.

---

## 3. Passages (Reading Material)

### `static/data/passages/` directory

| File | Source | Content |
|------|--------|---------|
| `meghaduta.json` | Kālidāsa | Cloud Messenger verses |
| `pancatantra.json` | Viṣṇuśarman | Fables |
| `subhasitas.json` | Various | Wise sayings |

Structure:
```json
{
  "source": { "id", "title", "author", "difficulty" },
  "passages": [
    { "id", "reference", "sanskrit", "translation", "vocabulary", "grammar" }
  ]
}
```

**Use for:** Reading path, practice material.

---

## 4. Reference Tables

### `src/lib/reference/` directory

TypeScript modules with structured paradigm data.

| File | Content |
|------|---------|
| `varnamala.ts` | Alphabet, Māheśvara sūtras, pratyāhāras |
| `subanta.ts` | Noun declension paradigms |
| `tinganta.ts` | Verb conjugation paradigms |
| `karaka.ts` | Case relation definitions |
| `sandhi.ts` | Sandhi rules and examples |
| `samasa.ts` | Compound types |
| `kridanta.ts` | Primary derivatives |
| `taddhita.ts` | Secondary derivatives |

**Use for:** Reference pages, paradigm displays, quick lookups.

---

## 5. Vocabulary

### `static/data/vocabulary.json` (12 KB)

Currently minimal (4 entries). Needs expansion.

**Planned use:** Reading path vocabulary, flashcards.

---

## Proposed Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  READING PATH                      GRAMMAR PATH              │
│  ───────────                       ────────────              │
│  passages/*.json                   sutras.json               │
│  vocabulary.json                   + layered (simple)        │
│  + layered (simple)                ↓                         │
│  ↓                                 vasu_rewritten.json       │
│  Optional: click to                + layered (standard)      │
│  see sūtra reference               ↓                         │
│           │                        layered (advanced)        │
│           └──────────────────────► + kashika.json            │
│                                                              │
│  REFERENCE TABLES                  SŪTRA BROWSER             │
│  ────────────────                  ─────────────             │
│  src/lib/reference/*.ts            sutras.json               │
│                                    + all commentaries        │
│                                    + vartika.json            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Quality Notes

| File | Status | Notes |
|------|--------|-------|
| `sutras.json` | ✅ Complete | 3,983 entries |
| `vasu_rewritten.json` | ✅ 99.8% | 3,974 entries (9 gaps) |
| `layered_commentary.json` | ✅ Complete | 3,983 entries |
| `vasu_english.json` | ✅ Complete | Original Vasu |
| `kashika_english.json` | ⚠️ 98% | 3,907 entries (76 gaps) |
| `vartika.json` | ❌ Empty | Needs population |
| `vocabulary.json` | ❌ Minimal | Needs expansion |
| `passages/*.json` | ⚠️ Started | 3 texts, need more |

---

## Next Steps

1. **Consolidate commentary access** — Create unified API to fetch sūtra + all commentary layers
2. **Expand vocabulary** — Extract from passages, build frequency lists
3. **Populate vārtikas** — Add vārtika content for key sūtras
4. **Add more passages** — Hitopadeśa, Bhagavadgītā, simple ślokas
