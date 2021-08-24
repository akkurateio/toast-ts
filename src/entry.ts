import _Vue, { PluginFunction } from "vue";
import AkkToastComponent from "./lib-components/AkkToastComponent.vue";
import { IOptions } from "./types";
interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

const defaultOptions = {
  timeout: 1500,
};

const install: InstallFunction = async function installAkkurateToast(
  Vue: typeof _Vue
) {
  if (install.installed) return;
  install.installed = true;
  const div = document.createElement("div");
  div.setAttribute("id", "toast");
  document.getElementsByTagName("body")[0].appendChild(div);
  const toast = await new Promise((resolve) =>
    new Vue({
      render: (h) =>
        h(AkkToastComponent, {
          on: {
            init(e: any) {
              resolve(e);
            },
          },
        }),
    }).$mount("#toast")
  );

  Vue.prototype.$toast = function(
    title: string,
    message: string,
    opts: IOptions = {}
  ) {
    const options = {
      ...defaultOptions,
      ...opts,
    };
    console.log("Toast !")
    // @ts-ignore
    toast.push(title, message, options);
  };
};

const plugin = {
  install,
};

if ("false" === process.env.ES_BUILD) {
  let GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = (global as any).Vue;
  }
  if (GlobalVue) {
    (GlobalVue as typeof _Vue).use(plugin);
  }
}
export default plugin;
