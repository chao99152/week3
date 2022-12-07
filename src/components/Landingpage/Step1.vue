<template>
    <div class="w-screen h-screen pt-16 
    bg-white">
        <div id="user_data" class="flex flex-col justify-start items-center opacity-0">
            <div class="text-style1 font-[900] text-base">請選擇代表你的角色。</div>
            <div class="flex justify-center items-center gap-64 mt-24">
                <input id="male" type="radio" name="gender" class="hidden peer/men" value="male">
                <label for="male" class="w-[220px] h-[400px] 
                bg-[url('assets/img/character_men.png')] bg-center bg-cover bg-no-repeat
                hover:bg-[url('assets/img/character_men2.png')] ease-in duration-100
                peer-checked/men:bg-[url('assets/img/character_men2.png')]
                cursor-pointer"></label>
                <input id="female" type="radio" name="gender" class="hidden peer/women" value="female">
                <label for="female" class="w-[220px] h-[400px]
                bg-[url('assets/img/character_women.png')] bg-center bg-cover bg-no-repeat
                hover:bg-[url('assets/img/character_women2.png')] ease-in duration-100
                peer-checked/women:bg-[url('assets/img/character_women2.png')]
                cursor-pointer"></label>
            </div>
            <div class="w-[525px] mt-20
            flex flex-col justify-start items-center gap-7">
                <input id="user_name" type="text" placeholder="請輸入你的名字。" maxlength="10" class="w-full h-[80px] pl-16 outline-none
            border-[1px] border-black rounded-[30px]
            text-style2 text-sm font-bold placeholder:text-style2">
                <div class="w-full h-[80px]
            flex justify-center items-center
            text-base text-white font-[900]
            bg-bg2 hover:bg-bg3 rounded-[30px] duration-150
            cursor-pointer" @click="submit">確定</div>
            </div>
        </div>
        <teleport to='body'>
            <StepOneAalertVue v-if="showAlert" @toggleAlert="toggleAlert" />
        </teleport>
    </div>
</template>

<script setup lang="ts">
import StepOneAalertVue from './modal/StepOnealert.vue';
import { ref, inject, onMounted } from 'vue'
import gsap from 'gsap'

// provide from Landingpage.vue
const { setUsername } = inject('setUsername')
const { nextstep } = inject('changesteps')
const { setGender } = inject('setUsergender')

onMounted(() => {
    gsap.to('#user_data', {
        delay: .75,
        duration: 1,
        opacity: 1
    })
})

const showAlert = ref(false)
const toggleAlert = () => showAlert.value = !showAlert.value

const submit = async () => {
    if (!document.getElementById('user_name')?.value.trim()) return showAlert.value = true
    gsap.to('#user_data', {
        opacity: 0,
        duration: 1,
    })
    await setUsername(document.getElementById('user_name')?.value.trim())
    await setGender(document.querySelector('input[name="gender"]:checked')?.value)
    setTimeout(() => {
        nextstep()
    }, 1000)
}
</script>