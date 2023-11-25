<template class="container">
  <div class="realive w-screen h-screen flex justify-center items-center">
    <div
      class="absolute w-4/5 h-[calc(100%-50px)] bg-[#141414] overflow-hidden rounded-3xl border-2 border-spacing-1 border-white/40 flex flex-col">
      <router-view></router-view>
    </div>
    <img class="w-full h-full object-cover" src="https://picsum.photos/1920/1080" alt="" />
  </div>
</template>


<!-- [class^="iconfont"],[class*="iconfont"]  -->
