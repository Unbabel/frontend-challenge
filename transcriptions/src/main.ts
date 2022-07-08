import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useStore } from "./store";

const store = useStore();
createApp(App).use(store).use(router).mount("#app");
