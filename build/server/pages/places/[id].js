"use strict";
(() => {
var exports = {};
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
// export const getServerSideProps = async (context) => {
//   const queryParam = context.query.id;
//   const res = await fetch(`http://localhost:3009/${queryParam}`);
//   const repo = await res.json();
//   return { props: { repo } };
// };
// This function gets called at build time

async function getStaticPaths() {
    console.log("static paths");
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: "blocking"
    };
}
const getStaticProps = async (context)=>{
    const queryParam = context.query.id;
    const res = await fetch(`http://localhost:3009/${queryParam}`);
    const repo = await res.json();
    return {
        props: {
            repo
        }
    };
};
const Index = ({ repo  })=>{
    console.log("repo: ", repo);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "Index page: ",
            repo
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(610));
module.exports = __webpack_exports__;

})();