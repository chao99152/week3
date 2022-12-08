<template>
    <div class="relative w-screen h-screen pt-20
    flex flex-col justify-start items-center">
        <div class="w-[70%] h-[130px]
        flex justify-center items-center
        text-xs text-style1 font-semibold tracking-wider
        bg-bg1 rounded-[30px] drop-shadow-shadow1">
            在這經典的 Scrum 流程圖中， 這些流程分別代表哪一個會議呢？請把對應的流程拖曳到正確位置。
        </div>
        <div class="relative w-[65%] h-full mt-12 pt-6 px-8
        flex flex-col justify-start items-center
        bg-white rounded-t-[25.16px] drop-shadow-shadow2">
            <div class="text-style1 text-base tracking-widers font-notosans-bold">Scrum 流程圖</div>
            <div class="w-full h-[70%] mt-4
            flex flex-col justify-start items-center gap-y-4
            text-style2
            bg-[url('assets/img/Scrumflow.png')] bg-center bg-no-repeat bg-cover">
                
            </div>
            <div class="absolute top-[30%] left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="membersystem">
                會員系統（登入、註冊、管理)）</div>
            <div class="absolute top-[50%] left-[55%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="backendsystem">
                後台職缺管理功能 （資訊上架、下架、顯示應徵者資料）</div>
            <div class="absolute top-[65%] left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="resumeedit">
                應徵者的線上履歷編輯器</div>
            <div class="absolute top-[55%] -left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="frontendlist">
                前台職缺列表 （缺詳細內容、點選可發送應徵意願）</div>

            <div class="w-[45%] h-20 mt-[auto] mb-[4vh]
                    flex justify-center items-center 
                    bg-bg2 hover:bg-bg3 rounded-[30px] 
                    text-white text-base font-notosans-bold
                    duration-150 cursor-pointer select-none" @click="submit">我完成了！
            </div>
        </div>

        <teleport to='body'>
            <StepTwoAlertVue v-if="showAlert" @toggleAlert="toggleAlert" />
        </teleport>

        <teleport to='body'>
            <StepTwodoneVue v-if="checkdropCon" />
        </teleport>

    </div>
</template>

<script setup lang="ts">
import StepTwoAlertVue from './modal/Step2alert.vue'
import StepTwodoneVue from './modal/Step2done.vue'
import { ref, onMounted, inject } from 'vue';
import gsap from 'gsap'

// provide from Landingpage.vue
const { username } = inject('setUsername')

const dropContainer = ref(['', '', '', ''])

const dragStart = (e) => {
    e.target.classList.add('dragging')
    // e.target.style.top = 'none'
    // e.target.style.left = 'none'
    // e.target.style.position = 'relative'
    // console.log('dragstart')
}

const dragEnd = (e) => {
    e.preventDefault()
    e.target.classList.remove('dragging')
    e.target.classList.remove('bg-bg8')
}

const dragOver = (e, index) => {
    e.preventDefault();
    if (dropContainer.value[index]) return
    e.target.classList.add('bg-bg8')
}

const drop = (e, index) => {
    e.preventDefault()
    if (dropContainer.value[index]) return

    const dragging = document.querySelector<HTMLDivElement>('.dragging')
    e.target.appendChild(dragging)
    dragging.style.position = 'relative';
    dragging.style.top = 0;
    dragging.style.left = 0;
    e.target.classList.remove('dragging')
    e.target.classList.remove('bg-bg8')

    dropContainer.value.forEach((data, index) => {
        if (data == e.target.children[0].dataset.info) {
            dropContainer.value[index] = ''
        }
    })

    dropContainer.value[index] = e.target.children[0].dataset.info
}

const dragLeave = (e, index) => {
    e.preventDefault();

    if (dropContainer.value[index]) return

    e.target.classList.remove('bg-bg8')
}

const showAlert = ref(false)
const toggleAlert = () => showAlert.value = !showAlert.value

const checkdropCon = ref(false)
const submit = () => {
    let checkArr = dropContainer.value.filter(data => data == '').length
    if (checkArr) return toggleAlert()
    checkdropCon.value = true
}
</script>