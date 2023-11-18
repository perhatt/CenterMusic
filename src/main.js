import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

// 引入图标库
import "./assets/iconfont/iconfont.css";

createApp(App).use(router).mount("#app");
