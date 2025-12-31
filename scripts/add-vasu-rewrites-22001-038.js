import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.2: Samāsa continued + Bahuvrīhi + Dvandva - sūtras 1-38
const newEntries = {
  '22001': `@deva[पूर्व] "front," @deva[अपर] "rear," @deva[अधर] "lower," and @deva[उत्तर] "upper" compound with a word denoting a thing with parts, when that thing is numerically one. The compound is @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[पूर्वकायः] | "front of the body" |
| @deva[अपरकायः] | "rear of the body" |
| @deva[अधरोष्ठः] | "lower lip" |
| @deva[उत्तरोष्ठः] | "upper lip" |

The body is one (@deva[एकाधिकरण]) and has parts (@deva[एकदेशिन्]).`,

  '22002': `@deva[अर्ध] "half," when meaning exactly equal parts (bisection), is always NEUTER and compounds with a word denoting a thing with parts (numerically one). The compound is @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अर्धपिप्पली] | "half a pepper" |
| @deva[अर्धकायः] | "half the body" |

The neuter gender applies specifically when @deva[अर्ध] means exact bisection.`,

  '22003': `@deva[द्वितीय] "second," @deva[तृतीय] "third," @deva[चतुर्थ]/  @deva[तुर्य] "fourth" optionally compound with words denoting things with parts (numerically one). The compound is @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[द्वितीयकायः] | "second part of the body" |
| @deva[तृतीयकायः] | "third part of the body" |

This rule optionally supersedes @ref[2.2.9].`,

  '22004': `@deva[प्राप्त] and @deva[आपन्न] "obtained" optionally compound with accusative (second-case) words to form @deva[तत्पुरुष].

This provides an alternative to @ref[2.1.24].

| Compound | Alternative | Meaning |
|----------|-------------|---------|
| @deva[प्राप्तजीविकः] | @deva[जीविकां प्राप्तः] | "one who obtained livelihood" |
| @deva[आपन्नविद्यः] | @deva[विद्यामापन्नः] | "one who attained knowledge" |`,

  '22005': `Words denoting time compound with words denoting the object whose duration is measured. The compound is @deva[तत्पुरुष] (genitive type).

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[मासजातः] | "a month old" (born a month ago) |
| @deva[संवत्सरजातः] | "a year old" |
| @deva[द्व्यहजातः] | "two days old" |`,

  '22006': `The negative particle @deva[नञ्] compounds with a connected case-inflected word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अब्राह्मणः] | "non-brāhmaṇa" (a man, but not a brāhmaṇa) |
| @deva[अश्वेतः] | "non-white" |

The @deva[म्] of @deva[न] is elided by @ref[6.3.73].

@note[The @deva[न्] is also elided before verbs when censure is implied.]`,

  '22007': `@deva[ईषत्] "slightly" compounds with case-inflected words NOT ending in @deva[कृत्] affixes. The compound is @deva[तत्पुरुष].

This applies only to quality words (adjectives):

| Compound | Meaning |
|----------|---------|
| @deva[ईषत्कडारः] | "somewhat tawny" |
| @deva[ईषत्पिङ्गलः] | "slightly brownish" |
| @deva[ईषद्विकटः] | "a bit hideous" |
| @deva[ईषदुन्नतः] | "somewhat elevated" |`,

  '22008': `A sixth-case (genitive) word compounds with a connected case-inflected word to form @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[राजपुरुषः] | "the king's man" |
| @deva[ब्राह्मणकम्बलः] | "the brāhmaṇa's blanket" |

@note[When the genitive arises from connection with a @deva[कृत्]-ending word, that word may also be compounded.]`,

  '22009': `A sixth-case word compounds with @deva[याजक] "sacrificer" and similar words to form @deva[तत्पुरुष].

This sūtra guards against @ref[2.2.16] prohibiting such compounds.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[ब्राह्मणयाजकः] | "a brāhmaṇa's sacrificer" |
| @deva[क्षत्रिययाजकः] | "a kṣatriya's sacrificer" |`,

  '22010': `A sixth-case word is NOT compounded when the genitive expresses specification (@deva[निर्धारण]).

@deva[निर्धारण] = distinguishing one from many based on genus, attribute, or action.

**No compound:**
@deva[क्षत्रियो मनुष्याणां शूरतमः] "The kṣatriya is the bravest of men."

The genitive @deva[मनुष्याणाम्] specifies the group from which the kṣatriya is distinguished.`,

  '22011': `A sixth-case word is NOT compounded with:
- Words with ordinal sense (@deva[छात्रार्थ])
- Words with attribute sense (@deva[गुणार्थ])
- Words with satisfaction sense (@deva[तृप्त्यर्थ])
- Participles in @deva[सत्] (@ref[3.2.127])
- Indeclinables
- Words in @deva[तव्य]
- Words denoting the same object (apposition)

**No compound:**
@deva[ब्राह्मणानां प्रथमः] "first among brāhmaṇas"
@deva[अक्षाणां कितवः] "a gambler with dice"`,

  '22012': `A sixth-case word is NOT compounded with a @deva[क्त]-ending word when @deva[क्त] denotes respect, inclination, or understanding.

The affix @deva[क्त] expresses these senses per @ref[3.2.188].

**No compound:**
@deva[गुरोः कृतः] "devoted to the teacher" (respect)

The genitive cannot be compounded because @deva[कृत] here means devotion, not mere action.`,

  '22013': `A sixth-case word is NOT compounded with a @deva[क्त]-ending word when @deva[क्त] denotes locality.

When @deva[क्त] is added to roots of fixedness, motion, or eating, it can mean the location of the action (@ref[3.4.76]).

**No compound:**
@deva[मधोः भुक्तः] "eaten in/by honey" (location sense)`,

  '22014': `A sixth-case word is NOT compounded when the genitive has accusative force.

Per @ref[2.3.66], genitive may replace accusative when agent and object differ in the context of a @deva[कृत्]-formed word.

**No compound:**
@deva[कटस्य कर्ता] / @deva[कटं कुर्वन्] "maker of the mat"

The genitive @deva[कटस्य] has accusative sense (object of making).`,

  '22015': `A sixth-case word is NOT compounded with @deva[तृच्] or @deva[अक]-ending words when the genitive has agent force.

**No compound:**
@deva[भवतः कर्ता] "one who does for you"

The genitive @deva[भवतः] expresses the agent relation.`,

  '22016': `A sixth-case word is NOT compounded with @deva[तृच्] or @deva[अक]-ending words when THESE affixes have agent force.

The @deva[तृच्] affix always denotes agent; @deva[अक] affixes sometimes do.

**No compound:**
@deva[अपां क्षप्ता] "creator of waters"
@deva[पुरां भेत्ता] "destroyer of cities"`,

  '22017': `A sixth-case word INVARIABLY compounds with @deva[अक]-ending words when these denote sport or livelihood. The compound is @deva[तत्पुरुष].

This is a @deva[नित्यसमास] (incapable of analysis).

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[अक्षदेवी] | "one who plays dice for sport" |
| @deva[अक्षजीवी] | "one who lives by gambling" |

The @deva[तृच्] affix never has these senses; only @deva[अक] does.`,

  '22018': `The indeclinable @deva[कु] "bad," @deva[गति] words (@ref[1.4.60]), and @deva[उपसर्ग]s (@deva[प्र] etc.) INVARIABLY compound with connected words. The compound is @deva[तत्पुरुष].

| Type | Example | Meaning |
|------|---------|---------|
| @deva[कु] | @deva[कुपुरुषः] | "wicked man" |
| @deva[गति] | @deva[उररीकृतम्] | "assented" |
| @deva[उपसर्ग] | @deva[प्रकृतम्] | "done forth" |

These are @deva[नित्यसमास] — always compounded.`,

  '22019': `An @deva[उपपद] (attendant word, @ref[3.1.92]) NOT ending in a tense-affix (@ref[3.4.78]) INVARIABLY compounds with its associated word. The compound is @deva[तत्पुरुष].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[कुम्भकारः] | "pot-maker" |
| @deva[नगरकारः] | "city-maker" |

With tense-affixes, no compound: @deva[कुम्भं करोति] "he makes a pot."`,

  '22020': `When an @deva[उपपद] compounds with an indeclinable, it compounds only with indeclinables ending in the affix @deva[अम्].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[स्वादुकारम्] | "having made sweet" |
| @deva[लवणकारम्] | "having seasoned" |

Context: @deva[स्वादुकारं भुङ्क्ते] "he eats having made it sweet."`,

  '22021': `An @deva[उपपद] ending in third case or following (@ref[3.4.47] ff.) OPTIONALLY compounds with @deva[अम्]-ending indeclinables. The compound is @deva[तत्पुरुष].

| Compound | Alternative | Meaning |
|----------|-------------|---------|
| @deva[मूलकोपदंशम्] | @deva[मूलकेन उपदंशम्] | "eating with radish" |`,

  '22022': `An @deva[उपपद] in third case or the remaining four cases OPTIONALLY compounds with @deva[क्त्वा]-ending words. The compound is @deva[तत्पुरुष].

**Examples:**
| Compound | Alternative |
|----------|-------------|
| @deva[उच्चैः कृत्य] | @deva[उच्चैः कृत्वा] |

This rule covers @deva[क्त्वा]-formed indeclinables not handled by previous sūtras.`,

  '22023': `The remaining compound (not covered by previous rules) is called @deva[बहुव्रीहि].

This @deva[अधिकार] extends through @ref[2.2.28].

**Example:**
@deva[चित्रगुः] "one possessing a brindled cow"

The compound denotes something other than its constituent parts.`,

  '22024': `Two or more case-inflected words form a compound denoting something NEW (not expressed by the individual words). This is @deva[बहुव्रीहि].

@deva[बहुव्रीहि] works with all case-relationships except the first (nominative):

| Compound | Analysis | Meaning |
|----------|----------|---------|
| @deva[प्राप्तोदकः ग्रामः] | @deva[प्राप्तम् उदकं यं] | "village to which water has come" |
| @deva[ऊढरथः अनड्वान्] | @deva[ऊढो रथो येन] | "bull by which a cart is drawn" |`,

  '22025': `Indeclinables and the words @deva[आसन्न] "near," @deva[अदूर] "near," @deva[अधिक] "more," and numerals compound with another numeral when expressing a numeral sense. The compound is @deva[बहुव्रीहि].

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[उपदशाः] | "near ten" (9 or 11) |
| @deva[उपविंशः] | "near twenty" (19 or 21) |
| @deva[आसन्नशतम्] | "near hundred" |
| @deva[अधिकशतम्] | "more than a hundred" |`,

  '22026': `Names of cardinal directions compound when the result signifies an intermediate direction. The compound is @deva[बहुव्रीहि].

| Compound | Meaning |
|----------|---------|
| @deva[दक्षिणपूर्वा दिक्] | "south-east" |
| @deva[पूर्वोत्तरा दिक्] | "north-east" |
| @deva[दक्षिणपश्चिमा दिक्] | "south-west" |

No compound when denoting just one direction: @deva[पूर्वा दिक्] "the eastern direction."`,

  '22027': `Two same-form words (both locative or both instrumental) compound when meaning "this happens therein" or "with that." The compound is @deva[बहुव्रीहि].

**Locative examples:**
@deva[मुखेमुखे] "face to face"
@deva[दिने दिने] → @deva[प्रतिदिनम्] "daily"

**Instrumental examples:**
@deva[केशाकेशि] "by each other's hair" (fighting)`,

  '22028': `@deva[सह] "together" compounds with a third-case word when companion and accompanied are equally affected by action or thing. The compound is @deva[बहुव्रीहि].

**Examples:**
| Compound | Analysis | Meaning |
|----------|----------|---------|
| @deva[सपुत्रः] | @deva[सह पुत्रेण आगतः] | "come with son" |
| @deva[सच्छात्रः] | @deva[सह छात्रेण] | "with student" |

@deva[सह] → @deva[स] by @ref[6.3.82].`,

  '22029': `Multiple case-inflected words connected by "and" (@deva[च]) form a compound called @deva[द्वन्द्व].

Four senses of @deva[च]:
| Sense | Sanskrit | Example |
|-------|----------|---------|
| Community | @deva[समुच्चय] | both together |
| Collateral | @deva[अन्वाचय] | one and also the other |
| Mutual | @deva[इतरेतरयोग] | each with each |
| Aggregate | @deva[समाहार] | collective unit |

**Example:**
@deva[रामलक्ष्मणौ] "Rāma and Lakṣmaṇa"`,

  '22030': `The @deva[उपसर्जन] (@ref[1.2.43]) is placed FIRST in a compound.

@deva[उपसर्जन] = the word displayed in nominative case in compound-formation rules.

This rule establishes word order. Without it, there would be no fixed arrangement.

**Example in @deva[तत्पुरुष]:**
@deva[राजपुरुषः] — @deva[राजन्] (genitive, hence upasarjana) comes first.`,

  '22031': `In @deva[राजदन्त] and similar words, the @deva[उपसर्जन] is placed LAST.

These are exceptions to the normal upasarjana-first rule:

| Compound | Analysis | Meaning |
|----------|----------|---------|
| @deva[राजदन्तः] | @deva[दन्तानां राजा] | "king of teeth" (eyetooth) |
| @deva[अग्रेवणम्] | @deva[वनानाम् अग्रे] | "before the forests" |

@deva[राजदन्तादि] is a listed class of exceptions.`,

  '22032': `In @deva[द्वन्द्व] compounds, a @deva[घि]-ending word (@ref[1.4.7]) stands FIRST.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[हरिहरौ] | "Hari and Hara" |
| @deva[पटुगुप्तौ] | "Paṭu and Gupta" |

With multiple @deva[घि] words, any may be first; the rest follow without fixed order:
@deva[पटुमृदुशुक्लाः] or @deva[पटुशुक्लमृदवः]`,

  '22033': `In @deva[द्वन्द्व] compounds, a word beginning with a vowel and ending in short @deva[अ] stands FIRST.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[उष्ट्रखरम्] | "camel and donkey" |
| @deva[उष्ट्रशशकम्] | "camel and hare" |

NOT with long @deva[आ]: @deva[अश्वा] + @deva[वृषः] = @deva[अश्वावृषौ] or @deva[वृषाश्वे] (either order).`,

  '22034': `In @deva[द्वन्द्व] compounds, the word with fewer vowels stands FIRST.

**Examples:**
| Compound | Components |
|----------|------------|
| @deva[प्लक्षन्यग्रोधौ] | @deva[प्लक्ष] (2) + @deva[न्यग्रोध] (3) |
| @deva[धवखदिरपलाशाः] | @deva[धव] (2) + @deva[खदिर] (3) + @deva[पलाश] (3) |

With many words of equal syllable count, order is not fixed.`,

  '22035': `In @deva[बहुव्रीहि] compounds, a seventh-case (locative) word and epithets stand FIRST.

All words in @deva[बहुव्रीहि] are @deva[उपसर्जन], so this sūtra establishes order.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[कण्ठेकालः] | "black in the throat" |
| @deva[उरसिलोमा] | "hairy on the chest" |
| @deva[चित्रगुः] | "having a brindled cow" |`,

  '22036': `In @deva[बहुव्रीहि] compounds, a @deva[निष्ठा]-ending word (@ref[1.1.26]) stands FIRST.

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[युक्तयोगः] | "devoted to yoga" |
| @deva[कृतकठः] | "one who has made the mat" |
| @deva[भिक्षितभिक्षिः] | "one who has begged alms" |`,

  '22037': `In @deva[आहिताग्नि] and similar words, the @deva[निष्ठा]-ending word may OPTIONALLY stand first.

| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[आहिताग्निः] | @deva[अग्न्याहितः] | "one who has established sacred fire" |
| @deva[जातपुत्रः] | @deva[पुत्रजातः] | "one to whom a son is born" |

@deva[आहिताग्न्यादि] class includes: @deva[आहिताग्नि], @deva[जातपुत्र], @deva[जातदन्त], @deva[ऊढभार्य], etc.`,

  '22038': `In @deva[कर्मधारय] compounds, @deva[कडार] "tawny" and similar words may OPTIONALLY stand first.

| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[कडारजैमिनिः] | @deva[जैमिनिकडारः] | "the tawny Jaimini" |

@deva[कडारादि] class: @deva[कडार], @deva[गडुल], @deva[खञ्ज], @deva[खोड], @deva[काण], @deva[कुण्ठ], @deva[खलति], @deva[गौर], @deva[वृद्ध], @deva[भिक्षुक], @deva[पिङ्ग], @deva[पिङ्गल], etc.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.2.1-38). Total: ${Object.keys(vasu).length}`);
