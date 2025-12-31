import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '33101': `@deva[इच्छा] — The form @deva[इच्छा] ("desire") is irregular.

Formation: @deva[इष् + श → इच्छ् + अ → इच्छा]. The irregularity is that @deva[यक्] (ordained by @ref[3.1.67]) is not added.

@note[By vārttika, other irregular forms include:]
| Word | Meaning |
|------|---------|
| @deva[परिसर्या] | perambulation |
| @deva[परिचर्या] | attendance, service |
| @deva[मृगया] | hunting |
| @deva[अटाट्या] | habit of roaming as a mendicant |

From @deva[जागृ]: either @deva[जागरा] (by @deva[अ]) or @deva[जागर्या] (by @deva[श]).`,

  '33102': `@deva[प्रत्ययान्ताद्धातोरा स्त्रियाम्] — The affix @deva[अ] applies after derivative roots (those ending in an affix) to form feminine nouns.

Derivative roots include Desideratives, Causatives, Intensives, and Denominatives — all called @deva[धातु] by @ref[3.1.32].

| Base | Derivative | + @deva[अ] | + @deva[टाप्] | Meaning |
|------|------------|-----------|--------------|---------|
| @deva[कृ] | @deva[चिकीर्ष्] (desiderative) | @deva[चिकीर्षा] (by @ref[6.4.48]) | @deva[चिकीर्षा] | desire to do |`,

  '33103': `@deva[गुरोश्च हलः] — The affix @deva[अ] applies after a root that has a prosodially heavy vowel and ends in a consonant, to form feminine nouns.

This debars @deva[क्तिन्].

| Root | Result | Meaning |
|------|--------|---------|
| @deva[कुण्ड्] | @deva[कुण्डा] | adulteress |
| @deva[हुण्ड्] | @deva[हुण्डा] | tigress |
| @deva[ईह्] | @deva[ईहा] | effort |
| @deva[ऊह्] | @deva[उहा] | supplying an ellipsis |

Why "heavy vowel"? @deva[भक्तिः] ("devotion") — light vowel.
Why "ends in consonant"? @deva[नीतिः] ("polity") — ends in vowel.`,

  '33104': `@deva[षिद्भिदादिभ्योऽण्] — The affix @deva[अण्] applies after roots marked with indicatory @deva[षि] and after the @deva[भिदादि] class, to form feminine nouns.

| Root | Result | Alternative | Meaning |
|------|--------|-------------|---------|
| @deva[जॄष्] (real root @deva[जॄ]) | @deva[जरा] (by @ref[7.4.16]) | — | old age |
| @deva[त्रपुष्] | @deva[त्रपा] | — | bashfulness |
| @deva[भिद्] | @deva[भिदा] | @deva[भित्तिः] | breaking |
| @deva[छिद्] | @deva[छिदा] | @deva[छित्तिः] | cutting |
| @deva[धृ] | @deva[धारा] | @deva[धृतिः] | stream |`,

  '33105': `@deva[चिन्त्यादिभ्यो युच्च] — Both @deva[अण्] and @deva[युच्] apply after @deva[चिन्त्], @deva[पूज्], @deva[कथ्], @deva[कुम्ब्], and @deva[चर्च्] to form feminine nouns.

All these are 10th class (Curādi) verbs that would exclusively take @deva[युच्] by @ref[3.3.107].

| Root | With @deva[अण्] | With @deva[युच्] | Meaning |
|------|----------------|-----------------|---------|
| @deva[चिन्त्] | @deva[चिन्ता] | @deva[चिन्तना] | thought |
| @deva[पूज्] | @deva[पूजा] | @deva[पूजना] | worship |
| @deva[कथ्] | @deva[कथा] | @deva[कथना] | narration |
| @deva[कुम्ब्] | @deva[कुम्बा] | — | covering, thick petticoat |
| @deva[चर्च्] | @deva[चर्चा] | — | learning |`,

  '33106': `@deva[आतो युच्] — The affix @deva[अण्] applies after roots ending in long @deva[आ] when an upasarga is in composition, to form feminine nouns.

This supersedes @deva[क्तिन्].

Examples: @deva[प्रदा], @deva[प्रधा], @deva[उपदा], @deva[उपधा].

@note[By vārttika, @deva[श्रत्] and @deva[अन्तर्] are treated like upasargas: @deva[श्रद्धा] ("faith"), @deva[अन्तर्धा] (by @ref[1.4.59]).]`,

  '33107': `@deva[णेरासश्रन्थो युच्] — The affix @deva[युच्] applies after:
1. Verbs ending in @deva[णि] (causatives)
2. @deva[आस्] ("to sit")
3. @deva[श्रन्थ्] ("to loosen")

This excludes @deva[अ] (@ref[3.1.102]).

| Formation | Result | Meaning |
|-----------|--------|---------|
| @deva[कृ + णिच् → कारि + युच्] | @deva[कारणा] (by @ref[6.4.51]) | causing to do |
| @deva[हृ + णिच् + युच्] | @deva[हारणा] | causing to take |
| @deva[आस् + युच्] | @deva[आसना] | sitting |
| @deva[श्रन्थ् + युच्] | @deva[श्रन्थना] | loosening |

@note[@deva[आस्या] is feminine of @deva[आस्य] formed by @deva[ण्यत्] + @deva[आस्] per @ref[3.1.124].]`,

  '33108': `@deva[रोगाख्यायां ण्वुल् बहुलम्] — The affix @deva[ण्वुल्] applies diversely after verbs when forming feminine nouns that are names of diseases.

This debars @deva[क्तिन्] and others. The word @deva[आख्या] ("name") indicates the result must be an appellation for the disease. The word "diversely" (@deva[बहुलम्]) shows the usual grammatical license.

| Example | Meaning |
|---------|---------|
| @deva[प्रच्छर्दिका] (by @ref[7.1.1]) | vomiting |
| @deva[प्रवाहिका] | diarrhea |
| @deva[विवर्चिका] | itch, scab |

Sometimes this affix doesn't apply: @deva[शिरोर्तिः] ("headache").

@note[By vārttika, @deva[ण्वुल्] also applies to names of games and collections.]`,

  '33109': `@deva[संज्ञायां ण्वुल्] — The affix @deva[ण्वुल्] applies after verbs when the word formed is an appellative (@deva[संज्ञा]).

| Example | Meaning |
|---------|---------|
| @deva[उद्दालकपुष्पभञ्जिका] | game of crushing uddālaka flowers (eastern districts) |
| @deva[वरणपुष्पप्रवाहिका] | a type of game |
| @deva[शालभञ्जिका] | — |
| @deva[तालभञ्जिका] | — |`,

  '33110': `@deva[आख्यानपरिप्रश्नयोश्च] — The affix @deva[इञ्] optionally applies after a root when question (@deva[परिप्रश्न]) and answer (@deva[आख्यान]) are expressed (along with @deva[ण्वुल्] and other affixes).

@note[In the compound @deva[आख्यानपरिप्रश्न], the logical order is inverted — @deva[आख्यान] comes first because words with fewer syllables precede in compounds (per @ref[2.2.34]).]

The @deva[च] draws in @deva[ण्वुल्] from the previous sūtra.`,

  '33111': `@deva[पर्यायार्होपनिदायेषु ण्वुच्] — The affix @deva[ण्वुच्] optionally applies after a root in the sense of:
1. Succession (@deva[पर्याय])
2. Merit (@deva[अर्ह])
3. Debt (@deva[ऋण])
4. Production (@deva[उत्पत्ति])

This supersedes @deva[क्तिन्] and other affixes.

| Sense | Example | Meaning |
|-------|---------|---------|
| Succession | @deva[भवतः शयिका] | your turn of sleeping |
| Merit | @deva[अर्हति भवान् इक्षुभक्षिकाम्] | you deserve a meal of sugar |
| Debt | @deva[इक्षुभक्षिकां मे धारयसि] | you owe me a sugar-meal |
| Production | — | — |`,

  '33112': `@deva[आक्रोशे नञ्यनिः] — The affix @deva[अनि] applies after a verb when @deva[नञ्] is in composition and the sense is "cursing" (@deva[आक्रोश]).

This supersedes @deva[क्तिन्] etc. No optionality applies here.

| Example | Meaning |
|---------|---------|
| @deva[अकरणिस्ते वृषल भूयात्] | May failure be upon thee, O sinner! |
| @deva[तस्याकरणिरेवास्तु] | May he be disappointed! |

Why "cursing"? Without cursing sense: @deva[अकृतिस्तस्य कटस्य] ("the non-making of his mat").
Why @deva[नञ्]? Without @deva[नञ्]: standard forms apply.`,

  '33113': `@deva[कृत्यल्युटो बहुलम्] — The affixes called @deva[कृत्य] (from @ref[3.1.95] @deva[कृत्याः प्राङ् ण्वुलः]) and @deva[ल्युट्] apply diversely with senses other than those previously taught.

The @deva[अनुवृत्ति] of "when denoting action" and "when not related as agent" (from @ref[3.3.18]-@ref[3.3.19]) ceases here.

"Diversely" means these affixes occur beyond their specifically ordained contexts. The @deva[कृत्य] affixes (ordained for "action to be done") and @deva[ल्युट्] can now apply more broadly.`,

  '33114': `@deva[नपुंसके भावे क्तः] — The affix @deva[क्त] applies after a root to express action, the word being neuter.

These are neuter abstract nouns:

| Example | Meaning |
|---------|---------|
| @deva[हसितम्] | laughter |
| @deva[जल्पितम्] | speech |
| @deva[शायितम्] | sleeping |
| @deva[गतम्] | going |
| @deva[स्थितम्] | standing |`,

  '33115': `@deva[ल्युट् च] — The affix @deva[ल्युट्] applies after a root to express the name of an action, the word being neuter.

| Example | Meaning |
|---------|---------|
| @deva[हसनं छात्रस्य] | the laughter of the student |
| @deva[शोभनम्] | beauty |
| @deva[जल्पनम्] | speech |
| @deva[शयनम्] | sleep |
| @deva[आसनम्] | seat |

This sūtra is separated from the previous to allow @deva[ल्युट्] alone (not @deva[क्त]) to continue in subsequent sūtras.`,

  '33116': `@deva[कर्मणि यस्योपसंव्यानं चर्मवत्] — The affix @deva[ल्युट्] applies to form neuter action-nouns when the verb has in construction an accusative word indicating something from contact with which the agent feels pleasant sensation physically.

Böhtlingk: "The affix @deva[ल्युट्] comes in connection with an object, when through the contact with that, the agent of the action feels a lively pleasure."

Though @deva[ल्युट्] would apply by the previous sūtra, this specifies the particular condition of physical pleasure from contact (like wearing leather/skin).`,

  '33117': `@deva[करणाधिकरणयोश्च] — The affix @deva[ल्युट्] applies after a root when the word formed is related to the verb as instrument (@deva[करण]) or location (@deva[अधिकरण]).

| Example | Relation | Meaning |
|---------|----------|---------|
| @deva[इध्मप्रव्रश्चनः] | instrument | axe (for cutting wood) |
| @deva[गोदोहनी] | location | milk-pail (vessel into which milk is milked) |
| @deva[सक्तुधानी] | location | container for barley-meal |

This affix expresses both instrumental case (tool) and locative case (repository) meanings.`,

  '33118': `@deva[करणाधिकरणयोश्च संज्ञायां पुंसि घः प्रायेण] — The affix @deva[घ] generally applies in the sense of instrument or location when the word is an appellative (@deva[संज्ञा]) and masculine.

The word @deva[प्रायेण] ("generally") shows this is not universal.

| Example | Relation | Meaning |
|---------|----------|---------|
| @deva[दन्तच्छदः] | instrument | lip ("that which covers teeth") |
| @deva[उरच्छदः] | instrument | breastplate |
| @deva[घटः] | — | pot |
| @deva[आकरः] | location | mine ("where they work") |`,

  '33119': `@deva[गोचरसंचरवहव्रजव्यजापणनिगमाश्च] — These words are irregularly formed by @deva[घ]:

| Word | Meaning | Analysis |
|------|---------|----------|
| @deva[गोचरः] | pasturage | where cows graze |
| @deva[सञ्चरः] | passage | through which they move |
| @deva[वहः] | vehicle | by which men are carried |
| @deva[व्रजः] | cow-pen | where they go |
| @deva[व्यजः] | fan | — |
| @deva[आपणः] | market | — |
| @deva[निगमः] | market, Veda | — |

This is an exception to @ref[3.3.121], which ordains @deva[घञ्] after consonant-ending roots.`,

  '33120': `@deva[अवे तॄस्तॄभ्यां घञ्] — The affix @deva[घञ्] applies after @deva[तॄ] ("to cross") and @deva[स्तॄ] ("to spread") when @deva[अव] is in composition, and the word is an appellative related as instrument or location.

This supersedes @deva[घ].

The @deva[ञ्] causes vṛddhi of @deva[ॠ] (@ref[7.2.115]) and regulates accent (@ref[6.1.195], @ref[6.1.197]). The @deva[घ्] is useful in the next sūtra for changing palatals to gutturals.

| Example | Meaning |
|---------|---------|
| @deva[अवतारः] | descent |
| @deva[अवस्तारः] | spreading |`,

  '33121': `@deva[हलश्च] — The affix @deva[घञ्] applies after consonant-ending roots (when the word is masculine, related as instrument or location, and palatals change to gutturals).

This excludes @deva[घ].

| Example | Meaning |
|---------|---------|
| @deva[लेखः] | writing (that in which something is inscribed) |
| @deva[वेदः] | the Veda (that by which all is known) |
| @deva[वेशः] | dress (that which is entered into) |
| @deva[बन्धः] | obstruction |
| @deva[मार्गः] | way (that on which they seek) |`,

  '33122': `@deva[अध्यायन्यायोद्यावसंहारा धारावयाश्च] — These words are irregularly formed by @deva[घञ्] (excluding @deva[घ] which would apply by @ref[3.3.118]):

| Word | Root | Meaning |
|------|------|---------|
| @deva[अध्यायः] | @deva[अधि + इ] | chapter, book (where they read) |
| @deva[न्यायः] | @deva[नि + नी] | logic, justice (by which men are led) |
| @deva[उद्यावः] | @deva[उत् + यु] | mixture (where they blend) |
| @deva[संहारः] | @deva[सम् + हृ] | collection |
| @deva[आधारः] | @deva[आ + धृ] | container |
| @deva[आवयाः] | @deva[आ + वी] | — |

All derive from vowel-ending roots.`,

  '33123': `@deva[अनुदके उदङ्कः] — The word @deva[उदङ्क] is irregularly formed when the sense does not refer to water.

Formation: @deva[उत् + अञ्च् + घञ् → उदङ्कः] ("vessel").

| Non-water sense | Water sense |
|-----------------|-------------|
| @deva[तैलोदङ्कः] ("leather vessel for oil") | @deva[उदकोदञ्चनः] ("bucket for drawing water") |

This sūtra exists to prohibit the form when referring to water.`,

  '33124': `@deva[जाले आनायः] — The word @deva[आनाय] is irregularly formed meaning "net" (@deva[जाल]).

Formation (instrumental sense): @deva[आ + नो + घञ् → आनायः] ("that by which they are caught").

| Example | Meaning |
|---------|---------|
| @deva[आनायो मत्स्यानाम्] | net for fish |
| @deva[आनायो मृगाणाम्] | net for wild deer |`,

  '33125': `@deva[खनोऽस्त्रियां घञ्च] — Both @deva[घ] and @deva[घञ्] apply after @deva[खन्] ("to dig") when the word is an appellative related as instrument or location (not feminine).

Result: @deva[आखानः] or @deva[आखनः] ("spade, hoe").

@note[By vārttika:]
- @deva[ड] also applies: @deva[आखन् + ड → आखः] ("spade") — @deva[ड्] indicates @deva[टि]-elision
- @deva[डर] also applies similarly`,

  '33126': `@deva[ईषद्दुःसुषु कृच्छ्राकृच्छ्रार्थेषु खल्] — The affix @deva[खल्] applies after a verb when @deva[ईषत्], @deva[दुर्], or @deva[सु] is in composition, meaning "difficult" or "easy."

| Upapada | Example | Meaning |
|---------|---------|---------|
| @deva[ईषत्] | @deva[ईषत्करो भवता कटः] | a mat is easily made by you |
| @deva[दुर्] | @deva[दुष्करः] | made with difficulty |
| @deva[सु] | @deva[सुकरः] | made easily |

The @deva[अनुवृत्ति] of "instrument/location" ceases here.
- @deva[दुर्] conveys @deva[कृच्छ्र] ("heavy, difficult")
- @deva[ईषत्] and @deva[सु] convey @deva[अकृच्छ्र] ("light, easy")`,

  '33127': `@deva[भूकृञोः कर्तृकर्मणा च्व्यर्थेषु] — The affix @deva[खल्] applies after @deva[भू] and @deva[कृ] when the upapadas are agent (for @deva[भू]) and object (for @deva[कृ]), preceded by @deva[ईषत्] etc., meaning "hard or easy."

| Example | Meaning |
|---------|---------|
| @deva[ईषदाढ्यं भवम्] | being enriched easily |
| @deva[दुराढ्यं भवम्] | being enriched with difficulty |
| @deva[स्वाढ्यङ्करो देवदत्तो भवता] | Devadatta can be made rich by you easily |

@note[By vārttika, the agent/object in composition should be as if ending in @deva[च्वि] (@ref[5.4.50]).]`,

  '33128': `@deva[आतो युच्] — The affix @deva[युच्] applies after roots ending in long @deva[आ] (when @deva[ईषत्], @deva[दुर्], @deva[सु] are in composition, meaning "easily/with difficulty").

This supersedes @deva[खल्].

| Example | Meaning |
|---------|---------|
| @deva[ईषत्पानः सोमो भवता] | soma can be lightly drunk by you |
| @deva[दुष्पानः] | difficult to drink |
| @deva[सुपानः] | easy to drink |
| @deva[ईषद्दानो गौर्भवता] | the cow can be given easily by you |`,

  '33129': `@deva[छन्दसि गत्यर्थेभ्यः] — In the Vedas (@deva[छन्दस्]), the affix @deva[युच्] applies after roots meaning "to go" when @deva[ईषत्] etc. meaning "easily/with difficulty" are in composition.

This debars @deva[खल्].

Examples: @deva[सूपसदनोऽग्निः], @deva[सूपसदनमन्तरिक्षम्] (Taittirīya Saṃhitā 7.5.20).`,

  '33130': `@deva[अन्येभ्योऽपि दृश्यते] — In the Vedas, @deva[युच्] is seen after other verbs (not just "to go").

Examples: @deva[सुदोह नाम कृणोद् ब्रह्मणे गाम्], @deva[सुवेद नाम कृणोद् ब्रह्मणे गाम्] (Ṛgveda X.112.8).

@note[By vārttika, in modern Sanskrit, @deva[युच्] applies after @deva[आस्], @deva[युध्], @deva[दृश्], @deva[धृष्], and @deva[मृष्]: @deva[दुःशासनः] (Duḥśāsana), @deva[दुर्योधनः] (Duryodhana), @deva[दुर्दर्शनः], @deva[दुर्धर्षणः], @deva[दुर्मर्षणः].]`,

  '33131': `@deva[वर्तमानसामीप्ये वर्तमानवद्वा] — Affixes used for present time may optionally be used for past or future time near the present.

The words @deva[समीप] and @deva[सामीप्य] have the same meaning — the latter derived by adding @deva[ष्यङ्] with self-descriptive force.

This teaches that present-tense affixes can denote near-past or near-future without strict temporal limitation.

@note[This incidentally shows that @deva[ष्यङ्] also comes with @deva[स्वार्थ] (self-descriptive) force.]`,

  '33132': `@deva[भूतवच्चाशंसायाम्] — Affixes for past or present time may optionally be used for future time when hope (@deva[आशंसा]) is expressed.

"Optionally" is understood. "Near the present" does not apply here.

@deva[आशंसा] = wish or expectation of obtaining something not yet obtained — necessarily future.

The @deva[च] draws "present-tense-like" from the previous sūtra.

Example: Aorist with future meaning when expressing hope.`,

  '33133': `@deva[क्षिप्रवचने लृट्] — When @deva[क्षिप्र] ("quickly") or its synonym is in construction, the Second Future (@deva[लृट्]) is used when hope is expressed conditionally.

This supersedes the previous rule (which would allow Aorist).

Example: @deva[उपाध्यायश्चेत् क्षिप्रम् आगमिष्यति, क्षिप्रं व्याकरणम् अध्येष्यामहे] — "If the teacher comes soon, we shall soon learn grammar."

By @deva[वचन] in the sūtra, synonyms of @deva[क्षिप्र] also apply.`,

  '33134': `@deva[आशंसावचने लिङ्] — The Potential (@deva[लिङ्]) is used when the upapada expresses hope (@deva[आशंसा]).

This is also an exception to @ref[3.3.132].

Examples:
- @deva[उपाध्यायश्चेद् आगच्छेद्, आशंसे युक्तोऽधीयीय] — "If the teacher comes, I hope you will study diligently"
- @deva[आशंसे क्षिप्रम् अधीयीय] — "I hope you will learn soon" (applies even with "quickness" words)`,

  '33135': `@deva[क्रियाप्रबन्धसामीप्ययोर्वर्तमानवत्] — When continuous action (@deva[क्रियाप्रबन्ध]) or near time (@deva[सामीप्य]) is meant, past and future are not denoted by Imperfect (@deva[लङ्]) and First Future (@deva[लुट्]) as taught in @ref[3.2.111] and @ref[3.3.15], but by Aorist and Second Future.

The Imperfect and First Future denote non-current-day past/future respectively. This sūtra prohibits them for continuous or near-time actions.

@deva[क्रियाप्रबन्ध] = constant continuity of action.`,

  '33136': `@deva[अवरस्मिन्नवरस्यावधौ लृट्] — The Second Future (@deva[लृट्]) (not First Future) is used when stating a limit on "this side" (@deva[अवर]) of another place.

The phrase @deva[नानद्यतनवत्] applies here. The conditions "continuity" and "nearness" from the previous sūtra do not apply.

Example: @deva[योऽयम् अध्वा गन्तव्यः आपाटलिपुत्रात् तस्य यद् अवरं कौशाम्ब्यास् तत्र उदनं भोक्ष्यामहे] — "On this side of the road from Kośāmbī, we will eat rice."`,

  '33137': `@deva[कालेऽहोरात्राणाम्] — The Second Future is used instead of First Future for non-current-day future when @deva[अवर] is used with a time-division word, but not with words meaning "day" or "night."

This sūtra applies only to time limits (not space like the previous). Exception: divisions of day/night.

Example: @deva[अवरं मासात्] — "within a month" (uses @deva[लृट्]).`,

  '33138': `@deva[परस्मिन् वा] — Both Second and First Futures are optionally used when a declaration is made regarding "that side" (@deva[पर]) of a time limit.

The entire previous sūtra is read in. This allows an option for the @deva[पर] (far) side of a starting limit.

When time refers to the far side (@deva[पर]) of a starting limit, either @deva[लृट्] or @deva[लुट्] may be used.`,

  '33139': `@deva[लिङ्निमित्ते लृङ् क्रियातिपत्तौ] — Where there is reason for @deva[लिङ्] (Potential), the Conditional (@deva[लृङ्]) is used for future time when non-completion of the action is implied.

The reasons for @deva[लिङ्] include cause-effect relationships mentioned in @ref[3.3.156]-@ref[3.3.157] etc.

The Conditional expresses counterfactual conditions where the action's non-performance is implied — corresponding to "would have" constructions.`,

  '33140': `@deva[भूते च] — The Conditional (@deva[लृङ्]) is also used for past time (where there is reason for @deva[लिङ्]) when non-completion of the action is implied.

The previous sūtra ordained @deva[लृङ्] for future; this extends it to past.

The Conditional thus has both past and future significations in counterfactual contexts.`,

  '33141': `@deva[वोताप्योः समर्थयोः] — From this sūtra through @ref[3.3.152] (@deva[उताप्योः समर्थयोर्लिङ्]), the following governs: where there is reason for @deva[लिङ्], the Conditional (@deva[लृङ्]) may optionally be used for past time when non-completion is implied.

This sūtra consists of three words: @deva[वा] ("optionally"), @deva[आ] ("as far as"), and @deva[उताप्योः] ("up to the @deva[उत]/अपि sūtra").`,

  '33142': `@deva[अपिजातुयोः प्रकृतेषु लट्] — The Present Tense (@deva[लट्]) is used when @deva[अपि] or @deva[जातु] is in composition, when the sense is censure (@deva[गर्हा]).

@deva[लट्] is normally for present time only; here it applies regardless of actual time, totally excluding the tense required by the action's time.

Example: @deva[अपि तत्र भवान् वृषलं याजयति] or @deva[जातु तत्र भवान् वृषलं याजयति] — "Does your honor (really) sacrifice for a Śūdra?" (expressing blame)`,

  '33143': `@deva[कथं चित् लिङ् च] — Both @deva[लिङ्] (Potential) and @deva[लट्] (Present) are optionally used when @deva[कथम्] is in construction and censure is implied.

"Censure" is understood; @deva[च] draws @deva[लट्] from the previous sūtra.

Unlike the previous rule, this allows the alternative tenses required by the action's time (partial option, not total exclusion).

Example: @deva[कथं नाम तत्र भवान् वृषलं याजयेत्] / @deva[याजयति] — "How can your honor sacrifice for a Śūdra?"`,

  '33144': `@deva[किम्वृत्तौ लिङ्लृटौ] — @deva[लिङ्] (Potential) and @deva[लृट्] (First Future) are used when interrogatives like @deva[किम्] etc. are in composition and censure is implied.

"Censure" is understood; "optionally" is not.

This excludes all other tense-affixes. The repetition of @deva[लिङ्] here excludes @deva[लट्] (whose @deva[अनुवृत्ति] would otherwise continue).`,

  '33145': `@deva[अनवक्लृप्त्यमर्षयोः] — When expressing that something is unlikely (@deva[अनवक्लृप्ति]) or intolerable (@deva[अमर्ष]), the Potential and First Future are used, even without an interrogative pronoun.

The @deva[अनुवृत्ति] of "censure" ceases.
- @deva[अनवक्लृप्ति] = impossibility, not to be believed
- @deva[अमर्ष] = not to be tolerated

This excludes all other tenses.`,

  '33146': `@deva[किङ्किलास्त्यर्थेषु लृट्] — The First Future (@deva[लृट्]) is used when @deva[किङ्किल] or words meaning @deva[अस्ति] ("exists") are in construction (when the action is unlikely or intolerable).

@deva[किङ्किल] is taken as a single upapada (not @deva[किम्] + @deva[किल] separately) and expresses anger.

Words with @deva[अस्ति] sense: @deva[अस्ति], @deva[भवति], @deva[विद्यते].

This supersedes @deva[लिङ्].`,

  '33147': `@deva[जातुयतोर्लिङ्] — The Potential (@deva[लिङ्]) is used when @deva[जातु] or @deva[यत्] is in construction, when the sense is unlikely or intolerable.

This excludes the First Future (@deva[लृट्]).

Example: @deva[जातु तन्न भवान् वृषलं याजयेत्] or @deva[यन्नाम तत्र भवान् वृषलं याजयेत्, न श्रद्दधे, न मर्षयामि].

@note[By vārttika, @deva[यदा] and @deva[यदि] should also be included with @deva[जातु] and @deva[यत्].]`,

  '33148': `@deva[गर्हायां यच्चयत्रयोर्लिङ्] — The Potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] or @deva[यत्र] is in composition, provided censure (@deva[गर्हा]) is implied.

This supersedes the First Future.

Example: @deva[यच्च यत्र वा त्वमेवं कुर्याः न श्रद्दधे, न मर्षयामि] — "I do not think, nor can I tolerate that you will do so."

The Conditional (@deva[लृङ्]) applies under its own conditions (@ref[3.3.139]).`,

  '33149': `@deva[यच्चयत्रयोः] — The Potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] or @deva[यत्र] is in composition (with censure implied).

The governing force of @deva[अनवक्लृप्ति] and @deva[अमर्ष] ceases.

This debars all other tense-affixes.

Example: @deva[यच्च] or @deva[यत्र तत्र भवान् वृषलं याजयेत् ऋद्धौ वृद्धः सन् ब्राह्मणः, गर्हामहे] — "We blame you who, being an opulent old Brahmin, sacrifice for a Śūdra."`,

  '33150': `@deva[चित्रीकरणे] — The Potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] or @deva[यत्र] is used and the sense is "wonder" (@deva[चित्रीकरण]).

@deva[चित्रीकरण] = wonder, astonishment, strangeness.

This debars all other tense-affixes.

Example: @deva[यच्च] or @deva[यत्र तत्र भवान् वृषलं याजयेत् आश्चर्यमेतत्] — "It is a wonder that you should sacrifice for a Śūdra."

When non-completion is indicated, the Conditional applies per @ref[3.3.139]-@ref[3.3.141].`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.3.101-150). Total: ${Object.keys(vasu).length}`);
