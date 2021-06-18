/* eslint-disable no-throw-literal */
/**
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

import { hasContent, toArray, isValidString } from './component';
import { addBreakpointClasses, createArrows, createBullets, setBullets, createSlider } from './slider';

/**
 * Localized arrow contents indexed by slider container ID and array of arrrow render contents.
 */
const { bullets } = twsSliderCarousel;

/**
 * Prepare slider options from data attribute of the block.
 *
 * @param  {Element} block          The block where slider is applied.
 * @param  {Element} container      The block inner container class which will
 *                                  actually be the slider container.
 * @param  {string}  containerClass The unique classname for the container.
 * @throws {Error}
 */
export default (block, container, containerClass) => {
  // Get slider wrapper.
  let $sliderId = block.dataset.sliderid,
    $wrapper = block.dataset.wrapper,
    $wrapperEl = container.querySelector($wrapper),
    $msgPrefix = `Inside slider container with unique class "${containerClass}", `;

  // Case where invalid wrapper element given.
  if ($wrapperEl === null) {
    throw new Error(`${$msgPrefix}wrapper element "${$wrapper}" not found.`);
  }

  // Get other slider data.
  let $slide = block.dataset.slide,
    $wrapperClass = block.dataset.wrapperclass,
    $slideClass = block.dataset.slideclass,
    $bullet = JSON.parse(block.dataset.bulletcontrol),
    $bulletRender = toArray($bullet.render, ','),
    $arrow = JSON.parse(block.dataset.arrowcontrol),
    $breakpoints = JSON.parse(block.dataset.breakpoints);

  // WordPress filter applied and custom bullet content exists, use those.
  if (Array.isArray(bullets[$sliderId])) {
    $bulletRender = bullets[$sliderId];
  }

  // Start preparing slider carousel options.
  const sliderOptions = JSON.parse(block.dataset.sliderdefault);

  if (Object.keys($breakpoints).length > 0) {
    sliderOptions.breakpoints = $breakpoints;
  }

  let $wrapperTag = $wrapperEl.tagName.toLowerCase(),
    $wrapperClassList = toArray($wrapperClass, ' '),
    $slideCount = $wrapperEl.children.length,
    $slideNumber = 0,
    $noWrapperClassMsg = `${$msgPrefix}slider wrapper element "<${$wrapperTag}>" for which "${$wrapperClass}" class(es) is set for removal doesn't exist.`;

  try {
    // Case where slider has less than 2 slides.
    if ($slideCount < 2) {
      throw `${$msgPrefix}there must be atleast 2 slide elements inside the wrapper element to initialize the slider.`;
    }

    if ($arrow.enabled) {
      let $arrowIdPrev = `slider__${$sliderId}--prev`,
        $arrowIdNext = `slider__${$sliderId}--next`;

      createArrows(container, $arrowIdPrev, $arrowIdNext);

      sliderOptions.navigation = {
        prevEl: `#${$arrowIdPrev}`,
        nextEl: `#${$arrowIdNext}`
      };
    }

    addBreakpointClasses(container, $breakpoints);

    // Case where default slider wrapper class is to be removed.
    if (hasContent($wrapperClassList, $noWrapperClassMsg, false, $wrapperEl.classList)) {
      $wrapperEl.classList.remove(...$wrapperClassList);
    }

    // Add the slider wrapper class.
    $wrapperEl.classList.add('swiper-wrapper', 'tws-sliderCarousel__wrapper');

    if ($bullet.enabled) {
      let $bulletId = `slider__${$sliderId}--bullets`,
        $hasCustomBullet = $bulletRender.length > 0,
        $invalidBulletMsg = `${$msgPrefix}bullets can't be rendered from the given value. There must be exactly "${$slideCount}" non-empty string values separated by comma, one for each slide.`;

      // Case where bullet rendering was given but not equal to number of slides.
      if ($hasCustomBullet && $bulletRender.length !== $slideCount) {
        throw $invalidBulletMsg;
      }

      createBullets(container, $bulletId, $hasCustomBullet);

      sliderOptions.pagination = {
        el: `#${$bulletId}`,
        clickable: $bullet.clickable,
        dynamicBullets: $bullet.dynamicBullets,
        ...(hasContent($bulletRender, $invalidBulletMsg) && {
          renderBullet: (index, className) => setBullets($bulletRender, $slideCount, index, className)
        })
      };
    }

    // Add slider ID to the slider container to make it a unique swiper instance.
    container.setAttribute('id', `slider__${$sliderId}`);
  } catch (error) {
    throw new Error(error);
  }

  let $wrapperChildNodes = $wrapperEl.childNodes,
    $slideClassList = toArray($slideClass, ' '),
    $getSlide = toArray($slide, '.'); // eg: "div.wp-block-column" => ['div', 'wp-block-column].

  // Iterate over all child nodes of the slider wrapper to get the slides.
  for (let slide = 0; slide < $wrapperChildNodes.length; slide++) {
    $slideNumber = slide + 1;
    let $slideNode = $wrapperChildNodes[slide];

    // Ignore elements that has no tag.
    // Eg. this can happen in <ul><li></li></ul> element.
    if (typeof $slideNode.tagName === 'undefined') {
      continue;
    }

    let $nodeTag = $slideNode.tagName.toLowerCase(),
      $noSlideClassMsg = `${$msgPrefix}slide element "<${$nodeTag}>" for which "${$slideClass}" class(es) is set for removal doesn't exist.`;

    try {
      // Case where slide element tag does not match.
      if ($getSlide[0] !== $nodeTag) {
        throw `${$msgPrefix}the slide elements do not match. Element set on slider option is "<${$getSlide[0]}>" but "<${$nodeTag}>" found.`;
      }

      // An info message if slide is empty.
      if (!isValidString($slideNode.innerHTML)) {
        console.info(`${$msgPrefix}slide number "${$slideNumber}" has no content. Is that on purpose?`);
      }

      // Case where default slide class is to be removed.
      if (hasContent($slideClassList, $noSlideClassMsg, false, $slideNode.classList)) {
        $slideNode.classList.remove(...$slideClassList);
      }

      // Add the slide class.
      $slideNode.classList.add('swiper-slide');
    } catch (error) {
      throw new Error(error);
    }
  }

  try {
    createSlider(`.${containerClass}`, sliderOptions);
  } catch (error) {
    throw new Error(error);
  }
};
