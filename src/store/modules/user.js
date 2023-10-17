import { UserApi } from "@/services/api/userApi"
import notificationTypes from "@/types/notification-types"
import { UIActionsType } from "./ui"

export const UserActionsType = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    SET_USER: 'SET_USER'

}

export default {
    state: {
        user: undefined,
        isAuth: false
    },

    mutations: {
        SET_USER(state, payload){
            state.user = payload
            state.isAuth = true
        },
    },

    actions: {
        async login ({ commit, dispatch }, payload) {
            const response = await UserApi.login(payload)
            console.log(response)
            if (response.status === 'error') {
                dispatch('addNotification', {type: notificationTypes.ERROR, text: response.message})
            } else {
                commit(UserActionsType.SET_USER, response.user)
                dispatch('addNotification', {type: notificationTypes.SUCCESS, text: 'User Login'})
                commit(UIActionsType.CLOSE_MODAL)
            }

        },
        async register ({ commit, dispatch }, payload) {
            const response = await UserApi.register(payload)
            if (response.status === 'error') {
                dispatch('addNotification', {type: notificationTypes.ERROR, text: response.message})
            } else {
                commit(UserActionsType.SET_USER, response.user)
                dispatch('addNotification', {type: notificationTypes.SUCCESS, text: 'User Registered'})
                commit(UIActionsType.CLOSE_MODAL)
            }
        },
    },

    getters: {
        user (state) {
            return state.user
        },
        isAuth (state) {
            return state.isAuth
        }
    }
}