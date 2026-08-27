# How this repository is arranged

A map, written because two things are true at once: the corpus is authored
continuously, by people and by AI sessions working in parallel, and almost
everything the app serves is *derived* from that corpus by a build. When source
and build output live in the same folder, every act of authoring rewrites
megabytes of generated JSON, and the two kinds of change become impossible to
tell apart.

This document says which files are which, what the rule is for each kind, and
what still has to move to make the rule true.

---

## The three kinds of file

Every data file in the repository is exactly one of these. If you cannot say
which, that is the bug.

### 1. Authored — `content/`

What a human or an AI session writes by hand. Prose, annotations, teaching
glosses, editorial judgement. **This is the only material that cannot be
regenerated**, and therefore the only material whose loss would matter.

Reviewed line by line. Diffed as prose. Edited from the site through a pull
request (see *Editing from the site*).

### 2. Vendored — `data/`

Third-party corpora we did not write and do not maintain: the Kāśikā, Vasu's
translation, the Dhātupāṭha. Fetched once, committed, and updated deliberately
when we choose to — never at build time, so a build never depends on someone
else's server being up.

Never hand-edited. A correction to a vendored file belongs upstream, or in an
overlay under `content/` that the build applies on top.

### 3. Generated — `static/data/`, `static/content/`

Everything the build computes. **Reproducible from the other two by running
`npm run build:data`**, and therefore not worth reviewing, not worth diffing and
not committed. All of it is gitignored.

The invariant, and the way to check it:

```bash
git clean -Xfd static/data static/content && npm run build:data
```

If anything is missing afterwards, either a generator is not in the chain or the
file is not really generated. Both happened during the migration — see
*What the cold build caught*.

---

## What the cold build caught

The rule is enforced now, but it took a cold build to find where the inventory
was wrong. Both errors were mine, and both were the same mistake — reading a
path constant in a script and assuming it was a write:

- **`vocabulary.json` is authored, not generated.** build-quiz *reads* it for
  gender hints and never writes it; the 42-entry lexicon is hand-maintained
  source. Ignoring it would have silently deleted it.
- **The three dukrnkarane payloads are vendored, not generated.**
  `build-dukrnkarane.ts` reads a checkout of a *separate repository*
  (`$DUKR_SRC`) and, when it is absent, skips with a notice and keeps the
  committed payload. On a clean CI machine that repository does not exist, so
  ignoring `dukrnkarane.json` would have shipped a grammar door with 988 rules
  replaced by nothing — which is exactly what the first cold build printed:
  `stats.json` said `0 rules`.

Also removed: `layered_commentary.json`, 6.5 MB, referenced nowhere in `src/`
and read only by the one-shot script that already split it into the per-sūtra
TOMLs which are now the source.

### Generated — gitignored (4,002 files, 28.7 MB removed from git)

| file | written by |
|---|---|
| `readings.json`, `usage.json`, `quiz-cells.json`, `tin-forms.json` | `build-readings.ts`, `build-quiz.ts` |
| `sutras.json` | `build-sutras.ts` |
| `sutra-refs/` (3,984 files), `readings-by-sutra.json` | `build-sutra-refs.ts` |
| `balabodhini.json` | `build-balabodhini.ts` |
| `jargon.json` | `build-jargon.ts` |
| `dhatu-map.json` | `build-dhatu-map.ts` |
| `stats.json` | `build-stats.ts` |
| `paths-index.json`, `sutra-paths.json` | `build-path-index.ts` |
| `commentary-index.json`, `layered_commentary.json` | `generate-commentary-index.ts` |

### Authored, but living in the generated tree

`static/data/jargon.yaml` · `static/data/systems.toml` ·
`static/data/vocabulary.toml` · `static/data/commentary/*.toml` (3,983) ·
`static/data/passages/` · `static/data/balabodhini/` ·
`static/content/paths/` · `static/content/sensitive-notes/`

These are hand-written and irreplaceable, and they sit in a directory whose name
says "static asset". `content/readings/` is the only authored tree already in
the right place.

### Vendored — still committed

`kashika.json` · `kashika_english.json` · `vartika.json` ·
`vasu_english.json` · `vasu_english_summary.json` · `vasu_rewritten.json` ·
`dukrnkarane.json` · `dukrnkarane-by-sutra.json` · `sutrartha_english.json`

`data/dhatupatha.tsv` is the only one in the right directory. Moving the rest to
`data/` is tidying, not correctness, and is deferred: five of these trees are
also **fetched by the browser at runtime** (`/data/commentary`, `/data/passages`,
`/data/balabodhini`, `/content/paths`, `/content/sensitive-notes`), so moving
them out of `static/` requires a staging step that copies them back in. Worth
doing, but it buys clarity rather than the diff and conflict relief that
gitignoring the generated files already bought.

---

## Why this costs something

Measured on real commits from an authoring session, one new reading is:

```
content/readings/…/rd088.yaml     133 +++++      what was actually written
static/data/readings.json         575 +++++--    generated
static/data/usage.json              2 +-         generated — 1.36 MB, minified,
static/data/quiz-cells.json         2 +-         so this is the WHOLE file
```

Three consequences:

1. **The review is unreadable.** Nobody reads 575 lines of JSON, so the diff
   that is supposed to be inspected is skipped, and the artefacts are committed
   unexamined — which defeats the reason they were committed.
2. **Parallel authoring conflicts every time.** `usage.json` and
   `quiz-cells.json` are minified to one line. Two sessions adding two different
   readings produce two whole-file rewrites of the same line: a guaranteed
   conflict on a file neither session actually edited.
3. **Staleness needs guarding.** Three `--check` gates exist in `bun run check`
   (`build-stats`, `build-sutras`, `build-sutra-refs`) solely because generated
   files are committed and can drift from their source. All three become
   unnecessary the moment they are not. The other two hard checks —
   `check-sutra-count.ts` and `check-systems.ts` — validate a constant and a
   join against the schema, and stay.

CI already runs the full build on every push to `main`
(`.github/workflows/deploy.yml`, with Bun and Rust), so nothing about the deploy
depends on those files being in git.

---

## What replaces the diff as a review step

`docs/AUTHORING.md` currently says, deliberately:

> rebuild them deliberately, inspect the diff, commit it with the reading that
> caused it

The intent is right and worth keeping: **derived data is where a mis-annotation
becomes visible.** A wrong विभक्ति is invisible in the YAML and obvious in the
grid.

But the value is in the *semantic* diff, not the JSON one. What a reviewer wants
is:

```
rd089  +12 cells in the बाल paradigm · 2 new roots (त्यज्, पूज्)
       3 words untyped · 1 new सूत्र cited (2.3.36)
```

So the JSON leaves git and a generated **change report** takes over the job:
small, legible, committed with the reading that caused it. Same intent, actually
read, and nothing to conflict on.

---

## Editing from the site

The pull-request flow already exists and is built the right way:

```ts
scope: 'read:user'                                 // identity only
Authorization: `Bearer ${env.GITHUB_APP_TOKEN}`    // a service account commits
branch = `edit/${date}-${username}-${shortHash}`
title  = `${verb}: ${titleFiles} — ${username}`
```

A reader signs in to prove who they are; a bot opens the PR and attributes them.
**The user never grants write access to the repository.** Because identity is
decoupled from repository permission, **Google works as a second provider** —
`/auth` is the chooser both edit controls now link to, and `src/lib/server/session.ts`
is the one shape both fill.

Neither provider is asked for an email. GitHub gets `read:user`, Google gets
`profile` — not `email`, and not `openid`, whose id_token carries the address
anyway. A suggestion becomes a public pull request, and an address never
collected cannot be published by accident.

Two things differ per provider and both are quiet enough to get wrong:

- **Attribution.** `@login` is a GitHub mention that resolves to a person.
  A Google display name written the same way mentions a stranger who happens to
  hold that handle, or nobody. `credit()` writes the mention for GitHub and
  plain text plus *(via Google)* otherwise.
- **Branch names.** A GitHub login is already a legal ref fragment. A display
  name is arbitrary text, and git rejects a ref containing a space or
  `~ ^ : ? * [ \` — so "Śrīnivāsa Rāmānujan" would have failed at branch
  creation with an opaque GitHub API error. `branchSlug()` reduces to ASCII, and
  falls back to `reader` for a name that legitimately reduces to nothing.

`scripts/check-session.ts` covers both, plus the promise about email, as a hard
check. Google needs `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` and
`<origin>/auth/google/callback` registered; without them `/auth/google`
redirects back saying so rather than bouncing the reader to a Google error.

Both things that blocked it are fixed.

**The allowlist names sources.** It was `['static/data/', 'static/content/']`,
wrong in both directions at once: it admitted everything the build computes, so
a reader could open a pull request against `readings.json` and have it erased by
the next build; and it covered no annotation, since those live in
`content/readings/`. It is now an explicit list of authored paths, in
`src/routes/api/suggest/paths.ts`, with `scripts/check-suggest-paths.ts` proving
25 cases — including that traversal (`content/../static/data/readings.json`) is
rejected, which a prefix test alone admits. It is a hard check.

**The reader has the control.** `build-readings.ts` stamps every reading with
its source path, because the payload knows its chapter as a slug (`karaka`) and
cannot reconstruct the directory (`01_karaka`); the build refuses to guess and
fails if a reading's id does not match its filename. The rail's ✎ sits beside
the ★ and opens a suggestion against that YAML.

Signed out, it does not go dead — it says *sign in to suggest a correction* and
sends the reader to OAuth with `returnTo` set to the reading they were on. A
reader who has just spotted a wrong tag is exactly the person worth asking, and
the ask is small: `read:user`, no repository access, the pull request opened by
a service account on their behalf.

---

## The migration, in order

Each step is independently landable and independently revertable.

1. ~~**This document.**~~ Done.
2. ~~**Gitignore the generated tree.**~~ Done. `npm run build:data` is the one
   chain, `build:quiz`, `build:commentary-index` and `build:dhatu-map` are in it
   (they were run by hand before, which is why their output had to be
   committed), and the three `--check` staleness gates are deleted — they
   guarded a problem that no longer exists. Moving the authored and vendored
   trees into `content/` and `data/` is deferred; see *Vendored*.
3. ~~**`ALLOWED_PREFIXES` → `content/`.**~~ Done — an explicit authored-paths
   list, gated by `scripts/check-suggest-paths.ts`.
4. ~~**An edit affordance in the reader rail.**~~ Done — the ✎ beside the ★,
   sign-in aware.
5. ~~**Google auth.**~~ Done, pending credentials — see *Editing from the site*.
6. **The change report**, replacing the JSON diff as the review step.

### Coordination

The other active session is authoring only — no UI, no scripts. So the sole
overlap with step 2 is the generated files, and removing them from git *ends*
that collision rather than creating one. The single sequencing constraint: that
session's in-flight commits still carry `readings.json`, so its work should land
before `static/data/` is ignored.

---

## Known-stale documents

`docs/DATA-INVENTORY.md` describes `sutras.json` in the old ashtadhyayi.com
record shape (`i`, `a`, `p`, `s`, `e`, `ss`, `an`, `pc`). That file is now
generated by `build-sutras.ts` in the parsed `Sutra` shape — `id`, `numericId`,
`text`, `textRoman`, `anuvrtti`, `padaCcheda`. The inventory needs rewriting
against what the build actually emits, and is a good candidate for being
generated rather than written.
