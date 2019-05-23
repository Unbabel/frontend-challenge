import Vue from 'vue'

const dummyData = [
  {
    id: 1,
    voice: 'foo',
    text: 'bar'
  },
  {
    id: 2,
    voice: 'bar',
    text: 'foo'
  }
]

const transcriptsModule = {
  namespaced: true,
  state: {
    transcripts: []
  },
  actions: {
    GET_TRANSCRIPTS () {
      return { data: dummyData }
    },
    PUSH_TRANSCRIPTS ({ }) {
      return { data: dummyData }
    }
  },
  mutations: {
    saveItems (state, value) {
      Vue.set(state, 'transcripts', [
        ...value
      ])
    },
    addItem (state, data) {
      data.id = 10
      state.transcripts.push(data)
    }
  },
  getters: {
    transcripts: state => { return state.transcripts }
  }
}

export default {
  modules: {
    transcriptions: transcriptsModule
  }
}
