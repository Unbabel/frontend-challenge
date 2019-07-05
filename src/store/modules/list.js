import axios from 'axios'

export default {
  state: {
    listData: null
  },
  mutations: {
    modifyListData (state, data) {
      state.listData = data
    }
    // modifyUser (state, user) {
    //   state.user = user
    // },
    // modifyUserList (state, userList) {
    //   state.userList = userList
    // },
    // modifyUserListCount (state, count) {
    //   state.userListCount = count
    // },
    // modifyUserListSkip (state, skip) {
    //   state.userListSkip = skip
    // },
    // modifyUserListSearch (state, search) {
    //   state.userListSearch = search
    // },
    // modifyUserListOrder (state, order) {
    //   state.userListOrder = order
    // },
    // modifyUserListDirection (state, direction) {
    //   state.userListDirection = direction
    // }
  },
  actions: {
    fetchListData (ctx) {
      return new Promise((resolve, reject) => {
        axios.get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c')
          .then(function (res) {
            ctx.commit('modifyListData', res.data)
            resolve(res)
          })
          .catch(function (error) {
            reject(error)
          })
      })
    }
    // loginUser (context, data) {
    //   const hash = btoa(data.email + ':' + data.password)
    //
    //   return new Promise(function (resolve, reject) {
    //     axios.get('https://dev-api.brixel.io/api/v1/authentication/getToken', {
    //       headers: { 'Authorization': 'Basic ' + hash }
    //     })
    //       .then(function (response) {
    //         context.commit('modifyUser', response.data.user)
    //         context.commit('modifyToken', response.data.token)
    //         generalUtils.setCookie('brixelToken', response.data.token)
    //         resolve(response.data)
    //       })
    //       .catch(function (error) {
    //         reject(error)
    //       })
    //   })
    // },
    // updateUserList (context) {
    //   var self = this
    //
    //   return new Promise(function (resolve, reject) {
    //     var options = {
    //       params: {
    //         order: self.state.users.userListOrder,
    //         direction: self.state.users.userListDirection
    //       }
    //     }
    //
    //     if (self.state.users.userListSearch && self.state.users.userListSearch.length > 0) {
    //       options.params.search = self.state.users.userListSearch
    //     }
    //
    //     const userCount = axios.get('https://dev-api.brixel.io/api/v1/user/count', options)
    //     const userList = axios.get('https://dev-api.brixel.io/api/v1/user/' + self.state.users.userListLimit + '/' + self.state.users.userListSkip, options)
    //
    //     axios.all([userCount, userList])
    //       .then(axios.spread(function (userCountRes, userListRes) {
    //         context.commit('modifyUserListCount', userCountRes.data.count)
    //         context.commit('modifyUserList', userListRes.data)
    //         resolve()
    //       }), function (err) {
    //         reject(err)
    //       })
    //   })
    // },
    // updateUserListSkip (context, data) {
    //   context.commit('modifyUserListSkip', data.skip)
    //
    //   if (data.update) {
    //     this.dispatch('updateUserList')
    //   }
    // },
    // updateUserListSearch (context, data) {
    //   context.commit('modifyUserListSearch', data.search)
    //
    //   if (data.update) {
    //     this.dispatch('updateUserList')
    //   }
    // },
    // updateUserListSorting (context, data) {
    //   context.commit('modifyUserListOrder', data.order)
    //   context.commit('modifyUserListDirection', data.direction)
    //
    //   if (data.update) {
    //     this.dispatch('updateUserList')
    //   }
    // }
  }
}
