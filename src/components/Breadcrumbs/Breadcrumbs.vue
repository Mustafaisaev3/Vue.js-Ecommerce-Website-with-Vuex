<template>
  <div class="p-[20px]"> 
    <ul class="flex gap-1">
        <li>
            <span class="text-[#999] capitalize">hello 1</span>
        </li>
        <li>
            <span class="text-[#999] capitalize">hello 1</span>
        </li>
        <li>
            <span class="text-[#999] capitalize">hello 1</span>
        </li>
        <li>
            <span class="active capitalize">hello 1</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.active {
    color: #222222;
}
li::before {
    content: "/";
    padding-left: 5px;
    padding-right: 5px;
    color: #222;
}

li:first-of-type::before{
    content: ""
}
</style>