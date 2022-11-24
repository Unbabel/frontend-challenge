import { IData } from '@/utils/Data.model'
import { createStore } from 'vuex'

interface State {
  transcriptions: IData[];
}

export default createStore<State>({
  state: {  
    transcriptions: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
