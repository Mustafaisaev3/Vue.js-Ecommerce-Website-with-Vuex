import notificationTypes from "@/types/notification-types"

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
    
    // Notification
    ADD_NOTIFICATION: 'ADD_NOTIFICATION',
    DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
    DELETE_NOTIFICATION_BY_ID: 'DELETE_NOTIFICATION_BY_ID',
}   

export default {
    state: {
        // Modal
        showModal: false,
        modalView: '',
        modalData: null,

        // Drawer
        showDrawer: false,
        drawerView: '',
        drawerData: null,

        // Notification
        notifications: [],
        notificationsData: null,
    },

    mutations: {
        // Modal
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

        // Drawer
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

        // Notifications
        ADD_NOTIFICATION(state, payload) {
            state.notifications.push({id: Math.random() + 1000,...payload})
        },
        DELETE_NOTIFICATION(state) {
            state.notifications.shift()
        },
        DELETE_NOTIFICATION_BY_ID(state, id) {
            state.notifications = state.notifications.filter(notification => {
                return notification.id != id
            })
        },
    },

    actions: {
        addNotification ({ commit }, payload) {
            commit(UIActionsType.ADD_NOTIFICATION, payload)
            setTimeout(() => {
                commit(UIActionsType.DELETE_NOTIFICATION)
            }, 5000)
        },
    },

    getters: {
        modalView (state) {
            return state.modalView
        },
        drawerView (state) {
            return state.drawerView
        },
        isNotifications (state) {
            return !!state.notifications.length
        },
        notifications (state) {
            return state.notifications
        },
    }
}