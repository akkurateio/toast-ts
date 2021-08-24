import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const AkkurateToast: { install: InstallFunction };
export default AkkurateToast;

export const AkkurateToastSample: VueConstructor<Vue>;
