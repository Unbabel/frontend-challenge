import { MutationTree } from 'vuex';
import { ITranscriptionState, ITranscription, IChangeObject } from '../types';
import { mergeArrays } from '@/utils/array-utils/array-utils';

export const mutations: MutationTree<ITranscriptionState> = {
  transcriptionListLoaded(state, payload: ITranscription[]) {
    return state.transcriptionList && state.transcriptionList.length
      ? (state.transcriptionList = mergeArrays(
          state.transcriptionList,
          payload
        ))
      : (state.transcriptionList = payload || []);
  },

  transcriptionListError(state) {
    state.transcriptionList = [];
    state.errors.push('An error occurred while getting transcriptions from the server');

    return;
  },

  addTranscription(state) {
    const newTranscription: ITranscription = {
      id: new Date().getUTCMilliseconds(),
      voice: '',
      text: ''
    };

    state.transcriptionList.push(newTranscription);
  },

  editTranscription(
    state: ITranscriptionState,
    changeObject: IChangeObject
  ): any {
    const index = state.transcriptionList.findIndex(
      (transcription: ITranscription) => transcription.id === changeObject.id
    );

    return state.transcriptionList[index][changeObject.field] = changeObject.newValue;
  },

  deleteTranscription(state, transcriptionId) {
    const transcriptionToDelete = state.transcriptionList.find(
      (item: ITranscription) => item.id === transcriptionId
    );

    if (transcriptionToDelete) {
      const index = state.transcriptionList.indexOf(transcriptionToDelete);

      if (index > -1) {
        state.transcriptionList.splice(index, 1);
      }
    }
  },

  uploadError(state) {
    return state.errors.push('An error occurred while uploading transcriptions to the server');
  }
};
