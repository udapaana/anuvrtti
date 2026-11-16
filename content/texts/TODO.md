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
