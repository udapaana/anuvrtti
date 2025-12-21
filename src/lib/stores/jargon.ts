import { writable } from 'svelte/store';

/**
 * Store for the currently selected jargon term
 * Used to coordinate between TermLink clicks and JargonLookup display
 */
export const selectedTerm = writable<string>('');
