import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./shared/state/store";

// Styles
import "./assets/main.css";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
