<template>
    <div
        class="h-full w-full bg-white/20  rounded-s-3xl flex flex-col items-center pb-4 border-r-2 border-spacing-1 border-white/10">
        <div class="w-12 h-12 mt-6 cursor-pointer">
            <img class="w-full h-full rounded-md "
                src="https://tupian.qqw21.com/article/UploadPic/2020-6/202062820443133016.jpg" />
            <v-dialog v-model="dialog" activator="parent" width="400" theme="dark">
                <v-card>
                    <v-card-text>
                        <UserInfo />
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <div class="flex flex-col grow mt-4 gap-2">
            <v-tooltip text="Home" location="start" v-for="item in menu" :key="item.link" theme="dark">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" :icon="`iconfont icon-${item.icon}`"></v-btn>
                </template>
            </v-tooltip>
        </div>
    </div>
</template>
<script>
import UserInfo from '../pages/UserInfo.vue'
export default {
    name: 'Menu',
    components: { UserInfo },
    data() {
        return {
            dialog: false,
            isss: false,
            tab: null,
            //生成三个menu菜单 精选 我喜欢的音乐 我的收藏
            menu: [
                {
                    name: '精选',
                    icon: 'home',
                    link: '/home'
                },
                {
                    name: '我喜欢的音乐',
                    icon: 'like',
                    link: '/like'
                },
                {
                    name: '我的收藏',
                    icon: 'home',
                    link: '/home'
                }
            ]

        }

    }
}
</script>
<style>
.v-dialog>.v-overlay__content>.v-card,
.v-dialog>.v-overlay__content>form>.v-card {
    border-radius: 20px !important;
}
</style>