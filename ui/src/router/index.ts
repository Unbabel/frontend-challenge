import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { CONSTANTS } from "@/utils/constants";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFound.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: CONSTANTS.ROUTES.HOME.PATH,
    name: CONSTANTS.ROUTES.HOME.NAME,
    component: HomeView,
  },
  {
    path: CONSTANTS.ROUTES.NOT_FOUND.PATH,
    name: CONSTANTS.ROUTES.NOT_FOUND.NAME,
    component: NotFoundView,
  },
  {
    path: CONSTANTS.ROUTES.WILDCARD,
    redirect: CONSTANTS.ROUTES.NOT_FOUND.PATH,
  },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes,
});

export default router;
