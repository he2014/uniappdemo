(function(a){function e(e){for(var n,b,i=e[0],u=e[1],s=e[2],c=0,g=[];c<i.length;c++)b=i[c],Object.prototype.hasOwnProperty.call(r,b)&&r[b]&&g.push(r[b][0]),r[b]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(a[n]=u[n]);l&&l(e);while(g.length)g.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],n=!0,b=1;b<t.length;b++){var u=t[b];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var n={},r={index:0},o=[];function b(a){return i.p+"static/js/"+({"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video","pages-tabbar-tabbar-1-tabbar-1":"pages-tabbar-tabbar-1-tabbar-1","pages-tabbar-tabbar-2-tabbar-2":"pages-tabbar-tabbar-2-tabbar-2","pages-tabbar-tabbar-3-tabbar-3":"pages-tabbar-tabbar-3-tabbar-3","pages-tabbar-tabbar-4-tabbar-4":"pages-tabbar-tabbar-4-tabbar-4","pages-tabbar-tabbar-5-tabbar-5":"pages-tabbar-tabbar-5-tabbar-5"}[a]||a)+"."+{"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"7428957b","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"55d68a86","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"0342c1ae","pages-tabbar-tabbar-1-tabbar-1":"3aa2db1e","pages-tabbar-tabbar-2-tabbar-2":"ce082012","pages-tabbar-tabbar-3-tabbar-3":"e2491ca4","pages-tabbar-tabbar-4-tabbar-4":"34da0d96","pages-tabbar-tabbar-5-tabbar-5":"e44435eb"}[a]+".js"}function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(a){var e=[],t=r[a];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise((function(e,n){t=r[a]=[e,n]}));e.push(t[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=b(a);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(c);var t=r[a];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+a+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,t[1](s)}r[a]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=a,i.c=n,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/",i.oe=function(a){throw console.error(a),a};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("46ba")},"0059":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={state:{timestamp:1608820295}};e.default=n},"00ce":function(a,e,t){"use strict";var n=t("4ea4");t("13d5"),t("d3b7"),t("ac1f"),t("466d"),t("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(t("e143")),o=n(t("2f62"));r.default.use(o.default);var b=t("5f45"),i=b.keys().reduce((function(a,e){var t=e.match(/\.\/(\w+)\.js/)[1],n=b(e).default;return console.log(n),a[t]=n,a}),{});console.log(i);var u=new o.default.Store({modules:i}),s=u;e.default=s},"0928":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log("App Launch"),setTimeout((function(){uni.setTabBarBadge({index:1,text:"31"}),uni.showTabBarRedDot({index:3})}),1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=n},"0c72":function(a,e,t){var n=t("a39e");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var r=t("4f06").default;r("58d2c235",n,!0,{sourceMap:!1,shadowMode:!1})},"46ba":function(a,e,t){"use strict";var n=t("4ea4"),r=n(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("c08b"),t("1c31");var o=n(t("e143")),b=n(t("f80c")),i=n(t("00ce"));o.default.config.productionTip=!1,o.default.prototype.$store=i.default,b.default.mpType="app";var u=new o.default((0,r.default)({store:i.default},b.default));u.$mount()},"49e1":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={state:{userInfo:{}},getters:{getUserInfo:function(a){return a.userInfo}},mutations:{userCommits:function(a,e){a.userInfo=e}},actions:{responseUserInfo:function(a,e){var t=a.commit;t("userCommits",e)}}};e.default=n},"5f45":function(a,e,t){var n={"./project.js":"0059","./user.js":"49e1"};function r(a){var e=o(a);return t(e)}function o(a){if(!t.o(n,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return n[a]}r.keys=function(){return Object.keys(n)},r.resolve=o,a.exports=r,r.id="5f45"},"9b4b":function(a,e,t){"use strict";var n=t("0c72"),r=t.n(n);r.a},a39e:function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */",""]),a.exports=e},c08b:function(a,e,t){"use strict";(function(a){var e=t("4ea4"),n=e(t("e143"));a["____49AC11E____"]=!0,delete a["____49AC11E____"],a.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{borderStyle:"black",backgroundColor:"#333",color:"#8F8F94",selectedColor:"#f33e54",list:[{pagePath:"pages/tabbar/tabbar-1/tabbar-1",iconPath:"static/img/tabbar/home.png",selectedIconPath:"static/img/tabbar/homeactive.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-2/tabbar-2",iconPath:"static/img/tabbar/guanzhu.png",selectedIconPath:"static/img/tabbar/guanzhuactive.png",text:"关注",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-4/tabbar-4",iconPath:"static/img/tabbar/news.png",selectedIconPath:"static/img/tabbar/newsactive.png",text:"消息",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-5/tabbar-5",iconPath:"static/img/tabbar/me.png",selectedIconPath:"static/img/tabbar/meactive.png",text:"我",redDot:!1,badge:""}]}},a.__uniConfig.compilerVersion="2.9.8",a.__uniConfig.router={mode:"hash",base:"/"},a.__uniConfig.publicPath="/",a.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},a.__uniConfig.debug=!1,a.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},a.__uniConfig.sdkConfigs={},a.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",a.__uniConfig.nvue={"flex-direction":"column"},a.__uniConfig.__webpack_chunk_load__=t.e,n.default.component("pages-tabbar-tabbar-1-tabbar-1",(function(a){var e={component:t.e("pages-tabbar-tabbar-1-tabbar-1").then(function(){return a(t("d3f6"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-tabbar-2-tabbar-2",(function(a){var e={component:t.e("pages-tabbar-tabbar-2-tabbar-2").then(function(){return a(t("b8f8"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-tabbar-3-tabbar-3",(function(a){var e={component:t.e("pages-tabbar-tabbar-3-tabbar-3").then(function(){return a(t("2f09"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-tabbar-4-tabbar-4",(function(a){var e={component:t.e("pages-tabbar-tabbar-4-tabbar-4").then(function(){return a(t("33a3"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-tabbar-5-tabbar-5",(function(a){var e={component:t.e("pages-tabbar-tabbar-5-tabbar-5").then(function(){return a(t("7692"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",(function(a){var e={component:t.e("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release").then(function(){return a(t("3903"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",(function(a){var e={component:t.e("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video").then(function(){return a(t("ea78"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),n.default.component("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",(function(a){var e={component:t.e("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa").then(function(){return a(t("8f4a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),a.__uniRoutes=[{path:"/",alias:"/pages/tabbar/tabbar-1/tabbar-1",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"uni-app"})},[a("pages-tabbar-tabbar-1-tabbar-1",{slot:"page"})])}},meta:{id:1,name:"pages-tabbar-tabbar-1-tabbar-1",isNVue:!1,pagePath:"pages/tabbar/tabbar-1/tabbar-1",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/tabbar/tabbar-2/tabbar-2",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-2-tabbar-2",{slot:"page"})])}},meta:{id:2,name:"pages-tabbar-tabbar-2-tabbar-2",isNVue:!1,pagePath:"pages/tabbar/tabbar-2/tabbar-2",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/tabbar/tabbar-3/tabbar-3",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-3-tabbar-3",{slot:"page"})])}},meta:{name:"pages-tabbar-tabbar-3-tabbar-3",isNVue:!1,pagePath:"pages/tabbar/tabbar-3/tabbar-3",windowTop:44}},{path:"/pages/tabbar/tabbar-4/tabbar-4",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-4-tabbar-4",{slot:"page"})])}},meta:{id:3,name:"pages-tabbar-tabbar-4-tabbar-4",isNVue:!1,pagePath:"pages/tabbar/tabbar-4/tabbar-4",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/tabbar/tabbar-5/tabbar-5",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-5-tabbar-5",{slot:"page"})])}},meta:{id:4,name:"pages-tabbar-tabbar-5-tabbar-5",isNVue:!1,pagePath:"pages/tabbar/tabbar-5/tabbar-5",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",isNVue:!1,pagePath:"pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",isNVue:!1,pagePath:"pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",isNVue:!1,pagePath:"pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",windowTop:44}},{path:"/preview-image",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],a.UniApp&&new a.UniApp}).call(this,t("c8ba"))},d643:function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}));var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("App",{attrs:{keepAliveInclude:a.keepAliveInclude}})},o=[]},de87:function(a,e,t){"use strict";t.r(e);var n=t("0928"),r=t.n(n);for(var o in n)"default"!==o&&function(a){t.d(e,a,(function(){return n[a]}))}(o);e["default"]=r.a},f80c:function(a,e,t){"use strict";t.r(e);var n=t("d643"),r=t("de87");for(var o in r)"default"!==o&&function(a){t.d(e,a,(function(){return r[a]}))}(o);t("9b4b");var b,i=t("f0c5"),u=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],b);e["default"]=u.exports}});