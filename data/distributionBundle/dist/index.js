if(typeof window==='undefined'||window===null)var window=(typeof globalThis==='undefined'||globalThis===null)?{}:globalThis;import { isFunction as __WEBPACK_EXTERNAL_MODULE_clientnode_isFunction__ } from "clientnode";
import { boolean as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_boolean__, number as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_number__, string as __WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_string__ } from "clientnode/property-types";
import { forwardRef as __WEBPACK_EXTERNAL_MODULE_react_forwardRef__, memo as __WEBPACK_EXTERNAL_MODULE_react_memo__, useImperativeHandle as __WEBPACK_EXTERNAL_MODULE_react_useImperativeHandle__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";
import { CSSTransition as __WEBPACK_EXTERNAL_MODULE_react_transition_group_31188194_CSSTransition__ } from "react-transition-group";
import { jsx as __WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__ } from "react/jsx-runtime";

;// external "clientnode"

;// external "clientnode/property-types"

;// external "react"

;// external "react-transition-group"

;// ./src/style.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style_module = ({"genericAnimate":"generic-animate","genericAnimateListWrapper":"generic-animate__list-wrapper","genericAnimateWrapper":"generic-animate__wrapper","genericAnimateAppear":"generic-animate-appear","genericAnimateEnter":"generic-animate-enter","genericAnimateExitActive":"generic-animate-exit-active","genericAnimateAppearActive":"generic-animate-appear-active","genericAnimateEnterActive":"generic-animate-enter-active","genericAnimateExit":"generic-animate-exit","genericAnimateExitDone":"generic-animate-exit-done"});
;// external "react/jsx-runtime"

;// ./src/index.tsx
// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericAnimate *//* !
    region header
    [Project page](https://tsickert.com/react-material-input)

    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(r,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function _defineProperty(r,t,o){return(t=_toPropertyKey(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function _toPropertyKey(r){var o=_toPrimitive(r,"string");return"symbol"==_typeof(o)?o:o+""}function _toPrimitive(t,e){if("object"!=_typeof(t)||!t)return t;var r;if("undefined"!=typeof Symbol&&void 0!==(r=t[Symbol.toPrimitive])){var i=r.call(t,e||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)};/*
"namedExport" version of css-loader:

import {
    genericAnimate: genericAnimateClassName,
    genericAnimateListWrapper: genericAnimateListWrapperClassName,
    genericAnimateWrapper: genericAnimateWrapperClassName
} from './style.module.css'
*/// endregion
var CSS_CLASS_NAMES=style_module;/**
 * Generic animation wrapper component.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */var GenericAnimateInner=function GenericAnimateInner(properties,reference){var nodeReference=__WEBPACK_EXTERNAL_MODULE_react_useRef__(null);__WEBPACK_EXTERNAL_MODULE_react_useImperativeHandle__(reference,function(){return nodeReference.current},[nodeReference.current]);var content=__WEBPACK_EXTERNAL_MODULE_clientnode_isFunction__(properties.children)?properties.children("entering"):properties.children;return/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__(__WEBPACK_EXTERNAL_MODULE_react_transition_group_31188194_CSSTransition__,_objectSpread(_objectSpread({appear:true,classNames:CSS_CLASS_NAMES.genericAnimate,in:true,nodeRef:nodeReference,timeout:200,unmountOnExit:true},properties),{},{children:typeof content==="string"?/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("span",{className:CSS_CLASS_NAMES.genericAnimateWrapper,ref:nodeReference,children:content}):Array.isArray(content)?/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("div",{className:CSS_CLASS_NAMES.genericAnimateListWrapper,ref:nodeReference,children:content}):/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_jsx_runtime_00f484c1_jsx__("span",{className:CSS_CLASS_NAMES.genericAnimateWrapper,ref:nodeReference,children:content})}))};/**
 * Generic animation wrapper component.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @param properties - Component given properties object.
 * @param reference - Reference object to forward internal component.
 * @returns React elements.
 */var GenericAnimate=/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_memo__(/*#__PURE__*/__WEBPACK_EXTERNAL_MODULE_react_forwardRef__(GenericAnimateInner));// region static properties
/// region web-component hints
GenericAnimate.wrapped=GenericAnimateInner;GenericAnimate.webComponentAdapterWrapped="react";/// endregion
GenericAnimate.propTypes={appear:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_boolean__,classNames:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_string__,in:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_boolean__,timeout:__WEBPACK_EXTERNAL_MODULE_clientnode_property_types_4789ebe2_number__};// endregion
/* harmony default export */ var src = (GenericAnimate);
export { GenericAnimate, GenericAnimateInner, src as default };
