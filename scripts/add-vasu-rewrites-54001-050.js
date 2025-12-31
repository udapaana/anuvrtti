import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '54001': `@deva[संख्यापूर्वो द्वीगुर्वुन्लोपश्च पादशतयोः वीप्सायाम्] — The affix @deva[वुन्] comes after stems ending in @deva[पाद] or @deva[शत] when preceded by a numeral, when distributive sense (@deva[वीप्सा]) is meant. The final is elided.

| Expression | Form | Meaning |
|-----------|------|---------|
| @deva[द्वौ द्वौ पादौ] | @deva[द्विपदिकम्] | two pādas each |
| @deva[द्वे द्वे शते] | @deva[द्विशतिकम्] | two hundreds each |

The final @deva[अ] would be elided anyway by @ref[6.4.148], but the repetition of @deva[लोप] indicates this is not that elision (affecting derivation from @deva[द्विगु] compounds).`,

  '54002': `@deva[दण्डव्यवसर्गयोश्च] — @deva[वुन्] also comes after @deva[पाद]/@deva[शत] (preceded by a numeral) when punishment or donation is meant.

@deva[दण्ड] = punishment, fine
@deva[व्यवसर्ग] = gift, donation

| Expression | Form | Meaning |
|-----------|------|---------|
| @deva[द्वौ पादौ दण्डितः] | @deva[द्विपदिकां दण्डितः] | fined two pādas |
| @deva[द्वौ पादौ व्यवसृजति] | @deva[द्विपदिकां व्यवसृजति] | donates two pādas |
| @deva[द्वे शते] | @deva[द्विशतिकाम्] | two hundred (as fine/gift) |

This sūtra shows distributive sense doesn't apply here.`,

  '54003': `@deva[स्थूलादिभ्यः प्रकारवचने कन्] — The affix @deva[कन्] comes after @deva[स्थूल] etc. in the sense of "kind" or "manner" (@deva[प्रकार]).

This supersedes @deva[जातीयर्] (@ref[5.3.69]).

| Base | + @deva[कन्] | Meaning |
|------|------------|---------|
| @deva[स्थूल] | @deva[स्थूलकः] | bulky kind |
| @deva[अणु] | @deva[अणुकः] | minute kind |
| @deva[माष] | @deva[माषकः] | bean-like kind |

@note[Vārttika: @deva[चंचत्] and @deva[बृहत्] should be added: @deva[चंचत्कः], @deva[बृहत्कः]. Or per another reading: @deva[चंचकः], @deva[बृहकः] (with vowel shortening by @ref[7.4.13]).]`,

  '54004': `@deva[क्तान्ता अनत्यन्तगत्याम्] — The affix @deva[कन्] comes after participles ending in @deva[क्त] when the action is NOT fully completed.

@deva[अनत्यन्तगति] = incomplete, not fully accomplished

| Base | + @deva[कन्] | Meaning |
|------|------------|---------|
| @deva[भिन्न] | @deva[भिन्नकः] | not yet wholly divided |
| @deva[छिन्न] | @deva[छिन्नकः] | not yet wholly cut |

When fully completed: @deva[भिन्नम्] "totally divided," @deva[छिन्नम्] "totally cut" (no @deva[कन्]).`,

  '54005': `@deva[न सामिवचने] — @deva[कन्] is NOT added when the participle is preceded by a word meaning "half."

When @deva[सामि] or any synonym is compounded with a @deva[क्त]-participle, @deva[कन्] doesn't apply (the "half" already shows incompleteness).

| Compound | Meaning |
|----------|---------|
| @deva[सामिकृतम्] | half-done |
| @deva[सामिभुक्तम्] | half-eaten |
| @deva[अर्धकृतम्] | half-done |
| @deva[नेमकृतम्] | half-done |

These already convey incompleteness without @deva[कन्].`,

  '54006': `@deva[आच्छादने बृहतः कन्] — @deva[कन्] comes after @deva[बृहती] when it means an article of dress.

@deva[बृहती] + @deva[कन्] = @deva[बृहतिका] (@ref[7.4.13] shortens the vowel) — an upper garment, mantle (@deva[प्रावार])

When not dress: @deva[बृहती छन्दः] — "the Bṛhatī meter."`,

  '54007': `@deva[अषडक्षाशितंगुअलंकर्मालंपुरुषाध्यधीभ्यः खः] — The affix @deva[ख] (svārtha) comes after @deva[अषडक्ष], @deva[आशितंगु], @deva[अलंकर्म], @deva[अलंपुरुष], and stems ending in @deva[अधि].

| Base | + @deva[ख] | Meaning |
|------|----------|---------|
| @deva[अषडक्ष] | @deva[अषडक्षीणम्] | secret known by only two (not six eyes) |
| @deva[आशितंगु] | @deva[आशितंगवीनम्] | forest with trees whose branches are eaten |
| @deva[अलंकर्म] | @deva[अलंकर्मीणः] | competent for work |
| @deva[अलंपुरुष] | @deva[अलंपुरुषीणः] | competent man |`,

  '54008': `@deva[अञ्चेर्वा स्त्रियामदिग्वचने] — @deva[ख] optionally comes after stems ending in @deva[अञ्च्] when feminine and NOT denoting direction.

| Base | With @deva[ख] | Without |
|------|-------------|---------|
| @deva[प्राच्] | @deva[प्राचीनम्] | @deva[प्राक्] |
| @deva[अर्वाच्] | @deva[अर्वाचीनम्] | @deva[अर्वाक्] |

Meaning: "old," "new"

Why "not direction"? → @deva[प्राची दिक्] "eastern region" (no @deva[ख])
Why "feminine"? → Other genders take @deva[ख]: @deva[प्राचीना ब्राह्मणी], @deva[अर्वाचीना शिखा]`,

  '54009': `@deva[जात्यन्ते बन्धौ छः] — The affix @deva[छ] (= @deva[ईय]) comes after stems ending in @deva[जाति] when appropriateness (@deva[बन्धु]) is meant.

@deva[बन्धु] = that which distinguishes or regulates (the substratum of genus)

| Compound | + @deva[छ] | Meaning |
|----------|----------|---------|
| @deva[ब्राह्मणजाति] | @deva[ब्राह्मणजातीयः] | appropriate to a brāhmaṇa |
| @deva[क्षत्रियजाति] | @deva[क्षत्रियजातीयः] | appropriate to a kṣatriya |
| @deva[वैश्यजाति] | @deva[वैश्यजातीयः] | appropriate to a vaiśya |

When not "appropriateness": @deva[ब्राह्मणजातिः शोभना] — "the brāhmaṇa caste is beautiful."`,

  '54010': `@deva[सस्थानेन वा छः] — @deva[छ] optionally comes after stems ending in @deva[स्थान] when the meaning is "equal to."

@deva[सस्थान] = @deva[समानं स्थानम् अस्य] — "whose place is the same," i.e., equal

| Compound | With @deva[छ] | Without |
|----------|-------------|---------|
| @deva[पितृस्थान] | @deva[पितृस्थानीयः] | @deva[पितृस्थानः] |
| @deva[मातृस्थान] | @deva[मातृस्थानीयः] | @deva[मातृस्थानः] |
| @deva[राजस्थान] | @deva[राजस्थानीयः] | @deva[राजस्थानः] |

"One who occupies the position of a father/mother/king"

When not "equal to": @deva[गोस्थानम्] "cowshed," @deva[अश्वस्थानम्] "stable."`,

  '54011': `@deva[किमेत्तिङव्ययघादाम् आमुः] — The affix @deva[आम्] is added to @deva[तरप्]/@deva[तमप्] when these come after:
- @deva[किम्]
- Words ending in @deva[ए]
- Finite verbs (@deva[तिङ्])
- Indeclinables (@deva[अव्यय])

...but NOT when the excess belongs to a substance.

| Base + @deva[तर]/@deva[तम] | + @deva[आम्] |
|---------------------------|------------|
| @deva[उच्चतर] | @deva[उच्चतराम्] (more high — adverb) |
| @deva[प्रतरम्] | (more forth) |
| @deva[पचतितमाम्] | (cooks most — verb) |

This applies to adverbs, not adjectives (which modify substances).`,

  '54012': `@deva[अमु छन्दसि च] — In the Vedas, @deva[अम्] (and @deva[आम्]) also comes after the above when used adverbially.

@deva[प्रतरम्] or @deva[प्रतराम्] — more forth

Example: @deva[प्रतरम् नयामः] or @deva[प्रतराम् वस्यः]

Words ending in @deva[आम्] or @deva[अम्] are indeclinables (included in @deva[स्वरादि], @ref[1.1.37]).`,

  '54013': `@deva[अनुगादिनः ठक्] — @deva[ठक्] comes after @deva[अनुगादिन्] without changing sense.

@deva[आनुगादिकः] = @deva[अनुगादिन्] — one who repeats, who echoes back`,

  '54014': `@deva[णजः स्त्रियाम्] — The affix @deva[अण्] comes after stems ending in @deva[णच्] when feminine.

By @ref[3.3.43], @deva[णच्] is added to express reciprocity. @deva[अञ्] (svārtha) comes after such words when the thing denoted is feminine.

| Base | + @deva[अञ्] |
|------|------------|
| @deva[व्यावक्रोशी] | @deva[व्यावक्रोशी वर्तते] |
| @deva[व्यावहासी] | @deva[व्यावहासी वर्तते] |`,

  '54015': `@deva[इनुण्] — The affix @deva[अण्] comes after stems ending in @deva[इनुण्].

By @ref[3.3.44], @deva[इनुण्] expresses a condition from universal cooperation. Words with @deva[इनुण्] require @deva[अण्] to become complete.

| Base | + @deva[अण्] |
|------|------------|
| @deva[सांराविण] | @deva[सांराविणं वर्तते] |
| @deva[सांकूटिन] | @deva[सांकूटिनं वर्तते] |`,

  '54016': `@deva[मत्स्ये विसारिणः] — @deva[अण्] comes after @deva[विसारिन्] when meaning "fish."

@deva[वैसारिणः] = fish (one that glides)

When not "fish": @deva[विसारी देवदत्तः] — "Devadatta who is gliding out."`,

  '54017': `@deva[संख्यायाः क्रियाभ्यावृत्तिगणने कृत्वसुच्] — @deva[कृत्वसुच्] comes after a numeral to count repetition of an action.

@deva[अभ्यावृत्ति] = repetition, again and again

| Numeral | + @deva[कृत्वसुच्] | Meaning |
|---------|-----------------|---------|
| @deva[पञ्चन्] | @deva[पञ्चकृत्वः] | five times |
| @deva[सप्तन्] | @deva[सप्तकृत्वः] | seven times |

Example: @deva[पञ्चकृत्वो भुक्तम्] — "he ate five times"

Why "after numeral"? → @deva[भूरीन् वारान् भुङ्क्ते] "eats many times" (no @deva[कृत्वसुच्] after @deva[भूरि]).`,

  '54018': `@deva[द्वित्रिचतुर्भ्यः सुच्] — @deva[सुच्] (realized as @deva[स्]) comes after @deva[द्वि], @deva[त्रि], @deva[चतुर्] to count action repetition.

This supersedes @deva[कृत्वसुच्].

| Numeral | + @deva[सुच्] | Example |
|---------|-------------|---------|
| @deva[द्वि] | @deva[द्विस्] | @deva[द्विर्भुङ्क्ते] — eats twice |
| @deva[त्रि] | @deva[त्रिस्] | @deva[त्रिर्भुङ्क्ते] — eats thrice |
| @deva[चतुर्] | @deva[चतुः] (@ref[8.2.24]) | @deva[चतुर्भुङ्क्ते] — eats four times |

The @deva[च्] of @deva[सुच्] makes udātta fall on last syllable, distinguishing @deva[चतुर्] (four times) from @deva[चतुर्] (four).`,

  '54019': `@deva[एकस्य च सकृत्] — @deva[सकृत्] substitutes for @deva[एक] before @deva[सुच्] when counting action.

@deva[सकृद्भुङ्क्ते] — "he eats once"
@deva[सकृद् अधीते] — "he studies once"

The @deva[स्] of @deva[सुच्] is elided by @ref[8.2.23].

"Repetition" being impossible for "once," only the action is counted (not @deva[अभ्यावृत्ति]).

Not here: @deva[एकः पाकः] (against usage).`,

  '54020': `@deva[बहोर्धाऽविप्रकृष्टे] — @deva[धा] optionally comes after @deva[बहु] to count repeated action when NOT remote in time.

@deva[अविप्रकृष्ट] = not remote

| Time | Form | Example |
|------|------|---------|
| Short period | @deva[बहुधा] | @deva[बहुधा दिवसस्य भुङ्क्ते] — eats many times a day |
| Long period | @deva[बहुकृत्वः] | @deva[बहुकृत्वो मासस्य भुङ्क्ते] — eats many times in a month |

In the alternative, @deva[कृत्वसुच्] also applies.`,

  '54021': `@deva[तत्प्रकृतवचने मयट्] — The affix @deva[मयट्] (realized as @deva[मय], f. @deva[ई]) comes after a word in the nominative when the meaning is "made thereof" or "subsisting therein."

@deva[प्रकृत] = made of, abounding in

| Base | + @deva[मयट्] | Meaning |
|------|-------------|---------|
| @deva[हिरण्य] | @deva[हिरण्यमयम्] | made of gold |
| @deva[अन्न] | @deva[अन्नमयः यज्ञः] | sacrifice abounding in food |
| @deva[तृण] | @deva[तृणमयम्] | made of grass |`,

  '54022': `@deva[प्राचुर्ये समूहार्थाश्च] — When the substance is a multitude, affixes expressing "collection" (@ref[4.2.37] etc.) may also be used to mean "made of" or "abounding in."

By @deva[च], @deva[मयट्] also applies.

| Expression | With collection affix | With @deva[मयट्] |
|-----------|----------------------|-----------------|
| @deva[मोदकाः प्रकृताः] | @deva[मौदकिकम्] (@ref[4.2.47]) | @deva[मोदकमयम्] |
| @deva[शष्कुल्यः] | @deva[शाष्कुलिकम्] | @deva[शष्कुलीमयम्] |`,

  '54023': `@deva[अनन्तावसथेतिहभेषजाञ्ञ्यः] — @deva[ञ्य] comes without changing sense after @deva[अनन्ता], @deva[आवसथ], @deva[इतिह], and @deva[भेषजा].

| Base | + @deva[ञ्य] | Meaning |
|------|------------|---------|
| @deva[अनन्त] | @deva[आनन्त्यम्] | = @deva[अनन्तः] (endless) |
| @deva[आवसथ] | @deva[आवसथ्यम्] | = dwelling, fire sanctuary |
| @deva[इति ह] | @deva[ऐतिह्यम्] | traditional account |
| @deva[भेषज] | @deva[भैषज्यम्] | = medicine |

@deva[इति ह] means "tradition": @deva[इति ह स्म उपाध्यायाः कथयन्ति] — "thus the teachers relate."`,

  '54024': `@deva[देवतान्ते चतुर्थ्यां तादर्थ्ये यत्] — The affix @deva[यत्] comes after stems ending in @deva[देवता] when in dative construction and the meaning is "appointed for."

@deva[तादर्थ्य] = for the sake of that

| Compound | + @deva[यत्] | Meaning |
|----------|------------|---------|
| @deva[अग्निदेवता] | @deva[अग्निदेवत्यम्] | sacred to Agni |
| @deva[पितृदेवता] | @deva[पितृदेवत्यम्] | sacred to the Fathers |
| @deva[वायुदेवता] | @deva[वायुदेवत्यम्] | sacred to Vāyu |`,

  '54025': `@deva[पादार्घाच्च] — @deva[यत्] comes after @deva[पाद] and @deva[अर्घ] in dative construction when meaning "for the purpose of."

| Base | + @deva[यत्] | Meaning |
|------|------------|---------|
| @deva[पाद] | @deva[पाद्यम्] | water for washing feet |
| @deva[अर्घ] | @deva[अर्घ्यम्] | offering for a guest |

Accent by @ref[6.1.213]: udātta on first syllable.

@note[@deva[च] implies other words also take @deva[यत्]: @deva[छन्दस्य], @deva[वसु], etc.]`,

  '54026': `@deva[अतिथेर्ञ्यः] — @deva[ञ्य] comes after @deva[अतिथि] in dative construction meaning "for the purpose of."

@deva[अतिथये इदम्] = @deva[आतिथ्यम्] — hospitality, that which is for the guest`,

  '54027': `@deva[देवस्य च तल्] — @deva[तल्] comes after @deva[देव] without change of sense.

@deva[देवता] = @deva[देवः] — deity

This word is always feminine (a svārthika derivative doesn't always follow the gender of its primitive).`,

  '54028': `@deva[अवेः कः] — @deva[क] comes after @deva[अवि] without change of sense.

@deva[अविकः] = @deva[अविः] — sheep`,

  '54029': `@deva[यावादिभ्यः कन्] — @deva[कन्] comes after @deva[याव] etc. without changing sense.

| Base | + @deva[कन्] |
|------|------------|
| @deva[याव] | @deva[यावकः] = @deva[यावः] (barley) |
| @deva[मणि] | @deva[मणिकः] = @deva[मणिः] (gem) |

The @deva[यावादि] list: @deva[याव], @deva[मणि], @deva[अस्थि], @deva[तालु], @deva[जानु], @deva[लान्द्र], @deva[पीत], @deva[स्तम्ब], @deva[ऋतु] (in @deva[उष्ण]/शीत), @deva[पशु] (in @deva[लून]/विपात), @deva[अणु] (in @deva[निपुण]), @deva[पुत्र] (artificial), @deva[स्नात] (Veda completion), @deva[शून्य] (empty), @deva[दान] (contemptible), @deva[तनु] (thread), @deva[ईयस्], @deva[ज्ञात], @deva[अज्ञात], toys for girls, @deva[चण्ड]...`,

  '54030': `@deva[लोहितान्मणौ] — @deva[कन्] comes after @deva[लोहित] when it means a precious stone.

@deva[लोहितकः] = @deva[लोहितः] — ruby

When not precious stone: @deva[लोहितः] "red."`,

  '54031': `@deva[अनित्ये वर्णे] — @deva[कन्] comes after @deva[लोहित] when it means non-permanent color.

| Expression | Meaning |
|-----------|---------|
| @deva[लोहितकः कोपेन] | red with anger (temporary) |
| @deva[लोहितकः पीडनेन] | red from pressure (temporary) |

When permanent: @deva[लोहितो गौः] "red cow," @deva[लोहितं रुधिरम्] "red blood."

@note[Vārttika: Derivative may not follow primitive gender: @deva[लोहितिका कोपेन] or @deva[लोहिनिका कोपेन].]`,

  '54032': `@deva[रक्ते च] — @deva[कन्] comes after @deva[लोहित] when meaning "dyed red."

| Expression | Meaning |
|-----------|---------|
| @deva[लोहितकः कम्बलः] | red-dyed blanket |
| @deva[लोहितकः पटः] | red-dyed cloth |
| @deva[लोहितिका शाटी] | red-dyed garment (f.) |`,

  '54033': `@deva[कालस्य च] — @deva[कन्] comes after @deva[काल] when meaning non-permanent color or dyed.

| Expression | Meaning |
|-----------|---------|
| @deva[कालकं मुखम् वैलक्ष्येण] | face black with shame |
| @deva[कालकः पटः] | cloth dyed blue-black |
| @deva[कालिका शाटी] | blue-black garment (f.) |`,

  '54034': `@deva[विनयादिभ्यष्ठक्] — @deva[ठक्] comes after @deva[विनय] etc. without changing sense.

| Base | + @deva[ठक्] |
|------|------------|
| @deva[विनय] | @deva[वैनयिकः] |
| @deva[समय] | @deva[सामयिकः] |
| @deva[उपाय] | @deva[औपयिकः] (vowel shortened) |
| @deva[अकस्मात्] | @deva[आकस्मिकः] (read as @deva[अकस्माद्]) |

The @deva[विनयादि] list: @deva[विनय], @deva[समय], @deva[उपाय], @deva[संप्रति], @deva[संमति], @deva[कथंचित्], @deva[अकस्मात्], @deva[समाचार], @deva[उपचार], @deva[समयाचार], @deva[व्यवहार]...`,

  '54035': `@deva[व्याहृतार्थे वाचः] — @deva[ठक्] comes after @deva[वाच्] when it means the message spoken by another.

@deva[व्याहृत] = declared, expressed (what was spoken by another, carried as tidings)

| Expression | Meaning |
|-----------|---------|
| @deva[वाचिकं कथयति] | he relates the verbal message |
| @deva[वाचिकं रुद्धे] | (message) stopped |

When not message: @deva[मधुरा वाक् देवदत्तस्य] — "Devadatta's speech is sweet."`,

  '54036': `@deva[तद्युक्ताच्छेषे कर्मणोऽण्] — @deva[अण्] comes after @deva[कर्मन्] when it means an occupation connected therewith (commission).

@deva[कार्मणम्] = occupation of a commission agent

@note[Vārttika: In Vedas, @deva[अण्] after @deva[कुलाल], @deva[वरुड], @deva[निषाद], @deva[कर्मार], @deva[चण्डाल], @deva[मित्र], @deva[अमित्र]: @deva[कौलालः], @deva[वारुडः], @deva[नैषादः], @deva[कार्मारः], @deva[चाण्डालः], @deva[मैत्रः], @deva[आमित्रः].]`,

  '54037': `@deva[ओषधेरजातौ] — @deva[अण्] comes after @deva[ओषधि] when it does NOT mean a species.

| Expression | Meaning |
|-----------|---------|
| @deva[औषधं पिबति] | he drinks medicine |
| @deva[औषधं ददाति] | he gives medicine |

When meaning species: @deva[ओषधयः क्षेत्रे रूढा भवन्ति] — "herbs grow in the field."`,

  '54038': `@deva[प्रज्ञादिभ्योऽण्] — @deva[अण्] comes after @deva[प्रज्ञ] etc. without changing sense.

@deva[प्राज्ञः] = @deva[प्रज्ञः] — wise person (f. @deva[प्राज्ञी])

This differs from @deva[प्राज्ञः] (f. @deva[प्राज्ञा]) from @deva[प्रज्ञा] + @deva[ण] (@ref[5.2.101], matvarthīya sense).

The @deva[प्रज्ञ] here comes from @deva[प्रजानाति] = "one who knows fully."`,

  '54039': `@deva[मृदस्तिकन्] — @deva[तिकन्] comes after @deva[मृद्] without change of sense.

@deva[मृत्तिका] = @deva[मृद्] — mud, clay

This is optional (like many svārthika affixes listed from @ref[5.4.7]).`,

  '54040': `@deva[प्रशंसायां स स्नौ] — @deva[स] and @deva[स्न] come after @deva[मृद्] when meaning "excellence."

This supersedes @deva[रूपप्] (@ref[5.3.66]).

@deva[प्रशस्ता मृद्] = @deva[मृत्सा] or @deva[मृत्स्ना] — excellent mud/clay

These are nitya (invariable): whenever superiority is expressed, these affixes must be used.`,

  '54041': `@deva[वृकज्येष्ठयोस्तिल्तातिलौ छन्दसि] — In the Vedas, @deva[तिल्] and @deva[तातिल्] come after @deva[वृक] and @deva[ज्येष्ठ] when excellence is meant.

This supersedes @deva[रूपप्] (@ref[5.3.66]).

| Base | Forms |
|------|-------|
| @deva[वृक] | @deva[वृकतिः], @deva[वृकतातिः] |
| @deva[ज्येष्ठ] | @deva[ज्येष्ठतातिः] |

Ṛgveda II.34.9: @deva[यो नो मरुतो वृकतातिमर्त्यः]`,

  '54042': `@deva[प्रमाणे च कारके शस् वा] — @deva[शस्] optionally comes after words meaning "much" or "little" when used as a kāraka in agreement with a verb.

No specific kāraka mentioned, so all cases apply.

| Expression | With @deva[शस्] | Meaning |
|-----------|---------------|---------|
| @deva[बहूनि ददाति] | @deva[बहुशो ददाति] | gives much |
| @deva[बहुभिर् ददाति] | @deva[बहुशो ददाति] | gives with much |
| @deva[अल्पं ददाति] | @deva[अल्पशो ददाति] | gives little |

Why "much/little"? → @deva[गां ददाति] (no @deva[शस्])
Why "kāraka"? → @deva[बहूनां स्वामी] "lord of many" (not kāraka)`,

  '54043': `@deva[वीप्सायां संख्यायाः पणादेर्एकवचनस्य च] — @deva[शस्] optionally comes after numerals and after coin-unit words (singular) when distributive sense is meant.

| Expression | With @deva[शस्] | Meaning |
|-----------|---------------|---------|
| @deva[द्वौ द्वौ मोदकौ ददाति] | @deva[द्विशो मोदकौ ददाति] | gives two sweetmeats to each |
| @deva[त्रीन् त्रीन्] | @deva[त्रिशः] | three each |
| @deva[कार्षापणं कार्षापणम्] | @deva[कार्षापणशः] | one kārṣāpaṇa to each |
| @deva[माषं माषम्] | @deva[माषशः] | one māṣa to each |`,

  '54044': `@deva[प्रतियोगे पञ्चम्यास्तसिः] — @deva[तसि] comes after the ablative ordained by the karmapravacānīya @deva[प्रति] (@ref[2.3.11]).

| Expression | With @deva[तसि] |
|-----------|----------------|
| @deva[प्रद्युम्नः वासुदेवात् प्रति] | @deva[वासुदेवतः प्रति] |
| @deva[अभिमन्युः अर्जुनात् प्रति] | @deva[अर्जुनतः प्रति] |

This is optional (regular forms @deva[वासुदेवात्] etc. also valid).

@note[Vārttika: @deva[तसि] after @deva[आदि] etc.: @deva[आदितः], @deva[मध्यतः], @deva[पार्श्वतः], @deva[पृष्ठतः]. This is an ākṛtigaṇa.]`,

  '54045': `@deva[अपादाने चाहीयरुहोः] — @deva[तसि] also comes after the ablative when the roots are @deva[ही] (= @deva[हा]) or @deva[रुह्] and the action separates from that ablative.

| Expression | With @deva[तसि] |
|-----------|----------------|
| @deva[वृक्षात् हीयते] | @deva[वृक्षतो हीयते] — falls from tree |
| @deva[वृक्षात् रोहति] | @deva[वृक्षतो रोहति] — grows from tree |

Condition: the action must separate from the ablative source.`,

  '54046': `@deva[प्रातिपदिकात् स्वार्थे छन्दसि] — In the Vedas, @deva[तसि] comes after any prātipadika (nominal stem) in its own sense.

Examples: @deva[अवरतः], @deva[मध्यतः], @deva[प्रातितः], @deva[हस्ततः], @deva[अग्रतः], @deva[पूर्वतः], @deva[उत्तरतः]

These are Vedic usages extending @deva[तसि] beyond the grammatical conditions of previous sūtras.`,

  '54047': `@deva[दिवस्तसिल्] — @deva[तसिल्] comes after @deva[दिव्] in its own sense.

@deva[दिव्] + @deva[तसिल्] = @deva[दिवस्] + @deva[तस्] = @deva[दिवितः] — from heaven

The @deva[ल्] is for accent (@ref[6.1.167]).`,

  '54048': `@deva[अव्ययादाप्सुपः] — After an indeclinable, the case-affix (@deva[सुप्]) becomes @deva[आप्].

This applies to certain contexts where indeclinables are followed by case endings that become @deva[आप्].`,

  '54049': `@deva[अञ्चतेः] — @deva[आप्] also comes after @deva[अञ्चति] (forms of @deva[अञ्च्]).

This extends the previous rule to verbal forms of @deva[अञ्च्].`,

  '54050': `@deva[समासे] — In a compound, @deva[आप्] comes (after indeclinables and @deva[अञ्चति] forms).

This specifies that the @deva[आप्] substitution occurs in compound contexts.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.4.1-50). Total: ${Object.keys(vasu).length}`);
