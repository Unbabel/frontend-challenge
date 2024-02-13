import { createRouter, createWebHistory } from 'vue-router';
import Transcriptions from '@/components/TranscriptionsComponent.vue';
import SamplePage from '@/pages/SamplePage.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Transcriptions' }
  },
  {
    path: '/transcriptions',
    name: 'Transcriptions',
    component: Transcriptions,
  },
  {
    path: '/sample-page',
    name: 'SamplePage',
    component: SamplePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;