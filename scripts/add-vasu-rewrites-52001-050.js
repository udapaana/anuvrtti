import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '52001': `@deva[धान्यानां भवने क्षेत्रे खञ्] — The affix @deva[खञ्] comes in the sense of "a place of growing, when that place is a field" after the name of any grain in the genitive.

| Base (grain) | Result | Meaning |
|--------------|--------|---------|
| @deva[धान्य] types | + @deva[खञ्] | a field where that grain grows |

The genitive @deva[धान्यानां] shows the case in construction. The plural indicates the affix applies not to the word-form @deva[धान्य] itself, but to words denoting various kinds of grain (@ref[1.1.63]).

The word @deva[भवन] means "the place where a thing is produced or grows" (@deva[भवन्ति जायन्ते]).`,

  '52002': `@deva[व्रीहिशाल्योर्ढक्] — The affix @deva[ढक्] comes in the sense of "a place of growing, when a field" after @deva[व्रीहि] and @deva[शालि].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[व्रीहि] | @deva[व्रैहेयम्] | a field for growing rice |
| @deva[शालि] | @deva[शालेयम्] | a field for growing rice |`,

  '52003': `@deva[यवयवकषष्टिकाद्यत्] — The affix @deva[यत्] comes in the sense of "a place of growing, when a field" after @deva[यव], @deva[यवक], and @deva[षष्टिक]. This debars @deva[खञ्].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[यव] | @deva[यव्यम्] | a field for growing barley |
| @deva[यवक] | @deva[यवक्यम्] | — |
| @deva[षष्टिक] | @deva[षष्टिक्यम्] | — |

See @ref[6.1.213] for accent.`,

  '52004': `@deva[तिलमाषोमाभङ्गाणूभ्यो वा] — The affix @deva[यत्] comes optionally in the sense of "a place of growing, when a field" after @deva[तिल], @deva[माष], @deva[उमा], @deva[भङ्गा], and @deva[अणु].

The affix @deva[खञ्] applies in the alternative.

| Base | With @deva[यत्] | With @deva[खञ्] | Meaning |
|------|-----------------|------------------|---------|
| @deva[तिल] | @deva[तिल्यम्] | @deva[तैलीनम्] | a field for growing sesame |
| @deva[माष] | @deva[माष्यम्] | @deva[माषीणम्] | a field for growing beans |
| @deva[उमा] | @deva[उम्यम्] | @deva[औमीनम्] | a field of linseed |
| @deva[भङ्गा] | @deva[भङ्ग्यम्] | @deva[भाङ्गीनम्] | a field of hemp |
| @deva[अणु] | @deva[अणव्यम्] | @deva[आणवीनम्] | a field for small grain |`,

  '52005': `@deva[सर्वचर्मणः कृतः खखञौ] — The affixes @deva[ख] (@deva[ईन]) and @deva[खञ्] come in the sense of "wholly made thereof" after @deva[सर्वचर्मन्].

The word @deva[सर्व] here is part of the affix's sense, joining with @deva[कृतः] rather than @deva[चर्मन्]. The compounding is caused by the affix.

@deva[सर्वचर्मणा कृतः] = @deva[सर्वचर्मीणः] or @deva[सार्वचर्मीणः] — "made wholly of leather"`,

  '52006': `@deva[यथामुखसम्मुखयोर्दर्शने] — The affixes @deva[ख] (@deva[ईन]) and @deva[खञ्] come in the sense of "a mirror" after @deva[यथामुख] and @deva[सम्मुख] in the genitive.

The word @deva[दर्शन] means "that in which something is seen" (looking-glass, mirror).

| Base | Result | Meaning |
|------|--------|---------|
| @deva[यथामुख] (avyayībhāva) | @deva[यथामुखीनः] | showing the likeness of the face — a mirror |
| @deva[सम्मुख] | @deva[सम्मुखीनः] | reflecting the whole face — a looking-glass |

The word @deva[यथामुख] is an avyayībhāva compound; @deva[यथा] has the sense of likeness (@ref[2.1.6]).`,

  '52007': `@deva[सर्वस्य पथ्यङ्गकर्मपत्रपात्रात्व्याप्तौ] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "what pervades or fills the whole of that" after @deva[पथि], @deva[अङ्ग], @deva[कर्मन्], @deva[पत्र], or @deva[पात्र] preceded by @deva[सर्व] in the accusative.

| Compound | Result | Meaning |
|----------|--------|---------|
| @deva[सर्वपथम् व्याप्नोति] | @deva[सर्वपथीनो रथः] | a chariot that covers the whole road |
| @deva[सर्वाङ्गम् व्याप्नोति] | @deva[सर्वाङ्गीणः तापः] | heat that pervades all limbs |
| @deva[सर्वकर्म व्याप्नोति] | @deva[सर्वकर्मीणः पुरुषः] | a man who pervades all duties |
| @deva[सर्वपत्रम् व्याप्नोति] | @deva[सर्वपत्रीणः सारथिः] | a charioteer covering all leaves (documents) |
| @deva[सर्वपात्रम् व्याप्नोति] | @deva[सर्वपात्रीण ओदनः] | rice that fills all vessels |`,

  '52008': `@deva[आप्रपदात्प्राप्तौ] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "reaching thereto" after @deva[आप्रपद].

The word @deva[प्रपद] means "the top of the foot"; @deva[आ] means "up to." @deva[आप्रपद] is an avyayībhāva compound meaning "to the top of the foot."

@deva[आप्रपदं प्राप्नोति] = @deva[आप्रपदीनः पटः] — "cloth reaching to the end of the feet" (showing the width by comparison with the body)`,

  '52009': `@deva[अनुपदसर्वान्नायनेभ्यो बद्धभक्षितहृतेषु] — The affix @deva[ख] (@deva[ईन]) comes in the senses of "so bound," "eating that," and "to carry thereto" after @deva[अनुपद], @deva[सर्वान्न], and @deva[आयन] respectively.

| Base | Sense | Result | Meaning |
|------|-------|--------|---------|
| @deva[अनुपद] | bound | @deva[अनुपदीना] | a kind of shoe (always feminine) |
| @deva[सर्वान्न] | eating | @deva[सर्वान्नीनो भिक्षुः] | a mendicant who eats all food |
| @deva[आयन] | carrying | @deva[अयनयीनः शारः] | a chessman taken to the āyanaya position |

@note[The word @deva[अनुपद] has @deva[अनु] with the force of "length" or "likeness" — hence "a shoe of the measure of a foot." The word @deva[अयानय] combines @deva[अय] (going right to left) and @deva[अनय] (left to right).]`,

  '52010': `@deva[परोवरपरम्परपुत्रपौत्रादनुभवे] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "who witnesses or experiences that" after @deva[परोवर], @deva[परम्पर], and @deva[पुत्रपौत्र] in the accusative.

| Compound | Derivation | Result | Meaning |
|----------|------------|--------|---------|
| @deva[परोवर] | @deva[पर] + @deva[अवर] | @deva[परोवरीणः] | who lives to see high and low |
| @deva[परम्पर] | @deva[पर] + @deva[परतर] | @deva[परम्परीणः] | who experiences generations |
| @deva[पुत्रपौत्र] | — | @deva[पुत्रपौत्रीणः] | who lives to see sons and grandsons |

@note[The @deva[ओ] in @deva[परोवर] is irregular; the compounding is caused by the affix. The word @deva[परम्पर] also exists independently, as in @deva[मन्त्रिपरम्परा].]`,

  '52011': `@deva[अवारपारात्यन्तानुकामेभ्यो गामी] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "who purposes to go" after @deva[अवारपार], @deva[अत्यन्त], and @deva[अनुकाम] in the accusative.

The word @deva[गामी] means @deva[गमिष्यति] (see @ref[3.3.3]). The genitive is prohibited by @ref[2.3.70].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[अवारपार] | @deva[अवारपारीणः] | one who purposes to cross to the other shore |
| @deva[अत्यन्त] | @deva[अत्यन्तीनः] | one who goes extremely (@deva[भृशं गन्ता]) |
| @deva[अनुकाम] | @deva[अनुकामीनः] | one who goes as desired (@deva[यथेष्टं गन्ता]) |

**Vārttika:** Also when reversed: @deva[पारावारीणः]. Also separately: @deva[अवारीणः], @deva[पारीणः].`,

  '52012': `@deva[समांसमां विजायते] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "who bears in the womb" after @deva[समांसमाम्].

The word @deva[विजायते] means @deva[गर्भे धारयति] "who bears in the womb." This verb governs the accusative of time @deva[समांसमाम्] by @ref[2.1.29].

@deva[समांसमां विजायते] = @deva[समांसमीना गौः], @deva[समांसमीना वडवा] — "a cow/mare that bears young year after year"

**Vārttika:** According to others, the meaning is "to give birth" (@deva[गर्भमोचन]). The verb then governs locative: @deva[समायां समायां विजायते] = @deva[समांसमीना] — "an animal that gives birth year after year."`,

  '52013': `@deva[अद्यश्वीनाद्ववष्टब्धविजाययोः] — The word @deva[अद्यश्वीन] is anomalous, meaning "a female near delivery."

The word @deva[विजायते] is understood here. The word @deva[अवष्टब्ध] means "imminent, near" (formed by @deva[अव] + @deva[स्तम्भ्] + @deva[क्त]; @deva[स्] becomes @deva[ष्] by @ref[8.3.68]).

@deva[अद्य वा श्वो वा विजायते] = @deva[अद्यश्वीना गौः] — "a cow likely to give birth today or tomorrow"

Also: @deva[अद्यश्वीना वडवा]

@note[Some do not read @deva[विजायते] into the sūtra, giving the meaning "imminent": @deva[अद्यश्वीनं मरणम्] "imminent death," @deva[अद्यश्वीनो वियोगः] "separation likely today or tomorrow."]`,

  '52014': `@deva[आगवीनो निपात्यते] — The word @deva[आगवीन] is irregularly formed.

This word is formed by adding @deva[ख] to @deva[गो] preceded by @deva[आ]: @deva[आगो] + @deva[ख] = @deva[आगवीनः].

The affix's force is that of "a servant" — a person engaged in work until the return of the cows, i.e., a day-laborer.`,

  '52015': `@deva[अनुगोः पर्याप्तौ] — The affix @deva[ख] (@deva[ईन]) comes in the sense of "who is fit to follow" after @deva[अनुगु].

The word @deva[अनुगु] means @deva[गो पश्चात्] "after the cows."

@deva[अनुगु पर्याप्तं गच्छति] = @deva[अनुगवीनः] — "who is able to follow after the cows" (i.e., a cowherd)`,

  '52016': `@deva[अध्वनो यत्खौ] — The affixes @deva[यत्] (@deva[य]) and @deva[ख] (@deva[ईन]) come in the sense of "who is fit or able to follow" after @deva[अध्वन्].

| With @deva[ख] | With @deva[यत्] |
|--------------|-----------------|
| @deva[अध्वनीनः] | @deva[अध्वन्यः] |

Both mean "able to undertake a journey."

@note[By @ref[6.4.168] and @ref[6.4.169], the word @deva[अध्वन्] retains its original form before @deva[य] and @deva[ख], not losing its final @deva[अन्] (which it does before other affixes by @ref[6.4.144]).]`,

  '52017': `@deva[अभ्यमित्राच्छयतखश्च] — The affixes @deva[छ] (@deva[ईय]), @deva[यत्] (@deva[य]), and @deva[ख] (@deva[ईन]) come in the sense of "who is able to go" after @deva[अभ्यमित्र].

The @deva[च] draws in @deva[यत्] and @deva[ख].

| Affix | Result | Meaning |
|-------|--------|---------|
| @deva[छ] | @deva[अभ्यमित्रीयः] | a warrior who valiantly encounters his enemy |
| @deva[यत्] | @deva[अभ्यमित्र्यः] | — |
| @deva[ख] | @deva[अभ्यमित्रीणः] | — |

= @deva[अमित्राभिमुखं सुष्ठु गच्छति]`,

  '52018': `@deva[गोष्ठात्खञ्भूतपूर्वे] — The affix @deva[खञ्] comes in the sense of "it formerly had been" after @deva[गोष्ठ].

The word @deva[गोष्ठ] is a compound of @deva[गो] + @deva[स्था] (a cow-pen), meaning the area around a cow-pen. The word @deva[भूतपूर्व] qualifies it.

@deva[गोष्ठो भूतपूर्वः] = @deva[गौष्ठीनो देशः] — "a place which was formerly a cow-pen"

When not meaning "formerly," we use @deva[गोष्ठो वर्तते].`,

  '52019': `@deva[अश्वस्यैकाहगमः] — The affix @deva[खञ्] comes in the sense of "what is traveled over in one day" after @deva[अश्व] in the genitive.

The word @deva[एकाहगम] means @deva[एकाहेन गम्यते] "what can be traversed in one day."

@deva[अश्वस्य एकाहगमो ऽध्वा] = @deva[आश्वीनः]

Example: @deva[आश्वीनानि शतं पतित्वा] — "having flown a hundred leagues that a horse covers in a day"

Also: @deva[सहस्राश्वीने वा इतः स्वर्गो लोकः] — "Heaven is a thousand horse-day-journeys from here."`,

  '52020': `@deva[शालीनकौपीनाधृष्टाकार्ययोर्निपात्येते] — The words @deva[शालीन] and @deva[कौपीन] are anomalous, meaning "modest" and "a shameful action" respectively.

| Word | From | Meaning |
|------|------|---------|
| @deva[शालीन] | @deva[शाला] (hall) | modest, not proud (@deva[अधृष्ट]) |
| @deva[कौपीन] | @deva[कूप] (well) | shameful, unfit to be done (@deva[अकार्य]) |

The connection between "modesty" and "hall," or "shameful" and "well" is obscure. Some explain:
- @deva[शालाप्रवेशनम् अर्हति] "who deserves to enter a hall" = @deva[शालीनः]
- @deva[कूपावतारम् अर्हति] "who deserves to be thrown into a well" = @deva[कौपीनः]

Examples: @deva[शालीनो जडः] "a modest simpleton," @deva[कौपीनं पापम्] "a shameful sin"`,

  '52021': `@deva[व्रातात्खञ्जीवति] — The affix @deva[खञ्] comes in the sense of "who leads this life" or "who lives by this" after @deva[व्रात] in the instrumental.

The word @deva[व्रात] means "a multitude composed of various castes, who have no fixed employment and live by violence or bodily labor."

@deva[व्रातेन जीवति] = @deva[व्रातीनः] — "a person who lives by the labor of his body, not his brain"`,

  '52022': `@deva[साप्तपदीनं सख्यम्] — The word @deva[साप्तपदीन] is anomalous, meaning "friendship."

The word comes from @deva[सप्तपद], but the connection is unclear. It is said:
@deva[सप्तभिः पदैः अवाप्यते] = @deva[साप्तपदीनम्] — "formed by walking together seven steps or talking seven words"

@note[The circumambulation of the sacred fire by bride and bridegroom in seven steps makes marriage irrevocable. The word @deva[साप्तपदीनः/म्] also means "a friend" — the abstract sense applied by analogy to the person.]`,

  '52023': `@deva[हैयङ्गवीनं संज्ञायाम्] — The word @deva[हैयङ्गवीन] is anomalous when it is a Name.

The word means "fresh butter" and comes from @deva[ह्यः] "yesterday" and @deva[गो] "cow."

@deva[ह्यो गोदोहस्य विकारः] = @deva[हैयङ्गवीनम्] — "prepared from yesterday's milk" (i.e., fresh butter)

@note[The affix does not apply in the sense of any @deva[विकार] in general. There is no affixing in @deva[ह्यो गोदोहस्य विकार] when it means @deva[उदश्चित्] "whey."]`,

  '52024': `@deva[पीलुकर्णजाहाभ्यां पाकमूलयोः कुणप्जाहचौ] — The affixes @deva[कुणप्] (@deva[कुण]) and @deva[जाहच्] (@deva[जाह]) come in the senses of "the fruiting-season of this" and "the root of this" respectively.

The genitive @deva[तस्य] shows the construction. @deva[कुणप्] comes after @deva[पीलादि] words signifying "ripening"; @deva[जाहच्] comes after @deva[कर्णादि] words signifying "root."

| Affix | Base class | Example | Meaning |
|-------|------------|---------|---------|
| @deva[कुणप्] | @deva[पीलादि] | @deva[पीलुकुणः], @deva[कर्कन्धुकुणः] | fruiting season of pīlu, etc. |
| @deva[जाहच्] | @deva[कर्णादि] | @deva[कर्णजाहम्], @deva[अक्षिजाहम्] | root of the ear, eye |

@deva[कर्णादि] class: @deva[कर्ण], @deva[अक्षि], @deva[नख], @deva[मुख], @deva[केश], @deva[पाद], @deva[गुल्फ], @deva[भ्रू], @deva[शृङ्ग], @deva[दन्त], @deva[ओष्ठ], @deva[पृष्ठ], @deva[नख], @deva[अङ्गुष्ठ]`,

  '52025': `@deva[पक्षस्य तिः] — The affix @deva[ति] comes in the sense of "the root of it" after @deva[पक्ष] in the genitive.

The word @deva[मूल] from the last sūtra is drawn in, but not @deva[पाक]. This is an exceptional case of @deva[अनुवृत्ति] — generally the whole is drawn in, not a portion. Hence the maxim:

@deva[क्वचिद् एकदेशो ऽप्य् अनुवर्तते] — "Sometimes only a part of a rule's words remains valid in a subsequent rule."

@deva[पक्षस्य मूलम्] = @deva[पक्षतिः] — i.e., @deva[प्रतिपत्] "the root or first day of a fortnight"`,

  '52026': `@deva[वित्ते चुञ्चुप्चणपौ] — The affixes @deva[चुञ्चुप्] (@deva[चुञ्चु]) and @deva[चणप्] (@deva[चण]) come in the sense of "celebrated through this" after a word in the instrumental.

The word @deva[वित्त] means "known, illustrious."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[विद्यया वित्तः] | @deva[विद्याचुञ्चुः], @deva[विद्याचणः] | celebrated through learning |
| @deva[केशैः वित्तः] | @deva[केशचणः] | celebrated for hair |

@note[The initial @deva[च्] in these affixes is not @deva[इत्] (@ref[1.3.7]).]`,

  '52027': `@deva[विनञोर्नानाञौ] — The affixes @deva[ना] and @deva[नाञ्] come in the sense of "not being together" after @deva[वि] and @deva[नञ्] respectively.

| Base | + Affix | Result | Meaning |
|------|---------|--------|---------|
| @deva[वि] | @deva[ना] | @deva[विना] | without |
| @deva[नञ्] | @deva[नाञ्] | @deva[नाना] | several, various |`,

  '52028': `@deva[विभाषाशालच्शङ्कटचौ] — The affixes @deva[शालच्] (@deva[शाल]) and @deva[शङ्कटच्] (@deva[शङ्कट]) come after the preposition @deva[वि] without changing the sense.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[विगते शृङ्गे] | @deva[विशाले] | lacking horns |
| — | @deva[विशङ्कटे] | — |

These words may apply to a cow: @deva[विशालः], @deva[विशङ्कटः].

@note[According to some, these words are adjectives meaning "great, large." There is no clear connection of sense between base and affix.]`,

  '52029': `@deva[कटच्सम्प्रदुद्विभ्यः] — The affix @deva[कटच्] (@deva[कट]) comes after @deva[सम्], @deva[प्रद्], @deva[उद्], and @deva[वि].

The @deva[वि] is read into the sūtra by @deva[च].

| Base | Result |
|------|--------|
| @deva[सम्] | @deva[संकटम्] |
| @deva[प्रद्] | @deva[प्रकटम्] |
| @deva[उद्] | @deva[उत्कटम्] |
| @deva[वि] | @deva[विकटम्] |

**Vārttikas:**
1. @deva[कटच्] comes after @deva[अलाबु], @deva[तिल], @deva[उमा], @deva[भङ्गा] denoting dust: @deva[अलाबूकटम्], @deva[तिलकटम्], @deva[उमाकटम्], @deva[भङ्गाकटम्]
2. @deva[गोष्ठच्] comes after animal names for places: @deva[गोगोष्ठम्], @deva[महिषीगोष्ठम्]
3. When a flock is denoted, @deva[कटच्] applies: @deva[अविकटम्]
4. When spreading is denoted, @deva[पटच्] applies`,

  '52030': `@deva[अवाट्कुटारच्कटचौ] — The affixes @deva[कुटारच्] and @deva[कटच्] come after @deva[अव].

@deva[अवकुटारम्], @deva[अवकटम्] — "downwards," "very deep"`,

  '52031': `@deva[टीटनाटभ्रटश्चावतो नासिकायाः संज्ञायाम्] — The affixes @deva[टीटच्], @deva[नाटच्], and @deva[भ्रटच्] come in the sense of "a hooked nose" after @deva[अव] when the word is a Name.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[नासिकाया नतम्] | @deva[अवटीटम्] | hooked nose |
| — | @deva[अवनाटम्] | — |
| — | @deva[अवभ्रटम्] | — |

The word signifies the nose or the person: @deva[अवटीटा नासिका], @deva[अवटीटः पुरुषः]`,

  '52032': `@deva[निबिडबिरीसौ] — The affixes @deva[बिडच्] and @deva[बिरीसच्] come in the sense of "a hooked nose" after @deva[नि] when the word is a Name.

@deva[निबिडम्], @deva[निबिरीसम्]

@note[By analogy: @deva[निबिडाः केशाः] "dense hair," @deva[निबिडं वस्त्रम्] "thick cloth"]`,

  '52033': `@deva[इनच्पिटचौ चिक्चियोश्च] — The affixes @deva[इनच्] and @deva[पिटच्] come in the sense of "a hooked nose" after @deva[नि]; and @deva[चिक्] and @deva[चि] are substitutes of @deva[नि] before those affixes respectively.

| Base | Affix | Substitute | Result |
|------|-------|------------|--------|
| @deva[नि] | @deva[इनच्] | @deva[चिक्] | @deva[चिकिनः] |
| @deva[नि] | @deva[पिटच्] | @deva[चि] | @deva[चिपिटः] |

**Vārttikas:**
1. Also @deva[क], with @deva[चिक्] replacing @deva[नि]: @deva[चिल्लः]
2. @deva[ल] comes after @deva[क्लिन्न] for "its eyes"; @deva[चिल्], @deva[पिल्] replace @deva[क्लिन्न]: @deva[चिल्लः], @deva[पिल्लः] "blear-eyed"
3. @deva[चुल] is also a substitute: @deva[चुल्लः]`,

  '52034': `@deva[उपाध्योस्त्यकन्संज्ञायाम्] — The affix @deva[त्यकन्] comes in the sense of "nearness" after @deva[उप] and @deva[अधि] respectively, when the word is a Name.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[उप] | @deva[उपत्यका] | lowland, land at the foot of a mountain |
| @deva[अधि] | @deva[अधित्यका] | tableland, highland |

@note[Rule @ref[7.3.44] does not apply here, so we do not get @deva[उपत्यिका] or @deva[अधित्यिका].]`,

  '52035': `@deva[कर्मण्यठच्] — The affix @deva[अठच्] comes in the sense of "employing oneself zealously in it" after @deva[कर्मन्] in the locative.

The word @deva[घट] means "zealous work."

@deva[कर्मणि घटते] = @deva[कर्मठः पुरुषः] — "a clever, proficient person"`,

  '52036': `@deva[तारकादिभ्य इतच्] — The affix @deva[इतच्] comes in the sense of "that whereof this is observed" after @deva[तारकादि] words in the nominative.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[ताराकाः संजाता अस्य नभसः] | @deva[तारकितं नभः] | a starry sky |
| @deva[पुष्पाणि संजातानि अस्य वृक्षस्य] | @deva[पुष्पितो वृक्षः] | a tree in which flowers have grown |

The @deva[तारकादि] class is an @deva[आकृतिगण].

Class members: @deva[तारका], @deva[पुष्प], @deva[कर्णक], @deva[मञ्जरी], @deva[ऋजीष], @deva[क्षण], @deva[सूच], @deva[मूत्र], @deva[निष्क्रमण], @deva[पुरीष], @deva[उच्चार], @deva[प्रचार], @deva[विचार], @deva[कुड्मल], @deva[कण्टक], @deva[मुसल], @deva[मुकुल], @deva[कुसुम], @deva[कुतूहल], @deva[स्तबक], @deva[किसलय], @deva[पल्लव]...`,

  '52037': `@deva[द्वयसज्दघ्नश्मात्रचः प्रमाणे] — The affixes @deva[द्वयसच्], @deva[दघ्नच्], and @deva[मात्रच्] come in the sense of "that whereof this is the lineal measure" after a word in the nominative.

The phrase @deva[तदस्य] is understood.

| Base | With each affix | Meaning |
|------|-----------------|---------|
| @deva[ऊरु] (thigh) | @deva[ऊरुद्वयसम्], @deva[ऊरुदघ्नम्], @deva[ऊरुमात्रम्] | as high as the thigh |
| @deva[जानु] (knee) | @deva[जानुद्वयसम्], @deva[जानुदघ्नम्], @deva[जानुमात्रम्] | as high as the knee |

Example: @deva[ऊरुद्वयसम् उदकम्] — "water reaching up to the thigh"

@note[According to some, @deva[द्वयस] and @deva[दघ्न] denote altitudes and depths only, not horizontal measures. The affix @deva[मात्रच्] comes in a general sense also: @deva[प्रस्थमात्रम्] "a cubit long."]`,

  '52038': `@deva[पुरुषहस्त्योरण्च] — The affixes @deva[अण्], @deva[द्वयसच्], @deva[दघ्नच्], and @deva[मात्रच्] come in the sense of "that whereof this is the lineal measure" after @deva[पुरुष] and @deva[हस्ति] in the nominative.

The phrase @deva[तदस्य प्रमाणम्] is understood. The @deva[च] draws in the other affixes.

| Base | Results |
|------|---------|
| @deva[पुरुष] | @deva[पौरुषम्], @deva[पुरुषद्वयसम्], @deva[पुरुषदघ्नम्], @deva[पुरुषमात्रम्] |
| @deva[हस्ति] | @deva[हास्तिनम्], @deva[हस्तिद्वयसम्], @deva[हस्तिदघ्नम्], @deva[हस्तिमात्रम्] |

**Vārttika:** The affix is always elided after a @deva[द्विगु]: @deva[द्विपुरुषम् उदकम्], @deva[त्रिपुरुषम्], @deva[द्विहस्ति], @deva[त्रिहस्ति]; fem. @deva[द्विपुरुषी], @deva[त्रिपुरुषी], @deva[द्विहस्तिनी], @deva[त्रिहस्तिनी]`,

  '52039': `@deva[यत्तदेतेभ्यः परिमाणे वतुप्] — The affix @deva[वतुप्] comes in the sense of "that whereof this is the measure of volume" after @deva[यद्], @deva[तद्], and @deva[एतद्] in the nominative.

**Kārikā:**
@deva[डावतौ ऽर्थवैशेष्यान् निर्देशः पृथग् उच्यते ।]
@deva[मात्राद्यप्रतिघाताय भावः सिद्धश्च डावतोः ॥]

The phrase @deva[तदस्य] is understood.

| Base | Derivation | Result |
|------|------------|--------|
| @deva[यद्] | @deva[यत् परिमाणमस्य] | @deva[यावान्] |
| @deva[तद्] | @deva[तत् परिमाणमस्य] | @deva[तावान्] |
| @deva[एतद्] | @deva[एतत् परिमाणमस्य] | @deva[एतावान्] |

Evolution: @deva[यद्] + @deva[वतुप्] = @deva[यावत्] (by @ref[6.3.91]) → @deva[यावन्त] (by @ref[7.1.70]) → @deva[यावान्त] (by @ref[6.4.41]); with @deva[सु] elided by @ref[6.1.68] and @deva[त्] by @ref[8.2.23]`,

  '52040': `@deva[किमिदंभ्यां वो घः] — After @deva[किम्] and @deva[इदम्], @deva[घ] (@deva[इय्]) is substituted for the @deva[व्] of @deva[वतुप्].

| Base | Derivation | Result |
|------|------------|--------|
| @deva[किम्] | @deva[किम्] + @deva[वतुप्] → @deva[की] + @deva[वतुप्] (by @ref[6.3.90]) → @deva[क्] + @deva[घतुप्] (by @ref[6.4.148]) | @deva[कियत्], nom. @deva[कियान्] |
| @deva[इदम्] | Similarly | @deva[इयत्], nom. @deva[इयान्] |`,

  '52041': `@deva[संख्यापरिमाणे डतिच] — The affixes @deva[डति] (@deva[अति] with @deva[इम्] elided) and @deva[वतुप्] come in the sense of "numerical quantity" after @deva[किम्] in the nominative.

The @deva[च] introduces @deva[वतुप्], which becomes @deva[घतुप्] (@deva[इयत्]).

The word @deva[संख्यापरिमाण] means @deva[संख्यायाः परिमाणम्] — "making an estimate by numbers."

| Derivation | Result |
|------------|--------|
| @deva[का संख्या परिमाणमेषां ब्राह्मणानाम्] | @deva[कति ब्राह्मणाः] or @deva[कियन्तो ब्राह्मणाः] |

"How many Brahmins in number do you estimate these?"

@note[This always comes in the plural. The word is formed when a question is put relating to numerical quantity.]`,

  '52042': `@deva[संख्याया अवयवे तयप्] — The affix @deva[तयप्] comes in the sense of "that whereof the parts are so many" after a numeral.

The phrase @deva[तदस्य] is understood.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[पञ्च अवयवा अस्य] | @deva[पञ्चतयम्] | having five parts |
| @deva[दश अवयवाः अस्य] | @deva[दशतयम्] | having ten parts |
| @deva[चत्वारः अवयवाः अस्य] | @deva[चतुष्टयम्], @deva[चतुष्टयी] | having four parts |

The part being connected with the whole, the affix denotes the whole. See @ref[8.3.101] and @ref[4.5.15].`,

  '52043': `@deva[द्वित्र्योरयच्] — The affix @deva[अयच्] is optionally the substitute of @deva[तयप्] after @deva[द्वि] and @deva[त्रि].

| Base | With @deva[अयच्] | With @deva[तयप्] | Meaning |
|------|-----------------|------------------|---------|
| @deva[द्वि] | @deva[द्वयम्] | @deva[द्वितयम्] | a pair |
| @deva[त्रि] | @deva[त्रयम्] | @deva[त्रितयम्] | a triad |

See @ref[6.4.148].`,

  '52044': `@deva[संख्यायाः संख्याव्ययादेर्लोपः] — There is elision of the affix after a numeral when another numeral or indeclinable precedes.

| Compound | Result |
|----------|--------|
| @deva[षट्] + @deva[द्वय] | @deva[षड्द्वयम्] (affix elided) |
| @deva[अपि] + @deva[द्वय] | @deva[अपिद्वयम्] |

@note[This elision applies to numerals and indeclinables preceding the numeral stem.]`,

  '52045': `@deva[द्वित्र्योर्धा च] — After @deva[द्वि] and @deva[त्रि], the affix @deva[धा] comes in the sense of "so many parts," with optional elision of @deva[तयप्].

| With @deva[धा] | With @deva[तयप्] |
|----------------|------------------|
| @deva[द्विधा] | @deva[द्वितयम्] |
| @deva[त्रिधा] | @deva[त्रितयम्] |

The @deva[धा] affix denotes division into parts.`,

  '52046': `@deva[पूरणी निष्ठा च] — The ordinal affix and the @deva[निष्ठा] (past participle) affix come after numerals in compound.

| Compound | Result |
|----------|--------|
| @deva[द्वि] + ordinal | @deva[द्वितीय] |
| @deva[त्रि] + ordinal | @deva[तृतीय] |

These form ordinal numbers and past participles in compound.`,

  '52047': `@deva[संख्याया विधार्थे धा] — The affix @deva[धा] comes after a numeral in the sense of "so many ways."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[द्वौ विधौ] | @deva[द्विधा] | in two ways |
| @deva[त्रयो विधाः] | @deva[त्रिधा] | in three ways |
| @deva[बहवो विधाः] | @deva[बहुधा] | in many ways |`,

  '52048': `@deva[संख्यायाः पूरणे डट्] — The affix @deva[डट्] comes after a numeral in the sense of "ordinal" (completing the number).

The word @deva[पूरण] means "completing, filling up."

| Base | Result | Meaning |
|------|--------|---------|
| @deva[पञ्च] | @deva[पञ्चमः] | fifth |
| @deva[सप्त] | @deva[सप्तमः] | seventh |
| @deva[दश] | @deva[दशमः] | tenth |

These ordinals complete or fill up the numerical sequence.`,

  '52049': `@deva[न त्वष्ट्रोः] — The affix @deva[डट्] does not come after @deva[एक] (one) and @deva[द्वि] (two) in the sense of ordinal.

@note[Special ordinals exist for these: @deva[प्रथम] (first) and @deva[द्वितीय] (second).]`,

  '52050': `@deva[तसिल्तसौ] — The affixes @deva[तसिल्] and @deva[तस्] come after numerals in the sense of ordinal, optionally.

| Base | With @deva[तसिल्] | Standard ordinal |
|------|-------------------|------------------|
| @deva[पञ्च] | @deva[पञ्चतः] | @deva[पञ्चमः] |

The affix @deva[तसिल्] creates an alternative ordinal form.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.2.1-50). Total: ${Object.keys(vasu).length}`);
