<template>
  <transition name="fade">
    <div
      class="fixed top-[26px] right-[calc(10%+2px)] w-[calc(80%-4px)] h-[calc(100%-134px)] rounded-t-3xl  z-50 flex bg-[rgb(27,27,35)]"
      v-show="visible">
      <div class="w-full h-full">
        <slot> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MusicInfo",
  data() {
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
