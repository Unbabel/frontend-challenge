import Vue from "@/internals/config/vue";
import router from "@/internals/config/router";
import store from "@/store";

import "@/internals/registerServiceWorker";
import "@/assets/scss/main.scss";

import App from "@/App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
