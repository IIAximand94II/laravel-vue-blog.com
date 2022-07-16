"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_post_ShowComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "CommentComponent"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentComponent */ "./resources/js/components/post/CommentComponent.vue");
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
  name: "ShowComponent",
  data: function data() {
    return {
      post: null,
      comments: null,
      message: null
    };
  },
  mounted: function mounted() {
    this.getPost();
  },
  methods: {
    getPost: function getPost() {
      axios.get("/api/post/".concat(2)).then(function (res) {
        console.log(res.data.data);
      });
    },
    getComments: function getComments() {}
  },
  components: {
    CommentComponent: _CommentComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/js/components/post/CommentComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/post/CommentComponent.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true& */ "./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true&");
/* harmony import */ var _CommentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "36cddb52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/post/CommentComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/post/ShowComponent.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/post/ShowComponent.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true& */ "./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true&");
/* harmony import */ var _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5a3de03c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/post/ShowComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentComponent_vue_vue_type_template_id_36cddb52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true&");


/***/ }),

/***/ "./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_5a3de03c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/CommentComponent.vue?vue&type=template&id=36cddb52&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("section", { staticClass: "border-bottom mb-3" }, [
        _c("p", { staticClass: "text-center" }, [
          _c("strong", [_vm._v("Comments: 3")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-4" }, [
          _c("div", { staticClass: "col-2" }, [
            _c("img", {
              staticClass: "img-fluid shadow-1-strong rounded",
              attrs: {
                src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg",
                alt: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-10" }, [
            _c("p", { staticClass: "mb-2" }, [
              _c("strong", [_vm._v("Marta Dolores")]),
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure\n                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?\n                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!\n                "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-4" }, [
          _c("div", { staticClass: "col-2" }, [
            _c("img", {
              staticClass: "img-fluid shadow-1-strong rounded",
              attrs: {
                src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg",
                alt: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-10" }, [
            _c("p", { staticClass: "mb-2" }, [
              _c("strong", [_vm._v("Valeria Groove")]),
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure\n                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?\n                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!\n                "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mb-4" }, [
          _c("div", { staticClass: "col-2" }, [
            _c("img", {
              staticClass: "img-fluid shadow-1-strong rounded",
              attrs: {
                src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg",
                alt: "",
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-10" }, [
            _c("p", { staticClass: "mb-2" }, [
              _c("strong", [_vm._v("Antonia Velez")]),
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure\n                    inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?\n                    Repellendus alias dolor ad nam, soluta distinctio quis accusantium!\n                "
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("section", [
        _c("p", { staticClass: "text-center" }, [
          _c("strong", [_vm._v("Leave a reply")]),
        ]),
        _vm._v(" "),
        _c("form", [
          _c("div", { staticClass: "form-outline mb-4" }, [
            _c(
              "label",
              {
                staticClass: "form-label mb-3",
                attrs: { for: "form4Example3" },
              },
              [_vm._v("You comment")]
            ),
            _vm._v(" "),
            _c("textarea", {
              staticClass: "form-control",
              attrs: { id: "form4Example3", rows: "4" },
            }),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block mb-4",
              attrs: { type: "submit" },
            },
            [_vm._v("\n                Send\n            ")]
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/post/ShowComponent.vue?vue&type=template&id=5a3de03c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("CommentComponent"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "border-bottom mb-4" }, [
      _c("img", {
        staticClass: "img-fluid shadow-2-strong rounded mb-4",
        attrs: {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg",
          alt: "",
        },
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row align-items-center mb-4" }, [
        _c(
          "div",
          { staticClass: "col-lg-6 text-center text-lg-start mb-3 m-lg-0" },
          [
            _c("img", {
              staticClass: "rounded shadow-1-strong me-2",
              attrs: {
                src: "https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg",
                height: "35",
                alt: "",
                loading: "lazy",
              },
            }),
            _vm._v(" "),
            _c("span", [
              _vm._v(" Published "),
              _c("u", [_vm._v("15.07.2020")]),
              _vm._v(" by"),
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "text-dark", attrs: { href: "" } }, [
              _vm._v("Anna Maria Doe"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 text-center text-lg-end" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary px-3 me-1",
              staticStyle: { "background-color": "#0082ca" },
              attrs: { type: "button" },
            },
            [_c("i", { staticClass: "fas fa-bookmark" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary px-3 me-1",
              attrs: { type: "button" },
            },
            [_c("i", { staticClass: "fas fa-comments" })]
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", [
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias\n            consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam\n            ullam molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum,\n            dolor sit amet consectetur adipisicing elit. Optio sapiente molestias consectetur.\n            Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam molestiae\n            magni velit laborum itaque minima doloribus eligendi!\n        "
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [_vm._v("Optio sapiente molestias consectetur?")]),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut\n            tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem\n            adipisci totam sit consequuntur eligendi.\n        "
        ),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "note note-light" }, [
        _c("strong", [_vm._v("Note:")]),
        _vm._v(
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,\n            adipisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.\n        "
        ),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat\n            molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis\n            possimus quia incidunt maiores molestias eaque nam commodi! Magnam, labore.\n        "
        ),
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "img-fluid shadow-1-strong rounded mb-4",
        attrs: {
          src: "https://mdbootstrap.com/img/new/slides/041.jpg",
          alt: "",
        },
      }),
      _vm._v(" "),
      _c("ul", [
        _c("li", [_vm._v("Lorem")]),
        _vm._v(" "),
        _c("li", [_vm._v("Ipsum")]),
        _vm._v(" "),
        _c("li", [_vm._v("Dolor")]),
        _vm._v(" "),
        _c("li", [_vm._v("Sit")]),
        _vm._v(" "),
        _c("li", [_vm._v("Amet")]),
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla\n            voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab\n            officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?\n        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "text-center border-top border-bottom py-4 mb-4" },
      [
        _c("p", [_c("strong", [_vm._v("Share with your friends:")])]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary me-1",
            staticStyle: { "background-color": "#3b5998" },
            attrs: { type: "button" },
          },
          [_c("i", { staticClass: "fab fa-facebook-f" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary me-1",
            staticStyle: { "background-color": "#55acee" },
            attrs: { type: "button" },
          },
          [_c("i", { staticClass: "fab fa-twitter" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary me-1",
            staticStyle: { "background-color": "#0082ca" },
            attrs: { type: "button" },
          },
          [_c("i", { staticClass: "fab fa-linkedin" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary me-1", attrs: { type: "button" } },
          [
            _c("i", { staticClass: "fas fa-comments me-2" }),
            _vm._v("Add comment\n        "),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);