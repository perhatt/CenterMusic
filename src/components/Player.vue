<script>
import PlayList from "./PlayList.vue";
export default {
  components: { PlayList },
  data() {
    return {
      showPlayList: false,
    };
  },
  methods: {
    openplaylist(show) {
      this.showPlayList = show;
    },
    PlayMusicList(music) {
      console.log(music);
    },
  }
};
</script>
<template>
  <div class="relative w-full h-20 bg-[#1b1b22] flex items-center">
    <!-- 进度条 -->
    <div class="w-full h-1 bg-white/20 absolute top-0"></div>
    <!-- 内容 -->
    <div class="flex w-full h-14 items-center px-4 mt-1">
      <div class="w-14 h-14 bg-white/10 rounded-xl">
        <img class="w-full h-full rounded-xl object-cover" src="https://picsum.photos/100/100" alt="" />
      </div>
      <div class="px-2 text-xs">
        <p class="font-bold mb-1 text-sm">MUsicNAmedwwdwdwdwd</p>
        <RouterLink to="/artist" class="origin-left text-gray-400">ArtistName</RouterLink>
      </div>
      <div class="w-12 h-12 bg-white/10 rounded-full text-xl flex items-center justify-center cursor-pointer">
        <i class="iconfont icon-like"></i>
      </div>

      <!-- 控件 -->
      <div class="flex-1 h-14 flex items-center justify-center gap-3 text-xl">
        <div class="w-16 h-10 hover:bg-white/10 rounded-full text-xl flex items-center justify-center cursor-pointer">
          <i class="iconfont icon-play-previous"></i>
        </div>
        <div class="w-20 h-12 bg-red-500 rounded-full text-xl flex items-center justify-center cursor-pointer">
          <i class="iconfont icon-play"></i>
        </div>
        <div class="w-16 h-10 hover:bg-white/10 rounded-full text-xl flex items-center justify-center cursor-pointer">
          <i class="iconfont icon-play-next"></i>
        </div>
      </div>
      <div class="w-12 h-12 bg-white/10 rounded-xl text-xl flex items-center justify-center cursor-pointer"
        @click="showPlayList = !showPlayList">
        <i class="iconfont icon-bullet-list"></i>
      </div>
    </div>
  </div>



  <!-- 播放列表 -->
  <div
    class="absolute top-0 right-0 z-50 w-full flex flex-row-reverse  h-[calc(100%-70px)]  transition-all duration-500 ease-in-out p-4"
    :class="!showPlayList ? ' mt-10 scale-0 origin-bottom-right' : ''" @click="openplaylist(false)">



    <div class="w-96 h-full bg-stone-600 rounded-3xl flex flex-col" @click.stop="">
      <div class=" w-full h-12 p-3 flex justify-between">
        <div class="flex items-start">
          <p class="text-xl font-bold">播放列表</p>
          <span class="text-sm font-bold ml-1 text-gray-400">99</span>
        </div>
        <div
          class="flex items-center text-xs text-white font-bold bg-white/10 hover:bg-red-400 px-2 py-3 rounded-xl  cursor-pointer">
          <i class="iconfont icon-close- text-md mt-[2px] pr-1"></i>
          <span>清空列表</span>
        </div>
      </div>
      <ul class="w-full flex-1 overflow-y-scroll py-2  mb-2">
        <li class="w-full h-14 mb-2 flex items-center hover:bg-white/10 cursor-pointer" v-for="item in 50"
          @click="PlayMusicList(item)">
          <img class="w-12 h-12 rounded-md ml-3" src="https://picsum.photos/100/100" alt="">
          <div class="flex-1 px-2 flex flex-col justify-center">
            <p class="font-bold text-xs">MUsicNAmedwwdwdwdwd</p>
            <span class="text-gray-400 text-xs leading-6">ArtistName</span>
          </div>
        </li>
      </ul>
    </div>



  </div>
</template>
