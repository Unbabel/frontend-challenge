import { createRouter, createWebHistory } from 'vue-router'
import TranscriptionsView from '../views/TranscriptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transcriptions',
      component: TranscriptionsView,
    },
  ],
})

export default router
