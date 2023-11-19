<template>
  <div
    class="relativew-full h-20 bg-[rgb(27,27,35)] rounded-b-3xl border-t-2 border-spacing-1 border-white/10 overflow-hidden">
    <div class="w-full h-40 transition-all" :class="visible ? ' -translate-y-20' : ''">
      <div class="w-full h-20 px-8 flex items-center">
        <div @click="visible = true"
          class="w-16 h-16 rounded-full bg-black flex items-center justify-center cursor-pointer">
          <img class="w-14 h-14 rounded-full"
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.raU_1uKZdRb26GGcq1Dw5QHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>

      </div>
      <div class="w-full h-20">2</div>
    </div>
    <Dialog :visible.sync="visible">
      <!-- Music内容 -->
      <div class="w-full h-12 p-4">
        <div @click="visible = false" class="icon-btn">
          <i class="iconfont icon-arrow-down-"></i>
        </div>
      </div>
      <div class="w-full h-full flex">
        <div class="  w-2/5 h-full flex justify-center">
          <div class=" w-56 h-56 bg-white/10 rounded-full mt-20  flex justify-center items-center">
            <img class=" w-52 h-52  rounded-full object-cover"
              src="https://tse3-mm.cn.bing.net/th/id/OIP-C.raU_1uKZdRb26GGcq1Dw5QHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
        </div>
        <div class="flex-1 h-[calc(100%-48px)]"></div>
      </div>
      <!-- Music内容结束 -->
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../Dialog.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Dialog,
  },
};
</script>
