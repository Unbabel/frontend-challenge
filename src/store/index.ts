import { createStore } from 'vuex'
import { State } from '@/interfaces'
import mutations from './mutations'
import actions from './actions'

const store = createStore<State>({
    state: {
        notes: [],
        loading: false,
        toast: {
            status: 'none',
            message: ''
        }
    },
    mutations,
    actions
})

export default store
