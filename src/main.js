import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 import the router

const app = createApp(App)

app.use(router) // 👈 tell Vue to use the router
app.mount('#app')


