import { createStore } from "vuex";
import transcriptions from "@/store/modules/transcriptions";

export default new createStore({
  modules: {
    transcriptions,
  },
});
