import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './styles/index.scss';
import SvgIcon from 'vue-svgicon';

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
  classPrefix: 'AppIcon-',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
