#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "63101": `@deva[तत्पुरुषे कुः कत्] — @deva[कु] "bad" becomes @deva[कत्] in @deva[तत्पुरुष] before a vowel-initial second member.

**Examples:**
@deva[कदजः] "bad goat"
@deva[कदश्वः] "bad horse"
@deva[कदन्नम्] "bad food"

Vt: Also @deva[कत्रयः] "the bad three."`,

  "63102": `@deva[रथवदोश्च] — @deva[कु] becomes @deva[कत्] before @deva[रथ] "chariot" and @deva[वद] "speech."

**Examples:**
@deva[कद्रथः] "bad chariot"
@deva[कद्वदः] "bad speech"`,

  "63103": `@deva[तृणे जातौ] — @deva[कु] becomes @deva[कत्] before @deva[तृण] when meaning a grass species.

**Example:**
@deva[कत्तृणा] "a (particular) grass species"

**But:**
@deva[कुतृणानि] "bad grasses" — quality meaning, no change`,

  "63104": `@deva[का पथ्यक्षयोः] — @deva[कु] becomes @deva[का] before @deva[पथिन्] "path" and @deva[अक्ष] "axle/eye."

**Examples:**
@deva[कापथः] "bad path"
@deva[काक्षः] "bad axle" or "bad eye"`,

  "63105": `@deva[अल्पे] — @deva[कु] becomes @deva[का] when meaning "small."

**Examples:**
@deva[कामधुरम्] "small yoke"
@deva[कालवणम्] "little salt"
@deva[कोष्णम्] "lukewarm" (a little warm)

This applies when @deva[कु] indicates smallness rather than badness.`,

  "63106": `@deva[विभाषा पुरुषे] — @deva[कु] optionally becomes @deva[का] before @deva[पुरुष] "man."

**Both forms:**
@deva[कापुरुषः] or @deva[कुपुरुषः] "bad man, coward"`,

  "63107": `@deva[उष्णे कवोप्पौ] — @deva[कु] optionally becomes @deva[का] or @deva[कव] before @deva[उष्ण] "hot."

**All forms valid:**
@deva[कवोष्णम्] "lukewarm"
@deva[कोष्णम्] "lukewarm"
@deva[कदुष्णम्] "lukewarm"`,

  "63108": `@deva[छन्दसि पथः] — In Vedic, @deva[कु] becomes @deva[का] or @deva[कव] before @deva[पथ].

**Vedic forms:**
@deva[कवपथः] "bad path"
@deva[कापथः] "bad path"
@deva[कुपथः] "bad path"

All three are found in Vedic texts.`,

  "63109": `@deva[पृषोदरादीनि यथोपदिष्टम्] — Irregular formations in the @deva[पृषोदर]-class are accepted as traditionally taught.

**Examples:**
@deva[पृषोदरम्] "spotted belly" (@deva[पृषद्] + @deva[उदर] → irregular)
@deva[श्मशानम्] "cremation ground"
@deva[उलूखलम्] "mortar"

These forms do not follow regular sandhi/compound rules but are preserved by usage.`,

  "63110": `@deva[विभाषोत्तरपदे नित्यसमासे] — @deva[अहन्] optionally replaces @deva[अह्न] in locative singular after a numeral, @deva[वि], or @deva[साय].

**Both forms:**
@deva[द्व्यह्नि] or @deva[द्व्यहनि] "in two days"
@deva[त्र्यह्नि] or @deva[त्र्यहनि] "in three days"`,

  "63111": `@deva[ढ्रलोपे पूर्वस्य दीर्घोऽणः] — When @deva[ढ्] or @deva[र्] is elided, the preceding @deva[अ], @deva[इ], or @deva[उ] is lengthened.

**Examples:**
@deva[लीढम्] "licked" (@deva[लिह्] + @deva[क्त] → @deva[ढ्] lost)
@deva[नीरक्तम्] "bloodless" (@deva[निर्] + @deva[रक्त])
@deva[अग्नीरथः] "fire-chariot" (@deva[अग्नि] + @deva[रथ] with @deva[र्] loss)

The compensatory lengthening preserves syllable weight.`,

  "63112": `@deva[सहिवहोरोदवर्णस्य] — When @deva[ढ्] or @deva[र्] is elided after @deva[सह्] or @deva[वह्], @deva[अ/आ] becomes @deva[ओ].

**Examples:**
@deva[सोढा] "endured" (@deva[सह्] + @deva[क्त] + @deva[टाप्])
@deva[वोढा] "carried"
@deva[सोढुम्] "to endure"
@deva[वोढुम्] "to carry"

The @deva[अ] → @deva[ओ] change is specific to these roots.`,

  "63113": `@deva[छन्दसि च] — Vedic shows irregular forms.

**Vedic examples:**
@deva[साढ्यै] "for enduring"
@deva[साढ्वा] "having endured"
@deva[साढा] "endured"

These preserve archaic patterns.`,

  "63114": `@deva[संहितायाम्] — ADHIKĀRA: "In continuous speech (@deva[संहिता])" governs to the end of this pāda.

Rules following apply specifically to connected speech/recitation contexts.`,

  "63115": `@deva[कर्णे दीर्घः] — Before @deva[कर्ण] (cattle ear-marks), the preceding final is lengthened.

**Examples:**
@deva[दात्राकर्णः] "sickle-eared" (ear-mark type)
@deva[द्विगुणाकर्णः] "double-folded ear"

**Exceptions:** Not after @deva[विष्ट], @deva[अष्टन्], etc.`,

  "63116": `@deva[नह्वृत्वृष्व्यधृरुच्सह्तन्यत्रालोपे] — Before @deva[नह्], @deva[वृत्], @deva[वृष्], @deva[व्यध्], @deva[रुच्], @deva[सह्], @deva[तन्] with @deva[क्वि] affix, the preceding final is lengthened.

**Examples:**
@deva[उपानह्] "sandal"
@deva[नीवृत्] "garment"
@deva[ममावित्] "belonging to me"

The lengthening occurs when @deva[अ] is not elided.`,

  "63117": `@deva[वने कोटरादेर्गिरौ च किंशुलकादेः] — @deva[कोटर]-class words are lengthened before @deva[वन]; @deva[किंशुलक]-class before @deva[गिरि] (when a name).

**Examples:**
@deva[कोटरावणम्] "Koṭara forest"
@deva[किंशुलकागिरिः] "Kiṃśulakā mountain"

These are geographical names.`,

  "63118": `@deva[वले] — The final is lengthened before @deva[वल].

**Examples:**
@deva[आसुतीवलः] "Āsutīvala" (name)
@deva[कृषीवलः] "farmer"

Vt: Not after @deva[उत्साह], @deva[भ्रातृ], @deva[पितृ].`,

  "63119": `@deva[संज्ञायां मतौ बहुषु बह्वचः] — Polysyllabic finals are lengthened before @deva[मत्] when forming a name.

**Examples:**
@deva[उदुम्बरावती] "abounding in udumbara trees" (river name)
@deva[अमरावती] "abode of immortals" (city name)

**Exceptions:** @deva[अजिर]-class words.`,

  "63120": `@deva[शरादीनाम्] — @deva[शर]-class words are lengthened before @deva[मत्] (when a name).

**Examples:**
@deva[शरावती] "abounding in reeds" (river name)
@deva[वंशावती] "abounding in bamboo"`,

  "63121": `@deva[इको वहे पीलोः] — @deva[इ] and @deva[उ] are lengthened before @deva[वह] (except after @deva[पीलु]).

**Examples:**
@deva[ऋषीवहम्] "carrying sages"
@deva[कपीवहम्] "carrying monkeys"

**Exception:**
@deva[पीलुवहम्] "carrying pīlu trees" — no lengthening`,

  "63122": `@deva[उपसर्गस्य घञ्यमनुष्ये बहुलम्] — An @deva[उपसर्ग] final is diversely lengthened before @deva[घञ्]-formed words (not when denoting a person).

**Examples:**
@deva[नीक्लेदः] "wetness"
@deva[प्रासादः] "palace"

The lengthening is variable (@deva[बहुलम्]).`,

  "63123": `@deva[काशे चेको] — @deva[इ/उ]-ending @deva[उपसर्ग] is lengthened before @deva[काश].

**Examples:**
@deva[नीकाशः] "appearance"
@deva[अनूकाशः] "view, appearance"`,

  "63124": `@deva[दातेर्दायादौ] — @deva[इ/उ]-ending @deva[उपसर्ग] is lengthened when @deva[दा] becomes @deva[त].

**Examples:**
@deva[नीत्तम्] "given away"
@deva[वीत्तम्] "distributed"
@deva[परीत्तम्] "given around"`,

  "63125": `@deva[अष्टनश्च संज्ञायाम्] — @deva[अष्टन्] final is lengthened when forming a name.

**Examples:**
@deva[अष्टावक्रः] "eight-crooked" (sage's name)
@deva[अष्टापदम्] "eight-footed" (a game, name)

**But:**
@deva[अष्टपुत्रः] "having eight sons" — not a name`,

  "63126": `@deva[छन्दस्युत्तरपदे च] — In Vedic, @deva[अष्टन्] is lengthened before the second member.

**Vedic examples:**
@deva[अष्टाकपालम्] "eight-dish (offering)"
@deva[अष्टाहिरण्या] "eight-gold (gift)"

Vt: Also @deva[अष्टागवम्] "eight-ox yoking."`,

  "63127": `@deva[चितेः कप्] — @deva[चिति] final is lengthened before @deva[कप्].

**Examples:**
@deva[एकचितीकः] "one-layer (altar)"
@deva[द्विचितीकः] "two-layer (altar)"`,

  "63128": `@deva[विश्वस्य वसुराट्] — @deva[विश्व] final is lengthened before @deva[वसु] and @deva[राट्].

**Examples:**
@deva[विश्वावसुः] "all-wealthy" (Gandharva name)
@deva[विश्वाराट्] "all-ruling"`,

  "63129": `@deva[नरे संज्ञायाम्] — @deva[विश्व] is lengthened before @deva[नर] when forming a name.

**Example:**
@deva[विश्वानरः] "all-men's, universal" (epithet of Agni)

**But:**
@deva[विश्वनरः] "all men" — not a proper name`,

  "63130": `@deva[मित्रे च ऋषौ] — @deva[विश्व] is lengthened before @deva[मित्र] when referring to a @deva[ऋषि].

**Example:**
@deva[विश्वामित्रः] "friend of all" (the sage)

**But:**
@deva[विश्वमित्रः] "friend of all" — a boy's name`,

  "63131": `@deva[मन्त्रे सोमाश्वेन्द्रियविश्वदेव्यस्य] — In mantras, @deva[सोम], @deva[अश्व], @deva[इन्द्रिय], @deva[विश्वदेव्य] are lengthened before @deva[मतुप्].

**Examples:**
@deva[सोमावती] "possessing Soma"
@deva[अश्वावती] "possessing horses"`,

  "63132": `@deva[ओषधेः संप्रसारणे प्रथमात्] — In mantras, @deva[ओषधि] is lengthened before case-endings (except nominative).

**Example:**
@deva[ओषधीभिः] "by herbs" (instrumental)

**But:**
@deva[औषधिः] "herb" (nominative) — no lengthening`,

  "63133": `@deva[ऋग्वेदे तुनुघमक्षुतङ्कुत्रोरुष्यस्य] — In Ṛgveda, @deva[तु], @deva[नु], @deva[घ], @deva[मक्षु], @deva[तङ्], @deva[कु], @deva[त्र], @deva[उरुष्य] are lengthened.

**Ṛgvedic examples:**
@deva[तू] (emphatic)
@deva[नू] "now"
@deva[मक्षू] "quickly"`,

  "63134": `@deva[मन्त्रे स्वित्येकस्य च] — In mantras, @deva[इ/उ]-ending first members are lengthened before @deva[सु].

**Examples:**
@deva[अभी षु] "indeed toward"
@deva[ऊर्ध्व ऊ षु] "indeed upward"`,

  "63135": `@deva[ऋग्वेदे द्व्यचोऽकारादातो वा] — In Ṛgveda, disyllabic @deva[अ]-ending tense affixes are optionally lengthened.

**Example:**
@deva[विद्मा हि त्वा] "for we know you"

The @deva[आ] for @deva[अ] is a Vedic archaism.`,

  "63136": `@deva[निपातस्य च] — In Ṛgveda, particle finals are lengthened.

**Examples:**
@deva[एवा ते] "thus to you"
@deva[अच्छा जरितारः] "toward the singers"`,

  "63137": `@deva[शिष्टाच्च] — Lengthening also occurs in other words as per learned usage.

**Examples:**
@deva[केशाकेशि] "hair-to-hair" (wrestling)
@deva[जलासाद्] "obtaining water"

Vt: @deva[श्वन्] before @deva[दन्त] etc.`,

  "63138": `@deva[अञ्चेश्च य लोपे] — The final is lengthened before @deva[अञ्च] when it becomes @deva[च].

**Examples:**
@deva[दधीचः] "facing curd" (from @deva[दधि] + @deva[अञ्च्])
@deva[मधूचः] "facing honey"

The @deva[य्] of @deva[अञ्च्] is lost, and the preceding vowel lengthens.`,

  "63139": `@deva[संप्रसारणस्य] — A vowel resulting from @deva[संप्रसारण] is lengthened in the first compound member.

**Example:**
@deva[कारीषगन्धीपुत्रः] "son of Kārīṣagandhī"

The @deva[संप्रसारण] vowel (semivowel → vowel change) is lengthened in compounds.

This ends pāda 6.3 on compound operations.`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.3.101-139)`);
console.log(`Total entries: ${Object.keys(data).length}`);
