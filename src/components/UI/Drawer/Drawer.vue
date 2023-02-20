<template>
    <teleport to="body">
      <div v-if="showDrawer" class="fixed top-0 left-0 w-full h-full bg-[#131313c9] flex justify-end z-10">
          <div class="w-[400px] h-full bg-white rounded-l-md relative overflow-hidden">
              <component :is="activeView"></component>
              <!-- <Cart /> -->
              <!-- <div class="w-[40px] h-[40px] flex items-center justify-center bg-[#00b7ff] rounded-sm text-white cursor-pointer absolute top-0 right-0" @click="closeModal">
                  <IconClose style="font-size: 20px" />
              </div> -->
          </div>
      </div>
    </teleport>
</template>

<script>
import { mapState } from 'vuex';
import Cart from '@/components/Cart/Cart.vue';
import CartView from './DrawerViews/CartView.vue';
import WishlistView from './DrawerViews/WishlistView.vue';

const views = [
    {   
        name: 'CART_VIEW',
        view: CartView
    },
    {   
        name: 'WISHLIST_VIEW',
        view: WishlistView
    },

]

export default {
    data () {
        return {
            showModal: true,
            views
        }
    },
    components: {
        CartView,
        WishlistView
    },
    computed: {
        ...mapState({
            showDrawer: (state) => {
                return state.ui.showDrawer
            },
            drawerView: (state) => {
                return state.ui.drawerView
            },
            drawerData (state) {
                return state.ui.drawerData
            },
            activeView () {
                const filteredView = this.views.filter((view) => {
                    return view.name == this.drawerView
                })

                return filteredView[0].view
            }
            
        }),
    },
    methods: {
    }
}
</script>

<style>

</style>