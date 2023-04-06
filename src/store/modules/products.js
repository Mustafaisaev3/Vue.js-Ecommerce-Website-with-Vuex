import { ProductApi } from "@/services/api/productsApi"

export const productsActionsTypes = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
}

export default {
    state: {
        products: [],
        loading: false
    },

    getters: {
        products (state) {
            return state.products
        },
    },

    mutations: {
        FETCH_PRODUCTS(state, payload) {
            state.products = payload
            state.loading = false
        }
    },

    actions: {
        async fetchProducts ({ commit, state }) {
            state.loading = true
            const products = await ProductApi.fetchProducts()
            console.log(products)
            commit(productsActionsTypes.FETCH_PRODUCTS, products)
        }
    }
}