#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "84001": `@deva[रषाभ्यां नो णः समानपदे] — **@[ṇatva] Rule**: Within the same word (@[samānapada]), @deva[न्] becomes @deva[ण्] after @deva[र्] or @deva[ष्].

| After | Example |
|-------|---------|
| @deva[र्] | @deva[आस्तीर्णम्], @deva[विस्तीर्णम्] |
| @deva[ष्] | @deva[कृष्णाति], @deva[पुष्णाति] |

This is the fundamental retroflexion rule for nasals.`,

  "84002": `@deva[अट्कुप्वाङ्नुम्व्यवायेऽपि] — **Interveners Allowed**: @deva[न्] → @deva[ण्] occurs even when these intervene between @deva[र्/ष्] and @deva[न्]:

| Intervener | Example |
|------------|---------|
| @[aṭ] (vowels, @deva[ह्य्व्र्]) | @deva[करणम्], @deva[हरणम्] |
| @[ku] (gutturals) | @deva[अर्कण] |
| @[pu] (labials) | @deva[अर्पण] |
| @deva[आङ्] | @deva[प्रायण] |
| @deva[नुम्] (augment) | @deva[वृत्रहणम्] |`,

  "84003": `@deva[पूर्वपदात् संज्ञायामगः] — **In Compound Names**: When the prior member contains @deva[र्/ष्], the @deva[न्] of the latter member becomes @deva[ण्]—but only if forming a proper name, and not after @deva[ग्]-final.

@deva[द्रुणसः] (a name), @deva[शूर्पणखा] (the demoness).

But: @deva[वृत्रघ्न] (not a name → no change).`,

  "84004": `@deva[वनं पुरगामिश्रकासिध्रकाशारिकाकोटराग्रेभ्यः] — **@deva[वन] in Names**: The @deva[न्] of @deva[वन] "forest" becomes @deva[ण्] when preceded by @deva[पुरगा], @deva[मिश्रका], @deva[सिध्रका], @deva[शारिका], @deva[कोटरा], or @deva[अग्रे] in compound names.

@deva[पुरगावणम्], @deva[मिश्रकावणम्], @deva[अग्रेवणम्].`,

  "84005": `@deva[प्रनिरन्तःशरेक्षुप्लक्षाम्रकार्ष्यखदिरपीयूक्षाभ्यो ऽसंज्ञायामपि] — **@deva[वन] Always**: After @deva[प्र], @deva[निर्], @deva[अन्तर्], @deva[शर], @deva[इक्षु], @deva[प्लक्ष], @deva[आम्र], @deva[कार्ष्य], @deva[खदिर], @deva[पीयूक्षा], the @deva[न्] of @deva[वन] becomes @deva[ण्] even when @b[not] a name.

@deva[प्रवणम्], @deva[निर्वणम्], @deva[शरवणम्], @deva[इक्षुवणम्].`,

  "84006": `@deva[विभाषौषधिवनस्पतिभ्यः] — **Optional for Plant Terms**: When the prior member denotes a medicinal herb (@[oṣadhi]) or tree (@[vanaspati]), the @deva[न्] of @deva[वन] optionally becomes @deva[ण्].

@deva[आम्रवणम्] or @deva[आम्रवनम्].`,

  "84007": `@deva[अह्नो ऽदन्तात्] — **@deva[अहन्] "day"**: The @deva[न्] of @deva[अहन्] becomes @deva[ण्] when preceded by an @deva[अ]-final word containing @deva[र्/ष्].

@deva[पूर्वाह्णः] "forenoon", @deva[अपराह्णः] "afternoon."

But: @deva[निरह्नः], @deva[दुरह्नः] (not @deva[अ]-final).`,

  "84008": `@deva[वाहनमाहितात्] — **@deva[वाहन] "vehicle"**: The @deva[न्] of @deva[वाहन] becomes @deva[ण्] when the prior member denotes the thing @b[carried] (आहित).

@deva[इक्षुवाहणम्] "sugarcane-cart" (carries sugarcane).

But: @deva[इक्षुवाहनम्] "cart made of sugarcane" (not carried).`,

  "84009": `@deva[पानं देशे] — **@deva[पान] in Country Names**: When forming a country/people name, @deva[पान] "drinking" takes @deva[ण्] if the prior member has @deva[र्/ष्].

@deva[क्षीरपाणाः उशीनराः] "the milk-drinking Uśīnaras."`,

  "84010": `@deva[वा भावकरणयोः] — **@deva[पान] Optional Elsewhere**: For @deva[भाव] (state) or @deva[करण] (instrument) meanings, @deva[पान] optionally takes @deva[ण्].

@deva[क्षीरपाणम्] or @deva[क्षीरपानम्] "milk-drinking."`,

  "84011": `@deva[प्रातिपदिकान्तनुम्विभक्तिषु च] — **Stem-Final/@deva[नुम्]/Case Endings**: @deva[न्] in these positions optionally becomes @deva[ण्] when the prior compound member has @deva[र्/ष्]:

| Position | Example |
|----------|---------|
| Stem-final | @deva[माषवापिणौ]/वापिनौ] |
| @deva[नुम्] | @deva[प्राञ्चण्]/प्राञ्चन्] |
| Case ending | @deva[ब्राह्मणान्]/णाण्] (rare) |`,

  "84012": `@deva[एकाजुत्तरपदे णः] — **Monosyllabic Second Member**: When the second member is monosyllabic, @deva[न्] @b[always] becomes @deva[ण्] (no option) after @deva[र्/ष्] in the first member.

@deva[वृत्रहणः] "Vṛtra-slayer", @deva[क्षीरपाणि] "milk-drinkers."`,

  "84013": `@deva[कुमति च] — **Guttural in Second Member**: When the second member contains a guttural (@[ku]), @deva[न्] becomes @deva[ण्] after @deva[र्/ष्] in the first member.

@deva[सूकरखण्डम्] (with @deva[ख्]).`,

  "84014": `@deva[उपसर्गादसमासे ऽपि णोपदेशस्य] — **@deva[ण्]-Initial Roots after Preverbs**: Roots listed with initial @deva[ण्] in the Dhātupāṭha take @deva[ण्] after preverbs with @deva[र्/ष्], even without compounding.

@deva[प्रणमति] "bows", @deva[परिणमति] "transforms."`,

  "84015": `@deva[हिनुमीना] — **@deva[हिनु]/मीना]**: After preverbs with @deva[र्/ष्], the @deva[न्] in @deva[हि + नु] (@[śnu]-class) and @deva[मी + ना] (@[krī]-class) becomes @deva[ण्].

@deva[प्रहिणोति] "sends forth", @deva[प्रमीणाति] "destroys."`,

  "84016": `@deva[आनि लोट्] — **Imperative @deva[-आनि]**: The @deva[न्] of first-person imperative @deva[-आनि] becomes @deva[ण्] after preverbs with @deva[र्/ष्].

@deva[प्रवपाणि] "let me sow", @deva[परियाणि] "let me go around."`,

  "84017": `@deva[नेर् गद...देग्धिषु च] — **@deva[नि] after Preverbs**: The @deva[न्] of prefix @deva[नि] becomes @deva[ण्] after preverbs with @deva[र्/ष्] before specific verbs:

@deva[गद्] "speak", @deva[नद्] "roar", @deva[पत्] "fall", @deva[पद्] "go", @[ghu] verbs (@deva[मा], @deva[हन्], @deva[या], @deva[वा], @deva[द्रा], etc.), @deva[वप्], @deva[वह्], @deva[शम्], @deva[चि], @deva[दिह्].

@deva[प्रणिगदति], @deva[प्रणिपतति].`,

  "84018": `@deva[शेषे विभाषा ऽकखादावषान्त उपदेशे] — **Optional for Other Verbs**: For other verbs (not beginning with @deva[क्/ख्] and not ending in @deva[ष्]), the @deva[नि] → @deva[णि] change is optional.

@deva[प्रणिवर्तते] or @deva[प्रनिवर्तते].`,

  "84019": `@deva[अनितेः] — **@deva[अन्] "breathe"**: The @deva[न्] of @deva[अन्] becomes @deva[ण्] after preverbs with @deva[र्/ष्].

@deva[प्राणिति] "breathes", @deva[पराणिति].`,

  "84020": `@deva[अन्तः] — **Word-Final @deva[अन्]**: Even at word-end (@[pada]-final), @deva[अन्]'s @deva[न्] becomes @deva[ण्] after preverbs.

@deva[हे प्राण्!] "O breath!" (vocative).`,

  "84021": `@deva[उभौ साभ्यासस्य] — **Reduplicated @deva[अन्]**: In reduplicated forms of @deva[अन्], @b[both] @deva[न्]s become @deva[ण्].

@deva[प्राणिणिषति] (desiderative), @deva[प्राणिणत्] (causal aorist).`,

  "84022": `@deva[हन्तेरत्पूर्वस्य] — **@deva[हन्] with @deva[अ]**: In @deva[हन्], @deva[न्] preceded by @deva[अ] becomes @deva[ण्] after preverbs.

@deva[प्रहण्यते] "is struck", @deva[परिहणनम्] "killing."

But: @deva[प्रघ्नन्ति] (अ elided → no ण्).`,

  "84023": `@deva[वमोर्वा] — **Optional before @deva[व्/म्]**: Before @deva[व्] or @deva[म्], the @deva[न्] of @deva[हन्] optionally becomes @deva[ण्].

@deva[प्रहण्वः] or @deva[प्रहन्वः], @deva[प्रहण्मः] or @deva[प्रहन्मः].`,

  "84024": `@deva[अन्तरदेशे] — **@deva[अन्तर्] + @deva[हन्] (Non-Country)**: After @deva[अन्तर्], @deva[हन्]'s @deva[न्] (preceded by @deva[अ]) becomes @deva[ण्] when not denoting a country.

@deva[अन्तर्हण्यते] "is struck internally."

But: @deva[अन्तर्हननी देशः] "a country" (no change).`,

  "84025": `@deva[अयनं च] — **@deva[अयन] after @deva[अन्तर्]**: Similarly, @deva[अयन] takes @deva[ण्] after @deva[अन्तर्] when not a country name.

@deva[अन्तरयणम्] "internal path."`,

  "84026": `@deva[छन्दस्यृदवग्रहात्] — **Vedic after Short @deva[ऋ]**: In Vedas, @deva[न्] becomes @deva[ण्] after short @deva[ऋ] even across a @[padapāṭha] word-boundary.

@deva[नृमणाः] (from @deva[नृ-मनाः] in Padapāṭha).`,

  "84027": `@deva[नश्च धातुस्थोरुषुभ्यः] — **Pronoun @deva[नस्] in Vedas**: The @deva[न्] of @deva[नस्] "us" becomes @deva[ण्] after roots with @deva[र्/ष्], or after @deva[उरु] or @deva[सु].

@deva[रक्षाणः] (Ṛg. VII.15.13), @deva[उरुणस्कृधि] (Ṛg. VIII.75.11).`,

  "84028": `@deva[उपसर्गाद् बहुलम्] — **@deva[नस्] after Preverbs**: After preverbs with @deva[र्/ष्], the @deva[न्] of @deva[नस्] variously becomes @deva[ण्].

@deva[प्रणः शूद्रः] — but sometimes: @deva[प्र नो मुञ्चतम्].`,

  "84029": `@deva[कृत्यचः] — **@[kṛt] + Vowel**: A @[kṛt] affix's @deva[न्] (preceded by a vowel) becomes @deva[ण्] after preverbs with @deva[र्/ष्].

Affixes: @deva[-अन], @deva[-मान], @deva[-अनीय], @deva[-अनि], @deva[-इनि].

@deva[प्रकरणम्], @deva[प्रक्रियमाणः], @deva[प्रकरणीयम्].`,

  "84030": `@deva[णेर्विभाषा] — **Causal @[kṛt] Optional**: For @[kṛt] affixes after causatives (@deva[णि]-derivatives), the @deva[न्] → @deva[ण्] is optional.

@deva[प्रयापणम्] or @deva[प्रयापनम्], @deva[प्रयाप्यमाणम्] or @deva[प्रयाप्यमानम्].`,

  "84031": `@deva[हलश्च इजुपधात्] — **Consonant-Initial + @[ij] Penultimate**: For verbs beginning with a consonant and having @[ij] (@deva[इ/उ]) as penultimate, @[kṛt]'s @deva[न्] optionally → @deva[ण्].

@deva[प्रकोपणम्] or @deva[प्रकोपनम्] (from @deva[कुप्]).`,

  "84032": `@deva[इजादेः सनुमः] — **Vowel-Initial + @[num] + Consonant-Final**: For verbs beginning with @[ij], containing @[num], and ending in a consonant, @[kṛt]'s @deva[न्] → @deva[ण्].

@deva[प्रवेपणम्] (from @deva[विप्] with @[num]).`,

  "84033": `@deva[वा निंसनिक्षनिन्दाम्] — **Three Roots Optional**: For @deva[निंस्] "kiss", @deva[निक्ष्] "pierce", @deva[निन्द्] "blame", the @deva[न्] → @deva[ण्] is optional after preverbs.

@deva[प्रणिंसनम्] or @deva[प्रनिंसनम्].`,

  "84034": `@deva[न भाभूपूकमिगमिप्यायीवेपाम्] — **Seven Root Exceptions**: For @deva[भा] "shine", @deva[भू] "be", @deva[पू] "purify", @deva[कम्] "desire", @deva[गम्] "go", @deva[प्याय्] "swell", @deva[वेप्] "tremble", no @deva[ण्]-change in @[kṛt] affixes.

@deva[प्रभानम्] (not *प्रभाणम्), @deva[प्रभवनम्].`,

  "84035": `@deva[षात्पदान्तात्] — **No @deva[ण्] after @[pada]-Final @deva[ष्]**: When @deva[ष्] is word-final (@[pada]-final), the following @deva[न्] does @b[not] become @deva[ण्].

@deva[निष्पानम्], @deva[दुष्पानम्] (not *निष्पाणम्).`,

  "84036": `@deva[नशेः षान्तस्य] — **@deva[नश्] Ending in @deva[ष्]**: When @deva[नश्] "destroy" ends in @deva[ष्] (after @deva[श्] → @deva[ष्]), its @deva[न्] does not become @deva[ण्].

@deva[प्रनष्टः], @deva[परिनष्टः] (not *प्रणष्टः).`,

  "84037": `@deva[पदान्तस्य] — **No @deva[ण्] for @[pada]-Final @deva[न्]**: Word-final @deva[न्] does not become @deva[ण्].

@deva[वृक्षान्] (acc. pl.), @deva[अरीन्], @deva[गिरीन्] — all retain @deva[न्].`,

  "84038": `@deva[पदव्यवायेऽपि] — **@[pada] Intervenes**: When an entire word intervenes between @deva[र्/ष्] and @deva[न्], no @deva[ण्]-change.

@deva[माष-कुम्भ-वापेन] — @deva[कुम्भ] intervenes, so no ण्.`,

  "84039": `@deva[क्षुभ्नादिषु च] — **@deva[क्षुभ्ना] Class**: In @deva[क्षुभ्नाति] and similar forms, @deva[न्] does not become @deva[ण्].

@deva[क्षुभ्नाति], @deva[नृनमनः], @deva[नन्दिन्] — all exceptions.`,

  "84040": `@deva[स्तोः श्चुना श्चुः] — **@[ścu]-Sandhi**: When @deva[स्] or dentals (@deva[त्]-class) contact @deva[श्] or palatals (@deva[च्]-class), they become @deva[श्]/palatals.

| Before | After |
|--------|-------|
| @deva[स् + श्] | @deva[श्श्] |
| @deva[त् + च्] | @deva[च्च्] |
| @deva[न् + ज्] | @deva[ञ्ज्] |

@deva[रामश्शेते], @deva[तच्च], @deva[सज्जनः].`,

  "84041": `@deva[ष्टुना ष्टुः] — **@[ṣṭu]-Sandhi**: When @deva[स्] or dentals contact @deva[ष्] or retroflexes (@deva[ट्]-class), they become @deva[ष्]/retroflexes.

| Before | After |
|--------|-------|
| @deva[स् + ष्] | @deva[ष्ष्] |
| @deva[त् + ट्] | @deva[ट्ट्] |
| @deva[न् + ड्] | @deva[ण्ड्] |

@deva[वृक्षष्षण्डे], @deva[तट्टीका], @deva[खण्डः].`,

  "84042": `@deva[न पदान्ताट्टोरनाम्] — **Exception for @[pada]-Final @deva[ट्]**: After word-final @deva[ट्], dentals do @b[not] become retroflexes—except for the ending @deva[-नाम्].

@deva[श्वलिट्साये] (no change), but @deva[श्वलिण्णाम्] (ण् in @deva[-नाम्]).`,

  "84043": `@deva[तोः षि] — **No Retroflex before @deva[ष्]**: Dentals do not become retroflexes when @deva[ष्] follows (only before @[ṭu]).

@deva[अग्निचित्षण्डे] (त् stays).`,

  "84044": `@deva[शात्] — **No Palatal after @deva[श्]**: Dentals do not become palatals when preceded by @deva[श्].

@deva[प्रश्नः] (from @deva[प्रश् + न])—त् stays dental.`,

  "84045": `@deva[यरो ऽनुनासिके ऽनुनासिको वा] — **Optional Nasalization**: Before a nasal, word-final @[yar] (consonants except @deva[ह्]) optionally becomes nasal.

| Without | With |
|---------|------|
| @deva[वाग्नयति] | @deva[वाङ्नयति] |
| @deva[अग्निचिद्नयति] | @deva[अग्निचिन्नयति] |`,

  "84046": `@deva[अचो रहाभ्यां द्वे] — **Doubling after @deva[र्/ह्]**: After @deva[र्] or @deva[ह्] following a vowel, @[yar] consonants are doubled.

@deva[अर्क्कः], @deva[मर्क्कः], @deva[ब्रह्म्मा], @deva[अपह्न्नुते].`,

  "84047": `@deva[अनचि च] — **Doubling before Non-Vowel**: After a vowel and before a non-vowel, @[yar] is doubled.

@deva[दध्य् + अत्र] → @deva[दद्ध्यत्र], @deva[मद्ध्वत्र].`,

  "84048": `@deva[नादिन्याक्रोशे पुत्रस्य] — **No Doubling in Abuse**: In @deva[पुत्र] + @deva[आदिनी] when used as an insult, no doubling.

@deva[पुत्रादिनी] "son-eater" (abusive) — but @deva[पुत्त्रादिनी] when factual.`,

  "84049": `@deva[शरो ऽचि] — **No Sibilant Doubling before Vowel**: Sibilants (@deva[श्], @deva[ष्], @deva[स्]) are not doubled when a vowel follows.

@deva[कर्षति] (not *कर्ष्षति), @deva[वर्षति].`,

  "84050": `@deva[त्रिप्रभृतिषु शाकटायनस्य] — **Śākaṭāyana's View**: According to Śākaṭāyana, no doubling occurs when three or more consonants cluster.

@deva[इन्द्रः], @deva[चन्द्रः], @deva[राष्ट्रम्] (no doubling).`,

  "84051": `@deva[सर्वत्र शाकल्यस्य] — **Śākalya's View**: According to Śākalya, doubling never occurs anywhere.

@deva[अर्कः], @deva[मर्कः], @deva[ब्रह्मा] (all without doubling).`,

  "84052": `@deva[दीर्घादाचार्याणाम्] — **All Teachers: No Doubling after Long**: All teachers agree: no doubling after a long vowel.

@deva[दात्रम्], @deva[पात्रम्], @deva[मूत्रम्], @deva[सूत्रम्] (no doubling).`,

  "84053": `@deva[झलां जश् झशि] — **Voicing Assimilation**: Before @[jhaś] (voiced aspirate stops), @[jhal] (stops/sibilants) become @[jaś] (voiced unaspirated).

| Before | After |
|--------|-------|
| @deva[प् + ध्] | @deva[ब् + ध्] |
| @deva[क् + घ्] | @deva[ग् + घ्] |

@deva[लब्धा], @deva[दोग्धा], @deva[रुग्ण].`,

  "84054": `@deva[अभ्यासे चर्च] — **Reduplication: @[car] or @[jaś]**: In the reduplicative syllable (@[abhyāsa]), @[jhal] becomes either @[car] (voiceless unaspirated) or @[jaś] (voiced unaspirated).

| Root | Reduplicant |
|------|-------------|
| @deva[भू] | @deva[ब] (voiced) |
| @deva[धा] | @deva[द] (deaspirated) |
| @deva[पच्] | @deva[प] (voiceless) |`,

  "84055": `@deva[खरि च] — **Devoicing before @[khar]**: Before @[khar] (voiceless stops/sibilants), @[jhal] becomes @[car] (voiceless unaspirated).

@deva[भेत्ता] (from @deva[भिद् + ता]), @deva[युयुत्सते], @deva[आरिप्सते].`,

  "84056": `@deva[वा ऽवसाने] — **Optional at Pause**: At sentence-end (@[avasāna]), @[jhal] optionally becomes @[car].

@deva[वाक्] or @deva[वाग्] — both valid in final position.`,

  "84057": `@deva[अणो ऽप्रगृह्यस्यानुनासिकः] — **Optional Nasalization at Pause**: Non-@[pragṛhya] @[aṇ] vowels (@deva[अ], @deva[इ], @deva[उ]) at pause optionally become nasal.

@deva[हरे] or @deva[हरेँ] (vocative at sentence-end).`,

  "84058": `@deva[अनुस्वारस्य ययि परसवर्णः] — **Anusvāra Assimilation**: Before @[yay] (semivowels and stops), anusvāra becomes the homorganic nasal (@[parasavarṇa]).

| Before | Anusvāra → |
|--------|-----------|
| @deva[क्]-class | @deva[ङ्] |
| @deva[च्]-class | @deva[ञ्] |
| @deva[ट्]-class | @deva[ण्] |
| @deva[त्]-class | @deva[न्] |
| @deva[प्]-class | @deva[म्] |

@deva[संकल्प] = @deva[सङ्कल्प].`,

  "84059": `@deva[वा पदान्तस्य] — **Optional for Word-Final**: For word-final anusvāra before @[yay], the assimilation to @[parasavarṇa] is optional.

@deva[अहं करोमि] or @deva[अहङ्करोमि].`,

  "84060": `@deva[तोर्लि] — **@deva[त्/द्] → @deva[ल्] before @deva[ल्]**: @deva[त्] and @deva[द्] become @deva[ल्] before @deva[ल्].

@deva[तल्लोकः] (from @deva[तद् + लोकः]), @deva[उल्लेखः].`,

  "84061": `@deva[उदः स्थास्तम्भोः पूर्वस्य] — **@deva[उद्] + @deva[स्था]/स्तम्भ्]**: The @deva[द्] of @deva[उद्] becomes @deva[त्] before @deva[स्था] "stand" and @deva[स्तम्भ्] "prop."

@deva[उत्थानम्] (not *उद्स्थानम्), @deva[उत्तम्भ].`,

  "84062": `@deva[झयो होऽन्यतरस्याम्] — **Optional @deva[ह्] for @[jhay]**: @[jhay] (voiced non-nasal stops) optionally becomes @deva[ह्] before voiced consonants.

@deva[वाह्नयति] or @deva[वाग्नयति].`,

  "84063": `@deva[शश्छोऽटि] — **@deva[छ्] after @deva[श्]**: After @deva[श्], the following @deva[छ्] optionally assimilates (both @deva[श्छ] or @deva[श्श्]).

@deva[विश्छेदः] or @deva[विश्शेदः].`,

  "84064": `@deva[हलो यमां यमि लोपः] — **@[yam] Deletion**: Before another @[yam] (ङ्, ञ्, ण्, न्, म्, य्, र्, ल्, व्), a @[yam] following @[hal] is deleted.

@deva[उद्न्नयति] → @deva[उन्नयति].`,

  "84065": `@deva[झरो झरि सवर्णे] — **Homorganic @[jhar] Simplification**: When a @[jhar] (stop) is followed by a homorganic @[jhar], one is deleted.

@deva[मन्त्तव्यम्] → @deva[मन्तव्यम्].`,

  "84066": `@deva[अभ्यासकार्यं नित्यम्] — **Reduplication Changes Obligatory**: Operations on the reduplicative syllable are always obligatory, not optional.`,

  "84067": `@deva[नुम्विसर्जनीयशर्व्यवायेऽपि] — **Interveners for @deva[ण्]**: @deva[ण्]-change occurs even with @[num], visarga, or @[śar] intervening.

@deva[विष्टृण्णु] (despite @deva[ट्]).`,

  "84068": `@deva[आ कडारादेका संज्ञा] — **Final Sūtra**: From @deva[आ] to @deva[कडार], this constitutes one technical designation (@[saṃjñā]).

This is the final sūtra of the Aṣṭādhyāyī, completing the Tripādī section.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.4.1-68)`);
console.log(`Total entries: ${Object.keys(data).length}`);
