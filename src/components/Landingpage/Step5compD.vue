<template>
    <div class="w-[1000px] h-3/5 mt-12
                  bg-bg1 rounded-[30px] pl-24 pb-12
                    text-base text-style1 leading-[55px] duration-300 ease-in
                    drop-shadow-shadow1" :class="(stepcount >= 15) ? ['opacity-1'] : ['opacity-0']">
        <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
            <div class="mt-[5%]">
                <p class="text-style3">短衝自省會議 Sprint Retrospective</p>
            </div>
            <div>
                <p>團隊在自省會議裡，</p>
                <p>會共同回顧該短衝歷程發生的事情：</p>
                <p>・好的地方 </p>
                <p>・可以改進的地方</p>
                <p>・如何維持我們已有的成功經驗</p>
            </div>
            <div>
                <p>優化工作流程、讓團隊有變得更好的機會。</p>
                <p>推薦工具：Confluence</p>
            </div>
            <div class="w-full">
                <div class="w-52 h-14 ml-auto mr-20
                    flex justify-evenly items-center text-white
                    bg-bg2 hover:bg-bg3 rounded-[10px] 
                    duration-150 cursor-pointer" @click="nextstep">
                    <span>開始試煉</span>
                    <img src="../../assets/img/playbtn.png" alt="">
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