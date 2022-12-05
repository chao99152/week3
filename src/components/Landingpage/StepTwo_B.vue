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
        <div class="w-[688px] h-full mt-12 pt-6 px-8
        flex flex-col justify-start items-center
        bg-white rounded-t-[25.16px] drop-shadow-shadow2">
            <div class="text-style1 text-base tracking-widers font-notosans-bold">產品待辦清單 ProductBacklog</div>
            <div class="w-full mt-12 
            flex flex-col justify-start items-center gap-y-4
            text-style2">
                <p class="flex justify-center items-center">優先度高<img src="../../assets/img/arrow_up.png" alt=""
                        class="max-w-[17px] max-h-[17px] ml-1"></p>
                <div class="w-[600px] h-[76px] bg-[url('assets/img/bgimg1.png')]"></div>
                <div class="w-[600px] h-[76px] bg-[url('assets/img/bgimg1.png')]"></div>
                <div class="w-[600px] h-[76px] bg-[url('assets/img/bgimg1.png')]"></div>
                <div class="w-[600px] h-[76px] bg-[url('assets/img/bgimg1.png')]"></div>
                <p class="flex justify-center items-center">優先度低<img src="../../assets/img/arrow_down.png" alt=""
                        class="max-w-[17px] max-h-[17px] ml-1"></p>
            </div>
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
import { onMounted, inject } from 'vue';
import gsap from 'gsap'

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { nextstep } = inject('nextsteps')


const submit = () => {
    // nextstep()
}
</script>