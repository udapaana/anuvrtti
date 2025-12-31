#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "64051": `@deva[णिलोपो झलि] — The @deva[इ] of @deva[णि] (causative) is deleted before an @deva[आर्धधातुक] affix that lacks @deva[इट्] augment.

**Examples:**
| Causative stem | + Affix | Result |
|----------------|---------|--------|
| @deva[कारि] | @deva[क्त] | @deva[कारितम्] (has @deva[इट्]) |
| @deva[कारि] | @deva[तृच्] | @deva[कारणा] |
| @deva[कारि] | @deva[यक्] | @deva[कार्यते] |

**Before @deva[सार्वधातुक]:** @deva[कारयति], @deva[हारयति] — @deva[णि] retained.`,

  "64052": `@deva[णेरनिटि] — @deva[णि] is deleted before @deva[क्त/क्तवतु] when they take the @deva[इट्] augment.

**Examples:**
@deva[कारितम्] "caused to be done"
@deva[हारितम्] "caused to be taken"
@deva[गणितम्] "counted"

**Exception:** @deva[संज्ञापितः] — @deva[ज्ञप्] does not take @deva[इट्] (@ref[7.2.15]), so @deva[णि] is retained.

The @deva[सेटि] condition ensures @deva[इट्] is added first, then @deva[णि] is deleted.`,

  "64053": `@deva[मन्त्रे जनितृ] — In mantras, @deva[जनिता] "begetter" is formed irregularly by deleting @deva[णि] before @deva[तृ] with @deva[इट्].

**Vedic:** @deva[यो नः पिता जनिता] "who is our father, our begetter"

**Classical:** @deva[जनयिता] (regular form with @deva[णि] retained)`,

  "64054": `@deva[क्रतौ शमितृ] — In sacrificial contexts, @deva[शमिता] "one who prepares/quiets" irregularly deletes @deva[णि] before @deva[इट्]-augmented @deva[तृ].

**Sacrificial:** @deva[शृतं हविः शमितः] "O preparer, the oblation is cooked"

**Non-sacrificial:** @deva[शमयितः] (regular)`,

  "64055": `@deva[आमन्ताल्यायितूष्णुषु] — @deva[अय्] replaces @deva[इ] of @deva[णि] before these affixes:

| Affix | Example |
|-------|---------|
| @deva[आम्] | @deva[कारयां चकार] |
| @deva[अन्त] | @deva[गण्डयन्तः], @deva[मण्डयन्तः] |
| @deva[आलु] | @deva[स्पृहयालुः] |
| @deva[आय्य] | @deva[स्पृहयाय्यः] |
| @deva[इत्नु] | @deva[स्तनयित्नुः] |
| @deva[इष्णु] | @deva[पोषयिष्णुः] |

This @deva[अय्] substitution enables the next rule.`,

  "64056": `@deva[ल्यपि लघुपूर्वात्] — @deva[अय्] replaces @deva[इ] of @deva[णि] before @deva[ल्यप्] when the preceding vowel is light (@deva[लघु]).

**Light vowel → @deva[अय्]:**
@deva[प्रशमय्य] "having caused to be quiet"
@deva[संदमय्य] "having subdued"
@deva[प्रगणय्य] "having counted"

**Long vowel → @deva[णि] deletion (@ref[6.4.51]):**
@deva[प्रपात्य] (from @deva[पातयति])`,

  "64057": `@deva[आपश्च विभाषा] — After @deva[आप्] "obtain," @deva[अय्] optionally replaces @deva[इ] of @deva[णि] before @deva[ल्यप्].

**Both forms valid:**
@deva[प्रापय्य] or @deva[प्राप्य] "having caused to obtain"

Does not apply to @deva[आप्] as substitute for @deva[इङ्] (@ref[6.1.48]).`,

  "64058": `@deva[युप्लुवोर्दीर्घश्छन्दसि] — In Vedic, @deva[यु] and @deva[प्लु] lengthen their @deva[उ] before @deva[ल्यप्].

**Vedic:**
@deva[वियूय] "having separated"
@deva[परिप्लूय] "having floated around"

**Classical:**
@deva[संयुत्य], @deva[आप्लुत्य] (short @deva[उ])`,

  "64059": `@deva[क्षियः] — @deva[क्षि] "perish" lengthens its @deva[इ] before @deva[ल्यप्].

**Examples:**
@deva[प्रक्षीय] "having perished"
@deva[उपक्षीय] "having destroyed"`,

  "64060": `@deva[णिग्न्यतां क्ते] — @deva[क्षि] lengthens its @deva[इ] before @deva[क्त] when not having @deva[ण्यत्]-force (passive potential).

**Active sense (lengthening):**
@deva[आक्षीणः] "perished"
@deva[प्रक्षीणः] "destroyed"
@deva[परिक्षीणः] "exhausted"

**@deva[ण्यत्]-force (no lengthening):**
@deva[अक्षितम्] "imperishable" — potential/passive meaning`,

  "64061": `@deva[शापाभिप्रीण्यन्यतरस्याम्] — @deva[क्षि] optionally lengthens before @deva[क्त] when meaning "curse" or "miserable condition."

**Both forms:**
@deva[क्षितायुः] or @deva[क्षीणायुः] "may his life perish" (curse)
@deva[क्षितकः] or @deva[क्षीणकः] "wretched one"

**Non-curse/non-misery (obligatory lengthening):**
@deva[क्षीणश्चन्द्रः] "the waning moon"`,

  "64062": `@deva[स्यसिसीयुट्तासिषु चिण्वत्] — Before @deva[स्य], @deva[सिच्], @deva[सीयुट्], and @deva[तासि] in passive/impersonal, vowel-final roots (plus @deva[हन्], @deva[ग्रह्], @deva[दृश्]) optionally follow @deva[चिण्] patterns.

This triggers:
1. @deva[वृद्धि] (@ref[7.2.116])
2. @deva[युक्] augment (@ref[7.3.33])
3. @deva[हन्] → @deva[घ] (@ref[7.3.54])
4. @deva[मित्] roots optionally lengthen (@ref[6.4.93])
5. @deva[णि] deletion (via @deva[असिद्ध] @deva[इट्])

**Examples:**
| Root | @deva[चिण्]-like | Regular |
|------|----------------|---------|
| @deva[चि] | @deva[चायिष्यते] | @deva[चेष्यते] |
| @deva[दा] | @deva[दायिष्यते] | @deva[दास्यते] |
| @deva[हन्] | @deva[घानिष्यते] | @deva[हनिष्यते] |
| @deva[ग्रह्] | @deva[ग्राहिष्यते] | @deva[ग्रहीष्यते] |
| @deva[दृश्] | @deva[दर्शिष्यते] | @deva[द्रक्ष्यते] |`,

  "64063": `@deva[दीङो युड्] — @deva[दीङ्] "decay" takes @deva[युट्] augment before @deva[आर्धधातुक] vowel-initial @deva[कित्/ङित्] affixes.

**Examples:**
@deva[उपदिदीये] (perfect 3rd sg.)
@deva[उपदिदीयाते] (perfect 3rd dual)
@deva[उपदिदीयिरे] (perfect 3rd pl.)

This augment prevents unwanted semivowel substitution (@ref[6.4.82]).`,

  "64064": `@deva[आतो लोपि टि च] — Final @deva[आ] of a root is deleted before:
1. @deva[आर्धधातुक] affixes with @deva[इट्]
2. @deva[आर्धधातुक] vowel-initial @deva[कित्/ङित्] affixes

**With @deva[इट्]:**
@deva[पपिथ] "you drank" (perfect 2nd sg.)
@deva[तस्थिथ] "you stood"

**Vowel-initial @deva[कित्/ङित्]:**
@deva[पपतुः], @deva[पपुः] (perfect 3rd dual/pl.)
@deva[तस्थतुः], @deva[तस्थुः]

**Before @deva[सार्वधातुक]:** @deva[यान्ति], @deva[वान्ति] — no deletion`,

  "64065": `@deva[यत्यदः] — Final @deva[आ] of an @deva[अङ्ग] becomes @deva[ई] before @deva[यत्] (potential passive participle).

**Examples:**
@deva[दा] → @deva[देयम्] "to be given"
@deva[धा] → @deva[धेयम्] "to be placed"
@deva[हा] → @deva[हेयम्] "to be abandoned"
@deva[स्था] → @deva[स्थेयम्] "to be stood upon"

@deva[गुण] applies by @ref[7.3.84]: @deva[ई] → @deva[ए].`,

  "64066": `@deva[घुमास्थागापाजहातिसां हलि] — @deva[घु]-class roots (@deva[दा/धा]) and @deva[मा/स्था/गा/पा/हा/सा] replace final @deva[आ] with @deva[ई] before consonant-initial @deva[कित्/ङित्] @deva[आर्धधातुक] affixes.

**With @deva[यक्] (passive):**
@deva[दीयते] "is given"
@deva[धीयते] "is placed"
@deva[मीयते] "is measured"
@deva[स्थीयते] "is stood"
@deva[गीयते] "is sung"
@deva[पीयते] "is drunk"
@deva[हीयते] "is abandoned"

**With @deva[यङ्] (intensive):**
@deva[देदीयते], @deva[वेघीयते]

**Before vowel-initial:** @deva[ददतुः], @deva[ददुः] — @deva[आ] deleted instead (@ref[6.4.64])`,

  "64067": `@deva[लिङ्याशिष्यङ्] — @deva[घु]-class and @deva[मास्थागापाहासा] roots replace @deva[आ] with @deva[ए] in the benedictive active (@deva[आशीर्लिङ्]).

**Examples:**
@deva[देयात्] "may he give"
@deva[धेयात्] "may he place"
@deva[मेयात्] "may he measure"
@deva[स्थेयात्] "may he stand"
@deva[गेयात्] "may he sing"
@deva[पेयात्] "may he drink"

**@deva[आत्मनेपद]:** @deva[दासीष्ट], @deva[धासीष्ट] — different affixes, no @deva[ए] substitution`,

  "64068": `@deva[अन्यस्य संयोगादेर्विभाषा] — Other roots (not in @ref[6.4.66]) with initial consonant cluster optionally replace @deva[आ] with @deva[ए] in benedictive active.

**Optional:**
@deva[ग्लेयात्] or @deva[ग्लायात्] "may he be weary"
@deva[म्लेयात्] or @deva[म्लायात्] "may he wither"

**@deva[स्था] — obligatory @deva[ए] (by @ref[6.4.66]):**
@deva[स्थेयात्] only

**No initial cluster — no option:**
@deva[यायात्] (from @deva[या])`,

  "64069": `@deva[न ल्यपि] — @deva[घु]-class and @deva[मास्थागापाहासा] roots do not replace @deva[आ] with @deva[ई] before @deva[ल्यप्].

**Examples:**
@deva[प्रदाय] "having given"
@deva[प्रधाय] "having placed"
@deva[प्रमाय] "having measured"
@deva[प्रस्थाय] "having stood"
@deva[प्रगाय] "having sung"
@deva[प्रपाय] "having drunk"
@deva[प्रहाय] "having abandoned"

The @deva[ल्यप्] is @deva[कित्] by @ref[1.1.56], but this rule blocks @deva[ई] substitution.`,

  "64070": `@deva[इको मायो विभाषा] — @deva[मा] "measure" (@deva[मयति]) optionally replaces @deva[आ] with @deva[इ] before @deva[ल्यप्].

**Both forms:**
@deva[अपमित्य] or @deva[अपमाय] "having measured off"`,

  "64071": `@deva[लुङ्लङ्लृङ्क्ष्वडुदात्तः] — @deva[अट्] (with @deva[उदात्त] accent) augments the verbal stem in aorist (@deva[लुङ्]), imperfect (@deva[लङ्]), and conditional (@deva[लृङ्]).

**Examples:**
| Tense | Example |
|-------|---------|
| Aorist | @deva[अकार्षीत्], @deva[अहार्षीत्] |
| Imperfect | @deva[अकरोत्], @deva[अहरत्] |
| Conditional | @deva[अकरिष्यत्], @deva[अहरिष्यत्] |

This is the past-tense augment @deva[अ]-prefix.`,

  "64072": `@deva[आडजादीनाम्] — @deva[आट्] (with @deva[उदात्त] accent) augments vowel-initial stems in aorist, imperfect, and conditional.

**Examples:**
@deva[इक्ष्] → @deva[ऐक्षिष्ट], @deva[ऐक्षत], @deva[ऐक्षिष्यत]
@deva[उभ्ज्] → @deva[औब्जीत्], @deva[औब्जत्], @deva[औब्जिष्यत्]
@deva[ईह्] → @deva[ऐहिष्ट], @deva[ऐहत], @deva[ऐहिष्यत्]

@deva[वृद्धि] occurs by @ref[6.1.90]: @deva[आ] + @deva[इ] → @deva[ऐ], @deva[आ] + @deva[उ] → @deva[औ].`,

  "64073": `@deva[छन्दस्युभयथा] — In Vedic, @deva[आट्] appears even before consonant-initial roots.

**Vedic examples:**
@deva[आवः] (aorist of @deva[वृ])
@deva[आनक्] (aorist of @deva[नश्])
@deva[आयुनक्] (imperfect of @deva[युज्])`,

  "64074": `@deva[न माङ्योगे] — With the prohibitive particle @deva[मा], the augment @deva[अट्/आट्] is not added.

**Examples:**
@deva[मा भवान् कार्षीत्] "may you not do"
@deva[मा भवान् हार्षीत्] "may you not take"
@deva[मा स्म करोत्] "let him not do"
@deva[मा भवान् ईक्षिष्ट] "may you not see"`,

  "64075": `@deva[छन्दसि विभाषा] — In Vedic, the augment @deva[अट्/आट्] is variously applied or omitted.

**Augment omitted without @deva[मा]:**
@deva[जनिष्ठा उग्रः] "may he be born mighty"
@deva[कामम् ऊनयीत्] "may he diminish the desire"

**Augment retained with @deva[मा]:**
@deva[मा वः क्षेत्रे परबीजान्यवाप्सुः] "may others' seeds not be sown in your field"`,

  "64076": `@deva[इरयोश्छन्दसि] — In Vedic, @deva[रे] optionally replaces @deva[इरे] (perfect 3rd plural @deva[आत्मनेपद]).

**Vedic:**
@deva[दध्रे] (for @deva[दधिरे]) "they placed"
@deva[परिदध्रे] "they placed around"

**Or regular:**
@deva[चक्रिरे] "they made"`,

  "64077": `@deva[इकोऽचि विभक्तौ] — Before vowel-initial affixes, @deva[इ/ई] and @deva[उ/ऊ] of roots (and @deva[श्नु]) become @deva[इय्/उव्]:

**@deva[श्नु] (class 5 marker):**
@deva[आप्नुवन्ति], @deva[राध्नुवन्ति], @deva[शक्नुवन्ति]

**Root-final @deva[इ/ई]:**
@deva[चिक्षियतुः] (perfect of @deva[क्षि])
@deva[नियौ], @deva[नियः] (from @deva[नी])

**Root-final @deva[उ/ऊ]:**
@deva[लुलुवतुः], @deva[लुलुवुः] (perfect of @deva[लू])
@deva[भ्रुवौ], @deva[भ्रुवः] (from @deva[भ्रू])

**Before consonants:** @deva[आप्नुयात्], @deva[शक्नुयात्] — no change`,

  "64078": `@deva[अभ्यासस्याविषमे] — Reduplicative @deva[इ/उ] becomes @deva[इव्/उव्] before a non-homogeneous vowel.

**Before non-homogeneous vowel:**
@deva[इयेष] (perfect of @deva[इष्])
@deva[उवोष] (perfect of @deva[वस्])
@deva[इयर्ति] (from @deva[ऋ])

**Before homogeneous vowel:**
@deva[ईषतुः], @deva[ईषुः] — no @deva[इयङ्]
@deva[ऊषतुः], @deva[ऊषुः] — no @deva[उवङ्]`,

  "64079": `@deva[स्त्रियाः] — @deva[स्त्री] "woman" replaces @deva[ई] with @deva[इय्] before vowel-initial affixes.

**Examples:**
@deva[स्त्रियौ] (dual)
@deva[स्त्रियः] (plural)

**But:** @deva[स्त्रीणाम्] — @deva[न्] augment (@ref[7.1.54]) supersedes this rule`,

  "64080": `@deva[अमि च] — @deva[स्त्री] optionally replaces @deva[ई] with @deva[इय्] before accusative @deva[अम्] and @deva[शस्].

**Both forms valid:**
@deva[स्त्रीम्] or @deva[स्त्रियम्] (acc. sg.)
@deva[स्त्रीः] or @deva[स्त्रियः] (acc. pl.)`,

  "64081": `@deva[इणो गा लुङि] — @deva[इण्] "go" (@deva[एति]) replaces @deva[इ] with semivowel @deva[य्] before vowel-initial affixes.

**Examples:**
@deva[यन्ति] "they go"
@deva[यन्तु] "let them go"
@deva[आयन्] "they went" (imperfect)

This supersedes @deva[इयङ्] but is itself superseded by @deva[गुण/वृद्धि]: @deva[अयनम्], @deva[आयकः].`,

  "64082": `@deva[एरनेकाच उपदेशेऽत्संयोगपूर्वस्य] — In polysyllabic stems where final @deva[इ/ई] is not preceded by a root-internal cluster, the semivowel @deva[य्] substitutes before vowel-initial affixes.

**Semivowel substitution:**
@deva[निन्यतुः], @deva[निन्युः] (from @deva[नी] with prefix @deva[नि])
@deva[उन्न्यौ], @deva[उन्न्यः] (from @deva[नी] with @deva[उत्])
@deva[ग्रामण्यौ], @deva[ग्रामण्यः] (from @deva[ग्रामणी])

**@deva[इयङ्] applies when:**
- Monosyllabic: @deva[नी] → @deva[नियौ], @deva[नियः]
- Cluster precedes: @deva[यवक्री] → @deva[यवक्रियौ], @deva[यवक्रियः]
- Non-@deva[गति]/@deva[कारक] first member: @deva[परमनी] → @deva[परमनियौ]`,

  "64083": `@deva[ऊदुपधाया गोः] — Polysyllabic stems ending in root-final @deva[ऊ] (not preceded by root-internal cluster) replace @deva[ऊ] with @deva[व्] before vowel-initial case affixes.

**Semivowel substitution:**
@deva[खलपू] → @deva[खलप्वौ], @deva[खलप्वः] "sweeper"
@deva[शतसू] → @deva[शतस्वौ], @deva[शतस्वः] "bearing a hundred"

**@deva[उवङ्] applies when:**
- Before tense-affixes: @deva[लुलुवतुः], @deva[लुलुवः]
- Monosyllabic: @deva[लू] → @deva[लुवौ], @deva[लुवः]
- Cluster precedes: @deva[कटप्रू] → @deva[कटप्रुवौ], @deva[कटप्रुवः]`,

  "64084": `@deva[वर्षाभुवश्च] — @deva[वर्षाभू] "rain-born herb" also takes @deva[व्] for @deva[ऊ] before vowel-initial case affixes.

**Examples:**
@deva[वर्षाभ्वौ] (dual)
@deva[वर्षाभ्वः] (plural)

Vt: Also after @deva[दृन्], @deva[कार], @deva[पुनर्]:
@deva[दृन्भ्वौ], @deva[पुनर्भ्वौ], @deva[कारभ्वौ]`,

  "64085": `@deva[न भूसुधियोः] — Stems ending in @deva[भू] and @deva[सुधी] do not take semivowel substitution; they use @deva[इयङ्/उवङ्] instead.

**@deva[भू]-ending stems:**
@deva[प्रतिभु] → @deva[प्रतिभुवौ], @deva[प्रतिभुवः]

**@deva[सुधी]:**
@deva[सुधियौ], @deva[सुधियः]`,

  "64086": `@deva[छन्दस्युभयथा] — In Vedic, @deva[भू]-stems and @deva[सुधी] show both semivowel and @deva[इयङ्/उवङ्] forms.

**Vedic variation:**
@deva[विभ्वम्] or @deva[विभुवम्]
@deva[सुध्यः] or @deva[सुधियः]`,

  "64087": `@deva[ह्वावेट्] — @deva[हु] "sacrifice" and @deva[श्नु] (class 5 marker) replace @deva[उ] with @deva[व्] before vowel-initial @deva[सार्वधातुक] affixes in polysyllabic stems without preceding cluster.

**@deva[हु] (with reduplication):**
@deva[जुह्वति] "they sacrifice"
@deva[जुह्वतु] "let them sacrifice"
@deva[अजुह्वन्] "they sacrificed"

**@deva[सु] + @deva[श्नु]:**
@deva[सुन्वन्ति], @deva[सुन्वन्तु], @deva[असुन्वन्]

**Before @deva[आर्धधातुक]:** @deva[जुहुवतुः], @deva[जुहुवुः] (perfect) — uses @deva[उवङ्]`,

  "64088": `@deva[भुवो वुक्] — @deva[भू] "become" takes @deva[वुक्] (= @deva[व्]) augment before vowel-initial aorist and perfect affixes.

**Aorist:**
@deva[अभूवन्], @deva[अभूवम्]

**Perfect:**
@deva[बभूव], @deva[बभूवतुः], @deva[बभूवुः]`,

  "64089": `@deva[ऊदुपधाया गोः] — @deva[गुह्] (becoming @deva[गोह्] after @deva[गुण]) replaces penultimate @deva[ओ] with @deva[ऊ] before vowel-initial affixes.

**Examples:**
@deva[निगूहति] "conceals"
@deva[निगूहकः] "concealer"
@deva[निगूहम्] "concealment"

**Before consonant-initial:** @deva[निगोढा], @deva[निगोढुम्] — no change

**Perfect:** @deva[निजुगुहतुः], @deva[निजुगुहुः] — different stem form`,

  "64090": `@deva[दोषो णौ] — @deva[दुष्] (becoming @deva[दोष्] after @deva[गुण]) replaces @deva[ओ] with @deva[ऊ] before causative @deva[णि].

**Example:**
@deva[दूषयति] "corrupts, spoils"

**Non-causative:** @deva[दोषो वर्तते] "there is a fault" — no change`,

  "64091": `@deva[विभाषा चित्तविरागे] — @deva[दोष्] optionally replaces @deva[ओ] with @deva[ऊ] before @deva[णि] when meaning "mental disturbance."

**Both forms (for mental context):**
@deva[चित्तं दूषयति] or @deva[चित्तं दोषयति] "disturbs the mind"

**Physical/concrete (obligatory @deva[ऊ]):**
@deva[साधनं दूषयति] "spoils the instrument"`,

  "64092": `@deva[मितां ह्रस्वः] — @deva[मित्]-class roots retain short penultimate before causative @deva[णि].

**Examples (causative stems):**
@deva[घटयति] (from @deva[घट्])
@deva[व्यथयति] (from @deva[व्यथ्])
@deva[जनयति] (from @deva[जन्])
@deva[रजयति] (from @deva[रज्])
@deva[शमयति] (from @deva[शम्])
@deva[ज्ञपयति] (from @deva[ज्ञा])

The @deva[मित्] roots are @deva[घटादि] (Bhvādi 800-873) and @deva[अम्]-ending roots like @deva[शम्], @deva[तम्].`,

  "64093": `@deva[चिणो लुक् च] — @deva[मित्] roots optionally lengthen before @deva[चिण्] (passive aorist 3rd sg.) and @deva[णमुल्].

**@deva[चिण्] (both forms):**
@deva[अशमि] or @deva[अशामि] "was quieted"
@deva[अतमि] or @deva[अतामि] "was exhausted"

**@deva[णमुल्] (both forms):**
@deva[शमं शमम्] or @deva[शामं शामम्] "quieting again and again"

The causative of causative (@deva[शंशमयति]) also shows this option: @deva[अशंशमि] or @deva[अशंशामि].`,

  "64094": `@deva[णेः खचि] — The causative stem shortens its penultimate before @deva[खच्] affix.

**Examples:**
@deva[द्विषन्तपः] "tormenting enemies"
@deva[परंतपः] "tormenting others"
@deva[पुरंदरः] "city-destroyer" (Indra)

See @ref[3.2.29], @ref[3.2.41] for @deva[खच्] usage.`,

  "64095": `@deva[ह्लादेर्निष्ठायाम्] — @deva[ह्लाद्] "refresh" shortens its penultimate in causative before @deva[क्त/क्तवतु] (and @deva[क्तिन्]).

**Examples:**
@deva[प्रह्लन्नः] "refreshed" (not *@deva[प्रह्लादितः])
@deva[प्रह्लन्नवान्]
@deva[प्रह्लत्तिः] (with @deva[क्तिन्])

**Non-@deva[निष्ठा]:** @deva[प्रह्लादयति] — long retained`,

  "64096": `@deva[छादेर्घोर्द्व्युपसर्गस्य] — @deva[छद्] (Churādi causative) shortens before @deva[घ] affix when not preceded by two or more prefixes.

**One prefix (short):**
@deva[उरश्छदः] "chest-covering"
@deva[प्रच्छदः] "covering"
@deva[दन्तच्छदः] "lip" (tooth-covering)

**Two+ prefixes (long):**
@deva[समुपच्छादः]
@deva[समुपातिच्छादः]`,

  "64097": `@deva[इस्मन्त्रन्क्वौ] — @deva[छद्] shortens before @deva[इस्], @deva[मन्], @deva[त्रन्], and @deva[क्वि] affixes.

**Examples:**
@deva[छदिस्] "covering" (@deva[इस्])
@deva[छद्मन्] "disguise, fraud" (@deva[मन्])
@deva[छत्रम्] "umbrella" (@deva[त्रन्])
@deva[धामच्छत्], @deva[उपच्छत्] (@deva[क्वि])`,

  "64098": `@deva[गमजनखनघसां लोपोऽक्ङित्याम्] — @deva[गम्], @deva[जन्], @deva[खन्], @deva[घस्] delete their root vowel before vowel-initial @deva[कित्/ङित्] affixes (except aorist @deva[अङ्]).

**Vowel deletion:**
@deva[जग्मतुः], @deva[जग्मुः] (perfect of @deva[गम्])
@deva[जघ्नतुः], @deva[जघ्नुः] (perfect of @deva[हन्])
@deva[जज्ञे], @deva[जज्ञाते], @deva[जज्ञिरे] (perfect of @deva[जन्])
@deva[चख्नतुः], @deva[चख्नुः] (perfect of @deva[खन्])
@deva[जक्षतुः], @deva[जक्षुः] (perfect of @deva[घस्])

**Exceptions:**
- Non-@deva[कित्/ङित्]: @deva[गमनम्], @deva[हननम्]
- Aorist @deva[अङ्]: @deva[अगमत्], @deva[अघसत्]
- Consonant-initial: @deva[गम्यते], @deva[हन्यते]`,

  "64099": `@deva[तनिपत्योश्छन्दसि] — In Vedic, @deva[तन्] and @deva[पत्] delete their vowel before vowel-initial @deva[कित्/ङित्] affixes.

**Vedic:**
@deva[वितत्निरे] "they stretched" (for @deva[वितेनिरे])
@deva[पप्तिमः] "we fell" (for @deva[पेतिमः])

**Classical:**
@deva[वितेनिरे], @deva[पेतिम]`,

  "64100": `@deva[घसिभसोर्हलि च] — In Vedic, @deva[घस्] and @deva[भस्] delete their vowel before any @deva[कित्/ङित्] affix (including consonant-initial).

**Vedic examples:**
@deva[सग्धिः] "eating together" (from @deva[घस्] + @deva[क्तिन्])
@deva[बब्धाम्] "let them chew" (imperative of @deva[भस्])
@deva[बप्सति] "they chew" (present of @deva[भस्])

**Derivation of @deva[सग्धिः]:**
@deva[समान] + @deva[घस्] + @deva[क्तिन्] → @deva[स] + @deva[घ्] + @deva[ति] → @deva[सग्धिः]

**Non-@deva[कित्/ङित्]:** @deva[अंशून् बभस्ति] "he chews portions"`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.4.51-100)`);
console.log(`Total entries: ${Object.keys(data).length}`);
