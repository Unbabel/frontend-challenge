import Services from "@/services/index.js";
export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  mutations: {
    ADD_ITEM(state, payload) {
      console.log(state, payload);
      state.list.push(payload);
    },
    DELETE_ITEM(state, payload) {
      console.log(state, payload);
      state.list = state.list.filter((item) => item.id !== payload.id);
    },
    UPDATE_ITEM(state, payload) {
      console.log(state, payload);
    },
    UPDATE_LIST(state, payload) {
      console.log(state, payload);
      state.list = payload;
    },
  },
  actions: {
    async GET_LIST({ commit }) {
      const list = await Services.list.GET_LIST();
      commit("UPDATE_LIST", list);
    },
    async POST_LIST({ dispatch }, payload) {
      await Services.list.POST_LIST(payload);
      dispatch("GET_LIST");
    },
    ADD_ITEM({ commit, getters }) {
      let newItem = Services.listItem.ITEM_TEMPLATE;
      //Add logic to find for missing id and not have duplicates
      newItem = { ...newItem, id: getters.LIST.length + 1 };
      commit("ADD_ITEM", newItem);
    },
    DELETE_ITEM({ commit }, payload) {
      console.log("delete", payload);
      commit("DELETE_ITEM", payload);
    },
    UPDATE_ITEM({ commit }, payload) {
      console.log(commit, payload);
    },
  },
  getters: {
    LIST(state) {
      return state.list;
    },
  },
};
