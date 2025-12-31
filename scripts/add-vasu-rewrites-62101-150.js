#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../static/data/vasu_rewritten.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const newEntries = {
  62101: `@deva[प्राद्यव्ययेन बहुव्रीहौ] — In a @deva[बहुव्रीहि] with @deva[प्र], @deva[वि], or similar @deva[अव्यय] as first member, the first member retains its accent.

**Examples:**
@deva[प्रकर्णः] "having prominent ears"
@deva[विकर्णः] "having separated ears"
@deva[प्रकोष्ठः] "having a prominent forearm"

**Why "@deva[आद्यव्यय]"?**
Only initial @deva[अव्यय] prefixes like @deva[प्र/वि] are covered. Other first members follow different accent rules.`,

  62102: `@deva[दिग्देशोत्तरपदे बहुव्रीहौ] — In a @deva[बहुव्रीहि] where the second member denotes direction or place, the first member retains its accent.

**Examples:**
@deva[पूर्वपादः] "having the front foot forward"
@deva[दक्षिणपार्श्वः] "having the right side"
@deva[उत्तरमुखः] "facing north"

**Why "direction or place"?**
This covers body-part terms indicating position.`,

  62103: `@deva[उपमानादचि बहुव्रीहौ] — In a @deva[बहुव्रीहि] where comparison is expressed and the second member ends in @deva[अच्] (a vowel), the first member retains its accent.

**Examples:**
@deva[सिंहग्रीवः] "lion-necked" (neck like a lion's)
@deva[गजकर्णः] "elephant-eared"
@deva[व्याघ्रपादः] "tiger-footed"

**Why "ending in vowel"?**
The @deva[अच्] condition ensures this applies to stems like @deva[ग्रीवा], @deva[कर्ण], @deva[पाद].`,

  62104: `@deva[नञोऽधर्मे मत्वर्थे बहुव्रीहौ] — In a @deva[बहुव्रीहि] with @deva[नञ्] (negative @deva[अ]) before a @deva[मन्]-ending or @deva[वन्]-ending word, the first member retains its accent.

**Examples:**
@deva[अकर्मन्] "action-less, inactive"
@deva[अधन्वन्] "bow-less"
@deva[अनामन्] "name-less"

**Why @deva[मत्वर्थ] "possessive sense"?**
The @deva[बहुव्रीहि] expresses "lacking X."`,

  62105: `@deva[संख्यायाक्षपादोत्तरपदे बहुव्रीहौ] — In a @deva[बहुव्रीहि] with a numeral before @deva[अक्ष] "eye" or @deva[पद] "foot," the first member retains its accent.

**Examples:**
@deva[द्व्यक्षः] "two-eyed"
@deva[द्विपदः] "two-footed, biped"
@deva[चतुष्पदः] "four-footed, quadruped"
@deva[त्र्यक्षः] "three-eyed" (epithet of Śiva)

**Restriction:**
Only @deva[अक्ष] and @deva[पद] as second members.`,

  62106: `@deva[संज्ञायां विश्ववत्] — In a name, @deva[विश्व] as first member takes end-acute.

**Examples:**
@deva[विश्वदेवः] "All-gods" (class of deities)
@deva[विश्वयशाः] "universally famous" (name)
@deva[विश्वमित्रः] "friend of all" (name)

**Why "in a name"?**
Outside proper names, @deva[विश्व]-compounds follow regular rules.`,

  62107: `@deva[संज्ञायामुदराद्यर्थेषु] — In a name with @deva[उदर] "belly," @deva[अश्व] "horse," or @deva[इषु] "arrow" as second member, the compound is end-acute.

**Examples:**
@deva[वृकोदरः] "wolf-bellied" (Bhīma's epithet)
@deva[हर्यश्वः] "having tawny horses" (name)
@deva[अश्विषुः] "horse-arrowed" (name)

**Why "in a name"?**
Only proper names receive this accent.`,

  62108: `@deva[गर्हायां च] — The same words (@deva[उदर], @deva[अश्व], @deva[इषु]) also take end-acute when expressing reproach.

**Examples:**
@deva[कुण्डोदरः] "pot-bellied" (derogatory)
@deva[खरोदरः] "donkey-bellied"

The @deva[च] "and" indicates this extends @ref[6.2.107] to non-names when reproachful.`,

  62109: `@deva[नदीबन्धौ] — Before @deva[बन्धु] "relative," a @deva[नदी]-word (feminine river name) as first member takes end-acute.

**Examples:**
@deva[गार्गीबन्धुः] "kinsman of Gārgī"
@deva[वाडवीबन्धुः] "kinsman of Vāḍavī"

@deva[नदी]-words are feminines ending in @deva[ई] with @deva[ङीप्] affix.`,

  62110: `@deva[बहुव्रीहौ गतिक्तेषु] — In a @deva[बहुव्रीहि] where the first member is a @deva[गति] (preverb) and the second is formed with @deva[क्त], the compound is optionally end-acute.

**Examples:**
@deva[प्रधौतमुखः] or @deva[प्रधौतमुखः] "having a well-washed face"
@deva[निर्धूतकल्मषः] or @deva[निर्धूतकल्मषः] "having sins shaken off"

The option allows either first-acute or end-acute.`,

  62111: `@deva[उत्तरपदाद्युदात्तः] — ADHIKĀRA: The second member has its first syllable @deva[उदात्त] (acute).

This heading governs sūtras through @ref[6.2.136]. The accent falls on the first vowel of the second member.

**Notation:** "First of second is acute" = @deva[उत्तरपदाद्युदात्त].`,

  62112: `@deva[वर्णलक्षणात्कर्णः] — After a word denoting color or a distinguishing mark, @deva[कर्ण] "ear" has its first syllable acute.

**Examples:**
@deva[शुक्लकर्णः] "white-eared"
@deva[दात्राकर्णः] "sickle-marked ear"
@deva[कृष्णकर्णः] "black-eared"

**Why specified?**
Other @deva[कर्ण]-compounds follow different accent patterns.`,

  62113: `@deva[संज्ञोपमानाभ्याम्] — After a name or comparison, @deva[कर्ण] "ear" has its first syllable acute.

**Examples:**
@deva[कुञ्चिकर्णः] "curly-eared" (name)
@deva[गोकर्णः] "cow-eared" (place name, comparison)
@deva[शङ्खकर्णः] "conch-eared" (comparison)

**Why "name or comparison"?**
These semantic contexts trigger the special accent.`,

  62114: `@deva[कण्ठादीनि च] — After a name or comparison, the words @deva[कण्ठ] "throat," @deva[पृष्ठ] "back," @deva[ग्रीवा] "neck," and @deva[जङ्घा] "calf" also have their first syllable acute.

**Examples:**
@deva[शितिकण्ठः] "white-throated" (Śiva)
@deva[कृष्णपृष्ठः] "black-backed"
@deva[सिंहग्रीवः] "lion-necked"
@deva[अजजङ्घः] "goat-legged"

The @deva[च] "and" extends @ref[6.2.113].`,

  62115: `@deva[वयसि संज्ञोपमानाभ्याम्] — After age-word, name, or comparison, @deva[शृङ्ग] "horn" has its first syllable acute.

**Examples:**
@deva[उद्गतशृङ्गः] "having grown horns" (age)
@deva[गोशृङ्गः] "cow-horned" (comparison)
@deva[मृगशृङ्गः] "deer-horned" (name)

**Why "age"?**
Horns indicate maturity in animals.`,

  62116: `@deva[नञो जरमरमित्रमृताः] — After @deva[नञ्] (negative @deva[अ]), the words @deva[जर] "old age," @deva[मर] "death," @deva[मित्र] "friend," and @deva[मृत] "dead" have their first syllable acute.

**Examples:**
@deva[अजरः] "ageless"
@deva[अमरः] "immortal"
@deva[अमित्रः] "enemy" (non-friend)
@deva[अमृतम्] "nectar" (non-dead, immortality)

These are common vocabulary items with fixed accent.`,

  62117: `@deva[सुनो मन्वसयोर्लोमोषसोरदृष्टौ] — After @deva[सु] "good," words ending in @deva[मन्] or @deva[अस्] (except @deva[लोमन्] "hair" and @deva[उषस्] "dawn") have their first syllable acute.

**Examples:**
@deva[सुकर्मन्] "of good deeds"
@deva[सुनामन्] "of good name"
@deva[सुयशस्] "of good fame"
@deva[सुतेजस्] "of good brilliance"

**Exceptions:**
@deva[सुलोमन्], @deva[सूषस्] — follow other rules.`,

  62118: `@deva[क्रत्वादयश्च] — After @deva[सु], the @deva[क्रतु]-class words also have their first syllable acute.

**The @deva[क्रतु]-class includes:**
@deva[क्रतु] "will, sacrifice," @deva[बन्धु] "kinsman," @deva[सिन्धु] "river," @deva[रिपु] "enemy," etc.

**Example:**
@deva[सुक्रतुः] "of good will"
@deva[सुबन्धुः] "having good kinsmen"`,

  62119: `@deva[छन्दसि सुबाद्युदात्तात्] — In Vedic, after @deva[सु] before a disyllabic word with initial acute, the second member has its first syllable acute.

**Examples:**
@deva[स्वश्वः] "having good horses" (@deva[अश्व] is disyllabic, first-acute)
@deva[सुवृत्रः] "having good protection"

This is a Vedic-specific accent rule.`,

  62120: `@deva[सुवीरादयश्च] — In Vedic, @deva[सुवीर] "having good heroes" and similar compounds have the second member's first syllable acute.

**Examples:**
@deva[सुवीरः] "having good heroes/sons"
@deva[सुवीर्यम्] "good heroism"

The @deva[वीर/वीर्य] stems are specifically listed.`,

  62121: `@deva[अव्ययीभावे कूलतीरादिभ्यः] — In @deva[अव्ययीभाव] (indeclinable compounds) with @deva[कूल] "bank," @deva[तीर] "shore," and similar words, the second member has its first syllable acute.

**Examples:**
@deva[परिकूलम्] "around the bank"
@deva[उपतीरम्] "near the shore"
@deva[अनुकूलम्] "along the bank, favorable"

The @deva[कूल-तीर]-class is listed in the Gaṇapāṭha.`,

  62122: `@deva[द्विगौ कंसमन्थादिभ्यः] — In @deva[द्विगु] (numeral-first @deva[समास]) with @deva[कंस] "metal cup," @deva[मन्थ] "churn," and similar words, the second member has its first syllable acute.

**Examples:**
@deva[द्विकंसः] "worth two kamsas"
@deva[त्रिमन्थः] "worth three manthas"
@deva[पञ्चकंसः] "worth five kamsas"

The @deva[कंस-मन्थ]-class is listed in the Gaṇapāṭha.`,

  62123: `@deva[नपुंसके शालायाः] — In a neuter @deva[तत्पुरुष] before @deva[शाला] "hall," the second member has its first syllable acute.

**Examples:**
@deva[ब्राह्मणशालम्] "Brahmin hall"
@deva[वैश्यशालम्] "merchant hall"
@deva[राजशालम्] "royal hall"

**Why "neuter"?**
When @deva[शाला] remains feminine, different accent applies: @deva[ब्राह्मणशाला].`,

  62124: `@deva[कन्थायाश्च] — In a neuter @deva[तत्पुरुष], @deva[कन्था] "patched garment" also has its first syllable acute.

**Examples:**
@deva[सौशमिकन्थम्] "Suśami's patched garment"
@deva[वैधवकन्थम्] "widow's patched garment"

The @deva[च] extends @ref[6.2.123].`,

  62125: `@deva[चिहणादेः] — After @deva[चिहण] and similar words, @deva[कन्था] has its first syllable acute.

**Examples:**
@deva[चिहणकन्थम्] "Cihaṇa's patched garment"

The @deva[चिहण]-class is listed in the Gaṇapāṭha.`,

  62126: `@deva[गर्हायां चेलखेटकटुककाण्डानि] — When expressing reproach, @deva[चेल] "cloth," @deva[खेट] "shield," @deva[कटुक] "pungent," and @deva[काण्ड] "section" have their first syllable acute.

**Examples:**
@deva[पुत्रचेलम्] "a cloth like a (useless) son"
@deva[पुत्रखेटम्] "a shield like a son"
@deva[पुत्रकटुकम्] "bitter like a son"
@deva[पुत्रकाण्डम्] "a section/affair like a son"

The reproachful sense compares something negatively to a son.`,

  62127: `@deva[उपमानाच्चीरम्] — After a comparison word, @deva[चीर] "bark-garment" has its first syllable acute.

**Examples:**
@deva[वस्त्रचीरम्] "bark-garment like cloth"
@deva[वल्कचीरम्] "bark-garment like fiber"

The comparison indicates poor quality of the garment.`,

  62128: `@deva[संसृष्टे पललसूपशाकानि] — When expressing mixture, @deva[पलल] "meat," @deva[सूप] "soup," and @deva[शाक] "vegetable" have their first syllable acute.

**Examples:**
@deva[गुडपललम्] "jaggery-meat mixture"
@deva[दधिसूपम्] "curd-soup mixture"
@deva[तिलशाकम्] "sesame-vegetable mixture"

@deva[संसृष्ट] means "mixed, combined."`,

  62129: `@deva[संज्ञायां कूलसूदस्थलकर्षाणि] — In names, @deva[कूल] "bank," @deva[सूद] "cook," @deva[स्थल] "ground," and @deva[कर्ष] "plowing" have their first syllable acute.

**Examples:**
@deva[दाक्षिकूलम्] "Dākṣi's bank" (place name)
@deva[ब्राह्मणसूदः] "Brahmin's cook" (title)
@deva[राजस्थलम्] "king's ground" (place name)
@deva[देवकर्षः] "Deva's plowing" (name)`,

  62130: `@deva[राज्यमकर्मधारये] — @deva[राज्य] "kingdom" in a non-@deva[कर्मधारय] @deva[तत्पुरुष] has its first syllable acute.

**Examples:**
@deva[ब्राह्मणराज्यम्] "Brahmin's kingdom" (genitive tatpuruṣa)
@deva[क्षत्रियराज्यम्] "Kshatriya's kingdom"

**Why "non-karmadhāraya"?**
In @deva[कर्मधारय] (appositional), different accent applies: @deva[प्रियराज्यम्].`,

  62131: `@deva[वर्ग्यादयः] — The @deva[वर्ग्य]-class words in non-@deva[कर्मधारय] compounds have their first syllable acute.

**Examples:**
@deva[वासुदेववर्ग्यः] "belonging to Vāsudeva's class"
@deva[नारायणवर्ग्यः] "belonging to Nārāyaṇa's class"

The @deva[वर्ग्य]-class is listed in the Gaṇapāṭha.`,

  62132: `@deva[पुंसि पुत्रः] — After a masculine word, @deva[पुत्र] "son" has its first syllable acute.

**Examples:**
@deva[कौनटिपुत्रः] "son of Kaunaṭi"
@deva[वात्स्यपुत्रः] "son of Vātsya"
@deva[गार्ग्यपुत्रः] "son of Gārgya"

**Why "masculine"?**
After feminine bases, different rules apply.`,

  62133: `@deva[आचार्यराज्ञर्त्विग्भ्यश्चान्तोदात्तः] — Exception: After @deva[आचार्य] "teacher," @deva[राजन्] "king," or @deva[ऋत्विज्] "priest," @deva[पुत्र] takes end-acute.

**Examples:**
@deva[आचार्यपुत्रः] "teacher's son"
@deva[राजपुत्रः] "prince" (king's son)
@deva[ऋत्विक्पुत्रः] "priest's son"

This overrides @ref[6.2.132] for these specific relationships.`,

  62134: `@deva[चूर्णादीन्यप्राणिषष्ठ्याः] — After a non-living genitive, @deva[चूर्ण]-class words have their first syllable acute.

**Examples:**
@deva[मुद्गचूर्णम्] "mung-bean powder"
@deva[तिलचूर्णम्] "sesame powder"
@deva[गोधूमचूर्णम्] "wheat flour"

**Why "non-living"?**
After living beings, different accent: @deva[गवां चूर्णम्].`,

  62135: `@deva[काण्डचीरादीनि च] — After a non-living genitive, @deva[काण्ड] "stalk," @deva[चीर] "bark," and similar words also have their first syllable acute.

**Examples:**
@deva[दर्भकाण्डम्] "darbha-grass stalk"
@deva[वल्कचीरम्] "bark fiber"
@deva[मूलकाण्डम्] "root section"

The @deva[च] extends @ref[6.2.134].`,

  62136: `@deva[कुण्डं वनम्] — @deva[कुण्ड] meaning "forest" has its first syllable acute.

**Examples:**
@deva[दर्भकुण्डम्] "darbha forest"
@deva[कुशकुण्डम्] "kusha forest"

**Why "@deva[वन] meaning"?**
When @deva[कुण्ड] means "pot" or "pit," this rule doesn't apply.

This ends the @deva[उत्तरपदाद्युदात्त] section.`,

  62137: `@deva[स्वरितं भगालादिषु] — The @deva[भगाल]-class words retain their original (svarita) accent.

**Examples:**
@deva[कुम्भीभगालम्] "pot-ladle"
@deva[दर्विभगालम्] "spoon-ladle"

These compounds preserve the base word's svarita accent without change.`,

  62138: `@deva[अतो द्व्यच्छन्दसि भसादौ] — After @deva[शिति] "white," a disyllabic word (except @deva[भसद्] "buttocks") retains its accent.

**Examples:**
@deva[शितिपादः] "white-footed"
@deva[शितिकण्ठः] "white-throated"

**Exception:**
@deva[शितिभसत्] — different accent applies.

This is primarily a Vedic rule.`,

  62139: `@deva[गतिकारकोपपदात्कृत्] — After @deva[गति] (preverb), @deva[कारक] (case relation), or @deva[उपपद] (co-word), a @deva[कृत्] affix retains its accent.

**Examples:**
@deva[प्रकारकः] "@deva[प्र] + @deva[कृ] + @deva[ण्वुल्]" — doer of preliminary action
@deva[इध्मव्रश्चनः] "fuel-cutter" — @deva[इध्म] (upapada) + @deva[व्रश्च्] + @deva[ल्युट्]
@deva[कुम्भकारः] "pot-maker"

The @deva[कृत्] suffix determines the accent.`,

  62140: `@deva[उभे वनस्पत्यादिषु] — In @deva[वनस्पति]-class compounds, both members retain their accent.

**Examples:**
@deva[वनस्पतिः] "lord of the forest" — both @deva[वन] and @deva[पति] accented
@deva[बृहस्पतिः] "lord of prayer" — both @deva[बृह] and @deva[पति] accented
@deva[नरपतिः] "lord of men"

The @deva[वनस्पति]-class is listed in the Gaṇapāṭha.`,

  62141: `@deva[उभे देवतद्वन्द्वे] — In @deva[द्वन्द्व] (copulative compound) of deity names, both members retain their accent.

**Examples:**
@deva[इन्द्रासोमौ] "Indra and Soma"
@deva[इन्द्रावरुणौ] "Indra and Varuṇa"
@deva[मित्रावरुणौ] "Mitra and Varuṇa"

Both divine names keep their original accent.`,

  62142: `@deva[अनुदात्तादेरादेरुदात्तः] — Exception: In a deity @deva[द्वन्द्व] where the second member has initial @deva[अनुदात्त] (grave), only the first member retains its accent.

**Examples:**
@deva[इन्द्राग्नी] "Indra and Agni" — only @deva[इन्द्र] accented
@deva[अग्नीषोमौ] "Agni and Soma"

Since @deva[अग्नि] begins with grave @deva[अ], the dual accent rule is suspended.`,

  62143: `@deva[अन्तोदात्तः] — ADHIKĀRA: The compound is @deva[अन्तोदात्त] (end-acute).

This heading governs sūtras from here to the end of pāda 6.2. The accent falls on the final syllable.`,

  62144: `@deva[गतिकारकोपपदात्थाद्यान्ताः] — After @deva[गति], @deva[कारक], or @deva[उपपद], @deva[कृत्] affixes @deva[थ], @deva[अथ], @deva[घञ्], @deva[क्त], @deva[अच्], @deva[अप्], @deva[इत्र], and @deva[क] produce end-acute compounds.

**Examples:**
@deva[सुनीथः] "good leader" — @deva[सु] + @deva[नी] + @deva[थ]
@deva[प्रभेदः] "distinction" — @deva[प्र] + @deva[भिद्] + @deva[घञ्]
@deva[सुकृतम्] "well-done" — @deva[सु] + @deva[कृ] + @deva[क्त]
@deva[प्रचरित्रम्] "conduct" — @deva[प्र] + @deva[चर्] + @deva[इत्र]`,

  62145: `@deva[क्तस्योपमानाच्च सोः] — @deva[क्त] after @deva[सु] or a comparison word is end-acute.

**Examples:**
@deva[सुकृतम्] "well-done"
@deva[सुभाषितम्] "well-spoken"
@deva[वृकावलुप्तम्] "torn by a wolf" (comparison: like a wolf tears)

The @deva[सु] and @deva[उपमान] contexts trigger end-accent.`,

  62146: `@deva[संज्ञायामाचितादेर्न] — @deva[क्त] after @deva[गति]/upapada in a name is end-acute, except for @deva[आचित]-class words.

**Examples:**
@deva[संभूतः] "well-born" (name)
@deva[प्रसूतः] "born forth" (name)
@deva[विभूतः] "manifested" (name)

**Exceptions (@deva[आचित]-class):**
@deva[आचितः], @deva[प्रचितः] — retain their @deva[कृत्] accent.`,

  62147: `@deva[प्रवृद्धादयश्च] — The @deva[प्रवृद्ध]-class words are end-acute.

**Examples:**
@deva[प्रवृद्धम्] "well-grown" — @deva[प्रवृद्धं यानम्] "a grown vehicle"
@deva[परिवृद्धम्] "fully grown"

The @deva[प्रवृद्ध]-class is listed in the Gaṇapāṭha.`,

  62148: `@deva[कारकाद्दत्तश्रुतयोः संज्ञाशिषोः] — @deva[दत्त] "given" and @deva[श्रुत] "heard" after a @deva[कारक] in names and benedictions are end-acute.

**Examples:**
@deva[देवदत्तः] "god-given" (name)
@deva[विष्णुदत्तः] "Viṣṇu-given" (name)
@deva[विष्णुश्रुतः] "heard by Viṣṇu" (name)
@deva[इन्द्रदत्तो भव] "may you be Indra-given" (benediction)

Names and blessings with these forms are end-acute.`,

  62149: `@deva[तथास्य तद्वोरभूतभावादौ] — @deva[क्त] meaning "done by one in such a condition" is end-acute.

**Examples:**
@deva[सुप्तप्रलपितम्] "words spoken while asleep"
@deva[मत्तप्रलपितम्] "words spoken while intoxicated"
@deva[उन्मत्तप्रलपितम्] "words spoken while insane"

The condition of the agent (@deva[सुप्त], @deva[मत्त]) qualifies the action.`,

  62150: `@deva[कारकादन्प्रत्ययस्य भावकर्मणोः] — The @deva[अन्] affix (in @deva[भाव] "action" or @deva[कर्मन्] "object" sense) after a @deva[कारक] is end-acute.

**Examples:**
@deva[ओदनभोजनम्] "rice-eating" (action)
@deva[यज्ञकरणम्] "sacrifice-performing" (action)
@deva[गृहगमनम्] "house-going" (object sense)

The @deva[ल्युट्] (= @deva[अन]) affix creates action nouns.`,
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.2.101-150)`);
console.log(`Total entries: ${Object.keys(data).length}`);
