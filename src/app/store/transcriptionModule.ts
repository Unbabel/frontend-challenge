import { createStore } from 'vuex';
import type { Transcription } from '../models/transcription';
import { inject } from 'vue';
import type { Services } from '../requests/services';

export const createTranscriptionModule = () => {
  let $services!: Services;

  function setupStore() {
    $services = inject('services')!;
  }

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
      setTranscriptions(state, payload: Transcription[]) {
        state.transcriptions = payload;
      },
      setTranscription(state, payload: Transcription) {
        const index = state.transcriptions.findIndex((t) => t.id === payload.id);
        if (index >= 0) {
          state.transcriptions[index] = payload;
        }
      },
      createTranscription(state) {
        state.transcriptions.push(generateNewTranscription(state.transcriptions.length + 1));
      },
      deleteTranscription(state, id: number) {
        state.transcriptions.splice(
          state.transcriptions.findIndex((t) => t.id === id),
          1
        );
      }
    },
    actions: {
      async loadTranscriptions(context) {
        return $services.$transcriptionService.getData().then((data) => context.commit('setTranscriptions', data));
      },
      async uploadTranscriptions(context) {
        console.log(context);
        return $services.$transcriptionService.updateData(context.getters.transcriptions);
      },
      setup() {
        setupStore();
      }
    }
  });
};
