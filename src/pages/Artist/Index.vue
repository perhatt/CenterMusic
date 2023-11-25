<template>
    <div class="w-full h-full p-4">
        <div class="w-full h-56 flex items-center gap-4">
            <img class="w-56 h-56 rounded-full" src="https://picsum.photos/240/240" alt="">
            <div class="flex-1 h-full flex flex-col">
                <div class=" w-full flex flex-col">
                    <p class="mt-4 font-bold text-xl ">Perhat.ziyawudun</p>
                    <div class="w-full h-20 flex gap-2 items-center">

                    </div>
                </div>
                <div class="h-10 w-full flex gap-2">
                    <div
                        class="h-full px-6 flex items-center justify-center bg-white/10 border border-white/40 border-spacing-1 text-white/80 rounded-xl font-bold text-sm cursor-pointer">
                        关注
                    </div>

                </div>
            </div>

        </div>
        <!-- LIST -->
        <div class="w-full h-10  mt-4 flex gap-4  mb-2">
            <router-link :to="item.url" v-for="item in List" :key="item.name"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>{{ item.name }}</p>
                <div class="w-2/3 h-1 mt-1 rounded-full group-active:bg-red-500"></div>
            </router-link>
        </div>


        <RouterView></RouterView>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: '1',
            List: [
                {
                    name: '歌曲',
                    url: '/artist/music'
                }, {
                    name: '专辑',
                    url: '/artist/album'
                }, {
                    name: '详情',
                    url: '/artist/details'
                }
            ]
        }
    }

}
</script>

