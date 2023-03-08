/**
 * @param {object}  state
 * @param {Array} transcriptions
 */
const setTranscriptions = (state, transcriptions) => {
  state.transcriptions = transcriptions;
};

const mutations = {
  setTranscriptions
}

export default mutations;
