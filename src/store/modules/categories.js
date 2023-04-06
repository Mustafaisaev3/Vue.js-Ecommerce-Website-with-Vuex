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
    },

    actions: {
        async fetchCategories ({ commit }) {
            const categories = await CategoryApi.fetchCategories()
            console.log(categories)
            commit(categoriesActionsTypes.FETCH_CATEGORIES, categories)
        }
    }
}