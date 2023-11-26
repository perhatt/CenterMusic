<template>
    <div class="absolute w-full h-full flex-1 flex overflow-hidden p-4 bg-red-200">
        <div class="w-full h-full rounded-3xl flex flex-col">
            <div class="icon-btn">
                <i class="iconfont icon-arrow-down-"></i>
            </div>
            <div class="w-full flex-1 flex">
                <div class="h-full w-96 flex flex-col items-center">
                    <img class="w-64 h-64 rounded-3xl mt-12" src="https://picsum.photos/256/256" alt="">
                    <p class="my-6 text-md font-bold max-w-[200px] text-center">Öğretmen Öğrencisine Aşık Oluyor</p>
                    <div class="w-full h-12  flex justify-center gap-2">
                        <div
                            class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-2xl text-white/50 hover:text-white/90 cursor-pointer">
                            <i class="iconfont icon-like"></i>
                        </div>
                        <div
                            class="w-12 h-12 bg-white/10 rounded-xl flex justify-center items-center text-2xl text-white/50 hover:text-white/90 cursor-pointer">
                            <i class="iconfont icon-download-"></i>
                        </div>

                    </div>
                </div>
                <div class="flex-1 h-full flex flex-col items-center">
                    <div class="w-full h-10 gap-2 flex justify-center">

                        <div class="w-auto h-10 bg-white/10  rounded-lg flex items-center text-sm font-bold">
                            <p class="text-white/60 pl-2 whitespace-nowrap">专辑:</p>
                            <router-link to="/album" @click="MusicInfo = !MusicInfo"
                                class="text-white ml-2 whitespace-nowrap truncate max-w-[130px] pr-2 hover:text-red-500 cursor-pointer">
                                Zahir
                                Musicsdsdferferferdsferferfe</router-link>

                        </div>
                        <div class="w-auto h-10 bg-white/10  rounded-lg flex items-center text-sm font-bold">
                            <p class="text-white/60 pl-2 whitespace-nowrap">歌手:</p>
                            <RouterLink to="/artist" @click="OpenPlayer = false"
                                class="text-white ml-2 whitespace-nowrap truncate max-w-[120px] pr-1 hover:text-red-500 cursor-pointer">
                                PerhatZywdn</RouterLink>
                            <div
                                class="w-10 h-10 bg-white/10 rounded-xl ml-2 flex items-center justify-center cursor-pointer hover:bg-white/20 text-xl text-white/50 hover:text-white">
                                <i class="iconfont icon-gengduo"></i>
                            </div>
                        </div>
                    </div>
                    <ul
                        class="w-64 text-center h-96 mt-10 flex flex-col py-2 overflow-y-scroll justify-center gap-2 transition-all duration-300 ease-in-out">
                        <li class="w-full h-auto max-h-[48px] text-sm font-bold">纯音乐，请赞赏</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        MusicInfo: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        updateValue(newVal) {
            this.value = newVal;
        },
    },
}

</script>