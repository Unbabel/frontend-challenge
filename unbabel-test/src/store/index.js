import { getMessages, uploadMessages } from "@/api/mocky";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function state() {
  return {
    messages: [],
    isFormValid: false,
  };
}

export const mutations = {
  setMessages(state, data) {
    state.messages = data;
  },
  addMessage(state) {
    if (state.messages.length === 0) {
      state.messages.push({
        id: 4,
        voice: "",
        text: "",
      });
    } else {
      const newId = state.messages[state.messages.length - 1].id + 1;
      state.messages.push({
        id: newId,
        voice: "",
        text: "",
      });
    }
  },
  deleteMessage(state, { id }) {
    const index = state.messages.findIndex((message) => message.id === id);
    state.messages.splice(index, 1);
  },
  updateMessageVoice(state, { id, value }) {
    const indexToUpdate = state.messages.findIndex(
      (message) => message.id === id
    );
    state.messages[indexToUpdate].voice = value;
  },
  updateMessageText(state, { id, value }) {
    const indexToUpdate = state.messages.findIndex(
      (message) => message.id === Number(id)
    );
    state.messages[indexToUpdate].text = value;
  },
  checkFormValid(state) {
    const validValues = state.messages.map(
      (message) => message.voice !== "" && message.text !== ""
    );
    const isValid = !validValues.includes(false);
    state.isFormValid = isValid;
  },
};

export const actions = {
  async getMessages({ commit }) {
    const data = await getMessages();
    commit("setMessages", data);
    commit("checkFormValid");
  },
  async uploadMessages({ state }) {
    const status = await uploadMessages(state.messages);
    if (status === 200) {
      alert("Messages uploaded successfully");
    } else {
      alert(
        "An error has occured while uploading the data, please try again later."
      );
    }
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
