(self.webpackChunknathantang_me=self.webpackChunknathantang_me||[]).push([[678],{8938:function(e,t,n){var r;n(5743),"undefined"!=typeof self&&self,e.exports=(r=n(7294),function(){var e={7403:function(e,t,n){"use strict";n.d(t,{default:function(){return O}});var r=n(4087),o=n.n(r),a=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},i=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},c="TYPE_CHARACTER",u="REMOVE_CHARACTER",l="REMOVE_ALL",p="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",m="CHANGE_DELAY",y="CHANGE_CURSOR",b="PASTE_STRING",g="HTML_TAG";function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var w=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),S(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),S(this,"setupWrapperElement",(function(){w.state.elements.container&&(w.state.elements.wrapper.className=w.options.wrapperClassName,w.state.elements.cursor.className=w.options.cursorClassName,w.state.elements.cursor.innerHTML=w.options.cursor,w.state.elements.container.innerHTML="",w.state.elements.container.appendChild(w.state.elements.wrapper),w.state.elements.container.appendChild(w.state.elements.cursor))})),S(this,"start",(function(){return w.state.eventLoopPaused=!1,w.runEventLoop(),w})),S(this,"pause",(function(){return w.state.eventLoopPaused=!0,w})),S(this,"stop",(function(){return w.state.eventLoop&&((0,r.cancel)(w.state.eventLoop),w.state.eventLoop=null),w})),S(this,"pauseFor",(function(e){return w.addEventToQueue(f,{ms:e}),w})),S(this,"typeOutAllStrings",(function(){return"string"==typeof w.options.strings?(w.typeString(w.options.strings).pauseFor(w.options.pauseFor),w):(w.options.strings.forEach((function(e){w.typeString(e).pauseFor(w.options.pauseFor).deleteAll(w.options.deleteSpeed)})),w)})),S(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(e))return w.typeOutHTMLString(e,t);if(e){var n=(w.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");w.typeCharacters(r,t)}return w})),S(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(e)?w.typeOutHTMLString(e,t,!0):(e&&w.addEventToQueue(b,{character:e,node:t}),w)})),S(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",w.addEventToQueue(v,{node:a,parentNode:t}),n?w.pasteString(s,a):w.typeString(s,a)):a.textContent&&(n?w.pasteString(a.textContent,t):w.typeString(a.textContent,t))}return w})),S(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return w.addEventToQueue(l,{speed:e}),w})),S(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return w.addEventToQueue(h,{speed:e}),w})),S(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return w.addEventToQueue(m,{delay:e}),w})),S(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return w.addEventToQueue(y,{cursor:e}),w})),S(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)w.addEventToQueue(u);return w})),S(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return w.addEventToQueue(d,{cb:e,thisArg:t}),w})),S(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){w.addEventToQueue(c,{character:e,node:t})})),w})),S(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){w.addEventToQueue(u)})),w})),S(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.addEventToStateProperty(e,t,n,"eventQueue")})),S(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return w.options.loop?w.addEventToStateProperty(e,t,n,"reverseCalledEvents"):w})),S(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return w.state[r]=n?[o].concat(_(w.state[r])):[].concat(_(w.state[r]),[o]),w})),S(this,"runEventLoop",(function(){w.state.lastFrameTime||(w.state.lastFrameTime=Date.now());var e=Date.now(),t=e-w.state.lastFrameTime;if(!w.state.eventQueue.length){if(!w.options.loop)return;w.state.eventQueue=_(w.state.calledEvents),w.state.calledEvents=[],w.options=x({},w.state.initialOptions)}if(w.state.eventLoop=o()(w.runEventLoop),!w.state.eventLoopPaused){if(w.state.pauseUntil){if(e<w.state.pauseUntil)return;w.state.pauseUntil=null}var n,r=_(w.state.eventQueue),a=r.shift();if(!(t<=(n=a.eventName===p||a.eventName===u?"natural"===w.options.deleteSpeed?s(40,80):w.options.deleteSpeed:"natural"===w.options.delay?s(120,160):w.options.delay))){var i=a.eventName,E=a.eventArgs;switch(w.logInDevMode({currentEvent:a,state:w.state,delay:n}),i){case b:case c:var j=E.character,S=E.node,O=document.createTextNode(j),A=O;w.options.onCreateTextNode&&"function"==typeof w.options.onCreateTextNode&&(A=w.options.onCreateTextNode(j,O)),A&&(S?S.appendChild(A):w.state.elements.wrapper.appendChild(A)),w.state.visibleNodes=[].concat(_(w.state.visibleNodes),[{type:"TEXT_NODE",character:j,node:A}]);break;case u:r.unshift({eventName:p,eventArgs:{removingCharacterNode:!0}});break;case f:var T=a.eventArgs.ms;w.state.pauseUntil=Date.now()+parseInt(T);break;case d:var k=a.eventArgs,N=k.cb,C=k.thisArg;N.call(C,{elements:w.state.elements});break;case v:var P=a.eventArgs,D=P.node,L=P.parentNode;L?L.appendChild(D):w.state.elements.wrapper.appendChild(D),w.state.visibleNodes=[].concat(_(w.state.visibleNodes),[{type:g,node:D,parentNode:L||w.state.elements.wrapper}]);break;case l:var M=w.state.visibleNodes,R=E.speed,F=[];R&&F.push({eventName:h,eventArgs:{speed:R,temp:!0}});for(var z=0,I=M.length;z<I;z++)F.push({eventName:p,eventArgs:{removingCharacterNode:!1}});R&&F.push({eventName:h,eventArgs:{speed:w.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,F);break;case p:var U=a.eventArgs.removingCharacterNode;if(w.state.visibleNodes.length){var Q=w.state.visibleNodes.pop(),H=Q.type,G=Q.node,W=Q.character;w.options.onRemoveNode&&"function"==typeof w.options.onRemoveNode&&w.options.onRemoveNode({node:G,character:W}),G&&G.parentNode.removeChild(G),H===g&&U&&r.unshift({eventName:p,eventArgs:{}})}break;case h:w.options.deleteSpeed=a.eventArgs.speed;break;case m:w.options.delay=a.eventArgs.delay;break;case y:w.options.cursor=a.eventArgs.cursor,w.state.elements.cursor.innerHTML=a.eventArgs.cursor}w.options.loop&&(a.eventName===p||a.eventArgs&&a.eventArgs.temp||(w.state.calledEvents=[].concat(_(w.state.calledEvents),[a]))),w.state.eventQueue=r,w.state.lastFrameTime=e}}})),t)if("string"==typeof t){var E=document.querySelector(t);if(!E)throw new Error("Could not find container element");this.state.elements.container=E}else this.state.elements.container=t;n&&(this.options=x(x({},this.options),n)),this.state.initialOptions=x({},this.options),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(y,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},1989:function(e,t,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),s=n(1866);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},8407:function(e,t,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),s=n(4705);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),s=n(5265);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},8668:function(e,t,n){var r=n(3369),o=n(619),a=n(2385);function i(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,e.exports=i},6384:function(e,t,n){var r=n(8407),o=n(7465),a=n(3779),i=n(7599),s=n(4758),c=n(4309);function u(e){var t=this.__data__=new r(e);this.size=t.size}u.prototype.clear=o,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},1149:function(e,t,n){var r=n(5639).Uint8Array;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4963:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}},4636:function(e,t,n){var r=n(2545),o=n(5694),a=n(1469),i=n(4144),s=n(5776),c=n(6719),u=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),p=!n&&!l&&i(e),f=!n&&!l&&!p&&c(e),d=n||l||p||f,v=d?r(e.length,String):[],h=v.length;for(var m in e)!t&&!u.call(e,m)||d&&("length"==m||p&&("offset"==m||"parent"==m)||f&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||s(m,h))||v.push(m);return v}},2488:function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},2908:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},8866:function(e,t,n){var r=n(2488),o=n(1469);e.exports=function(e,t,n){var a=t(e);return o(e)?a:r(a,n(e))}},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},9454:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},939:function(e,t,n){var r=n(2492),o=n(7005);e.exports=function e(t,n,a,i,s){return t===n||(null==t||null==n||!o(t)&&!o(n)?t!=t&&n!=n:r(t,n,a,i,e,s))}},2492:function(e,t,n){var r=n(6384),o=n(7114),a=n(8351),i=n(6096),s=n(4160),c=n(1469),u=n(4144),l=n(6719),p="[object Arguments]",f="[object Array]",d="[object Object]",v=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,h,m,y){var b=c(e),g=c(t),w=b?f:s(e),x=g?f:s(t),_=(w=w==p?d:w)==d,E=(x=x==p?d:x)==d,j=w==x;if(j&&u(e)){if(!u(t))return!1;b=!0,_=!1}if(j&&!_)return y||(y=new r),b||l(e)?o(e,t,n,h,m,y):a(e,t,w,n,h,m,y);if(!(1&n)){var S=_&&v.call(e,"__wrapped__"),O=E&&v.call(t,"__wrapped__");if(S||O){var A=S?e.value():e,T=O?t.value():t;return y||(y=new r),m(A,T,n,h,y)}}return!!j&&(y||(y=new r),i(e,t,n,h,m,y))}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,l=c.toString,p=u.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?f:s).test(i(e))}},8749:function(e,t,n){var r=n(4239),o=n(1780),a=n(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},280:function(e,t,n){var r=n(5726),o=n(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},2545:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},1717:function(e){e.exports=function(e){return function(t){return e(t)}}},4757:function(e){e.exports=function(e,t){return e.has(t)}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},7114:function(e,t,n){var r=n(8668),o=n(2908),a=n(4757);e.exports=function(e,t,n,i,s,c){var u=1&n,l=e.length,p=t.length;if(l!=p&&!(u&&p>l))return!1;var f=c.get(e),d=c.get(t);if(f&&d)return f==t&&d==e;var v=-1,h=!0,m=2&n?new r:void 0;for(c.set(e,t),c.set(t,e);++v<l;){var y=e[v],b=t[v];if(i)var g=u?i(b,y,v,t,e,c):i(y,b,v,e,t,c);if(void 0!==g){if(g)continue;h=!1;break}if(m){if(!o(t,(function(e,t){if(!a(m,t)&&(y===e||s(y,e,n,i,c)))return m.push(t)}))){h=!1;break}}else if(y!==b&&!s(y,b,n,i,c)){h=!1;break}}return c.delete(e),c.delete(t),h}},8351:function(e,t,n){var r=n(2705),o=n(1149),a=n(7813),i=n(7114),s=n(8776),c=n(1814),u=r?r.prototype:void 0,l=u?u.valueOf:void 0;e.exports=function(e,t,n,r,u,p,f){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!p(new o(e),new o(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=s;case"[object Set]":var v=1&r;if(d||(d=c),e.size!=t.size&&!v)return!1;var h=f.get(e);if(h)return h==t;r|=2,f.set(e,t);var m=i(d(e),d(t),r,u,p,f);return f.delete(e),m;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},6096:function(e,t,n){var r=n(8234),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,a,i,s){var c=1&n,u=r(e),l=u.length;if(l!=r(t).length&&!c)return!1;for(var p=l;p--;){var f=u[p];if(!(c?f in t:o.call(t,f)))return!1}var d=s.get(e),v=s.get(t);if(d&&v)return d==t&&v==e;var h=!0;s.set(e,t),s.set(t,e);for(var m=c;++p<l;){var y=e[f=u[p]],b=t[f];if(a)var g=c?a(b,y,f,t,e,s):a(y,b,f,e,t,s);if(!(void 0===g?y===b||i(y,b,n,a,s):g)){h=!1;break}m||(m="constructor"==f)}if(h&&!m){var w=e.constructor,x=t.constructor;w==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof x&&x instanceof x||(h=!1)}return s.delete(e),s.delete(t),h}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},8234:function(e,t,n){var r=n(8866),o=n(9551),a=n(3674);e.exports=function(e){return r(e,a,o)}},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},9551:function(e,t,n){var r=n(4963),o=n(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(e){return null==e?[]:(e=Object(e),r(i(e),(function(t){return a.call(e,t)})))}:o;e.exports=s},4160:function(e,t,n){var r=n(8552),o=n(7071),a=n(3818),i=n(8525),s=n(577),c=n(4239),u=n(346),l="[object Map]",p="[object Promise]",f="[object Set]",d="[object WeakMap]",v="[object DataView]",h=u(r),m=u(o),y=u(a),b=u(i),g=u(s),w=c;(r&&w(new r(new ArrayBuffer(1)))!=v||o&&w(new o)!=l||a&&w(a.resolve())!=p||i&&w(new i)!=f||s&&w(new s)!=d)&&(w=function(e){var t=c(e),n="[object Object]"==t?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case h:return v;case m:return l;case y:return p;case b:return f;case g:return d}return t}),e.exports=w},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5776:function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():o.call(t,n,1),--this.size,0))}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},4705:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},4785:function(e,t,n){var r=n(1989),o=n(8407),a=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},8776:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},2385:function(e){e.exports=function(e){return this.__data__.has(e)}},1814:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}},7465:function(e,t,n){var r=n(8407);e.exports=function(){this.__data__=new r,this.size=0}},3779:function(e){e.exports=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}},7599:function(e){e.exports=function(e){return this.__data__.get(e)}},4758:function(e){e.exports=function(e){return this.__data__.has(e)}},4309:function(e,t,n){var r=n(8407),o=n(7071),a=n(3369);e.exports=function(e,t){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(e,t),this.size=n.size,this}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},5694:function(e,t,n){var r=n(9454),o=n(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),o=n(1780);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),o=n(5062),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;e.exports=c},8446:function(e,t,n){var r=n(939);e.exports=function(e,t){return r(e,t)}},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,n){var r=n(8749),o=n(1717),a=n(1167),i=a&&a.isTypedArray,s=i?o(i):r;e.exports=s},3674:function(e,t,n){var r=n(4636),o=n(280),a=n(8612);e.exports=function(e){return a(e)?r(e):o(e)}},479:function(e){e.exports=function(){return[]}},5062:function(e){e.exports=function(){return!1}},75:function(e){(function(){var t,n,r,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:function(e,t,n){for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],c=o["cancel"+i]||o["cancelRequest"+i],u=0;!s&&u<a.length;u++)s=o[a[u]+"Request"+i],c=o[a[u]+"Cancel"+i]||o[a[u]+"CancelRequest"+i];if(!s||!c){var l=0,p=0,f=[];s=function(e){if(0===f.length){var t=r(),n=Math.max(0,16.666666666666668-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}},8156:function(e){"use strict";e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var o={};return function(){"use strict";n.d(o,{default:function(){return m}});var e=n(8156),t=n.n(e),r=n(7403),a=n(8446),i=n.n(a);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,e);var n,o,a,s,h=(a=m,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(s){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function m(){var e;c(this,m);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(f(e=h.call.apply(h,[this].concat(n))),"state",{instance:null}),e}return n=m,(o=[{key:"componentDidMount",value:function(){var e=this,t=new r.default(this.typewriter,this.props.options);this.setState({instance:t},(function(){var n=e.props.onInit;n&&n(t)}))}},{key:"componentDidUpdate",value:function(e){i()(this.props.options,e.options)||this.setState({instance:new r.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var e=this,n=this.props.component;return t().createElement(n,{ref:function(t){return e.typewriter=t},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&u(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),m}(e.Component);h.defaultProps={component:"div"};var m=h}(),o.default}())},5837:function(e,t,n){var r=n(2109),o=n(7854);r({global:!0,forced:o.globalThis!==o},{globalThis:o})},5743:function(e,t,n){n(5837)},8592:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294);var o=function(){var e=(0,r.useState)("undefined"!=typeof window?localStorage.theme:"dark"),t=e[0],n=e[1],o="dark"===t?"light":"dark";return(0,r.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(o),e.classList.add(t),"undefined"!=typeof window&&localStorage.setItem("theme",t)}),[t]),[o,n]};var a=function(e){var t=o(),n=t[0],a=t[1];return r.createElement("div",{className:e.className},"light"===n?r.createElement("svg",{onClick:function(){return a("light")},className:"h-6 w-6 dark:text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor"},r.createElement("circle",{cx:"12",cy:"12",fill:"black",r:"5"}),r.createElement("g",{stroke:"currentColor"},r.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))):r.createElement("svg",{onClick:function(){return a("dark")},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 dark:text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})))},i=n(8938),s=n.n(i),c=n(1082);function u(e){var t=e.title,n=e.description,o=e.pathname,a=e.children,i=(0,c.useStaticQuery)("3764592887").site.siteMetadata,s=i.title,u=i.description,l=i.image,p=i.siteUrl,f={title:t||s,description:n||u,image:""+p+l,url:""+p+(o||""),twitterUsername:i.twitterUsername};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:creator",content:f.twitterUsername}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),a)}var l=n.p+"static/meandpokemon-40b2e53da17c749fd6ea9ff2e909d0d2.png";function p(e){return r.createElement("ul",null,e.items.map((function(e){return r.createElement("li",{className:"ml-4 list-disc",key:e},e)})))}function f(e){return r.createElement("section",null,r.createElement("h3",{className:"m-0 text-base font-normal dark:text-white"},e.title),r.createElement("div",null,r.createElement("div",{className:"flex justify-between text-sm text-warmGray-600 dark:text-white"},r.createElement("div",null,e.company),r.createElement("div",null,e.startDate," - ",e.endDate)),r.createElement("p",{className:"mt-4 text-sm dark:text-white"},r.createElement(p,{items:e.points}))))}var d=function(){return r.createElement("div",{className:"dark:bg-neutral-900 w-auto h-auto"},r.createElement(u,{title:"nathantang.me"}),r.createElement("header",{className:"relative w-full h-16"},r.createElement("div",{className:"fixed h-20 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-neutral-900/50"},r.createElement("nav",{class:"w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center "},r.createElement("a",{href:"/"},r.createElement("span",{className:"dark:text-white"},"nathantang.me")),r.createElement(a,{className:"hover:cursor-pointer"})))),r.createElement("div",{className:"max-w-[75ch] mx-auto pt-12 pb-28 px-5"},r.createElement("div",{className:"flex flex-col content-center"},r.createElement("h3",{className:"dark:text-white text-3xl"}," Hey, I'm Nathan! "),r.createElement("span",{className:"flex"},r.createElement(s(),{options:{wrapperClassName:"dark:text-white text-1xl",delay:30,strings:["Full-time Software Engineer 💻","Part-time Illustrator 🎨","Full-time Clown 🤡","Interested in Frontend/UI Engineering 💻","Interested in Indie Game Development 🎮"],autoStart:!0,loop:!0}})),r.createElement("br",null),r.createElement("img",{alt:"drawing of developer with their favorite pokemon",src:l}),r.createElement("br",null),r.createElement("h3",{className:"dark:text-white text-2xl"}," Experience "),r.createElement("br",null),r.createElement(f,{title:"Software Development Engineer",company:"Amazon Web Services (AWS)",startDate:"Aug 2022",endDate:"Present",points:["AWS Lambda"]})," ",r.createElement("br",null),r.createElement(f,{title:"Full Stack Developer",company:"UC Irvine",startDate:"Feb 2020",endDate:"Jun 2022",points:["Led development of single-page web applications that served ~10,000 students, volunteers and staff each","Reduced time greatly for registration and customer support with creation of admin-side control pane which implemented QR-code camera scanning, search, data visualization, record editing, and more.","Scaled PHP/Laravel backend via test-driven development, api controllers, models and command line scripts.","Technologies: VueJS, PHP/Laravel, MySQL, Git, AWS"]}),r.createElement("br",null),r.createElement(f,{title:"Software Engineer Intern",company:"Flyerstack",startDate:"May 2021",endDate:"Sep 2021",points:["Coordinated closely with 4 other developers, business, product, and UI teams to build mobile applications","Implemented mobile product using React Native, Google Firebase and Git.","Overseen and executed on the building of internal Python Selenium web-scrapers."]}),r.createElement("br",null),r.createElement("h3",{className:"dark:text-white text-2xl"}," Current Project "),r.createElement("br",null),r.createElement(f,{title:"Frontend Lead",company:"Google Drive Clone",startDate:"Sep 2022",endDate:"Present",points:["Collaborated with 4 developers of cross-disciplines to share knowledge to create our own Raspberry Pi cloud server to store and share files accessible with a NextJS web application interface and Golang backend","Served as primary frontend contact and hosted workshops on web development including topics such as base HTML, CSS preprocessors, ES6 Javascript, improving accessibility, ReactJS, and more","Contributed regularly to system design meetings and led development on components, middleware auth, and more"]}),r.createElement("br",null),r.createElement("footer",{className:"dark:text-white"},r.createElement("h5",{className:"dark:text-white"}," Made with ❤ in Seattle, WA ")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a5e733113843350574cf.js.map