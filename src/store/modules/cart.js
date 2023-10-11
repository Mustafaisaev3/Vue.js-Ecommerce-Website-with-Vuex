
export const CartActionsType = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    INCREASE_ITEM_IN_CART: 'INCREASE_ITEM_IN_CART',
    DECREASE_ITEM_IN_CART: 'DECREASE_ITEM_IN_CART',
    CLEAR_SHOPPING_CART: 'CLEAR_SHOPPING_CART',
}


export default {
    state: {
        products: [],
    },

    mutations: {
        ADD_TO_CART (state, { product, quantity }) {
            if(state.products.length > 0) {
                let isProductInCart = false
                state.products.map((productItem) => {
                    console.log(productItem.product)
                    if(productItem.product._id === product._id) {
                        isProductInCart = true
                        productItem.quantity = productItem.quantity + quantity
                    } 
                })
                if (!isProductInCart) {
                    state.products.push({product, quantity})
                }
            } else {
                state.products.push({product, quantity})
            }

        },
        DELETE_FROM_CART (state, id ) {
            state.products = state.products.filter(({product}) => {
                return product.id != id
            })
        },
        INCREASE_ITEM_IN_CART (state, id) {
            state.products.map((productItem) => {
                console.log(productItem.product)
                if(productItem.product.id === id) {
                    productItem.quantity = productItem.quantity + 1
                } 
            })
        },
        DECREASE_ITEM_IN_CART (state, id) {
            state.products.map((productItem) => {
                if(productItem.product.id === id) {
                    productItem.quantity = productItem.quantity - 1
                } 
            })
        },
        CLEAR_SHOPPING_CART (state) {
            state.products = []
        }


    },

    getters: {
        products (state) {
            return state.products
        },
        cartTotal (state) {
            let total = 0
            state.products.map(({product, quantity}) => {
                total += product.price * quantity
            })
            return total
        },
        cartItemsCount (state) {
            let totalItemsCount = state.products.reduce((total, product) => {
                return total + product.quantity
            }, 0)
            console.log(totalItemsCount)
            return totalItemsCount
        }
    },

    actions: {
        addProductToCart ({ commit }, payload) {
            commit(CartActionsType.ADD_TO_CART, payload)
        },
        deleteProductFromCart ({ commit }, payload) {
            commit(CartActionsType.DELETE_FROM_CART, payload)
        },
        increaseItemInCart ({ commit }, payload) {
            commit(CartActionsType.INCREASE_ITEM_IN_CART, payload)
        },
        decreaseItemInCart ({ commit }, payload) {
            commit(CartActionsType.DECREASE_ITEM_IN_CART, payload)
        },
        clearShoppingCart ({ commit }) {
            commit(CartActionsType.CLEAR_SHOPPING_CART)
        }
    }
}