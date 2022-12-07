<template>
    <div class="grid grid-cols-2 ">
        <div class="col-3">
            <draggable class="list-group" :list="itemList" group="people" itemKey="name">
                <template #item="{ element, index }">
                    <div class="relative w-[600px] h-[76px]
                            flex justify-start items-center pl-4 border-2 border-[#8E7E74]
                            text-style1 text-xs font-semibold bg-bg7 cursor-pointer z-10">
                        {{ element.title }}
                        <span class="absolute right-4 w-[40px] h-[40px]
                            flex justify-center items-center pb-1
                            bg-white border-2 border-[#8E7E74] rounded-full">{{ element.point }}</span>
                    </div>
                </template>
            </draggable>
        </div>

        <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable class="list-group" :list="list2" group="people" itemKey="name">
                <template #item="{ element, index }">
                    <div class="list-group-item">{{ element.name }} {{ index }}</div>
                </template>
            </draggable>
        </div>

        <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

        <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from "vuedraggable";
// name: "two-lists",
//     display: "Two Lists",
//         order: 1,
//             components: {
//     draggable
// },

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
const list1 = ref([
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 }
])

const list2 = ref([
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 }
])


const add = () => {
    list1.value.push({ name: "Juan" });
}
const replace = () => {
    list1.value = [{ name: "Edgard" }];
}

const clone = (el) => {
    return {
        name: el.name + " cloned"
    };
}
</script>