/**
 * Read model of the transcription.
 * Using this to prevent secondary effects and to wrap every transcription into single source of truth properties.
 * Getters will be exposed and used across the app, what happens if the api instead of "text" sends "phrase"? We'll just have to change here.
 */

export default class TranscriptionReadModel {
  #id;
  #voice;
  #text;
  #selected;

  constructor({ id, voice, text, selected = false }) {
    this.#id = id;
    this.#voice = voice;
    this.#text = text;
    this.#selected = selected;
  }

  get Id() {
    return this.#id;
  }

  get Voice() {
    return this.#voice;
  }

  get Text() {
    return this.#text;
  }

  get IsSelected() {
    return this.#selected;
  }
}
