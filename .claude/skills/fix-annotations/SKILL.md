---
name: fix-annotations
description: The Fix process behind /author — clear the graded-reader annotation backlog by fixing wrong tags (the lint) and filling missing tags (completeness) so words become fully typed and correct against the schema. Reached via /author fix, or directly when bun run lint reports errors, to reduce untyped words, or to raise a word-type's completeness percentage.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - Grep
---

# /fix-annotations — make the corpus's annotations correct and complete

Two different jobs, done in this order: **correctness first** (the lint, a hard
gate at zero), then **completeness** (the backlog). The schema in
`src/lib/usage/schema.ts` and `docs/WORD-TYPES.md` is the law; the checks enforce
it. Do not touch the frozen Vedic block (see `docs/AUTHORING.md`).

## Phase 1 — correctness (the lint must stay at zero)

```bash
bun run build:readings && bun run lint
```

Every finding is ALWAYS an error. The four kinds and how to fix each:

- **conflict** — two values of one dimension (लट् *and* विधिलिङ्). One is wrong;
  read the word and delete the false tag.
- **misplaced** — a value that is no dimension of this word's type (a भाव on a
  plain सुबन्त). Either the word needs a different type marker, or the tag is wrong.
- **wrong-lemma** — a word filed under a closed type whose lemma is not one of its
  stems (सर्व tagged सर्वनाम when सर्व is a सर्वादि). Retag to the right type.
- **bad-relation** — a `rel[]` edge that does not hold (bad `to`, disagreeing
  agreement axis, wrong source type). Fix the edge or the tags it checks.

**When the lint flags a word, decide which of three it is:**
1. a genuine mistag → fix the tag;
2. a word needing its type marker (अहम् tagged उत्तमपुरुष but not सर्वनाम) → add it;
3. a real schema gap (the tag is correct and the type SHOULD carry it) → stop and
   run `/audit-schema`; do not force a wrong tag to silence the lint.

Fix until `bun run lint` is clean. **Re-run the lint after every batch** — bulk
edits introduce new conflicts (a लट् added to a past-tense form), and the lint
catches them immediately. That is the safety net that makes bulk fixing safe.

## Phase 2 — completeness (chip at the backlog)

```bash
bun run complete              # per-type % and the most-needed tags
bun run complete --worst 20   # the readings owing the most — the queue
bun run complete --untyped    # words with NO type tag — highest leverage
bun run complete --reading <id>   # one reading, word by word
```

Priorities, highest leverage first:

1. **Untyped words** — no type means no dimensions; invisible to every view. Most
   are verbs missing लकार (add it) or nouns missing विभक्ति (add it, or the कारक
   the sentence assigns). Some resolve by a type marker the schema now recognizes.
2. **The generic-beats-specific gap** — a word tagged only `तद्धित`/`कृदन्त`/`समास`
   owes the specific suffix + sense. Read its `cite` role; it usually names the
   affix (इञ्, त्व, घञ्) and अर्थ.
3. **Feature tags the schema now derives** — पुरुष/वचन/पद/गण for verbs, वचन/लिङ्ग
   for nouns, विभक्ति from कारक — are filled by the build, NOT authored. If a verb
   shows "needs गण", its root may be missing from the dhātu table in
   `scripts/build-quiz.ts` (the `DHATU` map) — add it there, checked against a
   form the corpus uses, never guessed.

**Never author a derived dimension by hand.** It goes stale silently. If
completeness wants a derived tag, the fix is in the derivation (build-quiz's DHATU
map, the ROLE_VIB fallback), not the YAML.

## Bulk fixes — safe, because the lint guards them

For a systematic fix (e.g. every pronoun missing its सर्वनाम tag), a small script
over `content/readings/*/*.yaml` (one file per reading) is fine. After ANY bulk edit:

```bash
bun run build:readings && bun run lint
```

If the lint fires, the script over-reached — fix the exceptions by hand. A bulk
edit is only done when the lint is clean.

## When done

Report the before/after: untyped count, the type-completeness percentages that
moved, and that the lint is clean and `bun run check` passes. Rebuild
`build:quiz` if words/forms changed. Revert incidental rebuild-noise files.
