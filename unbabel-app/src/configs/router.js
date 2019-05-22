import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/layouts/BaseLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Listing.vue')
        }
      ]
    }
  ]
})

export default router
