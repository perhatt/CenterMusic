<script>
import Menu from './Menu.vue';
import Main from './Main.vue';
import PlayList from './PlayList.vue';
import Player from './Player.vue';
export default {
    components: { Menu, Main, PlayList, Player },
    data() {
        return {
            showPlayList: false,
            showPlayer: false,
        }
    }
}
</script>
<template>
    <div class="w-full h-full flex">
        <div class="w-20 h-full">
            <Menu />
        </div>
        <div class="flex-1 relative flex flex-col">
            <Main class="overflow-hidden absolute top-0 z-30" />
        </div>
        <play-list class=" absolute top-0 z-50 transition-all duration-500 ease-in-out"
            :class="!showPlayList ? 'translate-x-full' : ''" />
        <Player class=" absolute h-full top-0 z-40 transition-all duration-500 ease-in-out "
            :class="!showPlayer ? ' translate-y-full -top-20' : ''" />
    </div>
</template>
