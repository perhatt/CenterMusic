<template>
    <div class="w-full h-auto flex flex-col gap-3">
        <div class="w-full h-10 rounded-xl bg-red-200/10 font-bold text-white/80 text-xs flex items-center">
            <div class="w-10 h-10 flex justify-center items-center">#</div>
            <div class="flex-1">标题</div>
            <div class="flex-1">歌手</div>
            <div class="w-20 text-center">喜欢</div>
            <div class="w-20 text-center">时长</div>
        </div>
        <div class="w-full h-14 rounded-xl hover:bg-white/10  text-white/80 text-xs flex items-center cursor-pointer"
            v-for="item in 20">
            <div class="w-10 h-10 flex justify-center items-center font-bold">{{ item }}</div>

            <div class="flex-1 flex gap-2 items-center overflow-hidden">
                <div>
                    <p class="text-white text-md mt-2 font-bold">
                        Öğretmen
                        Öğrencisine Aşık Oluyor
                    </p>
                    <div class="flex font-bold">
                        <p class="py-1 px-2 bg-red-500/20 text-red-500 rounded-md scale-50 origin-left">VIP</p>
                        <p class="py-1 px-2 bg-red-500/20 text-red-500 rounded-md scale-50 origin-left -ml-4">SQ</p>
                    </div>
                </div>
            </div>
            <div class="flex-1">歌手名</div>
            <div class="w-20 text-center">
                <i class="iconfont icon-like text-xl text-red-500"></i>
            </div>
            <div class="w-20 text-center">04:29</div>
        </div>
        <div class="w-full h-10 text-center text-xs text-white/40">已经到底了!</div>
    </div>
</template>