
export const CartActionsType = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    INCREASE_ITEM_IN_CART: 'INCREASE_ITEM_IN_CART',
    DECREASE_ITEM_IN_CART: 'DECREASE_ITEM_IN_CART',
    CLEAR_SHOPPING_CART: 'CLEAR_SHOPPING_CART',
}


export default {
    state: {
        products: [
            // {
            //     id: Math.floor(Math.random()),
            //     title: 'Game Console Controller + USB 3.0 Cable',
            //     price: 99.00,
            //     images: [
            //         require('@/assets/images/products/consal1.png'),
            //         require('@/assets/images/products/consal2.png'),
            //         require('@/assets/images/products/consal3.png')
            //     ]
            // },
            // {
            //     id: Math.floor(Math.random()),
            //     title: 'Vivo IQOO 7 Legend - 4000 MAh Lithium-Polymer',
            //     price: 210.00,
            //     images: [
            //         require('@/assets/images/products/IQOO1.webp'),
            //         require('@/assets/images/products/IQOO2.webp'),
            //         require('@/assets/images/products/IQOO3.webp'),
            //         require('@/assets/images/products/IQOO4.webp'),
            //         require('@/assets/images/products/IQOO5.webp'),
            //     ]
            // },
            // {
            //     id: Math.floor(Math.random()),
            //     title: 'Stainless Steel Dual Basket ProFry',
            //     price: 520.00,
            //     images: [
            //         require('@/assets/images/products/ProFry1.webp'),
            //         require('@/assets/images/products/ProFry2.webp'),
            //         require('@/assets/images/products/ProFry3.webp'),
            //     ]
            // },
        ],
    },

    mutations: {
        ADD_TO_CART (state, { product, quantity }) {
            if(state.products.length > 0) {
                let isProductInCart = false
                state.products.map((productItem) => {
                    console.log(productItem.product)
                    if(productItem.product.id === product.id) {
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
        increaseItemInCart ({commit}, payload) {
            commit(CartActionsType.INCREASE_ITEM_IN_CART, payload)
        },
        decreaseItemInCart ({commit}, payload) {
            commit(CartActionsType.DECREASE_ITEM_IN_CART, payload)
        },
        clearShoppingCart ({commit}) {
            commit(CartActionsType.CLEAR_SHOPPING_CART)
        }
    }
}