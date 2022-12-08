<template>
    <div class="w-[1000px] h-auto
                  bg-bg1 rounded-[30px] pt-[7%] pl-24
                    text-base text-style1 leading-[55px]
                    drop-shadow-shadow1" :class="(stepcount == 12) ? [''] : ['pb-[7%]']">
        <div class="flex flex-col justify-start items-start gap-y-[5vh]
                font-semibold tracking-wide ">
            <div>
                <p>等等等等等，你都還不知道什麼是 <span class="text-style3">Sprint</span> 吧！ 讓我先為</p>
                <p>你介紹一下～ 仔細聽好唷，等等會考考你！</p>
            </div>
            <div v-if="(stepcount === 12)" class="w-full">
                <div class="w-44 h-[70px] ml-auto mr-20 mb-12
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