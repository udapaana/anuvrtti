# The Bhāgavata condensed, as a verse selection

`selection.json` is the verse list of *Bhagavata (Condensed)* (A. M.
Srinivasachariar and V. Raghavan; G. A. Natesan & Co., Madras, 1937), recovered
from the archive.org OCR (`data/sources/ocr/bhagavata-condensed.txt`) as ordered
references into Ambuda's GRETIL text of the Bhāgavata Purāṇa (data entry Ulrich
Stiehl; ids `BhP_ss.aa.vvv`). `bun scripts/condensed.ts bhagavata` rebuilds it;
the method is in `scripts/lib/condensed-match.ts`, shared with the Mahābhārata.

First run (2026-11-16): 1,332 entries, 1,189 placed (high 902, medium 221,
low 66), 143 unmatched — 63 of them under 40 characters of damaged OCR, the
rest awaiting review. Skandha 10, Kṛṣṇa's life, is a third of the book (424
verses). A `review-*.json` beside this file records a human decision per OCR
line.

Licence: the verse ids point into a GRETIL text (CC BY-NC-SA 4.0 per its
header). The book contributes only the selection and its order.
