<template>
    <div class="relative w-screen h-screen pt-20
    flex flex-col justify-start items-center">
        <div class="w-[70%] h-[130px]
        flex justify-center items-center
        text-xs text-style1 font-semibold tracking-wider
        bg-bg1 rounded-[30px] drop-shadow-shadow1">
            請把需求放到產品待辦清單，並調整待辦的優先度順序。公司也推薦使用
            <img src="../../assets/img/Jira.png" alt="" class="max-w-[100px] max-h-[35px] mx-4 mb-1">
            來做任務的管理喔！
        </div>
        <div class="relative w-[688px] h-full mt-12 pt-6 px-8
        flex flex-col justify-start items-center
        bg-white rounded-t-[25.16px] drop-shadow-shadow2">
            <div class="text-style1 text-base tracking-widers font-notosans-bold">產品待辦清單 ProductBacklog</div>
            <div class="w-full mt-12 
            flex flex-col justify-start items-center gap-y-4
            text-style2">
                <p class="flex justify-center items-center">優先度高<img src="../../assets/img/arrow_up.png" alt=""
                        class="max-w-[17px] max-h-[17px] ml-1"></p>
                <div class="container flex flex-col justify-start items-center gap-y-4" @dragover="dragOver($event)"
                    @dragleave="dragLeave($event)" @drop="drop($event)">
                    <div v-for="(data, index) in dropContainer">
                        <div v-if="data" class="w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" @dragstart="dragStart($event)"
                            @dragend="dragEnd($event)" :data-info="data">{{ data }}</div>
                        <div v-else class="w-[600px] h-[76px] bg-[url('assets/img/bgimg1.png')]"></div>
                    </div>
                </div>
                <p class="flex justify-center items-center">優先度低<img src="../../assets/img/arrow_down.png" alt=""
                        class="max-w-[17px] max-h-[17px] ml-1"></p>
            </div>
            <div class="draggable absolute top-[30%] left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="會員系統（登入、註冊、管理)）">
                會員系統（登入、註冊、管理)）</div>
            <div class="draggable absolute top-[50%] left-[55%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="後台職缺管理功能 （資訊上架、下架、顯示應徵者資料）">
                後台職缺管理功能 （資訊上架、下架、顯示應徵者資料）</div>
            <div class="draggable absolute top-[65%] left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="應徵者的線上履歷編輯器">
                應徵者的線上履歷編輯器</div>
            <div class="draggable absolute top-[55%] -left-[50%] w-[600px] h-[76px]
            flex justify-start items-center pl-8 border-2 border-[#8E7E74]
            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10" draggable="true"
                @dragstart="dragStart($event)" @dragend="dragEnd($event)" data-info="前台職缺列表 （缺詳細內容、點選可發送應徵意願）">
                前台職缺列表 （缺詳細內容、點選可發送應徵意願）</div>

            <div class="w-[80%] h-20 mt-[auto] mb-[4vh]
                    flex justify-center items-center 
                    bg-bg2 hover:bg-bg3 rounded-[30px] 
                    text-white text-base font-notosans-bold
                    duration-150 cursor-pointer select-none" @click="submit">我完成了！
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import gsap from 'gsap'

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { nextstep } = inject('nextsteps')

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

// container
const dragOver = (e, index) => {
    e.preventDefault(); //dropping inside element is disabled by default
    // e => the container
    console.log(e)

    const dragging = document.querySelector('.dragging')
    dropContainer.value[index] = dragging?.dataset.info
    console.log(dropContainer.value)
    // const container = document.querySelectorAll('.container')
    // container[index].classList.add('bg-bg8')
    // const afterElement = getDragAfterElement(e.clientY)
    // console.log(afterElement)
    // if (afterElement == null) {
    //     e.target.appendChild(dragging)
    //     dragging.style.position = 'relative';
    //     dragging.style.top = 0;
    //     dragging.style.left = 0;
    // } else {

    // }

    // e.target.classList.remove('dragging')
    // container[index].classList.remove('bg-bg8')
}

const getDragAfterElement = (y) => {
    const draggable = document.querySelectorAll('.draggable:not(.dragging)')
    const draggableElements = [...draggable]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }

    }, { offset: Number.NEGATIVE_INFINITY }).element
}


const drop = (e, index) => {
    // e.preventDefault()
    // if (dropContainer.value[index]) return

    // const dragging = document.querySelector('.dragging')
    // dragging.style.position = 'relative';
    // dragging.style.top = 0;
    // dragging.style.left = 0;
    // e.target.classList.remove('dragging')
    // e.target.classList.remove('bg-bg8')

    // // dropContainer.value.forEach((data, index) => {
    // //     if (data == e.target.children[0].dataset.info) {
    // //         dropContainer.value[index] = ''
    // //     }
    // // })

    // dropContainer.value[index] = e.target.children[0]
    // console.log(dropContainer.value)
}

const dragLeave = (e, index) => {
    e.preventDefault();

    if (dropContainer.value[index]) return

    e.target.classList.remove('bg-bg8')
}



const submit = () => {
    // nextstep()
}
</script>