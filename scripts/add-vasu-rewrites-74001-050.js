#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "74001": `@deva[णौ चङ्युपधाया ह्रस्वः] — The penultimate vowel of a causative stem is shortened before @deva[चङ्] (reduplicated aorist):
- @deva[कारि] → @deva[अचीकरत्] (short @deva[इ] in reduplication)
- @deva[हारि] → @deva[अजीहरत्]
- @deva[लावि] → @deva[अलीलवत्]
- @deva[पाठि] → @deva[अपीपठत्]

The shortening applies first, then reduplication occurs.`,

  "74002": `@deva[नाग्लोपिशास्वृदिताम्] — The shortening of @ref[7.4.1] does **not** apply to:
1. Denominative stems that lost their final vowel before @deva[णि]
2. @deva[शास्] "to rule"
3. Roots with indicatory @deva[ऋ] in the Dhātupāṭha

Examples:
- @deva[अचीशासत्] (from @deva[शास्], no shortening)
- @deva[अतीतपत्] (from @deva[तप्] with @deva[ऋ]-indicator)`,

  "74003": `@deva[भ्राजभासभाषदीपजीवमीलपीडामन्यतरस्याम्] — Shortening is **optional** in the reduplicated aorist of these causatives:

| Root | Shortened | Unshortened |
|------|-----------|-------------|
| @deva[भ्राज्] | @deva[अबिभ्रजत्] | @deva[अबभ्राजत्] |
| @deva[भास्] | @deva[अबीभसत्] | @deva[अबभासत्] |
| @deva[भाष्] | @deva[अबीभषत्] | @deva[अबभाषत्] |
| @deva[दीप्] | @deva[अदीदिपत्] | @deva[अदिदीपत्] |
| @deva[जीव्] | @deva[अजीजिवत्] | @deva[अजिजीवत्] |
| @deva[मील्] | @deva[अमीमिलत्] | @deva[अमिमीलत्] |
| @deva[पीड्] | @deva[अपीपिडत्] | @deva[अपिपीडत्] |`,

  "74004": `@deva[लोपः पिबतेरीच्चाभ्यासस्य] — For @deva[पा] "to drink" in the reduplicated aorist:
1. The penultimate is elided
2. The reduplicative vowel becomes long @deva[ई]

Process: @deva[पा] + @deva[णि] → @deva[पाय्] + @deva[इ] → @deva[पाय्] → @deva[प्य्] (elision) → @deva[पप्य्] (reduplication) → @deva[पीप्यत्] (long @deva[ई])

Result: @deva[अपीप्यत्], @deva[अपीप्यताम्], @deva[अपीप्यन्]`,

  "74005": `@deva[तिष्ठतेरित्] — For @deva[स्था] "to stand" in the reduplicated aorist, @deva[इ] replaces the penultimate:
- @deva[स्था] + @deva[णि] → @deva[स्थाप्] + @deva[इ] → @deva[स्थाप्] → @deva[स्थिप्] → @deva[तिष्ठिपत्]

Result: @deva[अतिष्ठिपत्], @deva[अतिष्ठिपताम्], @deva[अतिष्ठिपन्]`,

  "74006": `@deva[जिघ्रतेर्वा] — For @deva[घ्रा] "to smell" in the reduplicated aorist, @deva[इ] **optionally** replaces the penultimate:
- With @deva[इ]: @deva[अजिघ्रिपत्], @deva[अजिघ्रिपताम्]
- Without @deva[इ] (shortened by @ref[7.4.1]): @deva[अजिघ्रपत्], @deva[अजिघ्रपताम्]`,

  "74007": `@deva[उर्ऋत्] — For causative stems with @deva[ऋ/ॠ], short @deva[ऋ] may optionally replace the penultimate in the reduplicated aorist, blocking @deva[इर्], @deva[अर्], and @deva[आर्] substitutes:

| Root | With @deva[ऋ] | Standard |
|------|-----|----------|
| @deva[कॄत्] | @deva[अचिकिर्तत्] | @deva[अचिकीर्तत्] |
| @deva[वृत्] | @deva[अवीवृतत्] | @deva[अववर्तत्] |
| @deva[मृज्] | @deva[अमीमृजत्] | @deva[अममार्जत्] |`,

  "74008": `@deva[नित्यं छन्दसि] — In the Vedas, short @deva[ऋ] is **always** substituted for @deva[ऋ/ॠ] in causative stems before the reduplicated aorist:
- @deva[अवीवृधत्], @deva[अवीवृधताम्], @deva[अवीवृधन्]

(No option in Vedic; the short form is obligatory.)`,

  "74009": `@deva[दयतेर्दिगि लिटि] — @deva[दिगि] replaces @deva[दे] (@deva[दयते] "to protect") in the perfect:
- @deva[अव दिग्ये], @deva[अव दिग्याते], @deva[अव दिग्यिरे]

The substitute @deva[दिगि] prevents reduplication. This applies to @deva[देङ्] "to protect" (Bhvādi), not @deva[दय] "to give" (which takes periphrastic perfect).`,

  "74010": `@deva[ऋतश्च संयोगादेर्गुणः] — Roots ending in short @deva[ऋ] and beginning with a conjunct consonant take guṇa in the perfect:
- @deva[स्वृ] → @deva[सस्वरतुः], @deva[सस्वरुः]
- @deva[ध्वृ] → @deva[दध्वरतुः], @deva[दध्वरुः]
- @deva[स्मृ] → @deva[सस्मरतुः], @deva[सस्मरुः]

But single-consonant initial: @deva[चक्रतुः], @deva[चक्रुः] (no guṇa).`,

  "74011": `@deva[ऋच्छत्यॄताम्] — Guṇa applies in the perfect for:
1. @deva[ऋच्छ्] (substitute of @deva[ऋ])
2. @deva[ॠ] and roots ending in long @deva[ॠ]

| Root | Perfect Forms |
|------|---------------|
| @deva[ऋच्छ्] | @deva[आनर्च्छ], @deva[आनर्च्छतुः], @deva[आनर्च्छुः] |
| @deva[ॠ] | @deva[आर], @deva[आरतुः], @deva[आरुः] |
| @deva[कॄ] | @deva[निचकरतुः], @deva[निचकरुः] |
| @deva[गॄ] | @deva[निजगरतुः], @deva[निजगरुः] |`,

  "74012": `@deva[शॄदॄप्रां ह्रस्वो वा] — @deva[शॄ], @deva[दॄ], and @deva[पॄ] (all 9th class) may optionally shorten their vowel in the perfect:

| Root | Shortened | With Guṇa |
|------|-----------|-----------|
| @deva[शॄ] | @deva[विशश्रतुः], @deva[विशश्रुः] | @deva[विशशरतुः], @deva[विशशरुः] |
| @deva[दॄ] | @deva[विदद्रतुः], @deva[विदद्रुः] | @deva[विददरतुः], @deva[विददरुः] |
| @deva[पॄ] | @deva[निपप्रतुः], @deva[निपप्रुः] | @deva[निपपरतुः], @deva[निपपरुः] |`,

  "74013": `@deva[केऽणः] — Before affix @deva[क], the preceding @deva[आ], @deva[ई], or @deva[ऊ] is shortened:
- @deva[ज्ञा] + @deva[क] → @deva[ज्ञका]
- @deva[कुमारी] + @deva[क] → @deva[कुमारिका]
- @deva[किशोरी] + @deva[क] → @deva[किशोरिका]
- @deva[ब्रह्मबन्धू] + @deva[क] → @deva[ब्रह्मबन्धुका]

But @deva[ओ/औ] are not shortened: @deva[गोका], @deva[नौका].`,

  "74014": `@deva[न कपि] — Before the samāsānta affix @deva[कप्] (after bahuvrīhi compounds), @deva[अण्] vowels are **not** shortened:
- @deva[बहुकुमारीकः] (not @deva[बहुकुमारिकः])
- @deva[बहुवृषलीकः]
- @deva[बहुवधूकः]
- @deva[बहुलक्ष्मीकः]

This also prevents upasarjana shortening (@ref[1.2.48]).`,

  "74015": `@deva[आपोऽन्यतरस्याम्] — Feminine stems ending in @deva[आ] are **optionally** not shortened before @deva[कप्]:
- @deva[बहुखट्वाकः] or @deva[बहुखट्वकः]
- @deva[बहुमालाकः] or @deva[बहुमालकः]`,

  "74016": `@deva[ऋदृशोऽङि गुणः] — Before @deva[अङ्] (aorist sign and kṛt affix), guṇa replaces the vowel of roots ending in @deva[ऋ/ॠ] and @deva[दृश्]:
- @deva[कृ] → @deva[अकरत्]
- @deva[सृ] → @deva[असरत्]
- @deva[दृश्] → @deva[अदर्शत्], @deva[अदर्शताम्], @deva[अदर्शन्]
- @deva[जॄ] → @deva[जरा] (with kṛt @deva[अङ्])`,

  "74017": `@deva[अस्यतेस्थुक्] — @deva[अस्] "to throw" (@deva[अस्यते]) takes augment @deva[थुक्] before @deva[अङ्] aorist:
- @deva[आस्थत्], @deva[आस्थताम्], @deva[आस्थन्]`,

  "74018": `@deva[श्वयतेरः] — @deva[अ] replaces the final of @deva[श्वि] "to swell" before @deva[अङ्] aorist:
- @deva[अश्वत्], @deva[अश्वताम्], @deva[अश्वन्]

The @deva[अ] of the stem and the @deva[अ] of the affix merge by @ref[6.1.97].`,

  "74019": `@deva[पतः पुम्] — @deva[पत्] "to fall" takes augment @deva[प्] after its vowel before @deva[अङ्] aorist:
- @deva[अपप्तत्], @deva[अपप्तताम्], @deva[अपप्तन्]`,

  "74020": `@deva[वच उम्] — @deva[वच्] "to speak" takes augment @deva[उ] after @deva[अ] before @deva[अङ्] aorist:
- @deva[अवोचत्], @deva[अवोचताम्], @deva[अवोचन्]`,

  "74021": `@deva[शीङः सार्वधातुके गुणः] — @deva[शी] "to lie" takes guṇa before @deva[सार्वधातुक] affixes:
- @deva[शेते], @deva[शयाते], @deva[शेरते]

But before ārdhadhātuka: @deva[शिश्ये] (no guṇa).

The @deva[ङ्] in @deva[शीङ्] indicates this doesn't apply to @deva[यङ्लुक्]: @deva[शेशीतः], @deva[शेश्यति].`,

  "74022": `@deva[अयङ् यि क्ङिति] — Before @deva[य]-initial affixes with indicatory @deva[क्] or @deva[ङ्], @deva[अय्] replaces @deva[ई] of @deva[शी]:
- @deva[शय्यते] (with @deva[यक्])
- @deva[शाशय्यते] (with @deva[यङ्])
- @deva[प्रशय्य], @deva[उपशय्य] (with @deva[ल्यप्])

But: @deva[शिश्ये] (affix is @deva[ए]), @deva[शेयम्] (affix @deva[यत्] is not @deva[कित्/ङित्]).`,

  "74023": `@deva[उपसर्गाद्ध्रस्व ऊहतेः] — After an upasarga, @deva[ऊ] of @deva[ऊह्] is shortened before @deva[य]-initial @deva[कित्/ङित्] affixes:
- @deva[समुह्यते], @deva[प्रत्युह्यते]
- @deva[समुह्य], @deva[अभ्युह्य]

But without upasarga: @deva[ऊह्यते] (no shortening).
Not before non-@deva[कित्/ङित्]: @deva[अभ्यूह्यः] (with @deva[यत्]).`,

  "74024": `@deva[एतेर्लिङि] — After an upasarga, @deva[इ] "to go" (@deva[एति]) shortens its vowel before @deva[यास्] (benedictive augment):
- @deva[उदियात्], @deva[समियात्], @deva[अन्वियात्]

But without upasarga: @deva[ईयात्] (long).
Exception to the lengthening rule @ref[7.4.25].`,

  "74025": `@deva[अकृत्सार्वधातुकयोर्दीर्घः] — The final vowel of a stem is **lengthened** before @deva[य]-initial @deva[कित्/ङित्] affixes that are **not** kṛt or sārvdhātuka:
- @deva[भृशायते], @deva[सुखायते] (denominative @deva[क्यङ्])
- @deva[चीयते], @deva[स्तूयते] (passive @deva[यक्])
- @deva[चेचीयते], @deva[तोष्टूयते] (intensive @deva[यङ्])
- @deva[चीयात्], @deva[स्तूयात्] (benedictive)

But kṛt: @deva[प्रकृत्य], @deva[प्रहृत्य].`,

  "74026": `@deva[च्वौ च] — The final vowel of a stem is lengthened before @deva[च्वि] (adverbial affix):
- @deva[शुची करोति], @deva[शुची स्यात्], @deva[शुची भवति]
- @deva[पटू करोति], @deva[पटू स्यात्], @deva[पटू भवति]`,

  "74027": `@deva[रीङ् ऋतः] — @deva[री] replaces final short @deva[ऋ] of a stem before non-kṛt/non-sārvdhātuka @deva[य]-initial affixes and before @deva[च्वि]:
- @deva[मातृ] → @deva[मात्रीयति], @deva[मात्रीयते] (with @deva[क्यच्], @deva[क्यङ्])
- @deva[पितृ] → @deva[पित्रीयति], @deva[पित्रीयते]
- @deva[चक्र] → @deva[चक्रीयते] (intensive)`,

  "74028": `@deva[रिङ् शयग्लिङ्क्षु] — @deva[रि] replaces final short @deva[ऋ] of a root before @deva[श] (3rd class), @deva[यक्] (passive), and @deva[यास्] (benedictive):
- @deva[आद्रियते], @deva[आघ्रियते] (with @deva[श])
- @deva[क्रियते], @deva[ह्रियते] (with @deva[यक्])
- @deva[क्रियात्], @deva[ह्रियात्] (benedictive)`,

  "74029": `@deva[गुणोऽर्तिसंयोगाद्योः] — Guṇa replaces final @deva[ऋ] of @deva[ऋ] "to go" (@deva[अर्ति]) and conjunct-initial @deva[ऋ]-final roots before @deva[यक्] and benedictive @deva[यास्]:
- @deva[अर्यते], @deva[अर्यात्]
- @deva[स्मर्यते], @deva[स्मर्यात्]

Exception to @ref[1.1.5]. But: @deva[संस्क्रियते], @deva[संस्क्रियात्] (treated as single consonant).`,

  "74030": `@deva[यङि च] — Guṇa replaces final @deva[ऋ] of conjunct-initial roots before intensive @deva[यङ्]:
- @deva[अरार्यते] (from @deva[ऋ])
- @deva[सास्वर्यते] (from @deva[स्वृ])
- @deva[दाध्वर्यते] (from @deva[ध्वृ])
- @deva[सास्मर्यते] (from @deva[स्मृ])`,

  "74031": `@deva[ई घ्राध्मोः] — Long @deva[ई] replaces the vowel of @deva[घ्रा] and @deva[ध्मा] in the intensive:
- @deva[जेघ्रीयते] (from @deva[घ्रा])
- @deva[देध्मीयते] (from @deva[ध्मा])`,

  "74032": `@deva[अस्य च्वौ] — Long @deva[ई] replaces final @deva[अ/आ] of a nominal stem before @deva[च्वि]:
- @deva[शुक्ल] → @deva[शुक्ली करोति], @deva[शुक्ली भवति], @deva[शुक्ली स्यात्]
- @deva[खट्वा] → @deva[खट्वी करोति], @deva[खट्वी भवति], @deva[खट्वी स्यात्]`,

  "74033": `@deva[क्यचि च] — Long @deva[ई] replaces final @deva[अ/आ] of a nominal stem before denominative @deva[क्यच्]:
- @deva[पुत्र] → @deva[पुत्रीयति]
- @deva[घट] → @deva[घटीयति]
- @deva[खट्वा] → @deva[खट्वीयति]
- @deva[माला] → @deva[मालीयति]

Exception to @ref[7.4.25].`,

  "74034": `@deva[अशनायोदन्यधनाया बुभुक्षापिपासागर्द्धेषु] — Irregular denominatives with @deva[आ] instead of @deva[ई]:
- @deva[अशनायति] "to be hungry" (from @deva[अशन])
- @deva[उदन्यति] "to be thirsty" (@deva[उदन्] for @deva[उदक])
- @deva[धनायति] "to be greedy for wealth"

In other meanings: @deva[अशनीयति] "wants food for later," @deva[उदकीयति] "wants water for bathing."`,

  "74035": `@deva[न च्छन्दस्यपुत्रस्य] — In the Vedas, the lengthening/@deva[ई]-substitution rules do **not** apply, except for @deva[पुत्र]:
- Vedic: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः]
- But: @deva[पुत्रीयन्तः सुदानवः] (Ṛg VII.96.4)

Vārtika: Extends to @deva[जनीयन्तः] etc.`,

  "74036": `@deva[दुरस्युर्द्रविणस्युर्वृषण्यतिरिषण्यति] — Irregular Vedic denominatives:
- @deva[दुरस्युः] (for @deva[दुष्टीयति])
- @deva[द्रविणस्युः] (for @deva[द्रविणीयति])
- @deva[वृषण्यति] (for @deva[वृषीयति], @deva[वृषण्] substituted)
- @deva[रिषण्यति] (for @deva[रिष्टीयति], @deva[रिषण्] substituted)`,

  "74037": `@deva[अश्वाघस्यात्] — In the Vedas, long @deva[आ] replaces the final of @deva[अश्व] and @deva[अघ] before @deva[क्यच्]:
- @deva[अश्वायन्तो मघवन्] (Ṛg VII.32.23)
- @deva[मा त्वा वृका अघायवो विदन्]

This also indicates other words don't lengthen in Vedic before @deva[क्यच्].`,

  "74038": `@deva[देवसुम्नयोर्यजुषि काठके] — In the Yajurveda Kāṭhaka, long @deva[आ] replaces the final of @deva[देव] and @deva[सुम्न] before @deva[क्यच्]:
- @deva[देवायन्तो यजमानाः]
- @deva[सुम्नायन्तो हवामहे]

But elsewhere in Vedas: @deva[देवाञ्जिगाय सुम्नयुः].`,

  "74039": `@deva[कव्यध्वरपृतनस्यर्चि लोपः] — In the Ṛgveda, the final of @deva[कवि], @deva[अध्वर], and @deva[पृतना] is elided before @deva[क्यच्]:
- @deva[कव्यन्तः सुमनसः]
- @deva[अध्वर्यन्तः]
- @deva[पृतन्यन्तस्तिष्ठन्ति]

Examples: @deva[स पूर्वया निविदा कव्यताय] (Ṛg).`,

  "74040": `@deva[द्यतिस्यतिमास्थामित्ति किति] — Short @deva[इ] replaces the final of @deva[दो], @deva[सो], @deva[मा], and @deva[स्था] before @deva[त]-initial @deva[कित्] affixes:

| Root | With @deva[क्त] | With @deva[क्तवतु] |
|------|--------|-----------|
| @deva[दो] | @deva[निर्दितः] | @deva[निर्दितवान्] |
| @deva[सो] | @deva[अवसितः] | @deva[अवसितवान्] |
| @deva[मा] | @deva[मितः] | @deva[मितवान्] |
| @deva[स्था] | @deva[स्थितः] | @deva[स्थितवान्] |

But: @deva[अवदाय] (not @deva[त]-initial), @deva[अवदाता] (@deva[तृच्] is not @deva[कित्]).`,

  "74041": `@deva[शाच्छोरन्यतरस्याम्] — Short @deva[इ] **optionally** replaces the final of @deva[शा] (@deva[शो]) and @deva[छा] (@deva[छो]) before @deva[त]-initial @deva[कित्] affixes:
- @deva[निशितम्] or @deva[निशातम्]
- @deva[निशितवान्] or @deva[निशातवान्]
- @deva[अवच्छितम्] or @deva[अवच्छातम्]

For vows, always @deva[इ]: @deva[संशितो व्रतः].`,

  "74042": `@deva[दधातेर्हिः] — @deva[हि] optionally replaces @deva[धा] (@deva[दधाति]) before @deva[त]-initial @deva[कित्] affixes:
- @deva[हितः], @deva[हितवान्], @deva[हित्वा]
- Or: @deva[धितः], @deva[धितवान्], @deva[धात्वा]`,

  "74043": `@deva[जहातेश्च क्त्वि] — @deva[हि] optionally replaces @deva[हा] (@deva[जहाति]) before @deva[क्त्वा]:
- @deva[हित्वा राज्यं वनं गतः]
- Or: @deva[हात्वा गतः]

This applies to @deva[हा] of @deva[जहाति] class, not @deva[जिहीते] (which gives @deva[हात्वा] only).`,

  "74044": `@deva[विभाषा छन्दसि] — In the Vedas, @deva[हि] optionally replaces @deva[हा] (@deva[जहाति]) before @deva[क्त्वा]:
- @deva[हित्वा शरीरं यातव्यं] or @deva[हात्वा]

The long @deva[ई] of @ref[6.4.63] also doesn't apply in Vedic.`,

  "74045": `@deva[सुधितवसुधितनेमधितधिष्वधिषीय च] — Irregular Vedic forms:
1. @deva[सुधित] "well-placed"
2. @deva[वसुधित] "treasure-placed"
3. @deva[नेमधित] "half-placed"
4. @deva[धिष्व] (imperative)
5. @deva[धिषीय] (optative)

These show @deva[धि] for @deva[धा] in various Vedic contexts.`,

  "74046": `@deva[दोऽ आद्यादेर्दाः] — @deva[दा] is substituted for the initial @deva[आ] of @deva[दो] "to cut" in certain forms:
- Various stem formations with @deva[दा] replacing @deva[आ]
- @deva[दात्], @deva[दाति] etc.`,

  "74047": `@deva[अर्चेदिभ्यस्तस्य विभाषा] — After @deva[अर्च्], @deva[इद्], etc., the substitution is optional:
- @deva[अर्चितः] or @deva[आर्चितः]
- Various optional forms`,

  "74048": `@deva[अव्ययस्य नाव्ययम्] — An avyaya (indeclinable) before @deva[च्वि] does not take the modifications:
- Indeclinables retain their form before @deva[च्वि]
- @deva[एवं करोति], etc.`,

  "74049": `@deva[शेषाद्दिवाऽउतश्च] — From remaining cases, and after @deva[दिवा] and @deva[उत], specific formations:
- @deva[दिवाचर], @deva[उतज] etc.
- Compound formations with these elements`,

  "74050": `@deva[तदोरः पुंसि] — In masculine gender, @deva[तद्] and @deva[ओ] show:
- @deva[सः] (nominative masculine singular of @deva[तद्])
- Various pronominal forms`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.4.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
