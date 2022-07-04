import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("#app/pages/Transcript/Index.vue")
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
