/* eslint-disable no-throw-literal */
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
 * Localized slider data.
 */
const { containers, arrows, bullets } = twsSliderCarousel;

/**
 * Creates a swiper instance.
 *
 * @param {string} instance The swiper main container class.
 * @param {object} options  The swiper options.
 */
const createSlider = (instance, options) => {
  new Swiper(instance, options); // eslint-disable-line  no-new
};

/**
 * Creates navigation bullets for the slider.
 *
 * @param {Element}  container  The slider container element.
 * @param {string}   bulletId   The bullet ID.
 * @param {boolean}  hasRender  Whether bullet has custom content to render.
 * @returns {object}            The bullets node object.
 */
const createBullets = (container, bulletId, hasRender) => {
  let $element = document.createElement('div');

  $element.setAttribute('id', bulletId);
  $element.setAttribute('class', 'tws-sliderCarousel__bullets swiper-pagination');

  if (hasRender) {
    $element.classList.add('has-render-content');
  }

  container.classList.add('tws-sliderCarousel__with-bullets');

  return container.appendChild($element);
};

/**
 * Sets contents to display instead of just bullets.
 *
 * @param {string[]} options   Bullets render options.
 * @param {number}   count     Total number of slides.
 * @param {number}   index     The current bullet position.
 * @param {string}   className The current bullet class name.
 * @returns {string}           HTML output with `span` tag for rendering bullet.
 */
const setBullets = (options, count, index, className) => {
  let $bulletContent = options.length === count ? options[index] : '',
    $bulletCount = index + 1;

  return `<span class="${className} bullet__${$bulletCount}">${$bulletContent}</span>`;
};

/**
 * Creates navigation arrows for the slider.
 * @param {Element}  container The slider container element.
 * @param {string}   prev      The button ID for previous slide.
 * @param {string}   next      The button ID for next slide.
 * @returns {object}           The appended prev/next arrow DOM objects.
 */
const createArrows = (container, prev, next) => {
  let $prevBtn = document.createElement('span'),
    $nextBtn = document.createElement('span');

  $prevBtn.setAttribute('id', prev);
  $prevBtn.setAttribute('class', 'tws-sliderCarousel__arrow prev swiper-navigation');
  $prevBtn.innerHTML = arrows.prev;
  $nextBtn.setAttribute('id', next);
  $nextBtn.setAttribute('class', 'tws-sliderCarousel__arrow next swiper-navigation');
  $nextBtn.innerHTML = arrows.next;

  container.classList.add('tws-sliderCarousel__with-arrows');

  return {
    prev: container.appendChild($prevBtn),
    next: container.appendChild($nextBtn)
  };
};

/**
 * Checks if given thing is a non-empty string.
 *
 * @param   {any}     thing The thing to check for.
 * @returns {boolean}       True if is a non-empty string, false otherwise.
 */
const isValidString = thing => {
  return typeof thing === 'string' && thing !== '';
};

/**
 * Checks if given list has all values.
 *
 * @param   {string[]}              list   The list to check all `values` param against.
 * @param   {string}                error  Error message to throw. Defaults to an empty `string`.
 * @param   {boolean}               strict Check whether list is valid.
 *                                         Defaults to `false` (won't check the list length).
 * @param   {string[]|DOMTokenList} values The values to check. If not passed, `list` will be used.
 * @returns {boolean}                      True if list has all values (or list is an empty array), false otherwise.
 *
 * @throws Error message if `value` is not valid string or all `values` is not present inside the `list`.
 */
const hasContent = (list, error = '', strict = false, values = []) => {
  // Given list is not an array, throw error message.
  if (!Array.isArray(list)) throw 'The given list is not an array.';

  let $isValidContent = list.every((value, index, listAsValues) => {
    if (isValidString(error) && !isValidString(value)) throw error;

    let $values = Array.isArray(values) && values.length === 0 ? listAsValues : values;

    return values instanceof Array ? $values.includes(value) : $values.contains(value);
  });

  // Error message given and list is not valid, throw error message.
  if (isValidString(error) && !$isValidContent) throw error;

  // Strict check enabled, error message given and list has no content, throw error message.
  if (strict && isValidString(error) && list.length === 0) throw error;

  return $isValidContent;
};

/**
 * Converts given string to an array.
 *
 * @param   {string}   thing     The thing to be converted.
 * @param   {string}   separator The separator between the thing (space, comma, etc).
 * @returns {string[]}           Values in an array, empty array if invalid string.
 */
const toArray = (thing, separator) => {
  if (!isValidString(thing)) {
    return [];
  }

  return thing.split(separator).map(item => item.trim());
};

/**
 * Adds responsive enabled/disabled classes to slider container.
 *
 * @param {string} container   The slider container class.
 * @param {object} breakpoints The brekpoints data.
 */
const addBreakpointClasses = (container, breakpoints) => {
  Object.entries(breakpoints).forEach(breakpoint => {
    const [Pixel, Responsive] = breakpoint;
    container.classList.add(Responsive.enabled ? `isEnabled__${Pixel}` : `isDisabled__${Pixel}`);
  });
};

/**
 * Prepare slider options from data attribute of the block.
 *
 * @param {Element} block          The block where slider is applied.
 * @param {Element} container      The block inner container class which will
 *                                 actually be the slider container.
 * @param {string}  containerClass The unique classname for the container.
 * @throws {Error}
 */
const prepareData = (block, container, containerClass) => {
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

/**
 * Check if slider carousel block elements is an array.
 * Iterate over slider carousel blocks and initialize slider creation.
 */
if (Array.isArray(containers)) {
  let $blockIndex = 0,
    $innerIndex = 0;
  // Iterate over all block elements to inject slider classes.
  containers.forEach((container, index) => {
    $blockIndex = index + 1;
    // Elements' classes passed from localized script.
    let $blockElement = document.getElementsByClassName(container.parent),
      $blockChildClass = container.child;

    for (let block = 0; block < $blockElement.length; block++) {
      $innerIndex = block + 1;
      // Verify that given block is enabled as a slider carousel.
      if ($blockElement[block].classList.contains('tws-block__sliderCarousel')) {
        // Define new classes by the number of blocks enabled for slider carousel.
        let $blockClass = `tws-sliderCarousel--container__${$blockIndex}--instance__${$innerIndex}`,
          $innerClass = `tws-sliderCarousel__${$blockIndex}--instance__${$innerIndex}`;

        // Get the inner element of the block element to apply class to.
        let $innerElement = $blockElement[block].children[0];

        try {
          // Case where block element doesn't have only one inner element.
          // This inner element will be the main container for slider carousel.
          if ($blockElement[block].children.length !== 1) {
            throw new Error(
              `The block element with classname "${$blockClass}" must have exactly one inner HTML element to instantiate the slider. Use the block that creates an inner container like WordPress default "group" block. Total of "${$blockElement[block].children.length}" inner element(s) found.`
            );
          }

          // Case where inner element classname doesn't match with given block's child classname.
          if (
            hasContent(
              toArray($blockChildClass, ' '),
              `The block element with classname "${container.parent}" does not have inner container element with classname "${$blockChildClass}". Slider can't be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned element classes are valid.`,
              true,
              $innerElement.classList
            )
          ) {
            $blockElement[block].classList.add($blockClass);
            $innerElement.classList.add($innerClass);
            prepareData($blockElement[block], $innerElement, $innerClass);
          }
        } catch (error) {
          if (error instanceof TypeError) {
            console.error(
              `The block element with classname "${$blockClass}" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>`
            );
          }

          if (error instanceof Error) {
            console.error(error.message);
          } else {
            // Log the actual error too.
            console.error(error);
          }
        }
      }
    }
  });
}
