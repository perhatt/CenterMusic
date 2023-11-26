<template>
    <div class=" absolute w-full h-20 rounded-b-3xl flex items-center">

        <!-- 进度条 -->
        <div class="absolute  top-0 w-full h-[4px]  bg-white/20 cursor-pointer">
            <div class="w-[10%] h-[4px] bg-red-500 rounded-full"></div>
        </div>
        <!-- 音乐图片 -->
        <div @click="Close" class=" w-16 h-16 flex items-center justify-center cursor-pointer musicImg ml-4">
            <img class="w-14 h-14 rounded-xl" src="https://picsum.photos/56/56" alt="">
        </div>
        <!-- 歌曲信息 -->
        <div class="max-w-[250px] h-12 flex flex-col justify-center px-4">
            <p class="text-white text-xs mb-1 font-bold whitespace-nowrap truncate">MusicName
            </p>
            <p class="text-xs font-normal text-white/70">Artistname</p>
        </div>

        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl curp">
            <i class="iconfont icon-like"></i>
        </div>



        <!-- 控件 -->
        <div class="flex-1 flex gap-2 justify-center items-center text-xl">
            <div class="w-20 h-12 rounded-full  hover:bg-white/20 flex justify-center items-center cursor-pointer">
                <i class="iconfont icon-play-previous text-white/80 text-xl"></i>
            </div>
            <div class="w-16 h-12 rounded-full  bg-red-500 flex justify-center items-center cursor-pointer">
                <i class="iconfont icon-play text-white/80 text-xl"></i>
            </div>
            <div class="w-20 h-12 rounded-full  hover:bg-white/20 flex justify-center items-center cursor-pointer">
                <i class="iconfont icon-play-next text-white/80 text-xl"></i>
            </div>
        </div>
        <div @click="changeValue"
            class="mr-4 w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-white/10 rounded-lg ">
            <i class="iconfont icon-bullet-list"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        MusicInfo: {
            type: Boolean,
            default: false
        },
        PlayList: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        changeValue() {
            this.$emit('update-value', 'New Value');
        },
    }
}
</script>