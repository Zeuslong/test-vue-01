(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pig-ui"] = factory(require("vue"));
	else
		root["pig-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
}); // runtime helper for setting properties on components
// in a tree-shakable way

exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;

  for (const [key, val] of props) {
    target[key] = val;
  }

  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button/pageButton1.vue?vue&type=template&id=7dc0376b&scoped=true


const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-7dc0376b"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const _hoisted_1 = {
  class: "page-button"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "1515151515454454", -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.test && $options.test(...args))
  }, "点击我")])]);
}
;// CONCATENATED MODULE: ./src/components/page-button/pageButton1.vue?vue&type=template&id=7dc0376b&scoped=true

;// CONCATENATED MODULE: ./src/components/page-button/page-button.js
//测试功能
function pageButton(params) {
  console.log("pageButton----------------page-button", params);
}

/* harmony default export */ var page_button = ({
  pageButton
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button/pageButton1.vue?vue&type=script&lang=js

/* harmony default export */ var pageButton1vue_type_script_lang_js = ({
  name: "pageButton1",
  methods: {
    test() {
      pageButton(1231);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/page-button/pageButton1.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button/pageButton1.vue?vue&type=style&index=0&id=7dc0376b&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/page-button/pageButton1.vue?vue&type=style&index=0&id=7dc0376b&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/components/page-button/pageButton1.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pageButton1vue_type_script_lang_js, [['render',render],['__scopeId',"data-v-7dc0376b"]])

/* harmony default export */ var pageButton1 = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button2/pageButton2.vue?vue&type=template&id=45a96a65&scoped=true


const pageButton2vue_type_template_id_45a96a65_scoped_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-45a96a65"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const pageButton2vue_type_template_id_45a96a65_scoped_true_hoisted_1 = {
  class: "page-button"
};

const pageButton2vue_type_template_id_45a96a65_scoped_true_hoisted_2 = /*#__PURE__*/pageButton2vue_type_template_id_45a96a65_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "2222121212121", -1));

function pageButton2vue_type_template_id_45a96a65_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", pageButton2vue_type_template_id_45a96a65_scoped_true_hoisted_1, [pageButton2vue_type_template_id_45a96a65_scoped_true_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $options.test1 && $options.test1(...args))
  }, "点击我")])]);
}
;// CONCATENATED MODULE: ./src/components/page-button2/pageButton2.vue?vue&type=template&id=45a96a65&scoped=true

;// CONCATENATED MODULE: ./src/components/page-button2/page-button2.js
//测试功能
function pageButton2(params) {
  console.log("pageButton2----------------page-button", params);
}

/* harmony default export */ var page_button2 = ({
  pageButton2
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button2/pageButton2.vue?vue&type=script&lang=js

/* harmony default export */ var pageButton2vue_type_script_lang_js = ({
  name: "pageButton2",
  methods: {
    test1() {
      pageButton2(1231);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/page-button2/pageButton2.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button2/pageButton2.vue?vue&type=style&index=0&id=45a96a65&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/page-button2/pageButton2.vue?vue&type=style&index=0&id=45a96a65&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/page-button2/pageButton2.vue




;


const pageButton2_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pageButton2vue_type_script_lang_js, [['render',pageButton2vue_type_template_id_45a96a65_scoped_true_render],['__scopeId',"data-v-45a96a65"]])

/* harmony default export */ var page_button2_pageButton2 = (pageButton2_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button3/pageButton3.vue?vue&type=template&id=8627c4da&scoped=true


const pageButton3vue_type_template_id_8627c4da_scoped_true_withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-8627c4da"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);

const pageButton3vue_type_template_id_8627c4da_scoped_true_hoisted_1 = {
  class: "page-button"
};

const pageButton3vue_type_template_id_8627c4da_scoped_true_hoisted_2 = /*#__PURE__*/pageButton3vue_type_template_id_8627c4da_scoped_true_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "33333333", -1));

function pageButton3vue_type_template_id_8627c4da_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_button1 = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("page-button1");

  const _component_page_button2 = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("page-button2");

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", pageButton3vue_type_template_id_8627c4da_scoped_true_hoisted_1, [pageButton3vue_type_template_id_8627c4da_scoped_true_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_page_button1), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_page_button2)]);
}
;// CONCATENATED MODULE: ./src/components/page-button3/pageButton3.vue?vue&type=template&id=8627c4da&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button3/pageButton3.vue?vue&type=script&lang=js


/* harmony default export */ var pageButton3vue_type_script_lang_js = ({
  name: "pageButton3",
  components: {
    pageButton1: pageButton1,
    pageButton2: page_button2_pageButton2
  }
});
;// CONCATENATED MODULE: ./src/components/page-button3/pageButton3.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/page-button3/pageButton3.vue?vue&type=style&index=0&id=8627c4da&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/page-button3/pageButton3.vue?vue&type=style&index=0&id=8627c4da&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/components/page-button3/pageButton3.vue




;


const pageButton3_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pageButton3vue_type_script_lang_js, [['render',pageButton3vue_type_template_id_8627c4da_scoped_true_render],['__scopeId',"data-v-8627c4da"]])

/* harmony default export */ var pageButton3 = (pageButton3_exports_);
;// CONCATENATED MODULE: ./src/components/index.js
//导入封装好的组件


 //组件数组

const components = [pageButton1, page_button2_pageButton2, pageButton3]; //批量组件注册

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}; //将组件暴露出去


/* harmony default export */ var src_components = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_components);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=pig-ui.umd.js.map