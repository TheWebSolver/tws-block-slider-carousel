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

import { eligibleBlocks } from '../controller/props';

const { assign } = lodash;

/**
 * Adds data attributes for slider carousel containers.
 *
 * @param {object} props Props of save element.
 * @param {object} blockType Block type information.
 * @param {object} attributes Attributes of block.
 *
 * @returns {object} The modified container properties.
 */
export default (props, blockType, attributes) => {
  // Bail early if not slider Carousel container.
  if (!eligibleBlocks.includes(blockType.name)) {
    return props;
  }

  const {
    sliderEnabled,
    defaultEnabled,
    defaultSlideNumber,
    defaultSpace,
    wrapperElement,
    slideElement,
    slideEffect,
    slideDirection,
    loopSlides,
    autoHeight,
    removeWrapperClass,
    removeSlideClass,
    wrapperClassNameToRemove,
    slideClassNameToRemove,
    enableInteraction,
    enableBullets,
    bulletClickable,
    bulletDynamic,
    bulletRender,
    enableArrows,
    enableBreakpoints,
    enableOneBreakpoint,
    breakOnePixels,
    breakOneSlides,
    breakOneSpace,
    breakOneEnabled,
    enableTwoBreakpoint,
    breakTwoPixels,
    breakTwoSlides,
    breakTwoSpace,
    breakTwoEnabled,
    enableThreeBreakpoint,
    breakThreePixels,
    breakThreeSlides,
    breakThreeSpace,
    breakThreeEnabled,
    enableFourBreakpoint,
    breakFourPixels,
    breakFourSlides,
    breakFourSpace,
    breakFourEnabled
  } = attributes;

  let $defaults = {
      enabled: defaultEnabled,
      slidesPerView: defaultSlideNumber,
      spaceBetween: defaultSpace,
      allowTouchMove: enableInteraction,
      effect: slideEffect,
      direction: slideDirection,
      loop: loopSlides,
      autoHeight: autoHeight
    },
    $removeWrapper = removeWrapperClass ? wrapperClassNameToRemove : '',
    $removeSlide = removeSlideClass ? slideClassNameToRemove : '',
    $bulletOptions = sliderEnabled
      ? {
        enabled: enableBullets,
        clickable: bulletClickable,
        render: bulletDynamic ? '' : bulletRender,
        dynamicBullets: bulletDynamic
      }
      : {},
    $arrowOptions = sliderEnabled
      ? {
        enabled: enableArrows
      }
      : {},
    $one = {
      slidesPerView: breakOneEnabled ? breakOneSlides : 9999, // prevent stuck on transform.
      spaceBetween: breakOneSpace,
      enabled: breakOneEnabled
    },
    $two = {
      slidesPerView: breakTwoEnabled ? breakTwoSlides : 9999, // prevent stuck on transform.
      spaceBetween: breakTwoSpace,
      enabled: breakTwoEnabled
    },
    $three = {
      slidesPerView: breakThreeEnabled ? breakThreeSlides : 9999, // prevent stuck on transform.
      spaceBetween: breakThreeSpace,
      enabled: breakThreeEnabled
    },
    $four = {
      slidesPerView: breakFourEnabled ? breakFourSlides : 9999, // prevent stuck on transform.
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

  assign(props, {
    ...(sliderEnabled && {
      className: `${props.className} tws-block__sliderCarousel`,
      'data-sliderdefault': JSON.stringify($defaults),
      'data-wrapper': wrapperElement,
      'data-slide': slideElement,
      'data-wrapperclass': $removeWrapper,
      'data-slideclass': $removeSlide,
      'data-bulletcontrol': JSON.stringify($bulletOptions),
      'data-arrowcontrol': JSON.stringify($arrowOptions),
      'data-breakpoints': JSON.stringify($breakpoints)
    })
  });

  // Get the above applied data in browser console.
  // console.log(props);

  return props;
};
