/**
 * @param {object}  state
 * @param {Array} transcriptions
 */
const setTranscriptions = (state, transcriptions) => {
  state.transcriptions = transcriptions;
};

/**
 * @param {object}  state
 * @param {object} transcription
 * @param {number} transcription.id
 * @param {string} transcription.voice
 * @param {string} transcription.text
 */
 const removeTranscription = (state, transcription) => {
  state.transcriptions = state.transcriptions.filter(element => element.id !== transcription.id);
};

const mutations = {
  setTranscriptions,
  removeTranscription
}

export default mutations;
