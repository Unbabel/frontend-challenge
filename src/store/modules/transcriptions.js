import transcriptionsApi from '@/api/transcriptionsApi'
import _ from 'lodash'

export default {
  state: {
    transcriptionsData: []
  },
  mutations: {
    modifyListData (state, data) {
      state.transcriptionsData = data
    },
    deleteListItem (state, id) {
      state.transcriptionsData = _.remove(state.transcriptionsData, (arr) => {
        return arr.id !== id
      })
    },
    addListItem (state, data) {
      const listItem = {
        id: _.random(100000000, 100000000000000),
        voice: '',
        text: ''
      }
      state.transcriptionsData.push(listItem)
    }
  },
  actions: {
    fetchListData (ctx) {
      transcriptionsApi.fetchListData().then((res) => {
        ctx.commit('modifyListData', res.data)
        console.log('list data correctly fetched', res)
      }, (err) => {
        console.log('error fetching list data', err)
      })
    },
    addNewData (ctx) {
      ctx.commit('addListItem')
    },
    deleteListData (ctx, id) {
      ctx.commit('deleteListItem', id)
    },
    uploadListData (ctx, data) {
      console.log('list state before save', this.state.transcriptions.transcriptionsData)
      transcriptionsApi.saveListData(this.state.transcriptions.transcriptionsData).then((res) => {
        console.log('list data correctly saved', res)
      }, (err) => {
        console.log('error saving list data', err)
      })
    }
  }
}
