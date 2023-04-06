import { createStore } from 'vuex'
import ui from './modules/ui'
import cart from './modules/cart'
import wishlist from './modules/wishlist'
import categories from './modules/categories'
import products from './modules/products'


const store = createStore({
    modules: {
        ui,
        cart,
        wishlist,
        categories,
        products
    }
})

export default store