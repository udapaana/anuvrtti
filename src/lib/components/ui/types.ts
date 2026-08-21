/*
  Shared shapes for the UI kit. They live outside the components so a page can
  type its data without importing a .svelte file for a type alone.
*/

/** One place in an ordered list: a reader chapter, a lesson, a path category. */
export type SpineItem = {
  id: string;
  /** The Devanagari or primary label. */
  label: string;
  /** The gloss under it. */
  sub?: string;
  /** A count shown beside the gloss. */
  count?: number;
  /** Marks the item complete — takes the done accent. */
  done?: boolean;
  href?: string;
};

/** One cell of a paradigm or matrix. */
export type Cell = {
  text: string;
  /** Attested / reachable cells are clickable and take the accent. */
  live?: boolean;
  title?: string;
};

/** One option of a segmented control. */
export type Segment = {
  id: string;
  label: string;
  /** Devanagari labels get the Devanagari face. */
  deva?: boolean;
  title?: string;
};
