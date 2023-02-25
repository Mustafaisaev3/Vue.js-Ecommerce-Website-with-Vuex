
export const UIActionsType = {
    // Modal
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SET_MODAL_VIEW: 'SET_MODAL_VIEW',
    SET_MODAL_DATA: 'SET_MODAL_DATA',

    // Drawer 
    OPEN_DRAWER: 'OPEN_DRAWER',
    CLOSE_DRAWER: 'CLOSE_DRAWER',
    SET_DRAWER_VIEW: 'SET_DRAWER_VIEW',
    SET_DRAWER_DATA: 'SET_DRAWER_DATA',
    
}

export default {
    state: {
        showModal: false,
        modalView: '',
        modalData: null,

        showDrawer: false,
        drawerView: '',
        drawerData: null,
    },

    mutations: {
        OPEN_MODAL(state, payload){
            state.modalView = payload.view
            state.modalData = payload.data
            state.showModal = true
        },
        CLOSE_MODAL(state){
            state.showModal = false
            state.modalView = ''
        },
        SET_MODAL_VIEW(state, payload){
            state.modalView = payload
        },
        OPEN_DRAWER(state, payload){
            state.drawerView = payload.view
            state.drawerData = payload.data
            state.showDrawer = true
        },
        CLOSE_DRAWER(state){
            state.showDrawer = false
            state.drawerView = ''
        },
        SET_DRAWER_VIEW(state, payload){
            state.drawerView = payload
        },
    },

    getters: {
        modalView (state) {
            return state.modalView
        },
        drawerView (state) {
            return state.drawerView
        }
    }
}