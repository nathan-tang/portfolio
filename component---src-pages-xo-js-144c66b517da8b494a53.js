(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qkTe:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r);a("f3/d"),a("a1Th"),a("Btvt"),a("XfO3"),a("HEwt"),a("rGqo"),a("rE2o"),a("ioFf");function n(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var c=[0,1,2,3,4,5,6,7,8],m=function(){var e=Object(r.useState)(c),t=e[0],a=e[1],l=Object(r.useState)(""),m=l[0],u=l[1],i=Object(r.useState)(0),s=i[0],b=i[1],f=Object(r.useState)(0),d=f[0],O=f[1],g=Object(r.useState)(-1),w=g[0],E=g[1],v=Object(r.useState)(0),p=v[0],N=v[1];function y(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t}function h(e,r){if(""===m&&"X"!==t[e]&&"O"!==t[e]){O(d+1);var o=n(t);if(o[e]=r,a(o),y(o,r))return void u("Player");if(O(d+1),o[function e(t,a){b(s+1);var r=function(e){return e.filter((function(e){return"X"!==e&&"O"!==e}))}(t);if(y(t,"X"))return{score:-10};if(y(t,"O"))return{score:10};if(0===r.length)return{score:0};for(var o,n=[],l=0;l<r.length;l++){var c={};if(c.index=t[r[l]],t[r[l]]=a,"O"===a){var m=e(t,"X");c.score=m.score}else{var u=e(t,"O");c.score=u.score}t[r[l]]=c.index,n.push(c)}if("O"===a)for(var i=-1e3,f=0;f<n.length;f++)n[f].score>i&&(i=n[f].score,o=f);else for(var d=1e4,O=0;O<n.length;O++)n[O].score<d&&(d=n[O].score,o=O);return n[o]}(o,"O").index]="O",a(o),y(o,"O"))return u("AI"),void N(p+1);if(4===d)return u("Draw"),E("O"===(l=o)[0]&&"O"===l[4]?1:"O"===l[0]&&"O"===l[3]?2:"O"===l[1]&&"O"===l[4]?3:"O"===l[2]&&"O"===l[5]?4:"O"===l[2]&&"O"===l[4]?5:"O"===l[0]&&"O"===l[1]?6:"O"===l[1]&&"O"===l[2]?7:"O"===l[3]&&"O"===l[4]?8:"O"===l[4]&&"O"===l[5]?9:"O"===l[6]&&"O"===l[7]?10:"O"===l[7]&&"O"===l[8]?11:"O"===l[6]&&"O"===l[4]?12:"O"===l[3]&&"O"===l[6]?13:"O"===l[4]&&"O"===l[7]?14:"O"===l[5]&&"O"===l[8]?15:"O"===l[4]&&"O"===l[8]?16:void 0),void N(p+1)}var l}return o.a.createElement("div",null,o.a.createElement("div",{className:"text-center",style:{paddingTop:"50px"}},o.a.createElement("h1",null," Unfair Tic-Tac-Toe ")),o.a.createElement("div",{className:"game-board"},1===w?o.a.createElement("button",{className:"game-board-row-two game-board-col-two"},"O"):null,2===w?o.a.createElement("button",{className:"game-board-row-two game-board-col-three"},"O"):null,3===w?o.a.createElement("button",{className:"game-board-row-two game-board-col-four"},"O"):null,4===w?o.a.createElement("button",{className:"game-board-row-two game-board-col-five"},"O"):null,5===w?o.a.createElement("button",{className:"game-board-row-two game-board-col-six"},"O"):null,6===w?o.a.createElement("button",{className:"game-board-row-three game-board-col-two"},"O"):null,7===w?o.a.createElement("button",{className:"game-board-row-three game-board-col-six"},"O"):null,8===w?o.a.createElement("button",{className:"game-board-row-four game-board-col-two"},"O"):null,9===w?o.a.createElement("button",{className:"game-board-row-four game-board-col-six"},"O"):null,10===w?o.a.createElement("button",{className:"game-board-row-five game-board-col-two"},"O"):null,11===w?o.a.createElement("button",{className:"game-board-row-five game-board-col-six"},"O"):null,12===w?o.a.createElement("button",{className:"game-board-row-six game-board-col-two"},"O"):null,13===w?o.a.createElement("button",{className:"game-board-row-six game-board-col-three"},"O"):null,14===w?o.a.createElement("button",{className:"game-board-row-six game-board-col-four"},"O"):null,15===w?o.a.createElement("button",{className:"game-board-row-six game-board-col-five"},"O"):null,16===w?o.a.createElement("button",{className:"game-board-row-six game-board-col-six"},"O"):null,o.a.createElement("button",{className:"game-board-row-three game-board-col-three",onClick:function(){return h(0,"X")}}," ","number"==typeof t[0]?" ":t[0]," "),o.a.createElement("button",{className:"game-board-row-three game-board-col-four",onClick:function(){return h(1,"X")}}," ","number"==typeof t[1]?" ":t[1]," "),o.a.createElement("button",{className:"game-board-row-three game-board-col-five",onClick:function(){return h(2,"X")}}," ","number"==typeof t[2]?" ":t[2]," "),o.a.createElement("button",{className:"game-board-row-four game-board-col-three",onClick:function(){return h(3,"X")}}," ","number"==typeof t[3]?" ":t[3]," "),o.a.createElement("button",{className:"game-board-row-four game-board-col-four",onClick:function(){return h(4,"X")}}," ","number"==typeof t[4]?" ":t[4]," "),o.a.createElement("button",{className:"game-board-row-four game-board-col-five",onClick:function(){return h(5,"X")}}," ","number"==typeof t[5]?" ":t[5]," "),o.a.createElement("button",{className:"game-board-row-five game-board-col-three",onClick:function(){return h(6,"X")}}," ","number"==typeof t[6]?" ":t[6]," "),o.a.createElement("button",{className:"game-board-row-five game-board-col-four",onClick:function(){return h(7,"X")}}," ","number"==typeof t[7]?" ":t[7]," "),o.a.createElement("button",{className:"game-board-row-five game-board-col-five",onClick:function(){return h(8,"X")}}," ","number"==typeof t[8]?" ":t[8]," ")),o.a.createElement("div",{className:"text-center"},o.a.createElement("p",null," Winner: ","Draw"!==m?m:o.a.createElement(o.a.Fragment,null,o.a.createElement("s",null,"Draw")," AI")," "),o.a.createElement("p",null," AI Victories: ",p),o.a.createElement("button",{onClick:function(){a(c),b(0),O(0),E(-1),u("")}},"Reset")))},u=a("Wbzz");a("s8Wz");t.default=function(e){return o.a.createElement("div",{id:"xo",style:{marginTop:"30px"}},o.a.createElement(u.Link,{to:"/",style:{position:"absolute",top:"0",left:"0",padding:"20px"}},"Go Back"),o.a.createElement(m,null))}},s8Wz:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-xo-js-144c66b517da8b494a53.js.map