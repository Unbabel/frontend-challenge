import { createStore } from "vuex";
import { API } from "@/utils/api";
import { CONSTANTS } from "@/utils/constants";
import { ApiDataResult, State } from "./types";

const getDefaultState = (): State => ({
  fetched: false,
  fetching: false,
  list: [],
});

export default createStore({
  state: () => getDefaultState(),
  getters: {
    isFetched: (state) => state.fetched,
    isFetching: (state) => state.fetching,
    list: (state) => state.list,
  },
  actions: {
    [CONSTANTS.STORE.ACTIONS.FETCH_DATA]: async ({ commit }) => {
      commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, true);

      return await API.getData()
        .then((data: ApiDataResult) => {
          commit(CONSTANTS.STORE.MUTATIONS.SET_DATA, data);
          return;
        })
        .finally(() => {
          commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, false);
        });
    },
    [CONSTANTS.STORE.ACTIONS.SEND_DATA]: async ({ commit, state }) => {
      commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, true);

      return await API.sendData(state.list)
        .then((data: ApiDataResult) => {
          commit(CONSTANTS.STORE.MUTATIONS.SET_DATA, data);
          return;
        })
        .finally(() => {
          commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, false);
        });
    },
  },
  mutations: {
    [CONSTANTS.STORE.MUTATIONS.FETCHING_DATA]: (
      state: State,
      bool: boolean
    ) => {
      state.fetching = bool;
    },
    [CONSTANTS.STORE.MUTATIONS.SET_DATA]: (
      state: State,
      data: ApiDataResult
    ) => {
      state.list = [...data];
    },
  },
});
