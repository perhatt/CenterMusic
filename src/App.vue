<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
export default {
  components: {
    Menu,
    Main
  },
  data() {

  }
}
</script>
<template>
  <div class="realive w-screen h-screen  flex justify-center items-center ">
    <div
      class="absolute w-4/5 h-[calc(100%-50px)] bg-black/20 backdrop-blur-md rounded-3xl border-2 border-spacing-1 border-white/40 flex ">
      <!-- 菜单栏 -->
      <div class="w-20 h-full">
        <Menu />
      </div>
      <div class="flex-wrap w-full h-full">
        <Main />
      </div>
    </div>
    <img class="w-full h-full object-cover"
      src="https://ts1.cn.mm.bing.net/th/id/R-C.4a110dfefb1a49c9048c50552ae4edd2?rik=ba0O82uT2zHB9g&riu=http%3a%2f%2fwww.deskcar.com%2fdesktop%2ffengjing%2f201431395307%2f3.jpg&ehk=4O3q6BQ56wLDqXAWcXkDVBusjLfspCmlJ9oB3qGI838%3d&risl=&pid=ImgRaw&r=0"
      alt="">
  </div>
</template>