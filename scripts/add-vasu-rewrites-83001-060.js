#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "83001": `@deva[मतुवसो रु सम्बुद्धौ छन्दसि] — **Vedic Vocative**: In the Vedas (@[chandas]), the final consonant of affixes @deva[मत्] and @deva[वस्] becomes @deva[रु] (→ @deva[र्]) in the vocative singular.

| Affix | Example |
|-------|---------|
| @deva[-मत्] | @deva[इन्द्र मरुत्व] (O Indra with the Maruts) |
| @deva[-वस्] | @deva[हे विद्वर्] (O learned one) |

The @deva[त्]/स्] → @deva[र्] change is specific to Vedic address forms.`,

  "83002": `@deva[अत्रानुनासिकः पूर्वस्य तु वा] — **Adhikāra**: In this section (through @ref[8.3.12]), where @deva[रु] is ordained, the vowel @b[before] the replaced consonant optionally becomes nasal (@[anunāsika]).

This nasalization is optional: @deva[मरुत्व] can have nasal or non-nasal @deva[उ].`,

  "83003": `@deva[आतो ऽटि नित्यम्] — **Obligatory Nasalization**: When @deva[आ] precedes the @deva[रु]-substitution and an @[aṭ] sound (vowel, @deva[ह्], @deva[य्], @deva[व्], @deva[र्]) follows, the @deva[आ] is @b[always] nasalized.

@deva[आँर्] (not *@deva[आर्]) when @[aṭ] follows.`,

  "83004": `@deva[अनुनासिकात् परो ऽनुस्वारः] — **Anusvāra Alternative**: When nasalization is @b[not] applied (per the option in @ref[8.3.2]), @[anusvāra] (ं) is added after the vowel instead.

| With nasal | With anusvāra |
|------------|---------------|
| @deva[मरुँत्व] | @deva[मरुंत्व] |`,

  "83005": `@deva[समः सुटि] — **@deva[सम्] before @deva[सुट्]**: When the augment @deva[सुट्] (स्) follows, the @deva[म्] of @deva[सम्] becomes @deva[रु], and the preceding vowel becomes nasal or takes anusvāra.

| Form | Result |
|------|--------|
| @deva[सम् + स्कर्ता] | @deva[सँस्कर्ता] or @deva[संस्कर्ता] |`,

  "83006": `@deva[पुमः खय्यम्परे] — **@deva[पुम्] before Stops**: The @deva[म्] of @deva[पुम्] "male" becomes @deva[रु] before a voiceless stop (@[khay]) that is followed by a vowel, semivowel, or nasal (@[am]).

| Cluster | Example |
|---------|---------|
| @deva[पुम् + कामा] | @deva[पुँस्कामा] or @deva[पुंस्कामा] |
| @deva[पुम् + चली] | @deva[पुँश्चली] or @deva[पुंश्चली] |`,

  "83007": `@deva[नश् छव्यप्रशान्] — **@deva[न्] → @deva[रु]**: Final @deva[न्] (except in @deva[प्रशान्]) becomes @deva[रु] before @[chav] letters (छ्, ठ्, थ्, च्, ट्, त्) when followed by @[am] (vowel/semivowel/nasal).

| Before | Example |
|--------|---------|
| @deva[छ्] | @deva[राजँश्छत्रम्] |
| @deva[त्] | @deva[राजँस्तत्र] |`,

  "83008": `@deva[उभयथर्क्षु] — **Optional in Ṛgveda**: In the Ṛgvedic verses, the @deva[न्] → @deva[रु] change before @[chav] is @b[optional].

Both @deva[तस्मिँश्छन्दसि] and @deva[तस्मिन् छन्दसि] are valid in Ṛk texts.`,

  "83009": `@deva[दीर्घादटि समानपादे] — **Long Vowel + @deva[न्]**: When @deva[न्] follows a long vowel and precedes an @[aṭ] sound, @deva[न्] → @deva[रु] is optional—but only within the same Ṛgvedic verse-quarter (@[pāda]).

@deva[राजान् अत्र] → @deva[राजाँर् अत्र] (optional).`,

  "83010": `@deva[नॄन् पे] — **@deva[नॄन्] before @deva[प्]**: The @deva[न्] of @deva[नॄन्] "men" (acc. pl.) optionally becomes @deva[रु] before @deva[प्].

@deva[नॄँः पाहि] or @deva[नॄंः पाहि] "protect the men!"`,

  "83011": `@deva[स्वतवान् पायौ] — **Specific Vedic Form**: The @deva[न्] of @deva[स्वतवान्] becomes @deva[रु] before @deva[पायु] in the Ṛgveda.

@deva[स्वतवाँ पायुरग्ने] (Ṛg. IV.2.6).`,

  "83012": `@deva[कानाम्रेडिते] — **Reduplicated @deva[कान्]**: When @deva[कान्] is followed by its own repetition (@[āmreḍita]), @deva[न्] → @deva[रु].

@deva[काँस्कान् आमन्त्रयते] "he addresses each one."`,

  "83013": `@deva[ढो ढे लोपः] — **@deva[ढ्] Deletion**: When @deva[ढ्] is followed by another @deva[ढ्], the first is deleted.

| Underlying | Surface |
|------------|---------|
| @deva[लिढ् + ढ] | @deva[लीढ] |

From @deva[लिह् + त] → @deva[लिढ् + ढ] (by @ref[8.2.31], @ref[8.2.40]) → @deva[लीढ].`,

  "83014": `@deva[रो रि] — **@deva[र्] Deletion before @deva[र्]**: When @deva[र्] is followed by @deva[र्], the first @deva[र्] is deleted.

| Underlying | Surface |
|------------|---------|
| @deva[पुनर् + रमते] | @deva[पुनरमते] |

This applies to all @deva[र्], not just @deva[रु]-substitutes.`,

  "83015": `@deva[खरवसानयोर् विसर्जनीयः] — **Visarga Formation**: @deva[र्] (including @deva[रु]) becomes visarga (ः) before:

| Context | Example |
|---------|---------|
| @[khar] (voiceless) | @deva[वृक्षः तरति] |
| Pause (@[avasāna]) | @deva[वृक्षः] (sentence-final) |

This is the standard @deva[र्] → ः rule.`,

  "83016": `@deva[रोः सुपि] — **Visarga before @deva[-सु]**: Specifically, @deva[रु] (not other @deva[र्]) becomes visarga before the locative plural ending @deva[-सु].

| Stem | Loc. Pl. |
|------|----------|
| @deva[पयस्] | @deva[पयःसु] |
| @deva[यशस्] | @deva[यशःसु] |`,

  "83017": `@deva[भोभगोअघोअपूर्वस्य यो ऽशि] — **@deva[य्] Substitution**: Before @[aś] sounds (vowels and voiced consonants), @deva[रु] becomes @deva[य्] when preceded by:

| Word | Example |
|------|---------|
| @deva[भो] | @deva[भोय् अत्र] → @deva[भो अत्र] |
| @deva[भगो] | @deva[भगोय् अत्र] |
| @deva[अघो] | @deva[अघोय् अत्र] |
| @deva[अ/आ] | @deva[कय् आस्ते] |`,

  "83018": `@deva[व्योर् लघुप्रयत्नतरः शाकटायनस्य] — **Light Pronunciation**: According to Śākaṭāyana, the @deva[व्] and @deva[य्] (from @deva[रु]-substitution after @deva[अ/आ]) are pronounced with @b[lighter effort] (@[laghuprayatnatara]) before @[aś] sounds.

This describes a reduced articulation, almost elided.`,

  "83019": `@deva[लोपः शाकल्यस्य] — **Deletion per Śākalya**: According to Śākalya, the @deva[व्]/य्] (from @ref[8.3.17]) is @b[deleted] entirely before @[aś].

| Full | Śākalya |
|------|---------|
| @deva[कयास्ते] | @deva[क आस्ते] |
| @deva[द्वावत्र] | @deva[द्वा अत्र] |`,

  "83020": `@deva[ओतो गार्ग्यस्य] — **Gārgya's View**: According to Gārgya, @deva[य्] (preceded by @deva[ओ]) is deleted before @[aś].

@deva[भोय् अत्र] → @deva[भो अत्र], @deva[भगोय् इदम्] → @deva[भगो इदम्].`,

  "83021": `@deva[उञि च पदे] — **Before Particle @deva[उ]**: The @deva[व्]/य्] is @b[always] deleted before the particle @deva[उ] (a complete word).

@deva[स उ एकविंशतिः] "that one and twenty."`,

  "83022": `@deva[हलि सर्वेषाम्] — **Before Consonants—Universal**: According to @b[all] teachers, @deva[य्] (after @deva[भो], @deva[भगो], @deva[अघो], or @deva[अ/आ]) is deleted before any consonant.

@deva[भो हसति] (not *@deva[भोय् हसति]).`,

  "83023": `@deva[मो ऽनुस्वारः] — **@deva[म्] → Anusvāra**: Word-final @deva[म्] becomes anusvāra (ं) before a consonant.

| Underlying | Surface |
|------------|---------|
| @deva[वनम् हसति] | @deva[वनं हसति] |
| @deva[कुण्डम् याति] | @deva[कुण्डं याति] |

Not within a word: @deva[गम्यते] (no change).`,

  "83024": `@deva[नश् चापदान्तस्य झलि] — **Non-final @deva[न्/म्] → Anusvāra**: @deva[न्] or @deva[म्] that is @b[not] word-final becomes anusvāra before @[jhal] (stops/sibilants).

| Stem | Before @[jhal] |
|------|----------------|
| @deva[पयस् + सि] | @deva[पयांसि] |
| @deva[धनु + षि] | @deva[धनूंषि] |`,

  "83025": `@deva[मो राजि समः क्वौ] — **@deva[सम्] before @deva[राज्]**: Before @deva[राज्] (with @[kvip] affix), the @deva[म्] of @deva[सम्] remains @deva[म्] (not anusvāra).

@deva[सम् + राज्] → @deva[सम्राट्] (not *@deva[संराट्]).`,

  "83026": `@deva[हे मपरे वा] — **Before @deva[ह्म्]**: @deva[म्] optionally remains unchanged (not anusvāra) before @deva[ह्] followed by @deva[म्].

| Option | Form |
|--------|------|
| Anusvāra | @deva[किं ह्मलयति] |
| No change | @deva[किम् ह्मलयति] |`,

  "83027": `@deva[नपरे नः] — **Before @deva[ह्न्]**: @deva[म्] optionally becomes @deva[न्] before @deva[ह्] followed by @deva[न्].

| Option | Form |
|--------|------|
| @deva[न्] | @deva[किन् ह्नुते] |
| Anusvāra | @deva[किं ह्नुते] |`,

  "83028": `@deva[ङ्णोः कुक्टुक् शरि] — **Augments before Sibilants**: Before a sibilant (@[śar]), final @deva[ङ्] optionally takes augment @deva[क्], and final @deva[ण्] takes @deva[ट्].

| Final | + Sibilant | Options |
|-------|-----------|---------|
| @deva[प्राङ्] + @deva[शेते] | @deva[प्राङ्क् शेते] or @deva[प्राङ् शेते] |
| @deva[वण्] + @deva[शेते] | @deva[वण्ट् शेते] or @deva[वण् शेते] |`,

  "83029": `@deva[डः सि धुट्] — **@deva[धुट्] after @deva[ड्]**: After a word ending in @deva[ड्], the following word beginning with @deva[स्] optionally receives augment @deva[ध्].

@deva[श्वलिट् + साये] → @deva[श्वलिट् त्साये] or @deva[श्वलिट् साये].`,

  "83030": `@deva[नश् च] — **@deva[धुट्] after @deva[न्]**: After a word ending in @deva[न्], a following @deva[स्]-initial word optionally takes @deva[ध्]-augment.

@deva[भवान् + साये] → @deva[भवान् त्साये] or @deva[भवान् साये].`,

  "83031": `@deva[शि तुक्] — **@deva[तुक्] before @deva[श्]**: After @deva[न्]-final words, augment @deva[त्] optionally precedes @deva[श्].

@deva[भवान् + शेते] → @deva[भवाञ् च्छेते] (with @deva[त्] → @deva[च्छ] change).`,

  "83032": `@deva[ङमो ह्रस्वादचि ङमुण् नित्यम्] — **Nasal Doubling**: After @deva[ङ्], @deva[ण्], or @deva[न्] preceded by a short vowel, the same nasal is @b[always] doubled at the start of a following vowel-initial word.

| Junction | Result |
|----------|--------|
| @deva[प्रत्यङ् + अत्र] | @deva[प्रत्यङ् ङत्र] |
| @deva[सुगण् + इह] | @deva[सुगण् णिह] |`,

  "83033": `@deva[मय उञो वो वा] — **@deva[उ] → @deva[व्]**: The particle @deva[उ], when preceded by a @[may] consonant and followed by a vowel, optionally becomes @deva[व्].

| Without | With @deva[व्] |
|---------|--------------|
| @deva[शम् उ अस्तु] | @deva[शम्वस्तु] |
| @deva[किम् उ अत्र] | @deva[किम्वत्र] |`,

  "83034": `@deva[विसर्जनीयस्य सः] — **Visarga → @deva[स्] before @[khar] + Sibilant**: When visarga precedes a voiceless consonant (@[khar]) that is itself followed by a sibilant, visarga becomes @deva[स्].

@deva[वृक्षः + छादयति] → @deva[वृक्षश्छादयति] (ः → श् before छ).`,

  "83035": `@deva[शर्परे विसर्जनीयः] — **Visarga Retained**: When visarga precedes a voiceless consonant that is followed by a sibilant (@[śar]), visarga remains unchanged.

@deva[पुरुषः क्षुरम्] — visarga stays because @deva[क्ष्] has sibilant after @deva[क्].`,

  "83036": `@deva[वा शरि] — **Optional before Sibilants**: Before a sibilant (@[śar]) directly, visarga optionally remains or assimilates.

| Option 1 | Option 2 |
|----------|----------|
| @deva[वृक्षः शेते] | @deva[वृक्षश्शेते] |
| @deva[वृक्षः साये] | @deva[वृक्षस्साये] |`,

  "83037": `@deva[कुप्वोः ⌀क⌀पौ च] — **Jihvāmūlīya/Upadhmānīya**: Before @deva[क्]/ख्] (gutturals) or @deva[प्]/फ्] (labials), visarga optionally becomes:

| Before | Special Form | Or |
|--------|--------------|-----|
| @deva[क्], @deva[ख्] | Jihvāmūlīya (ᳵ) | ः |
| @deva[प्], @deva[फ्] | Upadhmānīya (ᳶ) | ः |

@deva[वृक्षᳵकरोति] or @deva[वृक्षः करोति].`,

  "83038": `@deva[सो ऽपदादौ] — **Visarga → @deva[स्] before Affixes**: Before an affix (not a separate word) beginning with @deva[क्] or @deva[प्], visarga becomes @deva[स्].

Applies to affixes like @deva[-पाश], @deva[-कल्प], @deva[-काम्य]: @deva[पयस्पाशम्], @deva[यशस्काम्यति].`,

  "83039": `@deva[इणः षः] — **@deva[ष्] after @deva[इ/उ]**: When visarga follows @deva[इ] or @deva[उ] and precedes an affix with initial @deva[क्]/प्], it becomes @deva[ष्].

| Stem | + Affix | Result |
|------|---------|--------|
| @deva[सर्पिस्] | @deva[-पाश] | @deva[सर्पिष्पाशम्] |
| @deva[यजुस्] | @deva[-कल्प] | @deva[यजुष्कल्पम्] |`,

  "83040": `@deva[नमः पुरसोर् गत्योः] — **@deva[नमस्]/पुरस्] as @[gati]**: When @deva[नमस्] or @deva[पुरस्] function as @[gati] (preverb-like), their visarga becomes @deva[स्] before @deva[क्]/प्].

@deva[नमस्कर्ता], @deva[पुरस्कर्ता] (when verbal prefixes).`,

  "83041": `@deva[इदुदुपधस्य चाप्रत्ययस्य] — **@deva[ष्] for Non-Affix @deva[इ/उ]-Stems**: Stems like @deva[निर्], @deva[दुर्], @deva[बहिर्] with @deva[इ/उ] as penultimate change their final to @deva[ष्] before @deva[क्]/प्].

| Prefix | + Root | Result |
|--------|--------|--------|
| @deva[निर्] | @deva[कृ] | @deva[निष्कृतम्] |
| @deva[दुर्] | @deva[कृ] | @deva[दुष्कृतम्] |`,

  "83042": `@deva[तिरसो ऽन्यतरस्याम्] — **@deva[तिरस्] Optional**: For @deva[तिरस्] as @[gati], the visarga → @deva[स्] change is optional before @deva[क्]/प्].

| Option 1 | Option 2 |
|----------|----------|
| @deva[तिरस्करोति] | @deva[तिरः करोति] |`,

  "83043": `@deva[द्विस् त्रिश् चतुर् इति कृत्वो ऽर्थे] — **Numeral Adverbs**: For @deva[द्विस्], @deva[त्रिस्], @deva[चतुर्] meaning "times" (with @deva[-सुच्]), the visarga → @deva[ष्] change is optional before @deva[क्]/प्].

@deva[द्विष्करोति] or @deva[द्विः करोति] "does twice."`,

  "83044": `@deva[इसुसोः सामर्थ्ये] — **@deva[इस्/उस्]-Stems with Correlation**: For stems ending in @deva[-इस्] or @deva[-उस्], visarga → @deva[ष्] is optional before @deva[क्]/प्] when syntactically connected.

@deva[सर्पिष्करोति] or @deva[सर्पिः करोति] "makes ghee."`,

  "83045": `@deva[नित्यं समासे ऽनुत्तरपदस्थस्य] — **Obligatory in Compounds**: In compounds, the @deva[इस्/उस्]-stem's visarga @b[always] becomes @deva[ष्] before @deva[क्]/प्] (when not preceded by another member).

@deva[सर्पिष्कुण्डिका], @deva[धनुष्कपालम्] (compounds).`,

  "83046": `@deva[अतः कृकमिकंसकुम्भपात्रकुशाकर्णीष्वनव्ययस्य] — **@deva[अस्]-Stems in Compounds**: For non-indeclinable @deva[-अस्] stems, visarga → @deva[स्] in compounds before @deva[कृ], @deva[कम्], or the words @deva[कंस], @deva[कुम्भ], @deva[पात्र], @deva[कुशा], @deva[कर्णी].

@deva[अयस्कारः], @deva[पयस्पात्रम्].`,

  "83047": `@deva[अधः शिरसी पदे] — **@deva[अधस्]/शिरस्] + @deva[पद]**: In compounds with @deva[पद], @deva[अधस्] and @deva[शिरस्] take @deva[स्].

@deva[अधस्पदम्] "under foot", @deva[शिरस्पदम्] "head-place."`,

  "83048": `@deva[कस्कादिषु च] — **@deva[कस्क] Class**: In the @deva[कस्क]-class words, visarga becomes @deva[स्] (or @deva[ष्] after @deva[इ/उ]) before @deva[क्]/प्].

Examples: @deva[कस्कः], @deva[भ्रातुष्पुत्रः], @deva[शुनस्कर्णः].`,

  "83049": `@deva[छन्दसि वा ऽप्राम्रेडितयोः] — **Optional in Vedas**: In @[chandas], the visarga → @deva[स्] change is optional—except before @deva[प्र] or before reduplicated words.

@deva[अयः पात्रम्] or @deva[अयस्पात्रम्] in Vedic.`,

  "83050": `@deva[कः करत् करति कृधि कृतेष्वनदितेः] — **Vedic @deva[स्] before Specific Verb Forms**: In Vedas, visarga → @deva[स्] before @deva[कः] (aorist), @deva[करत्], @deva[करति], @deva[कृधि], @deva[कृतः]—but not after @deva[अदिति].

@deva[विश्वतस्कः] (not *@deva[अदितिस्कृत]).`,

  "83051": `@deva[पञ्चम्याः परावध्यर्थे] — **Ablative + @deva[परि]**: In Vedas, ablative visarga → @deva[स्] before @deva[परि] meaning "over/beyond."

@deva[दिवस्परि] "beyond heaven" (Ṛg. X.45.1).`,

  "83052": `@deva[पातौ च बहुलम्] — **Ablative + @deva[पातु]**: In Vedas, ablative visarga → @deva[स्] before @deva[पातु] "protect" variously.

@deva[दिवस्पातु], @deva[राज्ञस्पातु] — but sometimes @deva[परिषदः पातु] (no change).`,

  "83053": `@deva[षष्ठ्याः पतिपुत्रपृष्ठपारपदपयस्पोषेषु] — **Genitive + Specific Words**: In Vedas, genitive visarga → @deva[स्] before @deva[पति], @deva[पुत्र], @deva[पृष्ठ], @deva[पार], @deva[पद], @deva[पयस्], @deva[पोष].

@deva[वाचस्पतिम्] (Ṛg. X.81.7), @deva[दिवस्पुत्राय].`,

  "83054": `@deva[इडाया वा] — **@deva[इडा] + @deva[पद]**: For @deva[इडा], the genitive visarga → @deva[स्] before @deva[पद] is optional.

@deva[इडस्पदम्] or @deva[इडाः पदम्] "place of Iḍā."`,

  "83055": `@deva[इण्कोः] — **@deva[ष्] Substitution Adhikāra**: From here onward, @deva[ष्] replaces @deva[स्] after @[iṇ] (@deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ], @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ]) or @[ku] (गुत्तुरल्स्) in specified contexts.

This is the beginning of the @[ṣatva] section.`,

  "83056": `@deva[अध्यापयति] — **@deva[सित्] → @deva[षित्]**: The intensive/causative of @deva[अधि + इ] "study" takes @deva[ष्]: @deva[अध्यापयति] → form with @deva[ष्] in specified contexts.`,

  "83057": `@deva[इण्णः] — **@deva[ष्] after @[iṇ] before @deva[ण्]**: @deva[स्] becomes @deva[ष्] when preceded by @[iṇ] and followed by @deva[ण्] (retroflex nasal).

@deva[विष्णु], @deva[जिष्णु], @deva[भविष्णु].`,

  "83058": `@deva[नुम्विसर्जनीयशर्व्यवायेऽपि] — **@deva[ष्] Despite Interveners**: The @deva[ष्]-change occurs even when @[num], visarga, or @[śar] intervene between the trigger and @deva[स्].

@deva[वि + स्तृ + णु] → @deva[विष्टृणु] (despite @deva[ट्]).`,

  "83059": `@deva[आदेशप्रत्यययोः] — **In Substitutes/Affixes**: The @deva[स्] → @deva[ष्] applies when the @deva[स्] is part of a substitute (@[ādeśa]) or affix (@[pratyaya]).

@deva[अभिषेक] (ष् in substitute form).`,

  "83060": `@deva[शासिवसिघसीनां च] — **Three Roots**: For @deva[शास्] "rule", @deva[वस्] "dwell", and @deva[घस्] "eat", @deva[स्] → @deva[ष्] in appropriate environments.

@deva[अनुशिष्यते] (from @deva[शास्]), @deva[अधिवसति] contexts.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.3.1-60)`);
console.log(`Total entries: ${Object.keys(data).length}`);
