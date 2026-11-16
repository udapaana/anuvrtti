# The Rāmāyaṇa condensed, as a verse selection

`selection.json` is the verse list of *Valmiki Ramayana Condensed in the Poet's
Own Words* (P. P. S. Sastri; G. A. Natesan & Co., Madras, 1935), recovered from
the archive.org OCR (`data/sources/ocr/ramayana-condensed.txt`) as ordered
references into the full text. `bun scripts/condensed.ts ramayana` rebuilds it;
the method is in `scripts/lib/condensed-match.ts`, shared with the Mahābhārata.

The edition matched against is Ambuda's GRETIL text of the Rāmāyaṇa, the Baroda
critical edition (ids `R_k.sss.vvv`), throughout. GRETIL's "southern-2" file,
headed as T. R. Krishnacharya's Southern Ayodhyākāṇḍa (Kumbhakonam, 1905), was
tried and found to be the critical text renumbered — 2,624 of its 3,160 verses
identical to the critical edition's, most of the rest a typo or a one-place
shift — so it adds nothing; a real Kumbhakonam text is still owed.

After review (2026-11-16; `review-bala-ayodhya.json`, `review-aranya-yuddha.json`):
1,598 entries — **1,384 placed** in the critical edition, **214 found only in the
Southern/vulgate text** (`elsewhere`), 1 skipped (the book's title), none
unmatched. The book stops at the Yuddhakāṇḍa. The 214 are the verses the
critical edition omits and the book, following the vulgate, quotes — the
horoscope of Rāma's birth, Viṣṇu's promise, Daśaratha's lament (*yadā yadā hi
kausalyā*), the pādukā verses. They wait for a Kumbhakonam text; their vulgate
references in the reviews are from the reviewer's knowledge, not yet checked
against a vulgate edition. A `review-*.json` records one decision per OCR line
(see `scripts/lib/condensed-match.ts`).

## The 214 vulgate verses, from the book's scan

No digital Southern edition exists (`content/texts/TODO.md`), so their only
witness is the book. `bun scripts/condensed-reocr.ts ramayana` finds each
verse's lines in archive.org's OCR layout (`data/sources/ocr/
ramayana-condensed_djvu.xml`), cuts it from the scan, and reads it with
Tesseract; the crops are committed (`data/sources/ocr/ramayana-condensed-crops/`)
and both machine readings kept (`reocr.json`). Neither is clean.

The text was settled by double keying:
- two independent transcribers read every crop as printed
  (`transcribe-A-*.json`, `transcribe-B-*.json`);
- `bun scripts/condensed-keyed.ts ramayana` accepts a verse only where they
  agree letter for letter — 174 of 214 (81%);
- a third reader decided the other 40 from the image (`adjudicate-1.json`):
  24 confirmed the shared reading over a flagged doubt, 4 sided with A, 6 with
  B, 6 with neither — among them misprints in the book itself, kept as printed
  (वर्पाणि for वर्षाणि; overrides correct them, as with GRETIL's typos);
- the same reader re-transcribed 20 random agreed verses blind: 20 of 20
  identical (`blind-check.json`).
`keyed.json` is the result.

`text.yaml` (`bun scripts/condensed-text.ts ramayana`): 1,585 sections —
1,371 from the critical edition and 214 from the scan, each of these marked
`scan:` and numbered after the critical verse the book quotes before it
(`1.14.6+1`) — 14,208 words.

Licence: the verse ids point into GRETIL texts (CC BY-NC-SA 4.0 per their
headers). The book contributes only the selection and its order.
