/**
 * @param {object}  state
 * @param {Array} transcriptions
 */
const setTranscriptions = (state, transcriptions) => {
  state.transcriptions = transcriptions;
};

/**
 * @param {object}  state
 */
const createNewTranscription = (state) => {
    state.transcriptions.push({
      id: state.transcriptions.at(-1).id++,
      voice: '',
      text: ''
    })
};

/**
 * @param {object}  state
* @param {object} transcription
 * @param {number} transcription.id
 * @param {string} transcription.voice
 * @param {string} transcription.text
 */
 const updateTranscriptionTitle = (state, transcription) => {
  const index = state.transcriptions.findIndex(element => element.id === transcription.id);
  if (index > -1) {
    state.transcriptions[index] = { ...transcription, voice: transcription.voice }
  }
};

/**
 * @param {object}  state
* @param {object} transcription
 * @param {number} transcription.id
 * @param {string} transcription.voice
 * @param {string} transcription.text
 */
const updateTranscriptionDescription = (state, transcription) => {
  const index = state.transcriptions.findIndex(element => element.id === transcription.id);
  if (index > -1) {
    state.transcriptions[index] = { ...transcription, text: transcription.text }
  }
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
  removeTranscription,
  createNewTranscription,
  updateTranscriptionTitle,
  updateTranscriptionDescription
}

export default mutations;
