import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '32046': `@deva[भृतॄवृजिधारिसहितपिदमः खच्] — "After @deva[भृ], @deva[तॄ], @deva[वृ], @deva[जि], @deva[धारि], @deva[सहि], @deva[तपि], and @deva[दम्], @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[विश्वम्भरा] | earth (supports all) |
| @deva[रथन्तरः] | the Rathantara Sāma |
| @deva[पतिंवरा] | girl (about to choose a husband) |
| @deva[शत्रुञ्जयः] | elephant (conquers the enemy) |
| @deva[युगन्धरः] | mountain/pole |

Both @deva[कर्मणि] (accusative) and @deva[सुपि] (any case) apply as context requires.`,

  '32047': `@deva[गमश्च सञ्ज्ञायाम्] — "After @deva[गम्] 'to go', @deva[खच्] is used with a case-inflected word when forming a proper name."

@deva[सुतङ्गमः] — proper name "Sutaṅgama"

@note[Separating @deva[गम्] from the previous sūtra allows its @deva[अनुवृत्ति] to extend to subsequent sūtras.]`,

  '32048': `@deva[अन्तादयश्च ड] — "After @deva[गम्] with @deva[अन्त], @deva[अत्यन्त], @deva[अध्वन्], @deva[दूर], @deva[पार], @deva[सर्व], or @deva[अनन्त], @deva[ड] is used."

| Example | Meaning |
|---------|---------|
| @deva[अन्तगः] | thoroughly conversant |
| @deva[अत्यन्तगः] | going too fast |
| @deva[अध्वगः] | wayfarer |
| @deva[दूरगः] | going to a distant place |
| @deva[पारगः] | completely familiar |
| @deva[सर्वगः] | omnipresent, Supreme Being |
| @deva[अनन्तगः] | moving forever |

@note[The @deva[सञ्ज्ञायाम्] restriction does not apply here.]`,

  '32049': `@deva[आशंसायां हनः ड] — "After @deva[हन्] 'to kill', @deva[ड] is used when benediction is intended."

| Example | Meaning |
|---------|---------|
| @deva[तिमिहः] | "may he kill the whale" |
| @deva[शत्रुहः] | "may he kill the enemy" |

Without benediction: @deva[शत्रुघातः] "one who kills enemies" (with @deva[अण्])`,

  '32050': `@deva[क्लेशतमसोरपहने ड] — "After @deva[हन्] with prefix @deva[अप्] and @deva[क्लेश] 'pain' or @deva[तमस्] 'darkness', @deva[ड] is used."

| Example | Meaning |
|---------|---------|
| @deva[क्लेशापहः पुत्रः] | son, the pain-remover |
| @deva[तमोऽपहः सूर्यः] | sun, the darkness-destroyer |

This applies when benediction is NOT meant.`,

  '32051': `@deva[कुमारशीर्षयोश्च हनो णिनि] — "After @deva[हन्] with @deva[कुमार] 'child' or @deva[शीर्ष] 'head', @deva[णिनि] is used."

| Derivation | Form |
|------------|------|
| @deva[कुमार] + @deva[हन्] + @deva[णिनि] | @deva[कुमारघाती] "child-killer" |
| @deva[शीर्ष] + @deva[हन्] + @deva[णिनि] | @deva[शीर्षघाती] "head-killer" |

@note[@deva[शीर्ष] is an irregular form of @deva[शिरस्].]`,

  '32052': `@deva[जायापत्योर्लक्षणे टक्] — "After @deva[हन्] with @deva[जाया] 'wife' or @deva[पति] 'husband', @deva[टक्] is used when denoting a mark/sign."

| Example | Meaning |
|---------|---------|
| @deva[जायाघ्नः] | mole indicating death of one's wife |
| @deva[पतिघ्नी पाणिरेखा] | palm line indicating death of husband |

The word @deva[लक्षण] can mean either "the agent is itself a mark" or "the agent possesses a mark."`,

  '32053': `@deva[अमनुष्यकर्तृके च] — "After @deva[हन्] with accusative object, @deva[टक्] is used when the agent is non-human."

| Example | Meaning |
|---------|---------|
| @deva[जायाघ्नस्तिलकालकः] | mole (indicates wife's death) |
| @deva[श्लेष्मघ्नं मधु] | honey (destroys phlegm) |
| @deva[पित्तघ्नं घृतम्] | ghee (destroys bile) |`,

  '32054': `@deva[हस्तिकपाटयोर्शक्त्याम्] — "After @deva[हन्] with @deva[हस्ति] 'elephant' or @deva[कपाट] 'gate', @deva[टक्] is used when power is indicated."

| Example | Meaning |
|---------|---------|
| @deva[हस्तिघ्नः मनुष्यः] | man capable of killing an elephant |
| @deva[कपाटघ्नः] | burglar (able to break doors) |

Without power-sense: @deva[हस्तिघातः] "one who kills an elephant with poison" (with @deva[अण्])`,

  '32055': `@deva[पाणिघताडघाश्च शिल्पिनि] — "The words @deva[पाणिघ] and @deva[ताडघ] are irregular when denoting an artisan."

| Word | Meaning |
|------|---------|
| @deva[पाणिघः] | drummer, handicraftsman |
| @deva[ताडघः] | smith |

**Formation:** @deva[पाणि] + @deva[हन्] + @deva[क] → @deva[टि] (@deva[अन्]) elided, @deva[ह] → @deva[घ]

When not artisan: @deva[पाणिघातः] "boxing," @deva[ताडघातः] "hammering"`,

  '32056': `@deva[आढ्यसुभगस्थूलपलितनग्नान्धप्रियेषु च्विकरणे ख्युन्] — "After @deva[कृ] with @deva[आढ्य], @deva[सुभग], @deva[स्थूल], @deva[पलित], @deva[नग्न], @deva[अन्ध], @deva[प्रिय] (as if with @deva[च्वि]), @deva[ख्युन्] is used when expressing instrumental agency."

| Example | Meaning |
|---------|---------|
| @deva[आढ्यंकरणः] | that which makes rich |
| @deva[सुभगंकरणः] | that which makes fortunate |
| @deva[नग्नंकरणः] | that which makes naked |

The @deva[च्वि] affix (@ref[5.4.50]) converts nouns to "becoming X" when with @deva[भू], @deva[कृ], @deva[अस्].`,

  '32057': `@deva[भूवि च्विकरणे खिष्णुच्खुकञौ] — "After @deva[भू] with @deva[च्वि]-type words, @deva[खिष्णुच्] and @deva[खुकञ्] are used when denoting an agent."

| With @deva[खिष्णुच्] | With @deva[खुकञ्] | Meaning |
|---------------------|-------------------|---------|
| @deva[आढ्यम्भविष्णुः] | @deva[आढ्यम्भावुकः] | becoming rich |
| @deva[सुभगम्भविष्णुः] | @deva[सुभगम्भावुकः] | becoming happy |
| @deva[नग्नम्भविष्णुः] | @deva[नग्नम्भावुकः] | becoming naked |`,

  '32058': `@deva[अनुदकेऽण्यतरस्याम्] — "After @deva[स्पृश्] 'to touch' with a case-inflected word other than @deva[उदक] 'water', @deva[क्विन्] is used."

| Example | Meaning |
|---------|---------|
| @deva[अक्षस्पृक्] | touching dice |
| @deva[धर्मस्पृक्] | touching dharma |

With @deva[उदक]: @deva[उदकस्पर्शः] (general affix)`,

  '32059': `@deva[ऋत्विग्दधृक्स्रग्दिगुष्णिगञ्चुयुजिक्रुञ्चश्च] — "The words @deva[ऋत्विक्], @deva[दधृक्], @deva[स्रक्], @deva[दिक्], @deva[उष्णिक्] are irregular with @deva[क्विन्]; also after @deva[अञ्च्], @deva[युज्], @deva[क्रुञ्च्]."

| Word | Meaning |
|------|---------|
| @deva[ऋत्विक्] | domestic priest (@deva[ऋतौ यजति]) |
| @deva[दधृक्] | impudent |
| @deva[स्रक्] | garland |
| @deva[दिक्] | direction |
| @deva[उष्णिक्] | quatrain meter |

After @deva[अञ्च्], @deva[युज्], @deva[क्रुञ्च्]: forms with @deva[क्विन्] are regular.`,

  '32060': `@deva[त्यदादिषु दृशोऽनालोचने कञ्च] — "After @deva[दृश्] 'to see' with @deva[त्यद्] etc. (pronouns), both @deva[कञ्] and @deva[क्विन्] are used when not meaning perception."

| With @deva[क्विन्] | With @deva[कञ्] | Meaning |
|------------------|----------------|---------|
| @deva[त्यादृक्] | @deva[त्यादृशः] | such-like |
| @deva[तादृक्] | @deva[तादृशः] | such |
| @deva[यादृक्] | @deva[यादृशः] | which-like |`,

  '32061': `@deva[सद्सूद्विड्...] — "After @deva[सद्], @deva[सू], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[विद्], @deva[भिद्], @deva[छिद्], @deva[जि], @deva[नी], @deva[राज्], @deva[क्विप्] is used with a case-inflected word or @deva[उपसर्ग]."

| Root | Example | Meaning |
|------|---------|---------|
| @deva[सद्] | @deva[परिषद्] | assembly |
| @deva[द्विष्] | @deva[ब्रह्मद्विट्] | Brahman-hater |
| @deva[युज्] | @deva[अश्वयुक्] | horse-yoker |
| @deva[राज्] | @deva[स्वराज्] | self-ruling |`,

  '32062': `@deva[उपसर्गे च सङ्ख्यापूर्वे भजोऽन्यतरस्याम्] — "After @deva[भज्] 'to share' with a case-inflected word or @deva[उपसर्ग], @deva[ण्वि] is used."

| Example | Meaning |
|---------|---------|
| @deva[अर्धभाक्] | sharing a half |
| @deva[प्रभाक्] | division |`,

  '32063': `@deva[सहश्छन्दसि] — "In the Vedas, @deva[ण्वि] comes after @deva[सह्] with a case-inflected word."

@deva[तुर] + @deva[सह्] + @deva[ण्वि] → @deva[तुरासाट्] — name of Indra

@note[@deva[स] → @deva[ष] by @ref[8.3.56]; @deva[ह्] → @deva[ट्] by @ref[8.2.31]; final @deva[अ] of @deva[तुर] lengthened by @ref[6.3.137].]`,

  '32064': `@deva[वहश्च] — "In the Vedas, @deva[ण्वि] comes after @deva[वह्] with a case-inflected word."

| Example | Meaning |
|---------|---------|
| @deva[प्रष्ठवाट्] | carrying a prastha measure |
| @deva[दित्यवाट्] | (Vedic form) |

@note[Separating from previous sūtra allows @deva[वह्] alone to extend into subsequent sūtras.]`,

  '32065': `@deva[कव्यपुरीषपुरीष्येषु ञ्युट्] — "In the Vedas, @deva[ञ्युट्] comes after @deva[वह्] with @deva[कव्य], @deva[पुरीष], or @deva[पुरीष्य]."

| Example | Meaning | Source |
|---------|---------|--------|
| @deva[कव्यवाहनः] | fire carrying oblation to pitṛs | Yaj. Ved. II.29 |
| @deva[पुरीषवाहनः] | carrier of water | — |
| @deva[पुरीष्यवाहनः] | — | Yaj. Ved. XI.44 |`,

  '32066': `@deva[हव्येऽपादादौ] — "In the Vedas, @deva[ञ्युट्] comes after @deva[वह्] with @deva[हव्य] when NOT in the middle of a pāda."

**At end of pāda:** @deva[अग्निश्च हव्यवाहनः] (Ṛg Ved. I.44.2)
**At beginning/middle:** @deva[हव्यवाट्] (with @deva[ण्वि] instead)`,

  '32067': `@deva[जन्सन्खन्क्रम्गमां विट् आकारान्तादेशश्च] — "In the Vedas, @deva[विट्] (fully elided) comes after @deva[जन्], @deva[सन्], @deva[खन्], @deva[क्रम्], @deva[गम्] with case-inflected words, and the final nasal → @deva[आ]."

| Root | Example | Meaning |
|------|---------|---------|
| @deva[जन्] | @deva[सोमपा] | Soma-drinker |
| @deva[क्रम्] | @deva[उरुक्रमा] | wide-strider (Viṣṇu) |
| @deva[गम्] | @deva[ऋतजा] | born of truth |`,

  '32068': `@deva[अन्नान्ताद्विट्] — "After @deva[अद्] 'to eat' with a case-inflected word other than @deva[अन्न] 'food', @deva[विट्] is used."

| Example | Meaning |
|---------|---------|
| @deva[आमात्] | eating raw food |
| @deva[शस्यात्] | granivorous |

With @deva[अन्न]: @deva[अन्नादः] (general @deva[अण्] by @ref[3.2.1])`,

  '32069': `@deva[क्रव्येऽप्यस्य] — "After @deva[अद्] with @deva[क्रव्य], @deva[विट्] is used."

@deva[क्रव्यात्] — "carnivorous"

@note[This separate sūtra indicates that @deva[वासरूप] (@ref[3.1.94]) does not apply—@deva[अण्] is not an option. The form @deva[क्रव्यादः] comes from @deva[अण्] applied after @deva[विट्]-formation.]`,

  '32070': `@deva[दुहः कप् घश्च] — "After @deva[दुह्] 'to milk' with a case-inflected word, @deva[कप्] is used and the final → @deva[घ]."

| Example | Meaning |
|---------|---------|
| @deva[कामदुघा धेनुः] | wish-fulfilling cow |
| @deva[अर्थदुघा] | yielding wealth |
| @deva[धर्मदुघा] | yielding dharma |`,

  '32071': `@deva[श्वेतवहोक्थशसो मन्त्रे] — "In mantras, @deva[ण्विन्] comes after @deva[श्वेतवह], @deva[उक्थशस्], @deva[पुरोडाश्]."

| Word | Meaning |
|------|---------|
| @deva[श्वेतवाः] | Indra (carried by white horses) |
| @deva[उक्थशाः] | reciting the Uktha |
| @deva[पुरोडाः] | eating the sacrificial cake |

@note[Agent affix is used but the compound denotes an object—irregular.]`,

  '32072': `@deva[अव्ययजो मन्त्रे] — "In mantras, @deva[ण्विन्] comes after @deva[यज्] with @deva[अव्]."

@deva[अवयाः] — "name of a Vedic priest" (Ṛg Ved. I.173.12: @deva[त्वं यज्ञे वरुणस्यावया असि])

**Declension:** @deva[अवयाः], @deva[अवयाजौ], @deva[अवयाजः] (1st); @deva[अवयाजम्], @deva[अवयाजौ], @deva[अवयाजः] (2nd)...`,

  '32073': `@deva[उपयजश्छन्दसि विच्] — "In the Vedas, @deva[विच्] comes after @deva[यज्] with @deva[उप]."

@deva[उपयज्] — name of eleven formulas at sacrifice

@note["Chhandas" is repeated (though "mantra" was present) to include Brāhmaṇa literature.]`,

  '32074': `@deva[आतो मनिन्क्वनिब्वनिपश्च] — "In the Vedas, @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] come after @deva[आ]-final roots with case-inflected words or @deva[उपसर्ग]."

| Affix | Example | Meaning |
|-------|---------|---------|
| @deva[मनिन्] | @deva[सुदामा] | one who gives liberally |
| @deva[क्वनिप्] | @deva[सुधीवा] | intelligent |
| @deva[वनिप्] | @deva[प्रस्थावा] | departing |`,

  '32075': `@deva[अन्येभ्योऽपि दृश्यन्ते] — "These affixes (@deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], @deva[विच्]) are seen after other (non-@deva[आ]-final) roots too."

| Example | Meaning |
|---------|---------|
| @deva[सुशर्मा] | @deva[सु] + @deva[शृ] + @deva[मनिन्] — destroys well |
| @deva[प्रातरित्वा] | @deva[प्रातर्] + @deva[इ] + @deva[क्वनिप्] — goes early |
| @deva[विजावा] | @deva[वि] + @deva[जन्] + @deva[वनिप्] — born |

@note[Not restricted to Vedic.]`,

  '32076': `@deva[क्विपश्च] — "The affix @deva[क्विप्] is seen after all roots, with or without @deva[उपपद], in Vedic and classical Sanskrit."

| Example | Meaning |
|---------|---------|
| @deva[उखास्रत्] | falling from the pot |
| @deva[पर्णध्वत्] | falling from leaves |
| @deva[वाहाभ्रट्] | falling from a car |`,

  '32077': `@deva[स्थः कक्विपौ] — "After @deva[स्था] with a case-inflected word or @deva[उपसर्ग], both @deva[क] and @deva[क्विप्] are used."

@deva[शंस्थः] and @deva[शंस्थाः] — "standing well"

@note[This sūtra removes the prohibition from @ref[3.2.14] that would otherwise block @ref[3.2.4].]`,

  '32078': `@deva[ताच्छील्ये णिनिः अजातौ सुपि] — "When habit is expressed, @deva[णिनि] comes after a root with a case-inflected word, provided it doesn't denote a genus."

| Example | Meaning |
|---------|---------|
| @deva[उष्णभोजी] | one who habitually eats hot food |
| @deva[शीतभोजी] | one who habitually eats cold food |

When genus: @deva[ब्राह्मणानामन्त्रयिता] "inviter of Brahmans" (not @deva[*-मन्त्रयी])`,

  '32079': `@deva[उपमाने कर्मणि च] — "When the @deva[उपपद] denotes an object of comparison, @deva[णिनि] is used expressing 'doing something like that'."

| Example | Meaning |
|---------|---------|
| @deva[उष्ट्रक्रोशी] | one who makes noise like a camel |
| @deva[ध्वाङ्क्षरावी] | one who makes noise like a crow |

This applies when "habit" is not meant or when "genus" is denoted.`,

  '32080': `@deva[व्रते] — "When a vow is expressed, @deva[णिनि] comes after a root with a case-inflected word."

| Example | Meaning |
|---------|---------|
| @deva[स्थण्डिलशायी] | one who vows to sleep on bare ground |
| @deva[अश्राद्धभोजी] | one who vows not to eat during śrāddha |

Without vow-sense: no compound is formed.`,

  '32081': `@deva[आभीक्ष्ण्ये] — "When continuous repetition is expressed, @deva[णिनि] comes diversely."

@deva[आभीक्ष्ण्य] = zealous practice, not just habit.

| Example | Meaning |
|---------|---------|
| @deva[कषायपायिणो गान्धाराः] | Gandhāra people are kaṣāya-drinkers |
| @deva[क्षीरपायिण उशीनाराः] | Uśīnara people are milk-drinkers |
| @deva[सौवीरपायिणो बाह्लीकाः] | Bāhlīka people are sauvīra-drinkers |`,

  '32082': `@deva[मन्] — "After @deva[मन्] 'to think' with a case-inflected word, @deva[णिनि] is used."

| Example | Meaning |
|---------|---------|
| @deva[दर्शनीयमानी] | one who thinks himself handsome |
| @deva[शोभनम्मानी] | one who thinks himself beautiful |

@note[Uses Divādi @deva[मन्] (4th conj.), not Tanādi (8th).]`,

  '32083': `@deva[आत्ममाने च] — "After @deva[मन्] when thinking of oneself, both @deva[क्वनिप्] and @deva[णिनि] are used."

| With @deva[क्वनिप्] | With @deva[णिनि] | Meaning |
|-------------------|-----------------|---------|
| @deva[दर्शनीयम्मन्यः] | @deva[दर्शनीयमानी] | who thinks himself handsome |

@deva[आत्ममान] = thinking of one's own self as having the quality.`,

  '32084': `@deva[भूते] — "All affixes from here onward express past time."

This is an @deva[अधिकार] (governing rule) extending to sūtra 123.

All subsequent affixes indicate that the action has already been completed.`,

  '32085': `@deva[यजो कर्तृण्यापि करणे कर्मणि च] — "After @deva[यज्] with an instrumental @deva[उपपद], @deva[णिनि] is used with past-time meaning."

| Example | Meaning |
|---------|---------|
| @deva[अग्निष्टोमयाजी] | one who has sacrificed with Agniṣṭoma |

The instrument is the means for attaining the desired fruit.`,

  '32086': `@deva[हनः कर्मणि] — "After @deva[हन्] with an accusative @deva[उपपद], @deva[णिनि] is used with past-time meaning."

| Example | Meaning |
|---------|---------|
| @deva[पितृव्यघाती] | one who has killed his paternal uncle |
| @deva[मातुलघाती] | one who has killed his maternal uncle |

**Derivation:** @deva[हन्] + @deva[णिनि] → @deva[घन्] → @deva[घत्] → @deva[घातिन्]

@note[Only when censure is implied. @deva[कर्मणि] extends to @ref[3.2.96].]`,

  '32087': `@deva[ब्रह्मभ्रूणवृत्रेषु क्विप्] — "After @deva[हन्] with @deva[ब्रह्म], @deva[भ्रूण], or @deva[वृत्र] as accusative, @deva[क्विप्] is used."

| Example | Meaning |
|---------|---------|
| @deva[ब्रह्महा] | one who has killed a Brahman |
| @deva[भ्रूणहा] | one who has killed a fetus |
| @deva[वृत्रहा] | Indra (killer of Vṛtra) |

@note[This restricts @deva[क्विप्] (from @ref[3.2.76]) to these three words after @deva[हन्].]`,

  '32088': `@deva[अन्यत्रापि दृश्यते छन्दसि] — "In the Vedas, @deva[क्विप्] diversely comes after @deva[हन्] with other words too."

| Example | Meaning |
|---------|---------|
| @deva[मातृहा] | matricide |
| @deva[पितृहा] | patricide |

@deva[मातृहा सप्तमं नरकं प्रविशेत्] — "May the matricide enter the seventh hell."`,

  '32089': `@deva[राजहनोऽन्यतरस्याम्] — "After @deva[हन्] with @deva[राजन्], either @deva[क्विप्] or the general affix is used."

| With @deva[क्विप्] | With @deva[अण्] |
|------------------|---------------|
| @deva[राजहा] | @deva[राजघातः] |

Both mean "killer of a king."`,

  '32090': `@deva[विदेर्नेट्] — "After @deva[विद्] 'to know' with accusative, @deva[क्विप्] is used without @deva[इट्]-augment."

| Example | Meaning |
|---------|---------|
| @deva[वेदवित्] | knower of Veda |
| @deva[ब्रह्मवित्] | knower of Brahman |
| @deva[आत्मवित्] | knower of Self |`,

  '32091': `@deva[पथ्यतिचर्यागमनीयानि च] — "The words @deva[पथ्यातिगः], @deva[चर्यागमः], @deva[ऋणीयगः] are irregular formations."

These are compounds where the formation deviates from normal rules.`,

  '32092': `@deva[जीविकोपनिषद्विद्या...] — "After verbs with @deva[जीविका], @deva[उपनिषद्], @deva[विद्या], @deva[वेला], @deva[संवत्सर]-words, @deva[क] is used."

| Example | Meaning |
|---------|---------|
| @deva[जीविकोपनिषद्] | means of livelihood |
| @deva[विद्योपनिषद्] | secret of knowledge |`,

  '32093': `@deva[निष्ठा] — "The affixes @deva[क्त] and @deva[क्तवतु] are called @deva[निष्ठा]."

This defines the term @deva[निष्ठा] which refers to the past participle affixes:
- @deva[क्त] → @deva[त] (e.g., @deva[कृत], @deva[गत])
- @deva[क्तवतु] → @deva[तवत्] (e.g., @deva[कृतवत्], @deva[गतवत्])`,

  '32094': `@deva[गत्यर्थाकर्मकश्लिषशीङ्स्थासां क्त] — "After motion verbs, intransitives, @deva[श्लिष्], @deva[शी], @deva[स्था], @deva[आस्], @deva[क्त] is used with past meaning denoting the agent."

| Root | Form | Meaning |
|------|------|---------|
| @deva[गम्] | @deva[गतः] | gone |
| @deva[शी] | @deva[शयितः] | lying |
| @deva[स्था] | @deva[स्थितः] | standing |
| @deva[आस्] | @deva[आसितः] | sitting |`,

  '32095': `@deva[अन्यत्रापि] — "@deva[क्त] and @deva[क्तवतु] are seen elsewhere too (with active sense)."

Even transitive verbs sometimes use @deva[निष्ठा] with agent meaning:

@deva[भुक्तवान्] — "one who has eaten" (active)`,

  '32096': `@deva[क्तः...कर्मणि] — "The affix @deva[क्त] is used with passive sense after transitive verbs."

| Example | Meaning |
|---------|---------|
| @deva[कृतः] | done, made (by someone) |
| @deva[हतः] | killed (by someone) |
| @deva[पचितः] | cooked (by someone) |`,

  '32097': `@deva[क्तवतुः करणे] — "The affix @deva[क्तवतु] is used when the meaning is instrumental."

@deva[ओदनं भुक्तवान्] — "one who has eaten rice"

Here the agent (@deva[कर्तृ]) is primary, not the object.`,

  '32098': `@deva[द्विषः शत्रौ] — "After @deva[द्विष्] 'to hate', @deva[क्त] is used when meaning 'enemy'."

@deva[द्विष्टः] = enemy

This is a special meaning, not just "hated."`,

  '32099': `@deva[त्यक्तात्यस्तौ] — "The words @deva[त्यक्त] and @deva[त्यस्त] are both valid from @deva[त्यज्] 'to abandon'."

| Form | Analysis |
|------|----------|
| @deva[त्यक्तः] | regular @deva[क्त] |
| @deva[त्यस्तः] | irregular (as if from @deva[*त्यस्]) |`,

  '32100': `@deva[भृञः करणे] — "After @deva[भृ] 'to bear', @deva[क्त] is used when meaning 'wages'."

@deva[भृतः] = hired servant, one who receives wages

Not just "carried" but specifically "hired."`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.2.46-100). Total: ${Object.keys(vasu).length}`);
