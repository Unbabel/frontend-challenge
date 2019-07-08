import axios from 'axios'

export default {
  fetchListData () {
    return new Promise((resolve, reject) => {
      axios.get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c')
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  saveListData (data) {
    return new Promise(function (resolve, reject) {
      axios.post('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c', data)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
