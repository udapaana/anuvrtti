#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "64101": `@deva[हुझलोर्ढः] — After @deva[हु] and after @deva[झल्] consonants, @deva[धि] replaces imperative @deva[हि] (when @deva[हि] lacks @deva[इट्]).

**After @deva[हु]:**
@deva[जुहुधि] "sacrifice!"

**After @deva[झल्] consonants:**
@deva[भिन्धि] "split!" (from @deva[भिद्])
@deva[छिन्धि] "cut!" (from @deva[छिद्])

**With @deva[इट्]:** @deva[रुदिहि], @deva[स्वपिहि] — no @deva[धि]
**After vowel:** @deva[क्रीणीहि], @deva[प्रीणीहि] — no @deva[धि]`,

  "64102": `@deva[श्रुशृणुपॄकॄवॄतोऽनुनासिकलोपोवा छन्दसि] — In Vedic, @deva[धि] replaces @deva[हि] after @deva[श्रु], @deva[शृणु], @deva[पॄ], @deva[कृ], and @deva[वृ].

**Vedic forms:**
@deva[श्रुधी हविमिन्द्र] "hear, O Indra"
@deva[शृणुधी गिरः] "hear the songs"
@deva[पूर्धि] "fill!"
@deva[उरुकृधि] "make wide!"
@deva[अवावृधि] "turn away!"

These show irregular @deva[शप्] elision and lengthening.`,

  "64103": `@deva[अङितो हलादेः] — In Vedic, @deva[धि] replaces @deva[हि] when the tense-affix is not @deva[ङित्].

**Vedic examples:**
@deva[रारन्धि] (from @deva[रम्])
@deva[प्रयन्धि] (from @deva[यम्])
@deva[युयोधि] (from @deva[यु])

When @deva[हि] is @deva[पित्] (@ref[3.4.88]), it is not @deva[ङित्], so @deva[धि] applies.

**When @deva[ङित्]:** @deva[प्रीणीहि] — no @deva[धि]`,

  "64104": `@deva[चिण्णमुल्] — Personal endings are deleted after @deva[चिण्] (passive aorist 3rd singular).

**Examples:**
@deva[अहारि] "was taken"
@deva[अकारि] "was done"
@deva[अपाचि] "was cooked"
@deva[अलावि] "was cut"

The ending is completely elided, leaving only the @deva[इ] of @deva[चिण्].`,

  "64105": `@deva[अतो हेः] — Imperative @deva[हि] is deleted after stems ending in short @deva[अ].

**Examples:**
@deva[पच] "cook!" (not *@deva[पचहि])
@deva[पठ] "read!"
@deva[गच्छ] "go!"
@deva[धाव] "run!"

**After @deva[उ]:** @deva[युहि], @deva[रुहि] — @deva[हि] retained
**After @deva[आ]:** @deva[लुनीहि], @deva[पुनीहि] — @deva[हि] retained`,

  "64106": `@deva[उतो वृद्धिलोपो वा] — @deva[हि] is deleted after the @deva[उ] of class 5/8 vikaraṇa (@deva[उ/श्नु]), unless @deva[उ] is preceded by a cluster.

**@deva[हि] deleted:**
@deva[चिनु] "gather!" (from @deva[चि] + @deva[उ])
@deva[सुनु] "press!" (from @deva[सु] + @deva[उ])
@deva[कुरु] "do!" (from @deva[कृ] + @deva[उ])

**Cluster precedes — @deva[हि] retained:**
@deva[आप्नुहि] "obtain!"
@deva[राध्नुहि] "succeed!"
@deva[तक्ष्णुहि] "carve!"

Vt: In Vedic, deletion is optional: @deva[आतनुहि], @deva[धिनुहि], @deva[कृणुहि].`,

  "64107": `@deva[उतश्च प्रत्ययात्] — The @deva[उ] of class 5/8 vikaraṇa is optionally deleted before @deva[म्/व्]-initial personal endings (if no cluster precedes).

**Both forms valid:**
@deva[सुन्वः] or @deva[सुनुवः] "we press"
@deva[सुन्मः] or @deva[सुनुमः]
@deva[तन्वः] or @deva[तनुवः]
@deva[तन्मः] or @deva[तनुमः]

**Cluster precedes — no deletion:**
@deva[शक्नुवः], @deva[शक्नुमः] only`,

  "64108": `@deva[कृञ्] — @deva[कृ] "do" obligatorily deletes @deva[उ] before @deva[व्/म्]-initial endings.

**Examples:**
@deva[कुर्वः] "we do"
@deva[कुर्मः] "we do"

No optional forms here — @deva[उ] is always deleted for @deva[कृ].`,

  "64109": `@deva[य इ च] — @deva[कुरु] "do" deletes @deva[उ] before @deva[य्]-initial personal endings.

**Examples:**
@deva[कुर्यात्] "may he do"
@deva[कुर्याताम्] "may they two do"
@deva[कुर्युः] "may they do"

The @deva[यासुट्] augment makes the ending @deva[य्]-initial.`,

  "64110": `@deva[अतः] — @deva[कृ] replaces its @deva[गुण]-form @deva[अ] with @deva[उ] before @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Examples:**
@deva[कुरुतः] "they two do"
@deva[कुर्वन्ति] "they do"
@deva[कुरु] "do!"

**Non-@deva[कित्/ङित्]:** @deva[करोति], @deva[करोषि], @deva[करोमि] — @deva[गुण] remains`,

  "64111": `@deva[श्नस्य अलोपः] — The @deva[अ] of @deva[श्न] (class 7 vikaraṇa) and @deva[अस्] "be" is deleted before @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Class 7 (@deva[श्न]):**
@deva[रुन्धः] "you two block"
@deva[रुन्धन्ति] "they block"
@deva[भिन्तः], @deva[भिन्दन्ति]

**@deva[अस्] "be":**
@deva[स्तः] "they two are"
@deva[सन्ति] "they are"

**Non-@deva[कित्/ङित्]:** @deva[भिनत्ति], @deva[अस्ति]`,

  "64112": `@deva[श्नाभ्यस्तयोः आतः] — The @deva[आ] of @deva[श्ना] (class 9) and reduplicated stems is deleted before vowel-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Class 9 (@deva[श्ना]):**
@deva[लुनते] "they pick"
@deva[लुनताम्] "let them pick"
@deva[अलुनत] "he picked"

**Reduplicated:**
@deva[मिमते], @deva[मिमताम्], @deva[अमिमत]
@deva[संजिहते], @deva[संजिहताम्], @deva[समजिहत]

**Non-@deva[कित्/ङित्]:** @deva[अलुनात्], @deva[अजहात्]`,

  "64113": `@deva[ईद्धातोः] — The @deva[आ] of @deva[श्ना] and reduplicated stems becomes @deva[ई] before consonant-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes (except @deva[घु]-class).

**Class 9:**
@deva[लुनीतः], @deva[पुनीतः]
@deva[लुनीथः], @deva[पुनीथः]
@deva[लुनीते], @deva[पुनीते]

**Reduplicated:**
@deva[मिमीते], @deva[मिमीषे], @deva[मिमीध्वे]
@deva[संजिहीते], @deva[संजिहीषे]

**@deva[घु]-class exception:** @deva[दत्तः], @deva[धत्तः] — not @deva[ई]`,

  "64114": `@deva[दरिद्रस्य] — @deva[दरिद्रा] "be poor" replaces @deva[आ] with @deva[इ] before consonant-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Examples:**
@deva[दरिद्रितः] "you two are poor"
@deva[दरिद्रिथः], @deva[दरिद्रिवः], @deva[दरिद्रिमः]

**Before vowel-initial:** @deva[दरिद्रति] (by @ref[6.4.112])
**Non-@deva[ङित्]:** @deva[दरिद्राति]

Vt: Before @deva[आर्धधातुक], @deva[आ] is deleted: @deva[दरिद्रः].`,

  "64115": `@deva[भियो वा] — @deva[भी] "fear" optionally replaces @deva[ई] with @deva[इ] before consonant-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Both forms valid:**
@deva[बिभितः] or @deva[बिभीतः]
@deva[बिभिथः] or @deva[बिभीथः]
@deva[बिभिवः] or @deva[बिभीवः]
@deva[बिभिमः] or @deva[बिभीमः]

**Before vowel:** @deva[बिभ्यति]
**Non-@deva[ङित्]:** @deva[बिभेति]`,

  "64116": `@deva[जहातेश्च हा] — @deva[हा] (class 3, @deva[जहाति]) optionally replaces @deva[आ] with @deva[इ] before consonant-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Both forms valid:**
@deva[जहितः] or @deva[जहीतः]
@deva[जहिथः] or @deva[जहीथः]

**Before vowel:** @deva[जहति]
**Non-@deva[ङित्]:** @deva[जहाति]
**@deva[आर्धधातुक]:** @deva[हीयते], @deva[जिहीयते]`,

  "64117": `@deva[हो हन्तेः] — @deva[हा] (class 3) optionally shows @deva[आ] or @deva[इ] before imperative @deva[हि].

**Three forms valid:**
@deva[जहाहि] "abandon!"
@deva[जहिहि]
@deva[जहीहि] (by @ref[6.4.113])`,

  "64118": `@deva[यस्य इति च] — @deva[हा] (class 3) deletes its final before @deva[य्]-initial @deva[सार्वधातुक] @deva[कित्/ङित्] affixes.

**Examples:**
@deva[जह्यात्] "may he abandon"
@deva[जह्याताम्] "may they two abandon"
@deva[जह्युः] "may they abandon"`,

  "64119": `@deva[घोः देधातोः] — @deva[दा], @deva[धा] (@deva[घु]-class), and @deva[अस्] replace their finals with @deva[ए] before imperative @deva[हि], and the reduplicative syllable is deleted.

**Examples:**
@deva[देहि] "give!"
@deva[धेहि] "place!"
@deva[एधि] "be!"

For @deva[अस्], the @deva[स्] is replaced by @deva[ए], and @deva[अ] is deleted by @ref[6.4.111].`,

  "64120": `@deva[एतेरेकहलादेर्वा] — In the perfect (@deva[लिट्]), @deva[अ] between two simple consonants is replaced by @deva[ए], and the reduplicate is deleted, provided no substitute consonant appears in the reduplicate.

**Examples:**
@deva[पेचतुः], @deva[पेचुः] (from @deva[पच्])
@deva[येमतुः], @deva[येमुः] (from @deva[यम्])
@deva[रेणतुः], @deva[रेणुः]
@deva[देभतुः], @deva[देभुः]

**Exceptions:**
- @deva[दिदिवतुः] — vowel is @deva[इ], not @deva[अ]
- @deva[ररासे] — long @deva[आ]
- @deva[ततक्षतुः] — cluster
- @deva[चकणतुः], @deva[बभणतुः] — substituted consonant in reduplicate`,

  "64121": `@deva[सेट इत्याशिषि] — Before @deva[थल्] (perfect 2nd sg.) with @deva[इट्], @deva[अ] between two simple consonants becomes @deva[ए], and the reduplicate is deleted.

**Examples:**
@deva[पेचिथ] "you cooked"
@deva[शेकिथ] "you were able"

**Exceptions:**
@deva[पपक्थ] — @deva[थल्] without @deva[इट्]
@deva[दिदेविथ] — vowel is @deva[इ]
@deva[ततक्षिथ], @deva[ररक्षिथ] — cluster
@deva[चकणिथ], @deva[बभणिथ] — substituted consonant`,

  "64122": `@deva[तॄफलभजत्रपाम्] — @deva[तॄ], @deva[फल्], @deva[भज्], @deva[त्रप्] replace @deva[अ] with @deva[ए] in perfect @deva[कित्/ङित्] and @deva[सेट्] @deva[थल्].

**Examples:**
@deva[तेरतुः], @deva[तेरुः], @deva[तेरिथ] (from @deva[तॄ])
@deva[फेलतुः], @deva[फेलुः], @deva[फेलिथ] (from @deva[फल्])
@deva[भेजतुः], @deva[भेजुः], @deva[भेजिथ] (from @deva[भज्])
@deva[त्रेपे], @deva[त्रेपाते], @deva[त्रेपिरे] (from @deva[त्रप्])

These override normal restrictions.
Vt: Also @deva[श्रन्थ्]: @deva[श्रेथतुः], @deva[श्रेथुः].`,

  "64123": `@deva[राधो हिंसायाम्] — @deva[राध्] "harm" replaces @deva[आ] with @deva[ए] in perfect @deva[कित्/ङित्] and @deva[सेट्] @deva[थल्].

**Harm sense:**
@deva[अपरेधतुः], @deva[अपरेधुः], @deva[अपरेधिथ]

**Other senses:**
@deva[रराधतुः], @deva[रराधुः], @deva[रराधिथ]`,

  "64124": `@deva[जॄभ्रमुत्रसाम्] — @deva[जॄ], @deva[भ्रम्], @deva[त्रस्] optionally replace @deva[अ] with @deva[ए] in perfect @deva[कित्/ङित्].

**Both forms valid:**
@deva[जेरतुः] or @deva[जजरतुः]
@deva[भ्रेमतुः] or @deva[बभ्रमतुः]
@deva[त्रेसतुः] or @deva[तत्रसतुः]`,

  "64125": `@deva[फणादिभ्यः] — @deva[फण्], @deva[राज्], @deva[भ्राज्], @deva[भ्राश्], @deva[भ्लाश्], @deva[स्याम्], @deva[स्वन्] optionally replace @deva[अ/आ] with @deva[ए] in perfect.

**Both forms valid:**
@deva[फेणतुः] or @deva[पफणतुः]
@deva[रेजतुः] or @deva[रराजतुः]
@deva[भ्रेजे] or @deva[बभ्राजे]
@deva[स्येमतुः] or @deva[सस्यमतुः]
@deva[स्वेनतुः] or @deva[सस्वनतुः]`,

  "64126": `@deva[न शस्ददो] — @deva[शस्], @deva[दद्], @deva[व्]-initial roots, and roots with @deva[गुण]-derived @deva[अ] do not replace @deva[अ] with @deva[ए].

**No @deva[ए] substitution:**
@deva[विशशसतुः], @deva[विशशसुः] (@deva[शस्])
@deva[दददे], @deva[दददाते] (@deva[दद्])
@deva[ववमतुः], @deva[ववमुः] (@deva[वम्])
@deva[विशशरतुः] (@deva[शॄ] — @deva[अ] from @deva[गुण])
@deva[लुलविथ], @deva[पुपविथ] (@deva[अ] from @deva[ओ] < @deva[उ])`,

  "64127": `@deva[अर्वणस्त्रृजमतौ] — @deva[अर्वन्] "horse" replaces final @deva[अन्] with @deva[त्] (with @deva[नुम्] in strong cases), except nominative singular and after @deva[नञ्].

**With @deva[त्]-substitute:**
@deva[अर्वन्तौ], @deva[अर्वन्तः], @deva[अर्वन्तम्]
@deva[अर्वतः], @deva[अर्वता], @deva[अर्वद्भ्याम्]

**Nominative singular:** @deva[अर्वा]
**With @deva[नञ्]:** @deva[अनर्वाणौ], @deva[अनर्वाणः], @deva[अनर्वाणम्]`,

  "64128": `@deva[मघवा] — @deva[मघवन्] "wealthy one, Indra" variably takes @deva[त्]-substitute.

**With @deva[त्]:**
@deva[मघवान्], @deva[मघवन्तौ], @deva[मघवन्तः]
@deva[मघवता], @deva[मघवती]

**Without @deva[त्]:**
@deva[मघवा], @deva[मघवानौ], @deva[मघवानः]
@deva[मघोना], @deva[मघोनी]`,

  "64129": `@deva[भस्य] — ADHIKĀRA: "Of @deva[भ]" — the remaining rules in this adhyāya apply to @deva[भ]-designated stems.

@deva[भ] is assigned to stems before case endings other than @deva[सर्वनामस्थान] (@ref[1.4.18]).`,

  "64130": `@deva[पादः पद्] — @deva[पाद्] "foot" becomes @deva[पद्] when @deva[भ].

**Examples:**
@deva[द्विपदः पश्य] "see the biped"
@deva[द्विपदा कृतम्] "done with two feet"
@deva[त्रिपदिका] "having three feet"

**Non-@deva[भ]:** @deva[द्विपादौ], @deva[द्विपादः]`,

  "64131": `@deva[वसोः संप्रसारणम्] — The @deva[व्] of @deva[वस्] (@deva[क्वसु] affix) becomes @deva[उ] (samprasāraṇa) in @deva[भ].

**Examples:**
@deva[विदुषः पश्य] "see the knower"
@deva[विदुषा], @deva[विदुषे]
@deva[पेचुषः पश्य], @deva[ययुषः पश्य]

**Non-@deva[भ] (nominative):** @deva[पपीवान्]`,

  "64132": `@deva[वाह ऊठ्] — @deva[वाह्] "carrier" (in compounds) becomes @deva[ऊह्] in @deva[भ].

**Examples:**
@deva[प्रष्ठौहः], @deva[प्रष्ठौहा], @deva[प्रष्ठौहे]
@deva[दित्यौहः], @deva[दित्यौहा], @deva[दित्यौहे]

The @deva[ऊ] combines with preceding @deva[अ] to give @deva[औ] by @ref[6.1.89].`,

  "64133": `@deva[श्वयुवमघोनाम् अतद्धिते] — @deva[श्वन्] "dog," @deva[युवन्] "youth," and @deva[मघवन्] undergo samprasāraṇa, but not before taddhita.

**@deva[भ] forms:**
@deva[शुनः], @deva[शुना], @deva[शुने]
@deva[यूनः], @deva[यूना], @deva[यूने]
@deva[मघोनः], @deva[मघोना], @deva[मघोने]

**Before taddhita:** @deva[शौवनम्], @deva[यौवनम्], @deva[माघवनः]`,

  "64134": `@deva[अनः] — In @deva[भ] stems ending in @deva[अन्], the @deva[अ] is deleted.

**Examples:**
@deva[राज्ञः पश्य], @deva[राज्ञा], @deva[राज्ञे]
@deva[तक्ष्णः पश्य], @deva[तक्ष्णा], @deva[तक्ष्णे]`,

  "64135": `@deva[षात्वतृहोः] — @deva[अन्]-final stems with @deva[ष्] preceding, plus @deva[हन्] and @deva[धृतराजन्], delete @deva[अ] before @deva[अण्].

**Examples:**
@deva[औक्ष्णः] (from @deva[उक्षन्])
@deva[ताक्ष्णः] (from @deva[तक्षन्])
@deva[भ्रौनघ्नः] (from @deva[भ्रूणहन्])
@deva[धार्तराज्ञः] (from @deva[धृतराजन्])

**No @deva[ष्] preceding:** @deva[सामनः], @deva[वैमनः]`,

  "64136": `@deva[ङौ च] — In @deva[अन्]-final stems, @deva[अ] is optionally deleted before locative @deva[इ] and neuter dual @deva[शी] (@deva[ई]).

**Both forms:**
@deva[राज्ञि] or @deva[राजनि] (locative)
@deva[साम्नि] or @deva[सामनि]
@deva[साम्नी] or @deva[सामनी] (neuter dual)`,

  "64137": `@deva[न संयोगाद्वमन्तात्] — @deva[वन्/मन्]-final stems with preceding cluster do not delete @deva[अ] in @deva[भ].

**@deva[अ] retained:**
@deva[पर्वणा], @deva[पर्वणे] (from @deva[पर्वन्])
@deva[अथर्वणा], @deva[अथर्वणे]
@deva[चर्मणा], @deva[चर्मणे]

**No cluster:** @deva[प्रतिदीव्ना], @deva[साम्ना] — @deva[अ] deleted`,

  "64138": `@deva[अचः] — @deva[अ] of @deva[अञ्च्] is deleted in @deva[भ].

**Examples:**
@deva[दधीचः पश्य], @deva[दधीचा], @deva[दधीचे]
@deva[मधूचः पश्य], @deva[मधूचा], @deva[मधूचे]

The @deva[न्] of @deva[अञ्च्] was deleted by @ref[6.4.24].`,

  "64139": `@deva[उत ईत्] — After @deva[उत्] "north," @deva[अञ्च्] replaces @deva[अ] with @deva[ई] in @deva[भ].

**Examples:**
@deva[उदीचः], @deva[उदीचा], @deva[उदीचे] "northern"`,

  "64140": `@deva[आतो धातोः] — Root-final @deva[आ] is deleted in @deva[भ].

**Examples:**
@deva[कीलालपः पश्य], @deva[कीलालपा], @deva[कीलालपे] (from @deva[कीलालपा])
@deva[शुभंयः पश्य], @deva[शुभंया], @deva[शुभंये]

**Non-root @deva[आ]:** @deva[खट्वाः पश्य], @deva[मालाः पश्य] — no deletion`,

  "64141": `@deva[आत्मनः मन्त्रे] — In mantras, @deva[आत्मन्] "self" deletes initial @deva[आ] before instrumental @deva[आ].

**Vedic:**
@deva[त्मना देवेभ्यः] "by oneself, to the gods"
@deva[त्मना सोमेषु]

**Classical:** @deva[आत्मनः कृतम्]`,

  "64142": `@deva[विंशतेर्डतः] — @deva[विंशति] "twenty" deletes @deva[ति] before @deva[डित्] affixes.

**Examples:**
@deva[विंशकः] "bought for twenty" (with @deva[ड्वुन्])
@deva[विंशं शतम्] = @deva[एकविंशः] "twenty-first" (with @deva[डट्])`,

  "64143": `@deva[टेः] — Before @deva[डित्] affixes, the final vowel (with following consonant) is deleted.

**Examples:**
@deva[कुमुद्वत्] (from @deva[कुमुद] + @deva[ड्मतुप्])
@deva[नड्वत्], @deva[वेतस्वत्]
@deva[त्रिंशकः] (from @deva[त्रिंशत्] + @deva[ड्वुन्])

Also applies to non-@deva[भ]: @deva[उपसरजः], @deva[मन्दुरजः].`,

  "64144": `@deva[न मन्ताद्धितौ] — @deva[मन्]-final @deva[भ] stems delete @deva[अन्] before taddhita.

**Examples:**
@deva[आग्निशर्मिः] (from @deva[अग्निशर्मन्] + @deva[इञ्])
@deva[औडुलोमिः] (from @deva[उडुलोमन्])
@deva[सारलोमिः] (from @deva[सरलोमन्])

**Non-@deva[मन्]-final:** @deva[सात्वतः]`,

  "64145": `@deva[अहाट्खोः] — @deva[अहन्] "day" deletes @deva[अ] only before @deva[ट] and @deva[ख] affixes.

**Examples:**
@deva[द्व्यहः], @deva[त्र्यहः] (with @deva[टच्])
@deva[द्व्यहीनः], @deva[त्र्यहीनः] (with @deva[ख])

**Other affixes:** @deva[आह्निकम्] (with @deva[ठञ्]) — @deva[अ] retained`,

  "64146": `@deva[ओर्गुणः] — @deva[उ/ऊ] in @deva[भ] stems takes @deva[गुण] before taddhita.

**Examples:**
@deva[बाभ्रव्यः] (from @deva[बभ्रू])
@deva[माण्डव्यः] (from @deva[मण्डु])
@deva[शङ्कव्यं दारु] (from @deva[शंकु])
@deva[औपगवः], @deva[कापटवः]

**Exception:** @deva[स्वायंभुवः] (from @deva[स्वयंभू]) — no @deva[गुण]`,

  "64147": `@deva[न कट्र्वोः ढः] — @deva[उ/ऊ] is deleted before @deva[ढ] (@deva[एय]), except in @deva[कट्रू].

**Examples:**
@deva[कामण्डलेयः] (from @deva[कमण्डलू])
@deva[शैतिवाहेयः], @deva[जाम्बेयः]

**Exception:** @deva[काट्रवेयः] (from @deva[कट्रू]) — @deva[ऊ] retained`,

  "64148": `@deva[इतश्च लोपः] — @deva[अ/इ] (short or long) is deleted in @deva[भ] before taddhita.

**@deva[इ] deleted:**
@deva[दाक्षी], @deva[प्लाक्षी], @deva[सखी] (with @deva[ई])
@deva[दौलेयः] (from @deva[दुलि])
@deva[आत्रेयः] (from @deva[अत्रि])

**@deva[अ] deleted before @deva[ई]:**
@deva[कुमारी] (from @deva[कुमार])
@deva[गौरी], @deva[शार्ङ्गरवी]

**@deva[अ/आ] deleted before taddhita:**
@deva[दाक्षिः] (from @deva[दक्ष])
@deva[बालाकिः] (from @deva[बलाका])`,

  "64149": `@deva[व्योः] — @deva[सूर्य], @deva[तिष्य], @deva[अगस्त्य], @deva[मत्स्य] delete penultimate @deva[य्] before taddhita.

**Examples:**
@deva[सौरी बलाका] (from @deva[सूर्य] + @deva[अण्] + @deva[ई])
@deva[तैषमहः], @deva[तैषी रात्रिः] (from @deva[तिष्य])
@deva[आगस्ती], @deva[आगस्तीयः] (from @deva[अगस्त्य])
@deva[मत्सी] (from @deva[मत्स्य] + @deva[ङीष्])

Vt: @deva[मत्स्य] deletes @deva[य्] only before feminine @deva[ई].`,

  "64150": `@deva[अन्यत्रापि दृश्यते] — @deva[य्]-deletion is seen in other contexts too.

**Examples:**
@deva[सामी इष्टिः] (non-patronymic @deva[य्] deleted)

This expands the scope of @deva[य्]-deletion beyond strict patronymics.`,

  "64151": `@deva[यस्य अपत्यं तदाख्या] — Patronymic @deva[य्] preceded by a consonant is deleted before taddhita not beginning with @deva[आ].

**Examples:**
@deva[गार्गकम्] (from @deva[गार्ग्य] + collective affix)
@deva[वात्सकम्] (from @deva[वात्स्य])

**Before @deva[आ]-initial:** @deva[गार्ग्यायणः], @deva[वात्स्यायनः] — no deletion
**Non-patronymic @deva[य्]:** @deva[सांकाश्यकः], @deva[काम्पिल्यकः] — no deletion`,

  "64152": `@deva[क्यच्क्यङोश्च] — Patronymic @deva[य्] preceded by consonant is deleted before @deva[क्यच्/क्यङ्] (denominative) and @deva[च्वि].

**Denominative:**
@deva[गार्गीयति] or @deva[गार्गीयते] (from @deva[गार्ग्य])
@deva[वात्सीयति]

**@deva[च्वि]:**
@deva[गार्गीभूतः], @deva[वात्सीभूतः]

**Non-patronymic:** @deva[सांकाश्यायते], @deva[सांकाश्यीभूतः]`,

  "64153": `@deva[बिल्वकादिभ्यस्छस्य लुक्] — In @deva[बिल्वक]-class words, affix @deva[छ] (@deva[ईय]) is deleted before taddhita.

**Examples:**
@deva[बिल्वकीयाः] → @deva[बैल्वकाः] "inhabitants of Bilva forest"
@deva[वेणुकीयाः] → @deva[वैणुकाः]
@deva[इक्षुकीयाः] → @deva[ऐक्षुकाः]

Only @deva[छ] is deleted, not @deva[क].`,

  "64154": `@deva[तुषिष्ठीयसिस्थ्] — @deva[तृ] (agent) is deleted before @deva[इष्ठन्], @deva[इमनिच्], and @deva[ईयसुन्].

**Examples:**
@deva[करिष्ठः] (from @deva[कर्तृ])
@deva[विजयिष्ठः] (from @deva[विजेतृ])
@deva[वहिष्ठः] (from @deva[वोढृ])
@deva[दोहीयसी धेनुः] "cow better at milking"`,

  "64155": `@deva[टेः ईयसः] — Before @deva[इष्ठ], @deva[इमन्], @deva[ईयस्], the final vowel (with following consonant) is deleted.

**Examples:**
@deva[पटिष्ठः], @deva[पटिमा], @deva[पटीयान्] (from @deva[पटु])
@deva[लघिष्ठः], @deva[लघिमा], @deva[लघीयान्] (from @deva[लघु])

Vt: Causative stems before @deva[णि] undergo same changes.`,

  "64156": `@deva[स्थूलदूरयुवह्रस्वक्षिप्रक्षुद्राणाम्] — @deva[स्थूल], @deva[दूर], @deva[युवन्], @deva[ह्रस्व], @deva[क्षिप्र], @deva[क्षुद्र] delete their final semivowel (with following sounds) and take @deva[गुण] before @deva[इष्ठ/इमन्/ईयस्].

**Examples:**
@deva[स्थविष्ठः], @deva[स्थवीयान्] (from @deva[स्थूल])
@deva[दविष्ठः], @deva[दवीयान्] (from @deva[दूर])
@deva[यविष्ठः], @deva[यवीयान्] (from @deva[युवन्])
@deva[ह्रसिष्ठः], @deva[ह्रसीयान्] (from @deva[ह्रस्व])
@deva[क्षेपिष्ठः], @deva[क्षेपीयान्] (from @deva[क्षिप्र])
@deva[क्षोदिष्ठः], @deva[क्षोदीयान्] (from @deva[क्षुद्र])`,

  "64157": `@deva[प्रियस्थिर...] — Special substitutes before @deva[इष्ठ/इमन्/ईयस्]:

| Base | Substitute |
|------|------------|
| @deva[प्रिय] | @deva[प्र] |
| @deva[स्थिर] | @deva[स्थ] |
| @deva[स्फिर] | @deva[स्फ] |
| @deva[उरु] | @deva[वर्] |
| @deva[बहुल] | @deva[बंह] |
| @deva[गुरु] | @deva[गर्] |
| @deva[वृद्ध] | @deva[वर्ष] |
| @deva[तृप्र] | @deva[त्रप्] |
| @deva[दीर्घ] | @deva[द्राघ] |
| @deva[वृन्दारक] | @deva[वृन्द] |

**Examples:**
@deva[प्रेष्ठः], @deva[प्रेमा], @deva[प्रेयान्]
@deva[वरिष्ठः], @deva[वरिमा], @deva[वरीयान्]
@deva[गरिष्ठः], @deva[गरीयान्], @deva[गरिमा]`,

  "64158": `@deva[बहोर्लोपः] — After @deva[बहु], @deva[इ/ई] of @deva[इमन्/ईयस्] is deleted, and @deva[बहु] becomes @deva[भू].

**Examples:**
@deva[भूयान्] "more"
@deva[भूमा] "abundance"`,

  "64159": `@deva[यिट् च] — Before @deva[इष्ठ], @deva[बहु] becomes @deva[भू] and @deva[इष्ठ] takes @deva[यिट्] augment.

**Example:**
@deva[भूयिष्ठः] "most"`,

  "64160": `@deva[ज्यादात्] — After @deva[ज्य] (for @deva[प्रशस्य]), @deva[ईयस्] replaces @deva[ई] with @deva[आ].

**Example:**
@deva[ज्यायान्] "better, elder"`,

  "64161": `@deva[ऋतो भार...] — @deva[ऋ] (preceded by consonant, not prosodically long) becomes @deva[र्] before @deva[इष्ठ/इमन्/ईयस्].

**Examples:**
@deva[प्रथिष्ठः], @deva[प्रथीयान्], @deva[प्रथिमा] (from @deva[पृथु])
@deva[म्रदिष्ठः], @deva[म्रदीयान्], @deva[म्रदिमा] (from @deva[मृदु])

**Applies to:** @deva[पृथु], @deva[मृदु], @deva[भृश], @deva[कृश], @deva[दृढ], @deva[परिवृढ]

**Exception:** @deva[कृष्णिष्ठः] — prosodically long @deva[ऋ]`,

  "64162": `@deva[ऋजेर्वा छन्दसि] — In Vedic, @deva[ऋजु] "straight" optionally changes @deva[ऋ] to @deva[र्] before @deva[इष्ठ/ईयस्].

**Vedic options:**
@deva[रजिष्ठः] or @deva[ऋजिष्ठः]`,

  "64163": `@deva[एकाचो अञ्चतेः] — Monosyllabic @deva[भ] stems remain unchanged before @deva[इष्ठ/इमन्/ईयस्].

**Examples:**
@deva[स्रजिष्ठः], @deva[स्रजीयान्], @deva[स्रजयति] (from @deva[स्रग्विन्] → @deva[स्रज्])
@deva[स्रुचिष्ठः], @deva[स्रुचीयान्] (from @deva[स्रुग्वत्] → @deva[स्रुच्])

The affix @deva[विन्/मतुप्] is first deleted by @ref[5.3.65].

Vt: @deva[राजन्य], @deva[मनुष्य], @deva[युवन्] unchanged before @deva[अक].`,

  "64164": `@deva[इनश्च] — @deva[इन्]-final @deva[भ] stems remain unchanged before non-patronymic @deva[अण्].

**Examples:**
@deva[सांकुटिनम्], @deva[सांराविणम्]
@deva[स्राग्विणम्] (from @deva[स्रग्विन्])

**Patronymic:** @deva[मैधावः] (from @deva[मेधाविन्]) — @deva[इन्] deleted`,

  "64165": `@deva[गाथिन्...] — @deva[गाथिन्], @deva[विदथिन्], @deva[केशिन्], @deva[गणिन्], @deva[पणिन्] remain unchanged even before patronymic @deva[अण्].

**Examples:**
@deva[गाथिनः] (from @deva[गाथिन्])
@deva[वैदथिनः], @deva[कैशिनः], @deva[गाणिनः], @deva[पाणिनः]`,

  "64166": `@deva[संयोगादेः] — @deva[इन्]-final stems with preceding cluster remain unchanged before @deva[अण्].

**Examples:**
@deva[शाङ्किनः] (from @deva[शाङ्किन्])
@deva[याद्रिणः], @deva[वाज्जिणः]`,

  "64167": `@deva[अन्तः] — @deva[अन्]-final stems remain unchanged before @deva[अण्].

**Examples:**
@deva[सामनः] (from @deva[सामन्])
@deva[वैमनः] (from @deva[वेमन्])
@deva[सौत्वनः] (from @deva[सुत्वन्])`,

  "64168": `@deva[यस्य इति च] — @deva[अन्]-final stems remain unchanged before @deva[य्]-initial taddhita not meaning "state of being."

**Examples:**
@deva[सामन्यः] "@deva[सामन्]-related"
@deva[ब्राह्मण्यः]

**State-of-being sense:** @deva[राज्यम्] "kingship" (from @deva[राजन्]) — @deva[अन्] deleted`,

  "64169": `@deva[आत्माध्वनोः खः] — @deva[आत्मन्] and @deva[अध्वन्] remain unchanged before @deva[ख].

**Examples:**
@deva[आत्मनीनः] "beneficial to self"
@deva[अध्वनीनः] "traversing a path"

**Other affixes:** @deva[प्रत्यात्मम्], @deva[प्राध्वम्]`,

  "64170": `@deva[म्नस्य...] — @deva[मन्]-final patronymic stems delete @deva[अन्] before @deva[अण्], except @deva[वर्मन्].

**@deva[अन्] deleted:**
@deva[सौषामः] (from @deva[सुषामन्])
@deva[चान्द्रसामः] (from @deva[चन्द्रसामन्])

**@deva[वर्मन्] exception:**
@deva[चाक्रवर्मणः] (from @deva[चक्रवर्मन्]) — @deva[अन्] retained`,

  "64171": `@deva[ब्रह्मणः] — @deva[ब्रह्मन्] becomes @deva[ब्राह्म] (deleting @deva[अन्]) when not denoting the jāti.

**@deva[अन्] deleted:**
@deva[ब्राह्मो गर्भः] "Brahma's embryo"
@deva[ब्राह्मं हविः] "Brahma's oblation"
@deva[ब्राह्मो नारदः] "descendant of Brahman"

**Jāti sense — @deva[अन्] retained:**
@deva[ब्राह्मणः] "a Brahmin"`,

  "64172": `@deva[कर्मणः] — @deva[कर्मन्] becomes @deva[कार्म] (deleting @deva[अन्]) before @deva[ण] meaning "accustomed to."

**Example:**
@deva[कर्मणि शीलं यस्य] = @deva[कार्मः] "habitually engaged in work"

**Other senses:** @deva[कार्मणम्] "relating to action"`,

  "64173": `@deva[उक्षण...] — @deva[उक्षन्] "bull" becomes @deva[औक्ष] when not patronymic.

**Non-patronymic:**
@deva[औक्षं पटम्] "bull-related cloth"

**Patronymic:**
@deva[औक्ष्णः] (from @deva[उक्षन्]) — @deva[अ] deleted by @ref[6.4.135]`,

  "64174": `@deva[दाण्डिनायनहास्तिनायन...] — Irregular forms:

| Stem | Derivative | Notes |
|------|-----------|-------|
| @deva[दण्डिन्] | @deva[दाण्डिनायनः] | @deva[इन्] not deleted |
| @deva[हस्तिन्] | @deva[हास्तिनायनः] | @deva[इन्] not deleted |
| @deva[अथर्वन्] | @deva[अथर्वणिकः] | @deva[अन्] not deleted |
| @deva[जिह्माशिन्] | @deva[जैह्माशिनेयः] | @deva[इन्] not deleted |
| @deva[वासिन्] | @deva[वाशिनायनिः] | @deva[इन्] not deleted |
| @deva[भ्रूणहन्] | @deva[भ्रौणहत्यम्] | @deva[त्] for @deva[न्] |
| @deva[धीवन्] | @deva[धैवत्यम्] | @deva[त्] for @deva[न्] |
| @deva[सरयू] | @deva[सारवः] | @deva[अयू] deleted |
| @deva[इक्ष्वाकु] | @deva[ऐक्ष्वाकः] | @deva[उ] deleted |
| @deva[मित्रयु] | @deva[मैत्रेयः] | @deva[यु] deleted |
| @deva[हिरण्य] | @deva[हिरण्मयः] | @deva[य] deleted |`,

  "64175": `@deva[छन्दसि च] — Vedic irregular forms:

| Stem | Form | Notes |
|------|------|-------|
| @deva[ऋतु] | @deva[ऋत्व्यम्] | @deva[उ] → @deva[व्] |
| @deva[वास्तु] | @deva[वास्त्व्यम्] | @deva[उ] → @deva[व्] |
| @deva[वस्तु] | @deva[वास्त्वः] | @deva[उ] → @deva[व्] |
| @deva[मधु] | @deva[माध्वी] | @deva[उ] → @deva[व्] |
| @deva[हिरण्य] | @deva[हिरण्ययः] | @deva[म] of @deva[मयट्] deleted |

These Vedic forms show irregular vowel changes.

This concludes pāda 6.4 on aṅga operations.`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.4.101-175)`);
console.log(`Total entries: ${Object.keys(data).length}`);
