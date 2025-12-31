import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '44051': `@deva[तदस्य पण्यम्] — @deva[ठक्] comes after a nominative-case word meaning "this is his saleable commodity":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अपूप] (cake) | @deva[आपूपिकः] | cake vendor |
| @deva[शष्कुलि] | @deva[शाष्कुलिकः] | pastry vendor |
| @deva[मोदक] | @deva[मौदकिकः] | sweetmeat vendor |`,

  '44052': `@deva[लवणाट्ठञ्] — @deva[ठञ्] comes after @deva[लवण] meaning "this is his saleable commodity":

@deva[लवणं पण्यमस्य] → @deva[लावणिकः] (salt vendor)

@note[Debars @deva[ठक्]. Difference is in accent.]`,

  '44053': `@deva[किशरादिभ्यष्ठन्] — @deva[ष्ठन्] comes after @deva[किशर]-class (perfume) words meaning "this is his saleable commodity":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[किशर] | @deva[किशरिकः] | @deva[किशरिकी] |
| @deva[नरद] | @deva[नरदिकः] | @deva[नरदिकी] |
| @deva[तगर] | @deva[तगरिकः] | perfume vendor |
| @deva[गुग्गुलु] | @deva[गुग्गुलिकः] | incense vendor |

The @deva[किशरादि] class: @deva[किशर], @deva[नरद], @deva[नलद], @deva[स्थागल], @deva[तगर], @deva[गुग्गुलु], @deva[उशीर], @deva[हरिद्रा], @deva[हरिद्रु], @deva[पर्णी], @deva[सुमङ्गल], @deva[हरिद्रायणी]।`,

  '44054': `@deva[विभाषा शलालोः] — @deva[ष्ठन्] optionally comes after @deva[शलालु] meaning "saleable commodity":

| By @deva[ष्ठन्] | Feminine | By @deva[ठक्] | Feminine |
|------------|----------|----------|----------|
| @deva[शलालुकः] | @deva[शलालुकी] | @deva[शालालुकः] | @deva[शालालुकी] |

@note[@deva[शलालु] = a sweet scent.]`,

  '44055': `@deva[शिल्पम्] — @deva[ठक्] comes after a nominative-case word meaning "this is his art/craft":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[मृदङ्गवादन] | @deva[मार्दङ्गिकः] | drummer |
| @deva[पणववादन] | @deva[पाणविकः] | tabor-player |
| @deva[वीणावादन] | @deva[वैणिकः] | lute-player |`,

  '44056': `@deva[मड्डुकझर्झरयोर्वा] — @deva[अण्] optionally comes after @deva[मड्डुक] and @deva[झर्झर] meaning "this is his art":

| Base | By @deva[अण्] | By @deva[ठक्] |
|------|----------|----------|
| @deva[मड्डुक] | @deva[माड्डुकः] | @deva[माड्डुकिकः] |
| @deva[झर्झर] | @deva[झार्झरः] | @deva[झार्झरिकः] |`,

  '44057': `@deva[प्रहरणम्] — @deva[ठक्] comes after a nominative weapon-word meaning "this is his weapon":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[असि] (sword) | @deva[आसिकः] | swordsman |
| @deva[प्रास] (spear) | @deva[प्रासिकः] | spearman |
| @deva[चक्र] (discus) | @deva[चाक्रिकः] | discus-wielder |
| @deva[धनुष्] (bow) | @deva[धानुष्कः] | archer |`,

  '44058': `@deva[परश्वधाट्ठञ्ठकौ] — @deva[ठञ्] and @deva[ठक्] come after @deva[परश्वध] meaning "this is his weapon":

| Affix | Derivative |
|-------|------------|
| @deva[ठञ्] | @deva[पारश्वधिकः] |
| @deva[ठक्] | @deva[पारश्वधिकः] |

@note[@deva[परश्वध] = axe. Difference is in accent.]`,

  '44059': `@deva[शक्तियष्ट्योरीकक्] — @deva[ईकक्] comes after @deva[शक्ति] and @deva[यष्टि] meaning "this is his weapon":

| Base | Derivative |
|------|------------|
| @deva[शक्ति] (spear) | @deva[शाक्तीकः] |
| @deva[यष्टि] (staff) | @deva[याष्टीकः] |

@note[Debars @deva[ठक्].]`,

  '44060': `@deva[अस्तिनास्तिदिष्टं मतिः] — @deva[ठक्] comes after @deva[अस्ति], @deva[नास्ति], @deva[दिष्ट] meaning "this is his belief":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अस्ति] (it exists) | @deva[आस्तिकः] | believer in afterlife |
| @deva[नास्ति] (it doesn't exist) | @deva[नास्तिकः] | atheist |
| @deva[दिष्ट] (fate) | @deva[दैष्टिकः] | fatalist |

@note[Specific belief only. @deva[आस्तिक] = believes @deva[परलोकोऽस्ति]; @deva[नास्तिक] = denies afterlife; @deva[दिष्ट] = @deva[दैव] (fate).]`,

  '44061': `@deva[शीलम्] — @deva[ठक्] comes after a nominative-case word meaning "this is his habit":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अपूपभक्षण] | @deva[आपूपिकः] | habitual cake-eater |
| @deva[शष्कुलिभक्षण] | @deva[शाष्कुलिकः] | habitual pastry-eater |
| @deva[मोदकभक्षण] | @deva[मौदकिकः] | habitual sweet-eater |`,

  '44062': `@deva[छत्रादिभ्यो णः] — @deva[ण] comes after @deva[छत्र]-class words meaning "this is his habit":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[छत्र] | @deva[छात्रः] | pupil (one whose habit is to cover/protect master's defects) |
| @deva[शिक्षा] | @deva[शैक्षः] | learner |

@note[Debars @deva[ठक्]. @deva[स्था] must have upasarga: @deva[आस्था], @deva[संस्था], @deva[अवस्था]। Per Patañjali: @deva[छात्र] = pupil whom guru protects like umbrella, or who protects guru like umbrella.]`,

  '44063': `@deva[कर्मवृत्तमध्ययने] — @deva[ठक्] comes after a nominative-case word meaning "this is his error in study":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[एकान्य] (one-other) | @deva[ऐकान्यिकः] | who makes one error in recitation |
| @deva[द्व्यन्य] | @deva[द्वैयन्यिकः] | who makes two errors |
| @deva[त्र्यन्य] | @deva[त्रैयन्यिकः] | who makes three errors |

@note[@deva[अन्यत्] = error, especially in accent (making @deva[उदात्त] where @deva[अनुदात्त] should be, or vice versa).]`,

  '44064': `@deva[बह्वचः पूर्वपदाट्ठच्] — @deva[ठच्] comes after compounds with polysyllabic first member meaning "errors in study":

| Base | Derivative |
|------|------------|
| @deva[द्वादशान्य] | @deva[द्वादशान्यिकः] (twelve errors) |
| @deva[त्रयोदशान्य] | @deva[त्रयोदशान्यिकः] (thirteen errors) |
| @deva[चतुर्दशान्य] | @deva[चतुर्दशान्यिकः] (fourteen errors) |

@note[Debars @deva[ठक्].]`,

  '44065': `@deva[हितं भक्षाः] — @deva[ठक्] comes after a food-word (nominative) meaning "this is wholesome diet for him":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अपूप] | @deva[आपूपिकः] | one for whom cakes are wholesome |

@note[@deva[हित] governs dative. Construction: @deva[तदस्मै हितं भक्षाः]।]`,

  '44066': `@deva[दीयते नियुक्तम्] — @deva[ठक्] comes after a nominative-case word meaning "to whom this is rightfully given":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अग्रभोजन] | @deva[आग्रभोजनिकः] | Brāhmaṇa entitled to sit first at dinner |
| @deva[अपूप] | @deva[आपूपिकः] | entitled to receive cakes |

@note[@deva[नियुक्तम्] = @deva[अव्यभिचारेण] (rightfully, by appointment). Or @deva[नियुक्तम्] = @deva[नित्यम्] (always).]`,

  '44067': `@deva[श्राणामांसौदनाट्टिठन्] — @deva[टिठन्] comes after @deva[श्राणा] and @deva[मांसौदन] meaning "rightfully given":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[श्राणा] (rice gruel) | @deva[श्राणिकः] | @deva[श्राणिकी] |
| @deva[मांसौदन] (meat-rice) | @deva[मांसौदनिकः] | @deva[मांसौदनिकी] |

@note[Debars @deva[ठक्]. @deva[ट्] indicates feminine by @deva[ङीप्] (@ref[4.1.15]). Difference from @deva[ठक्] is accent: @deva[ठक्] final-acute (@ref[6.1.165]); @deva[टिठन्] initial-acute (@ref[6.1.197]).]`,

  '44068': `@deva[भक्ताद्वा] — @deva[अण्] optionally comes after @deva[भक्त] meaning "rightfully given":

| By @deva[अण्] | By @deva[ठक्] | Meaning |
|----------|----------|---------|
| @deva[भाक्तः] | @deva[भाक्तिकः] | regularly fed retainer |`,

  '44069': `@deva[तत्र नियुक्तः] — @deva[ठक्] comes after a locative-case word meaning "appointed there":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शुल्कशाला] (customs house) | @deva[शौल्कशालिकः] | customs superintendent |
| @deva[आकर] (mine) | @deva[आकरिकः] | mine superintendent |
| @deva[आपण] (market) | @deva[आपणिकः] | market official |
| @deva[द्वार] (door) | @deva[दौवारिकः] | doorkeeper |

@note[@deva[तत्रनियुक्त] is tatpuruṣa (@ref[2.1.46]). @deva[नियुक्त] here differs from @ref[4.1.60].]`,

  '44070': `@deva[अगारान्ताट्ठन्] — @deva[ठन्] comes after @deva[अगार]-ending words meaning "appointed there":

| Base | Derivative |
|------|------------|
| @deva[देवागार] (temple) | @deva[देवागारिकः] |
| @deva[कोष्ठागार] (storehouse) | @deva[कोष्ठागारिकः] |
| @deva[भाण्डागार] (treasury) | @deva[भाण्डागारिकः] |

@note[Debars @deva[ठक्]. Difference is accent and no vṛddhi.]`,

  '44071': `@deva[अदेशकालाध्यायी] — @deva[ठक्] comes after a locative-case word meaning "studies there" (improper place/time):

**Improper place:**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[श्मशान] | @deva[श्माशानिकः] | studies in cremation ground |
| @deva[चतुष्पथ] | @deva[चातुष्पथिकः] | studies at crossroads |

**Improper time:**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[चतुर्दशी] | @deva[चातुर्दशिकः] | studies on 14th lunar day |
| @deva[अमावास्या] | @deva[आमावास्यिकः] | studies on new moon |

@note[Only improper (@deva[अदेशकाल]). Not: @deva[स्रुघ्ने अधीते], @deva[पूर्वाह्णे अधीते]।]`,

  '44072': `@deva[कठिनप्रस्तारात्] — @deva[ठक्] comes after @deva[कठिन]-final compounds and @deva[प्रस्तार] (locative) meaning "transacts business there":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[वंशकठिन] (bamboo thicket) | @deva[वांशकठिनिकः] | works in bamboo thicket |
| @deva[वार्ध्रकठिन] | @deva[वार्ध्रकठिनिकः] | works in leather place |
| @deva[प्रस्तार] | @deva[प्रास्तारिकः] | stone-layer |
| @deva[संस्थान] | @deva[सांस्थानिकः] | stationed there |`,

  '44073': `@deva[निकटादिनि वसति] — @deva[ठक्] comes after @deva[निकट] (locative) meaning "dwells there":

@deva[निकटे वसति] → @deva[नैकटिकः] (ascetic dwelling near habitation)

@note[Applies to ascetics allowed by their order to live near human habitations. Cf. @deva[आरण्यक] = ascetics who must dwell 2+ miles from habitation.]`,

  '44074': `@deva[आवसथात्ष्ठल्] — @deva[ष्ठल्] comes after @deva[आवसथ] (locative) meaning "dwells there":

@deva[आवसथे वसति] → @deva[आवसथिकः] f. @deva[आवसथिकी] (householder, domestic person)

@note[@deva[ल्] for accent (@ref[6.1.193]); @deva[ष्] for @deva[ङीष्] (@ref[4.1.41]). Ends @deva[ठक्] @deva[अधिकार] of @ref[4.4.1]. New affixes follow.]`,

  '44075': `@deva[यत्प्राग्वहतेः] — @deva[यत्] is the governing affix from here to @ref[5.1.5] (@deva[तस्मै हितम्]).

This is an @deva[अधिकार] (governing rule). @deva[यत्] applies in subsequent sūtras unless otherwise specified.`,

  '44076': `@deva[तद्वहति रथयुगप्रासङ्गम्] — @deva[यत्] comes after @deva[रथ], @deva[युग], @deva[प्रासङ्ग] (accusative) meaning "bears that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[रथ] (chariot) | @deva[रथ्यः] | carriage-horse |
| @deva[युग] (yoke) | @deva[युग्यः] | yoke-bearing ox |
| @deva[प्रासङ्ग] (break) | @deva[प्रासंग्यः] | colt in training |

@note[@deva[प्रासङ्ग] = wood on colt's neck during breaking. Applies to compounds: @deva[परमरथ्यः]। Also derivable by @ref[4.2.120] + @ref[4.3.121].]`,

  '44077': `@deva[धुरो यड्ढकौ] — @deva[यत्] and @deva[ढक्] come after @deva[धुर] (accusative) meaning "bears that":

| Affix | Derivative | Note |
|-------|------------|------|
| @deva[यत्] | @deva[धुर्यः] | no lengthening (@ref[7.2.79], @deva[भ]-stem) |
| @deva[ढक्] | @deva[धौरेयः] (@ref[7.1.2]) | beast of burden |`,

  '44078': `@deva[सर्वधुरात्खः] — @deva[ख] comes after @deva[सर्वधुरा] (accusative) meaning "bears that":

@deva[सर्वधुरां वहति] → @deva[सर्वधुरीणः] (@ref[7.1.2]) (bears all burdens)

@note[Also applies to other @deva[धुर]-compounds: @deva[उत्तरधुरीणः], @deva[दक्षिणधुरीणः]। @deva[सर्वधुर] = @deva[सर्वा] + @deva[धुर्] (@ref[2.1.49]) + samāsānta @deva[अ] (@ref[5.4.74]). Compound is feminine by @ref[2.4.26].]`,

  '44079': `@deva[एकधुराल्लुक् च] — @deva[ख] comes after @deva[एकधुरा], with optional @deva[लुक्] elision:

| With @deva[ख] | With @deva[लुक्] |
|-----------|------------|
| @deva[एकधुरीणः] | @deva[एकधुरः] |

@note[Compounding is @deva[तद्धितार्थ] (@deva[एकां धुरं वहति]) + samāsānta @deva[अ] + affix @deva[ख].]`,

  '44080': `@deva[शकटादण्] — @deva[अण्] comes after @deva[शकट] (accusative) meaning "bears that":

@deva[शकटं वहति] → @deva[शाकटः] (cart-ox)

@note[Also derivable by @deva[तस्येदम् अण्]. Specification indicates @deva[तदन्तविधि]: @deva[द्वे शकटे वहति] → @deva[द्वैशकटः]; no elision (@ref[4.1.88]).]`,

  '44081': `@deva[हलसीराट्ठक्] — @deva[ठक्] comes after @deva[हल] and @deva[सीर] (accusative) meaning "bears that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[हल] (plough) | @deva[हालिकः] | ploughman |
| @deva[सीर] (plough) | @deva[सैरिकः] | plough-ox |

@note[@deva[ठक्] would come by @ref[4.3.124]; specification shows @deva[तदन्तविधि] and no elision: @deva[द्वैहालिकः], @deva[त्रैसीरिकः].]`,

  '44082': `@deva[जनीं संज्ञायाम्] — @deva[यत्] comes after @deva[जनी] (accusative) meaning "bears that" when a Name:

@deva[जनीं वहति] → @deva[जन्यः] m. (bridegroom's friend), @deva[जन्याः] f. (bridesmaid)

@note[@deva[जनी] = bride. @deva[जन्य] = who carries/supports the coy bride to the groom during ceremonies.]`,

  '44083': `@deva[अधनुषा तद्विध्यति] — @deva[यत्] comes after an accusative-case word meaning "pierces that" (NOT with a bow):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[पाद] (foot) | @deva[पद्याः शर्कराः] (@ref[6.3.53]) | foot-piercing pebbles |
| @deva[ऊरु] (thigh) | @deva[ऊरव्याः कण्टकाः] | thigh-piercing thorns |

@note[@deva[अधनुषा] excludes bow-piercing. Thus not: @deva[चौरं विध्यति], @deva[शत्रुं विध्यति]।]`,

  '44084': `@deva[धनगणाभ्यां लब्धा] — @deva[यत्] comes after @deva[धन] and @deva[गण] (accusative) meaning "obtains that":

| Base | Derivative |
|------|------------|
| @deva[धन] (wealth) | @deva[धन्यः] (fortunate) |
| @deva[गण] (troop) | @deva[गण्यः] (distinguished) |

@note[@deva[लब्धृ] formed by @deva[तृन्] from @deva[लभ्], hence accusative.]`,

  '44085': `@deva[अन्नाद्] — @deva[ण] comes after @deva[अन्न] (accusative) meaning "obtains that":

@deva[अन्नं लब्धा] → @deva[आन्नः] (fed, one who has obtained food)`,

  '44086': `@deva[वशं गतः] — @deva[यत्] comes after @deva[वश] (accusative) meaning "gone under control":

@deva[वशं गतः] → @deva[वश्यः] (subdued, dependant, servant)

@note[@deva[वश] = @deva[काम], @deva[इच्छा] (desire). @deva[वश्य] = @deva[परेच्छानुगामी] (follows another's will).]`,

  '44087': `@deva[पदं दृश्यम्] — @deva[यत्] comes after @deva[पद] (nominative) meaning "footprint visible in it":

| Derivative | Meaning |
|------------|---------|
| @deva[पद्यः कर्दमः] | mud (takes footprints) |
| @deva[पद्याः पांसवः] | dust (shows footprints) |

@note[Describes mud/dust neither too hard nor fluid — shows foot impressions. Also = footpath.]`,

  '44088': `@deva[मूलमाबर्हि] — @deva[यत्] comes after @deva[मूल] (nominative) meaning "whose root is uprooted":

@deva[मूलमेषामाबर्हि] → @deva[मूल्याः] (pulses like @deva[माष], @deva[मुद्ग])

@note[Cereals that must be completely uprooted to harvest. @deva[आबर्हि] from @deva[वृहू] (uproot) = @deva[उत्पाटन].]`,

  '44089': `@deva[धेनुष्येति संज्ञायाम्] — @deva[धेनुष्या] is irregularly formed as a Name:

@deva[धेनु] + @deva[षुक्] + @deva[य] → @deva[धेनुष्या] (cow given to creditor as pledge)

@note[Final @deva[उदात्त]. Also called @deva[पीतदुग्धा] (whose milk is drunk [by creditor]).]`,

  '44090': `@deva[गृहपतिना संयुक्तः ञ्यः] — @deva[ञ्य] comes after @deva[गृहपति] (instrumental) meaning "joined with":

@deva[गृहपतिना संयुक्तः] → @deva[गार्हपत्यः] (Gārhapatya Fire)

@note[@deva[संज्ञायाम्] from previous sūtra applies. Fire in which householder with wife performs sacrifice. Not Dakṣiṇāgni. Or fire for @deva[गृहपति] hymns.]`,

  '44091': `@deva[नौवयोधर्मविषमूलमूलसीतातुलाभ्यस्तार्यतुल्यप्राप्यविषवध्यसमूल्यसंयुक्तमितेषु] — @deva[यत्] comes after these words in respective senses:

| Base | Sense | Derivative | Meaning |
|------|-------|------------|---------|
| @deva[नौ] | to be crossed | @deva[नाव्यम्] | river, water |
| @deva[वयस्] | alike | @deva[वयस्यः] | friend (same age) |
| @deva[धर्म] | attainable | @deva[धर्म्यम्] | what is by dharma |
| @deva[विष] | to be killed | @deva[विष्यः] | to be poisoned |
| @deva[मूल] | to be bent | @deva[मूल्यः] | to be uprooted |
| @deva[मूल] (capital) | equivalent | @deva[मूल्यम्] | price, value |
| @deva[सीता] | united | @deva[सीत्यम्] | united with furrow |
| @deva[तुला] | equally measured | @deva[तुल्यम्] | equal |`,

  '44092': `@deva[धर्मपथ्यर्थन्यायादनपेतम्] — @deva[यत्] comes after @deva[धर्म], @deva[पथिन्], @deva[अर्थ], @deva[न्याय] (ablative) meaning "not deviating therefrom":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[धर्म] | @deva[धर्म्यम्] | just, righteous |
| @deva[पथिन्] | @deva[पथ्यम्] | wholesome, proper |
| @deva[अर्थ] | @deva[अर्थ्यम्] | fit, appropriate |
| @deva[न्याय] | @deva[न्याय्यम्] | suitable, just |

@note[@deva[संज्ञायाम्] (@ref[4.4.89]) governs — specific technical meanings. @deva[पथ्य] = not deviating from prescribed path (not: thief not deviating).]`,

  '44093': `@deva[छन्दसा निर्मितम्] — @deva[यत्] comes after @deva[छन्दस्] (instrumental) meaning "made":

@deva[छन्दसा निर्मितम्] → @deva[छन्दस्यः] (made at will)

@note[@deva[छन्दस्] here = @deva[इच्छा] (wish, desire, fancy), not meter or Veda.]`,

  '44094': `@deva[उरसश्चाण्] — @deva[अण्] and @deva[यत्] come after @deva[उरस्] (instrumental) meaning "made":

| Affix | Derivative | Meaning |
|-------|------------|---------|
| @deva[अण्] | @deva[औरसम्] | own son (not adopted) |
| @deva[यत्] | @deva[उरस्यः] | born from loins |

@note[@deva[संज्ञायाम्] (@ref[4.4.89]) governs — means son, not anything from loins.]`,

  '44095': `@deva[हृदयस्य प्रियः] — @deva[यत्] comes after @deva[हृदय] (genitive) meaning "loved":

@deva[हृदयस्य प्रियः] → @deva[हृद्यः] (pleasant to heart)

Examples: @deva[हृद्यो देशः] (pleasant region), @deva[हृद्यं वनम्] (pleasant forest)

@note[@deva[संज्ञायाम्] (@ref[4.4.89]) restricts — not: @deva[हृद्यः पुत्रः]।]`,

  '44096': `@deva[बन्धनमृषिः] — @deva[यत्] comes after @deva[हृदय] (genitive) meaning "bond" when referring to a hymn:

@deva[हृदयस्य बन्धनमृषिः] → @deva[हृद्यः] (mantra that binds the heart)

@note[@deva[ऋषि] here = Veda/hymn. = @deva[वशीकरणमन्त्र] (spell to bring another's heart under control).]`,

  '44097': `@deva[मत्करणं जनजल्पो हलकर्षश्च] — @deva[यत्] comes after @deva[मत्], @deva[जन], @deva[हल] (genitive) in respective senses:

| Base | Sense | Derivative | Meaning |
|------|-------|------------|---------|
| @deva[मत्] | means | @deva[मत्यः] | means of acquiring knowledge |
| @deva[जन] | gossip | @deva[जन्यः] | rumor |
| @deva[हल] | ploughing | @deva[हल्यः] | ploughed |

@note[@deva[तदन्तविधि] applies: @deva[द्विहल्यः], @deva[त्रिहल्यः]।]`,

  '44098': `@deva[तत्र साधुः] — @deva[यत्] comes after a locative-case word meaning "excellent therein":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सामन्] | @deva[सामन्यः] (@ref[6.4.168]) | expert in Sāma-Veda |
| @deva[वेमन्] | @deva[वेमन्यः] | expert in weaving |
| @deva[कर्मन्] | @deva[कर्मण्यः] | industrious |
| @deva[शरण] | @deva[शरण्यः] | providing shelter |

@note[@deva[साधु] = @deva[प्रवीण], @deva[योग्य] (expert, fit), not @deva[उपकारक] (benefactor). When "good" sense, use @ref[5.1.5].]`,

  '44099': `@deva[प्रतिजनादिभ्यः खञ्] — @deva[खञ्] comes after @deva[प्रतिजन]-class words meaning "excellent therein":

@note[Listed words take @deva[खञ्] instead of @deva[यत्].]`,

  '44100': `@deva[वर्गात् खः] — @deva[ख] comes after @deva[वर्ग] meaning "excellent therein":

@deva[वर्गे साधुः] → @deva[वर्गीणः] (expert in a class/group)

@note[Debars @deva[यत्].]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.4.51-100). Total: ${Object.keys(vasu).length}`);
