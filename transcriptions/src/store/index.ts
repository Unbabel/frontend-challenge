import { createStore } from "vuex";
import { transcriptionActions, transcriptionMutations } from "./transcriptions";

const store = createStore({
  state: {
    transcriptions: {
      data: [],
      isFetching: false,
      isUpdating: false,
      isAdding: false,
      isRemoving: false,
      isChanged: false,
      error: null,
    },
  },
  getters: {},
  mutations: transcriptionMutations,
  actions: transcriptionActions,
  modules: {},
});

export function useStore() {
  return store;
}
