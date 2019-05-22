import Vue from 'vue'
import Vuex from 'vuex'
import transcriptsModule from '@/store/modules/transcriptions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transcriptions: transcriptsModule
  }
})
