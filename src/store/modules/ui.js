
export const UIActionsType = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL',
    SET_MODAL_VIEW: 'SET_MODAL_VIEW',
    SET_MODAL_DATA: 'SET_MODAL_DATA'
}

export default {
    state: {
        showModal: false,
        modalView: '',
        modalData: null
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
        }
    },

    getters: {
        modalView (state) {
            return state.modalView
        }
    }
}