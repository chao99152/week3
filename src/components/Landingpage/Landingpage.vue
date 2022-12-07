<template>
    <div class="relative w-screen h-screen
    flex justify-center items-center font-notosans-light
    bg-[url('assets/img/landingbg.png')] bg-no-repeat bg-top bg-cover">


        <transition name="opacity">
            <LandingcompA v-if="stepcount === 1" @ppl_anim="ppl_anim" />
            <LandingcompB v-else-if="stepcount === 2" />
            <StepOneVue v-else-if="stepcount === 3" />
            <StepTwo_AVue v-else-if="stepcount === 4" />
            <StepTwo_BVue v-else-if="stepcount === 5" />
            <StepThree_AVue v-else-if="stepcount === 6" />
            <StepThree_BVue v-else-if="stepcount === 7 || stepcount === 8" />
            <StepThree_CVue v-else-if="stepcount === 9" />
            <StepThree_DVue v-else-if="stepcount === 10" />
            <StepFour_Vue v-else-if="(stepcount === 11)" />
        </transition>


        <!-- <div id="ppl_1" class="absolute top-0 -left-[13%] w-[400px] h-[475px]
        bg-[url('assets/img/landing_ppl1.png')] bg-no-repeat bg-center bg-cover"></div>
        <div id="ppl_2" class="absolute -bottom-[35%] -left-[3%] w-[500px] h-[500px]
        bg-[url('assets/img/landing_ppl2.png')] bg-no-repeat bg-center bg-cover"></div>
        <div id="ppl_3" class="absolute -top-[13%] -right-[13%] w-[450px] h-[450px]
        bg-[url('assets/img/landing_ppl3.png')] bg-no-repeat bg-center bg-cover"></div>
        <div id="ppl_4" class="absolute -bottom-[35%] right-[7.5%] w-[550px] h-[400px]
        bg-[url('assets/img/landing_ppl4.png')] bg-no-repeat bg-center bg-cover"></div> -->
    </div>
</template>

<script setup lang="ts">
import LandingcompA from './LandingcompA.vue'
import LandingcompB from './LandingcompB.vue'
import StepOneVue from './Step1.vue'
import StepTwo_AVue from './Step2_A.vue'
import StepTwo_BVue from './Step2_B.vue'
import StepThree_AVue from './Step3_A.vue'
import StepThree_BVue from './Step3_B.vue'
import StepThree_CVue from './Step3_C.vue'
import StepThree_DVue from './Step3_D.vue'
import StepFour_Vue from './Step4.vue'

import { ref, onMounted, provide } from 'vue'
import gsap from 'gsap'

onMounted(() => {
    let ppl_anim1 = gsap.timeline({})
    ppl_anim1.to('#ppl_1', {
        delay: 1,
        left: 0,
        duration: 0.5,
    })

    let ppl_anim2 = gsap.timeline({})
    ppl_anim2.to('#ppl_2', {
        delay: 1,
        bottom: 0,
        left: 7.5 + '%',
        duration: 0.5,
    })

    let ppl_anim3 = gsap.timeline({})
    ppl_anim3.to('#ppl_3', {
        delay: 1,
        top: 0,
        right: 0,
        duration: 0.5,
    })

    let ppl_anim4 = gsap.timeline({})
    ppl_anim4.to('#ppl_4', {
        delay: 1,
        bottom: 0,
        right: 7.5 + '%',
        duration: 0.5,
    })

    setTimeout(() => {
        delay_click.value = false
    }, 1500)
})

const stepcount = ref(11)
const nextstep = () => stepcount.value += 1
const laststep = () => stepcount.value -= 1
provide('changesteps', { stepcount, nextstep, laststep })
const delay_click = ref(true)
const ppl_anim = () => {
    if (delay_click.value) return
    let ppl_anim1 = gsap.timeline({})
    ppl_anim1.to('#ppl_1', {
        transform: 'translateX(-100%)',
    })
    let ppl_anim2 = gsap.timeline({})
    ppl_anim2.to('#ppl_2', {
        transform: 'translateX(-100%) translateY(100%)',
    })
    let ppl_anim3 = gsap.timeline({})
    ppl_anim3.to('#ppl_3', {
        transform: 'translateX(100%)',
    })
    let ppl_anim4 = gsap.timeline({})
    ppl_anim4.to('#ppl_4', {
        transform: 'translateX(100%) translateY(100%)',
    })

    nextstep()
}

const username = ref('')
const setUsername = (name: string) => username.value = name
provide('setUsername', { username, setUsername })
const usergender = ref('')
const setGender = (gender: string) => usergender.value = gender
provide('setUsergender', { usergender, setGender })
</script>

<style>
.opacity-enter-from,
.opacity-leave-to {
    position: absolute;
    opacity: 0;
}

.opacity-enter-active {
    opacity: 1;
    transition: all 1s ease;
}

.opacity-leave-active {
    transition: all .5s ease;
}
</style>