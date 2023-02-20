import { createStore } from 'vuex'
import ui from './modules/ui'
import cart from './modules/cart'

// const store = createStore({
//     state () {
//         return {
//             about: 'About page from Vuex'
//         }
//     }
// })
const store = createStore({
    modules: {
        ui,
        cart
    }
})

export default store