import Vue from "vue";
import VueRouter from "vue-router";
import TranscriptionsActions from "../views/actions/TranscriptionsActions.vue";
import TranscriptionsView from "../views/TranscriptionsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
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
  ],
});

export default router;
