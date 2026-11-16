# Whole-text ingestion queue

Tracks, for every "source" (an attested chapter's handful of excerpted verses,
`content/readings/`), where its whole-text counterpart (`content/texts/<id>/`,
see "Whole texts" in `docs/ARCHITECTURE.md`) stands. A source can carry a
partial reading (the graded-reader excerpts), a full text, and — for very
large works — a condensed selection, all pointing at the same underlying
edition. Update this file as status changes; it is the backlog, not a log.

## Done

| source | partial (reader) | full text | notes |
|---|---|---|---|
| कठोपनिषद् | `13_kathopanishad` (1.1–1.3) | `kathopanishad` — whole Upaniṣad, 119 verses | |
| पञ्चतन्त्रम् | `14_pancatantra` (scattered) | `pancatantra-kilotpatin` — one tale (1.21) | full Pañcatantra source is pinned (`sa_viSNuzarman-paJcatantra`); only this tale is ingested as a whole text so far — other tales are a straightforward repeat of the same pipeline |
| वेतालपञ्चविंशतिका | *(no excerpt chapter)* | `vetala-1` — frame + tale 1 (176 sections) | asymmetric by design: a whole text needs no partial twin |
| नीतिशतक | `18_nitishataka` | `nitishataka` — the whole śataka, 109 verses, 1,749 words | cut from GRETIL's combined Śatakatraya by its own headings (`scripts/nitishataka-text.ts`); four verses typed without the half-verse daṇḍa get it supplied. Author pass in `overrides/v1–v4.yaml`: ~355 words split, ~350 picks fixed, ~40 GRETIL typos corrected with notes. Snapshot 3.4 MB (~1.9 KB a word). |

## Queued

| source | partial (reader) | pinned source text | full/condensed target | status |
|---|---|---|---|---|
| महाभारतम् | *(none yet — needs a new `content/readings/` chapter, same as the others, once the whole text exists to excerpt from)* | `sa_mahAbhArata-kumbhakonam-sarit` (SARIT TEI, pinned) | **condensed** — "The Mahabharata Condensed in the Poet's Own Words" (Srinivasachariar), recovered as an ordered verse selection | `selection.json` done (`bun run mbh`). **`text.yaml` now done too**: `scripts/mbh-condensed-text.ts` pulls each included `sarit_id`'s actual verse (all `<l>` lines of its `<lg>`) from the SARIT TEI, cleans the edition's plain-text typesetting (daṇḍa, line-wrap hyphens, a few bracketed/parenthesised variants, stray quote marks and inline verse-number labels — see the script's header for the full list, checked against every verse this selection uses) and transliterates to IAST with shlesha. 2,201 of 2,218 selection entries included (the `matched` ones minus 14 Āśramavāsika verses only in the GRETIL critical edition, which SARIT lacks and this script doesn't read); excluded: 3 `unmatched` + those 14 `critical`. Result: 2,201 sections, ~21,200 words. **Blocked on the snapshot step**, not on this one — see "A real constraint to budget around" below: by the three existing snapshots' own bytes/word ratio (2.7–4.5 KB/word), annotating this at today's format would run **roughly 55–100 MB**, the same "revisit the format first" territory the Nala-scale estimate already flagged. Recommendation: **do not run `snapshot-text.ts` on this text yet** — trim vidyut's per-word alternatives list to the top few first (`MAX_ALTS` in `scripts/snapshot-text.ts` is currently 12; the real cost is the ~10+ line-each alternatives, not the 12 cap itself — the format needs a smaller per-alternative encoding or a hard trim), then re-estimate. The native vidyut-cheda engine is also not built in this environment yet (`./scripts/build-vidyut-native.sh` needs `git clone https://github.com/ambuda-org/vidyut.git`, which this environment's proxy returned 403 for — `raw.githubusercontent.com`, used for the TEI fetch, is fine), so even a 50-verse proof-of-concept snapshot needs that resolved first. A full (non-condensed) Mahābhārata is out of scope — ~100,000 verses. |
| रामायण | `16_ramayana` (mostly Bāla-kāṇḍa, scattered sargas — **but not only**, see note) | `sa_rAmAyaNa` (GRETIL, pinned — whole epic) | **full**, scoped to **Bāla-kāṇḍa** (the kāṇḍa most excerpts draw from, ~2,000 verses across ~77 sargas) — not the whole epic (~24,000 verses, out of scope) | **fetched; blocked on the snapshot format** (see below). Earlier note: GRETIL (`gretil.sub.uni-goettingen.de`) was unreachable from that sandbox: the egress proxy returns 403 on CONNECT for the *whole host*, confirmed both directly (`curl`) and via `bun run texts`, which fails identically on **all 13** GRETIL-pinned entries in `data/texts.json` (only the one GitHub-hosted file, the SARIT Mahābhārata TEI, fetches). This is a proxy-level policy block, not a GRETIL outage — the same character as the Cologne/CDSL block `docs/ARCHITECTURE.md` already documents, but a different host (Göttingen), not previously flagged. Checked instead: `content/readings/16_ramayana/`'s own `ref:` fields. Correction to the scope assumption above — of 21 `ref:` lines, 15 are kāṇḍa 1 (e.g. "1.1.1", "1.41.12"), but **6 are not**: "2.101.14" (Ayodhyā), "3.62.3" (Araṇya), "4.18.28" and "4.36.26" (Kiṣkindhā), "5.25.31" (Sundara), "7.90.1–2" (Uttara). Scoping the full text to Bāla-kāṇḍa only still covers most excerpts and is the only epic-scale-safe option, but those 6 will have no full-text counterpart — worth the human's awareness; not, on its own, a reason to reopen the already-made decision. Once GRETIL is reachable: `bun run texts`, inspect the file's actual sarga/kāṇḍa markers, extend `scripts/lib/texts.ts` (or a sibling script, not a duplicate) with a Bāla-kāṇḍa-only slice, and report real verse/word counts *before* writing `text.yaml`. **Snapshot-size risk** (see below) still applies once unblocked. |
| भागवतम् / पुराणम् | `19_purana` (scattered — **two different works**: Bhāgavata 1.2.x and Viṣṇu Purāṇa 1.11–12.x, the Dhruva story) | **none pinned yet** | **full Bhāgavata Purāṇa**, per the user's direction to prioritize भागवतम् over विष्णुपुराण for the full-text treatment | **blocked on discovery, not started.** The same sandbox network block that stops रामायण's fetch (above) also covers GRETIL's own catalog page and every other general-web host tried this session (`archive.org`, `sanskritdocuments.org`, `en.wikipedia.org` — all 403 at the proxy, same as GRETIL). Only GitHub is reachable: `raw.githubusercontent.com` serves known exact paths without restriction (confirmed against an unrelated public repo), but `api.github.com`/`github.com` browsing or search needs a repo already attached via `add_repo`, which rules out an open-ended catalog search. A handful of plausible GitHub-hosted Sanskrit-corpus repos were probed by guessing paths (`sanskrit-coders/data`, `ambuda-org/ambuda`, `shreevatsa/sanskrit`, `sanskrit-lexicon/MW`) and none held a usable Bhāgavata plaintext; **nothing was pinned** — per instruction, no sha256/URL is fabricated. Needs a session with real GRETIL access (or a verified alternative) to find and pin a `sa_bhAgavatapurANa`-equivalent in `data/texts.json`, before anything else. Recommendation for the human to confirm once a source is pinned (not acted on here): the ~18,000-verse full Bhāgavata is almost certainly still too large even after bounding to its longest single skandha — Skandha 10 (Kṛṣṇa's life) is traditionally cited at roughly 3,900–4,000 verses on its own, about **double** Bāla-kāṇḍa's ~2,000, which the snapshot-size section below already flags as past the line. Bounding to one skandha (parallel to Rāmāyaṇa's one kāṇḍa) is the right shape of fix, but the **alternatives-trimming revisit to the snapshot format is likely a prerequisite regardless of which skandha is picked** — that, and the skandha/story choice itself, are for the human to decide. The existing Viṣṇu Purāṇa excerpts (Dhruva story) stay partial-only unless/until its own full text is separately queued. |
| हितोपदेश | `17_hitopadesha` (scattered) | `sa_nArAyaNa-hitopadeza` (GRETIL, pinned — whole work) | **full** — 4 books + frame story, hundreds of verses + prose | not started. Large; no natural sub-unit to bound it to (unlike Rāmāyaṇa's kāṇḍa or Nītiśataka's śataka) — ingest in book-sized chunks, or accept the full size. |
| ऋग्वेद | `15_rigveda` (1.1–1.3 only, of Maṇḍala 1's 191 hymns) | **none pinned** — no automated source at all; existing excerpts are typed by hand from an accented padapāṭha edition (the chapter is marked FROZEN for this reason) | finish **1.1–1.3** by hand, matching how the existing hymns were sourced — no GRETIL plaintext carries Vedic accents reliably, so this likely stays a manual add, not a pipeline | not started |

## A real constraint to budget around: snapshot size

**Measured 2026-11-16**, with GRETIL reachable: Bāla-kāṇḍa is 1,941 verses in 76
sargas, ~21,700 words; the Hitopadeśa ~24,400 words in four books (marked
`ii. suhṛd-bhedaḥ` …); the condensed Mahābhārata ~21,200. At the Nītiśataka's
1.9 KB a word, each would be a ~40 MB snapshot. Alternatives are ~70% of a
snapshot's bytes; deduplicating them saves only about a third (9,983 unique of
16,167 in the Nītiśataka). So the format decision — fewer alternatives, a terser
encoding of each, or both — gates Rāmāyaṇa, Hitopadeśa and Mahābhārata alike.
The condensed Mahābhārata is held as `text.draft.yaml` until then: the build
publishes every `text.yaml` and fails without its snapshot.

`data/text-analyses/<id>.json` stores every candidate analysis for every word,
not just the one picked — `docs/ARCHITECTURE.md` already flags this as
"~5 KB a word," and that a text the size of the Nala episode (~1,000 ślokas)
would be ~40 MB and "would want the alternatives trimmed to the top few —
revisit then." Bāla-kāṇḍa (~2,000 verses), the Mahābhārata selection (several
thousand entries), and a full Bhāgavata (~18,000 verses) are all past that
line. Ingesting any of them at the current per-word-alternatives-dump format
would produce a multi-hundred-MB committed snapshot — not something to do
before the trimming `analyze-text.ts` was already expected to eventually need.
**Revisit the snapshot format (trim to the top few alternatives) before
running the annotate/snapshot step on any of these at full scale** — the
`text.yaml` authoring and source-pinning steps don't depend on this and can
proceed first.
