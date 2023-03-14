import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      messages: [],
    };
  },
  mutations: {
    async setMessages(state, data) {
      state.messages = data;
    },
    addMessage(state) {
      const newId = state.messages[state.messages.length - 1].id + 1;
      state.messages.push({
        id: newId,
        voice: "",
        messages: "",
      });
    },
    deleteMessage(state, id) {
      const index = state.messages.findIndex((message) => message.id === id);
      state.messages.splice(index, 1);
    },
  },
  actions: {
    async getMessages({ commit }) {
      try {
        const res = await fetch(
          "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c"
        );
        const data = await res.json();
        commit("setMessages", data);
      } catch (error) {
        alert("An error has occured, please try again later.");
        commit("setMessages", []);
      }
    },
  },
  getters: {},
  modules: {},
});
