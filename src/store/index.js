import Vue from 'vue'
import Vuex from 'vuex'
import transcriptions from './modules/transcriptions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transcriptions: transcriptions
  }
})
