<template>
    <div class="w-full h-full p-4">
        <div class="w-full h-44 flex items-center gap-4">
            <img class="w-44 h-44 rounded-full" src="https://picsum.photos/240/240" alt="">
            <div class="flex-1 h-full flex flex-col">
                <div class=" w-full flex flex-col">
                    <p class="mt-4 font-bold text-xl ">Perhat.ziyawudun</p>
                    <div class="w-full h-20">
                        <p class="text-white/60 font-bold text-xs mt-4">
                            <span class="text-white/80">1000</span>
                            粉丝
                        </p>
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
                        <i class="iconfont icon-add font-normal text-md"></i>
                        <p>关注</p>
                    </div>

                </div>
            </div>

        </div>
        <!-- LIST -->
        <div class="w-full h-10  mt-4 flex gap-4  mb-2">
            <router-link to="/artist/music"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>歌曲</p>
                <div :class="$route.path === '/artist/music' ? 'bg-red-500/50' : ''" class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
            <router-link to="/artist/album"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>专辑</p>
                <div :class="$route.path === '/artist/album' ? 'bg-red-500/50' : ''" class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
            <router-link to="/artist/details"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>详情</p>
                <div :class="$route.path === '/artist/details' ? 'bg-red-500/50' : ''" class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
        </div>


        <RouterView></RouterView>
    </div>
</template>