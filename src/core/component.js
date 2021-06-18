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

/**
 * Contents holder for slider's slide. Will be added conditionally.
 *
 * @type {string[]}
 */
export const slideInfoHolder = [];

/**
 * Gets the element in DOM.
 *
 * @param   {string} selector The DOM Element selector. Valid selectors are:
 *                            Element tagName, css id/class selectors (with `.`)
 * @returns {Node}            Node list of Elements.
 */
export const getNode = selector => {
  return document.querySelector(selector);
};

/**
 * Gets list of elements in DOM.
 *
 * @param   {string}   selector The DOM Element selector. Valid selectors are:
 *                              Element tagName, css id/class selectors (with `.`)
 * @returns {NodeList}          Node list of Elements.
 */
export const getNodes = selector => {
  return document.querySelectorAll(selector);
};

/**
 * Gets blocks that are converted to slider carousel.
 *
 * @returns {NodeList} Blocks that are converted to slider carousel.
 */
export const getSliders = () => {
  return getNodes('.tws-block__sliderCarousel');
};

/**
 * Checks if given thing is a non-empty string.
 *
 * @param   {any}     thing The thing to check for.
 * @returns {boolean}       True if is a non-empty string, false otherwise.
 */
export const isValidString = thing => {
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
 * @returns {boolean}                      True if list has all values (or list is an empty array),
 *                                         False otherwise.
 *
 * @throws Error message if `value` is not valid string or all `values` is not present inside the `list`.
 */
export const hasContent = (list, error = '', strict = false, values = []) => {
  // Given list is not an array, throw error message.
  if (!Array.isArray(list)) throw 'The given list is not an array.';

  let $isValidContent = list.every((value, index, listAsValues) => {
    if (isValidString(error) && !isValidString(value)) throw error;

    let $values = Array.isArray(values) && values.length === 0 ? listAsValues : values;

    return values instanceof Array ? $values.includes(value) : $values.contains(value);
  });

  // All values not found or strict enabled & list has no content, throw error message.
  if (isValidString(error)) {
    if (!$isValidContent || (strict && list.length === 0)) throw error;
  }

  return $isValidContent;
};

/**
 * Converts given string to an array.
 *
 * @param   {string}   thing     The thing to be converted.
 * @param   {string}   separator The separator between the thing (space, comma, etc).
 * @returns {string[]}           Values in an array, empty array if invalid string.
 */
export const toArray = (thing, separator) => {
  if (!isValidString(thing)) return [];

  return thing.split(separator).map(item => item.trim());
};

/**
 * Sets new classname to currently clicked element.
 *
 * @param {NodeList} selectors        DOM elements as selectors.
 * @param {number}   index            The currently clicked element index.
 * @param {string}   currentClassName The currently clicked element classname.
 *                                    Usually set to `current`.
 */
export const setCurrentElClassName = (selectors, index, currentClassName) => {
  for (let selector = 0; selector < selectors.length; selector++) {
    if (selector === index) {
      selectors[selector].classList.add(currentClassName);
      continue;
    }
    selectors[selector].classList.remove(currentClassName);
  }
};

/**
 * Gets the slider that has the id attribute set.
 *
 * @param   {string|DOMTokenList} selector The selector for the block converted to slider.
 *                                         - Either by selector as the slider block ID.
 *                                         - Or by selector that has id set in it's classlist.
 * @returns {object|Node}                  Node element if found, empty object otherwise.
 */
export const getSliderBlockWithId = selector => {
  let $sliders = getSliders(),
    $selected = {};

  for (let $slider = 0; $slider < $sliders.length; $slider++) {
    let $current = $sliders[$slider];

    if (selector instanceof DOMTokenList) {
      if (selector.contains($current.id)) {
        $selected = $current;

        break;
      }
    } else if (isValidString(selector)) {
      if (selector === $current.id) {
        $selected = $current;

        break;
      }
    }
  }

  return $selected;
};

/**
 * Gets the slider instance by id attribute.
 *
 * @param {string}               id The `id` attribute of the slider instance (without `#`).
 * @returns {Node|HTMLElement}    The swiper instance container, node object if not swiper.
 */
export const getSliderInstance = id => {
  let $node = getNode(`#${id}`);
  try {
    return $node.swiper;
  } catch (error) {
    return $node;
  }
};

/**
 * Sets classname to the currently clicked slide element.
 *
 * @param {object} slider           The slider instance.
 * @param {Node}   currentSlide     The currently clicked slide.
 * @param {string} currentClassName The clicked slide new classname to add.
 *                                  Usually set to `current`.
 */
export const setCurrentSlideClassName = (slider, currentSlide, currentClassName) => {
  slider.slides.forEach((slide, index) => {
    if (currentSlide.getAttribute('aria-label') === slide.getAttribute('aria-label')) {
      slide.classList.add(currentClassName);
    } else {
      slide.classList.remove(currentClassName);
    }
  });
};

/**
 * Creates an element where slider info will be shown when a slide is clicked.
 *
 * Following attributes will be added:
 * * class           -> The classname passed in param.
 * * data-slideindex -> 0
 *
 * @param   {string}         className The holder classname. Usually set to `slideDetails`.
 * @returns {HTMLDivElement}           The holder element with applied class and dataset.
 */
export const createInfoHolder = className => {
  let $holder = document.createElement('div');

  $holder.setAttribute('class', className);
  $holder.setAttribute('data-slideindex', 0);

  return $holder;
};

/**
 * Sets each slide additional contents to the holder and removes the child.
 *
 * @param   {object}   slider  The slider instance.
 * @param   {Function} getInfo The callback function returns slide info. Gets `slide` as param.
 * @returns {array}            The slider info holder with contents in an array.
 */
export const setSlidesAdditionalInfo = (slider, getInfo) => {
  slider.slides.forEach((slide, index) => {
    let $info = getInfo(slide);

    // Remove the info element if it is a DOM element inside each slide.
    if ($info instanceof Node) {
      try {
        slideInfoHolder[index] = slide.removeChild($info);
      } catch (error) {
        slideInfoHolder[index] = $info;

        console.warning(
          "It is assumed that holder got it's content from child element of the current slide. Then, tried to automatically remove that child element inside the slide but failed.",
          error
        );
      }
    } else {
      slideInfoHolder[index] = $info;
    }
  });

  return slideInfoHolder;
};

/**
 * Gets the holder with clicked slide additional content.
 *
 * @param   {HTMLDivElement} holder The info holder element.
 * @param   {number}         index  The currently selected slide index.
 * @returns {HTMLDivElement}        The holder with slide additional content.
 */
export const getHolderWithInfo = (holder, index) => {
  // Same slide clicked multiple times, toggle holder contents.
  // eslint-disable-next-line eqeqeq
  if (index == holder.dataset.slideindex) {
    if (holder.innerHTML === '') {
      holder.innerHTML = slideInfoHolder[index].innerHTML;
      holder.classList.add('hasContent', 'animate');
      requestAnimationFrame(() => holder.classList.remove('animate'));
    } else {
      holder.innerHTML = '';
      holder.classList.remove('hasContent');
    }
  } else {
    // Different slide clicked, set holder content from that slide.
    holder.innerHTML = slideInfoHolder[index].innerHTML;
    holder.classList.add('hasContent', 'animate');
    requestAnimationFrame(() => holder.classList.remove('animate'));
  }

  holder.setAttribute('data-slideindex', index);

  return holder;
};

/**
 * Shows the additional content when a slide is clicked.
 *
 * @param {string}   currentSlideClassName The clicked slide new classname to add.
 * @param {string}   holderClassName       The holder classname.
 * @param {Function} holderInfoCallback    The slider holder content callback to get the content.
 *                                         The `slide` param is passed.
 */
export const showSlideContent = (currentSlideClassName, holderClassName, holderInfoCallback) => {
  let $sliders = getSliders();

  for (let slider = 0; slider < $sliders.length; slider++) {
    try {
      let $current = $sliders[slider],
        $container = $current.children[0],
        $slider = getSliderInstance($container.id),
        $holder = createInfoHolder(holderClassName);

      setSlidesAdditionalInfo($slider, holderInfoCallback);

      $slider.on('click', (instance, event) => {
        let $slide = instance.clickedSlide,
          $index = instance.clickedIndex;

        // Make sure that click triggered on one of the slide inside slider.
        if (typeof $slide === 'undefined') {
          return;
        }

        setCurrentSlideClassName(instance, $slide, currentSlideClassName);

        let $content = getHolderWithInfo($holder, $index);

        $container.append($content);

        if ($content.innerHTML === '') {
          $slide.classList.remove(currentSlideClassName);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 * Resets any currently active slide details displayed.
 *
 * @param {string} currentSlideClassName The clicked slide class. Usually set to `current`.
 * @param {string} holderClass       The slide info holder class. Usually set to `slideDetails`.
 */
export const resetSliderHolder = (currentSlideClassName, holderClass) => {
  let $slide = getNode(`.swiper-slide.${currentSlideClassName}`),
    $holder = getNode(holderClass);

  // Clear any currently clicked slide.
  if ($slide instanceof Node) {
    $slide.classList.remove(currentSlideClassName);
  }

  // Clear any contents on the slider holder.
  if ($holder instanceof Node) {
    $holder.innerHTML = '';
  }
};

/**
 * Shows/hides the slider block when respective selector is clicked.
 *
 * @param {string} selector                 The selector element.
 * @param {string} currentSlideClassName    The currently clicked slide new class to add.
 * @param {string} currentSelectorClassName The currently clicked selector element class to add.
 * @param {string} holderClass              The slider additional content holder class (with `.`).
 * @param {string} enabledClassName         The selectors' classname that can toggle sliders.
 * @param {string} disabledClassName        The selectors' classname than can't toggle sliders.
 */
export const toggleSlider = (selector, currentSlideClassName, currentSelectorClassName, holderClass, enabledClassName, disabledClassName) => {
  let $selectors = getNodes(selector);

  for (let selector = 0; selector < $selectors.length; selector++) {
    let $current = $selectors[selector];

    $current.onclick = event => {
      event.preventDefault();

      let $classList = event.currentTarget.classList,
        $target = getSliderBlockWithId($classList),
        $sliders = getSliders();

      setCurrentElClassName($selectors, selector, currentSelectorClassName);
      resetSliderHolder(currentSlideClassName, holderClass);

      // Bail if no slider found.
      if (!$classList.contains(enabledClassName) || !($target instanceof Node)) {
        return;
      }

      for (let slider = 0; slider < $sliders.length; slider++) {
        let $slide = $sliders[slider];
        if ($slide.id === $target.id) {
          $slide.classList.toggle(currentSlideClassName);
          $slide.classList.remove(disabledClassName);
        } else {
          $slide.classList.toggle(disabledClassName);
        }
      }
    };
  }
};
