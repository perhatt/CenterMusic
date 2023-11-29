<script>
import Menu from './Menu.vue';
import Main from './Main.vue';
import Player from './Player.vue';
export default {
    components: { Menu, Main, Player },
    data() {
        return {
            showPlayList: false,
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
            <Player />
        </div>

    </div>
</template>
