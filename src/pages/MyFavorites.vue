<template>
    <div class="w-full flex-1 flex">
        <router-view></router-view>
    </div>
    <div class="h-20 w-full">
        <Player />
    </div>
</template>
<script>
import Player from './components/player/index.vue'
export default {
    components: {
        Player
    }
}
</script>