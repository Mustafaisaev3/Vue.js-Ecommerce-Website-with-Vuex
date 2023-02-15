<template>
  <button :class="[buttonType]">
    <slot></slot>
  </button>
</template>

<script>
export default {
    props: ['buttonType']
}
</script>

<style>
.primary {
    width: 100%;
    background: rgb(0, 208, 255);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    transition-duration: 0.3s;
}

.primary:hover {
    background: rgb(3, 179, 219);
}

.secondary {
    width: 100%;
    background: rgb(255, 255, 255);
    color: #222222;
    padding: 10px 20px;
    border: 1px solid #dcdcdc;
    border-radius: 30px;
    transition-duration: 0.3s;
}

.secondary:hover {
    background: rgb(3, 179, 219);
    color: white;
}
</style>