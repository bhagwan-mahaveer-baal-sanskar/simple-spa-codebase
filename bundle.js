!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:v(f,n),references:1}),o.push(u)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(e,n){var t,o,r;if(n.singleton){var i=m++;t=h||(h=l(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=l(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n){e.exports='<app-header></app-header> <div class="container component1"> Hi Welcome to this simple boilerplate to kickstart a lightweight SPA <br/> <br/> click on component 2 in header above and checkout the components/component2 <br/> to know how js is interacting with html <br/> refer to the Readme.md to for more understanding of this codebase </div> '},function(e,n){e.exports='<app-header></app-header> <div class="container component2"> <p> You are on this page from <b id=timer></b> <b>Secs</b> </p> <button onclick=callbacks.component1.notifyForPageLoad()> click her to invoke the js callbacks function </button> </div> '},function(e,n){e.exports="<div class=header> <button onclick=callbacks.header.navigateToComponent1()> component1 </button> <button onclick=callbacks.header.navigateToComponent2()> component2 </button> </div> "},function(e,n,t){var o=t(0),r=t(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(1)(!1)).push([e.i,".component1{text-align:center}\n",""]),e.exports=n},function(e,n,t){var o=t(0),r=t(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(1)(!1)).push([e.i,"",""]),e.exports=n},function(e,n,t){var o=t(0),r=t(10);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(1)(!1)).push([e.i,".app .container{display:flex;flex-direction:column;align-items:center;padding-top:100px;background-color:grey;height:100vh;font-size:30px}\n",""]),e.exports=n},function(e,n,t){var o=t(0),r=t(12);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(1)(!1)).push([e.i,".header{display:flex;justify-content:center;background-color:purple;height:30px;background-color:black}.header *{flex:0 0 30%}.header button{border:1px solid white;border-top:none;border-bottom:none;background-color:transparent;color:white;font-size:20px}\n",""]),e.exports=n},function(e,n,t){"use strict";function o(e){try{if(!e)throw"error: routes param is mandatory";this.constructor(e),this.init()}catch(e){console.error(e)}}function r(e,n,t){try{if(!e||!n)throw"error: name and htmlName params are mandatories";this.constructor(e,n,t)}catch(e){console.error(e)}}t.r(n),o.prototype={routes:void 0,rootElem:void 0,constructor:function(e){this.routes=e,this.rootElem=document.getElementById("app")},init:function(){var e=this.routes;!function(e,n){window.addEventListener("hashchange",(function(t){e.hasChanged(e,n)}))}(this,e),this.hasChanged(this,e)},hasChanged:function(e,n){if(window.location.hash.length>0)for(var t=0,o=n.length;t<o;t++){(r=n[t]).isActiveRoute(window.location.hash.substr(1))&&e.goToRoute(r)}else for(t=0,o=n.length;t<o;t++){var r;(r=n[t]).default&&e.goToRoute(r)}},goToRoute:function(e){var n;n=this,window.unloadComponent&&(window.unloadComponent(),delete window.unloadComponent),n.rootElem.innerHTML=e.component(e),window.onComponentLoad&&(window.onComponentLoad(),delete window.onComponentLoad)}},r.prototype={name:void 0,htmlName:void 0,default:void 0,constructor:function(e,n,t){this.name=e,this.component=n,this.default=t},isActiveRoute:function(e){return e.replace("#","")===this.name}};t(5);var i=t(2),a=t.n(i);function c(){return window.onComponentLoad=()=>{console.log("welcome, your component2 loaded")},a.a}t(7);var s=t(3),l=t.n(s);let u,d=0;function f(){return window.callbacks.component1={notifyForPageLoad:()=>{alert("allert from component 2 js file")}},window.onComponentLoad=()=>{console.log("welcome, your component loaded"),u=setInterval(p,1e3)},window.unloadComponent=()=>{d=0,clearInterval(u)},l.a}function p(){d++,document.getElementById("timer").innerText=d}t(9);var h=t(4),m=t.n(h);t(11);class v extends HTMLElement{constructor(e){super(),this.innerHTML=m.a,window.callbacks.header={navigateToComponent1:b,navigateToComponent2:g}}}function b(){location.href="#component1"}function g(){location.href="#component2"}customElements.define("app-header",v),window.callbacks={},new o([new r("component1",c,!0),new r("component2",f)])}]);