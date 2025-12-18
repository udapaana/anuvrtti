import { writable } from 'svelte/store';
import type { Script } from '$lib/transliteration';

/** User's preferred display script */
export const displayScript = writable<Script>('devanagari');
