import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '53001': `@deva[प्राग्दिशो विभक्तिः] — The affixes taught from here up to (but excluding) @ref[5.3.27] are called @deva[विभक्ति].

These are svārtha affixes — they do not change the meaning of the base but leave it intact. Since @ref[4.1.82] does not extend here, words formed with these affixes do not create epithets.

Purpose of the @deva[विभक्ति] designation:
1. Prevents elision of final @deva[स्] and @deva[म्] of affixes
2. Allows certain accent rules to apply

Example: @ref[5.3.7] teaches @deva[तसिल्] after @deva[किम्] in ablative → @deva[कुतः], @deva[ततः], @deva[यतः].`,

  '53002': `@deva[किंसर्वनामबहुभ्योऽद्व्यादिभ्यः] — These prāgdiśīya affixes come after:
- @deva[किम्]
- sarvanāman words
- @deva[बहु]

But NOT after @deva[द्वि] etc. (though they are sarvanāman).

| Base | Example |
|------|---------|
| @deva[किम्] | @deva[कुत्र], @deva[कुतः] |
| @deva[यद्] | @deva[यतः], @deva[यत्र] |
| @deva[बहु] | @deva[बहुतः], @deva[बहुत्र] |

Why exclude @deva[द्वि] etc.? → @deva[द्वाभ्याम्], @deva[द्वयोः] (regular case forms).

Why mention @deva[किम्] separately? — It's in the @deva[द्व्यादि] class, so would be excluded without explicit mention.

@note[Vārttika: @deva[बहु] here is a number (saṅkhyā), so: @deva[बहोः सूपात्], @deva[बहौ सूपे] (not *@deva[बहुतः सूपात्]).]`,

  '53003': `@deva[इदमो हः] — @deva[इश्] substitutes for @deva[इदम्] when a prāgdiśīya affix follows.

The @deva[श्] in @deva[इश्] indicates whole-word replacement (@ref[1.1.55]).

Example: @deva[इदम्] + @deva[ह] (@ref[5.3.11]) = @deva[इह] — here`,

  '53004': `@deva[रथयोरेतेतौ च] — Before prāgdiśīya affixes beginning with @deva[र्] or @deva[थ], @deva[इदम्] is replaced by:
- @deva[एत] (before @deva[र्])
- @deva[इत] (before @deva[थ])

This supersedes @deva[इश्].

| Affix | Substitution | Result |
|-------|-------------|--------|
| @deva[र्हिल्] (@ref[5.3.16]) | @deva[एत] | @deva[एतर्हि] (at this time) |
| @deva[थमु] (@ref[5.3.24]) | @deva[इत] | @deva[इत्थम्] (in this manner) |`,

  '53005': `@deva[एतदोऽश्] — @deva[अश्] substitutes for @deva[एतद्] when a prāgdiśīya affix follows.

The @deva[श्] causes whole-word replacement (@ref[1.1.55]). According to Patañjali, the substitute is @deva[अन्], not @deva[अश्].

| Base | Affix | Result |
|------|-------|--------|
| @deva[एतद्] | @deva[तसिल्] (@ref[5.3.7]) | @deva[अतः] (from here) |
| @deva[एतद्] | @deva[त्रल्] (@ref[5.3.10]) | @deva[अत्र] (here) |

@note[Vārttika: Divide the sūtra — @deva[एत] and @deva[इत्] also substitute for @deva[एतद्] before @deva[र्] and @deva[थ]: @deva[एतद्] + @deva[र्हिल्] = @deva[एतर्हि]; @deva[एतद्] + @deva[थमु] = @deva[इत्थम्].]`,

  '53006': `@deva[सर्वस्य सः दाद्घौ] — @deva[स] substitutes for @deva[सर्व] before a prāgdiśīya @deva[विभक्ति] beginning with @deva[द].

@deva[सर्व] + @deva[दा] = @deva[सदा] or @deva[सर्वदा] — always

When the affix is not prāgdiśīya, no substitution:
@deva[सर्वे ददाति] = @deva[सर्वदा ब्राह्मणी] "a Brāhmaṇī who gives all" (not *@deva[सदा]).`,

  '53007': `@deva[पञ्चम्यास्तसिल्] — The affix @deva[तसिल्] (realized as @deva[तस्]) comes after @deva[किम्], sarvanāman, and @deva[बहु] when in the ablative (5th case).

| Base | + @deva[तसिल्] | Meaning |
|------|--------------|---------|
| @deva[किम्] | @deva[कुतः] (@ref[7.2.104]) | from where? |
| @deva[यद्] | @deva[यतः] | from which |
| @deva[तद्] | @deva[ततः] | from that |
| @deva[बहु] | @deva[बहुतः] | from many |`,

  '53008': `@deva[तसेश्च] — @deva[तसिल्] also substitutes for the @deva[तस्] of @ref[5.4.44] and @ref[5.4.45] when @deva[किम्], sarvanāman, or @deva[बहु] follows.

Examples: @deva[कुतः], @deva[यतः], @deva[ततः], @deva[बहुत आगतः]

This substitution:
1. Affects accent
2. Gives the @deva[विभक्ति] designation`,

  '53009': `@deva[पर्यभिभ्यां च] — @deva[तसिल्] also comes after @deva[परि] and @deva[अभि].

| Word | Meaning | Derivative |
|------|---------|-----------|
| @deva[परि] | all | @deva[परितः] = @deva[सर्वतः] (all around) |
| @deva[अभि] | both | @deva[अभितः] = @deva[उभयतः] (on both sides) |`,

  '53010': `@deva[सप्तम्यास्त्रल्] — The affix @deva[त्रल्] comes after @deva[किम्], sarvanāman, and @deva[बहु] when in the locative (7th case).

| Base | + @deva[त्रल्] | Meaning |
|------|--------------|---------|
| @deva[किम्] | @deva[कुत्र] (@ref[7.2.104]) | where? |
| @deva[तद्] | @deva[तत्र] (@ref[7.2.102]) | there |
| @deva[बहु] | @deva[बहुत्र] | in many places |`,

  '53011': `@deva[इदमो हः] — The affix @deva[ह] comes after @deva[इदम्] in the locative (7th case).

This supersedes @deva[त्रल्].

@deva[इदम्] + @deva[ह] = @deva[इह] (@ref[5.3.3]) — here`,

  '53012': `@deva[किमः कः] — The affix @deva[अत्] (realized as @deva[अ]) comes after @deva[किम्] in the locative.

This supersedes @deva[त्रल्].

@deva[किम्] + @deva[अत्] = @deva[क्व] + @deva[अ] (@ref[7.2.105]) = @deva[क्व] — where?

Example: @deva[क्व भोक्ष्यसे] "where will you eat?"

@note[Some allow @deva[त्रल्] also, reading @deva[वा] from the next sūtra: @deva[कुत्र].]`,

  '53013': `@deva[छन्दसि हो वा] — In the Vedas, @deva[ह] optionally comes after @deva[किम्] in the locative (along with other affixes).

| Form | Formation |
|------|-----------|
| @deva[कुह] | @deva[किम्] + @deva[ह] (@ref[7.2.104]) |
| @deva[क्व] | @deva[किम्] + @deva[अत्] |
| @deva[कुत्र] | @deva[किम्] + @deva[त्रल्] |

Ṛgveda VIII.62.4: @deva[कुहस्थः कुहजग्मथुः कुह श्येनेव पेतथुः] — "Where are you two? Where did you go? Where do you fall like eagles?"`,

  '53014': `@deva[इतरेभ्योऽप्यदृष्टात्] — The above affixes (@deva[तसिल्], @deva[त्रल्], @deva[ह], etc.) are seen after @deva[किम्], sarvanāman, and @deva[बहु] in cases OTHER than locative and ablative.

"Are seen" (@deva[दृष्ट]) indicates this occurs in specific contexts — with honorific words like @deva[भवत्], @deva[दीर्घायुः], @deva[आयुष्मान्], @deva[देवानां प्रियः].

| Case | Example |
|------|---------|
| Nom. | @deva[ततो भवान्] or @deva[तत्र भवान्] = @deva[स भवान्] |
| Acc. | @deva[तत्र भवन्तम्] or @deva[ततो भवन्तम्] = @deva[तं भवन्तम्] |`,

  '53015': `@deva[सर्वैकान्यकिंयत्तदः काले दा] — The affix @deva[दा] comes after @deva[सर्व], @deva[एक], @deva[अन्य], @deva[किम्], @deva[यद्], and @deva[तद्] when time is meant, with the word in the locative.

This supersedes @deva[त्रल्].

| Base | + @deva[दा] | Meaning |
|------|-----------|---------|
| @deva[सर्व] | @deva[सर्वदा] / @deva[सदा] (@ref[5.3.6]) | always |
| @deva[एक] | @deva[एकदा] | once |
| @deva[अन्य] | @deva[अन्यदा] | at another time |
| @deva[किम्] | @deva[कदा] (@ref[7.2.103]) | when? |
| @deva[यद्] | @deva[यदा] | when |
| @deva[तद्] | @deva[तदा] | then |

Why @deva[काले] "when time is denoted"? → @deva[सर्वत्र देशे] "everywhere" (place, not time).`,

  '53016': `@deva[इदमो र्हिल्] — The affix @deva[र्हिल्] comes after @deva[इदम्] in the locative when time is meant.

This supersedes @deva[ह]. The @deva[ल्] is for accent.

@deva[अस्मिन् काले] = @deva[एतर्हि] (@ref[5.3.4]) — at this time, now

Why "when time"? → @deva[इह] "in this place" (@deva[इह देशे]).`,

  '53017': `@deva[अधुनापि] — The word @deva[अधुना] is an irregular formation with the same meaning.

@deva[अस्मिन् काले] = @deva[अधुना] — now, at this time

Formation: @deva[इदम्] → @deva[अश्] substitute + @deva[धुन] affix`,

  '53018': `@deva[दानीं च] — The affix @deva[दानीम्] also comes after @deva[इदम्] in the locative when time is meant.

@deva[अस्मिन् काले] = @deva[इदानीम्] (@ref[5.3.3]) — now, at this time`,

  '53019': `@deva[तदो दानीमः] — After @deva[तद्] in the locative when time is meant, both @deva[दा] and @deva[दानीम्] come.

@deva[तस्मिन् काले] = @deva[तदा] or @deva[तदानीम्] — at that time, then

@note[The @deva[दा] portion is technically redundant since @deva[तद्] already takes @deva[दा] by @ref[5.3.15].]`,

  '53020': `@deva[इदमस्तदोर्दार्हिलौ च छन्दसि] — In the Vedas, @deva[इदम्] takes @deva[दा], and @deva[तद्] takes @deva[र्हिल्], along with other affixes.

| Base | Special affix | Other affixes |
|------|--------------|---------------|
| @deva[इदम्] | @deva[दा] → @deva[इदा] (@ref[5.3.3]) | @deva[इदानीम्] |
| @deva[तद्] | @deva[र्हिल्] → @deva[तर्हि] (@ref[7.2.102]) | @deva[तदानीम्] |

Ṛgveda VIII.27.11: @deva[इदा हि यमुपस्तुतिभिदा वामस्य भक्तये]`,

  '53021': `@deva[अनद्यतने र्हिल् वा] — The affix @deva[र्हिल्] optionally comes after @deva[किम्], sarvanāman, and @deva[बहु] when the time is NOT of the current day.

This is a general rule (not Vedic-only).

| Base | With @deva[र्हिल्] | With @deva[दा] |
|------|------------------|---------------|
| @deva[किम्] | @deva[कर्हि] (@ref[7.2.103]) | @deva[कदा] |
| @deva[यद्] | @deva[यर्हि] | @deva[यदा] |
| @deva[तद्] | @deva[तर्हि] | @deva[तदा] |`,

  '53022': `@deva[सद्यःपरुत्परार्यैषमःपरेद्यव्यद्यपूर्वेद्युरन्येद्युरन्यतरेद्युरितरेद्युरपरेद्युरधरेद्युरुभयेद्युरुत्तरेद्युश्च] — The following are irregular (nipātana) formations denoting time:

| Word | Meaning |
|------|---------|
| @deva[सद्यः] | the same day (from @deva[समान] + @deva[द्यस्]) |
| @deva[परुत्] | last year |
| @deva[परारि] | the year before last |
| @deva[ऐषमस्] | this year |
| @deva[परेद्यवि] | on the following day |
| @deva[अद्य] | today |
| @deva[पूर्वेद्युस्] | on the previous day |
| @deva[अन्येद्युस्] | on another day |
| @deva[अन्यतरेद्युस्] | on one or another day |
| @deva[इतरेद्युस्] | on the other day |
| @deva[अपरेद्युस्] | on a later day |
| @deva[अधरेद्युस्] | on an earlier day |
| @deva[उभयेद्युस्] | on both days |
| @deva[उत्तरेद्युस्] | on the following day |`,

  '53023': `@deva[प्रकारवचने थाल्] — The affix @deva[थाल्] comes after @deva[किम्] etc. (@ref[5.3.2]) when manner or mode is meant.

The word @deva[प्रकार] means the distinguishing quality of a kind — "sort, kind, mode, manner."

| Base | + @deva[थाल्] | Meaning |
|------|-------------|---------|
| @deva[तद्] | @deva[तथा] | so, in that manner |
| @deva[यद्] | @deva[यथा] | as, in which manner |
| @deva[सर्व] | @deva[सर्वथा] | in every way |

@note[@deva[थाल्] denotes the mode itself, while @deva[जातीयर्] (@ref[5.3.69]) denotes things possessing that quality — they don't block each other.]`,

  '53024': `@deva[इदमस्थमु] — The affix @deva[थमु] (realized as @deva[थम्]) comes after @deva[इदम्] when manner is meant.

This supersedes @deva[थाल्].

@deva[अनेन प्रकारेण] = @deva[इत्थम्] (@ref[5.3.4]) — in this manner, thus

The @deva[उ] in @deva[थमु] prevents @deva[म्] from being treated as an indicatory letter (@ref[1.3.4]).`,

  '53025': `@deva[किमश्च] — @deva[थमु] also comes after @deva[किम्] when manner is meant.

@deva[केन प्रकारेण] = @deva[कथम्] — how? in what manner?`,

  '53026': `@deva[हेतौ च था छन्दसि] — In the Vedas, @deva[था] comes after @deva[किम्] when cause or manner is meant.

| Meaning | Example |
|---------|---------|
| Cause (@deva[हेतु]) | @deva[कथा ग्रामं न पृच्छसि] = @deva[केन हेतुना...] "for what reason don't you ask about the village?" |
| Manner (@deva[प्रकार]) | @deva[कथा देवा आसन् पुराविदः] "how were the gods knowers of old?" |

Here end the affixes designated as @deva[विभक्ति].`,

  '53027': `@deva[दिक्शब्देभ्यः सप्तमीपञ्चमीप्रथमाभ्यो दिग्देशकालेष्वस्ताति] — The affix @deva[अस्ताति] (realized as @deva[अस्तात्]) comes after direction words in the locative (7th), ablative (5th), or nominative (1st) when direction, place, or time is meant.

The word retains its meaning (svārtha).

| Direction | Location | Source | Time |
|-----------|----------|--------|------|
| @deva[पुरस्तात्] | lives eastward | came from east | was pleasant before |
| @deva[अधस्तात्] | lives below | came from below | was pleasant earlier |

Restrictions:
- "After direction words" → not @deva[ऐन्द्र्यां दिशि वसति]
- "In loc./abl./nom." → not @deva[पूर्वं ग्रामं गतः]
- "When direction/place/time" → specific semantic conditions`,

  '53028': `@deva[दक्षिणोत्तराभ्यामतसुच्] — The affix @deva[अतसुच्] (realized as @deva[अतस्]) comes after @deva[दक्षिण] and @deva[उत्तर] in the sense of direction/place/time.

This supersedes @deva[अस्ताति].

| Base | Direction | Source | Place/Time |
|------|-----------|--------|------------|
| @deva[दक्षिण] | @deva[दक्षिणतो वसति] | @deva[दक्षिणत आगतः] | @deva[दक्षिणतो रमणीयम्] |
| @deva[उत्तर] | @deva[उत्तरतो वसति] | @deva[उत्तरत आगतः] | @deva[उत्तरतो रमणीयम्] |

Note: @deva[दक्षिण] cannot refer to time — only direction and place.`,

  '53029': `@deva[परावराभ्यां च] — @deva[अतसुच्] also comes after @deva[पर] and @deva[अवर], alongside @deva[अस्ताति].

| Base | With @deva[अतसुच्] | With @deva[अस्ताति] |
|------|-------------------|-------------------|
| @deva[पर] | @deva[परतः] | @deva[परस्तात्] |
| @deva[अवर] | @deva[अवरतः] | @deva[अवरस्तात्] |

All with @deva[वसति], @deva[आगतः], @deva[रमणीयम्].`,

  '53030': `@deva[अञ्चेर्लुक्] — After direction words ending in @deva[अञ्च्], @deva[अस्ताति] undergoes @deva[लुक्] (elision).

| Base | Direction | Source | Quality |
|------|-----------|--------|---------|
| @deva[प्राच्] | @deva[प्राग् वसति] | @deva[प्राग् आगतः] | @deva[प्राग् रमणीयम्] |
| @deva[प्रत्यक्] | (same pattern) | | |

The feminine affix (as in @deva[प्राची]) is also elided when the taddhita is elided by @deva[लुक्] (@ref[1.2.49]).`,

  '53031': `@deva[उपर्युपरिष्टाच्च] — @deva[उपरि] and @deva[उपरिष्टात्] are irregular formations in the @deva[अस्ताति] sense.

Derived from @deva[ऊर्ध्व]:
- @deva[ऊर्ध्व] → @deva[उप] + @deva[रिल्] = @deva[उपरि]
- @deva[ऊर्ध्व] → @deva[उप] + @deva[रिष्टातिल्] = @deva[उपरिष्टात्]

| Form | Direction | Source | Quality |
|------|-----------|--------|---------|
| @deva[उपरि] | @deva[उपरि वसति] | @deva[उपर्य् आगतः] | @deva[उपरि रमणीयम्] |
| @deva[उपरिष्टात्] | @deva[उपरिष्टाद् वसति] | @deva[उपरिष्टाद् आगतः] | @deva[उपरिष्टाद् रमणीयम्] |`,

  '53032': `@deva[पश्चाच्च] — @deva[पश्चात्] is an irregular formation in the @deva[अस्ताति] sense.

Formation: @deva[अपर] → @deva[पश्च] + @deva[आति] = @deva[पश्चात्]

@deva[अपरस्यां दिशि वसति] = @deva[पश्चाद् वसति] — lives westward

Vārttikas:
1. When @deva[अपर] is preceded by another direction word: @deva[दक्षिणपश्चात्], @deva[उत्तरपश्चात्]
2. When followed by @deva[अर्ध]: @deva[दक्षिणपश्चार्धः], @deva[उत्तरपश्चार्धः]
3. @deva[अपर] → @deva[पश्च] before @deva[अर्ध] alone: @deva[पश्चार्धः]`,

  '53033': `@deva[पश्चपश्चाच्छन्दसि] — In the Vedas, @deva[पश्च] and @deva[पश्चा] occur with the @deva[अस्ताति] sense, along with @deva[पश्चात्].

Example: @deva[पुरा व्याघ्रो जायते], @deva[पश्च] / @deva[पश्चा] / @deva[पश्चात्] @deva[सिंहः] — "First a tiger is born, after/behind a lion."

Ṛgveda X.87.21: @deva[पश्चात् पुरस्ताद् अधराद् उदक्तात्]
Ṛgveda X.149.3: @deva[पश्चेदमन्यदभवद् यज्जात्रम्]`,

  '53034': `@deva[उत्तरदक्षिणयोराति] — The affix @deva[अति] comes after @deva[उत्तर] and @deva[दक्षिण] in the @deva[अस्ताति] sense.

| Base | Direction | Source | Quality |
|------|-----------|--------|---------|
| @deva[उत्तर] | @deva[उत्तराद् वसति] | @deva[उत्तराद् आगतः] | @deva[उत्तराद् रमणीयम्] |
| @deva[दक्षिण] | @deva[दक्षिणाद् वसति] | — | @deva[दक्षिणाद् रमणीयम्] |
| @deva[अधर] | @deva[अधराद् वसति] | — | — |`,

  '53035': `@deva[उत्तरदक्षिणयोरेनप् अपञ्चम्यादूरे च] — The affix @deva[एनप्] (realized as @deva[एन]) optionally comes after @deva[उत्तर] and @deva[दक्षिण] in the @deva[अस्ताति] sense when:
1. The reference is NOT remote
2. It does NOT substitute for the ablative

The forms with @deva[एनप्] have locative/nominative force only (not ablative) and refer to nearby objects.

| Base | Near (@deva[एनप्]) | Far |
|------|------------------|-----|
| @deva[उत्तर] | @deva[उत्तरेण वसति/रमणीयम्] | (use other affixes) |
| @deva[दक्षिण] | @deva[दक्षिणेण वसति/रमणीयम्] | (use other affixes) |
| @deva[अधर] | @deva[अधरेण वसति] | — |

"He lives nearby in the north/south."`,

  '53036': `@deva[दक्षिणस्याच्] — The affix @deva[आच्] (realized as @deva[आ]) comes after @deva[दक्षिण] in the @deva[अस्ताति] sense, but NOT as an ablative substitute.

@deva[दक्षिणा वसति] — lives in the south
@deva[दक्षिणा रमणीयम्] — the south is pleasant

But: @deva[दक्षिणत आगतः] (ablative uses @deva[अतसुच्])

The @deva[च्] differentiates this @deva[आ] from other affixes (e.g., in @ref[2.3.29]).`,

  '53037': `@deva[दूरे च आहिश्च] — The affix @deva[आहि] comes after @deva[दक्षिण] in the @deva[अस्ताति] sense when a DISTANT reference is meant, along with @deva[आच्].

| Affix | Example | Meaning |
|-------|---------|---------|
| @deva[आहि] | @deva[दक्षिणाहि वसति] | lives far away in the south |
| @deva[आच्] | @deva[दक्षिणा वसति] | lives far in the south |

Similarly: @deva[दक्षिणाहि रमणीयम्], @deva[दक्षिणा रमणीयम्]

When NOT distant: @deva[दक्षिणतो वसति].

Ablative still uses @deva[अतसुच्]: @deva[दक्षिणत आगतः].`,

  '53038': `@deva[उत्तरायाश्च दूरे] — The affixes @deva[आच्] and @deva[आहि] come after @deva[उत्तर] in the @deva[अस्ताति] sense when a DISTANT reference is meant.

| Form | Meaning |
|------|---------|
| @deva[उत्तरा वसति] | lives far away in the north |
| @deva[उत्तराहि वसति] | lives far away in the north |
| @deva[उत्तरा रमणीयम्] | the far north is pleasant |

When NOT distant: @deva[उत्तरेण प्रयाति] — "goes (nearby) north."

Ablative: @deva[उत्तराद् आगतः].`,

  '53039': `@deva[पूर्वाधरावराणामसिपुर्अधोऽवश्च] — The affix @deva[असि] (realized as @deva[अस्]) comes after @deva[पूर्व], @deva[अधर], and @deva[अवर], with the following substitutions:

| Base | Substitute | Result |
|------|-----------|--------|
| @deva[पूर्व] | @deva[पुर्] | @deva[पुरस्] |
| @deva[अधर] | @deva[अध्] | @deva[अधस्] |
| @deva[अवर] | @deva[अव्] | @deva[अवस्] |

Examples:
- @deva[पुरो वसति], @deva[पुर आगतः], @deva[पुरो रमणीयम्]
- @deva[अधो वसति], @deva[अध आगतः], @deva[अधो रमणीयम्]
- @deva[अवो वसति], @deva[अव आगतः], @deva[अवो रमणीयम्]

The condition @deva[अपञ्चम्याः] does NOT apply here.`,

  '53040': `@deva[अस्तातौ च] — The same substitutions (@deva[पुर्] for @deva[पूर्व], @deva[अध्] for @deva[अधर], @deva[अव्] for @deva[अवर]) occur when @deva[अस्ताति] follows.

This implies @deva[अस्ताति] is NOT blocked by @deva[असि] after these words.

| Form with @deva[अस्ताति] |
|--------------------------|
| @deva[पुरस्तात् वसति / आगतः / रमणीयम्] |
| @deva[अधस्तात् वसति / आगतः / रमणीयम्] |
| @deva[अवस्तात् वसति / आगतः / रमणीयम्] |`,

  '53041': `@deva[अवरस्य वाऽस्तातौ] — The substitution of @deva[अव्] for @deva[अवर] is OPTIONAL when @deva[अस्ताति] follows.

| Optional forms |
|---------------|
| @deva[अवरस्तात्] or @deva[अवस्तात्] |

All with @deva[वसति], @deva[आगतः], @deva[रमणीयम्].

The previous sūtra made it obligatory; this declares it optional.`,

  '53042': `@deva[संख्यायाः क्रियाभ्यावृत्तिगणने धा] — The affix @deva[धा] comes after a numeral when the meaning is mode or manner of an action.

The words @deva[विधा] and @deva[प्रकार] have the same meaning. These adverbs apply to all kinds of actions.

| Numeral | + @deva[धा] | Meaning |
|---------|------------|---------|
| @deva[एक] | @deva[एकधा] | once, in one way |
| @deva[द्वि] | @deva[द्विधा] | twice, in two ways |
| @deva[त्रि] | @deva[त्रिधा] | thrice, in three ways |
| @deva[चतुर्] | @deva[चतुर्धा] | four times/ways |
| @deva[पञ्चन्] | @deva[पञ्चधा] | five times/ways |

Example: @deva[एकधा भुङ्क्ते] "he eats once."`,

  '53043': `@deva[अधिकरणविचाले च] — @deva[धा] also comes after a numeral when the meaning is change in distribution of substances.

@deva[अधिकरण] = matter, substance
@deva[विचाल] = change in numbers — making one into many, or many into one

| Expression | Meaning |
|-----------|---------|
| @deva[पञ्चधा कुरु] | divide one heap into five |
| @deva[अष्टधा कुरु] | divide into eight |
| @deva[एकधा कुरु] (@deva[अनेकम्]) | make many into one |`,

  '53044': `@deva[एकस्य च धाव्ययम्] — After @deva[एक], @deva[ध्यम्] optionally substitutes for @deva[धा].

| With @deva[धा] | With @deva[ध्यम्] |
|---------------|------------------|
| @deva[एकधा राशिं कुरु] | @deva[ऐकध्यं राशिं कुरु] |
| @deva[एकधा भुङ्क्ते] | @deva[ऐकध्यं भुङ्क्ते] |

The repetition of @deva[धा] in the sūtra shows substitution applies in BOTH senses:
1. @deva[विधा] (mode of action)
2. @deva[अधिकरणविचाल] (distribution change)`,

  '53045': `@deva[द्वित्र्योर्धमुञ्च] — @deva[धमुञ्] optionally substitutes for @deva[धा] after @deva[द्वि] and @deva[त्रि].

| Base | With @deva[धा] | With @deva[धमुञ्] |
|------|--------------|------------------|
| @deva[द्वि] | @deva[द्विधा] | @deva[द्वैधम्] |
| @deva[त्रि] | @deva[त्रिधा] | @deva[त्रैधम्] |

Applies in both @deva[विधार्थ] and @deva[अधिकरणविचाल] senses.

@note[Vārttika: The affix @deva[ड] (with final vowel elision) comes after @deva[धमुञ्] without changing the sense: @deva[द्वैध], @deva[त्रैध]. Example: @deva[पथि द्वैधानि संश्रयन्ते], @deva[मति त्रैधानि संश्रयन्ते].]`,

  '53046': `@deva[एधाच्च] — @deva[एधाच्] (realized as @deva[एधा]) optionally substitutes for @deva[धा] after @deva[द्वि] and @deva[त्रि].

| Base | Options |
|------|---------|
| @deva[द्वि] | @deva[द्वेधा] (@ref[6.4.148]), @deva[द्वैधम्], @deva[द्विधा] |
| @deva[त्रि] | @deva[त्रेधा], @deva[त्रैधम्], @deva[त्रिधा] |`,

  '53047': `@deva[याप्ये पाशप्] — The affix @deva[पाशप्] denotes something as contemptible or insignificant.

@deva[याप्य] = contempt, trifling

| Base | With @deva[पाशप्] | Meaning |
|------|------------------|---------|
| @deva[वैयाकरण] | @deva[वैयाकरणपाशः] | a very bad grammarian |
| @deva[याज्ञिक] | @deva[याज्ञिकपाशः] | a very bad ritualist |

This does NOT apply to a person who is a good grammarian but has bad character — it specifically denotes incompetence in the field.`,

  '53048': `@deva[तीयादनादयतोरसंख्यादेः] — The affix @deva[अन्] comes after ordinal stems ending in @deva[तीय] when a "part" or "fraction" is meant.

The word retains its meaning (svārtha). This sūtra is for accent:

| Ordinal | Accent normally | With @deva[अन्] (fractional) |
|---------|----------------|----------------------------|
| @deva[द्वितीयः] | @deva[द्विती॑यः] (udātta on @deva[ती]) | @deva[द्वि॑तीयः] (udātta on @deva[द्वि]) |
| @deva[तृतीयः] | @deva[तृती॑यः] | @deva[तृ॑तीयः] |

@deva[द्वितीयो भागः] = @deva[द्वि॑तीयः] "the half, the moiety"

When not "part": no accent change. The @deva[तीय] affix always forms ordinals only.`,

  '53049': `@deva[प्रागेकादशतोऽन्न छन्दसि] — The affix @deva[अन्] comes after ordinals from 4th to 10th (before 11th) when "part" is meant — but NOT in the Vedas.

This affects accent:

| Ordinal | With @deva[अन्] (part) |
|---------|----------------------|
| @deva[चतुर्थ] | @deva[च॑तुर्थः] (fourth part) |
| @deva[पञ्चम] | @deva[प॑ञ्चमः] (fifth part) |
| @deva[सप्तम] | @deva[स॑प्तमः] (seventh part) |
| @deva[नवम] | @deva[न॑वमः] (ninth part) |
| @deva[दशम] | @deva[द॑शमः] (tenth part) |

Why "before eleven"? → @deva[एकादशः॑], @deva[द्वादशः॑] have no accent change (@ref[6.1.223]).

Why "not in Vedas"? → @deva[पञ्चममिन्द्रियस्यापाक्रामत] (accent on final: @deva[पञ्चम॑]).`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.3.1-49). Total: ${Object.keys(vasu).length}`);
