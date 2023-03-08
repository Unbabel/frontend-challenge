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
    console.log('data', data)
    console.log('commit', commit)
    commit("setTranscriptions", data);
} catch (error) {
  // handle error
}
};

/**
 * @param   {Store}          context
 * @param   {Store.dispatch} context.dispatch
 * @param   {Store.getters}  context.getters
 * @param   {object}         payload
 * @param   {number}         payload.id
 * @param   {string}         payload.voice
 * @param   {string}         payload.text
 *
 * @returns {object}
 */
const uploadTranscription = async ({ id, voice, text }) => {
  const response = await api.uploadTranscription({ id, voice, text });

  return response;
};

const actions = {
  fetchTranscriptions,
  uploadTranscription,
};

export default actions;
