# The Mahābhārata condensed, as a verse selection

`selection.json` is the verse list of *The Mahabharata Condensed in the Poet's
Own Words* (A. M. Srinivasachariar; G. A. Natesan & Co., Madras), recovered as
ordered references into the Kumbhakonam edition of the Mahābhārata (the
Southern Recension, Krishnacharya 1906–14) as encoded by SARIT.

The book quotes the epic's own ślokas in sequence, with English summary between
them. That makes its selection — which verses, in which order — a ready-made
whole-text path through the epic. It is the selection that is kept here, not the
book: the verse text comes from SARIT, the English is not used.

## Source and method

Only the archive.org OCR of the book exists digitally (Digital Library of
India, `dli.ernet.242274`). It read the English as junk Devanagari and the
Sanskrit with damage. `bun run mbh` (`scripts/mbh-condensed.ts`) rebuilds the
file:

1. fetches the OCR into the git-ignored `data/texts/`, pinned by sha256 in
   `data/mbh-condensed.json` (not in `data/texts.json`, which `find-attested`
   searches); the SARIT TEI must already be at
   `data/texts/sa_mahAbhArata-kumbhakonam-sarit.txt`;
2. keeps OCR lines that look like verse — mostly Devanagari letters, and most
   consonant trigrams known to the epic;
3. compares on a consonant skeleton (vowel signs, anusvāra, virāma and
   punctuation dropped), by normalised edit distance, or by best local fit when
   the book quotes part of an edition line;
4. enforces order: one maximum-weight increasing chain through the edition, so
   a formulaic line cannot be placed out of sequence; lines left out are then
   searched for exhaustively between their placed neighbours (`placed_by:
   "context"`);
5. merges consecutive OCR lines that land in one `<lg>`.

Each entry: `seq`, `sarit_id` (the `<lg xml:id>`), `parvan`, `confidence`
(mean skeleton similarity), `band`, `lines` (edition lines matched / lines in
the verse — the book often quotes half a śloka), `ocr_line`, and the OCR text.
Bands: **high** ≥ .75; **medium** ≥ .55; **low** = placed by context only;
**unmatched** = OCR verse text with no place found, kept in sequence for a human.

## Known gaps

- Unmatched entries are mostly heavily damaged OCR, the book's own
  invocations, and verses the SARIT file lacks (its Āśramavāsika and
  Āśvamedhika are thin). The critical edition on GRETIL was not tried.
- A low-band entry may be the neighbouring verse of the right one.

## Licence

The verse ids point into the SARIT Kumbhakonam text (CC BY-SA 3.0); any text
drawn from it carries that licence. The book contributes only the selection and
its order.
