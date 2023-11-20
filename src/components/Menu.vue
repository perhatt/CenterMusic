<template>
  <div class="h-full w-full bg-[rgb(26,26,33)] rounded-tl-3xl flex flex-col items-center pb-4">
    <Router-link to="/login" class="w-12 h-12 mt-6 cursor-pointer">
      <img class="w-full h-full rounded-md"
        src="https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg" />
    </Router-link>
    <div class="flex flex-col grow mt-4 gap-2">
      <Router-link :to="item.link" v-for="item in menu" :key="item.link" active-class="bg-black"
        class="w-11 h-11 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>
      </Router-link>
    </div>
    <div>
      <div class="w-11 h-11 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/20 cursor-pointer">
        <i class="iconfont icon-settings-"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      menu: [
        {
          name: "精选",
          icon: "home",
          link: "/discover",
        },
        {
          name: "我的关注",
          icon: "user-",
          link: "/my-follows",
        },
        {
          name: "我的收藏",
          icon: "star",
          link: "/my-favorites",
        },
      ],
    };
  },
};
</script>
<style>
.v-dialog>.v-overlay__content>.v-card,
.v-dialog>.v-overlay__content>form>.v-card {
  border-radius: 20px !important;
}
</style>
