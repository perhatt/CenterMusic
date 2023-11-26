<template>
  <div :class="MusicInfo ? 'h-full' : 'h-20'"
    class="absolute left-0 bottom-0 w-full rounded-b-3xl bg-black/50 backdrop-blur-md transition-all duration-300 ease-in-out flex  flex-col overflow-hidden">

    <div class="w-full flex-1 z-99">
      <MusicInfo :MusicInfo="MusicInfo" />
    </div>
    <div class="w-full h-20 z-100">
      <Control @update-value="handleUpdateValue" />
    </div>
    <PlayList />
  </div>
</template>
<script>
import Control from "./Control.vue";
import MusicInfo from "./MusicInfo.vue";
import PlayList from "./PlayList.vue";
export default {
  components: {
    Control,
    MusicInfo,
    PlayList
  },
  data() {
    return {
      MusicInfo: false,
      PlayList: false
    }
  },
  methods: {
    handleUpdateValue(value) {
      // 更新 Index 组件的状态
      this.value = value;

      // 同时更新 MusicInfo 和 PlayList 组件的状态
      this.$children.forEach(child => {
        if (child.updateValue) {
          child.updateValue(value);
        }
      });
    },
  }
};
</script>
<style scoped>
[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  outline: 0;
  background-color: transparent;
}

/* 定义range控件轨道的样式 */
[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}

/* 定义range控件拇指的样式 */
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  margin-top: -3px;
  /* 使用border-image属性给拇指添加渐变边框 */
}

[type="range"]::-webkit-slider-thumb:hover {
  cursor: pointer;
}
</style>

