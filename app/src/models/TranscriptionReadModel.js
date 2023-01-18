/**
 * Read model of the transcription. Will serve has an helper for View Model
 * Using this to prevent secondary effects and to wrap every transcription into single source of truth properties.
 * Getters will be exposed and used across the app, what happens if we want to append, prefix or capitalize something instead of using raw values? We'll just have to change here.
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
