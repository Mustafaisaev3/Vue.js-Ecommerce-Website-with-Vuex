<template>
    <div class="w-full h-auto rounded-md overflow-hidden bg-white">
        <label for="DHL" >
            <input type="radio" class="hidden" id="DHL" name="shipping" />
            <div class="w-full h-auto p-4 flex bg-white border-b-[1px] border-[#d0d0d0] cursor-pointer">
                <div class="w-[40px] h-full">
                    <div class="check bg-[white] rounded-full w-5 h-5 border border-[gray]"></div>
                </div>
                <div class="flex-1">
                    <div class="text-[16px] leading-none">DHL Express Worldwide</div>
                    <div class="text-[gray] text-[14px]">3 to 4 business days</div>
                </div>
                <div class="text-[15px] leading-none">$41.48</div>
            </div>
        </label>
        <label for="USPS" >
            <input type="radio" class="hidden" id="USPS" name="shipping" />
            <div class="w-full h-auto p-4 flex bg-white border-b-[1px] border-[#d0d0d0] cursor-pointer">
                <div class="w-[40px] h-full">
                    <div class="check bg-[white] rounded-full w-5 h-5 border border-[gray]"></div>
                </div>
                <div class="flex-1">
                    <div class="text-[16px] leading-none">USPS Priority Mail International </div>
                    <div class="text-[gray] text-[14px]">6 to 10 business days</div>
                </div>
                <div class="text-[15px] leading-none">$58.07</div>
            </div>
        </label>
        <label for="USP" >
            <input type="radio" class="hidden" id="USP" name="shipping" />
            <div class="w-full h-auto p-4 flex bg-white border-b-[1px] border-[#d0d0d0] cursor-pointer">
                <div class="w-[40px] h-full">
                    <div class="check bg-[white] rounded-full w-5 h-5 border border-[gray]"></div>
                </div>
                <div class="flex-1">
                    <div class="text-[16px] leading-none">USPS Priority Mail Express International</div>
                    <div class="text-[gray] text-[14px]">3 to 5 business days</div>
                </div>
                <div class="text-[15px] leading-none">$72.59</div>
            </div>
        </label>
    </div>
</template>

<script>
export default {

}
</script>
 
<style scoped>
input:checked + div {
    background-color: rgba(6, 209, 255, 0.168);
}
input:checked + div > div .check {
    border: 7px solid #58c7ff;
    background: black;
}

</style>