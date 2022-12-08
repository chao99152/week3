<template>
    <div class="relative w-screen h-screen pt-12
    flex flex-col justify-start items-center">
        <div class="relative w-[70%] h-[110px] pl-[7%]
        flex justify-start items-center
        text-xs text-style1 font-semibold tracking-wider
        bg-bg1 rounded-[30px] drop-shadow-shadow1">
            請將產品待辦清單中的項目拖曳到短衝清單。 (20點內)
        </div>
        <div class="w-[70%] h-[82.5%] flex justify-between items-end  mt-[auto]">
            <div class="relative h-full mt-12 pt-6 px-8
            flex flex-col justify-start items-center
            bg-white rounded-t-[25.16px] drop-shadow-shadow2">
                <div class="w-[600px] flex justify-center items-center
                text-style1 text-base tracking-widers font-notosans-bold">產品待辦清單 ProductBacklog
                </div>
                <div class="w-full mt-8 
            flex flex-col justify-start items-center gap-y-6
            text-style2">
                    <p class="flex justify-center items-center">優先度高<img src="../../assets/img/arrow_up.png" alt=""
                            class="max-w-[17px] max-h-[17px] ml-1"></p>
                    <draggable class="list-group" :list="itemList" group="people" itemKey="name">
                        <template #item="{ element, index }">
                            <div class="relative w-[600px] h-[76px]
                                flex justify-start items-center pl-4 border-2 border-[#8E7E74]
                              text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10 mb-6">
                                {{ element.title }}
                                <span class="absolute right-4 w-[40px] h-[40px]
                                flex justify-center items-center pb-1
                              bg-white border-2 border-[#8E7E74] rounded-full">{{ element.point }}</span>
                            </div>
                        </template>
                    </draggable>
                    <p class="flex justify-center items-center -mt-6">優先度低<img src="../../assets/img/arrow_down.png"
                            alt="" class="max-w-[17px] max-h-[17px] ml-1"></p>
                </div>
                <!-- 
                <div class="w-[80%] h-20 mt-[auto] mb-[4vh]
            flex justify-center items-center 
            bg-bg2 hover:bg-bg3 rounded-[30px] 
            text-white text-base font-notosans-bold
            duration-150 cursor-pointer select-none" @click="submit">我完成了！
                </div> -->
            </div>
            <div class="relative h-full pt-6 px-8
            flex flex-col justify-start items-center
            bg-bg9 rounded-t-[25.16px] drop-shadow-shadow2">
                <div class="w-[600px] 
                flex justify-center items-center
                text-style1 text-base tracking-widers font-notosans-bold">開發Ａ組的短衝辦清單</div>
                <p class="flex justify-center items-center 
                    text-style1 font-notosans-light mt-8 mb-6">{{ totelPoint }}/20點</p>
                <draggable class="list-group" :list="selectedList" group="people" itemKey="name">
                    <template #item="{ element, index }">
                        <div v-if="element.title" class="relative w-[600px] h-[76px]
                            flex justify-start items-center pl-4 border-2 border-[#8E7E74]
                            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10 mb-6">
                            {{ element.title }}
                            <span class="absolute right-4 w-[40px] h-[40px]
                            flex justify-center items-center pb-1
                            bg-white border-2 border-[#8E7E74] rounded-full">{{ element.point }}</span>
                        </div>
                        <div v-else class="w-[600px] h-[76px] bg-[url('assets/img/bgimg2.png')] mb-6"></div>
                    </template>
                </draggable>
                <!-- <div class="w-full mt-8
                    flex flex-col justify-start items-center gap-y-6">

                    <div v-for="(container, index) in 4" class="w-[600px] h-[76px] bg-[url('assets/img/bgimg2.png')]">
                    </div>
                </div> -->

                <div class="w-[80%] h-20 mt-[auto] mb-[4vh]
            flex justify-center items-center 
            bg-bg2 hover:bg-bg3 rounded-[30px] 
            text-white text-base font-notosans-bold
            duration-150 cursor-pointer select-none" @click="submit">準備好了，開始 Sprint
                </div>
                <img src="../../assets/img/ppl_3.png" alt="" class=" absolute top-0 right-0
            w-[111.85px] max-h-[194px] -translate-y-[100%]">
            </div>
        </div>

        <teleport to='body'>
            <StepFourAlertVue v-if="showAlert" @toggleAlert="toggleAlert" />
        </teleport>

        <teleport to='body'>
            <StepFourdoneVue v-if="checkdropCon" />
        </teleport>

    </div>
</template>

<script setup lang="ts">
import StepFourAlertVue from './modal/Step4alert.vue'
import StepFourdoneVue from './modal/Step4done.vue'

import { ref, inject, watchEffect } from 'vue';
import gsap from 'gsap'
import draggable from 'vuedraggable'


// import { DndProvider, useDrag } from 'vue3-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

// const [collect, drag, dragPreview] = useDrag(() => ({
//     type: 'Box',
// }))



// provide from Landingpage.vue
const { username } = inject('setUsername')

const itemList = ref([
    {
        title: '前台職缺列表 （缺詳細內容、點選可發送應徵意願）',
        point: 8
    },
    {
        title: '後台職缺管理功能 （資訊上架、下架、顯示應徵者資料）',
        point: 5
    },
    {
        title: '會員系統（登入、註冊、管理)）',
        point: 4
    },
    {
        title: '應徵者的線上履歷編輯器',
        point: 13
    },
])
const selectedList = ref([])
const totelPoint = ref(0)

watchEffect(() => {
    selectedList.value
    totelPoint.value = 0
    selectedList.value.map(data => totelPoint.value += data.point)
}, { flush: 'post' })


const showAlert = ref(false)
const toggleAlert = () => showAlert.value = !showAlert.value

const checkdropCon = ref(false)
const submit = () => {
    if (totelPoint.value >= 20 || !totelPoint.value) return toggleAlert()
    checkdropCon.value = true
}
</script>

<style>
.list-group {
    width: 100%;
    min-height: 200px;
}
</style>