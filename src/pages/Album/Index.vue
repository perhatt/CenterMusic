<template>
    <div class="w-full h-full p-4">
        <div class="w-full h-44 flex items-center gap-4">
            <img class="w-44 h-44 rounded-3xl" src="https://picsum.photos/240/240" alt="">
            <div class="flex-1 h-full flex flex-col">
                <div class=" w-full flex flex-col">
                    <p class="mt-4 font-bold text-xl ">专辑名称</p>
                    <div class="w-full h-20 flex pt-4 text-xs font-bold">
                        <p>歌手</p>
                    </div>
                </div>
                <div class="h-10 w-full flex gap-2">
                    <div
                        class="h-full px-4 gap-1 flex items-center justify-center bg-red-500 text-white rounded-xl font-bold text-sm cursor-pointer">
                        <i class="iconfont icon-play text-lg"></i>
                        <p>全部播放</p>
                    </div>
                    <div
                        class="h-full px-4 gap-1 flex items-center justify-center bg-white/10 border border-white/10 border-spacing-1 text-white rounded-xl font-bold text-sm cursor-pointer">
                        <i class="iconfont icon-albums font-normal text-lg"></i>
                        <p>1222</p>
                    </div>
                </div>
            </div>

        </div>
        <!-- LIST -->
        <div class="w-full h-10  mt-4 flex gap-4  mb-2">
            <router-link to="/album/music"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>歌曲</p>
                <div :class="this.$route.path === '/album/music' ? 'bg-red-500/50' : ''"
                    class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
            <router-link to="/album/details"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>详情</p>
                <div :class="this.$route.path === '/album/details' ? 'bg-red-500/50' : ''"
                    class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
        </div>


        <RouterView></RouterView>
    </div>
</template>