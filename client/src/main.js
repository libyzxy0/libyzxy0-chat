import './assets/main.css'

import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueCookieNext)
app.use(router)

app.mount('#app')

VueCookieNext.config({ expire: '7d' })
