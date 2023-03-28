import { createApp } from 'vue';
import { createPinia } from "pinia";
import './styles/index.css';

import LanguageResource from "./language-resource";
import Router from "./router";
import App from './App.vue';

createApp(App)
    .use(LanguageResource)
    .use(createPinia())
    .use(Router)
    .mount('#app');
