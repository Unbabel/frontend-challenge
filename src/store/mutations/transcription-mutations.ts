import { MutationTree } from 'vuex';
import { ITranscriptionState, ITranscription } from '../types';

export const mutations: MutationTree<ITranscriptionState> = {
  transcriptionListLoaded(state, payload: ITranscription[]) {
    state.transcriptionList = payload;
  },

  transcriptionListError(state) {
    state.transcriptionList = [];
  },

  addTranscription(state) {
    const newTranscription: ITranscription = {
      id: new Date().getUTCMilliseconds(),
      voice: '',
      text: ''
    };

    state.transcriptionList.push(newTranscription);
  },

  deleteTranscription(state, transcriptionId) {
    const transcriptionToDelete = state.transcriptionList.find((transcription) => transcription.id === transcriptionId);

    if (transcriptionToDelete) {
      const index = state.transcriptionList.indexOf(transcriptionToDelete);

      if (index > -1) {
        state.transcriptionList.splice(index, 1);
      }
    }
  }
};
