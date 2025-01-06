"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MainBoard.jsx":
/*!**********************************!*\
  !*** ./components/MainBoard.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slices_slotSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/slices/slotSlice */ \"./store/slices/slotSlice.js\");\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var _EventCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventCard */ \"./components/EventCard.jsx\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _public_assets_7294793_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/assets/7294793.jpg */ \"./public/assets/7294793.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainBoard() {\n    _s();\n    const unitedEvents = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.slots.data);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const [visibleEvents, setVisibleEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [popupIsOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [popupData, setPopupData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [unitedEvents, setUnitedEvents] = useState ([...slots])\n    // useEffect (() => {\n    //     setUnitedEvents (prev => {\n    //         const newArr = prev.map( each => {\n    //             return {...each, slots: [...timeSlicer(each?.start, each?.end, 30), ...timeSlicer(each?.start, each?.end, 60)]} \n    //         })\n    //         return newArr\n    //     })\n    // }, [])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setVisibleEvents([]);\n    }, [\n        unitedEvents\n    ]);\n    function getClassName(param) {\n        let { date, view } = param;\n        const availableDate = unitedEvents.some((eachDate)=>{\n            var _eachDate_slots;\n            return eachDate.date.toDateString() === date.toDateString() && ((_eachDate_slots = eachDate.slots) === null || _eachDate_slots === void 0 ? void 0 : _eachDate_slots.some((slot)=>slot.available === true));\n        }) ? \"available-event-date\" : null;\n        const unavailableDate = unitedEvents.some((eachDate)=>{\n            var _eachDate_slots;\n            return eachDate.date.toDateString() === date.toDateString() && !((_eachDate_slots = eachDate.slots) === null || _eachDate_slots === void 0 ? void 0 : _eachDate_slots.some((slot)=>slot.available === true));\n        }) ? \"unavailable-event-date\" : null;\n        return availableDate || unavailableDate;\n    }\n    // function timeSlicer (start, end, duration) {\n    //     const startTime = new Date(start)\n    //     const endTime = new Date (end)\n    //     const slotStartTime = []\n    //     const endPoint = new Date( endTime?.setMinutes( endTime?.getMinutes() - duration ) )\n    //     let currentTime = startTime\n    //     while ( currentTime <= endPoint ) {\n    //         let newDate = new Date (currentTime)\n    //         const slotEnd = new Date ( newDate?.setMinutes( newDate?.getMinutes() + duration ) )\n    //         slotStartTime.push({slotStart: currentTime, slotEnd: slotEnd, duration: duration, available: true})\n    //         currentTime = new Date( slotEnd )\n    //     }\n    //     return slotStartTime\n    // }\n    function handleDayClick(value) {\n        const newVisibleEvents = unitedEvents.filter((event)=>event.date.toDateString() === value.toDateString());\n        setVisibleEvents(newVisibleEvents);\n    }\n    function handleEventCardClick(data, avatar) {\n        setPopupData({\n            ...data,\n            avatar: avatar\n        });\n        setPopupOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                locale: \"en-US\",\n                showNeighboringMonth: false,\n                defaultView: \"month\",\n                minDetail: \"month\",\n                maxDetail: \"month\",\n                next2Label: null,\n                prev2Label: null,\n                tileClassName: getClassName,\n                onClickDay: handleDayClick\n            }, void 0, false, {\n                fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/components/MainBoard.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            visibleEvents.map((eachEvent)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EventCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: eachEvent,\n                    avatar: _public_assets_7294793_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                    onClick: handleEventCardClick\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_8__.v4)(), false, {\n                    fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/components/MainBoard.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 46\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: popupIsOpen,\n                data: popupData,\n                setOpen: setPopupOpen,\n                dispatch: dispatch,\n                updateSlots: _store_slices_slotSlice__WEBPACK_IMPORTED_MODULE_2__.updateSlots\n            }, void 0, false, {\n                fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/components/MainBoard.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/components/MainBoard.jsx\",\n        lineNumber: 65,\n        columnNumber: 12\n    }, this);\n}\n_s(MainBoard, \"xB5feqbmBIcJGgMxNYQOVwFuOyI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch\n    ];\n});\n_c = MainBoard;\nvar _c;\n$RefreshReg$(_c, \"MainBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixhQUFhQSxnRUFBV0E7Ozs7Ozs7Ozs7OztBQUU1SDtHQTVFd0JPOztRQUNDVCxvREFBV0E7UUFDZkMsb0RBQVdBOzs7S0FGUlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQm9hcmQuanN4PzY0Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgdXBkYXRlU2xvdHMgfSBmcm9tIFwiLi4vc3RvcmUvc2xpY2VzL3Nsb3RTbGljZVwiXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCJcbmltcG9ydCBFdmVudENhcmQgZnJvbSBcIi4vRXZlbnRDYXJkXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0IGF2YXRhciBmcm9tIFwiQC9wdWJsaWMvYXNzZXRzLzcyOTQ3OTMuanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkJvYXJkICgpIHtcbiAgICBjb25zdCB1bml0ZWRFdmVudHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zbG90cy5kYXRhKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IFt2aXNpYmxlRXZlbnRzLCBzZXRWaXNpYmxlRXZlbnRzXSA9IHVzZVN0YXRlIChbXSlcbiAgICBjb25zdCBbcG9wdXBJc09wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZSAoZmFsc2UpXG4gICAgY29uc3QgW3BvcHVwRGF0YSwgc2V0UG9wdXBEYXRhXSA9IHVzZVN0YXRlICgpXG4gICAgLy8gY29uc3QgW3VuaXRlZEV2ZW50cywgc2V0VW5pdGVkRXZlbnRzXSA9IHVzZVN0YXRlIChbLi4uc2xvdHNdKVxuXG4gICAgLy8gdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgLy8gICAgIHNldFVuaXRlZEV2ZW50cyAocHJldiA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBuZXdBcnIgPSBwcmV2Lm1hcCggZWFjaCA9PiB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHsuLi5lYWNoLCBzbG90czogWy4uLnRpbWVTbGljZXIoZWFjaD8uc3RhcnQsIGVhY2g/LmVuZCwgMzApLCAuLi50aW1lU2xpY2VyKGVhY2g/LnN0YXJ0LCBlYWNoPy5lbmQsIDYwKV19IFxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIHJldHVybiBuZXdBcnJcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9LCBbXSlcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZUV2ZW50cyhbXSlcbiAgICB9LCBbdW5pdGVkRXZlbnRzXSlcblxuICAgIGZ1bmN0aW9uIGdldENsYXNzTmFtZSAoe2RhdGUsIHZpZXd9KSB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGUgPSB1bml0ZWRFdmVudHMuc29tZSggZWFjaERhdGUgPT4gZWFjaERhdGUuZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSAmJiBlYWNoRGF0ZS5zbG90cz8uc29tZSggc2xvdCA9PiBzbG90LmF2YWlsYWJsZSA9PT0gdHJ1ZSkgKVxuICAgICAgICAgICAgPyBcImF2YWlsYWJsZS1ldmVudC1kYXRlXCJcbiAgICAgICAgICAgIDogbnVsbCAgICAgXG4gICAgICAgIGNvbnN0IHVuYXZhaWxhYmxlRGF0ZSA9IHVuaXRlZEV2ZW50cy5zb21lKCBlYWNoRGF0ZSA9PiBlYWNoRGF0ZS5kYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpICYmICFlYWNoRGF0ZS5zbG90cz8uc29tZSggc2xvdCA9PiBzbG90LmF2YWlsYWJsZSA9PT0gdHJ1ZSkgKVxuICAgICAgICAgICAgPyBcInVuYXZhaWxhYmxlLWV2ZW50LWRhdGVcIlxuICAgICAgICAgICAgOiBudWxsICAgXG4gICAgICAgIHJldHVybiBhdmFpbGFibGVEYXRlIHx8IHVuYXZhaWxhYmxlRGF0ZVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRpbWVTbGljZXIgKHN0YXJ0LCBlbmQsIGR1cmF0aW9uKSB7XG4gICAgLy8gICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHN0YXJ0KVxuICAgIC8vICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUgKGVuZClcbiAgICAvLyAgICAgY29uc3Qgc2xvdFN0YXJ0VGltZSA9IFtdXG4gICAgLy8gICAgIGNvbnN0IGVuZFBvaW50ID0gbmV3IERhdGUoIGVuZFRpbWU/LnNldE1pbnV0ZXMoIGVuZFRpbWU/LmdldE1pbnV0ZXMoKSAtIGR1cmF0aW9uICkgKVxuICAgIC8vICAgICBsZXQgY3VycmVudFRpbWUgPSBzdGFydFRpbWVcbiAgICAvLyAgICAgd2hpbGUgKCBjdXJyZW50VGltZSA8PSBlbmRQb2ludCApIHtcbiAgICAvLyAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUgKGN1cnJlbnRUaW1lKVxuICAgIC8vICAgICAgICAgY29uc3Qgc2xvdEVuZCA9IG5ldyBEYXRlICggbmV3RGF0ZT8uc2V0TWludXRlcyggbmV3RGF0ZT8uZ2V0TWludXRlcygpICsgZHVyYXRpb24gKSApXG4gICAgLy8gICAgICAgICBzbG90U3RhcnRUaW1lLnB1c2goe3Nsb3RTdGFydDogY3VycmVudFRpbWUsIHNsb3RFbmQ6IHNsb3RFbmQsIGR1cmF0aW9uOiBkdXJhdGlvbiwgYXZhaWxhYmxlOiB0cnVlfSlcbiAgICAvLyAgICAgICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoIHNsb3RFbmQgKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzbG90U3RhcnRUaW1lXG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF5Q2xpY2sgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld1Zpc2libGVFdmVudHMgPSB1bml0ZWRFdmVudHMuZmlsdGVyKCBldmVudCA9PiBldmVudC5kYXRlLnRvRGF0ZVN0cmluZygpID09PSB2YWx1ZS50b0RhdGVTdHJpbmcoKSApXG4gICAgICAgIHNldFZpc2libGVFdmVudHMgKG5ld1Zpc2libGVFdmVudHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXZlbnRDYXJkQ2xpY2sgKGRhdGEsIGF2YXRhcikge1xuICAgICAgICBzZXRQb3B1cERhdGEoey4uLmRhdGEsIGF2YXRhcjogYXZhdGFyfSlcbiAgICAgICAgc2V0UG9wdXBPcGVuICh0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9hcmRcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgc2hvd05laWdoYm9yaW5nTW9udGg9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwibW9udGhcIlxuICAgICAgICAgICAgICAgIG1pbkRldGFpbD1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICBtYXhEZXRhaWw9XCJtb250aFwiXG4gICAgICAgICAgICAgICAgbmV4dDJMYWJlbD17bnVsbH1cbiAgICAgICAgICAgICAgICBwcmV2MkxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgIHRpbGVDbGFzc05hbWU9e2dldENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrRGF5PXtoYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dmlzaWJsZUV2ZW50cy5tYXAoIGVhY2hFdmVudCA9PiA8RXZlbnRDYXJkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlYWNoRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXthdmF0YXIuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXZlbnRDYXJkQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFBvcHVwIGlzT3Blbj17cG9wdXBJc09wZW59IGRhdGE9e3BvcHVwRGF0YX0gc2V0T3Blbj17c2V0UG9wdXBPcGVufSBkaXNwYXRjaD17ZGlzcGF0Y2h9IHVwZGF0ZVNsb3RzPXt1cGRhdGVTbG90c30vPlxuICAgIDwvZGl2PlxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1cGRhdGVTbG90cyIsIkNhbGVuZGFyIiwiRXZlbnRDYXJkIiwiUG9wdXAiLCJ2NCIsInV1aWR2NCIsImF2YXRhciIsIk1haW5Cb2FyZCIsInVuaXRlZEV2ZW50cyIsInN0YXRlIiwic2xvdHMiLCJkYXRhIiwiZGlzcGF0Y2giLCJ2aXNpYmxlRXZlbnRzIiwic2V0VmlzaWJsZUV2ZW50cyIsInBvcHVwSXNPcGVuIiwic2V0UG9wdXBPcGVuIiwicG9wdXBEYXRhIiwic2V0UG9wdXBEYXRhIiwiZ2V0Q2xhc3NOYW1lIiwiZGF0ZSIsInZpZXciLCJhdmFpbGFibGVEYXRlIiwic29tZSIsImVhY2hEYXRlIiwidG9EYXRlU3RyaW5nIiwic2xvdCIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlRGF0ZSIsImhhbmRsZURheUNsaWNrIiwidmFsdWUiLCJuZXdWaXNpYmxlRXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJoYW5kbGVFdmVudENhcmRDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImxvY2FsZSIsInNob3dOZWlnaGJvcmluZ01vbnRoIiwiZGVmYXVsdFZpZXciLCJtaW5EZXRhaWwiLCJtYXhEZXRhaWwiLCJuZXh0MkxhYmVsIiwicHJldjJMYWJlbCIsInRpbGVDbGFzc05hbWUiLCJvbkNsaWNrRGF5IiwibWFwIiwiZWFjaEV2ZW50Iiwic3JjIiwib25DbGljayIsImlzT3BlbiIsInNldE9wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainBoard.jsx\n"));

/***/ })

});