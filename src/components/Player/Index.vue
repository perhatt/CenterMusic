<template>
  <div :class="OpenPlayer ? 'h-full rounded-3xl' : ''"
    class="absolute left-0 bottom-0 w-full h-20 rounded-b-3xl bg-gray-900 transition-all duration-300 ease-in-out flex flex-col-reverse">
    <div class="w-full h-20 border-t border-white/20 border-spacing-1">
      <div class="w-full h-20 rounded-b-3xl flex items-center px-2">
        <!-- 音乐图片 -->
        <div class=" w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer musicImg"
          @click="OpenPlayer = !OpenPlayer, OpenList = false">
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
            <p>{{ currentTime }}</p>
            <input type="range" v-model="currentTime" min="0" max="100" step="1" @click="" class="w-full h-full">
            <p>04:03</p>
          </div>
        </div>

        <!-- 列表  icon start-->
        <div @click="OpenList = !OpenList"
          class="w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-white/10 rounded-lg ">
          <i class="iconfont icon-bullet-list"></i>
        </div>
        <!-- 列表  icon end -->
      </div>
    </div>
    <!-- Player Start -->
    <div v-if="OpenPlayer" class="w-full h-auto flex-1 p-4">
      {{ currentTime }}
    </div>
    <!-- Player End -->
  </div>

  <!-- LIst start -->
  <div @click="OpenList = false" :class="OpenList ? '' : 'delay-100 origin-bottom-right translate-x-[200%]'"
    class="absolute right-0 bootom-0 w-full h-[calc(100%-80px)]  transition-all duration-300 ease-in-out">
    <ul @click.stop="OpenMusicList" @click="OpenList = true"
      class=" w-64 h-[calc(100%-20px)] float-right rounded-bl-3xl bg-gray-900 border-bt-2 border-b border-l  border-white/40 border-spacing-1 transition-all duration-200 ease-in-out ">
      <li class="w-full h-12 px-4  flex items-center">
        <p class="text-white text-sm font-bold">音乐列表 {{ `( ${musicList.length} )` }}</p>
      </li>
      <li v-for="item in musicList" :key="item.name"
        class="w-full h-12 px-2 flex items-center hover:bg-white/10 cursor-pointer">
        <img class="w-10 h-10 rounded-xl" :alt="item.name"
          src="https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg" alt="">
        <div class="max-w-[160px] h-12 px-1 flex flex-col justify-center">
          <p class="text-xs font-bold whitespace-nowrap truncate">{{ item.name }}</p>
          <p class="text-xs whitespace-nowrap truncate text-white/40">singer</p>
        </div>
        <div class="flex-1 h-10">
          <div class="w-10 h-10 float-right icon-btn scale-75">
            <i class="iconfont icon-close-"></i>
          </div>
        </div>
      </li>
    </ul>
    <audio src="../../assets/music.mp3" @play="PlayMusic" @input="changePosition" @ended="onEnded"></audio>
  </div>
  <!-- LIst end -->
</template>
<script>
export default {
  data() {
    return {
      OpenPlayer: false,
      OpenList: false,
      play: false,
      currentTime: '12',
      SongIndex: 0,
      musicList: [
        {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg',
          url: '',
        },
      ],
    };
  },
  methods: {
    PlayMusic() {
      this.play = !this.play
      // if (this.play) {
      //   this.$refs.audioElement.pause()
      //   this.play = false
      // } else {
      //   this.$refs.audioElement.play()
      //   this.play = true
      // }
    },
    changePosition(event) {
      // this.$refs.audioElement.currentTime = event.target.value / 100 * this.$refs.audioElement.duration
      console.log(event.target.value);
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

