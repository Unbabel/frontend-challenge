import Vue from './configs/vue'
import router from './configs/router'
import store from './store/store'
import App from './App.vue'

import './assets/stylesheets/app.scss'
import './registerServiceWorker'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
