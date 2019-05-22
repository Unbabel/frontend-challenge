import Vue from 'vue'

const transcriptIndex = (state, id) => {
  return state.transcripts.findIndex(item => {
    return item.id === id
  })
}

export default {
  saveTranscripts (state, value) {
    if (state.transcripts.length === 0) {
      Vue.set(state, 'transcripts', [
        ...value
      ])
    } else {
      value.map(item => {
        //  Weak, but avoids pushing an item with the same ID already
        if (transcriptIndex(state, item.id) < 0) {
          state.transcripts.push(item)
        }
      })
    }
  },
  addItem (state, data) {
    //  Just a random ID > 3
    data.id = Math.floor(Math.random() * 1000) + 4

    data.selected = false

    state.transcripts.push(data)
  },
  updateField (state, data) {
    let indexPos = transcriptIndex(state, data.id)
    if (indexPos >= 0) {
      state.transcripts[indexPos][data.field] = data.value
    }
  },
  removeItem (state, data) {
    let indexPos = transcriptIndex(state, data.id)
    if (indexPos >= 0) {
      state.transcripts.splice(indexPos, 1)
    }
  }
}
