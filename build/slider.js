!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([,,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(13),o=r(12),a=r(4),s=r(11);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(5);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(10),o=r(9),a=r(4),s=r(8);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(5);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(3),s=r.n(a),i=r(6),c=r.n(i);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var u=twsSliderCarousel,d=u.containers,p=u.arrows,f=u.bullets,h=function(e){return"string"==typeof e&&""!==e},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!Array.isArray(e))throw"The given list is not an array.";var o=e.every(function(e,r,o){if(h(t)&&!h(e))throw t;var a=Array.isArray(n)&&0===n.length?o:n;return n instanceof Array?a.includes(e):a.contains(e)});if(h(t)&&!o)throw t;if(r&&h(t)&&0===e.length)throw t;return o},b=function(e,t){return h(e)?e.split(t).map(function(e){return e.trim()}):[]},w=function(e,t,r){var n=e.dataset.sliderid,a=e.dataset.wrapper,i=t.querySelector(a),u='Inside slider container with unique class "'.concat(r,'", ');if(null===i)throw new Error("".concat(u,'wrapper element "').concat(a,'" not found.'));var d=e.dataset.slide,w=e.dataset.wrapperclass,v=e.dataset.slideclass,y=JSON.parse(e.dataset.bulletcontrol),_=b(y.render,","),x=JSON.parse(e.dataset.arrowcontrol),g=JSON.parse(e.dataset.breakpoints);Array.isArray(f[n])&&(_=f[n]);var O=JSON.parse(e.dataset.sliderdefault);Object.keys(g).length>0&&(O.breakpoints=g);var A=i.tagName.toLowerCase(),E=b(w," "),j=i.children.length,L=0,k="".concat(u,'slider wrapper element "<').concat(A,'>" for which "').concat(w,"\" class(es) is set for removal doesn't exist.");try{if(j<2)throw"".concat(u,"there must be atleast 2 slide elements inside the wrapper element to initialize the slider.");if(x.enabled){var M="slider__".concat(n,"--prev"),S="slider__".concat(n,"--next");!function(e,t,r){var n=document.createElement("span"),o=document.createElement("span");n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__arrow prev swiper-navigation"),n.innerHTML=p.prev,o.setAttribute("id",r),o.setAttribute("class","tws-sliderCarousel__arrow next swiper-navigation"),o.innerHTML=p.next,e.classList.add("tws-sliderCarousel__with-arrows"),e.appendChild(n),e.appendChild(o)}(t,M,S),O.navigation={prevEl:"#".concat(M),nextEl:"#".concat(S)}}var C;if(function(e,t){Object.entries(t).forEach(function(t){var r=c()(t,2),n=r[0],o=r[1];e.classList.add(o.enabled?"isEnabled__".concat(n):"isDisabled__".concat(n))})}(t,g),m(E,k,!1,i.classList))(C=i.classList).remove.apply(C,s()(E));if(i.classList.add("swiper-wrapper","tws-sliderCarousel__wrapper"),y.enabled){var T="slider__".concat(n,"--bullets"),P=_.length>0,N="".concat(u,"bullets can't be rendered from the given value. There must be exactly \"").concat(j,'" non-empty string values separated by comma, one for each slide.');if(P&&_.length!==j)throw N;!function(e,t,r){var n=document.createElement("div");n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__bullets swiper-pagination"),r&&n.classList.add("has-render-content"),e.classList.add("tws-sliderCarousel__with-bullets"),e.appendChild(n)}(t,T,P),O.pagination=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({el:"#".concat(T),clickable:y.clickable,dynamicBullets:y.dynamicBullets},m(_,N)&&{renderBullet:function(e,t){return function(e,t,r,n){var o=e.length===t?e[r]:"",a=r+1;return'<span class="'.concat(n," bullet__").concat(a,'">').concat(o,"</span>")}(_,j,e,t)}})}t.setAttribute("id","slider__".concat(n))}catch(e){throw new Error(e)}for(var I=i.childNodes,D=b(v," "),B=b(d,"."),H=0;H<I.length;H++){L=H+1;var J=I[H];if(void 0!==J.tagName){var q=J.tagName.toLowerCase(),z="".concat(u,'slide element "<').concat(q,'>" for which "').concat(v,"\" class(es) is set for removal doesn't exist.");try{if(B[0]!==q)throw"".concat(u,'the slide elements do not match. Element set on slider option is "<').concat(B[0],'>" but "<').concat(q,'>" found.');var U;if(h(J.innerHTML)||console.info("".concat(u,'slide number "').concat(L,'" has no content. Is that on purpose?')),m(D,z,!1,J.classList))(U=J.classList).remove.apply(U,s()(D));J.classList.add("swiper-slide")}catch(e){throw new Error(e)}}}try{!function(e,t){new Swiper(e,t)}(".".concat(r),O)}catch(e){throw new Error(e)}};if(Array.isArray(d)){var v=0,y=0;d.forEach(function(e,t){v=t+1;for(var r=document.getElementsByClassName(e.parent),n=e.child,o=0;o<r.length;o++)if(y=o+1,r[o].classList.contains("tws-block__sliderCarousel")){var a="tws-sliderCarousel--container__".concat(v,"--instance__").concat(y),s="tws-sliderCarousel__".concat(v,"--instance__").concat(y),i=r[o].children[0];try{if(1!==r[o].children.length)throw new Error('The block element with classname "'.concat(a,'" must have exactly one inner HTML element to instantiate the slider. Use the block that creates an inner container like WordPress default "group" block. Total of "').concat(r[o].children.length,'" inner element(s) found.'));m(b(n," "),'The block element with classname "'.concat(e.parent,'" does not have inner container element with classname "').concat(n,'". Slider can\'t be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned element classes are valid.'),!0,i.classList)&&(r[o].classList.add(a),i.classList.add(s),w(r[o],i,s))}catch(e){e instanceof TypeError&&console.error('The block element with classname "'.concat(a,'" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>')),e instanceof Error?console.error(e.message):console.error(e)}}})}}]);