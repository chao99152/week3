<template>
  <div>
    <router-view v-slot="{ Component }" :key="$route.path">
      <transition name="route" mode="out-in" appear>
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 1s ease;
}

.route-leave-active {
  transition: all 1s ease;
}
</style>