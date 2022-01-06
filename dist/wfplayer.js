/*!
 * WFPlayer.js v2.1.2
 * Github: https://github.com/zhw2590582/WFPlayer#readme
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).WFPlayer=t()}(this,function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var v=e(t(function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0})),a=e(t(function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0})),i=e(t(function(e){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0})),n=t(function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0}),o=e(n),c=t(function(r){function n(e,t){return r.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r.exports.default=r.exports,r.exports.__esModule=!0,n(e,t)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0});e(c);var s=e(t(function(e){e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0})),u=t(function(t){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(e){return typeof e}:t.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.default=t.exports,t.exports.__esModule=!0,r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0});e(u);var l=e(t(function(e){var r=u.default;e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0})),f=t(function(t){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t.exports.default=t.exports,t.exports.__esModule=!0,r(e)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0}),d=e(f),p=t(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return e.constructor?e.constructor.name:null}function s(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return u(e,t,r),l(e,t,r),function(a,i,c){var e=f(i),t=f(a);if("object"===e){if("object"!==t)throw new Error("[Type Error]: '".concat(c.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(e){var t=a[e],r=i[e],n=c.slice();n.push(e),u(t,r,n),l(t,r,n),s(t,r,n)})}if("array"===e){if("array"!==t)throw new Error("[Type Error]: '".concat(c.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(e,t){var r=a[t],n=i[t]||i[0],o=c.slice();o.push(t),u(r,n,o),l(r,n,o),s(r,n,o)})}}(e,t,r),e}function u(e,t,r){if("string"===f(t)){var n=f(e);if(!(-1<(t="?"===t[0]?t.slice(1)+"|undefined":t).indexOf("|")?t.split("|").map(function(e){return e.toLowerCase().trim()}).filter(Boolean).some(function(e){return n===e}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(r.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function l(e,t,r){if("function"===f(t)){t=t(e,f(e),r);if(!0!==t){e=f(t);throw"string"===e?new Error(t):"error"===e?t:new Error("[Validator Error]: The scheme for '".concat(r.join("."),"' validator require return true, but got '").concat(t,"'"))}}}var a,f;e.exports=(a=Object.prototype.toString,s.kindOf=f=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t,r=n(e);if("boolean"===r)return"boolean";if("string"===r)return"string";if("number"===r)return"number";if("symbol"===r)return"symbol";if("function"===r)return"GeneratorFunction"===o(e)?"generatorfunction":"function";if(t=e,Array.isArray?Array.isArray(t):t instanceof Array)return"array";if(e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))return"buffer";if(function(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return 1}catch(e){if(-1!==e.message.indexOf("callee"))return 1}}(e))return"arguments";if(e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate)return"date";if(e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit)return"error";if(e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global)return"regexp";switch(o(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if("function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next)return"generator";switch(r=a.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return r.slice(8,-1).toLowerCase().replace(/\s/g,"")},s)}),h=function(){function e(){a(this,e)}return i(e,[{key:"on",value:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this}},{key:"once",value:function(n,o,a){var i=this;function c(){i.off(n,c);for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];o.apply(a,t)}return c._=o,this.on(n,c,a)}},{key:"emit",value:function(e){for(var t=((this.e||(this.e={}))[e]||[]).slice(),r=arguments.length,n=new Array(1<r?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var a=0;a<t.length;a+=1)t[a].fn.apply(t[a].ctx,n);return this}},{key:"off",value:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var a=0,i=n.length;a<i;a+=1)n[a].fn!==t&&n[a].fn._!==t&&o.push(n[a]);return o.length?r[e]=o:delete r[e],this}}]),e}(),y=function(){function e(){a(this,e),this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return i(e,[{key:"proxy",value:function(t,e,r){var n=this,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(Array.isArray(e))return e.map(function(e){return n.proxy(t,e,r,o)});t.addEventListener(e,r,o);function a(){return t.removeEventListener(e,r,o)}return this.destroyEvents.push(a),a}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(e){return e()})}}]),e}(),g=t(function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.default=e.exports,e.exports.__esModule=!0});e(g);var m=t(function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0});e(m);var b=t(function(n){function o(e,t,r){return m()?n.exports=o=Reflect.construct:n.exports=o=function(e,t,r){var n=[null];n.push.apply(n,t);n=new(Function.bind.apply(e,n));return r&&c(n,r.prototype),n},n.exports.default=n.exports,n.exports.__esModule=!0,o.apply(null,arguments)}n.exports=o,n.exports.default=n.exports,n.exports.__esModule=!0});function w(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=d(r);return t=n?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),l(this,t)}}e(b);var r=function(e){s(r,e);var t=w(r);function r(e){return a(this,r),(e=t.call(this,e)).name="WFPlayerError",e}return r}(e(t(function(t){function n(e){var r="function"==typeof Map?new Map:void 0;return t.exports=n=function(e){if(null===e||!g(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return b(e,arguments,f(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),c(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0}))(Error));function x(e,t){if(!e)throw new r(t);return e}function O(o,a,i){var c=Date.now();return function(){var e=Date.now();if(a<=e-c){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];o.apply(i,r),c=Date.now()}}}var j=function(){function t(e){a(this,t),this.wf=e,this.canvas=null;e=e.options.refreshDelay;this.update=O(this.init,e,this),this.init()}return i(t,[{key:"init",value:function(){var e=this.wf.options,t=e.container,r=e.pixelRatio,e=t.clientWidth*r,r=t.clientHeight*r;this.canvas?(this.canvas.width!==e&&(this.canvas.width=e),this.canvas.height!==r&&(this.canvas.height=r)):(x(this.wf.constructor.instances.every(function(e){return e.options.container!==t}),"Cannot mount multiple instances on the same dom element, please destroy the previous instance first."),t.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=r,this.canvas.style.width="100%",this.canvas.style.height="100%",t.appendChild(this.canvas))}},{key:"exportImage",value:function(){var e=document.createElement("a");e.style.display="none",e.href=this.canvas.toDataURL("image/png"),e.download="".concat(Date.now(),".png"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}},{key:"destroy",value:function(){this.wf.options.container.innerHTML=""}}]),t}(),k=t(function(e){e.exports=function(e,t){if(null==e)return{};for(var r,n={},o=Object.keys(e),a=0;a<o.length;a++)r=o[a],0<=t.indexOf(r)||(n[r]=e[r]);return n},e.exports.default=e.exports,e.exports.__esModule=!0});e(k);var R=e(t(function(e){e.exports=function(e,t){if(null==e)return{};var r,n=k(e,t);if(Object.getOwnPropertySymbols)for(var o=Object.getOwnPropertySymbols(e),a=0;a<o.length;a++)r=o[a],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r]);return n},e.exports.default=e.exports,e.exports.__esModule=!0}));function M(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}var T=t(function(e,t){var h,j,k,y,d=void 0===self.document,p=null,g=null,R=null,T=44100,S=new Float32Array;function m(e){var t=e.height,r=e.currentTime,n=e.rulerColor,o=e.pixelRatio,a=e.padding,i=e.rulerAtTop,c=e.scrollable;R.font="".concat(11*o,"px Arial"),R.fillStyle=n;for(var s,u,l=-1,f=0;f<10+h;f+=1){var d,p=c?j*f-(r-parseInt(r,10))*j*10:j*f;(f-a)%10==0?(l+=1,R.fillRect(p,i?0:t-15*o,o,15*o),(d=Math.floor(k+l))%y==0&&0<=d&&R.fillText((s=d,d=u=void 0,u=Math.floor(s/3600),d=Math.floor((s-3600*u)/60),[u,d,Math.floor(s-3600*u-60*d)].map(function(e){return e<10?"0".concat(e):String(e)}).join(":")),p-11*o*2+o,i?30*o:t-30*o+11)):(f-a)%5==0&&R.fillRect(p,i?0:t-7.5*o,o,7.5*o)}}function b(e){for(var t=e.width,r=e.height,n=e.currentTime,o=e.progress,a=e.waveColor,i=e.progressColor,c=e.duration,s=e.padding,u=e.waveScale,l=e.scrollable,f=r/2,d=t-j*s*2,p=Math.floor(k*T),h=Math.floor((e=(k+c)*T,r=p,c=1/0,Math.max(Math.min(e,Math.max(r,c)),Math.min(r,c)))),y=Math.floor((h-p)/d),g=l?t/2:s*j+(n-k)*j*10,m=0,b=0,v=1,w=-1,x=p;x<h;x+=1){m+=1;var O=S[x]||0;O<v?v=O:w<O&&(w=O),y<=m&&b<d&&(O=j*s+(b+=1),R.fillStyle=o&&O<=g?i:a,R.fillRect(O,(1+v*u)*f,1,Math.max(1,(w-v)*f*u)),m=0,w=-(v=1))}}self.onmessage=function(e){var t,r,n,o,a,i,c,s,u=e.data,l=u.type,f=u.data;"INIT"===l&&(g=d?new OffscreenCanvas(f.width,f.height):(p=f.wf,f.canvas),R=g.getContext("2d")),"DECODE"===l&&(T=f.sampleRate,S=f.channelData),"UPDATE"===l&&(c=f.width,t=f.height,s=f.currentTime,i=f.cursor,n=f.grid,o=f.ruler,a=f.wave,e=f.duration,u=f.padding,l=f.scrollable,g.width!==c&&(g.width=c),g.height!==t&&(g.height=t),j=c/(h=10*e+2*u),k=l?s-e/2:Math.floor(s/e)*e,y=function(e){e=e.pixelRatio,R.font="".concat(11*e,"px Arial");var r=R.measureText("99:99:99").width;return function e(t){return 1<j*t/(1.5*r)?Math.floor(t/10):e(t+10)}(10)}(f),u=(c=f).width,l=c.height,s=c.backgroundColor,e=c.paddingColor,c=c.padding,R.clearRect(0,0,u,l),R.fillStyle=s,R.fillRect(0,0,u,l),R.fillStyle=e,R.fillRect(0,0,c*j,l),R.fillRect(u-c*j,0,c*j,l),n&&function(e){var t=e.width,r=e.height,n=e.currentTime,o=e.gridColor,a=e.pixelRatio,i=e.scrollable;R.fillStyle=o;for(var c=0;c<10+h;c+=y){var s=i?j*c-(n-parseInt(n,10))*j*10:j*c;R.fillRect(s,0,a,r)}for(var u=0;u<r/j;u+=y)R.fillRect(0,j*u,t,a)}(f),o&&m(f),a&&b(f),i&&(r=(c=f).height,l=c.width,n=c.currentTime,o=c.cursorColor,a=c.pixelRatio,i=c.padding,c=c.scrollable,R.fillStyle=o,R.fillRect(c?l/2:i*j+(n-k)*j*10,0,a,r)),r=S.byteLength,f=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach(function(e){v(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({gridNum:h,gridGap:j,beginTime:k,density:y,sampleRate:T,byteLength:r},f),d?self.postMessage({type:"UPFATE",data:{config:f,imageBitmap:g.transferToImageBitmap()}}):p.emit("update",f))},d||(t.postMessage=function(e){self.onmessage({data:e})})});function S(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(e){v(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}T.postMessage;var E=function(){function o(r){var n=this;a(this,o),this.wf=r,this.canvas=r.template.canvas;var e=r.options,t=e.refreshDelay,e=e.useWorker;this.update=O(this.update,t,this),e&&window.OffscreenCanvas&&window.Worker?(this.worker=new Worker(URL.createObjectURL(new Blob(['"use strict";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var isWorker=self.document===void 0,wf=null,canvas=null,ctx=null,gridNum=0,gridGap=0,beginTime=0,density=1,sampleRate=44100,channelData=new Float32Array;function secondToTime(a){var b=Math.floor(a/3600),c=Math.floor((a-3600*b)/60),d=Math.floor(a-3600*b-60*c);return[b,c,d].map(function add0(a){return 10>a?"0".concat(a):a+""}).join(":")}function clamp(c,d,a){return Math.max(Math.min(c,Math.max(d,a)),Math.min(d,a))}function getDensity(a){var b=a.pixelRatio;ctx.font="".concat(11*b,"px Arial");var c=ctx.measureText("99:99:99").width;return function a(b){var d=gridGap*b/(1.5*c);return 1<d?Math.floor(b/10):a(b+10)}(10)}function drawBackground(a){var b=a.width,c=a.height,d=a.backgroundColor,e=a.paddingColor,f=a.padding;ctx.clearRect(0,0,b,c),ctx.fillStyle=d,ctx.fillRect(0,0,b,c),ctx.fillStyle=e,ctx.fillRect(0,0,f*gridGap,c),ctx.fillRect(b-f*gridGap,0,f*gridGap,c)}function drawGrid(a){var b=a.width,c=a.height,d=a.currentTime,e=a.gridColor,f=a.pixelRatio,g=a.scrollable;ctx.fillStyle=e;for(var h,i=0;i<gridNum+10;i+=density)h=g?gridGap*i-10*((d-parseInt(d,10))*gridGap):gridGap*i,ctx.fillRect(h,0,f,c);for(var j=0;j<c/gridGap;j+=density)ctx.fillRect(0,gridGap*j,b,f)}function drawRuler(a){var b=a.height,c=a.currentTime,d=a.rulerColor,e=a.pixelRatio,f=a.padding,g=a.rulerAtTop,h=a.scrollable,i=11,j=15,k=30;ctx.font="".concat(i*e,"px Arial"),ctx.fillStyle=d;for(var l,m=-1,n=0;n<gridNum+10;n+=1)if(l=h?gridGap*n-10*((c-parseInt(c,10))*gridGap):gridGap*n,0==(n-f)%10){m+=1,ctx.fillRect(l,g?0:b-j*e,e,j*e);var o=Math.floor(beginTime+m);0==o%density&&0<=o&&ctx.fillText(secondToTime(o),l-2*(i*e)+e,g?k*e:b-k*e+i)}else 0==(n-f)%5&&ctx.fillRect(l,g?0:b-j/2*e,e,j/2*e)}function drawWave(a){for(var b=a.width,c=a.height,d=a.currentTime,e=a.progress,f=a.waveColor,g=a.progressColor,h=a.duration,j=a.padding,k=a.waveScale,l=a.scrollable,m=c/2,n=b-2*(gridGap*j),o=Math.floor(beginTime*sampleRate),p=Math.floor(clamp((beginTime+h)*sampleRate,o,1/0)),q=Math.floor((p-o)/n),r=l?b/2:j*gridGap+10*((d-beginTime)*gridGap),s=0,t=0,u=1,v=-1,w=o;w<p;w+=1){s+=1;var x=channelData[w]||0;if(x<u?u=x:x>v&&(v=x),s>=q&&t<n){t+=1;var y=gridGap*j+t;ctx.fillStyle=e&&r>=y?g:f,ctx.fillRect(y,(1+u*k)*m,1,Math.max(1,(v-u)*m*k)),s=0,u=1,v=-1}}}function drawCursor(a){var b=a.height,c=a.width,d=a.currentTime,e=a.cursorColor,f=a.pixelRatio,g=a.padding,h=a.scrollable;ctx.fillStyle=e;var i=h?c/2:g*gridGap+10*((d-beginTime)*gridGap);ctx.fillRect(i,0,f,b)}self.onmessage=function(a){var b=a.data,c=b.type,d=b.data;if("INIT"===c&&(isWorker?canvas=new OffscreenCanvas(d.width,d.height):(wf=d.wf,canvas=d.canvas),ctx=canvas.getContext("2d")),"DECODE"===c&&(sampleRate=d.sampleRate,channelData=d.channelData),"UPDATE"===c){var e=d.width,f=d.height,g=d.currentTime,h=d.cursor,i=d.grid,j=d.ruler,k=d.wave,l=d.duration,m=d.padding,n=d.scrollable;canvas.width!==e&&(canvas.width=e),canvas.height!==f&&(canvas.height=f),gridNum=10*l+2*m,gridGap=e/gridNum,beginTime=n?g-l/2:Math.floor(g/l)*l,density=getDensity(d),drawBackground(d),i&&drawGrid(d),j&&drawRuler(d),k&&drawWave(d),h&&drawCursor(d);var o=channelData,p=o.byteLength,q=_objectSpread({gridNum:gridNum,gridGap:gridGap,beginTime:beginTime,density:density,sampleRate:sampleRate,byteLength:p},d);isWorker?self.postMessage({type:"UPFATE",data:{config:q,imageBitmap:canvas.transferToImageBitmap()}}):wf.emit("update",q)}},"undefined"==typeof exports||isWorker||(exports.postMessage=function(a){self.onmessage({data:a})});']))),this.ctx=this.canvas.getContext("bitmaprenderer"),this.wf.events.proxy(this.worker,"message",function(e){var t=e.data,e=t.type,t=t.data;"UPFATE"!==e||r.isDestroy||(n.wf.emit("update",t.config),n.ctx.transferFromImageBitmap(t.imageBitmap))}),this.worker.postMessage({type:"INIT",data:{width:this.canvas.width,height:this.canvas.height}})):(this.worker=T,this.worker.postMessage({type:"INIT",data:{canvas:this.canvas,wf:this.wf}})),r.on("decode",function(e){var t=e.channelData,e=e.sampleRate;n.worker.postMessage({type:"DECODE",data:{channelData:t,sampleRate:e}}),n.update()})}return i(o,[{key:"update",value:function(){var e=this.wf,t=e.currentTime,r=e.options;r.container,r.mediaElement;var n=R(r,["container","mediaElement"]),e=this.canvas,r=e.width,e=e.height;this.worker.postMessage({type:"UPDATE",data:D(D({},n),{},{currentTime:t,width:r,height:e})})}},{key:"destroy",value:function(){this.worker.terminate&&this.worker.terminate()}}]),o}(),C=function(){function t(e){a(this,t),this.wf=e,this.audioCtx=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,2,44100),this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array}return i(t,[{key:"decodeAudioData",value:function(e){var n=this;return new Promise(function(t,r){n.audioCtx.decodeAudioData(e.buffer,function(e){n.decodeSuccess(e),t(e)},function(e){n.wf.emit("decode:error"),r(e)})})}},{key:"decodeSuccess",value:function(e){this.audiobuffer=e,this.channelData=e.getChannelData(this.wf.options.channel),this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}},{key:"changeChannel",value:function(e){this.channelData=this.audiobuffer.getChannelData(e)||new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}},{key:"destroy",value:function(){this.audiobuffer=this.audioCtx.createBuffer(1,2,44100),this.channelData=new Float32Array,this.wf.emit("decode",{channelData:this.channelData,sampleRate:this.audiobuffer.sampleRate,duration:this.audiobuffer.duration}),this.wf.update()}}]),t}(),_=function(){function t(e){a(this,t),this.wf=e,this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader=null}return i(t,[{key:"load",value:function(e){var t=this;return this.destroy(),fetch(e).then(function(e){return e.body&&"function"==typeof e.body.getReader?(t.fileSize=Number(e.headers.get("content-length")),t.reader=e.body.getReader(),function r(){var n=this;return this.reader.read().then(function(e){var t=e.done,e=e.value;return t?null:(n.loadSize+=e.byteLength,n.data=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0].constructor;return t.reduce(function(e,t){var r=new n((0|e.byteLength)+(0|t.byteLength));return r.set(e,0),r.set(t,0|e.byteLength),r},new n)}(n.data,e),n.wf.decoder.decodeAudioData(n.data.slice()),n.wf.emit("load",{fileSize:n.fileSize,loadSize:n.loadSize,data:n.data}),r.call(n))})}.call(t)):e.arrayBuffer()}).then(function(e){return e&&e.byteLength&&(t.data=new Uint8Array(e),t.fileSize=t.data.byteLength,t.loadSize=t.data.byteLength,t.wf.decoder.decodeAudioData(t.data),t.wf.emit("load",{fileSize:t.fileSize,loadSize:t.loadSize,data:t.data})),e})}},{key:"destroy",value:function(){this.fileSize=0,this.loadSize=0,this.data=new Uint8Array,this.reader&&(this.reader.cancel(),this.reader=null)}}]),t}(),P=function(){function r(e){var t=this;a(this,r),this.wf=e,this.playTimer=null,this.isInit=!1,this.init=function(){t.isInit||(t.isInit=!0,t.resizeInit(),t.playInit())}}return i(r,[{key:"resizeInit",value:function(){var e=this,t=this.wf.events.proxy,r=O(function(){e.wf.update(),e.wf.emit("resize")},200,this);t(window,["resize","orientationchange"],function(){r()})}},{key:"playInit",value:function(){var e=this,t=this.wf,r=t.events.proxy,t=t.options.mediaElement;t&&(r(t,["seeked","seeking","canplay"],function(){e.wf.update()}),function e(){var t=this;this.playTimer=requestAnimationFrame(function(){t.wf.playing&&t.wf.update(),t.wf.isDestroy||e.call(t)})}.call(this))}},{key:"destroy",value:function(){cancelAnimationFrame(this.playTimer)}}]),r}();function A(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach(function(e){v(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function G(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=d(r);return t=n?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),l(this,t)}}var L=0,B=[];return function(){s(n,h);var r=G(n);function n(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return a(this,n),(e=r.call(this))._currentTime=0,e.isDestroy=!1,e.options={},e.setOptions(t),e.events=new y(o(e)),e.template=new j(o(e)),e.decoder=new C(o(e)),e.drawer=new E(o(e)),e.controller=new P(o(e)),e.loader=new _(o(e)),e.update(),L+=1,e.id=L,B.push(o(e)),e}return i(n,[{key:"currentTime",get:function(){return this.options.mediaElement?this.options.mediaElement.currentTime:this._currentTime}},{key:"duration",get:function(){return this.options.mediaElement?this.options.mediaElement.duration:1/0}},{key:"playing",get:function(){var e=this.options.mediaElement;return!!e&&!!(0<e.currentTime&&!e.paused&&!e.ended&&2<e.readyState)}},{key:"setOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return x("object"===p.kindOf(e),"setOptions expects to receive object as a parameter."),"string"==typeof e.container&&(e.container=document.querySelector(e.container)),"string"==typeof e.mediaElement&&(e.mediaElement=document.querySelector(e.mediaElement)),this.options=p(I(I(I({},n.default),this.options),e),n.scheme),this.update(),this}},{key:"load",value:function(e){return this.emit("load",e),e&&"function"==typeof e.getChannelData?this.decoder.decodeSuccess(e):e&&e.buffer?this.decoder.decodeAudioData(e):(x("string"==typeof(e=e instanceof HTMLVideoElement||e instanceof HTMLAudioElement?(this.options.mediaElement=e).currentSrc:e)&&e.trim(),"The load target is not a string. If you are loading a mediaElement, make sure the mediaElement.src is not empty."),this.loader.load(e)),this.controller.init(),this}},{key:"seek",value:function(e){var t,r;return x("number"==typeof e,"seek expects to receive number as a parameter."),this._currentTime=(t=e,r=0,e=this.duration,Math.max(Math.min(t,Math.max(r,e)),Math.min(r,e))),this.options.mediaElement&&this.options.mediaElement.currentTime!==this._currentTime&&(this.options.mediaElement.currentTime=this._currentTime),this.update(),this}},{key:"changeChannel",value:function(e){return this.decoder.changeChannel(e),this.setOptions({channel:e}),this.update(),this}},{key:"exportImage",value:function(){return this.template.exportImage(),this}},{key:"update",value:function(){return this.template&&this.drawer&&(this.template.update(),this.drawer.update()),this}},{key:"reset",value:function(){return this.decoder.destroy(),this}},{key:"destroy",value:function(){return this.isDestroy=!0,this.events.destroy(),this.template.destroy(),this.controller.destroy(),this.decoder.destroy(),this.loader.destroy(),this.drawer.destroy(),B.splice(B.indexOf(this),1),this}}],[{key:"instances",get:function(){return B}},{key:"version",get:function(){return"2.1.2"}},{key:"env",get:function(){return'"production"'}},{key:"default",get:function(){return{container:"#waveform",mediaElement:null,useWorker:!0,wave:!0,waveColor:"rgba(255, 255, 255, 0.1)",backgroundColor:"rgb(28, 32, 34)",paddingColor:"rgba(255, 255, 255, 0.05)",cursor:!0,cursorColor:"#ff0000",progress:!0,progressColor:"rgba(255, 255, 255, 0.5)",grid:!0,gridColor:"rgba(255, 255, 255, 0.05)",ruler:!0,rulerColor:"rgba(255, 255, 255, 0.5)",rulerAtTop:!0,scrollable:!1,refreshDelay:50,channel:0,duration:10,padding:5,waveScale:.8,pixelRatio:Math.ceil(window.devicePixelRatio)}}},{key:"scheme",get:function(){function e(r,n,o,a){return function(e,t){x("number"===t,"".concat(r," expects to receive number as a parameter, but got ").concat(t,"."));t=a?"an integer":"a";return x(n<=e&&e<=o&&(!a||Number.isInteger(e)),"'options.".concat(r,"' expect ").concat(t," number that >= ").concat(n," and <= ").concat(o,", but got ").concat(e,".")),!0}}return{container:"htmlelement|htmldivelement",mediaElement:"null|htmlvideoelement|htmlaudioelement",useWorker:"boolean",wave:"boolean",waveColor:"string",backgroundColor:"string",paddingColor:"string",cursor:"boolean",cursorColor:"string",progress:"boolean",progressColor:"string",grid:"boolean",gridColor:"string",ruler:"boolean",rulerColor:"string",rulerAtTop:"boolean",scrollable:"boolean",refreshDelay:e("refreshDelay",16,1e3,!0),channel:e("channel",0,5,!0),duration:e("duration",1,100,!0),padding:e("padding",1,100,!0),waveScale:e("waveScale",.1,10,!1),pixelRatio:e("pixelRatio",1,10,!1)}}}]),n}()});
