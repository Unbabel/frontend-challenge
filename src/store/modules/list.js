import listApi from '@/api/listApi'
import _ from 'lodash'

export default {
  state: {
    listData: null
  },
  mutations: {
    modifyListData (state, data) {
      state.listData = data
    },
    deleteListItem (state, id) {
      state.listData = _.remove(state.listData, (arr) => {
        return arr.id !== id
      })
    },
    addListItem (state, data) {
      const listItem = {
        id: _.random(100000000, 100000000000000),
        voice: '',
        text: ''
      }
      state.listData.push(listItem)
    }
  },
  actions: {
    fetchListData (ctx) {
      listApi.fetchListData().then((res) => {
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
      console.log('list state before save', this.state.list.listData)
      listApi.saveListData(this.state.list.listData).then((res) => {
        console.log('list data correctly saved', res)
      }, (err) => {
        console.log('error saving list data', err)
      })
    }
  }
}
