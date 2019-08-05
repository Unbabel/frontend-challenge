import Vue from "vue";
import App from "@/App";
import store from "@/store";
import router from "@/internals/router";
import "@/internals/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
