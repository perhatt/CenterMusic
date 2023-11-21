<template>
  <div :class="OpenPlayer ? 'h-full rounded-3xl' : ''"
    class="absolute left-0 bottom-0 w-full h-20 rounded-b-3xl bg-gray-900 transition-all duration-300 ease-in-out flex flex-col-reverse">
    <div class="w-full h-20 border-t border-white/20 border-spacing-1">
      <div class="w-full h-20 rounded-b-3xl flex items-center px-2">
        <!-- 音乐图片 -->
        <div class=" w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer musicImg"
          @click="OpenPlayer = !OpenPlayer">
          <img class="w-14 h-14 rounded-full"
            src="https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg" alt="">
        </div>
        <!-- 歌曲信息 -->
        <div class="w-auto min-w-[100px] h-14 ml-2">
          <div class="flex flex-col justify-center h-14">
            <div class="text-white text-sm font-bold max-w-[200px] whitespace-nowrap truncate">
              Öğretmen Öğrencisine Aşık Oluyor
            </div>
            <div class="text-white text-xs mt-1 font-semibold scale-75 origin-left hover:text-red-500 cursor-pointer">
              Zahir Music
            </div>
          </div>
        </div>




        <div class="relative flex-1 h-14 mb-4 flex justify-center items-center gap-2">
          <div @click="currentTime--"
            class="w-10 h-10  hover:font-bold transition-all hover:bg-white/10  rounded-full text-lg flex justify-center items-center cursor-pointer">
            <i class="iconfont icon-arrow-left-1"></i>
          </div>

          <div @click="PlayMusic"
            class="w-10 h-10 hover:bg-red-500/50 bg-white/10 rounded-full text-lg flex justify-center items-center cursor-pointer">
            <i class="iconfont icon-play" :class="!play ? 'icon-play' : 'icon-pause'"></i>
          </div>

          <div @click="currentTime++"
            class="w-10 h-10  hover:font-bold transition-all hover:bg-white/10  rounded-full text-lg flex justify-center items-center cursor-pointer">
            <i class="iconfont icon-arrow-right-"></i>
          </div>

          <div class=" absolute -bottom-1 flex items-center justify-center w-full px-4  h-1  gap-2 text-xs">
            <p>00:00</p>
            <input type="range" v-model="currentTime" class="w-full h-full">
            <p>04:03</p>
          </div>
        </div>

        <!-- 列表 -->
        <div class="w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-white/10 rounded-lg ">
          <i class="iconfont icon-bullet-list"></i>
        </div>
      </div>
    </div>
    <div v-if="OpenPlayer" class="w-full h-auto flex-1 p-4">
      {{ currentTime }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      OpenPlayer: false,
      play: false,
      currentTime: ''
    };
  },
  methods: {
    PlayMusic() {
      this.play = !this.play
      let element = document.querySelector('.musicImg');
      if (!this.play) {
        element.style.animationPlayState = 'paused';
      } else {
        element.style.animationPlayState = 'running';
        element.style.animation = 'spin 6s linear infinite';
      }
    },

  },
};
</script>
<style scoped>
[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  outline: 0;
  background-color: transparent;
}

/* 定义range控件轨道的样式 */
[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}

/* 定义range控件容器的样式 */


/* 定义range控件拇指的样式 */
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  margin-top: -3px;
  /* 使用border-image属性给拇指添加渐变边框 */
}

[type="range"]::-webkit-slider-thumb:hover {
  cursor: pointer;
}
</style>