<template>
    <div class="relative w-screen h-screen pt-36 pl-80">
        <div class="w-[850px] h-[500px] 
        flex justify-center items-center 
        bg-bg1 rounded-[30px] 
        text-base text-style1 font-notosans-light leading-[50px]
        drop-shadow-shadow1">
            <div>
                <div class="font-semibold tracking-wider">
                    <p>菜鳥！恭喜 你成為六角學院的正式員工啦！</p>
                    <p>在正式加入專案開發之前，</p>
                    <p>需要請你先了解Scrum的流程與精神！</p>
                    <p class="mt-16 font-semibold">成功通過Scrum新手村的試煉吧！</p>
                </div>
                <div class="w-full" @click="nextstep">
                    <div class="w-52 h-14 mt-8 ml-auto
                flex justify-evenly items-center text-white
                bg-bg2 hover:bg-bg3 rounded-[10px] 
                duration-150 cursor-pointer">
                        <span>開始試煉</span>
                        <img src="../../assets/img/playbtn.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 right-[20%] origin-bottom">
            <img id="ppl_5" src="../../assets/img/landing_ppl5.png" alt="">
            <img src="../../assets/img/name.png" alt="" class="absolute -top-16 -right-12">
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// provide from Landingpage.vue
const { nextstep } = inject('nextsteps')
</script>