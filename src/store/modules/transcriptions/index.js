import API from "@/internals/api/sdk";
import { getNextId } from "@/internals/utils";

import { STATE, ACTIONS, MUTATIONS, ERRORS } from "./constants";

/**
 * Get a new Transcripiton object
 * @param list - need the full list to extract the last used id
 * @returns {{voice: string, id: number, text: string}}
 */
const getNewTranscription = list => {
  const id = getNextId(list);

  return {
    id,
    voice: "",
    text: ""
  };
};

const transcriptionsModule = {
  namespaced: true,
  state: {
    transcriptions: [],
    state: STATE.INITIAL,
    error: false
  },
  getters: {
    transcriptions: state => state.transcriptions,
    state: state => state.state,
    error: state => state.error
  },
  actions: {
    [ACTIONS.LOAD]({ commit }) {
      commit(MUTATIONS.LOAD);
      try {
        return commit(MUTATIONS.LOADING_SUCCESS, API.transcriptions.load());
      } catch (error) {
        console.error(error);
        commit(MUTATIONS.LOADING_ERROR, ERRORS.LOADING);
      }
    },
    async [ACTIONS.SAVE]({ commit, state }) {
      commit(MUTATIONS.SAVE);
      try {
        API.transcriptions.save(state.transcriptions);
        return commit(MUTATIONS.SAVING_SUCCESS);
      } catch (error) {
        console.error(error);
        commit(MUTATIONS.SAVING_ERROR, ERRORS.SAVING);
      }
    }
  },
  mutations: {
    [MUTATIONS.ADD](state) {
      state.transcriptions = [
        ...state.transcriptions,
        getNewTranscription(state.transcriptions)
      ];
    },
    [MUTATIONS.UPDATE](state, { id, key, value }) {
      const index = state.indexOf(item => item.id === id);
      if (index >= 0) {
        state.transcriptions[index][key] = value;
      }
    },
    [MUTATIONS.DELETE](state, id) {
      state.transcriptions = state.transcriptions.filter(
        item => item.id !== id
      );
    },

    [MUTATIONS.LOAD](state) {
      state.state = STATE.LOADING;
    },
    [MUTATIONS.LOADING_SUCCESS](state, transcriptions) {
      state.transcriptions = transcriptions;
      state.state = STATE.LOADED;
    },
    [MUTATIONS.LOADING_ERROR](state, error) {
      state.state = STATE.ERROR;
      state.error = error;
    },

    [MUTATIONS.SAVE](state) {
      state.state = STATE.SAVING;
    },
    [MUTATIONS.SAVING_SUCCESS](state) {
      state.state = STATE.SAVED;
    },
    [MUTATIONS.SAVING_ERROR](state, error) {
      state.state = STATE.ERROR;
      state.error = error;
    }
  }
};

export default transcriptionsModule;
