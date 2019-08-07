import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Base from "@/views/layouts/Base";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Base,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/Home")
        },
        {
          path: "/transcription/:id",
          name: "transcription",
          component: () => import("@/views/TranscriptionDetail")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/About")
        },
        {
          path: "/404",
          name: "Not Found",
          component: () => import("@/views/NotFound")
        },
        {
          path: "*",
          redirect: "/404"
        }
      ]
    }
  ]
});

export default router;
