import Vue, { VNode } from "vue";
import Dev from "./serve.vue";
import plugin from "../src/entry";
Vue.config.productionTip = false;
Vue.use(plugin);
new Vue({
  render: (h): VNode => h(Dev),
}).$mount("#app");
