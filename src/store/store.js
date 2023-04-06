import { createStore } from 'vuex'
import ui from './modules/ui'
import cart from './modules/cart'
import wishlist from './modules/wishlist'
import categories from './modules/categories'

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
        cart,
        wishlist,
        categories
    }
})

export default store