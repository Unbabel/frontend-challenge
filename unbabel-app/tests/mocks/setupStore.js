import Vuex from 'vuex'
import storeConfig from './store-config'

export function setupStore () {
  return new Vuex.Store(storeConfig)
}
