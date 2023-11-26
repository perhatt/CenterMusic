<template>
  <div class="h-full w-full bg-[hsl(240,12%,12%)] rounded-l-3xl flex flex-col items-center pb-4">
    <Router-link to="/my" class="w-12 h-12 mt-6 cursor-pointer">
      <img class="w-full h-full rounded-full" src="https://picsum.photos/48/48" />
    </Router-link>
    <div class="flex flex-col grow mt-4 gap-2">
      <Router-link :to="item.link" v-for="item in menu" :key="item.link" active-class="bg-red-500"
        class="w-11 h-11 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/20 cursor-pointer">
        <i class="iconfont" :class="`icon-${item.icon}`"></i>
      </Router-link>
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
          name: "历史播放",
          icon: "timer-",
          link: "/history",
        },
        {
          name: '排行榜',
          icon: 'graph-',
          link: '/graph',
        }, {
          name: '设置',
          icon: 'settings-',
          link: '/settigs',
        }
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
