import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "ListItems",
    component: Home,
  },
  {
    path: "/transcriptions",
    name: "Transcription",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;