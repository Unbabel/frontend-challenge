import { createApp } from 'vue';

import App from './App.vue';
import router from './app/router';
import { createTranscriptionModule } from './app/store/transcriptionModule';
import { services } from './app/requests/services';

const app = createApp(App);
const store = createTranscriptionModule();

app.provide('services', services);

app.use(router);
app.use(store);

app.mount('#app');
