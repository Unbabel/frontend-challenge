import state from "@/store/modules/transcriptions/state.js";
import getters from "@/store/modules/transcriptions/getters.js";
import mutations from "@/store/modules/transcriptions/mutations.js";
import actions from "@/store/modules/transcriptions/actions.js";

export default {
  state: state(),
  mutations,
  actions,
  getters,
};
