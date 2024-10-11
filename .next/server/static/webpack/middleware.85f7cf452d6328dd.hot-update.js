"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n    }\n}));\nconst config = {\n    matcher: [\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBZ0I7Q0FBZTtBQUV6RSxpRUFBZUQscUVBQWVBLENBQUMsQ0FBQ0csTUFBTUM7SUFDcEMsSUFBSSxDQUFDRixjQUFjRSxVQUFVO1FBQzNCRCxPQUFPRSxPQUFPO0lBQ2hCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7UUFFUDtRQUNBLDRCQUE0QjtRQUM1QjtLQUNEO0FBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlLCBjcmVhdGVSb3V0ZU1hdGNoZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcidcclxuXHJcbmNvbnN0IGlzUHVibGljUm91dGUgPSBjcmVhdGVSb3V0ZU1hdGNoZXIoWycvc2lnbi1pbiguKiknLCAnL3NpZ24tdXAoLiopJ10pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVya01pZGRsZXdhcmUoKGF1dGgsIHJlcXVlc3QpID0+IHtcclxuICBpZiAoIWlzUHVibGljUm91dGUocmVxdWVzdCkpIHtcclxuICAgIGF1dGgoKS5wcm90ZWN0KClcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIG1hdGNoZXI6IFtcclxuICBcclxuICAgICcvKCg/IV9uZXh0fFteP10qXFxcXC4oPzpodG1sP3xjc3N8anMoPyFvbil8anBlP2d8d2VicHxwbmd8Z2lmfHN2Z3x0dGZ8d29mZjI/fGljb3xjc3Z8ZG9jeD98eGxzeD98emlwfHdlYm1hbmlmZXN0KSkuKiknLFxyXG4gICAgLy8gQWx3YXlzIHJ1biBmb3IgQVBJIHJvdXRlc1xyXG4gICAgJy8oYXBpfHRycGMpKC4qKScsXHJcbiAgXSxcclxufSJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1B1YmxpY1JvdXRlIiwiYXV0aCIsInJlcXVlc3QiLCJwcm90ZWN0IiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});