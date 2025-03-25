/**
 * Interface for timeline entry properties
 * @interface TimelineEntry
 * @property {string} [url] - Optional URL associated with the timeline entry
 * @property {string} year - The year when the event occurred
 * @property {string} title - The main title of the timeline entry
 * @property {string} subtitle - The subtitle or secondary information
 * @property {string} description - Detailed description of the timeline entry
 */
export interface TimelineEntry {
  url?: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}
