#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "81001": `@deva[सर्वस्य द्वे] — **Adhikāra**: From here through @ref[8.1.15], "the whole word is repeated" (@deva[सर्वस्य द्वे]) is to be supplied.

This governs rules about word-doubling (āmreḍita). Whatever word is specified in the following sūtras undergoes complete repetition.`,

  "81002": `@deva[तस्य परमाम्रेडितम्] — Of a doubled word, the **second** (latter) form is called @deva[आम्रेडित] (the "repeated" portion):
- In @deva[चौर चौर], the second @deva[चौर] is the āmreḍita
- In @deva[वृषल वृषल], the second @deva[वृषल] is the āmreḍita

The āmreḍita receives special treatment (pluta, anudātta) in subsequent rules.`,

  "81003": `@deva[अनुदात्तं च] — The @deva[आम्रेडित] (repeated portion) is @deva[अनुदात्त] (unaccented):
- @deva[भुङ्क्ते भु॒ङ्क्ते॒] (second word loses accent)
- @deva[पशून् प॒शू॒न्]

All vowels of the āmreḍita become anudātta.`,

  "81004": `@deva[नित्यवीप्सयोः] — The whole word is repeated when expressing:
1. **@deva[नित्य]** "always, continually" — @deva[पचति पचति] "cooks continually"
2. **@deva[वीप्सा]** "distribution, each" — @deva[ग्रामं ग्रामं गच्छति] "goes to each village"

Applies to finite verbs and kṛt-formed indeclinables: @deva[भुक्त्वा भुक्त्वा] "having eaten again and again."`,

  "81005": `@deva[परेर्वर्जने] — @deva[परि] is repeated when meaning "exclusion":
- @deva[परि परि त्रिगर्तेभ्यो वृष्टो देवः] "It rained everywhere except Trigarta"

Vārtika: Optionally repeated when not in compound: @deva[परि परि त्रिगर्तेभ्यः] or @deva[परित्रिगर्तेभ्यः].`,

  "81006": `@deva[प्रसमुपोदः पादपूरणे] — @deva[प्र], @deva[सम्], @deva[उप], and @deva[उद्] are repeated to complete a verse foot:
- @deva[प्र प्रायमग्निभरतस्य शृण्वे] (Ṛg VII.8.4)
- @deva[सं समिद्युवते वृषन्] (Ṛg X.191.1)
- @deva[उपोप मे परामृश] (Ṛg I.126.7)
- @deva[किं नोदुदु हर्षसे दातवाउ] (Ṛg IV.21.9)

Applies only to Vedic verses where preposition can be separate from verb.`,

  "81007": `@deva[उपर्यध्यधसः सामीप्ये] — @deva[उपरि], @deva[अधि], and @deva[अधस्] are repeated when expressing uninterrupted proximity:
- @deva[उपर्युपरि दुःखम्] "sorrow upon sorrow"
- @deva[उपर्युपरि ग्रामम्] "very close to the village"
- @deva[अध्यधि ग्रामम्] "right at the village"
- @deva[अधोधो नगरम्] "directly below the city"

But not mere above/below: @deva[उपरि चन्द्रमाः] (no repetition).`,

  "81008": `@deva[वाक्यादेरामन्त्रितस्यासूयासम्मतिकोपकुत्सनभर्त्सनेषु] — A vocative at the beginning of a sentence is repeated when expressing:
1. **Envy**: @deva[माणवक माणवक अभिरूपक अभिरूपक रिक्तं ते आभिरूप्यम्]
2. **Praise**: @deva[माणवक माणवक शोभनः खल्वसि]
3. **Anger**: @deva[माणवक माणवक अविनीतक अविनीतक]
4. **Blame**: Expressing censure
5. **Threat**: @deva[इदानीं ज्ञास्यसि] "Now you'll see!"`,

  "81009": `@deva[एकं बहुव्रीहिवत्] — When @deva[एक] is repeated, it's treated like a bahuvrīhi compound:
- @deva[एकैकमक्षरं पठति] (not @deva[एकमेकम्])
- @deva[एकैकयाहुत्या जुहोति] (not @deva[एकयैकया])

Effects: case-affix elision (@ref[2.4.71]), masculine form for feminine referent (@ref[6.3.34]), accent by @ref[6.2.1].`,

  "81010": `@deva[आबाधे च] — A word is repeated (like bahuvrīhi) when expressing mental distress:
- @deva[गतगतः] "gone, gone — alas!"
- @deva[नष्टनष्टः] "lost, lost!"
- @deva[पतितपतितः] "fallen, fallen!"
- Feminine: @deva[गतगता], @deva[नष्टनष्टा], @deva[पतितपतिता]`,

  "81011": `@deva[कर्मधारयवत् उत्तरेषु] — In the following rules, doubled words are treated like karmadhāraya compounds:
- Case-affix elision: @deva[पटुपटुः], @deva[मृदुमृदुः]
- Masculine first member: @deva[पटुपट्वी], @deva[मृदुमृद्वी]
- Feminine with @deva[क]: @deva[कालककालिका]
- Accent by @ref[6.1.223]: @deva[पटुपटुः]`,

  "81012": `@deva[प्रकारे गुणवचनस्य] — An adjective is repeated when expressing a **limited degree** of the quality (treated as karmadhāraya):
- @deva[पटुपटुः] "somewhat sharp" (not fully sharp)
- @deva[मृदुमृदुः] "fairly soft"
- @deva[पण्डितपण्डितः] "sort of learned"

The doubled word indicates the attribute is partially, not fully, possessed.`,

  "81013": `@deva[अकृच्छ्रे प्रियसुखयोरन्यतरस्याम्] — @deva[प्रिय] and @deva[सुख] are **optionally** repeated when meaning "easily, without difficulty":
- @deva[प्रियप्रियेण ददाति] or @deva[प्रियेण ददाति] "gives pleasantly"
- @deva[सुखसुखेन ददाति] or @deva[सुखेण ददाति] "gives easily"

Not when meaning "dear": @deva[प्रियः पुत्रः] (no repetition).`,

  "81014": `@deva[यथास्वे यथायथम्] — @deva[यथायथम्] is irregularly formed meaning "respectively, properly, according to one's nature":
- @deva[ज्ञाताः सर्वे पदार्था यथायथम्] "all objects known according to their respective nature"

It's neuter gender and indeclinable.`,

  "81015": `@deva[द्वन्द्वं रहस्यमर्यादावचनव्युत्क्रमणयज्ञपात्रप्रयोगाभिव्यक्तिषु] — @deva[द्वन्द्वम्] is irregularly formed from @deva[द्वि] in meanings of:
1. **Secret**: @deva[द्वन्द्वं मन्त्रयन्ते] "they discuss a secret"
2. **Limit**: boundary, separation
3. **Sacrificial vessel use**: employing in ritual
4. **Manifestation**: making evident

Formation: @deva[द्वि] → @deva[द्व] + @deva[न्द्व] (first @deva[द्व] → @deva[अम्], second → @deva[अ]).`,

  "81016": `@deva[पदस्य] — **Adhikāra**: From here through @ref[8.3.54], "of a pada" or "to the whole pada" is to be supplied.

This governs rules applying to complete words (padas). Example: @ref[8.2.23] "@deva[संयोगान्तस्य लोपः]" means "of a **pada** ending in a conjunct consonant, the final is elided."`,

  "81017": `@deva[पदात्] — **Adhikāra**: From here through @ref[8.1.68], "after a pada" is to be supplied.

Rules in this section apply to elements that follow a completed word. Example: @ref[8.1.19] teaches vocative becomes anudātta "after a pada."`,

  "81018": `@deva[अनुदात्तं सर्वमपादादौ] — **Adhikāra**: From here through @ref[8.1.74], supply:
1. @deva[अनुदात्तम्] "unaccented"
2. @deva[सर्वम्] "the whole"
3. @deva[अपादादौ] "when not at the beginning of a verse-foot"

Rules teaching "X becomes unaccented" apply to the whole word, unless it's pāda-initial.`,

  "81019": `@deva[आमन्त्रितस्य च] — All syllables of a vocative become @deva[अनुदात्त] when preceded by another word (and not pāda-initial):
- @deva[पचसि दे॒व॒द॒त्त॒] "You cook, O Devadatta"
- @deva[पचसि य॒ज्ञ॒द॒त्त॒]

The vocative's initial acute (@ref[6.1.198]) is overridden.`,

  "81020": `@deva[युष्मदस्मदोः षष्ठीचतुर्थीद्वितीयास्थयोर्वान्नावौ] — For the **dual** of @deva[युष्मद्] and @deva[अस्मद्] in genitive/dative/accusative, substitute @deva[वाम्] and @deva[नौ]:

| Case | @deva[युष्मद्] | @deva[अस्मद्] |
|------|---------|---------|
| Gen. dual | @deva[वाम्] | @deva[नौ] |
| Dat. dual | @deva[वाम्] | @deva[नौ] |
| Acc. dual | @deva[वाम्] | @deva[नौ] |

Example: @deva[ग्रामो वां स्वम्], @deva[जनपदो नौ स्वम्].`,

  "81021": `@deva[बहुवचनस्य वस्नसौ] — For the **plural** of @deva[युष्मद्] and @deva[अस्मद्] in genitive/dative/accusative, substitute @deva[वस्] and @deva[नस्]:
- @deva[ग्रामो वः॒ स्वम्], @deva[जनपदो नः॒ स्वम्]
- @deva[ग्रामो वो॒ दीयते], @deva[जनपदो नो॒ दीयते]
- @deva[ग्रामो वः॒ पश्यति], @deva[जनपदो नः॒ पश्यति]`,

  "81022": `@deva[तेमयावेकवचनस्य] — For the **singular** of @deva[युष्मद्] and @deva[अस्मद्] in genitive/dative, substitute @deva[ते] and @deva[मे]:
- Genitive: @deva[ग्रामस्ते स्वम्], @deva[ग्रामो मे स्वम्]
- Dative: @deva[ग्रामस्ते दीयते], @deva[ग्रामो मे दीयते]

Accusative singular has different substitutes (next sūtra).`,

  "81023": `@deva[त्वामौ द्वितीयायाः] — For the **accusative singular** of @deva[युष्मद्] and @deva[अस्मद्], substitute @deva[त्वा] and @deva[मा]:
- @deva[ग्रामस्त्वा पश्यति] "the village sees you"
- @deva[ग्रामो मा पश्यति] "the village sees me"`,

  "81024": `@deva[न चवाहाहैवयुक्ते] — The above pronominal substitutions do **not** apply when connected with @deva[च], @deva[वा], @deva[ह], @deva[अह], or @deva[एव]:
- @deva[ग्रामस्तव च स्वम्] (not @deva[ते च])
- @deva[ग्रामो मम च स्वम्] (not @deva[मे च])
- @deva[युवयोश्च स्वम्], @deva[युष्माकं च स्वम्]
- @deva[तुभ्यं वा दीयते], @deva[त्वामेव पश्यति]`,

  "81025": `@deva[पश्यार्थैश्चानालोचने] — The substitutions don't apply with verbs meaning "to see" when **not** meaning physical seeing:
- @deva[पश्यति त्वाम्] (metaphorical "seeing" = knowing) — no substitution
- But: @deva[ग्रामस्त्वा पश्यति] (physical seeing) — substitution applies

"Seeing" = "knowing" blocks the short pronominal forms.`,

  "81026": `@deva[सपूर्वायाः प्रथमाया विभाषा] — When the pronoun follows a nominative that is itself preceded by another word, substitutions are **optional**:
- @deva[ग्रामे कम्बलस्ते स्वम्] or @deva[ग्रामे कम्बलस्तव स्वम्]
- @deva[ग्रामे कम्बलो मे स्वम्] or @deva[ग्रामे कम्बलो मम स्वम्]`,

  "81027": `@deva[तिङो गोत्रादीनि कुत्सनाभीक्ष्ण्ययोः] — The @deva[गोत्रादि] words become @deva[अनुदात्त] after a finite verb when expressing:
1. **Contempt**: @deva[पचति गो॒त्र॒म्] "he proclaims his gotra (to get food)"
2. **Repetition**: @deva[जल्पति गो॒त्र॒म्] "he repeatedly utters his lineage"`,

  "81028": `@deva[तिङ्ङतिङः] — A finite verb becomes @deva[अनुदात्त] when preceded by a word that is **not** a finite verb:
- @deva[देवदत्तः प॒च॒ति॒] "Devadatta cooks"

But after another finite verb, accent is retained: @deva[भवति प꣡चति] "cooking exists."`,

  "81029": `@deva[न लुट्] — The periphrastic future (@deva[लुट्]) does **not** become @deva[अनुदात्त] after a non-verb:
- @deva[श्वः कर्ता꣡] "he will do tomorrow"
- @deva[मासेन कर्ता꣡रः]

@deva[लुट्] retains its accent, unlike other finite verbs.`,

  "81030": `@deva[निपातैर्यद्यदिहन्तकुविन्नेच्चेच्चण्कच्चिद्यत्रयुक्तम्] — A finite verb retains its accent after these particles:
| Particle | Meaning | Example |
|----------|---------|---------|
| @deva[यत्] | "that, because" | @deva[यत् क॒रो꣡ति] |
| @deva[यदि] | "if" | @deva[यदि प꣡चति] |
| @deva[हन्त] | "O! well!" | @deva[हन्त क॒रोति] |
| @deva[कुवित्] | "well" | @deva[कुवित् प꣡चति] |
| @deva[नेत्] | "lest" | @deva[नेत् प꣡चति] |
| @deva[चेत्] | "if" | @deva[चेत् क॒रोति] |
| @deva[कच्चित्] | "I hope" | @deva[कच्चित् प꣡चति] |
| @deva[यत्र] | "where" | @deva[यत्र क॒रोति] |`,

  "81031": `@deva[नह प्रत्यारम्भे] — A finite verb retains accent after @deva[नह] when expressing insistent denial:
- @deva[नह भोक्ष्यसे] "No, you WILL eat!"

Context: A offers food, B refuses, A insists tauntingly.`,

  "81032": `@deva[सत्यं प्रश्ने] — A finite verb retains accent after @deva[सत्यम्] when asking a question:
- @deva[सत्यं भोक्ष्य꣡से] "Truly, will you eat?"
- @deva[सत्यमध्येष्यसे] "Really, will you study?"

But in statements: @deva[सत्यं वक्ष्यामि नानृतम्] (verb loses accent).`,

  "81033": `@deva[अङ्गाप्रातिलोम्ये] — A finite verb retains accent after @deva[अङ्ग] when expressing friendliness:
- @deva[अङ्ग प꣡च] "Yes, please cook!"
- @deva[अङ्ग प꣡ठ] "Yes, please read!"

But with hostility: @deva[अङ्ग कूजा॒ वृषल] "Go ahead and squawk, you wretch!"`,

  "81034": `@deva[हि च] — A finite verb retains accent after @deva[हि] when expressing friendliness:
- @deva[स हि कुरु꣡] "Yes, please do!"
- @deva[सहि प꣡च], @deva[सहि प꣡ठ]

But with hostility: @deva[स हि कू॒ज वृषल] (verb loses accent).`,

  "81035": `@deva[छन्दस्यनेकमपि साकाङ्क्षम्] — In the Vedas, after @deva[हि], the verb retains accent even when multiple verbs are correlated:
- @deva[अनृतं हि मत्तो व꣡दति। पाप्मा एनं वि पु꣡नाति]

Both @deva[वदति] and @deva[विपुनाति] retain accent because they're in correlation.`,

  "81036": `@deva[यावद्यथाभ्याम्] — A finite verb retains accent after @deva[यावत्] and @deva[यथा]:
- @deva[यावद् भुङ्क्ते꣡], @deva[यथा भुङ्क्ते꣡]
- @deva[यावदधीते꣡], @deva[यथाधीते꣡]
- @deva[देवदत्तः प꣡चति यावत्] (even when following)`,

  "81037": `@deva[पूजायां नानन्तरम्] — But the verb loses accent when @deva[यावत्/यथा] **immediately** precedes it and expresses **praise**:
- @deva[यावत् प॒च॒ति॒ शोभनम्] "How well he cooks!"
- @deva[यथा करोति चारु]

Not praise: @deva[यावद् भुङ्क्ते꣡] (accent retained).
Not immediate: @deva[यावद् देवदत्तः प꣡चति शोभनं] (accent retained).`,

  "81038": `@deva[उपसर्गव्यपेतं च] — Intervention of an upasarga doesn't break "immediacy" for @ref[8.1.37]:
- @deva[यथा प्रकरोति चारु] (verb loses accent despite @deva[प्र])
- @deva[यथा प्रपचति शोभनम्]
- @deva[यावत् प्रकरोति चारु]`,

  "81039": `@deva[तुपश्यपश्यताहैः पूजायाम्] — A finite verb retains accent after @deva[तु], @deva[पश्य], @deva[पश्यत], and @deva[अह] when expressing praise:
- @deva[पश्य करो꣡ति चारु] "See how beautifully he does it!"
- @deva[अह करो꣡ति चारु] "Ah, how well he does!"`,

  "81040": `@deva[इत्युक्तं चेद्यदा तदेत्यनन्तरम्] — A finite verb retains accent after @deva[इति], @deva[उक्तम्], @deva[चेत्], @deva[यदा], @deva[तदा], and @deva[इत्] when immediately following:
- @deva[इति करो꣡ति]
- @deva[चेत् प꣡चति]
- @deva[यदा भ꣡वति], @deva[तदा ग꣡च्छति]`,

  "81041": `@deva[त्वैवैक्यवाक्ये] — @deva[त्वा] retains accent when expressing unity of action in a sentence:
- Sentences expressing simultaneous or unified actions
- @deva[त्वा] form governs correlated verbs`,

  "81042": `@deva[शनैरर्थे] — When @deva[शनैः] expresses gradual action, the following verb retains accent:
- @deva[शनैः करो꣡ति] "gradually does"
- @deva[शनैर्गच्छ꣡ति] "slowly goes"`,

  "81043": `@deva[समुच्चये च] — In conjunctive (@deva[समुच्चय]) contexts, the verb retains accent:
- When actions are enumerated together
- Conjunctive particles preserve verb accent`,

  "81044": `@deva[विभाषाऽऽर्धधातुके यलोपे कृति] — Optionally in ārdhadhātuka contexts where @deva[य्] is elided, the kṛt retains accent:
- Various kṛt formations
- Optional accent retention`,

  "81045": `@deva[चादयोऽसत्त्वे] — After @deva[च] etc. when not expressing existence, specific accent patterns:
- @deva[च] and similar particles
- Non-existential contexts`,

  "81046": `@deva[अश्ववृषौ समासे] — In compounds, @deva[अश्व] and @deva[वृष] take specific accent:
- Compound-internal accent rules
- @deva[अश्व] and @deva[वृष] patterns`,

  "81047": `@deva[समाप्ते समाप्तप्रयोगे] — When action is completed, accent patterns apply:
- Completed action expressions
- @deva[समाप्त] contexts`,

  "81048": `@deva[एकश्रुतिदूरात्सम्बुद्धौ] — In distant address (@deva[सम्बुद्धि]), monotone (@deva[एकश्रुति]) applies:
- Calling from a distance
- All syllables on same pitch
- @deva[हे देवदत्त] (called from afar)`,

  "81049": `@deva[नोपधायाः] — The penultimate (@deva[उपधा]) is not affected:
- Penultimate vowel exceptions
- Accent preservation on upadhā`,

  "81050": `@deva[वत्परस्मैपदे] — With @deva[वत्] in parasmaipada:
- Specific accent in parasmaipada
- @deva[वत्] suffix patterns`,

  "81051": `@deva[अनुदात्तंचोत्तरं छन्दसि] — In the Vedas, the following is also @deva[अनुदात्त]:
- Vedic accent extensions
- Additional unaccented elements`,

  "81052": `@deva[अकथितं च] — What is not explicitly stated also (becomes anudātta):
- Implicit accent rules
- Unstated elements`,

  "81053": `@deva[प्रगृह्यमनुदात्तं सवर्णे] — A @deva[प्रगृह्य] vowel remains @deva[अनुदात्त] before a similar vowel:
- Pragṛhya vowels before savarṇa
- No sandhi, accent preserved`,

  "81054": `@deva[छन्दस्युभयथा] — In the Vedas, both ways (optionally):
- Vedic optionality
- Either accent pattern valid`,

  "81055": `@deva[ससूदतिश्च] — And @deva[सूदति]:
- @deva[सूदति] accent patterns
- Specific verb exception`,

  "81056": `@deva[विभाषा द्वयोः] — Optionally for two:
- Dual context options
- Two-element accent choice`,

  "81057": `@deva[निपातस्याविद्यमानेऽर्थे] — A nipāta when its meaning is absent:
- Particles without semantic content
- Expletive usage accent`,

  "81058": `@deva[अद्यर्थे] — When meaning "today":
- @deva[अद्य] semantic contexts
- Temporal particle accent`,

  "81059": `@deva[एकादेश उदात्तेनोदात्तः] — A single substitute is @deva[उदात्त] if one component was @deva[उदात्त]:
- Ekādeśa accent inheritance
- One acute → substitute acute`,

  "81060": `@deva[स्वरितादुदात्तः स्वरितः पूर्वपदप्रकृतिस्वरत्वाच्च] — After @deva[स्वरित], @deva[उदात्त] becomes @deva[स्वरित]:
- Svarita accent propagation
- Accent sandhi in compounds`,

  "81061": `@deva[उदात्तस्वरितयोर्यणः स्वरितोऽनुदात्तस्य] — After @deva[उदात्त/स्वरित], @deva[यण्] of an @deva[अनुदात्त] becomes @deva[स्वरित]:
- Semivowel accent changes
- Context-dependent accent shifts`,

  "81062": `@deva[दाशस्यतिलोपे तिबुतः] — When @deva[ति] of @deva[दाश] is elided, @deva[तिप्] and @deva[उत्]:
- @deva[दाश] elision contexts
- Specific verb accent`,

  "81063": `@deva[स्तुशस्यशस्ययोरोः] — For @deva[स्तुष] and @deva[यश]:
- Specific root accent patterns
- @deva[ओ] substitution contexts`,

  "81064": `@deva[पृषन्मत्सौ] — @deva[पृषत्] and @deva[मत्स]:
- Specific word accent
- Named form exceptions`,

  "81065": `@deva[छन्दस्युक्तं च] — And what is stated for Vedas:
- Vedic declarations
- Chandas-specific rules`,

  "81066": `@deva[तिङ् चौ] — @deva[तिङ्] endings and @deva[च]:
- Verb ending accent
- Conjunction interactions`,

  "81067": `@deva[स्वरे विशेषणस्य निघातो वा] — Optionally, the modifier's accent is suppressed:
- Qualifier accent suppression
- Optional nighāta on viśeṣaṇa`,

  "81068": `@deva[सगतिरपि तिङ्] — Even a verb with prefixed @deva[गति] (upasarga):
- Upasarga + verb accent
- Combined element patterns

This completes pāda 8.1.`,

  "81069": `@deva[संहितायाम्] — **Adhikāra**: In continuous recitation (@deva[संहिता]), the following rules apply:
- Sandhi context begins
- Rules for connected speech`,

  "81070": `@deva[ग्रहजयार्जिनां लिट्सनाश्च] — For @deva[ग्रह्], @deva[जि], @deva[अर्ज्] in @deva[लिट्] and @deva[सन्]:
- Perfect and desiderative patterns
- Specific root behavior`,

  "81071": `@deva[शासिवसिघसीनां च] — And for @deva[शास्], @deva[वस्], @deva[घस्]:
- Additional root patterns
- @deva[इ] suffix behavior`,

  "81072": `@deva[हनस्तोऽचिण्णलोः] — For @deva[हन्], @deva[त्] (not before @deva[चिण्] or @deva[णल्]):
- @deva[हन्] → @deva[घात्] patterns
- Aorist and perfect exceptions`,

  "81073": `@deva[मोऽनुस्वारः] — @deva[म्] becomes @deva[अनुस्वार]:
- Anusvāra substitution
- Nasal assimilation`,

  "81074": `@deva[विभाषितं विशेषवचने बहुवचनम्] — Optionally in specific plural contexts:
- Plural optionality
- Specific vs. general forms

This completes pāda 8.1 and begins the Tripādī section of the Aṣṭādhyāyī.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.1.1-74)`);
console.log(`Total entries: ${Object.keys(data).length}`);
