/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/filters sync recursive index\\.js$":
/*!*************************************!*\
  !*** ./src/filters sync index\.js$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./slider/index.js": "./src/filters/slider/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/filters sync recursive index\\.js$";

/***/ }),

/***/ "./src/filters/slider/controller/props.js":
/*!************************************************!*\
  !*** ./src/filters/slider/controller/props.js ***!
  \************************************************/
/*! exports provided: eligibleBlocks, sliderEffects, sliderCarouselAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eligibleBlocks", function() { return eligibleBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderEffects", function() { return sliderEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCarouselAttributes", function() { return sliderCarouselAttributes; });
/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */
var __ = wp.i18n.__;
/**
 * WordPress core blocks which can be used as slider carousel.
 *
 * The blocks are imported from localized script.
 *
 * @see tws_bfsc_init()
 * @filesource tws-blocks-slider-carousel\tws-block-slider-carousel.php
 */

var eligibleBlocks = twsSliderCarousel.blocks;
/**
 * Various slider effects.
 */

var sliderEffects = [{
  label: __('Slide', 'tws-blockfilter'),
  value: 'slide'
}, {
  label: __('Fade', 'tws-blockfilter'),
  value: 'fade'
}, {
  label: __('Cube', 'tws-blockfilter'),
  value: 'cube'
}, {
  label: __('Cover Flow', 'tws-blockfilter'),
  value: 'coverflow'
}, {
  label: __('Flip', 'tws-blockfilter'),
  value: 'flip'
}];
/**
 * New attributes to assign to containers defined in "eligibleBlocks".
 */

var sliderCarouselAttributes = {
  sliderEnabled: {
    type: 'boolean',
    default: false
  },
  defaultSlideNumber: {
    type: 'number',
    default: 1
  },
  defaultSpace: {
    type: 'number',
    default: 8
  },
  defaultEnabled: {
    type: 'boolean',
    default: true
  },
  slideEffect: {
    type: 'string',
    default: 'slide'
  },
  wrapperElement: {
    type: 'string',
    default: 'div.wp-block-columns'
  },
  slideElement: {
    type: 'string',
    default: 'div.wp-block-column'
  },
  removeWrapperClass: {
    type: 'boolean',
    default: false
  },
  removeSlideClass: {
    type: 'boolean',
    default: false
  },
  wrapperClassNameToRemove: {
    type: 'string',
    default: 'wp-block-columns'
  },
  slideClassNameToRemove: {
    type: 'string',
    default: 'wp-block-column'
  },
  enableInteraction: {
    type: 'boolean',
    default: true
  },
  enableBullets: {
    type: 'boolean',
    default: false
  },
  bulletClickable: {
    type: 'boolean',
    default: false
  },
  bulletDynamic: {
    type: 'boolean',
    default: false
  },
  bulletRender: {
    type: 'string',
    default: ''
  },
  enableArrows: {
    type: 'boolean',
    default: true
  },
  enableBreakpoints: {
    type: 'boolean',
    default: false
  },
  enableOneBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakOnePixels: {
    type: 'number',
    default: 320
  },
  breakOneSlides: {
    type: 'number',
    default: 1
  },
  breakOneSpace: {
    type: 'number',
    default: 8
  },
  breakOneEnabled: {
    type: 'boolean',
    default: true
  },
  enableTwoBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakTwoPixels: {
    type: 'number',
    default: 600
  },
  breakTwoSlides: {
    type: 'number',
    default: 2
  },
  breakTwoSpace: {
    type: 'number',
    default: 16
  },
  breakTwoEnabled: {
    type: 'boolean',
    default: true
  },
  enableThreeBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakThreePixels: {
    type: 'number',
    default: 768
  },
  breakThreeSlides: {
    type: 'number',
    default: 3
  },
  breakThreeSpace: {
    type: 'number',
    default: 24
  },
  breakThreeEnabled: {
    type: 'boolean',
    default: true
  },
  enableFourBreakpoint: {
    type: 'boolean',
    default: true
  },
  breakFourPixels: {
    type: 'number',
    default: 1024
  },
  breakFourSlides: {
    type: 'number',
    default: 4
  },
  breakFourSpace: {
    type: 'number',
    default: 32
  },
  breakFourEnabled: {
    type: 'boolean',
    default: true
  }
};

/***/ }),

/***/ "./src/filters/slider/index.js":
/*!*************************************!*\
  !*** ./src/filters/slider/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/inspector */ "./src/filters/slider/view/inspector.js");
/* harmony import */ var _view_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/save */ "./src/filters/slider/view/save.js");
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/props */ "./src/filters/slider/controller/props.js");
/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */
var addFilter = wp.hooks.addFilter;
var _lodash = lodash,
    assign = _lodash.assign;



/**
 * Add data attributes to slider carousel container blocks.
 *
 * @param {object} block Current block block.
 * @param {string} name Name of the block.
 *
 * @returns {object} Modified block block.
 */

var addDataAttributes = function addDataAttributes(block, name) {
  // Bail early if not slider Carousel container.
  if (!_controller_props__WEBPACK_IMPORTED_MODULE_2__["eligibleBlocks"].includes(name)) {
    return block;
  }

  block.attributes = assign(block.attributes, _controller_props__WEBPACK_IMPORTED_MODULE_2__["sliderCarouselAttributes"]);
  return block;
}; // Modify the core Blocks.


addFilter("blocks.registerBlockType", "tws/sliderCarousel/register", addDataAttributes); // Add controls to inspector panel.

addFilter("editor.BlockEdit", "tws/sliderCarousel/edit", _view_inspector__WEBPACK_IMPORTED_MODULE_0__["default"]); // Add data attributes to container block element on save.

addFilter("blocks.getSaveContent.extraProps", "tws/sliderCarousel/save", _view_save__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/filters/slider/view/inspector.js":
/*!**********************************************!*\
  !*** ./src/filters/slider/view/inspector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/props */ "./src/filters/slider/controller/props.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */


var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
var Fragment = wp.element.Fragment;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Panel = _wp$components.Panel,
    TabPanel = _wp$components.TabPanel,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var __ = wp.i18n.__;
/**
 * Create HOC to add custom attributes to the slider carousel.
 */

/* harmony default export */ __webpack_exports__["default"] = (createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    // Bail early if not slider Carousel container.
    if (!_controller_props__WEBPACK_IMPORTED_MODULE_1__["eligibleBlocks"].includes(props.name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var _props$attributes = props.attributes,
        sliderEnabled = _props$attributes.sliderEnabled,
        defaultEnabled = _props$attributes.defaultEnabled,
        defaultSlideNumber = _props$attributes.defaultSlideNumber,
        defaultSpace = _props$attributes.defaultSpace,
        wrapperElement = _props$attributes.wrapperElement,
        slideElement = _props$attributes.slideElement,
        slideEffect = _props$attributes.slideEffect,
        removeWrapperClass = _props$attributes.removeWrapperClass,
        removeSlideClass = _props$attributes.removeSlideClass,
        wrapperClassNameToRemove = _props$attributes.wrapperClassNameToRemove,
        slideClassNameToRemove = _props$attributes.slideClassNameToRemove,
        enableInteraction = _props$attributes.enableInteraction,
        enableBullets = _props$attributes.enableBullets,
        bulletClickable = _props$attributes.bulletClickable,
        bulletDynamic = _props$attributes.bulletDynamic,
        bulletRender = _props$attributes.bulletRender,
        enableArrows = _props$attributes.enableArrows,
        enableBreakpoints = _props$attributes.enableBreakpoints,
        enableOneBreakpoint = _props$attributes.enableOneBreakpoint,
        breakOnePixels = _props$attributes.breakOnePixels,
        breakOneSlides = _props$attributes.breakOneSlides,
        breakOneSpace = _props$attributes.breakOneSpace,
        breakOneEnabled = _props$attributes.breakOneEnabled,
        enableTwoBreakpoint = _props$attributes.enableTwoBreakpoint,
        breakTwoPixels = _props$attributes.breakTwoPixels,
        breakTwoSlides = _props$attributes.breakTwoSlides,
        breakTwoSpace = _props$attributes.breakTwoSpace,
        breakTwoEnabled = _props$attributes.breakTwoEnabled,
        enableThreeBreakpoint = _props$attributes.enableThreeBreakpoint,
        breakThreePixels = _props$attributes.breakThreePixels,
        breakThreeSlides = _props$attributes.breakThreeSlides,
        breakThreeSpace = _props$attributes.breakThreeSpace,
        breakThreeEnabled = _props$attributes.breakThreeEnabled,
        enableFourBreakpoint = _props$attributes.enableFourBreakpoint,
        breakFourPixels = _props$attributes.breakFourPixels,
        breakFourSlides = _props$attributes.breakFourSlides,
        breakFourSpace = _props$attributes.breakFourSpace,
        breakFourEnabled = _props$attributes.breakFourEnabled;
    /**
     * On the frontend, when parsing post's blocks, the attributes set here will be
     * displayed as values under key "attrs". However, it may only show the
     * attributes in a key/value pair if the attribute's default value is changed.
     *
     * USE CASE FOR CONVERTING BLOCK INTO SLIDER CAROUSEL:
     * ---------------------------------------------------
     * On the frontend, the PHP function "parse_blocks()" is used to verify
     * whether a given block is used a slider carousel or not.
     * Loop over all blocks and get the {$block['attrs']} value in an array.
     * This array value will contain attributes set here using "props.setAttributes()".
     * However, all attributes may not get displayed on the PHP side.
     *
     * So, it is important to verify whether a given block is converted to slider
     * using the "isset()" as well as attribute value.
     *
     * For eg: to check whether a group block is converted to slider or not, use this:
     * if( isset( $block['attrs']['sliderEnabled'] ) && block['attrs']['sliderEnabled'] ) {
     * 	// This {$block} has slider enabled, enqueue frontend styles and scripts.
     * }
     */

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable tws-blockfilter__toggle",
      label: __('Enable Slider Carousel', 'tws-blockfilter'),
      help: sliderEnabled ? __('This block will be converted to a slider', 'tws-blockfilter') : __('This block is not a slider', 'tws-blockfilter'),
      checked: sliderEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          sliderEnabled: !sliderEnabled
        });
      }
    }), sliderEnabled && // Main toggle controls.
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: defaultEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter"),
      checked: defaultEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          defaultEnabled: !defaultEnabled
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-interaction tws-blockfilter__toggle",
      label: __('Allow Touch Move', 'tws-blockfilter'),
      help: enableInteraction ? __('Enables slider interact with touch, drag, etc.', 'tws-blockfilter') : __('Disables slider touch interaction. Useful in case where only bullet/arrow navigation is preferred.', 'tws-blockfilter'),
      checked: enableInteraction,
      onChange: function onChange() {
        return props.setAttributes({
          enableInteraction: !enableInteraction
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-bullets tws-blockfilter__toggle",
      label: __('Show bullet pagination', 'tws-blockfilter'),
      help: enableBullets ? __('Enables slider carousel bullet navigation controls. Set each breakpoint details in PanelBody "Bullet Options"', 'tws-blockfilter') : __('Disables bullet navigation controls', 'tws-blockfilter'),
      checked: enableBullets,
      onChange: function onChange() {
        return props.setAttributes({
          enableBullets: !enableBullets
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-arrows tws-blockfilter__toggle",
      label: __('Show arrow navigation', 'tws-blockfilter'),
      help: enableArrows ? __('Enables slider carousel arrow navigation controls. Set each breakpoint details in PanelBody "Arrow Options"', 'tws-blockfilter') : __('Disables arrow navigation controls', 'tws-blockfilter'),
      checked: enableArrows,
      onChange: function onChange() {
        return props.setAttributes({
          enableArrows: !enableArrows
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-breakpoint tws-blockfilter__toggle",
      label: __('Make slider responsive', 'tws-blockfilter'),
      help: enableBreakpoints ? __('Enables slider carousel breakpoint and makes slides responsive. Set each breakpoint details in PanelBody "Slider Breakpoints"', 'tws-blockfilter') : __('Disables slider breakpoint', 'tws-blockfilter'),
      checked: enableBreakpoints,
      onChange: function onChange() {
        return props.setAttributes({
          enableBreakpoints: !enableBreakpoints
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Default Options", 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      className: "components-base-control",
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: defaultSlideNumber,
      onChange: function onChange(value) {
        return props.setAttributes({
          defaultSlideNumber: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      className: "components-base-control",
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: defaultSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          defaultSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Slide Effect', 'tws-blockfilter'),
      labelPosition: "top",
      value: slideEffect,
      options: _controller_props__WEBPACK_IMPORTED_MODULE_1__["sliderEffects"],
      onChange: function onChange(value) {
        return props.setAttributes({
          slideEffect: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Wrapper Element",
      value: wrapperElement || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          wrapperElement: value
        });
      },
      help: __('The wrapper element is an element that contains one or more slides. Best used with WordPress Columns Block.', 'tws-blockfilter')
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Slide Element",
      value: slideElement || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          slideElement: value
        });
      },
      help: __("The slide element is an element that will be a single slide container. Best used with WordPress Columns' column Block.", "tws-blockfilter")
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__remove-wrapper-class tws-blockfilter__toggle-inner",
      label: __('Remove default wrapper class', 'tws-blockfilter'),
      help: removeWrapperClass ? __('Removes given classes from the slider wrapper element in PanelBody "Remove Wrapper Class"', 'tws-blockfilter') : __('Does not remove any class', 'tws-blockfilter'),
      checked: removeWrapperClass,
      onChange: function onChange() {
        return props.setAttributes({
          removeWrapperClass: !removeWrapperClass
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__remove-slide-class tws-blockfilter__toggle-inner",
      label: __('Remove default slide class', 'tws-blockfilter'),
      help: removeSlideClass ? __('Removes given classes from the slider each slide element in PanelBody "Remove Slides Class"', 'tws-blockfilter') : __('Does not remove any class', 'tws-blockfilter'),
      checked: removeSlideClass,
      onChange: function onChange() {
        return props.setAttributes({
          removeSlideClass: !removeSlideClass
        });
      }
    }))), sliderEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, removeWrapperClass && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Remove Wrapper Class', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      value: wrapperClassNameToRemove || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          wrapperClassNameToRemove: value
        });
      },
      help: __('Enter default classnames applied to slides wrapper element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')
    })), removeSlideClass && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Remove Slide Class', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      value: slideClassNameToRemove || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          slideClassNameToRemove: value
        });
      },
      help: __('Enter default classnames applied to each slide element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')
    })), enableBullets && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Bullet Options', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",
      label: __('Make Bullet Clickable', 'tws-blockfilter'),
      help: bulletClickable ? __('Clicking bullet will change slide', 'tws-blockfilter') : __("Clicking bullet won't change slide", "tws-blockfilter"),
      checked: bulletClickable,
      onChange: function onChange() {
        return props.setAttributes({
          bulletClickable: !bulletClickable
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner",
      label: __('Make Bullets Dynamic', 'tws-blockfilter'),
      help: bulletDynamic ? __('Keep only few bullets visible', 'tws-blockfilter') : __("Keep all bullets visible", "tws-blockfilter"),
      checked: bulletDynamic,
      onChange: function onChange() {
        return props.setAttributes({
          bulletDynamic: !bulletDynamic
        });
      }
    }), !bulletDynamic && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: __('Enter render callback for bullets separated by comma. The number of values enter here must match the total number of slides.', 'tws-blockfilter'),
      value: bulletRender || '',
      onChange: function onChange(value) {
        return props.setAttributes({
          bulletRender: value
        });
      }
    })), enableBreakpoints && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Slider Breakpoints', 'tws-blockfilter'),
      initialOpen: false,
      className: "tws-slider-carousel__panelBody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-first-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable first breakpoint', 'tws-blockfilter'),
      help: __('(mobile device portrait)', 'tws-blockfilter'),
      checked: enableOneBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableOneBreakpoint: !enableOneBreakpoint
        });
      }
    }), enableOneBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakOnePixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOnePixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakOneSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOneSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakOneSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakOneSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakOneEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter"),
      checked: breakOneEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakOneEnabled: !breakOneEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-second-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable second breakpoint', 'tws-blockfilter'),
      help: __('(Mobile device ladscape/phablet)', 'tws-blockfilter'),
      checked: enableTwoBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableTwoBreakpoint: !enableTwoBreakpoint
        });
      }
    }), enableTwoBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakTwoPixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoPixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakTwoSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 8,
      labelPosition: "top",
      step: 2,
      value: breakTwoSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakTwoSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakTwoEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter"),
      checked: breakTwoEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakTwoEnabled: !breakTwoEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-third-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable third breakpoint', 'tws-blockfilter'),
      help: __('(tablet portrait)', 'tws-blockfilter'),
      checked: enableThreeBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableThreeBreakpoint: !enableThreeBreakpoint
        });
      }
    }), enableThreeBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakThreePixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreePixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakThreeSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreeSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 3,
      labelPosition: "top",
      step: 1,
      value: breakThreeSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakThreeSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakThreeEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter"),
      checked: breakThreeEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakThreeEnabled: !breakThreeEnabled
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-four-breakpoint tws-blockfilter__toggle-inner",
      label: __('Enable forth breakpoint', 'tws-blockfilter'),
      help: __('(Tablet landspace/laptop)', 'tws-blockfilter'),
      checked: enableFourBreakpoint,
      onChange: function onChange() {
        return props.setAttributes({
          enableFourBreakpoint: !enableFourBreakpoint
        });
      }
    }), enableFourBreakpoint && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Panel, {
      className: "tws-slider-carousel__panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Enter window width (in px)', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 10,
      labelPosition: "top",
      isShiftStepEnabled: true,
      step: 5,
      shiftStep: 50,
      value: breakFourPixels,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourPixels: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Number of slides to show', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 1,
      labelPosition: "top",
      step: 1,
      value: breakFourSlides,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourSlides: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: __('Gap (margins) between slides', 'tws-blockfilter'),
      dragDirection: "e",
      dragThreshold: 8,
      labelPosition: "top",
      step: 2,
      value: breakFourSpace,
      onChange: function onChange(value) {
        return props.setAttributes({
          breakFourSpace: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ToggleControl, {
      className: "tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2",
      label: __('Enable interactions', 'tws-blockfilter'),
      help: breakFourEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter"),
      checked: breakFourEnabled,
      onChange: function onChange() {
        return props.setAttributes({
          breakFourEnabled: !breakFourEnabled
        });
      }
    }))))));
  };
}, "withSliderCarouselControls"));

/***/ }),

/***/ "./src/filters/slider/view/save.js":
/*!*****************************************!*\
  !*** ./src/filters/slider/view/save.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/props */ "./src/filters/slider/controller/props.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter\Slider_Carousel
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */

var _lodash = lodash,
    assign = _lodash.assign;
/**
 * Adds data attributes for slider carousel containers.
 *
 * @param {object} props Props of save element.
 * @param {object} blockType Block type information.
 * @param {object} attributes Attributes of block.
 *
 * @returns {object} The modified container properties.
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props, blockType, attributes) {
  // Bail early if not slider Carousel container.
  if (!_controller_props__WEBPACK_IMPORTED_MODULE_1__["eligibleBlocks"].includes(blockType.name)) {
    return props;
  }

  var sliderEnabled = attributes.sliderEnabled,
      defaultEnabled = attributes.defaultEnabled,
      defaultSlideNumber = attributes.defaultSlideNumber,
      defaultSpace = attributes.defaultSpace,
      wrapperElement = attributes.wrapperElement,
      slideElement = attributes.slideElement,
      slideEffect = attributes.slideEffect,
      removeWrapperClass = attributes.removeWrapperClass,
      removeSlideClass = attributes.removeSlideClass,
      wrapperClassNameToRemove = attributes.wrapperClassNameToRemove,
      slideClassNameToRemove = attributes.slideClassNameToRemove,
      enableInteraction = attributes.enableInteraction,
      enableBullets = attributes.enableBullets,
      bulletClickable = attributes.bulletClickable,
      bulletDynamic = attributes.bulletDynamic,
      bulletRender = attributes.bulletRender,
      enableArrows = attributes.enableArrows,
      enableBreakpoints = attributes.enableBreakpoints,
      enableOneBreakpoint = attributes.enableOneBreakpoint,
      breakOnePixels = attributes.breakOnePixels,
      breakOneSlides = attributes.breakOneSlides,
      breakOneSpace = attributes.breakOneSpace,
      breakOneEnabled = attributes.breakOneEnabled,
      enableTwoBreakpoint = attributes.enableTwoBreakpoint,
      breakTwoPixels = attributes.breakTwoPixels,
      breakTwoSlides = attributes.breakTwoSlides,
      breakTwoSpace = attributes.breakTwoSpace,
      breakTwoEnabled = attributes.breakTwoEnabled,
      enableThreeBreakpoint = attributes.enableThreeBreakpoint,
      breakThreePixels = attributes.breakThreePixels,
      breakThreeSlides = attributes.breakThreeSlides,
      breakThreeSpace = attributes.breakThreeSpace,
      breakThreeEnabled = attributes.breakThreeEnabled,
      enableFourBreakpoint = attributes.enableFourBreakpoint,
      breakFourPixels = attributes.breakFourPixels,
      breakFourSlides = attributes.breakFourSlides,
      breakFourSpace = attributes.breakFourSpace,
      breakFourEnabled = attributes.breakFourEnabled;
  var $defaults = {
    enabled: defaultEnabled,
    slidesPerView: defaultSlideNumber,
    spaceBetween: defaultSpace,
    allowTouchMove: enableInteraction,
    effect: slideEffect
  },
      $removeWrapper = removeWrapperClass ? wrapperClassNameToRemove : '',
      $removeSlide = removeSlideClass ? slideClassNameToRemove : '',
      $bulletOptions = sliderEnabled ? {
    enabled: enableBullets,
    clickable: bulletClickable,
    render: bulletDynamic ? '' : bulletRender,
    dynamicBullets: bulletDynamic
  } : {},
      $one = {
    slidesPerView: breakOneEnabled ? breakOneSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakOneSpace,
    enabled: breakOneEnabled
  },
      $two = {
    slidesPerView: breakTwoEnabled ? breakTwoSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakTwoSpace,
    enabled: breakTwoEnabled
  },
      $three = {
    slidesPerView: breakThreeEnabled ? breakThreeSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakThreeSpace,
    enabled: breakThreeEnabled
  },
      $four = {
    slidesPerView: breakFourEnabled ? breakFourSlides : 9999,
    // prevent stuck on transform.
    spaceBetween: breakFourSpace,
    enabled: breakFourEnabled
  },
      $breakpoints = {};

  if (enableBreakpoints) {
    if (enableOneBreakpoint) {
      $breakpoints[breakOnePixels] = $one;
    }

    if (enableTwoBreakpoint) {
      $breakpoints[breakTwoPixels] = $two;
    }

    if (enableThreeBreakpoint) {
      $breakpoints[breakThreePixels] = $three;
    }

    if (enableFourBreakpoint) {
      $breakpoints[breakFourPixels] = $four;
    }
  }

  assign(props, _objectSpread({}, sliderEnabled && {
    'className': "".concat(props.className, " tws-block__sliderCarousel"),
    'data-sliderdefault': JSON.stringify($defaults),
    'data-wrapper': wrapperElement,
    'data-slide': slideElement,
    'data-wrapperclass': $removeWrapper,
    'data-slideclass': $removeSlide,
    'data-bulletcontrol': JSON.stringify($bulletOptions),
    'data-arrowcontrol': enableArrows,
    'data-breakpoints': JSON.stringify($breakpoints)
  })); // Get the above applied data in browser console.
  // console.log(props);

  return props;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter
 *
 * -----------------------------------
 * DEVELOPED-MAINTAINED-SUPPPORTED BY
 * -----------------------------------
 * ███║     ███╗   ████████████████
 * ███║     ███║   ═════════██████╗
 * ███║     ███║        ╔══█████═╝
 *  ████████████║      ╚═█████
 * ███║═════███║      █████╗
 * ███║     ███║    █████═╝
 * ███║     ███║   ████████████████╗
 * ╚═╝      ╚═╝    ═══════════════╝
 */

/**
 * Gets all filters `index.js` files and imports them.
 *
 * @param {function} request function `webpackContext()` to request
 *                           all `index.js` file found inside `src/filters` directory.
 */
function importAll(request) {
  request.keys().forEach(request);
} // Modified blocks using filters.


importAll(__webpack_require__("./src/filters sync recursive index\\.js$"));

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map