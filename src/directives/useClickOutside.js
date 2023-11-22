export default {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
            event.stopPropagation()
            // Check if the clicked element is neither the element
            // to which the directive is applied nor its child
            console.log(binding.value, event.target)
            if (!(el === event.target || el.contains(event.target)) && event.target == binding.value.wrapper) {
                // Invoke the provided method
                binding.value.callback(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        // Remove the event listener when the bound element is unmounted
        document.removeEventListener('click', el.clickOutsideEvent);
    },
};