import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '52051': `@deva[षट्कतिपयचतुर्भ्यस्थुक्] — When @deva[डट्] follows, @deva[थुक्] is the augment of @deva[षट्], @deva[कति], @deva[कतिपय], and @deva[चतुर्].

The @deva[डट्] must be read into this sūtra and changed to locative: @deva[डटि] "when @deva[डट्] follows."

| Base | Result | Meaning |
|------|--------|---------|
| @deva[षट्] | @deva[षष्ठः] | sixth |
| @deva[कति] | @deva[कतिथः] | which in order? |
| @deva[कतिपय] | @deva[कतिपयथः] | the one after several in order |
| @deva[चतुर्] | @deva[चतुर्थः] | fourth |

@note[The word @deva[कतिपय] is not a numeral; it takes @deva[डट्] by force of this sūtra.]

**Vārttika:** The affixes @deva[छ] (@deva[ईय]) and @deva[यत्] come after @deva[चतुर्] with elision of the first letter: @deva[तुरीयः] or @deva[तुर्यः].

@note[In this and the following two sūtras, the action of @deva[ड्] vanishes when an augment is added.]`,

  '52052': `@deva[बहुपूगगणसंघात्तिथुक्] — When @deva[डट्] follows, @deva[तिथुक्] is the augment of @deva[बहु], @deva[पूग], @deva[गण], and @deva[संघ].

The word @deva[डटि] is understood here. The words @deva[पूग] and @deva[संघ] are not numerals; they take @deva[डट्] by virtue of this sūtra.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[बहु] | @deva[बहुतिथः] | the one after many |
| @deva[पूग] | @deva[पूगतिथः] | — |
| @deva[गण] | @deva[गणतिथः] | — |
| @deva[संघ] | @deva[संघतिथः] | — |`,

  '52053': `@deva[वत्वन्तस्य तिथुक्] — When @deva[डट्] follows, @deva[तिथुक्] is the augment of a stem ending in @deva[वतु].

Words ending in @deva[वतु] are numerals (@ref[1.1.23]) and take @deva[डट्] by @ref[5.2.48]. This sūtra declares the augment.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[यावत्] | @deva[यावतिथः] | the ordinal of "as many as" |
| @deva[तावत्] | @deva[तावतिथः] | — |
| @deva[एतावत्] | @deva[एतावतिथः] | — |`,

  '52054': `@deva[द्वेस्तीयः] — The affix @deva[तीय] comes in the sense of "completer thereof" after @deva[द्वि].

This debars @deva[डट्].

@deva[द्वयोः पूरणः] = @deva[द्वितीयः] — "second" (that which completes the two)`,

  '52055': `@deva[त्रेः संप्रसारणं च] — The affix @deva[तीय] comes in the sense of "completer thereof" after @deva[त्रि], and there is saṃprasāraṇa (vocalization) of the stem.

Substitution of a vowel for a semi-vowel is saṃprasāraṇa (@ref[1.1.45]).

@deva[त्रि] + @deva[तीय] = @deva[तृ] + @deva[इ] + @deva[तीय] = @deva[तृतीयः] (by @ref[6.1.108], the @deva[इ] of @deva[त्रि] takes the form of @deva[ऋ])

@note[The @deva[ऋ] is not lengthened by @ref[6.4.2] because that rule applies only to @deva[अण्] letters (@deva[अ], @deva[इ], @deva[उ]).]`,

  '52056': `@deva[विंशत्यादेर्वा तमट्] — After @deva[विंशत्यादि] words, @deva[तमट्] (@deva[तम], feminine in @deva[ङीप्]) is optionally the augment of @deva[डट्].

This rule falls under @deva[पूरण]; we must read @deva[डट्] as the affix receiving the augment.

| Base | With @deva[तमट्] | Without |
|------|------------------|---------|
| @deva[विंशति] | @deva[विंशतितमः] | @deva[विंशः] |
| @deva[एकविंशति] | @deva[एकविंशतितमः] | @deva[एकविंशः] |
| @deva[त्रिविंशति] | @deva[त्रिविंशतितमः] | @deva[त्रिविंशः] |
| @deva[त्रिंशत्] | @deva[त्रिंशत्तमः] | @deva[त्रिंशः] |

@note[There is no @deva[विंशत्यादि] class in Gaṇapāṭha. These are ordinary words like @deva[विंशति], @deva[त्रिंशत्], etc.]`,

  '52057': `@deva[शतादिमाषार्धमासादिभ्यः] — After @deva[शतादि] and @deva[मास], @deva[अर्धमास], @deva[संवत्सर], the augment @deva[तमट्] is always added to @deva[डट्].

The words @deva[शतादि] are numerals. The words @deva[मास], etc. are not numerals but take @deva[डट्] by implication of this sūtra.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[शत] | @deva[शततमः] | hundredth |
| @deva[सहस्र] | @deva[सहस्रतमः] | thousandth |
| @deva[लक्ष] | @deva[लक्षतमः] | hundred-thousandth |
| @deva[मास] | @deva[मासतमो दिवसः] | the last day of the month |
| @deva[अर्धमास] | @deva[अर्धमासतमः] | — |
| @deva[संवत्सर] | @deva[संवत्सरतमः] | — |

@note[By @ref[5.2.58], @deva[शत] etc. would also take @deva[तमट्], but that rule is confined to numerals not preceded by another numeral. There is no such restriction here.]`,

  '52058': `@deva[षष्ट्यादेर्संख्यापूर्वान्नित्यम्] — After @deva[षष्ट्यादि] words, when no other numeral precedes them, @deva[तमट्] is always the augment of @deva[डट्].

By @ref[5.2.56], the augment was optional; this makes it compulsory.

| Base | Result |
|------|--------|
| @deva[षष्टि] | @deva[षष्टितमः] |
| @deva[सप्तति] | @deva[सप्ततितमः] |

Why "when not preceded by a numeral"? When preceded:
- @deva[एकषष्टः] or @deva[एकषष्टितमः]
- @deva[एकसप्ततः] or @deva[एकसप्ततितमः]

Here @ref[5.2.56] applies also.`,

  '52059': `@deva[सूक्तसाम्नोश्छन्दसि मतौ] — When a @deva[सूक्त] or @deva[साम] is to be expressed, the affix @deva[छ] (@deva[ईय]) comes after a nominal stem in the sense of @deva[मतुप्] — @deva[तदस्यास्त्यस्मिन्निति मतुप्] (@ref[5.2.94]).

The word @deva[मतौ] means "in the sense of @deva[मतुप्]." The sense is "whose is it or in whom it is."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[आच्छावाक् शब्दो ऽस्मिन्] | @deva[आच्छावाकीयं सूक्तम्] | the sūkta containing the word Ācchāvāk |
| — | @deva[मित्रावरुणीयम्] | — |
| — | @deva[यज्ञायज्ञीयं साम] | — |
| — | @deva[वारवन्तीयं साम] | — |

The affix comes after a collocation of words: @deva[अस्यवामीयम्] "the sūkta containing the words @deva[अस्य वाम]"`,

  '52060': `@deva[अध्यायानुवाकयोर्लुक्] — When an @deva[अध्याय] or @deva[अनुवाक] is to be expressed, there is @deva[लुक्] elision of the affix @deva[छ] (@deva[ईय]) having the sense of @deva[मतुप्].

This sūtra indicates by implication that @deva[छ] comes after a nominal stem to denote an adhyāya or anuvāka. According to Patañjali, the elision is optional.

| Derivation | With elision | Without |
|------------|--------------|---------|
| @deva[गर्दभाण्ड शब्दो ऽस्मिन् अस्ति] | @deva[गर्दभाण्डो ऽध्यायः] / @deva[अनुवाकः] | @deva[गर्दभाण्डीयः] |
| @deva[दीर्घजीवित...] | @deva[दीर्घजीवितः] | @deva[दीर्घजीवितीयः] |
| @deva[पलितस्तम्भ...] | @deva[पलितस्तम्भः] | @deva[पलितस्तम्भीयः] |`,

  '52061': `@deva[विमुक्तादेरण्] — The affix @deva[अण्] comes in the sense of @deva[मतुप्] when an @deva[अध्याय] or @deva[अनुवाक] is to be expressed, after @deva[विमुक्तादि] words.

| Base | Result |
|------|--------|
| @deva[विमुक्त] | @deva[वैमुक्तो ऽध्यायः] / @deva[अनुवाकः] |
| @deva[देवासुर] | @deva[दैवासुरः] |

@deva[विमुक्तादि] class: @deva[विमुक्त], @deva[देवासुर], @deva[रक्षोऽसुर], @deva[उपसद्], @deva[सुवर्ण], @deva[परिसारक], @deva[सदसत्], @deva[वसु], @deva[मरुत्], @deva[पत्नीवत्], @deva[वसुमत्], @deva[महीयत्व], @deva[सत्वत्], @deva[बर्हवत्], @deva[दशार्ण], @deva[दशार्ह], @deva[वयस्], @deva[हविर्धान], @deva[पतत्रिन्], @deva[महित्री], @deva[अस्यहत्य], @deva[सोमापूषन्], @deva[इडा], @deva[अग्नाविष्णु]`,

  '52062': `@deva[गोषद्वादिभ्यो वुन्] — The affix @deva[वुन्] comes in the sense of @deva[मतुप्] when an @deva[अध्याय] or @deva[अनुवाक] is to be expressed, after @deva[गोषदादि] words.

| Base | Result |
|------|--------|
| @deva[गोषद्] | @deva[गोषदको ऽध्यायः] / @deva[अनुवाकः] |
| @deva[इषे त्वा] | @deva[इषेत्वकः] |
| @deva[मातरिश्वन्] | @deva[मातरिश्वकः] |

@deva[गोषदादि] class: @deva[गोषद्], @deva[इषे त्वा], @deva[मातरिश्वन्], @deva[देवस्य त्वा], @deva[देवीरापः], @deva[कृष्णो ऽस्या], @deva[खरेष्ठः], @deva[देवीं धियम्], @deva[रक्षोहण], @deva[युञ्जान], @deva[अञ्जन], @deva[प्रभूत], @deva[प्रतूर्त], @deva[कृशानु], @deva[सहस्रशीर्षा], @deva[वातस्य ते], @deva[कृशाश्व], @deva[स्वाहाप्राण], @deva[प्रसप्त]`,

  '52063': `@deva[पथः कुशले] — The affix @deva[वुन्] comes in the sense of "versed therein or skilled therein" after @deva[पथिन्] in the locative.

@deva[पथि कुशलः] = @deva[पथकः] (by @ref[6.4.144] and @ref[7.1.1]) — "skilled in the path"`,

  '52064': `@deva[आकर्षादिभ्यः कन्] — The affix @deva[कन्] comes in the sense of "versed therein or skilled therein" after @deva[आकर्षादि] words in the locative.

| Base | Result |
|------|--------|
| @deva[आकर्ष] | @deva[आकर्षकः] |
| @deva[त्सरु] | @deva[त्सरुकः] |

@deva[आकर्षादि] class: @deva[आकर्ष], @deva[त्सरु], @deva[पिशाच], @deva[पिचण्ड], @deva[अशनि], @deva[अश्मन्], @deva[निचय], @deva[चय], @deva[विजय], @deva[जय], @deva[आचय], @deva[नय], @deva[पाद], @deva[दीप], @deva[ह्रद], @deva[ह्राद], @deva[ह्लाद], @deva[गद्गद], @deva[शकुनि], @deva[अव]`,

  '52065': `@deva[धनहिरण्ययोः कामे] — The affix @deva[कन्] comes in the sense of "a desire thereafter" after @deva[धन] and @deva[हिरण्य] in the locative.

| Base | Derivation | Result |
|------|------------|--------|
| @deva[धन] | @deva[धने कामः] | @deva[धनको देवदत्तस्य] |
| @deva[हिरण्य] | @deva[हिरण्ये कामः] | @deva[हिरण्यको देवदत्तस्य] |

"Devadatta's desire for wealth/gold"`,

  '52066': `@deva[स्वाङ्गेभ्यः प्रसिते] — The affix @deva[कन्] comes in the sense of "who takes care of it, who bestows care upon" after words denoting parts of one's body.

@deva[तत्र] and @deva[कन्] are understood. The word @deva[प्रसित] means "devoted to, intent upon, craving after."

@deva[केशेषु प्रसितः] = @deva[केशकः] — i.e., one devoted to hair-arrangement

The plural @deva[स्वाङ्गेभ्यः] indicates the affix comes even after compounds of body-part terms: @deva[दन्तोष्ठकः], @deva[केशनखकः]

See @ref[2.3.44].`,

  '52067': `@deva[उदरस्येदम् आद्यूने ठक्] — The affix @deva[ठक्] comes in the sense of "voracious" after @deva[उदर].

According to the Kāśikā, the @deva[अनुवृत्ति] of @deva[प्रसित] is read. A person very much distressed by hunger is so called (@deva[उदरे ऽविजिगीषुः]).

@deva[उदरे प्रसितः] = @deva[औदरिकः] — "voracious" (i.e., @deva[आद्यूनः])

Why "when it means voracious"? Otherwise: @deva[उदरकः] "abdominal"`,

  '52068': `@deva[सस्येन परिजातः] — The affix @deva[कन्] comes in the sense of "to supply richly with it" after @deva[सस्य] in the instrumental.

The @deva[अनुवृत्ति] of @deva[कन्] (not @deva[ठक्]) is read here. The word @deva[सस्य] here means "good quality" (not "corn"). @deva[परि] means "all, everywhere."

@deva[सस्येन परिजातः] = "full of good qualities, without defect"

| Example | Meaning |
|---------|---------|
| @deva[सस्यकः शालिः] | rice above all praise |
| @deva[सस्यकः साधुः] | a good man not equaled by any |
| @deva[सस्यको मणिः] | a gem of the best quality (perfect in form) |`,

  '52069': `@deva[अंशं हारी] — The affix @deva[कन्] comes in the sense of "who must take that" after @deva[अंश] "share" in the accusative.

The accusative construction is shown by @deva[अंशम्] in the sūtra. The word @deva[हारिन्] (nom. @deva[हारी]) is formed by adding @deva[णिनि] to √@deva[हृ], with the force of "must, necessity" (see @ref[3.3.170]). @deva[हारिन्] governs accusative, not genitive (@ref[2.3.70]).

@deva[अंशं हारी] = @deva[अंशकः] — "an heir" (one entitled to take a share at partition)

Example: @deva[अंशकः पुत्रः] "an heir son"`,

  '52070': `@deva[तन्त्रादचिरापहृतः] — The affix @deva[कन्] comes in the sense of "taken off therefrom not long ago" after @deva[तन्त्र] "loom."

@deva[तन्त्र] must be in the ablative, as used in the sūtra. @deva[अचिर] means "short time, not long"; @deva[अपहृत] means "taken off."

@deva[तन्त्रादचिरापहृतः] = @deva[तन्त्रकः] — "a cloth just taken off the loom" (i.e., an unbleached cloth)

Examples: @deva[तन्त्रकः पटः], @deva[तन्त्रकः प्रावारः] "a new mantle" (= @deva[प्रत्ययः] or @deva[नवः])`,

  '52071': `@deva[ब्राह्मणोष्णिकौ संज्ञायाम्] — The words @deva[ब्राह्मण] and @deva[उष्णिक] are anomalous when they are Names.

| Word | Result | Meaning |
|------|--------|---------|
| @deva[ब्राह्मण] + @deva[कन्] | @deva[ब्राह्मणको देशः] | a place where Brahmins who live by arms dwell |
| @deva[उष्णिक] | @deva[उष्णिका यवागूः] | (a kind of gruel for those of) little food (@deva[अल्पान्नाः]) |`,

  '52072': `@deva[शीतोष्णाभ्यां घटे] — The affix @deva[कन्] comes in the sense of "who goes to work thus" after @deva[शीत] and @deva[उष्ण].

The words @deva[शीत] and @deva[उष्ण] are adverbs in accusative construction.

| Base | Derivation | Result | Meaning |
|------|------------|--------|---------|
| @deva[शीत] | @deva[शीतं करोति] | @deva[शीतकः] | who goes to work coldly (= @deva[अलसः], @deva[जडः], a lazy man) |
| @deva[उष्ण] | @deva[उष्णं करोति] | @deva[उष्णकः] | who goes to work hotly (= @deva[शीघ्रकारी], @deva[दक्षः], efficient) |`,

  '52073': `@deva[अधिकोनिपात्यते] — The word @deva[अधिक] is anomalous.

The word @deva[अधिकः] meaning "more" is formed by adding @deva[कन्] to @deva[अध्यारूढ], with elision of the second term before the affix.

| Example | Meaning |
|---------|---------|
| @deva[अधिको द्रोणः खार्याम्] | a Droṇa is superior to Khārī |
| @deva[अधिका खारी द्रोणेन] | a Khārī is inferior to Droṇa |

The word @deva[अध्यारूढ] governs nominative or accusative indifferently.`,

  '52074': `@deva[अनुकाभिकाभीकाश्च] — The words @deva[अनुक], @deva[अभिक], and @deva[अभीक] are anomalous, meaning "being at liberty to do" or "being fond of."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[अनुकामयते] | @deva[अनुकः] | desirous, libidinous |
| @deva[अभिकामयते] | @deva[अभिकः] or @deva[अभीकः] | a lover, voluptuous person |`,

  '52075': `@deva[पार्श्वेनान्विच्छति] — The affix @deva[कन्] comes in the sense of "who strives to gain something by that" after @deva[पार्श्व] in the instrumental.

The word @deva[पार्श्व] means "a fraudulent or crooked expedient." One who endeavors to obtain anything by fraud is called @deva[पार्श्वकः] — "a cheat, a juggler, a partisan."

@deva[पार्श्व] = a rib, a crooked thing

@deva[पार्श्वकः] = @deva[मायाविन्], @deva[कौसृतिकः], @deva[जालिकः], etc.`,

  '52076': `@deva[अयःशूलदण्डाजिनाभ्यां ठक्ठञौ] — The affixes @deva[ठक्] and @deva[ठञ्] come in the sense of "who strives to gain something by that" after @deva[अयःशूल] and @deva[दण्डाजिन] respectively.

The word @deva[अन्विच्छति] is understood.

| Base | Affix | Result | Meaning |
|------|-------|--------|---------|
| @deva[अयःशूल] | @deva[ठक्] | @deva[आयःशूलिकः] | one who seeks to gain by violence (@deva[साहसिकः]) |
| @deva[दण्डाजिन] | @deva[ठञ्] | @deva[दाण्डाजिनिकः] | one who seeks to gain by hypocrisy (@deva[दाम्भिकः]) |

@deva[अयःशूल] = violent proceeding; @deva[दण्डाजिन] = staff (@deva[दण्ड]) and hide (@deva[अजिन]), i.e., outer badges of devotion/hypocrisy`,

  '52077': `@deva[तावतिथार्हादलुग्वाग्रहणे] — The affix @deva[कन्] is added to an ordinal number in the sense of "acquiring a subject after so many attempts," and there is optionally elision of the ordinal affix.

The word @deva[तावतिथ] (@ref[5.2.53]) stands as a type for all ordinal affixes. @deva[ग्रहण] means "acquired or learned."

| Derivation | With elision | Without |
|------------|--------------|---------|
| @deva[द्वितीयेन रूपेण ग्रन्थं गृह्णाति] | @deva[द्विकं ग्रहणम्] | @deva[द्वितीयकं ग्रहणम्] |
| @deva[तृतीयेन...] | @deva[त्रिकम्] | @deva[तृतीयकम्] |
| @deva[चतुर्थेन...] | @deva[चतुष्कम्] | @deva[चतुर्थकम्] |

"Successful mastery by the second/third/fourth time"

**Vārttika:** When the word means the person who acquires after so many attempts...`,

  '52078': `@deva[ग्रामण्यर्थे] — The affix @deva[कन्] comes in the sense of "he is their leader" after a word in the nominative with the force of genitive.

The word @deva[ग्रामणी] means "headman, leader, spokesman."

@deva[देवदत्तो ग्रामणीरेषाम्] = @deva[देवदत्तकाः] — "the followers of Devadatta"

Also: @deva[यज्ञदत्तकाः]

Why "when meaning a leader"? When not: @deva[देवदत्तः शत्रुरेषाम्] — no affixing.`,

  '52079': `@deva[शृङ्खलं बन्धनं करभस्य संज्ञायाम्] — The affix @deva[कन्] comes in the sense of "clog is its fetter" after @deva[शृङ्खल] when the whole word means "a young camel."

@deva[शृङ्खलं बन्धनमस्य करभस्य] = @deva[शृङ्खलकः]

The young ones of camels are called @deva[करभ]. The wooden clogs put on their feet to prevent straying are called @deva[शृङ्खल].

@note[Though ropes are also used, @deva[शृङ्खल] being the principal object that takes away freedom is called @deva[बन्धन] "fetter."]`,

  '52080': `@deva[उत्कोन्मनाः] — The word @deva[उत्क] is anomalous, meaning "longing after, yearning."

One whose mind anxiously desires or yearns is called @deva[उन्मनाः]. The word @deva[उत्कः] is formed by adding @deva[कन्] to the preposition @deva[उद्].

@deva[उत्को देवदत्तः], @deva[उत्कः प्रवासी] = @deva[उत्सुकः] or @deva[उत्कण्ठितः] — "longing"`,

  '52081': `@deva[रोगे कालप्रयोजने कन्] — The affix @deva[कन्] comes after a word expressing time or cause/effect (of disease) when an illness is denoted.

@deva[काल] means "days" etc.; @deva[प्रयोजन] means "cause of disease or its effect."

| Type | Derivation | Result | Meaning |
|------|------------|--------|---------|
| Time | @deva[द्वितीये ऽह्नि भवः] | @deva[द्वितीयको ज्वरः] | fever coming on the second day |
| Time | @deva[चतुर्थे ऽह्नि...] | @deva[चतुर्थकः] | quartan fever |
| Cause | @deva[विषपुष्पैः जनितः] | @deva[विषपुष्पको ज्वरः] | fever caused by poisonous flowers |
| Effect | @deva[उष्णं कार्यमस्य] | @deva[उष्णकः] | fever producing heat |
| Effect | @deva[शीतं कार्यमस्य] | @deva[शीतको ज्वरः] | fever producing cold |

When "illness" is not meant, no affixing: @deva[द्वितीयो दिवसो ऽस्य]`,

  '52082': `@deva[प्रायेणान्नं संज्ञायाम्] — The affix @deva[कन्] comes in the sense of "this is the principal food of this occasion" after a word denoting food in the nominative, when the word is a Name.

| Derivation | Result |
|------------|--------|
| @deva[गुडापूपाः प्रायेणान्नमस्या पौर्णमास्याम्] | @deva[गुडापूपिका पौर्णमासी] |

"The Guḍāpūpikā Paurṇamāsī" — that Full-Moon day when sugar cakes are the principal food

Also: @deva[तिलापूपिका], @deva[कृशरिका], @deva[त्रिपुटिका]

**Vārttika:** The affix @deva[इनि] comes after @deva[वटक]: @deva[वटकिनी पौर्णमासी]`,

  '52083': `@deva[कुल्माषादञ्] — The affix @deva[अञ्] comes in the sense of "this is the principal food on this occasion" after @deva[कुल्माष] when a Name.

The @deva[ञ्] causes vṛddhi and accent.

@deva[कुल्माषाः प्रायेणान्नमस्याम्] = @deva[कौल्माषी पौर्णमासी]`,

  '52084': `@deva[श्रोत्रियश्छन्दोऽधीते] — The word @deva[श्रोत्रिय] is irregularly formed, meaning "who has studied the Vedas."

The @deva[न्] in @deva[श्रोत्रियन्] is for accent.

@deva[श्रोत्रियो ब्राह्मणः] — "a Brahmin learned in the Vedas"

The word is either:
1. A condensed expression for @deva[छन्दो ऽधीते], or
2. @deva[छन्दस्] replaced by @deva[श्रोत्र], then affix @deva[घन्]

@note[The form @deva[छान्दसः] (by @deva[अण्] from @ref[4.2.59]) also exists. This sūtra is optional. Some say @deva[श्रोत्रिय] applies only to one learned in the Vedas.]`,

  '52085': `@deva[श्राद्धादिठन्] — The affixes @deva[इनि] (@deva[इन्]) and @deva[ठन्] come in the sense of "this is eaten by him" after @deva[श्राद्ध].

@deva[श्राद्धं भुक्तमनेन] = @deva[श्राद्धी] or @deva[श्राद्धिकः] — "a person who has eaten obsequial food"

@note[This relates to eating on the day of the Śrāddha ceremony, not stale food. Hence: @deva[अद्य भुक्ते श्राद्धे श्वः श्राद्धिक इति माभूत्].]

The word @deva[श्राद्ध] is derived from @deva[श्रद्धा] with affix @deva[ञ] (@ref[5.2.101]). Figuratively, it means the food at that ceremony.`,

  '52086': `@deva[पूर्वाच्च] — The affix @deva[इनि] (@deva[इन्]) comes in the sense of "by whom something was done formerly" after @deva[पूर्व].

The word @deva[अनेन] from the last sūtra is understood. But what verb? @deva[भुक्त] does not come here; we supply a general verb like "doing."

@deva[पूर्वं गतमनेन] = @deva[पूर्वी] — "by whom something was done formerly"

Also: @deva[पूर्वं भुक्तम्], @deva[पीतम्] etc. @deva[अनेन] = @deva[पूर्वी], s. @deva[पूर्विणौ], d. @deva[पूर्विणः], pl.`,

  '52087': `@deva[उपसर्गात्] — The affix @deva[इनि] (@deva[इन्]) comes in the sense of "by whom something is done" after @deva[पूर्व] when another word precedes it.

@deva[कृतपूर्वी कटम्] = @deva[पूर्वं कृतमनेन] — "who formerly made"

@deva[भुक्तपूर्वी ओदनम्] — "who formerly ate rice"

@note[First @deva[कृत] and @deva[पूर्व] are compounded by @ref[2.1.4]; then the affix is added.]

These sūtras give rise to maxims:
- @deva[ग्रहणवता प्रातिपदिकेन तदन्तविधिर्नास्ति] — "A prātipadika denotes only itself, not what ends with it"
- @deva[व्यपदेशिवद्भावो ऽप्रातिपदिकेन] — "The rule of vyapadeśivad-bhāva does not apply to a prātipadika"`,

  '52088': `@deva[इष्टादिभ्यश्च] — The affix @deva[इनि] (@deva[इन्]) comes in the sense of "by him" after @deva[इष्टादि] words.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[इष्ट] | @deva[इष्टी यज्ञे] | who wished, performed sacrifice |
| @deva[पूर्त] | @deva[पूर्ती] | who performed a charitable act |

The words @deva[इष्टिन्], @deva[पूर्त्तिन्] etc. govern locative instead of accusative (see Vārttika under @ref[2.3.36]).

@deva[इष्टादि] class: @deva[इष्ट], @deva[पूर्त], @deva[उपासादित], @deva[निगदित], @deva[परिगदित], @deva[परिवादित], @deva[निकथित], @deva[निपादित], @deva[निपठित], @deva[संकलित], @deva[परिकलित], @deva[संरक्षित], @deva[परिरक्षित], @deva[अर्चित], @deva[गणित], @deva[अवकीर्ण], @deva[आयुक्त], @deva[गृहीत], @deva[आम्नात], @deva[श्रुत], @deva[अधीत], @deva[अवधान]...`,

  '52089': `@deva[परिपन्थिपरिपणौ छन्दस्यप्यवस्थातृसु] — In the Vedas, the words @deva[परिपन्थिन्] and @deva[परिपरिण्] are anomalously formed and mean "an antagonist."

The word @deva[पर्यवस्थातृ] means "adversary, antagonist."

@deva[मा त्वा परिपरिणो विदन् मा त्वा परिपन्थिनो विदन्] (Yaj. Ved. IV.34)

@note[These words are obsolete in secular literature. However, see Gītā III.34.]`,

  '52090': `@deva[अनुपदिनोऽन्वेषी] — The word @deva[अनुपदिन्] is anomalously formed by @deva[इनि], meaning "who goes after, who searches."

@deva[अनुपदी गवाम्] — "going after cows"
@deva[अनुपदी उष्ट्राणाम्] — "searching for camels"`,

  '52091': `@deva[साक्षात्प्रत्यक्षादृष्टौ संज्ञायाम्] — The affix @deva[इनि] comes in the sense of "a spectator, looker-on" after @deva[साक्षात्] when the word is a Name.

@deva[साक्षात् प्रत्यक्षं पश्यति] = @deva[साक्षिन्] — "a witness" (one who sees directly)`,

  '52092': `@deva[अग्नौ] — The affix @deva[इनि] comes in the sense of @deva[मतुप्] after @deva[अग्नि] in the Vedas.

@deva[अग्निर्विद्यते ऽस्य] = @deva[अग्नी] — "possessing fire"

This is a Vedic form.`,

  '52093': `@deva[ओषध्यादिभ्यश्छः] — The affix @deva[छ] (@deva[ईय]) comes in the sense of @deva[मतुप्] after @deva[ओषध्यादि] words.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[ओषधि] | @deva[औषधीयः] | possessing herbs |

@deva[ओषध्यादि] is a class of words taking @deva[छ] in the sense of @deva[मतुप्].`,

  '52094': `@deva[तदस्यास्त्यस्मिन्निति मतुप्] — The affix @deva[मतुप्] comes in the sense of "whose is this" or "in whom this is" (i.e., possession).

This is the general rule for @deva[मतुप्]:
- @deva[तदस्य अस्ति] = "this is his"
- @deva[तदस्मिन् अस्ति] = "this is in him"

| Base | Result | Meaning |
|------|--------|---------|
| @deva[गो] | @deva[गोमान्] | possessing cows |
| @deva[धन] | @deva[धनवान्] | possessing wealth |`,

  '52095': `@deva[तेन रक्तं रागात्] — The affix @deva[मतुप्] (or others with @deva[मतुप्] sense) comes in the sense of "dyed with that" after a word denoting color.

@deva[तेन रक्तम्] = "dyed with that"

| Base | Result | Meaning |
|------|--------|---------|
| @deva[कुसुम्भ] | @deva[कुसुम्भवत्] | dyed with safflower |
| @deva[लाक्षा] | @deva[लाक्षावत्] | dyed with lac |`,

  '52096': `@deva[तदस्यास्त्यस्मिन्निति मतुप्] — This sūtra restates the @deva[मतुप्] sense for subsequent rules. The affixes @deva[इनि], @deva[ठन्], and others coming in the sense of @deva[मतुप्] are governed by this.

@note[The word @deva[अन्यतरस्याम्] "optionally" is understood here, so @deva[मतुप्] comes in the alternative to other affixes.]`,

  '52097': `@deva[अस्त्यर्थेऽण्] — The affix @deva[अण्] comes in the sense of @deva[मतुप्] (possession) in certain contexts.

This provides an alternative to @deva[मतुप्] with the affix @deva[अण्].

| Base | With @deva[अण्] | With @deva[मतुप्] |
|------|---------------|------------------|
| @deva[धन] | @deva[धानः] | @deva[धनवान्] |`,

  '52098': `@deva[प्रादिभ्यो धातुजवत्] — After @deva[प्रादि] (prepositions), derivatives are treated like those from verbal roots.

This extends certain rules to preverb + base combinations.`,

  '52099': `@deva[आगारान्तात्खञ्] — The affix @deva[खञ्] comes in the sense of @deva[मतुप्] after stems ending in @deva[आगार].

| Base | Result |
|------|--------|
| @deva[देवागार] | @deva[देवागारीणः] |
| @deva[अग्न्यागार] | @deva[अग्न्यागारीणः] |

"Possessing a temple/fire-house"`,

  '52100': `@deva[पामादिभ्योऽण्] — The affix @deva[अण्] comes in the sense of @deva[मतुप्] after @deva[पामादि] words.

| Base | Result | Meaning |
|------|--------|---------|
| @deva[पामन्] | @deva[पामः] | having skin disease |

@deva[पामादि] class includes words taking @deva[अण्] in the sense of possession.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.2.51-100). Total: ${Object.keys(vasu).length}`);
