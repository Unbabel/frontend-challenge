import Vue from 'vue'

const transcriptIndex = (state, id) => {
  return state.transcripts.findIndex(item => {
    return item.id === id
  })
}

export default {
  saveTranscripts (state, value) {
    Vue.set(state, 'transcripts', [...value])
  },
  toggleSelection (state, data) {
    let indexPos = transcriptIndex(state, data.id)

    if (indexPos >= 0) {
      state.transcripts[indexPos].selected = data.selected
    }
  },
  updateField (state, data) {
    let indexPos = transcriptIndex(state, data.id)

    if (indexPos >= 0) {
      state.transcripts[indexPos][data.field] = data.value
    }
  }
}
