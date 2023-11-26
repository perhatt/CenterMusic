<template>
    <div :class="PlayList ? '' : 'delay-100 origin-bottom-right translate-x-[200%]'" @click="PlayList = false"
        class="absolute right-0 bootom-0 w-full h-full  transition-all duration-300 ease-in-out bg-red-200">
        <ul class=" w-96 h-full float-right  bg-gray-900   transition-all duration-200 ease-in-out ">
            <li class="w-full h-12 px-4  flex items-center">
                <p class="text-white text-sm font-bold">音乐列表 {{ `( ${musicList.length} )` }}</p>
            </li>
            <li v-for="item in musicList" :key="item.name"
                class="w-full h-12 px-2 flex items-center hover:bg-white/10 cursor-pointer">
                <img class="w-10 h-10 rounded-xl" :alt="item.name" :src="item.img" alt="">
                <div class="max-w-[160px] h-12 px-1 flex flex-col justify-center">
                    <p class="text-xs font-bold whitespace-nowrap truncate">{{ item.name }}</p>
                    <p class="text-xs whitespace-nowrap truncate text-white/40">singer</p>
                </div>
                <div class="flex-1 h-10">
                    <div class="w-10 h-10 float-right icon-btn scale-75">
                        <i class="iconfont icon-close-"></i>
                    </div>
                </div>
            </li>
        </ul>
        <audio src="../../assets/music.mp3" @play="PlayMusic" @input="changePosition" @ended="onEnded"></audio>
    </div>
</template>
<script>

export default {
    props: {
        PlayList: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            musicList: [
                {
                    name: "MusicName",
                    singer: "Singer",
                    img: "https://picsum.photos/40/40?1",
                    url: "",
                },
                {
                    name: "MusicName",
                    singer: "Singer",
                    img: "https://picsum.photos/40/40?2",
                    url: "",
                },
                {
                    name: "MusicName",
                    singer: "Singer",
                    img: "https://picsum.photos/40/40?3",
                    url: "",
                },
                {
                    name: "MusicName",
                    singer: "Singer",
                    img: "https://picsum.photos/40/40?4",
                    url: "",
                },
            ]
        }
    }
}
</script>