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

const state = {
  transcriptions: [],
  state: STATE.INITIAL,
  error: false
};

const getters = {
  transcriptions: state => state.transcriptions,
  state: state => state.state,
  error: state => state.error
};

const actions = {
  async [ACTIONS.LOAD]({ commit, dispatch }) {
    try {
      const transcriptions = await API.transcriptions.load();
      dispatch(MUTATIONS.LOAD);
      return commit(MUTATIONS.LOADING_SUCCESS, transcriptions);
    } catch (e) {
      return commit(MUTATIONS.LOADING_ERROR, e, ERRORS.LOADING);
    }
  },
  async [ACTIONS.SAVE]({ commit, dispatch, state }) {
    try {
      await API.transcriptions.save(state.transcriptions);
      dispatch(MUTATIONS.SAVE);
      return commit(MUTATIONS.SAVING_SUCCESS);
    } catch (e) {
      return commit(MUTATIONS.SAVING_ERROR, e, ERRORS.SAVING);
    }
  },
  [ACTIONS.ADD]({ commit }) {
    commit(MUTATIONS.ADD);
  },
  [ACTIONS.DELETE]({ commit }, id) {
    commit(MUTATIONS.UPDATE, id);
  },
  [ACTIONS.UPDATE]({ commit }, { id, key, value }) {
    commit(MUTATIONS.DELETE, { id, key, value });
  }
};

const mutations = {
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
    state.transcriptions = state.transcriptions.filter(item => item.id !== id);
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
};

export default {
  state,
  getters,
  actions,
  mutations
};
