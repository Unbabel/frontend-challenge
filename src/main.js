import FontFaceObserver from "fontfaceobserver";

import Vue from "@/internals/config/vue";
import router from "@/internals/config/router";
import store from "@/store";

import "@/internals/registerServiceWorker";
import "@/assets/scss/main.scss";

import App from "@/App.vue";

// Observe loading of Open Sans and Montserrat
const openSansObserver = new FontFaceObserver("Open Sans", {});
const montserratObserver = new FontFaceObserver("Montserrat", {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
Promise.all([openSansObserver.load(), montserratObserver.load()]).then(
  function addBodyClass() {
    document.body.classList.add("fontsLoaded");
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
