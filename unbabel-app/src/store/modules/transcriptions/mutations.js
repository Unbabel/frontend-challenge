import Vue from 'vue'

export default {
  saveTranscripts (state, value) {
    Vue.set(state, 'transcripts', [...value])
  }
}
