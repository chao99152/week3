<template>
    <div class="relative w-screen h-screen pl-80 
    flex justify-start items-center">
        <div class="h-auto duration-300 ease-in"
            :class="(stepcount == 8) ? ['-translate-y-[25%]'] : ['translate-y-[20%]']">
            <div id="Step3_B_CompA" class="w-[1000px] h-3/5
                  bg-bg1 rounded-[30px] pt-[5%] pl-24
                    text-base text-style1 leading-[55px]
                    drop-shadow-shadow1" :class="(stepcount == 8) ? ['pb-[10%]'] : ['']">
                <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
                    <div>
                        <p>嗨嗨！你是新來的前端吧！</p>
                        <p>我是這次的 Scrum Master 小捷，</p>
                        <p>我的工作主要是促成開發團隊成員協作、引導團隊進行自</p>
                        <p>省會議，提升團隊成員對 Scrum 瞭解。</p>
                    </div>
                    <div v-if="(stepcount == 7)" class="w-full">
                        <div class="w-44 h-[70px] ml-auto mr-20 mb-4
                            flex justify-evenly items-center 
                            text-style2 font-bold
                            border-[3px] border-[#CFC8C4] rounded-[10px]
                            hover:bg-bg5 duration-150 cursor-pointer" @click="nextstep">
                            <span>繼續</span>
                            <img src="../../assets/img/playbtn2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div id="Step3_B_CompB" class="w-[1000px] h-3/5 mt-12 
                  bg-bg1 rounded-[30px] py-[5%] pl-24
                    text-base text-style1 leading-[55px] duration-300 ease-in delay-300
                    drop-shadow-shadow1" :class="(stepcount == 8) ? [''] : ['opacity-0']">
                <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
                    <div>
                        <p>這兩位是小斯和小廣，是我們開發團為的成員唷～ 目前</p>
                        <p>們團隊一次 Sprint 週期是兩週的時間，依照我的觀</p>
                        <p>察，目前團隊可以負擔的點數 (Sprint Point) 大約是 20</p>
                        <p>點左右。</p>
                    </div>
                    <div class="w-full">
                        <div class="w-44 h-[70px] mt-4 ml-auto mr-20 mb-4
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
        </div>
        <div class="fixed bottom-6 left-6"><img src="../../assets/img/backbtn.png" alt="" class="cursor-pointer"
                @click="laststep"></div>

        <div v-if="stepcount == 8" class="absolute bottom-0 left-[20%] origin-bottom duration-300 ease-in delay-300">
            <img src="../../assets/img/ppl_1.png" alt="">
            <img src="../../assets/img/name_1.png" alt="" class="absolute -top-8 -left-24 max-w-[220px] max-h-[400px]">
        </div>
        <div v-if="stepcount == 8" class="absolute bottom-0 left-[35%] origin-bottom duration-300 ease-in delay-300">
            <img src="../../assets/img/ppl_2.png" alt="">
            <img src="../../assets/img/name_2.png" alt=""
                class="absolute -top-16 -right-20 max-w-[220px] max-h-[400px]">
        </div>
        <div class="absolute bottom-0 right-[20%] origin-bottom duration-300 ease-in delay-300">
            <img src="../../assets/img/ppl_3.png" alt="">
            <img src="../../assets/img/name_3.png" alt=""
                class="absolute -top-16 -right-12 max-w-[220px] max-h-[400px]">
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { stepcount, nextstep, laststep } = inject('changesteps')
</script>