<template>
    <div class="relative w-screen h-screen pl-80 
    flex justify-start items-starts">
        <div class="h-fit duration-300 ease-in"
            :class="(stepcount == 12) ? ['translate-y-[10%]'] : 
            (stepcount == 13) ? ['-translate-y-[10%]'] : 
            (stepcount == 14) ? ['-translate-y-[30%]'] :
            (stepcount == 15) ? ['-translate-y-[60%]'] : ['']">
            <Step5compAVue />
            <Step5compBVue/>
            <Step5compCVue/>
            <Step5compDVue/>
        </div>
        <div v-if="(stepcount != 12)" class="fixed bottom-6 left-6"><img src="../../assets/img/backbtn.png" alt="" class="cursor-pointer"
                @click="laststep"></div>

        <div class="absolute bottom-0 right-[20%] origin-bottom duration-300 ease-in delay-300">
            <img src="../../assets/img/ppl_1.png" alt="">
            <img src="../../assets/img/name_1.png" alt="" class="absolute -top-8 -right-20 max-w-[220px] max-h-[400px]">
        </div>
    </div>
</template>

<script setup lang="ts">
import Step5compAVue from './Step5compA.vue';
import Step5compBVue from './Step5compB.vue';
import Step5compCVue from './Step5compC.vue'
import Step5compDVue from './Step5compD.vue'
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