<template>
    <div class="relative w-screen h-screen pl-80 
    flex justify-start items-center">
        <div class="w-[1000px] h-3/4
        bg-bg1 rounded-[30px] pt-[5%] pl-24
        text-base text-style1 leading-[55px]
        drop-shadow-shadow1">
            <div class="flex flex-col justify-start items-start gap-y-[5vh]
            font-semibold tracking-wide ">
                <div>
                    <p>產品待辦清單好了之後，</p>
                    <p>我們來召集 Scrum Master 和開發團隊</p>
                    <p>共同召開<span class="text-style3">短衝規劃會議（Sprint Planning）</span>。</p>
                    <p>短衝即是一個迭代，具有固定時間限制，我們會在這個會</p>
                    <p>議中，決定要完成哪些工作事項來達到商業需求，</p>
                </div>
                <div>
                    <p><span class="text-style3"> 列出短衝待辦清單（Sprint Backlog）</span>，並由開發團隊在</p>
                    <p>接下來的產品開發週期裡執行。</p>
                </div>
                <div class="w-full">
                    <!-- <div class="w-52 h-14 ml-auto mr-20
                    flex justify-evenly items-center text-white
                    bg-bg2 hover:bg-bg3 rounded-[10px] 
                    duration-150 cursor-pointer">
                        <span>繼續</span>
                        <img src="../../assets/img/playbtn.png" alt="">
                    </div> -->
                    <div class="w-44 h-[70px] mt-4 ml-auto mr-20
                        flex justify-evenly items-center 
                      text-style2 font-bold
                        border-[3px] border-[#CFC8C4] rounded-[10px]
                      hover:bg-bg5 duration-150 cursor-pointer" @click="nextstep">
                        繼續
                        <img src="../../assets/img/playbtn2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 right-[20%] origin-bottom">
            <img id="ppl_5" src="../../assets/img/landing_ppl5.png" alt="">
            <img src="../../assets/img/name_1.png" alt="" class="absolute -top-16 -right-12">
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { nextstep } = inject('changesteps')
</script>