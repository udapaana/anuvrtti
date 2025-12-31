import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '53101': `@deva[वस्तेर्ढञ्] — The affix @deva[ढञ्] comes after @deva[वस्ति] (bladder, abdomen) in the sense of "like."

@deva[वस्तिरिव] = @deva[वास्तेयः] (f. @deva[वास्तेयी]) — like the abdomen

The affixes taught from here onward come in a general sense, not confined to images.`,

  '53102': `@deva[शिलाया ढः] — The affix @deva[ढ] comes after @deva[शिला] (stone) in the sense of "like."

@deva[शिलेव] = @deva[शिलेयं दधिः] — curd hard as stone

@note[Some say @deva[ढञ्] also comes: @deva[शैलेयम्].]`,

  '53103': `@deva[शाखादिभ्यो यत्] — The affix @deva[यत्] comes after @deva[शाखा] etc. in the sense of "like."

| Base | + @deva[यत्] |
|------|------------|
| @deva[शाखा] | @deva[शाख्यः] |
| @deva[मुख] | @deva[मुख्यः] (@ref[6.1.213]) |
| @deva[जघन] | @deva[जघन्यः] |

The @deva[शाखादि] list: @deva[शाखा], @deva[मुख], @deva[जघन], @deva[शृङ्ग], @deva[मेघ], @deva[अभ्र], @deva[चरण], @deva[स्कन्ध], @deva[स्कन्द], @deva[उरस्], @deva[शिरस्], @deva[अग्र], @deva[शरण].`,

  '53104': `@deva[द्रव्यं भव्ये] — The word @deva[द्रव्य] is an irregular (nipātana) formation meaning "beautiful, excellent."

Formation: @deva[द्रु] + @deva[यत्] = @deva[द्रव्य]

@deva[भव्य] = nice, excellent, fit, having all desired qualities

Examples:
- @deva[द्रव्योऽयं राजपुत्रः] — how nice is this prince!
- @deva[द्रव्योऽयं माणवकः] — how excellent is this lad!`,

  '53105': `@deva[कुशाग्राच्छः] — The affix @deva[छ] comes after @deva[कुशाग्र] (tip of kuśa grass) in the sense of "like."

| Expression | Meaning |
|-----------|---------|
| @deva[कुशाग्रीया बुद्धिः] | intellect sharp as the tip of kuśa grass |
| @deva[कुशाग्रीयं शस्त्रम्] | weapon sharp as kuśa tip |`,

  '53106': `@deva[तद्विषयात्समासाच्च] — The affix @deva[छ] also comes after a compound that already contains the sense of @deva[इव], when a second "like" is to be expressed.

This implies that such a compound (with @deva[इव] sense) can be formed under @ref[2.1.4] (@deva[सुप्सुपा समासः]).

| Compound | + @deva[छ] | Meaning |
|----------|----------|---------|
| @deva[काकताल] (crow-palmyra) | @deva[काकतालीयम्] | like the crow-and-palmyra coincidence |
| @deva[अजाकृपाण] | @deva[अजाकृपाणीयम्] | like the goat-and-sword coincidence |
| @deva[अन्धकवर्तिक] | @deva[अन्धकवर्तिकीयम्] | like the blind-and-quail story |

@deva[काकतालीय] = coincidental (like a crow coincidentally killed by a falling palmyra fruit)`,

  '53107': `@deva[शर्करादिभ्योऽण्] — The affix @deva[अण्] comes after @deva[शर्करा] etc. in the sense of "like."

| Base | + @deva[अण्] |
|------|------------|
| @deva[शर्करा] | @deva[शार्करम्] |
| @deva[कपालिका] | @deva[कापालिकम्] |

The @deva[शर्करादि] list: @deva[शर्करा], @deva[कपालिका], @deva[कपाटिका], @deva[कनिष्ठिका], @deva[पुण्डरीक], @deva[शतपत्र], @deva[गोलोमन्], @deva[लोमन्], @deva[गोपुच्छ], @deva[नराची], @deva[नकुल], @deva[सिकता].`,

  '53108': `@deva[अङ्गुल्यादिभ्यष्ठक्] — The affix @deva[ठक्] comes after @deva[अङ्गुली] etc. in the sense of "like."

| Base | + @deva[ठक्] |
|------|------------|
| @deva[अङ्गुलि] | @deva[आङ्गुलिकः] (= finger-like) |
| @deva[भरुज] | @deva[भारुजिकः] |

The @deva[अङ्गुल्यादि] list: @deva[अङ्गुलि], @deva[भरुज], @deva[बभ्रु], @deva[वल्गु], @deva[मण्डर], @deva[मण्डल], @deva[शष्कुली], @deva[हरि], @deva[कपि], @deva[मुनि], @deva[रुह], @deva[खल], @deva[उदश्वित्], @deva[गोणी], @deva[उरस्], @deva[कुलिश], @deva[शिखा].`,

  '53109': `@deva[एकशालायाश्ठच् वा] — The affix @deva[ठच्] optionally comes after @deva[एकशाला] in the sense of "like."

| Affix | Form |
|-------|------|
| @deva[ठच्] | @deva[एकशालिकः] |
| @deva[ठक्] | @deva[ऐकशालिकः] |`,

  '53110': `@deva[कर्कलोहितयोरीकक्] — The affix @deva[ईकक्] (realized as @deva[ईक]) comes after @deva[कर्क] and @deva[लोहित] in the sense of "like."

| Base | + @deva[ईकक्] | Meaning |
|------|-------------|---------|
| @deva[कर्क] | @deva[कार्कीकः] | like a white horse |
| @deva[लोहित] | @deva[लौहितीकः स्फटिकः] | a crystal that appears red (by reflection) |`,

  '53111': `@deva[प्रत्नपूर्वविश्वेमेभ्यस्थाल् छन्दसि] — In the Vedas, @deva[थाल्] comes after @deva[प्रत्न], @deva[पूर्व], @deva[विश्व], and @deva[इम] (= @deva[इदम्]) in the sense of "like."

Ṛgveda V.44.1: @deva[तं प्रत्नथा पूर्वथा विश्वथेमथा ज्येष्ठताति बर्हिषदं स्वर्विदम्]

"Him (Indra), as the ancients, as the predecessors, as all creatures, and as these living men have worshipped..."`,

  '53112': `@deva[पूगाञ्ञ्योऽग्रामणीपूर्वात्] — The affix @deva[ञ्य] comes without changing sense after a word denoting a horde (@deva[पूग]), but NOT when the word is derived from the leader's name.

@deva[पूग] = crowd of various castes, with no fixed livelihood, united for acquiring wealth

| Base | Singular | Dual | Plural |
|------|----------|------|--------|
| @deva[लौहध्वज] | @deva[लौहध्वज्यः] | @deva[लौहध्वज्यौ] | @deva[लौहध्वजाः] |
| @deva[शिबि] | @deva[शैब्यः] | @deva[शैब्यौ] | @deva[शिबयः] |
| @deva[चातक] | @deva[चातक्यः] | @deva[चातक्यौ] | @deva[चातकाः] |

In plural, the affix is elided by @ref[2.4.62].

Why "not from leader's name"? → @deva[देवदत्तकाः] (@ref[5.2.78]) — horde whose leader is Devadatta

From this sūtra begin the @deva[तद्राज] affixes.`,

  '53113': `@deva[च्फञ्यन्ताद्व्राताच्च अस्त्रियाम्] — The affix @deva[ञ्य] comes after a wild band name (@deva[व्रात]) ending in @deva[च्फञ्], without change of sense — but NOT in the feminine.

@deva[व्रात] = persons of different castes, living by violence

| Base | Singular | Dual | Plural | Feminine |
|------|----------|------|--------|----------|
| @deva[कपोतपाक] | @deva[कपोतपाक्यः] | @deva[कपोतपाक्यौ] | @deva[कपोतपाकाः] | @deva[कपोतपाकी] |
| @deva[व्रीहिमत्] | @deva[व्रैहिमत्यः] | @deva[व्रैहिमत्यौ] | @deva[व्रीहिमताः] | @deva[व्रीहिमती] |
| @deva[कौञ्जायन] | @deva[कौञ्जायन्यः] | @deva[कौञ्जायन्यौ] | @deva[कौञ्जायनाः] | @deva[कौञ्जायनी] |`,

  '53114': `@deva[आयुधजीविसंघाद्वाहीकग्रामणीब्राह्मणराजन्येतरात् ञ्यट्] — The affix @deva[ञ्यट्] comes after the name of a warrior multitude (@deva[आयुधजीविसंघ]) among the Vāhīkas, except from Brāhmaṇa or Rājanya names.

The restriction @deva[अस्त्रियाम्] does NOT apply here.

| Base | Singular | Plural | Feminine |
|------|----------|--------|----------|
| @deva[कौण्डीबृस] | @deva[कौण्डीबृस्यः] | @deva[कौण्डीबृसाः] | @deva[कौण्डीबृसी] |
| @deva[क्षुद्रक] | @deva[क्षौद्रक्यः] | @deva[क्षुद्रकाः] | @deva[क्षौद्रकी] |
| @deva[मालव] | @deva[मालव्यः] | @deva[मालवाः] | @deva[मालवी] |

Restrictions:
- "Warrior class" → not @deva[मल्लाः], @deva[शयण्डाः]
- "Multitude" → not @deva[सम्राट्]
- "Among Vāhīkas" → not @deva[शबराः], @deva[पुलिन्दाः]`,

  '53115': `@deva[वृकाट्टेण्यण्] — The affix @deva[टेण्यण्] comes after @deva[वृक] (a warrior class).

| Singular | Dual | Plural | Feminine |
|----------|------|--------|----------|
| @deva[वार्केण्यः] | @deva[वार्केण्यौ] | @deva[वृकाः] | @deva[वार्केणी] |

This does NOT apply when @deva[वृक] means "wolf":
@deva[कामक्रोधौ मनुष्याणां खादितारौ वृकाविव] — "Desire and anger are like two wolves devouring men."`,

  '53116': `@deva[दामन्यादिभ्यश्छ त्रिगर्तषष्ठाच्च] — The affix @deva[छ] (realized as @deva[ईय]) comes after @deva[दामनि] etc. and after the six warrior stocks called @deva[त्रिगर्तषष्ठ].

Kārikā — The six Trigarta stocks: @deva[कौण्डोपरथ], @deva[दाण्डकि], @deva[कौष्ठिक], @deva[जालमानि], @deva[ब्रह्मगुप्त], @deva[जानकि].

| Base | Singular | Plural |
|------|----------|--------|
| @deva[दामनि] | @deva[दामनीयः] | @deva[दामनयः] |
| @deva[उलप] | @deva[औलपीयः] | @deva[उलपयः] |
| @deva[कौण्डोपरथ] | @deva[कौण्डोपरथीयः] | @deva[कौण्डोपरथाः] |
| @deva[दाण्डक] | @deva[दाण्डकीयः] | @deva[दाण्डकयः] |
| @deva[ब्रह्मगुप्त] | @deva[ब्रह्मगुप्तीयः] | @deva[ब्रह्मगुप्ताः] |`,

  '53117': `@deva[पर्श्वादिभ्योऽण् यौधेयादिभ्यश्चाञ्] — The affix @deva[अण्] comes after @deva[पर्शु] etc., and @deva[अञ्] comes after @deva[यौधेय] etc., when these words denote warrior classes.

| Base | + @deva[अण्] | Plural |
|------|------------|--------|
| @deva[पर्शु] | @deva[पार्शवः] | @deva[पर्शवः] |
| @deva[असुर] | @deva[आसुरः] | @deva[असुराः] |

| Base | + @deva[अञ्] | Plural |
|------|------------|--------|
| @deva[यौधेय] | @deva[यौधेयः] | @deva[यौधेयाः] |

@deva[पर्श्वादि]: @deva[पर्शु], @deva[असुर], @deva[रक्षस्], @deva[बाहीक], @deva[वयस्], @deva[वसु], @deva[मरुत्], @deva[सत्वत्], @deva[देशाह], @deva[पिशाच], @deva[अशनि], @deva[कार्षापण].

@deva[यौधेयादि]: @deva[यौधेय], @deva[कौशेय], @deva[शौक्रेय], @deva[शौभ्रेय], @deva[घार्तेय], @deva[धार्तेय], @deva[ज्याबाणेय], @deva[त्रिगर्त], @deva[भरत], @deva[उशीनर], @deva[क्रौशेय], @deva[वार्त्तय]. See @ref[5.1.178].`,

  '53118': `@deva[अणन्ताभिजिद्बैदभृतशालावतशैखावतशामीवतौर्णावतश्रौमतेभ्यो यञ्] — The affix @deva[यञ्] comes after @deva[अभिजित्], @deva[बैदभृत्], @deva[शालावत्], @deva[शैखावत्], @deva[शामीवत्], @deva[और्णावत्], and @deva[श्रौमत्] when these words end in the patronymic affix @deva[अण्].

The anuvṛtti of @deva[आयुधजीविसंघात्] ceases.

| Patronymic base | + @deva[यञ्] | Plural |
|-----------------|------------|--------|
| @deva[आभिजित्] | @deva[आभिजित्यः] | @deva[आभिजिताः] |
| @deva[बैदभृत्] | @deva[बैदभृत्यः] | @deva[बैदभृताः] |
| @deva[शालावत्] | @deva[शालावत्यः] | @deva[शालावताः] |
| @deva[शैखावत्] | @deva[शैखावत्यः] | @deva[शैखावताः] |
| @deva[शामीवत्] | @deva[शामीवत्यः] | @deva[शामीवताः] |
| @deva[और्णावत्] | @deva[और्णावत्यः] | @deva[और्णावताः] |
| @deva[श्रौमत्] | @deva[श्रौमत्यः] | @deva[श्रौमताः] |

The @deva[अण्] here is patronymic. Otherwise: @deva[आभिजिति मुहूर्तः], @deva[आभिजितः स्थालीपाकः] (non-patronymic @deva[अण्]).`,

  '53119': `@deva[ञ्याद्यास्तद्राजाः] — The affixes @deva[ञ्य] etc. (@ref[5.3.112] onward) are called @deva[तद्राज].

The illustrations of tadRāja affixes have been given above. The term @deva[तद्राज] occurs in @ref[2.4.62].`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.3.101-119). Total: ${Object.keys(vasu).length}`);
