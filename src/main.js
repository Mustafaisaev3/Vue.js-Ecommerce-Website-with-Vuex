import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import './assets/styles/tailwind.css'
import router from './router'
import store from './store/store'
import ImageMagnifier from 'vue-image-magnifier'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(ImageMagnifier)
app.mount('#app')
