import store from "../state/store";

export const topBarRouteActions = {
  transcriptions: [
    {
      icon: "/src/assets/upload.svg",
      callback: () => {
        const transcriptions = store.getters.getListItems;
        store.dispatch("sendTranscriptions", transcriptions);
      },
    },
    {
      icon: "src/assets/fetch-document.svg",
      callback: () => {
        store.dispatch("fetchTranscriptions");
      },
    },
  ],
  "not-found": [],
};
