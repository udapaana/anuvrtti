#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "63001": `@deva[अलुग्उत्तरपदे] — ADHIKĀRA: The case-ending is not elided (@deva[अलुक्]) before the second member.

This heading governs sūtras through @ref[6.3.24]. Normally compound members lose their case-endings (@ref[2.4.71]), but this section lists exceptions.

**Example:**
@deva[स्तोकान्मुक्तः] "released from little" — ablative @deva[आत्] retained`,

  "63002": `@deva[पञ्चम्याः स्तोकादिभ्यः] — The ablative case-ending is retained after @deva[स्तोक] "little" and similar words.

**Examples:**
@deva[स्तोकान्मुक्तः] "released from little"
@deva[अल्पान्मुक्तः] "released from little"
@deva[दूरादागतः] "come from afar"

Vt: Also @deva[ब्राह्मणाच्छंसिन्] "one who praises Brahmins."

The @deva[स्तोक]-class is listed in the Gaṇapāṭha.`,

  "63003": `@deva[ओजःसहोऽम्भस्तमसां जसि] — The instrumental case-ending is retained after @deva[ओजस्] "strength," @deva[सहस्] "power," @deva[अम्भस्] "water," and @deva[तमस्] "darkness."

**Examples:**
@deva[ओजसाकृतम्] "made with strength"
@deva[सहसाकृतम्] "made with power"
@deva[अम्भसाप्लुतम्] "flooded with water"
@deva[तमसाव्याप्तम्] "covered with darkness"

Vt: Also @deva[अञ्जसा], @deva[पुंसानुजः] "younger brother," @deva[जनुषान्धः] "blind from birth."`,

  "63004": `@deva[संज्ञायां मनसः] — The instrumental of @deva[मनस्] "mind" is retained when the compound is a name.

**Example:**
@deva[मनसादत्ता] "given by mind" (name)

**Not a name:**
@deva[मनोदत्ता] — regular compound, no case retention`,

  "63005": `@deva[आज्ञायिन्यां च] — The instrumental of @deva[मनस्] is also retained before @deva[आज्ञायिन्] "knowing."

**Example:**
@deva[मनसाज्ञायिन्] "knowing by mind, intuitive"

The @deva[च] "and" extends @ref[6.3.4].`,

  "63006": `@deva[आत्मनः पूरणीप्रभृतिभ्यः] — The instrumental of @deva[आत्मन्] "self" is retained before ordinal numerals and onward.

**Examples:**
@deva[आत्मनापञ्चमः] "himself being the fifth"
@deva[आत्मनाषष्ठः] "himself being the sixth"
@deva[आत्मनादशमः] "himself being the tenth"

These express "with oneself as the Nth member."`,

  "63007": `@deva[संज्ञायां चतुर्थ्याः] — The dative of @deva[आत्मन्] is retained when forming a technical term.

**Examples:**
@deva[आत्मनेपदम्] "word for oneself" — middle voice endings
@deva[आत्मनेभाषा] "speech for oneself"

These are grammatical @deva[संज्ञा] (technical terms).`,

  "63008": `@deva[परस्य च] — The dative of @deva[पर] "other" is likewise retained in technical terms.

**Examples:**
@deva[परस्मैपदम्] "word for another" — active voice endings
@deva[परस्मभाषा] "speech for another"

The @deva[च] indicates this parallels @ref[6.3.7].`,

  "63009": `@deva[संज्ञायां हलाकारसप्तमी] — The locative after a consonant or @deva[अ]-ending stem is retained in names.

**Examples:**
@deva[युधिष्ठिरः] "firm in battle" (name)
@deva[गविष्ठिरः] "firm in cattle" (name)
@deva[अरण्येतिलकाः] "tilaka-trees in the forest" (name)

Vt: Also @deva[हृदिस्पृक्] "touching the heart," @deva[दिविस्पृक्] "touching heaven."`,

  "63010": `@deva[शुल्कशास्त्रे हल्पूर्वस्य प्राचाम्] — In Eastern tax terminology, the locative is retained before a consonant.

**Examples:**
@deva[सूपेशाणः] "tax on soup"
@deva[दृषदिमाषकः] "tax on stone"
@deva[हलेद्विपदिका] "two-padika tax on plows"

These are regional fiscal terms.`,

  "63011": `@deva[मध्येगुरोः] — The locative of @deva[मध्य] "middle" is retained before @deva[गुरु] "teacher."

**Example:**
@deva[मध्येगुरुः] "in the presence of the teacher"

Vt: Also @deva[अन्तेगुरुः] "at the end with the teacher."`,

  "63012": `@deva[अमूर्धमस्तकात्स्वाङ्गं चाकामे] — The locative of a body-part (except @deva[मूर्धन्] "head-top" and @deva[मस्तक] "skull") is retained before non-@deva[काम] words.

**Examples:**
@deva[कण्ठेकालः] "mark on the throat"
@deva[उरसिलोमा] "hair on the chest"
@deva[हस्तेपाणिः] "hand on the hand"

**Exception:**
@deva[मुखकामः] "desiring the face" — @deva[काम] blocks retention`,

  "63013": `@deva[बन्धे च विकल्पः] — The locative is optionally retained before @deva[बन्ध] "bond."

**Both forms valid:**
@deva[हस्तेबन्धः] or @deva[हस्तबन्धः] "hand-bond"
@deva[चक्रेबन्धः] or @deva[चक्रबन्धः] "wheel-bond"

The option allows either form.`,

  "63014": `@deva[तत्पुरुषे कृति बहुलम्] — In @deva[तत्पुरुष] before a @deva[कृत्] affix, the locative is optionally retained.

**Examples:**
@deva[स्तम्बेरमः] "delighting in posts" (locative retained)
@deva[कुरुचरः] "moving in Kuru" (locative not retained)

@deva[बहुलम्] "variously" indicates the option.`,

  "63015": `@deva[प्रावृषो जि] — The locative is retained after @deva[प्रावृष्] "rainy season," @deva[काल] "time," and @deva[दिव्] "day/heaven" before @deva[ज] "born."

**Examples:**
@deva[प्रावृषिजः] "born in rainy season"
@deva[कालेजः] "born at the (right) time"
@deva[दिविजः] "born in heaven, divine"`,

  "63016": `@deva[वर्षक्षरशरवरात्] — The locative is optionally retained after @deva[वर्ष] "rain/year," @deva[क्षर] "flowing," @deva[शर] "reed," and @deva[वर] "best" before @deva[ज].

**Both forms valid:**
@deva[वर्षेजः] or @deva[वर्षजः] "born in rain"
@deva[शरेजः] or @deva[शरजः] "born among reeds"`,

  "63017": `@deva[कालाद्यतनतरतमकालेषु] — The locative is optionally retained after time-words before @deva[तर], @deva[तम], @deva[काल], and @deva[तन] affixes.

**Both forms valid:**
@deva[पूर्वाह्णेतरे] or @deva[पूर्वाह्णतरे] "in the earlier forenoon"
@deva[सायंतनः] or @deva[सायाह्णेतनः] "of the evening"`,

  "63018": `@deva[हलो वा श्शय्वासवासिषु] — The locative is optionally retained after a consonant before @deva[शय] "lying," @deva[वास] "dwelling," and @deva[वासिन्] "dweller."

**Both forms valid:**
@deva[खेशयः] or @deva[खशयः] "lying in the sky"
@deva[स्थलेवासी] or @deva[स्थलवासी] "dweller on land"

Vt: Also @deva[अप्सुयोनिः] "having origin in water."`,

  "63019": `@deva[इन्सिद्धबन्धेषु न] — The locative is not retained before derivatives of @deva[इन्], @deva[सिद्ध], or @deva[बन्ध].

**Examples:**
@deva[स्थण्डिलशायिन्] "lying on bare ground" (not *@deva[स्थण्डिलेशायिन्])
@deva[चक्रबन्धकः] "wheel-binder" (not *@deva[चक्रेबन्धकः])

This overrides @ref[6.3.18].`,

  "63020": `@deva[स्थे लौकिके] — The locative is not retained before @deva[स्थ] "standing" in spoken (non-Vedic) language.

**Examples:**
@deva[विषमस्थः] "standing in difficulty"
@deva[कूटस्थः] "standing at the peak"

**Vedic:**
@deva[आखरेष्ठः] — locative retained in Vedic`,

  "63021": `@deva[षष्ठी चानादरे] — The genitive is retained when insult is intended.

**Example:**
@deva[चौरस्यकुलम्] "the thief's family!" (derogatory)

Vt: Also @deva[वाचोयुक्तिः] "joining of words," @deva[देवानांप्रियः] "dear to the gods," @deva[शुनःशेपः] "Śunaḥśepa" (name), @deva[दिवोदासः] "Divodāsa" (name).`,

  "63022": `@deva[पुत्रे गर्हायाम्] — The genitive is optionally retained before @deva[पुत्र] "son" when expressing contempt.

**Both forms:**
@deva[दास्याःपुत्रः] or @deva[दासीपुत्रः] "slave-woman's son!" (insult)

The option adds emphasis to the contempt.`,

  "63023": `@deva[ऋतोऽध्ययनस्वस्त्ययनयोश्च] — The genitive of an @deva[ऋ]-ending stem is retained when indicating study or blood relationship.

**Examples:**
@deva[होतुःपुत्रः] "son of the hotṛ priest"
@deva[पितुःपुत्रः] "son of the father"
@deva[कर्तुःशिष्यः] "student of the doer"

These express lineage or discipleship.`,

  "63024": `@deva[अभ्र्नादिभ्यः स्वसृपतृव्योः] — After @deva[ऋ]-ending stems, the genitive is optionally elided before @deva[स्वसृ] "sister" and @deva[पत्नी] "wife."

**Both forms:**
@deva[मातुःस्वसा] or @deva[मातृष्वसा] "mother's sister"
@deva[भ्रातुःपत्नी] or @deva[भ्रातृपत्नी] "brother's wife"

This ends the @deva[अलुक्] section.`,

  "63025": `@deva[ऋतो द्वन्द्वे] — In @deva[द्वन्द्व] compounds of @deva[ऋ]-ending relationship terms, @deva[आनङ्] replaces the @deva[ऋ] of the first member.

**Examples:**
@deva[होतापोतारौ] "hotṛ and potṛ" (@deva[होतृ] → @deva[होता])
@deva[मातापितरौ] "mother and father" (@deva[मातृ] → @deva[माता])
@deva[नप्तारौ] "grandson and granddaughter"

The @deva[आनङ्] augment gives the long @deva[आ] ending.`,

  "63026": `@deva[देवतायाम्] — In @deva[द्वन्द्व] of deity names, @deva[आनङ्] replaces the final of the first member.

**Examples:**
@deva[इन्द्रावरुणौ] "Indra and Varuṇa"
@deva[मित्रावरुणौ] "Mitra and Varuṇa"
@deva[अग्निमारुतौ] "Agni and Marut"

Vt: Not with @deva[वायु] — @deva[इन्द्रवायू] (not *@deva[इन्द्रावायू]).`,

  "63027": `@deva[सोमवरुणयोरग्नेः] — Before @deva[सोम] or @deva[वरुण], @deva[अग्नि] becomes @deva[अग्नी].

**Examples:**
@deva[अग्नीषोमौ] "Agni and Soma"
@deva[अग्नीवरुणौ] "Agni and Varuṇa"

The @deva[इ] → @deva[ई] lengthening is specific to these pairs.`,

  "63028": `@deva[वृद्ध्यौ ह्रस्वः] — When both @deva[द्वन्द्व] members take @deva[वृद्धि], @deva[अग्नि] remains short.

**Examples:**
@deva[आग्निवारुणी] "relating to Agni-Varuṇa"
@deva[आग्निमारुतम्] "relating to Agni-Marut"

Vt: Not before @deva[विष्णु] — @deva[आग्नैष्णवम्] (not *@deva[आग्निवैष्णवम्]).`,

  "63029": `@deva[द्यावा च देवतायाम्] — In deity @deva[द्वन्द्व], @deva[दिव्] becomes @deva[द्यावा].

**Examples:**
@deva[द्यावाक्षामा] "Dyaus and Earth"
@deva[द्यावाभूमी] "Heaven and Earth"

The substitution gives the paired-deity form.`,

  "63030": `@deva[पृथिव्याम् च द्यावा दिवसश्च] — Before @deva[पृथिवी], @deva[दिव्] becomes @deva[द्यावा] or @deva[दिवस्].

**Both forms:**
@deva[द्यावापृथिव्यौ] "Heaven and Earth"
@deva[दिवस्पृथिव्यौ] "Heaven and Earth"

The option allows either substitute.`,

  "63031": `@deva[उषासा च] — In deity @deva[द्वन्द्व], @deva[उषस्] becomes @deva[उषासा].

**Example:**
@deva[उषासानक्ता] "Dawn and Night"

The @deva[स्] → @deva[सा] change is specific to this compound.`,

  "63032": `@deva[मातुरुत्पूर्वस्यां च] — Northern grammarians accept @deva[अरङ्] substitution.

**Example:**
@deva[मातरपितरौ] "mother and father" (variant of @deva[मातापितरौ])

This reflects dialectal variation in @deva[द्वन्द्व] formation.`,

  "63033": `@deva[छन्दसि पितरमातरा] — In Vedic, reversed order @deva[पितरामातरा] with @deva[अङ्] is valid.

**Vedic:**
@deva[पितरामातरा] "father and mother"

This preserves an archaic pattern.`,

  "63034": `@deva[स्त्रियाः पुंवत्] — A feminine first member becomes masculine in apposition before a feminine second member.

**Example:**
@deva[दर्शनीयभार्यः] "one whose wife is beautiful" (from @deva[दर्शनीया भार्या])

**Exceptions:**
- @deva[ऊङ्]-endings
- Ordinals (@deva[प्रथमा], etc.)
- @deva[प्रिय]-class words`,

  "63035": `@deva[तसिलादिषु पूर्वस्य] — The feminine becomes masculine before @deva[तसिल्] through @deva[कृत्वसुच्] affixes.

**Examples:**
@deva[ततः] "thence" (from feminine @deva[सा])
@deva[तत्र] "there"
@deva[यत्र] "where"

Vt: Also before @deva[त्व/तल्] abstract suffixes.`,

  "63036": `@deva[क्यङमानिनोश्च] — The feminine becomes masculine before @deva[क्यङ्] and @deva[मानिन्].

**Examples:**
@deva[एतायते] "he behaves like this" (@deva[एता] → masculine)
@deva[दर्शनीयमानिनी] "one who considers herself beautiful"`,

  "63037": `@deva[पुंवत्कर्मधारयजातीयदेशीयेषु] — The masculine substitution applies in @deva[कर्मधारय] and before @deva[जातीय/देशीय].

**Examples:**
@deva[पाचकवृन्दारिका] "cooking girl"
@deva[दत्तजातीया] "Dattā-type"
@deva[पाटलिपुत्रदेशीया] "Pāṭaliputra-style"`,

  "63038": `@deva[संज्ञापूरणीप्रियाणाम् अप्रतिषेधः] — Names and ordinals don't undergo masculine substitution.

**Examples:**
@deva[दत्ताभार्यः] "one whose wife is Dattā" (name preserved)
@deva[पञ्चमीभार्यः] "one whose wife is a fifth" (ordinal preserved)

These retain their feminine form.`,

  "63039": `@deva[वृद्धात्तद्धिते विशेषणे] — @deva[वृद्धि]-causing @deva[तद्धित] blocks masculine change.

**Example:**
@deva[स्रौघ्नीभार्यः] "one whose wife is from Srughna"

**Exception:**
Color and material meanings allow the change.`,

  "63040": `@deva[स्वाङ्गाच्छोपसर्जनात्] — @deva[ई]-ending body-part words don't become masculine (except before @deva[मानिन्]).

**Example:**
@deva[दीर्घकेशीभार्यः] "one whose wife has long hair"

**Exception:**
@deva[दीर्घकेशमानिनी] "one who prides herself on long hair" — masculine applies`,

  "63041": `@deva[जात्याख्यायाम्] — Class-denoting feminines don't become masculine.

**Examples:**
@deva[कठीभार्यः] "one whose wife is a Kaṭha"
@deva[बह्वृचीभार्यः] "one whose wife is a Bahvṛcī"

Class designations preserve gender.`,

  "63042": `@deva[कर्मधारयजातीयदेशीयेषु] — In @deva[कर्मधारय] and before @deva[जातीय/देशीय], feminine becomes masculine.

**Examples:**
@deva[पाचकवृन्दारिका] "cooking-maiden"
@deva[दत्तजातीया] "of the Dattā type"

This applies the @deva[पुंवत्] rule specifically in these compound types.`,

  "63043": `@deva[ङ्योंहास्वः] — @deva[ङी] shortens before @deva[तर], @deva[तम], @deva[रूप], @deva[कल्प], @deva[चेल], @deva[ब्रुव], @deva[गोत्र], @deva[मत], @deva[हत] when polysyllabic.

**Examples:**
@deva[ब्राह्मणितरा] "more Brahmin-like" (from @deva[ब्राह्मणी])
@deva[गार्गितमा] "most Gārgī-like"
@deva[ब्राह्मणिकल्पा] "Brahmin-like"

The long @deva[ई] → short @deva[इ].`,

  "63044": `@deva[वोपसर्जनस्य] — Remaining @deva[नदी] words optionally shorten.

**Both forms:**
@deva[ब्रह्मबन्धूतरा] or @deva[ब्रह्मबन्धुतरा] "more Brahmabandhū-like"

Vt: @deva[कृत्]-formed exceptions follow other rules.`,

  "63045": `@deva[उरितोऽत्तद्धिते] — @deva[उ/ऋ]-marked @deva[तद्धित] @deva[ई] optionally shortens.

**All forms valid:**
@deva[श्रेयसितरा] or @deva[श्रेयसीतरा] or @deva[श्रेयस्तरा] "more excellent"

The triple option reflects variation in usage.`,

  "63046": `@deva[महतो विशेषणे बहुव्रीहौ] — @deva[महत्] becomes @deva[महा] before an appositional word or @deva[जातीय].

**Examples:**
@deva[महादेवः] "great god" (Śiva)
@deva[महाब्राह्मणः] "great Brahmin"
@deva[महाराजः] "great king"

Vt: Also before @deva[घास/कर/विशिष्ट].`,

  "63047": `@deva[द्व्यष्टनोरकारविशेषणे] — @deva[द्वि] and @deva[अष्टन्] become @deva[द्वा] and @deva[अष्टा] before numerals (not in @deva[बहुव्रीहि], not before @deva[अशीति]).

**Examples:**
@deva[द्वादश] "twelve"
@deva[अष्टादश] "eighteen"
@deva[द्वाविंशतिः] "twenty-two"

These apply through 100.`,

  "63048": `@deva[त्रयस्त्रि] — @deva[त्रि] becomes @deva[त्रयस्] before numerals (not in @deva[बहुव्रीहि], not before @deva[अशीति]).

**Examples:**
@deva[त्रयोदश] "thirteen"
@deva[त्रयोविंशतिः] "twenty-three"
@deva[त्रयस्त्रिंशत्] "thirty-three"`,

  "63049": `@deva[विभाषा चत्वारिंशतः] — The substitutions are optional before @deva[चत्वारिंशत्] "forty" and onward.

**Both forms:**
@deva[द्विचत्वारिंशत्] or @deva[द्वाचत्वारिंशत्] "forty-two"
@deva[त्रिचत्वारिंशत्] or @deva[त्रयश्चत्वारिंशत्] "forty-three"`,

  "63050": `@deva[हृदयस्य हृद्लेखयतोः] — @deva[हृदय] "heart" becomes @deva[हृद्] before @deva[लेख] "writing," @deva[यत्], @deva[अण्], and @deva[लास] "play."

**Examples:**
@deva[हृल्लेखः] "heart-writing"
@deva[हृद्यम्] "dear to the heart" (@deva[यत्])
@deva[हार्दम्] "of the heart" (@deva[अण्])
@deva[हृल्लासः] "heart-play, delight"`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.3.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
