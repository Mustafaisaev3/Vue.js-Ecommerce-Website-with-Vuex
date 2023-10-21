import { OptionApi } from "@/services/api/optionsApi"

export const optionsActionsTypes = {
    FETCH_OPTIONS: 'FETCH_OPTIONS',
}

export default {
    state: {
        options: []
    },

    getters: {
        options (state) {
            return state.options
        },
    },

    mutations: {
        FETCH_OPTIONS(state, payload) {
            state.options = payload
        }
    },

    actions: {
        async fetchOptions ({ commit }) {
            const options = await OptionApi.fetchOptions()
            // console.log(options)
            commit(optionsActionsTypes.FETCH_OPTIONS, options)
        }
    }
}