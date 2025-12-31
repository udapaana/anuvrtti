import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '61201': `@deva[क्षये गृहे] — @deva[क्षय] has acute on both the first and last syllables when meaning "house."

@deva[क्षये जागृहि प्रपश्यन्] — "Keep awake watching in the house"

The word is formed by @deva[घ] @ref[3.1.118] and would normally have affix-accent @ref[3.1.3].

**Other meanings:**
@deva[क्षयो वर्त्तते दस्यूनाम्] "Destruction prevails among the robbers" — formed by @deva[अच्] @ref[3.2.31], end-acute only.`,

  '61202': `@deva[येन जयति तज्जयः] — @deva[जय] has first-syllable acute when meaning "that by which one attains victory."

**Examples:**
| Meaning | Form | Notes |
|---------|------|-------|
| Means of victory | @deva[जयोऽश्वः] | "A victorious horse" — @deva[प] affix @ref[3.1.118] |
| The abstract noun | @deva[जयो वर्त्तते ब्राह्मणानाम्] | "Victory belongs to brāhmaṇas" — @deva[अच्] @ref[3.2.31], end-acute |`,

  '61203': `@deva[वृषादयो नित्यम्] — Words in the @deva[वृषादि] class have acute on the first syllable invariably.

**The List:**
| Word | Formation |
|------|-----------|
| @deva[वृषः], @deva[जनः], @deva[ज्वरः], @deva[ग्रहः], @deva[हयः], @deva[गयः], @deva[नयः] | @deva[अच्] @ref[3.1.134] |
| @deva[तायः], @deva[तयः], @deva[चयः], @deva[श्रमः], @deva[वेदः] | @deva[अच्] |
| @deva[सूदः], @deva[वदः] | @deva[क] @ref[3.1.135] |
| @deva[अंशः], @deva[गुहा] | @deva[अङ्] @ref[3.3.104] |
| @deva[शमः], @deva[रणः] | When meaning names, agreed upon for @deva[भाव] and @deva[कर्मन्] |
| @deva[मन्त्रः] | @deva[अच्] @ref[3.1.134] |
| @deva[शान्तिः] | @deva[क्तिच्] |
| @deva[कामः], @deva[यामः] | @deva[घञ्] |
| @deva[आरा], @deva[धारा], @deva[कारा] | @deva[अङ्] @ref[3.3.104] |
| @deva[वहः] | @deva[घञ्] (in @deva[गोचर] etc.) |
| @deva[कल्पः], @deva[पादः] | @deva[घञ्] |
| @deva[पयः], @deva[दवः] | |

@note[This is an @deva[आकृतिगण]. Any first-syllable-accented word not explained by other rules belongs here.]`,

  '61204': `@deva[उपमानादाचारे] — When used as a name, an @deva[उपमान] (standard of comparison) has first-syllable acute.

**Examples:**
@deva[चञ्चा], @deva[वघ्रिका], @deva[खरकुटी], @deva[दासी]

These are @deva[उपमान] words used as names. The affix @deva[कन्] @ref[5.3.96] is elided by @ref[5.3.98].

**Why this rule is needed:**
Although @deva[कन्] elision should leave its accent effect behind by @ref[1.1.62], the formulation of this sūtra shows that @deva[प्रत्ययलक्षण] doesn't universally apply in accent rules.

**Restrictions:**
- Not a name: @deva[अग्निर्माणवकः]
- Not @deva[उपमान]: @deva[देवदत्तः] — end-acute by @ref[6.2.148]`,

  '61205': `@deva[द्व्यचोऽतस्तिङः] — A disyllabic @deva[निष्ठा] participle (in @deva[त]) when used as a name has first-syllable acute, unless the first syllable has @deva[आ].

**Examples with first-syllable accent:**
@deva[गुप्तः], @deva[बुद्धः], @deva[दत्तः]

**Exceptions — not participles:**
@deva[देवः], @deva[भीमः] (end-acute)

**Exceptions — polysyllabic:**
@deva[चिन्तितः], @deva[रक्षितः] (end-acute)

**Exceptions — @deva[आ] in first syllable:**
@deva[त्रातः], @deva[आप्तः] (end-acute)

**Exceptions — not a name:**
@deva[कृतम्], @deva[हृतम्] (regular accent)`,

  '61206': `@deva[शुष्कधृष्टौ] — @deva[शुष्क] and @deva[धृष्ट] also have first-syllable acute.

@deva[शुष्कः], @deva[धृष्टः]

These are not names (unlike the previous rule), yet take first-syllable accent.`,

  '61207': `@deva[आशितं भुक्ते] — @deva[आशित] "having eaten" has first-syllable acute when used as an active participle.

**Active (first-syllable accent):**
@deva[आशितो देवदत्तः] — "Devadatta, having eaten"

**Passive (end-acute by @ref[6.2.144]):**
@deva[आशितं देवदत्तेन] — "eaten by Devadatta" (@deva[भावे क्त])
@deva[आशितमन्नम्] — "the eaten food" (@deva[कर्मणि क्त])

The word is formed by adding @deva[क्त] to @deva[अश्] "to eat" with prefix @deva[आ].`,

  '61208': `@deva[रिक्तस्य वा] — @deva[रिक्त] may optionally have first-syllable acute.

@deva[रिक्तः] or @deva[रिक्तः]

This overrides both @ref[6.1.204] and @ref[6.1.205].`,

  '61209': `@deva[जुष्टार्पितयोश्छन्दसि] — In the Vedas, @deva[जुष्ट] and @deva[अर्पित] optionally have first-syllable acute.

| Option 1 | Option 2 |
|----------|----------|
| @deva[जुष्टः] | @deva[जुष्टः] |
| @deva[अर्पितः] | @deva[अर्पितः] |

In secular literature: always end-acute by @ref[3.1.3].`,

  '61210': `@deva[मन्त्रे जुष्टस्य] — In Mantras, @deva[जुष्ट] always has first-syllable acute.

@deva[जुष्ट देवानाम् अर्पितं पितॄणाम्]

**Note on @deva[अर्पित]:**
Some say this rule applies only to @deva[जुष्ट]. In that view, @deva[अर्पित] remains optional even in Mantras: @deva[तस्मिन्साकं त्रिशता न शंकवोर्पिता] (end-acute).`,

  '61211': `@deva[युष्मदस्मदोः षष्ठ्येकवचने] — @deva[युष्मद्] and @deva[अस्मद्] have first-syllable acute in the Genitive Singular.

@deva[मम स्वम्], @deva[तव स्वम्]

This applies to the @deva[मम]/तव] forms, not the enclitic @deva[मे]/ते].

**Derivation:**
@deva[युष्मद्] + @deva[ङस्] → @deva[तव] — by @ref[8.2.5], @deva[व] would be udātta. This rule makes @deva[त] udātta instead.`,

  '61212': `@deva[चतुर्थ्येकवचने च] — @deva[युष्मद्] and @deva[अस्मद्] have first-syllable acute in the Dative Singular.

@deva[तुभ्यम्], @deva[मह्यम्]

The enclitic forms @deva[ते], @deva[मे] are not governed by this rule.

@note[These are stated as separate sūtras to prevent @deva[यथासंख्य] @ref[1.3.10]: a single sūtra @deva[युष्मदस्मदोर्ङिङणोः] would incorrectly assign @deva[युष्मद्] to dative and @deva[अस्मद्] to genitive only.]`,

  '61213': `@deva[द्व्यचोऽथः] — A disyllabic word formed by @deva[यत्] has first-syllable acute, except @deva[नाव्य] from @deva[नौ].

**Examples:**
| Form | Reference |
|------|-----------|
| @deva[चेयम्], @deva[जेयम्] | @ref[3.1.97] |
| @deva[कण्ठ्यम्], @deva[ओष्ठ्यम्] | @ref[5.1.6] |

This overrides the @deva[स्वरित] accent of @deva[तित्] @ref[6.1.185].

**Exception:**
@deva[नाव्यम्] — retains @deva[स्वरित]

**More than two syllables:**
@deva[चिकीर्ष्यम्], @deva[ललाट्यम्] — @deva[स्वरित] by @ref[6.1.185]`,

  '61214': `@deva[ईड्वन्द्यृवृशंसदुहां ण्यति] — @deva[ईड्], @deva[वन्द], @deva[वृ], @deva[शंस्], and @deva[दुह्] have first-syllable acute before @deva[ण्यत्].

**Examples:**
@deva[ईड्यम्], @deva[वन्द्यम्], @deva[वार्यम्], @deva[शस्यम्], @deva[दोह्या धेनुः]

@deva[ण्यत्] has both @deva[ण्] and @deva[त्] as indicatory. The @deva[त्] would give @deva[स्वरित] accent, but this rule overrides it.

@note[@deva[वृ] here is @deva[वृङ्] of the Kryādi class "to choose." The Svādi @deva[वृञ्] takes @deva[क्यप्] by @ref[3.1.109].]`,

  '61215': `@deva[वेण्विन्धानयोर्वा] — @deva[वेणु] and @deva[इन्धान] optionally have first-syllable acute.

| Option 1 | Option 2 |
|----------|----------|
| @deva[वेणुः] | @deva[वेणुः] |
| @deva[इन्धानः] | @deva[इन्धानः] (or @deva[इन्धानः]) |

@deva[वेणु] is derived by Uṇādi @deva[णु] (III.38), which as @deva[नित्] would always have first-syllable accent — this rule allows an option.

@deva[इन्धान] may be formed by @deva[चानश्] (final accent) or @deva[शानच्] (middle accent after ekādeśa @ref[6.1.161]). This rule adds the first-syllable option.

**When @deva[वेणु] is @deva[उपमान]:**
@deva[वेणुरिव वेणुः] — invariably first-syllable accent by @ref[6.1.204].`,

  '61216': `@deva[त्यागरागहासकुहश्वठक्रथानाम्] — @deva[त्याग], @deva[राग], @deva[हास], @deva[कुह], @deva[श्वठ], and @deva[क्रथ] optionally have first-syllable acute.

| Option 1 | Option 2 |
|----------|----------|
| @deva[त्यागः] | @deva[त्यागः] |
| @deva[रागः] | @deva[रागः] |
| @deva[हासः] | @deva[हासः] |
| @deva[कुहः] | @deva[कुहः] |
| @deva[श्वठः] | @deva[श्वठः] |
| @deva[क्रथः] | @deva[क्रथः] |

The first three are formed by @deva[घञ्] and would take end-acute by @ref[6.1.159]; the last three by @deva[अच्] @ref[3.1.134].`,

  '61217': `@deva[रित्यादौ] — What is formed by an affix with indicatory @deva[र्] has acute on the penultimate syllable (in words of three or more syllables).

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[करणीयम्], @deva[हरणीयम्] | @deva[अनीयर्] | @ref[3.1.96] |
| @deva[पटुजातीयः], @deva[मृदुजातीयः] | @deva[जातीयर्] | @ref[5.3.19] |

This overrides @ref[3.1.3].

@note["Penultimate" implies at least three syllables; disyllabic words cannot have a penultimate.]`,

  '61218': `@deva[चाङ उपधायाः] — In the reduplicated (@deva[चङ्]) Aorist, the penultimate syllable is optionally acute (in words of three or more syllables).

**Examples:**
@deva[मा हि चीकरताम्] or @deva[मा हि चीकरताम्]

The augment @deva[अट्] is elided with @deva[मा] @ref[6.4.74]; @deva[हि] prevents the verb from becoming @deva[अनुदात्त] @ref[8.1.34].

**With @deva[अट्] augment:**
Always first-syllable acute by @ref[6.4.71].

**Less than three syllables:**
@deva[मा हि दधत्] — no option (rule doesn't apply).`,

  '61219': `@deva[मतौ संज्ञायां स्त्रियाम्] — The @deva[आ] before @deva[मत्] is acute when the word is a feminine name.

**Examples:**
@deva[अदुम्बरावती], @deva[पुष्करावती], @deva[शरावती] @ref[4.2.85], @deva[वीरणावती]

The @deva[आ]-lengthening occurs by @ref[6.3.120].

**Restrictions:**
- "The @deva[आ]" — @deva[इक्षुमती], @deva[द्रुमवती] (end-acute @deva[इक्षु], @deva[द्रुम]; accent on @deva[मतुप्] by @ref[6.1.176])
- "Name" — @deva[खट्वावती] (@deva[खट्वा] formed by @deva[क्वन्], first-syllable accent)
- "Feminine" — @deva[शरावान्]
- "Before @deva[मत्]" — @deva[गवादिनी]`,

  '61220': `@deva[अवत्यन्तायाः] — Names ending in @deva[अवती] have acute on the final syllable.

**Examples:**
@deva[अजिरवती], @deva[खदिरवती], @deva[हंसवती], @deva[कारण्डवती]

These are formed with @deva[ङीप्], which would normally be unaccented @ref[3.1.4].

@note[The sūtra uses @deva[अवती] not @deva[वती] to exclude @deva[राजवती] (from @deva[राजन्वती] with @deva[न्]-elision, which is @deva[असिद्ध] @ref[8.2.2]). However, the @deva[म्] → @deva[व्] change (@deva[मत्] → @deva[वत्]) IS considered @deva[असिद्ध] for this rule.]`,

  '61221': `@deva[ईवत्यन्तायाश्च] — Names ending in @deva[ईवती] also have acute on the final.

@deva[अहीवती], @deva[कृषीवती], @deva[मुनीवती]`,

  '61222': `@deva[अञ्चेरचि श्लौ] — In compounds ending in @deva[अञ्च्], the final vowel of the preceding word is acute in weak cases where only @deva[च्] remains.

**Examples:**
| Weak case | Form |
|-----------|------|
| Accusative sg. | @deva[दधीचः पश्य] |
| Instrumental | @deva[दधीचा] |
| Dative | @deva[दधीचे] |
| | @deva[मधूचः], @deva[मधूचा], @deva[मधूचे] |

This overrides @ref[6.1.161], @ref[6.1.170], and @ref[6.2.52].

**Vārtika:**
Does not apply before a Taddhita affix: @deva[दाधीचः], @deva[माधूचः] — accent by affix @ref[3.1.3].`,

  '61223': `@deva[समासस्य] — A compound word has acute on the final syllable.

**Examples:**
@deva[राजपुरुषः], @deva[ब्राह्मणकम्बलः], @deva[कन्याखनः], @deva[पटहशब्दः], @deva[नदीघोषः], @deva[राजदृषत्], @deva[ब्राह्मणसमित्]

@note[Consonants are disregarded for accent purposes — the @deva[उदात्त] falls on the final vowel, even if the word ends in a consonant.]

The exceptions to this rule are given in the next chapter (@deva[षष्ठोध्यायः द्वितीयः पादः]).`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.1.201-223). Total: ${Object.keys(vasu).length}`);
