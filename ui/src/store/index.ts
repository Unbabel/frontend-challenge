import { createStore } from "vuex";
import { API } from "@/utils/api";
import { CONSTANTS } from "@/utils/constants";
import { getDefaultState, createNewListItem } from "@/utils/helpers";
import { ApiDataResult, State, UpdateParams } from "./types";

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
          commit(CONSTANTS.STORE.MUTATIONS.FETCHED_DATA);
          return;
        })
        .finally(() => {
          commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, false);
        });
    },
    [CONSTANTS.STORE.ACTIONS.SEND_DATA]: async ({ commit, state }) => {
      commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, true);

      return await API.sendData(state.list)
        .then(() => {
          // TODO: Add message for success upload instead of setting the data again
          return;
        })
        .finally(() => {
          commit(CONSTANTS.STORE.MUTATIONS.FETCHING_DATA, false);
        });
    },
    [CONSTANTS.STORE.ACTIONS.ADD_ITEM]: ({ commit }) => {
      commit(CONSTANTS.STORE.MUTATIONS.ADD_DATA);
    },
    [CONSTANTS.STORE.ACTIONS.REMOVE_ITEM]: ({ commit }, id) => {
      commit(CONSTANTS.STORE.MUTATIONS.DELETE_ITEM, id);
    },
    [CONSTANTS.STORE.ACTIONS.UPDATE_ITEM]: (
      { commit },
      params: UpdateParams
    ) => {
      commit(CONSTANTS.STORE.MUTATIONS.UPDATE_DATA, params);
    },
  },
  mutations: {
    [CONSTANTS.STORE.MUTATIONS.FETCHING_DATA]: (
      state: State,
      bool: boolean
    ) => {
      state.fetching = bool;
    },
    [CONSTANTS.STORE.MUTATIONS.FETCHED_DATA]: (state: State) => {
      state.fetched = true;
    },
    [CONSTANTS.STORE.MUTATIONS.SET_DATA]: (
      state: State,
      data: ApiDataResult
    ) => {
      const baseList = state.fetched ? [] : state.list;
      state.list = [...baseList, ...data];
    },
    [CONSTANTS.STORE.MUTATIONS.ADD_DATA]: (state: State) => {
      state.list = [...state.list, createNewListItem()];
    },
    [CONSTANTS.STORE.MUTATIONS.DELETE_ITEM]: (state: State, id: number) => {
      state.list = state.list.filter((item) => item.id !== id);
    },
    [CONSTANTS.STORE.MUTATIONS.UPDATE_DATA]: (
      state: State,
      params: UpdateParams
    ) => {
      const { id, value, type } = params;

      state.list = state.list.map((item) => {
        if (item.id === id) {
          item = {
            ...item,
            [type]: value,
          };
        }

        return item;
      });
    },
  },
});
