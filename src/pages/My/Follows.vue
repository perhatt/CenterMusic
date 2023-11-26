<template>
    <div class="flex flex-wrap gap-2 justify-start">
        <div class="w-96 h-20 hover:bg-white/10 flex items-center px-2 rounded-3xl gap-2 cursor-pointer overflow-hidden"
            v-for="i in 20">
            <img class="w-16 h-16 rounded-full" src="https://picsum.photos/176/176" alt="">
            <div class="h-16 flex flex-col  justify-center">
                <p class="text-sm font-bold mb-1">xirali ahmat</p>
                <p class="text-xs w-full max-w-[200px] text-white/50 truncate">音乐人，作曲家，歌手，代表作Asian等你呢决定俄文的味道</p>
            </div>
            <div class="flex-1 flex justify-end">
                <p class="px-4 h-8 bg-white/10 text-xs  rounded-xl flex items-center justify-center">
                    已关注
                </p>
            </div>
        </div>
        <div class="w-full h-10 text-center text-xs text-white/40">已经到底了!</div>
    </div>
</template>