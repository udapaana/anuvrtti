/**
 * Types for reference data structures
 */

export interface ReferenceCategory {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  /** Related learning path IDs */
  relatedPaths: string[];
}

export interface TableCell {
  text: string;
  /** If true, render as Sanskrit/Devanagari */
  sanskrit?: boolean;
  /** Optional tooltip */
  tooltip?: string;
  /** Cell spans multiple columns */
  colspan?: number;
  /** Cell spans multiple rows */
  rowspan?: number;
  /** Optional CSS class */
  class?: string;
}

export interface ReferenceTable {
  id: string;
  title: string;
  titleSanskrit?: string;
  description?: string;
  headers: TableCell[];
  /** Optional row headers (first column) */
  rowHeaders?: TableCell[];
  rows: TableCell[][];
  /** Optional footer notes */
  notes?: string[];
}

export interface ReferenceSection {
  id: string;
  title: string;
  titleSanskrit?: string;
  description?: string;
  tables?: ReferenceTable[];
  /** Free-form content (markdown-like) */
  content?: string;
  /** Sub-sections */
  sections?: ReferenceSection[];
}

export interface ReferencePage {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  category: ReferenceCategory;
  sections: ReferenceSection[];
}
