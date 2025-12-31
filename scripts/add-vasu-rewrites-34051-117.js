import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '34051': `@deva[प्रमाणे तृतीयासप्तम्योः] — @deva[णमुल्] comes after a root when a noun in instrumental or locative is compounded and "measure of length" (@deva[प्रमाण]) is intended.

Example: @deva[द्व्यङ्गुलोत्कर्षं खण्डिकां छिनत्ति] (or @deva[द्व्यङ्गुले उत्कर्षम्] or @deva[द्व्यङ्गुलेनोत्कर्षम्]) — "He cuts pieces of the length of two fingers."

See @ref[2.2.21] for optional compounding.`,

  '34052': `@deva[परीप्सायां पञ्चम्याः] — @deva[णमुल्] is added when a noun in ablative is compounded and "haste" (@deva[परीप्सा]) is intended.

| Example | Meaning |
|---------|---------|
| @deva[शय्योत्थायं धावति] (or @deva[शय्याया उत्थायम्]) | having risen from bed, he runs |

"Haste" = he runs with such urgency that he doesn't even perform ablutions — as soon as he rises, he runs.

Similarly: @deva[रन्ध्रापकर्षं पयः पिबति] — "He drinks milk withdrawing hastily from the opening."`,

  '34053': `@deva[द्वितीयायाश्च] — @deva[णमुल्] is added when a word in accusative is compounded and "haste" (@deva[परीप्सा]) is intended.

| Example | Meaning |
|---------|---------|
| @deva[यष्टिग्राहं युध्यन्ते] (or @deva[यष्टिं ग्राहम्]) | they fight, having hastily taken up sticks |
| @deva[लोष्ट्रग्राहं युध्यन्ते] | they fight with clods |

"Haste" = they are so eager to fight that they don't wait for proper weapons but grab whatever is at hand — sticks, stones, etc.`,

  '34054': `@deva[स्वाङ्गाच्चोपसर्जनादसंयोगोपधात्] — @deva[णमुल्] comes after a verb when a word in accusative denoting a limb of one's own body (@deva[स्वाङ्ग]) is compounded, if the limb's loss would not destroy life.

| Example | Meaning |
|---------|---------|
| @deva[भ्रूविक्षेपं कथयति] | he narrates, throwing his eyebrows (glances) about |
| @deva[अक्षिनिकोणं जल्पति] | he prattles with closed eyes |

@deva[स्वाङ्ग] = a non-liquid, non-gaseous body part capable of being pointed at — a member like hand/foot/eye, not the whole body.`,

  '34055': `@deva[परिक्लिश्यमाने च] — @deva[णमुल्] comes after a root when a word in accusative denoting one's own limb, which is completely afflicted by the action, is compounded.

@deva[परिक्लिश्यमान] = completely hurt or affected.

| Example | Meaning |
|---------|---------|
| @deva[उरःप्रतिपेषं युध्यन्ते] or @deva[उरःपेषं] | they fight so as to afflict their whole bosom |
| @deva[शिरःपेषं] or @deva[शिरःप्रतिपेषं] | afflicting the whole head |

Difference from previous sūtra: here the limb is completely affected, not just moved.`,

  '34056': `@deva[व्याप्यासेवायां विशपतिपदस्कन्दाम्] — @deva[णमुल्] comes after @deva[विश्] ("to enter"), @deva[पत्] ("to fall"), @deva[पद्] ("to go"), and @deva[स्कन्द्] ("to leap") when a word in accusative is compounded and the sense is complete pervasion (@deva[व्याप्ति]) and total absorption (@deva[आसेवा]).

@deva[व्याप्ति] = full and complete pervasion of substances with the actions.
@deva[आसेवा] = assiduous performance.

These express actions involving complete penetration or dedication.`,

  '34057': `@deva[क्रियान्तरे कालवाचिनि द्वितीयायामसिञ्तृषोः] — @deva[णमुल्] comes after @deva[अस्] ("to throw") and @deva[तृष्] ("to be thirsty") when a time-denoting word in accusative is compounded, expressing an intermission of the action.

@deva[क्रियान्तर] = interval between two actions.

| Example | Meaning |
|---------|---------|
| @deva[द्व्यहात्यासं गाः पाययति] or @deva[द्व्यहमत्यासम्] | he gives drink to cows after an interval of two days (every third day) |`,

  '34058': `@deva[नामन्यादिशोग्रहोः] — @deva[णमुल्] comes after @deva[आदिश्] ("to mention") and @deva[ग्रह्] ("to seize") when @deva[नामन्] ("name") in accusative is compounded.

| Example | Meaning |
|---------|---------|
| @deva[नामादेशमाचष्टे] | he mentions it, telling his name |
| @deva[नामग्राहं मामाह्वयति] | he calls me by taking my name (by my name) |`,

  '34059': `@deva[अव्ययस्याऽयथाभिप्रेताख्याने कृञः क्त्वाणमुलौ] — @deva[क्त्वा] and @deva[णमुल्] come after @deva[कृ] when an indeclinable word is compounded and the meaning is communicating something in an undesired or disagreeable way.

@deva[अयथाभिप्रेताख्यान] = expression of what is not really intended — communicating bad news loudly or good news in a low voice.

Compounding is optional.`,

  '34060': `@deva[तिर्यगपवर्गे] — @deva[क्त्वा] and @deva[णमुल्] come after @deva[कृ] when @deva[तिर्यक्] is compounded in the sense of "completing" (@deva[अपवर्ग]).

| Example | Meaning |
|---------|---------|
| @deva[तिर्यक्कृत्य गतः] / @deva[तिर्यक्कृत्वा गतः] / @deva[तिर्यक्कारं गतः] | = @deva[समाप्य गतः] — having completed, he went |

Why "completion"? Without that sense: @deva[तिर्यक्कृत्वा काष्ठं गतः] — "having placed the wood crosswise, he went."`,

  '34061': `@deva[तसौ स्वाङ्गात्कृभूभ्याम्] — @deva[क्त्वा] and @deva[णमुल्] are added to @deva[कृ] and @deva[भू] when compounded with a @deva[स्वाङ्ग] word ending in affix @deva[तस्] (technically @deva[तसि]/@deva[तसिल्] per @ref[5.3.78]).

@deva[स्वाङ्ग] was defined in @ref[3.4.54].

Example: Words like @deva[पृष्ठतः], @deva[शिरस्तः] etc. compounded with @deva[कृ] or @deva[भू].`,

  '34062': `@deva[नाधाच्विडाचश्च] — @deva[क्त्वा] and @deva[णमुल्] are added to @deva[कृ] and @deva[भू] when compounded with words ending in:
1. Affix @deva[ना] (from @ref[5.2.27] @deva[विनञ्भ्यां नानाञौ नसह])
2. Affix with force of @deva[धा] (from @ref[5.3.42] @deva[संख्याया विधार्थे धा])
3. Words with @deva[च्वि] sense ("to make/become something not existing before" — @ref[5.4.50])`,

  '34063': `@deva[तूष्णीं भूतोऽपि] — @deva[क्त्वा] and @deva[णमुल्] are added to @deva[भू] ("to be") when @deva[तूष्णीम्] ("silently") is compounded.

| Forms |
|-------|
| @deva[तूष्णीम्भूय] |
| @deva[तूष्णीं भूत्वा] |
| @deva[तूष्णीम्भावम्] |

All mean "having become silent."

The repetition of @deva[भू] here shows that @deva[कृ]'s @deva[अनुवृत्ति] ceases entirely.`,

  '34064': `@deva[आनुलोम्येऽन्वचः] — @deva[क्त्वा] and @deva[णमुल्] come after @deva[भू] when @deva[अन्वक्] meaning "being favorably disposed" (@deva[आनुलोम्य]) is compounded.

@deva[आनुलोम्य] = agreeable, friendly, doing according to another's wish.

| Forms | Meaning |
|-------|---------|
| @deva[अन्वग्भूय] / @deva[अन्वग्भूत्वा] / @deva[अन्वग्भावमास्ते] | he is favorably disposed |

Why "friendly"? Without that sense: @deva[अन्वग्भूत्वा तिष्ठति] — "he remains behind."`,

  '34065': `@deva[शकधृषज्ञाग्लाघटरभलभक्रमसहार्हास्त्यर्थेषु तुमुन्] — @deva[तुमुन्] is added to every verb when another verb having the sense of @deva[शक्], @deva[धृष्], @deva[ज्ञा], @deva[ग्लै], @deva[घट्], @deva[रभ्], @deva[लभ्], @deva[क्रम्], @deva[सह्], @deva[अर्ह्], or @deva[अस्] is in construction.

| Root | Meaning |
|------|---------|
| @deva[शक्] | to be able |
| @deva[धृष्] | to make bold |
| @deva[ज्ञा] | to know |
| @deva[ग्लै] | to be weary |
| @deva[घट्] | to strive |
| @deva[रभ्] | to begin |
| @deva[लभ्] | to get |
| @deva[क्रम्] | to set about |
| @deva[सह्] | to bear |
| @deva[अर्ह्] | to be pleased/condescend |
| @deva[अस्] | to be |

The Infinitive use here differs from @ref[3.4.66].`,

  '34066': `@deva[पर्याप्त्यर्थे अलमर्थेषु तुमुन्] — @deva[तुमुन्] comes after a verb when @deva[अलम्] and its synonyms expressing capability (@deva[पर्याप्ति]) are in composition.

@deva[पर्याप्ति] = capability, ability, fullness.

| Example | Source |
|---------|--------|
| @deva[लिखितमपि ललाटे प्रोज्झितुं कः समर्थः] | Hitopadeśa — "Who is able to avoid what is stamped on his forehead?" |
| @deva[लोकान् अलं दग्धुं हि तत्तपः] | Kumāra II.56 — "His penance is able to burn the worlds" |`,

  '34067': `@deva[कर्तरि कृत्] — The @deva[कृत्] affixes are used in the sense of agent (@deva[कर्तृ]).

When no other special sense has been assigned, this rule applies and fixes the force of the affix.

This does not apply to @deva[कृत्] affixes like @deva[ख्युन्] (@ref[3.2.5]-@ref[3.2.6]) which have special senses assigned, but does apply to affixes like @deva[ण्वुल्] and @deva[तृच्] (@ref[3.1.133]).

Example: @deva[कारकः] = "doer."`,

  '34068': `@deva[भव्यगेयप्रवचनीयोपस्थानीयजन्याप्लाव्याऽऽपाद्यैश्च] — The words @deva[भव्य], @deva[गेय], @deva[प्रवचनीय], @deva[उपस्थानीय], @deva[जन्य], @deva[आप्लाव्य], and @deva[आपाद्य] may optionally denote the agent.

These are formed by @deva[कृत्य] affixes and would normally denote action/object by @ref[3.4.70]. This sūtra makes them optionally denote the agent as well.

Alternatively, they denote action-name and object.`,

  '34069': `@deva[लः कर्मणि च भावे चाऽकर्मकेभ्यः] — The tense affixes called @deva[ल] denote:
1. Object (@deva[कर्मन्])
2. Agent (@deva[कर्तृ])
3. After intransitive verbs: action (@deva[भाव]) as well as agent

The term @deva[ल्] = the 10 affixes @deva[लट्], @deva[लिट्], etc. — @deva[ल्] is common to all. @deva[लः] is nominative plural of @deva[ल्].

By "object and agent" is meant passive and active constructions.`,

  '34070': `@deva[तयोरेव कृत्यक्तखलर्थाः] — The @deva[कृत्य] affixes, @deva[क्त], and affixes with @deva[खल्] sense have only these two senses: action (@deva[भाव]) and object (@deva[कर्म]).

The word @deva[तयोः] ("of those two") refers to @deva[भाव] and @deva[कर्म]. The word @deva[एव] ("only") excludes "agent."

| Example | Meaning |
|---------|---------|
| @deva[कर्तव्यः कटो भवता] | the mat must be made by you |
| @deva[भोक्तव्यः ओदनो भवता] | the rice must be eaten by you |`,

  '34071': `@deva[आदिकर्मणि क्तः कर्तरि च] — @deva[क्त] also denotes the agent when expressing the beginning of an action (@deva[आदिकर्मन्]).

@deva[आदिकर्मणि] = when the action is intended merely as having been begun.

The @deva[च] indicates that even with "beginning" sense, @deva[क्त] may denote act and object as well.

Example: @deva[प्रकृतः कटं देवदत्तः] — "Devadatta has begun the mat" (agent-denoting @deva[क्त]).`,

  '34072': `@deva[गत्यर्थाकर्मकश्लिषशीङ्स्थाऽऽसवसजनरुहजीर्यतिभ्यश्च] — @deva[क्त] denotes agent (as well as act and object) after:
1. Verbs implying motion (@deva[गत्यर्थ])
2. Intransitive roots (@deva[अकर्मक])
3. @deva[श्लिष्] ("embrace"), @deva[शीङ्] ("lie"), @deva[स्था] ("stand"), @deva[आस्] ("sit"), @deva[वस्] ("dwell"), @deva[जन्] ("produce"), @deva[रुह्] ("mount"), @deva[जृ] ("grow old")

| Example | Meaning |
|---------|---------|
| @deva[गतो देवदत्तः] | Devadatta has gone (agent-denoting) |
| @deva[श्लिष्टः] | embraced |
| @deva[शयितः] | lying |
| @deva[स्थितः] | standing |`,

  '34073': `@deva[दाशगोघ्नौ सम्प्रदाने] — The words @deva[दाश] and @deva[गोघ्न] are irregularly formed, and their affixes denote the Dative/Recipient (@deva[सम्प्रदान]).

@deva[दाश] comes from @deva[दाशृ] ("to give") by affix @deva[अच्] under @ref[3.1.134]. Being a @deva[कृदन्त], it would normally denote agent by @ref[3.4.67].

| Word | Meaning |
|------|---------|
| @deva[दाश] | to whom something is given (a fisherman, servant) |
| @deva[गोघ्न] | for whom a cow is killed (a guest) |`,

  '34074': `@deva[भीमादयोऽपादाने] — The words @deva[भीम] etc. are irregularly formed and denote Ablation (@deva[अपादान]).

These are formed by Uṇādi affixes: @deva[भी + मक् → भीम] (Uṇ. I.145.148); @deva[भी + षुक् + मक् → भीष्म] (Uṇ. I.148), etc.

By the next sūtra, Uṇādi words ordinarily don't denote recipient/ablation — but @deva[भीमादि] words do.

Bhīmādi list: @deva[भीमः], @deva[भीष्मः], @deva[भयानकः], etc.`,

  '34075': `@deva[ताभ्यामन्यत्रोणादयः] — Words formed by @deva[उणादि] affixes denote senses other than these two: Recipient (@deva[सम्प्रदान]) and Ablation (@deva[अपादान]).

Uṇādi affixes are a subdivision of @deva[कृत्], which by @ref[3.4.67] would denote agent. This sūtra makes them also denote object, instrument, and location.

The word @deva[ताभ्याम्] includes @deva[सम्प्रदान] as well — Uṇādi words denote everything except these two unless specifically stated (as in @ref[3.4.74]).`,

  '34076': `@deva[ध्रौव्यगतिप्रत्यवसानार्थेभ्यः क्तस्याधिकरणे च] — @deva[क्त] after roots denoting "fixedness" (@deva[ध्रौव्य]), "motion" (@deva[गति]), or "eating" (@deva[प्रत्यवसान]) also gives the sense of location (@deva[अधिकरण]).

@deva[ध्रौव्यार्थ] verbs are intransitive ("persisting in a place").

The @deva[च] indicates @deva[क्त] expresses other relations too:
- After @deva[ध्रौव्यार्थ]: agent, act, and location
- After @deva[गत्यर्थ]: agent, act, and location
- After @deva[प्रत्यवसानार्थ] ("eating"): object and location`,

  '34077': `@deva[लस्य] — In place of @deva[ल], the affixes announced hereafter will be substituted.

This sūtra consists of one word @deva[लस्य] ("of @deva[ल]") — the genitive singular of @deva[ल्], with @deva[अ] added for pronunciation.

This is an @deva[अधिकार] sūtra. @deva[ल्] = the 10 tense affixes: @deva[लट्] (present), @deva[लिट्] (perfect), @deva[लुट्] (1st future), @deva[लृट्] (2nd future), @deva[लोट्] (imperative), @deva[लेट्] (Vedic subjunctive), @deva[लङ्] (imperfect), @deva[लिङ्] (potential/benedictive), @deva[लुङ्] (aorist), @deva[लृङ्] (conditional).`,

  '34078': `@deva[तिप्तस्झिसिप्थस्थमिब्वस्मस्तातांझथासाथांध्वमिड्वहिमहिङ्] — These are the substitutes of @deva[ल]:

**Parasmaipada:**
| Person | Singular | Dual | Plural |
|--------|----------|------|--------|
| 3rd | @deva[तिप्] | @deva[तस्] | @deva[झि] |
| 2nd | @deva[सिप्] | @deva[थस्] | @deva[थ] |
| 1st | @deva[मिप्] | @deva[वस्] | @deva[मस्] |

**Ātmanepada:**
| Person | Singular | Dual | Plural |
|--------|----------|------|--------|
| 3rd | @deva[त] | @deva[आताम्] | @deva[झ] |
| 2nd | @deva[थास्] | @deva[आथाम्] | @deva[ध्वम्] |
| 1st | @deva[इट्] | @deva[वहि] | @deva[महिङ्] |

These are the well-known conjugational/personal endings.`,

  '34079': `@deva[टित आत्मनेपदानां टेरे] — The substitute @deva[ए] replaces the final portion (@deva[टि]) of Ātmanepada substitutes of @deva[ल] which has indicatory @deva[ट्].

The 6 @deva[ल]-affixes with indicatory @deva[ट्]: @deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्].

| Original | Becomes |
|----------|---------|
| @deva[त] | @deva[ते] |
| @deva[आताम्] | @deva[आते] |
| @deva[झ] | @deva[अन्ते] |
| @deva[थास्] | @deva[से] (@ref[3.4.80]) |
| etc. | etc. |`,

  '34080': `@deva[थासस्से] — @deva[से] is the substitute of @deva[थास्] in tenses having indicatory @deva[ट्].

In the 6 @deva[टित्] tenses (@deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्]), the Ātmanepada @deva[थास्] is replaced by @deva[से].

Examples: @deva[पचसे], @deva[पेचिषे], @deva[पक्तासे], @deva[पक्ष्यसे].`,

  '34081': `@deva[लिटस्तझयोरेशिरेच्] — In @deva[लिट्] (Perfect), @deva[एश्] and @deva[इरेच्] are substitutes of @deva[त] and @deva[झ] respectively.

- @deva[श्] of @deva[एश्] indicates whole-affix replacement (@ref[1.1.55])
- @deva[च्] of @deva[इरेच्] is for accent (@ref[6.1.165])

| Original | Substitute | Example |
|----------|------------|---------|
| @deva[त] | @deva[ए] | @deva[पेचे] |
| @deva[झ] | @deva[इरे] | @deva[पेचिरे] |`,

  '34082': `@deva[परस्मैपदानां णलतुसुस्थलथुसणल्वमाः] — In @deva[लिट्] (Perfect), these substitute for Parasmaipada affixes:

| Person | Singular | Dual | Plural |
|--------|----------|------|--------|
| 3rd | @deva[णल्] (@deva[अ]) | @deva[अतुस्] (@deva[अतुः]) | @deva[उस्] (@deva[उः]) |
| 2nd | @deva[थल्] (@deva[थ]) | @deva[अथुस्] (@deva[अथुः]) | @deva[अ] |
| 1st | @deva[णल्] (@deva[अ]) | @deva[व] | @deva[म] |

@deva[ण्] in @deva[णल्] causes vṛddhi (@ref[7.2.115]).`,

  '34083': `@deva[विदो लटो वा] — The 9 Perfect affixes may optionally be added in @deva[लट्] (Present) after @deva[विद्] ("to know").

| Person | Perfect form | Present form |
|--------|--------------|--------------|
| 3rd sg. | @deva[वेद] | @deva[वेत्ति] |
| 3rd du. | @deva[विदतुः] | @deva[वित्तः] |
| 3rd pl. | @deva[विदुः] | @deva[विदन्ति] |
| 2nd sg. | @deva[वेत्थ] | @deva[वेत्सि] |
| 1st sg. | @deva[वेद] | @deva[वेद्मि] |`,

  '34084': `@deva[ब्रुवः पञ्चानामाद्य आहो भूते] — For @deva[ब्रू] ("to speak") in @deva[लट्], the first 5 Perfect-tense affixes may optionally substitute, with @deva[आह] replacing @deva[ब्रू].

| Person | Perfect form | Regular form |
|--------|--------------|--------------|
| 3rd sg. | @deva[आह] | @deva[ब्रवीति] |
| 3rd du. | @deva[आहतुः] | @deva[ब्रूतः] |
| 3rd pl. | @deva[आहुः] | @deva[ब्रुवन्ति] |
| 2nd sg. | @deva[आत्थ] | @deva[ब्रवीषि] |
| 2nd du. | @deva[आहथुः] | @deva[ब्रूथः] |`,

  '34085': `@deva[लोटो लङ्वत्] — The personal endings of @deva[लोट्] (Imperative) are like those of @deva[लङ्] (Imperfect).

This is an @deva[अतिदेश] sūtra. As @deva[लङ्] has affixes @deva[ताम्], @deva[तम्], @deva[त], @deva[व], @deva[म], so does @deva[लोट्].

Examples: @deva[पचताम्], @deva[पचतम्], @deva[पचत], @deva[पचाव], @deva[पचाम].

@note[The augment @deva[अट्]/@deva[आट्] and @deva[जुस्] substitution of @deva[लङ्] do not apply to @deva[लोट्] — only the personal endings are shared.]`,

  '34086': `@deva[एरुः] — In @deva[लोट्] (Imperative), @deva[उ] substitutes for @deva[इ].

| Original | Becomes |
|----------|---------|
| @deva[ति] | @deva[तु] |
| @deva[अन्ति] | @deva[अन्तु] |

@note[By vārttika, this doesn't apply to @deva[हि] and @deva[नि] of @deva[लोट्] — their @deva[इ] is not changed to @deva[उ], either because they're taught that way or because the @deva[वा] of @ref[3.4.83] is understood.]`,

  '34087': `@deva[सेर्ह्यपिच्च] — In @deva[लोट्] (Imperative), @deva[हि] substitutes for @deva[सि], and this @deva[हि] does not have indicatory @deva[प्] (i.e., it is udātta-accented).

Though substitutes generally inherit properties of the original (@ref[1.1.56]), @deva[हि] replacing @deva[सिप्] would be @deva[पित्] — this sūtra specifies it's not.

Examples: @deva[लुनीहि], @deva[पुनीहि], @deva[राध्नुहि].`,

  '34088': `@deva[अपिच्च छन्दसि] — In the Vedas, the substitute @deva[हि] is optionally treated as not having indicatory @deva[प्].

Result: 2nd person singular @deva[लोट्] has two forms in Vedas:

| With @deva[अपित्] | With @deva[पित्] |
|------------------|-----------------|
| @deva[प्रीणाहि] | @deva[प्रीणीहि] |
| @deva[युयुधि] | @deva[युयोधि] |

@deva[धि] substitutes for @deva[हि] in Vedas by @ref[6.4.103].`,

  '34089': `@deva[मेर्निः] — In @deva[लोट्] (Imperative), @deva[नि] substitutes for @deva[मि].

This supersedes the @deva[इ → उ] change and @deva[लोप] rules.

Examples: @deva[पचानि], @deva[पठानि].`,

  '34090': `@deva[आमेतः] — In @deva[लोट्] (Imperative), @deva[आम्] substitutes for what would otherwise become @deva[ए] by @ref[3.4.79] (@deva[टित आत्मनेपदानां टेरे]).

This relates to Ātmanepada @deva[ए]. In the Imperative, @deva[आम्] replaces @deva[ए].

Examples: @deva[पचताम्], @deva[पचेताम्], @deva[पचन्ताम्].`,

  '34091': `@deva[सवाभ्यां वामौ] — In @deva[लोट्], for @deva[ए] coming after @deva[स्], substitute @deva[व्]; for @deva[ए] after @deva[व्], substitute @deva[अम्].

This supersedes the @deva[आम्] substitution of the previous sūtra.

| For | Becomes | Example |
|-----|---------|---------|
| @deva[से] | @deva[स्व] | @deva[पचस्व] |
| @deva[ध्वे] | @deva[ध्वम्] | @deva[पचध्वम्] |`,

  '34092': `@deva[आडुत्तमस्य पिच्च] — In @deva[लोट्] (Imperative), @deva[आट्] is the augment of first-person affixes, and the termination is treated as having indicatory @deva[प्].

| Parasmaipada |
|--------------|
| @deva[आनि], @deva[आव], @deva[आम] |

Examples: @deva[करवाणि], @deva[करवाव], @deva[करवाम]; @deva[करवै], @deva[करवावहै], @deva[करवामहै].`,

  '34093': `@deva[एतोऽऐ] — In @deva[लोट्] (Imperative), @deva[ऐ] substitutes for @deva[ए] in first-person affixes.

This relates to Ātmanepada affixes.

Examples: @deva[करवै], @deva[करवावहै], @deva[करवामहै].

@note[@deva[ए] resulting from sandhi is not changed to @deva[ऐ]: @deva[पचाव + इदम् = पचावेदम्], @deva[पचाम + इदम् = पचामेदम्] — here @deva[ए] belongs to the Imperative by @ref[6.1.85] but doesn't become @deva[ऐ].]`,

  '34094': `@deva[लेटोऽडाटौ] — The augments @deva[अट्] and @deva[आट्] are added to the @deva[तिङ्] (personal endings) of @deva[लेट्] (Vedic Subjunctive).

@deva[अट्] and @deva[आट्] are added alternately, not simultaneously.

| Formation | Example |
|-----------|---------|
| @deva[जुष् + सिप् + अट् + त्] | @deva[जोषिषत्] |
| @deva[पत् + आट् + ति] | @deva[पताति] |

See @ref[3.1.34] for @deva[सिप्] addition.`,

  '34095': `@deva[आतआत्वैःप्रथमद्वितीययोः] — In @deva[लेट्] (Vedic Subjunctive), @deva[ऐ] substitutes for @deva[आ] in the 1st and 2nd person dual Ātmanepada.

Examples: @deva[मन्त्रयैते], @deva[मन्त्रयैथे], @deva[करवैते], @deva[करवैथे].

Why isn't augment @deva[आट्] changed to @deva[ऐ]? Because that would make the rule ordaining @deva[आट्] superfluous.`,

  '34096': `@deva[अन्यत्रापि दृश्यते] — In @deva[लेट्] (Vedic Subjunctive), @deva[ऐ] optionally substitutes for @deva[ए] in positions other than those in the previous sūtra.

Examples: @deva[शयै], @deva[ईशै] in @deva[सप्ताहानि शयै], @deva[अहमेव पशूनामीशै].

Alternatively, simply @deva[ए]: @deva[यत्र क्व च ते मनो...].`,

  '34097': `@deva[ईर्लोपश्छन्दसि परस्मैपदेषु] — In @deva[लेट्] (Vedic Subjunctive), @deva[इ] is optionally elided in Parasmaipada affixes.

The @deva[वा] from the previous sūtra is understood.

| With elision | Without |
|--------------|---------|
| @deva[जोषिषत्] (Ṛg. II.35.1) | @deva[पताति विद्युत्] (Ṛg. VII.25.1) |
| @deva[तारिषत्] (Ṛg. I.25.12) | @deva[च्यावयाति] |

The @deva[इ] of Ātmanepada @deva[इट्], @deva[वहि], @deva[महि] is not elided.`,

  '34098': `@deva[सोऽपि वा प्रथमस्य] — In @deva[लेट्] (Vedic Subjunctive), the @deva[स्] of first-person affixes is optionally elided.

| With elision | Without |
|--------------|---------|
| @deva[करवाव] | @deva[करवावः] |
| @deva[करवाम] | @deva[करवामः] |

"First person" indicates @deva[स्] is not elided in other persons.`,

  '34099': `@deva[णित्यादेशाद्यसेः] — There is always elision of @deva[स्] of first-person affixes when they substitute for @deva[ल] having indicatory @deva[ङ्].

The 4 @deva[ङित्] tense-affixes: @deva[लङ्], @deva[लिङ्], @deva[लुङ्], @deva[लृङ्].

In these (Imperfect, Potential, Aorist, Conditional), @deva[स्]-elision is not optional (as in @ref[3.4.98]) but compulsory.`,

  '34100': `@deva[इतश्च] — There is elision of @deva[इ] of Parasmaipada affixes substituting for @deva[ल] with indicatory @deva[ङ्].

| Original | Becomes |
|----------|---------|
| @deva[ति] | @deva[त्] |
| @deva[सि] | @deva[स्] |

The @deva[इ] of Ātmanepada is not elided because the @deva[अनुवृत्ति] of "Parasmaipada" from @ref[3.4.97] applies.

Examples: @deva[अपचत्], @deva[अपाक्षीत्], but @deva[अपचावहि], @deva[अपचामहि].`,

  '34101': `@deva[तस्थस्थमिपां तांतंतामः] — @deva[ताम्], @deva[तम्], @deva[त], and @deva[आम्] substitute for @deva[तस्], @deva[थस्], @deva[थ], and @deva[मिप्] respectively in any @deva[ल] with indicatory @deva[ङ्].

Examples: @deva[अपचताम्], @deva[अपचतम्], @deva[अपचत], @deva[अपचम्]; @deva[अपाक्ताम्], @deva[अपाक्तम्], @deva[अपाक्त], @deva[अपाक्षम्].`,

  '34102': `@deva[लिङस्सीयुट्] — The @deva[तिङ्] (personal endings) of @deva[लिङ्] (Potential and Benedictive) take the augment @deva[सीयुट्].

- @deva[ट्] is indicatory — augment is placed before affixes (@ref[1.1.46])
- @deva[उ] is for pronunciation
- Applies to Ātmanepada affixes

In Potential, @deva[स्] is elided by @ref[7.2.79]; @deva[य्] before consonant-initial endings is also dropped.`,

  '34103': `@deva[यासुट् परस्मैपदेषूदात्तो ङिच्च] — For Parasmaipada affixes of Potential, @deva[यासुट्] (udātta-accented) is the augment, and the termination is treated as having indicatory @deva[ङ्].

This debars @deva[सीयुट्]. The real augment is @deva[यास्]; @deva[उट्] is indicatory.

All augments are normally anudātta — this sūtra makes @deva[यासुट्] an exception with udātta accent.`,

  '34104': `@deva[किदाशिषि] — The augment @deva[यासुट्] also comes after @deva[लिङ्] denoting benediction, is udātta-accented, and the substitutes are treated as having indicatory @deva[क्].

The @deva[कित्] here refers to personal affixes of Benedictive, not to @deva[यासुट्] (which is already @deva[ङित्] by the previous rule). @deva[ङित्] and @deva[कित्] are equal in prohibiting guṇa/vṛddhi.`,

  '34105': `@deva[झस्य रन्] — @deva[रन्] substitutes for @deva[झ] in @deva[लिङ्] (Potential and Benedictive).

@deva[झ] is generally replaced by @deva[अन्त] (@ref[7.1.3]), but in @deva[लिङ्] it's replaced by @deva[रन्].

Examples: @deva[पचेरन्], @deva[यजेरन्], @deva[कृषीरन्].`,

  '34106': `@deva[इटोऽत्] — Short @deva[अ] substitutes for @deva[इ] of the Ātmanepada 1st person singular in Potential and Benedictive.

Examples: @deva[पचेय], @deva[यजेय], @deva[कृषीय], @deva[हृषीय].

@note[The @deva[त्] in @deva[अत्] is not indicatory — it's added merely for euphony, not as part of the substitute.]`,

  '34107': `@deva[सुट् तिथोः] — The augment @deva[सुट्] is added to @deva[त] and @deva[थ] when they are initial letters of affixes in Potential and Benedictive.

Unlike @deva[सीयुट्] (which attaches to @deva[लिङ्] itself), @deva[सुट्] attaches to specific letters @deva[त]/थ within the affixes.

Example: @deva[त] → @deva[स्त], @deva[थ] → @deva[स्थ].`,

  '34108': `@deva[झेर्जुस्] — In Potential and Benedictive, @deva[जुस्] substitutes for @deva[झि] (1st person plural Parasmaipada ending).

This debars @deva[अन्त] (@ref[7.1.3]).

Examples: @deva[पचेयुः], @deva[यजेयुः].`,

  '34109': `@deva[सिजभ्यस्तविदिभ्यश्च] — @deva[जुस्] substitutes for @deva[झि] when it comes after:
1. @deva[लुङ्] (Aorist) in @deva[सिच्]
2. @deva[लङ्] (Imperfect) of a reduplicated verb
3. The root @deva[विद्] ("to know")

This applies to @deva[ङित्] tenses other than @deva[लिङ्] — namely @deva[लङ्] and @deva[लुङ्].

@deva[सिच्] is used in forming the first Aorist. Reduplicated verbs and @deva[विद्] form their third Aorist.`,

  '34110': `@deva[आतो लुक् सिचोऽट्] — When @deva[सिच्] is elided, @deva[जुस्] substitutes for @deva[झि] after a @deva[लुङ्] (Aorist) stem ending in long @deva[आ].

@deva[सिच्] is elided by @ref[2.4.77].

Examples: @deva[अदुः], @deva[अधुः], @deva[अस्थुः].

This restricts @ref[3.4.109]: only @deva[जुस्] applies when @deva[सिच्] is elided and the verb ends in @deva[आ].`,

  '34111': `@deva[लङः शाकटायनस्यैव] — According to Śākaṭāyana only, @deva[जुस्] substitutes for @deva[झि] in @deva[लङ्] (Imperfect) of roots ending in long @deva[आ].

| Śākaṭāyana | Alternative |
|------------|-------------|
| @deva[अयुः] | @deva[अयान्] |
| @deva[अवुः] | @deva[अवान्] |

Why repeat @deva[लङ्] when context would supply it? To indicate this is specifically Śākaṭāyana's view.`,

  '34112': `@deva[द्विषश्च] — According to Śākaṭāyana only, @deva[जुस्] substitutes for @deva[झि] in @deva[लङ्] (Imperfect) after @deva[द्विष्] ("to hate").

| Śākaṭāyana | Others |
|------------|--------|
| @deva[अद्विषुः] | @deva[अद्विषन्] |`,

  '34113': `@deva[तिङ्शित्सार्वधातुकम्] — All personal endings (@deva[तिप्] through @deva[महिङ्] per @ref[3.4.78]) and all affixes with indicatory @deva[श्] are called @deva[सार्वधातुक].

This applies to affixes relating to verbal roots, not to @deva[तद्धित] affixes.

Examples: @deva[स्वपिति], @deva[रोदिति], @deva[पचमानः], @deva[पयमानः].

Exceptions: @deva[लिट्] and @deva[आशीर्लिङ्] (Benedictive).`,

  '34114': `@deva[आर्धधातुकं शेषः] — The remaining affixes (other than @deva[तिङ्] and those with indicatory @deva[श्]) attached to a verbal root are called @deva[आर्धधातुक].

Examples: Affixes @deva[तृ], @deva[तुम्], @deva[तव्यम्] as in @deva[लविता], @deva[लवितुम्], @deva[लवितव्यम्].

The augment @deva[इट्] is added because these are @deva[आर्धधातुक] (per @ref[7.2.35]).

The @deva[अनुवृत्ति] of @deva[धातोः] from @ref[3.1.91] runs through here.`,

  '34115': `@deva[लिट् च] — The @deva[तिङ्] (personal endings) of @deva[लिट्] (Perfect) are also called @deva[आर्धधातुक].

This debars them from being @deva[सार्वधातुक]. Being @deva[आर्धधातुक], some take augment @deva[इट्].

Examples: @deva[पेचिथ], @deva[शेकिथ]; from @deva[ग्लै]: @deva[जग्ले] — @deva[आ] elided by @ref[6.4.64] since affix is @deva[आर्धधातुक].

Also, @deva[आर्धधातुक] affixes don't admit vikaraṇas like @deva[शप्].`,

  '34116': `@deva[लिङाशिषि] — When the sense is benediction, the substitutes of @deva[लिङ्] (Benedictive) are called @deva[आर्धधातुक].

This debars them from being @deva[सार्वधातुक]. Being @deva[आर्धधातुक]:
1. They take augment @deva[इट्]
2. The root doesn't take vikaraṇas @deva[शप्], etc.

Example: From @deva[लू] ("to cut"), in @deva[आशीर्लिङ्]: @deva[लविसीष्ट].`,

  '34117': `@deva[च्छन्दस्युभयथा] — In the Vedas, the distinction between @deva[सार्वधातुक] and @deva[आर्धधातुक] is not always maintained — affixes are used promiscuously.

Sometimes @deva[तिङ्] and @deva[शित्] are treated as @deva[आर्धधातुक].

Example: @deva[वर्धन्तु त्वा सुष्टुतयः] — here @deva[लोट्] affixes are treated as @deva[आर्धधातुक], so there's elision of the final vowel.

In Vedic, there's no hard-and-fast rule about this distinction.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.4.51-117). Total: ${Object.keys(vasu).length}`);
