import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

import { useUserStore } from './stores/user'
import '@/assets/css/main.css'

import '@/assets/js/bootstrap.bundle.min.js'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')

// init store
const userStor = useUserStore()
userStor.initStore()
