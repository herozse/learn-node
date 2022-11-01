import { createApp } from "vue";
import * as antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import { setupStore } from "@/store/index";
import { installGlobalCmps } from "@/components/index";

const app = createApp(App);

// 使用ant-design
app.use(antd);

// 使用vue-router
app.use(router);

// 挂载pinia
setupStore(app);

// 注册全局组件
installGlobalCmps(app);

app.mount("#app");
