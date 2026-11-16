# Whole texts: owed work

Things decided but not yet done. The backlog of texts is `INGESTION-QUEUE.md`;
what was checked and fixed is `AUDIT-LOG.md`. This file is for debts.

## Rāmāyaṇa: the Kumbhakonam (Southern) text

**Owed:** T. R. Krishnacharya's Southern recension (Kumbhakonam, 1905), as the
differences from the critical edition we use (Ambuda's GRETIL text).

**Why:** the condensed Rāmāyaṇa (Sastri, 1935) follows the Southern/vulgate
text. 214 of the verses it quotes are absent from the critical edition —
Rāma's horoscope, Viṣṇu's promise, Daśaratha's lament (*yadā yadā hi
kausalyā*), the pādukā verses. Until a Southern edition is in, their text comes
from the book's own scan, re-OCRed (`content/texts/ramayana-condensed/`), and
is marked as such.

**Known:** no digital Kumbhakonam text exists in GRETIL, Ambuda or SARIT.
GRETIL's `sa_vAlmIki-rAmAyaNa-southern-2` claims to be Krishnacharya's
Ayodhyākāṇḍa but is the critical text renumbered (2,624 of 3,160 verses
identical; see `AUDIT-LOG.md`).

**Plan when taken up:** find the Kumbhakonam volumes' scans (archive.org),
OCR them, align each verse to the critical edition by order (the same
matcher as the condensed books, `scripts/lib/condensed-match.ts`), and keep
only the verses and readings that differ — the diff — as a vendored overlay.
Then replace the book-OCR text of the 214 verses with the edition's.

## The reader should say when a verse comes from a scan

`text.yaml` marks the 214 scan-read verses of the condensed Rāmāyaṇa with
`scan:` (agreed / adjudicated), but `build-texts.ts` does not pass it through,
so the text page shows them like any edition verse. It should say "read from
the 1935 book's scan" beside them, and link the crop.

## Mahābhārata (condensed): 17 verses owed

14 verses the book quotes from the Āśramavāsikaparvan are not in SARIT's
Kumbhakonam TEI (its Āśramavāsika is thin), and 3 OCR lines were never
placed. Their text can come from the book's scan exactly as the Rāmāyaṇa's
vulgate verses did: archive.org item `dli.ernet.242274` has the same layout
file (`_djvu.xml`) and page images (`_jp2.zip`). Generalise
`scripts/condensed-reocr.ts` to it, double-key, and add them.

## Bhāgavata (condensed): 16 lines owed

After review: 1,319 verses placed, 5 the book quotes that Ambuda's text lacks
(among them 5.3.20, absent from the file: it runs 5.3.18 → 5.4.1), and 11
OCR lines not yet placed. Read them from the book's scan as the Rāmāyaṇa's
were (`condensed-reocr.ts`, generalised; the archive.org item is the same as
the Rāmāyaṇa's).

## Section ids numbered "+n" depend on the source and the builder

A text whose prose or unnumbered verses take ids after the last numbered one
(`1.21+3` in the Pañcatantra, `1.14.6+1` for the Rāmāyaṇa's scan verses) keeps
them only while its source and builder stay fixed: a reader fix that found
five more Pañcatantra verses shifted every +n after them. Overrides are keyed
by these ids, so before changing a source or a builder of an authored text,
rebuild into a scratch copy, diff the ids, and re-key the overrides.

## Retire the one-tale Pañcatantra

`content/texts/pancatantra-kilotpatin` is now a part of the full
`pancatantra` (its overrides carried over as `overrides/kilotpatin.yaml`).
About forty files cite it as the format example; repoint those, then remove
the text, its snapshot and its page.
