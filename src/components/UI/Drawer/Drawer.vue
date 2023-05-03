<template>
    <teleport to="body">
      <div v-if="showDrawer" class="fixed top-0 left-0 w-full h-full bg-[#131313c9] flex z-10" :class="[{'justify-end' : activeView.align == 'right'}, {'justify-start' : activeView.align == 'left'}]">
          <div class="w-full sm:w-full md:w-[400px] lg:w-[400px] h-full bg-white relative overflow-hidden" :class="[{'rounded-l-md' : activeView.align == 'right'}, {'rounded-r-md' : activeView.align == 'left'}]">
              <component :is="activeView.view"></component>
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
import MobileMenuView from './DrawerViews/MobileMenuView.vue';

const views = [
    {   
        name: 'CART_VIEW',
        view: CartView, 
        align: 'right'
    },
    {   
        name: 'WISHLIST_VIEW',
        view: WishlistView,
        align: 'right'
    },
    {   
        name: 'MOBILE_MENU_VIEW',
        view: MobileMenuView,
        align: 'left'
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
        WishlistView,
        MobileMenuView
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

                return filteredView[0]
            }
            
        }),
    },
    methods: {
    }
}
</script>

<style>

</style>