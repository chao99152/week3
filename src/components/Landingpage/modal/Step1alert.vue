<template>
    <div class="absolute left-0 top-0 w-screen h-screen 
    flex justify-center items-center bg-bg4">
        <div class="w-[750px] h-[350px]
        flex justify-center items-center
        bg-bg1 rounded-[30px] text-base z-10 backdrop-blur-[15px]">
            <div class="w-[70%]">
                <p class="text-style1 font-bold">嘿！菜鳥！</p>
                <p class="text-style1 font-bold mt-2">不打算報上名嗎？</p>
                <div class="w-44 h-[70px] mt-12 ml-auto
                flex justify-evenly items-center 
                text-style2 font-bold
                border-[3px] border-[#CFC8C4] rounded-[10px]
                hover:bg-bg5 duration-150 cursor-pointer" @click="emits('toggleAlert')">
                    好的
                    <img src="../../../assets/img/playbtn2.png" alt="">
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 right-[20%]">
            <img src="../../../assets/img/landing_ppl5.png" alt="" class="w-[90%] h-[90%]">
            <img src="../../../assets/img/name.png" alt="" class="absolute -top-16 -right-12 scale-95">
        </div>

    </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{ (e: 'toggleAlert'): void }>()
</script>