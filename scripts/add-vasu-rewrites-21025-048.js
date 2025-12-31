import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.1: Samāsa - sūtras 25-48
const newEntries = {
  '21025': `The indeclinable @deva[स्वयम्] "oneself" compounds with a @deva[क्त]-ending word to form @deva[तत्पुरुष].

**Examples:**
- @deva[स्वयंधौतौ पादौ] "feet washed by oneself"
- @deva[स्वयंविलीनम् अज्यम्] "ghee melted by itself"

Since @deva[स्वयम्] is indeclinable, it cannot take case-affixes; hence @deva[द्वितीया] from the previous sūtra does not apply here.

This compound gives a single accent to the phrase.`,

  '21026': `@deva[खट्वा] "bed/cot" in the accusative compounds with a @deva[क्त]-ending word when censure is implied, forming @deva[तत्पुरुष].

**Example:**
@deva[खट्वारूढः] "bedfast" — said contemptuously of one who lies in bed all day.

This is a @deva[नित्यसमास] (invariable): the contemptuous sense requires the compound and cannot be expressed otherwise.`,

  '21027': `The indeclinable @deva[सामि] "half" compounds with a @deva[क्त]-ending word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[सामिकृतम्] | "half-done" |
| @deva[सामिपीतम्] | "half-drunk" |
| @deva[सामिभुक्तम्] | "half-eaten" |

Since @deva[सामि] is indeclinable, the @deva[द्वितीया] from earlier sūtras does not apply.`,

  '21028': `Words denoting time in the accusative optionally compound with @deva[क्त]-ending words to form @deva[तत्पुरुष] — when duration is NOT meant.

**Examples:**
- @deva[मासप्रभृतश्चन्द्रमाः] "the new moon of the month onward"

@note[Duration of time is handled by the next sūtra.]

The word @deva[कालाः] here means specific time-words, not derivatives of @deva[काल] (by @ref[1.1.68]).`,

  '21029': `Time-words in the accusative optionally compound with case-inflected words when expressing @deva[अत्यन्तसंयोग] "uninterrupted connection" (duration), forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[मुहूर्तसुखम्] | "pleasure lasting a moment" |
| @deva[सदासुखम्] | "eternal happiness" |
| @deva[नित्यसुखम्] | "perpetual happiness" |

@note[The @deva[क्त] restriction from the previous sūtra does not apply here.]`,

  '21030': `A third-case (instrumental) word compounds with a word expressing quality (when that quality is caused by the instrument), or with @deva[अर्थ] "wealth," forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गुडशौण्डः] | "fond of jaggery" (quality caused by jaggery) |
| @deva[धनार्थः] | "wealth-seeking" |

The instrumental word expresses the cause of the quality.`,

  '21031': `A third-case word compounds with @deva[पूर्व] "prior," @deva[सदृश] "like," @deva[सम] "equal," @deva[ऊन] "less," @deva[कलह] "quarrel," @deva[निपुण] "skilled," @deva[मिश्र] "mixed," or @deva[श्लक्ष्ण] "smooth" to form @deva[तत्पुरुष].

This sūtra incidentally shows these words govern the instrumental case.

| Compound | Meaning |
|----------|---------|
| @deva[मासपूर्वः] | "a month prior" |
| @deva[पित्रासदृशः] | "like the father" |
| @deva[द्वयोन] | "less by two" |
| @deva[शास्त्रनिपुणः] | "skilled in śāstra" |`,

  '21032': `A third-case word denoting agent or instrument variously (@deva[बहुलम्]) compounds with a @deva[कृत्]-ending word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अहिहतः] | "killed by a snake" |
| @deva[नखनिर्भिन्नः] | "torn by nails" |
| @deva[परशुच्छिन्नः] | "cut by an axe" |

The @deva[बहुलम्] indicates general relaxation of conditions.`,

  '21033': `A third-case word (agent/instrument) optionally compounds with a @deva[कृत्य]-ending word when exaggeration (praise or blame) is implied, forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[काकपेया नदी] | "crow-drinkable river" (so shallow a crow can touch bottom) |
| @deva[श्वलेह्यः कूपः] | "dog-lickable well" (so shallow a dog can lap from the edge) |

These express exaggerated censure of the river's/well's shallowness.`,

  '21034': `A third-case word denoting a condiment optionally compounds with a word denoting food to form @deva[तत्पुरुष].

@deva[अन्न] = what is to be prepared (food)
@deva[व्यञ्जन] = what prepares/flavors it (condiment)

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[दध्योदनः] | "rice with curds" |
| @deva[क्षीरौदनः] | "rice with milk" |

Analysis: @deva[दध्ना उपसिक्तः ओदनः] "rice moistened with curds."`,

  '21035': `A third-case word denoting a mixing ingredient compounds with a word meaning victuals to form @deva[तत्पुरुष].

@deva[भक्ष्य] = any edible (hard or soft)
@deva[मिश्रीकरण] = refining/mixing ingredient

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[गुडधानाः] | "barley with jaggery" |
| @deva[गुडपृथुकाः] | "flattened rice with jaggery" |

The connection is established by an understood verb like "mixed with."`,

  '21036': `A fourth-case (dative) word compounds with:
1. What is "for the purpose of" that dative object
2. The words @deva[अर्थ], @deva[बलि], @deva[हित], @deva[सुख], @deva[रक्षित]

to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[यूपदारु] | "wood for a sacrificial post" |
| @deva[कुण्डलहिरण्यम्] | "gold for earrings" |
| @deva[अग्निबलि] | "offering for fire" |
| @deva[गोहितम्] | "beneficial for cows" |`,

  '21037': `A fifth-case (ablative) word optionally compounds with @deva[भय] "fear" to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[वृकभयम्] | "fear of wolves" |
| @deva[चौरभयम्] | "fear of thieves" |
| @deva[दस्युभयम्] | "fear of robbers" |

@note[Also applies to @deva[भीत], @deva[भीति], @deva[भी]: @deva[वृकभीतः], @deva[वृकभीतिः], @deva[वृकभीः].]`,

  '21038': `A fifth-case word compounds with @deva[अपेत] "gone away," @deva[अपोढ] "removed," @deva[मुक्त] "freed," @deva[पतित] "fallen," or @deva[अपत्रस्त] "frightened" — when gradual occurrence is implied — forming @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[सुखापेतः] | "departed from happiness" |
| @deva[कल्पनापोढः] | "carried away by imagination" |
| @deva[चक्रमुक्तः] | "freed from the wheel" |
| @deva[स्वर्गपतितः] | "fallen from heaven" |`,

  '21039': `Words meaning @deva[स्तोक] "little," @deva[अन्तिक] "near," @deva[दूर] "far," or @deva[कृच्छ्र] "difficulty" in the ablative compound with @deva[क्त]-ending words to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[स्तोकान्मुक्तः] | "released from a short distance" |
| @deva[अन्तिकादागतः] | "come from nearby" |
| @deva[दूरादागतः] | "come from afar" |
| @deva[कृच्छ्रान्मुक्तः] | "saved with difficulty" |`,

  '21040': `A seventh-case (locative) word compounds with @deva[शौण्ड] "skilled" and similar words to form @deva[तत्पुरुष].

The plural @deva[शौण्डैः] indicates a class (@deva[शौण्डादि]).

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अक्षशौण्डः] | "skilled in dice" |
| @deva[अक्षधूर्तः] | "cunning at dice" |
| @deva[अक्षकितवः] | "gambler in dice" |

@deva[शौण्डादि]: @deva[शौण्ड], @deva[धूर्त], @deva[कितव], etc.`,

  '21041': `A locative word compounds with @deva[सिद्ध] "perfected," @deva[शुष्क] "dried," @deva[पक्व] "cooked," or @deva[बन्ध] "bound" to form @deva[तत्पुरुष].

| Compound | Meaning |
|----------|---------|
| @deva[साङ्काश्यसिद्धः] | "perfected in Sāṅkāśya" |
| @deva[आतपशुष्कः] | "dried in sunlight" |
| @deva[छायाशुष्कः] | "dried in shade" |
| @deva[स्थालीपक्वः] | "cooked in a pot" |
| @deva[चक्रबन्धः] | "bound to a wheel" |`,

  '21042': `A locative word compounds with @deva[ध्वाङ्क्ष] "crow" (or synonyms) when contempt is implied, forming @deva[तत्पुरुष].

**Example:**
@deva[तीर्थध्वाङ्क्षः] / @deva[तीर्थकाकः] "a crow at a bathing place"

Figurative meaning: A person who, like a crow at a tīrtha, doesn't stay long — said of an inconstant student.

Without contempt, no compound: @deva[तीर्थे ध्वाङ्क्षः] "a crow at the tīrtha" (literal).`,

  '21043': `A locative word compounds with a @deva[कृत्य]-affix word (specifically @deva[यत्]) to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[मासदेयम्] | "a debt payable in a month" |
| @deva[संवत्सरदेयम्] | "payable in a year" |
| @deva[त्र्यहदेयम्] | "payable in three days" |

The word @deva[ऋण] "debt" is understood. This is limited to @deva[यत्]-formed words, not all @deva[कृत्य] forms.`,

  '21044': `A locative word invariably compounds with a case-inflected word when the compound is used as a proper name (@deva[संज्ञा]), forming @deva[तत्पुरुष].

This is a @deva[नित्यसमास]: names cannot be expressed by sentences.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अरण्येतिलकाः] | "wild sesame" (yields no oil — unmet expectations) |
| @deva[कूपेमण्डूकाः] | "well-frog" (narrow-minded person) |`,

  '21045': `Words denoting divisions of day/night in the locative compound with @deva[क्त]-ending words to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पूर्वाह्णकृतम्] | "done in the forenoon" |
| @deva[अपराह्णकृतम्] | "done in the afternoon" |
| @deva[पूर्वरात्रकृतम्] | "done in the first watch" |
| @deva[अपररात्रकृतम्] | "done in the last watch" |

Not applicable to @deva[अहन्] or @deva[रात्रि] as wholes: @deva[अहनि भुक्तम्] (no compound).`,

  '21046': `@deva[तत्र] "there" (a locative-meaning word by @ref[5.3.10]) compounds with a @deva[क्त]-ending word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[तत्रभुक्तम्] | "eaten there" |
| @deva[तत्रकृतम्] | "done there" |
| @deva[तत्रपीतम्] | "drunk there" |

Purpose: The two words become one unit with a single accent.`,

  '21047': `A locative word compounds with a @deva[क्त]-ending word when censure is implied, forming @deva[तत्पुरुष].

**Examples of contemptuous expressions:**
| Compound | Meaning |
|----------|---------|
| @deva[आवतप्ते कुलस्थितम्] | "standing on hot ground like an ichneumon" (inconstancy) |
| @deva[उदके विशीर्णम्] | "dried in water" (something impossible/absurd) |
| @deva[प्रवाहे मुक्तः] | "released in a stream" (swept away) |`,

  '21048': `Words like @deva[पात्रसम्मित] "dish-companion" (parasite) are @deva[तत्पुरुष] compounds when contempt is implied.

These are irregular compounds. Some contain @deva[क्त], but their inclusion here serves to restrict formation: we can form @deva[मयूरव्यंसक] but NOT @deva[*परममयूरव्यंसक].

The @deva[च] indicates restriction.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.1.25-48). Total: ${Object.keys(vasu).length}`);
