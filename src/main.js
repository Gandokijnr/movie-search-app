import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Configure your app instance
app.use(router);
app.config.productionTip = false;

// Mount the app
app.mount('#app');
