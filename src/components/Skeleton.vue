<script setup>
import Menu from './Menu.vue';
import Main from './Main.vue';
import Player from './Player/Index.vue';
</script>
<template>
    <div class="w-full h-full flex flex-col-reverse">
        <div class="w-full h-20">
            <Player />
        </div>
        <div class="w-full flex-1 flex">
            <div class="w-20 h-full">
                <Menu />
            </div>
            <div class="flex-1 h-full">
                <Main />
            </div>
        </div>
    </div>
</template>