import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/views/NotFound";

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/TranscriptionsPage"),
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
