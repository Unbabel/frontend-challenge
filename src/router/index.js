import Vue from "vue";

// Routes
import VueRouter from "vue-router";

// Views
import TranscriptionsView from "../views/TranscriptionsView.vue";

// Utils
import { topBarRouteActions } from "../shared/utils/topBarRouteActions";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "transcriptions",
			component: TranscriptionsView,
			meta: {
				actions: topBarRouteActions.transcriptions,
			},
		},
		{
			path: "*",
			name: "not-found",
			component: () => import("../views/NotFoundView.vue"),
			meta: {
				actions: topBarRouteActions["not-found"],
			},
		},
	],
});

export default router;
