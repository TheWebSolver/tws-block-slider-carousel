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

const { __ } = wp.i18n;

/**
 * WordPress core blocks which can be used as slider carousel.
 *
 * The blocks are imported from localized script.
 *
 * @see tws_bfsc_init()
 * @filesource tws-blocks-slider-carousel\tws-block-slider-carousel.php
 */
export const eligibleBlocks = twsSliderCarousel.blocks;

/**
 * Various slider effects.
 */
export const sliderEffects = [
  {
    label: __('Slide', 'tws-blockfilter'),
    value: 'slide'
  },
  {
    label: __('Fade', 'tws-blockfilter'),
    value: 'fade'
  },
  {
    label: __('Cube', 'tws-blockfilter'),
    value: 'cube'
  },
  {
    label: __('Cover Flow', 'tws-blockfilter'),
    value: 'coverflow'
  },
  {
    label: __('Flip', 'tws-blockfilter'),
    value: 'flip'
  }
];

/**
 * New attributes to assign to containers defined in "eligibleBlocks".
 */
export const sliderCarouselAttributes = {
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
  slideDirection: {
    type: 'string',
    default: 'horizontal'
  },
  loopSlides: {
    type: 'boolean',
    default: false
  },
  autoHeight: {
    type: 'boolean',
    default: false
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
