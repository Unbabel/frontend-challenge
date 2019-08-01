import { ActionTree } from 'vuex';
import axios from 'axios';
import { ITranscriptionState, ITranscription } from '../types';
import { IRootState } from '../types';

export const actions: ActionTree<ITranscriptionState, IRootState> = {
  fetchData({ commit }): any {
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

  addTranscription({ commit }): any {
    commit('addTranscription');
  },

  editTranscription({ commit }: any, payload: any): any {
    commit('editTranscription', payload);
  },

  deleteTranscription({ commit }, transcriptionId: number): any {
    commit('deleteTranscription', transcriptionId);
  },

  uploadTranscriptions({ commit }, transcriptionList): any {
    axios
      .post(
        'https://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
        transcriptionList
      )
      .then((response) => response, (error) => commit('uploadError'));

    commit('uploadTranscriptions');
  }
};
