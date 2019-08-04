import { MutationTree } from 'vuex';
import { ITranscriptionState, ITranscription, IChangeObject } from '../types';
import {
  mergeArrays,
  listHasInvalidFields
} from '@/utils/array-utils/array-utils';

export const mutations: MutationTree<ITranscriptionState> = {
  transcriptionListLoaded(state, payload: ITranscription[]) {
    if (state.transcriptionList && state.transcriptionList.length) {
      state.transcriptionList = mergeArrays(state.transcriptionList, payload);
    } else {
      state.transcriptionList = payload || [];
    }
  },

  transcriptionListError(state) {
    const errorMessage =
      'An error occurred while getting transcriptions from the server';

    state.errors.push(errorMessage);

    setTimeout(() => {
      state.errors = [];
    }, 3000);
  },

  addTranscription(state) {
    const newTranscription: ITranscription = {
      id: new Date().getUTCMilliseconds(),
      voice: '',
      text: ''
    };

    if (!listHasInvalidFields(state.transcriptionList)) {
      state.transcriptionList.push(newTranscription);
    } else {
      const errorMessage = 'Please fill the fields before adding a new row';

      return setError(state, errorMessage);
    }
  },

  editTranscription(
    state: ITranscriptionState,
    changeObject: IChangeObject
  ): any {
    if (!changeObject) {
      const errorMessage = 'No change was made';

      return setError(state, errorMessage);
    }

    if (!changeObject.newValue) {
      const errorMessage = `The ${changeObject.field} field is invalid`;

      setError(state, errorMessage);
    }

    const index = state.transcriptionList.findIndex(
      (transcription: ITranscription) => transcription.id === changeObject.id
    );

    return (state.transcriptionList[index][changeObject.field] =
      changeObject.newValue);
  },

  deleteTranscription(state, transcriptionId) {
    const transcriptionToDelete = state.transcriptionList.find(
      (item: ITranscription) => item.id === transcriptionId
    );

    let errorMessage: string;

    if (transcriptionToDelete) {
      const index = state.transcriptionList.indexOf(transcriptionToDelete);

      if (index > -1) {
        return state.transcriptionList.splice(index, 1);
      } else {
        errorMessage = 'An error occurred while deleting the transcription';

        return setError(state, errorMessage);
      }
    }

    errorMessage = 'An error occurred while deleting the transcription';

    return setError(state, errorMessage);
  },

  uploadError(state, errorMessage: string) {
    if (!errorMessage) {
      errorMessage =
        'A problem occurred while uploading, please try again in a few minutes';
    }

    return setError(state, errorMessage);
  },

  dismissError(state, index) {
    return state.errors.splice(index, 1);
  }
};

// Helper method to handle error settling
export function setError(state: ITranscriptionState, message: string) {
  state.errors.push(message);

  setTimeout(() => {
    state.errors = [];
  }, 3000);
}
