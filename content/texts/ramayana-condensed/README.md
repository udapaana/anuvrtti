# The Rāmāyaṇa condensed, as a verse selection

`selection.json` is the verse list of *Valmiki Ramayana Condensed in the Poet's
Own Words* (P. P. S. Sastri; G. A. Natesan & Co., Madras, 1935), recovered from
the archive.org OCR (`data/sources/ocr/ramayana-condensed.txt`) as ordered
references into the full text. `bun scripts/condensed.ts ramayana` rebuilds it;
the method is in `scripts/lib/condensed-match.ts`, shared with the Mahābhārata.

The edition matched against is one sequence: the Bālakāṇḍa and the kāṇḍas after
the Ayodhyā in Ambuda's GRETIL text (the Baroda critical edition, ids
`R_k.sss.vvv`), and the Ayodhyākāṇḍa in T. R. Krishnacharya's Southern recension
(Kumbhakonam, 1905, ids `RamS_2,s.v`) — the only kāṇḍa of the Southern text in
digital form. Measured: Krishnacharya's Ayodhyā places 387 of the book's
verses, the critical text's 386, so the choice hardly moves the selection.

First run (2026-11-16): 1,600 entries, 1,354 placed (high 1,131, medium 179,
low 44), 246 unmatched. The book stops at the Yuddhakāṇḍa. The unmatched are
mostly damaged short OCR lines (97 under 40 characters) and Southern verses the
critical edition omits — the horoscope of Rāma's birth, ततश्च द्वादशे मासे… — which
have no digital Southern text outside the Ayodhyā to be placed in. A
`review-*.json` beside this file records a human decision per OCR line (see
`scripts/lib/condensed-match.ts`), including `critical` for a verse found only
in another edition.

Licence: the verse ids point into GRETIL texts (CC BY-NC-SA 4.0 per their
headers). The book contributes only the selection and its order.
