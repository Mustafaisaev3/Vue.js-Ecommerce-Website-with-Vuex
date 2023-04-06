import { CategoryApi } from "@/services/api/categoriesApi"

export const categoriesActionsTypes = {
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
}

export default {
    state: {
        categories: []
    },

    getters: {
        categories (state) {
            return state.categories
        },
    },

    mutations: {
        FETCH_CATEGORIES(state, payload) {
            state.categories = payload
        }
        // ADD_TO_WISHLIST(state, payload) {
        //     if (state.products.length > 0) {
        //         if (state.products.includes(payload)) {
        //             return
        //         } else {
        //             state.products.push(payload)
        //         }

        //     } else {
        //         state.products.push(payload)
        //     }
        // },
        // DELETE_FROM_WISHLIST (state, id) {
        //     console.log(id)
        //     state.products = state.products.filter(product => {
        //         return product.id != id
        //     })
        // }
    },

    actions: {
        // addProductToWishlist({ commit }, payload) {
        //     commit(wishlistActionsTypes.ADD_TO_WISHLIST, payload)
        // },
        async fetchCategories ({ commit }) {
            const categories = await CategoryApi.fetchCategories()
            console.log(categories)
            commit(categoriesActionsTypes.FETCH_CATEGORIES, categories)
        }
    }
}