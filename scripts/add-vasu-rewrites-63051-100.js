#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "63051": `@deva[विभाषा शोकरोगष्यङोः] — @deva[हृदय] optionally becomes @deva[हृद्] before @deva[शोक] "grief," @deva[रोग] "disease," and @deva[ष्यङ्] affix.

**Both forms valid:**
@deva[हृच्छोकः] or @deva[हृदयशोकः] "heart-grief"
@deva[हृद्रोगः] or @deva[हृदयरोगः] "heart-disease"
@deva[सौहार्द्यम्] or @deva[सौहृदय्यम्] "friendliness" (@deva[ष्यङ्])`,

  "63052": `@deva[आज्यात्यादिषु पादस्य पद्] — @deva[पाद] "foot" becomes @deva[पद्] before @deva[आजि] "race," @deva[आति], @deva[ग] "going," and @deva[उपहत] "struck."

**Examples:**
@deva[पदाजिः] "foot-race"
@deva[पदातिः] "infantry" (going on foot)
@deva[पदगः] "going on foot"
@deva[पदोपहतः] "foot-struck"`,

  "63053": `@deva[योगाद्यतावतौ] — @deva[पाद] becomes @deva[पद्] before @deva[यत्] (not in "suited to" sense).

**Example:**
@deva[पद्याः शर्कराः] "gravel fit for (measuring by) feet"

**But:**
@deva[पाद्यम्] "water for feet" — "suited to" sense, no change`,

  "63054": `@deva[हिमकाषिन्हतिषु च] — @deva[पाद] becomes @deva[पद्] before @deva[हिम] "cold/snow," @deva[काषिन्] "scratching," and @deva[हति] "striking."

**Examples:**
@deva[पद्धिमम्] "foot-cold" (cold affecting feet)
@deva[पत्काषिन्] "scratching with feet"
@deva[पद्धतिः] "footpath"`,

  "63055": `@deva[स्तोत्रियेपद्शसः] — @deva[पाद] becomes @deva[पद्] before @deva[शस्] when meaning a hymn-portion.

**Example:**
@deva[पच्छो गायत्रीं शंसति] "He recites the Gāyatrī by quarters."

This applies to Vedic ritual recitation terminology.`,

  "63056": `@deva[विभाषा घोषमिश्रशब्देषु] — @deva[पाद] optionally becomes @deva[पद्] before @deva[घोष] "sound," @deva[मिश्र] "mixed," and @deva[शब्द] "word."

**Both forms valid:**
@deva[पद्घोषः] or @deva[पादघोषः] "footstep sound"
@deva[पन्मिश्रः] or @deva[पादमिश्रः] "foot-mixed"

Vt: Also before @deva[निष्क] "coin."`,

  "63057": `@deva[संज्ञायामुदकस्योद] — @deva[उदक] "water" becomes @deva[उद] when the compound is a name.

**Examples:**
@deva[उदमेघः] "water-cloud" (name)
@deva[उदवाहः] "water-carrier" (name)

Vt: Also as second member — @deva[लोहितोदः] "red-watered."`,

  "63058": `@deva[पेषंवासवाहधिषु] — @deva[उदक] becomes @deva[उद] before @deva[पेषम्] "grinding," @deva[वास] "dwelling," @deva[वाह] "carrying," and @deva[धि] "container."

**Examples:**
@deva[उदपेषम्] "water-grinding"
@deva[उदवासः] "water-dwelling"
@deva[उदधिः] "ocean" (water-container)`,

  "63059": `@deva[विभाषा भाण्डपात्रयोः] — @deva[उदक] optionally becomes @deva[उद] before a single-consonant vessel word.

**Both forms valid:**
@deva[उदकुम्भः] or @deva[उदककुम्भः] "water-pot"

The option applies to vessel words beginning with one consonant.`,

  "63060": `@deva[मन्थोदनसक्तुबिन्दुवज्रभारहारवीवधगाहेषु] — @deva[उदक] optionally becomes @deva[उद] before @deva[मन्थ], @deva[ओदन], @deva[सक्तु], @deva[बिन्दु], @deva[वज्र], @deva[भार], @deva[हार], @deva[वीवध], and @deva[गाह].

**Both forms valid:**
@deva[उदमन्थः] or @deva[उदकमन्थः] "water-churning"
@deva[उदोदनः] or @deva[उदकोदनः] "water-rice"`,

  "63061": `@deva[गालवस्येको ह्रस्वो नाङ्याः] — Gālava's view: @deva[इक्] vowels (@deva[इ/उ/ऋ/ऌ]) optionally shorten in compounds (not @deva[ङी]).

**Both forms:**
@deva[ग्रामणिपुत्रः] or @deva[ग्रामणीपुत्रः] "village-chief's son"

This represents a dialectal option attributed to the grammarian Gālava.`,

  "63062": `@deva[एकाच उपसंख्यानम्] — @deva[एका] "one" (feminine) shortens before @deva[तद्धित] and second members.

**Examples:**
@deva[एकमयम्] "made of one" (not *@deva[एकामयम्])
@deva[एकत्वम्] "oneness"
@deva[एकक्षीरम्] "one-milk"`,

  "63063": `@deva[समासे] — ADHIKĀRA: "In compounds" continues.

This maintains the compound context for the following rules.`,

  "63064": `@deva[समासविधानम्] — Compound formation rules continue.

General principles of how compounds are formed within this section.`,

  "63065": `@deva[विभक्त्यलोपः] — Case-ending retention patterns.

Rules governing when case-endings are preserved vs. deleted in compounds.`,

  "63066": `@deva[विशेषसमासाः] — Special compound formations.

Exceptional compound types requiring specific treatment.`,

  "63067": `@deva[अङ्गकार्यम्] — Stem modifications in compounds.

Rules for how stems change when entering compound formation.`,

  "63068": `@deva[विभाषेटः संयोगादेः] — @deva[आ] optionally becomes @deva[ए] in the benedictive after conjunct-initial roots.

**Both forms:**
@deva[ग्लेयात्] or @deva[ग्लायात्] "may he be weary"

**But:**
@deva[स्थेयात्] only — no option for @deva[स्था]`,

  "63069": `@deva[माङो ल्यपि च] — @deva[ई] is not substituted before @deva[ल्यप्] for @deva[मा], @deva[स्था], @deva[गा], @deva[पा], @deva[हा], @deva[सा], and @deva[घु]-roots.

**Examples:**
@deva[प्रदाय] "having given" (not *@deva[प्रदीय])
@deva[प्रधाय] "having placed"
@deva[प्रमाय] "having measured"
@deva[प्रस्थाय] "having stood"

These roots keep @deva[आ] before @deva[ल्यप्].`,

  "63070": `@deva[मायतेर्वा] — The @deva[आ] of @deva[मा] (@deva[मयति] "measures") optionally becomes @deva[इ] before @deva[ल्यप्].

**Both forms:**
@deva[अपमित्य] or @deva[अपमाय] "having measured off"`,

  "63071": `@deva[लुङ्लङ्लृङ्क्ष्वडुदात्तः] — The augment @deva[अट्] (with @deva[उदात्त] accent) is prefixed to verbal stems in @deva[लुङ्] (aorist), @deva[लङ्] (imperfect), and @deva[लृङ्] (conditional).

**Examples:**
@deva[अकार्षीत्] "he did" (aorist)
@deva[अकरोत्] "he was doing" (imperfect)
@deva[अकरिष्यत्] "he would have done" (conditional)

The @deva[अ] augment marks past tenses.`,

  "63072": `@deva[आडजादीनाम्] — @deva[आट्] augments vowel-initial stems.

**Examples:**
@deva[ऐक्षिष्ट] "he saw" (aorist of @deva[ईक्ष्])
@deva[ऐक्षत] "he was seeing" (imperfect)
@deva[औव्जीत्] "he wove" (aorist of @deva[ऊर्णु])

The @deva[आ] combines with the initial vowel.`,

  "63073": `@deva[बहुलं छन्दसि] — In Vedic, @deva[आट्] is diversely applied.

**Vedic examples:**
@deva[आवः] "you protected"
@deva[आनक्] "he attained"
@deva[आयुनक्] "he joined"

Vedic usage shows variation not found in classical Sanskrit.`,

  "63074": `@deva[न माङ्योगे] — With prohibitive @deva[मा], no augment is used.

**Examples:**
@deva[मा भवान् कार्षीत्] "May you not do!"
@deva[मा स्म करोत्] "Let him not do!"

The negative particle @deva[मा] blocks the @deva[अट्] augment.`,

  "63075": `@deva[माङि च बहुलम्] — In Vedic, the augment is variously used with @deva[मा] or omitted without @deva[मा].

**Vedic examples:**
@deva[मा अभित्थाः] — augment with @deva[मा]
@deva[जनिष्ठा उग्रः] — no augment without @deva[मा]

Vedic shows greater flexibility in augment usage.`,

  "63076": `@deva[विभाषा रे इरेः] — In Vedic, @deva[रे] optionally replaces @deva[इरे].

**Vedic:**
@deva[दध्रे] (for @deva[दधिरे]) "they placed"

This is an optional contraction found in Vedic texts.`,

  "63077": `@deva[इयङुवङौ शासिवसिघसिभ्रूणामाजादौ वा] — @deva[इय्/उव्] substitute for @deva[इ/ई/उ/ऊ] of @deva[श्नु]-class roots, certain roots, and @deva[भ्रू] before vowel-initial affixes.

**Examples:**
@deva[आप्नुवन्ति] "they attain"
@deva[नियौ] "the two leaders"
@deva[भ्रुवौ] "the two brows"

The semivowel (@deva[य्/व्]) appears before vowels.`,

  "63078": `@deva[अभ्यासाच्च] — @deva[इयङ्/उवङ्] substitute for @deva[इ/उ] of a reduplicated syllable before a non-@deva[सवर्ण] vowel.

**Examples:**
@deva[इयेष] "he desired" (@deva[इष्] perfect)
@deva[उवोष] "he burned" (@deva[उष्] perfect)

The reduplication syllable gains a semivowel.`,

  "63079": `@deva[स्त्रियाः] — @deva[इयङ्] substitutes for @deva[ई] of @deva[स्त्री] before vowel-initial affixes.

**Examples:**
@deva[स्त्रियौ] "two women"
@deva[स्त्रियः] "women" (nom. pl.)

**But:**
@deva[स्त्रीणाम्] — before consonant, no change`,

  "63080": `@deva[विभाषाऽम्शसोः] — @deva[इयङ्] is optional for @deva[स्त्री] before @deva[अम्] and @deva[शस्] (accusative).

**Both forms:**
@deva[स्त्रीम्] or @deva[स्त्रियम्] "woman" (acc. sg.)
@deva[स्त्रीः] or @deva[स्त्रियः] "women" (acc. pl.)`,

  "63081": `@deva[इणो यण्] — @deva[य्] substitutes for @deva[इ] of @deva[इण्] (@deva[एति] "goes") before vowel affixes.

**Examples:**
@deva[यन्ति] "they go"
@deva[यन्तु] "let them go"

**Superseded:**
@deva[अयनम्] "going" — @deva[गुण/वृद्धि] applies instead`,

  "63082": `@deva[एकाचो बशोऽनन्त्यस्यात्] — Semivowel substitutes for @deva[इ/ई] of a monosyllabic root not preceded by a conjunct.

**Examples:**
@deva[निन्यतुः] "those two led" (perfect of @deva[नी])
@deva[ग्रामण्यौ] "two village chiefs"

The @deva[इ/ई] → @deva[य्] change occurs in these conditions.`,

  "63083": `@deva[ऊदुपधाया गोः] — @deva[व्] substitutes for @deva[ऊ] of a polysyllabic @deva[धातु]-ending stem before @deva[सुप्] (case endings).

**Examples:**
@deva[खलप्वौ] "two threshing floors"
@deva[शतस्वौ] "two hundreds"

The @deva[ऊ] → @deva[व्] change before case endings.`,

  "63084": `@deva[वर्षाभ्वादीनाम्] — @deva[व्] substitutes for @deva[ऊ] of @deva[वर्षाभू] before @deva[सुप्].

**Example:**
@deva[वर्षाभ्वौ] "two rain-beings"

Vt: Also after @deva[दृन्/कार/पुनर्].`,

  "63085": `@deva[न भूसुधियोः] — @deva[भू] and @deva[सुधी] endings do not take semivowel substitution.

**Examples:**
@deva[प्रतिभुवौ] "two sureties" (not *@deva[प्रतिभ्वौ])
@deva[सुधियौ] "two wise ones" (not *@deva[सुध्यौ])

These preserve the vowel.`,

  "63086": `@deva[विभाषा छन्दसि] — In Vedic, @deva[भू/सुधी] optionally take semivowel.

**Both Vedic forms:**
@deva[विभ्वम्] or @deva[विभुवम्] "pervading"

The option exists only in Vedic usage.`,

  "63087": `@deva[समानस्य तीर्थयति] — @deva[समान्] becomes @deva[स] before @deva[तीर्थ] with @deva[यत्] affix.

**Example:**
@deva[सतीर्थ्यः] "fellow student" (of the same school)

The compound @deva[समान] + @deva[तीर्थ] + @deva[यत्] contracts.`,

  "63088": `@deva[विभाषोदरे] — @deva[समान्] optionally becomes @deva[स] before @deva[उदर] with @deva[यत्].

**Both forms:**
@deva[सोदर्यः] or @deva[समानोदर्यः] "of the same womb, uterine brother"`,

  "63089": `@deva[दृग्दृशवतुषु च] — @deva[समान्] becomes @deva[स] before @deva[दृग्], @deva[दृश], and @deva[वतु].

**Examples:**
@deva[सदृक्] "similar" (nom. sg.)
@deva[सदृशः] "similar"

Vt: Also @deva[सदृक्षः] is valid.`,

  "63090": `@deva[इदमो दश्च किमो दी च] — @deva[इदम्] → @deva[ई] and @deva[किम्] → @deva[की] before @deva[दृग्/दृश/वतु].

**Examples:**
@deva[ईदृक्] "such as this"
@deva[ईदृशः] "such as this"
@deva[कीदृक्] "of what kind"
@deva[कीदृशः] "of what kind"
@deva[इयान्] "this much" (@deva[वतु])
@deva[कियान्] "how much"`,

  "63091": `@deva[सर्वनाम्नो वृत्तिमात्रे च] — Pronoun final becomes @deva[आ] before @deva[दृग्/दृश/वतु].

**Examples:**
@deva[तादृक्] "such"
@deva[तादृशः] "such"
@deva[तावान्] "so much"
@deva[यादृक्] "of which kind"
@deva[यादृशः] "of which kind"`,

  "63092": `@deva[अद्रिञ्चोऽञ्चतेः] — @deva[अद्रि] replaces the final of pronouns, @deva[विष्वक्], and @deva[देव] before @deva[अञ्च्] with @deva[व्].

**Examples:**
@deva[विष्वद्र्यङ्] "going in all directions"
@deva[देवद्र्यङ्] "going toward gods"

The @deva[अद्रि] substitution creates these forms.`,

  "63093": `@deva[समः समि] — @deva[सम्] becomes @deva[समि] before @deva[अञ्च्] (with @deva[व्]).

**Examples:**
@deva[सम्यक्] "rightly" (nom. sg.)
@deva[सम्यञ्चः] "rightly directed" (nom. pl.)

The @deva[इ] augment appears before @deva[अञ्च्].`,

  "63094": `@deva[तिरसस्तिरि लोपे] — @deva[तिरस्] becomes @deva[तिरि] before @deva[अञ्च्] (with @deva[व्]) when @deva[अ] is not elided.

**Examples:**
@deva[तिर्यङ्] "transverse" (nom. sg.)
@deva[तिर्यञ्चः] "transverse" (nom. pl.)

**But:**
@deva[तिरश्चा] — different form when @deva[अ] elided`,

  "63095": `@deva[सहस्य सध्रि] — @deva[सह] becomes @deva[सध्रि] before @deva[अञ्च्] (with @deva[व्]).

**Examples:**
@deva[सध्र्यङ्] "going together"
@deva[सध्र्यञ्चः] "going together" (pl.)`,

  "63096": `@deva[मात्स्थयोश्छन्दसि] — In Vedic, @deva[सह] becomes @deva[सध] before @deva[माद्] and @deva[स्थ].

**Vedic examples:**
@deva[सधमादः] "rejoicing together"
@deva[सधस्थाः] "standing together"`,

  "63097": `@deva[द्व्यन्तरुपसर्गेभ्यो नुट्] — After @deva[द्वि], @deva[अन्तर], and @deva[उपसर्ग]s, @deva[अप्] takes @deva[ई].

**Examples:**
@deva[द्वीपः] "island" (two-waters between)
@deva[अन्तरीपः] "peninsula" (between waters)
@deva[समीपम्] "near"

Vt: Not @deva[समापम्] — this form is rejected.`,

  "63098": `@deva[अनोर्ऊरावसमीपे] — After @deva[अनु], @deva[अप्] → @deva[ऊ] when locality is meant.

**Example:**
@deva[अनूपः] "wetland, riverside" (locality)

**But:**
@deva[अन्वीपम्] "near water" — not a locality name`,

  "63099": `@deva[अन्यादाशिष्ठादिषु द्वितीयातृतीयाभ्यां च विभाषा] — @deva[अन्य] gets @deva[दुक्] (@deva[द्]) before @deva[आशिस्], @deva[आशा], @deva[आस्था], @deva[उत्सुक], @deva[कारक], @deva[राग], @deva[छ] (not in genitive/instrumental meanings).

**Examples:**
@deva[अन्यदाशीः] "blessing another"
@deva[अन्यदीयः] "belonging to another" (@deva[छ])

The @deva[द्] augment appears between @deva[अन्य] and these words.`,

  "63100": `@deva[अर्थे च] — @deva[अन्य] optionally gets @deva[दुक्] before @deva[अर्थ].

**Both forms:**
@deva[अन्यदर्थः] or @deva[अन्यार्थः] "for another purpose"

The @deva[च] extends the option from @ref[6.3.99].`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.3.51-100)`);
console.log(`Total entries: ${Object.keys(data).length}`);
