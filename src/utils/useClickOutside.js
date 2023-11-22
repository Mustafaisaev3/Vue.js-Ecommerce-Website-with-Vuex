import { onBeforeUnmount, onMounted } from "vue"

export default function useClickOutside(target_el, callback) {
    console.log('click outside')
    if (!target_el) return
    console.log(target_el, 'target_el')
    let listener = (e) => {
        if (target_el == e.target || target_el.contains(e.target)){
            // We clicked inside the root region (modal). Don't need to close
            return 
        }

        // At this point we clicked outside the modal
        if (typeof callback == 'function') {
            callback()
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', listener)
    })

    return listener
}