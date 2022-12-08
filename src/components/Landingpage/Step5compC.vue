<template>
    <div class="w-[1000px] h-3/5 mt-12
                  bg-bg1 rounded-[30px] pl-24 pb-12
                    text-base text-style1 leading-[55px] duration-300 ease-in
                    drop-shadow-shadow1" :class="(stepcount >= 14) ? ['opacity-1'] : ['opacity-0']">
        <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
            <div class="mt-[5%]">
                <p class="text-style3">每日站立會議 Daily Scrum</p>
            </div>
            <div>
                <p>每天都要進行的會議，以 15 分鐘為限制</p>
                <p class="ml-2">・ 昨天為團隊的短衝目標（Sprint Goal）做了那些進度 </p>
                <p class="ml-2">・ 今天我會如何準備來幫助團隊達到短衝目標</p>
                <p class="ml-2">・ 過程中有遇到什麼問題、難題</p>
            </div>
            <div>
                <p>透過團隊分享，追蹤大家的工作狀況。</p>
            </div>
            <div v-if="(stepcount === 14)" class="w-full">
                <div class="w-44 h-[70px] ml-auto mr-20
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
</template>

<script setup lang="ts">
import { watchEffect, inject } from 'vue';
import gsap from 'gsap'
// provide from Landingpage.vue
const { username } = inject('setUsername')
const { stepcount, nextstep, laststep } = inject('changesteps')

watchEffect(() => {
    stepcount.value
    if (stepcount.value === 8) {
        let ppl1 = gsap.timeline({})
        ppl1.to('#step8_ppl_1', {
            transform: 'translateY(0)',
            opacity: 1,
            duration: 0.3,
            delay: 0.3
        })
        let ppl2 = gsap.timeline({})
        ppl2.to('#step8_ppl_2', {
            transform: 'translateY(0)',
            opacity: 1,
            duration: 0.3,
            delay: 0.6
        })
    } else {
        let ppl1 = gsap.timeline({})
        ppl1.to('#step8_ppl_1', {
            transform: 'translateY(110%)',
            opacity: 0,
            duration: 0.3,
        })
        let ppl2 = gsap.timeline({})
        ppl2.to('#step8_ppl_2', {
            transform: 'translateY(115%)',
            opacity: 0,
            duration: 0.3,
        })
    }
}, { flush: 'post' })
</script>