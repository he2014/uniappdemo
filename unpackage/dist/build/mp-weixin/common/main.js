(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1a5c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch"),setTimeout((function(){e.setTabBarBadge({index:1,text:"31"}),e.showTabBarRedDot({index:3})}),1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n}).call(this,n("543d")["default"])},"46ba":function(e,t,n){"use strict";(function(e){n("c08b");var t=c(n("66fd")),o=c(n("f80c")),r=c(n("00ce"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=r.default,o.default.mpType="app";var i=new t.default(a({store:r.default},o.default));e(i).$mount()}).call(this,n("543d")["createApp"])},"9b4b":function(e,t,n){"use strict";var o=n("e0bf"),r=n.n(o);r.a},de87:function(e,t,n){"use strict";n.r(t);var o=n("1a5c"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},e0bf:function(e,t,n){},f80c:function(e,t,n){"use strict";n.r(t);var o=n("de87");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("9b4b");var c,u,a,f,i=n("f0c5"),l=Object(i["a"])(o["default"],c,u,!1,null,null,null,!1,a,f);t["default"]=l.exports}},[["46ba","common/runtime","common/vendor"]]]);