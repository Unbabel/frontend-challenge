import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "error",
    // route level code-splitting
    // this generates a separate chunk (error.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/ErrorView.vue"),
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
