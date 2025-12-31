import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.4: Luk, ślu, lup (elision) - sūtras 1-30
const newEntries = {
  '24001': `All affixes after @deva[गाङ्] "study" and @deva[कुट्] "be crooked" etc. are treated as @deva[ङित्] (having indicatory @deva[ङ्]), EXCEPT those with indicatory @deva[ञ्] or @deva[ण्].

This affects accent and other operations triggered by @deva[ङित्] status.

The @deva[एकवचन] in the sūtra is a genitive @deva[तत्पुरुष].`,

  '24002': `An affix beginning with augment @deva[इट्] (@ref[7.2.35]) is @deva[ङित्] after @deva[विज्] "fear/move."

**Examples:**
@deva[पाणिपादम्] "hand and foot"
@deva[शिरोग्रीवम्] "head and neck"

These are @deva[द्वन्द्व] compounds in singular (aggregate sense).`,

  '24003': `A @deva[द्वन्द्व] compound of words denoting persons of different Vedic schools (@deva[चरण]), when expressing repetition/recurrence, is SINGULAR.

@deva[चरण] = a Vedic school/branch named after its founder.

**Example:**
@deva[कठकालापम्] "a Kaṭha and a Kālāpa [reciting together]"`,

  '24004': `A @deva[द्वन्द्व] compound of @deva[यजुर्वेद] sacrifices (@deva[क्रतु]) is SINGULAR — provided they are never neuter.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अर्काश्वमेधम्] | "the Arka and Aśvamedha sacrifices" |
| @deva[सायाह्नातिरात्रम्] | "the Sāyāhna and Atirātra sacrifices" |`,

  '24005': `A @deva[द्वन्द्व] compound of subjects studied in consecutive order is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पदकक्रमकम्] | "one who studied pada and krama [texts]" |
| @deva[क्रमजटाघनम्] | "one who studied krama, jaṭā, and ghana" |

The subjects must be adjacent in the traditional order of study.`,

  '24006': `A @deva[द्वन्द्व] compound of words denoting genus (@deva[जाति]) of NON-living things is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[आराशस्त्रि] | "probe and knife" |
| @deva[धानाशष्कुलि] | "fried rice and barley cake" |

NOT for individuals: @deva[नन्दकपाञ्चजन्यौ] "Nandaka and Pāñcajanya" (specific weapons, dual).`,

  '24007': `A @deva[द्वन्द्व] compound of river/country names of DIFFERENT genders (not towns) is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गङ्गाशोणम्] | "the Gaṅgā and Śoṇa [rivers]" |
| @deva[कुरुकुरुक्षेत्रम्] | "the Kuru country and Kurukṣetra" |`,

  '24008': `A @deva[द्वन्द्व] compound of small animals (@deva[क्षुद्रजन्तु]) is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[यूकालिक्षम्] | "louse and nit" |
| @deva[दंशमशकम्] | "gadfly and mosquito" |

@deva[क्षुद्रजन्तु] = very small animals (some say: boneless creatures).`,

  '24009': `A @deva[द्वन्द्व] compound of animals with permanent, natural enmity (@deva[शाश्वतिकविरोध]) is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[मार्जारमूषकम्] | "cat and mouse" |
| @deva[श्वशृगालम्] | "dog and jackal" |
| @deva[अहिनकुलम्] | "snake and mongoose" |`,

  '24010': `A @deva[द्वन्द्व] compound of non-expelled śūdra classes (@deva[अनिर्वासित]) is SINGULAR.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[तक्षायस्करम्] | "carpenter and blacksmith" |
| @deva[रजकतन्तुवायम्] | "washerman and weaver" |

@deva[अनिर्वासित] = not expelled from higher-class communion.`,

  '24011': `@deva[गवाश्व] and similar words are @deva[द्वन्द्व] compounds taking SINGULAR number.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गवाश्वम्] | "cow and horse" |
| @deva[गवाविकम्] | "cow and sheep" |
| @deva[अजाविकम्] | "goat and sheep" |

@deva[गवाश्वादि] class: @deva[गवाश्व], @deva[गवाविक], @deva[गवैडक], @deva[अजाविक], @deva[अजैडक], @deva[कुब्ज], etc.`,

  '24012': `@deva[द्वन्द्व] compounds of trees, wild animals, grasses, grains, condiments, domestic animals, birds, and @deva[अश्ववडव], @deva[पूर्वपर], @deva[अधरोत्तर] are OPTIONALLY singular.

**Examples:**
| Singular | Plural |
|----------|--------|
| @deva[प्लक्षन्यग्रोधम्] | @deva[प्लक्षन्यग्रोधाः] |
| @deva[अश्ववडवम्] | @deva[अश्ववडवाः] |`,

  '24013': `A @deva[द्वन्द्व] compound of contraries (not concrete substances) is OPTIONALLY singular.

**Examples:**
| Singular | Dual | Meaning |
|----------|------|---------|
| @deva[शीतोष्णम्] | @deva[शीतोष्णे] | "cold and heat" |
| @deva[सुखदुःखम्] | @deva[सुखदुःखे] | "pleasure and pain" |
| @deva[जीवितमरणम्] | @deva[जीवितमरणे] | "life and death" |

@deva[विप्रतिषिद्ध] = contraries/opposites.`,

  '24014': `@deva[दधिपयस्] and similar @deva[द्वन्द्व] compounds are NOT singular.

**Examples:**
@deva[दधिपयसी] "curd and milk" (dual)
@deva[सर्पिर्मधुनी] / @deva[मधुसर्पिषी] "ghee and honey" (dual)

This begins the prohibition section, blocking singular where previous sūtras would allow it.`,

  '24015': `A @deva[द्वन्द्व] compound denoting a FIXED number of concrete things is NOT singular.

**Examples:**
@deva[दश दन्तोष्ठाः] "ten [sets of] teeth and lips"
@deva[दश मार्दङ्गिकपाणविकाः] "ten [sets of] mṛdaṅga and paṇavika players"

Compare @ref[2.4.2].`,

  '24016': `A @deva[द्वन्द्व] compound denoting an APPROXIMATE number of concrete things is OPTIONALLY singular.

**Examples:**
| Singular | Plural | Meaning |
|----------|--------|---------|
| @deva[उपदशं दन्तोष्ठम्] | @deva[उपदशा दन्तोष्ठाः] | "about ten [sets of] teeth and lips" |`,

  '24017': `@deva[द्विगु] or @deva[द्वन्द्व] compounds ordained to be singular are always NEUTER.

**Examples:**
@deva[दशगवम्] "aggregate of ten cows"
@deva[पाणिपादम्] "hands and feet"
@deva[शिरोग्रीवम्] "head and neck"

This debars original gender of component words.`,

  '24018': `An @deva[अव्ययीभाव] compound (@ref[2.1.6]) is also NEUTER.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अधिस्त्रि] | "pertaining to a woman" |
| @deva[उपकुमारि] | "near the maiden" |
| @deva[उन्मत्तगङ्गम्] | "along the swelling Gaṅgā" |`,

  '24019': `A @deva[तत्पुरुष] compound (EXCEPT @deva[नञ्]-formed and @deva[कर्मधारय]) becomes NEUTER under conditions stated in following sūtras.

This is an @deva[अधिकार] governing subsequent sūtras about gender.`,

  '24020': `A @deva[तत्पुरुष] compound ending in @deva[कन्था] "town" is NEUTER when it's an appellative (@deva[संज्ञा]) of an Uśīnara town.

**Examples:**
@deva[सोशमिकन्थम्] "the town of Sauśami"
@deva[आह्वरकन्थम्] "the town of Āhvara"

Not for other regions' towns.`,

  '24021': `A @deva[तत्पुरुष] ending in @deva[उपज्ञा] "invention" or @deva[उपक्रम] "commencement" is NEUTER — expressing the starting point of an originally-invented work.

**Example:**
@deva[पाणिन्युपज्ञम् आकालापकं व्याकरणम्] "the Kālāpa grammar originated by Pāṇini"`,

  '24022': `A @deva[तत्पुरुष] ending in @deva[छाया] "shadow" is NEUTER when expressing abundance of the first element.

**Examples:**
@deva[शलभच्छायम्] "a crowd of locusts [darkening the sky]"
@deva[इक्षुच्छायम्] "sugarcane groves [casting shadow]"`,

  '24023': `A @deva[तत्पुरुष] ending in @deva[सभा] "court" is NEUTER when preceded by a synonym of @deva[राजन्] or a non-human being.

**Examples:**
@deva[इन्द्रसभम्] "Indra's court"
@deva[ईश्वरसभम्] "the Lord's court"

But: @deva[राजसभा] "the king's court" (feminine — @deva[राजन्] itself, not synonym).`,

  '24024': `A @deva[तत्पुरुष] ending in @deva[सभा] is NEUTER when meaning "concourse" (not "house").

**Examples:**
@deva[स्त्रीसभम्] "concourse of women"
@deva[दासीसभम्] "concourse of slave-women"

But: @deva[अनाथसभा] "poor-house" (meaning building, feminine).`,

  '24025': `A @deva[तत्पुरुष] (except @deva[नञ्] and @deva[कर्मधारय]) ending in @deva[सेना], @deva[सुरा], @deva[छाया], @deva[शाला], or @deva[निशा] is OPTIONALLY neuter.

**Examples:**
| Neuter | Feminine |
|--------|----------|
| @deva[वाहिनीसेनम्] | @deva[वाहिनीसेना] |
| @deva[मद्यसुरम्] | @deva[मद्यसुरा] |`,

  '24026': `The gender of @deva[द्वन्द्व] and @deva[तत्पुरुष] compounds follows the LAST word.

**Examples (Itaretara Dvandva):**
@deva[कुक्कुटमयूर्याविमे] "those two (fem.) — the cock and peahen"
@deva[मयूरीकुक्कुटाविमौ] "those two (masc.) — the peahen and cock"

Gender matches the final member.`,

  '24027': `The compound @deva[अश्ववडव] "horse and mare" takes the gender of the FIRST word.

This applies when not an aggregate (@ref[2.4.12]); otherwise neuter.

**Examples:**
@deva[अश्ववडवाविमौ] (masculine dual)
@deva[अश्ववडवान्], @deva[अश्ववडवैः] (masculine plural forms)`,

  '24028': `In @deva[छन्दस्], @deva[हेमन्तशिशिरौ] and @deva[अहोरात्रे] take gender of the FIRST word.

**Examples:**
@deva[हेमन्तशिशिरावृतूनां प्रीणामि] (masculine)
@deva[अहोरात्रे इदं ब्रूमः] (neuter, from @deva[अहः])

This debars the general rule @ref[2.4.26].`,

  '24029': `@deva[द्वन्द्व] and @deva[तत्पुरुष] compounds ending in @deva[रात्र] or @deva[अह्न] are MASCULINE.

@deva[रात्र] = @deva[रात्रि] + @deva[अच्] (@ref[5.4.87])
@deva[अह्न] formed by @ref[5.4.88]

These refer to @deva[कृत्] and @deva[समासान्त] affixes.`,

  '24030': `The @deva[तत्पुरुष] word @deva[अपथम्] "bad road" is NEUTER.

**Examples:**
@deva[अपथम् इदम्] "this is a bad road" (neuter)
@deva[अपथानि गाहते मूढः] "the fool roams on wrong roads"

But: @deva[अपथो देशः] "a roadless country" (masculine — @deva[बहुव्रीहि]).`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.4.1-30). Total: ${Object.keys(vasu).length}`);
