<template>
  <teleport to="body" >
    <div v-if="showModal" class="fixed top-0 left-0 w-full h-full bg-[#131313c9] flex items-center justify-center z-10">
        <div class="w-auto h-auto bg-white rounded-md relative overflow-hidden">
            <component v-click-outside="closeModal" :is="activeView" :data="modalData"></component>
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-[#00b7ff] rounded-sm text-white cursor-pointer absolute top-0 right-0" @click="closeModal">
                <IconClose style="font-size: 20px" />
            </div>
        </div>
    </div>
  </teleport>
</template>

<script>
import { mapState } from 'vuex';
import IconClose from '~icons/mdi/close'
import { UIActionsType } from '@/store/modules/ui';
import {ModalViewsType} from '@/types/modal-views-types'
import ProductView from './ModalViews/ProductView.vue'
import RegisterView from './ModalViews/RegisterView.vue';
import LoginView from './ModalViews/LoginView.vue';

const views = [
    {
        name: ModalViewsType.PRODUCT_VIEW,
        view: ProductView
    },
    {
        name: ModalViewsType.REGISTER_VIEW,
        view: RegisterView
    },
    {
        name: ModalViewsType.LOGIN_VIEW,
        view: LoginView
    },
]

export default {
    data () {
        return {
            views,
        }
    },
    components: {
        IconClose,
        ProductView,
        RegisterView,
        LoginView
    },
    computed: {
        ...mapState({
            showModal: (state) => {
                return state.ui.showModal
            },
            modalView: (state) => {
                return state.ui.modalView
            },
            modalData (state) {
                return state.ui.modalData
            },
            activeView () {
                const filteredView = this.views.filter((view) => {
                    return view.name == this.modalView
                })

                return filteredView[0].view
            }
            
        }),
    },
    methods: {
        closeModal(){
            console.log(this.$store.getters.modalView)
            this.$store.commit(UIActionsType.CLOSE_MODAL)
            this.$store.commit(UIActionsType.SET_MODAL_VIEW, '')
        }
    }
}
</script>

<style>

</style>