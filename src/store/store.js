import { createStore } from 'vuex'
import ui from './modules/ui'

// const store = createStore({
//     state () {
//         return {
//             about: 'About page from Vuex'
//         }
//     }
// })
const store = createStore({
    modules: {
        ui
    }
})

export default store