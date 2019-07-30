import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from './types';
import { transcription } from './modules/transcriptions';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    transcriptions: {
      list: []
    }
  },
  modules: {
    transcription
  }
};

export default new Vuex.Store<IRootState>(store);
