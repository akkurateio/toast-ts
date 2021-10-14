import { Prop, Component, Vue } from 'vue-property-decorator';
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

var _dec, _class, _class2, _descriptor, _temp;
let Info = (_dec = Prop({
  type: Number,
  default: 24,
  required: false
}), Component(_class = (_class2 = (_temp = class Info extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "size", _descriptor, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec], {
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

/* script */
const __vue_script__ = Info;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "focusable": "false",
      "preserveAspectRatio": "xMidYMid meet",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 32 32",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var _dec$1, _class$1, _class2$1, _descriptor$1, _temp$1;
let Close = (_dec$1 = Prop({
  type: Number,
  default: 24,
  required: false
}), Component(_class$1 = (_class2$1 = (_temp$1 = class Close extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "size", _descriptor$1, this);
  }

}, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "size", [_dec$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$1)) || _class$1);

/* script */
const __vue_script__$1 = Close;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "focusable": "false",
      "preserveAspectRatio": "xMidYMid meet",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 32 32",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var _dec$2, _class$2, _class2$2, _descriptor$2, _temp$2;
let WarningFilled = (_dec$2 = Prop({
  type: Number,
  default: 24,
  required: false
}), Component(_class$2 = (_class2$2 = (_temp$2 = class WarningFilled extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "size", _descriptor$2, this);
  }

}, _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "size", [_dec$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$2)) || _class$2);

/* script */
const __vue_script__$2 = WarningFilled;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "focusable": "false",
      "preserveAspectRatio": "xMidYMid meet",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 32 32",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16,23a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,23Z"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "15",
      "y": "12",
      "width": "2",
      "height": "9"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
    }
  })]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var _dec$3, _class$3, _class2$3, _descriptor$3, _temp$3;
let Warning = (_dec$3 = Prop({
  type: Number,
  default: 24,
  required: false
}), Component(_class$3 = (_class2$3 = (_temp$3 = class Warning extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "size", _descriptor$3, this);
  }

}, _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "size", [_dec$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$3)) || _class$3);

/* script */
const __vue_script__$3 = Warning;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "focusable": "false",
      "preserveAspectRatio": "xMidYMid meet",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 32 32",
      "aria-hidden": "true"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16 23a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 23zM15 12H17V21H15z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
    }
  })]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var _dec$4, _class$4, _class2$4, _descriptor$4, _temp$4;
let WarningFilled$1 = (_dec$4 = Prop({
  type: Number,
  default: 24,
  required: false
}), Component(_class$4 = (_class2$4 = (_temp$4 = class WarningFilled extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "size", _descriptor$4, this);
  }

}, _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "size", [_dec$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$4)) || _class$4);

/* script */
const __vue_script__$4 = WarningFilled$1;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "focusable": "false",
      "preserveAspectRatio": "xMidYMid meet",
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "currentColor",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 32 32",
      "aria-hidden": "true"
    }
  }, [_c('polygon', {
    attrs: {
      "points": "14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"
    }
  })]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

let ToastType;

(function (ToastType) {
  ToastType["INFO"] = "info";
  ToastType["SUCCESS"] = "success";
  ToastType["WARNING"] = "warning";
  ToastType["DANGER"] = "danger";
})(ToastType || (ToastType = {}));

const defaultPosition = {
  horizontal: "right",
  vertical: "bottom"
};

var _dec$5, _dec2, _class$5, _class2$5, _descriptor$5, _temp$5;
let AkkToast = (_dec$5 = Component({
  components: {
    Info: __vue_component__,
    Close: __vue_component__$1,
    WarningAlt: __vue_component__$2,
    Warning: __vue_component__$3,
    CheckmarkOutline: __vue_component__$4
  }
}), _dec2 = Prop({
  type: Object,
  required: true
}), _dec$5(_class$5 = (_class2$5 = (_temp$5 = class AkkToast extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "toast", _descriptor$5, this);
  }

  mounted() {
    console.log('AkkToast.mounted', this.toast);
  }

  remove() {
    this.$emit("delete", this.toast._id);
  }

  get icon() {
    switch (this.toast.type) {
      case ToastType.SUCCESS:
        return __vue_component__$4;

      case ToastType.WARNING:
        return __vue_component__$3;

      case ToastType.DANGER:
        return __vue_component__$2;

      case ToastType.INFO:
      default:
        return __vue_component__;
    }
  }

}, _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "toast", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$5)) || _class$5);

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
const __vue_script__$5 = AkkToast;
/* template */

var __vue_render__$5 = function () {
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

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-64380114_0", {
    source: ".akk-toast-item[data-v-64380114]{font-family:sans-serif;display:flex;flex-direction:row;width:100%;font-size:.875rem;margin-top:.5rem;background-color:var(--white,#fff);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);border-radius:.25rem;border-left:3px solid var(--info,#17a2b8)}@media (min-width:576px){.akk-toast-item[data-v-64380114]{width:420px}}.akk-toast-item.danger[data-v-64380114]{border-left:none;background-color:var(--danger,#c00);color:var(--white,#fff)}.akk-toast-item.success[data-v-64380114]{border-left:3px solid var(--success,#28a745)}.akk-toast-item.warning[data-v-64380114]{border-left:3px solid var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-icon svg[data-v-64380114]{fill:var(--white,#fff)}.akk-toast-item.danger .akk-toast-close svg[data-v-64380114]{fill:var(--white,#fff);opacity:.5}.akk-toast-icon svg[data-v-64380114]{fill:var(--info,#17a2b8)}.akk-toast-item.success .akk-toast-icon svg[data-v-64380114]{fill:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-icon svg[data-v-64380114]{fill:var(--warning,#ffc107)}.akk-toast-action a[data-v-64380114]{color:var(--info,#17a2b8);text-decoration:none}.akk-toast-item.success .akk-toast-action a[data-v-64380114]{color:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-action a[data-v-64380114]{color:var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-action a[data-v-64380114]{color:var(--white,#fff);text-decoration:underline}.akk-toast-header[data-v-64380114]{font-size:1.25rem;font-weight:600;margin-bottom:.25rem}.akk-toast-body[data-v-64380114]{flex:1;margin:1rem 0}.akk-toast-close[data-v-64380114]{outline:2px solid transparent;outline-offset:-2px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;border:none;cursor:pointer;margin-left:auto;padding:0;height:3rem;width:3rem;min-height:3rem;min-width:3rem}.akk-toast-icon[data-v-64380114]{margin:1rem}.akk-toast-action[data-v-64380114]{margin:.5rem 0 0 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$5 = "data-v-64380114";
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

var _dec$6, _dec2$1, _class$6, _class2$6, _descriptor$6, _temp$6;
let AkkToastComponent = (_dec$6 = Component({
  components: {
    AkkToast: __vue_component__$5
  }
}), _dec2$1 = Prop({
  type: Object,
  default: () => {
    return {
      position: defaultPosition
    };
  }
}), _dec$6(_class$6 = (_class2$6 = (_temp$6 = class AkkToastComponent extends Vue {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "setting", _descriptor$6, this);

    this.toasts = [];
  }

  mounted() {
    console.log('AkkToastComponent.mounted', this.setting, this.positionAnimation);
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

  get position() {
    var _this$setting, _this$setting$positio, _this$setting2, _this$setting2$positi;

    return [`position-${(_this$setting = this.setting) === null || _this$setting === void 0 ? void 0 : (_this$setting$positio = _this$setting.position) === null || _this$setting$positio === void 0 ? void 0 : _this$setting$positio.horizontal}`, `position-${(_this$setting2 = this.setting) === null || _this$setting2 === void 0 ? void 0 : (_this$setting2$positi = _this$setting2.position) === null || _this$setting2$positi === void 0 ? void 0 : _this$setting2$positi.vertical}`];
  }

  get positionAnimation() {
    var _this$setting3, _this$setting3$positi, _this$setting4, _this$setting4$positi, _this$setting5, _this$setting5$positi, _this$setting6, _this$setting6$positi;

    return 'card' + ((_this$setting3 = this.setting) === null || _this$setting3 === void 0 ? void 0 : (_this$setting3$positi = _this$setting3.position) === null || _this$setting3$positi === void 0 ? void 0 : _this$setting3$positi.vertical.charAt(0).toUpperCase()) + ((_this$setting4 = this.setting) === null || _this$setting4 === void 0 ? void 0 : (_this$setting4$positi = _this$setting4.position) === null || _this$setting4$positi === void 0 ? void 0 : _this$setting4$positi.vertical.slice(1)) + ((_this$setting5 = this.setting) === null || _this$setting5 === void 0 ? void 0 : (_this$setting5$positi = _this$setting5.position) === null || _this$setting5$positi === void 0 ? void 0 : _this$setting5$positi.horizontal.charAt(0).toUpperCase()) + ((_this$setting6 = this.setting) === null || _this$setting6 === void 0 ? void 0 : (_this$setting6$positi = _this$setting6.position) === null || _this$setting6$positi === void 0 ? void 0 : _this$setting6$positi.horizontal.slice(1));
  }

}, _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "setting", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$6)) || _class$6);

/* script */
const __vue_script__$6 = AkkToastComponent;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('transition-group', {
    staticClass: "akk-toast-container",
    class: _vm.position,
    attrs: {
      "name": _vm.positionAnimation,
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

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-79ede4c4_0", {
    source: ".akk-toast-container[data-v-79ede4c4]{z-index:99999;position:fixed;margin:1rem}.akk-toast-container.position-top[data-v-79ede4c4]{top:0}.akk-toast-container.position-bottom[data-v-79ede4c4]{bottom:0}.akk-toast-container.position-left[data-v-79ede4c4]{left:0}.akk-toast-container.position-right[data-v-79ede4c4]{right:0}.cardBottomCenter[data-v-79ede4c4],.cardBottomLeft[data-v-79ede4c4],.cardBottomRight[data-v-79ede4c4],.cardTopCenter[data-v-79ede4c4],.cardTopLeft[data-v-79ede4c4],.cardTopRight[data-v-79ede4c4]{transition:all .5s}.cardBottomRight-leave-to[data-v-79ede4c4],.cardBotttomRight-enter[data-v-79ede4c4],.cardTopRight-enter[data-v-79ede4c4],.cardTopRight-leave-to[data-v-79ede4c4]{opacity:0;transform:translateX(150px)}.cardBottomRight-enter-to[data-v-79ede4c4],.cardTopRight-enter-to[data-v-79ede4c4]{opacity:1;transform:translateX(0)}.cardBottomLeft-leave-to[data-v-79ede4c4],.cardBotttomLeft-enter[data-v-79ede4c4],.cardTopLeft-enter[data-v-79ede4c4],.cardTopLeft-leave-to[data-v-79ede4c4]{opacity:0;transform:translateX(-150px)}.cardBottomLeft-enter-to[data-v-79ede4c4],.cardTopLeft-enter-to[data-v-79ede4c4]{opacity:1;transform:translateX(0)}.cardBottomCenter-enter[data-v-79ede4c4],.cardBottomCenter-leave-to[data-v-79ede4c4]{opacity:0;transform:translateY(-150px)}.cardBottomCenter-enter-to[data-v-79ede4c4]{opacity:1;transform:translateY(0)}.cardTopCenter-enter[data-v-79ede4c4],.cardTopCenter-leave-to[data-v-79ede4c4]{opacity:0;transform:translateY(150px)}.cardTopCenter-enter-to[data-v-79ede4c4]{opacity:1;transform:translateY(0)}.cardBottomCenter-move[data-v-79ede4c4],.cardBottomLeft-move[data-v-79ede4c4],.cardBottomRight-move[data-v-79ede4c4],.cardTopCenter-move[data-v-79ede4c4],.cardTopLeft-move[data-v-79ede4c4],.cardTopRight-move[data-v-79ede4c4]{transition:all .5s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$6 = "data-v-79ede4c4";
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

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
    render: h => h(__vue_component__$6, {
      on: {
        init(e) {
          resolve(e);
        }

      }
    })
  }).$mount("#toast"));

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
