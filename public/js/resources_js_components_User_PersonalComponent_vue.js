"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_PersonalComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: "PersonalComponent",
  data: function data() {
    return {
      posts: [],
      bookmarks: [],
      comments: []
    };
  },
  mounted: function mounted() {
    this.getPosts();
    this.getBookmarks();
    this.getComments();
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      axios.get('/api/user/posts').then(function (res) {
        console.log(res.data.data);
        _this.posts = res.data.data;
      });
    },
    getBookmarks: function getBookmarks() {
      var _this2 = this;

      axios.get('/api/user/bookmarks').then(function (res) {
        console.log(res.data.data);
        _this2.bookmarks = res.data.data;
      });
    },
    getComments: function getComments() {
      var _this3 = this;

      axios.get('/api/user/comments').then(function (res) {
        console.log(res.data.data);
        _this3.comments = res.data.data;
      });
    },
    saveBookmarks: function saveBookmarks(id) {
      console.log('Save bookmarks');
      axios.post("/api/post/".concat(id, "/bookmarks")).then(function (res) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/components/user/PersonalComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/PersonalComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true& */ "./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true&");
/* harmony import */ var _PersonalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "42dc4e78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/PersonalComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalComponent_vue_vue_type_template_id_42dc4e78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PersonalComponent.vue?vue&type=template&id=42dc4e78&scoped=true& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-12 mb-4" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "mb-4 pb-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "mt-2", attrs: { id: "my-block" } }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { attrs: { id: "user-block" } }, [
              _c(
                "div",
                { staticClass: "collapse", attrs: { id: "user-posts" } },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(_vm.posts, function (post) {
                      return _c(
                        "div",
                        { staticClass: "col-lg-4 col-md-12 mb-4" },
                        [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-6" }, [
                                  _c("h5", { staticClass: "card-title" }, [
                                    _vm._v(_vm._s(post.title)),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6" }, [
                                  _c(
                                    "i",
                                    {
                                      staticClass: "fa-pull-right",
                                      staticStyle: { "font-size": "0.8em" },
                                    },
                                    [_vm._v(_vm._s(post.date))]
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("p", {
                                staticClass: "card-text",
                                domProps: { innerHTML: _vm._s(post.excerpt) },
                              }),
                              _vm._v(" "),
                              _vm._m(3, true),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "collapse", attrs: { id: "user-bookmarks" } },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(_vm.bookmarks, function (bookmarkPost) {
                      return _c(
                        "div",
                        { staticClass: "col-lg-4 col-md-12 mb-4" },
                        [
                          _c("div", { staticClass: "card" }, [
                            _vm._m(4, true),
                            _vm._v(" "),
                            _c("div", { staticClass: "card-body" }, [
                              _vm._m(5, true),
                              _vm._v(" "),
                              _c("p", { staticClass: "card-text" }, [
                                _vm._v(
                                  "\n                                                Some quick example text to build on the card title and make up the bulk of the\n                                                card's content.\n                                            "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { href: "#!" },
                                  },
                                  [_vm._v("Read")]
                                ),
                                _vm._v(" "),
                                _vm._m(6, true),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function ($event) {
                                        $event.preventDefault()
                                        return _vm.saveBookmarks(_vm.post.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "far fa-bookmark fa-pull-right m-2",
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(7, true),
                              ]),
                            ]),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "collapse", attrs: { id: "user-comments" } },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(_vm.comments, function (comment) {
                      return _c("div", { staticClass: "row mb-4" }, [
                        _vm._m(8, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-9" }, [
                          _c("p", { staticClass: "mb-2" }, [
                            _c("strong", [_vm._v(_vm._s(comment.author.name))]),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                                            " +
                                _vm._s(comment.message) +
                                "\n                                        "
                            ),
                          ]),
                        ]),
                      ])
                    }),
                    0
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "border-bottom mb-4 pb-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-3" }, [
          _c("img", {
            staticClass: "img-fluid shadow-1-strong rounded",
            attrs: {
              src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg",
              alt: "",
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-9" }, [
          _c("p", { staticClass: "mb-2" }, [
            _c("strong", [_vm._v("Anna Maria Doe")]),
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("Register date: 02.06.2022")]),
          _vm._v(" "),
          _c("p", [_vm._v("Email: admin@mail.com")]),
          _vm._v(" "),
          _c("p", [_vm._v("Email: admin@mail.com")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure\n                        inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?\n                        Repellendus alias dolor ad nam, soluta distinctio quis accusantium!\n                    "
            ),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c(
        "a",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "data-bs-toggle": "collapse",
            "data-parent": "#user-block",
            href: "#user-posts",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "user-posts",
          },
        },
        [
          _vm._v(
            "\n                            Your posts\n                        "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "data-parent": "#user-block",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#user-bookmarks",
            "aria-expanded": "false",
            "aria-controls": "user-bookmarks",
          },
        },
        [
          _vm._v(
            "\n                            Your bookmarks\n                        "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            "data-parent": "#user-block",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#user-comments",
            "aria-expanded": "false",
            "aria-controls": "user-comments",
          },
        },
        [
          _vm._v(
            "\n                            Your comments\n                        "
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "bg-image hover-overlay ripple",
        attrs: { "data-mdb-ripple-color": "light" },
      },
      [
        _c("img", {
          staticClass: "img-fluid",
          attrs: {
            src: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
          },
        }),
        _vm._v(" "),
        _c("a", { attrs: { href: "#!" } }, [
          _c("div", {
            staticClass: "mask",
            staticStyle: { "background-color": "rgba(251, 251, 251, 0.15)" },
          }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("a", { staticClass: "btn btn-primary", attrs: { href: "#!" } }, [
        _vm._v("Read"),
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "m-2" }, [
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "far fa-thumbs-down m-2" }),
        ]),
        _vm._v(" "),
        _c("span", [_vm._v("1")]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [
          _c("i", { staticClass: "far fa-thumbs-up m-2" }),
        ]),
      ]),
      _vm._v(" "),
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
      "div",
      {
        staticClass: "bg-image hover-overlay ripple",
        attrs: { "data-mdb-ripple-color": "light" },
      },
      [
        _c("img", {
          staticClass: "img-fluid",
          attrs: {
            src: "https://mdbootstrap.com/img/new/standard/nature/184.jpg",
          },
        }),
        _vm._v(" "),
        _c("a", { attrs: { href: "#!" } }, [
          _c("div", {
            staticClass: "mask",
            staticStyle: { "background-color": "rgba(251, 251, 251, 0.15)" },
          }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6" }, [
        _c("h5", { staticClass: "card-title" }, [_vm._v("Post title")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c(
          "i",
          {
            staticClass: "fa-pull-right",
            staticStyle: { "font-size": "0.8em" },
          },
          [_vm._v("Date: 11-11-2011")]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "m-2" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-thumbs-down m-2" }),
      ]),
      _vm._v(" "),
      _c("span", [_vm._v("1")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "far fa-thumbs-up m-2" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "far fa-comment fa-pull-right m-2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("img", {
        staticClass: "img-fluid rounded-circle shadow-1-strong rounded",
        attrs: {
          src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg",
          alt: "",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);