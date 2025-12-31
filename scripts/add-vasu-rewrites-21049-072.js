import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.1: Samāsa - sūtras 49-72
const newEntries = {
  '21049': `A case-inflected word denoting a prior action (@deva[पूर्वकाल]), or the words @deva[एक] "one," @deva[सर्व] "all," @deva[जरत्] "old," @deva[पुराण] "ancient," @deva[नव] "new," or @deva[केवल] "only" — compounds with a correlated same-case word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[स्नातानुलिप्तः] | "anointed after bathing" |
| @deva[एकब्राह्मणः] | "only one brāhmaṇa" |
| @deva[सर्वब्राह्मणाः] | "all brāhmaṇas" |
| @deva[जरद्गौः] | "old cow" |
| @deva[पुराणगोधूमाः] | "old wheat" |
| @deva[नववस्त्रम्] | "new cloth" |`,

  '21050': `A word denoting direction or number (@deva[संख्या]) compounds with a same-case word when the compound is a proper name (@deva[संज्ञा]), forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पूर्वेषुकामशमी] | "Iṣukāmaśamī-in-the-east" (place name) |
| @deva[अपरेषुकामशमी] | "Iṣukāmaśamī-in-the-west" |
| @deva[पञ्चपाण्डवाः] | "the Five Pāṇḍavas" (name) |`,

  '21051': `A word denoting direction or number compounds with a same-case word when:
1. The sense of a @deva[तद्धित] affix is implied, OR
2. An additional member follows (@deva[उत्तरपद]), OR
3. An aggregate is expressed

forming @deva[तत्पुरुष].

**Taddhitārtha example:**
@deva[पूर्वशालाः] + @deva[ठञ्] → @deva[पौर्वशालः] "one from the eastern halls"

**Uttarapada example:**
@deva[पञ्चगवधनः] "possessing five-cow wealth"

**Samāhāra example:**
@deva[पञ्चगवम्] "an aggregate of five cows"`,

  '21052': `A compound whose first member is a numeral, formed under the conditions of the previous sūtra, is called @deva[द्विगु].

The @deva[द्विगु] applies when expressing:
1. Taddhitārtha: @deva[पञ्चकपालः] "offering prepared in five cups"
2. Uttarapada: @deva[पञ्चनखः] "five-nailed"
3. Samāhāra: @deva[पञ्चगवम्] "aggregate of five cows"

| Example | Meaning |
|---------|---------|
| @deva[दशकपालः] | "prepared in ten cups" |
| @deva[त्रिफला] | "three-fruit (aggregate)" |`,

  '21053': `Case-inflected words expressing vileness compound with words expressing contempt to form @deva[तत्पुरुष].

**Example:**
@deva[वैयाकरणसूचि] "a contemptible grammarian"

Neither grammar nor the grammarian is inherently contemptible. But when someone studies grammar and remains ignorant, that specific person becomes contemptible. The compound expresses that particular person.`,

  '21054': `@deva[पाप] "sinful" and @deva[अणक] "insignificant" compound with words of contempt to form @deva[तत्पुरुष], standing FIRST in the compound.

By the previous sūtra, they would stand last; this sūtra reverses that.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पापनापितः] | "wicked barber" |
| @deva[अणकनापितः] | "insignificant barber" |

This ordering is per @ref[1.2.43] and @ref[2.2.30].`,

  '21055': `Words denoting objects of comparison (@deva[उपमान]) compound with words denoting what is compared (@deva[उपमेय]) by reason of a shared quality (@deva[सामान्य]), forming @deva[तत्पुरुष].

**Example:**
@deva[घनश्यामः कृष्णः] "cloud-dark Kṛṣṇa"

| Component | Role |
|-----------|------|
| @deva[घन] (cloud) | upamāna (standard) |
| @deva[कृष्ण] | upameya (compared) |
| @deva[श्याम] (darkness) | sāmānya (shared quality) |`,

  '21056': `A word denoting the subject of comparison compounds with @deva[व्याघ्र] "tiger" etc. (the standard) to form @deva[तत्पुरुष] — provided no word expressing the shared quality is used.

This reverses the normal order from the previous sūtra.

**Example:**
@deva[पुरुषव्याघ्रः] "a tiger of a man" (= a fierce man)

Here @deva[पुरुष] (upameya) stands first; @deva[व्याघ्र] (upamāna) stands last.`,

  '21057': `A qualifier (@deva[विशेषण]) variously (@deva[बहुलम्]) compounds with what it qualifies (@deva[विशेष्य]) when in the same case, forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[नीलोत्पलम्] | "blue lotus" |
| @deva[रक्तोत्पलम्] | "red lotus" |
| @deva[महाराजः] | "great king" |

The @deva[बहुलम्] indicates optionality and general relaxation of conditions.`,

  '21058': `@deva[पूर्व] "prior," @deva[अपर] "later," @deva[प्रथम] "first," @deva[चरम] "last," @deva[जघन्य] "hindmost," @deva[समान] "equal," @deva[मध्य] "middle," @deva[मध्यम] "middlemost," and @deva[वीर] "hero" compound with same-case words to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पूर्वपुरुषः] | "ancestor" |
| @deva[अपरपुरुषः] | "descendant" |
| @deva[प्रथमपुरुषः] | "first person" |
| @deva[चरमपुरुषः] | "last person" |
| @deva[मध्यपुरुषः] | "middling person" |`,

  '21059': `@deva[श्रेणि] "class" and similar words compound with @deva[कृत] "made" etc. (same-case words) to form @deva[तत्पुरुष].

These words have the force of @deva[च्वि] (indicating change of state).

**Example:**
@deva[श्रेणीकृताः] = @deva[अश्रेण्यः श्रेण्यः कृताः] "made into classes" (what was not classified before)

@deva[श्रेण्यादि] class: @deva[श्रेणि], @deva[वर्ग], @deva[पङ्क्ति], etc.`,

  '21060': `A @deva[क्त]-ending word WITHOUT @deva[नञ्] compounds with the SAME @deva[क्त]-word WITH @deva[नञ्], forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[कृताकृतम्] | "done and not-done" |
| @deva[भुक्ताभुक्तम्] | "eaten and not-eaten" |
| @deva[पीतापीतम्] | "drunk and not-drunk" |
| @deva[उदितानुदितम्] | "spoken and not-spoken" |

Note the intermediate @deva[अ] vowel.`,

  '21061': `@deva[सत्] "good," @deva[महत्] "great," @deva[परम] "highest," @deva[उत्तम] "best," and @deva[उत्कृष्ट] "excellent" compound with words denoting a respected person to form @deva[तत्पुरुष].

| Compound | Meaning |
|----------|---------|
| @deva[सत्पुरुषः] | "good person" |
| @deva[महापुरुषः] | "great person" |
| @deva[परमपुरुषः] | "supreme person" |
| @deva[उत्तमपुरुषः] | "the best person" |
| @deva[उत्कृष्टपुरुषः] | "excellent person" |

Requires the person to be worthy of respect.`,

  '21062': `A word denoting something worthy of respect compounds with @deva[वृन्दारक] "eminent," @deva[नाग] "serpent/elephant," or @deva[कुञ्जर] "elephant" to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गोवृन्दारकः] | "an excellent bull/cow" |
| @deva[अश्ववृन्दारकः] | "an excellent horse" |
| @deva[गोनागः] | "a lordly cow" |

Without respect: @deva[सुसीमोनागः] "the serpent Susīma" (literal serpent, not metaphorical).`,

  '21063': `@deva[कतर] "which of two" and @deva[कतम] "which of many," when asking about genus/class, compound with other same-case words to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[कतरकठः] | "which of the two is Kaṭha?" |
| @deva[कतमकठः] | "which of the many is Kaṭha?" |
| @deva[कतरकालापः] | "which is Kālāpa?" |

The question asks which person belongs to which lineage.`,

  '21064': `@deva[किम्] "what," when implying contempt, compounds with a case-inflected word to form @deva[तत्पुरुष].

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[किंराजा यो न रक्षति] | "What kind of king doesn't protect?" |
| @deva[किंसखा योऽभिद्रुह्यति] | "What friend is he who hates?" |
| @deva[किंगौर्यो न वहति] | "What ox is it that doesn't carry?" |

The affix @deva[टच्] (@ref[5.4.91]) does NOT apply to this compound.`,

  '21065': `A word denoting genus (@deva[जाति]) compounds with @deva[पोटा] "hermaphrodite," @deva[युवति] "young female," @deva[स्तोक] "little," @deva[कतिपय] "few," @deva[गृष्टि] "cow with one calf," @deva[धेनु] "milch cow," @deva[वशा] "barren female," @deva[वेहत्] "aborting cow," @deva[बष्कयणी] "cow with grown calf," @deva[प्रवक्तृ] "expounder," @deva[श्रोत्रिय] "learned," or @deva[अध्यापक] "teacher" to form @deva[तत्पुरुष].

**Examples:**
@deva[ब्राह्मणपोटा] "a brāhmaṇa hermaphrodite"
@deva[गोधेनुः] "a milch cow"`,

  '21066': `A word denoting genus (@deva[जाति]) compounds with words of praise (@deva[प्रशंसा]) to form @deva[तत्पुरुष].

The praise-words are @deva[रूढि] terms (fixed expressions) that retain their gender regardless of what they modify.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गोप्रकाण्डम्] | "an excellent cow" |
| @deva[अश्वमतल्लिका] | "an excellent horse" |
| @deva[गोमचर्चिका] | "an excellent cow" |

These words typically appear at compound-end.`,

  '21067': `@deva[युवन्] "young" compounds with @deva[खलति] "bald," @deva[पलित] "grey-haired," @deva[वलिन] "wrinkled," or @deva[जरत्] "aged" (same-case) to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[युवखलतिः] | "a young bald person" |
| @deva[युवपलितः] | "a young grey-haired person" |
| @deva[युववलिनः] | "a young wrinkled person" |

The sūtra shows @deva[जरतीभिः] (feminine) to indicate gender applies broadly.`,

  '21068': `@deva[कृत्]-ending words and @deva[तुल्य] "equal" (with synonyms) compound with words NOT denoting genus, being in the same case, to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[भोज्योष्णम्] | "hot food" |
| @deva[भोज्यलवणम्] | "salty food" |
| @deva[पानीयशीतलम्] | "cool drink" |
| @deva[तुल्यश्वेतः] | "equally white" |
| @deva[सदृशमहान्] | "equally great" |

NOT with genus: @deva[भोज्या गौः] (no compound with "cow").`,

  '21069': `A word denoting color compounds with another color-word (same-case) to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[कृष्णसारङ्गः] | "spotted with black" (antelope) |
| @deva[लोहितसारङ्गः] | "spotted with red" |
| @deva[कृष्णशबलः] | "dappled with black" |

For accent, see @ref[6.2.3].`,

  '21070': `@deva[कुमार] "boy/young" compounds with @deva[श्रमण] "ascetic" and similar words to form @deva[तत्पुरुष].

For feminine words (@deva[श्रमणा], @deva[प्रव्रजिता], @deva[कुलटा]), @deva[कुमार] becomes @deva[कुमारी].
For masculine words (@deva[अध्यापक], @deva[पण्डित]), @deva[कुमार] stays masculine.

**Examples:**
@deva[कुमारश्रमणः] "a young ascetic"
@deva[कुमारीश्रमणा] "a young female ascetic"`,

  '21071': `A word denoting a quadruped compounds with @deva[गर्भिणी] "pregnant" to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गोगर्भिणी] | "a pregnant cow" |
| @deva[अजागर्भिणी] | "a pregnant she-goat" |

Restricted to generic quadruped terms, NOT proper names:
@deva[कालाक्षी गर्भिणी] (no compound — @deva[कालाक्षी] is a cow's name)

NOT humans: @deva[ब्राह्मणी गर्भिणी] (no compound).`,

  '21072': `Words like @deva[मयूरव्यंसक] "peacock-cunning" are @deva[तत्पुरुष] compounds.

These are irregularly formed. The @deva[च] restricts: while @deva[मयूरव्यंसक] is valid, @deva[*परममयूरव्यंसक] is NOT.

@deva[मयूरव्यंसकादि] class:
1. @deva[मयूरव्यंसक]
2. @deva[छात्रव्यंसक]
3. @deva[कम्बोजमुण्ड]
etc.

These compounds have fixed, idiomatic meanings.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.1.49-72). Total: ${Object.keys(vasu).length}`);
