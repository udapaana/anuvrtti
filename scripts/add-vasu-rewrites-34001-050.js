import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '34001': `@deva[धातुसम्बन्धे प्रत्ययाः] — When there is syntactical relation between the senses of verbs, affixes are valid even in denoting time other than that specifically ordained.

Böhtlingk: "Words formed with affixes stand (in reference to time) in closer relation to the verb with which they are allied."

Example: @ref[3.2.85] teaches that @deva[अग्निष्टोमयाजिन्] has past significance (one who has performed Agniṣṭoma). By this sūtra, despite the past sense, the word can be used in relation to future actions when syntactical connection exists.`,

  '34002': `@deva[क्रियासमभिहारे लोट् लोटो हिस्वौ वा च तध्वमोः] — When repetition of action is indicated, @deva[लोट्] (Imperative) is used with the verb repeated. The substitutes @deva[हि]/@deva[स्व] or @deva[त]/@deva[ध्वम्] apply.

Böhtlingk: "When repetition of an action is expressed, the Imperative is used, and though the second person singular is used, it may also stand for the second person plural."

The phrase @deva[धातुसम्बन्ध] from the previous sūtra is understood here.

Example: @deva[पठ पठेत्येवायं पठति] — "This person reads repeatedly" (lit. "read, read — thus he reads").`,

  '34003': `@deva[समुच्चयेऽन्यतरस्याम्] — @deva[लोट्] (Imperative) is optionally used when several themes follow one after another.

The terminations @deva[हि], @deva[स्व], @deva[त], @deva[ध्वम्] (2nd person singular/plural, Ātmanepada/Parasmaipada) apply.

Example: @deva[भ्राष्ट्रमट मठमट खदूरमटेत्येवायमटति] — or @deva[इमावटतः], or @deva[इमेऽटन्ति].

Unlike the previous rule, the Imperative is not doubled here.

Similarly: @deva[छन्दोऽधीष्व], @deva[व्याकरणमधीष्व] — "Study the Vedas, study grammar..."`,

  '34004': `@deva[क्रियासमभिहारे धातुः पूर्ववत्] — In the case of @ref[3.4.2] (@deva[क्रियासमभिहारे लोट्]), the same verb must be used in the subsequent clause as was put in the Imperative.

Cannot say: @deva[लुनीहि लुनीहीत्येवायं छिनत्ति] — must use a verb from @deva[लू] ("to cut"), such as @deva[लुनाति].

Similarly: @deva[अधीष्वाधीष्व] requires @deva[अधीते] after it, not a synonym like @deva[पठति].`,

  '34005': `@deva[समुच्चये सामान्यवचनः] — In the case of @ref[3.4.3] (multiple actions spoken together), the following verb should have a sense common to all the preceding verbs.

Example: @deva[ओदनं भुङ्क्ष्व, सक्तून् पिब, धानाः खादेत्येवायम् अभ्यवहरति] — "He takes his meals, eating rice, drinking saktu, and tasting fried corn."

Here @deva[अभ्यवहरति] ("takes/consumes") has a sense common to all the Imperative verbs. This prevents repetition of all previous verbs.`,

  '34006': `@deva[छन्दसि लुङ्लङ्लिटः] — In the Vedas, @deva[लुङ्] (Aorist), @deva[लङ्] (Imperfect), and @deva[लिट्] (Perfect) are optionally used in all tenses, in relation to verbs.

The words @deva[धातुसम्बन्ध] and @deva[अन्यतरस्याम्] are understood. "Optionally" means other tense-affixes may also be used.

| Example | Source | Meaning |
|---------|--------|---------|
| @deva[देवो देवेभिरागमत्] | Ṛg. I.1.5 | "O Agni! come with the gods" — Aorist with Imperative force |
| @deva[ये भूतस्य प्रचेतसः इदं तेभ्योऽकरं नमः] | Ṛg. | "I make salutation" — Aorist for present |`,

  '34007': `@deva[लिङर्थे लेट्] — The Vedic Subjunctive (@deva[लेट्]) is optionally used in the Vedas wherever @deva[लिङ्] (Potential/Benedictive) can be used.

In senses like "command," @deva[लेट्] may replace @deva[लिङ्]. This is peculiar to the Vedas.

| Example | Source | Meaning |
|---------|--------|---------|
| @deva[जोषिषत्] | Ṛg. II.35.1 | "may he make us beautiful" |
| @deva[तारिषत्] | Ṛg. I.25.12 | "may he increase" |
| @deva[पताति विद्युत्] | Ṛg. VII.25.1 | "may the thunderbolt fall" |
| @deva[भवाति] | Ṛg. V.37.5 | "may he become" |`,

  '34008': `@deva[उपसंवादाशङ्कयोश्च] — The Vedic Subjunctive (@deva[लेट्]) is used in the Vedas when contingent promise (@deva[उपसंवाद]) or apprehension (@deva[आशङ्का]) is implied.

- @deva[उपसंवाद] = reciprocal agreement, contracting to do: "If you do this for me, I will give this to you"
- @deva[आशङ्का] = guessing/inferring a result from a cause, apprehension or fear

Example: @deva[अहमेव पशूनामीशै] — "I alone shall be master of the cattle."`,

  '34009': `@deva[सेसेनसेनासेङ्क्सेनध्यैनध्यैङ्कध्यैङ्शध्यैंशध्यैंस्तवैतवेङ्तवेन्] — In the Vedas, these 15 affixes come after roots with the force of @deva[तुमुन्] (Infinitive):

| Affix group | Forms |
|-------------|-------|
| @deva[से] | @deva[से], @deva[सेन्], @deva[असे], @deva[असेन्] |
| @deva[क्से] | @deva[क्से], @deva[क्सेन्] |
| @deva[अध्यै] | @deva[अध्यै], @deva[अध्यैन्], @deva[कध्यै], @deva[कध्यैन्], @deva[शाध्यै], @deva[शाध्यैन्] |
| @deva[तवै] | @deva[तवै], @deva[तवेङ्], @deva[तवेन्] |

These are Vedic Infinitive formations.`,

  '34010': `@deva[प्रयैरोहिष्यैव्यथिष्यै च] — The words @deva[प्रयै], @deva[रोहिष्यै], and @deva[अव्यथिष्यै] are irregularly formed Vedic Infinitives.

| Word | Formation | Meaning |
|------|-----------|---------|
| @deva[प्रयै] | @deva[प्र + या + कै] | = @deva[प्रयातुम्] |
| @deva[रोहिष्यै] | @deva[रुह् + इष्यै] | = @deva[रोहणाय] (for growing) |
| @deva[अव्यथिष्यै] | @deva[अ + व्यथ् + इष्यै] | = @deva[अव्यथनाय] |

Example: @deva[प्रयै देवेभ्यो महीः] (Ṛg. I.142.6).`,

  '34011': `@deva[दृशेविख्ये च] — The words @deva[दृशे] and @deva[विख्ये] are anomalous Vedic Infinitives.

| Word | Example | Meaning |
|------|---------|---------|
| @deva[दृशे] | @deva[दृशे विश्वाय सूर्यम्] (Ṛg. I.50.1) | = @deva[द्रष्टुम्] (to see) |
| @deva[विख्ये] | @deva[विख्ये त्वा हरामि] | = @deva[विख्यातुम्] (to make known) |`,

  '34012': `@deva[शकि णमुल्कमुलौ] — In the Vedas, @deva[णमुल्] and @deva[कमुल्] are added to roots to form Infinitives when governed by @deva[शक्] ("to be able").

For @deva[णमुल्]: @deva[ण्] causes vṛddhi (@ref[7.2.115]); @deva[ल] regulates accent (@ref[6.1.193]).
For @deva[कमुल्]: @deva[क्] prevents guṇa/vṛddhi (@ref[1.1.5]).

Example: @deva[अग्निं वै देवा विभाजं नाशक्नुवन्] — "The Gods were not able to divide Agni" (@deva[विभज् + णमुल् → विभाजम् = विभक्तुम्]).`,

  '34013': `@deva[ईश्वरे तोसुन्कसुनौ] — In the Vedas, @deva[तोसुन्] and @deva[कसुन्] are added to roots to form Infinitives when @deva[ईश्वर] ("able, capable") is in composition.

| Example | Meaning |
|---------|---------|
| @deva[ईश्वरोऽभिचरितोः] | = @deva[अभिचरितुम्] (able to harm) |
| @deva[ईश्वरो विलिखः] | = @deva[विलिखितुम्] (able to scratch) |
| @deva[ईश्वरो वितृदः] | = @deva[वितर्दितुम्] (able to split) |`,

  '34014': `@deva[कृत्यार्थे तवैकेन्येन्यत्वनः] — In the Vedas, @deva[तवै], @deva[केन्], @deva[केन्य], and @deva[त्वन्] are added to roots in the sense of @deva[कृत्य] affixes.

The force of @deva[कृत्य] = denoting "action" (@deva[भाव]) and "object" (@deva[कर्मन्]).

| Example | Meaning |
|---------|---------|
| @deva[अन्वेतवै] | = @deva[अन्वेतव्यम्] |
| @deva[परिधातवै] | = @deva[परिधातव्यम्] |
| @deva[दिदृक्षेण्यः] (Ṛg. I.146.5) | = @deva[दिदृक्षितव्यम्] |
| @deva[कर्त्वम्] (Ṛg. I.10.2) | = @deva[कर्तव्यम्] |`,

  '34015': `@deva[अवचक्षे चक्षिङः] — The word @deva[अवचक्षे] is an anomalous passive participle in the Vedas.

Example: @deva[रिपुणा नावचक्षे] (Ṛg. IV.58.5) = @deva[नावख्यातव्यम्] ("not to be told to an enemy").

Formation: @deva[अव + चक्ष् + एश् → अवचक्षे].

@note[@ref[2.4.54] is not applied here.]`,

  '34016': `@deva[स्थेङ्याद्भ्यस्तोसुन् भावलक्षणे] — In the Vedas, @deva[तोसुन्] comes after @deva[स्था], @deva[इण्], @deva[कृञ्], @deva[वद्], @deva[चर्], @deva[हु], @deva[तम्], and @deva[जन्] when the mere name of the action is indicated.

These are Infinitives. @deva[भावलक्षण] = the sense of the root is indicated.

| Root | Example |
|------|---------|
| @deva[स्था] | @deva[आ संस्थातोर्वेद्याम्] |
| @deva[इ] | — |
| @deva[कृ] | — |
| @deva[वद्] | — |`,

  '34017': `@deva[सृप्तृदोः कसुन्] — In the Vedas, @deva[कसुन्] comes after @deva[सृप्] ("to creep") and @deva[तृद्] ("to injure") in the sense of Infinitives indicating name of action.

| Example | Source |
|---------|--------|
| @deva[विसृपः] | @deva[पुरा क्रूरस्य विसृपः] (Yaj. I.28) |
| @deva[आतृदः] | @deva[पुरा अत्रुभ्य आतृदः] (Ṛg. VIII.1.12) |

These words are Indeclinable by @ref[1.1.40].`,

  '34018': `@deva[प्राचामलंखल्वोः प्रतिषेधयोः क्त्वा] — According to Eastern Grammarians, @deva[क्त्वा] comes after a verb when @deva[अलम्] or @deva[खलु] expressing prohibition is in composition.

| Example | Meaning |
|---------|---------|
| @deva[अलं कृत्वा] | do not make |
| @deva[खलु पीत्वा] | do not drink |
| @deva[अलं काले रुदित्वा] | do not weep, O girl! |

Why "@deva[अलम्] and @deva[खलु]"? Without them: @deva[माकार्षीः] ("do not make").
Why "prohibition"? @deva[अलङ्कारः] ("ornament") — not prohibitive.`,

  '34019': `@deva[प्राचां मेङ् विनिमयार्थे] — According to Eastern Grammarians, @deva[क्त्वा] is added to @deva[मेङ्] ("to exchange") when the sense is interchange (though the prior-action condition of @deva[क्त्वा] doesn't strictly apply).

Example: @deva[अपमित्य याचते] — "Having offered an exchange, he asks."

Formation: @deva[अप + मे + क्त्वा → अप + मा + ल्यप् → अप + मि + तुक् + य] (by @ref[6.1.45], @ref[6.1.71], @ref[7.4.40]) = @deva[अपमित्य].

This is optional — the phrase "according to the Eastern/Northern" indicates variation.`,

  '34020': `@deva[परावरयोगे क्त्वा] — @deva[क्त्वा] is added to a root to denote what is situated on "the other side" (@deva[पर]) or "this side" (@deva[अवर]).

Example: @deva[अप्राप्य नदीं पर्वतः स्थितः] — "The mountain is situated without having reached the river" (i.e., on this side of the river).

Here @deva[पर्वत] is qualified by @deva[नदी], the reference point. The river is on the other side of the mountain.`,

  '34021': `@deva[समानकर्तृकयोः पूर्वकाले] — When two actions have the same agent, @deva[क्त्वा] comes after the verb whose action is temporally prior (the Absolutive in @deva[त्वा] refers to the preceding action).

| Example | Meaning |
|---------|---------|
| @deva[भुक्त्वा व्रजति] | having eaten, he goes |
| @deva[पीत्वा व्रजति] | having drunk, he goes |

Not limited to two verbs: @deva[स्नात्वा, पीत्वा, भुक्त्वा, दत्वा व्रजति] — "having bathed, drunk, eaten, and given, he goes."

Why "same agent"? With different agents, the gerund cannot be used.`,

  '34022': `@deva[पुनः पुनर्वाऽणमुलश्च] — @deva[णमुल्] and @deva[क्त्वा] apply after a root to express reiteration (@deva[पुनः पुनः]).

The phrases "same agent" and "prior action" from @ref[3.4.21] are understood. The @deva[च] introduces @deva[क्त्वा].

These affixes express reiteration only when the verb is doubled (see @ref[8.1.4]).

| Example | Meaning |
|---------|---------|
| @deva[भोजं भोजं व्रजति] | having eaten repeatedly, he goes |
| @deva[भुक्त्वा भुक्त्वा व्रजति] | having eaten repeatedly, he goes |`,

  '34023': `@deva[यदनाकाङ्क्षे] — @deva[णमुल्] and @deva[क्त्वा] are not added when @deva[यत्] is used in a simple sentence not depending on another to complete the sense.

@deva[आकाङ्क्षा] = inter-dependence, the inability of a word/phrase/sentence to indicate intended sense without another.

When prior and subsequent actions complete the sentence's sense without needing another verb, @deva[क्त्वा]/@deva[णमुल्] are not used with @deva[यत्].`,

  '34024': `@deva[अग्रेप्रथमपूर्वेषु णमुल्क्त्वाऽन्यतरस्याम्] — @deva[णमुल्] and @deva[क्त्वा] optionally apply after the temporally prior verb when both verbs have the same agent, provided @deva[अग्रे], @deva[प्रथम], or @deva[पूर्व] is in composition.

This is an @deva[अप्राप्तविभाषा]. "Reiteration" is not understood here.

| Example | Meaning |
|---------|---------|
| @deva[अग्रे भोजं व्रजति] / @deva[भुक्त्वा व्रजति] | having first eaten, he goes |
| @deva[प्रथमं भोजं व्रजति] | — |
| @deva[पूर्वं भोजं व्रजति] | — |

"Optionally" indicates regular tenses (Present, etc.) may also be used.`,

  '34025': `@deva[आक्रोशे कृञोऽनुप्रयोगस्य खमुञ्] — @deva[खमुञ्] is added to @deva[कृ] ("to make") when a word in the accusative is in construction, if the sense implies abuse (@deva[आक्रोश]).

Of @deva[खमुञ्]: the efficient portion is @deva[अम्]; @deva[ख] introduces augment @deva[मुम्] (@ref[6.3.67]).

Example: @deva[चोरं कारमाक्रोशति] — "He reviles him as a thief" (calls out "You are a thief!" in abuse).

The person isn't really made a thief — "making him a thief" expresses indignation.`,

  '34026': `@deva[स्वादुम्कृञः खल्] — @deva[णमुल्] is added to @deva[कृ] ("to make") when a word meaning "sweet" is in composition (with same-agent and prior-action conditions from @ref[3.4.21]).

Example: @deva[स्वादुङ्कारं भुङ्क्ते] or @deva[लक्षणङ्कारं भुङ्क्ते] — "He eats, having made his food sweet/seasoned."

The word @deva[स्वादुम्] (with @deva[म्]) in the sūtra is anomalous, indicating that the upapada may end in any case, not just accusative.`,

  '34027': `@deva[अन्यथैवंकथमित्थं कृञोऽनुप्रयोगवाक्ये] — @deva[णमुल्] comes after @deva[कृ] when @deva[अन्यथा], @deva[एवम्], @deva[कथम्], or @deva[इत्थम्] is compounded, if @deva[कृ]'s omission would be unobjectionable.

"Unobjectionable omission" = the same sentence remains correct by omitting @deva[कृ].

| Example | Meaning |
|---------|---------|
| @deva[अन्यथाकारं भुङ्क्ते] | he eats otherwise |
| @deva[एवङ्कारं भुङ्क्ते] | he eats so |
| @deva[कथङ्कारं भुङ्क्ते] | how does he eat? |
| @deva[इत्थङ्कारं भुङ्क्ते] | he eats thus |

@deva[कृ] is "expletive" here — could say simply @deva[अन्यथा भुङ्क्ते].`,

  '34028': `@deva[सक्रोधे कृञो यथातथाभ्याम्] — @deva[णमुल्] is added to @deva[कृ] when @deva[यथा] or @deva[तथा] is compounded, when an angry reply is made (if @deva[कृ]'s omission is unobjectionable).

This applies when questioning or replying in indignation, displeasure, or anger.

| Example | Meaning |
|---------|---------|
| @deva[तथाकारं भोक्ष्ये, किं तवानेन] | "I will eat in that way; what is that to you?" |
| @deva[यथाकारं भोक्ष्ये, किं तवानेन] | — |

Why "angry reply"? Without anger: @deva[यथाकृत्वाऽहं भोक्ष्ये तथा त्वं कुरु].`,

  '34029': `@deva[कर्मणोऽनुप्रयोगे दृशिविद्योः सार्वत्रिके] — @deva[णमुल्] applies after @deva[दृश्] ("to see") or @deva[विद्] ("to know") when the object is compounded, to denote the total number of such objects.

| Example | Meaning |
|---------|---------|
| @deva[कन्यादर्शं वरयति] | he woos every girl that he sees (all girls seen) |
| @deva[ब्राह्मणवेदं भोजयति] | he feeds as many Brahmins as he knows (all of them) |

Why "total number"? Otherwise: @deva[ब्राह्मणं दृष्ट्वा भोजयति] — "having seen the Brahmin, he feeds him."`,

  '34030': `@deva[यावद्विदोर्जीवतेश्च] — @deva[णमुल्] comes after @deva[विद्] ("to know") and @deva[जीव्] ("to live") when @deva[यावत्] is combined with them.

| Example | Meaning |
|---------|---------|
| @deva[यावद्वेदं भुङ्क्ते] | he eats all that he gets |
| @deva[यावज्जीवमधीते] | he studies as long as he lives (throughout life) |`,

  '34031': `@deva[चर्मोदरयोः पूरेः] — @deva[णमुल्] comes after @deva[पूर्] ("to fill") when @deva[चर्मन्] ("skin") or @deva[उदर्] ("belly") is compounded.

| Example | Meaning |
|---------|---------|
| @deva[उदरपूरं भुङ्क्ते] | he eats so as to fill his belly |
| @deva[चर्मपूरं स्तृणाति] | he spreads so as to cover the skin |`,

  '34032': `@deva[वृष्टिमति च पूरोऽस्याऽलुक्] — @deva[णमुल्] comes after @deva[पूर्] ("to fill") when expressing a measure of rainfall, and optionally the long @deva[ऊ] of @deva[पूर्] is elided.

| Example | Meaning |
|---------|---------|
| @deva[गोष्पदपूरं वृष्टो देवः] or @deva[गोष्पदप्रं] | it rained filling small puddles (cow-hoof impressions) |
| @deva[सीतापूरं वृष्टो देवः] or @deva[सीताप्रं] | it rained filling all furrows |

The word @deva[अस्य] ("of this @deva[पूर्]") specifies that only the @deva[ऊ] of @deva[पूर्] is elided, not of other words.`,

  '34033': `@deva[वस्नान्तात्क्नोपेर्वृष्टिमति] — @deva[णमुल्] comes after the causative of @deva[क्नूय्] ("to wet") when compounded with a noun denoting clothing (in accusative), if the whole word expresses a measure of rainfall.

The verb @deva[क्नोपि] is the causative of @deva[क्नूय्].

| Example | Meaning |
|---------|---------|
| @deva[चेलक्नोपं वृष्टो देवः] | it rained so as to wet the clothes |
| @deva[वस्त्रक्नोपं वृष्टो देवः] | — |
| @deva[वसनक्नोपं वृष्टो देवः] | — |`,

  '34034': `@deva[निसमूलयोः कषेः] — @deva[णमुल्] comes after @deva[कष्] ("to rub/scrape") when @deva[निमूल] or @deva[समूल] (in accusative) is compounded.

| Example | Meaning |
|---------|---------|
| @deva[निमूलकाषं कषति] | he scrapes down to the roots |
| @deva[समूलकाषं कषति] | he scrapes up to the roots |

The gerund and the main verb denote the same thing: @deva[निमूलकाषङ्कषति] = @deva[निमूलं कषति].

@note[From this sūtra through @ref[3.4.46], the governing verb must be from the same root as the gerund.]`,

  '34035': `@deva[शुष्कचूर्णरूक्षेषु पिषेः] — @deva[णमुल्] comes after @deva[पिष्] ("to grind") when @deva[शुष्क] ("dry"), @deva[चूर्ण] ("powder"), or @deva[रूक्ष] ("dry") in accusative is compounded.

| Example | Meaning |
|---------|---------|
| @deva[शुष्कपेषं पिनष्टि] = @deva[शुष्कं पिनष्टि] | he grinds it dry |
| @deva[चूर्णपेषं पिनष्टि] | he grinds to powder |
| @deva[रूक्षपेषं पिनष्टि] | he grinds it dry |

A verb from the same root @deva[पिष्] must govern the gerund (@ref[3.4.46]).`,

  '34036': `@deva[समूलाकृतजीवेभ्यो हन्कृग्रहाम्] — @deva[णमुल्] comes after @deva[हन्], @deva[कृ], and @deva[ग्रह्] when @deva[समूल], @deva[आकृत], and @deva[जीव] (in accusative) are respectively compounded.

| Root | Upapada | Example | Meaning |
|------|---------|---------|---------|
| @deva[हन्] | @deva[समूल] | @deva[समूलघातं हन्ति] (@ref[8.3.32], @ref[8.3.54]) | he totally extirpates |
| @deva[कृ] | @deva[आकृत] | @deva[अकृतकारं करोति] | he does what wasn't done before |
| @deva[ग्रह्] | @deva[जीव] | @deva[तं जीवग्राहं गृह्णाति] | he captures him alive |

Appropriate verbs from the same roots govern the gerunds.`,

  '34037': `@deva[तृतीयायां हनः] — @deva[णमुल्] comes after @deva[हन्] ("to strike") when a word in the instrumental case is in composition.

| Example | Meaning |
|---------|---------|
| @deva[पाणिघातं वेदिं हन्ति] = @deva[पाणिना वेदिं हन्ति] (@ref[7.3.32], @ref[7.3.54]) | he strikes the Vedi with the hand |
| @deva[पादघातं भूमिं हन्ति] | he strikes the ground with the foot |

Here @deva[हन्] means "to strike," not "to kill." A cognate verb from the same root must follow (@ref[3.4.48]).`,

  '34038': `@deva[द्रवे पिषेः] — @deva[णमुल्] comes after @deva[पिष्] ("to grind") when a word in instrumental case denoting "liquid" (@deva[द्रव]) is compounded.

| Example | Meaning |
|---------|---------|
| @deva[उदपेषं पिनष्टि] = @deva[उदकेन पिनष्टि] (@ref[6.3.58]) | he grinds with water |
| @deva[तैलपेषं पिनष्टि] | he grinds with oil |

@ref[3.4.46] applies — a verb from @deva[पिष्] governs the gerund.`,

  '34039': `@deva[हस्ते वर्त्तिग्रहोः] — @deva[णमुल्] comes after @deva[वर्त्ति] (causative of @deva[वृत्]) and @deva[ग्रह्] when a word denoting "hand" (in instrumental) is compounded.

| Example | Meaning |
|---------|---------|
| @deva[हस्तवर्ते वर्तयति] = @deva[हस्तेन वर्तयति] | he revolves by hand |
| @deva[तं हस्तग्राहं गृह्णाति] | he takes him by the hand |
| @deva[पाणिग्राहम्], @deva[करग्राहम्] | — |

@ref[3.4.46] applies — appropriate verbs from the same roots govern the gerunds.`,

  '34040': `@deva[स्वार्थे पुषः] — @deva[णमुल्] comes after @deva[पुष्] ("to feed") when a word in instrumental case having the sense of @deva[स्व] ("self," "kinsmen," or "property") is compounded.

| Example | Meaning |
|---------|---------|
| @deva[स्वपोषं पुष्णाति] | he feeds himself |
| @deva[आत्मपोषं] | — |
| @deva[गोपोषं] | feeding cattle |
| @deva[पितृपोषं] / @deva[मातृपोषं] | feeding parents |
| @deva[धनपोषं] / @deva[रैपोषं] | supporting wealth |

See @ref[1.1.68]. @ref[3.4.46] applies.`,

  '34041': `@deva[देशेऽधिकरणे बन्धः] — @deva[णमुल्] comes after @deva[बन्ध्] ("to bind") when a word expressing location is in construction.

@ref[3.4.46] applies — the gerund must be governed by a verb from @deva[बन्ध्].

| Example | Meaning |
|---------|---------|
| @deva[चक्रबन्धं बध्नाति] | he binds to the wheel |
| @deva[कूटबन्धं बध्नाति] | he binds in a snare |
| @deva[मुष्टिबन्धं बध्नाति] | he binds in the fist |
| @deva[चोरकबन्धं बध्नाति] = @deva[चोरके बध्नाति] | — |`,

  '34042': `@deva[संज्ञायां च] — @deva[णमुल्] comes after @deva[बन्ध्] ("to bind") when the word formed is an appellative (@deva[संज्ञा]).

| Example | Meaning |
|---------|---------|
| @deva[क्रौञ्चबन्धं बध्नाति] | he binds in "heron-knot" style |
| @deva[मयूरिकाबन्धं बध्नाति] or @deva[बद्धः] | he binds/is bound in "peacock-knot" |
| @deva[अट्टालिकाबन्धं बद्धः] | bound in "aṭṭālikā-knot" |

@deva[क्रौञ्चबन्धन], etc., are names of various sorts of knots. @ref[3.4.46] applies.`,

  '34043': `@deva[कर्तरि जीवपुरुषयोर्नश्वहोः] — @deva[णमुल्] comes after @deva[नश्] ("to perish") and @deva[वह्] ("to carry") when @deva[जीव] ("life") and @deva[पुरुष] ("person") expressing the agent are respectively compounded.

| Example | Analysis | Meaning |
|---------|----------|---------|
| @deva[जीवनाशं नश्यति] | = @deva[जीवो नश्यति] | he perishes so that his life perishes (dies) |
| @deva[पुरुषवाहं वहति] | = @deva[पुरुषः प्रेष्यो भूत्वा वहति] | the man, becoming a servant, carries another |

Why "agent"? @deva[जीवेन नष्टः] ("destroyed by life") — not this rule.`,

  '34044': `@deva[ऊर्ध्वे कर्तरि शुष्पूरोः] — @deva[णमुल्] comes after @deva[शुष्] ("to dry") and @deva[पूर्] ("to fill") when @deva[ऊर्ध्व] denoting agent is compounded.

| Example | Meaning |
|---------|---------|
| @deva[ऊर्ध्वशोषं शुष्यति वृक्षः] = @deva[ऊर्ध्वे शुष्यति] | the tree dries while still standing |
| @deva[ऊर्ध्वपूरं पूर्यते] | is filled full to the brim |

Compare: @deva[यद्वोर्ध्वशोषतृणवद्विशुष्कः] — "or wither like up-heaved grass drying up" (Bhaṭṭi. III.14).

@ref[3.4.46] applies.`,

  '34045': `@deva[उपमाने कर्मणि च] — @deva[णमुल्] comes after a root when an object or agent denoting similitude (@deva[उपमान]) is compounded.

The word "agent" is read in by @deva[च].

| Example | Meaning |
|---------|---------|
| @deva[घृतनिधायं निहितं जलम्] | water was kept as ghee would be kept |
| @deva[सुवर्णनिधायं निहितः] | was kept as gold |

The force is like @deva[इव]: @deva[घृतनिधायं निहितः] = @deva[घृतमिव निहितः].

With agent as object of comparison: the same pattern applies.`,

  '34046': `@deva[कषादिषु यथाविध्यनुप्रयोगः] — From @deva[कष्] etc. (@ref[3.4.34] through @ref[3.4.45]), the same verb must be used after the gerund as the verb from which the gerund is derived.

This is a @deva[नियम] (restrictive) rule, illustrated in the examples under previous sūtras.

This chapter deals with affixes employed in denoting syntactical relation between two verbs (@deva[धातुसम्बन्धे प्रत्ययाः] — see @ref[3.4.1]).`,

  '34047': `@deva[उपदंशादिभ्यः] — @deva[णमुल्] comes after @deva[दंश्] ("to bite") preceded by @deva[उप] when a word in instrumental case is compounded.

The upapada-samāsa is optional here (@ref[2.2.21]).

| Example | Alternative | Meaning |
|---------|-------------|---------|
| @deva[मूलकोपदंशं भुङ्क्ते] | @deva[मूलकेनोपदंशं भुङ्क्ते] | he eats after relishing with radish |
| @deva[आर्द्रकोपदंशं भुङ्क्ते] | @deva[आर्द्रकेणोपदंशं भुङ्क्ते] | relished with ginger |`,

  '34048': `@deva[तृतीयायां हिंसार्थानां समानकर्मकाणाम्] — @deva[णमुल्] comes after roots meaning "to strike/injure" (@deva[हिंसार्थ]) when the object of the gerund is the same as the main verb's object, and the noun is in instrumental case.

Example: @deva[दण्डोपघातं गाः कालयति] — "He collects cows, beating them with a club."

Compounding is optional (@ref[2.2.21]): also @deva[दण्डेनोपघातम्].

Similarly with other @deva[हिंसार्थ] verbs.`,

  '34049': `@deva[सप्तम्यां च पीडोपरुध्योपकृषाम्] — @deva[णमुल्] comes after @deva[पीड्] ("to press"), @deva[रुध्] ("to obstruct"), and @deva[कृष्] ("to draw") when preceded by @deva[उप] and compounded with nouns in locative case.

The "instrumental case" is also read in by @deva[च].

Example: @deva[पार्श्वोपपीडं शेते] — "He sleeps pressing on his sides."

Compounding is optional (@ref[2.2.21]): also @deva[पार्श्वे उपपीडम्].`,

  '34050': `@deva[समासत्तौ] — @deva[णमुल्] comes after a root when a word in locative or instrumental is compounded, and immediate contiguity (@deva[समासत्ति]) is intended — "falling together by the ears."

| Example | Alternatives | Meaning |
|---------|--------------|---------|
| @deva[केशग्राहं युध्यन्ते] | @deva[केशेषु ग्राहम्] or @deva[केशैर्ग्राहम्] | having caught each other by the hair, they fight |
| @deva[हस्तग्राहं युध्यन्ते] | @deva[हस्तेषु ग्राहम्] or @deva[हस्तैर्ग्राहम्] | — |`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.4.1-50). Total: ${Object.keys(vasu).length}`);
