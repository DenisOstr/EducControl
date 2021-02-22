(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Groups_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Sidebar */ "./resources/js/Components/Sidebar.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _Components_Sidebar__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {},
  props: {
    url: String
  },
  methods: {
    isUrl: function isUrl() {
      var _this = this;

      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === '') {
        return this.url === '';
      }

      return urls.filter(function (url) {
        return _this.url.startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Commons_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Commons/Layout */ "./resources/js/Commons/Layout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Layout: _Commons_Layout__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/js/Commons/Layout.vue":
/*!*****************************************!*\
  !*** ./resources/js/Commons/Layout.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_06f560ef_bindings_url_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=06f560ef&bindings={"url":"options"} */ "./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={\"url\":\"options\"}");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js */ "./resources/js/Commons/Layout.vue?vue&type=script&lang=js");



_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Layout_vue_vue_type_template_id_06f560ef_bindings_url_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Commons/Layout.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/Sidebar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_236a5a3e_bindings_url_props_isUrl_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=236a5a3e&bindings={"url":"props","isUrl":"options"} */ "./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={\"url\":\"props\",\"isUrl\":\"options\"}");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./resources/js/Components/Sidebar.vue?vue&type=script&lang=js");



_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Sidebar_vue_vue_type_template_id_236a5a3e_bindings_url_props_isUrl_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Components/Sidebar.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Groups/Index.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Groups/Index.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_1fd04b60_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1fd04b60&bindings={} */ "./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={}");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_1fd04b60_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Groups/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Commons/Layout.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Commons/Layout.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Sidebar.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Sidebar.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={\"url\":\"options\"}":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={"url":"options"} ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_06f560ef_bindings_url_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layout_vue_vue_type_template_id_06f560ef_bindings_url_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layout.vue?vue&type=template&id=06f560ef&bindings={"url":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={\"url\":\"options\"}");


/***/ }),

/***/ "./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={\"url\":\"props\",\"isUrl\":\"options\"}":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={"url":"props","isUrl":"options"} ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_236a5a3e_bindings_url_props_isUrl_options___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sidebar_vue_vue_type_template_id_236a5a3e_bindings_url_props_isUrl_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sidebar.vue?vue&type=template&id=236a5a3e&bindings={"url":"props","isUrl":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={\"url\":\"props\",\"isUrl\":\"options\"}");


/***/ }),

/***/ "./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={}":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={} ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_1fd04b60_bindings___WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_1fd04b60_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=1fd04b60&bindings={} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={\"url\":\"options\"}":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Commons/Layout.vue?vue&type=template&id=06f560ef&bindings={"url":"options"} ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "base" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("sidebar")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("main", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sidebar, {
      ulr: $options.url()
    }, null, 8 /* PROPS */, ["ulr"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={\"url\":\"props\",\"isUrl\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Sidebar.vue?vue&type=template&id=236a5a3e&bindings={"url":"props","isUrl":"options"} ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "sidebar" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", { class: "text-lg font-serif font-bold text-logoTextColor" }, "EducControls", -1 /* HOISTED */)
const _hoisted_3 = { class: "mt-14" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("aside", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"item\"><inertia-link href=\"/\">Overview</inertia-link></li>\r\n            <li class=\"item\"><inertia-link href=\"/groups\">Groups</inertia-link></li>\r\n            <li class=\"item\"><inertia-link href=\"/students\">Students</inertia-link></li> "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: _ctx.route('home')
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            class: $options.isUrl('') ? 'text-xl' : 'text-lg'
          }, "Overview", 2 /* CLASS */)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: _ctx.route('groups')
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            class: $options.isUrl('groups') ? 'text-xl' : 'text-lg'
          }, "Overview", 2 /* CLASS */)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
        href: _ctx.route('students')
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            class: $options.isUrl('students') ? 'text-xl' : 'text-lg'
          }, "Overview", 2 /* CLASS */)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["href"])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={}":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Groups/Index.vue?vue&type=template&id=1fd04b60&bindings={} ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", { class: "text-black text-5xl" }, "New Groups", -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      _hoisted_1
    ]),
    _: 1 /* STABLE */
  }))
}

/***/ })

}]);