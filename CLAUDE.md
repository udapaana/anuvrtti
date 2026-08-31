# anuvrtti

SvelteKit app for learning Pāṇini's Aṣṭādhyāyī. Deploys to
anuvrtti.udapaana.in on every push to `main` — there is no staging gate, so
verify `npm run build` locally before pushing.

## Runtime

**Bun**, not npm, for scripts — it runs TypeScript natively. `npm ci` still
installs deps; the build scripts are `bun scripts/*.ts`.

## Where things live

Read **`docs/ARCHITECTURE.md`** before moving a data file or adding a build
step. Every data file is authored (`content/`), vendored (`data/`) or generated
(`static/data/`), and the tree does not yet enforce that — the doc says what is
which, and what is being moved. It also carries the migration order, so two
sessions working at once do not collide.

## Working on the graded reader

Read **`docs/AUTHORING.md` first.** It carries the constraints, the coverage
method, and the register rules that four separate passes had to fix.

The one command:

```bash
bun run check
```

Edit `content/readings/<chapter>/<id>.yaml`, never `static/data/readings.json`
— that is generated. Each reading is its own file (`NN_name/` is the chapter,
`<id>.yaml` a bare one-item sequence beginning `- id: <id>`), so you open one
by its id with an IDE "Go to File" keystroke. `bun run build:readings` after
every edit.

`bun run check` also holds a **coverage ratchet**: `content/coverage-floors.json`
records how full each dimension currently is, and a drop fails the build — that
is what stops a broken derivation or a thinly-annotated batch from going
unnoticed. Raise the floors deliberately with `bun scripts/check-coverage.ts
--update` and commit them with the work that earned them. See *The ratchet* in
`docs/AUTHORING.md`.

`static/data/stats.json` is generated too, and committed: the four counts on
the home page's doors. The threshold must not download three corpora to print
three integers, so `bun run build:stats` reduces them at build time (it runs
inside `npm run build`). `bun run check` fails when it goes stale.

## The grammar, as prose

Two hand-edited books. Edit the source, never the generated file or the module:

- `static/data/jargon.yaml` — 1429 terms, the glossary notes. Keyed by the
  Devanagari headword (an IDE "Go to Symbol" target, `Ctrl-Shift-O → वृद्धि`);
  a headword that repeats holds a list of entries under its one key. `bun run
  build:jargon` flattens it to `static/data/jargon.json`, which `src/lib/jargon.ts`
  imports directly — no client-side parser ships. Never hand-edit the JSON.
- `static/data/systems.toml` — the systems (तिङन्त, सुबन्त, कारक, समास,
  तद्धित, कृत्): each one's axes, its values, and a one-line gloss apiece. Read
  by a thin `.ts` that only types it; edit the TOML, never the module.

Every tag in `systems.toml` is joined to `src/lib/usage/schema.ts` by exact
string match — that is how a word in the reader lights its own cell. A typo
unlights it silently rather than raising, so `bun run check` verifies them
(`bun run systems` on its own).

## Other surfaces

- `/reader` — the graded reader (`src/routes/reader/+page.svelte`)
- `/balabodhini` — the primer, from `static/data/balabodhini/`
- `/ref/[id]` — per-sūtra commentary, three tiers, all 3983
- `src/lib/prakriya.ts` — vidyut-prakriya WASM wrapper. `sanadi`, `prefixes`
  and `skip_at_agama` are **required** despite reading as optional; omitting any
  of them traps the module with a bare "unreachable" and no message.

## The grammar engine is pinned

vidyut-prakriya decides what the corpus *means* — every लिङ्ग, विभक्ति, वचन,
पुरुष, पद and गण the reader shows — so it is pinned to a commit, in
`VIDYUT_REV` in `.github/workflows/deploy.yml`. It was not, and CI cloned HEAD
on the day of each deploy while local builds used a binary committed months
earlier: two different grammars, no diff, nothing to say so.

`./scripts/build-wasm.sh` rebuilds `static/wasm/` at that same pin, so local
matches CI. To move it: bump `VIDYUT_REV`, rerun the script, run `bun run
check`, and commit the three together. **If the baselines move, that is the
review** — an engine change that alters the corpus should be visible as one.
