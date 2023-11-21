<script setup>
import Menu from './Menu.vue';
import Main from './Main.vue';
import Player from './Player/Index.vue';
</script>
<template>
    <div class="w-full h-full flex">
        <div class="w-20 h-full">
            <Menu />
        </div>
        <div class="flex-1 flex flex-col">
            <div class="flex-1 h-auto overflow-y-scroll mb-20">
                <Main />
            </div>
            <Player />
        </div>
    </div>
</template>