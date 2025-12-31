import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '51001': `@deva[प्राक्क्रीतात्छः] — From this sūtra forward through @ref[5.1.37] (@deva[तेन क्रीतम्]), the affix @deva[छ] governs.

The affix @deva[छ] carries the various senses taught in sūtras @ref[5.1.1]–@ref[5.1.37]:

| Sense | Sūtra | Example |
|-------|-------|---------|
| "suitable for that" | @ref[5.1.5] | @deva[वत्सेभ्यो हितः] → @deva[वत्सीयो गोधुक्] |

@note[The jurisdiction of @deva[छ] is limited to the *meaning*, not the affix itself. As an affix, @deva[छ] has no force beyond sūtra 17; from sūtra 18 onward, @deva[ठञ्] becomes the ruling affix.]`,

  '51002': `@deva[अुप्रत्ययो गोः] — The affix @deva[यत्] comes after:
- stems ending in @deva[उ] (short or long)
- words in the @deva[गवादि] class

The senses are those taught up to @ref[5.1.37]. This @deva[यत्] debars @deva[छ].

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[शङ्कु] | @deva[शङ्कवे हितम्] → @deva[शङ्कु] + @deva[यत्] | @deva[शङ्कव्यं दारु] | wood fit for a stake |
| @deva[पिचु] | — | @deva[पिचव्यः कार्पासः] | cotton fit for... |
| @deva[गो] | @deva[गवादि] class | @deva[गव्यम्] | suitable for cows |
| @deva[हविस्] | @deva[गवादि] class | @deva[हविष्यम्] | suitable for offering |

@note[Words like @deva[सनङ्गु] ("a kind of leek") also belong to the @deva[गवादि] class.]`,

  '51003': `@deva[कम्बलाद्यत्संज्ञायाम्] — The affix @deva[यत्] comes after @deva[कम्बल] in the @deva[प्रक्क्रितीय] senses when a Name is meant. This debars @deva[छ].

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[कम्बल] | + @deva[यत्] | @deva[कम्बल्यम्] | a @deva[कम्बल्य]-measure of wool (= 100 palas) |

Example: @deva[कम्बल्यम् ऊर्णा पलशतम्] — "a @deva[कम्बल्य] of wool is 100 palas."

Why @deva[संज्ञायाम्]? When not a Name, @deva[छ] applies instead: @deva[कम्बलीया ऊर्णा] "wool fit for making a blanket."`,

  '51004': `@deva[हविरादिभ्यो विकल्पेन] — The affix @deva[यत्] comes optionally after words denoting offerings (@deva[हविरादि]) and the @deva[अपूपादि] class in the @deva[प्रक्क्रितीय] sense.

| Base | With @deva[यत्] | With @deva[छ] | Meaning |
|------|----------------|---------------|---------|
| @deva[आमिक्षा] | @deva[आमिक्ष्यं दधि] | @deva[आमिक्षीयं दधि] | curd fit for making āmikṣā |
| @deva[पुरोडाश] | @deva[पुरोडाश्याः स्तण्डुलाः] | @deva[पुरोडाशीयाः स्तण्डुलाः] | rice suitable for making puroḍāśa |
| @deva[अपूप] | @deva[अपूप्यम्] | @deva[अपूपीयम्] | — |
| @deva[तण्डुल] | @deva[तण्डुल्यम्] | @deva[तण्डुलीयम्] | — |

@note[The word @deva[हवि] in the @deva[गवादि] class @ref[5.1.2] necessarily takes @deva[यत्] with no option. The @deva[हवि] here means *things denoting sacrificial offerings*, not the word-form "havi."]

@deva[अपूपादि] class: @deva[अपूप], @deva[तण्डुल], @deva[अभ्यूष], @deva[अभ्योष], @deva[अवोष]...`,

  '51005': `@deva[तस्मै हितम्] — An affix comes after a word in the dative (fourth case) in the sense of "good for that."

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[वत्स] | @deva[वत्सेभ्यो हितो गोधुक्] | @deva[वत्सीयः] | fit for calves (a cow-milker) |
| @deva[पट] | @deva[पटाय हितम्] | @deva[पटव्यम्] | suitable for cloth |
| @deva[गो] | @deva[गोभ्यो हितम्] | @deva[गव्यम्] | suitable for cows |
| @deva[हविस्] | — | @deva[हविष्यम्] | suitable for offering |
| @deva[अपूप] | — | @deva[अपूप्यम्] / @deva[अपूपीयम्] | — |`,

  '51006': `@deva[शरीरावयवाद्यत्] — The affix @deva[यत्] comes in the sense of "good for that" after words denoting body parts. This debars @deva[छ].

| Body part | Result | Meaning |
|-----------|--------|---------|
| @deva[दन्त] | @deva[दन्त्यम्] | good for the teeth (e.g., dentifrice) |
| @deva[कण्ठ] | @deva[कण्ठ्यम्] | good for the throat |
| @deva[ओष्ठ] | @deva[ओष्ठ्यम्] | good for the lips |
| @deva[नाभि] | @deva[नाभ्यम्] | good for the navel |
| @deva[नस्] | @deva[नस्यम्] | good for the nose (e.g., snuff, oil) |

See @ref[6.1.213] for accent.`,

  '51007': `@deva[खलयवमाषतिलवृषब्रह्मणश्च] — The affix @deva[यत्] comes in the sense of "good for that" after @deva[खल], @deva[यव], @deva[माष], @deva[तिल], @deva[वृष], and @deva[ब्रह्मण]. This debars @deva[छ].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[खल] | @deva[खल्यम्] | suitable for a threshing floor |
| @deva[यव] | @deva[यव्यम्] | suitable for barley |
| @deva[माष] | @deva[माष्यम्] | suitable for beans |
| @deva[तिल] | @deva[तिल्यम्] | suitable for sesame |
| @deva[वृष] | @deva[वृष्यम्] | suitable for a bull |
| @deva[ब्रह्मन्] | @deva[ब्रह्मण्यम्] | suitable for a brahmin |

@note[No secondary derivative can be formed from @deva[वृष्णे हितम्] or @deva[ब्राह्मणेभ्यो हितम्]—the full phrases must be used, as these words take neither @deva[छ] nor @deva[यत्].]

The word @deva[च] indicates the rule extends to words beyond those listed: e.g., @deva[रथाय हिता]...`,

  '51008': `@deva[अजाविभ्यां थ्यन्] — The affix @deva[थ्यन्] comes in the sense of "good for that" after @deva[अज] (goat) and @deva[अवि] (sheep). This debars @deva[छ].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[अज] | @deva[अजथ्या यूथिः] | yellow jasmine called yūthi (good for goats) |
| @deva[अवि] | @deva[अविथ्या यूथिः] | yellow jasmine (good for sheep) |`,

  '51009': `@deva[आत्मन्विश्वजनभोगोत्तरपदाट्ख] — The affix @deva[ख] comes in the sense of "good for that" after:
- @deva[आत्मन्]
- @deva[विश्वजन]
- compounds ending in @deva[भोग]

This debars @deva[छ].

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[आत्मन्] | + @deva[ख] | @deva[आत्मनीनम्] | suitable for oneself |
| @deva[विश्वजन] | + @deva[ख] | @deva[विश्वजनीनम्] | suitable for all people |

@note[The @deva[न्] of @deva[आत्मन्] in the sūtra remains unelided, indicating it should *not* compound with @deva[भोग]. Thus @deva[भोगोत्तरपद] applies only to compounds—not to @deva[आत्मन्] and @deva[विश्वजन] themselves.]

The @deva[न्] of @deva[आत्मन्] is preserved before @deva[ख] by @ref[6.4.169] (which blocks @ref[6.4.144]).`,

  '51010': `@deva[सर्वपुरुषाभ्यां णढञौ] — The affixes @deva[ण] and @deva[ढञ्] come in the sense of "good for that" after @deva[सर्व] and @deva[पुरुष] respectively. This debars @deva[छ].

| Base | Affix | Result | Meaning |
|------|-------|--------|---------|
| @deva[सर्व] | @deva[ण] | @deva[सार्वम्] | good for all |
| @deva[पुरुष] | @deva[ढञ्] | @deva[पौरुषेयम्] | good for a person |

**Vārttikas:**
1. The affix @deva[ण] comes optionally after @deva[सर्व]: @deva[सर्वीयम्] or @deva[सार्वम्]
2. The affix @deva[ढञ्] comes after @deva[पुरुष] when the derivative means slaughter, modification, a crowd, or "made by him":
   - @deva[पौरुषेयो वधः] "man-slaughter"
   - @deva[पौरुषेयो ग्रन्थः] "a book written by man"
   - @deva[अपौरुषेया वेदाः] "The Vedas are non-human"`,

  '51011': `@deva[माणवचरकाभ्यां खञ्] — The affix @deva[खञ्] comes in the sense of "good for that" after @deva[माणव] and @deva[चरक]. This debars @deva[छ].

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[माणव] | @deva[माणवाय हितम्] | @deva[माणवीनम्] | suitable for a youth |
| @deva[चरक] | @deva[चरकाय हितम्] | @deva[चारकीणम्] | suitable for a wandering student |`,

  '51012': `@deva[विकृतेः प्रकृत्यर्थे तदर्थे] — After a word naming a product, the affix comes to denote the primitive (material cause) that is serviceable for that product.

Key terms:
- @deva[प्रकृति] = primitive, material cause
- @deva[विकृति] = product, modification

@note[The word @deva[तदर्थे] "serviceable for that" shows that the primitive must be serviceable for *that particular product* and nothing else. It also indicates the word must be in the fourth case when the affix is added.]`,

  '51013': `@deva[छदिरुपधिबालिभ्यो ढञ्] — The affix @deva[ढञ्] (+@deva[एय]) comes in the sense of "a primitive serviceable for a product" after @deva[छदिस्], @deva[उपधि], and @deva[बालि]. This debars @deva[छ].

| Base (product) | Result | Meaning |
|----------------|--------|---------|
| @deva[छदिस्] | @deva[छादिषेयाणि तृणानि] | grass for making a cover |
| @deva[उपधि] | @deva[औपधेयं दारु] | wood for making a wheel-part |
| @deva[बालि] | @deva[बालेयाः तण्डुलाः] | rice for making rice-offerings |

@note[The word @deva[उपधि] means "part of a wheel between the nave and circumference" (@deva[रथाङ्गम्]). The word @deva[औपधेय] also carries this meaning.]`,

  '51014': `@deva[ऋषभोपानहोर्ञ्य] — The affix @deva[ञ्य] (+@deva[य]) comes in the sense of "a primitive serviceable for a product" after @deva[ऋषभ] and @deva[उपानह्]. This @deva[ञ्य] debars @deva[छ].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[ऋषभ] | @deva[आर्षभ्यो वत्सः] | a calf (to produce) a bull |
| @deva[उपानह्] | @deva[औपानह्योः मुञ्जः] | muñja grass for making sandals |

@note[Even when the primitive is leather (@deva[चर्म]), the affix @deva[ञ्य] applies after @deva[उपानह्], irregularly debarring @deva[अञ्] of @ref[5.1.15]: @deva[औपानह्यं चर्म] "leather for sandals."]`,

  '51015': `@deva[चर्मणो विकारे ऽञ्] — The affix @deva[अञ्] (+@deva[अ]) comes in the sense of "a primitive serviceable for a product" after a word expressing a leather product. The word @deva[चर्मणः] is in the genitive. This @deva[अञ्] debars @deva[छ].

| Product | Result | Meaning |
|---------|--------|---------|
| @deva[वर्ध्र] (thong) | @deva[वार्ध्रं चर्म] | leather for making a thong |
| @deva[वरत्र] (thong) | @deva[वारत्रं चर्म] | leather for making a thong |`,

  '51016': `@deva[तदस्यास्मिन्स्यादिति] — The above affixes come after a word in the nominative (first case) with the force of genitive or locative, when that word is the subject of @deva[स्यात्] (can be). The senses are "very well sufficient thereof" and "very well sufficient therein."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[प्राकारः आसाम् इष्टकानां स्यात्] | @deva[प्राकारीया इष्टकाः] | bricks sufficient to raise a wall |
| @deva[प्रासादस्य दारु स्यात्] | @deva[प्रासादीयं दारु] | wood sufficient for a palace |`,

  '51017': `@deva[परिखायाढञ्] — The affix @deva[ढञ्] (+@deva[एय]) comes after @deva[परिखा] (moat) in the senses of "sufficient for that" and "sufficient therein." This debars @deva[छ].

@deva[पारिखेयी भूमिः] — "land sufficient to make a moat thereon"

@note[Up to this sūtra was the governing force of @deva[छ] and @deva[यत्]. From the next sūtra onward, another affix will be taught.]`,

  '51018': `@deva[प्राग्वतेष्ठञ्] — Up to sūtra @ref[5.1.115] (excluding it), the affix @deva[ठञ्] (+@deva[इक] or @deva[क]) governs.

The affix @deva[ठञ्] governs subsequent sūtras through @deva[तेन क्रीतं क्रियाचेद्वात] and carries the senses given in @ref[5.1.37] etc.

@note[Strictly speaking, @deva[ठञ्] governs only up to @ref[5.1.110], not @ref[5.1.115].]

Examples from @ref[5.1.72]: @deva[पारायणिकः], @deva[तौरायणिकः], @deva[चान्द्रायणिकः]`,

  '51019': `@deva[आर्हादगमनीयाट्ठक्] — Up to sūtra @ref[5.1.63] inclusive, the affix @deva[ठक्] (+@deva[इक] or @deva[क]) governs.

**Kārikā:**
@deva[ऊर्ध्वमानं किलोन्मानं परिमाणं तु सर्वतः ।]
@deva[आयामस्तु प्रमाणं स्यात्संख्या बाह्या तु सर्वतः ॥]

@note[Strictly speaking, @deva[ठक्] governs up to sūtra @ref[5.1.65]. The word @deva[आर्हात्] is made of @deva[आ] + @deva[अर्हात्], where @deva[आ] has the force of @deva[अभिविधि] (inclusion), so @deva[ठक्] also applies in sūtra @ref[5.1.63] (@deva[तदर्हति]).]

@deva[ठक्] debars @deva[ठञ्]; the difference is in accent only.

| Derivation | Result |
|------------|--------|
| @deva[निष्केण क्रीतम्] | @deva[नैष्किकम्] |
| @deva[पाणिना क्रीतम्] | @deva[पाणिकम्] |`,

  '51020': `@deva[निष्कादसमासे] — The affix @deva[ठक्] comes after @deva[निष्कादि] words when they are *not* parts of a compound, with senses taught up to @ref[5.1.63]. This @deva[ठक्] debars @deva[ठञ्].

| Base | Result |
|------|--------|
| @deva[निष्क] | @deva[नैष्किकम्] |
| @deva[पाणि] | @deva[पाणिकम्] |
| @deva[पाद] | @deva[पादिकम्] |
| @deva[माष] | @deva[माषिकम्] |

Why @deva[असमासे] "when not compounds"? Observe compounds formed with @deva[ठञ्]:
- @deva[परमनैष्किकम्]
- @deva[उत्तमनैष्किकम्]

By @ref[7.3.17], vṛddhi applies to the second term, not the first.`,

  '51021': `@deva[शतात्तिको ठन्यतौ च] — The affixes @deva[ठन्] (+@deva[इक]) and @deva[यत्] (+@deva[य]) come in senses up to @ref[5.1.63] after @deva[शत्] when it is not part of a compound and does not mean merely "hundred." These debars @deva[कन्] (@ref[5.1.22]).

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[शतेन क्रीतम्] | @deva[शत्यम्] or @deva[शतिकम्] | purchased for a hundred gold coins |

Why @deva[अशते] "when not meaning merely a hundred"? When @deva[शत] means just "hundred" (as a measure), @deva[कन्] applies:
@deva[शतं परिमाणमस्य] = @deva[शतकं निदानम्] "a band whose measure is hundred"

@note[The word @deva[अशते] qualifies the *sense* of the affix, not the base—since as a base, @deva[शत] must always mean "a hundred."]`,

  '51022': `@deva[अतिशदन्तायाः संख्यायाः कन्] — The affix @deva[कन्] (+@deva[क]) comes after a numeral *not* ending in @deva[ति] or @deva[शत्], in senses up to @ref[5.1.63]. This @deva[कन्] debars @deva[ठञ्].

| Derivation | Result |
|------------|--------|
| @deva[पञ्चभिः क्रीतः] | @deva[पञ्चकः] |
| @deva[बहुभिः क्रीतः] | @deva[बहुकः] |
| @deva[गणेन क्रीतः] | @deva[गणकः] |

Why "not ending in @deva[ति] or @deva[शत्]"? Those take @deva[ठञ्]:
- @deva[साप्ततिकः] (from @deva[सप्तति])
- @deva[चात्वारिशतकः] (from @deva[चत्वारिंशत्])

But @deva[कतिकः] takes @deva[कन्] (not @deva[ठञ्] or @deva[ठक्]) because @deva[कति] is formed with @deva[डति], not primitive @deva[ति].`,

  '51023': `@deva[वत्वन्तिकस्य वेटो वा] — The affix @deva[कन्] coming after a numeral ending in @deva[वत्] optionally takes the augment @deva[इट्], in senses up to @ref[5.1.63].

Words ending in @deva[वत्] are numerals (see @ref[1.1.23]) and take @deva[कन्] by @ref[5.1.22]. This sūtra ordains optional @deva[इट्].

| Base | With @deva[इट्] | Without @deva[इट्] |
|------|-----------------|---------------------|
| @deva[तावत्] | @deva[तावतिकः] | @deva[तावत्कः] |
| @deva[यावत्] | @deva[यावतिकः] | @deva[यावत्कः] |`,

  '51024': `@deva[विंशतित्रिंशद्भ्यां ड्वुन् असंज्ञायाम्] — The affix @deva[ड्वुन्] (+@deva[अक]) comes in senses up to @ref[5.1.63] after @deva[विंशति] and @deva[त्रिंशत्] when *not* denoting a Name. The @deva[ति] and @deva[अत्] of the base are dropped.

| Base | Derivation | Result |
|------|------------|--------|
| @deva[विंशति] | + @deva[ड्वुन्] → @ref[6.4.142] | @deva[विंशकः] |
| @deva[त्रिंशत्] | + @deva[ड्वुन्] → @ref[6.4.143] | @deva[त्रिंशकः] |

Why @deva[असंज्ञायाम्] "when not a Name"? When it is a Name, @deva[कन्] applies by @ref[5.1.22]:
@deva[विंशतिकः], @deva[त्रिंशत्कः]

@note[Though @ref[5.1.22] prohibits @deva[कन्] after stems ending in @deva[ति] or @deva[शत्], in Names the sūtra is divided differently, allowing @deva[कन्].]`,

  '51025': `@deva[कंसात्टिठन्] — The affix @deva[टिठन्] (+@deva[इक]) comes in senses up to @ref[5.1.63] after @deva[कंस]. This debars @deva[ठञ्].

| Base | Result | Feminine |
|------|--------|----------|
| @deva[कंस] | @deva[कंसिकः] | @deva[कंसिकी] (by @ref[4.1.15]) |

The @deva[टि] of @deva[टिठन्] indicates the feminine is formed by @deva[ङीप्]; @deva[न्] is for accent (@ref[6.1.197]).

**Vārttikas:**
1. Also after @deva[अर्ध]: @deva[अर्धिकः], @deva[अर्धिकी]
2. Also after @deva[कार्षापण]: @deva[कार्षापणिकः], @deva[कार्षापणिकी]. Sometimes @deva[प्रति] substitutes for @deva[कार्षापण]: @deva[प्रतिकः], @deva[प्रतिकी]`,

  '51026': `@deva[शूर्पाच्च वा] — The affix @deva[अञ्] (+@deva[अ]) comes optionally in senses up to @ref[5.1.63] after @deva[शूर्प]. This debars @deva[ठञ्], which comes in the alternative.

| Derivation | With @deva[अञ्] | With @deva[ठञ्] |
|------------|----------------|-----------------|
| @deva[शूर्पेण क्रीतम्] | @deva[शौर्पम्] | @deva[शौर्पिकम्] |`,

  '51027': `@deva[शतमानविंशतिकसहस्रवसनादण्] — The affix @deva[अण्] (+@deva[अ]) comes in senses up to @ref[5.1.63] after @deva[शतमान], @deva[विंशतिक], @deva[सहस्र], and @deva[वसन]. This debars @deva[ठञ्], @deva[ठक्], and @deva[कन्].

| Base | Derivation | Result |
|------|------------|--------|
| @deva[शतमान] | @deva[शतमानेन क्रीतम्] | @deva[शातमानम्] |
| @deva[विंशतिक] | — | @deva[वैंशतिकम्] |
| @deva[सहस्र] | — | @deva[साहस्रम्] |
| @deva[वसन] | — | @deva[वासनम्] |`,

  '51028': `@deva[अध्यर्धपूर्वाद्द्विगोर्लुक् असंज्ञायाम्] — The @deva[आर्हीय] affix (@ref[5.1.63]) is elided by @deva[लुक्] after:
- a stem beginning with @deva[अध्यर्ध]
- a @deva[द्विगु] compound

when not a Name.

| Compound | Result (affix elided) |
|----------|------------------------|
| @deva[अध्यर्धकंसम्] | @deva[अध्यर्धकंसम्] |
| @deva[द्विकंसम्] | @deva[द्विकंसम्] |
| @deva[त्रिकंसम्] | @deva[त्रिकंसम्] |
| @deva[द्विशूर्पम्] | @deva[द्विशूर्पम्] |

Here @deva[टिठन्] and @deva[अञ्] are elided.

@note[Elision occurs only when the taddhita affix occasions a @deva[द्विगु] compound (@ref[2.1.51]), as in @deva[द्वाभ्यां शूर्पाभ्यां क्रीतम्] = @deva[द्विशूर्पम्]. Tertiary derivatives retain the affix.]`,

  '51029': `@deva[न कर्मादिद्विष्टसंख्याभ्यः] — The affixes taught in @ref[5.1.18] etc. do not always constitute @deva[संख्या]. For the purpose of @deva[कृत्वसुच्] (@ref[5.4.17]), such words are not @deva[संख्या].

This sūtra makes elision *optional* where the last sūtra made it compulsory.

| Base | With affix | Without affix |
|------|------------|---------------|
| @deva[कार्षापण] | @deva[अध्यर्धकार्षापणिकम्] | @deva[अध्यर्धकार्षापणम्] |
| @deva[कार्षापण] | @deva[द्विकार्षापणिकम्] | @deva[द्विकार्षापणम्] |

When not elided, @deva[प्रति] may substitute for @deva[कार्षापण] (@ref[5.1.25]):
@deva[अध्यर्धप्रतिकम्], @deva[द्विप्रतिकम्]

After @deva[सहस्र]: @deva[अध्यर्धसहस्रम्] or @deva[अध्यर्धसाहस्रम्]`,

  '51030': `@deva[द्वित्रिभ्यां निष्कात्] — The @deva[आर्हीय] affix (@ref[5.1.63]) is optionally elided after @deva[निष्क] when preceded by @deva[द्वि] or @deva[त्रि], occasioning a @deva[द्विगु] compound.

| Compound | With affix | Without affix |
|----------|------------|---------------|
| @deva[द्वि] + @deva[निष्क] | @deva[द्विनैष्किकम्] | @deva[द्विनिष्कम्] |
| @deva[त्रि] + @deva[निष्क] | @deva[त्रिनैष्किकम्] | @deva[त्रिनिष्कम्] |

See @ref[7.3.17] for irregular vṛddhi of the second term.

**Vārttika:** Also when @deva[निष्क] is preceded by @deva[बहु]: @deva[बहुनिष्कम्] or @deva[बहुनैष्किकम्]`,

  '51031': `@deva[बिस्ताच्च] — The @deva[आर्हीय] affix (@ref[5.1.37]–63) occasioning a @deva[द्विगु] is optionally elided after @deva[बिस्त] preceded by @deva[द्वि] or @deva[त्रि].

The @deva[च] draws in @deva[द्वित्रिपूर्वात्].

| Compound | With affix | Without affix |
|----------|------------|---------------|
| @deva[द्वि] + @deva[बिस्त] | @deva[द्विबैस्तिकम्] | @deva[द्विबिस्तम्] |
| @deva[त्रि] + @deva[बिस्त] | @deva[त्रिबैस्तिकम्] | @deva[त्रिबिस्तम्] |
| @deva[बहु] + @deva[बिस्त] | @deva[बहुबैस्तिकम्] | @deva[बहुबिस्तम्] |

The separation of this sūtra sets up the next one.`,

  '51032': `@deva[विंशतिकाद्ध्यर्धाट्खः] — The affix @deva[ख] (@deva[ईन]) comes in @deva[आर्हीय] senses (@ref[5.1.37]–63) after @deva[विंशतिक] when preceded by @deva[अध्यर्ध] or a numeral occasioning a @deva[द्विगु].

| Compound | Result |
|----------|--------|
| @deva[अध्यर्ध] + @deva[विंशतिक] | @deva[अध्यर्धविंशतिकीनम्] |
| @deva[द्वि] + @deva[विंशतिक] | @deva[द्विविंशतिकीनम्] |
| @deva[त्रि] + @deva[विंशतिक] | @deva[त्रिविंशतिकीनम्] |

Being specially ordained, @deva[ख] is not elided by @ref[5.1.28].`,

  '51033': `@deva[खार्याद्द्विगोरीकन्] — The affix @deva[ईकन्] (+@deva[ईक]) comes in @deva[आर्हीय] senses (@ref[5.1.37]–63) after @deva[खारी] when preceded by @deva[अध्यर्ध] or a numeral occasioning a @deva[द्विगु].

| Compound | Result |
|----------|--------|
| @deva[अध्यर्ध] + @deva[खारी] | @deva[अध्यर्धखारीकम्] |
| @deva[द्वि] + @deva[खारी] | @deva[द्विखारीकम्] |

**Vārttikas:**
1. Also after @deva[खारी] alone: @deva[खारीकम्]
2. Also after @deva[काकिणी]: @deva[अध्यर्धकाकिणीकम्], @deva[द्विकाकिणीकम्], @deva[त्रिकाकिणीकम्], @deva[काकिणीकम्]`,

  '51034': `@deva[पणमाषशतात्द्विगोर्यत्] — The affix @deva[यत्] (@deva[य]) comes in @deva[आर्हीय] senses (@ref[5.1.37]–63) after @deva[पण], @deva[माष], and @deva[शत] when preceded by @deva[अध्यर्ध] or a numeral occasioning a @deva[द्विगु].

| Base | Examples |
|------|----------|
| @deva[पण] | @deva[अध्यर्धपण्यम्], @deva[द्विपण्यम्], @deva[त्रिपण्यम्] |
| @deva[पाद] | @deva[अध्यर्धपाद्यम्], @deva[द्विपाद्यम्], @deva[त्रिपाद्यम्] |
| @deva[माष] | @deva[अध्यर्धमाष्यम्], @deva[द्विमाष्यम्], @deva[त्रिमाष्यम्] |
| @deva[शत] | @deva[अध्यर्धशत्यम्], @deva[द्विशत्यम्], @deva[त्रिशत्यम्] |

@note[For @deva[पाद], the substitution of @deva[पद] by @ref[6.3.53] does not occur here because that rule applies when @deva[पाद] means a living being's foot; here it means a measure of capacity.]`,

  '51035': `@deva[शाणाद्वा] — The affix @deva[यत्] comes optionally after @deva[शाण] in @deva[आर्हीय] senses (@ref[5.1.63]) when preceded by @deva[अध्यर्ध] or a numeral occasioning a @deva[द्विगु].

This debars @deva[ठञ्], which also comes in the alternative and is then elided by @ref[5.1.28].

| Compound | With @deva[यत्] | Without (@deva[ठञ्] elided) |
|----------|----------------|---------------------------|
| @deva[अध्यर्ध] + @deva[शाण] | @deva[अध्यर्धशाण्यम्] | @deva[अध्यर्धशाणम्] |
| @deva[द्वि] + @deva[शाण] | @deva[द्विशाण्यम्] | @deva[द्विशाणम्] |
| @deva[त्रि] + @deva[शाण] | @deva[त्रिशाण्यम्] | @deva[त्रिशाणम्] |

**Vārttika:** Also optionally after @deva[शत]: @deva[अध्यर्धशत्यम्] or @deva[अध्यर्धशतम्]`,

  '51036': `@deva[द्वित्रिभ्यामञ्च] — The affix @deva[अण्] (+@deva[अ]) as well as @deva[यत्] optionally comes after @deva[शाण] in @deva[आर्हीय] senses (@ref[5.1.37]–63) when preceded by @deva[द्वि] or @deva[त्रि].

The @deva[यत्] comes optionally by the last sūtra and is drawn in by @deva[च].

**Three forms for each:**

| With @deva[यत्] | With @deva[अण्] | Without (elided) |
|----------------|-----------------|------------------|
| @deva[द्विशाण्यम्] | @deva[द्वैशाणम्] | @deva[द्विशाणम्] |
| @deva[त्रिशाण्यम्] | @deva[त्रैशाणम्] | @deva[त्रिशाणम्] |

@note[The irregular vṛddhi of the second term taught in @ref[7.3.15]–@ref[7.3.17] does not occur with @deva[शाण], which is specially excluded from those rules. The vṛddhi here is regular.]`,

  '51037': `@deva[तेन क्रीतम्] — The thirteen affixes taught in @ref[5.1.18]–36 have the sense of "purchased with this price" and are added to a word in the instrumental (third case).

**The 13 affixes:** @deva[ठञ्], @deva[ठक्], @deva[ठन्], @deva[यत्], @deva[कन्], @deva[ड्वुन्], @deva[टिठन्], @deva[अञ्], @deva[अण्], @deva[ख], @deva[ईकन्], @deva[यत्], @deva[अण्]

The illustrations have been given in previous sūtras. Additional examples:

| Derivation | Result |
|------------|--------|
| @deva[सप्तत्या क्रीतम्] | @deva[साप्ततिकम्] |
| @deva[अशीत्या क्रीतम्] | @deva[आशीतिकम्] |
| @deva[निष्केण क्रीतम्] | @deva[नैष्किकम्] |
| @deva[पाणिना क्रीतम्] | @deva[पाणिकम्] |`,

  '51038': `@deva[तस्य निमित्तं संयोग उत्पातश्च] — The above affixes also have the sense of "for its sake" when the meaning is a relation or an unwanted appearance (portent).

The word @deva[तस्य] shows the genitive case; @deva[निमित्तम्] "cause or occasion" gives the sense. @deva[संयोग] = connection/relation; @deva[उत्पात] = portent (indicative of good or bad luck).

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[शतस्य निमित्तं धनपतिना संयोगः] | @deva[शत्यः] | a connection with a rich man for the sake of getting a hundred |
| @deva[शतस्य निमित्तम् उत्पातो दक्षिणाक्षिस्पन्दनम्] | @deva[शत्यम्] / @deva[शतिकम्] / @deva[साहस्रम्] | twitching of the right eye as a portent indicating gain or loss of a hundred |`,

  '51039': `@deva[गोद्व्यचः संज्ञासंख्याव्यश्वाद्योर्यत्] — The affix @deva[यत्] (@deva[य]) comes in the sense of "a relation or portent for the purpose of that" after:
- @deva[गो]
- a word having two syllables

Exceptions: numerals, measures of capacity, and @deva[अश्वादि] words.

This debars @deva[ठञ्].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[गो] | @deva[गव्यः] | a connection or portent for the sake of a cow |
| @deva[धन] (2 syllables) | @deva[धन्यम्] | — |
| @deva[स्वर्ग] (2 syllables) | @deva[स्वर्ग्यम्] | — |
| @deva[यशस्] (2 syllables) | @deva[यशस्यम्] | — |
| @deva[आयुस्] (2 syllables) | @deva[आयुष्यम्] | — |`,

  '51040': `@deva[विभाषा ऽश्वादिभ्यः] — The affix @deva[यत्] comes optionally in the sense of "a relation or portent for the purpose of that" after the @deva[अश्वादि] words.

| With @deva[यत्] | With @deva[ठञ्] |
|----------------|-----------------|
| @deva[अश्व्यः] | @deva[आश्विकः] |
| @deva[अश्व्यम्] | @deva[आश्विकम्] |

The @deva[अश्वादि] class is an @deva[आकृतिगण] (open class).`,

  '51041': `@deva[शरात्कर्मणि] — The affix @deva[यत्] comes in the same sense of "relation or portent" after @deva[शर] when the meaning relates to action.

@deva[शर्यम्] — relating to arrows (action)

Why @deva[कर्मणि] "when relating to action"? When not relating to action, @deva[ठञ्] applies: @deva[शारिकं धनुः] "a bow (portent) for the sake of arrows."`,

  '51042': `@deva[क्षेत्रियाच्च] — The affix @deva[यत्] comes in the sense of "relation or portent" after @deva[क्षेत्र] when the meaning is of sickness.

@deva[क्षेत्रियः] or @deva[क्षेत्रियम्] — a disease arising from family inheritance

@note[The word @deva[च] indicates this is an optional rule; @deva[ठञ्] also applies.]`,

  '51043': `@deva[साधुपुण्ययोः शब्दे] — After @deva[साधु] and @deva[पुण्य], the affix comes in the sense of "relation or portent" when the derivative denotes sound or speech.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[साधु] | @deva[साध्व्यम्] or @deva[साधवीयम्] | relating to good speech |
| @deva[पुण्य] | @deva[पुण्यम्] or @deva[पौण्यिकम्] | relating to meritorious speech |

The word @deva[शब्द] here means "speech" or "sound."`,

  '51044': `@deva[अपथाद्भावे] — The affix @deva[यत्] comes after @deva[अपथ] (wrong path) in the sense of "nature or condition."

@deva[अपथ्यम्] — unwholesomeness, being off the right path

This relates to conduct or behavior, not physical paths.`,

  '51045': `@deva[स्वपदात्पथः] — The affix @deva[यत्] comes after the word @deva[पथ] when preceded by @deva[स्व] (own), in the above sense.

@deva[स्वपथ्यम्] — relating to one's own path; wholesomeness

Contrast: @deva[अपथ्यम्] "unwholesome" vs @deva[स्वपथ्यम्] "wholesome."`,

  '51046': `@deva[आयुषोप्राण्यादिभ्योर्घविशोष] — After @deva[आयुस्] (life) and the @deva[प्राणि] class, the affixes @deva[घ] and @deva[ण] come respectively in the sense of "connected with that as a portent."

| Base | Affix | Result |
|------|-------|--------|
| @deva[आयुस्] | @deva[घ] | @deva[आयुष्यम्] |
| @deva[प्राण] | @deva[ण] | @deva[प्राणम्] |

The @deva[प्राण्यादि] is a specific class for this sūtra.`,

  '51047': `@deva[द्यावापृथिवीभ्यां च] — The affix @deva[यत्] comes after @deva[द्यावापृथिवी] (heaven and earth) in the sense of "connected with that."

@deva[द्यावापृथिव्यम्] — relating to heaven and earth

The @deva[च] indicates optionality with other affixes.`,

  '51048': `@deva[तद्धरति वहति बिभर्ति तौल्यवहिकाभ्यां च] — The above affixes come after a word in the accusative (second case) in the sense of "who carries, conveys, or bears that."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[शतं हरति] | @deva[शातिकः] | who carries a hundred |
| @deva[शतं वहति] | @deva[शातिकः] | who conveys a hundred |
| @deva[शतं बिभर्ति] | @deva[शातिकः] | who bears a hundred |

The words @deva[तौल्य] and @deva[अवहिका] take specific forms.`,

  '51049': `@deva[जीविकार्थे चाशनायाः] — The affix @deva[ठञ्] comes after @deva[अशन] (food) in the accusative when the sense is "livelihood."

@deva[आशनिकः] — one who lives by food, one whose livelihood involves food

The @deva[च] indicates this is an extension of the previous rule.`,

  '51050': `@deva[नावो द्वयोश्च] — The affix comes after @deva[नौ] (boat) when in the sense of "who carries, conveys, or bears" relating to two.

@deva[नाविकः] — a boatman (one who conveys by boat)

This applies to those who operate boats.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.1.1-50). Total: ${Object.keys(vasu).length}`);
