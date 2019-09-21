import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/transcriptions/:id",
      name: "transcription-item",
      component: Home
    }
  ]
});
