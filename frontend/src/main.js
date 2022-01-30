import Vue from 'vue'
import App from './App.vue'

/* AXIOS */
import Axios from 'axios'
Vue.prototype.$axios = Axios;

/* I18N */
import { i18n } from './locales/index.js'

/* VUEX */
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
