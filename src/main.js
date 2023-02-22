import Vue from "vue";

// Components
import App from "./App.vue";

// Router
import router from "./router";

// State
import store from "./shared/state/store";

// Utils
import { addOrRemoveClassNameFromElTag } from "./shared/utils/accessibilityOptions";

// Styles
import "./assets/main.css";

new Vue({
	store,
	router,
	render: (h) => h(App),
	created: () => {
		if (store.getters.isElderModeActive) {
			addOrRemoveClassNameFromElTag("html", "elder");
		}
	},
}).$mount("#app");
