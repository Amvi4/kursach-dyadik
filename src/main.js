import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'  // Подключаем конфигурацию axios

createApp(App).use(router).use(store).mount('#app')
