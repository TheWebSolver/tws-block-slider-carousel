!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=14)}([,,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(13),o=r(12),a=r(4),s=r(11);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(5);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(10),o=r(9),a=r(4),s=r(8);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(5);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),a=r(2),s=r.n(a),i=r(6),c=r.n(i);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var u=twsSliderCarousel,d=u.containers,p=u.arrows,f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e.every(function(e,t,o){var a=Array.isArray(r)&&0===r.length?o:r;return n?a.contains(e):e.length>0&&a.includes(e)});if(""!==t&&!o)throw new Error(t);return o},h=function(e){return"string"==typeof e&&""!==e},b=function(e,t){return h(e)?e.split(t).map(function(e){return e.trim()}):[]},m=function(e,t){return f(b(t," "),"",e,!0)},w=function(e,t,r){var n=e.dataset.wrapper,a=t.querySelector(n),i='Inside slider container with unique class "'.concat(r,'", ');if(null===a)throw new Error("".concat(i,'wrapper element "').concat(n,'" not found.'));var u=e.dataset.slide,d=e.dataset.wrapperclass,w=e.dataset.slideclass,v=JSON.parse(e.dataset.bulletcontrol),y=[],_=JSON.parse(e.dataset.arrowcontrol),x=JSON.parse(e.dataset.breakpoints);"string"==typeof v.render&&(y=b(v.render,","));var g=JSON.parse(e.dataset.sliderdefault);if(Object.keys(x).length>0&&(g.breakpoints=x),_.enabled){var O="".concat(r,"--next"),A="".concat(r,"--prev");!function(e,t,r){var n=document.createElement("span"),o=document.createElement("span");n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__arrow prev swiper-navigation"),n.innerHTML=p.prev,o.setAttribute("id",r),o.setAttribute("class","tws-sliderCarousel__arrow next swiper-navigation"),o.innerHTML=p.next,e.classList.add("tws-sliderCarousel__with-arrows"),e.append(n),e.append(o)}(t,A,O),g.navigation={nextEl:"#".concat(O),prevEl:"#".concat(A)}}!function(e,t){Object.entries(t).forEach(function(t){var r=c()(t,2),n=r[0],o=r[1];e.classList.add(o.enabled?"isEnabled__".concat(n):"isDisabled__".concat(n))})}(t,x);var E=a.tagName.toLowerCase(),j=b(d," "),L=a.children.length,k=0;try{if(h(d)&&!m(a.classList,d))throw"".concat(i,'slider wrapper element "<').concat(E,'>" for which "').concat(d,"\" class(es) is set for removal doesn't exist.");if(a.classList.add("swiper-wrapper","tws-sliderCarousel__wrapper"),L<2)throw"".concat(i,"there must be atleast 2 slide elements inside the wrapper element to initialize the slider.");if(v.enabled){var M="".concat(r,"--bullets"),S="".concat(i,"bullets can't be rendered from the given value. There are total \"").concat(L,'" slides but given value is "').concat(v.render,'".');if(y.length>0&&y.length!==L)throw S;!function(e,t){var r=document.createElement("div");r.setAttribute("id",t),r.setAttribute("class","tws-sliderCarousel__bullets swiper-pagination"),e.classList.add("tws-sliderCarousel__with-bullets"),e.append(r)}(t,M),g.pagination=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){s()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({el:"#".concat(M),clickable:v.clickable,dynamicBullets:v.dynamicBullets},f(y,S)&&{renderBullet:function(e,t){return function(e,t,r,n){var o=e.length===t?e[r]:"",a=r+1;return'<span class="'+"".concat(n," bullet__").concat(a)+'">'+o+"</span>"}(y,L,e,t)}})}}catch(e){throw new Error(e)}finally{var C;if(m(a.classList,d)&&Array.isArray(j))(C=a.classList).remove.apply(C,o()(j))}for(var P=a.childNodes,T=0;T<P.length;T++){k=T+1;var N=P[T];if(void 0!==N.tagName){var I=N.tagName.toLowerCase(),D=b(w," "),B=b(u,".");try{if(B[0]!==I)throw new Error("".concat(i,'the slide elements do not match. Element set on slider option is "<').concat(B[0],'>" but "<').concat(I,'>" found.'));if(""===N.innerHTML&&console.info("".concat(i,'slide number "').concat(k,'" has no content. Is that on purpose?')),h(w)&&!m(N.classList,w))throw new Error("".concat(i,'slide element "<').concat(I,'>" for which "').concat(w,"\" class(es) is set for removal doesn't exist."));N.classList.add("swiper-slide")}catch(e){throw new Error(e)}finally{var H;if(m(N.classList,w)&&Array.isArray(D))(H=N.classList).remove.apply(H,o()(D))}}}!function(e,t){new Swiper(e,t)}(".".concat(r),g)};if(Array.isArray(d)){var v=0,y=0;d.forEach(function(e,t){v=t+1;for(var r=document.getElementsByClassName(e.parent),n=e.child,o=0;o<r.length;o++)if(y=o+1,r[o].classList.contains("tws-block__sliderCarousel")){var a="tws-sliderCarousel--container__".concat(v,"--instance__").concat(y),s="tws-sliderCarousel__".concat(v,"--instance__").concat(y);if(1!==r[o].children.length){console.error('The block element with classname "'.concat(a,'" does not have any inner HTML element to instantiate the slider. Use the block that creates an inner container like WordPress default "group" block.'));continue}var i=r[o].children[0];if(!i.classList.contains(n)){console.error('The block element with classname "'.concat(e.parent,'" does not have inner container element with classname as "').concat(n,'". Slider can\'t be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned element classes are valid.'));continue}try{r[o].classList.add(a),i.classList.add(s),w(r[o],i,s)}catch(e){e instanceof TypeError&&console.error('The block element with classname "'.concat(a,'" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>')),e instanceof Error?console.error(e.message):console.error(e)}}})}}]);