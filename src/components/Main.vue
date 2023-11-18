<script>
import Player from "../components/Player/Index.vue";
export default {
  components: { Player },
};
</script>
<template>
  <div class="relative w-full h-full overflow-hidden p-4">
    <div class="absolute w-full h-full">
      <router-view></router-view>
    </div>
  </div>
</template>
