import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '53050': `@deva[षष्ठ्यष्टम्योर्ञश्च] — After @deva[षष्ठ] and @deva[अष्टम], @deva[ञ] (realized as @deva[अ]) and @deva[अन्] come when "part" is meant — but NOT in the Vedas.

| Ordinal | With @deva[अन्] | With @deva[ञ] |
|---------|---------------|--------------|
| @deva[षष्ठ] | @deva[ष॑ष्ठः] | @deva[षा॑ष्ठः] |
| @deva[अष्टम] | @deva[अ॑ष्टमः] | @deva[आ॑ष्टमः] |`,

  '53051': `@deva[षष्ठ्यष्टम्योः कन्लुकौ मानपश्वङ्गयोः] — After @deva[षष्ठ] and @deva[अष्टम]:
- @deva[कन्] when a fraction of @deva[मान] (a grain measure) is meant
- @deva[लुक्] when a part of an animal's body is meant

| Context | Ordinal | Form | Meaning |
|---------|---------|------|---------|
| Measure | @deva[षष्ठ] | @deva[ष॑ष्ठकः भागः] | a sixth of a grain measure |
| Body part | @deva[अष्टम] | @deva[अष्टमो भागः] | an eighth part of animal body |

The @deva[लुक्] elides both @deva[ञ] and @deva[अन्]. The affixes from previous sūtras also apply.`,

  '53052': `@deva[एकस्याकिनिच् चासहाये] — The affix @deva[आकिनिच्] (realized as @deva[आकिन्]) comes after @deva[एक] when the meaning is "without a companion."

| Affix | Form |
|-------|------|
| @deva[आकिनिच्] | @deva[एकाकिन्] (nom. @deva[एकाकी]) |
| @deva[कन्] | @deva[एककः] |
| @deva[लुक्] | @deva[एकः] |

Here @deva[एक] means "alone" (not the numeral "one"). Thus dual @deva[एकाकिनौ], plural @deva[एकाकिनः] are possible.`,

  '53053': `@deva[भूतपूर्वे चरट्] — The affix @deva[चरट्] (with feminine @deva[ङीप्]) comes without changing the denotation when the meaning is "this had been before."

@deva[भूतपूर्व] = something done in past time

| Base | + @deva[चरट्] | Meaning |
|------|-------------|---------|
| @deva[आढ्य] | @deva[आढ्यचरः] (f. @deva[आढ्यचरी]) | once opulent |
| @deva[सुकुमार] | @deva[सुकुमारचरः] | once delicate |

The @deva[ट्] indicates feminine is @deva[ङीप्]. The @deva[च्] is not indicatory here (proving @deva[चुटु] rule is anitya).`,

  '53054': `@deva[षष्ठ्याः रूप्यचरटौ] — After a stem in the genitive, @deva[रूप्य] and @deva[चरट्] come when meaning "having formerly belonged to someone."

@deva[देवदत्तस्य भूतपूर्वो गौः] = @deva[देवदत्तरूप्यः] or @deva[देवदत्तचरः]

"The cow that formerly belonged to Devadatta"

Here @deva[भूतपूर्व] qualifies the sense of the AFFIX (not the base, as in the previous sūtra).`,

  '53055': `@deva[अतिशायने तमबिष्ठनौ] — The affixes @deva[तमप्] (realized as @deva[तम]) and @deva[इष्ठन्] (realized as @deva[इष्ठ]) form the SUPERLATIVE when "surpassing" is meant.

@deva[अतिशायन] = surpassing

| Base | + @deva[तमप्] | + @deva[इष्ठन्] |
|------|-------------|---------------|
| @deva[आढ्य] | @deva[आढ्यतमः] | — |
| @deva[दर्शनीय] | @deva[दर्शनीयतमः] | — |
| @deva[पटु] | @deva[पटुतमः] | @deva[पटिष्ठः] |
| @deva[गुरु] | @deva[गुरुतमः] | @deva[गरिष्ठः] |
| @deva[लघु] | @deva[लघुतमः] | @deva[लघिष्ठः] (@ref[6.4.155]) |

@deva[आढ्यतमः] = "all these are rich, but he surpasses them all in riches" — the richest`,

  '53056': `@deva[तिङश्च] — @deva[तमप्] also comes after a finite verb when "surpassing" is meant.

Normally taddhita affixes come only after nominal stems (@ref[4.1.1]). This sūtra extends @deva[तमप्] to verbs.

@deva[पचतितमाम्] — "he cooks surprisingly" (the @deva[आम्] is added by @ref[5.4.11])
@deva[जल्पतितमाम्] — "he speaks the most"

@note[@deva[इष्ठन्] never comes after verbs — it's restricted to adjectives by @ref[5.3.58].]`,

  '53057': `@deva[द्विवचनविभज्योपपदे तरबीयसुनौ] — The affixes @deva[तरप्] (realized as @deva[तर]) and @deva[ईयसुन्] (realized as @deva[ईयस्]) form the COMPARATIVE when:
1. Comparison is between TWO things, or
2. The upapada distinguishes one from another

These supersede @deva[तमप्] and @deva[इष्ठन्].

| Base | + @deva[तरप्] | + @deva[ईयसुन्] |
|------|-------------|----------------|
| @deva[आढ्य] | @deva[आढ्यतरः] | @deva[आढ्यीयान्] |

@deva[द्वाविमावाढ्यौ, अयमनयोरतिशयेन] = @deva[आढ्यतरः] — "both are rich, but he is richer of the two"

Note: @deva[यथासंख्य] (@ref[1.3.10]) does not apply here.`,

  '53058': `@deva[अजादी गुणवचनादेव] — The vowel-initial affixes @deva[ईयस्] and @deva[इष्ठ] come ONLY after words denoting attributes (guṇavacana).

This restricts @deva[इष्ठन्] and @deva[ईयसुन्] to adjectives/adverbs.

| Attribute | @deva[ईयस्] | @deva[इष्ठ] |
|-----------|-----------|----------|
| @deva[लघु] | @deva[लघीयान्] | @deva[लघिष्ठः] |
| @deva[पटु] | @deva[पटीयान्] | @deva[पटिष्ठः] |

Non-attributes like @deva[पाचक] take only @deva[तर/तम]:
@deva[पाचकतरः], @deva[पाचकतमः] (not *@deva[पाचकीयान्], *@deva[पाचकिष्ठः])

@deva[एव] restricts the AFFIXES, not the bases — so @deva[पटुतरः], @deva[पटुतमः] are also valid.`,

  '53059': `@deva[तुभ्यां छन्दसि] — In the Vedas, @deva[इष्ठन्] and @deva[ईयसुन्] come after stems ending in @deva[तृ] (either @deva[तृन्] or @deva[तृच्]).

This extends these affixes beyond attributes.

@deva[अतिशयेन कर्ता] = @deva[करिष्ठः] (@deva[कर्तृ] + @deva[इष्ठन्] = @deva[कर्] + @deva[इष्ठ] by @ref[6.4.154])

Examples: @deva[आसुर्ति करिष्ठः], @deva[दोहीयसी धेनुः]`,

  '53060': `@deva[प्रशस्यस्य श्रः] — @deva[श्र] substitutes for @deva[प्रशस्य] when @deva[इष्ठन्] or @deva[ईयसुन्] follows.

Though @deva[प्रशस्य] is not an attribute, this rule allows these affixes.

| Meaning | Form |
|---------|------|
| most praiseworthy | @deva[श्रेष्ठः] |
| more praiseworthy | @deva[श्रेयान्] |

These equal @deva[प्रशस्यतमः] and @deva[प्रशस्यतरः].

@ref[6.4.163] prevents elision of @deva[अ] in @deva[श्र] (which @ref[6.4.148] and @ref[6.4.155] would otherwise cause).`,

  '53061': `@deva[ज्यच्च] — @deva[ज्य] also substitutes for @deva[प्रशस्य] before @deva[इष्ठन्] and @deva[ईयसुन्].

| Form | Meaning |
|------|---------|
| @deva[ज्येष्ठः] | most praiseworthy, best, eldest |
| @deva[ज्यायान्] | more praiseworthy, better, elder |

The @deva[आ] in @deva[ज्यायान्] is substituted for @deva[ई] of @deva[ईयस्] by @ref[6.4.160].`,

  '53062': `@deva[वृद्धस्य च] — @deva[ज्य] also substitutes for @deva[वृद्ध] before @deva[इष्ठन्] and @deva[ईयसुन्].

| Base | Forms |
|------|-------|
| @deva[वृद्ध] | @deva[ज्येष्ठः] "oldest", @deva[ज्यायान्] "older" |

By @ref[6.4.157], @deva[वर्षि] also substitutes for @deva[वृद्ध]:
@deva[वर्षीष्ठः], @deva[वर्षीयान्]

Though @deva[वृद्ध] is not a guṇavacana, this sūtra implies it takes these affixes.`,

  '53063': `@deva[अन्तिकबाढयोर्नेदसाधौ] — Before @deva[इष्ठन्] and @deva[ईयसुन्]:
- @deva[नेद] substitutes for @deva[अन्तिक] (near)
- @deva[साध] substitutes for @deva[बाढ] (much, very)

| Base | Superlative | Comparative |
|------|-------------|-------------|
| @deva[अन्तिक] | @deva[नेदिष्ठम्] (nearest) | @deva[नेदीयः] (nearer) |
| @deva[बाढ] | @deva[साधिष्ठः] (most) | @deva[साधीयान्] (more) |`,

  '53064': `@deva[युवाल्पयोः कन् वा] — @deva[कन्] optionally substitutes for @deva[युवन्] (young) and @deva[अल्प] (small) before @deva[इष्ठन्] and @deva[ईयसुन्].

| Base | With @deva[कन्] | Without |
|------|---------------|---------|
| @deva[युवन्] | @deva[कनिष्ठः], @deva[कनीयान्] | @deva[यविष्ठः], @deva[यवीयान्] |
| @deva[अल्प] | @deva[कनिष्ठः], @deva[कनीयान्] | @deva[अल्पिष्ठः], @deva[अल्पीयान्] |`,

  '53065': `@deva[विन्मतोर्लुक्] — The affixes @deva[विन्] and @deva[मत्] are elided (@deva[लुक्]) before @deva[इष्ठन्] and @deva[ईयसुन्].

| Base | Superlative | Comparative |
|------|-------------|-------------|
| @deva[स्रग्विन्] | @deva[स्रजिष्ठः] | @deva[स्रजीयान्] |
| @deva[त्वग्वत्] | @deva[त्वचिष्ठः] | @deva[त्वचीयान्] |

This indicates words ending in @deva[विन्] and @deva[मत्]/वत् can form comparative/superlative with @deva[ईयस्] and @deva[इष्ठ].`,

  '53066': `@deva[प्रशंसायां रूपप्] — The affix @deva[रूपप्] comes without changing denotation when praise is meant.

@deva[प्रशंसा] qualifies the sense of the primitive — when the base conveys praise, @deva[रूपप्] is added.

| Base | + @deva[रूपप्] | Meaning |
|------|--------------|---------|
| @deva[वैयाकरण] | @deva[वैयाकरणरूपः] | a celebrated grammarian |
| @deva[याज्ञिक] | @deva[याज्ञिकरूपः] | a celebrated ritualist |

Praise can be contextual: @deva[चोररूपः] "a celebrated thief" (excellent at thievery).`,

  '53067': `@deva[ईषदसमाप्तौ कल्पब्देश्यदेशीयरः] — The affixes @deva[कल्पप्], @deva[देश्य], and @deva[देशीयर्] come when slight incompleteness is meant.

@deva[ईषदसमाप्ति] = a little non-fullness

| Base | Forms | Meaning |
|------|-------|---------|
| @deva[पटु] | @deva[पटुकल्पः], @deva[पटुदेश्यः], @deva[पटुदेशीयः] | tolerably clever |
| @deva[मृदु] | @deva[मृदुकल्पः], @deva[मृदुदेश्यः], @deva[मृदुदेशीयः] | somewhat soft |

Also after verbs: @deva[पचतिकल्पम्], @deva[जल्पतिकल्पम्]`,

  '53068': `@deva[सुपां बहुच् पुरस्तात् वा] — The affix @deva[बहुच्] (realized as @deva[बहु]) optionally comes BEFORE a declined noun when slight incompleteness is meant.

This is the only exception to the rule that affixes are added AFTER a word.

| Base | With @deva[बहुच्] | Meaning |
|------|-----------------|---------|
| @deva[पटु] | @deva[बहुपटुः॑] | tolerably skillful |
| @deva[मृदु] | @deva[बहुमृदुः॑] | somewhat soft |
| @deva[गुडा दाक्षाः] | @deva[बहुगुडाः॑ दाक्षाः] | somewhat sweet dried grapes |

The @deva[च्] marks udātta on the final. @deva[कल्प] etc. also apply. Not added to finite verbs (@deva[तिङन्त]).`,

  '53069': `@deva[प्रकारवचने जातीयर्] — The affix @deva[जातीयर्] (realized as @deva[जातीय]) comes after a case-inflected word expressing a distinguishing quality.

@deva[प्रकार] = speciality, kind — what distinguishes one thing from another

| Base | + @deva[जातीयर्] | Meaning |
|------|----------------|---------|
| @deva[पटु] | @deva[पटुजातीयः] | one reckoned among the clever |
| @deva[मृदु] | @deva[मृदुजातीयः] | belonging to the soft class |
| @deva[दर्शनीय] | @deva[दर्शनीयजातीयः] | of the handsome type |

@note[@deva[जातीयर्] denotes @deva[प्रकारवान्] (one having the quality), while @deva[थाल्] (@ref[5.3.23]) denotes @deva[प्रकारमात्र] (the quality itself).]`,

  '53070': `@deva[प्रागिवात्कः] — The affix @deva[क] governs all sūtras from here up to (but excluding) @ref[5.3.96].

Example: @deva[अश्वकः], @deva[गर्दभकः]

This @deva[क] does NOT come after finite verbs — @deva[अकच्] (@ref[5.3.71]) comes instead.

@note[The phrase @deva[तिङश्च] (@ref[5.3.56]) should connect with the next sūtra, not this one.]`,

  '53071': `@deva[अव्ययसर्वनाम्नामकच् प्राक् टेः] — The affix @deva[अकच्] (realized as @deva[अक्]) is added BEFORE the final vowel of indeclinables and pronominals, in the sense of the prāgīva affixes.

The @deva[च्] indicates udātta on the final (@ref[6.1.163]).

| Base | + @deva[अकच्] | Form |
|------|-------------|------|
| @deva[उच्चैः] | @deva[उच्च्] + @deva[अक्] + @deva[ऐः] | @deva[उच्चकैः॒] |
| @deva[नीचैः] | | @deva[नीचकैः॒] |
| @deva[शनैः] | | @deva[शनकैः] |
| @deva[सर्वे] | | @deva[सर्वके] |
| @deva[विश्वे] | | @deva[विश्वके] |
| @deva[उभये] | | @deva[उभयके] |`,

  '53072': `@deva[ककारस्य दः] — The final @deva[क्] of an indeclinable is replaced by @deva[द्] when @deva[अकच्] is added.

This applies to indeclinables only (no pronominal ends in @deva[क्]).

| Base | + @deva[अकच्] | Result |
|------|-------------|--------|
| @deva[धिक्] | | @deva[धिकित्] → @deva[धिकिद्/त्] |
| @deva[हिरुक्] | | @deva[हिरकुद्/त्] |
| @deva[पृथक्] | | @deva[पृथकद्/त्] |`,

  '53073': `@deva[अज्ञाते] — The affixes @deva[क] (@ref[5.3.70]) and @deva[अकच्] (@ref[5.3.71]) come when something not known is spoken of.

@deva[अज्ञात] refers not to the object itself, but to its relation with something else.

| Form | Meaning |
|------|---------|
| @deva[अश्वकः] | whose horse (is this)? |
| @deva[गर्दभकः] | the ass (of whom is this)? |
| @deva[उच्चकैः] | high (is it so?) |
| @deva[सर्वके] | was this agreed to by all? |
| @deva[पचतकि] | He cooks, does he? |`,

  '53074': `@deva[कुत्सिते] — The affixes @deva[क] and @deva[अकच्] also come when the thing is spoken of as contemptible.

| Form | Meaning |
|------|---------|
| @deva[अश्वकः] | a sorry horse |
| @deva[उष्ट्रकः] | a wretched camel |
| @deva[उच्चकैः] | contemptibly high |
| @deva[पचतकि] | he cooks contemptibly |
| @deva[जल्पतकि] | he speaks insignificantly |`,

  '53075': `@deva[संज्ञायां कन्] — The affix @deva[कन्] comes when the contemptible word is a proper name.

This supersedes @deva[क].

Examples: @deva[शूद्रकः], @deva[धारकः], @deva[चूर्णकः]`,

  '53076': `@deva[अनुकम्पायां च] — The above affixes also come when compassion or endearment is expressed.

@deva[अनुकम्पा] = compassion, pity, endearment

| Form | Meaning |
|------|---------|
| @deva[पुत्रकः] | the little/poor child |
| @deva[वत्सकः] | dear little calf |
| @deva[दुर्बलकः] | the poor weak one |
| @deva[बुभुक्षिकः] | the poor hungry one |
| @deva[विश्वसितकि] | alas, he trusts! |
| @deva[स्वपितकि] | alas, he sleeps! |`,

  '53077': `@deva[तद्युक्तान्नीतिप्रयुक्ते] — The affixes also come as an expression of courtesy toward what is given with compassion.

@deva[नीति] = policy, expedient (conciliation, dissension, gift, punishment)

When moved with compassion, one courteously offers relief:

| Expression | Meaning |
|-----------|---------|
| @deva[हन्त ते धानकाः] | Alas! here are barley for you |
| @deva[हन्त ते तिलकाः] | Alas! here are sesame for you |
| @deva[एहकि] | O dear, come! |
| @deva[अद्धकि] | O dear, eat! |

(Addressed to a starving person by one offering relief)`,

  '53078': `@deva[बह्वचो मनुष्यनाम्नस्ठज्वा] — The affix @deva[ठच्] optionally comes after a polysyllabic human name when compassion or courtesy is meant.

In the alternative, @deva[कन्] also comes. With @deva[ठच्], the base is shortened (@ref[5.3.83]).

| Name | + @deva[ठच्] | + @deva[कन्] |
|------|------------|------------|
| @deva[देवदत्त] | @deva[देविकः] | @deva[देवदत्तकः] |
| @deva[यज्ञदत्त] | @deva[यज्ञिकः] | @deva[यज्ञदत्तकः] |

Why "polysyllabic"? → @deva[दत्तकः], @deva[गुप्तकः] (monosyllables take @deva[कन्] only)
Why "human name"? → @deva[मद्रबाहुकः] (epithets, not proper nouns, or animal names)`,

  '53079': `@deva[घनिलचौ च] — The affixes @deva[घन्] and @deva[इलच्] also come after polysyllabic human names when compassion/courtesy is meant.

By @deva[च], @deva[कन्] and @deva[ठच्] also apply.

| Name | @deva[घन्] | @deva[इलच्] | @deva[ठच्] | @deva[कन्] |
|------|----------|----------|----------|----------|
| @deva[देवदत्त] | @deva[देवियः] | @deva[देविलः] | @deva[देविकः] | @deva[देवदत्तकः] |
| @deva[यज्ञदत्त] | @deva[यज्ञियः] | @deva[यज्ञिलः] | @deva[यज्ञिकः] | @deva[यज्ञदत्तकः] |`,

  '53080': `@deva[प्राचामुपादेरडज्वुचौ च] — According to Eastern Grammarians, @deva[अडच्] and @deva[वुच्] also come after human names beginning with @deva[उप].

By @deva[च], the previous affixes also apply.

From @deva[उपेन्द्रदत्त]:
1. @deva[उपेन्द्रदत्तकः] (@deva[कन्])
2. @deva[उपिकः] (@deva[ठच्])
3. @deva[उपिलः] (@deva[इलच्])
4. @deva[उपियः] (@deva[घन्])
5. @deva[उपकः] (@deva[वुच्])
6. @deva[उपडः] (@deva[अडच्])

The shortened forms are by @ref[5.3.83]. @deva[प्राचाम्] is used respectfully; @deva[वा] is understood from @ref[5.3.78].`,

  '53081': `@deva[जातिनाम्नो मनुष्यस्य कन्] — @deva[कन्] comes after a human name that is metaphorically applied from a species name, when compassion/courtesy is meant.

@deva[जातिनामन्] = words like @deva[व्याघ्र] (tiger) applied to men by metaphor

This is a general rule (anuvṛtti of @deva[बह्वचः] does not extend here).

| Name | + @deva[कन्] |
|------|------------|
| @deva[व्याघ्र] | @deva[व्याघ्रकः] |
| @deva[सिंह] | @deva[सिंहकः] |
| @deva[शरभ] | @deva[शरभकः] |

Other affixes also apply optionally: @deva[व्याघ्रिलः], @deva[सिंहिलः]`,

  '53082': `@deva[अजिनाण्णोलोपश्च] — @deva[कन्] comes after a human name ending in @deva[अजिन], with elision of @deva[अजिन] before the affix.

| Original name | After elision + @deva[कन्] |
|--------------|--------------------------|
| @deva[व्याघ्राजिनः] | @deva[व्याघ्रकः] |
| @deva[सिंहाजिनः] | @deva[सिंहकः] |

(@deva[व्याघ्राजिन] and @deva[सिंहाजिन] are names of men)`,

  '53083': `@deva[द्व्यचोऽतस्तिङो लोपो ह्यजादौ टिठाजेष्ठाद्योः] — When @deva[ठ] (@ref[5.3.78]) or vowel-initial affixes (@ref[5.3.79]-@ref[5.3.80]) follow, everything after the second vowel of a human name is elided.

Kārikā: Also elision of the first member when not beginning with @deva[अज्], and elision from the 4th vowel; elision from @deva[उ]-vowel with @deva[इलच्].

Examples illustrated above: @deva[देवदत्त] → @deva[देव] before these affixes → @deva[देविकः], @deva[देविलः], etc.`,

  '53084': `@deva[शेवलादित्र्यचां ठादौ] — After @deva[शेवल], @deva[सुपरि], @deva[विशाल], @deva[वरुण], and @deva[आर्यमान्], elision is of everything after the THIRD vowel (not second) when @deva[ठ] or vowel-initial affixes follow.

This supersedes the previous sūtra.

| Name | + @deva[ठच्] | + @deva[घन्] | + @deva[इलच्] |
|------|------------|------------|------------|
| @deva[शेवलदत्त] | @deva[शेवलिकः] | @deva[शेवलियः] | @deva[शेवलिलः] |
| @deva[सुपरिदत्त] | @deva[सुपरिकः] | @deva[सुपरियः] | @deva[सुपरिलः] |
| @deva[विशालदत्त] | @deva[विशालिकः] | — | — |
| @deva[वरुणदत्त] | @deva[वरुणिकः] | — | — |
| @deva[आर्यमदत्त] | @deva[आर्यमिकः] | — | — |

@note[Vārttika: The third vowel must be original, not from sandhi. So @deva[शेवलेन्द्रदत्त] and @deva[सुपार्याशीर्दत्त] count by original vowels.]`,

  '53085': `@deva[अल्पीयसि] — The affixes @deva[क] etc. (@ref[5.3.70]) come when expressing small quantity or number.

| Expression | Form | Meaning |
|-----------|------|---------|
| @deva[अल्पं तैलम्] | @deva[तैलकम्] | a little oil |
| (small amount) | @deva[सर्पिकम्], @deva[घृतकम्] | a little ghee |
| | @deva[उच्चकैः], @deva[नीचकैः] | somewhat high, somewhat low |
| | @deva[पचतकि] | he cooks a little |`,

  '53086': `@deva[ह्रस्वे] — The affixes @deva[क] etc. come when expressing shortness of length (diminutive).

@deva[ह्रस्व] here is opposed to @deva[दीर्घ] (long).

| Expression | Form | Meaning |
|-----------|------|---------|
| @deva[ह्रस्वो वृक्षः] | @deva[वृक्षकः] | a small tree |
| | @deva[प्लक्षकः] | a small fig tree |
| | @deva[स्तम्भकः] | a small pillar |`,

  '53087': `@deva[कन् संज्ञायाम्] — When the diminutive is a proper name, @deva[कन्] comes (superseding @deva[क]).

Examples: @deva[वंशकः], @deva[वेणुकः], @deva[दण्डकः]`,

  '53088': `@deva[कुटीशमीशुण्डाभ्यो रः] — The affix @deva[र] comes after @deva[कुटी], @deva[शमी], and @deva[शुण्डा] when expressing shortness.

This supersedes @deva[क] (@ref[5.3.86]).

| Base | + @deva[र] | Meaning |
|------|----------|---------|
| @deva[कुटी] | @deva[कुटीरः] | a small hut |
| @deva[शमी] | @deva[शमीरः] | a small śamī tree |
| @deva[शुण्डा] | @deva[शुण्डारः] | a small trunk |

The derivatives are masculine though the primitives are feminine.`,

  '53089': `@deva[कुतूडुपच्] — The affix @deva[डुपच्] (realized as @deva[उप]) comes after @deva[कुतू] (jar) when expressing diminutive.

@deva[कुतू] + @deva[उप] = @deva[कुतूपः] — a small jar`,

  '53090': `@deva[वर्तिवरत्रोर्वर्तवरतौ] — @deva[वर्त] and @deva[वरत] substitute for @deva[वर्ति] (wick) and @deva[वरत्र] (strap) when expressing diminutive.

| Base | Substitute + @deva[क] | Meaning |
|------|---------------------|---------|
| @deva[वर्ति] | @deva[वर्तकः] | small wick |
| @deva[वरत्र] | @deva[वरतः] | small strap |`,

  '53091': `@deva[श्वन्पत्युष्ट्रवराहणां क्षीरे] — After @deva[श्वन्] (dog), @deva[पति] (husband), @deva[उष्ट्र] (camel), and @deva[वराह] (boar), @deva[क] comes when milk is meant.

| Base | Form | Meaning |
|------|------|---------|
| @deva[श्वन्] | @deva[शुनकं क्षीरम्] | dog's milk |
| @deva[पति] | @deva[पतिकं क्षीरम्] | master's milk |
| @deva[उष्ट्र] | @deva[उष्ट्रकं क्षीरम्] | camel's milk |
| @deva[वराह] | @deva[वराहकं क्षीरम्] | boar's milk |`,

  '53092': `@deva[प्रियादिषु च प्रत्ययविशेषः] — After @deva[प्रिय] etc., special affixes come in the sense of diminutive.

The @deva[प्रियादि] list specifies what affix each word takes. This is an ākṛtigaṇa (open class).

Example: @deva[प्रियकः] (dear little one)`,

  '53093': `@deva[राजराजन्योश्च वा मैत्रवरुणे] — After @deva[राज] and @deva[राजन्य] when meaning Mitra and Varuṇa's soma, @deva[क] optionally comes.

@deva[राजकः] or @deva[राजः] — Mitra's soma portion
@deva[राजन्यकः] or @deva[राजन्यः] — Varuṇa's soma portion`,

  '53094': `@deva[ऋत्विगादिभ्यस्थक्] — The affix @deva[थक्] comes after @deva[ऋत्विज्] etc. in the sense of diminutive.

@deva[ऋत्विज्] + @deva[थक्] = @deva[आर्त्विजीनः] — pertaining to a priest (diminutive sense)`,

  '53095': `@deva[पोतोदधोश्छ इच्च] — The affix @deva[छ] (with optional @deva[इ] augment) comes after @deva[पोत] (boat) and @deva[उदध] (ocean) in the diminutive sense.

| Base | + @deva[छ] | Meaning |
|------|----------|---------|
| @deva[पोत] | @deva[पोतीयः] or @deva[पौतीयः] | a small boat |
| @deva[उदध] | @deva[औदधीयः] | a small ocean/lake |`,

  '53096': `@deva[इवे प्रतिकृतौ] — The affix @deva[कन्] comes when expressing "like" or "resembling" in the sense of an image.

@deva[प्रतिकृति] = image, likeness

| Expression | Form | Meaning |
|-----------|------|---------|
| @deva[अश्व इव] | @deva[अश्वकः] | horse-like, image of a horse |
| @deva[हस्ति इव] | @deva[हस्तिकः] | elephant-like |
| @deva[पुत्र इव] | @deva[पुत्रकः] | son-like, image of son |`,

  '53097': `@deva[संज्ञायां च] — @deva[कन्] also comes in the sense of "likeness" when forming a proper name.

Combined with @ref[5.3.96], this gives names based on resemblance.`,

  '53098': `@deva[स्तम्बकर्णयोर्वा] — After @deva[स्तम्ब] and @deva[कर्ण], @deva[कन्] optionally comes (with @deva[लुक्] as alternative) in the sense of image/name.

| Base | With @deva[कन्] | With @deva[लुक्] |
|------|---------------|----------------|
| @deva[स्तम्ब] | @deva[स्तम्बकः] | @deva[स्तम्बः] |
| @deva[कर्ण] | @deva[कर्णकः] | @deva[कर्णः] |`,

  '53099': `@deva[वातवस्रोरीत्] — After @deva[वात] (wind) and @deva[वस्र] (cloth), @deva[ई] is added before @deva[कन्] in the sense of image/name.

| Base | Form | Meaning |
|------|------|---------|
| @deva[वात] | @deva[वातीकः] | wind-like, a wind-image |
| @deva[वस्र] | @deva[वस्रीकः] | cloth-like |`,

  '53100': `@deva[देवपथादिभ्यश्च] — After @deva[देवपथ] etc., there is @deva[लुक्] elision of @deva[कन्] (@ref[5.3.96], @ref[5.3.97]) when expressing image or name.

The @deva[देवपथादि] is an ākṛtigaṇa.

| Form | Meaning |
|------|---------|
| @deva[देवपथः] | the divine path (image/name) |
| @deva[हंसपथः] | the swan's path |

List: @deva[देवपथ], @deva[हंसपथ], @deva[वारिपथ], @deva[रथपथ], @deva[स्थलपथ], @deva[करिपथ], @deva[अजपथ], @deva[राजपथ], @deva[शतपथ], @deva[शङ्कपथ], @deva[सिन्धुपथ], @deva[सिद्धगति], @deva[उष्ट्रग्रीव], @deva[चामररज्जु], @deva[हस्त], @deva[इन्द्र], @deva[दण्ड]...`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.3.50-100). Total: ${Object.keys(vasu).length}`);
