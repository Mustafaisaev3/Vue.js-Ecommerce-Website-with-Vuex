import { ProductApi } from "@/services/api/productsApi"

export const productsActionsTypes = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCT: 'FETCH_PRODUCT',
}

export default {
    state: {
        products: [],
        product: null,
        loading: false
    },

    getters: {
        products (state) {
            return state.products
        },
        product (state) {
            return state.product
        },
    },

    mutations: {
        FETCH_PRODUCTS(state, payload) {
            state.products = payload
            state.loading = false
        },
        FETCH_PRODUCT(state, payload) {
            state.product = payload
            state.loading = false
        },
    },

    actions: {
        async fetchProducts ({ commit, state }, query) {
            state.loading = true
            const products = await ProductApi.fetchProducts(query)
            console.log(products)
            commit(productsActionsTypes.FETCH_PRODUCTS, products)
        },
        async fetchProduct ({ commit, state }, id) {
            state.loading = true
            const product = await ProductApi.fetchProduct(id)
            commit(productsActionsTypes.FETCH_PRODUCT, product)
        },
    }
}