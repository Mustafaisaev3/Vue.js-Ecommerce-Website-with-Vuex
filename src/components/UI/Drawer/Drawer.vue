<template>
    <teleport to="body">
      <div v-if="showDrawer" @click="showWrapper" class="fixed top-0 left-0 w-full h-full bg-[#131313c9] flex z-10" :class="[{'justify-end' : activeView.align == 'right'}, {'justify-start' : activeView.align == 'left'}]">
          <div class="w-full sm:w-full md:w-[400px] lg:w-[400px] h-full bg-white relative overflow-hidden" :class="[{'rounded-l-md' : activeView.align == 'right'}, {'rounded-r-md' : activeView.align == 'left'}]">
              <component :is="activeView.view"></component>
          </div>
      </div>
    </teleport>
</template>

<script>
import { mapState } from 'vuex';
import CartView from './DrawerViews/CartView.vue';
import WishlistView from './DrawerViews/WishlistView.vue';
import MobileMenuView from './DrawerViews/MobileMenuView.vue';
import FilterView from './DrawerViews/FilterView.vue';
import { UIActionsType } from '@/store/modules/ui';

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
    {   
        name: 'FILTER_VIEW',
        view: FilterView,
        align: 'left'
    },

]

export default {
    data () {
        return {
            showModal: true,
            views,
        }
    },
    components: {
        CartView,
        WishlistView,
        MobileMenuView,
        FilterView
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
            },
            
        }),
    },
    methods: {
        closeDrawer () {
            this.$store.commit(UIActionsType.CLOSE_DRAWER)
        },
    },
}
</script>

<style>

</style>