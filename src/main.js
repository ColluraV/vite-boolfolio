import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import router from "./router";

createApp(App)
//dichiaro l'utilizzo del router
.use(router).mount('#app');
