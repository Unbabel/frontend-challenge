import {RouteRecordRaw} from "vue-router";

export function registerRoute(routePath: string, routeName: string, viewName:string ): RouteRecordRaw {
    return {
        path: routePath,
        name: routeName,
        component: () => import(`../views/${viewName}.vue`)
    };
}
