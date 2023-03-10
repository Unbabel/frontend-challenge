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
    const response = await api.uploadTranscriptions(ctx.state.transcriptions);
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
 const createTranscription = async ({ commit }) => {
  commit("createTranscription");
};

/**
 * @param   {Store}        context
 * @param   {Store.commit} context.commit
 *
 * @returns {boolean}
 */
 const updateTranscriptionTitle = async ({ commit }, transcription) => {
  commit("updateTranscriptionTitle", transcription);
};

/**
 * @param   {Store}        context
 * @param   {Store.commit} context.commit
 *
 * @returns {boolean}
 */
 const updateTranscriptionDescription = async ({ commit }, transcription) => {
  commit("updateTranscriptionDescription", transcription);
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
  createTranscription,
  updateTranscriptionTitle,
  updateTranscriptionDescription
};

export default actions;
