import { createStore } from 'vuex'
import ui from './modules/ui'
import cart from './modules/cart'
import wishlist from './modules/wishlist'
import categories from './modules/categories'
import products from './modules/products'
import mainBanner from './modules/mainBanner'
import user from './modules/user'


const store = createStore({
    modules: {
        ui,
        cart,
        wishlist,
        categories,
        products,
        mainBanner,
        user
    }
})

export default store