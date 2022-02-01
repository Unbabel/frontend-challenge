import VueRouter from 'vue-router'
import Transcriptions from '@/views/Transcriptions.vue'

const routes = [
    { path: '/', component: Transcriptions }
  ]

const router = new VueRouter({
  routes
})
export default router