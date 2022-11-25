import { IData } from '@/utils/Data.model';
import { createStore } from 'vuex';
import { getData, postData } from '../utils/DataAPI';

interface State {
  transcriptions: IData[];
}

export default createStore<State>({
  state: {  
    transcriptions: []
  },
  mutations: {
    async GET_TRANSCRIPTIONS (state) {
      try {
        const res = await getData();
        state.transcriptions = res;
        console.log(res)
      } catch(error) {
        console.log('Fetch error: ', error);
      }
    },
    ADD_TRANSCRIPTIONS (state, transcription: IData) {
      state.transcriptions.push(transcription)
    },
    DELETE_TRANSCRIPTIONS (state, i: number) {
      state.transcriptions = state.transcriptions.filter((_, index) => index !== i);
    },
    async POST_TRANSCRIPTIONS (state) {
      try {
        const res = await postData(state.transcriptions);
        console.log(res);
      } catch(error) {
        console.log('Fetch error: ', error);
      }
    }
  },
  actions: {
    getTranscriptions ({commit}) {
      commit('GET_TRANSCRIPTIONS');
    },
    addTranscriptions ({commit}, transcription: IData) {
      commit('ADD_TRANSCRIPTIONS', transcription);
    },
    deleteTranscriptions ({commit}, transcription: IData) {
      commit('DELETE_TRANSCRIPTIONS', transcription);
    },
    postTranscriptions ({commit}) {
      commit('POST_TRANSCRIPTIONS');
    }
  },
})
