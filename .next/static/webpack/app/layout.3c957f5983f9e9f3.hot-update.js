"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"14ea72f1491d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2IxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxNGVhNzJmMTQ5MWRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/main-nav.tsx":
/*!*********************************!*\
  !*** ./components/main-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-actions */ \"(app-pages-browser)/./components/navbar-actions.tsx\");\n/* harmony import */ var _navbar_mobile2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-mobile2 */ \"(app-pages-browser)/./components/navbar-mobile2.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MainNav = (param)=>{\n    let { data } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const staticRoutes = [\n        {\n            href: \"/\",\n            label: \"Начало\",\n            active: pathname === \"/\"\n        },\n        {\n            href: \"/about\",\n            label: \"За нас\",\n            active: pathname === \"/about\"\n        },\n        {\n            href: \"/contacts\",\n            label: \"Контакти\",\n            active: pathname === \"/contacts\"\n        }\n    ];\n    const routes = data.map((route)=>({\n            href: \"/category/\".concat(route.id),\n            label: route.name,\n            active: pathname === \"/category/\".concat(route.id)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden mx-4 items-start sm:flex space-x-4 lg:space-x-6\",\n                children: [\n                    [\n                        ...staticRoutes,\n                        ...routes\n                    ].map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: route.href,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-sm font-medium transition-colors hover:text-black hover:bg-orange-500 p-1 rounded-md \", route.active ? \" text-white bg-black p-1\" : \"text-neutral-500 \"),\n                            children: route.label\n                        }, route.href, false, {\n                            fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_mobile2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                routes: [\n                    ...routes,\n                    ...staticRoutes\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MainNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRUo7QUFDaUI7QUFFRDtBQUVOO0FBTXZDLE1BQU1LLFVBQWtDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNoRCxNQUFNQyxXQUFXTCw0REFBV0E7SUFDNUIsTUFBTU0sZUFBZTtRQUNwQjtZQUFFQyxNQUFNO1lBQUtDLE9BQU87WUFBVUMsUUFBUUosYUFBYTtRQUFJO1FBQ3ZEO1lBQUVFLE1BQU07WUFBVUMsT0FBTztZQUFVQyxRQUFRSixhQUFhO1FBQVM7UUFDakU7WUFBRUUsTUFBTTtZQUFhQyxPQUFPO1lBQVlDLFFBQVFKLGFBQWE7UUFBWTtLQUN6RTtJQUVELE1BQU1LLFNBQVNOLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxRQUFXO1lBQ25DTCxNQUFNLGFBQXNCLE9BQVRLLE1BQU1DLEVBQUU7WUFDM0JMLE9BQU9JLE1BQU1FLElBQUk7WUFDakJMLFFBQVFKLGFBQWEsYUFBc0IsT0FBVE8sTUFBTUMsRUFBRTtRQUMzQztJQUVBLHFCQUNDOzswQkFDQyw4REFBQ0U7Z0JBQUlDLFdBQVU7O29CQUNiOzJCQUFJVjsyQkFBaUJJO3FCQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDbEMsOERBQUNiLGtEQUFJQTs0QkFFSlEsTUFBTUssTUFBTUwsSUFBSTs0QkFDaEJTLFdBQVdsQiw4Q0FBRUEsQ0FDWiw4RkFDQWMsTUFBTUgsTUFBTSxHQUFHLDZCQUE2QjtzQ0FHNUNHLE1BQU1KLEtBQUs7MkJBUFBJLE1BQU1MLElBQUk7Ozs7O2tDQVVqQiw4REFBQ1U7d0JBQUlELFdBQVU7a0NBQ2QsNEVBQUNmLHVEQUFhQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJaEIsOERBQUNDLHVEQUFPQTtnQkFBQ1EsUUFBUTt1QkFBSUE7dUJBQVdKO2lCQUFhOzs7Ozs7OztBQUdoRDtHQXJDTUg7O1FBQ1lILHdEQUFXQTs7O0tBRHZCRztBQXVDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmF2LnRzeD85ZTljIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICdAL3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmltcG9ydCBOYXZiYXJBY3Rpb25zIGZyb20gJy4vbmF2YmFyLWFjdGlvbnMnO1xuXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL25hdmJhci1tb2JpbGUyJztcblxuaW50ZXJmYWNlIE1haW5OYXZQcm9wcyB7XG5cdGRhdGE6IENhdGVnb3J5W107XG59XG5cbmNvbnN0IE1haW5OYXY6IFJlYWN0LkZDPE1haW5OYXZQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcblx0Y29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXHRjb25zdCBzdGF0aWNSb3V0ZXMgPSBbXG5cdFx0eyBocmVmOiAnLycsIGxhYmVsOiAn0J3QsNGH0LDQu9C+JywgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy8nIH0sXG5cdFx0eyBocmVmOiAnL2Fib3V0JywgbGFiZWw6ICfQl9CwINC90LDRgScsIGFjdGl2ZTogcGF0aG5hbWUgPT09ICcvYWJvdXQnIH0sXG5cdFx0eyBocmVmOiAnL2NvbnRhY3RzJywgbGFiZWw6ICfQmtC+0L3RgtCw0LrRgtC4JywgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy9jb250YWN0cycgfSxcblx0XTtcblxuXHRjb25zdCByb3V0ZXMgPSBkYXRhLm1hcCgocm91dGUpID0+ICh7XG5cdFx0aHJlZjogYC9jYXRlZ29yeS8ke3JvdXRlLmlkfWAsXG5cdFx0bGFiZWw6IHJvdXRlLm5hbWUsXG5cdFx0YWN0aXZlOiBwYXRobmFtZSA9PT0gYC9jYXRlZ29yeS8ke3JvdXRlLmlkfWAsXG5cdH0pKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBteC00IGl0ZW1zLXN0YXJ0IHNtOmZsZXggc3BhY2UteC00IGxnOnNwYWNlLXgtNlwiPlxuXHRcdFx0XHR7Wy4uLnN0YXRpY1JvdXRlcywgLi4ucm91dGVzXS5tYXAoKHJvdXRlKSA9PiAoXG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGtleT17cm91dGUuaHJlZn1cblx0XHRcdFx0XHRcdGhyZWY9e3JvdXRlLmhyZWZ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKFxuXHRcdFx0XHRcdFx0XHQndGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLW9yYW5nZS01MDAgcC0xIHJvdW5kZWQtbWQgJyxcblx0XHRcdFx0XHRcdFx0cm91dGUuYWN0aXZlID8gJyB0ZXh0LXdoaXRlIGJnLWJsYWNrIHAtMScgOiAndGV4dC1uZXV0cmFsLTUwMCAnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cm91dGUubGFiZWx9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpKX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0zXCI+XG5cdFx0XHRcdFx0PE5hdmJhckFjdGlvbnMgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L25hdj5cblxuXHRcdFx0PFNpZGVCYXIgcm91dGVzPXtbLi4ucm91dGVzLCAuLi5zdGF0aWNSb3V0ZXNdfSAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdjtcbiJdLCJuYW1lcyI6WyJjbiIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIk5hdmJhckFjdGlvbnMiLCJTaWRlQmFyIiwiTWFpbk5hdiIsImRhdGEiLCJwYXRobmFtZSIsInN0YXRpY1JvdXRlcyIsImhyZWYiLCJsYWJlbCIsImFjdGl2ZSIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaWQiLCJuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-nav.tsx\n"));

/***/ })

});