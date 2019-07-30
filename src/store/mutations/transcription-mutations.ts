import { MutationTree } from 'vuex';
import { ITranscriptionState, ITranscription } from '../types';

export const mutations: MutationTree<ITranscriptionState> = {
  transcriptionListLoaded(state, payload: ITranscription[]) {
    state.transcriptionList = payload;
  },

  transcriptionListError(state) {
    state.transcriptionList = [];
  }
};
