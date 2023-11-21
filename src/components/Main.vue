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
<script>
import { Transition } from 'vue';
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all .5s;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
