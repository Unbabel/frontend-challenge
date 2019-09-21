import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transcriptions: []
  },
  mutations: {
    setTranscriptions(state, transcriptions) {
      state.transcriptions = transcriptions;
    }
  },
  actions: {
    getTranscriptions(context) {
      fetch(process.env.VUE_APP_TRANSCRIPTIONS_URL)
        .then(res => res.json())
        .then(items => {
          context.commit("setTranscriptions", items);
        });
    },
    saveTranscriptions(context) {
      fetch(process.env.VUE_APP_TRANSCRIPTIONS_URL, {
        method: "POST",
        body: JSON.stringify(context.state.transcriptions)
      });
    }
  }
});
