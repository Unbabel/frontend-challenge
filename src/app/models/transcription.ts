/**
 * Transcription Data Model
 */
export interface Transcription {
  /**
   * Incremental transcription ID
   */
  id: number;

  /**
   * Transcription voice title
   */
  voice: string;

  /**
   * Transcription description
   */
  text: string;
}
