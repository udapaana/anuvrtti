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

`text.yaml` (`bun scripts/condensed-text.ts ramayana`) carries the placed verses,
1,369 sections after a verse quoted twice in a row is joined, 12,877 words.

Licence: the verse ids point into GRETIL texts (CC BY-NC-SA 4.0 per their
headers). The book contributes only the selection and its order.
