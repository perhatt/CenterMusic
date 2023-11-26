<template>
    <div class="w-full h-full p-4">
        <div class="w-full h-32 flex items-center gap-4">
            <img class="w-32 h-32 rounded-full" src="https://picsum.photos/240/240" alt="">
            <div class="h-20 w-full">
                <p class="mt-2 font-bold text-lg">Perhat.ziyawudun</p>
                <div class="flex mt-4 gap-2">
                    <div
                        class="h-full px-2 py-2 gap-1 flex items-center justify-center bg-white/10 border border-white/10 border-spacing-1 text-white rounded-xl font-bold text-xs cursor-pointer">
                        <i class="iconfont icon-edit- font-normal text-xs"></i>
                        <p>编辑个人资料</p>
                    </div>
                    <div
                        class="h-full px-2 py-2 gap-1 flex items-center justify-center bg-white/10 border border-white/10 border-spacing-1 text-white rounded-xl font-bold text-xs cursor-pointer">
                        <i class="iconfont icon-logout font-normal text-xs"></i>

                        <p>退出登录</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- LIST -->
        <div class="w-full h-10  mt-4 flex gap-4  mb-2">
            <router-link to="/my/play-list"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>歌单</p>
                <div :class="$route.path === '/my/play-list' ? 'bg-red-500/50' : ''" class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
            <router-link to="/my/follows"
                class=" h-10 flex flex-col items-center justify-center font-bold  cursor-pointer group">
                <p>我的关注</p>
                <div :class="$route.path === '/my/follows' ? 'bg-red-500/50' : ''" class="w-2/3 h-1 mt-1 rounded-full">
                </div>
            </router-link>
        </div>
        <RouterView></RouterView>
    </div>
</template>
