import { createApp } from "vue";
import { defineComponent } from "vue";
import App from "./App.vue";

import "./style.css";

// 引入图标库
import "./assets/iconfont/iconfont.css";

//引入vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

// 定义CatDialog组件
const CatDialog = defineComponent({
  name: "CatDialog",
  // 其他选项...
});

createApp(App).use(vuetify).mount("#app");
