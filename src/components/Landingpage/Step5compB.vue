<template>
    <div class="w-[1000px] h-fit mt-12
                  bg-bg1 rounded-[30px] pl-24 pb-12
                    text-base text-style1 leading-[55px] duration-300 ease-in
                    drop-shadow-shadow1" :class="(stepcount >= 13) ? ['opacity-1'] : ['opacity-0']">
        <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
            <div class="mt-[5%]">
                <p><span class="text-style3">Sprint </span>是一個短衝，開發團隊會在這期間執行開發。</p>
                <p> 在這段期間內，開發團隊舉辦<span class="text-style3"> 每日站立會議 Daily </span></p>
                <p><span class="text-style3">Scrum</span>，追蹤成員間的工作狀況。</p>
            </div>
            <div>
                <p>除了每日站立會議，在 Sprint 結束後也會有：</p>
                <p class="text-style3">短衝檢視會議 SprintReview、</p>
                <p class="text-style3">短衝自省會議 Sprint Retrospective。</p>
            </div>
            <div v-if="(stepcount === 13)" class="w-full">
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