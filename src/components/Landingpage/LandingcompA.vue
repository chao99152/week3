<template>
    <div class="flex justify-center items-center cursor-pointer">
        <div class="flex flex-col justify-start items-center mb-10">
            <img id="landing_title" src="../../assets/img/landing_title.png" alt=""
                class="scale-75 -translate-y-[700%] select-none">
            <img id="landing_text" src="../../assets/img/landingpage_text.png" alt=""
                class="mt-12 opacity-0 select-none">
        </div>
        <div class="fixed w-screen h-screen cursor-pointer" @click="emits('ppl_anim')"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap'

const emits = defineEmits<{ (e: 'ppl_anim'): void }>()
onMounted(() => {
    let img1 = gsap.timeline({})
    img1.to('#landing_title', {
        delay: 1,
        translateY: 0,
        duration: 0.6,
    }).to('#landing_title', {
        duration: 0.2,
        scale: 1,
    })

    let landing_text = gsap.timeline({})
    landing_text.to('#landing_text', {
        delay: 1.5,
        opacity: 1,
        duration: .5
    })
})
</script>