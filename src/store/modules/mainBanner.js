import { mainBannerApi } from "@/services/api/mainBannersApi"

export const mainBannerActionsTypes = {
    FETCH_MAIN_BANNER: 'FETCH_MAIN_BANNER',
}

export default {
    state: {
        mainBanner: []
    },

    getters: {
        mainBanner (state) {
            return state.mainBanner
        },
    },

    mutations: {
        FETCH_MAIN_BANNER(state, payload) {
            state.mainBanner = payload
        }
    },

    actions: {
        async fetchMainBanner ({ commit }) {
            const mainBanner = await mainBannerApi.fetchMainBanner()
            console.log('ddddddddddddddddddd')
            commit(mainBannerActionsTypes.FETCH_MAIN_BANNER, mainBanner)
        }
    }
}