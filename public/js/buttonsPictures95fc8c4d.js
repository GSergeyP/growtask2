(()=>{var t={425:(t,s,e)=>{var n;(n=e(410)).keys().forEach(n)},410:(t,s,e)=>{var n={"./buttonsPictures1.png":321,"./buttonsPictures2.png":1,"./buttonsPictures3.png":763};function i(t){var s=u(t);return e(s)}function u(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=u,t.exports=i,i.id=410},321:(t,s,e)=>{"use strict";t.exports=e.p+"img/buttonsPictures1.png"},1:(t,s,e)=>{"use strict";t.exports=e.p+"img/buttonsPictures2.png"},763:(t,s,e)=>{"use strict";t.exports=e.p+"img/buttonsPictures3.png"}},s={};function e(n){var i=s[n];if(void 0!==i)return i.exports;var u=s[n]={exports:{}};return t[n](u,u.exports,e),u.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var n=s.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),(()=>{"use strict";const t=()=>{const t=window.innerWidth;return t<768?"mobile":t>=768&&t<1366?"tablet":t>=1366&&t<1920?"hd":t>=1920?"full-hd":void 0},s=[{url:"buttonsPictures1.png",title:"Картинка 1"},{url:"buttonsPictures2.png",title:"Картинка 2"},{url:"buttonsPictures3.png",title:"Картинка 3"}];var n;if(e(425),document.getElementById("buttonsPictures").innerHTML="mobile"==t()?(()=>{let t=[];for(let s=0;s<3;s++)t.push(`<div class="buttonsPictures-button" id="buttonsPictures-button__${s}"><span class="buttonsPictures-img" id="buttonsPictures-img__${s}"></span><span class="buttonsPictures-text" id="buttonsPictures-text__${s}"></span></div>`);return'<div class="buttonsPictures-window"></div>'+t.map((t=>t)).join("")})():"tablet"==t()?(()=>{let t=[];for(let s=0;s<3;s++)t.push(`<div class="buttonsPictures-button" id="buttonsPictures-button__${s}"><span class="buttonsPictures-img" id="buttonsPictures-img__${s}"></span><span class="buttonsPictures-text" id="buttonsPictures-text__${s}"></span></div>`);return'<div class="buttonsPictures-window"></div>'+t.map((t=>t)).join("")})():"hd"==t()?(()=>{let t=[];for(let s=0;s<3;s++)t.push(`<div class="buttonsPictures-button" id="buttonsPictures-button__${s}"><span class="buttonsPictures-img" id="buttonsPictures-img__${s}"></span><span class="buttonsPictures-text" id="buttonsPictures-text__${s}"></span></div>`);return'<div class="buttonsPictures-window"></div>'+t.map((t=>t)).join("")})():"full-hd"==t()&&(()=>{let t=[];for(let s=0;s<3;s++)t.push(`<div class="buttonsPictures-button" id="buttonsPictures-button__${s}"><span class="buttonsPictures-img" id="buttonsPictures-img__${s}"></span><span class="buttonsPictures-text" id="buttonsPictures-text__${s}"></span></div>`);return'<div class="buttonsPictures-window"></div>'+t.map((t=>t)).join("")})(),!n){n=0;for(let t=0;t<s.length;t++)window["handleclick"+t]=document.getElementById(`buttonsPictures-button__${t}`),window["handleclick"+t].addEventListener("click",(()=>{n=t,i()})),document.getElementById(`buttonsPictures-img__${t}`).style.backgroundImage=`url('./img/${s[t].url}')`,document.getElementById(`buttonsPictures-text__${t}`).innerHTML=`${s[t].title}`}const i=()=>{for(let t=0;t<s.length;t++)t==n?(document.getElementById(`buttonsPictures-button__${t}`).classList.add("active"),document.querySelector(".buttonsPictures-window").style.backgroundImage=`url('./img/${s[t].url}')`):document.getElementById(`buttonsPictures-button__${t}`).classList.remove("active")};document.addEventListener("DOMContentLoaded",i)})()})();