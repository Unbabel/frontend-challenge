import { ActionTree } from 'vuex';
import axios from 'axios';
import { ITranscriptionState, ITranscription } from '../types';
import { IRootState } from '../types';
import { listHasInvalidFields } from '@/utils/array-utils/array-utils';

export const actions: ActionTree<ITranscriptionState, IRootState> = {
  getTranscriptions({ commit }): any {
    axios({
      url: 'https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'
    }).then(
      (response) => {
        const payload: ITranscription[] = response && response.data;
        commit('transcriptionListLoaded', payload);
      },
      (error) => {
        commit('transcriptionListError');
      }
    );
  },

  addTranscription({ commit }, transcriptionList: ITranscription[]): any {
    commit('addTranscription', transcriptionList);
  },

  editTranscription({ commit }: any, payload: any): any {
    commit('editTranscription', payload);
  },

  deleteTranscription({ commit }, transcriptionId: number): any {
    commit('deleteTranscription', transcriptionId);
  },

  uploadTranscriptions({ commit }, transcriptionList: ITranscription[]): any {
    if (
      !transcriptionList ||
      !transcriptionList.length ||
      listHasInvalidFields(transcriptionList)
    ) {
      return commit(
        'uploadError',
        `The list you're trying to upload is empty or has invalid or non saved fields`
      );
    }

    axios
      .post(
        'https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
        transcriptionList
      )
      .then(
        (response) => response,
        (error) => {
          commit(
            'uploadError',
            'An error occurred while uploading transcriptions to the server'
          );
        }
      );
  },

  dismissError({commit}: any, index: number) {
    commit('dismissError', index);
  }
};
