<template>
  <div class="container bg-white w-full h-auto p-[40px] mb-10">
    <div class="product-tab">
        <ul class="mb-[60px] flex items-center justify-center gap-[60px] border-[#ebebeb] border-b-[1px]">
            <li 
                v-for="tab in tabs"
                :key="tab"
                :class="{active: tab === activeTab}"
                @click="handleTabClick(tab)"
                class="pb-[15px] cursor-pointer text-[18px] text-[#222222] hover:text-[#16bcdc] border-b-[3px] border-[#16bbdc00] hover:border-[#16bcdc] transition-all"
            >
                {{ tab }}
            </li>
        </ul>
        <div class="tabs">
            <div v-show="activeTab === tabs[0]" class="description w-full h-auto ">
                <p class="text-[#222222]">
                    Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a variety of comfortable seating positions,ideal for both long visits to the dining table and relaxed lounging.
                </p> 
                <h2 class="font-bold pt-10 pb-4">The Standard Passage, Used Since The 1500s.</h2> 
                <p class="text-[#222222]">
                    A light chair, easy to move around the dining table and about the room. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div v-show="activeTab === tabs[1]" class="additional-information w-full h-auto">
                <table class="w-full">
                    <tbody>
                        <tr class="flex justify-between items-center border-b border-[#e5e5e5] ">
                            <th class="w-full text-left p-2">Color</th>
                            <td class="w-full text-left p-2">Red</td>
                        </tr>
                        <tr class="flex justify-between items-center border-b border-[#e5e5e5] ">
                            <th class="w-full text-left p-2">Color</th>
                            <td class="w-full text-left p-2">Red</td>
                        </tr>
                        <tr class="flex justify-between items-center border-b border-[#e5e5e5] ">
                            <th class="w-full text-left p-2">Color</th>
                            <td class="w-full text-left p-2">Red</td>
                        </tr>
                        <tr class="flex justify-between items-center border-b border-[#e5e5e5] ">
                            <th class="w-full text-left p-2">Color</th>
                            <td class="w-full text-left p-2">Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-show="activeTab === tabs[2]" class="reviews w-full h-auto">
                <div class="border border-[#ECECEC] p-[25px]">
                    <h2 class="text-[#222] text-[24px] font-bold pb-4">Customer Reviews</h2>
                    <div class="flex justify-between">
                        <div class="text-[14px] text-[#666]">No reviews yet</div>
                        <div class="text-[red]">Write a review</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return {
            tabs: [
                'Description', 
                'Additional information', 
                'Reviews (0)',
            ],
            activeTab: 'Description'
        }
    },

    methods: {
        handleTabClick (tab) {
            this.activeTab = tab
        }
    }
}
</script>

<style scoped>
.active {
    color: #16bcdc;
    border-bottom: 3px solid #16bcdc;
}
</style>