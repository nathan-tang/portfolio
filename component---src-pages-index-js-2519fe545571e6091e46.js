(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3vzJ":function(t,e,n){},RXBc:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("T58H"),a=n.n(i),s=n("vrFN");n("3vzJ"),n("rqhn");e.default=function(){return o.a.createElement("div",{className:"Homepage"},o.a.createElement(s.a,{title:"Homepage"}),o.a.createElement("div",{className:"nav-button-div"},o.a.createElement("i",{className:"fa fa-bars nav-button"})),o.a.createElement("h3",{className:"homepage-h3 align-center"}," Hey, I'm Nathan! "),o.a.createElement("div",{className:"homepage-typewriter align-center"},o.a.createElement(a.a,{options:{strings:["Under construction again!","I like building websites uwu","How are you doing today?","Uh.. nice weather huh?","I'm trying out this new GatsbyJS thing.","Pretty cool so far I guess..","Oh- wait check this out,","✨🐀🤠👉🗿"],delay:30,autoStart:!0,loop:!0}})),o.a.createElement("div",{className:"homepage-arrow-div align-center"},o.a.createElement("i",{className:"fas fa-angle-down",id:"homepage-arrow"})),o.a.createElement("footer",{className:"homepage-footer"},o.a.createElement("h5",{className:"homepage-h5"}," Made with ❤ in Irvine, CA ")))}},T58H:function(t,e,n){var r;n("/SS/"),n("pIFo"),n("f3/d"),n("bWfx"),n("eM6i"),n("KKXr"),n("XfO3"),n("HEwt"),n("a1Th"),n("h7Nl"),n("LK8F"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Oyvg"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),"undefined"!=typeof self&&self,t.exports=(r=n("q1tI"),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=99)}([function(t,e,n){var r=n(19),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){(function(e){for(var r=n(11),o="undefined"==typeof window?e:window,i=["moz","webkit"],a="AnimationFrame",s=o["request"+a],u=o["cancel"+a]||o["cancelRequest"+a],c=0;!s&&c<i.length;c++)s=o[i[c]+"Request"+a],u=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!s||!u){var p=0,f=0,l=[];s=function(t){if(0===l.length){var e=r(),n=Math.max(0,1e3/60-(e-p));p=n+e,setTimeout((function(){var t=l.slice(0);l.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(p)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return l.push({handle:++f,callback:t,cancelled:!1}),f},u=function(t){for(var e=0;e<l.length;e++)l[e].handle===t&&(l[e].cancelled=!0)}}t.exports=function(t){return s.call(o,t)},t.exports.cancel=function(){u.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=s,t.cancelAnimationFrame=u}}).call(this,n(4))},function(t,e,n){var r=n(45),o=n(50);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var r=n(1),o=n.n(r),i=function(t){return new RegExp(/<[a-z][\s\S]*>/i).test(t)},a=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes},s=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",l="PAUSE_FOR",v="CALL_FUNCTION",h="ADD_HTML_TAG_ELEMENT",d="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",b="CHANGE_CURSOR",m="PASTE_STRING",g="HTML_TAG";function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(){function t(e,n){var _=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null}),E(this,"setupWrapperElement",(function(){_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor)})),E(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),E(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),E(this,"stop",(function(){return _.state.eventLoop&&(Object(r.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),E(this,"pauseFor",(function(t){return _.addEventToQueue(l,{ms:t}),_})),E(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(1500),_):(_.options.strings.forEach((function(t){_.typeString(t).pauseFor(1500).deleteAll(_.options.deleteSpeed)})),_)})),E(this,"typeString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i(t))return _.typeOutHTMLString(t,e);if(t){var n=_.options||{},r=n.stringSplitter,o="function"==typeof r?r(t):t.split("");_.typeCharacters(o,e)}return _})),E(this,"pasteString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return i(t)?_.typeOutHTMLString(t,e,!0):(t&&_.addEventToQueue(m,{character:t,node:e}),_)})),E(this,"typeOutHTMLString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=a(t);if(r.length>0)for(var o=0;o<r.length;o++){var i=r[o],s=i.innerHTML;i&&3!==i.nodeType?(i.innerHTML="",_.addEventToQueue(h,{node:i,parentNode:e}),n?_.pasteString(s,i):_.typeString(s,i)):i.textContent&&(n?_.pasteString(i.textContent,e):_.typeString(i.textContent,e))}return _})),E(this,"deleteAll",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(p,{speed:t}),_})),E(this,"changeDeleteSpeed",(function(t){if(!t)throw new Error("Must provide new delete speed");return _.addEventToQueue(d,{speed:t}),_})),E(this,"changeDelay",(function(t){if(!t)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:t}),_})),E(this,"changeCursor",(function(t){if(!t)throw new Error("Must provide new cursor");return _.addEventToQueue(b,{cursor:t}),_})),E(this,"deleteChars",(function(t){if(!t)throw new Error("Must provide amount of characters to delete");for(var e=0;e<t;e++)_.addEventToQueue(c);return _})),E(this,"callFunction",(function(t,e){if(!t||"function"!=typeof t)throw new Error("Callbak must be a function");return _.addEventToQueue(v,{cb:t,thisArg:e}),_})),E(this,"typeCharacters",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(t){_.addEventToQueue(u,{character:t,node:e})})),_})),E(this,"removeCharacters",(function(t){if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(){_.addEventToQueue(c)})),_})),E(this,"addEventToQueue",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(t,e,n,"eventQueue")})),E(this,"addReverseCalledEvent",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=_.options.loop;return r?_.addEventToStateProperty(t,e,n,"reverseCalledEvents"):_})),E(this,"addEventToStateProperty",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:t,eventArgs:e||{}};return _.state[r]=n?[o].concat(j(_.state[r])):[].concat(j(_.state[r]),[o]),_})),E(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var t=Date.now(),e=t-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=j(_.state.calledEvents),_.state.calledEvents=[],_.options=w({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(t<_.state.pauseUntil)return;_.state.pauseUntil=null}var n,r=j(_.state.eventQueue),i=r.shift();if(!(e<=(n=i.eventName===f||i.eventName===c?"natural"===_.options.deleteSpeed?s(40,80):_.options.deleteSpeed:"natural"===_.options.delay?s(120,160):_.options.delay))){var a=i.eventName,x=i.eventArgs;switch(_.logInDevMode({currentEvent:i,state:_.state,delay:n}),a){case m:case u:var E=x.character,O=x.node,T=document.createTextNode(E);O?O.appendChild(T):_.state.elements.wrapper.appendChild(T),_.state.visibleNodes=[].concat(j(_.state.visibleNodes),[{type:"TEXT_NODE",node:T}]);break;case c:r.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case l:var A=i.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(A);break;case v:var S=i.eventArgs,P=S.cb,N=S.thisArg;P.call(N,{elements:_.state.elements});break;case h:var C=i.eventArgs,k=C.node,L=C.parentNode;L?L.appendChild(k):_.state.elements.wrapper.appendChild(k),_.state.visibleNodes=[].concat(j(_.state.visibleNodes),[{type:g,node:k,parentNode:L||_.state.elements.wrapper}]);break;case p:var M=_.state.visibleNodes,D=x.speed,F=[];D&&F.push({eventName:d,eventArgs:{speed:D,temp:!0}});for(var R=0,I=M.length;R<I;R++)F.push({eventName:f,eventArgs:{removingCharacterNode:!1}});D&&F.push({eventName:d,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case f:var z=i.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var H=_.state.visibleNodes.pop(),Q=H.type,U=H.node;U.parentNode.removeChild(U),Q===g&&z&&r.unshift({eventName:f,eventArgs:{}})}break;case d:_.options.deleteSpeed=i.eventArgs.speed;break;case y:_.options.delay=i.eventArgs.delay;break;case b:_.options.cursor=i.eventArgs.cursor,_.state.elements.cursor.innerHTML=i.eventArgs.cursor}_.options.loop&&(i.eventName===f||i.eventArgs&&i.eventArgs.temp||(_.state.calledEvents=[].concat(j(_.state.calledEvents),[i]))),_.state.eventQueue=r,_.state.lastFrameTime=t}}})),!e)throw new Error("No container element was provided");if("string"==typeof e){var x=document.querySelector(e);if(!x)throw new Error("Could not find container element");this.state.elements.container=x}else this.state.elements.container=e;n&&(this.options=w({},this.options,{},n)),this.state.initialOptions=w({},this.options),this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(function(t){var e=document.createElement("style");e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode&&console.log(t)}}])&&x(e.prototype,n),t}()},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(35),o=n(36),i=n(37),a=n(38),s=n(39);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r=n(17);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},function(t,e,n){var r=n(14),o=n(46),i=n(47),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(2)(Object,"create");t.exports=r},function(t,e,n){var r=n(59);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){(function(e){(function(){var n,r,o,i,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-a)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*e.uptime(),a=i-s):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(12))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],p=!1,f=-1;function l(){p&&u&&(p=!1,u.length?c=u.concat(c):f=-1,c.length&&v())}function v(){if(!p){var t=s(l);p=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,p=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||p||s(v)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){var r=n(2)(n(0),"Map");t.exports=r},function(t,e,n){var r=n(0).Symbol;t.exports=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,n){var r=n(7),o=n(20);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(4))},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(51),o=n(58),i=n(60),a=n(61),s=n(62);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r=n(63),o=n(66),i=n(67);t.exports=function(t,e,n,a,s,u){var c=1&n,p=t.length,f=e.length;if(p!=f&&!(c&&f>p))return!1;var l=u.get(t);if(l&&u.get(e))return l==e;var v=-1,h=!0,d=2&n?new r:void 0;for(u.set(t,e),u.set(e,t);++v<p;){var y=t[v],b=e[v];if(a)var m=c?a(b,y,v,e,t,u):a(y,b,v,t,e,u);if(void 0!==m){if(m)continue;h=!1;break}if(d){if(!o(e,(function(t,e){if(!i(d,e)&&(y===t||s(y,t,n,a,u)))return d.push(e)}))){h=!1;break}}else if(y!==b&&!s(y,b,n,a,u)){h=!1;break}}return u.delete(t),u.delete(e),h}},function(t,e,n){(function(t){var r=n(0),o=n(84),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u}).call(this,n(25)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(86),o=n(87),i=n(88),a=i&&i.isTypedArray,s=a?o(a):r;t.exports=s},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(32);t.exports=function(t,e){return r(t,e)}},function(t,e,n){t.exports=n(30)()},function(t,e,n){"use strict";var r=n(31);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var r=n(33),o=n(10);t.exports=function t(e,n,i,a,s){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,i,a,t,s))}},function(t,e,n){var r=n(34),o=n(23),i=n(68),a=n(72),s=n(94),u=n(15),c=n(24),p=n(26),f="[object Object]",l=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,h,d){var y=u(t),b=u(e),m=y?"[object Array]":s(t),g=b?"[object Array]":s(e),_=(m="[object Arguments]"==m?f:m)==f,w=(g="[object Arguments]"==g?f:g)==f,j=m==g;if(j&&c(t)){if(!c(e))return!1;y=!0,_=!1}if(j&&!_)return d||(d=new r),y||p(t)?o(t,e,n,v,h,d):i(t,e,m,n,v,h,d);if(!(1&n)){var x=_&&l.call(t,"__wrapped__"),E=w&&l.call(e,"__wrapped__");if(x||E){var O=x?t.value():t,T=E?e.value():e;return d||(d=new r),h(O,T,n,v,d)}}return!!j&&(d||(d=new r),a(t,e,n,v,h,d))}},function(t,e,n){var r=n(5),o=n(40),i=n(41),a=n(42),s=n(43),u=n(44);function c(t){var e=this.__data__=new r(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=s,c.prototype.set=u,t.exports=c},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,n){var r=n(6),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},function(t,e,n){var r=n(6);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},function(t,e,n){var r=n(6);t.exports=function(t){return r(this.__data__,t)>-1}},function(t,e,n){var r=n(6);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},function(t,e,n){var r=n(5);t.exports=function(){this.__data__=new r,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,n){var r=n(5),o=n(13),i=n(22);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!o||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new i(a)}return n.set(t,e),this.size=n.size,this}},function(t,e,n){var r=n(18),o=n(48),i=n(20),a=n(21),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,p=u.toString,f=c.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(r(t)?l:s).test(a(t))}},function(t,e,n){var r=n(14),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=a.call(t);return r&&(e?t[s]=n:delete t[s]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r,o=n(49),i=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!i&&i in t}},function(t,e,n){var r=n(0)["__core-js_shared__"];t.exports=r},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,n){var r=n(52),o=n(5),i=n(13);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}},function(t,e,n){var r=n(53),o=n(54),i=n(55),a=n(56),s=n(57);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=a,u.prototype.set=s,t.exports=u},function(t,e,n){var r=n(8);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},function(t,e,n){var r=n(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},function(t,e,n){var r=n(8);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,n){var r=n(9);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).get(t)}},function(t,e,n){var r=n(9);t.exports=function(t){return r(this,t).has(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},function(t,e,n){var r=n(22),o=n(64),i=n(65);function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}a.prototype.add=a.prototype.push=o,a.prototype.has=i,t.exports=a},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,n){var r=n(14),o=n(69),i=n(17),a=n(23),s=n(70),u=n(71),c=r?r.prototype:void 0,p=c?c.valueOf:void 0;t.exports=function(t,e,n,r,c,f,l){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=s;case"[object Set]":var h=1&r;if(v||(v=u),t.size!=e.size&&!h)return!1;var d=l.get(t);if(d)return d==e;r|=2,l.set(t,e);var y=a(v(t),v(e),r,c,f,l);return l.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},function(t,e,n){var r=n(0).Uint8Array;t.exports=r},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},function(t,e,n){var r=n(73),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,i,a,s){var u=1&n,c=r(t),p=c.length;if(p!=r(e).length&&!u)return!1;for(var f=p;f--;){var l=c[f];if(!(u?l in e:o.call(e,l)))return!1}var v=s.get(t);if(v&&s.get(e))return v==e;var h=!0;s.set(t,e),s.set(e,t);for(var d=u;++f<p;){var y=t[l=c[f]],b=e[l];if(i)var m=u?i(b,y,l,e,t,s):i(y,b,l,t,e,s);if(!(void 0===m?y===b||a(y,b,n,i,s):m)){h=!1;break}d||(d="constructor"==l)}if(h&&!d){var g=t.constructor,_=e.constructor;g!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _)&&(h=!1)}return s.delete(t),s.delete(e),h}},function(t,e,n){var r=n(74),o=n(76),i=n(79);t.exports=function(t){return r(t,i,o)}},function(t,e,n){var r=n(75),o=n(15);t.exports=function(t,e,n){var i=e(t);return o(t)?i:r(i,n(t))}},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},function(t,e,n){var r=n(77),o=n(78),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,s=a?function(t){return null==t?[]:(t=Object(t),r(a(t),(function(e){return i.call(t,e)})))}:o;t.exports=s},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}},function(t,e){t.exports=function(){return[]}},function(t,e,n){var r=n(80),o=n(89),i=n(93);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e,n){var r=n(81),o=n(82),i=n(15),a=n(24),s=n(85),u=n(26),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),p=!n&&o(t),f=!n&&!p&&a(t),l=!n&&!p&&!f&&u(t),v=n||p||f||l,h=v?r(t.length,String):[],d=h.length;for(var y in t)!e&&!c.call(t,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,d))||h.push(y);return h}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(83),o=n(10),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},function(t,e,n){var r=n(7),o=n(10);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e){t.exports=function(){return!1}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(7),o=n(27),i=n(10),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(19),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&r.process,s=function(){try{return i&&i.require&&i.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=s}).call(this,n(25)(t))},function(t,e,n){var r=n(90),o=n(91),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(92)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e,n){var r=n(18),o=n(27);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(95),o=n(13),i=n(96),a=n(97),s=n(98),u=n(7),c=n(21),p=c(r),f=c(o),l=c(i),v=c(a),h=c(s),d=u;(r&&"[object DataView]"!=d(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=d(new o)||i&&"[object Promise]"!=d(i.resolve())||a&&"[object Set]"!=d(new a)||s&&"[object WeakMap]"!=d(new s))&&(d=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case p:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case v:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=d},function(t,e,n){var r=n(2)(n(0),"DataView");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Promise");t.exports=r},function(t,e,n){var r=n(2)(n(0),"Set");t.exports=r},function(t,e,n){var r=n(2)(n(0),"WeakMap");t.exports=r},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var r=n(16),o=n.n(r),i=(n(29),n(3)),a=n(28),s=n.n(a);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?v(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function(t){function e(){var t,n;c(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return d(v(n=f(this,(t=l(e)).call.apply(t,[this].concat(o)))),"state",{instance:null}),n}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this,e=new i.default(this.typewriter,this.props.options);this.setState({instance:e},(function(){var n=t.props.onInit;n&&n(e)}))}},{key:"componentDidUpdate",value:function(t){s()(this.props.options,t.options)||this.setState({instance:new i.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{ref:function(e){return t.typewriter=e},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&p(n.prototype,r),e}(r.Component)}]).default)},WLL4:function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},jm62:function(t,e,n){var r=n("XKFU"),o=n("mQtv"),i=n("aCFj"),a=n("EemH"),s=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),u=a.f,c=o(r),p={},f=0;c.length>f;)void 0!==(n=u(r,e=c[f++]))&&s(p,e,n);return p}})},mQtv:function(t,e,n){var r=n("kJMx"),o=n("JiEa"),i=n("y3w9"),a=n("dyZX").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},rqhn:function(t,e,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-2519fe545571e6091e46.js.map