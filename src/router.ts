import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './views/Default-Layout.vue';
import TranscriptionList from './views/Transcription-List.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      props: {
        titles: {
          title: 'Welcome to the Unbabel front-end challenge',
          subtitle:
            'Press the "Transcriptions" button to navigate to the list page'
        }
      }
    },
    {
      path: '/transcription-list',
      name: 'transcription-list',
      component: TranscriptionList
    },
    {
      path: '/404',
      name: '404',
      component: DefaultLayout,
      props: {
        titles: {
          title: '404 Page not found',
          subtitle:
            'Feel free to navigate back or just press the button "Transcriptions"'
        }
      }
    },
    { path: '*', redirect: '/404' }
  ]
});
