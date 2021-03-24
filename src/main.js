import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import installElementPlus from './plugins/element'
// import http from '@/axios/axios';
const app = createApp(App)
// app.config.globalProperties.$axios = http;
installElementPlus(app)
app.use(router).use(store).mount('#app')