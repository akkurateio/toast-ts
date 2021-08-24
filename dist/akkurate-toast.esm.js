import { Component, Prop, Vue } from 'vue-property-decorator';
import Information from '@carbon/icons-vue/es/information/20';
import Close from '@carbon/icons-vue/es/close/20';
import WarningAlt from '@carbon/icons-vue/es/warning--alt/20';
import Warning from '@carbon/icons-vue/es/warning/20';
import CheckmarkOutline from '@carbon/icons-vue/es/checkmark--outline/20';
import { v4 } from 'uuid';

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

let ToastType;

(function (ToastType) {
  ToastType["INFO"] = "info";
  ToastType["SUCCESS"] = "success";
  ToastType["WARNING"] = "warning";
  ToastType["DANGER"] = "danger";
})(ToastType || (ToastType = {}));

var _dec, _dec2, _class, _class2, _descriptor, _temp;
let AkkToast = (_dec = Component({
  components: {
    Information,
    Close,
    WarningAlt,
    Warning,
    CheckmarkOutline
  }
}), _dec2 = Prop({
  type: Object,
  required: true
}), _dec(_class = (_class2 = (_temp = class AkkToast extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "toast", _descriptor, this);
  }

  remove() {
    this.$emit("delete", this.toast._id);
  }

  get icon() {
    switch (this.toast.type) {
      case ToastType.SUCCESS:
        return CheckmarkOutline;

      case ToastType.WARNING:
        return Warning;

      case ToastType.DANGER:
        return WarningAlt;

      case ToastType.INFO:
      default:
        return Information;
    }
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = AkkToast;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['akk-toast-item', _vm.toast.type]
  }, [_c('div', {
    staticClass: "akk-toast-icon"
  }, [_c(_vm.icon, {
    tag: "component"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "akk-toast-body"
  }, [_c('div', {
    staticClass: "akk-toast-header"
  }, [_c('strong', {
    staticClass: "akk-toast-title"
  }, [_vm._v(_vm._s(_vm.toast.title))])]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.toast.text))]), _vm._v(" "), _vm.toast.link ? _c('div', {
    staticClass: "akk-toast-action"
  }, [_c('a', {
    attrs: {
      "target": "_blank",
      "rel": "noopener noreferrer",
      "href": _vm.toast.link.href
    }
  }, [_vm._v(_vm._s(_vm.toast.link.name))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    on: {
      "click": _vm.remove
    }
  }, [_c('button', {
    staticClass: "akk-toast-close",
    attrs: {
      "type": "button"
    }
  }, [_c('Close')], 1)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-2bee98b3_0", {
    source: ".akk-toast-item[data-v-2bee98b3]{font-family:sans-serif;display:flex;flex-direction:row;width:100%;font-size:.875rem;margin-top:.5rem;background-color:var(--white);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);border-radius:.25rem;border-left:3px solid var(--info,#17a2b8)}@media (min-width:576px){.akk-toast-item[data-v-2bee98b3]{width:420px}}.akk-toast-item.danger[data-v-2bee98b3]{border-left:none;background-color:var(--danger,#c00);color:var(--white,#fff)}.akk-toast-item.success[data-v-2bee98b3]{border-left:3px solid var(--success,#28a745)}.akk-toast-item.warning[data-v-2bee98b3]{border-left:3px solid var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--white,#fff)}.akk-toast-item.danger .akk-toast-close svg[data-v-2bee98b3]{fill:var(--white,#fff);opacity:.5}.akk-toast-icon svg[data-v-2bee98b3]{fill:var(--info,#17a2b8)}.akk-toast-item.success .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--warning,#ffc107)}.akk-toast-action a[data-v-2bee98b3]{color:var(--info,#17a2b8);text-decoration:none}.akk-toast-item.success .akk-toast-action a[data-v-2bee98b3]{color:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-action a[data-v-2bee98b3]{color:var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-action a[data-v-2bee98b3]{color:var(--white,#fff);text-decoration:underline}.akk-toast-header[data-v-2bee98b3]{font-size:1.25rem;font-weight:600;margin-bottom:.25rem}.akk-toast-body[data-v-2bee98b3]{flex:1;margin:1rem 0}.akk-toast-close[data-v-2bee98b3]{outline:2px solid transparent;outline-offset:-2px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;border:none;cursor:pointer;margin-left:auto;padding:0;height:3rem;width:3rem;min-height:3rem;min-width:3rem}.akk-toast-icon[data-v-2bee98b3]{margin:1rem}.akk-toast-action[data-v-2bee98b3]{margin:.5rem 0 0 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-2bee98b3";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var _dec$1, _class$1, _temp$1;
let AkkToastComponent = (_dec$1 = Component({
  components: {
    AkkToast: __vue_component__
  }
}), _dec$1(_class$1 = (_temp$1 = class AkkToastComponent extends Vue {
  constructor(...args) {
    super(...args);
    this.toasts = [];
  }

  mounted() {
    this.$emit("init", this);
  }

  push(title, text, options) {
    const _id = v4();

    this.toasts.push({
      _id,
      title,
      text,
      type: options.type || ToastType.INFO,
      link: options.link
    });
    if (options.timeout === 0) return;
    setTimeout(() => {
      this.remove(_id);
    }, options.timeout);
  }

  remove(id) {
    this.toasts = this.toasts.filter(x => x._id !== id);
  }

}, _temp$1)) || _class$1);

/* script */
const __vue_script__$1 = AkkToastComponent;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition-group', {
    staticClass: "akk-toast-container",
    attrs: {
      "name": "card",
      "tag": "div"
    }
  }, _vm._l(_vm.toasts, function (toast) {
    return _c('AkkToast', {
      key: toast._id,
      staticClass: "card",
      attrs: {
        "toast": toast
      },
      on: {
        "delete": _vm.remove
      }
    });
  }), 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-b9b3a61a_0", {
    source: ".akk-toast-container[data-v-b9b3a61a]{z-index:9999;position:fixed;bottom:0;right:0;margin:1rem}.card[data-v-b9b3a61a]{transition:all .5s}.card-enter[data-v-b9b3a61a],.card-leave-to[data-v-b9b3a61a]{opacity:0;transform:translateX(150px)}.card-enter-to[data-v-b9b3a61a]{opacity:1;transform:translateX(0)}.card-move[data-v-b9b3a61a]{transition:all .5s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-b9b3a61a";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

const defaultOptions = {
  timeout: 1500
};

const install = async function installAkkurateToast(Vue) {
  if (install.installed) return;
  install.installed = true;
  const div = document.createElement("div");
  div.setAttribute("id", "toast");
  document.getElementsByTagName("body")[0].appendChild(div);
  const toast = await new Promise(resolve => new Vue({
    render: h => h(__vue_component__$1, {
      on: {
        init(e) {
          resolve(e);
        }

      }
    })
  }).$mount("#toast"));
  console.log("ok");

  Vue.prototype.$toast = function (title, message, opts = {}) {
    const options = { ...defaultOptions,
      ...opts
    };
    console.log("Toast !"); // @ts-ignore

    toast.push(title, message, options);
  };
};

const plugin = {
  install
};

export default plugin;
