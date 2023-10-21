import { createStore } from 'vuex'
import ui from './modules/ui'
import cart from './modules/cart'
import wishlist from './modules/wishlist'
import categories from './modules/categories'
import products from './modules/products'
import mainBanner from './modules/mainBanner'
import user from './modules/user'
import options from './modules/options'


const store = createStore({
    modules: {
        ui,
        cart,
        wishlist,
        categories,
        products,
        mainBanner,
        user,
        options
    }
})

export default store