parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"7YIr":[function(require,module,exports) {
"use strict";function e(t){if(!(t instanceof Object)||t instanceof Date||t instanceof String)throw"Only Objects or Arrays are supported.";var n=t instanceof Array?[]:{};for(var r in t)(!(t instanceof Object)||t instanceof Array||t.hasOwnProperty(r))&&(!(t[r]instanceof Object)||t[r]instanceof Date||t[r]instanceof String?n[r]=t[r]:n[r]=e(t[r]));return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"bKFF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("../utils/clondeDeep"));function r(t){return t&&t.__esModule?t:{default:t}}function e(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function n(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,r,e){return r&&n(t.prototype,r),e&&n(t,e),t}function a(t,r){return c(t)||u(t,r)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}}function c(t){if(Array.isArray(t))return t}function f(t,r,e){var n=r.default,o=void 0===n?null:n,a=r.key;return Object.prototype.hasOwnProperty.call(t,e||a)?t[e||a]:o}function s(t,r,e){Object.entries(r).forEach(function(r){var n=a(r,2),o=n[0],i=n[1];if(void 0===i.key)throw new Error("Schema prop must contains key prop");if(t[o]=f(e,i),i.type)if(l(i),Array.isArray(i.type))t[o]=t[o].map(function(t){return i.type[0].fromJson(t)});else{var u=i.type.fromJson(t[o]);t[o]=u}})}function y(t,r){var e=t.constructor.schema,n=t._data,o=r._data;Object.entries(e).forEach(function(t){var r=a(t,2),e=r[0],i=r[1];if(n[e]=f(o,i,e),i.type)if(l(i),Array.isArray(i.type)){var u=i.type[0];n[e]=n[e].map(function(t){return u.fromExchanger(t)})}else n[e]=i.type.fromExchanger(n[e])})}function l(t){var r=t.type;if(Array.isArray(r)){if(1!==t.type.length)throw new Error("Array type must contains only one item");if(!(new r[0]instanceof p))throw new Error("Type is not instance of Exchager")}else if(!(new r instanceof p))throw new Error("Type is not instance of Exchager")}var p=function(){function r(t){e(this,r),this._data={},this._initailData=t}return o(r,[{key:"toJSON",value:function(){var t=this,r=this.constructor.schema,e={};return Object.entries(r).forEach(function(r){var n=a(r,2),o=n[0],i=n[1],u=t._data[o];i.type?(l(i),Array.isArray(i.type)?e[i.key]=u.map(function(t){return t.toJSON()}):e[i.key]=u.toJSON()):e[i.key]=u}),e}}],[{key:"fromJson",value:function(r){var e=this.schema,n=(0,t.default)(r),o=new this(n);return s(o._data,e,n),o}},{key:"fromExchanger",value:function(t){var r=new this(t);return y(r,t),r}},{key:"schema",get:function(){return{}}}]),r}(),h=p;exports.default=h;
},{"../utils/clondeDeep":"7YIr"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=r(require("./exchanger"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./exchanger":"bKFF"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map