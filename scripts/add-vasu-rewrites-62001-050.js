import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '62001': `@deva[बहुव्रीहौ प्रकृत्या पूर्वपदम्] — In a @deva[बहुव्रीहि] compound, the first member preserves its original accent.

This begins the exceptions to @ref[6.1.223] (compounds are end-acute).

**Examples:**
| Compound | First member accent | Notes |
|----------|---------------------|-------|
| @deva[कार्ष्णोत्तरासङ्गाः] | @deva[कार्ष्ण] — first-acute by @deva[ञित्] @ref[6.1.197] | From @deva[कृष्ण] + @deva[अञ्] |
| @deva[यूपवलजः] | @deva[यूप] — first-acute by @deva[नित्] @ref[6.1.197] | Uṇādi @deva[प] |
| @deva[ब्रह्मचारिपरिस्कन्दः] | @deva[ब्रह्मचारिन्] — end-acute @ref[6.2.139] | Kṛt second member |
| @deva[स्नातकपुत्रः] | @deva[स्नातक] — first-acute @ref[6.1.197] | @deva[कन्] @ref[5.4.29] |
| @deva[मनुष्यनाथः] | @deva[मनुष्य] — svarita @ref[6.1.185] | @deva[यत्] @ref[4.1.161] |

@note[If the first member is entirely @deva[अनुदात्त] (no accent), the general rule @ref[6.1.223] applies: @deva[समभागः] — end-acute.]`,

  '62002': `@deva[तत्पुरुषे तुल्यार्थैस्तृतीयासप्तम्युपमानाव्ययद्वितीयाकृत्याः] — In a @deva[तत्पुरुष], the first member preserves its accent when it is:

| Category | Examples |
|----------|----------|
| 1. Resemblance word | @deva[तुल्यश्वेतः], @deva[सदृक्श्वेतः], @deva[सदृशश्वेतः] |
| 2. Instrumental | @deva[शंकुलाखण्डः], @deva[किरिकाणः] |
| 3. Locative | @deva[अक्षशौण्डः], @deva[पानशौण्डः] |
| 4. Upamāna (standard of comparison) | @deva[शस्त्रीश्यामा], @deva[कुमुदश्येनी], @deva[हंसगद्गदा] |
| 5. Indeclinable | @deva[अब्राह्मणः], @deva[कुब्राह्मणः], @deva[निष्कौशाम्बिः], @deva[अतिखट्वः] |
| 6. Accusative | @deva[मुहूर्त्तसुखम्], @deva[सर्वरात्रकल्याणी] |
| 7. Kṛtya (gerundive) | @deva[भोज्यलवणम्], @deva[पानीयशीतम्], @deva[हरणीयचूर्णम्] |

**Vārtika on indeclinables:**
The rule applies only to compounds formed with @deva[नञ्], @deva[कु], and nipātas. It does not apply to @deva[स्नात्वाकालकः] (end-acute, Mayūravyaṃsakādi class).`,

  '62003': `@deva[वर्णे वर्णानां नैतेन] — In a tatpuruṣa, when a color word compounds with another color word, the first member preserves its accent — except when the first member is @deva[एत].

**Examples preserving accent:**
@deva[कृष्णसारङ्गी], @deva[लोहितसारङ्गी], @deva[कृष्णकल्माषः], @deva[लोहितकल्माषः]

**Exceptions:**
- Not color + color: @deva[परमकृष्णः] — end-acute @ref[6.1.223]
- Not with color: @deva[कृष्णतिलाः] — end-acute
- With @deva[एत]: @deva[कृष्णैतः], @deva[लोहितैतः] — end-acute

Compounding by @ref[2.1.69].`,

  '62004': `@deva[गाधलवणयोः प्रमाणे] — Before @deva[गाध] or @deva[लवण] meaning "measure/mass," the first member preserves its accent.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[शम्बगाधमुदकम्] | Water as deep as a pestle |
| @deva[अरित्रगाधमुदकम्] | Water as deep as an oar |
| @deva[गोलवणम्] | Salt for a cow (measure suitable for a cow) |
| @deva[अश्वलवणम्] | Salt for a horse |

These are genitive tatpuruṣas. The accent indicates the "measure" meaning.

**Without @deva[प्रमाण] sense:**
@deva[परमगाधम्], @deva[परमलवणम्] — end-acute @ref[6.1.223]`,

  '62005': `@deva[दायाद्ये दाये] — Before @deva[दायाद्] "heir," the first member denoting inheritance preserves its accent.

**Examples:**
@deva[विद्यादायादः] — "heir to knowledge"
@deva[धनदायादः] — "heir to wealth"

**Accent sources:**
- @deva[विद्या] — formed by @deva[क्यप्] @ref[3.3.99], end-acute by @ref[3.3.96]
- @deva[धन] — formed by @deva[क्यु], first-acute by @ref[3.1.3]

**Without inheritance meaning:**
@deva[परमदायादः] — end-acute @ref[6.1.223]`,

  '62006': `@deva[विघ्नार्थेषु चिरकृच्छ्रयोः] — Before @deva[चिर] or @deva[कृच्छ्र], the first member preserves its accent when it denotes something experiencing an obstacle.

**Examples:**
@deva[गमनचिरम्], @deva[गमनकृच्छ्रम्] — "delay/difficulty in going"
@deva[व्याहरणचिरम्], @deva[व्याहरणकृच्छ्रम्] — "delay/difficulty in speaking"

These words (@deva[गमन], @deva[व्याहरण]) are formed by @deva[ल्युट्] with @deva[लित्] accent @ref[6.1.193].

The compound expresses that the action is hindered or delayed.

**Without obstacle meaning:**
@deva[मूत्रकृच्छ्रम्] — end-acute (a medical condition, not an obstacle)`,

  '62007': `@deva[अपदेशे पदम्] — Before @deva[पद] meaning "pretext," the first member preserves its accent.

**Examples:**
@deva[मूत्रपदेन प्रस्थितः] — "Gone on the pretext of urinating"
@deva[उच्चारपदेन प्रस्थितः] — "Gone on the pretext of defecating"

@deva[मूत्र] — formed by @deva[ष्ट्रन्] (Uṇādi IV.163), first-acute @ref[6.1.197]
@deva[उच्चार] — formed by @deva[घञ्], end-acute @ref[6.2.144]

**Without "pretext" meaning:**
@deva[विष्णुपदम्] — "Viṣṇu's step" — end-acute @ref[6.1.223]`,

  '62008': `@deva[निवाते वातवरणे] — Before @deva[निवात] meaning "shelter from wind," the first member preserves its accent.

**Examples:**
@deva[कुटीनिवातम्] — "a hut as shelter from wind"
@deva[शमीनिवातम्] — "a śamī tree as shelter"
@deva[कुड्यनिवातम्] — "a wall as shelter"

These are appositional compounds. @deva[निवात] = @deva[वातस्य अभावः] (avyayībhāva) or @deva[निरुद्धो वातो यस्मिन्] (bahuvrīhi).

**Without "wind shelter" meaning:**
@deva[राजनिवाते वसति] — "lives near the king" (@deva[निवात] = vicinity) — end-acute`,

  '62009': `@deva[आनार्तवे शारदे] — Before @deva[शारद] meaning something other than "autumnal," the first member preserves its accent.

**Examples:**
@deva[रज्जुशारदमुदकम्] — "fresh-drawn water" (just drawn by rope)
@deva[दृषत्शारदाः सक्तवः] — "flour fresh from the millstone"

Here @deva[शारद] means "fresh, new" — not related to the autumn season.

**With "autumnal" meaning:**
@deva[परमशारदम्], @deva[उत्तमशारदम्] — "the best autumnal" — end-acute @ref[6.1.223]`,

  '62010': `@deva[जातौ अध्वर्युकषायौ] — Before @deva[अध्वर्यु] or @deva[कषाय] denoting a genus/type, the first member preserves its accent.

**With @deva[अध्वर्यु]:**
@deva[प्राच्याध्वर्युः], @deva[कठाध्वर्युः], @deva[कालापाध्वर्युः] — "Eastern/Kaṭha/Kālāpa type of Adhvaryu priest"

**With @deva[कषाय]:**
@deva[सर्पिर्मण्डकषायम्], @deva[उमापुष्पकषायम्], @deva[दौवारिककषायम्] — decoctions of clarified-butter-cream, umā-flower, door-keeper's (herbs)

**Without "genus" meaning:**
@deva[परमाध्वर्युः], @deva[परमकषायः] — end-acute @ref[6.1.223]`,

  '62011': `@deva[सादृश्ये सदृशप्रतिरूपयोः] — Before @deva[सदृश] or @deva[प्रतिरूप] expressing resemblance, the first member preserves its accent.

**Examples:**
@deva[पितृसदृशः], @deva[मातृसदृशः] — "resembling father/mother"
@deva[पितृप्रतिरूपः], @deva[मातृप्रतिरूपः] — "image of father/mother"

These are genitive tatpuruṣas. @deva[पितृ] and @deva[मातृ] are end-acute (Uṇādi @deva[तृच्]).

Also applies when case-ending is retained: @deva[दास्याः सदृशः], @deva[वृषल्याः सदृशः]

**Without "resemblance" meaning:**
@deva[परमसदृशः], @deva[उत्तमसदृशः] — "most honorable" — end-acute @ref[6.1.223]`,

  '62012': `@deva[द्विगोः प्रमाणे] — Before a @deva[द्विगु] compound denoting "measure," the first member preserves its accent.

**Examples:**
@deva[प्राच्यसप्तसमः] — "an Eastern seven-year-old"
@deva[गान्धारिसप्तसमः] — "a Gāndhāri seven-year-old"

@deva[सप्तसम] = @deva[सप्त समाः प्रमाणमस्य] — the @deva[मात्रच्] affix @ref[5.2.37] is elided.

**Restrictions:**
- "Before dvigu" — @deva[व्रीहिप्रस्थः] excluded (not a dvigu)
- "Denoting measure" — @deva[परमसप्तसमः] excluded`,

  '62013': `@deva[वाणिजे गम्यपण्ययोः] — Before @deva[वाणिज] "trader," the first member preserves its accent when it specifies:
1. The destination (where the trader goes)
2. The merchandise (what the trader sells)

**Destination examples:**
@deva[मद्रवाणिजः], @deva[काश्मीरवाणिजः], @deva[गान्धारिवाणिजः] — "traders who go to Madra/Kashmir/Gandhāra"

**Merchandise examples:**
@deva[गोवाणिजः] — "cow-dealer"
@deva[अश्ववाणिजः] — "horse-dealer"

**Without destination/merchandise meaning:**
@deva[परमवाणिजः], @deva[उत्तमवाणिजः] — end-acute @ref[6.1.223]`,

  '62014': `@deva[मात्रोपज्ञोपक्रमच्छायासु नपुंसके] — The first member preserves its accent before @deva[मात्रा], @deva[उपज्ञा], @deva[उपक्रम], or @deva[छाया] when the compound is neuter.

**With @deva[मात्रा] (= @deva[तुल्य]):**
@deva[भिक्षामात्रं न ददाति] — "doesn't give even alms' worth"
@deva[समुद्रमात्रं न सरोऽपि] — "not even a lake ocean-sized"

**With @deva[उपज्ञा] (discovery/authorship):**
@deva[पाणिनोपज्ञमकालकं व्याकरणम्] — "grammar discovered by Pāṇini"

**With @deva[उपक्रम] (beginning/initiative):**
@deva[आढ्योपक्रमं प्रासादः] — "palace begun by a wealthy person"

**With @deva[छाया] (shadow):**
@deva[इषुच्छायम्], @deva[धनुच्छायम्] — "arrow-shadow," "bow-shadow"

These are neuter by @ref[2.4.21]-@ref[2.4.22]. When not neuter: @deva[कुड्यछाया] @ref[2.4.25].`,

  '62015': `@deva[सुखप्रियौ हितैषिणोः] — Before @deva[सुख] or @deva[प्रिय] meaning "beneficial/delightful," the first member preserves its accent.

**Examples:**
@deva[गमनसुखम्] — "the pleasure of going"
@deva[वचनसुखम्], @deva[व्याहरणसुखम्], @deva[गमनप्रियम्], @deva[वचनप्रियम्]

These are appositional compounds. The words @deva[गमन], @deva[वचन], @deva[व्याहरण] are formed by @deva[ल्युट्] with @deva[लित्] accent @ref[6.1.193].

The sense is that the action denoted by the first member causes pleasure or benefit.

**Without "beneficial" meaning:**
@deva[परमसुखम्], @deva[परमप्रियम्] — end-acute @ref[6.1.223]`,

  '62016': `@deva[ताभ्यां रोचमाने] — Before @deva[सुख] or @deva[प्रिय] meaning "agreeable to/desired by," the first member preserves its accent.

**Examples:**
@deva[ब्राह्मणसुखं पायसम्] — "milk-rice agreeable to brāhmaṇas"
@deva[छात्रप्रियोऽनध्यायः] — "a holiday desired by students"
@deva[कन्याप्रियो मृदङ्गः] — "a drum pleasing to maidens"

**Accent sources:**
- @deva[ब्राह्मण] — end-acute (@deva[अण्])
- @deva[छात्र] — end-acute (@deva[ण] @ref[5.4.62])
- @deva[कन्या] — svarita on final

**Without "agreeable to" meaning:**
@deva[राजसुखम्], @deva[राजप्रियम्] — end-acute`,

  '62017': `@deva[स्वामिनि स्वं] — Before @deva[स्वामिन्] "master," the first member denoting possession preserves its accent.

**Examples:**
@deva[गोस्वामी] — "master of cows"
@deva[अश्वस्वामी] — "master of horses"
@deva[धनस्वामी] — "master of wealth"

**Without possession meaning:**
@deva[परमस्वामी] — end-acute @ref[6.1.223]`,

  '62018': `@deva[पतौ च पतिः] — A first member ending in @deva[पति] meaning "lord/master" preserves its accent.

This applies to words where @deva[पति] is part of the first member itself, expressing "lord of X."

The compound follows the pattern where the first member contains @deva[पति] as a suffix meaning "master" or "lord."`,

  '62019': `@deva[पतिः समास एव] — @deva[पति] preserves the first-member accent only within a compound.

This clarifies that the @deva[पति]-accent rule applies when @deva[पति] itself is part of a compound formation, not when it stands alone.

**Examples:**
Compounds with @deva[पति] as part of the first member retain accent on the element before @deva[पति].`,

  '62020': `@deva[कुत्सितानुकम्पायां च पापे] — The first member preserves its accent when the compound expresses:
1. Reproach/contempt
2. Pity/compassion

Before words meaning "bad/wretched."

**Examples with reproach:**
@deva[ब्राह्मणपापः] — "wretched brāhmaṇa" (contemptuous)

**Examples with pity:**
@deva[ब्राह्मणपापः] — "poor brāhmaṇa" (compassionate)

The first member retains its original accent in both senses.`,

  '62021': `@deva[कालात्] — The first member preserves its accent when it denotes time.

**Examples:**
Time-denoting words as first members in tatpuruṣa compounds retain their original accent.

This applies to compounds where the first member specifies a temporal context.`,

  '62022': `@deva[पूर्वे पूर्वनिपाते] — The first member preserves its accent before @deva[पूर्व] when the sense is "this had been lately..."

**Examples:**
Compounds expressing recent acquisition or occurrence, where @deva[पूर्व] indicates recency, preserve the first-member accent.

This applies to specific temporal tatpuruṣa formations.`,

  '62023': `@deva[आख्याने मृगोर्णायाम्] — Before @deva[आख्यान] "narrative," a word ending in @deva[मृगोर्णा] preserves its accent.

This specialized rule applies to story/narrative compounds with specific first-member patterns.`,

  '62024': `@deva[जातेर्जनपदे] — A word denoting genus/caste preserves its accent before a word denoting a region/country.

**Examples:**
@deva[ब्राह्मणपाञ्चालाः] — "Brāhmaṇas of Pañcāla"

The caste/genus word retains its accent when compounded with a regional designation.`,

  '62025': `@deva[संख्याया विवक्षिते संख्येये] — A numeral preserves its accent when the thing counted is expressed.

**Examples:**
Numerals as first members in compounds retain their accent when the counted object forms the second member.

This applies to definite enumeration compounds.`,

  '62026': `@deva[सप्तमी द्वितीयातृतीयाप्रथमाभ्यो नित्यम्] — The seventh (locative), second (accusative), third (instrumental), and first (nominative) case relations as first members always preserve their accent.

This is a comprehensive rule for case-based tatpuruṣa formations where specific case relationships trigger first-member accent retention.`,

  '62027': `@deva[न क्तेन] — But not before a @deva[क्त]-participle (in the contexts of the previous rule).

This creates an exception: when the second member is a @deva[क्त]-participle, the case-based first-member accent rule doesn't apply.`,

  '62028': `@deva[तत्र] — In that context (i.e., the preceding rule's domain).

This contextual reference ties the current rule to the preceding accent provisions.`,

  '62029': `@deva[समासादाविदं पूर्वपदस्य] — In a compound, from the beginning, this (accent) belongs to the first member.

This restates the principle that in the specified compound types, the first member's original accent is preserved from the start of the compound formation.`,

  '62030': `@deva[न लोके] — Not in ordinary/secular usage.

This restricts certain accent rules to Vedic or technical usage, excluding everyday secular speech.`,

  '62031': `@deva[विंशत्यादिषु बहुषु] — In numerals @deva[विंशति] (twenty) and above, when plural.

This specifies accent behavior for higher numerals in their plural forms.`,

  '62032': `@deva[ऊकालोपश्च] — And there is elision of @deva[ऊक] (the final long vowel).

This phonological rule accompanies certain compound formations involving vowel deletion.`,

  '62033': `@deva[एकस्य च] — And of @deva[एक] (one).

The numeral @deva[एक] follows special accent patterns in compound formations.`,

  '62034': `@deva[द्वितीयातृतीयाचतुर्थ्याः] — The second, third, and fourth (numerals: @deva[द्वि], @deva[त्रि], @deva[चतुर्]).

These numerals have specific accent behaviors in compound formations.`,

  '62035': `@deva[द्वन्द्वे संख्यायाः] — In a @deva[द्वन्द्व] compound, the numeral (first member) preserves its accent.

**Examples:**
@deva[एकादश] — "eleven" (1+10)
@deva[द्वादश] — "twelve" (2+10)
@deva[त्रयोदश] — "thirteen" (3+10)

@deva[एक] — first-acute by @deva[नित्] @ref[6.1.197] (from @deva[इण्] + @deva[कन्], Uṇādi III.43)
@deva[त्रयस्] — end-acute as substitute of @deva[त्रि] @ref[6.3.48]`,

  '62036': `@deva[आचार्योपसर्जनश्चान्तेवासिनि] — In a @deva[द्वन्द्व] of scholar names derived from teachers, the first member retains its accent.

**Examples:**
@deva[आपिशलपाणिनीयाः] — "students of Āpiśala and Pāṇinīya schools"
@deva[पाणिनीयरौढीयाः] — "students of Pāṇinīya and Rauḍhīya schools"

The @deva[आचार्योपसर्जन] "teacher-derived name" qualifies the whole compound — all members must be scholar names derived from teacher names.

**Does not apply to:**
@deva[पाणिनीयदेवदत्तौ] — only first is teacher-derived
@deva[छान्दसवैयाकरणाः] — not teacher-derived names`,

  '62037': `@deva[कार्तकौजपादयश्च] — The @deva[द्वन्द्व] compounds @deva[कार्तकौजप] and others preserve first-member accent.

**Partial list:**
| Compound | Notes |
|----------|-------|
| @deva[कार्तकौजपौ] | Patronymics from Kṛta and Kujapa |
| @deva[सावर्णिमाण्डुकेयौ] | @deva[इञ्] and @deva[ठक्] patronymics |
| @deva[शाकलशुनकाः] | Students of Śākalya and Śaunaka |
| @deva[कठकालापाः] | Students of Kaṭha and Kālāpin |
| @deva[याज्यानुवाक्ये] | @deva[यत्] formations, svarita accent |

This is a @deva[गण] (class) of dvandva compounds with enumerated members preserving first-member accent.`,

  '62038': `@deva[महतो व्रीह्यपराह्णगृष्टीष्वासजाबालभारभारतहैलिहिलरौरवप्रवृद्धेषु] — @deva[महत्] (@deva[महा]) retains its accent before these words: @deva[व्रीहि], @deva[अपराह्ण], @deva[गृष्टि], @deva[इष्वास], @deva[जाबाल], @deva[भार], @deva[भारत], @deva[हैलिहिल], @deva[रौरव], @deva[प्रवृद्ध].

**Examples:**
@deva[महाव्रीहिः], @deva[महापराह्णः], @deva[महागृष्टिः], @deva[महेष्वासः], @deva[महाजाबालः], @deva[महाभारः], @deva[महाभारतः], @deva[महाहैलिहलः], @deva[महारौरवः], @deva[महाप्रवृद्धः]

@deva[महत्] has end-acute (Uṇādi II.84).

@note[By @deva[प्रतिपदोक्त] maxim, this applies to the karmadhāraya compound of @ref[2.1.61], not to genitive tatpuruṣa. Thus @deva[महतो व्रीहिः] = @deva[महद्व्रीहिः] — end-acute @ref[6.1.223].]`,

  '62039': `@deva[वैश्वदेवे च महत्क्षुल्लकयोः] — @deva[महत्] and @deva[क्षुल्लक] retain their accent before @deva[वैश्वदेव].

**Examples:**
@deva[महावैश्वदेवम्] — "the great Vaiśvadeva (offering)"
@deva[क्षुल्लकवैश्वदेवम्] — "the small Vaiśvadeva"

@deva[क्षुल्लक] = @deva[क्षुधं लाति] + diminutive @deva[क] @ref[5.3.73] — end-acute.`,

  '62040': `@deva[उष्ट्रसादिवाम्योः] — @deva[उष्ट्र] "camel" retains its accent before @deva[सादि] and @deva[वामि].

**Examples:**
@deva[उष्ट्रसादि] — "camel rider/trainer"
@deva[उष्ट्रवामि] — "camel driver"

@deva[उष्ट्र] — formed by @deva[ष्ट्रन्] (Uṇādi IV.162), first-acute @ref[6.1.197].

These can be karmadhāraya or genitive compounds.`,

  '62041': `@deva[गोसादसादिसारथिषु] — @deva[गो] "cow" retains its accent before @deva[साद], @deva[सादि], and @deva[सारथि].

**Examples:**
@deva[गोसादः] — "cow settler" (from @deva[गां सादयति] or @deva[गोः सादः])
@deva[गोसादिः] — "cow trainer"
@deva[गोसारथिः] — "cow charioteer"

@deva[साद] and @deva[सादिन्] — kṛt accent is debarred
@deva[सारथि] — samāsa accent @ref[6.1.223] is debarred`,

  '62042': `@deva[कुरुगार्हपतादयश्च] — The first member retains its accent in @deva[कुरुगार्हपत] and similar compounds.

**The list:**
| Compound | Notes |
|----------|-------|
| @deva[कुरुगार्हपतम्] | @deva[कुरूणां गार्हपत]; @deva[कुरु] end-acute |
| @deva[रिक्तगुरुः] | @deva[रिक्त] first-acute or mid-acute @ref[6.1.208] |
| @deva[असूतजरती] | @deva[नञ्] compound, first-acute @ref[6.2.2] |
| @deva[अश्लीलदृढरूपा] | @deva[नञ्] compound |
| @deva[पारेवडबा] | @deva[इव]-compound; @deva[पार] end-acute |
| @deva[तैतिलकद्रूः] | @deva[तैतिल] from @deva[तितिलिन्] + @deva[अण्] |
| @deva[पण्यकम्बलः] | @deva[पण्य] first-acute @ref[6.1.213] — when a name |

**Vārtikas:**
- @deva[वृजिगार्हपतम्] also applies
- @deva[पण्यकम्बलः] is first-acute only as a name (fixed market-blanket); otherwise end-acute

This is the @deva[दासीभारादि] class — tatpuruṣa compounds desiring first-member accent.`,

  '62043': `@deva[चतुर्थी तदर्थार्थबलिहितसुखरक्षितैः] — A dative (4th case) first member retains its accent before words meaning "suited for that purpose."

**Examples:**
@deva[यूपदारु] — "wood for a sacrificial post"
@deva[कुण्डलहिरण्यम्] — "gold for earrings"
@deva[रथदारु] — "wood for a chariot"
@deva[वल्लीहिरण्यम्] — "gold for a bracelet"

@deva[यूप] — first-acute by @deva[नित्] @ref[6.1.197] (Uṇādi III.26-27)
@deva[कुण्डल] — end-acute by @deva[चित्] @ref[6.1.163] (Uṇādi I.108)

**Restriction — "suited for":**
@deva[कुबेरबलिः] — not "suited for," so end-acute

The compound involves material transformed into the first member's product.`,

  '62044': `@deva[अर्थे] — Before @deva[अर्थ] "purpose," the dative first member retains its accent.

**Examples:**
@deva[मात्रर्थम्] — "for mother's sake"
@deva[देवतार्थम्] — "for the deity's sake"
@deva[अतिथ्यर्थम्] — "for a guest's sake"

@deva[मातृ] — end-acute (Uṇādi II.95)
@deva[देवता] — mid-acute by @deva[लित्] @ref[5.4.27]
@deva[अतिथि] — first-acute (@deva[इथिन्] affix)

Unlike @deva[तदर्थ] which means "suited for," @deva[अर्थ] directly means "for the purpose of."`,

  '62045': `@deva[क्ते च] — The dative first member also retains its accent before a @deva[क्त]-participle.

**Examples:**
@deva[गोहितम्] — "done for the cows' benefit"
@deva[मनुष्यहितम्] — "done for humans' benefit"
@deva[अश्वहितम्] — "done for horses' benefit"
@deva[गोरक्षितम्] — "protected for the cows"
@deva[तापसरक्षितं वनम्] — "forest protected for ascetics"

Compounding by @ref[2.1.36]. @deva[गोरक्षितम्] = "given for the cows" — a @deva[सम्प्रदान] dative.`,

  '62046': `@deva[कर्मधारये च निष्ठान्ते] — In a karmadhāraya before a @deva[निष्ठा] (past participle), the non-participle first member retains its accent.

By @deva[प्रतिपदोक्त] maxim, this applies to the participles and nouns of @ref[2.1.59].

**Examples:**
@deva[श्रेणिकृताः] — @deva[श्रेणि] first-acute (Uṇādi @deva[नि] = @deva[नित्], IV.51)
@deva[पूगकृताः] — @deva[पूग] end-acute (@deva[गक्], Uṇādi I.124)
@deva[ऊककृताः] — @deva[ऊक] end-acute @ref[6.2.32]
@deva[निधनकृताः] — @deva[निधन] mid-acute

**Restriction — karmadhāraya:**
@deva[श्रेण्या कृतम्] = @deva[श्रेणिकृतम्] — end-acute @ref[6.1.223] (not karmadhāraya)

**Restriction — non-niṣṭhā first member:**
@deva[कृताकृतम्] — both are participles, so end-acute by @ref[2.1.60]`,

  '62047': `@deva[क्ते द्वितीयायाश्चापक्रमणे] — Before a @deva[क्त]-participle, an accusative first member retains its accent when it doesn't mean separation/departure.

**Examples:**
@deva[कष्टश्रितः] — "reached difficulty" (@deva[कष्ट] end-acute)
@deva[त्रिशकलपतितः] — "fallen into three pieces" (@deva[त्रिशकल] first-acute, bahuvrīhi)
@deva[ग्रामगतः] — "gone to the village" (@deva[ग्राम] first-acute, Uṇādi @deva[मन्])

**Restriction — "not separation":**
@deva[कान्तारातीतः] — "gone beyond the forest" — end-acute (separation meaning)
@deva[योजनातीतः] — "gone beyond a yojana" — end-acute

**Vārtika:**
Doesn't apply when the participle has an upasarga: @deva[सुखप्राप्तः], @deva[दुःखप्राप्तः], @deva[सुखापन्नः], @deva[दुःखापन्नः] — all end-acute @ref[6.2.144].`,

  '62048': `@deva[तृतीयाया कर्मणि] — Before a @deva[क्त]-participle with passive meaning, an instrumental first member retains its accent.

**Examples:**
@deva[अहिहतः] or @deva[अहिहतः] — "killed by a snake" (@deva[अहि] end-acute or first-acute)
@deva[रुद्रहतः] — "slain by Rudra"
@deva[वज्रहतः] — "struck by the thunderbolt"
@deva[महाराजहतः] — "killed by the great king"
@deva[नखनिर्भिन्ना] — "pierced by nails"
@deva[दात्रलूना] — "cut by a sickle"

**Restriction — passive meaning:**
@deva[रथेन यातः] = @deva[रथयातः] — "gone by chariot" — end-acute (active meaning, not passive)`,

  '62049': `@deva[गतिकारकोपपदात्कृत्] — An immediately preceding @deva[गति] retains its accent before a @deva[कृत्]-affix with passive meaning.

**Examples:**
@deva[प्रकृतः], @deva[प्रहृतः] — "done forth," "struck forth"

This overrides:
1. Samāsa end-acute @ref[6.1.223]
2. Indeclinable first-member accent @ref[6.2.2]
3. End-acute by @ref[6.2.139] and @ref[6.2.144]

**Restriction — "immediately preceding":**
@deva[अभ्युद्धृतः], @deva[समुद्धृतः], @deva[समुदाहृतः] — the distant @deva[गति] (@deva[अभि], @deva[सम्]) doesn't preserve accent; only the immediately preceding @deva[उत्] does.

But: @deva[दूरादागतः] — @ref[6.2.144] applies because @deva[दूरात्] + @deva[आगतः] follows @deva[कृद्ग्रहणे गतिकारकपूर्वस्यापि ग्रहणम्].`,

  '62050': `@deva[तादौ नितीति] — An immediately preceding @deva[गति] retains its accent before a @deva[त्]-initial @deva[नित्] kṛt affix — but not before @deva[तुन्].

**Examples:**
@deva[प्रकर्ता] (with @deva[तृन्]) — first-acute on @deva[प्र]
@deva[प्रकर्तुम्] (with @deva[तुमुन्]) — first-acute
@deva[प्रकृतिः] (with @deva[क्तिन्]) — first-acute
@deva[प्रलपिता], @deva[प्रलपितुम्] — first-acute (with @deva[इट्] augment)

This overrides kṛt-affix accent @ref[6.2.139].

**Restriction — "@deva[त्]-initial":**
@deva[प्रजल्पाकः] — end-acute @ref[6.2.139] (@deva[पाकन्] @ref[3.2.155] doesn't begin with @deva[त्])

**Restriction — "@deva[नित्]":**
@deva[प्रकर्ता] (with @deva[तृच्]) — not @deva[नित्], so doesn't apply

**Restriction — "not @deva[तुन्]":**
@deva[आगन्तुः] — end-acute (Uṇādi @deva[तुन्] affix)`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.2.1-50). Total: ${Object.keys(vasu).length}`);
