import { createRouter, createWebHashHistory } from "vue-router";
import NotFound from "@/views/NotFound";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ "@/views/HomePage"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
      meta: {
        requiresAuth: false,
      },
    },
  ],
});

export default router;
