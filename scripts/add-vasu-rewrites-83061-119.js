#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "83061": `@deva[स्तौतिण्योरेव षण्यभ्यासात्] — **Desiderative Reduplication**: In desideratives of @deva[स्तु] "praise" and @deva[ण्]-initial causatives, when @deva[सन्] becomes @deva[षन्], the @deva[स्] of the reduplicative syllable (@[abhyāsa]) also becomes @deva[ष्].

@deva[तुष्टूषति] (desid. of @deva[स्तु]).`,

  "83062": `@deva[सः स्विदिस्वदिसहीनां च] — **Exception for Three Roots**: For causative desideratives of @deva[स्विद्] "sweat", @deva[स्वद्] "taste", and @deva[सह्] "endure", the @deva[स्] of the reduplication remains @deva[स्] (no @deva[ष्]-change).

@deva[सिस्वेदयिषति], @deva[सिस्वादयिषति], @deva[सिसाहयिषति].`,

  "83063": `@deva[प्राक् सितादड्व्यवायेऽपि] — **@deva[अट्] Intervening**: For roots before @deva[सित्] (in @ref[8.3.70]), the @deva[ष्]-change applies even when the augment @deva[अट्] intervenes between the preverb and root.

@deva[न्यषीदत्] (imperfect with @deva[अट्]).`,

  "83064": `@deva[स्थादिष्वभ्यासेन चाभ्यासस्य] — **Reduplication @deva[ष्]**: In @deva[स्था]-class roots through @deva[सित्], when reduplication intervenes, both the root's @deva[स्] and the reduplicant's @deva[स्] become @deva[ष्].

@deva[तिष्ठासति] (desid. of @deva[स्था]): both @deva[ष्].`,

  "83065": `@deva[उपसर्गात् सुनोति...स्वञ्जाम्] — **After Preverbs**: After @[upasarga] (preverbs) ending in @deva[इ/उ], @deva[स्] → @deva[ष्] in these verbs:

| Root | Example |
|------|---------|
| @deva[सु] "press" | @deva[अभिषुणोति] |
| @deva[स्तु] "praise" | @deva[अभिष्टौति] |
| @deva[स्था] "stand" | @deva[अभितिष्ठति] |
| @deva[सिच्] "sprinkle" | @deva[अभिषिञ्चति] |
| @deva[स्वञ्ज्] "embrace" | @deva[परिष्वजते] |`,

  "83066": `@deva[सदिरप्रतेः] — **@deva[सद्] Exception**: The @deva[स्] of @deva[सद्] "sit" becomes @deva[ष्] after preverbs with @deva[इ/उ], @b[except] after @deva[प्रति].

| Preverb | Form |
|---------|------|
| @deva[नि] | @deva[निषीदति] |
| @deva[वि] | @deva[विषीदति] |
| @deva[प्रति] | @deva[प्रतिसीदति] (no ष्) |`,

  "83067": `@deva[स्तम्भेः] — **@deva[स्तम्भ्] "prop"**: After preverbs with @deva[इ/उ], @deva[स्तम्भ्] takes @deva[ष्].

@deva[अभिष्टभ्नाति], @deva[परिष्टभ्नाति].

Unlike @deva[सद्], this includes @deva[प्रति]: @deva[प्रतिष्टभ्नाति].`,

  "83068": `@deva[अवाच् चालम्बनाविदूर्ययोः] — **@deva[अव] + @deva[स्तम्भ्]**: After @deva[अव], @deva[स्तम्भ्] takes @deva[ष्] only when meaning "support" or "nearness."

@deva[अवष्टभ्यास्ते] "leans on a staff" — but @deva[अवस्तभ्नाति] "props up" (literal).`,

  "83069": `@deva[वेश्च स्वनो भोजने] — **@deva[स्वन्] "sound" in Eating**: After @deva[वि] and @deva[अव], @deva[स्वन्] takes @deva[ष्] when meaning "smacking while eating."

@deva[विष्वणति] "eats noisily" — but @deva[विस्वनति मृदङ्गः] "the drum sounds."`,

  "83070": `@deva[परिनिविभ्यः सेव...स्वञ्जाम्] — **Three Preverbs + Eight Items**: After @deva[परि], @deva[नि], @deva[वि], @deva[ष्] replaces @deva[स्] in:

@deva[सेव्] "serve", @deva[सित] (PPP of @deva[सि]), @deva[सय] (from @deva[सो]), @deva[सिव्] "sew", @deva[सह्] "endure", @deva[सुट्] (augment), @deva[स्तु] "praise", @deva[स्वञ्ज्] "embrace."

@deva[परिषेवते], @deva[निषेवते], @deva[विषेवते].`,

  "83071": `@deva[सिवादीनां वाड्व्यवायेऽपि] — **Optional with @deva[अट्]**: For @deva[सिव्] etc. (last four of @ref[8.3.70]), the @deva[ष्]-change is @b[optional] when @deva[अट्] augment intervenes.

@deva[पर्यषेवत] or @deva[पर्यसेवत].`,

  "83072": `@deva[अनुविपर्यभिनिभ्यः स्यन्दतेरप्राणिषु] — **@deva[स्यन्द्] "flow"**: After @deva[अनु], @deva[वि], @deva[परि], @deva[अभि], @deva[नि], @deva[ष्] replaces @deva[स्] when the subject is non-animate.

@deva[अभिष्यन्दते तैलम्] "oil flows" — but @deva[अभिस्यन्दते देवदत्तः] "D. flows" (animate).`,

  "83073": `@deva[वेः स्कन्देरनिष्ठायाम्] — **@deva[वि] + @deva[स्कन्द्]**: After @deva[वि], @deva[स्कन्द्] "leap" takes @deva[ष्]—except in @[niṣṭhā] (participles @deva[-त], @deva[-तवत्]).

@deva[विष्कन्ता] or @deva[विस्कन्ता] — but always @deva[विस्कन्न] (not *विष्कन्न).`,

  "83074": `@deva[परेश्च] — **@deva[परि] + @deva[स्कन्द्]**: After @deva[परि], @deva[स्कन्द्] optionally takes @deva[ष्] in @b[all] forms (including @[niṣṭhā]).

@deva[परिष्कन्न] or @deva[परिस्कन्न].`,

  "83075": `@deva[परिस्कन्दः प्राच्यभरतेषु] — **Regional Form**: In the Eastern Bharata region, @deva[परिस्कन्द] (without @deva[ष्]) is used.

@deva[परिस्कन्दः] (Eastern) vs. @deva[परिष्कन्दः] (standard).`,

  "83076": `@deva[स्फुरतिस्फुलत्योर्निर्निविभ्यः] — **@deva[स्फुर्]/स्फुल्] "throb/spark"**: After @deva[निस्], @deva[नि], @deva[वि], these roots optionally take @deva[ष्].

@deva[निष्फुरति] or @deva[निस्फुरति], @deva[विष्फुलति] or @deva[विस्फुलति].`,

  "83077": `@deva[वेः स्कभ्नातेर्नित्यम्] — **@deva[वि] + @deva[स्कभ्]**: After @deva[वि], @deva[स्कभ्] "prop" @b[always] takes @deva[ष्].

@deva[विष्कभ्नाति], @deva[विष्कम्भितुम्], @deva[विष्कम्भितव्यम्].`,

  "83078": `@deva[इणः षीध्वंलुङ्लिटां धो ऽङ्गात्] — **@deva[ध्] → @deva[ढ्] after @[iṇ]-Stems**: After a stem ending in @[iṇ] (non-@deva[अ] vowel), @deva[ध्] of @deva[-षीध्वम्], aorist, or perfect endings becomes @deva[ढ्].

@deva[च्योषीढ्वम्], @deva[अच्योढ्वम्] (aorist).`,

  "83079": `@deva[विभाषेटः] — **Optional after @deva[इट्]**: When @deva[इट्] augment intervenes, the @deva[ध्] → @deva[ढ्] change is optional.

@deva[लविषीध्वम्] or @deva[लविषीढ्वम्].`,

  "83080": `@deva[समासे ऽङ्गुलेः सङ्गः] — **@deva[अङ्गुलि] + @deva[सङ्ग]**: In compounds, @deva[सङ्ग] "attachment" takes @deva[ष्] after @deva[अङ्गुलि] "finger."

@deva[अङ्गुलिषङ्ग] "finger-contact."`,

  "83081": `@deva[भीरोः स्थानम्] — **@deva[भीरु] + @deva[स्थान]**: In compounds, @deva[स्थान] takes @deva[ष्] after @deva[भीरु] "timid."

@deva[भीरुष्ठानम्] "refuge of the timid."`,

  "83082": `@deva[अग्नेः स्तुत्स्तोमसोमाः] — **@deva[अग्नि] Compounds**: After @deva[अग्नि], @deva[स्तुत्], @deva[स्तोम], and @deva[सोम] take @deva[ष्].

@deva[अग्निष्टुत्], @deva[अग्निष्टोमः], @deva[अग्नीषोमः] (with lengthening).`,

  "83083": `@deva[ज्योतिरायुषः स्तोमः] — **@deva[ज्योतिस्]/आयुस्] + @deva[स्तोम]**: In compounds, @deva[स्तोम] takes @deva[ष्] after @deva[ज्योतिस्] and @deva[आयुस्].

@deva[ज्योतिष्टोमः], @deva[आयुष्टोमः].`,

  "83084": `@deva[मातृपितृभ्यां स्वसा] — **@deva[मातृ]/पितृ] + @deva[स्वसृ]**: @deva[स्वसृ] "sister" takes @deva[ष्] after @deva[मातृ] or @deva[पितृ] in compounds.

@deva[मातृष्वसा] "maternal aunt", @deva[पितृष्वसा] "paternal aunt."`,

  "83085": `@deva[मातुः पितुर्भ्यामन्यतरस्याम्] — **@deva[मातुर्]/पितुर्] Optional**: After @deva[मातुर्] or @deva[पितुर्] (with visarga), @deva[स्वसृ] optionally takes @deva[ष्].

@deva[मातुःष्वसा] or @deva[मातुःस्वसा].`,

  "83086": `@deva[अभिनिसः स्तनः शब्दसंज्ञायाम्] — **@deva[अभिनिस्] + @deva[स्तन्]**: The compound preverb @deva[अभिनिस्] + @deva[स्तन्] optionally takes @deva[ष्] when naming the visarga sound.

@deva[अभिनिष्टानः] or @deva[अभिनिस्तानः] (name for visarga).`,

  "83087": `@deva[उपसर्गप्रादुर्भ्यामस्तिर्यच्परः] — **@deva[अस्] "be" after Preverbs**: After an @[upasarga] with @deva[इ/उ] or after @deva[प्रादुस्], @deva[अस्] takes @deva[ष्] when followed by a vowel or @deva[य्].

@deva[अभिषन्ति], @deva[प्रादुषासीत्].`,

  "83088": `@deva[सुविनिर्दुर्भ्यः सुपिसूतिसमाः] — **Four Preverbs + Three Items**: After @deva[सु], @deva[वि], @deva[निर्], @deva[दुर्], @deva[ष्] applies to @deva[सुप्] "sleep", @deva[सूति] "pressing", @deva[सम] "equal."

@deva[सुषुप्त], @deva[विषूति], @deva[दुःषम].`,

  "83089": `@deva[निनदीभ्यां स्नातेः कौशले] — **@deva[स्ना] "bathe"**: After @deva[नि] or @deva[नदी], @deva[स्ना] takes @deva[ष्] when meaning "skilled."

@deva[निष्णातः] "skilled", @deva[नदीष्णः] "skilled at rivers."

But: @deva[निस्नातः] "bathed" (literal meaning).`,

  "83090": `@deva[सूत्रं प्रतिष्णातम्] — **@deva[प्रतिष्णात] for Sūtra**: The word @deva[प्रतिष्णात] (irregular @deva[ष्]) means "purified sūtra/thread."

@deva[प्रतिष्णातं सूत्रम्] "pure thread."`,

  "83091": `@deva[कपिष्ठलो गोत्रे] — **Proper Name**: The name @deva[कपिष्ठल] (with irregular @deva[ष्]) is used for a @[gotra] (clan) founder.

@deva[कापिष्ठलिः] (patronymic from Kapiṣṭhala).`,

  "83092": `@deva[प्रष्ठो ऽग्रगामिनि] — **@deva[प्रष्ठ] "leader"**: The word @deva[प्रष्ठ] (with @deva[ष्]) means "one who goes in front."

@deva[प्रष्ठो ऽश्वः] "lead horse."

But: @deva[प्रस्थो हिमवतः] "plateau of Himālaya" (different word).`,

  "83093": `@deva[वृक्षासनयोर्विष्टरः] — **@deva[विष्टर] Two Meanings**: The word @deva[विष्टर] (irregular @deva[ष्]) means "tree" or "seat."

@deva[विष्टरो वृक्षः] "tree", @deva[विष्टरमासनम्] "cushion/seat."`,

  "83094": `@deva[छन्दोनाम्नि च] — **Meter Name**: @deva[विष्टर] (with @deva[ष्]) is also used as a meter name (@deva[विष्टारपङ्क्तिः]).`,

  "83095": `@deva[गवियुधिभ्यां स्थिरः] — **@deva[गवि]/युधि] + @deva[स्थिर]**: After @deva[गवि] "in cows" or @deva[युधि] "in battle", @deva[स्थिर] takes @deva[ष्].

@deva[गविष्ठिरः] "steady among cows", @deva[युधिष्ठिरः] (the name Yudhiṣṭhira).`,

  "83096": `@deva[विकुशमिपरिभ्यः स्थलम्] — **@deva[स्थल] "place"**: After @deva[वि], @deva[कु], @deva[शमि], @deva[परि], @deva[स्थल] takes @deva[ष्].

@deva[विष्ठलम्], @deva[कुष्ठलम्], @deva[शमिष्ठलम्], @deva[परिष्ठलम्].`,

  "83097": `@deva[अम्बा...अग्निभ्यः स्थः] — **@deva[स्थ] "standing"**: After @deva[अम्ब], @deva[आम्ब], @deva[गो], @deva[भूमि], @deva[सव्य], @deva[अप], @deva[द्वि], @deva[त्रि], @deva[कु], @deva[शेकु], @deva[शङ्कु], @deva[अङ्गु], @deva[मञ्जि], @deva[पुञ्जि], @deva[परमे], @deva[बर्हिस्], @deva[दिवि], @deva[अग्नि], the affix @deva[-स्थ] takes @deva[ष्].

@deva[अम्बष्ठः], @deva[गोष्ठम्], @deva[त्रिष्ठः], @deva[अग्निष्ठः].`,

  "83098": `@deva[सुषामादिषु च] — **@deva[सुषामन्] Class**: Words in the @deva[सुषामन्]-class take @deva[ष्]:

@deva[सुषामा], @deva[निःषामा], @deva[दुःषामा], @deva[सुषेधः], @deva[निषेधः], @deva[सुष्ठु], @deva[दुष्ठु], etc.`,

  "83099": `@deva[एति संज्ञायामगात्] — **Names with @deva[-सेन]**: When forming a proper name (@[saṃjñā]), @deva[सेन] takes @deva[ष्] after @[iṇ] or @[ku]—but not after @deva[ग्].

@deva[हरिषेणः], @deva[वारिषेणः] — but @deva[सुगसेनः] (after @deva[ग्]).`,

  "83100": `@deva[नक्षत्राद् वा] — **Star Names Optional**: After a @[nakṣatra] (constellation) name, @deva[सेन] optionally takes @deva[ष्].

@deva[रोहिणिषेणः] or @deva[रोहिणिसेनः].`,

  "83101": `@deva[ह्रस्वात् तादौ तद्धिते] — **Short Vowel + @deva[त]-Initial @[taddhita]**: After a short @deva[उ], @deva[स्] → @deva[ष्] before @[taddhita] suffixes starting with @deva[त्].

| Suffix | Example |
|--------|---------|
| @deva[-तर] | @deva[सर्पिष्टरम्] |
| @deva[-तम] | @deva[यजुष्टमम्] |
| @deva[-त्व] | @deva[धनुष्ट्वम्] |`,

  "83102": `@deva[निसस्तपतावनासेवने] — **@deva[निस्] + @deva[तप्]**: @deva[निस्] + @deva[तप्] "heat" takes @deva[ष्] only when meaning "heating once" (not repeatedly).

@deva[निष्टपति सुवर्णम्] "heats gold once."`,

  "83103": `@deva[युष्मत्तत्ततक्षुःष्वन्तःपादम्] — **Vedic Internal Position**: Within a verse-quarter (@[antaḥpāda]), @deva[स्] → @deva[ष्] before forms of @deva[त्वम्] (you), @deva[तत्], @deva[ततक्षुः].

@deva[अग्निष्ट्वं नामासीत्] (internal position).`,

  "83104": `@deva[यजुष्येकेषाम्] — **Yajurveda Opinion**: Some hold that the internal @deva[ष्]-change of @ref[8.3.103] applies in Yajurveda too.

@deva[अर्चिर्भिष्ट्वम्] or @deva[अर्चिर्भिस्त्वम्].`,

  "83105": `@deva[स्तुतस्तोमयोश्छन्दसि] — **Vedic @deva[स्तुत]/स्तोम]**: In Vedas, @deva[स्तुत] and @deva[स्तोम] optionally take @deva[ष्].

@deva[त्रिभिष्टुतस्य] or @deva[त्रिभिस्तुतस्य].`,

  "83106": `@deva[पूर्वपदात्] — **After Prior Compound Member**: In Vedas, @deva[ष्] replaces @deva[स्] at the start of a second member after a prior member ending in @[iṇ]/ku].

@deva[द्विषन्धिः] or @deva[द्विसन्धिः].`,

  "83107": `@deva[सुञः] — **Particle @deva[सु]**: In Vedas, the particle @deva[सु] "well" takes @deva[ष्] after @[iṇ]/ku] words.

@deva[अभी षु णः सखीनाम्] (Ṛg. IV.31.3).`,

  "83108": `@deva[सनोतेरनः] — **@deva[सन्] Losing @deva[न्]**: When @deva[सन्] "gain" loses its @deva[न्], the @deva[स्] becomes @deva[ष्] after @[iṇ]/ku].

@deva[गोषाः] (Ṛg. IX.2.10) from @deva[गो + सन्] with @deva[विट्] affix.`,

  "83109": `@deva[सहेः पृतनर्ताभ्यां च] — **@deva[सह्] after Two Words**: @deva[सह्] "conquer" takes @deva[ष्] after @deva[पृतना] "army" and @deva[ऋत] "truth."

@deva[पृतनाषाहम्], @deva[ऋताषाहम्].`,

  "83110": `@deva[न रपरसृपिसृजिस्पृशिस्पृहिसवनादीनाम्] — **Exceptions**: No @deva[ष्]-change for:

| Item | Reason |
|------|--------|
| @deva[र्]-followed | @deva[विस्रब्धः] |
| @deva[सृप्] | @deva[विसृप्] |
| @deva[सृज्] | @deva[विसृज्] |
| @deva[स्पृश्] | @deva[विस्पृश्] |
| @deva[स्पृह्] | @deva[विस्पृह्] |
| @deva[सवन] class | @deva[विसवन] |`,

  "83111": `@deva[सात्पदाद्योः] — **@deva[-सात्] and Word-Initial**: No @deva[ष्]-change for the affix @deva[-सात्] (@ref[5.4.52]) or for word-initial @deva[स्] (roots listed with @deva[ष्] in Dhātupāṭha).

@deva[भूमिसात्] (no ष्), not *@deva[भूमिषात्].`,

  "83112": `@deva[सिचो यङि] — **Intensive @deva[सिच्]**: In the intensive of @deva[सिच्] "sprinkle", @deva[स्] does @b[not] become @deva[ष्].

@deva[सेसिच्यते], @deva[अभिसेसिच्यते] (not *अभिषेषिच्यते).`,

  "83113": `@deva[षडादीनाम्] — **@deva[षड्] Class**: For @deva[षड्]-class items (roots/words beginning with @deva[ष्] in the tradition), the @deva[ष्] is original and retained.

@deva[षड्], @deva[षण्], @deva[षष्] — inherent @deva[ष्].`,

  "83114": `@deva[णः कुः] — **@deva[ण्] → @deva[न्] after @[ku]**: @deva[ण्] reverts to @deva[न्] after gutturals (@[ku]).

@deva[प्राङ्नयति] (not *@deva[प्राङ्णयति]).`,

  "83115": `@deva[सण्यभ्यासस्यायोभावो मस्य] — **@deva[अयो] for @deva[म्] in Reduplication**: In the reduplication of @deva[षण्] (desiderative), @deva[म्] of the @[abhyāsa] becomes @deva[अयो] (special form).`,

  "83116": `@deva[झयः] — **@deva[झय्] Intervening**: When @[jhay] (voiced non-aspirates) intervene, the @deva[ष्]-rules apply with modifications.`,

  "83117": `@deva[अत् कुप्वाङ्नुम्व्यवायेऽपि] — **@deva[ण्]-change Triggers**: @deva[ण्]-change occurs even when @deva[अ], @[ku], @deva[प्], @deva[आङ्], or @deva[नुम्] intervene.

@deva[ब्राह्मणः] (despite intervening @deva[म्]).`,

  "83118": `@deva[नान्सुसिद्वाञ्ञेग्दघे च] — **Perfect @deva[न्] Retention**: The second @deva[स्] in perfect forms like @deva[निषसाद] remains @deva[स्] (not @deva[ष्]).

This prevents double-@deva[ष्] in reduplicated perfects.`,

  "83119": `@deva[लोपः शाकल्यस्य] — **Śākalya's Deletion**: According to Śākalya, certain consonant clusters are simplified by deletion.

This completes the @[ṣatva] section.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.3.61-119)`);
console.log(`Total entries: ${Object.keys(data).length}`);
