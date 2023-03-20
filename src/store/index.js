import { createStore } from "vuex";
import { api } from "@/utils/api.js";
import { getUniqueID } from "@/utils/helpers.js";

export default createStore({
  state: {
    transcriptionsArray: [],
    currentLoadingButton: ``,
  },
  getters: {},
  mutations: {
    updateTranscriptions(state, updatedArr) {
      state.transcriptionsArray = [...updatedArr];
    },
    updateCurrentLoadingButton(state, buttonId) {
      state.currentLoadingButton = buttonId;
    },
  },
  actions: {
    fetchTranscriptionsAction({ commit }) {
      api
        .get(api.data_source_url)
        .then((data) => {
          let editToDataArr = JSON.parse(JSON.stringify(data));
          editToDataArr = editToDataArr.map((item, index) => {
            if (index !== editToDataArr.length) {
              item["isEdit"] = false;
            }
            return item;
          });
          commit("updateTranscriptions", editToDataArr);
          commit("updateCurrentLoadingButton", ``);
        })
        .catch((e) => {
          console.log("ERROR", e);
        });
    },
    postTranscriptionsAction({ commit, state }) {
      // import commit if and when needed
      let currentArrayOfTranscription = JSON.parse(
        JSON.stringify(state.transcriptionsArray)
      );
      currentArrayOfTranscription = currentArrayOfTranscription.map((item) => {
        delete item["isEdit"];
        return item;
      });
      console.log("DATA POSTED TO MOCKY", currentArrayOfTranscription);
      api
        .post(currentArrayOfTranscription, api.data_source_url)
        .then((data) => {
          let editToDataArr = JSON.parse(JSON.stringify(data));
          editToDataArr = editToDataArr.map((item, index) => {
            if (index !== editToDataArr.length) {
              item["isEdit"] = false;
            }
            return item;
          });
          console.log("returned data from mocky after post", data);
          // if MOCKY accepted post and updated the list on Backed, we would update the transacription in store to the data returned by mocky after successful post like below
          // commit("updateTranscriptions", editToDataArr);
          commit("updateCurrentLoadingButton", ``);
          setTimeout(() => {
            alert("POST SUCCESS DATA IN CONSOLE");
          }, 500);
        })
        .catch((e) => {
          console.log("ERROR", e);
        });
    },
    addNewRowToTranscriptionsAction({ commit, state }) {
      let currentArrayOfTranscription = JSON.parse(
        JSON.stringify(state.transcriptionsArray)
      );
      currentArrayOfTranscription.push({
        id: getUniqueID(),
        isEdit: true,
        voice: "Title",
        text: "Content",
      });
      commit("updateTranscriptions", currentArrayOfTranscription);
    },
    deleteRowTranscriptionsAction({ commit, state }, itemIdToDelete) {
      let currentArrayOfTranscription = JSON.parse(
        JSON.stringify(state.transcriptionsArray)
      );
      let indexToDelete = currentArrayOfTranscription.findIndex(
        (i) => i.id === itemIdToDelete
      );
      currentArrayOfTranscription.splice(indexToDelete, 1);
      setTimeout(() => {
        commit("updateTranscriptions", currentArrayOfTranscription);
        commit("updateCurrentLoadingButton", ``);
      }, 500);
    },
    editRowTranscriptionsAction({ commit, state }, itemData) {
      let currentArrayOfTranscription = JSON.parse(
        JSON.stringify(state.transcriptionsArray)
      );
      let itemIndex = currentArrayOfTranscription.findIndex(
        (i) => i.id === itemData.id
      );
      currentArrayOfTranscription[itemIndex] = JSON.parse(
        JSON.stringify(itemData)
      );
      commit("updateTranscriptions", currentArrayOfTranscription);
    },
  },
  modules: {},
});
