import { createApp } from 'vue';
import { createPinia } from "pinia";
import './styles/index.css';

import Router from "./router";
import App from './App.vue';

createApp(App)
    .use(createPinia())
    .use(Router)
    .mount('#app');
