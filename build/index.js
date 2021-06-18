(()=>{var e,t={777:(e,t,l)=>{"use strict";l.r(t);var a=wp.i18n.__,r=twsSliderCarousel.blocks,n=[{label:a("Slide","tws-blockfilter"),value:"slide"},{label:a("Fade","tws-blockfilter"),value:"fade"},{label:a("Cube","tws-blockfilter"),value:"cube"},{label:a("Cover Flow","tws-blockfilter"),value:"coverflow"},{label:a("Flip","tws-blockfilter"),value:"flip"}],s={sliderEnabled:{type:"boolean",default:!1},sliderId:{type:"string"},defaultSlideNumber:{type:"number",default:1},defaultSpace:{type:"number",default:8},defaultEnabled:{type:"boolean",default:!0},slideEffect:{type:"string",default:"slide"},slideDirection:{type:"string",default:"horizontal"},loopSlides:{type:"boolean",default:!1},autoHeight:{type:"boolean",default:!1},wrapperElement:{type:"string",default:"div.wp-block-columns"},slideElement:{type:"string",default:"div.wp-block-column"},removeWrapperClass:{type:"boolean",default:!1},removeSlideClass:{type:"boolean",default:!1},wrapperClassNameToRemove:{type:"string",default:"wp-block-columns"},slideClassNameToRemove:{type:"string",default:"wp-block-column"},enableInteraction:{type:"boolean",default:!0},enableBullets:{type:"boolean",default:!1},bulletClickable:{type:"boolean",default:!1},bulletDynamic:{type:"boolean",default:!1},bulletRender:{type:"string",default:""},enableArrows:{type:"boolean",default:!0},enableBreakpoints:{type:"boolean",default:!1},enableOneBreakpoint:{type:"boolean",default:!0},breakOnePixels:{type:"number",default:320},breakOneSlides:{type:"number",default:1},breakOneSpace:{type:"number",default:8},breakOneEnabled:{type:"boolean",default:!0},enableTwoBreakpoint:{type:"boolean",default:!0},breakTwoPixels:{type:"number",default:600},breakTwoSlides:{type:"number",default:2},breakTwoSpace:{type:"number",default:16},breakTwoEnabled:{type:"boolean",default:!0},enableThreeBreakpoint:{type:"boolean",default:!0},breakThreePixels:{type:"number",default:768},breakThreeSlides:{type:"number",default:3},breakThreeSpace:{type:"number",default:24},breakThreeEnabled:{type:"boolean",default:!0},enableFourBreakpoint:{type:"boolean",default:!0},breakFourPixels:{type:"number",default:1024},breakFourSlides:{type:"number",default:4},breakFourSpace:{type:"number",default:32},breakFourEnabled:{type:"boolean",default:!0}},o=wp.components.__experimentalNumberControl,i=wp.compose.createHigherOrderComponent,c=wp.element.Fragment,b=wp.blockEditor,d=b.InspectorControls,u=b.InspectorAdvancedControls,p=wp.components,f=p.PanelBody,w=p.Panel,k=p.ToggleControl,m=p.TextControl,h=p.SelectControl,g=p.BaseControl,E=p.Button,v=p.ButtonGroup,_=wp.i18n.__;const y=i((function(e){return function(t){if(!r.includes(t.name))return React.createElement(e,t);var l=t.attributes,a=l.sliderEnabled,s=l.sliderId,i=l.defaultEnabled,b=l.defaultSlideNumber,p=l.defaultSpace,y=l.wrapperElement,S=l.slideElement,C=l.slideEffect,R=l.slideDirection,T=l.loopSlides,O=l.autoHeight,P=l.removeWrapperClass,N=l.removeSlideClass,A=l.wrapperClassNameToRemove,B=l.slideClassNameToRemove,D=l.enableInteraction,x=l.enableBullets,F=l.bulletClickable,W=l.bulletDynamic,j=l.bulletRender,I=l.enableArrows,M=l.enableBreakpoints,z=l.enableOneBreakpoint,H=l.breakOnePixels,V=l.breakOneSlides,G=l.breakOneSpace,J=l.breakOneEnabled,U=l.enableTwoBreakpoint,L=l.breakTwoPixels,K=l.breakTwoSlides,q=l.breakTwoSpace,Q=l.breakTwoEnabled,X=l.enableThreeBreakpoint,Y=l.breakThreePixels,Z=l.breakThreeSlides,$=l.breakThreeSpace,ee=l.breakThreeEnabled,te=l.enableFourBreakpoint,le=l.breakFourPixels,ae=l.breakFourSlides,re=l.breakFourSpace,ne=l.breakFourEnabled;return s||t.setAttributes({sliderId:t.clientId}),React.createElement(c,null,React.createElement(e,t),React.createElement(d,null,React.createElement(k,{className:"tws-slider-carousel__enable tws-blockfilter__toggle",label:_("Enable Slider Carousel","tws-blockfilter"),help:_(a?"This block will be converted to a slider. It can only be previewed on frontend":"This block is not a slider","tws-blockfilter"),checked:a,onChange:function(){return t.setAttributes({sliderEnabled:!a})}}),a&&React.createElement(React.Fragment,null,React.createElement(u,null,React.createElement("div",null,"Slider Container Unique ID:",React.createElement("p",null,React.createElement("code",null,React.createElement("em",null,React.createElement("strong",null,s)))))),React.createElement(k,{className:"tws-slider-carousel__enable-slider tws-blockfilter__toggle",label:_("Enable interactions","tws-blockfilter"),help:_(i?"Will respond to all events/interactions":"Won't respond to any event/interaction","tws-blockfilter"),checked:i,onChange:function(){return t.setAttributes({defaultEnabled:!i})}}),React.createElement(k,{className:"tws-slider-carousel__enable-interaction tws-blockfilter__toggle",label:_("Allow Touch Move","tws-blockfilter"),help:_(D?"Enable slider interact with touch, drag, etc.":"Disable slider touch interaction. Useful in case where only bullet/arrow navigation is preferred","tws-blockfilter"),checked:D,onChange:function(){return t.setAttributes({enableInteraction:!D})}}),React.createElement(k,{className:"tws-slider-carousel__enable-bullets tws-blockfilter__toggle",label:_("Show bullet pagination","tws-blockfilter"),help:_(x?'Enable slider carousel bullet navigation controls. Set details in PanelBody "Bullet Options"':"Disable bullet navigation controls","tws-blockfilter"),checked:x,onChange:function(){return t.setAttributes({enableBullets:!x})}}),React.createElement(k,{className:"tws-slider-carousel__enable-arrows tws-blockfilter__toggle",label:_("Show arrow navigation","tws-blockfilter"),help:_(I?'Enable slider carousel arrow navigation controls. Set details in PanelBody "Arrow Options"':"Disable arrow navigation controls","tws-blockfilter"),checked:I,onChange:function(){return t.setAttributes({enableArrows:!I})}}),React.createElement(k,{className:"tws-slider-carousel__enable-breakpoint tws-blockfilter__toggle",label:_("Make slider responsive","tws-blockfilter"),help:_(M?'Enable slider carousel breakpoint and make slides responsive. Set details in PanelBody "Slider Breakpoints"':"Disable slider breakpoint","tws-blockfilter"),checked:M,onChange:function(){return t.setAttributes({enableBreakpoints:!M})}}),React.createElement(f,{title:_("Slider Default Options","tws-blockfilter"),initialOpen:!1,className:"tws-slider-carousel__panelBody"},React.createElement(o,{label:_("Number of slides to show","tws-blockfilter"),className:"components-base-control",dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:b,onChange:function(e){return t.setAttributes({defaultSlideNumber:e})}}),React.createElement(o,{label:_("Gap (margins) between slides","tws-blockfilter"),className:"components-base-control",dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:p,onChange:function(e){return t.setAttributes({defaultSpace:e})}}),React.createElement(h,{label:_("Slide Effect","tws-blockfilter"),labelPosition:"top",value:C,options:n,onChange:function(e){return t.setAttributes({slideEffect:e})}}),React.createElement(g,{help:_("Select sliding direction for the slides.","tws-blockfilter")},React.createElement(g.VisualLabel,null,_("Slide Direction","tws-blockfilter")),React.createElement(v,{"aria-label":_("Slide Direction","tws-blockfilter"),className:"tws-sliderCarousel__slide-direction"},React.createElement(E,{isSecondary:"vertical"===R,isPrimary:"horizontal"===R,"aria-pressed":"horizontal"===R,onClick:function(){return t.setAttributes({slideDirection:"horizontal"})}},_("Horizontal","tws-blockfilter")),React.createElement(E,{isSecondary:"horizontal"===R,isPrimary:"vertical"===R,"aria-pressed":"vertical"===R,onClick:function(){return t.setAttributes({slideDirection:"vertical"})}},_("Vertical","tws-blockfilter")))),React.createElement(k,{className:"tws-slider-carousel__loop-slide tws-blockfilter__toggle-inner",label:_("Loop slides","tws-blockfilter"),help:_(T?"Will loop the slides continuously":"Won't loop the slides","tws-blockfilter"),checked:T,onChange:function(){return t.setAttributes({loopSlides:!T})}}),React.createElement(k,{className:"tws-slider-carousel__auto-height tws-blockfilter__toggle-inner",label:_("Auto Height","tws-blockfilter"),help:_(O?"Container height adjust to the slide height":"Won't adjust container to the slide height","tws-blockfilter"),checked:O,onChange:function(){return t.setAttributes({autoHeight:!O})}}),React.createElement(m,{label:"Wrapper Element",value:y||"",onChange:function(e){return t.setAttributes({wrapperElement:e})},help:_("The wrapper element is an element that contains one or more slides. Best used with WordPress Columns Block.","tws-blockfilter")}),React.createElement(m,{label:"Slide Element",value:S||"",onChange:function(e){return t.setAttributes({slideElement:e})},help:_("The slide element is an element that will be a single slide container. Best used with WordPress Columns' column Block.","tws-blockfilter")}),React.createElement(k,{className:"tws-slider-carousel__remove-wrapper-class tws-blockfilter__toggle-inner",label:_("Remove default wrapper class","tws-blockfilter"),help:_(P?"Remove classes from the slider wrapper":"Won't remove any slider wrapper class","tws-blockfilter"),checked:P,onChange:function(){return t.setAttributes({removeWrapperClass:!P})}}),P&&React.createElement(m,{value:A||"",onChange:function(e){return t.setAttributes({wrapperClassNameToRemove:e})},help:_("Enter default classnames applied to slides wrapper element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.","tws-blockfilter")}),React.createElement(k,{className:"tws-slider-carousel__remove-slide-class tws-blockfilter__toggle-inner",label:_("Remove default slide class","tws-blockfilter"),help:_(N?"Remove classes from each slide element":"Won't remove any slide class","tws-blockfilter"),checked:N,onChange:function(){return t.setAttributes({removeSlideClass:!N})}}),N&&React.createElement(m,{value:B||"",onChange:function(e){return t.setAttributes({slideClassNameToRemove:e})},help:_("Enter default classnames applied to each slide element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.","tws-blockfilter")})),x&&React.createElement(f,{title:_("Slider Bullet Options","tws-blockfilter"),initialOpen:!1,className:"tws-slider-carousel__panelBody"},React.createElement(k,{className:"tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",label:_("Make bullets clickable","tws-blockfilter"),help:_(F?"Clicking bullet will change slide":"Clicking bullet won't change slide","tws-blockfilter"),checked:F,onChange:function(){return t.setAttributes({bulletClickable:!F})}}),React.createElement(k,{className:"tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",label:_("Make bullets dynamic","tws-blockfilter"),help:_(W?"Keep only few bullets visible":"Keep all bullets visible","tws-blockfilter"),checked:W,onChange:function(){return t.setAttributes({bulletDynamic:!W})}}),!W&&React.createElement(m,{label:_("Enter render callback for bullets separated by comma. The number of values enter here must match the total number of slides.","tws-blockfilter"),value:j||"",onChange:function(e){return t.setAttributes({bulletRender:e})}})),M&&React.createElement(f,{title:_("Slider Breakpoints","tws-blockfilter"),initialOpen:!1,className:"tws-slider-carousel__panelBody"},React.createElement(k,{className:"tws-slider-carousel__enable-first-breakpoint tws-blockfilter__toggle-inner",label:_("Enable first breakpoint","tws-blockfilter"),help:_("(mobile device portrait)","tws-blockfilter"),checked:z,onChange:function(){return t.setAttributes({enableOneBreakpoint:!z})}}),z&&React.createElement(w,{className:"tws-slider-carousel__panel"},React.createElement(o,{label:_("Enter window width (in px)","tws-blockfilter"),dragDirection:"e",dragThreshold:10,labelPosition:"top",isShiftStepEnabled:!0,step:5,shiftStep:50,value:H,onChange:function(e){return t.setAttributes({breakOnePixels:e})}}),React.createElement(o,{label:_("Number of slides to show","tws-blockfilter"),dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:V,onChange:function(e){return t.setAttributes({breakOneSlides:e})}}),React.createElement(o,{label:_("Gap (margins) between slides","tws-blockfilter"),dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:G,onChange:function(e){return t.setAttributes({breakOneSpace:e})}}),React.createElement(k,{className:"tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",label:_("Enable interactions","tws-blockfilter"),help:_(J?"Will respond to all events/interactions":"Won't respond to any event/interaction","tws-blockfilter"),checked:J,onChange:function(){return t.setAttributes({breakOneEnabled:!J})}})),React.createElement(k,{className:"tws-slider-carousel__enable-second-breakpoint tws-blockfilter__toggle-inner",label:_("Enable second breakpoint","tws-blockfilter"),help:_("(Mobile device ladscape/phablet)","tws-blockfilter"),checked:U,onChange:function(){return t.setAttributes({enableTwoBreakpoint:!U})}}),U&&React.createElement(w,{className:"tws-slider-carousel__panel"},React.createElement(o,{label:_("Enter window width (in px)","tws-blockfilter"),dragDirection:"e",dragThreshold:10,labelPosition:"top",isShiftStepEnabled:!0,step:5,shiftStep:50,value:L,onChange:function(e){return t.setAttributes({breakTwoPixels:e})}}),React.createElement(o,{label:_("Number of slides to show","tws-blockfilter"),dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:K,onChange:function(e){return t.setAttributes({breakTwoSlides:e})}}),React.createElement(o,{label:_("Gap (margins) between slides","tws-blockfilter"),dragDirection:"e",dragThreshold:8,labelPosition:"top",step:2,value:q,onChange:function(e){return t.setAttributes({breakTwoSpace:e})}}),React.createElement(k,{className:"tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",label:_("Enable interactions","tws-blockfilter"),help:_(Q?"Will respond to all events/interactions":"Won't respond to any event/interaction","tws-blockfilter"),checked:Q,onChange:function(){return t.setAttributes({breakTwoEnabled:!Q})}})),React.createElement(k,{className:"tws-slider-carousel__enable-third-breakpoint tws-blockfilter__toggle-inner",label:_("Enable third breakpoint","tws-blockfilter"),help:_("(tablet portrait)","tws-blockfilter"),checked:X,onChange:function(){return t.setAttributes({enableThreeBreakpoint:!X})}}),X&&React.createElement(w,{className:"tws-slider-carousel__panel"},React.createElement(o,{label:_("Enter window width (in px)","tws-blockfilter"),dragDirection:"e",dragThreshold:10,labelPosition:"top",isShiftStepEnabled:!0,step:5,shiftStep:50,value:Y,onChange:function(e){return t.setAttributes({breakThreePixels:e})}}),React.createElement(o,{label:_("Number of slides to show","tws-blockfilter"),dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:Z,onChange:function(e){return t.setAttributes({breakThreeSlides:e})}}),React.createElement(o,{label:_("Gap (margins) between slides","tws-blockfilter"),dragDirection:"e",dragThreshold:3,labelPosition:"top",step:1,value:$,onChange:function(e){return t.setAttributes({breakThreeSpace:e})}}),React.createElement(k,{className:"tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",label:_("Enable interactions","tws-blockfilter"),help:_(ee?"Will respond to all events/interactions":"Won't respond to any event/interaction","tws-blockfilter"),checked:ee,onChange:function(){return t.setAttributes({breakThreeEnabled:!ee})}})),React.createElement(k,{className:"tws-slider-carousel__enable-four-breakpoint tws-blockfilter__toggle-inner",label:_("Enable forth breakpoint","tws-blockfilter"),help:_("(Tablet landspace/laptop)","tws-blockfilter"),checked:te,onChange:function(){return t.setAttributes({enableFourBreakpoint:!te})}}),te&&React.createElement(w,{className:"tws-slider-carousel__panel"},React.createElement(o,{label:_("Enter window width (in px)","tws-blockfilter"),dragDirection:"e",dragThreshold:10,labelPosition:"top",isShiftStepEnabled:!0,step:5,shiftStep:50,value:le,onChange:function(e){return t.setAttributes({breakFourPixels:e})}}),React.createElement(o,{label:_("Number of slides to show","tws-blockfilter"),dragDirection:"e",dragThreshold:1,labelPosition:"top",step:1,value:ae,onChange:function(e){return t.setAttributes({breakFourSlides:e})}}),React.createElement(o,{label:_("Gap (margins) between slides","tws-blockfilter"),dragDirection:"e",dragThreshold:8,labelPosition:"top",step:2,value:re,onChange:function(e){return t.setAttributes({breakFourSpace:e})}}),React.createElement(k,{className:"tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",label:_("Enable interactions","tws-blockfilter"),help:_(ne?"Will respond to all events/interactions":"Won't respond to any event/interaction","tws-blockfilter"),checked:ne,onChange:function(){return t.setAttributes({breakFourEnabled:!ne})}}))))))}}),"withSliderCarouselControls");function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function C(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var R=lodash.assign,T=wp.hooks.addFilter,O=lodash.assign;T("blocks.registerBlockType","tws/sliderCarousel/register",(function(e,t){return r.includes(t)?(e.attributes=O(e.attributes,s),e):e})),T("editor.BlockEdit","tws/sliderCarousel/edit",y),T("blocks.getSaveContent.extraProps","tws/sliderCarousel/save",(function(e,t,l){if(!r.includes(t.name))return e;var a=l.sliderEnabled,n=l.sliderId,s=l.defaultEnabled,o=l.defaultSlideNumber,i=l.defaultSpace,c=l.wrapperElement,b=l.slideElement,d=l.slideEffect,u=l.slideDirection,p=l.loopSlides,f=l.autoHeight,w=l.removeWrapperClass,k=l.removeSlideClass,m=l.wrapperClassNameToRemove,h=l.slideClassNameToRemove,g=l.enableInteraction,E=l.enableBullets,v=l.bulletClickable,_=l.bulletDynamic,y=l.bulletRender,T=l.enableArrows,O=l.enableBreakpoints,P=l.enableOneBreakpoint,N=l.breakOnePixels,A=l.breakOneSlides,B=l.breakOneSpace,D=l.breakOneEnabled,x=l.enableTwoBreakpoint,F=l.breakTwoPixels,W=l.breakTwoSlides,j=l.breakTwoSpace,I=l.breakTwoEnabled,M=l.enableThreeBreakpoint,z=l.breakThreePixels,H=l.breakThreeSlides,V=l.breakThreeSpace,G=l.breakThreeEnabled,J=l.enableFourBreakpoint,U=l.breakFourPixels,L=l.breakFourSlides,K=l.breakFourSpace,q=l.breakFourEnabled,Q={enabled:s,slidesPerView:o,spaceBetween:i,allowTouchMove:g,effect:d,direction:u,loop:p,autoHeight:f},X=w?m:"",Y=k?h:"",Z=a?{enabled:E,clickable:v,render:_?"":y,dynamicBullets:_}:{},$=a?{enabled:T}:{},ee={slidesPerView:D?A:9999,spaceBetween:B,enabled:D},te={slidesPerView:I?W:9999,spaceBetween:j,enabled:I},le={slidesPerView:G?H:9999,spaceBetween:V,enabled:G},ae={slidesPerView:q?L:9999,spaceBetween:K,enabled:q},re={};return O&&(P&&(re[N]=ee),x&&(re[F]=te),M&&(re[z]=le),J&&(re[U]=ae)),R(e,function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach((function(t){C(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},a&&{className:"".concat(e.className," tws-block__sliderCarousel"),"data-sliderid":n,"data-sliderdefault":JSON.stringify(Q),"data-wrapper":c,"data-slide":b,"data-wrapperclass":X,"data-slideclass":Y,"data-bulletcontrol":JSON.stringify(Z),"data-arrowcontrol":JSON.stringify($),"data-breakpoints":JSON.stringify(re)})),e}))},626:(e,t,l)=>{var a={"./slider/index.js":777};function r(e){var t=n(e);return l(t)}function n(e){if(!l.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id=626}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(e=a(626)).keys().forEach(e)})();