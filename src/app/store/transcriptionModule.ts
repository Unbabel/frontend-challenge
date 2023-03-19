import { createStore } from 'vuex';
import type { Transcription } from '../models/transcription';
import { services, type Services } from '../requests/services';

/**
 * Transcription Vuex Store
 * 
 * Manages and fetchs transcriptions 
 */
export const createTranscriptionModule = () => {
  const $services: Services = services;

  /**
   * Generates empty transcription
   * @param id {number} new transcription ID
   * @returns Promise<Transcription[]>
   */
  function generateNewTranscription(id: number): Transcription {
    return {
      id,
      text: '',
      voice: ''
    };
  }

  return createStore({
    strict: true,
    state: {
      transcriptions: [] as Transcription[]
    },
    getters: {
      transcriptions(state) {
        return state.transcriptions;
      }
    },
    mutations: {
      /**
       * Replaces current saved transcription list
       * @param payload {Transcription[]} transcriptions list replacement
       */
      setTranscriptions(state, payload: Transcription[]) {
        state.transcriptions = payload;
      },
      /**
       * Replaces single transcription from array
       * @param payload {Transcription} single transcriptions to be replaced
       */
      setTranscription(state, payload: Transcription) {
        const index = state.transcriptions.findIndex((t) => t.id === payload.id);
        if (index >= 0) {
          state.transcriptions[index] = payload;
        }
      },
      /**
       * Creates new empty transcription
       */
      createTranscription(state) {
        state.transcriptions.push(generateNewTranscription(state.transcriptions.length + 1));
      },
      /**
       * Deletes transcription entry
       * @param id {number} ID of transcription to be removed
       */
      deleteTranscription(state, id: number) {
        state.transcriptions.splice(
          state.transcriptions.findIndex((t) => t.id === id),
          1
        );
      }
    },
    actions: {
      /**
       * Loads all trasncriptions from API and saves them in store
       */
      async loadTranscriptions(context) {
        return $services.$transcriptionService.getData().then((data) => context.commit('setTranscriptions', data));
      },
      /**
       * Uploads currently loaded transcriptions into API
       */
      async uploadTranscriptions(context) {
        return $services.$transcriptionService.updateData(context.getters.transcriptions);
      },
    }
  });
};
