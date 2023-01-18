import Vue from "vue";
import VueRouter from "vue-router";
import TranscriptionsActions from "../views/actions/TranscriptionsActions.vue";
import NotFoundView from "../views/app/NotFoundView.vue";
import TranscriptionsView from "../views/TranscriptionsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/transcriptions",
    },
    {
      path: "/transcriptions",
      name: "TranscriptionsView",
      components: {
        default: TranscriptionsView,
        PageActions: TranscriptionsActions,
      },
      meta: {
        title: "Transcriptions",
      },
    },
    {
      path: "*",
      name: "NotFoundView",
      components: {
        default: NotFoundView,
      },
      meta: {
        title: "Not Found :(",
      },
    },
  ],
});

export default router;
