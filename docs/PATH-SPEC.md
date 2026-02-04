# Learning Path Specification

This document defines the markdown format for learning paths in Anuvrtti.

## File Location

Paths live in `static/content/paths/` as `.md` files. The filename determines sort order:
- `00-introduction.md` (first)
- `01-tinganta-lat.md`
- `reading-01-alphabet.md` (reading track)

## Frontmatter

```yaml
---
id: path-id                    # URL slug, must be unique
title: Human Readable Title    # English title
titleSanskrit: संस्कृत          # Sanskrit title in Devanagari
label: लेबल्                   # Short label for tree display
track: grammar | reading       # Which track this belongs to
category: foundation | tinganta | subanta | karaka | kridanta | taddhita | sandhi | samasa
description: One-line description for previews
difficulty: beginner | intermediate | advanced
estimatedTime: 2-3 hours
prerequisites:
  - other-path-id
---
```

## Sections

Sections are separated by `---` (horizontal rule). Each section starts with a `## ` header.

### Concept Sections

For explanatory content without a specific sūtra:

```markdown
## concept - Section Title

Prose content here. Use standard markdown plus our extensions.
```

### Sūtra Sections

To teach a specific sūtra:

```markdown
## 1.1.1 - Sūtra Title

**Key Terms:** term1, term2, term3

Content about this sūtra...
```

The sūtra ID (e.g., `1.1.1`) tells the UI to load and display:
- The sūtra text from the database
- Layered commentary (with depth selector)
- Any prakriya examples configured for that sūtra

---

## Markdown Extensions

These custom tags render special components inline.

### Sanskrit Text

```markdown
@deva[देवनागरी]     # Renders in Devanagari with proper font
@[romanaized]       # Renders in roman/IAST with Sanskrit styling
```

### Sūtra References

```markdown
@ref[1.1.1]         # Clickable link to sūtra, shows preview on hover
@ref[1.1.1-1.1.10]  # Range of sūtras
```

### Embedded Sūtra Display

To embed a full sūtra display inline (not as a section header):

```markdown
@sutra[1.1.1]                    # Full sūtra with text + simple commentary
@sutra[1.1.1]{depth=standard}    # Specify commentary depth
@sutra[1.1.1]{compact}           # Compact inline display
```

### Embedded Prakriya

To show a word derivation:

```markdown
@prakriya[bhU + laT + tip]       # Derive भवति, show steps
@prakriya[pac + laT + tip]{highlight=7.3.84}  # Highlight specific rule
@prakriya[rAma + su]             # Derive रामः (subanta)
```

Format: `root/stem + affixes` in SLP1 transliteration.

### Pratyāhāra Expansion

```markdown
@pratyahara[ac]     # Shows: अ इ उ ऋ ऌ ए ओ ऐ औ
@pratyahara[hal]    # Shows all consonants
@pratyahara[iK]     # Shows: इ उ ऋ ऌ
```

### Tables

Standard markdown tables work:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| @deva[अ] | a        |
| @deva[आ] | ā        |
```

### Term Definitions

For inline jargon help:

```markdown
@term[guṇa]         # Shows definition on hover
@term[guṇa]{गुण}    # With Devanagari display
```

---

## Example: Well-Structured Path

```markdown
---
id: tinganta-lat
title: Present Tense
titleSanskrit: लट्लकारः
label: लट्
track: grammar
category: tinganta
description: Learn to derive present tense verb forms.
difficulty: beginner
estimatedTime: 3-4 hours
prerequisites:
  - introduction
---

## concept - What You'll Learn

The present tense (@deva[लट्]) is the most common verb form. We'll trace how
@deva[भू] becomes @deva[भवति]:

@prakriya[bhU + laT + tip]

By the end, you'll understand the 18 @term[तिङ्] endings and when to use each.

---

## 3.2.123 - When लट् Applies

**Key Terms:** vartamAna, laT

@deva[लट्] comes after a root when the action is @term[वर्तमान]{happening now}.
This covers ongoing actions, habits, and general truths.

Compare with @ref[3.2.84] for past tense (@deva[लङ्]).

---

## concept - The 18 Endings

The @deva[ल] of @deva[लट्] gets replaced by personal endings (@ref[3.4.77]):

| Person | Sg | Du | Pl |
|--------|----|----|-----|
| 3rd | @deva[ति] | @deva[तस्] | @deva[अन्ति] |
| 2nd | @deva[सि] | @deva[थस्] | @deva[थ] |
| 1st | @deva[मि] | @deva[वस्] | @deva[मस्] |

These are @term[परस्मैपद] — see @ref[1.4.99].

---

## 7.3.84 - गुण Before Affixes

**Key Terms:** guRa, sArvaDAtukaH

This rule strengthens the root vowel. Watch it in action:

@prakriya[bhU + Sap + tip]{highlight=7.3.84}

The @deva[ऊ] of @deva[भू] becomes @deva[ओ] (guṇa), then @deva[अव्] before the vowel.

---

## concept - Practice

Try these derivations yourself, then check:

1. @deva[गम्] + @deva[लट्] + @deva[तिप्] = ?
   @prakriya[gam + laT + tip]{collapsed}

2. @deva[पच्] + @deva[लट्] + @deva[झि] = ?
   @prakriya[pac + laT + Jhi]{collapsed}
```

---

## Processing

The path loader parses these extensions and the UI components render them:

1. **Build time**: `scripts/build-path-index.ts` extracts frontmatter for the tree
2. **Runtime**: `loadPath()` fetches and parses the full markdown
3. **Render**: `CommentaryText.svelte` processes inline extensions
4. **Sections**: The path page renders section headers specially (loading sūtra data for sūtra sections)

---

## Adding New Extensions

To add a new extension:

1. Define the syntax: `@name[content]{options}`
2. Add parsing in `src/lib/markup.ts`
3. Add rendering in `src/lib/components/CommentaryText.svelte`
4. Document here

---

## Best Practices

1. **Lead with concepts** — Don't just list sūtras. Explain why they matter.
2. **Show derivations** — Use `@prakriya` to make rules concrete.
3. **Link related rules** — Use `@ref` to build connections.
4. **Use tables** — The ending grids, vowel charts, etc. are clearer as tables.
5. **End with practice** — Give readers something to try.
6. **Keep sections focused** — One main idea per section.
