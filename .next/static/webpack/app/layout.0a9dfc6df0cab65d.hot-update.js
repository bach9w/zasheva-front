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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c1e1487898e6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2IxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjMWUxNDg3ODk4ZTZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_InfoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=InfoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/info.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _navbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-actions */ \"(app-pages-browser)/./components/navbar-actions.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Footer = ()=>{\n    _s();\n    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)();\n    const [hidden, setHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValueEvent)(scrollY, \"change\", (latest)=>{\n        const previous = scrollY.getPrevious();\n        if (latest > previous && latest > 0) {\n            setHidden(true);\n        } else {\n            setHidden(false);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.footer, {\n        variants: {\n            visible: {\n                y: 0\n            },\n            hidden: {\n                y: \"100%\"\n            }\n        },\n        animate: hidden ? \"hidden\" : \"visible\",\n        transition: {\n            duration: 0.5,\n            ease: \"easeInOut\"\n        },\n        className: \"fixed w-full  bottom-0 bg-gray-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-sm md:text-xl mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex sm:items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InfoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-5 w-5 md:h-10 md:w-10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 7\n                            }, undefined),\n                            \" info@zasheva.com\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute right-3 bottom-1 sm:bottom-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n            lineNumber: 30,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zash/Desktop/zasheva/zasheva-store/components/footer.tsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Footer, \"bEtUqkOqGxG0/Y+HmORtCVFLRTs=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValueEvent\n    ];\n});\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1RDtBQUNKO0FBQ29CO0FBQzFCO0FBRTdDLE1BQU1PLFNBQVM7O0lBQ2QsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0osd0RBQVNBO0lBQzdCLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUVyQ0csa0VBQW1CQSxDQUFDRyxTQUFTLFVBQVUsQ0FBQ0c7UUFDdkMsTUFBTUMsV0FBV0osUUFBUUssV0FBVztRQUNwQyxJQUFJRixTQUFTQyxZQUFZRCxTQUFTLEdBQUc7WUFDcENELFVBQVU7UUFDWCxPQUFPO1lBQ05BLFVBQVU7UUFDWDtJQUNEO0lBRUEscUJBQ0MsOERBQUNQLGlEQUFNQSxDQUFDVyxNQUFNO1FBQ2JDLFVBQVU7WUFDVEMsU0FBUztnQkFBRUMsR0FBRztZQUFFO1lBQ2hCUixRQUFRO2dCQUFFUSxHQUFHO1lBQU87UUFDckI7UUFDQUMsU0FBU1QsU0FBUyxXQUFXO1FBQzdCVSxZQUFZO1lBQUVDLFVBQVU7WUFBS0MsTUFBTTtRQUFZO1FBQy9DQyxXQUFVO2tCQUVWLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNkLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDZCw4REFBQ3RCLG9GQUFRQTtnQ0FBQ3NCLFdBQVU7Ozs7Ozs0QkFBNEI7Ozs7Ozs7a0NBRWpELDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDZCw0RUFBQ2hCLHVEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0FuQ01DOztRQUNlSCxvREFBU0E7UUFHN0JDLDhEQUFtQkE7OztLQUpkRTtBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvb3Rlci50c3g/ZTNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBJbmZvSWNvbiwgUGhvbmVDYWxsSWNvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZUV2ZW50IH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuL25hdmJhci1hY3Rpb25zJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xuXHRjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdHVzZU1vdGlvblZhbHVlRXZlbnQoc2Nyb2xsWSwgJ2NoYW5nZScsIChsYXRlc3QpID0+IHtcblx0XHRjb25zdCBwcmV2aW91cyA9IHNjcm9sbFkuZ2V0UHJldmlvdXMoKTtcblx0XHRpZiAobGF0ZXN0ID4gcHJldmlvdXMgJiYgbGF0ZXN0ID4gMCkge1xuXHRcdFx0c2V0SGlkZGVuKHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRIaWRkZW4oZmFsc2UpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmZvb3RlclxuXHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0dmlzaWJsZTogeyB5OiAwIH0sXG5cdFx0XHRcdGhpZGRlbjogeyB5OiAnMTAwJScgfSxcblx0XHRcdH19XG5cdFx0XHRhbmltYXRlPXtoaWRkZW4gPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ31cblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZWFzZTogJ2Vhc2VJbk91dCcgfX1cblx0XHRcdGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCAgYm90dG9tLTAgYmctZ3JheS01MFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1kOnRleHQteGwgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgcHgtNCBweS0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggc206aXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTJcIj5cblx0XHRcdFx0XHRcdDxJbmZvSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IG1kOmgtMTAgbWQ6dy0xMFwiIC8+IGluZm9AemFzaGV2YS5jb21cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTMgYm90dG9tLTEgc206Ym90dG9tLTNcIj5cblx0XHRcdFx0XHRcdDxOYXZiYXJBY3Rpb25zIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZm9vdGVyPlxuXHQpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJJbmZvSWNvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwiTmF2YmFyQWN0aW9ucyIsIkZvb3RlciIsInNjcm9sbFkiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJsYXRlc3QiLCJwcmV2aW91cyIsImdldFByZXZpb3VzIiwiZm9vdGVyIiwidmFyaWFudHMiLCJ2aXNpYmxlIiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/footer.tsx\n"));

/***/ })

});