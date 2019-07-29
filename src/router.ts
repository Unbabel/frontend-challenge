import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PageNotFound from './views/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/transcription-list',
      name: 'transcription-list',

      component: () =>
        import('./views/Transcription-List.vue'),
    },
    { path: '*', component: PageNotFound },
  ],
});
