"use strict";if("undefined"!=typeof module&&null!==module&&"undefined"!==eval("typeof require")&&null!==eval("require")&&"main"in eval("require")&&"undefined"!==eval("typeof require.main")&&null!==eval("require.main")){var ORIGINAL_MAIN_MODULE=module;module!==eval("require.main")&&"paths"in module&&"paths"in eval("require.main")&&"undefined"!=typeof __dirname&&null!==__dirname&&(module.paths=eval("require.main.paths").concat(module.paths.filter((function(path){return eval("require.main.paths").includes(path)}))))}if(null==window)var window="undefined"==typeof global||null===global?{}:global;!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("@babel/runtime/helpers/extends"),require("clientnode/property-types"),require("react"),require("react-transition-group"),require("react/jsx-runtime"));else if("function"==typeof define&&define.amd)define(["@babel/runtime/helpers/extends","clientnode/property-types","react","react-transition-group","react/jsx-runtime"],r);else{var n="object"==typeof exports?r(require("@babel/runtime/helpers/extends"),require("clientnode/property-types"),require("react"),require("react-transition-group"),require("react/jsx-runtime")):r(e["@babel/runtime/helpers/extends"],e["clientnode/property-types"],e.react,e["react-transition-group"],e["react/jsx-runtime"]);for(var t in n)("object"==typeof exports?exports:e)[t]=n[t]}}(this,(function(e,r,n,t,i){return function(){var a=[,,function(r){r.exports=e},function(e){e.exports=r},function(e){e.exports=n},function(e){e.exports=t},function(e){e.exports=i}],o={};function u(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return a[e](n,n.exports,u),n.exports}u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,{a:r}),r},u.d=function(e,r){for(var n in r)u.o(r,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){u.r(c),u.d(c,{GenericAnimate:function(){return l},GenericAnimateInner:function(){return p},default:function(){return s}});var e=u(2),r=u.n(e),n=u(3),t=u(4),i=u(5),a=u(6),o={"generic-animate":"generic-animate","generic-animate__list-wrapper":"generic-animate__list-wrapper","generic-animate__wrapper":"generic-animate__wrapper","generic-animate-appear":"generic-animate-appear","generic-animate-enter":"generic-animate-enter","generic-animate-exit-active":"generic-animate-exit-active","generic-animate-appear-active":"generic-animate-appear-active","generic-animate-enter-active":"generic-animate-enter-active","generic-animate-exit":"generic-animate-exit","generic-animate-exit-done":"generic-animate-exit-done"},p=function(e,n){return(0,a.jsx)(i.CSSTransition,r()({appear:!0,classNames:o["generic-animate"],in:!0,timeout:200,unmountOnExit:!0},e,{children:"string"==typeof e.children?(0,a.jsx)("span",{className:o["generic-animate__wrapper"],ref:n,children:e.children}):Array.isArray(e.children)?(0,a.jsx)("div",{className:o["generic-animate__list-wrapper"],ref:n,children:e.children}):e.children}))},l=(0,t.memo)((0,t.forwardRef)(p));l.wrapped=p,l.webComponentAdapterWrapped="react",l.propTypes={appear:n.boolean,classNames:n.string,in:n.boolean,timeout:n.number};var s=l}(),c}()}));