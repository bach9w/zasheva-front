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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6117a7f73f4a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2IxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MTE3YTdmNzNmNGFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/main-nav.tsx":
/*!*********************************!*\
  !*** ./components/main-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar-actions */ \"(app-pages-browser)/./components/navbar-actions.tsx\");\n/* harmony import */ var _navbar_mobile2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-mobile2 */ \"(app-pages-browser)/./components/navbar-mobile2.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MainNav = (param)=>{\n    let { data } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const staticRoutes = [\n        {\n            href: \"/\",\n            label: \"Начало\",\n            active: pathname === \"/\"\n        },\n        {\n            href: \"/about\",\n            label: \"За нас\",\n            active: pathname === \"/about\"\n        },\n        {\n            href: \"/contacts\",\n            label: \"Контакти\",\n            active: pathname === \"/contacts\"\n        }\n    ];\n    const routes = data.map((route)=>({\n            href: \"/category/\".concat(route.id),\n            label: route.name,\n            active: pathname === \"/category/\".concat(route.id)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden mx-3 sm:flex items-center space-x-4 lg:space-x-6\",\n                children: [\n                    [\n                        ...staticRoutes,\n                        ...routes\n                    ].map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: route.href,\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-sm font-medium transition-colors hover:text-black hover:bg-orange-500 p-1 rounded-md \", route.active ? \" text-white bg-black p-1\" : \"text-neutral-500 \"),\n                            children: route.label\n                        }, route.href, false, {\n                            fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_mobile2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                routes: [\n                    ...routes,\n                    ...staticRoutes\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/main-nav.tsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(MainNav, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBRUo7QUFDaUI7QUFFRDtBQUVOO0FBTXZDLE1BQU1LLFVBQWtDO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNoRCxNQUFNQyxXQUFXTCw0REFBV0E7SUFDNUIsTUFBTU0sZUFBZTtRQUNwQjtZQUFFQyxNQUFNO1lBQUtDLE9BQU87WUFBVUMsUUFBUUosYUFBYTtRQUFJO1FBQ3ZEO1lBQUVFLE1BQU07WUFBVUMsT0FBTztZQUFVQyxRQUFRSixhQUFhO1FBQVM7UUFDakU7WUFBRUUsTUFBTTtZQUFhQyxPQUFPO1lBQVlDLFFBQVFKLGFBQWE7UUFBWTtLQUN6RTtJQUVELE1BQU1LLFNBQVNOLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxRQUFXO1lBQ25DTCxNQUFNLGFBQXNCLE9BQVRLLE1BQU1DLEVBQUU7WUFDM0JMLE9BQU9JLE1BQU1FLElBQUk7WUFDakJMLFFBQVFKLGFBQWEsYUFBc0IsT0FBVE8sTUFBTUMsRUFBRTtRQUMzQztJQUVBLHFCQUNDOzswQkFDQyw4REFBQ0U7Z0JBQUlDLFdBQVU7O29CQUNiOzJCQUFJVjsyQkFBaUJJO3FCQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDbEMsOERBQUNiLGtEQUFJQTs0QkFFSlEsTUFBTUssTUFBTUwsSUFBSTs0QkFDaEJTLFdBQVdsQiw4Q0FBRUEsQ0FDWiw4RkFDQWMsTUFBTUgsTUFBTSxHQUFHLDZCQUE2QjtzQ0FHNUNHLE1BQU1KLEtBQUs7MkJBUFBJLE1BQU1MLElBQUk7Ozs7O2tDQVVqQiw4REFBQ04sdURBQWFBOzs7Ozs7Ozs7OzswQkFHZiw4REFBQ0MsdURBQU9BO2dCQUFDUSxRQUFRO3VCQUFJQTt1QkFBV0o7aUJBQWE7Ozs7Ozs7O0FBR2hEO0dBbkNNSDs7UUFDWUgsd0RBQVdBOzs7S0FEdkJHO0FBcUNOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4PzllOWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscyc7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi9uYXZiYXItYWN0aW9ucyc7XG5cbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vbmF2YmFyLW1vYmlsZTInO1xuXG5pbnRlcmZhY2UgTWFpbk5hdlByb3BzIHtcblx0ZGF0YTogQ2F0ZWdvcnlbXTtcbn1cblxuY29uc3QgTWFpbk5hdjogUmVhY3QuRkM8TWFpbk5hdlByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuXHRjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cdGNvbnN0IHN0YXRpY1JvdXRlcyA9IFtcblx0XHR7IGhyZWY6ICcvJywgbGFiZWw6ICfQndCw0YfQsNC70L4nLCBhY3RpdmU6IHBhdGhuYW1lID09PSAnLycgfSxcblx0XHR7IGhyZWY6ICcvYWJvdXQnLCBsYWJlbDogJ9CX0LAg0L3QsNGBJywgYWN0aXZlOiBwYXRobmFtZSA9PT0gJy9hYm91dCcgfSxcblx0XHR7IGhyZWY6ICcvY29udGFjdHMnLCBsYWJlbDogJ9Ca0L7QvdGC0LDQutGC0LgnLCBhY3RpdmU6IHBhdGhuYW1lID09PSAnL2NvbnRhY3RzJyB9LFxuXHRdO1xuXG5cdGNvbnN0IHJvdXRlcyA9IGRhdGEubWFwKChyb3V0ZSkgPT4gKHtcblx0XHRocmVmOiBgL2NhdGVnb3J5LyR7cm91dGUuaWR9YCxcblx0XHRsYWJlbDogcm91dGUubmFtZSxcblx0XHRhY3RpdmU6IHBhdGhuYW1lID09PSBgL2NhdGVnb3J5LyR7cm91dGUuaWR9YCxcblx0fSkpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG14LTMgc206ZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IGxnOnNwYWNlLXgtNlwiPlxuXHRcdFx0XHR7Wy4uLnN0YXRpY1JvdXRlcywgLi4ucm91dGVzXS5tYXAoKHJvdXRlKSA9PiAoXG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGtleT17cm91dGUuaHJlZn1cblx0XHRcdFx0XHRcdGhyZWY9e3JvdXRlLmhyZWZ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NuKFxuXHRcdFx0XHRcdFx0XHQndGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjp0ZXh0LWJsYWNrIGhvdmVyOmJnLW9yYW5nZS01MDAgcC0xIHJvdW5kZWQtbWQgJyxcblx0XHRcdFx0XHRcdFx0cm91dGUuYWN0aXZlID8gJyB0ZXh0LXdoaXRlIGJnLWJsYWNrIHAtMScgOiAndGV4dC1uZXV0cmFsLTUwMCAnLFxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7cm91dGUubGFiZWx9XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpKX1cblx0XHRcdFx0PE5hdmJhckFjdGlvbnMgLz5cblx0XHRcdDwvbmF2PlxuXG5cdFx0XHQ8U2lkZUJhciByb3V0ZXM9e1suLi5yb3V0ZXMsIC4uLnN0YXRpY1JvdXRlc119IC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2O1xuIl0sIm5hbWVzIjpbImNuIiwiTGluayIsInVzZVBhdGhuYW1lIiwiTmF2YmFyQWN0aW9ucyIsIlNpZGVCYXIiLCJNYWluTmF2IiwiZGF0YSIsInBhdGhuYW1lIiwic3RhdGljUm91dGVzIiwiaHJlZiIsImxhYmVsIiwiYWN0aXZlIiwicm91dGVzIiwibWFwIiwicm91dGUiLCJpZCIsIm5hbWUiLCJuYXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-nav.tsx\n"));

/***/ })

});