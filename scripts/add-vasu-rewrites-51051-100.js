import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '51051': `@deva[वसनद्रव्याभ्यां ठन्कनौ] — The affixes @deva[ठन्] (+@deva[इक]) and @deva[कन्] (+@deva[क]) come respectively after @deva[वसन] and @deva[द्रव्य] in the accusative, in the sense of "who carries."

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[वसन] | @deva[वस्नं हरति वहति वा] | @deva[वस्निकः] | one who carries cloth |
| @deva[द्रव्य] | @deva[द्रव्यं हरति] | @deva[द्रव्यकः] | one who carries goods |`,

  '51052': `@deva[तत्संभवत्यवहरति पचति च] — The above affixes also have the sense of "what is capable of holding that, takes away that, or cooks that."

The word @deva[तद्] indicates the accusative case. Key terms:
- @deva[संभव] = capacity to hold the exact quantity
- @deva[अवहार] = taking away, containing

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[प्रस्थं संभवति] | @deva[प्रास्थिकः] | a vessel capable of holding a Prastha measure |
| @deva[प्रस्थम् अवहरति] | @deva[प्रास्थिकः] | a vessel that takes away a Prastha measure |
| @deva[प्रस्थं पचति] | @deva[प्रास्थिकः] | a person who cooks a Prastha measure |

Also: @deva[क्रौडविकः], @deva[खारीकः]

@note[The word @deva[संभव] does not govern @deva[पचति]. Thus @deva[प्रस्थं पचति ब्राह्मणी] = @deva[प्रास्थिकी] "a Brahmin woman who cooks a Prastha measure."]`,

  '51053': `@deva[आढकाचितपात्राट्खोवा] — The affix @deva[ख] (@deva[ईन]) may optionally be added in the sense of "capable of holding" etc. after @deva[आढक], @deva[आचित], and @deva[पात्र].

This @deva[ख] debars @deva[ठञ्], which comes in the alternative.

| Base | With @deva[ख] | With @deva[ठञ्] |
|------|---------------|-----------------|
| @deva[आढक] | @deva[आढकीना] | @deva[आढकिकी] |
| @deva[आचित] | @deva[आचितीना] | @deva[आचितिकी] |
| @deva[पात्र] | @deva[पात्रीणा] | @deva[पात्रिकी] |`,

  '51054': `@deva[द्विगोष्ठञ्च] — The affix @deva[ष्ठन्] (+@deva[इक]) as well as @deva[ख] (@deva[ईन]) may optionally come after @deva[आढक], @deva[आचित], and @deva[पात्र] when final of a @deva[द्विगु] compound, in the sense of "what can hold."

The @deva[ख] is read into the sūtra by @deva[च]. These affixes, being specially ordained, are not elided by @ref[5.1.28]. But @deva[ठञ्] in the alternative *is* elided.

The @deva[न्] of @deva[ष्ठन्] is for accent (@ref[6.1.19]); @deva[ष्] is for @deva[ङीष्].

**Three forms each:**

| Compound | @deva[ष्ठन्] | @deva[ख] | @deva[ठञ्] (elided) |
|----------|-------------|---------|---------------------|
| @deva[द्वि] + @deva[आढक] | @deva[द्व्याढकिकी] | @deva[द्व्याढकीना] | @deva[द्व्याढकी] |
| @deva[द्वि] + @deva[आचित] | @deva[द्व्याचितिकी] | @deva[द्व्याचितीना] | @deva[द्व्याचिता] |`,

  '51055': `@deva[कुलिजात्खो वा] — After @deva[कुलिज] being final of a @deva[द्विगु], there is optionally the elision of the above affixes, or the adding of @deva[ख] (@deva[ईन]), in the sense of "what can hold."

By @deva[च], @deva[ष्ठन्] is also added. The elision is optional, so @deva[ठञ्] (@ref[5.1.18]) may also be elided by @ref[5.1.28].

**Four forms:**

| Affix | Result |
|-------|--------|
| @deva[ष्ठन्] | @deva[द्विकुलिजिकी] |
| @deva[ख] | @deva[द्विकुलिजीना] |
| @deva[ठञ्] elided | @deva[द्विकुलिजा] |
| @deva[ठञ्] | @deva[द्वैकुलिजिकी] |

@note[In the last example, there is no vṛddhi of the second term (though required by @ref[7.3.17]). The word @deva[कुलिज] should be included in the exception along with @deva[संज्ञा] and @deva[शाण] of @ref[7.3.17].]`,

  '51056': `@deva[सोऽस्याधारो ऽंशो वस्नं भृतिर्वा] — The affixes taught in @ref[5.1.18] etc. also have the sense of "this is his portion, price, or pay."

The @deva[सः] shows the nominative case. Key terms:
- @deva[अंश] = share, portion
- @deva[वस्न] = price
- @deva[भृति] = wages

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[पञ्च अंशो वस्नो वा भृतिर्वास्य] | @deva[पञ्चकः] | one whose portion/price/pay is five |
| @deva[सप्त अंशो...] | @deva[सप्तकः] | — |
| @deva[सहस्रम् अंशो...] | @deva[साहस्रः] | — |`,

  '51057': `@deva[तदस्य परिमाणम्] — The affixes taught in @ref[5.1.18] etc. have the sense of "this is its measure."

The word @deva[तद्] shows the nominative case.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[प्रस्थः परिमाणमस्य] | @deva[प्रास्थिको राशिः] | a heap whose mass is a Prastha |
| — | @deva[खारीकः] | — |
| — | @deva[शत्यः], @deva[शतिकः] | — |
| — | @deva[साहस्रः] | — |
| — | @deva[द्रौणिकः], @deva[कौडविकः] | — |
| @deva[षष्ठिर्जीवितपरिमाणमस्य] | @deva[षाष्ठिकः] | one whose lifespan is sixty |
| — | @deva[द्विसाप्ततिकः] | one whose lifespan is seventy-two |

@note[Why is @deva[तदस्य] repeated when its @deva[अनुवृत्ति] could be drawn from the last sūtra? The repetition shows the affixes are re-ordained, so elision taught in @ref[5.1.28] does not apply here.]`,

  '51058': `@deva[संज्ञासंघसूत्रसंख्यायाः] — The affixes taught in @ref[5.1.18] etc. come after a numeral in the sense of "this is its measure" when the derivative means a Name, a Multitude, a Book, or a fixed way of study.

The phrase @deva[तदस्य परिमाणम्] is understood here.

| Sense | Example | Meaning |
|-------|---------|---------|
| Name (@deva[संज्ञा]) | @deva[पञ्चकाः शकुनयः] | "the Five" (birds) |
| Name | @deva[त्रिकाः शालङ्कायनाः] | "the Three" (Śālaṅkāyanas) |
| Multitude (@deva[संघ]) | @deva[पञ्चकः संघः], @deva[अष्टकः] | a flock of five, eight |
| Book (@deva[सूत्र]) | @deva[अष्टावध्यायाः परिमाणमस्य सूत्रस्य] | a book of eight chapters |

When it is a Name, the affix does not change the sense of the base.`,

  '51059': `@deva[निपातनानि पङ्क्तिविंशतित्रिंशच्चत्वारिंशत्पञ्चाशत्षष्टिसप्तत्यशीतिनवतिशतानि] — The following are anomalously formed:

| Word | Meaning | Formation |
|------|---------|-----------|
| @deva[पङ्क्ति] | a verse of 5 syllables per pāda | @deva[पञ्च] + @deva[ति] |
| @deva[विंशति] | twenty | @deva[विन्] + @deva[शतिच्] (= 2 × 10) |
| @deva[त्रिंशत्] | thirty | — |
| @deva[चत्वारिंशत्] | forty | — |
| @deva[पञ्चाशत्] | fifty | — |
| @deva[षष्टि] | sixty | — |
| @deva[सप्तति] | seventy | — |
| @deva[अशीति] | eighty | — |
| @deva[नवति] | ninety | — |
| @deva[शतम्] | hundred | — |

The phrase @deva[तदस्य परिमाणम्] is understood here.`,

  '51060': `@deva[पञ्चद्दशतोर्वर्गे] — The words @deva[पञ्चत्] and @deva[दशत्] in combination with @deva[वर्ग] may be anomalously formed in the sense of "this is its measure."

This ordains @deva[डति] instead of @deva[कन्] (@ref[5.1.22]), which also comes in the alternative.

| With @deva[डति] | With @deva[कन्] |
|----------------|-----------------|
| @deva[पञ्चद्वर्गः] | @deva[पञ्चको वर्गः] |
| @deva[दशद्वर्गः] | @deva[दशको वर्गः] |`,

  '51061': `@deva[छन्दसि सप्तनोऽञ्वर्गे] — The affix @deva[अञ्] (+@deva[अ]) comes after @deva[सप्तन्] in the Vedas when the meaning is a @deva[वर्ग] (group).

@deva[सप्त साप्तान्यसृजन्] — "they created the sevens (seven groups)"

The phrase @deva[तदस्य परिमाणम्] is understood here.`,

  '51062': `@deva[त्रिंशच्चत्वारिंशतोर्ब्राह्मणे संज्ञायाम्] — The affix @deva[अञ्] (+@deva[अ]) comes in the sense of "this is its measure" after @deva[त्रिंशत्] and @deva[चत्वारिंशत्] when it is a Name denoting a Brāhmaṇa-book.

The @deva[ड्] causes elision of the last vowel with the following consonant (@ref[6.4.143]).

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[त्रिंशदध्यायाः परिमाणमेषां ब्राह्मणानाम्] | @deva[त्रैंशानि ब्राह्मणानि] | the Brāhmaṇas of thirty chapters |
| @deva[चत्वारिंशदध्यायाः...] | @deva[चात्वारिंशानि ब्राह्मणानि] | the Brāhmaṇas of forty chapters |

@note[The locative @deva[ब्राह्मणे] has the force of @deva[अभिधेय] "meaning a Brāhmaṇa itself" (not @deva[विषय] "in Brāhmaṇa literature").]`,

  '51063': `@deva[तदर्हति] — The affixes taught in @ref[5.1.18] etc. also have the sense of "who deserves that."

The case in construction is accusative.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[श्वेतच्छत्रम् अर्हति] | @deva[श्वेतच्छत्रिकः] | who deserves the White Umbrella |
| @deva[वास्त्रयुग्मम् अर्हति] | @deva[वास्त्रयुग्मिकः] | who deserves a pair of garments |
| @deva[शतम् अर्हति] | @deva[शत्यः], @deva[शतिकः] | who deserves a hundred |
| @deva[सहस्रम् अर्हति] | @deva[साहस्रः] | who deserves a thousand |`,

  '51064': `@deva[छेदादिभ्यो नित्यम्] — After @deva[छेदादि] words in the accusative, the above affixes have the sense of "who deserves that under all circumstances."

| Base | Result | Meaning |
|------|--------|---------|
| @deva[छेद] | @deva[छैदिकः] | who perpetually deserves cutting (punishment) |
| @deva[भेद] | @deva[भैदिकः] | who perpetually deserves breaking |

@deva[छेदादि] class: @deva[छेद], @deva[भेद], @deva[द्रोह], @deva[दोह], @deva[मर्त], @deva[कर्ष], @deva[तीर्थ], @deva[संप्रयोग], @deva[विप्रयोग], @deva[प्रयोग], @deva[विप्रकर्ष], @deva[प्रेषण], @deva[संप्रश्न], @deva[विप्रश्न], @deva[विकर्ष], @deva[प्रकर्ष], @deva[विराग]...`,

  '51065': `@deva[शीर्षच्छेदाद्यच्च] — The affix @deva[यत्] as well as the above affixes come after @deva[शीर्षच्छेद] (beheading) in the accusative in the sense of "who deserves that under all circumstances."

| With @deva[यत्] | With @deva[ठञ्] |
|----------------|-----------------|
| @deva[शीर्षच्छेद्यः] | @deva[शैर्षच्छेदिकः] |

@note[The word @deva[शिरस्] is irregularly changed to @deva[शीर्ष] before the affix.]`,

  '51066': `@deva[दण्डादिभ्यो यत्] — After @deva[दण्डादि] words in the accusative, the affix @deva[यत्] comes in the sense of "who deserves that."

The word @deva[नित्य] does not govern this sūtra. This @deva[यत्] debars @deva[ठक्] (@ref[5.1.19]).

| Base | Result | Meaning |
|------|--------|---------|
| @deva[दण्ड] | @deva[दण्ड्यः] | deserving to be killed |
| @deva[मुसल] | @deva[मुसल्यः] | — |
| @deva[मधुपर्क] | @deva[मधुपर्क्यः] | — |

@deva[दण्डादि] class: @deva[दण्ड], @deva[मुसल], @deva[मधुपर्क], @deva[कशा], @deva[अर्घ], @deva[मेघ], @deva[मेधा], @deva[सुवर्ण], @deva[उदक], @deva[वध], @deva[युग], @deva[गुहा], @deva[भाग], @deva[इभ], @deva[भङ्ग]`,

  '51067': `@deva[प्रातिपदिकाद्यच्छन्दसि] — The affix @deva[यत्] (@deva[य]) comes in the sense of "deserving that" after any nominal stem in the Vedas.

This debars @deva[ठञ्] etc.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[उदक] | @deva[उदक्या वृत्तयः] | actions deserving water |
| @deva[यूप] | @deva[यूप्यः पलाशः] | palāśa tree deserving to be a sacrificial post |
| @deva[गर्त] | @deva[गर्त्यो देशः] | a place deserving to be a pit |

See @ref[6.1.213] for accent.`,

  '51068': `@deva[पात्राद्घञ्च] — The affix @deva[घञ्] (+@deva[इय]) together with @deva[यत्] (@deva[य]) comes in the sense of "deserving that" after @deva[पात्र].

This debars @deva[ठक्] and @deva[ठञ्]. The word @deva[पात्र] also denotes measure.

| Derivation | With @deva[यत्] | With @deva[घञ्] |
|------------|----------------|-----------------|
| @deva[पात्रम् अर्हति] | @deva[पात्र्यः] | @deva[पात्रियः] |`,

  '51069': `@deva[कडङ्करदक्षिणाभ्यां छयतौ] — The affixes @deva[छ] (@deva[ईय]) and @deva[यत्] (@deva[य]) come in the sense of "deserving that" after @deva[कडङ्कर] and @deva[दक्षिणा].

This debars @deva[ठक्].

| Base | With @deva[छ] | With @deva[यत्] | Meaning |
|------|--------------|-----------------|---------|
| @deva[कडङ्कर] | @deva[कडङ्करीयः] | @deva[कडङ्कर्यः] | one deserving straw (e.g., a cow) |
| @deva[दक्षिणा] | @deva[दक्षिणीयः] | @deva[दक्षिण्यो ब्राह्मणः] | a Brahmin deserving alms |`,

  '51070': `@deva[स्थालीबिलाच्च] — The affixes @deva[छ] (@deva[ईय]) and @deva[यत्] (@deva[य]) come in the sense of "deserving that" after @deva[स्थालीबिल].

This debars @deva[ठक्].

| With @deva[छ] | With @deva[यत्] | Meaning |
|--------------|-----------------|---------|
| @deva[स्थालीबिलीयाः तण्डुलाः] | @deva[स्थालीबिल्याः] | rice deserving the pot (i.e., cookable rice) |`,

  '51071': `@deva[यज्ञर्त्विग्भ्यां घखञौ] — The affixes @deva[घ] (@deva[इय]) and @deva[खञ्] (+@deva[ईन]) come respectively after @deva[यज्ञ] and @deva[ऋत्विज्] in the sense of "deserving that."

This debars @deva[ठक्].

| Base | Affix | Result | Meaning |
|------|-------|--------|---------|
| @deva[यज्ञ] | @deva[घ] | @deva[यज्ञियो ब्राह्मणः] | a Brahmin worthy of honor at a sacrifice |
| @deva[ऋत्विज्] | @deva[खञ्] | @deva[आर्त्विजीनो ब्राह्मणः] | — |

**Vārttika:** These affixes also mean "deserving the performance thereof":
- @deva[यज्ञकर्म अर्हति] = @deva[यज्ञियो देशः] "a place fit for sacrifice"
- @deva[ऋत्विक्कर्म अर्हति] = @deva[आर्त्विजीनं ब्राह्मणकुलम्] "a Brahmin family fit for priesthood"

Here ends the governing power of @deva[ठक्] (@ref[5.1.19]). Hereafter @deva[ठञ्] (@ref[5.1.18]) governs.`,

  '51072': `@deva[पारायणतुरायणचान्द्रायणादण्] — The affix @deva[ठञ्] (+@deva[इक], from @ref[5.1.18]) comes in the sense of "who performs this" after @deva[पारायण], @deva[तुरायण], and @deva[चान्द्रायण] in the accusative.

The force of @deva[अर्हति] ceases.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[पारायण] | @deva[पारायणिकः छात्रः] | a pupil who reads under a teacher |
| @deva[तुरायण] | @deva[तौरायणिको यजमानः] | a patron who performs Turāyaṇa |
| @deva[चान्द्रायण] | @deva[चान्द्रायणिकः तपस्वी] | an ascetic who performs Cāndrāyaṇa |

The word @deva[पारायण] means "a teacher" (@deva[परस्य करोति]).`,

  '51073': `@deva[संशयमापन्नः] — The affix @deva[ठञ्] (+@deva[इक]) comes in the sense of "being fallen into or thrown into" after @deva[संशय] (doubt) in the accusative.

@deva[संशयम् आपन्नः प्राप्तः] = @deva[सांशयिकः स्तम्भः] — "a doubtful pillar" (i.e., in a precarious state)`,

  '51074': `@deva[योजनं गच्छति] — The affix @deva[ठञ्] comes in the sense of "who goes" after @deva[योजन] (league) in the accusative.

@deva[योजनं गच्छति] = @deva[यौजनिकः]

**Vārttikas:**
1. Also after @deva[क्रोशशत] and @deva[योजनशत]: @deva[क्रौशशतिकः], @deva[यौजनशतिकः]
2. These also mean "worthy to be approached from so far": @deva[क्रोशशतादभिगमनमर्हति] = @deva[क्रौशशतिको भिक्षुः] "a mendicant worth approaching from a hundred krośas"`,

  '51075': `@deva[पथः ष्कन्] — The affix @deva[ष्कन्] comes in the sense of "who goes there" after @deva[पथ] (path) in the accusative.

The @deva[ष्] is for @deva[ङीष्] (@ref[4.1.41]); @deva[न्] is for accent (@ref[6.1.197]).

@deva[पन्थानं गच्छति] = @deva[पथिकः], fem. @deva[पथिकी]`,

  '51076': `@deva[पन्थो ण नित्यम्] — The affix @deva[ण] comes after @deva[पन्थ] (which substitutes for @deva[पथिन्]) in the sense of "who always goes."

The word @deva[नित्य] qualifies the affix's sense.

@deva[पन्थानं नित्यं गच्छति] = @deva[पान्थः]

Example: @deva[पान्थो भिक्षां याचते] "the traveler begs for alms"

Why @deva[नित्यम्]? Without it, @deva[पथिकः] applies (by @ref[5.1.75]).`,

  '51077': `@deva[उत्तरपथेनाहृतं च] — The affix @deva[ठञ्] comes in the sense of "who passes by that way" and "what is conveyed by that way" after @deva[उत्तरपथ] (northern route) in the instrumental.

The construction shows the instrumental case. The @deva[च] draws in @deva[गच्छति] "who passes by."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[उत्तरपथेन आहृतम्] | @deva[औत्तरपथिकम्] | conveyed by the northern route |
| @deva[उत्तरपथेन गच्छति] | @deva[औत्तरपथिकः] | one who travels the northern route |

**Vārttika:** Also after @deva[पथ] preceded by @deva[वारि], @deva[जङ्गल], @deva[स्थल], @deva[कान्तार]: @deva[वारिपथिकम्] "conveyed by waterway," @deva[जाङ्गलपथिकम्], etc.`,

  '51078': `@deva[कालाट्ठञ्] — From this sūtra forward through @ref[5.1.96] inclusive, the phrase "after a word denoting time" should be supplied.

The word @deva[कालात्] governs the following sūtras.

Thus in @ref[5.1.79] (@deva[तेन निर्वृत्तम्] "accomplished by means thereof"), we must read @deva[काल] into it.

Example: @deva[मासेन निर्वृत्तम्] = @deva[मासिकम्]`,

  '51079': `@deva[तेन निर्वृत्तम्] — The affix @deva[ठञ्] comes after a word denoting time in the instrumental in the sense of "to be accomplished by that time."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[अह्ना निर्वृत्तम्] | @deva[आह्निकम्] | to be accomplished in a day (a daily portion of reading) |
| @deva[अर्धमासेन निर्वृत्तम्] | @deva[आर्धमासिकम्] | to be accomplished in a fortnight |
| @deva[संवत्सरेण निर्वृत्तम्] | @deva[सांवत्सरिकम्] | to be accomplished in a year |`,

  '51080': `@deva[तमधीष्टो भृतो भूतो भावी] — The above affixes come after a word expressing time in the accusative in the senses of:
- @deva[अधीष्ट] = solicited to instruct (honorary, unpaid)
- @deva[भृत] = engaged on wages
- @deva[भूत] = time occupied by its past existence
- @deva[भावी] = time occupied by its future existence

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[मासम् अधीष्टः] | @deva[मासिको ऽध्यापकः] | a teacher solicited for a month |
| @deva[मासं भृतः] | @deva[मासिकः कर्मकरः] | a laborer hired for a month |
| @deva[मासं भूतः] | @deva[मासिको व्याधिः] | a disease that lasted a month |
| @deva[मासं भावी] | @deva[मासिक उत्सवः] | a festival that will last a month |

@note[The word in the accusative follows @ref[2.3.5].]`,

  '51081': `@deva[मासाद्वयसि यत्खौ] — The affixes @deva[यत्] and @deva[खञ्] come after @deva[मास] when denoting age.

This debars @deva[ठञ्]. The word @deva[भूतः] from the previous sūtra is understood.

| With @deva[यत्] | With @deva[खञ्] |
|----------------|-----------------|
| @deva[मास्यः] | @deva[मासीनः] |

Both mean "a month old."

Why "when denoting age"? Otherwise, @deva[मासिकः] applies.`,

  '51082': `@deva[द्विगोर्यप्] — The affix @deva[यप्] comes after @deva[मास] when forming a @deva[द्विगु] compound and meaning age.

| Compound | Result | Meaning |
|----------|--------|---------|
| @deva[द्वौ मासौ भूतः] | @deva[द्विमास्यः] | two months old |
| @deva[त्रयो मासाः भूतः] | @deva[त्रिमास्यः] | three months old |`,

  '51083': `@deva[षण्मासाण्ण्यत्ठञश्च] — The affixes @deva[ण्यत्], @deva[यप्], and @deva[ठञ्] come in the sense of age after @deva[षण्मास] (six months).

| Affix | Result |
|-------|--------|
| @deva[ण्यत्] | @deva[षाण्मास्यः] |
| @deva[यप्] | @deva[षण्मास्यः] |
| @deva[ठञ्] | @deva[षाण्मासिकः] |

All mean "six months old."`,

  '51084': `@deva[अवयसि च] — The affix @deva[ठन्] comes after @deva[षण्मास] when age is *not* meant.

The @deva[च] draws in @deva[ण्यत्] also.

| With @deva[ठन्] | With @deva[ण्यत्] | Meaning |
|----------------|------------------|---------|
| @deva[षाण्मासिकः] | @deva[षाण्मास्यो रोगः] | a disease lasting six months |`,

  '51085': `@deva[समायाः ख] — The affix @deva[ख] (@deva[ईन]) comes in the four-fold senses of "solicited," "hired," "lasted," and "will last" after @deva[समा] (year).

This debars @deva[ठञ्].

@deva[समाम् अधीष्टो भृतो भूतो भावी वा] = @deva[समीनः]

@note[Some say the sense is @deva[तेन निर्वृत्तम्] (@ref[5.1.79]): @deva[समया निर्वृत्तः] = @deva[समीनः].]`,

  '51086': `@deva[द्विगोर्वा] — The affix @deva[ख] (@deva[ईन]) comes optionally in the senses taught in @ref[5.1.76] and @ref[5.1.80] after @deva[समा] forming a @deva[द्विगु] compound.

In the alternative, @deva[ठञ्] also applies. The Vārttika of @ref[5.1.20] applies here.

| With @deva[ख] | With @deva[ठञ्] |
|--------------|-----------------|
| @deva[द्विमासीनः] | @deva[द्वैमासिकः] |
| @deva[त्रिमासीनः] | @deva[त्रैमासिकः] |`,

  '51087': `@deva[रात्र्यहः संवत्सराच्च] — The affix @deva[ख] comes optionally in the senses taught in @ref[5.1.79] and @ref[5.1.82] after @deva[रात्रि], @deva[अहन्], and @deva[संवत्सर] occasioning a @deva[द्विगु] compound.

In the alternative, @deva[ठञ्] also comes.

| Base | With @deva[ख] | With @deva[ठञ्] |
|------|--------------|-----------------|
| @deva[द्वि] + @deva[रात्रि] | @deva[द्विरात्रीणः] | @deva[द्वैरात्रिकः] |
| @deva[द्वि] + @deva[अहन्] | @deva[द्व्यहीनः] | @deva[द्वैयह्निकः] |
| @deva[द्वि] + @deva[संवत्सर] | @deva[द्विसंवत्सरीणः] | @deva[द्विसांवत्सरिकः] |

See @ref[6.4.145] for @deva[द्व्यहीनः] and @ref[7.3.15] for vṛddhi.`,

  '51088': `@deva[वर्षाया अल्लुक्च] — The affixes @deva[ख] and @deva[ठञ्] may also be elided after a @deva[द्विगु] compound ending in @deva[वर्षा].

The affixes @deva[ख] and @deva[ठञ्] come in the five-fold senses (@ref[5.1.79], @ref[5.1.80]) after @deva[वर्षा] forming a @deva[द्विगु]; they may also be optionally elided.

**Three forms:**

| With @deva[ख] | With @deva[ठञ्] | Elided |
|--------------|-----------------|--------|
| @deva[द्विवर्षीणः] | @deva[द्विवार्षिकी] | @deva[द्विवर्षः] |

Example: @deva[द्विवर्षो व्याधिः] "a disease that lasted two years"

Compare @ref[7.3.16]; when the sense is @deva[भावी], the form is @deva[द्वैवर्षिकः].`,

  '51089': `@deva[चित्तवति नित्यम्] — The affixes meaning "accomplished" etc. (@ref[5.1.76], @ref[5.1.80]) are necessarily elided after @deva[वर्षा] forming a @deva[द्विगु] when referring to beings endowed with reason.

Here elision is compulsory, not optional as in the last sūtra.

@deva[द्विवर्षो दारकः] — "a boy two years old"

Why @deva[चित्तवति] "when meaning endowed with reason"? Without it, the optional forms apply:
@deva[द्विवर्षीणो व्याधिः] "a disease of two years"`,

  '51090': `@deva[षष्टिका रात्रिषष्टिपक्वा निपात्यते] — The anomalously formed word @deva[षष्टिकाः] means "what are matured in sixty nights."

The word may be analyzed as @deva[षष्टिरात्रि] + @deva[कन्] in the instrumental, with @deva[रात्रि] elided, meaning "matured."

@deva[षष्टिरात्रेण पच्यन्ते] = @deva[षष्टिकाः] — "a kind of barley (that ripens in sixty nights)"

@note[It is a name of barley specifically and does not apply to pulse, beans, etc., even if they ripen in sixty days.]`,

  '51091': `@deva[वत्सरान्ताच्छन्दसि] — The affix @deva[छ] comes in the Vedas in the five-fold senses taught in @ref[5.1.76] and @ref[5.1.80] after a stem ending in @deva[वत्सर].

This debars @deva[ठञ्].

Examples: @deva[इद्वत्सरीयः], @deva[इदावत्सरीयः]`,

  '51092': `@deva[संपरिभ्यां च] — The affixes @deva[ख] (@deva[ईन]) and @deva[छ] (@deva[ईय]) come in the Vedas in the five-fold senses after @deva[वत्सर] when preceded by @deva[सम्] and @deva[परि].

| Prefix + Base | With @deva[ख] | With @deva[छ] |
|---------------|--------------|---------------|
| @deva[संवत्सर] | @deva[संवत्सरीणः] | @deva[संवत्सरीयः] |
| @deva[परिवत्सर] | @deva[परिवत्सरीणः] | @deva[परिवत्सरीयः] |`,

  '51093': `@deva[परिजय्यं लभ्यं कार्यं सुकरम्] — The affix @deva[ठञ्] comes after a word denoting time in the instrumental in the sense of:
- @deva[परिजय्य] = to be subdued (can be conquered)
- @deva[लभ्य] = to be gained or attained
- @deva[कार्य] = to be completed
- @deva[सुकर] = to be easily done

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[मासेन परिजय्यः] | @deva[मासिको व्याधिः] | a disease that can be conquered in a month |
| @deva[मासेन लभ्यः] | @deva[मासिकः पटः] | cloth obtainable in a month |
| @deva[मासेन कार्यम्] | @deva[मासिकं चान्द्रायणम्] | Cāndrāyaṇa to be performed in a month |
| @deva[मासेन सुकरः] | @deva[मासिकः प्रासादः] | a palace easily built in a month |`,

  '51094': `@deva[तदस्य ब्रह्मचर्यम्] — The affix @deva[ठञ्] comes after a word of time in the sense of "an abstinence that lasts so long" or "who practices abstinence so long."

The word @deva[तद्] shows the accusative case; @deva[अस्य] shows the affix's force; @deva[ब्रह्मचर्य] joins both.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[मासं ब्रह्मचर्यमस्य] | @deva[मासिको ब्रह्मचारी] | one who practices abstinence for a month |
| @deva[अर्धमासं...] | @deva[आर्धमासिकः] | — |
| @deva[संवत्सरं...] | @deva[सांवत्सरिकः] | — |

Alternative explanation: The affix comes after a word in the nominative when the sense is "an abstinence which lasts for such a period":
@deva[मासो ऽस्य ब्रह्मचर्यस्य] = @deva[मासिकं ब्रह्मचर्यम्] "abstinence lasting a month"`,

  '51095': `@deva[यज्ञाख्यायाश्च] — The affix @deva[ठञ्] comes after a word being the name of a sacrifice in the sense of "the fee thereof."

| Sacrifice | Result | Meaning |
|-----------|--------|---------|
| @deva[अग्निष्टोम] | @deva[आग्निष्टोमिकी] | fee for Agniṣṭoma |
| @deva[वाजपेय] | @deva[वाजपेयिकी] | fee for Vājapeya |
| @deva[राजसूय] | @deva[राजसूयिकी] | fee for Rājasūya |

@note[The word @deva[आख्या] indicates the affix applies even to sacrifice-denoting words that do not express time (@ref[5.1.78]). Without it, the rule would apply only to time-words like @deva[एकाह] and @deva[द्वादशाह].]`,

  '51096': `@deva[तत्र भववत्तद्दीयते तत्र कार्यम्] — The affixes having the sense of @deva[भव] (@ref[4.3.53]) and @deva[कालाट्ठञ्] (@ref[4.3.11]) come after a time-denoting word in the sense of "what is given therein" and "what is done therein."

| Derivation | Result |
|------------|--------|
| @deva[मासे भवम्] | @deva[मासिकम्] (by @ref[4.3.11]) |

This word also means @deva[मासे दीयते] "given in a month" and @deva[मासे कार्यम्] "done in a month."

Similarly:
- @deva[सांवत्सरिकम्]
- @deva[प्रावृषेण्यम्] (@ref[4.3.17])
- @deva[वासन्तिकम्] (@ref[4.3.20])
- @deva[हैमनम्], @deva[हैमन्तम्], @deva[हैमन्तिकम्]
- @deva[शारदम्]

All these also mean "given or done in those seasons."

@note[The word @deva[वत्] in @deva[भववत्] means all rules of @ref[4.3.53] apply here.]`,

  '51097': `@deva[तेन परिजय्यमानपुष्टम्] — The affix @deva[ठञ्] comes in the sense of "conquered, fed, or nourished by that" after a word in the instrumental.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[दण्डेन परिजय्यमान-पुष्टम्] | @deva[दाण्डिकम्] | conquered or nourished by a staff |

This extends beyond time-words.`,

  '51098': `@deva[प्राग्घितात्ठक्] — From this sūtra forward through @ref[5.1.100] (@deva[तस्मै हितम्]), the affix @deva[ठक्] (+@deva[इक]) governs.

The affix @deva[ठक्] has the senses given in subsequent sūtras.`,

  '51099': `@deva[तस्यैतदुपचारतन्त्रम्] — The affix @deva[ठक्] comes in the sense of "this is its system of treatment" after a word in the genitive.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[ज्वरस्य एतद् उपचारतन्त्रम्] | @deva[ज्वारिकम्] | the system of treatment for fever |

The word @deva[उपचार] means "remedy" and @deva[तन्त्र] means "system."`,

  '51100': `@deva[तस्मै हितम्] — The affix @deva[ठक्] comes in the sense of "good for that" after a word in the dative.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[ज्वराय हितम्] | @deva[ज्वारिकम्] | good for (curing) fever |
| @deva[शोथाय हितम्] | @deva[शौठिकम्] | good for (curing) swelling |

This ends the @deva[ठक्] section; @deva[ठञ्] resumes from @ref[5.1.101].`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.1.51-100). Total: ${Object.keys(vasu).length}`);
