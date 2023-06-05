import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from '../src/App.vue'

createApp(App)
    .use(router)
    .component('Navigator', Navigator)
    .mount('#app')
