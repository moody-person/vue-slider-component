import{d as _,r as d,o as y,w as L,a as M,b as w,c as g,e as m,f as V,t as k,u as h,g as b,i as S,F as N,h as x}from"./vendor.af7acf99.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};B();const D=(o,t,l)=>Math.min(Math.max(t,o),l);function O(o){return o.pageX!==void 0}function R(o){return o.changedTouches!==void 0}var T=(o,t)=>{const l=o.__vccOpts||o;for(const[s,e]of t)l[s]=e;return l};const F=_({name:"VSlider",props:{modelValue:{type:Number,default:0}},emits:["update:modelValue","mouseup","mousedown","mousemove"],setup(o,{emit:t}){const l=d(null),s=d(null),e=d(null),n=d(null),r=d(0);y(()=>{f(o.modelValue)}),L(()=>o.modelValue,u=>{f(u)});function f(u){if(s.value&&l.value&&e.value&&n.value){const v=l.value.getBoundingClientRect(),c=s.value.offsetWidth/2*100/v.width;s.value.style.left=u-c+"%",e.value.style.width=u+"%",n.value.style.width=100-u+"%"}}function p(u){if(l.value&&e.value&&n.value&&s.value){const v=l.value.getBoundingClientRect();let c=0;O(u)?c=u.clientX:R(u)&&(c=u.changedTouches[0].clientX),r.value=D((c-v.left)*100/v.width,0,100),t("update:modelValue",r.value)}}function E(u){l.value&&e.value&&n.value&&s.value&&(p(u),window.addEventListener("mousemove",a),window.addEventListener("mouseup",i),window.addEventListener("touchmove",a),window.addEventListener("touchend",i),t("mousedown",r.value))}function a(u){l.value&&e.value&&n.value&&s.value&&(p(u),t("mousemove",r.value))}function i(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",i),t("mouseup",r.value)}return M(()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i),window.removeEventListener("touchmove",a),window.removeEventListener("touchend",i)}),{sliderElement:l,handleElement:s,trackLeftElement:e,trackRightElement:n,handleMouseDown:E}}}),$={ref:"handleElement",class:"slider__handle"},A={class:"slider__track-container"},C={ref:"trackLeftElement",class:"slider__track-left"},P={ref:"trackRightElement",class:"slider__track-right"};function U(o,t,l,s,e,n){return w(),g("div",{ref:"sliderElement",class:"slider",onMousedown:t[0]||(t[0]=(...r)=>o.handleMouseDown&&o.handleMouseDown(...r)),onTouchstart:t[1]||(t[1]=(...r)=>o.handleMouseDown&&o.handleMouseDown(...r))},[m("div",$,null,512),m("div",A,[m("div",C,null,512),m("div",P,null,512)])],544)}var X=T(F,[["render",U],["__scopeId","data-v-6ae07e3a"]]);const I=_({setup(o){let t=d(0);return(l,s)=>(w(),g(N,null,[V(" slider value: "+k(h(t).toFixed(2))+" ",1),b(X,{modelValue:h(t),"onUpdate:modelValue":s[0]||(s[0]=e=>S(t)?t.value=e:t=e)},null,8,["modelValue"])],64))}});x(I).mount("#app");
