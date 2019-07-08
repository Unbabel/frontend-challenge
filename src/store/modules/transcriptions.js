import transcriptionsApi from '@/api/transcriptionsApi'
import appConfig from '@/config'
import _ from 'lodash'

export default {
  state: {
    transcriptionsData: [],
    errorMessage: ''
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
    },
    displayError (state, err) {
      state.errorMessage = err

      window.setTimeout(() => {
        state.errorMessage = ''
      }, appConfig.defaultNotificationDisplayTime)
    }
  },
  actions: {
    fetchTranscriptionsData (ctx) {
      transcriptionsApi.fetchTranscriptions().then((res) => {
        ctx.commit('modifyListData', res.data)
      }, (err) => {
        if (err) {
          ctx.commit('displayError', 'An error occured while retrieving the transcriptions. Please try again.')
        }
      })
    },
    addNewTranscription (ctx) {
      ctx.commit('addListItem')
    },
    deleteTranscription (ctx, id) {
      ctx.commit('deleteListItem', id)
    },
    uploadTranscriptionsData (ctx, data) {
      // console.log('data before save', this.state.transcriptions.transcriptionsData)
      transcriptionsApi.saveTranscriptions(this.state.transcriptions.transcriptionsData).then((res) => {
        //
      }, (err) => {
        if (err) {
          ctx.commit('displayError', 'An error occured while saving the transcriptions. Please try again.')
        }
      })
    }
  }
}
