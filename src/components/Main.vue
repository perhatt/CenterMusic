<template>
  <div class="relative w-full h-full ">
    <div class="absolute w-full h-full p-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(-100%);
}
</style>
