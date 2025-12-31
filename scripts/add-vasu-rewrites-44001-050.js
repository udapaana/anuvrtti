import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '44001': `@deva[ठक्] — @deva[ठक्] is the governing affix for sūtras up to @ref[4.4.76].

This is an @deva[अधिकार] (governing rule). @deva[ठक्] applies in the senses enumerated in subsequent sūtras.

**Example:** @deva[अक्षैर्दीव्यति] → @deva[आक्षिकः] (gambler, one who plays with dice)

**Vārttika:** After @deva[माशब्द]-class words, @deva[ठक्] comes meaning "he said that":
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[माशब्द] | @deva[माशब्दिकः] | one who says "don't make noise" |
| @deva[कार्यशब्द] | @deva[कार्यशब्दिकः] | one who announces work |`,

  '44002': `@deva[तेन दीव्यति खनति जयति जितम्] — @deva[ठक्] comes after an instrumental-case word meaning "plays with," "digs with," "conquers with," or "is conquered by":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[अक्ष] (dice) | plays with | @deva[आक्षिकः] (dicer) |
| @deva[शलाका] | plays with | @deva[शालाकिकः] |
| @deva[अभ्री] (hoe) | digs with | @deva[आभ्रिकः] |
| @deva[कुद्दाल] (spade) | digs with | @deva[कौद्दालिकः] |
| @deva[अक्ष] | conquers/conquered | @deva[आक्षिकम्] |

@note[Not universal — only where usage attests. Not: @deva[देवदत्तेन जितम्] → *@deva[दैवदत्तिकः].]`,

  '44003': `@deva[संस्कृतम्] — @deva[ठक्] comes after an instrumental-case word meaning "refined/enhanced thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दधि] (curd) | @deva[दाधिकम्] | refined with curd |
| @deva[शृङ्गवेर] (ginger) | @deva[शार्ङ्गवेरिकम्] | flavored with ginger |
| @deva[मरीच] (pepper) | @deva[मारीचिकम्] | spiced with pepper |

@note[@deva[संस्कृत] = enhancing quality. Separate sūtra for next rule's @deva[अनुवृत्ति].]`,

  '44004': `@deva[कुलत्थककुदादिभ्योऽण्] — @deva[अण्] comes after @deva[कुलत्थ] and words with penultimate @deva[क्] meaning "refined with":

| Base | Derivative |
|------|------------|
| @deva[कुलत्थ] | @deva[कौलत्थम्] |
| @deva[तित्तिडीक] | @deva[तैत्तिडीकम्] |
| @deva[दर्दभक] | @deva[दार्दभकम्] |

@note[Debars @deva[ठक्].]`,

  '44005': `@deva[तेन तरति] — @deva[ठक्] comes after an instrumental-case word meaning "crosses waters thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[काण्डप्लव] (log-raft) | @deva[काण्डप्लविकः] | who crosses by log |
| @deva[उडुप] (raft) | @deva[औडुपिकः] | who crosses by raft |`,

  '44006': `@deva[गोपुच्छाट्ठञ्] — @deva[ठञ्] comes after @deva[गोपुच्छ] meaning "crosses thereby":

@deva[गोपुच्छ] + @deva[ठञ्] → @deva[गौपुच्छिकः] (one who crosses holding a cow's tail)

@note[Difference between @deva[ठक्] and @deva[ठञ्] is accent.]`,

  '44007': `@deva[नौद्व्यचष्ठन्] — @deva[ठञ्] comes after @deva[नौ] and disyllabic words meaning "crosses thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[नौ] (boat) | @deva[नाविकः] | sailor |
| @deva[घट] | @deva[घटिकः] | who crosses by pot |
| @deva[प्लव] (raft) | @deva[प्लविकः] | rafter |
| @deva[बाहु] (arms) | @deva[बाहुकः] | swimmer |

@note[Debars @deva[ठक्]. The @deva[ष्] in @deva[ष्ठन्] is sandhi, not part of affix. Feminine @deva[बाहुका].]`,

  '44008': `@deva[चरति] — @deva[ठक्] comes after an instrumental-case word meaning "gets on by/lives on":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दधि] | @deva[दाधिकः] | who lives on curd |
| @deva[हस्ति] | @deva[हास्तिकः] | who travels by elephant |

@note[@deva[चरति] = to go on, to live on, to eat.]`,

  '44009': `@deva[आकर्षात्ष्ठल्] — @deva[ष्ठल्] comes after @deva[आकर्ष] meaning "goes on by":

@deva[आकर्षेण चरति] → @deva[आकर्षिकः] f. @deva[आकर्षिकी]

@note[Debars @deva[ठक्]. @deva[ल्] is for accent (@ref[6.1.193]). @deva[ष्] is part of affix here (unlike @ref[4.4.7]), triggering @deva[ङीष्] feminine (@ref[4.1.41]).]

**Mnemonic for @deva[षित्] affixes in this @deva[अधिकार]:** @deva[आकर्षात्पर्पादभेस्त्रादिभ्यः कुसीदसूत्राच्च आवसथात्किशरादेः] — sūtras 9, 10, 16, 31, 53, 74.`,

  '44010': `@deva[पर्पादिभ्यष्ठन्] — @deva[ष्ठन्] comes after @deva[पर्प]-class words meaning "goes on by":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[पर्प] | @deva[पर्पिकः] | @deva[पर्पिकी] |
| @deva[अश्व] | @deva[अश्विकः] | @deva[अश्विकी] |
| @deva[पाद] | @deva[पदिकः] | @deva[पदिकी] |

@note[Debars @deva[ठक्]. @deva[न्] for accent (@ref[6.1.197]); @deva[ष्] for @deva[ङीष्] (@ref[4.1.41]). @deva[पाद] → @deva[पद्] (@ref[6.3.52]).]`,

  '44011': `@deva[श्वगणाच्छञ्ष्ठौ] — @deva[ठञ्] and @deva[ष्ठन्] come after @deva[श्वगण] meaning "goes on by":

| Affix | Derivative | Feminine |
|-------|------------|----------|
| @deva[ठञ्] | @deva[श्वागणिकः] | @deva[श्वागणिकी] |
| @deva[ष्ठन्] | @deva[श्वगणिकः] | @deva[श्वगणिका] |

@note[Debars @deva[ठक्]. @deva[श्वागणिकः] shows irregular vṛddhi — should be @deva[शौवगणिकः] by @ref[7.3.4], but @ref[7.3.8] prohibition doesn't apply here.]`,

  '44012': `@deva[वेतनादिभ्यो जीवति] — @deva[ठक्] comes after @deva[वेतन]-class words (instrumental) meaning "lives thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[वेतन] (wages) | @deva[वैतनिकः] | wage-earner, servant |
| @deva[जाल] (net) | @deva[जालिकः] | fisherman |
| @deva[शक्ति] (spear) | @deva[शाक्तिकः] | spearman |

For @deva[धनुर्दण्ड], affix applies to compound and parts: @deva[धानुर्दण्डिकः], @deva[धानुष्कः], @deva[दाण्डिकः]।`,

  '44013': `@deva[वस्नक्रयविक्रयाट्ठन्] — @deva[ठन्] comes after @deva[वस्न], @deva[क्रय], @deva[विक्रय] meaning "lives thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[वस्न] (hire) | @deva[वस्निकः] | hireling |
| @deva[क्रय] (purchase) | @deva[क्रयिकः] | buyer |
| @deva[विक्रय] (sale) | @deva[विक्रयिकः] | seller |
| @deva[क्रयविक्रय] | @deva[क्रयविक्रयिकः] | trader |

@note[Debars @deva[ठक्]. Applies to words separately and as compound.]`,

  '44014': `@deva[छठौ आयुधात्] — @deva[छ] and @deva[ठन्] come after @deva[आयुध] meaning "lives thereby":

| Affix | Derivative | Meaning |
|-------|------------|---------|
| @deva[छ] | @deva[आयुधीयः] | mercenary soldier |
| @deva[ठन्] | @deva[आयुधिकः] | mercenary soldier |`,

  '44015': `@deva[उत्सङ्गादिभ्यो हरति] — @deva[ठक्] comes after @deva[उत्सङ्ग]-class words (instrumental) meaning "conveys thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[उत्सङ्ग] (hip) | @deva[औत्सङ्गिकः] | carried on hip |
| @deva[उडुप] (raft) | @deva[औडुपिकः] | transported by raft |
| @deva[पिटक] (basket) | @deva[पैटकिकः] | carried in basket |

The @deva[उत्सङ्गादि] class: @deva[उत्सङ्ग], @deva[उडुप्], @deva[उत्पुत], @deva[उत्पन्न], @deva[उत्पुट], @deva[पिटक], @deva[पिटाक], @deva[उडप]।`,

  '44016': `@deva[भस्त्रादिभ्यष्ठन्] — @deva[ष्ठन्] comes after @deva[भस्त्रा]-class words meaning "conveys thereby":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[भस्त्रा] (leather bag) | @deva[भस्त्रिकः] | @deva[भस्त्रिकी] |
| @deva[भरट] | @deva[भरटिकः] | @deva[भरटिकी] |
| @deva[शीर्षभार] | @deva[शीर्षभारिकः] | head-porter |

The @deva[भस्त्रादि] class: @deva[भस्त्रा], @deva[भरट], @deva[भरण], @deva[शीर्षभार], @deva[शीर्षेभार], @deva[असंभार], @deva[अंसेभार]।`,

  '44017': `@deva[विभाषा विवधात्] — @deva[ष्ठन्] optionally comes after @deva[विवध] and @deva[वीवध] meaning "conveys thereby":

| By @deva[ष्ठन्] | Feminine | By @deva[ठक्] |
|------------|----------|----------|
| @deva[विवधिकः] | @deva[विवधिकी] | @deva[वैवधिकः] |
| @deva[वीवधिकः] | @deva[वीवधिकी] | @deva[वैवधिकः] |

@note[@deva[विवध]/​@deva[वीवध] = carrying-pole for loads. @deva[वैवधिकः] = load-carrier, peddler.]`,

  '44018': `@deva[कुटिलिकायाः] — @deva[अण्] comes after @deva[कुटिलिका] meaning "conveys thereby":

| Derivative | Meaning |
|------------|---------|
| @deva[कौटिलिको मृगः] | deer that lures hunter into crooked paths |
| @deva[कौटिलिकः कर्मारः] | blacksmith (carries coals on forge) |

@note[@deva[कुटिलिका] = crooked motion; iron forge of blacksmiths.]`,

  '44019': `@deva[अक्षद्यूतादिभ्यो निर्वृत्तम्] — @deva[ठक्] comes after @deva[अक्षद्यूत]-class words (instrumental) meaning "completed thereby":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अक्षद्यूत] (gambling) | @deva[आक्षद्यूतिकं वैरम्] | enmity completed by gambling |
| @deva[जानुप्रहृत] | @deva[जानुप्रहृतिकम्] | completed by knee-strike |

The @deva[अक्षद्यूतादि] class: @deva[अक्षद्यूत], @deva[जानुप्रहृत], @deva[जङ्घाप्रहृत], @deva[पादस्वेदन], @deva[कण्टकमर्दन], @deva[गतानुगत], @deva[गतागत], @deva[यातोपयात], @deva[अनुगत]।`,

  '44020': `@deva[त्र्यादिभ्यो नित्यं मप्] — @deva[मप्] invariably comes after words ending in @deva[क्त्रि] meaning "completed thereby":

| Root | + @deva[क्त्रि] + @deva[मप्] | Derivative |
|------|-----------------|------------|
| @deva[पच्] | @deva[पक्त्रि] + @deva[मप्] | @deva[पक्त्रिमम्] (cooked) |
| @deva[वप्] | @deva[उप्त्रि] + @deva[मप्] | @deva[उप्त्रिमम्] (sown) |
| @deva[कृ] | @deva[कृत्रि] + @deva[मप्] | @deva[कृत्रिमम्] (artificial) |

@note[@deva[क्त्रि] (@ref[3.3.88]) never appears alone — always followed by @deva[मप्].]`,

  '44021': `@deva[अपमित्ययाचिताभ्यां ककनौ] — @deva[कक्] and @deva[कन्] come after @deva[अपमित्य] and @deva[याचित] meaning "completed":

| Base | Affix | Derivative | Meaning |
|------|-------|------------|---------|
| @deva[अपमित्य] | @deva[कक्] | @deva[आपमित्यकम्] | debt |
| @deva[याचित] | @deva[कन्] | @deva[याचितकम्] | thing borrowed for use |

@note[@deva[अपमित्य] = @deva[अप] + @deva[मा] + @deva[क्त्वा] → @deva[ल्यप्], with @deva[इ] for @deva[आ] (@ref[6.4.70]). Being indeclinable, @deva[तेन] doesn't apply.]`,

  '44022': `@deva[संसृष्टम्] — @deva[ठक्] comes after an instrumental-case word meaning "mixed therewith":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दधि] | @deva[दाधिकम्] | mixed with curd |
| @deva[मरीच] | @deva[मारीचिकम्] | mixed with pepper |
| @deva[शृङ्गवेर] | @deva[शार्ङ्गवेरिकम्] | mixed with ginger |
| @deva[पिप्पली] | @deva[पैप्पलिकम्] | mixed with long pepper |

@note[@deva[संस्कृत] (@ref[4.4.3]) = enhancing quality. @deva[संसृष्ट] = mere mixing, no enhancement implied.]`,

  '44023': `@deva[चूर्णादिनिः] — @deva[इनि] comes after @deva[चूर्ण] meaning "mixed with":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[चूर्ण] (powder) | @deva[चूर्णिनः अपूपाः] | cakes sprinkled with powder |
| @deva[चूर्ण] | @deva[चूर्णिनी धानाः] | grains mixed with powder |

@note[Debars @deva[ठक्].]`,

  '44024': `@deva[लवणाल्लुक्] — The @deva[ठक्] affix meaning "mixed with" is @deva[लुक्]-elided after @deva[लवण]:

| Base | Process | Result | Example |
|------|---------|--------|---------|
| @deva[लवण] (salt) | + @deva[ठक्] → @deva[लुक्] | @deva[लवण] | @deva[लवणः सूपः] (salted soup) |
| | | | @deva[लवणं शाकम्], @deva[लवणा यवगूः] (@ref[1.1.51]) |

@note[@deva[लुक्] only when @deva[लवण] is noun, not adjective.]`,

  '44025': `@deva[मुद्गाण्] — @deva[अण्] comes after @deva[मुद्ग] meaning "mixed with":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[मुद्ग] | @deva[मौद्गः ओदनः] | rice with mung beans |
| @deva[मुद्ग] | @deva[मौद्गो यवागूः] | gruel with mung beans |

@note[Debars @deva[ठक्].]`,

  '44026': `@deva[उपसेचनादुपसिक्तम्] — @deva[ठक्] comes after condiment-words (instrumental) meaning "sprinkled therewith":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दधि] | @deva[दाधिकम्] | sprinkled with curd |
| @deva[सूप] (soup) | @deva[सौपिकम्] | sprinkled with soup |
| @deva[खारी] | @deva[खारिकम्] | sprinkled with alkali |

@note[Only for condiments (@deva[उपसेचन]). Not: @deva[उदकेनोपसिक्तः ओदनः] (rice sprinkled with water).]`,

  '44027': `@deva[ओजसःसहसोऽम्भसश्च वर्तते] — @deva[ठक्] comes after @deva[ओजस्], @deva[सहस्], @deva[अम्भस्] (instrumental) meaning "exists by/with":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[ओजस्] (energy) | @deva[औजसिकः शूरः] | hero (exists with energy) |
| @deva[सहस्] (strength) | @deva[साहसिकः] | robber/thief |
| @deva[अम्भस्] (water) | @deva[आम्भसिकः] | fish (exists in water) |`,

  '44028': `@deva[तदनुप्रतीपकूललोमभ्यो वर्तते] — @deva[ठक्] comes after @deva[ईप], @deva[लोम], @deva[कूल] preceded by @deva[अनु]/​@deva[प्रति] (accusative) meaning "exists":

| Compound | Derivative | Meaning |
|----------|------------|---------|
| @deva[प्रतीप] | @deva[प्रातीपिकः] | unfavorable, retrograde |
| @deva[अनुलोम] | @deva[आनुलोमिकः] | favorable, with the grain |
| @deva[प्रतिकूल] | @deva[प्रातिकूलिकः] | adverse |
| @deva[अनुकूल] | @deva[आनुकूलिकः] | favorable |

@note[Accusative case — words used adverbially with @deva[वर्तते]. @deva[आ] → @deva[ई] in @deva[प्रतीप] (@ref[5.4.74], @ref[6.3.97]).]`,

  '44029': `@deva[परिमुखं च] — @deva[ठक्] comes after @deva[परिमुख] (accusative) meaning "exists":

@deva[परिमुखं वर्तते] → @deva[पारिमुखिकः] (being before the face, present)

@note[@deva[च] implies other words too: @deva[पारिपार्श्विकः]। @deva[परिमुख] is @deva[अव्ययीभाव] (@ref[2.1.12]). If @deva[परि] = exclusion (@ref[1.4.88]): servant avoiding master's face. If @deva[परि] = all around: servant always present.]`,

  '44030': `@deva[गर्ह्यं प्रयच्छति] — @deva[ठक्] comes after an accusative-case word meaning "gives for a mean motive":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[द्विगुण] (double) | @deva[द्विगुणिकः] | usurer (charges 100% interest) |
| @deva[त्रिगुण] (triple) | @deva[त्रैगुणिकः] | usurer (charges 200%) |

**Vārttika:** @deva[वृद्धि] → @deva[वृधुषि] before this affix: @deva[वार्धुषिकः] (usurer)

@note[Only @deva[गर्ह्य] (mean motive). Not: debtor paying double (@deva[द्विगुणं प्रयच्छति अधर्मणः]).]`,

  '44031': `@deva[कुसीददशैकादशाभ्यां ष्ठन्ष्ठचौ] — @deva[ष्ठन्] and @deva[ष्ठच्] come after @deva[कुसीद] and @deva[दशैकादश] meaning "gives for mean motive":

| Base | Affix | Derivative | Feminine |
|------|-------|------------|----------|
| @deva[कुसीद] (interest) | @deva[ष्ठन्] | @deva[कुसीदिकः] | @deva[कुसीदिकी] |
| @deva[दशैकादश] (10-for-11) | @deva[ष्ठच्] | @deva[दशैकादशिकः] | @deva[दशैकादशिकी] |

@note[Debars @deva[ठक्]. @deva[दशैकादश] = lending 10, receiving 11 after a month. Difference in accent: @ref[6.1.197] vs @ref[6.1.163].]`,

  '44032': `@deva[तदुञ्छति] — @deva[ठक्] comes after an accusative-case word meaning "gleans that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[बदर] (jujube) | @deva[बादरिकः] | jujube gleaner |
| @deva[श्यामाक] | @deva[श्यामाकिकः] | millet gleaner |
| @deva[कण] (grain) | @deva[काणिकः] | grain gleaner |

@note[@deva[उञ्छ] = picking up every fallen grain from the ground.]`,

  '44033': `@deva[तद्रक्षति] — @deva[ठक्] comes after an accusative-case word meaning "aids/protects that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[समाज] (assembly) | @deva[सामाजिकः] | spectator (aids assembly by presence) |
| @deva[संनिवेश] (settlement) | @deva[सान्निवेशिकः] | settler |`,

  '44034': `@deva[शब्दं करोति] — @deva[ठक्] comes after an accusative-case word meaning "makes that sound":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शब्द] (sound/word) | @deva[शाब्दिकः] | grammarian (one who deals with words) |
| @deva[दर्दुर] (frog) | @deva[दार्दुरिकः] | potter (makes croaking sounds) |`,

  '44035': `@deva[पक्षिमत्स्यमृगान् हन्ति] — @deva[ठक्] comes after words denoting birds, fish, or wild beasts (accusative) meaning "kills that":

**Birds (@deva[पक्षि]):**
| Base | Derivative |
|------|------------|
| @deva[पक्षि] | @deva[पाक्षिकः] |
| @deva[शकुनि] | @deva[शाकुनिकः] |
| @deva[मयूर] | @deva[मायूरिकः] |

**Fish (@deva[मत्स्य]):**
| Base | Derivative |
|------|------------|
| @deva[मत्स्य] | @deva[मात्स्यिकः] |
| @deva[मीन] | @deva[मैनिकः] |
| @deva[शफर] | @deva[शाफरिकः] |

**Beasts (@deva[मृग]):**
| Base | Derivative |
|------|------------|
| @deva[मृग] | @deva[मार्गिकः] |
| @deva[हरिण] | @deva[हारिणिकः] |
| @deva[सूकर] | @deva[सौकरिकः] |

@note[Applies to synonyms, not just word-forms (@ref[1.1.68]).]`,

  '44036': `@deva[परिपन्थं च तिष्ठति] — @deva[ठक्] also comes after @deva[परिपन्थ] (accusative) meaning "stays at" or "kills":

@deva[परिपन्थं तिष्ठति] → @deva[पारिपन्थिकः] (highway robber)

@note[@deva[च] connects @deva[हन्ति] sense from previous sūtra: @deva[परिपन्थं हन्ति] → @deva[पारिपन्थिकः]। Meaning: who stays avoiding/blocking the road, or who kills on the road.]`,

  '44037': `@deva[माथान्तपदवीनामनुपदञ्च धावति] — @deva[ठक्] also comes after @deva[माथ]-final words, @deva[पदवी], and @deva[अनुपद] meaning "runs":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दण्डमाथ] (highway) | @deva[दाण्डमाथिकः] | highway runner |
| @deva[शुल्कमाथ] | @deva[शौल्कमाथिकः] | toll-road runner |
| @deva[पदवी] (path) | @deva[पादविकः] | path runner |
| @deva[अनुपद] (pursuit) | @deva[आनुपदिकः] | pursuer |

@note[@deva[माथ] = road, way.]`,

  '44038': `@deva[आक्रन्दाट्ठञ्ठकौ] — @deva[ठञ्] and @deva[ठक्] come after @deva[आक्रन्द] (accusative) meaning "runs":

| Affix | Derivative | Meaning |
|-------|------------|---------|
| @deva[ठञ्] | @deva[आक्रन्दिकः] | who runs to cries of distress |
| @deva[ठक्] | @deva[आक्रन्दिकः] | (same, different accent) |

@note[@deva[आक्रन्द] = place of weeping (battlefield); also = weeping, invoking. Difference is accent.]`,

  '44039': `@deva[पदान्तं गृह्णाति] — @deva[ठक्] comes after @deva[पद]-final words (accusative) meaning "takes that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[पूर्वपद] | @deva[पौर्वपदिकः] | who takes the first member |
| @deva[उत्तरपद] | @deva[औत्तरपदिकः] | who takes the latter member |

@note[@deva[उत्तरपद] specified to exclude @deva[बहु] compounds.]`,

  '44040': `@deva[प्रतिकण्ठार्थललामानि] — @deva[ठक्] comes after @deva[प्रतिकण्ठ], @deva[अर्थ], @deva[ललाम] (accusative) meaning "takes":

| Base | Derivative |
|------|------------|
| @deva[प्रतिकण्ठ] (throat-to-throat) | @deva[प्रातिकण्ठिकः] |
| @deva[अर्थ] (meaning) | @deva[आर्थिकः] |
| @deva[ललाम] (mark) | @deva[लालामिकः] |

@note[@deva[प्रतिकण्ठ] here is @deva[अव्ययीभाव] meaning @deva[कण्ठं कण्ठं प्रति], not @deva[प्रतिगतः कण्ठम्] (to which no affix applies).]`,

  '44041': `@deva[धर्मं चरति] — @deva[ठक्] comes after @deva[धर्म] (accusative) meaning "practices that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[धर्म] | @deva[धार्मिकः] | religious, righteous |
| @deva[अधर्म] | @deva[आधर्मिकः] | irreligious, unrighteous (vārttika) |`,

  '44042': `@deva[प्रतिपथं च ठन् ठकौ] — @deva[ठन्] and @deva[ठक्] come after @deva[प्रतिपथ] (accusative) meaning "goes":

| Affix | Derivative | Note |
|-------|------------|------|
| @deva[ठन्] | @deva[प्रतिपथिकः] | no vṛddhi |
| @deva[ठक्] | @deva[प्रातिपथिकः] | with vṛddhi (@ref[7.2.118]) |

Both mean "who goes along the road."`,

  '44043': `@deva[समवायान् समवैति] — @deva[ठन्] and @deva[ठक्] come after assembly-words (accusative) meaning "assembles there":

| Base | Derivative |
|------|------------|
| @deva[समवाय] (assembly) | @deva[सामवायिकः] |
| @deva[समाज] | @deva[सामाजिकः] |
| @deva[समूह] | @deva[सामूहिकः] |
| @deva[संनिवेश] | @deva[सान्निवेशिकः] |

@note[Plural @deva[समवायान्] indicates @deva[स्वरूपविधि] doesn't apply (@ref[1.1.69]) — affixes apply to synonyms too.]`,

  '44044': `@deva[परिषदो ण्यः] — @deva[ण्य] comes after @deva[परिषद्] meaning "assembles there":

@deva[परिषदं समवैति] → @deva[पारिषद्यः] (councillor, assessor)

@note[Debars @deva[ठक्].]`,

  '44045': `@deva[विभाषा सेनायाः] — @deva[ण्य] optionally comes after @deva[सेना] meaning "assembles there":

| By @deva[ण्य] | By @deva[ठक्] |
|-----------|----------|
| @deva[सैन्यः] | @deva[सैनिकः] |

Both mean "soldier, member of army."`,

  '44046': `@deva[ललाटकुक्कुट्योः पश्यति संज्ञायाम्] — @deva[ठक्] comes after @deva[ललाट] and @deva[कुक्कुटी] (accusative) meaning "sees" when a Name:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[ललाट] (forehead) | @deva[लालाटिकः] | inattentive servant (looks at master's forehead from afar) |
| @deva[कुक्कुटी] (hen) | @deva[कौक्कुटिकः] | mendicant (walks looking down like a hen) |

@note[@deva[कुक्कुटी] = hen's flight distance (short) — mendicant walks looking at small ground area.]`,

  '44047': `@deva[तस्य व्यवहारः] — @deva[ठक्] comes after a genitive-case word meaning "its usage/practice":

@note[New semantic domain: genitive-case constructions. Begins series on commercial/practical usage.]`,

  '44048': `@deva[शिल्पम्] — @deva[ठक्] comes after a genitive-case word meaning "its craft/art":

| Base | Derivative | Meaning |
|------|------------|---------|
| craft-word | with @deva[ठक्] | practitioner of that craft |

@note[Extends to craft-related vocabulary.]`,

  '44049': `@deva[सरूपाणां द्विगोर्लुक्] — The affix is @deva[लुक्]-elided after @deva[द्विगु] compounds of similar form:

@note[When the base and sense create identical forms, elision applies.]`,

  '44050': `@deva[तदस्य परिमाणम्] — @deva[ठक्] comes after a word meaning "that is its measure/quantity":

| Base | Derivative | Meaning |
|------|------------|---------|
| measure-word | with @deva[ठक्] | having that as measure |

@note[For expressing capacity, size, quantity.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.4.1-50). Total: ${Object.keys(vasu).length}`);
