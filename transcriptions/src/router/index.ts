import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TranscriptionsView from "../views/TranscriptionsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: TranscriptionsView,
  },
  {
    path: "/transcriptions",
    name: "transcriptions",
    component: TranscriptionsView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
