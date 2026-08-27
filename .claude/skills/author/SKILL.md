---
name: author
description: Author work on the Aṣṭādhyāyī graded reader — write new readings, fix annotations against the schema, or audit the schema itself. The single entry point for all corpus authoring. Use whenever adding or editing content/readings/ (one file per reading), clearing the annotation backlog, moving rule coverage, or changing src/lib/usage/schema.ts. Routes to the right process based on the task.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - Grep
  - WebFetch
  - WebSearch
---

# /author — the one door for reader authoring

This is the entry point for all work on the graded reader. First **read the two
reference docs** — they are the law:

- `docs/AUTHORING.md` — constraints, register rules, where things live, the gates.
- `docs/WORD-TYPES.md` — the annotation contract: every word type and its tags,
  backed by `src/lib/usage/schema.ts`, which the checks enforce.

Then figure out which of three jobs the request is, and follow that process
below. If the user gave an argument (`$ARGUMENTS`) — `fix`, `audit`, or a
description — use it to route; otherwise infer from what they asked.

| the request is… | → do | detail |
|---|---|---|
| write a new reading / move coverage | **Write** (default) | this file |
| fix wrong or missing tags, clear backlog | **Fix** | `.claude/skills/fix-annotations/SKILL.md` |
| a lint finding that is a real schema gap, or add a grammatical feature | **Audit** | `.claude/skills/audit-schema/SKILL.md` |

**Two standing laws for every job:** `bun run lint` is a hard gate at **zero** (a
wrong annotation fails the build), and the **Vedic (Ṛgveda) block is frozen** — no
new Vedic readings, accents, or moods (see the freeze in `docs/AUTHORING.md`).

When the job is Fix or Audit, read that sub-skill's file and follow it. What
follows is the **Write** process — the default.

---

# Write a reading, end to end

### 1. Pick the target — coverage, not vibes

`bun run ledger` — choose an under-taught rule or cluster. A rule is **taught at
8 distinct readings**; a story adds one encounter per rule. The proven pattern
(AUTHORING.md): a **सङ्ग्रह passage** (`12_sangraha/`) lifts a cluster to 7/8,
then a **story** (`09_katha/`) crosses each once more. Before authoring
against a low number, **check it is not a tagging gap** — the ledger has
undercounted what the corpus teaches; grep the corpus and run `bun run complete`.

### 2. Chapter and tier

- `01`–`11` topical; `12_sangraha/` consolidation; `09_katha/` graded
  narrative; `06_readings/` attested (frozen for Vedic). Each chapter is a
  directory of one-file-per-reading (`<chapter>/<id>.yaml`, a bare one-item
  sequence beginning `- id: <id>`); a new reading is a new file in that dir.
- `segment` = difficulty tier in **tens**; use 71–79 for insertions. Never
  renumber ids. Next id = current max + 1 (grep `id: ex`/`id: rd` across the dirs).
- A सङ्ग्रह passage uses **only rules at or below its tier** and introduces
  nothing — the check enforces this.

### 3. Write the sentence, cover ground per word

Natural Sanskrit that exercises the target. **Reuse taught cells for free**
(WORD-TYPES.md: "a taught cell admits new words") — रामः ग्रामम् गच्छति costs
nothing beyond रामः गच्छति because ग्रामम् sits in a cell देवम्/नरम् opened. A
fresh sentence is only for a word opening a NEW cell. Pack parts of speech.

### 4. Annotate EVERY word to its type — the crux

Open `WORD-TYPES.md`, find each word's type row, author every tag it owes. **The
type marker plus its features — one without the other is unusable.** Name the
*specific* tag, not the generic (क्तवतु not कृदन्त, इञ् not तद्धित, षष्ठी-तत्पुरुष
not समास).

- **सुबन्त**: `lemma` · विभक्ति · कारक (when assigned)
- **तिङन्त**: `lemma` · लकार · प्रयोग/उपसर्ग/सनादि when present (पुरुष/वचन/पद/गण
  are DERIVED — do not author)
- **कृदन्त**: `lemma` · specific कृत् suffix · विभक्ति if it declines
- **तद्धित**: `lemma` (प्रकृति) · suffix · अर्थ · विभक्ति
- **समास**: `lemma` · subtype · `विग्रह: …` note
- **सर्वनाम / सर्वादि / संख्या**: `lemma` (closed list) · विभक्ति
- **अव्यय**: `lemma` · subtype

`cite` any non-obvious derivation (the only thing `verify:cites` checks). For
कृदन्त/तद्धित the cite `role` should end `base + affix → form`; a समास `विग्रह:`
note leads with the analysis — both feed the reader's decomposition strip.
**Relations** (agreement, government, membership) go in `rel[]` — `{kind: विशेषण,
to: N}`, `to` = 0-based index into this reading's `words[]` (WORD-TYPES.md §6).

### 5. Register — what checks cannot catch

`teaches` near the corpus median (~78 chars). Say what is ON the page, never
narrate what the passage is *for*. No closing paragraph restating the opening; no
corpus-internal references; no `+`-chained feature lists. (AUTHORING.md Register.)

### 6. Build, complete, gate

```bash
bun run build:readings            # see it
bun run complete --reading <id>   # what each word still owes
bun run build:quiz                # ONLY if new words/lemmas/forms were added
bun run lint                      # MUST be clean — hard gate
bun run check && npm run build    # the full gate
```

If the lint flags a word, it is a mistag (fix), a missing type marker (add), or a
real schema gap → then switch to the **Audit** process. Fix until clean.

## Mistakes the lint catches (avoid them anyway)

- A लकार bulk-added onto mixed tenses — अगच्छत् is लङ्, not लट्.
- The generic tag beating the specific — `तद्धित` alone leaves the word 0%.
- Authoring a derived dimension (पुरुष, वचन, गण, लिङ्ग, विभक्ति-from-कारक).
- A कारक-only or पुरुष-only word with no head tag — stays untyped, invisible.

## When done (any job)

Report what moved (`bun run ledger` for coverage, or the before/after
completeness), that `bun run lint` is clean, and that `bun run check` and
`npm run build` pass. Revert incidental rebuild-noise files (`static/content/*.json`,
`static/data/balabodhini.json`) unrelated to your change.
