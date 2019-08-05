import Vue from "vue";
import App from "./App.vue";
import router from "./internals/router";
import store from "./internals/store";
import "./internals/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
