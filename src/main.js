import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import api from './plugins/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios, {
    baseUrl: 'https://jsonplaceholder.typicode.com/'
})
app.use(api)
app.mount('#app')
