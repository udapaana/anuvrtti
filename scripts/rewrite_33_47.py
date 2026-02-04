#!/usr/bin/env python3
"""Rewrite commentary for sūtras 3.2.33-3.2.47 following guidelines."""

import json

# Load the layered commentary
with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

# Rewritten commentary for 3.2.33-3.2.47
updates = {
    "32033": {
        "en": {
            "simple": """The affix @deva[खश्] is used after @deva[पच्] 'to cook' when the object in composition denotes a **measure** (@deva[परिमाण]). A @deva[परिमाण] is a unit of measurement like @deva[प्रस्थ], @deva[द्रोण], or @deva[खारी].

**Examples:**
- @deva[प्रस्थं पचति] → @deva[प्रस्थम्पचः] 'a pot that cooks a @deva[प्रस्थ] of food'
- @deva[द्रोणम्पचः] 'a pot that cooks a @deva[द्रोण]'
- @deva[खारिम्पचः] 'a kettle that cooks a @deva[खारी]'""",
            "standard": """The affix @deva[खश्] comes after @deva[पच्] 'to cook' when the object in composition denotes a measure (@deva[परिमाण]).

**Derivation:** @deva[प्रस्थं पचति] = @deva[प्रस्थम्पचः] 'a pot with capacity to cook a @deva[प्रस्थ] of food'

| @deva[उपपद] | Compound | Meaning |
|------|----------|---------|
| @deva[प्रस्थ] | @deva[प्रस्थम्पचः] | @deva[प्रस्थ]-cooking pot |
| @deva[द्रोण] | @deva[द्रोणम्पचः] | @deva[द्रोण]-cooking pot |
| @deva[खारी] | @deva[खारिम्पचः] | @deva[खारी]-cooking kettle |""",
            "advanced": """The affix @deva[खश्] comes after @deva[पच्] 'to cook' when the object in composition denotes a @deva[परिमाण] (measure).

**Derivation:** @deva[प्रस्थं पचति] = @deva[प्रस्थम्पचः] 'a pot having capacity to cook a @deva[प्रस्थ] of food'

**Examples:**
- @deva[प्रस्थम्पचः] — @deva[प्रस्थ]-cooking pot
- @deva[द्रोणम्पचः] — @deva[द्रोण]-cooking pot
- @deva[खारिम्पचः] — @deva[खारी]-cooking kettle

**Scope:** This sūtra covers cases where the @deva[उपपद] denotes a unit of measurement. See @ref[3.2.34] for non-measure uses of @deva[पच्]."""
        }
    },
    "32034": {
        "en": {
            "simple": """The affix @deva[खश्] is used after @deva[पच्] 'to cook' when @deva[मित] 'little/measured' or @deva[नख] 'nail' is in composition—but **not** when they denote measures (which was covered in the previous sūtra).

**Examples:**
- @deva[मितम्पचा ब्राह्मणी] 'a niggardly Brahmin woman' (who cooks only a little)
- @deva[नखम्पचा यवागूः] 'nail-scorching barley gruel' (so hot it burns the nails)""",
            "standard": """The affix @deva[खश्] comes after @deva[पच्] 'to cook' when @deva[मित] 'measured/little' or @deva[नख] 'nail' is in composition—this applies when **not** denoting measures (cf. @ref[3.2.33]).

**Examples:**
- @deva[मितम्पचा ब्राह्मणी] 'a niggardly Brahmin woman' (cooks only a little)
- @deva[नखम्पचा यवागूः] 'nail-scorching barley gruel' (so hot it burns the nails)

**Scope distinction:** @ref[3.2.33] covers @deva[परिमाण] (actual measures); this sūtra covers other senses.""",
            "advanced": """The affix @deva[खश्] comes after @deva[पच्] 'to cook' when @deva[मित] 'measured portion' or @deva[नख] 'nail' is in composition as object. This sūtra applies when the words do **not** denote measures (which was the case in @ref[3.2.33]).

**Examples:**
- @deva[मितम्पचा ब्राह्मणी] 'the Brahmin woman who cooks little' (i.e., niggardly)
- @deva[नखम्पचा यवागूः] 'nail-scorching barley gruel' (so hot it burns the nails)

**Scope distinction from @ref[3.2.33]:** The previous sūtra applies when the @deva[उपपद] denotes an actual @deva[परिमाण] (unit of measure). This sūtra has its scope when the formed words do not denote measures."""
        }
    },
    "32035": {
        "en": {
            "simple": """The affix @deva[खश्] is used after @deva[तुद्] 'to strike' when @deva[विधु] 'moon' or @deva[अरुस्] 'wound' is in composition.

**Examples:**
- @deva[विधुन्तुदः राहुः] 'Rāhu who strikes/eclipses the moon'
- @deva[अरुन्तुदः] 'corrosive, wounding vital parts'

The @deva[न्] in @deva[विधुन्तुदः] and @deva[अरुन्तुदः] is the @deva[मुम्] augment.""",
            "standard": """The affix @deva[खश्] comes after @deva[तुद्] 'to strike' when @deva[विधु] 'moon' or @deva[अरुस्] 'wound' is in composition as object.

**Examples:**
- @deva[विधुन्तुदः राहुः] 'Rāhu who eclipses the moon'
- @deva[अरुन्तुदः] 'corrosive, wounding vital parts'

**@deva[मुम्] augment:** The @deva[न्] is added after @deva[अरुस्] by @ref[6.3.67].""",
            "advanced": """The affix @deva[खश्] comes after @deva[तुद्] 'to strike' when @deva[विधु] 'moon' or @deva[अरुस्] 'wound' is in composition as object.

**Examples:**
- @deva[विधुन्तुदः राहुः] 'Rāhu who strikes/eclipses the moon'
- @deva[अरुन्तुदः] 'corrosive, wounding vital parts'

**@deva[मुम्] augment:** For the addition of @deva[मुम्] after @deva[अरुस्], see @ref[6.3.67]."""
        }
    },
    "32036": {
        "en": {
            "simple": """The affix @deva[खश्] is used after @deva[दृश्] 'to see' with @deva[असूर्य], and after @deva[तप्] 'to heat' with @deva[ललाट] 'forehead'.

**Examples:**
- @deva[असूर्यम्पश्या राजदाराः] 'the king's wives who don't see the sun' (kept secluded in the harem, so protected that even the sun cannot see them)
- @deva[ललाटन्तपः] 'heating the forehead' (describing the sun)

**Note:** In @deva[असूर्यम्पश्य], the negative @deva[अ] applies to the verb @deva[दृश्] (not seeing), not to @deva[सूर्य] (sun).""",
            "standard": """The affix @deva[खश्] comes after @deva[दृश्] 'to see' with @deva[असूर्य], and after @deva[तप्] 'to heat' with @deva[ललाट] 'forehead'.

**Derivations:**
- @deva[असूर्य] + @deva[दृश्] + @deva[खश्] = @deva[असूर्यम्पश्यः]
  - @deva[असूर्यम्पश्या राजदाराः] 'the king's wives not seeing the sun' (secluded in the harem—so protected that even the sun cannot see them)
- @deva[ललाट] + @deva[तप्] + @deva[खश्] = @deva[ललाटन्तपः] 'heating the forehead' (said of the sun)

**Grammatical note:** @deva[असूर्य] is an 'impossible compound'—the negative @deva[अ] semantically applies to @deva[दृश्], not @deva[सूर्य]. This opposes @deva[समर्थ-पद-विधि] (@ref[2.1.2]).""",
            "advanced": """The affix @deva[खश्] comes after @deva[दृश्] 'to see' and @deva[तप्] 'to heat' when @deva[असूर्य] and @deva[ललाट] respectively are in composition as objects.

**Derivations:**
- @deva[असूर्य] + @deva[दृश्] + @deva[खश्] = @deva[असूर्यम्पश्यः]
  - Usage: @deva[असूर्यम्पश्या राजदाराः] 'the king's wives not seeing the sun' (secluded in the harem—so protected even the sun cannot see them)
- @deva[ललाट] + @deva[तप्] + @deva[खश्] = @deva[ललाटन्तपः] 'heating the forehead' (said of the sun)

**Grammatical anomaly:** @deva[असूर्य] is an 'impossible compound' (@deva[अलुक्-समास])—the negative @deva[अ] semantically applies to @deva[दृश्] (not-seeing), not to @deva[सूर्य] (sun). This opposes the @deva[समर्थ-पद-विधि] principle of @ref[2.1.2], which requires semantic connection within compound members."""
        }
    },
    "32037": {
        "en": {
            "simple": """The words @deva[उग्रम्पश्यः], @deva[इरम्मदः], and @deva[पाणिन्धमः] are **irregularly** formed (@deva[निपातन]). They cannot be derived by regular rules.

**Examples:**
- @deva[उग्रं पश्यति] → @deva[उग्रम्पश्यः] 'fierce-looking'
- @deva[इरया मद्यति] → @deva[इरम्मदः] 'delighting in drink'—an epithet of Agni (fire) and lightning
- @deva[पाणिन्धमाः पन्थानः] 'chilly roads' (that make one blow on the hands for warmth)""",
            "standard": """The words @deva[उग्रम्पश्य], @deva[इरम्मद], and @deva[पाणिन्धम] are @deva[निपातन] (irregular formations).

| Word | Derivation | Meaning |
|------|------------|---------|
| @deva[उग्रम्पश्यः] | @deva[उग्रं पश्यति] | fierce-looking |
| @deva[इरम्मदः] | @deva[इरया मद्यति] | delighting in drink (epithet of Agni, lightning) |
| @deva[पाणिन्धमाः] | — | chilly (roads making one blow on hands) |

**Note:** These are listed because they cannot be derived by regular application of affixes.""",
            "advanced": """The words @deva[उग्रम्पश्य], @deva[इरम्मद], @deva[पाणिन्धम] are @deva[निपातन] (irregular formations).

**Derivations:**
- @deva[उग्रं पश्यति] = @deva[उग्रम्पश्यः] 'fierce-looking'
- @deva[इरया मद्यति] = @deva[इरम्मदः] 'delighting in drinking'—epithet of Agni, flash of lightning
- @deva[पाणिन्धमाः पन्थानः] 'chilly roads' (that make one blow on hands for warmth)

**As @deva[निपातन]:** These forms are listed because they cannot be derived through regular sūtra application. The @deva[मुम्] augment and other features appear without the expected conditions."""
        }
    },
    "32038": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[वद्] 'to speak' when @deva[प्रिय] 'dear' or @deva[वश] 'submission' is in composition.

**Examples:**
- @deva[प्रियं वदति] → @deva[प्रियंवदः] 'one who speaks kindly'
- @deva[वशंवदः] 'one who professes submission'

**How the affix works:**
- @deva[ख्] (indicatory) triggers the @deva[मुम्] augment (the @deva[न्/ं])
- @deva[च्] (indicatory) causes vowel shortening in certain cases""",
            "standard": """The affix @deva[खच्] comes after @deva[वद्] 'to speak' when @deva[प्रिय] or @deva[वश] is in composition as object.

**Examples:**
- @deva[प्रियं वदति] = @deva[प्रियंवदः] 'one who speaks kindly'
- @deva[वशंवदः] 'one who professes submission'

**Affix structure:** @deva[ख्] and @deva[च्] are @deva[इत्] (indicatory):
- @deva[ख्]: triggers @deva[मुम्] augment (@ref[6.3.67])
- @deva[च्]: causes vowel shortening (@ref[6.4.94])

**Why separate @deva[खच्]?** With @deva[प्रिय]/[वश] + @deva[वद्], @deva[खश्] would produce the same result. A separate affix enables different effects in subsequent sūtras.

**Vārtikas:**
1. @deva[खच्] after @deva[गम्] with @deva[सुप्]-ending words: @deva[मितङ्गमो हस्ती] 'slow-moving elephant'
2. @deva[विहायस्] → @deva[विह] before @deva[खच्] + @deva[गम्]: @deva[विहायसा गच्छति] = @deva[विहङ्गमः] 'bird'
3. Optional @deva[ड्] treatment: @deva[विहङ्गः] or @deva[विहङ्गमः]; @deva[भुजङ्गः] or @deva[भुजङ्गमः] 'serpent'""",
            "advanced": """The affix @deva[खच्] comes after @deva[वद्] 'to speak' when @deva[प्रिय] or @deva[वश] is in composition as object.

**Derivation:** @deva[प्रियं वदति] = @deva[प्रियंवदः] 'who speaks kindly'; @deva[वशंवदः] 'who professes submission'

**Affix structure:** @deva[ख्] and @deva[च्] are @deva[इत्]:
- @deva[ख्]: triggers @deva[मुम्] augment (@ref[6.3.67])
- @deva[च्]: causes vowel shortening (@ref[6.4.94])

**Why separate @deva[खच्] from @deva[खश्]?** With @deva[प्रिय]/[वश] + @deva[वद्], @deva[खश्] would give the same result. The separate affix enables different effects in the following sūtras, where @deva[खच्] produces different results than @deva[खश्].

**Vārtikas:**
1. @deva[खच्] after @deva[गम्] with @deva[सुप्]-ending @deva[उपपद]: @deva[मितङ्गमो हस्ती] 'slow-moving elephant', @deva[मितङ्गमा हस्तिनी] 'slow-moving she-elephant'
2. @deva[विहायस्] → @deva[विह] before @deva[खच्] + @deva[गम्]: @deva[विहायसा गच्छति] = @deva[विहङ्गमः] 'bird' (sky-goer)
3. Optional @deva[ड्] treatment (causing final vowel elision): @deva[विहङ्गः] or @deva[विहङ्गमः] 'bird'; @deva[भुजङ्गः] or @deva[भुजङ्गमः] 'serpent' (what goes crookedly)
4. @deva[विहायस्] → @deva[विह] with @deva[ड] (@ref[2.2.4]) after @deva[गम्]: Thus three forms exist: @deva[विहगः], @deva[विहङ्गः], @deva[विहङ्गमः]"""
        }
    },
    "32039": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[तापि] (causative of @deva[तप्] 'to heat/torment') when @deva[द्विषत्] 'enemy' or @deva[पर] 'enemy/rival' is in composition.

**Examples:**
- @deva[द्विषन्तं तापयति] → @deva[द्विषन्तपः] 'one who destroys his enemies'
- @deva[परन्तपः] 'one who subdues his enemies, a hero'

**Note:** When the @deva[उपपद] is feminine, @deva[अण्] is used instead: @deva[द्विषतीं तापयति] → @deva[द्विषतीतापः].""",
            "standard": """The affix @deva[खच्] comes after @deva[तापि] (causative of @deva[तप्] 'to heat') when @deva[द्विषत्] or @deva[पर] is in composition as object.

**Root note:** @deva[तप्] belongs to both @deva[भ्वादि] and @deva[चुरादि]:
- In @deva[भ्वादि]: @deva[तापि] is the causative with @deva[णिच्]
- In @deva[चुरादि]: all verbs inherently take @deva[णि]

**Derivation:** @deva[द्विषन्तं तापयति] = @deva[द्विषन्तपः] 'one who destroys his enemies' (by @ref[6.4.94])

**Examples:**
- @deva[द्विषन्तपः] 'one who destroys enemies'
- @deva[परन्तपः] 'one who subdues enemies, a hero'

**Restriction:** When @deva[उपपद] is feminine, @deva[अण्] applies instead: @deva[द्विषतीं तापयति] = @deva[द्विषतीतापः].""",
            "advanced": """The affix @deva[खच्] comes after @deva[तापि] (causative of @deva[तप्] 'to heat') when @deva[द्विषत्] or @deva[पर] is in composition as object.

**Root classification:** @deva[तप्] belongs to both @deva[भ्वादि] and @deva[चुरादि]. In @deva[भ्वादि], @deva[तापि] is the causative ending in @deva[णिच्]; in @deva[चुरादि], all verbs inherently take @deva[णि]. Both are intended in this sūtra.

**Derivation:**
- @deva[द्विषन्तं तापयति] = @deva[द्विषन्तपः] 'one who destroys his enemies' (vowel shortening by @ref[6.4.94])
- @deva[परन्तपः] 'one who subdues his enemies, a hero'

**Restriction:** The affix does not apply when the @deva[उपपद] is feminine. Then @deva[अण्] applies:
- @deva[द्विषतीं तापयति] = @deva[द्विषतीतापः]"""
        }
    },
    "32040": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[यम्] 'to restrain' when @deva[वाच्] 'speech' is in composition, and the meaning is a **vow** (@deva[व्रत]).

**Example:** @deva[वाचंयम आस्ते] 'he has taken a vow of rigid silence'

A @deva[व्रत] is a vow taken according to @deva[धर्मशास्त्र] (religious law).

**Without 'vow' meaning:** When not a vow, the form is @deva[वाग्यामः] 'restraining speech'.""",
            "standard": """The affix @deva[खच्] comes after @deva[यम्] 'to restrain' when @deva[वाच्] 'speech' is in composition as object and the sense is @deva[व्रत] (a religious vow).

**Example:** @deva[वाचंयम आस्ते] 'he has taken a vow of rigid silence'

**@deva[व्रत]:** A vow taken according to @deva[धर्मशास्त्र] rules.

**Why @deva[व्रत] condition?** Without it, @deva[वाग्यामः] 'restraining speech' is formed (by @ref[6.3.69]).""",
            "advanced": """The affix @deva[खच्] comes after @deva[यम्] 'to restrain' when @deva[वाच्] 'speech' is in composition as object and the sense is @deva[व्रत] (vow).

**Example:** @deva[वाचंयम आस्ते] 'he has taken a vow of rigid silence'

**@deva[व्रत]:** A vow taken according to @deva[धर्मशास्त्र].

**Condition:** Why do we specify @deva[व्रत]? Without this condition, the general form @deva[वाग्यामः] 'restraining speech' applies (by @ref[6.3.69]). The @deva[खच्] form @deva[वाचंयम] specifically denotes a formal religious vow of silence."""
        }
    },
    "32041": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[दॄ] 'to split' with @deva[पुर्] 'city', and after @deva[सह्] 'to bear' with @deva[सर्व] 'all'.

**Examples:**
- @deva[पुरं दारयति] → @deva[पुरन्दरः] 'Indra' (the city-splitter)
- @deva[सर्वंसहः राजा] 'the all-forbearing king'

**Vārtika:** Also @deva[भग] + @deva[दॄ] + @deva[खच्] = @deva[भगन्दरः] 'fistula in ano' (a medical term).""",
            "standard": """The affix @deva[खच्] comes after @deva[दॄ] 'to split' with @deva[पुर्] 'city', and after @deva[सह्] 'to bear' with @deva[सर्व] 'all'.

**Derivations:** (applying @ref[6.3.69] and @ref[6.4.94])
- @deva[पुरं दारयति] = @deva[पुरन्दरः] 'Indra' (who splits asunder cities)
- @deva[सर्वं सहते] = @deva[सर्वंसहः] 'all-forbearing'
  - Usage: @deva[सर्वंसहो राजा] 'the all-forbearing king'

**Vārtika:** Also when @deva[भग] is in composition with @deva[दॄ]:
- @deva[भगन्दरः] 'fistula in ano'""",
            "advanced": """The affix @deva[खच्] comes after @deva[दॄ] 'to split' and @deva[सह्] 'to bear' when @deva[पुर्] and @deva[सर्व] respectively are in composition as objects.

**Derivations:**
- @deva[पुरं दारयति] = @deva[पुरन्दरः] 'name of Indra' (who splits asunder cities) — by @ref[6.3.69], @ref[6.4.94]
- @deva[सर्वं सहते] = @deva[सर्वंसहः]
  - Usage: @deva[सर्वंसहो राजा] 'the all-forbearing king'

**Vārtika:** Also when @deva[भग] is in composition with @deva[दॄ]:
- @deva[भगन्दरः] 'fistula in ano' (a medical condition)"""
        }
    },
    "32042": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[कष्] 'to rub/scratch' when @deva[सर्व] 'all', @deva[कूल] 'bank', @deva[अभ्र] 'cloud', or @deva[करीष] 'dry cow-dung' is in composition.

**Examples:**
- @deva[सर्वङ्कषः खलः] 'a villain, rogue' (who harms everyone)
- @deva[कूलङ्कषा नदी] 'a river' (that erodes its banks)
- @deva[अभ्रङ्कषो गिरिः] 'a mountain' (whose peak scratches the clouds)
- @deva[करीषङ्कषा वात्या] 'a strong wind' (that scatters dry dung)""",
            "standard": """The affix @deva[खच्] comes after @deva[कष्] 'to rub/scratch' when @deva[सर्व], @deva[कूल], @deva[अभ्र], or @deva[करीष] is in composition as object.

| @deva[उपपद] | Form | Example Usage |
|------|------|---------------|
| @deva[सर्व] 'all' | @deva[सर्वङ्कषः] | @deva[सर्वङ्कषः खलः] 'villain, rogue' |
| @deva[कूल] 'bank' | @deva[कूलङ्कषा] | @deva[कूलङ्कषा नदी] 'river' (erodes banks) |
| @deva[अभ्र] 'cloud' | @deva[अभ्रङ्कषः] | @deva[अभ्रङ्कषो गिरिः] 'mountain' (touches clouds) |
| @deva[करीष] 'dry dung' | @deva[करीषङ्कषा] | @deva[करीषङ्कषा वात्या] 'strong wind' |""",
            "advanced": """The affix @deva[खच्] comes after @deva[कष्] 'to rub/scratch' when @deva[सर्व] 'all', @deva[कूल] 'bank', @deva[अभ्र] 'cloud', or @deva[करीष] 'dry cow-dung' is in composition as object.

**Examples:**
- @deva[सर्वङ्कषः खलः] 'a villain, rogue' (who rubs against/harms everyone)
- @deva[कूलङ्कषा नदी] 'a river' (that erodes its banks)
- @deva[अभ्रङ्कषो गिरिः] 'a mountain' (whose peak scratches the clouds)
- @deva[करीषङ्कषा वात्या] 'a strong wind' (that scatters dry dung)"""
        }
    },
    "32043": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[कृ] 'to make' when @deva[मेघ] 'cloud', @deva[अर्ति] 'misfortune/pain', or @deva[भय] 'fear' is in composition.

**Examples:**
- @deva[मेघङ्करः] 'cloud-producing'
- @deva[अर्तिङ्करः] 'pain-giving'
- @deva[भयङ्करः] 'frightful'

Compounds with @deva[अ] (negative) are also valid: @deva[अभयङ्करः] 'one who causes security'.""",
            "standard": """The affix @deva[खच्] comes after @deva[कृ] 'to make' when @deva[मेघ] 'cloud', @deva[अर्ति] 'misfortune', or @deva[भय] 'fear' is in composition as object.

**Examples:**
- @deva[मेघङ्करः] 'producing clouds'
- @deva[अर्तिङ्करः] 'giving pain'
- @deva[भयङ्करः] 'frightful'

**Vārtika:** @deva[तदन्त-विधि] applies to @deva[उपपद]s like @deva[भय]. This is an exception to the vārtika under @ref[1.1.72] (which prohibits @deva[तदन्त-विधि] with affixes).
- Thus: @deva[अभयङ्करः] 'who causes security'""",
            "advanced": """The affix @deva[खच्] comes after @deva[कृ] 'to make' when @deva[मेघ] 'cloud', @deva[अर्ति] 'misfortune', or @deva[भय] 'fear' is in composition as object.

**Examples:**
- @deva[मेघङ्करः] 'producing clouds'
- @deva[अर्तिङ्करः] 'giving pain'
- @deva[भयङ्करः] 'frightful'

**Vārtika:** @deva[तदन्त-विधि] applies with @deva[उपपद]s like @deva[भय]. This is an exception to the vārtika under @ref[1.1.72], which prohibits @deva[तदन्त-विधि] in the case of affixes.
- Result: @deva[अभयङ्करः] 'who causes security' (with negative @deva[अ] prefixed to @deva[भय])"""
        }
    },
    "32044": {
        "en": {
            "simple": """Both @deva[अण्] and @deva[खच्] may be used after @deva[कृ] 'to make' when @deva[क्षेम] 'happiness', @deva[प्रिय] 'pleasant', or @deva[भद्र] 'joy' is in composition.

**Both forms valid:**
- @deva[क्षेमकारः] / @deva[क्षेमङ्करः] 'propitious'
- @deva[प्रियकारः] / @deva[प्रियङ्करः] 'showing kindness'
- @deva[भद्रकारः] / @deva[भद्रङ्करः] 'causing delight'

**Feminine:** Formed with @deva[आ] (not @deva[ई]): @deva[क्षेमकराः].""",
            "standard": """Both @deva[अण्] and @deva[खच्] come after @deva[कृ] when @deva[क्षेम] 'happiness', @deva[प्रिय] 'pleasant', or @deva[भद्र] 'joy' is in composition.

| @deva[उपपद] | With @deva[अण्] | With @deva[खच्] |
|------|---------|---------|
| @deva[क्षेम] | @deva[क्षेमकारः] | @deva[क्षेमङ्करः] |
| @deva[प्रिय] | @deva[प्रियकारः] | @deva[प्रियङ्करः] |
| @deva[भद्र] | @deva[भद्रकारः] | @deva[भद्रङ्करः] |

**Why repeat @deva[अण्]?** The @deva[अनुवृत्ति] of @deva[अण्] could be read in with @deva[वा]. The explicit repetition indicates these words never take @deva[ट] (@ref[3.2.20]) even when cause, habit, etc. are expressed. Thus feminine is with @deva[आ]: @deva[अल्पारम्भाः क्षेमकराः] 'small beginnings lead to prosperity'.""",
            "advanced": """Both @deva[अण्] and @deva[खच्] come after @deva[कृ] when @deva[क्षेम], @deva[प्रिय], or @deva[भद्र] is in composition as object.

**Examples:**
- @deva[क्षेमकारः] / @deva[क्षेमङ्करः] 'propitious'
- @deva[प्रियकारः] / @deva[प्रियङ्करः] 'showing kindness'
- @deva[भद्रकारः] / @deva[भद्रङ्करः] 'causing delight'

**Why explicitly state @deva[अण्]?** The @deva[अनुवृत्ति] of @deva[अण्] could have been read into this sūtra by using @deva[वा] 'optionally'. The explicit repetition indicates that these words never take @deva[ट] (@ref[3.2.20]) even when @deva[हेतु], @deva[तच्छील], etc. are denoted.

**Consequence for feminine:** Formed by @deva[आ], not @deva[ई]:
- @deva[अल्पारम्भाः क्षेमकराः] 'small beginnings lead to/cause prosperity'"""
        }
    },
    "32045": {
        "en": {
            "simple": """The affix @deva[खच्] is used after @deva[भू] 'to be' when @deva[आशित] 'satisfied by eating' (with a case ending) is in composition. The meaning can be **instrument** or **condition**.

**Example:** @deva[आशितंभवः]
- As **instrument**: 'food' (that by which one is satisfied)
- As **condition**: 'satiety' (the state of being satisfied)""",
            "standard": """The affix @deva[खच्] comes after @deva[भू] 'to be' when case-inflected @deva[आशित] 'satisfied by eating' is in composition. The sense is **instrument** or **condition**.

@deva[सुपि] from @ref[3.2.4] is understood here.

**Derivation:** @deva[आशिती भवति अनेन] = @deva[आशितंभवः]
- As **instrument**: 'food' (that by which one becomes satisfied)
- As **condition**: 'satiety' (the state of being satisfied)""",
            "advanced": """The affix @deva[खच्] comes after @deva[भू] 'to be' when case-inflected @deva[आशित] 'satisfied by eating' is in composition. The sense is instrument or condition.

@deva[सुपि] from @ref[3.2.4] is understood.

**Derivation:** @deva[आशिती भवति अनेन] = @deva[आशितंभवः]
- As **instrument** (@deva[करण]): 'food' (that by which one is satiated)
- As **condition** (@deva[भाव]): 'satiety' (the condition of being satiated)"""
        }
    },
    "32046": {
        "en": {
            "simple": """The affix @deva[खच्] is used after these eight roots when a **name** (@deva[संज्ञा]) is formed:

1. @deva[भृ] 'to bear' → @deva[विश्वम्भरा] 'earth' (all-supporting)
2. @deva[तॄ] 'to cross' → @deva[रथन्तरः] 'the Rathantara Sāma'
3. @deva[वृ] 'to choose' → @deva[पतिंवरा] 'girl choosing a husband'
4. @deva[जि] 'to conquer' → @deva[शत्रुञ्जयः] 'elephant' (enemy-conquering)
5. @deva[धारि] 'to hold' → @deva[युगन्धरः] 'mountain' or 'yoke-pole'
6. @deva[सहि] 'to bear' → @deva[शत्रुंसहः] 'withstanding enemies'
7. @deva[तपि] 'to heat' → @deva[शत्रुन्तपः] 'destroying enemies'
8. @deva[दम] 'to subdue' → @deva[अरिन्दमः] 'victorious'

**Without name-sense:** @deva[कुटुम्बभारः] 'one who supports his family'.""",
            "standard": """The affix @deva[खच्] comes after @deva[भृ], @deva[तॄ], @deva[वृ], @deva[जि], @deva[धारि], @deva[सहि], @deva[तपि], @deva[दम] when a **name** (@deva[संज्ञा]) is formed.

@deva[कर्मणि] and @deva[सुपि] from @ref[3.2.1] and @ref[3.2.4] apply as appropriate.

| Root | Example | Meaning |
|------|---------|---------|
| @deva[भृ] | @deva[विश्वम्भरा] | earth (all-supporting) |
| @deva[तॄ] | @deva[रथन्तरः] | Rathantara Sāma |
| @deva[वृ] | @deva[पतिंवरा] | girl choosing husband |
| @deva[जि] | @deva[शत्रुञ्जयः] | elephant (conquers enemies) |
| @deva[धारि] | @deva[युगन्धरः] | mountain; yoke-pole |
| @deva[सहि] | @deva[शत्रुंसहः] | withstanding enemies |
| @deva[तपि] | @deva[शत्रुन्तपः] | destroying enemies |
| @deva[दम] | @deva[अरिन्दमः] | victorious (Arindama) |

**Without @deva[संज्ञा]:** @deva[कुटुम्बभारः] 'one who supports his family'.""",
            "advanced": """The affix @deva[खच्] comes after @deva[भृ], @deva[तॄ], @deva[वृ], @deva[जि], @deva[धारि], @deva[सहि], @deva[तपि], @deva[दम]—when the word denotes a **name** (@deva[संज्ञा]).

@deva[कर्मणि] and @deva[सुपि] from @ref[3.2.1] and @ref[3.2.4] should be applied as occasion requires.

**Examples:**
- @deva[विश्वम्भरा] 'earth' (that which supports all)
- @deva[रथन्तरः] 'the Rathantara Sāma'
- @deva[पतिंवरा] 'a girl' (who is about to choose a husband)
- @deva[शत्रुञ्जयः] 'an elephant' (who conquers the enemy)
- @deva[युगन्धरः] 'a mountain' or 'the pole of a carriage to which the yoke is fixed'
- @deva[शत्रुंसहः] 'Śatruṃsaha' (withstanding an enemy)
- @deva[शत्रुन्तपः] 'Śatruntapa' (destroying an enemy)
- @deva[अरिन्दमः] 'Arindama' (victorious)

**Why @deva[संज्ञायाम्]?** Without the name condition: @deva[कुटुम्बभारः] 'he who supports his family'."""
        }
    },
    "32047": {
        "en": {
            "simple": """The affix @deva[खच्] is also used after @deva[गम्] 'to go' when a case-ending word is in composition and the result denotes a **name** (@deva[संज्ञा]).

**Example:** @deva[सुतङ्गमः] (a proper name)

**Note:** @deva[गम्] could have been included in the previous sūtra, but it is stated separately so that @deva[गम्] carries forward (@deva[अनुवृत्ति]) into subsequent sūtras.""",
            "standard": """The affix @deva[खच्] comes after @deva[गम्] 'to go' when a @deva[सुप्]-ending word is in composition and the word denotes a **name** (@deva[संज्ञा]).

**Example:** @deva[सुतङ्गमः] (a proper name)

**Why separate @deva[गम्]?** Though @deva[गम्] could have been included in @ref[3.2.46], the separation serves to carry @deva[गम्]'s @deva[अनुवृत्ति] into subsequent sūtras.""",
            "advanced": """The affix @deva[खच्] comes after @deva[गम्] 'to go' when a @deva[सुप्]-ending word is in composition and the word denotes a **name** (@deva[संज्ञा]).

**Example:** @deva[सुतङ्गमः] (a proper name)

**Why state @deva[गम्] separately?** Though @deva[गम्] could have been included in @ref[3.2.46], the separation serves the purpose of carrying @deva[गम्]'s @deva[अनुवृत्ति] into the subsequent sūtras, where @deva[गम्] will be referenced."""
        }
    }
}

# Update the commentary
for sutra_id, content in updates.items():
    commentary[sutra_id] = content

# Write back
with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.33-3.2.47")
