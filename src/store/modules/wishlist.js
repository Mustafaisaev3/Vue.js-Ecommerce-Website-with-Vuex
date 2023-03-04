
export const wishlistActionsTypes = {
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
    DELETE_FROM_WISHLIST: 'DELETE_FROM_WISHLIST'
}

export default {
    state: {
        products: []
    },

    getters: {
        wishlistProducts (state) {
            return state.products
        },
        wishlistItemsCount (state) {
            return state.products.length
        }
    },

    mutations: {
        ADD_TO_WISHLIST(state, payload) {
            if (state.products.length > 0) {
                if (state.products.includes(payload)) {
                    return
                } else {
                    state.products.push(payload)
                }

            } else {
                state.products.push(payload)
            }
        },
        DELETE_FROM_WISHLIST (state, id) {
            console.log(id)
            state.products = state.products.filter(product => {
                return product.id != id
            })
        }
    },

    actions: {
        addProductToWishlist({ commit }, payload) {
            commit(wishlistActionsTypes.ADD_TO_WISHLIST, payload)
        },
        deleteProductFromWishlist({ commit }, payload) {
            commit(wishlistActionsTypes.DELETE_FROM_WISHLIST, payload)
        }
    }
}