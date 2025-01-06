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

/***/ "./pages/components/MainBoard.jsx":
/*!****************************************!*\
  !*** ./pages/components/MainBoard.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-calendar */ \"./node_modules/react-calendar/dist/esm/index.js\");\n/* harmony import */ var _EventCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventCard */ \"./pages/components/EventCard.jsx\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ \"./pages/components/Popup.jsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _public_assets_7294793_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/assets/7294793.jpg */ \"./public/assets/7294793.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MainBoard() {\n    _s();\n    const slots = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.slots);\n    console.log(slots);\n    const [unitedEvents, setUnitedEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUnitedEvents((prev)=>{\n            const newArr = prev.map((each)=>{\n                return {\n                    ...each,\n                    slots: [\n                        ...timeSlicer(each === null || each === void 0 ? void 0 : each.start, each === null || each === void 0 ? void 0 : each.end, 30),\n                        ...timeSlicer(each === null || each === void 0 ? void 0 : each.start, each === null || each === void 0 ? void 0 : each.end, 60)\n                    ]\n                };\n            });\n            return newArr;\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setVisibleEvents([]);\n    }, [\n        unitedEvents\n    ]);\n    const [visibleEvents, setVisibleEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [popupIsOpen, setPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [popupData, setPopupData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    function getClassName(param) {\n        let { date, view } = param;\n        const availableDate = unitedEvents.some((eachDate)=>{\n            var _eachDate_slots;\n            return eachDate.date.toDateString() === date.toDateString() && ((_eachDate_slots = eachDate.slots) === null || _eachDate_slots === void 0 ? void 0 : _eachDate_slots.some((slot)=>slot.available === true));\n        }) ? \"available-event-date\" : null;\n        const unavailableDate = unitedEvents.some((eachDate)=>{\n            var _eachDate_slots;\n            return eachDate.date.toDateString() === date.toDateString() && !((_eachDate_slots = eachDate.slots) === null || _eachDate_slots === void 0 ? void 0 : _eachDate_slots.some((slot)=>slot.available === true));\n        }) ? \"unavailable-event-date\" : null;\n        return availableDate || unavailableDate;\n    }\n    function timeSlicer(start, end, duration) {\n        const startTime = new Date(start);\n        const endTime = new Date(end);\n        const slotStartTime = [];\n        const endPoint = new Date(endTime === null || endTime === void 0 ? void 0 : endTime.setMinutes((endTime === null || endTime === void 0 ? void 0 : endTime.getMinutes()) - duration));\n        let currentTime = startTime;\n        while(currentTime <= endPoint){\n            let newDate = new Date(currentTime);\n            const slotEnd = new Date(newDate === null || newDate === void 0 ? void 0 : newDate.setMinutes((newDate === null || newDate === void 0 ? void 0 : newDate.getMinutes()) + duration));\n            slotStartTime.push({\n                slotStart: currentTime,\n                slotEnd: slotEnd,\n                duration: duration,\n                available: true\n            });\n            currentTime = new Date(slotEnd);\n        }\n        return slotStartTime;\n    }\n    function handleDayClick(value) {\n        const newVisibleEvents = unitedEvents.filter((event)=>event.date.toDateString() === value.toDateString());\n        setVisibleEvents(newVisibleEvents);\n    }\n    function handleEventCardClick(data, avatar) {\n        setPopupData({\n            ...data,\n            avatar: avatar\n        });\n        setPopupOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                locale: \"en-US\",\n                showNeighboringMonth: false,\n                defaultView: \"month\",\n                minDetail: \"month\",\n                maxDetail: \"month\",\n                next2Label: null,\n                prev2Label: null,\n                tileClassName: getClassName,\n                onClickDay: handleDayClick\n            }, void 0, false, {\n                fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/pages/components/MainBoard.jsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            visibleEvents.map((eachEvent)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EventCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    data: eachEvent,\n                    avatar: _public_assets_7294793_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                    onClick: handleEventCardClick\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)(), false, {\n                    fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/pages/components/MainBoard.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 46\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isOpen: popupIsOpen,\n                data: popupData,\n                setOpen: setPopupOpen,\n                alterEvents: setUnitedEvents\n            }, void 0, false, {\n                fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/pages/components/MainBoard.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/veronika/Desktop/Web Dev/CampusTalk/client/pages/components/MainBoard.jsx\",\n        lineNumber: 65,\n        columnNumber: 12\n    }, this);\n}\n_s(MainBoard, \"Xn1DnAAd8xOWKlEwedyyovFYeNg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = MainBoard;\nvar _c;\n$RefreshReg$(_c, \"MainBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U1MsZUFBZ0JDLEtBQUs7UUFDMUIsTUFBTUMsbUJBQW1CeEMsYUFBYXlDLE1BQU0sQ0FBRUMsQ0FBQUEsUUFBU0EsTUFBTTFCLElBQUksQ0FBQ0ssWUFBWSxPQUFPa0IsTUFBTWxCLFlBQVk7UUFDdkdaLGlCQUFrQitCO0lBQ3RCO0lBRUEsU0FBU0cscUJBQXNCQyxJQUFJLEVBQUVsRCxNQUFNO1FBQ3ZDb0IsYUFBYTtZQUFDLEdBQUc4QixJQUFJO1lBQUVsRCxRQUFRQTtRQUFNO1FBQ3JDa0IsYUFBYztJQUNsQjtJQUVBLHFCQUFPLDhEQUFDaUM7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUN6RCxzREFBUUE7Z0JBQ0wwRCxRQUFPO2dCQUNQQyxzQkFBc0I7Z0JBQ3RCQyxhQUFZO2dCQUNaQyxXQUFVO2dCQUNWQyxXQUFVO2dCQUNWQyxZQUFZO2dCQUNaQyxZQUFZO2dCQUNaQyxlQUFldkM7Z0JBQ2Z3QyxZQUFZakI7Ozs7OztZQUVmNUIsY0FBY04sR0FBRyxDQUFFb0QsQ0FBQUEsMEJBQWEsOERBQUNsRSxrREFBU0E7b0JBRW5Cc0QsTUFBTVk7b0JBQ045RCxRQUFRQSxzRUFBVTtvQkFDbEJnRSxTQUFTZjttQkFISmxELHdDQUFNQTs7Ozs7MEJBTW5DLDhEQUFDRiw4Q0FBS0E7Z0JBQUNvRSxRQUFRaEQ7Z0JBQWFpQyxNQUFNL0I7Z0JBQVcrQyxTQUFTaEQ7Z0JBQWNpRCxhQUFhNUQ7Ozs7Ozs7Ozs7OztBQUU3RjtHQTdFd0JOOztRQUNOUixvREFBV0E7OztLQURMUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL01haW5Cb2FyZC5qc3g/ZDhkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcInJlYWN0LWNhbGVuZGFyXCJcbmltcG9ydCBFdmVudENhcmQgZnJvbSBcIi4vRXZlbnRDYXJkXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5pbXBvcnQge3Y0IGFzIHV1aWR2NH0gZnJvbSBcInV1aWRcIlxuaW1wb3J0IGF2YXRhciBmcm9tIFwiQC9wdWJsaWMvYXNzZXRzLzcyOTQ3OTMuanBnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkJvYXJkICgpIHtcbiAgICBjb25zdCBzbG90cyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNsb3RzKVxuICAgIGNvbnNvbGUubG9nKHNsb3RzKVxuICAgIGNvbnN0IFt1bml0ZWRFdmVudHMsIHNldFVuaXRlZEV2ZW50c10gPSB1c2VTdGF0ZSAoW10pXG5cbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcbiAgICAgICAgc2V0VW5pdGVkRXZlbnRzIChwcmV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0FyciA9IHByZXYubWFwKCBlYWNoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLmVhY2gsIHNsb3RzOiBbLi4udGltZVNsaWNlcihlYWNoPy5zdGFydCwgZWFjaD8uZW5kLCAzMCksIC4uLnRpbWVTbGljZXIoZWFjaD8uc3RhcnQsIGVhY2g/LmVuZCwgNjApXX0gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG5ld0FyclxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlRXZlbnRzKFtdKVxuICAgIH0sIFt1bml0ZWRFdmVudHNdKVxuXG4gICAgY29uc3QgW3Zpc2libGVFdmVudHMsIHNldFZpc2libGVFdmVudHNdID0gdXNlU3RhdGUgKFtdKVxuICAgIGNvbnN0IFtwb3B1cElzT3Blbiwgc2V0UG9wdXBPcGVuXSA9IHVzZVN0YXRlIChmYWxzZSlcbiAgICBjb25zdCBbcG9wdXBEYXRhLCBzZXRQb3B1cERhdGFdID0gdXNlU3RhdGUgKClcblxuICAgIGZ1bmN0aW9uIGdldENsYXNzTmFtZSAoe2RhdGUsIHZpZXd9KSB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZURhdGUgPSB1bml0ZWRFdmVudHMuc29tZSggZWFjaERhdGUgPT4gZWFjaERhdGUuZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSAmJiBlYWNoRGF0ZS5zbG90cz8uc29tZSggc2xvdCA9PiBzbG90LmF2YWlsYWJsZSA9PT0gdHJ1ZSkgKVxuICAgICAgICAgICAgPyBcImF2YWlsYWJsZS1ldmVudC1kYXRlXCJcbiAgICAgICAgICAgIDogbnVsbCAgICAgXG4gICAgICAgIGNvbnN0IHVuYXZhaWxhYmxlRGF0ZSA9IHVuaXRlZEV2ZW50cy5zb21lKCBlYWNoRGF0ZSA9PiBlYWNoRGF0ZS5kYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpICYmICFlYWNoRGF0ZS5zbG90cz8uc29tZSggc2xvdCA9PiBzbG90LmF2YWlsYWJsZSA9PT0gdHJ1ZSkgKVxuICAgICAgICAgICAgPyBcInVuYXZhaWxhYmxlLWV2ZW50LWRhdGVcIlxuICAgICAgICAgICAgOiBudWxsICAgXG4gICAgICAgIHJldHVybiBhdmFpbGFibGVEYXRlIHx8IHVuYXZhaWxhYmxlRGF0ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpbWVTbGljZXIgKHN0YXJ0LCBlbmQsIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHN0YXJ0KVxuICAgICAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUgKGVuZClcbiAgICAgICAgY29uc3Qgc2xvdFN0YXJ0VGltZSA9IFtdXG4gICAgICAgIGNvbnN0IGVuZFBvaW50ID0gbmV3IERhdGUoIGVuZFRpbWU/LnNldE1pbnV0ZXMoIGVuZFRpbWU/LmdldE1pbnV0ZXMoKSAtIGR1cmF0aW9uICkgKVxuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBzdGFydFRpbWVcbiAgICAgICAgd2hpbGUgKCBjdXJyZW50VGltZSA8PSBlbmRQb2ludCApIHtcbiAgICAgICAgICAgIGxldCBuZXdEYXRlID0gbmV3IERhdGUgKGN1cnJlbnRUaW1lKVxuICAgICAgICAgICAgY29uc3Qgc2xvdEVuZCA9IG5ldyBEYXRlICggbmV3RGF0ZT8uc2V0TWludXRlcyggbmV3RGF0ZT8uZ2V0TWludXRlcygpICsgZHVyYXRpb24gKSApXG4gICAgICAgICAgICBzbG90U3RhcnRUaW1lLnB1c2goe3Nsb3RTdGFydDogY3VycmVudFRpbWUsIHNsb3RFbmQ6IHNsb3RFbmQsIGR1cmF0aW9uOiBkdXJhdGlvbiwgYXZhaWxhYmxlOiB0cnVlfSlcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoIHNsb3RFbmQgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzbG90U3RhcnRUaW1lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF5Q2xpY2sgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5ld1Zpc2libGVFdmVudHMgPSB1bml0ZWRFdmVudHMuZmlsdGVyKCBldmVudCA9PiBldmVudC5kYXRlLnRvRGF0ZVN0cmluZygpID09PSB2YWx1ZS50b0RhdGVTdHJpbmcoKSApXG4gICAgICAgIHNldFZpc2libGVFdmVudHMgKG5ld1Zpc2libGVFdmVudHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXZlbnRDYXJkQ2xpY2sgKGRhdGEsIGF2YXRhcikge1xuICAgICAgICBzZXRQb3B1cERhdGEoey4uLmRhdGEsIGF2YXRhcjogYXZhdGFyfSlcbiAgICAgICAgc2V0UG9wdXBPcGVuICh0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm9hcmRcIj5cbiAgICAgICAgICAgIDxDYWxlbmRhciBcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgc2hvd05laWdoYm9yaW5nTW9udGg9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWaWV3PVwibW9udGhcIlxuICAgICAgICAgICAgICAgIG1pbkRldGFpbD1cIm1vbnRoXCJcbiAgICAgICAgICAgICAgICBtYXhEZXRhaWw9XCJtb250aFwiXG4gICAgICAgICAgICAgICAgbmV4dDJMYWJlbD17bnVsbH1cbiAgICAgICAgICAgICAgICBwcmV2MkxhYmVsPXtudWxsfVxuICAgICAgICAgICAgICAgIHRpbGVDbGFzc05hbWU9e2dldENsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrRGF5PXtoYW5kbGVEYXlDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dmlzaWJsZUV2ZW50cy5tYXAoIGVhY2hFdmVudCA9PiA8RXZlbnRDYXJkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtlYWNoRXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXthdmF0YXIuc3JjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXZlbnRDYXJkQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFBvcHVwIGlzT3Blbj17cG9wdXBJc09wZW59IGRhdGE9e3BvcHVwRGF0YX0gc2V0T3Blbj17c2V0UG9wdXBPcGVufSBhbHRlckV2ZW50cz17c2V0VW5pdGVkRXZlbnRzfS8+XG4gICAgPC9kaXY+XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkNhbGVuZGFyIiwiRXZlbnRDYXJkIiwiUG9wdXAiLCJ2NCIsInV1aWR2NCIsImF2YXRhciIsIk1haW5Cb2FyZCIsInNsb3RzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwidW5pdGVkRXZlbnRzIiwic2V0VW5pdGVkRXZlbnRzIiwicHJldiIsIm5ld0FyciIsIm1hcCIsImVhY2giLCJ0aW1lU2xpY2VyIiwic3RhcnQiLCJlbmQiLCJzZXRWaXNpYmxlRXZlbnRzIiwidmlzaWJsZUV2ZW50cyIsInBvcHVwSXNPcGVuIiwic2V0UG9wdXBPcGVuIiwicG9wdXBEYXRhIiwic2V0UG9wdXBEYXRhIiwiZ2V0Q2xhc3NOYW1lIiwiZGF0ZSIsInZpZXciLCJhdmFpbGFibGVEYXRlIiwic29tZSIsImVhY2hEYXRlIiwidG9EYXRlU3RyaW5nIiwic2xvdCIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlRGF0ZSIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwiRGF0ZSIsImVuZFRpbWUiLCJzbG90U3RhcnRUaW1lIiwiZW5kUG9pbnQiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImN1cnJlbnRUaW1lIiwibmV3RGF0ZSIsInNsb3RFbmQiLCJwdXNoIiwic2xvdFN0YXJ0IiwiaGFuZGxlRGF5Q2xpY2siLCJ2YWx1ZSIsIm5ld1Zpc2libGVFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImhhbmRsZUV2ZW50Q2FyZENsaWNrIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImxvY2FsZSIsInNob3dOZWlnaGJvcmluZ01vbnRoIiwiZGVmYXVsdFZpZXciLCJtaW5EZXRhaWwiLCJtYXhEZXRhaWwiLCJuZXh0MkxhYmVsIiwicHJldjJMYWJlbCIsInRpbGVDbGFzc05hbWUiLCJvbkNsaWNrRGF5IiwiZWFjaEV2ZW50Iiwic3JjIiwib25DbGljayIsImlzT3BlbiIsInNldE9wZW4iLCJhbHRlckV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/MainBoard.jsx\n"));

/***/ })

});