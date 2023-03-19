import { createApp } from 'vue';

import App from './App.vue';
import router from './app/router';
import { createTranscriptionModule } from './app/store/transcriptionModule';
import { services } from './app/requests/services';

const app = createApp(App);

/**
 * Creates Vuex module
 */
const store = createTranscriptionModule();

/**
 * Provides global services to be used inside components
 */
app.provide('services', services);

app.use(router);
app.use(store);

app.mount('#app');
