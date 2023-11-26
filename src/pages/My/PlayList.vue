<template>
    <div>
        <div class="w-full h-10 flex items-center gap-2">
            <p class="text-white text-md font-bold">我创建的歌单</p>
            <div
                class="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center cursor-pointer scale-75 origin-left">
                <i class="iconfont icon-add text-white/80"></i>
            </div>
        </div>
        <div class="flex flex-wrap gap-4 justify-start pb-4">
            <div class="w-44 h-auto pb-2 hover:bg-white/10 cursor-pointer rounded-t-3xl rounded-b-xl" v-for="item in 3">
                <img class="w-44 rounded-3xl h-44 object-cover p-2" :src="`https://picsum.photos/176/176?${item}`" alt="">
                <p class="w-44 font-bold whitespace-nowrap text-xs truncate px-2">Öğretmen Öğrencisine Aşık Oluyor</p>
                <p class="w-44 mt-1 text-white/50 whitespace-nowrap text-xs truncate px-2">2023/11/25</p>
            </div>
        </div>
        <div class="w-full h-10 flex items-center gap-2">
            <p class="text-white text-md font-bold">我收藏的歌单</p>
        </div>
        <div class="flex flex-wrap gap-4 justify-start">
            <div class="w-44 h-auto pb-2 hover:bg-white/10 cursor-pointer rounded-t-3xl rounded-b-xl" v-for="item in 2">
                <img class="w-44 rounded-3xl h-44 object-cover p-2" :src="`https://picsum.photos/176/176?${item}`" alt="">
                <p class="w-44 font-bold whitespace-nowrap text-xs truncate px-2">Öğretmen Öğrencisine Aşık Oluyor</p>
                <p class="w-44 mt-1 text-white/50 whitespace-nowrap text-xs truncate px-2">2023/11/25</p>
            </div>
        </div>
        <div class="w-full h-10 text-center text-xs text-white/40">已经到底了!</div>
    </div>
</template>