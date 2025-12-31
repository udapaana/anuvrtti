#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "73001": `@deva[देविकाशिंशपादित्यवाड्दीर्घसत्रश्रेयसामात्] — Before @deva[ञित्], @deva[णित्], or @deva[कित्] taddhita affixes, @deva[आ] replaces the expected @deva[वृद्धि] for the first vowel of:

| Word | Derivative | Meaning |
|------|-----------|---------|
| @deva[देविका] | @deva[दाविकम्] | "produced at Devikā" |
| @deva[शिंशपा] | @deva[शांशपम्] | "made of śiṃśapā wood" |
| @deva[दित्यवाट्] | @deva[दात्यवाटकः] | "from Dityavāṭ" |
| @deva[दीर्घसत्र] | @deva[दार्घसत्रिकः] | "relating to dīrghasatra" |
| @deva[श्रेयस्] | @deva[श्रायसम्] | "relating to śreyas" |

In compounds like @deva[पूर्वदेविका], the second member also takes @deva[आ]: @deva[पूर्वदाविकः].`,

  "73002": `@deva[केकयमित्त्रयुप्रलयानां यादेरियः] — In @deva[केकय], @deva[मित्रयु], and @deva[प्रलय], the expected @deva[वृद्धि] is replaced by @deva[इय्] before the @deva[य्/व्]:

| Base | Derivative | Process |
|------|-----------|---------|
| @deva[केकय] | @deva[कैकेयः] | @deva[ऐ] inserted before @deva[य्] |
| @deva[मित्रेयु] | @deva[मैत्रेयिका] | @deva[ऐ] inserted before @deva[य्] |

This applies before @deva[ञित्], @deva[णित्], or @deva[कित्] taddhita affixes.`,

  "73003": `@deva[न य्वाभ्यां पदान्ताभ्याम् पूर्वौ तु ताभ्यामैच्] — When a word ends in @deva[य्] or @deva[व्], @deva[वृद्धि] is not substituted for the first vowel before @deva[ञित्/णित्/कित्] taddhita affixes. Instead:
- @deva[ऐ] is placed before final @deva[य्]
- @deva[औ] is placed before final @deva[व्]

| Base | Derivative | Rule |
|------|-----------|------|
| @deva[व्यसन] | @deva[वैयसनम्] | @deva[ऐ] before @deva[य्] |
| @deva[व्याकरण] | @deva[वैयाकरणः] | @deva[ऐ] before @deva[य्] |
| @deva[स्वश्व] | @deva[सौवश्वः] | @deva[औ] before @deva[व्] |`,

  "73004": `@deva[द्वारादीनां च] — The @deva[द्वारादि] class follows @ref[7.3.3]: @deva[ऐ/औ] is inserted before final @deva[य्/व्] instead of @deva[वृद्धि]:

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[द्वार] | @deva[दौवारिकः] | "doorkeeper" |
| @deva[द्वारपाल] | @deva[दौवारपालम्] | "relating to doorkeeper" |
| @deva[स्वर] | @deva[सौवरः] | "treatise on accents" |
| @deva[व्यल्कश] | @deva[वैयल्कशः] | "born at Vyalkaśa" |`,

  "73005": `@deva[न्यग्रोधस्य च केवलस्य] — When @deva[न्यग्रोध] stands alone (not in compound), @deva[ऐ] is placed before its @deva[य्] before @deva[ञित्/णित्/कित्] taddhita:
- @deva[नैयग्रोधश्चमसः] "a cup made of banyan wood"

But in compound: @deva[न्यग्रोधमूलाः] (no change, since @deva[न्यग्रोध] is not alone).`,

  "73006": `@deva[न कर्मव्यतिहारे] — The rules @ref[7.3.3] and @ref[7.3.4] do not apply when the word expresses reciprocal action (@deva[कर्मव्यतिहार]):
- @deva[व्यावक्रोशी] "mutually reviling"
- @deva[व्यावलेखी] "mutually scratching"
- @deva[व्याववर्त्ती] "mutually turning"
- @deva[व्यावहासी] "mutually laughing"`,

  "73007": `@deva[स्वागतादीनां च] — The @deva[स्वागतादि] class is exempt from @ref[7.3.3]:

| Word | Derivative | Meaning |
|------|-----------|---------|
| @deva[स्वागत] | @deva[स्वागतिकः] | "one who says 'welcome'" |
| @deva[स्वध्वर] | @deva[स्वाध्वरिकः] | "conducting one's own sacrifice" |
| @deva[स्वाङ्ग] | @deva[स्वाङ्गिः] | "son of Svāṅga" |
| @deva[व्यवहार] | @deva[व्यावहारिकः] | "relating to transactions" |`,

  "73008": `@deva[श्वादेरिञि] — Compounds beginning with @deva[श्वन्] (a @deva[द्वारादि] word) do not follow @ref[7.3.4] before @deva[इञ्]:
- @deva[श्वभस्त्र] → @deva[श्वाभस्त्रिः] "descendant of Śvabhastra"
- @deva[श्वदंष्ट्र] → @deva[श्वादंष्ट्रिः] "descendant of Śvadaṃṣṭra"

Vārtika: This extends to any taddhita beginning with @deva[इ].`,

  "73009": `@deva[पदान्तस्यान्यतरस्याम्] — The compound @deva[श्वपद] optionally follows @ref[7.3.4]:
- @deva[श्वापदम्] or @deva[शौवापदम्] "relating to a wild beast"`,

  "73010": `@deva[उत्तरपदस्य] — **Adhikāra**: From here through @ref[7.3.31], @deva[वृद्धि] applies to the first vowel of the **second member** of a compound before @deva[ञित्/णित्/कित्] taddhita affixes.

Examples:
- @deva[पूर्ववार्षिकम्] "relating to the first rainy season"
- @deva[अपरवार्षिकम्] "relating to the latter rainy season"`,

  "73011": `@deva[अवयवादृतोः] — When preceded by a word denoting a part/portion, the first vowel of a season-word gets @deva[वृद्धि]:

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[पूर्ववर्ष] | @deva[पूर्ववार्षिकम्] | "of the early rains" |
| @deva[पूर्वहेमन्त] | @deva[पूर्वहैमनम्] | "of early winter" |
| @deva[अपरवर्ष] | @deva[अपरवार्षिकम्] | "of the late rains" |`,

  "73012": `@deva[सुसर्वार्धाज्जनपदस्य] — After @deva[सु], @deva[सर्व], or @deva[अर्ध], the first vowel of a country-name gets @deva[वृद्धि]:
- @deva[सुपञ्चाल] → @deva[सुपाञ्चालकः] "good Pāñcāla person"
- @deva[सर्वपञ्चाल] → @deva[सर्वपाञ्चालकः] "all Pāñcāla"
- @deva[अर्धपञ्चाल] → @deva[अर्धपाञ्चालकः] "half of Pāñcāla"`,

  "73013": `@deva[दिशोऽमद्राणाम्] — After a direction-word, country-names (except @deva[मद्र]) get @deva[वृद्धि] on the second member:
- @deva[पूर्वपाञ्चालकः] "eastern Pāñcāla person"
- @deva[अपरपाञ्चालकः] "western Pāñcāla person"
- @deva[दक्षिणपाञ्चालकः] "southern Pāñcāla person"

Exception: @deva[मद्र] remains unchanged.`,

  "73014": `@deva[प्राचां ग्रामनगराणाम्] — In compound names of Eastern villages/cities, the second member gets @deva[वृद्धि] after a direction-word:
- @deva[पूर्वैषुकामशमः] "of East-Iṣukāmaśama"
- @deva[पूर्वपाटलिपुत्रकः] "of East-Pāṭaliputra"
- @deva[पूर्वकान्यकुब्जः] "of East-Kānyakubja"

@deva[प्राचाम्] here means "of the Eastern region," not "Eastern grammarians."`,

  "73015": `@deva[संख्यायाः संवत्सरसंख्यस्य च] — After a numeral, both @deva[संवत्सर] and another numeral get @deva[वृद्धि]:
- @deva[द्विसांवत्सरिकः] "hired/served for two years"
- @deva[त्रिसांवत्सरिकः] "hired for three years"
- @deva[द्विषाष्टिकः] "relating to two sixties"`,

  "73016": `@deva[वर्षस्याभविष्यति] — After a numeral, @deva[वर्ष] gets @deva[वृद्धि] when **not** referring to future time:
- @deva[द्विवार्षिकः] "hired/past for two years"
- @deva[त्रिवार्षिकः] "hired/past for three years"

But for future meaning: @deva[द्वैवर्षिकः] "calculated to last two years" (regular @deva[वृद्धि] on first member too).`,

  "73017": `@deva[परिमाणान्तस्यासंज्ञाशाणयोः] — After a numeral, measure-words (except @deva[शाण]) get @deva[वृद्धि] on the second member, unless the result is a proper name:
- @deva[द्विकौडविकः] "requiring two kuḍavas"
- @deva[द्विसौवर्णिकम्] "bought for two suvarṇas"
- @deva[त्रिसौवर्णिकम्] "bought for three suvarṇas"`,

  "73018": `@deva[जे प्रोष्ठपदानाम्] — The second member of @deva[प्रोष्ठपद] (a nakṣatra name) gets @deva[वृद्धि] before a taddhita meaning "born under that asterism":
- @deva[प्रोष्ठपादः माणवकः] "a boy born under Proṣṭhapadā"`,

  "73019": `@deva[हृद्भगसिन्ध्वन्ते पूर्वपदस्य च] — In compounds ending in @deva[हृद्], @deva[भग], or @deva[सिन्धु], **both** members get @deva[वृद्धि]:

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[सुहृद्] | @deva[सौहार्दम्] | "friendship" |
| @deva[सुभग] | @deva[सौभाग्यम्] | "good fortune" |
| @deva[दुर्भग] | @deva[दौर्भाग्यम्] | "misfortune" |
| @deva[सुभगा] | @deva[सौभागिनेयः] | "son of a fortunate woman" |`,

  "73020": `@deva[अनुशतिकादीनां च] — The @deva[अनुशतिकादि] class gets @deva[वृद्धि] on both members:

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[अनुशतिका] | @deva[आनुशातिकम्] | "relating to Anuśatikā" |
| @deva[अनुहोड] | @deva[आनुहौडिकः] | "following Hoḍa" |
| @deva[अनुसंवरण] | @deva[आनुसांवरणम्] | "given after covering" |
| @deva[अङ्गारवेणु] | @deva[आंगारवैणवः] | "son of Aṅgāraveṇu" |`,

  "73021": `@deva[देवताद्वन्द्वे च] — In dvandva compounds of deity names (relating to hymns or offerings), both members get @deva[वृद्धि]:
- @deva[अग्निमरुत्] → @deva[आग्निमारुतम्] "offering to Agni and Maruts"
- @deva[अग्निमरुत्] → @deva[अग्निमारुती] "hymn to Agni and Maruts"

But not in: @deva[स्कन्दविशाख] → @deva[स्कान्दविशाखः] (not a hymn/offering dvandva).`,

  "73022": `@deva[नेन्द्रस्य परस्य] — When @deva[इन्द्र] is the second member of a deity-dvandva, its first vowel does **not** get @deva[वृद्धि]:
- @deva[सोमेन्द्र] → @deva[सौमेन्द्रः] (not @deva[सौमैन्द्रः])
- @deva[अग्नीन्द्र] → @deva[आग्नेन्द्रः]

But when @deva[इन्द्र] is first: @deva[इन्द्राग्नि] → @deva[ऐन्द्राग्नम्] (both get @deva[वृद्धि]).`,

  "73023": `@deva[दीर्घाच्च वरुणस्य] — When @deva[वरुण] is preceded by a long vowel in a deity-dvandva, it does not get @deva[वृद्धि]:
- @deva[इन्द्रावरुण] → @deva[ऐन्द्रावरुणम्] (not @deva[ऐन्द्रावारुणम्])
- @deva[मित्रावरुण] → @deva[मैत्रावरुणम्]

But after short vowel: @deva[अग्निवरुण] → @deva[आग्निवारुणीम्].`,

  "73024": `@deva[प्राचां नगरान्ते] — In Eastern city names ending in @deva[नगर], both members get @deva[वृद्धि]:
- @deva[सुह्मनगर] → @deva[सौह्मनागरः] "of Suhmanagara"
- @deva[पुण्ड्रनगर] → @deva[पौण्ड्रनागरः]

But not Northern cities: @deva[मद्रनगर] → @deva[माद्रनगरः] (only first member).`,

  "73025": `@deva[जङ्गलधेनुवलजान्तस्य विभाषितमुत्तरम्] — Compounds ending in @deva[जङ्गल], @deva[धेनु], or @deva[बलज] get @deva[वृद्धि] on the first member; optionally on the second:
- @deva[कौरुजङ्गलम्] or @deva[कौरुजाङ्गलम्]
- @deva[वैश्वधेनवम्] or @deva[वैश्वधैनवम्]
- @deva[सौवर्णवलजः] or @deva[सौवर्णवालजः]`,

  "73026": `@deva[अर्धात् परिमाणस्य पूर्वस्य तु वा] — After @deva[अर्ध], measure-words get @deva[वृद्धि] on the second member; optionally on @deva[अर्ध] itself:
- @deva[अर्धद्रौणिकम्] or @deva[आर्धद्रौणिकम्]
- @deva[अर्धकौडविकम्] or @deva[आर्धकौडविकम्]

But non-measure words: @deva[आर्धक्रोशिकम्] only (compulsory @deva[वृद्धि] on @deva[अर्ध]).`,

  "73027": `@deva[नातः परस्य] — When the second member (a measure-word after @deva[अर्ध]) begins with short @deva[अ], it does **not** get @deva[वृद्धि]; @deva[अर्ध] optionally does:
- @deva[अर्धप्रस्थिकः] or @deva[आर्धप्रस्थिकः] (not @deva[प्रास्थिकः])
- @deva[अर्धकंसिकः] or @deva[आर्धकंसिकः]

But: @deva[आर्धकौडविकः] (second member has @deva[उ], not @deva[अ]).`,

  "73028": `@deva[प्रवाहणस्य ढे] — Before @deva[ढ] (@deva[एय]), @deva[प्रवाहण] gets @deva[वृद्धि] on the second member; optionally on @deva[प्र]:
- @deva[प्रवाहणेयः] or @deva[प्रावाहणेयः] "descendant of Pravāhaṇa"`,

  "73029": `@deva[तत्प्रत्ययस्य च] — When a further @deva[ञित्/णित्/कित्] taddhita is added to @deva[प्रवाहणेय/प्रावाहणेय], the same optional @deva[वृद्धि] pattern continues:
- @deva[प्रवाहणेयिः] or @deva[प्रावाहणेयिः]
- @deva[प्रवाहणेयकम्] or @deva[प्रावाहणेयकम्]`,

  "73030": `@deva[नञः शुचीश्वरक्षेत्रज्ञकुशलनिपुणानाम्] — After negative @deva[नञ्], the words @deva[शुचि], @deva[ईश्वर], @deva[क्षेत्रज्ञ], @deva[कुशल], and @deva[निपुण] always get @deva[वृद्धि]; the negative particle optionally does:

| Compound | Options |
|----------|---------|
| @deva[अशुचि] | @deva[अशौचम्] or @deva[आशौचम्] |
| @deva[अनीश्वर] | @deva[अनैश्वर्यम्] or @deva[आनैश्वर्यम्] |
| @deva[अक्षेत्रज्ञ] | @deva[अक्षैत्रज्ञ्यम्] or @deva[आक्षैत्रज्ञ्यम्] |
| @deva[अकुशल] | @deva[अकौशलम्] or @deva[आकौशलम्] |`,

  "73031": `@deva[यथातथयथापुरयोः पर्यायेण] — In @deva[यथातथ] and @deva[यथापुर], @deva[वृद्धि] applies to **either** the negative particle **or** the compound (not both):
- @deva[आयथातथ्यम्] or @deva[अयाथातथ्यम्]
- @deva[आयथापुर्यम्] or @deva[अयाथापुर्यम्]`,

  "73032": `@deva[हनस्तोऽचिण्णलोः] — @deva[त्] replaces @deva[न्] of @deva[हन्] before @deva[ञित्/णित्] affixes that cause @deva[वृद्धि], but **not** before @deva[चिण्] (aorist) or @deva[णल्] (perfect):
- @deva[घातः] (with @deva[घञ्])
- @deva[घातयति] (with @deva[णिच्])
- @deva[घातकः] (with @deva[ण्वुल्])

But: @deva[अहानि] (aorist), @deva[जघान] (perfect) — no @deva[त्] substitution.`,

  "73033": `@deva[आतो युक् चिण्कृतोः] — Roots ending in @deva[आ] take augment @deva[युक्] (@deva[य्]) before @deva[चिण्] (aorist) and @deva[णित्/ञित्] kṛt affixes:
- @deva[दा] → @deva[अदायि] (aorist), @deva[दायकः] (with @deva[ण्वुल्])
- @deva[धा] → @deva[अधायि], @deva[धायकः]

But not before @deva[लिट्]: @deva[ददौ], @deva[दधौ].`,

  "73034": `@deva[नोदात्तोपदेशस्य मान्तस्यानाचमेः] — Roots ending in @deva[म्] that are @deva[उदात्त]-accented in the Dhātupāṭha do **not** get @deva[वृद्धि] before @deva[चिण्/णित्/ञित्] (except @deva[चम्] after @deva[आ]):
- @deva[अशमि], @deva[अतमि], @deva[अदमि] (aorist)
- But: @deva[आचामयति] (@deva[आ] + @deva[चम्] does get @deva[वृद्धि])`,

  "73035": `@deva[जनिवध्योश्च] — @deva[जन्] and @deva[वध्] do **not** get @deva[वृद्धि] before @deva[चिण्] and @deva[णित्/ञित्] kṛt affixes:
- @deva[अजनि] (aorist), @deva[जनकः] (with @deva[ण्वुल्])
- @deva[अवधि] (aorist), @deva[वधकः]

Note: @deva[वध्] is a separate root, not the substitute of @deva[हन्] (which gives @deva[घातकः]).`,

  "73036": `@deva[अर्तिह्रीव्लीरीक्नूयीक्ष्माय्यातां पुङ्णौ] — Before @deva[णि] (causative), these roots and roots ending in @deva[आ] take augment @deva[पुक्] (@deva[प्]):

| Root | Causative |
|------|-----------|
| @deva[ऋ] | @deva[अर्पयति] |
| @deva[ह्री] | @deva[ह्रेपयति] |
| @deva[व्ली] | @deva[व्लेपयति] |
| @deva[री] | @deva[रेपयति] |
| @deva[क्नूय्] | @deva[क्नोपयति] |
| @deva[क्ष्माय्] | @deva[क्ष्मापयति] |
| @deva[दा] | @deva[दापयति] |
| @deva[धा] | @deva[धापयति] |`,

  "73037": `@deva[शाच्छासाह्वाव्यावेपां युक्] — Before @deva[णि] (causative), these roots take augment @deva[युक्] (@deva[य्]):

| Root | Causative |
|------|-----------|
| @deva[शा] | @deva[शाययति] |
| @deva[छा] | @deva[छाययति] |
| @deva[सा] | @deva[साययति] |
| @deva[ह्वा] | @deva[ह्वाययति] |
| @deva[वे] | @deva[वाययति] |
| @deva[पा] | @deva[पाययति] |`,

  "73038": `@deva[वो विधुजोर्लुङ्लिट्कृञ्वज्र्योः] — Root @deva[ओ] (@deva[वि] + @deva[धु]) takes augment @deva[वुक्] (@deva[व्]) before @deva[लुङ्] (aorist), @deva[लिट्] (perfect), and before roots @deva[कृञ्] and @deva[वज्र]:
- @deva[विधुनोति] → @deva[व्यधूवत्] (aorist), @deva[विदधुवे] (perfect)`,

  "73039": `@deva[लिङ्सिचोरात्मनेपदेषु] — In @deva[लिङ्] (optative) and after @deva[सिच्] (aorist sign) in ātmanepada, the @deva[ओ] of @deva[विधु] takes @deva[वुक्]:
- @deva[विधुनुवीत] (optative)
- @deva[व्यधोष्ट] (s-aorist ātmanepada)`,

  "73040": `@deva[वाऽन्यत्र] — Elsewhere (other than the contexts in @ref[7.3.38-39]), @deva[विधु] optionally takes @deva[वुक्]:
- @deva[विधुनुयात्] or @deva[विधुनूयात्]`,

  "73041": `@deva[शेर्लिटि निष्ठायां च] — @deva[शी] "to lie" takes @deva[वुक्] (@deva[व्]) before @deva[लिट्] (perfect) and @deva[निष्ठा] (@deva[क्त/क्तवतु]):
- @deva[शिश्ये] → @deva[शिश्यिवे] (perfect)
- @deva[शयितः] → @deva[शयिवान्] (but @deva[शयित] without @deva[वुक्] by option)`,

  "73042": `@deva[अश्नोतेश्च] — @deva[अश्] "to eat" (5th class) takes @deva[वुक्] before @deva[लिट्] and @deva[निष्ठा]:
- @deva[आनश्वान्] (perfect participle)
- @deva[अशिवान्] (with @deva[क्तवतु])`,

  "73043": `@deva[रेफवदूहोर्भयोर्वा] — @deva[ऊह्] optionally treats its vowel like @deva[ऋ] (i.e., takes @deva[वुक्]) before @deva[लिट्] and @deva[निष्ठा]:
- @deva[ऊहिवान्] or @deva[ऊढवान्]
- @deva[ऊहाञ्चक्रे] or @deva[ऊढाञ्चक्रे]`,

  "73044": `@deva[ण्यासश्रन्थो युच्] — Before @deva[णि] (causative), @deva[अस्] "to throw" and @deva[श्रन्थ्] "to loosen" take augment @deva[युच्] (@deva[य्]):
- @deva[अस्] → @deva[आसयति]
- @deva[श्रन्थ्] → @deva[श्रथयति] (with optional @deva[न्] loss)`,

  "73045": `@deva[उग्रश्चेः] — @deva[चि] "to collect" takes @deva[उक्] augment (@deva[उ]) before @deva[णि] (causative):
- @deva[चि] → @deva[चयति] then → @deva[चाययति]

The @deva[उक्] creates the stem @deva[चय] to which causative @deva[णि] is added.`,

  "73046": `@deva[भावकर्मणोश्च णिचश्चित्तविकारे यलोपे कृते] — When @deva[य्] is elided (from @deva[युक्] augment) in bhāva/karma constructions with @deva[णिच्], the @deva[उक्] applies to @deva[चि]:
- @deva[चाय्यते] → @deva[चाय्यते] (passive of causative)

This applies when the causative expresses mental modification.`,

  "73047": `@deva[समां चोर्ध्वे] — When @deva[सम्] is prefixed and the meaning is "upward collection," @deva[चि] takes @deva[उक्] before @deva[णि]:
- @deva[सं] + @deva[चि] + @deva[णि] → @deva[संचाययति] "causes to collect upward"`,

  "73048": `@deva[लियः सम्माने] — @deva[ली] "to cling" takes @deva[उक्] augment before @deva[णि] when meaning "to honor":
- @deva[ली] → @deva[लाययति] "causes to honor"

But in other meanings: @deva[लापयति].`,

  "73049": `@deva[णेरणौ यः] — Before @deva[अण्] (not @deva[णिच्]), @deva[ली] takes @deva[य्] (from previous @deva[युक्]):
- @deva[ली] + @deva[अण्] → @deva[लयः] "dissolution, absorption"`,

  "73050": `@deva[ठस्येकः] — @deva[इ] replaces @deva[ठ] of taddhita affixes:
- @deva[ठक्] → @deva[इक] (as in @deva[वार्षिक])
- @deva[ठञ्] → @deva[इक] (as in @deva[पाञ्चालिक])

This is a general substitution rule for all @deva[ठ]-initial taddhita affixes.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.3.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
