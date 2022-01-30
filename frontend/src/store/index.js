import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      rows: [],
      isDataLoaded: false
    },
    mutations: {
      setRows (state, rows) {
        state.rows = rows
        state.isDataLoaded = true
      },
      addRow (state, row) {
        state.rows.push(row)
      },
      removeRowById (state, id) {
        state.rows = state.rows.filter(i => i.id !== id)
      }
    },
    actions: {
      setRows (context, rows) {
        context.commit('setRows', rows)
      },
      addRow (context, row) {
        context.commit('addRow', row)
      },
      removeRowById (context, id) {
        context.commit('removeRowById',id)
      }
    }
  })