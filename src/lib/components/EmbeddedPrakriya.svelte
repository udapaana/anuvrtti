<script lang="ts">
  import { deriveTinanta, deriveSubanta, COMMON_DHATUS, type Prakriya, type Lakara, type Gana } from '$lib/prakriya';
  import DerivationViewer from './DerivationViewer.svelte';

  interface Props {
    /** Derivation spec in format "root + affixes" in SLP1 (e.g., "bhU + laT + tip") */
    spec: string;
    /** Optional sutra to highlight in the derivation */
    highlight?: string;
    /** Whether to start collapsed */
    collapsed?: boolean;
  }

  let { spec, highlight, collapsed = false }: Props = $props();

  let prakriya = $state<Prakriya | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  // Parse the derivation spec and derive the form
  $effect(() => {
    deriveFromSpec(spec);
  });

  async function deriveFromSpec(specStr: string) {
    loading = true;
    error = null;
    prakriya = null;

    try {
      // Parse spec like "bhU + laT + tip" or "rAma + su"
      const parts = specStr.split(/\s*\+\s*/).map(p => p.trim());

      if (parts.length < 2) {
        error = `Invalid spec: ${specStr}. Expected format: "root + affixes"`;
        return;
      }

      const root = parts[0];

      // Check if it's a tinanta (verb) or subanta (noun)
      // Tinanta has lakara markers like laT, liT, luT, etc.
      const lakaraMap: Record<string, Lakara> = {
        'laT': 'Lat', 'lat': 'Lat', 'laṭ': 'Lat',
        'liT': 'Lit', 'lit': 'Lit', 'liṭ': 'Lit',
        'luT': 'Lut', 'lut': 'Lut', 'luṭ': 'Lut',
        'lRT': 'Lrt', 'lrt': 'Lrt', 'lṛṭ': 'Lrt',
        'loT': 'Lot', 'lot': 'Lot', 'loṭ': 'Lot',
        'laN': 'Lan', 'lan': 'Lan', 'laṅ': 'Lan',
        'liN': 'VidhiLin', 'lin': 'VidhiLin', 'liṅ': 'VidhiLin',
        'luN': 'Lun', 'lun': 'Lun', 'luṅ': 'Lun',
        'lRN': 'Lrn', 'lrn': 'Lrn', 'lṛṅ': 'Lrn',
      };

      // Find lakara in parts
      let lakara: Lakara | null = null;
      for (const part of parts.slice(1)) {
        if (lakaraMap[part]) {
          lakara = lakaraMap[part];
          break;
        }
      }

      if (lakara) {
        // It's a tinanta - derive verb form
        const result = await deriveTinantaFromSpec(root, lakara, parts);
        if (result) {
          prakriya = result;
        } else {
          error = `Could not derive: ${specStr}`;
        }
      } else {
        // Try as subanta (noun)
        const result = await deriveSubantaFromSpec(root, parts);
        if (result) {
          prakriya = result;
        } else {
          error = `Could not derive: ${specStr}`;
        }
      }
    } catch (e) {
      error = `Derivation error: ${e}`;
    } finally {
      loading = false;
    }
  }

  async function deriveTinantaFromSpec(root: string, lakara: Lakara, parts: string[]): Promise<Prakriya | null> {
    // Look up the dhatu in COMMON_DHATUS or use as-is
    const dhatuInfo = COMMON_DHATUS[root];
    const aupadeshika = dhatuInfo?.aupadeshika || root;
    const gana: Gana = dhatuInfo?.gana || 'Bhvadi';

    // Parse person/number from ending (tip, tas, Jhi, sip, Tas, Ta, mip, vas, mas, etc.)
    // Parasmaipada: tip/tas/Jhi (3rd), sip/Tas/Ta (2nd), mip/vas/mas (1st)
    // Atmanepada: ta/AtAm/Jha (3rd), TAs/ATAm/Dvam (2nd), iw/vahi/mahiN (1st)

    type Purusha = 'Prathama' | 'Madhyama' | 'Uttama';
    type Vacana = 'Eka' | 'Dvi' | 'Bahu';

    const endingMap: Record<string, { purusha: Purusha; vacana: Vacana }> = {
      'tip': { purusha: 'Prathama', vacana: 'Eka' },
      'tas': { purusha: 'Prathama', vacana: 'Dvi' },
      'Jhi': { purusha: 'Prathama', vacana: 'Bahu' },
      'jhi': { purusha: 'Prathama', vacana: 'Bahu' },
      'anti': { purusha: 'Prathama', vacana: 'Bahu' },
      'sip': { purusha: 'Madhyama', vacana: 'Eka' },
      'Tas': { purusha: 'Madhyama', vacana: 'Dvi' },
      'Ta': { purusha: 'Madhyama', vacana: 'Bahu' },
      'tha': { purusha: 'Madhyama', vacana: 'Bahu' },
      'mip': { purusha: 'Uttama', vacana: 'Eka' },
      'vas': { purusha: 'Uttama', vacana: 'Dvi' },
      'mas': { purusha: 'Uttama', vacana: 'Bahu' },
      // Atmanepada
      'ta': { purusha: 'Prathama', vacana: 'Eka' },
      'AtAm': { purusha: 'Prathama', vacana: 'Dvi' },
      'Jha': { purusha: 'Prathama', vacana: 'Bahu' },
      'TAs': { purusha: 'Madhyama', vacana: 'Eka' },
      'ATAm': { purusha: 'Madhyama', vacana: 'Dvi' },
      'Dvam': { purusha: 'Madhyama', vacana: 'Bahu' },
      'iw': { purusha: 'Uttama', vacana: 'Eka' },
      'vahi': { purusha: 'Uttama', vacana: 'Dvi' },
      'mahiN': { purusha: 'Uttama', vacana: 'Bahu' },
    };

    // Find ending in parts
    let purusha: Purusha = 'Prathama';
    let vacana: Vacana = 'Eka';

    for (const part of parts) {
      if (endingMap[part]) {
        purusha = endingMap[part].purusha;
        vacana = endingMap[part].vacana;
        break;
      }
    }

    const results = await deriveTinanta(aupadeshika, gana, lakara, 'Kartari', purusha, vacana);
    return results[0] || null;
  }

  async function deriveSubantaFromSpec(stem: string, parts: string[]): Promise<Prakriya | null> {
    type Linga = 'Pum' | 'Stri' | 'Napumsaka';
    type Vibhakti = 'Prathama' | 'Dvitiya' | 'Trtiya' | 'Caturthi' | 'Panchami' | 'Sasthi' | 'Saptami';
    type Vacana = 'Eka' | 'Dvi' | 'Bahu';

    // Map sup endings to vibhakti/vacana
    const supMap: Record<string, { vibhakti: Vibhakti; vacana: Vacana }> = {
      'su': { vibhakti: 'Prathama', vacana: 'Eka' },
      'O': { vibhakti: 'Prathama', vacana: 'Dvi' },
      'au': { vibhakti: 'Prathama', vacana: 'Dvi' },
      'jas': { vibhakti: 'Prathama', vacana: 'Bahu' },
      'am': { vibhakti: 'Dvitiya', vacana: 'Eka' },
      'Ow': { vibhakti: 'Dvitiya', vacana: 'Dvi' },
      'Sas': { vibhakti: 'Dvitiya', vacana: 'Bahu' },
      'wA': { vibhakti: 'Trtiya', vacana: 'Eka' },
      'ByAm': { vibhakti: 'Trtiya', vacana: 'Dvi' },
      'Bis': { vibhakti: 'Trtiya', vacana: 'Bahu' },
      'Ne': { vibhakti: 'Caturthi', vacana: 'Eka' },
      'Nasi': { vibhakti: 'Panchami', vacana: 'Eka' },
      'Nas': { vibhakti: 'Sasthi', vacana: 'Eka' },
      'Ni': { vibhakti: 'Saptami', vacana: 'Eka' },
      'sup': { vibhakti: 'Saptami', vacana: 'Bahu' },
    };

    let vibhakti: Vibhakti = 'Prathama';
    let vacana: Vacana = 'Eka';
    let linga: Linga = 'Pum'; // Default to masculine

    for (const part of parts.slice(1)) {
      if (supMap[part]) {
        vibhakti = supMap[part].vibhakti;
        vacana = supMap[part].vacana;
      }
      // Check for gender markers
      if (part === 'pum' || part === 'm') linga = 'Pum';
      if (part === 'strI' || part === 'f') linga = 'Stri';
      if (part === 'napum' || part === 'n') linga = 'Napumsaka';
    }

    const results = await deriveSubanta(stem, linga, vibhakti, vacana);
    return results[0] || null;
  }
</script>

{#if loading}
  <div class="embedded-prakriya loading">
    <span class="loading-spinner"></span>
    <span class="loading-text">Deriving {spec}...</span>
  </div>
{:else if error}
  <div class="embedded-prakriya error">
    <span class="error-icon">!</span>
    <span class="error-text">{error}</span>
  </div>
{:else if prakriya}
  <div class="embedded-prakriya">
    <DerivationViewer
      {prakriya}
      highlightSutra={highlight}
      expanded={!collapsed}
      mode="simple"
    />
  </div>
{/if}

<style>
  .embedded-prakriya {
    margin: 1rem 0;
  }

  .embedded-prakriya.loading,
  .embedded-prakriya.error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: #fafaf9;
    border: 1px solid #e7e5e4;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }

  .loading-spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid #e7e5e4;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loading-text {
    color: #78716c;
  }

  .error-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    background: #fecaca;
    color: #dc2626;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .error-text {
    color: #dc2626;
  }
</style>
