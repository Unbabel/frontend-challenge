import Vue from 'vue'
import Vuex from 'vuex'
import transcriptsModule from '@/store/modules/transcripts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transcripts: transcriptsModule
  }
})
