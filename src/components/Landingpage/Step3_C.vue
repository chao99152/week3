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
                    <p>菜鳥，你應該不知道點數是什麼意思吧哈哈！</p>
                    <p>我來跟你介紹一下吧～</p>
                    <p>Sprint Point 目的是為了衡量速度，是用大概花費的時間</p>
                    <p>預估出的相對點數。</p>
                </div>

                <div class="w-full">
                    <div class="w-44 h-[70px] mt-4 ml-auto mr-20
                        flex justify-evenly items-center 
                      text-style2 font-bold
                        border-[3px] border-[#CFC8C4] rounded-[10px]
                      hover:bg-bg5 duration-150 cursor-pointer" @click="nextstep">
                        繼續
                        <img src="../../assets/img/playbtn2.png" alt="">
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