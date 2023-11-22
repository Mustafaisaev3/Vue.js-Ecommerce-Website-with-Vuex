import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import './assets/styles/tailwind.css'
import router from './router'
import store from './store/store'
import vueCountryRegionSelect from 'vue-country-region-select'
import ImageMagnifier from 'vue-image-magnifier'
import useClickOutside from './directives/useClickOutside'



const app = createApp(App)

app.use(store)
app.use(router)
app.use(ImageMagnifier)
app.use(vueCountryRegionSelect)
app.directive('click-outside', useClickOutside)
app.mount('#app')

// app.directive('click-outside', {
//     mounted (element, { value }) {
//         element.clickOutside = (event) => {
//             event.stopPropagation()
//             if(!(element == event.target || element.contains(event.target))) {
//                 value(event)
//                 console.log('click-outside')
//             }
//         }

//         document.body.addEventListener('click', element.clickOutside)
//     },
    
//     unmounted (element, { func }) {
//         document.body.removeEventListener('click', element.clickOutside)
//     }
// })


