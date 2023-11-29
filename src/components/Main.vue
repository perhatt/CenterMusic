<template>
  <div class="relative w-full h-full  overflow-y-scroll">
    <div class="absolute w-full h-full">
      <router-view></router-view>
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
