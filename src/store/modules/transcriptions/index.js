import API from "@/internals/api/sdk";
import { getNextId } from "@/internals/utils";

import { STATUS, ACTIONS, MUTATIONS, ERRORS } from "./constants";

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
    status: STATUS.INITIAL,
    error: false
  },
  getters: {
    transcriptions: state => state.transcriptions,
    status: state => state.status,
    error: state => state.error
  },
  actions: {
    async [ACTIONS.LOAD]({ commit }) {
      commit(MUTATIONS.LOAD);
      try {
        const transcriptions = await API.transcriptions.load();
        return commit(MUTATIONS.LOADING_SUCCESS, transcriptions.data);
      } catch (error) {
        commit(MUTATIONS.LOADING_ERROR, ERRORS.LOADING);
      }
    },
    async [ACTIONS.SAVE]({ commit, state }) {
      if (state.transcriptions.length === 0) {
        return commit(MUTATIONS.SAVING_ERROR, ERRORS.NO_CHANGES);
      } else {
        commit(MUTATIONS.SAVE);
        try {
          await API.transcriptions.save(state.transcriptions);
          return commit(MUTATIONS.SAVING_SUCCESS, state.transcriptions);
        } catch (error) {
          commit(MUTATIONS.SAVING_ERROR, ERRORS.SAVING);
        }
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
      state.status = STATUS.LOADING;
      state.error = false;
    },
    [MUTATIONS.LOADING_SUCCESS](state, transcriptions) {
      state.transcriptions = transcriptions;
      state.status = STATUS.LOADED;
    },
    [MUTATIONS.LOADING_ERROR](state, error) {
      state.status = STATUS.ERROR;
      state.error = error;
    },

    [MUTATIONS.SAVE](state) {
      state.status = STATUS.SAVING;
    },
    [MUTATIONS.SAVING_SUCCESS](state, transcriptions) {
      state.status = STATUS.SAVED;
      state.transcriptions = transcriptions;
    },
    [MUTATIONS.SAVING_ERROR](state, error) {
      state.status = STATUS.ERROR;
      state.error = error;
    }
  }
};

export default transcriptionsModule;
