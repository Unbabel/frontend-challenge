import Vue from 'vue'
import App from './App.vue'


/* VUE ROUTER */
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/index.js'


/* AXIOS */
import Axios from 'axios'
Vue.prototype.$axios = Axios;

/* I18N */
import { i18n } from './locales/index.js'

/* VUEX */
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
