<template>
  <div :class="OpenPlayer ? 'h-full rounded-3xl' : ''"
    class="absolute left-0 bottom-0 w-full h-20 rounded-b-3xl bg-black/50 backdrop-blur-md transition-all duration-300 ease-in-out flex flex-col-reverse">
    <div class="w-full h-20 border-t border-white/20 border-spacing-1">
      <div class="w-full h-20 rounded-b-3xl flex items-center px-2">
        <!-- 音乐图片 -->
        <div class=" w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer musicImg"
          @click="OpenPlayer = !OpenPlayer, OpenList = false">
          <img class="w-14 h-14 rounded-full" src="https://picsum.photos/56/56" alt="">
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

          <div
            class="w-10 h-10 mr-10 hover:bg-red-500/50 bg-white/10 rounded-full text-lg flex justify-center items-center cursor-pointer">
            <i class="iconfont icon-like-"></i>
          </div>

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
    <div v-if="OpenPlayer" class="relative w-full h-auto flex-1 p-4 flex overflow-hidden">
      <!-- <div :class="addAlbum ? ' scale-100' : 'scale-0 opacity-0'"
        class=" absolute top-0 left-0 bg-rd-500 w-full h-full transition-all duration-300 ease-in-out flex items-center justify-center">
        <div class="w-56 h-64 bg-red-500">
          <i class="icon-btn iconfont icon-close-" @click="addAlbum = false"></i>
        </div>
      </div> -->
      <div class="w-full h-full rounded-3xl p-4 flex flex-col">
        <div class="icon-btn" @click="OpenPlayer = false">
          <i class="iconfont icon-arrow-down-"></i>
        </div>
        <div class="w-full flex-1 flex">
          <div class="h-full w-96 flex flex-col items-center">
            <img class="w-64 h-64 rounded-3xl mt-12" src="https://picsum.photos/256/256" alt="">
            <p class="my-6 text-md font-bold max-w-[200px] text-center">Öğretmen Öğrencisine Aşık Oluyor</p>
            <div class="w-full h-12  flex justify-center gap-2">
              <div
                class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-2xl text-white/50 hover:text-white/90 cursor-pointer">
                <i class="iconfont icon-like-"></i>
              </div>
              <div
                class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-2xl text-white/50 hover:text-white/90 cursor-pointer">
                <i class="iconfont icon-download-"></i>
              </div>

            </div>
          </div>
          <div class="flex-1 h-full flex flex-col items-center">
            <div class="w-full h-10 gap-2 flex justify-center">

              <div class="w-auto h-10 bg-white/10  rounded-lg flex items-center text-sm font-bold">
                <p class="text-white/60 pl-2 whitespace-nowrap">专辑:</p>
                <router-link to="/album" @click="OpenPlayer = false"
                  class="text-white ml-2 whitespace-nowrap truncate max-w-[130px] pr-2 hover:text-red-500 cursor-pointer">
                  Zahir
                  Musicsdsdferferferdsferferfe</router-link>

              </div>
              <div class="w-auto h-10 bg-white/10  rounded-lg flex items-center text-sm font-bold">
                <p class="text-white/60 pl-2 whitespace-nowrap">歌手:</p>
                <RouterLink to="/artist" @click="OpenPlayer = false"
                  class="text-white ml-2 whitespace-nowrap truncate max-w-[120px] pr-1 hover:text-red-500 cursor-pointer">
                  PerhatZywdn</RouterLink>
                <div
                  class="w-10 h-10 bg-white/10 rounded-xl ml-2 flex items-center justify-center cursor-pointer hover:bg-white/20 text-xl text-white/50 hover:text-white">
                  <i class="iconfont icon-gengduo"></i>
                </div>
              </div>
            </div>
            <ul
              class="w-64 text-center h-96 mt-10 flex flex-col py-2 overflow-y-scroll justify-center gap-2 transition-all duration-300 ease-in-out">
              <li class="w-full h-auto max-h-[48px] text-sm font-bold">纯音乐，请赞赏</li>
            </ul>
          </div>
        </div>
      </div>
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
        <img class="w-10 h-10 rounded-xl" :alt="item.name" :src="item.img" alt="">
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
      // addAlbum: false,
      currentTime: '12',
      SongIndex: 0,
      musicList: [
        {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://picsum.photos/40/40?1',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://picsum.photos/40/40?2',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://picsum.photos/40/40?3',
          url: '',
        }, {
          name: 'MusicName',
          singer: 'Singer',
          img: 'https://picsum.photos/40/40?4',
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

