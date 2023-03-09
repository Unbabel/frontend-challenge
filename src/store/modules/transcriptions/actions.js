import api from "@/services/api";

/**
 * @param   {Store}        context
 * @param   {Store.commit} context.commit
 *
 * @returns {boolean}
 */
const fetchTranscriptions = async ({ commit }) => {
  try {
    const { data } = await api.fetchTranscriptions();
    commit("setTranscriptions", data);
} catch (error) {
  // handle error
}
};

/**
 * @param   {Store}                 context
 *
 * @returns {object}
 */
const uploadTranscriptions = async (ctx) => {
  try {
    const response = await api.uploadTranscription(ctx.state.transcriptions);
    return response;
  } catch (error) {
    // handle error
  }
};

/**
 * @param   {Store}        context
 * @param   {Store.commit} context.commit
 *
 * @returns {boolean}
 */
 const removeTranscription = async ({ commit }, transcription) => {
    commit("removeTranscription", transcription);
 };
 
const actions = {
  removeTranscription,
  fetchTranscriptions,
  uploadTranscriptions,
};

export default actions;
