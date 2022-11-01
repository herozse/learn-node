import { App } from "vue";
import CmpA from "./CmpA.vue";

const globalComponents = {
  CmpA,
};

const installGlobalCmps = (app: App) => {
  Object.keys(globalComponents).forEach(key => {
    app.component(key, globalComponents[key as keyof typeof globalComponents]);
  });
};

export { installGlobalCmps };
