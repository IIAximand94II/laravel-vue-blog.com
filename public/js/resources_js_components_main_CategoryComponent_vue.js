"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_CategoryComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidbar_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidbar/SidebarComponent */ "./resources/js/components/sidbar/SidebarComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CategoryComponent",
  data: function data() {
    return {
      posts: null
    };
  },
  mounted: function mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      console.log(this.$route.params.id);
      axios.get("/api/category/".concat(this.$route.params.id)).then(function (res) {
        //console.log(res.data.data)
        _this.posts = res.data.data; //console.log(this.posts);
      });
    }
  },
  components: {
    SidebarComponent: _sidbar_SidebarComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/main/CategoryComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/main/CategoryComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true& */ "./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true&");
/* harmony import */ var _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e6f0b98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/CategoryComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoryComponent_vue_vue_type_template_id_9e6f0b98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/CategoryComponent.vue?vue&type=template&id=9e6f0b98&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _vm._l(_vm.posts, function (post) {
        return _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4 mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "bg-image hover-overlay shadow-1-strong rounded ripple",
                attrs: { "data-mdb-ripple-color": "light" },
              },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: post.preview_image },
                }),
                _vm._v(" "),
                _vm._m(0, true),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-8 mb-4" }, [
            _c("h5", [_vm._v(_vm._s(post.title))]),
            _vm._v(" "),
            _c("p", { domProps: { innerHTML: _vm._s(post.excerpt) } }),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-3" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        to: { path: "/post/" + post.id },
                        type: "button",
                      },
                    },
                    [_vm._v("Read")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(1, true),
              _vm._v(" "),
              _vm._m(2, true),
            ]),
          ]),
        ])
      }),
      _vm._v(" "),
      _vm._m(3),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#!" } }, [
      _c("div", {
        staticClass: "mask",
        staticStyle: { "background-color": "rgba(251, 251, 251, 0.15)" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 " }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-thumbs-down  fa-pull-right m-2" }),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: " fa-pull-right m-1" }, [_vm._v("1")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-thumbs-up  fa-pull-right m-2" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-bookmark fa-pull-right m-2" }),
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-comment fa-pull-right m-2" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "my-4 mt-5", attrs: { "aria-label": "..." } },
      [
        _c(
          "ul",
          {
            staticClass: "pagination pagination-circle justify-content-center",
          },
          [
            _c("li", { staticClass: "page-item" }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#", tabindex: "-1", "aria-disabled": "true" },
                },
                [_vm._v("Previous")]
              ),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("1"),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass: "page-item active",
                attrs: { "aria-current": "page" },
              },
              [
                _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                  _vm._v("2 "),
                  _c("span", { staticClass: "sr-only" }, [_vm._v("(current)")]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("3"),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "page-item" }, [
              _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
                _vm._v("Next"),
              ]),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);