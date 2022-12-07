<template>
    <div class="relative w-screen h-screen pl-80 
    flex justify-start items-start">
        <div class="w-[1000px] h-1/2
        bg-bg1 rounded-[30px] pt-[5%] pl-24 mt-[5%]
        text-base text-style1 leading-[55px]
        drop-shadow-shadow1">
            <div class="flex flex-col justify-start items-start gap-y-[5vh]
            font-semibold tracking-wide">
                <div>
                    <p>沒錯，如同小斯說的，我這邊已經把剛剛討論好的點數標</p>
                    <p>上去囉～你來練習<span class="text-style3">把任務排到短衝待辦清單</span>吧！</p>
                    <p>By the way，我們平常管理任務是使用<img src="../../assets/img/Jira.png" alt=""
                            class="inline max-w-[100px] max-h-[35px] mx-4 mb-1">這套軟</p>
                    <p>軟體，你有時間記得先去註冊和熟悉唷～</p>
                </div>

                <div class="w-full">
                    <div class="w-52 h-14 ml-auto mr-20 mt-4
                    flex justify-evenly items-center text-white
                    bg-bg2 hover:bg-bg3 rounded-[10px] 
                    duration-150 cursor-pointer" @click="nextstep">
                        <span>開始試煉</span>
                        <img src="../../assets/img/playbtn.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-6 left-6"><img src="../../assets/img/backbtn.png" alt="" class="cursor-pointer"
                @click="laststep"></div>

        <div class="absolute bottom-0 right-[20%] origin-bottom">
            <img src="../../assets/img/ppl_1.png" alt="">
            <img src="../../assets/img/name_1.png" alt="" class="absolute -top-8 -right-20">
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// provide from Landingpage.vue
const { username } = inject('setUsername')
const { stepcount, nextstep, laststep } = inject('changesteps')
</script>