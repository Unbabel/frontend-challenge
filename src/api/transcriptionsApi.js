import axios from 'axios'
import appConfig from '@/config'

export default {
  fetchTranscriptions () {
    return new Promise((resolve, reject) => {
      axios.get(appConfig.apiPath)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  saveTranscriptions (data) {
    return new Promise(function (resolve, reject) {
      axios.post(appConfig.apiPath, data)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
