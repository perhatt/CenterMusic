<script>
import Discover from '../pages/Discover.vue'
import Player from '../components/Player.vue'
export default {
    components: { Discover, Player, Player },
    data() {
        return {
            expand: false
        }
    }
}
</script>
<template>
    <div class=" relative w-full h-full overflow-hidden">
        <div class="absolute w-full h-full overflow-y-scroll px-2 pt-2 pb-24">
            <Discover />
        </div>
        <div class="absolute bottom-0 left-0 w-full h-20 flex flex-col-reverse">
            <Player />
        </div>
    </div>
</template>