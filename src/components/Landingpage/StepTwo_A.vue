<template>
    <div class="relative w-screen h-screen pl-80 
    flex justify-start items-center">
        <div class="w-[1000px] h-[90%]
        bg-bg1 rounded-[30px] pt-[5%] pl-24
        text-base text-style1 leading-[55px]
        drop-shadow-shadow1">
            <div class="flex flex-col justify-start items-start gap-y-[5vh]
            font-semibold tracking-wide ">
                <div>
                    <p>哈囉~{{ username }}</p>
                    <p>我是開發Ａ組的PO，小敏。</p>
                </div>
                <div>
                    <p>PO也就是<span class="text-style3">產品負責人(Product Owner)</span>。</p>
                    <p>產品負責人會負責評估產品待辦清單的價值與重要性，依</p>
                    <p>序排列要執行的優先順序，對齊產品目標。最後排出產品</p>
                    <p>待辦清單(Product Backlog)唷！</p>
                </div>
                <div>
                    <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛</p>
                    <p>列出了『產品需求清單』。既然你都來了，<span class="text-style3">來試試看調整</span></p>
                    <p class="text-style3">產品優先度，排出產品待辦清單吧！ </p>
                </div>
                <div class="w-full" @click="nextstep">
                    <div class="w-52 h-14 ml-auto mr-20
                    flex justify-evenly items-center text-white
                    bg-bg2 hover:bg-bg3 rounded-[10px] 
                    duration-150 cursor-pointer">
                        <span>開始試煉</span>
                        <img src="../../assets/img/playbtn.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 right-[20%] origin-bottom">
            <img id="ppl_5" src="../../assets/img/landing_ppl5.png" alt="">
            <img src="../../assets/img/name.png" alt="" class="absolute -top-16 -right-12">
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { nextstep } = inject('nextsteps')
</script>