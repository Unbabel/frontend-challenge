import {createRouter, createWebHistory} from "vue-router";
import {registerRoute} from "./register-route";
import Routes from "./routes";

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: Routes.map(route => (registerRoute(route.path, route.name, route.view)))
});
