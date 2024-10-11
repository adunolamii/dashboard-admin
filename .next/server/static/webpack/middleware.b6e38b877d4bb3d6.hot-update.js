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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/sign-in(.*)\",\n    \"/sign-up(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)((auth, request)=>{\n    if (!isPublicRoute(request)) {\n        auth().protect();\n        publicRoutes: \"\";\n    }\n}));\nconst config = {\n    matcher: [\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBFO0FBRTFFLE1BQU1FLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQUM7SUFBZ0I7Q0FBZTtBQUV6RSxpRUFBZUQscUVBQWVBLENBQUMsQ0FBQ0csTUFBTUM7SUFDcEMsSUFBSSxDQUFDRixjQUFjRSxVQUFVO1FBQzNCRCxPQUFPRSxPQUFPO1FBQ2pCQyxjQUFhO0lBQ1o7QUFDRixFQUFFO0FBRUssTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUVQO1FBRUE7S0FDRDtBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZXJrTWlkZGxld2FyZSwgY3JlYXRlUm91dGVNYXRjaGVyIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInXHJcblxyXG5jb25zdCBpc1B1YmxpY1JvdXRlID0gY3JlYXRlUm91dGVNYXRjaGVyKFsnL3NpZ24taW4oLiopJywgJy9zaWduLXVwKC4qKSddKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKChhdXRoLCByZXF1ZXN0KSA9PiB7XHJcbiAgaWYgKCFpc1B1YmxpY1JvdXRlKHJlcXVlc3QpKSB7XHJcbiAgICBhdXRoKCkucHJvdGVjdCgpXHJcbiBwdWJsaWNSb3V0ZXM6XCJcIlxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1xyXG4gIFxyXG4gICAgJy8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKScsXHJcbiAgICBcclxuICAgICcvKGFwaXx0cnBjKSguKiknLFxyXG4gIF0sXHJcbn0iXSwibmFtZXMiOlsiY2xlcmtNaWRkbGV3YXJlIiwiY3JlYXRlUm91dGVNYXRjaGVyIiwiaXNQdWJsaWNSb3V0ZSIsImF1dGgiLCJyZXF1ZXN0IiwicHJvdGVjdCIsInB1YmxpY1JvdXRlcyIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});