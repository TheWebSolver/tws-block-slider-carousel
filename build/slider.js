!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("twsSlider",[],t):"object"==typeof exports?exports.twsSlider=t():e.twsSlider=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addBreakpointClasses:()=>A,createArrows:()=>_,createBullets:()=>L,createInfoHolder:()=>p,createSlider:()=>O,getHolderWithInfo:()=>m,getNode:()=>n,getNodes:()=>a,getSliderBlockWithId:()=>d,getSliderInstance:()=>u,getSliders:()=>o,hasContent:()=>s,isValidString:()=>i,resetSliderHolder:()=>b,setBullets:()=>S,setCurrentElClassName:()=>c,setCurrentSlideClassName:()=>f,setSlidesAdditionalInfo:()=>h,showSlideContent:()=>v,slideInfoHolder:()=>r,toArray:()=>l,toggleSlider:()=>y});var r=[],n=function(e){return document.querySelector(e)},a=function(e){return document.querySelectorAll(e)},o=function(){return a(".tws-block__sliderCarousel")},i=function(e){return"string"==typeof e&&""!==e},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!Array.isArray(e))throw"The given list is not an array.";var a=e.every((function(e,r,a){if(i(t)&&!i(e))throw t;var o=Array.isArray(n)&&0===n.length?a:n;return n instanceof Array?o.includes(e):o.contains(e)}));if(i(t)&&(!a||r&&0===e.length))throw t;return a},l=function(e,t){return i(e)?e.split(t).map((function(e){return e.trim()})):[]},c=function(e,t,r){for(var n=0;n<e.length;n++)n!==t?e[n].classList.remove(r):e[n].classList.add(r)},d=function(e){for(var t=o(),r={},n=0;n<t.length;n++){var a=t[n];if(e instanceof DOMTokenList){if(e.contains(a.id)){r=a;break}}else if(i(e)&&e===a.id){r=a;break}}return r},u=function(e){var t=n("#".concat(e));try{return t.swiper}catch(e){return t}},f=function(e,t,r){e.slides.forEach((function(e,n){t.getAttribute("aria-label")===e.getAttribute("aria-label")?e.classList.add(r):e.classList.remove(r)}))},p=function(e){var t=document.createElement("div");return t.setAttribute("class",e),t.setAttribute("data-slideindex",0),t},h=function(e,t){return e.slides.forEach((function(e,n){var a=t(e);if(a instanceof Node)try{r[n]=e.removeChild(a)}catch(e){r[n]=a,console.warning("It is assumed that holder got it's content from child element of the current slide. Then, tried to automatically remove that child element inside the slide but failed.",e)}else r[n]=a})),r},m=function(e,t){return t==e.dataset.slideindex?""===e.innerHTML?(e.innerHTML=r[t].innerHTML,e.classList.add("hasContent","animate"),requestAnimationFrame((function(){return e.classList.remove("animate")}))):(e.innerHTML="",e.classList.remove("hasContent")):(e.innerHTML=r[t].innerHTML,e.classList.add("hasContent","animate"),requestAnimationFrame((function(){return e.classList.remove("animate")}))),e.setAttribute("data-slideindex",t),e},v=function(e,t,r){for(var n=o(),a=0;a<n.length;a++)try{!function(){var o=n[a].children[0],i=u(o.id),s=p(t);h(i,r),i.on("click",(function(t,r){var n=t.clickedSlide,a=t.clickedIndex;if(void 0!==n){f(t,n,e);var i=m(s,a);o.append(i),""===i.innerHTML&&n.classList.remove(e)}}))}()}catch(e){console.error(e)}},b=function(e,t){var r=n(".swiper-slide.".concat(e)),a=n(t);r instanceof Node&&r.classList.remove(e),a instanceof Node&&(a.innerHTML="")},y=function(e,t,r,n,i,s){for(var l=a(e),u=function(e){l[e].onclick=function(a){a.preventDefault();var u=a.currentTarget.classList,f=d(u),p=o();if(c(l,e,r),b(t,n),u.contains(i)&&f instanceof Node)for(var h=0;h<p.length;h++){var m=p[h];m.id===f.id?(m.classList.toggle(t),m.classList.remove(s)):m.classList.toggle(s)}}},f=0;f<l.length;f++)u(f)};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=twsSliderCarousel.arrows,L=function(e,t,r){var n=document.createElement("div");return n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__bullets swiper-pagination"),r&&n.classList.add("has-render-content"),e.classList.add("tws-sliderCarousel__with-bullets"),e.appendChild(n)},S=function(e,t,r,n){var a=e.length===t?e[r]:"",o=r+1;return'<span class="'.concat(n," bullet__").concat(o,'">').concat(a,"</span>")},_=function(e,t,r){var n=document.createElement("span"),a=document.createElement("span");return n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__arrow prev swiper-navigation"),n.innerHTML=g.prev,a.setAttribute("id",r),a.setAttribute("class","tws-sliderCarousel__arrow next swiper-navigation"),a.innerHTML=g.next,e.classList.add("tws-sliderCarousel__with-arrows"),{prev:e.appendChild(n),next:e.appendChild(a)}},A=function(e,t){Object.entries(t).forEach((function(t){var r,n,a=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}(r,n)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],i=a[1];e.classList.add(i.enabled?"isEnabled__".concat(o):"isDisabled__".concat(o))}))},O=function(e,t){new Swiper(e,t)};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=twsSliderCarousel.bullets;const x=function(e,t,r){var n=e.dataset.sliderid,a=e.dataset.wrapper,o=t.querySelector(a),c='Inside slider container with unique class "'.concat(r,'", ');if(null===o)throw new Error("".concat(c,'wrapper element "').concat(a,'" not found.'));var d=e.dataset.slide,u=e.dataset.wrapperclass,f=e.dataset.slideclass,p=JSON.parse(e.dataset.bulletcontrol),h=l(p.render,","),m=JSON.parse(e.dataset.arrowcontrol),v=JSON.parse(e.dataset.breakpoints);Array.isArray(E[n])&&(h=E[n]);var b=JSON.parse(e.dataset.sliderdefault);Object.keys(v).length>0&&(b.breakpoints=v);var y=o.tagName.toLowerCase(),w=l(u," "),g=o.children.length,T=0,x="".concat(c,'slider wrapper element "<').concat(y,'>" for which "').concat(u,"\" class(es) is set for removal doesn't exist.");try{if(g<2)throw"".concat(c,"there must be atleast 2 slide elements inside the wrapper element to initialize the slider.");if(m.enabled){var I="slider__".concat(n,"--prev"),M="slider__".concat(n,"--next");_(t,I,M),b.navigation={prevEl:"#".concat(I),nextEl:"#".concat(M)}}var N;if(A(t,v),s(w,x,!1,o.classList)&&(N=o.classList).remove.apply(N,j(w)),o.classList.add("swiper-wrapper","tws-sliderCarousel__wrapper"),p.enabled){var H="slider__".concat(n,"--bullets"),P=h.length>0,B="".concat(c,"bullets can't be rendered from the given value. There must be exactly \"").concat(g,'" non-empty string values separated by comma, one for each slide.');if(P&&h.length!==g)throw B;L(t,H,P),b.pagination=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({el:"#".concat(H),clickable:p.clickable,dynamicBullets:p.dynamicBullets},s(h,B)&&{renderBullet:function(e,t){return S(h,g,e,t)}})}t.setAttribute("id","slider__".concat(n))}catch(e){throw new Error(e)}for(var D=o.childNodes,q=l(f," "),J=l(d,"."),U=0;U<D.length;U++){T=U+1;var W=D[U];if(void 0!==W.tagName){var z=W.tagName.toLowerCase(),F="".concat(c,'slide element "<').concat(z,'>" for which "').concat(f,"\" class(es) is set for removal doesn't exist.");try{if(J[0]!==z)throw"".concat(c,'the slide elements do not match. Element set on slider option is "<').concat(J[0],'>" but "<').concat(z,'>" found.');var $;i(W.innerHTML)||console.info("".concat(c,'slide number "').concat(T,'" has no content. Is that on purpose?')),s(q,F,!1,W.classList)&&($=W.classList).remove.apply($,j(q)),W.classList.add("swiper-slide")}catch(e){throw new Error(e)}}}try{O(".".concat(r),b)}catch(e){throw new Error(e)}};var I=twsSliderCarousel.containers;return function(){if(Array.isArray(I)){var e=0,t=0;I.forEach((function(r,n){e=n+1;for(var a=document.getElementsByClassName(r.parent),o=r.child,i=0;i<a.length;i++)if(t=i+1,a[i].classList.contains("tws-block__sliderCarousel")){var c="tws-sliderCarousel--container__".concat(e,"--instance__").concat(t),d="tws-sliderCarousel__".concat(e,"--instance__").concat(t),u=a[i].children[0];try{if(1!==a[i].children.length)throw new Error('The block element with classname "'.concat(c,'" must have exactly one inner HTML element to instantiate the slider. Use the block that creates an inner container like WordPress default "group" block. Total of "').concat(a[i].children.length,'" inner element(s) found.'));s(l(o," "),'The block element with classname "'.concat(r.parent,'" does not have inner container element with classname "').concat(o,'". Slider can\'t be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned element classes are valid.'),!0,u.classList)&&(a[i].classList.add(c),u.classList.add(d),x(a[i],u,d))}catch(e){e instanceof TypeError&&console.error('The block element with classname "'.concat(c,'" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>')),e instanceof Error?console.error(e.message):console.error(e)}}}))}}(),t})()}));