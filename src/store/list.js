import Services from "@/services/index.js";

/* Simple counter variable to simulate the incrementation
of the Id number for each added item and avoid Id duplication
No need to store it in the store  */
let counter = 0;

export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    ADD_ITEM(state, payload) {
      state.list.push(payload);
    },
    DELETE_ITEM(state, payload) {
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
    UPDATE_LIST(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    async GET_LIST({ commit }) {
      const list = await Services.list.GET_LIST();
      commit("UPDATE_LIST", list);
      counter = list.length;
    },
    async POST_LIST({ dispatch }, payload) {
      await Services.list.POST_LIST(payload);
      dispatch("GET_LIST");
    },
    ADD_ITEM({ commit }) {
      let newItem = new Services.listItem.ITEM_TEMPLATE();
      counter++;
      newItem = { ...newItem, id: counter };
      commit("ADD_ITEM", newItem);
    },
    DELETE_ITEM({ commit }, payload) {
      commit("DELETE_ITEM", payload);
    },
    UPDATE_ITEM({ commit, getters }, payload) {
      const updatedList = getters.LIST.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
      commit("UPDATE_LIST", updatedList);
    },
  },
  getters: {
    LIST(state) {
      return state.list;
    },
  },
};
