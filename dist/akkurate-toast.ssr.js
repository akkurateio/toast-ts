'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vuePropertyDecorator=require('vue-property-decorator'),uuid=require('uuid');function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
}var _dec, _class, _class2, _descriptor, _temp;
var Info = (_dec = vuePropertyDecorator.Prop({
  type: Number,
  default: 24,
  required: false
}), vuePropertyDecorator.Component(_class = (_class2 = (_temp = /*#__PURE__*/function (_Vue) {
  _inherits(Info, _Vue);

  var _super = _createSuper(Info);

  function Info() {
    var _this;

    _classCallCheck(this, Info);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "size", _descriptor, _assertThisInitialized(_this));

    return _this;
  }

  return Info;
}(vuePropertyDecorator.Vue), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec], {
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
}/* script */
var __vue_script__ = Info;
/* template */

var __vue_render__ = function __vue_render__() {
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
  }, [_vm._ssrNode("<path d=\"M17 22L17 14 13 14 13 16 15 16 15 22 12 22 12 24 20 24 20 22 17 22zM16 8a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 8z\"></path> <path d=\"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z\"></path>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-45db1fc1";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);var _dec$1, _class$1, _class2$1, _descriptor$1, _temp$1;
var Close = (_dec$1 = vuePropertyDecorator.Prop({
  type: Number,
  default: 24,
  required: false
}), vuePropertyDecorator.Component(_class$1 = (_class2$1 = (_temp$1 = /*#__PURE__*/function (_Vue) {
  _inherits(Close, _Vue);

  var _super = _createSuper(Close);

  function Close() {
    var _this;

    _classCallCheck(this, Close);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "size", _descriptor$1, _assertThisInitialized(_this));

    return _this;
  }

  return Close;
}(vuePropertyDecorator.Vue), _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "size", [_dec$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$1)) || _class$1);/* script */
var __vue_script__$1 = Close;
/* template */

var __vue_render__$1 = function __vue_render__() {
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
  }, [_vm._ssrNode("<path d=\"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z\"></path>")]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-e3b3083e";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);var _dec$2, _class$2, _class2$2, _descriptor$2, _temp$2;
var WarningFilled = (_dec$2 = vuePropertyDecorator.Prop({
  type: Number,
  default: 24,
  required: false
}), vuePropertyDecorator.Component(_class$2 = (_class2$2 = (_temp$2 = /*#__PURE__*/function (_Vue) {
  _inherits(WarningFilled, _Vue);

  var _super = _createSuper(WarningFilled);

  function WarningFilled() {
    var _this;

    _classCallCheck(this, WarningFilled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "size", _descriptor$2, _assertThisInitialized(_this));

    return _this;
  }

  return WarningFilled;
}(vuePropertyDecorator.Vue), _temp$2), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "size", [_dec$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$2)) || _class$2);/* script */
var __vue_script__$2 = WarningFilled;
/* template */

var __vue_render__$2 = function __vue_render__() {
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
  }, [_vm._ssrNode("<path d=\"M16,23a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,23Z\"></path> <rect x=\"15\" y=\"12\" width=\"2\" height=\"9\"></rect> <path d=\"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z\"></path>")]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-2067b868";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);var _dec$3, _class$3, _class2$3, _descriptor$3, _temp$3;
var Warning = (_dec$3 = vuePropertyDecorator.Prop({
  type: Number,
  default: 24,
  required: false
}), vuePropertyDecorator.Component(_class$3 = (_class2$3 = (_temp$3 = /*#__PURE__*/function (_Vue) {
  _inherits(Warning, _Vue);

  var _super = _createSuper(Warning);

  function Warning() {
    var _this;

    _classCallCheck(this, Warning);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "size", _descriptor$3, _assertThisInitialized(_this));

    return _this;
  }

  return Warning;
}(vuePropertyDecorator.Vue), _temp$3), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "size", [_dec$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$3)) || _class$3);/* script */
var __vue_script__$3 = Warning;
/* template */

var __vue_render__$3 = function __vue_render__() {
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
  }, [_vm._ssrNode("<path d=\"M16 23a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 23zM15 12H17V21H15z\"></path> <path d=\"M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z\"></path>")]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-49c54ccd";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);var _dec$4, _class$4, _class2$4, _descriptor$4, _temp$4;
var WarningFilled$1 = (_dec$4 = vuePropertyDecorator.Prop({
  type: Number,
  default: 24,
  required: false
}), vuePropertyDecorator.Component(_class$4 = (_class2$4 = (_temp$4 = /*#__PURE__*/function (_Vue) {
  _inherits(WarningFilled, _Vue);

  var _super = _createSuper(WarningFilled);

  function WarningFilled() {
    var _this;

    _classCallCheck(this, WarningFilled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "size", _descriptor$4, _assertThisInitialized(_this));

    return _this;
  }

  return WarningFilled;
}(vuePropertyDecorator.Vue), _temp$4), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "size", [_dec$4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$4)) || _class$4);/* script */
var __vue_script__$4 = WarningFilled$1;
/* template */

var __vue_render__$4 = function __vue_render__() {
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
  }, [_vm._ssrNode("<polygon points=\"14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414\"></polygon> <path d=\"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z\"></path>")]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-c0e8cc06";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);var ToastType;

(function (ToastType) {
  ToastType["INFO"] = "info";
  ToastType["SUCCESS"] = "success";
  ToastType["WARNING"] = "warning";
  ToastType["DANGER"] = "danger";
})(ToastType || (ToastType = {}));

var defaultPosition = {
  horizontal: "right",
  vertical: "bottom"
};var _dec$5, _dec2, _class$5, _class2$5, _descriptor$5, _temp$5;
var AkkToast = (_dec$5 = vuePropertyDecorator.Component({
  components: {
    Info: __vue_component__,
    Close: __vue_component__$1,
    WarningAlt: __vue_component__$2,
    Warning: __vue_component__$3,
    CheckmarkOutline: __vue_component__$4
  }
}), _dec2 = vuePropertyDecorator.Prop({
  type: Object,
  required: true
}), _dec$5(_class$5 = (_class2$5 = (_temp$5 = /*#__PURE__*/function (_Vue) {
  _inherits(AkkToast, _Vue);

  var _super = _createSuper(AkkToast);

  function AkkToast() {
    var _this;

    _classCallCheck(this, AkkToast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "toast", _descriptor$5, _assertThisInitialized(_this));

    return _this;
  }

  _createClass(AkkToast, [{
    key: "mounted",
    value: function mounted() {
      console.log('AkkToast.mounted', this.toast);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.$emit("delete", this.toast._id);
    }
  }, {
    key: "icon",
    get: function get() {
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
  }]);

  return AkkToast;
}(vuePropertyDecorator.Vue), _temp$5), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "toast", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$5)) || _class$5);function createInjectorSSR(context) {
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
var __vue_script__$5 = AkkToast;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['akk-toast-item', _vm.toast.type]
  }, [_vm._ssrNode("<div class=\"akk-toast-icon\" data-v-64380114>", "</div>", [_c(_vm.icon, {
    tag: "component"
  })], 1), _vm._ssrNode(" <div class=\"akk-toast-body\" data-v-64380114><div class=\"akk-toast-header\" data-v-64380114><strong class=\"akk-toast-title\" data-v-64380114>" + _vm._ssrEscape(_vm._s(_vm.toast.title)) + "</strong></div> <div data-v-64380114>" + _vm._ssrEscape(_vm._s(_vm.toast.text)) + "</div> " + (_vm.toast.link ? "<div class=\"akk-toast-action\" data-v-64380114><a target=\"_blank\" rel=\"noopener noreferrer\"" + _vm._ssrAttr("href", _vm.toast.link.href) + " data-v-64380114>" + _vm._ssrEscape(_vm._s(_vm.toast.link.name)) + "</a></div>" : "<!---->") + "</div> "), _vm._ssrNode("<div data-v-64380114>", "</div>", [_vm._ssrNode("<button type=\"button\" class=\"akk-toast-close\" data-v-64380114>", "</button>", [_c('Close')], 1)])], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-64380114_0", {
    source: ".akk-toast-item[data-v-64380114]{font-family:sans-serif;display:flex;flex-direction:row;width:100%;font-size:.875rem;margin-top:.5rem;background-color:var(--white,#fff);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);border-radius:.25rem;border-left:3px solid var(--info,#17a2b8)}@media (min-width:576px){.akk-toast-item[data-v-64380114]{width:420px}}.akk-toast-item.danger[data-v-64380114]{border-left:none;background-color:var(--danger,#c00);color:var(--white,#fff)}.akk-toast-item.success[data-v-64380114]{border-left:3px solid var(--success,#28a745)}.akk-toast-item.warning[data-v-64380114]{border-left:3px solid var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-icon svg[data-v-64380114]{fill:var(--white,#fff)}.akk-toast-item.danger .akk-toast-close svg[data-v-64380114]{fill:var(--white,#fff);opacity:.5}.akk-toast-icon svg[data-v-64380114]{fill:var(--info,#17a2b8)}.akk-toast-item.success .akk-toast-icon svg[data-v-64380114]{fill:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-icon svg[data-v-64380114]{fill:var(--warning,#ffc107)}.akk-toast-action a[data-v-64380114]{color:var(--info,#17a2b8);text-decoration:none}.akk-toast-item.success .akk-toast-action a[data-v-64380114]{color:var(--success,#28a745)}.akk-toast-item.warning .akk-toast-action a[data-v-64380114]{color:var(--warning,#ffc107)}.akk-toast-item.danger .akk-toast-action a[data-v-64380114]{color:var(--white,#fff);text-decoration:underline}.akk-toast-header[data-v-64380114]{font-size:1.25rem;font-weight:600;margin-bottom:.25rem}.akk-toast-body[data-v-64380114]{flex:1;margin:1rem 0}.akk-toast-close[data-v-64380114]{outline:2px solid transparent;outline-offset:-2px;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;border:none;cursor:pointer;margin-left:auto;padding:0;height:3rem;width:3rem;min-height:3rem;min-width:3rem}.akk-toast-icon[data-v-64380114]{margin:1rem}.akk-toast-action[data-v-64380114]{margin:.5rem 0 0 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = "data-v-64380114";
/* module identifier */

var __vue_module_identifier__$5 = "data-v-64380114";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);var _dec$6, _dec2$1, _class$6, _class2$6, _descriptor$6, _temp$6;
var AkkToastComponent = (_dec$6 = vuePropertyDecorator.Component({
  components: {
    AkkToast: __vue_component__$5
  }
}), _dec2$1 = vuePropertyDecorator.Prop({
  type: Object,
  default: function _default() {
    return {
      position: defaultPosition
    };
  }
}), _dec$6(_class$6 = (_class2$6 = (_temp$6 = /*#__PURE__*/function (_Vue) {
  _inherits(AkkToastComponent, _Vue);

  var _super = _createSuper(AkkToastComponent);

  function AkkToastComponent() {
    var _this;

    _classCallCheck(this, AkkToastComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "setting", _descriptor$6, _assertThisInitialized(_this));

    _this.toasts = [];
    return _this;
  }

  _createClass(AkkToastComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log('AkkToastComponent.mounted', this.setting, this.positionAnimation);
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
  }, {
    key: "position",
    get: function get() {
      var _this$setting, _this$setting$positio, _this$setting2, _this$setting2$positi;

      return ["position-".concat((_this$setting = this.setting) === null || _this$setting === void 0 ? void 0 : (_this$setting$positio = _this$setting.position) === null || _this$setting$positio === void 0 ? void 0 : _this$setting$positio.horizontal), "position-".concat((_this$setting2 = this.setting) === null || _this$setting2 === void 0 ? void 0 : (_this$setting2$positi = _this$setting2.position) === null || _this$setting2$positi === void 0 ? void 0 : _this$setting2$positi.vertical)];
    }
  }, {
    key: "positionAnimation",
    get: function get() {
      var _this$setting3, _this$setting3$positi, _this$setting4, _this$setting4$positi, _this$setting5, _this$setting5$positi, _this$setting6, _this$setting6$positi;

      return 'card' + ((_this$setting3 = this.setting) === null || _this$setting3 === void 0 ? void 0 : (_this$setting3$positi = _this$setting3.position) === null || _this$setting3$positi === void 0 ? void 0 : _this$setting3$positi.vertical.charAt(0).toUpperCase()) + ((_this$setting4 = this.setting) === null || _this$setting4 === void 0 ? void 0 : (_this$setting4$positi = _this$setting4.position) === null || _this$setting4$positi === void 0 ? void 0 : _this$setting4$positi.vertical.slice(1)) + ((_this$setting5 = this.setting) === null || _this$setting5 === void 0 ? void 0 : (_this$setting5$positi = _this$setting5.position) === null || _this$setting5$positi === void 0 ? void 0 : _this$setting5$positi.horizontal.charAt(0).toUpperCase()) + ((_this$setting6 = this.setting) === null || _this$setting6 === void 0 ? void 0 : (_this$setting6$positi = _this$setting6.position) === null || _this$setting6$positi === void 0 ? void 0 : _this$setting6$positi.horizontal.slice(1));
    }
  }]);

  return AkkToastComponent;
}(vuePropertyDecorator.Vue), _temp$6), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "setting", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2$6)) || _class$6);/* script */
var __vue_script__$6 = AkkToastComponent;
/* template */

var __vue_render__$6 = function __vue_render__() {
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

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d2c4ae62_0", {
    source: ".akk-toast-container[data-v-d2c4ae62]{z-index:9999;position:fixed;margin:1rem}.akk-toast-container.position-top[data-v-d2c4ae62]{top:0}.akk-toast-container.position-bottom[data-v-d2c4ae62]{bottom:0}.akk-toast-container.position-left[data-v-d2c4ae62]{left:0}.akk-toast-container.position-right[data-v-d2c4ae62]{right:0}.cardBottomCenter[data-v-d2c4ae62],.cardBottomLeft[data-v-d2c4ae62],.cardBottomRight[data-v-d2c4ae62],.cardTopCenter[data-v-d2c4ae62],.cardTopLeft[data-v-d2c4ae62],.cardTopRight[data-v-d2c4ae62]{transition:all .5s}.cardBottomRight-leave-to[data-v-d2c4ae62],.cardBotttomRight-enter[data-v-d2c4ae62],.cardTopRight-enter[data-v-d2c4ae62],.cardTopRight-leave-to[data-v-d2c4ae62]{opacity:0;transform:translateX(150px)}.cardBottomRight-enter-to[data-v-d2c4ae62],.cardTopRight-enter-to[data-v-d2c4ae62]{opacity:1;transform:translateX(0)}.cardBottomLeft-leave-to[data-v-d2c4ae62],.cardBotttomLeft-enter[data-v-d2c4ae62],.cardTopLeft-enter[data-v-d2c4ae62],.cardTopLeft-leave-to[data-v-d2c4ae62]{opacity:0;transform:translateX(-150px)}.cardBottomLeft-enter-to[data-v-d2c4ae62],.cardTopLeft-enter-to[data-v-d2c4ae62]{opacity:1;transform:translateX(0)}.cardBottomCenter-enter[data-v-d2c4ae62],.cardBottomCenter-leave-to[data-v-d2c4ae62]{opacity:0;transform:translateY(-150px)}.cardBottomCenter-enter-to[data-v-d2c4ae62]{opacity:1;transform:translateY(0)}.cardTopCenter-enter[data-v-d2c4ae62],.cardTopCenter-leave-to[data-v-d2c4ae62]{opacity:0;transform:translateY(150px)}.cardTopCenter-enter-to[data-v-d2c4ae62]{opacity:1;transform:translateY(0)}.cardBottomCenter-move[data-v-d2c4ae62],.cardBottomLeft-move[data-v-d2c4ae62],.cardBottomRight-move[data-v-d2c4ae62],.cardTopCenter-move[data-v-d2c4ae62],.cardTopLeft-move[data-v-d2c4ae62],.cardTopRight-move[data-v-d2c4ae62]{transition:all .5s}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-d2c4ae62";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-d2c4ae62";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);var defaultOptions = {
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
                  return h(__vue_component__$6, {
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

            Vue.prototype.$toast = function (title, message) {
              var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

              var options = _objectSpread2(_objectSpread2({}, defaultOptions), opts);

              console.log("Toast !"); // @ts-ignore

              toast.push(title, message, options);
            };

          case 10:
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