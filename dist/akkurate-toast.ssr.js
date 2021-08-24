'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vuePropertyDecorator=require('vue-property-decorator'),Information=require('@carbon/icons-vue/es/information/20'),Close=require('@carbon/icons-vue/es/close/20'),WarningAlt=require('@carbon/icons-vue/es/warning--alt/20'),Warning=require('@carbon/icons-vue/es/warning/20'),CheckmarkOutline=require('@carbon/icons-vue/es/checkmark--outline/20'),uuid=require('uuid');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Information__default=/*#__PURE__*/_interopDefaultLegacy(Information);var Close__default=/*#__PURE__*/_interopDefaultLegacy(Close);var WarningAlt__default=/*#__PURE__*/_interopDefaultLegacy(WarningAlt);var Warning__default=/*#__PURE__*/_interopDefaultLegacy(Warning);var CheckmarkOutline__default=/*#__PURE__*/_interopDefaultLegacy(CheckmarkOutline);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

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
}var ToastType;

(function (ToastType) {
  ToastType["INFO"] = "info";
  ToastType["SUCCESS"] = "success";
  ToastType["WARNING"] = "warning";
  ToastType["DANGER"] = "danger";
})(ToastType || (ToastType = {}));var _dec, _dec2, _class, _class2, _descriptor, _temp;
var AkkToast = (_dec = vuePropertyDecorator.Component({
  components: {
    Information: Information__default['default'],
    Close: Close__default['default'],
    WarningAlt: WarningAlt__default['default'],
    Warning: Warning__default['default'],
    CheckmarkOutline: CheckmarkOutline__default['default']
  }
}), _dec2 = vuePropertyDecorator.Prop({
  type: Object,
  required: true
}), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Vue) {
  _inherits(AkkToast, _Vue);

  var _super = _createSuper(AkkToast);

  function AkkToast() {
    var _this;

    _classCallCheck(this, AkkToast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "toast", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(AkkToast, [{
    key: "remove",
    value: function remove() {
      this.$emit("delete", this.toast._id);
    }
  }, {
    key: "icon",
    get: function get() {
      switch (this.toast.type) {
        case ToastType.SUCCESS:
          return CheckmarkOutline__default['default'];

        case ToastType.WARNING:
          return Warning__default['default'];

        case ToastType.DANGER:
          return WarningAlt__default['default'];

        case ToastType.INFO:
        default:
          return Information__default['default'];
      }
    }
  }]);

  return AkkToast;
}(vuePropertyDecorator.Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toast", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = AkkToast;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['akk-toast-item', _vm.toast.type]
  }, [_vm._ssrNode("<div class=\"akk-toast-icon\" data-v-2bee98b3>", "</div>", [_c(_vm.icon, {
    tag: "component"
  })], 1), _vm._ssrNode(" <div class=\"akk-toast-body\" data-v-2bee98b3><div class=\"akk-toast-header\" data-v-2bee98b3><strong class=\"akk-toast-title\" data-v-2bee98b3>" + _vm._ssrEscape(_vm._s(_vm.toast.title)) + "</strong></div> <div data-v-2bee98b3>" + _vm._ssrEscape(_vm._s(_vm.toast.text)) + "</div> " + (_vm.toast.link ? "<div class=\"akk-toast-action\" data-v-2bee98b3><a target=\"_blank\" rel=\"noopener noreferrer\"" + _vm._ssrAttr("href", _vm.toast.link.href) + " data-v-2bee98b3>" + _vm._ssrEscape(_vm._s(_vm.toast.link.name)) + "</a></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div data-v-2bee98b3>", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"akk-toast-close\" data-v-2bee98b3>", "</button>", [_c('Close')], 1)])], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2bee98b3_0", {
    source: ".akk-toast-item[data-v-2bee98b3]{font-family:sans-serif;display:flex;flex-direction:row;width:100%;font-size:.875rem;margin-top:.5rem;background-color:var(--white);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);border-radius:.25rem;border-left:3px solid var(--info,#17a2b8)}@media (min-width:576px){.akk-toast-item[data-v-2bee98b3]{width:420px}}.akk-toast-item.danger[data-v-2bee98b3]{border-left:none;background-color:var(--danger,#c00);color:var(--white,#fff)}.akk-toast-item.success[data-v-2bee98b3]{border-left:3px solid var(--success,#28a745)}.akk-toast-item.warning[data-v-2bee98b3]{border-left:3px solid var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--white,#fff)}.akk-toast-item.danger .akk-toast-close svg[data-v-2bee98b3]{fill:var(--white,#fff);opacity:.5}.akk-toast-icon svg[data-v-2bee98b3]{fill:var(--info,#17a2b8)}.akk-toast-item.success .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-icon svg[data-v-2bee98b3]{fill:var(--warning,#ffc107)}.akk-toast-action a[data-v-2bee98b3]{color:var(--info,#17a2b8);text-decoration:none}.akk-toast-item.success .akk-toast-action a[data-v-2bee98b3]{color:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-action a[data-v-2bee98b3]{color:var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-action a[data-v-2bee98b3]{color:var(--white,#fff);text-decoration:underline}.akk-toast-header[data-v-2bee98b3]{font-size:1.25rem;font-weight:600;margin-bottom:.25rem}.akk-toast-body[data-v-2bee98b3]{flex:1;margin:1rem 0}.akk-toast-close[data-v-2bee98b3]{outline:2px solid transparent;outline-offset:-2px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;border:none;cursor:pointer;margin-left:auto;padding:0;height:3rem;width:3rem;min-height:3rem;min-width:3rem}.akk-toast-icon[data-v-2bee98b3]{margin:1rem}.akk-toast-action[data-v-2bee98b3]{margin:.5rem 0 0 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-2bee98b3";
/* module identifier */

var __vue_module_identifier__ = "data-v-2bee98b3";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);var _dec$1, _class$1, _temp$1;
var AkkToastComponent = (_dec$1 = vuePropertyDecorator.Component({
  components: {
    AkkToast: __vue_component__
  }
}), _dec$1(_class$1 = (_temp$1 = /*#__PURE__*/function (_Vue) {
  _inherits(AkkToastComponent, _Vue);

  var _super = _createSuper(AkkToastComponent);

  function AkkToastComponent() {
    var _this;

    _classCallCheck(this, AkkToastComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.toasts = [];
    return _this;
  }

  _createClass(AkkToastComponent, [{
    key: "mounted",
    value: function mounted() {
      this.$emit("init", this);
    }
  }, {
    key: "push",
    value: function push(title, text, options) {
      var _this2 = this;

      var _id = uuid.v4();

      this.toasts.push({
        _id: _id,
        title: title,
        text: text,
        type: options.type || ToastType.INFO,
        link: options.link
      });
      if (options.timeout === 0) return;
      setTimeout(function () {
        _this2.remove(_id);
      }, options.timeout);
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this.toasts = this.toasts.filter(function (x) {
        return x._id !== id;
      });
    }
  }]);

  return AkkToastComponent;
}(vuePropertyDecorator.Vue), _temp$1)) || _class$1);/* script */
var __vue_script__$1 = AkkToastComponent;
/* template */

var __vue_render__$1 = function __vue_render__() {
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

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-b9b3a61a_0", {
    source: ".akk-toast-container[data-v-b9b3a61a]{z-index:9999;position:fixed;bottom:0;right:0;margin:1rem}.card[data-v-b9b3a61a]{transition:all .5s}.card-enter[data-v-b9b3a61a],.card-leave-to[data-v-b9b3a61a]{opacity:0;transform:translateX(150px)}.card-enter-to[data-v-b9b3a61a]{opacity:1;transform:translateX(0)}.card-move[data-v-b9b3a61a]{transition:all .5s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-b9b3a61a";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-b9b3a61a";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);var defaultOptions = {
  timeout: 1500
};

var install = /*#__PURE__*/function () {
  var _installAkkurateToast = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Vue) {
    var div, toast;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!install.installed) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            install.installed = true;
            div = document.createElement("div");
            div.setAttribute("id", "toast");
            document.getElementsByTagName("body")[0].appendChild(div);
            _context.next = 8;
            return new Promise(function (resolve) {
              return new Vue({
                render: function render(h) {
                  return h(__vue_component__$1, {
                    on: {
                      init: function init(e) {
                        resolve(e);
                      }
                    }
                  });
                }
              }).$mount("#toast");
            });

          case 8:
            toast = _context.sent;
            console.log("ok");

            Vue.prototype.$toast = function (title, message) {
              var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

              var options = _objectSpread2(_objectSpread2({}, defaultOptions), opts);

              console.log("Toast !"); // @ts-ignore

              toast.push(title, message, options);
            };

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function installAkkurateToast(_x) {
    return _installAkkurateToast.apply(this, arguments);
  }

  return installAkkurateToast;
}();

var plugin = {
  install: install
};

{
  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}exports.default=plugin;