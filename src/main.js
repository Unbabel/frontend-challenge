import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const store = new Vuex.Store({
  state: {},
  mutations: {}
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
