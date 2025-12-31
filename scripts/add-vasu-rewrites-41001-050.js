import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '41001': `@deva[ङ्याप्प्रातिपदिकात्] — This @deva[अधिकार] governs through adhyāya 5: all affixes taught hereafter attach to stems ending in @deva[ङी], @deva[आप्], or to any @deva[प्रातिपदिक] (nominal stem).

@note[This opens the massive taddhita section — secondary derivation from nominal bases.]`,

  '41002': `@deva[स्वौजसमौट्...] — The @deva[सुप्] (case-affix) paradigm for nominal stems:

| Case | Singular | Dual | Plural |
|------|----------|------|--------|
| 1st | @deva[सु] | @deva[औ] | @deva[जस्] |
| 2nd | @deva[अम्] | @deva[औट्] | @deva[शस्] |
| 3rd | @deva[टा] | @deva[भ्याम्] | @deva[भिस्] |
| 4th | @deva[ङे] | @deva[भ्याम्] | @deva[भ्यस्] |
| 5th | @deva[ङसि] | @deva[भ्याम्] | @deva[भ्यस्] |
| 6th | @deva[ङस्] | @deva[ओस्] | @deva[आम्] |
| 7th | @deva[ङि] | @deva[ओस्] | @deva[सुप्] |

These 21 affixes are collectively called @deva[सुप्] (after the first and last).`,

  '41003': `@deva[स्त्रियाम्] — This @deva[अधिकार] governs through @ref[4.1.81]: when feminine gender is to be expressed, the following affixes apply.

@note[The feminine affix section — @deva[टाप्], @deva[ङीप्], @deva[ङीष्], etc.]`,

  '41004': `@deva[अजाद्यतष्टाप्] — The affix @deva[टाप्] (@deva[आ]) forms feminines after:
- Words in the @deva[अज]-class
- Stems ending in short @deva[अ]

| Base | + @deva[टाप्] | Feminine |
|------|---------------|----------|
| @deva[अज] | @deva[अज + आ] | @deva[अजा] "she-goat" |
| @deva[बाल] | @deva[बाल + आ] | @deva[बाला] "girl" |

@note[The @deva[ट्] and @deva[प्] are @deva[इत्] — only @deva[आ] remains.]`,

  '41005': `@deva[ऋन्नेभ्यो ङीप्] — The affix @deva[ङीप्] (@deva[ई]) forms feminines after stems ending in @deva[ऋ] or @deva[न्]:

| Base | + @deva[ङीप्] | Feminine |
|------|---------------|----------|
| @deva[कर्तृ] | @deva[कर्त्री] | "female doer" |
| @deva[राजन्] | @deva[राज्ञी] | "queen" |

@note[The @deva[ङ्] creates a common technical term with @deva[ङीष्] and @deva[ङीन्].]`,

  '41006': `@deva[उगितश्च] — @deva[ङीप्] also comes after stems formed with affixes marked @deva[उक्] (containing indicatory @deva[उ], @deva[ऋ], or @deva[ऌ]):

| Affix | Example base | Feminine |
|-------|--------------|----------|
| @deva[युच्] | @deva[कारयितृ] | @deva[कारयित्री] |
| @deva[ण्वुल्] (has @deva[उ]) | @deva[कारक] | @deva[कारिका] |`,

  '41007': `@deva[वनो र च] — Before @deva[ङीप्], stems ending in @deva[वन्] substitute @deva[र्] for the final syllable:

| Base | Substitution | Feminine |
|------|--------------|----------|
| @deva[धीवन्] | @deva[धीवर्] + @deva[ई] | @deva[धीवरी] "craftswoman" |
| @deva[पीवन्] | @deva[पीवर्] + @deva[ई] | @deva[पीवरी] "stout woman" |`,

  '41008': `@deva[पादो ऽन्यतरस्याम्] — @deva[ङीप्] is optional after stems ending in @deva[पाद्] (from bahuvrīhi compounds per @ref[5.4.140]):

@deva[द्विपात्] → @deva[द्विपात्] (masc/fem) or @deva[द्विपदी] (fem)`,

  '41009': `@deva[टाबृचि] — @deva[टाप्] (not @deva[ङीप्]) comes after @deva[पाद्]-ending stems when denoting a Ṛgvedic verse:

@deva[द्विपदा ऋक्] "a Ṛk verse of two quarters"
@deva[त्रिपदा ऋक्] "a Ṛk verse of three quarters"`,

  '41010': `@deva[षट्स्वस्रादिभ्यो ऽप्राणिषु] — No feminine affix after:
- @deva[षट्] "six" (called @deva[षड्-ष्णान्ता])
- The @deva[स्वसृ]-class words

@deva[पञ्च ब्राह्मण्यः] "the five Brāhmaṇī ladies" — @deva[पञ्च] takes no feminine marking.`,

  '41011': `@deva[न मन्] — @deva[ङीप्] does NOT apply to stems ending in @deva[मन्] (though they end in @deva[न्]):

| Base | Feminine |
|------|----------|
| @deva[आत्मन्] | @deva[आत्मा] (via @deva[टाप्]) |
| @deva[दामन्] | @deva[दामा] |

@note[This blocks @ref[4.1.5] which would otherwise give @deva[ङीप्].]`,

  '41012': `@deva[अनो बहुव्रीहेः] — @deva[ङीप्] does NOT apply to bahuvrīhi compounds ending in @deva[अन्] when the penultimate is retained:

@deva[बहुराजानम्] (bahuvrīhi) → @deva[बहुराजा] (fem, not @deva[बहुराज्ञी])

@note[When the penultimate IS elided, @deva[ङीप्] is optional.]`,

  '41013': `@deva[डाबुभाभ्याम् अन्यतरस्याम्] — @deva[डाप्] optionally comes after:
1. Stems ending in @deva[अन्]
2. Bahuvrīhi compounds

The @deva[ड्] triggers elision of @deva[टि] (the final syllable) per @ref[1.1.64]:

@deva[राजन्] → @deva[राजा] (via @deva[डाप्])`,

  '41014': `@deva[अनुपसर्जनात्] — Rules @ref[4.1.14]–@ref[4.1.77] apply only to stems that are NOT subordinate members (@deva[उपसर्जन]) in compounds.

@note[Feminine affixes attach to the final member, not internal components.]`,

  '41015': `@deva[टिड्ढाणञ्...ङीप्] — @deva[ङीप्] comes after stems ending in short @deva[अ] when that @deva[अ] is from an affix marked with @deva[ट्], or the affix is @deva[ढ], @deva[अण्], @deva[अञ्], @deva[द्वयसच्], @deva[दघ्नच्], @deva[मात्रच्], or @deva[तयप्]:

| Affix | Example | Feminine |
|-------|---------|----------|
| @deva[अण्] | @deva[दाक्ष] | @deva[दाक्षी] |
| @deva[मात्रच्] | @deva[ऊरुमात्र] | @deva[ऊरुमात्री] |`,

  '41016': `@deva[यञश्च] — @deva[ङीप्] also comes after stems ending in @deva[यञ्] (the gotra affix from @ref[4.1.105]):

@deva[गार्ग्य] + @deva[ङीप्] → @deva[गार्ग्य] + @deva[ई] → @deva[गार्ग्] + @deva[ई] (@ref[6.4.150]) → @deva[गार्गी] "a Gārgya woman"`,

  '41017': `@deva[उदीचां ष्फ तद्धितः] — According to Northern grammarians, @deva[ष्फ] (= @deva[आयनी]) comes after @deva[यञ्]-ending stems, functioning as a @deva[तद्धित]:

@deva[गार्ग्य] → @deva[गार्ग्यायनी] (fem)

@note[The @deva[ष्] triggers ṇatva (@ref[1.3.6]).]`,

  '41018': `@deva[लोहितादिक्तान्तात् ष्फ नित्यम्] — @deva[ष्फ] obligatorily comes after the @deva[लोहित]-class words ending in @deva[क्त] when they take @deva[यञ्]:

@deva[लोहित] + @deva[यञ्] + @deva[ष्फ] → @deva[लौहित्यायनी]`,

  '41019': `@deva[कौरव्यमाण्डूकाभ्याम् ष्फ] — @deva[ष्फ] comes after @deva[कौरव्य] and @deva[माण्डूक]:

@deva[कौरव्य] → @deva[कौरव्यायनी] (fem)
@deva[माण्डूक] → @deva[माण्डूकायनी] (fem)`,

  '41020': `@deva[वयोऽविकाद् ङीप्] — @deva[ङीप्] comes after stems ending in short @deva[अ] that express early age:

| Base | Meaning | Feminine |
|------|---------|----------|
| @deva[बाल] | young | @deva[बाली] |
| @deva[तरुण] | youthful | @deva[तरुणी] |`,

  '41021': `@deva[द्विगोश्च] — @deva[ङीप्] comes after @deva[द्विगु] (numeral compound) stems ending in @deva[अ]:

@deva[दशपूली] "ten bundles (as a collection)"
@deva[पञ्चपूली] "five bundles"

Exception: @deva[त्रिफला] "the three myrobalans" (listed in an exception class)`,

  '41022': `@deva[द्विगोर्लुगविवक्षायाम्...] — @deva[ङीप्] is NOT used when a @deva[तद्धित] affix is elided after a @deva[द्विगु] that:
- Does not denote mass/measure
- Ends in @deva[बिस्त], @deva[आचित], or @deva[कम्बल्य]

@deva[पञ्चकपाला] "five-bowled" (not @deva[पञ्चकपाली])`,

  '41023': `@deva[काण्डात्तद्धितलुकि क्षेत्रे] — @deva[ङीप्] is NOT used after an adjectival @deva[द्विगु] ending in @deva[काण्ड] when denoting a field and the @deva[तद्धित] is elided:

@deva[द्विकाण्डा क्षेत्रभक्तिः] "a field-division of two-section measure"`,

  '41024': `@deva[पुरुषे प्रमाणे वा] — @deva[ङीप्] is optional after @deva[द्विगु] ending in @deva[पुरुष] when denoting measure:

@deva[द्विपुरुषा परिखा] or @deva[द्विपुरुषी परिखा] "a moat two puruṣa-lengths deep"`,

  '41025': `@deva[ऊधसो ऽनङ्] — @deva[ङीप्] comes after bahuvrīhi compounds ending in @deva[ऊधस्] "udder" (which takes @deva[अनङ्] substitute per @ref[5.4.131]):

@deva[कुण्ड + ऊधस्] → @deva[कुण्डोधनी] "having a bowl-shaped udder"`,

  '41026': `@deva[संख्याव्ययादेर्ङीप्] — @deva[ङीप्] (not @deva[ङीष्]) comes after bahuvrīhi compounds ending in @deva[ऊधस्] when preceded by a numeral or indeclinable:

@deva[द्वि + ऊधस्] + @deva[अनङ्] → @deva[द्वयूधनी] "having two udders"`,

  '41027': `@deva[दामहायनान्तश्च] — @deva[ङीप्] comes after bahuvrīhi compounds beginning with a numeral and ending in @deva[दामन्] "rope" or @deva[हायन] "year":

@deva[त्रिदामनी] "having three ropes"
@deva[द्विहायनी] "two years old"`,

  '41028': `@deva[बहुव्रीहेश्च उपसंख्यानम्...] — @deva[ङीप्] comes after bahuvrīhi compounds ending in @deva[अन्] when the penultimate @deva[अ] is elided (@ref[6.4.134]):

@deva[बहुराजन्] → @deva[बहुराज्ञी] "having many kings"`,

  '41029': `@deva[छन्दसि नित्यम् संज्ञायाम्] — @deva[ङीप्] is obligatory (not optional) in the Vedas and in proper names after such bahuvrīhi compounds:

@deva[बहुराज्ञी] (required in Vedas and names)`,

  '41030': `@deva[नित्यं छन्दसि संज्ञायां च...] — @deva[ङीप्] is obligatory in the Vedas and for proper names after certain listed stems:

@deva[केवली] (in Vedas)

@note[These feminine forms are invariable in Vedic and nominal usage.]`,

  '41031': `@deva[रात्रेश्छन्दस्यसंज्ञायाम्] — @deva[ङीप्] comes after @deva[रात्रि] in Vedas and names, except before @deva[जस्] (nominative plural):

@deva[या रात्री सृष्टा] (nom. sg: @deva[रात्री])
But: @deva[रात्रिभिः] (inst. pl.)`,

  '41032': `@deva[अन्तर्वत्पतिवतोर्नुक्] — The augment @deva[नुक्] is added to @deva[अन्तर्वत्] and @deva[पतिवत्] before @deva[ङीप्]:

@deva[अन्तर्वत्] + @deva[नुक्] + @deva[ई] → @deva[अन्तर्वत्नी] "pregnant"
@deva[पतिवत्] + @deva[नुक्] + @deva[ई] → @deva[पतिवत्नी] "having a husband"`,

  '41033': `@deva[पत्युर्नो यज्ञसंयोगे] — @deva[न्] substitutes for final @deva[इ] of @deva[पति] before @deva[ङीप्] when the resulting word means "wife participating in husband's sacrifice":

@deva[पतन्] + @deva[ई] → @deva[पत्नी] "legitimate wife" (entitled to sacrificial participation)`,

  '41034': `@deva[स्वाङ्गपूर्वपदाद्वा] — When @deva[पति] is preceded by a vowel (in a compound), @deva[न्]-substitution is optional:

@deva[गृहपती] or @deva[गृहपत्नी] "mistress of the house"`,

  '41035': `@deva[नित्यं सपत्न्यादिषु] — @deva[न्]-substitution is obligatory in @deva[सपत्नि] and similar words:

@deva[सपत्नी] "co-wife" (never @deva[सपती])`,

  '41036': `@deva[पूतक्रत्वोरैच्] — Before @deva[ङीप्], @deva[ऐ] substitutes for the final of @deva[पूतक्रतु]:

@deva[पूतक्रतु] → @deva[पूतक्रतायी] "wife of Pūtakratu"`,

  '41037': `@deva[वृषाकप्यग्निकुसितकुसीदानामुदात्तः] — @deva[ऐ] (with @deva[उदात्त] accent) substitutes for the finals of @deva[वृषाकपि], @deva[अग्नि], @deva[कुसति], @deva[कुसीद] before @deva[ङीप्]:

@deva[वृषाकपायी], @deva[अग्नायी], @deva[कुसतायी], @deva[कुसीदायी]`,

  '41038': `@deva[मनोर्वा] — For @deva[मनु], @deva[औ] or @deva[ऐ] optionally substitutes before @deva[ङीप्]:

@deva[मनु] → @deva[मन्वी] or @deva[मनायी] or @deva[मनौयी]`,

  '41039': `@deva[एतावता...] — @deva[ङीप्] is optional after color-words with grave accent and @deva[त्] as penultimate; @deva[न्] substitutes for @deva[त्]:

@deva[एत] "variegated" → @deva[एनी] or @deva[एता]`,

  '41040': `@deva[अन्यतोऽनुदात्तात् ङीष्] — @deva[ङीष्] (not @deva[ङीप्]) comes after other color-words with @deva[अनुदात्त] accent:

@deva[शुक्ल] "white" → @deva[शुक्ली]`,

  '41041': `@deva[षिद्गौरादिभ्यश्च] — @deva[ङीष्] comes after:
- Words ending in affixes marked with @deva[ष्]
- The @deva[गौर]-class

@deva[कारक] (from @deva[ण्वुल्]) → @deva[कारिका] (via @deva[टाप्], but some take @deva[ङीष्])
@deva[गौर] → @deva[गौरी]`,

  '41042': `@deva[जानपदकुण्डगोणस्थलभाजनाम्...] — @deva[ङीष्] comes after the 11 @deva[जानपद]-class words when denoting profession:

| Word | Feminine |
|------|----------|
| @deva[जानपद] | @deva[जानपदी] "country woman" |
| @deva[कुण्ड] | @deva[कुण्डी] |
| @deva[कामुक] | @deva[कामुकी] "lustful woman" |`,

  '41043': `@deva[शोणादुदीचाम्] — According to Northern grammarians, @deva[ङीष्] comes after @deva[शोण]:

@deva[शोणी] or @deva[शोणा] @deva[वडवा] "a red/bay mare"`,

  '41044': `@deva[गुणवचनब्राह्मणादिभ्यः कर्मणि च] — @deva[ङीष्] is optional after quality-expressing words ending in short @deva[अ]:

@deva[पाप] "evil" → @deva[पापी] or @deva[पापा]`,

  '41045': `@deva[बह्वादिभ्यश्च] — @deva[ङीष्] is optional after the @deva[बहु]-class:

@deva[बहु] → @deva[बहुः] or @deva[बह्वी]`,

  '41046': `@deva[छन्दसि बहुलम्] — @deva[ङीष्] is always used in the Vedas for the @deva[बहु]-class:

@deva[बह्वीषु हित्वा प्रपिवन्] (Vedic)`,

  '41047': `@deva[भ्वोश्छन्दसि] — @deva[ङीष्] comes after @deva[भू] in the Vedas:

@deva[विभ्वी], @deva[प्रभ्वी], @deva[सुभ्वी], @deva[शम्भ्वी]

But not @deva[स्वयम्भूः] (which ends in long @deva[ऊ])`,

  '41048': `@deva[पुंयोगादाख्यायाम्] — @deva[ङीष्] comes after a word when it expresses a wife's name in relation to her husband:

@deva[गणक] "astrologer" → @deva[गणकी] "astrologer's wife"
@deva[महामात्र] "chief minister" → @deva[महामात्री] "minister's wife"`,

  '41049': `@deva[इन्द्रवरुणभवशर्वरुद्रमृडहिमारण्ययवयवनमातुलाचार्याणाम् आनुक्] — @deva[आनुक्] augment is added to these stems before @deva[ङीष्]:

| Base | + @deva[आनुक्] + @deva[ई] | Meaning |
|------|--------------------------|---------|
| @deva[इन्द्र] | @deva[इन्द्राणी] | Indra's wife |
| @deva[वरुण] | @deva[वरुणानी] | Varuṇa's wife |
| @deva[मातुल] | @deva[मातुलानी] | maternal uncle's wife |
| @deva[आचार्य] | @deva[आचार्यानी] | teacher's wife |`,

  '41050': `@deva[करणे क्रीताच्छन्दसि] — @deva[ङीष्] comes after compounds ending in @deva[क्रीत] when the first member names the means of purchase:

@deva[वसुक्रीता] "bought with wealth" → @deva[वसुक्रीती] (fem, Vedic)
@deva[हिरण्यक्रीता] → @deva[हिरण्यक्रीती] "bought with gold"`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.1.1-50). Total: ${Object.keys(vasu).length}`);
