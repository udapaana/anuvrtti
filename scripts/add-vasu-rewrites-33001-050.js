import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '33001': `@deva[उणादयो बहुलम्] — The @deva[उणादि] affixes (beginning with @deva[उण्]) apply diversely with:
- Present-tense force (from @ref[3.2.123])
- Appellative meaning (from @ref[3.2.185])

"Diversely" (@deva[बहुलम्]) indicates these affixes apply:
1. To roots for which they are specifically ordained
2. Also to roots for which they are not ordained (by inference)
3. Sometimes not even where ordained

This unpredictable behavior characterizes the entire @deva[उणादि] section.`,

  '33002': `@deva[उणादयश्च भूतार्थाश्च दृश्यन्ते] — @deva[उणादि] affixes occasionally appear with past-tense force.

The phrase "are seen" (@deva[दृश्यन्ते]) indicates this is observational rather than rule-governed—no general principle applies.

| Root | Affix | Result | Meaning |
|------|-------|--------|---------|
| @deva[वृत्] | @deva[मनिन्] | @deva[वर्त्मन्] | road, way |

The past sense is recognized case-by-case from usage, not predicted by rule.`,

  '33003': `@deva[गाम्यादयश्च भविष्यन्त्यर्थाः] — Words like @deva[गामि] etc. are valid forms with future-tense force.

| Word | Meaning | Example |
|------|---------|---------|
| @deva[गामी] | intending to go | @deva[गामी ग्रामम्] — "intending to go to the village" |
| @deva[आगामी] | about to come | "that which is to come" |
| @deva[प्रस्थायी] | about to depart | "departing" |
| @deva[प्रतिरोधी] | about to obstruct | "opponent" |

Thus @deva[उणादि] affixes can express present, past, and future—though past and future applications are limited.`,

  '33004': `@deva[यावत्पुरा लट्] — Present tense (@deva[लट्]) takes future force when @deva[यावत्] or @deva[पुरा] is in construction.

| Particle | Example | Translation |
|----------|---------|-------------|
| @deva[पुरा] | @deva[आलोके ते निपतति पुरा] | "He will surely fall in your sight" |
| @deva[यावत्] | @deva[यावदस्य दुरात्मनः समुन्मूलनाय शत्रुघ्नं प्रेषयामि] | "I shall send Śatrughna to exterminate this wretch" |

The future meaning is triggered by these adverbs, not inherent in @deva[लट्].`,

  '33005': `@deva[कदाकर्हिभ्यां वा] — Present tense (@deva[लट्]) is optionally used with future force when @deva[कदा] or @deva[कर्हि] is in construction.

| Expression | Alternative | Meaning |
|------------|-------------|---------|
| @deva[कदा भुङ्क्ते] | @deva[कदा भोक्ष्यते] / @deva[भोक्ता] | "When will he eat?" |
| @deva[कर्हि भुङ्क्ते] | @deva[कर्हि भोक्ष्यते] / @deva[भोक्ता] | "When will he eat?" |

Either present or future forms are grammatically correct with these interrogatives.`,

  '33006': `@deva[किंवृत्ते लिप्सायाम्] — When @deva[किम्] or its derivatives are in construction, present tense (@deva[लट्]) optionally takes future force—provided the sentence expresses the speaker's desire to obtain something.

The word @deva[लिप्सा] means "desire to acquire" or "intention to beg."

The rule applies even when @deva[किम्] takes affixes like @deva[डतर] or @deva[डतम].`,

  '33007': `@deva[लिप्स्यमानसिद्धौ च] — Present tense optionally takes future force when the sentence indicates that success would accrue to another person by fulfilling the speaker's desire.

The compound @deva[लिप्स्यमानसिद्धि] = @deva[लिप्स्यमानात् सिद्धि] (ablative tatpuruṣa) — success obtained by another through compliance with the speaker's request.

Difference from @ref[3.3.6]: That sūtra required @deva[किम्] in interrogative sentences; this applies to declarative sentences showing benefit to the listener.`,

  '33008': `@deva[लोडर्थलक्षणे च] — Present tense (@deva[लट्]) optionally takes future force when the action serves as a condition precedent for another action having imperative force (@deva[लोट्]).

The word @deva[लोडर्थ] means "having the sense of @deva[लोट्]" — commanding, directing, inviting, etc. (per @ref[3.3.162]-@ref[3.3.163]).

The conditional action (marked by @deva[लट्] with future sense) is related to the imperative action as a sign (@deva[लक्षण]) is to the thing signified.`,

  '33009': `@deva[ऊर्ध्वमौहूर्त्तिके च लिङ्] — When the future time extends beyond one @deva[मुहूर्त] (48 minutes), either @deva[लट्] (present) or @deva[लिङ्] (potential) may be used with future force.

The conditions from @ref[3.3.8] apply: the action must be related to an imperative action as a sign is to the thing signified.

The word @deva[ऊर्ध्वमौहूर्त्तिक] (from @deva[ऊर्ध्वमुहूर्त]) means "existing beyond a muhūrta."`,

  '33010': `@deva[तुमुण्ण्वुलौ क्रियायां क्रियार्थायाम्] — The affixes @deva[तुमुन्] and @deva[ण्वुल्] apply to a root with future force when in construction with another verb denoting action performed for the sake of that future action.

| Affix | Example | Meaning |
|-------|---------|---------|
| @deva[तुमुन्] | @deva[भोक्तुं व्रजति] | "He goes to eat" |
| @deva[ण्वुल्] | @deva[भोजको व्रजति] | "He goes to eat" |

The @deva[उपपद] (verb in construction) must denote an action (@deva[क्रिया]), not a substantive. Counter-example: @deva[भिक्षिस...] where the upapada is not an action.`,

  '33011': `@deva[भावे च] — Affixes ordained for expressing mere action (@deva[भाव]), such as @deva[धञ्] etc. (from @ref[3.1.3] @deva[लोहितादिडाज्भ्यः क्यष्]), also take future force when in construction with a verb denoting action performed for that purpose.

| Example | Meaning |
|---------|---------|
| @deva[पाकाय व्रजति] | "He goes to cook" |
| @deva[भूतये व्रजति] | "He goes for success" |
| @deva[पुष्टये व्रजति] | "He goes for nourishment" |

Though these affixes were already ordained elsewhere, this sūtra specifies their future-force application.`,

  '33012': `@deva[अणश्च] — The affix @deva[अण्] applies to a root with future force when:
1. The upapada is in accusative case (as per @ref[3.2.1])
2. The action is performed for the sake of another action

By @ref[3.2.1], @deva[अण्] applies after roots when the composition is with an accusative. This sūtra reiterates that application for the future-force context, preventing @deva[ण्वुल्] from superseding it.`,

  '33013': `@deva[लृट् शेषे च] — The Second Future (@deva[लृट्]) applies:
1. In remaining cases of simple futurity
2. When in construction with a verb denoting action performed for the future action's sake

| Example | Meaning |
|---------|---------|
| @deva[करिष्यामि इति व्रजति] | "He goes [thinking] 'I will do'" |
| @deva[करिष्यति] | "He will do" (simple future) |
| @deva[हरिष्यति] | "He will take" |

The Second Future serves both dependent clauses and independent simple-future expressions.`,

  '33014': `@deva[लृटः सद्वा] — The @deva[सत्] affixes (@deva[शतृ] and @deva[शानच्], defined at @ref[3.2.127]) optionally substitute for @deva[लृट्].

This is a regulated option (@deva[नियमविकल्प]):
- Per @ref[3.2.124]: @deva[शतृ]/@deva[शानच्] invariably replace @deva[लृट्] when agreeing with a word not ending in the nominative
- In other cases: optional replacement

The same conditions governing substitution for @deva[लट्] govern substitution for @deva[लृट्].`,

  '33015': `@deva[अनद्यतने लुट्] — The First Future (@deva[लुट्]) applies when the action will occur beyond the current day (@deva[अनद्यतन] — "not of today").

| Example | Meaning |
|---------|---------|
| @deva[श्वः कर्ता] | "He will do tomorrow" |
| @deva[श्वो भोक्ता] | "He will eat tomorrow" |

This debars @deva[लृट्].

@note[When there's ambiguity between today and tomorrow (@deva[अद्य श्वो वा भविष्यति] — "it will be today or tomorrow"), use @deva[लृट्], not @deva[लुट्]. When in doubt, use Second Future.]

The word @deva[अनद्यतन] is a bahuvrīhi compound.`,

  '33016': `@deva[पदरुजविशस्पृशः] — The affix @deva[घञ्] applies after:

| Root | Meaning | Result | Meaning |
|------|---------|--------|---------|
| @deva[पद्] | to pace | @deva[पादः] | foot |
| @deva[रुज्] | to pain | @deva[रोगः] | disease |
| @deva[विश्] | to enter | @deva[वेशः] | entrance |
| @deva[स्पृश्] | to touch | @deva[स्पर्शः] | touch |

@note[For @deva[स्पृश्], @deva[घञ्] applies when meaning "distress" — @deva[स्पर्शः] as "disease" or "warmth." When meaning "touch," the affix is @deva[अच्].]

The @deva[अनुवृत्ति] of "future" does not extend here—these affixes apply in all tenses.`,

  '33017': `@deva[स्थिरे सृ] — The affix @deva[घञ्] applies after @deva[सृ] ("to go/flow") when the agent is permanently fixed (@deva[स्थिर]).

| Example | Meaning |
|---------|---------|
| @deva[चन्दनसारः] | essence of sandalwood |
| @deva[खदिरसारः] | essence of catechu |

The word @deva[सार] ("essence") applies to that which, while remaining permanent, flows or moves through time.

Why "permanently fixed"? Without this condition: @deva[सर्त्ता] ("moves"), @deva[सारकः] ("that which flows").

@note[The form @deva[सार] also applies to disease, fish, and other meanings by vārttika.]`,

  '33018': `@deva[भावे] — The affix @deva[घञ्] applies after a root to denote mere action (@deva[भाव]).

| Root | Result | Meaning |
|------|--------|---------|
| @deva[पच्] | @deva[पाकः] | cooking (per @ref[7.2.116], @ref[7.3.52]) |
| @deva[त्यज्] | @deva[त्यागः] | abandoning |
| @deva[रञ्ज्] | @deva[रागः] | coloring (per @ref[6.4.27]) |

Since all roots express "action" when their meaning is conveyed, @deva[घञ्] etc. apply after all verbal roots when denoting the completed state of the action. Words so formed need not be established by usage—the rule itself validates them.`,

  '33019': `@deva[अकर्तरि च कारके संज्ञायाम्] — The affix @deva[घञ्] applies when the word is an appellative (@deva[संज्ञा]) related to the verb as any kāraka except the agent (@deva[कर्तृ]).

| Word | Analysis | Meaning |
|------|----------|---------|
| @deva[प्रासः] | @deva[प्रास्यन्ति तम्] — "that which they throw" | dart |
| @deva[प्रसेवः] | @deva[प्रसीव्यन्ति तम्] — "that which they stitch" | sack |
| @deva[आहारः] | @deva[आहरन्ति अस्माद् रसम्] — "from which they extract juice" | food |

Why "not as agent"? Agent-related words take different treatment: @deva[मेषः] ("ram") relates as agent.`,

  '33020': `@deva[परिमाणे च] — The affix @deva[घञ्] applies after all roots when the word denotes a measure (@deva[परिमाण]).

| Root | Result | Usage |
|------|--------|-------|
| @deva[नि-चि] | @deva[निचायः] | heap — @deva[एकस्तण्डुलनिचायः] ("one heap of rice") |
| @deva[कॄ] | @deva[कारः] | a measure — @deva[द्वौ कारौ], @deva[त्रयः काराः] |

By saying "all" (@deva[सर्वधातुभ्यः]), even the affix @deva[अप्] (@ref[3.3.57]) is superseded when measure is denoted. Otherwise, only @deva[अच्] would be prohibited by the paribhāṣā.`,

  '33021': `@deva[इङश्च] — The affix @deva[घञ्] applies after @deva[इङ्] ("to study").

| Formation | Result | Meaning |
|-----------|--------|---------|
| @deva[अधि + इ + घञ्] | @deva[अध्यायः] | lesson, lecture |
| @deva[उप + अधि + इ + घञ्] | @deva[उपाध्यायः] | teacher ("one from whom one studies") |

This debars @deva[अच्] (from @ref[3.3.56]).

@note[When the word relates to the verb as an ablative, it may be feminine and optionally take @deva[ङीष्]: @deva[उपाध्याया] or @deva[उपाध्यायी] — "female teacher."]`,

  '33022': `@deva[सोपसर्गे रूपः] — The affix @deva[घञ्] applies after @deva[रू] ("to roar") when an upasarga is in composition.

| With upasarga | Without |
|---------------|---------|
| @deva[संरावः] ("clamor") | @deva[रवः] ("sound") |
| @deva[उपरावः] | — |

This debars @deva[अप्] (from @ref[3.3.57]).`,

  '33023': `@deva[समः संयुद्रुदुभ्यः] — The affix @deva[घञ्] applies after @deva[यु], @deva[द्रु], and @deva[दु] when preceded by @deva[सम्].

| Root | With @deva[सम्] | Without |
|------|----------------|---------|
| @deva[यु] (to join) | @deva[संयावः] | @deva[प्रयवः] |
| @deva[द्रु] (to run) | @deva[सन्द्रावः] | — |
| @deva[दु] (to burn) | @deva[सन्दावः] | — |`,

  '33024': `@deva[अनुपसर्गे श्रीनीभूभ्यः] — The affix @deva[घञ्] applies after @deva[श्रि], @deva[नी], and @deva[भू] when not preceded by an upasarga.

| Root | Without upasarga | With upasarga |
|------|------------------|---------------|
| @deva[श्रि] (to go to) | @deva[श्रायः] ("shelter") | @deva[प्रश्रयः] ("respect") |
| @deva[नी] (to lead) | @deva[नायः] ("means") | @deva[प्रणयः] ("love") |
| @deva[भू] (to be) | @deva[भावः] ("condition") | @deva[प्रभवः] ("source") |

This debars @deva[अच्] (from @ref[3.3.56]).

@note[The word @deva[प्रभाव] in @deva[प्रभावो राज्ञः] ("the splendor of the king") is not formed from @deva[प्र-भू + घञ्], but by compounding @deva[प्र] with @deva[भू + घञ्].]`,

  '33025': `@deva[विभाषा क्षुश्रुवः] — The affix @deva[घञ्] optionally applies after @deva[क्षु] and @deva[श्रु] when @deva[वि] is in composition.

| With @deva[वि-] | Without upasarga |
|-----------------|------------------|
| @deva[विक्षावः] ("cough") | @deva[क्षवः] |
| @deva[विश्रावः] ("celebrated") | @deva[श्रवः] |

This debars @deva[अप्] (from @ref[3.3.57]).`,

  '33026': `@deva[अवोन्नोर्नयतेः] — The affix @deva[घञ्] applies after @deva[नी] ("to lead") when preceded by @deva[अव] or @deva[उत्].

| Formation | Meaning |
|-----------|---------|
| @deva[अवनायः] | throwing down |
| @deva[उन्नायः] | elevation |

@note[The form @deva[उन्नयः] in @deva[उन्नयः पदार्थानाम्] takes @deva[अच्] by @ref[3.3.113].]`,

  '33027': `@deva[प्रे द्रुस्तुश्रुवः] — The affix @deva[घञ्] applies after @deva[द्रु], @deva[स्तु], and @deva[श्रु] when preceded by @deva[प्र].

| With @deva[प्र-] | Without |
|-----------------|---------|
| @deva[प्रद्रावः] | @deva[द्रवः] |
| @deva[प्रस्तावः] | @deva[स्तवः] |
| @deva[प्रस्रावः] | @deva[स्रवः] |`,

  '33028': `@deva[निरभिभ्यां पूलवोः] — The affix @deva[घञ्] applies after @deva[पू] (preceded by @deva[निर्]) and @deva[लू] (preceded by @deva[अभि]).

| Formation | Meaning | Without these upasargas |
|-----------|---------|-------------------------|
| @deva[निष्पावः] | winnowing | @deva[पवः] |
| @deva[अभिलावः] | moving | @deva[लवः] |

The word @deva[पू] includes both @deva[पूङ्] and @deva[पूञ्]. The assignment of upasargas follows @ref[1.3.10] (serial application).`,

  '33029': `@deva[उन्नोर्गृणः] — The affix @deva[घञ्] applies after @deva[गॄ] when preceded by @deva[उत्] or @deva[नि].

The root @deva[गॄ] here includes both meanings: "to make sound" and "to swallow."

| Formation | Example | Meaning |
|-----------|---------|---------|
| @deva[उद्गारः] | @deva[उद्गारः समुद्रस्य] | roaring of the sea |
| @deva[निगारः] | @deva[निगारो देवदत्तस्य] | swallowing of Devadatta |

Without these upasargas: @deva[गरः].`,

  '33030': `@deva[धान्ये चोन्नोः किरतेः] — The affix @deva[घञ्] applies after @deva[कॄ] ("to scatter") when preceded by @deva[उत्] or @deva[नि], and the sense relates to grain (@deva[धान्य]).

| Formation | Example | Meaning |
|-----------|---------|---------|
| @deva[उत्कारः] | @deva[उत्कारो धान्यस्य] | winnowing of grain |
| @deva[निकारः] | @deva[निकारो धान्यस्य] | winnowing of grain |

When not relating to grain: @deva[भैक्षवोत्करः] ("heap of alms"), @deva[पुष्पनिकरः] ("heap of flowers").

The root @deva[कॄ] here means "to scatter," not "to injure."`,

  '33031': `@deva[याज्ञे समः स्तौतेः] — The affix @deva[घञ्] applies after @deva[स्तु] ("to praise") when preceded by @deva[सम्], if the word refers to sacrificial contexts (@deva[यज्ञ]).

| Sacrificial | Non-sacrificial |
|-------------|-----------------|
| @deva[संस्तावश्छन्दोगानाम्] — "the Saṃstāva of the Chandogas" | @deva[संस्तवश्छात्रयोः] — "mutual praising of two pupils" |

@deva[संस्ताव] = @deva[समेत्य स्तुवन्ति यस्मिन् देशे छन्दोगाः स देशः] — "the place where the Chandogas gather to praise."`,

  '33032': `@deva[अयाज्ञे प्रात्स्तृणः] — The affix @deva[घञ्] applies after @deva[स्तॄ] ("to cover") when preceded by @deva[प्र], provided the word does not refer to sacrifice.

| Example | Meaning |
|---------|---------|
| @deva[शङ्खप्रस्तारः] | bed of conch shells |
| @deva[मणिप्रस्तारः] | strewing of gems |`,

  '33033': `@deva[प्रथने वेरप्रवचने] — The affix @deva[घञ्] applies after @deva[स्तॄ] when preceded by @deva[वि], when the sense is "extension" (@deva[प्रथन]) and does not refer to words (@deva[अप्रवचन]).

| Example | Meaning |
|---------|---------|
| @deva[पटस्य विस्तारः] | extension of the garment |

Why "extension"? Otherwise: @deva[तृणविस्तरः] ("collection of grass").

Why "not referring to words"? Otherwise: @deva[विस्तरो वचसाम्] ("prolixity of words").`,

  '33034': `@deva[छन्दसो नामनि] — The affix @deva[घञ्] applies after @deva[स्तॄ] with @deva[वि] when the word is the name of a meter (@deva[छन्दस्]).

@deva[वि + स्तृ + घञ्] → @deva[विष्टारः] (by @ref[8.3.94]) — the name of a meter called @deva[विष्टारपङ्क्ति].

The word @deva[छन्द] here means prosodic meter (Gāyatrī, etc.), not the Vedas—hence the word @deva[नाम] is used.

@note[The whole compound @deva[विष्टारपङ्क्ति] is the meter's name; only @deva[विष्टार] is formed by @deva[घञ्].]`,

  '33035': `@deva[उद्ग्रहः] — The affix @deva[घञ्] applies after @deva[ग्रह्] ("to seize") when preceded by @deva[उत्].

Result: @deva[उद्ग्राहः] ("lifting up").

This debars @deva[अप्].

@note[In Vedic usage, this affix applies even with @deva[नि], and @deva[ह] changes to @deva[भ]: @deva[उद्ग्राभं च निग्राभं च ब्रह्मदेवा अवीवृधन्] — "lifting up and putting down the sacrificial ladle."]`,

  '33036': `@deva[मुष्टौ संग्रहः] — The affix @deva[घञ्] applies after @deva[ग्रह्] when preceded by @deva[सम्], if the sense relates to fist (@deva[मुष्टि]).

| Fist-related | Otherwise |
|--------------|-----------|
| @deva[अहो मल्लस्य सङ्ग्राहः] — "the clenching of the athlete's fist" | @deva[सङ्ग्रहो धान्यस्य] — "collection of grain" |

The word @deva[मुष्टि] means "boxing" or "fist" — firm grasping.`,

  '33037': `@deva[द्यूतेपरेर्नियश्च] — The affix @deva[घञ्] applies after:
- @deva[परि-नी] when meaning "game" (@deva[द्यूत])
- @deva[नि-इ] when meaning "propriety/law" (@deva[न्याय])

| Formation | Meaning | Example |
|-----------|---------|---------|
| @deva[परिणायः] | gambling move | @deva[परिणायेन शारान् हन्ति] — "takes many pieces by moving a chessman" |
| @deva[न्यायः] | fitness, law | standard usage |

The interpretation follows @ref[1.3.10] for pairing upasargas with meanings.`,

  '33038': `@deva[वृत्तावनुपातव्ये पर्येः] — The affix @deva[घञ्] applies after @deva[इ] preceded by @deva[परि] when the sense is "regular succession" (@deva[वृत्ति]).

| Succession-sense | Otherwise |
|------------------|-----------|
| @deva[पर्यायः] ("turn") — @deva[तव पर्यायः] ("your turn") | @deva[कालस्य पर्ययः] ("lapse of time") |

The word @deva[अनुपात्ययः] = @deva[क्रमप्राप्तस्यानतिपातः] — "not breaking the series or order."`,

  '33039': `@deva[वृत्तौ वोपसीयतेः] — The affix @deva[घञ्] applies after @deva[सी] ("to lie down") when preceded by @deva[वि] or @deva[उप], if the sense is "regular succession."

| Example | Meaning |
|---------|---------|
| @deva[तव विशायः] | your turn of sleeping (rotation of sentinels) |
| @deva[तव राजोपशायः] | your turn to sleep near the king |

When not meaning succession: @deva[उपशयः] ("ambush"), @deva[विशयः] ("doubt").`,

  '33040': `@deva[अस्तेयप्राणयोर्हस्तादाने प्रचेः] — The affix @deva[घञ्] applies after @deva[चि] ("to collect") when preceded by @deva[प्र], if the sense is "taking by hand" (@deva[हस्तादान]) and does not mean "stealing" (@deva[अस्तेय]).

| Hand-gathering | Not by hand |
|----------------|-------------|
| @deva[पुष्पप्रचायः] ("gathering flowers by hand") | @deva[यष्टया प्रचयं करोति] ("gathering with a stick") |
| @deva[फलप्रचायः] ("gathering fruits by hand") | — |

"Taking by hand" indicates close proximity of the gatherer to what is gathered.`,

  '33041': `@deva[कश्चादौ निवासचितिशरीरोपसमाधानेषु] — The affix @deva[घञ्] applies after @deva[चि] ("to collect") with @deva[क] substituting for initial @deva[च], in these senses:

| Sense | Example | Meaning |
|-------|---------|---------|
| dwelling (@deva[निवास]) | @deva[काशीनिकायः] | Kāśī-dwelling |
| funeral pyre (@deva[चिति]) | @deva[आकायम् अग्निं चिन्वीत] | "let him arrange the fire" |
| body (@deva[शरीर]) | — | — |
| heaping (@deva[उपसमाधान]) | — | — |

@deva[निकाय] = "dwelling" — that in which people dwell (@deva[निवसति]).`,

  '33042': `@deva[वृन्दार्थे संव्यानव्यायेषु] — The affix @deva[घञ्] applies after @deva[चि] with @deva[क] for @deva[च], when meaning "assembly" (@deva[वृन्द]) of beings with common characteristics—but not a mere confused crowd.

The word @deva[सङ्घ] has two senses:
1. Collection of persons with common qualifications
2. Mere confused crowd

Only sense (1) triggers this rule (by @deva[पर्युदास] negation).

Example: @deva[भिक्षुकनिकायः] ("assembly of mendicants").`,

  '33043': `@deva[व्यतिहारे णच्] — The affix @deva[णच्] applies after a root to denote reciprocity of action (@deva[व्यतिहार]). The resulting word is feminine.

| Formation | Meaning |
|-----------|---------|
| @deva[वि + अव + क्रुश् + णच्] → @deva[व्यवक्रोशा] | mutual reviling |

The word @deva[कर्म] here means "action" generally, not the technical term for accusative. The @deva[अनुबन्ध] @deva[च] is qualitative, distinguishing this affix (relevant for @ref[5.4.14]).

The word formed denotes mere action (@deva[भाव]) as well.`,

  '33044': `@deva[अभिविधौ भावेऽनुण्] — The affix @deva[इनुण्] applies after a root to denote condition (@deva[भाव]) when co-extensiveness (@deva[अभिविधि]) is meant.

The word @deva[अभिविधि] = complete comprehension or relation between action and quality.

| Example | Meaning |
|---------|---------|
| @deva[सांराविणम्] | general tumultuous uproar |
| @deva[सांकूटिणम्] | general confusion (by @ref[5.4.15]-@ref[5.4.16]) |
| @deva[सांस्राविणम्] | general stream |

When not meaning co-extensiveness: @deva[सङ्कोटः], @deva[संरावः], @deva[सन्द्रावः].`,

  '33045': `@deva[आक्रोशेऽवनोर्ग्रहः] — The affix @deva[घञ्] applies after @deva[ग्रह्] preceded by @deva[अव] or @deva[नि] when the sense is malediction (@deva[आक्रोश]).

Though @deva[इनुण्] is near, the @deva[अनुवृत्ति] of @deva[घञ्] from @ref[3.3.16] applies.

| Cursing | Otherwise |
|---------|-----------|
| @deva[अवग्राहो हन्त ते वृषलभूयात्] — "Cursed be thou, O sinner!" | @deva[अवग्रहः पदस्य] |
| @deva[निग्राहस्ते भूयात्] | @deva[निग्रहश्चोरस्य] |`,

  '33046': `@deva[प्रात्लिप्सायाम्] — The affix @deva[घञ्] applies after @deva[ग्रह्] preceded by @deva[प्र] when the sense is "desire of acquisition" (@deva[लिप्सा]).

| Desire for gain | Otherwise |
|-----------------|-----------|
| @deva[पात्रप्रग्राहेण चरति भिक्षुः पिण्डार्थी] — "the beggar walks carrying a vessel, desiring alms" | @deva[प्रग्रहो देवदत्तस्य] |
| @deva[स्रुवप्रग्राहेण चरति द्विजो दक्षिणार्थी] — "carrying a ladle, the Brahmin walks for his fee" | — |

The word @deva[लिप्सा] = "wish to have something."`,

  '33047': `@deva[याज्ञे परेर्ग्रहः] — The affix @deva[घञ्] applies after @deva[ग्रह्] preceded by @deva[परि] when the word relates to sacrificial contexts.

| Sacrificial | Otherwise |
|-------------|-----------|
| @deva[उत्तरपरिग्राहः] — "northern fencing of the altar" | @deva[परिग्रहः देवदत्तस्य] — "fencing of Devadatta" |
| @deva[अधरपरिग्राहः] — "southern fencing of the altar" | — |`,

  '33048': `@deva[धान्ये निर्वृणोः] — The affix @deva[घञ्] applies after @deva[वृ] preceded by @deva[नि] when the sense is grain (@deva[धान्य]).

| Grain-sense | Otherwise |
|-------------|-----------|
| @deva[नीवाराः] ("wild rice") | @deva[निवरा कन्या] ("virgin girl") |

The @deva[वृ] here includes both @deva[वृङ्] and @deva[वृञ्]. This debars @deva[अप्].`,

  '33049': `@deva[उतः श्रियुपूद्रुवः] — The affix @deva[घञ्] applies after @deva[श्रि], @deva[यु], @deva[पू], and @deva[द्रु] when preceded by @deva[उत्].

| Formation | Meaning |
|-----------|---------|
| @deva[उच्छ्रायः] | rising (of a planet) |
| @deva[उद्यावः] | mixing |
| @deva[उत्पावः] | purifying ghee |
| @deva[उद्द्रावः] | flight |

This debars @deva[अच्] (from @ref[3.3.56]).`,

  '33050': `@deva[उपात्प्रयावः] — The affix @deva[घञ्] applies after @deva[यु] preceded by @deva[उप] in forming @deva[उपयावः].

Result: @deva[उपयावः] — "approaching, approach."

This specifies the application of @deva[घञ्] for this particular combination beyond the general rule.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.3.1-50). Total: ${Object.keys(vasu).length}`);
