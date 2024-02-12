import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './styles/main.scss';


const app = createApp(App);

app.use(store).mount('#app');
