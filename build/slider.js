!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("twsSlider",[],t):"object"==typeof exports?exports.twsSlider=t():e.twsSlider=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addBreakpointClasses:()=>O,addHolderContent:()=>p,createArrows:()=>C,createBullets:()=>_,createInfoHolder:()=>h,createSlider:()=>j,getHolderWithInfo:()=>y,getNode:()=>n,getNodes:()=>a,getSliderBlockWithId:()=>d,getSliderInstance:()=>u,getSliders:()=>o,hasContent:()=>i,isValidString:()=>s,removeHolderContent:()=>m,resetSliderHolder:()=>g,setBullets:()=>k,setCurrentSlideClassName:()=>f,setSelected:()=>c,setSlidesAdditionalInfo:()=>v,showSlideContent:()=>w,slideInfoHolder:()=>r,toArray:()=>l,toggleHolderContent:()=>b,toggleSlider:()=>A});var r=[],n=function(e){return document.querySelector(e)},a=function(e){return document.querySelectorAll(e)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=s(e)?".tws-block__sliderCarousel.".concat(e):".tws-block__sliderCarousel";return a(t)},s=function(e){return"string"==typeof e&&""!==e},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!Array.isArray(e))throw"The given list is not an array.";var a=e.every((function(e,r,a){if(s(t)&&!s(e))throw t;var o=Array.isArray(n)&&0===n.length?a:n;return n instanceof Array?o.includes(e):o.contains(e)}));if(s(t)&&(!a||r&&0===e.length))throw t;return a},l=function(e,t){return s(e)?e.split(t).map((function(e){return e.trim()})):[]},c=function(e,t,r){for(var n=0;n<e.length;n++){var a=e[n];r.reset&&a.classList.toggle(r.className),n===t?(a.setAttribute("data-selected","yes"),r.reset||a.classList.add(r.className)):(a.setAttribute("data-selected","no"),r.reset?"no"===a.dataset.selected&&a.classList.contains(r.className)&&a.classList.remove(r.className):a.classList.remove(r.className))}},d=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=o(t),n={},a=0;a<r.length;a++){var i=r[a];if(e instanceof DOMTokenList){if(e.contains(i.id)){n=i;break}}else if(s(e)&&e===i.id){n=i;break}}return n},u=function(e){var t=n("#".concat(e));try{return t.swiper}catch(e){return t}},f=function(e,t,r){e.slides.forEach((function(e,n){t.getAttribute("aria-label")===e.getAttribute("aria-label")?e.classList.add(r):e.classList.remove(r)}))},h=function(e){var t=document.createElement("div");return t.setAttribute("class",e),t.setAttribute("data-slideindex",0),t},v=function(e,t){return e.slides.forEach((function(e,n){var a=t(e);if(a instanceof Node)try{r[n]=e.removeChild(a)}catch(e){r[n]=a,console.warning("It is assumed that holder got it's content from child element of the current slide. Then, tried to automatically remove that child element inside the slide but failed.",e)}else r[n]=a})),r},m=function(e){e.innerHTML="",e.classList.remove("hasContent"),e.removeAttribute("data-slideindex"),e.removeAttribute("data-sliderid")},p=function(e,t,n){e.innerHTML=r[t].innerHTML,e.classList.add("hasContent","animate"),requestAnimationFrame((function(){return e.classList.remove("animate")})),e.setAttribute("data-slideindex",t),e.setAttribute("data-sliderid",n)},b=function(e,t,r,n){r?p(e,t,n):m(e)},y=function(e,t,r){return t==e.dataset.slideindex?b(e,t,""===e.innerHTML,r):b(e,t,!0,r),e},w=function(e,t){for(var r=void 0!==e.slide?e.slide:"current",n=void 0!==e.holder?e.holder:"slideDetails",a=void 0!==e.block?e.block:"",s=o(a),i=0;i<s.length;i++)try{!function(){var e=s[i].children[0],a=u(e.id),o=h(n);v(a,t),a.on("click",(function(t,n){var a=t.clickedSlide,s=t.clickedIndex;if(void 0!==a){f(t,a,r);var i=y(o,s,e.id);e.append(i),""===i.innerHTML&&a.classList.remove(r)}}))}()}catch(e){console.error(e)}},g=function(e){for(var t=void 0!==e.slide?e.slide:"current",r=void 0!==e.holder?e.holder:"slideDetails",n=a(".swiper-slide.".concat(t)),o=a(".".concat(r)),s=0;s<n.length;s++){var i=n[s];i instanceof Node&&i.classList.remove(t)}for(var l=0;l<o.length;l++){var c=o[l];c instanceof Node&&(c.innerHTML="",c.classList.remove("hasContent"),c.removeAttribute("data-slideindex"),c.removeAttribute("data-sliderid"))}},A=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e.selector,s=void 0!==e.enabledSelector?e.enabledSelector:"enabled",i=void 0!==e.clickedSelector?e.clickedSelector:"current",l=void 0!==e.selectedBlock?e.selectedBlock:"current",u=void 0!==e.holder?e.holder:"slideDetails",f=void 0===t.selector||t.selector,h=void 0===t.holder||t.holder,v=a(".".concat(n)),m=o(r),p=function(e){v[e].onclick=function(t){var n=t.currentTarget.classList,a=d(n,r);c(v,e,{className:i,reset:f}),h&&g({slide:l,holder:u}),a instanceof Node&&a.classList.toggle(l);for(var o=0;o<m.length;o++){var p=m[o];p.id===a.id?n.contains(s)&&a instanceof Node&&a.setAttribute("data-selected","yes"):(n.contains(s)&&a instanceof Node&&(p.setAttribute("data-selected","no"),f&&!a.classList.contains(l)&&p.setAttribute("data-selected","yes")),p.classList.contains(l)&&p.classList.remove(l))}}},b=0;b<v.length;b++)p(b)};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=twsSliderCarousel.arrows,_=function(e,t,r){var n=document.createElement("div");return n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__bullets swiper-pagination"),r&&n.classList.add("has-render-content"),e.classList.add("tws-sliderCarousel__with-bullets"),e.appendChild(n)},k=function(e,t,r,n){var a=e.length===t?e[r]:"",o=r+1;return'<span class="'.concat(n," bullet__").concat(o,'">').concat(a,"</span>")},C=function(e,t,r){var n=document.createElement("span"),a=document.createElement("span");return n.setAttribute("id",t),n.setAttribute("class","tws-sliderCarousel__arrow prev swiper-navigation"),n.innerHTML=L.prev,a.setAttribute("id",r),a.setAttribute("class","tws-sliderCarousel__arrow next swiper-navigation"),a.innerHTML=L.next,e.classList.add("tws-sliderCarousel__with-arrows"),{prev:e.appendChild(n),next:e.appendChild(a)}},O=function(e,t){Object.entries(t).forEach((function(t){var r,n,a=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(r,n)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],s=a[1];e.classList.add(s.enabled?"isEnabled__".concat(o):"isDisabled__".concat(o))}))},j=function(e,t){new Swiper(e,t)};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H=twsSliderCarousel.bullets;const I=function(e,t,r){var n=e.dataset.sliderid,a=e.dataset.wrapper,o=t.querySelector(a),c='Inside slider container with unique class "'.concat(r,'", ');if(null===o)throw new Error("".concat(c,'wrapper element "').concat(a,'" not found.'));var d=e.dataset.slide,u=e.dataset.wrapperclass,f=e.dataset.slideclass,h=JSON.parse(e.dataset.bulletcontrol),v=l(h.render,","),m=JSON.parse(e.dataset.arrowcontrol),p=JSON.parse(e.dataset.breakpoints);Array.isArray(H[n])&&(v=H[n]);var b=JSON.parse(e.dataset.sliderdefault);Object.keys(p).length>0&&(b.breakpoints=p);var y=o.tagName.toLowerCase(),w=l(u," "),g=o.children.length,A=0,S="".concat(c,'slider wrapper element "<').concat(y,'>" for which "').concat(u,"\" class(es) is set for removal doesn't exist.");try{if(g<2)throw"".concat(c,"there must be atleast 2 slide elements inside the wrapper element to initialize the slider.");if(m.enabled){var L="slider__".concat(n,"--prev"),x="slider__".concat(n,"--next");C(t,L,x),b.navigation={prevEl:"#".concat(L),nextEl:"#".concat(x)}}var I;if(O(t,p),i(w,S,!1,o.classList)&&(I=o.classList).remove.apply(I,N(w)),o.classList.add("swiper-wrapper","tws-sliderCarousel__wrapper"),h.enabled){var M="slider__".concat(n,"--bullets"),P=v.length>0,B="".concat(c,"bullets can't be rendered from the given value. There must be exactly \"").concat(g,'" non-empty string values separated by comma, one for each slide.');if(P&&v.length!==g)throw B;_(t,M,P),b.pagination=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({el:"#".concat(M),clickable:h.clickable,dynamicBullets:h.dynamicBullets},i(v,B)&&{renderBullet:function(e,t){return k(v,g,e,t)}})}t.setAttribute("id","slider__".concat(n))}catch(e){throw new Error(e)}for(var D=o.childNodes,q=l(f," "),J=l(d,"."),U=0;U<D.length;U++){A=U+1;var W=D[U];if(void 0!==W.tagName){var z=W.tagName.toLowerCase(),$="".concat(c,'slide element "<').concat(z,'>" for which "').concat(f,"\" class(es) is set for removal doesn't exist.");try{if(J[0]!==z)throw"".concat(c,'the slide elements do not match. Element set on slider option is "<').concat(J[0],'>" but "<').concat(z,'>" found.');var F;s(W.innerHTML)||console.info("".concat(c,'slide number "').concat(A,'" has no content. Is that on purpose?')),i(q,$,!1,W.classList)&&(F=W.classList).remove.apply(F,N(q)),W.classList.add("swiper-slide")}catch(e){throw new Error(e)}}}try{j(".".concat(r),b)}catch(e){throw new Error(e)}};var M=twsSliderCarousel.containers;return function(){if(Array.isArray(M)){var e=0,t=0;M.forEach((function(r,n){e=n+1;for(var a=document.getElementsByClassName(r.parent),o=r.child,s=0;s<a.length;s++)if(t=s+1,a[s].classList.contains("tws-block__sliderCarousel")){var c="tws-sliderCarousel--container__".concat(e,"--instance__").concat(t),d="tws-sliderCarousel__".concat(e,"--instance__").concat(t),u=a[s].children[0];try{if(1!==a[s].children.length)throw new Error('The block element with classname "'.concat(c,'" must have exactly one inner HTML element to instantiate the slider. Use the block that creates an inner container like WordPress default "group" block. Total of "').concat(a[s].children.length,'" inner element(s) found.'));i(l(o," "),'The block element with classname "'.concat(r.parent,'" does not have inner container element with classname "').concat(o,'". Slider can\'t be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned element classes are valid.'),!0,u.classList)&&(a[s].classList.add(c),u.classList.add(d),I(a[s],u,d))}catch(e){e instanceof TypeError&&console.error('The block element with classname "'.concat(c,'" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>')),e instanceof Error?console.error(e.message):console.error(e)}}}))}}(),t})()}));