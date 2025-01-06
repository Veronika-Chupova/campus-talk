"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/slices/slotSlice.js":
/*!***********************************!*\
  !*** ./store/slices/slotSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchSlotsFailure: function() { return /* binding */ fetchSlotsFailure; },\n/* harmony export */   fetchSlotsStart: function() { return /* binding */ fetchSlotsStart; },\n/* harmony export */   fetchSlotsSuccess: function() { return /* binding */ fetchSlotsSuccess; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst slotSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"slots\",\n    initialState: {\n        loading: false,\n        error: null,\n        data: [\n            {\n                date: new Date(2025, 0, 26),\n                start: new Date(\"2025-01-26T10:00:00\"),\n                end: new Date(\"2025-01-26T11:00:00\"),\n                name: \"John Smith\",\n                userID: \"1\",\n                venue: \"Department of Biology\",\n                slots: []\n            },\n            {\n                date: new Date(2025, 0, 29),\n                start: new Date(\"2025-01-29T10:00:00\"),\n                end: new Date(\"2025-01-29T11:00:00\"),\n                name: \"Ammy Rodes\",\n                userID: \"2\",\n                venue: \"Department of Art\",\n                slots: []\n            },\n            {\n                date: new Date(2025, 0, 27),\n                start: new Date(\"2025-01-27T10:00:00\"),\n                end: new Date(\"2025-01-27T11:00:00\"),\n                name: \"Ali Wanes\",\n                userID: \"3\",\n                venue: \"Department of Computer Science\",\n                slots: []\n            }\n        ]\n    },\n    reducers: {\n        fetchSlotsStart: (state)=>{\n            state.loading = true;\n        },\n        fetchSlotsSuccess: (state, action)=>{\n            state.loading = false;\n            state.slots = [\n                ...action.payload\n            ];\n        },\n        fetchSlotsFailure: (state, action)=>{\n            state.loading = false;\n            state.error = action.payload;\n        }\n    }\n});\nconst { fetchSlotsStart, fetchSlotsSuccess, fetchSlotsFailure } = slotSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (slotSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvc2xvdFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsWUFBWUQsNkRBQVdBLENBQUU7SUFDM0JFLE1BQU07SUFDTkMsY0FBYztRQUNWQyxTQUFTO1FBQ1RDLE9BQU87UUFDUEMsTUFBTTtZQUNGO2dCQUFDQyxNQUFNLElBQUlDLEtBQUssTUFBTSxHQUFHO2dCQUFLQyxPQUFPLElBQUlELEtBQUs7Z0JBQXdCRSxLQUFLLElBQUlGLEtBQUs7Z0JBQXdCTixNQUFLO2dCQUFjUyxRQUFRO2dCQUFLQyxPQUFNO2dCQUF5QkMsT0FBTyxFQUFFO1lBQUE7WUFDcEw7Z0JBQUNOLE1BQU0sSUFBSUMsS0FBSyxNQUFNLEdBQUc7Z0JBQUtDLE9BQU8sSUFBSUQsS0FBSztnQkFBd0JFLEtBQUssSUFBSUYsS0FBSztnQkFBd0JOLE1BQUs7Z0JBQWNTLFFBQVE7Z0JBQUtDLE9BQU07Z0JBQXFCQyxPQUFPLEVBQUU7WUFBQTtZQUNoTDtnQkFBQ04sTUFBTSxJQUFJQyxLQUFLLE1BQU0sR0FBRztnQkFBS0MsT0FBTyxJQUFJRCxLQUFLO2dCQUF3QkUsS0FBSyxJQUFJRixLQUFLO2dCQUF3Qk4sTUFBSztnQkFBYVMsUUFBUTtnQkFBS0MsT0FBTTtnQkFBa0NDLE9BQU8sRUFBRTtZQUFBO1NBQy9MO0lBQ0w7SUFDQUMsVUFBVTtRQUNOQyxpQkFBaUIsQ0FBQ0M7WUFBWUEsTUFBTVosT0FBTyxHQUFHO1FBQUs7UUFDbkRhLG1CQUFtQixDQUFDRCxPQUFPRTtZQUN2QkYsTUFBTVosT0FBTyxHQUFHO1lBQ2hCWSxNQUFNSCxLQUFLLEdBQUc7bUJBQUlLLE9BQU9DLE9BQU87YUFBQztRQUNyQztRQUNBQyxtQkFBbUIsQ0FBQ0osT0FBT0U7WUFDdkJGLE1BQU1aLE9BQU8sR0FBRztZQUNoQlksTUFBTVgsS0FBSyxHQUFHYSxPQUFPQyxPQUFPO1FBQ2hDO0lBQ0o7QUFDSjtBQUVPLE1BQU0sRUFBRUosZUFBZSxFQUFFRSxpQkFBaUIsRUFBRUcsaUJBQWlCLEVBQUUsR0FBR25CLFVBQVVvQixPQUFPO0FBQzFGLCtEQUFlcEIsVUFBVXFCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc2xpY2VzL3Nsb3RTbGljZS5qcz82ZWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxuXG5jb25zdCBzbG90U2xpY2UgPSBjcmVhdGVTbGljZSAoe1xuICAgIG5hbWU6ICdzbG90cycsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge2RhdGU6IG5ldyBEYXRlKDIwMjUsIDAsIDI2KSwgc3RhcnQ6IG5ldyBEYXRlKCcyMDI1LTAxLTI2VDEwOjAwOjAwJyksIGVuZDogbmV3IERhdGUoJzIwMjUtMDEtMjZUMTE6MDA6MDAnKSwgbmFtZTpcIkpvaG4gU21pdGhcIiwgdXNlcklEOiBcIjFcIiwgdmVudWU6XCJEZXBhcnRtZW50IG9mIEJpb2xvZ3lcIiwgc2xvdHM6IFtdfSxcbiAgICAgICAgICAgIHtkYXRlOiBuZXcgRGF0ZSgyMDI1LCAwLCAyOSksIHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wMS0yOVQxMDowMDowMCcpLCBlbmQ6IG5ldyBEYXRlKCcyMDI1LTAxLTI5VDExOjAwOjAwJyksIG5hbWU6XCJBbW15IFJvZGVzXCIsIHVzZXJJRDogXCIyXCIsIHZlbnVlOlwiRGVwYXJ0bWVudCBvZiBBcnRcIiwgc2xvdHM6IFtdfSxcbiAgICAgICAgICAgIHtkYXRlOiBuZXcgRGF0ZSgyMDI1LCAwLCAyNyksIHN0YXJ0OiBuZXcgRGF0ZSgnMjAyNS0wMS0yN1QxMDowMDowMCcpLCBlbmQ6IG5ldyBEYXRlKCcyMDI1LTAxLTI3VDExOjAwOjAwJyksIG5hbWU6XCJBbGkgV2FuZXNcIiwgdXNlcklEOiBcIjNcIiwgdmVudWU6XCJEZXBhcnRtZW50IG9mIENvbXB1dGVyIFNjaWVuY2VcIiwgc2xvdHM6IFtdfVxuICAgICAgICBdLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgZmV0Y2hTbG90c1N0YXJ0OiAoc3RhdGUpID0+IHsgc3RhdGUubG9hZGluZyA9IHRydWUgfSxcbiAgICAgICAgZmV0Y2hTbG90c1N1Y2Nlc3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHN0YXRlLnNsb3RzID0gWy4uLmFjdGlvbi5wYXlsb2FkXVxuICAgICAgICB9LFxuICAgICAgICBmZXRjaFNsb3RzRmFpbHVyZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9LFxuICAgIH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBmZXRjaFNsb3RzU3RhcnQsIGZldGNoU2xvdHNTdWNjZXNzLCBmZXRjaFNsb3RzRmFpbHVyZSB9ID0gc2xvdFNsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHNsb3RTbGljZS5yZWR1Y2VyXG5cbi8vc2xvdCBzdGF0ZS5kYXRhIGl0ZW0gc3RydWN0dXJlXG4vLyAge1xuLy8gICAgIHVzZXJJRDogbnVsbCxcbi8vICAgICB1c2VyTmFtZTogbnVsbCxcbi8vICAgICB1c2VyRGVwYXJ0bWVudDogbnVsbCxcbi8vICAgICB1c2VyQXZhdGFyOiBudWxsLFxuLy8gICAgIGRhdGU6IG51bGwsIFxuLy8gICAgIHN0YXJ0OiBudWxsLCBcbi8vICAgICBlbmQ6IG51bGwsIFxuLy8gICAgIHZlbnVlOiBudWxsLCBcbi8vICAgICBzbG90czogW3tcbi8vICAgICAgICAgICAgIHNsb3RTdGFydDogbnVsbCxcbi8vICAgICAgICAgICAgIHNsb3RFbmQ6IG51bGwsXG4vLyAgICAgICAgICAgICBkdXJhdGlvbjogMzAvNjAsXG4vLyAgICAgICAgICAgICBhdmFpbGFibGU6IHRydWUvZmFsc2Vcbi8vICAgICAgfV0sXG4vLyAgfSAiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzbG90U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImRhdGUiLCJEYXRlIiwic3RhcnQiLCJlbmQiLCJ1c2VySUQiLCJ2ZW51ZSIsInNsb3RzIiwicmVkdWNlcnMiLCJmZXRjaFNsb3RzU3RhcnQiLCJzdGF0ZSIsImZldGNoU2xvdHNTdWNjZXNzIiwiYWN0aW9uIiwicGF5bG9hZCIsImZldGNoU2xvdHNGYWlsdXJlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/slotSlice.js\n"));

/***/ })

});