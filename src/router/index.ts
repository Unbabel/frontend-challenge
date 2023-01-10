import { createRouter, createWebHistory } from 'vue-router'
import List from '@/components/List.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', component: List },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router