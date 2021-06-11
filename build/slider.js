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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
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
 * Supported WordPress blocks for creating slider instance.
 *
 * @type {object}
 */
var SliderElements = twsSliderCarousel.containers;
/**
 * Creates a swiper instance.
 *
 * @param {string} instance The swiper main container class.
 * @param {object} options The swiper options.
 */

var createSlider = function createSlider(instance, options) {
  new Swiper(instance, options);
};
/**
 * Creates navigation bullets for the slider.
 *
 * @param {Element} container The slider container element.
 * @param {string} bulletId   The bullet ID.
 */


var createBullets = function createBullets(container, bulletId) {
  var $element = document.createElement('div');
  $element.setAttribute('id', bulletId);
  $element.setAttribute('class', 'tws-sliderCarousel__bullets swiper-pagination');
  container.classList.add('tws-sliderCarousel__with-bullets');
  container.append($element);
};
/**
 * Creates navigation arrows for the slider.
 *
 * @param {Element} container The slider container element.
 * @param {string} prev The button ID for previous slide.
 * @param {string} next The button ID for next slide.
 */


var createArrows = function createArrows(container, prev, next) {
  var $prevBtn = document.createElement('span'),
      $nextBtn = document.createElement('span');
  $prevBtn.setAttribute('id', prev);
  $prevBtn.setAttribute('class', 'tws-sliderCarousel__arrow arrow--prev swiper-navigation');
  $nextBtn.setAttribute('id', next);
  $nextBtn.setAttribute('class', 'tws-sliderCarousel__arrow arrow--next swiper-navigation');
  container.classList.add('tws-sliderCarousel__with-arrows');
  container.append($prevBtn);
  container.append($nextBtn);
};
/**
 * Checks if given array has non-empy value.
 *
 * @param {string[]} value The array to check if any value is empty.
 * @returns {boolean} True if array has non-empty values, false otherwise.
 */


var hasContent = function hasContent(value) {
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "") return false;
  }

  return true;
};
/**
 * Adds class by responsive enabled per breakpoint.
 *
 * @param {string} container The slider container class.
 * @param {object} breakpoints The brekpoints data.
 */


var addBreakpointClasses = function addBreakpointClasses(container, breakpoints) {
  Object.entries(breakpoints).forEach(function (breakpoint) {
    var _breakpoint = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(breakpoint, 2),
        Pixel = _breakpoint[0],
        Responsive = _breakpoint[1];

    container.classList.add(Responsive.enabled ? "isEnabled__".concat(Pixel) : "isDisabled__".concat(Pixel));
  });
};
/**
 * Prepare slider options from data attribute of the block.
 *
 * @param {Element} block      The block where slider is applied.
 * @param {Element} container  The block inner container class which will
 *                            actually be the slider container.
 * @throws {Error}
 */


var prepareData = function prepareData(block, container, containerClass) {
  // Get slider wrapper.
  var $wrapper = block.dataset.wrapper,
      $wrapperEl = container.querySelector($wrapper),
      $slideCount = $wrapperEl.children.length; // Bail if slide count is less than two.

  if ($slideCount < 2) {
    throw new Error('There must be atleast 2 slide elements inside the wrapper element to initialize the slider.');
  } // Get other slider data.


  var $slide = block.dataset.slide,
      $wrapperClass = block.dataset.wrapperclass,
      $slideClass = block.dataset.slideclass,
      $bullet = JSON.parse(block.dataset.bulletcontrol),
      $bulletRender = [],
      $arrow = JSON.parse(block.dataset.arrowcontrol),
      $breakpoints = JSON.parse(block.dataset.breakpoints);

  if (typeof $bullet.render === 'string') {
    $bulletRender = $bullet.render.split(',').map(function (item) {
      return item.trim();
    });
  } // Start preparing slider carousel options.


  var sliderOptions = JSON.parse(block.dataset.sliderdefault);

  if (Object.keys($breakpoints).length > 0) {
    sliderOptions['breakpoints'] = $breakpoints;
  }

  if ($bullet.enabled) {
    var $bulletId = "".concat(containerClass, "--bullets");
    createBullets(container, $bulletId);
    sliderOptions['pagination'] = _objectSpread({
      el: "#".concat($bulletId),
      clickable: $bullet.clickable,
      dynamicBullets: $bullet.dynamicBullets
    }, hasContent($bulletRender) && {
      renderBullet: function renderBullet(index, className) {
        // Given bullet content is not equal to number of slides, rendering is not possible.
        var $bulletContent = $bulletRender.length === $slideCount ? $bulletRender[index] : '';
        return '<span class="' + className + '">' + $bulletContent + '</span>';
      }
    });
  }

  if ($arrow.enabled) {
    var $arrowIdNext = "".concat(containerClass, "--next"),
        $arrowIdPrev = "".concat(containerClass, "--prev");
    createArrows(container, $arrowIdNext, $arrowIdPrev);
    sliderOptions['navigation'] = {
      nextEl: "#".concat($arrowIdNext),
      prevEl: "#".concat($arrowIdPrev)
    };
  }

  addBreakpointClasses(container, $breakpoints); // Remove default class (if given), add swiperjs classes to wrapper and slides.

  var $wrapperChildNodes = $wrapperEl.childNodes,
      $slideNumber = 0; // Add the slider wrapper class.

  $wrapperEl.classList.add('swiper-wrapper'); // Remove default applied class to slider wrapper, if given.

  try {
    if (typeof $wrapperClass === 'string' && $wrapperEl.classList.contains($wrapperClass)) {
      $wrapperEl.classList.remove($wrapperClass);
    }
  } catch (error) {
    // Not a big issue, just notify on console if something goes wrong.
    console.error(error);
  } // Iterate over all child nodes of the slider wrapper to get the slides.


  for (var slide = 0; slide < $wrapperChildNodes.length; slide++) {
    $slideNumber = slide + 1;
    var $sliderSlide = $wrapperChildNodes[slide],
        $slideClasses = $sliderSlide.className; // Ignore elements that has no classes applied.

    if (typeof $slideClasses === 'undefined') {
      continue;
    }

    var $slideTag = $sliderSlide.tagName.toLowerCase(),
        $slideName = "".concat($slideTag, ".").concat($slideClasses); // Ignore elements that are not slides.

    if (!$slideName.includes($slide)) {
      continue;
    } // An info message if slide is empty.


    if ($sliderSlide.innerHTML === '') {
      console.info("The container with classname \"".concat(containerClass, "\" has slide \"").concat($slideNumber, "\" with no content. Is it on purpose?"));
    } // Add the slide class.


    $sliderSlide.classList.add('swiper-slide'); // Remove default applied class to the slides, if given.

    try {
      if (typeof $slideClass === 'string' && $sliderSlide.className.includes($slideClass)) {
        $sliderSlide.classList.remove($slideClass);
      }
    } catch (error) {
      // Not a big issue, just notify on console if something goes wrong.
      console.error(error);
    }
  }

  createSlider(".".concat(containerClass), sliderOptions);
};
/**
 * Check if slider carousel block elements is an array.
 * Iterate over slider carousel blocks and initialize slider creation.
 */


if (Array.isArray(SliderElements)) {
  var $blockIndex = 0,
      $innerIndex = 0; // Iterate over all block elements to inject slider classes.

  SliderElements.forEach(function (container, index) {
    $blockIndex = index + 1; // Elements' classes passed from localized script.

    var $blockElement = document.getElementsByClassName(container.parent),
        $blockChildClass = container.child;

    for (var block = 0; block < $blockElement.length; block++) {
      $innerIndex = block + 1; // Verify that given block is enabled as a slider carousel.

      if ($blockElement[block].classList.contains('tws-block__sliderCarousel')) {
        // Define new classes by the number of blocks enabled for slider carousel.
        var $blockClass = "tws-sliderCarousel--container__".concat($blockIndex, "--instance__").concat($innerIndex),
            $innerClass = "tws-sliderCarousel__".concat($blockIndex, "--instance__").concat($innerIndex); // The block element must have only one inner element.
        // This inner element will be the main container for slider carousel.

        if (1 !== $blockElement[block].children.length) {
          console.error("The block element with classname \"".concat($blockClass, "\" does not have any inner HTML element to instantiate the slider. Use block that creates an inner container like WordPress default \"group\" block."));
          continue;
        } // Get the inner element of the block element to apply class to.


        var $innerElement = $blockElement[block].children[0];

        if (!$innerElement.classList.contains($blockChildClass)) {
          console.error("The block element with classname \"".concat(container.parent, "\" does not have inner container element with classname as \"").concat($blockChildClass, "\". Slider can't be initialized. These are passed inside function \"tws_bfsc_get_elements()\". If filter is used to modify it, make sure the returned elements are valid."));
          continue;
        }

        try {
          $blockElement[block].classList.add($blockClass);
          $innerElement.classList.add($innerClass);
          prepareData($blockElement[block], $innerElement, $innerClass);
        } catch (error) {
          if (error.name === 'TypeError') {
            console.error("The block element with classname \"".concat($blockClass, "\" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class=\"wp-block-columns\"><div class=\"wp-block-column\"></div><div class=\"wp-block-column\"></div></div>"));
          }

          if (error.name === 'Error') {
            console.error(error.message);
          }
        }
      }
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=slider.js.map