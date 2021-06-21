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
 *                            Element tagName, valid id/class attribute.
 * @returns {Node}            Node list of Elements.
 */
export const getNode = selector => {
  return document.querySelector(selector);
};

/**
 * Gets list of elements in DOM.
 *
 * @param   {string}   selector The DOM Element selector. Valid selectors are:
 *                              Element tagName, valid id/class attribute.
 * @returns {NodeList}          Node list of Elements.
 */
export const getNodes = selector => {
  return document.querySelectorAll(selector);
};

/**
 * Gets blocks that are converted to slider carousel.
 *
 * @param {string} className Additional class to check.
 *
 * @returns {NodeList} Blocks that are converted to slider carousel.
 */
export const getSliders = (className = '') => {
  let $class = isValidString(className) ? `.tws-block__sliderCarousel.${className}` : '.tws-block__sliderCarousel';
  return getNodes($class);
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
 * Sets `data-selected` attribute and new class to currently clicked element.
 *
 * @param {NodeList} selectors DOM elements as selectors.
 * @param {number}   index     The currently clicked element index.
 * @param {object}   options   The currently clicked selector element options.
 * - `className` - will be added to the clicked selector element.
 * - `reset`     - If is set to true, clicking on selector multiple times toggles all slider blocks.
 */
export const setSelected = (selectors, index, options) => {
  for (let selector = 0; selector < selectors.length; selector++) {
    let $selected = selectors[selector];

    if (options.reset) $selected.classList.toggle(options.className);

    if (selector === index) {
      $selected.setAttribute('data-selected', 'yes');
      if (!options.reset) $selected.classList.add(options.className);
    } else {
      $selected.setAttribute('data-selected', 'no');
      if (!options.reset) {
        $selected.classList.remove(options.className);
      } else {
        if ($selected.dataset.selected === 'no' && $selected.classList.contains(options.className)) {
          $selected.classList.remove(options.className);
        }
      }
    }
  }
};

/**
 * Gets the slider that has the id attribute set.
 *
 * @param   {string|DOMTokenList} selector The selector for the block converted to slider.
 *                                         - Either by selector as the slider block ID.
 *                                         - Or by selector that has id set in it's classlist.
 * @param {string} blockClassName          Classname applied to blocks.
 *                                         Select sliders with this class applied.
 * @returns {object|Node}                  Node element if found, empty object otherwise.
 */
export const getSliderBlockWithId = (selector, blockClassName = '') => {
  let $sliders = getSliders(blockClassName),
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
 * Removes holder content.
 *
 * @param {Node} holder The holder element.
 */
export const removeHolderContent = holder => {
  holder.innerHTML = '';
  holder.classList.remove('hasContent');
  holder.removeAttribute('data-slideindex');
  holder.removeAttribute('data-sliderid');
};

/**
 * Adds holder content.
 *
 * @param {Node}    holder  The holder element.
 * @param {number}  index   The current index.
 * @param {string} sliderId The id attribute of the current slider instance.
 */
export const addHolderContent = (holder, index, sliderId) => {
  holder.innerHTML = slideInfoHolder[index].innerHTML;
  holder.classList.add('hasContent', 'animate');
  requestAnimationFrame(() => holder.classList.remove('animate'));
  holder.setAttribute('data-slideindex', index);
  holder.setAttribute('data-sliderid', sliderId);
};

/**
 * Sets holder content by checking if it already has content or not.
 *
 * @param {Node}    holder     The holder element.
 * @param {number}  index      The current index.
 * @param {boolean} hasContent Whether holder has existing content or not.
 * @param {string} sliderId    The id attribute of the current slider instance.
 */
export const toggleHolderContent = (holder, index, hasContent, sliderId) => {
  if (!hasContent) {
    removeHolderContent(holder);
  } else {
    addHolderContent(holder, index, sliderId);
  }
};

/**
 * Gets the holder with clicked slide additional content.
 *
 * @param   {HTMLDivElement} holder   The info holder element.
 * @param   {number}         index    The current slide index.
 * @param   {string}         sliderId The id attribute of the current slider instance.
 * @returns {HTMLDivElement}          The holder with slide additional content.
 */
export const getHolderWithInfo = (holder, index, sliderId) => {
  // eslint-disable-next-line eqeqeq
  if (index == holder.dataset.slideindex) {
    // Same slide clicked multiple times, toggle holder contents.
    toggleHolderContent(holder, index, holder.innerHTML === '', sliderId);
  } else {
    // Different slide clicked, set holder content from that slide.
    toggleHolderContent(holder, index, true, sliderId);
  }

  return holder;
};

/**
 * Shows the additional content when a slide is clicked.
 *
 * @param {string} classNames (optional) Classnames applied to various elements.
 * - `slide`  - The clicked slide class. Defaults to `current`.
 * - `holder` - The slider additional content holder classname. Defaults to `slideDetails`.
 * - `block`  - The slider block than contains given classname in classlist. Defaults to an empty string.
 * @param {Function} holderInfoCallback The slider holder content callback to get the content.
 *                                      The `slide` param is passed.
 */
export const showSlideContent = (classNames, holderInfoCallback) => {
  let $slideClass = classNames.slide !== undefined ? classNames.slide : 'current',
    $holderClass = classNames.holder !== undefined ? classNames.holder : 'slideDetails',
    $blockClass = classNames.block !== undefined ? classNames.block : '',
    $sliders = getSliders($blockClass);

  for (let slider = 0; slider < $sliders.length; slider++) {
    try {
      let $current = $sliders[slider],
        $container = $current.children[0],
        $slider = getSliderInstance($container.id),
        $holder = createInfoHolder($holderClass);

      setSlidesAdditionalInfo($slider, holderInfoCallback);

      $slider.on('click', (instance, event) => {
        let $slide = instance.clickedSlide,
          $index = instance.clickedIndex;

        // Make sure that click triggered on one of the slide inside slider.
        if (typeof $slide === 'undefined') {
          return;
        }

        setCurrentSlideClassName(instance, $slide, $slideClass);

        let $content = getHolderWithInfo($holder, $index, $container.id);

        $container.append($content);

        if ($content.innerHTML === '') {
          $slide.classList.remove($slideClass);
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
 * @param {object} classNames (optional) The classnames set for clicked slide and slider content holder.
 * - `slide`  - The clicked slide class. Defaults to `current`.
 * - `holder` - The slider additional content holder classname. Defaults to `slideDetails`.
 */
export const resetSliderHolder = classNames => {
  let $slideClass = classNames.slide !== undefined ? classNames.slide : 'current',
    $holderClass = classNames.holder !== undefined ? classNames.holder : 'slideDetails',
    $slides = getNodes(`.swiper-slide.${$slideClass}`),
    $holders = getNodes(`.${$holderClass}`);

  // Clear any currently clicked slide.
  for (let slide = 0; slide < $slides.length; slide++) {
    let $currentSlide = $slides[slide];

    if ($currentSlide instanceof Node) {
      $currentSlide.classList.remove($slideClass);
    }
  }

  // Clear any contents on the slider holder.
  for (let holder = 0; holder < $holders.length; holder++) {
    let $currentHolder = $holders[holder];
    if ($currentHolder instanceof Node) {
      removeHolderContent($currentHolder);
    }
  }
};

/**
 * Shows/hides the slider block when respective selector is clicked.
 *
 * Adds `data-selected` attribute with value as `yes` or `no` when selector element is clicked.
 *
 * @param {object} classNames The classnames for selector and selected block.
 * - `selector`        - (required) The selector element classname.
 * - `enabledSelector` - (optional) The selector element another classname which can trigger click.
 *                       This can be a dynamically added class from another event.
 *                       Defaults to `enabled` classname.
 * - `clickedSelector` - (optional) New classname for the clicked (current) selector element.
 *                       Defaults to `current` classname.
 * - `selectedBlock`   - (optional) New classname for the selected slider block & it's clicked slide.
 *                       Defaults to `current` classname.
 * - `holder`          - (optional) The new classname for the info holder when a slide is clicked.
 *                       Defaults to `slideDetails` classname.
 * @param {object} reset (optional) Whether to reset the current selections (selector and slider block).
 *                       Both defaults to `true` if not set.
 * - `selector` - Whether to reset (toggle) selector on mulitple clicks.
 * - `holder`   - Whether to reset (close) holder when selector is clicked while holder is open.
 * @param {string} blockClassName (optional) Classname applied to the blocks which can toggled by selector.
 *                                If not given, all slider blocks on page will be eligible for toggle.
 */
export const toggleSlider = (classNames, reset, blockClassName = '') => {
  let $selectorClass = classNames.selector,
    $selectorEnabledClass = classNames.enabledSelector !== undefined ? classNames.enabledSelector : 'enabled',
    $selectorClickedClass = classNames.clickedSelector !== undefined ? classNames.clickedSelector : 'current',
    $selectedBlockClass = classNames.selectedBlock !== undefined ? classNames.selectedBlock : 'current',
    $holderClass = classNames.holder !== undefined ? classNames.holder : 'slideDetails',
    $resetSelector = reset.selector !== undefined ? reset.selector : true,
    $resetHolder = reset.holder !== undefined ? reset.holder : true,
    $selectors = getNodes(`.${$selectorClass}`),
    $sliders = getSliders(blockClassName);

  for (let selector = 0; selector < $selectors.length; selector++) {
    let $currentEl = $selectors[selector];

    $currentEl.onclick = event => {
      let $classList = event.currentTarget.classList,
        $target = getSliderBlockWithId($classList, blockClassName);

      setSelected($selectors, selector, { className: $selectorClickedClass, reset: $resetSelector });

      if ($resetHolder) {
        resetSliderHolder({ slide: $selectedBlockClass, holder: $holderClass });
      }

      // Will set given class (eg. 'current') to the matched slider block.
      if ($target instanceof Node) {
        $target.classList.toggle($selectedBlockClass);
      }

      for (let slider = 0; slider < $sliders.length; slider++) {
        let $slide = $sliders[slider];

        // Case when target block is the selected slider block.
        if ($slide.id === $target.id) {
          // Check if selector is enabled to trigger the selection.
          if ($classList.contains($selectorEnabledClass) && $target instanceof Node) {
            $target.setAttribute('data-selected', 'yes');
          }
        } else {
          // Case when target block is not the selected slider block.
          // Check if selector is enabled to trigger the selection.
          if ($classList.contains($selectorEnabledClass) && $target instanceof Node) {
            // Set selected value by by reset & currently clicked status of the current slide.
            let $sel = $resetSelector && !$target.classList.contains($selectedBlockClass) ? 'yes' : 'no';
            $slide.setAttribute('data-selected', $sel);
          }

          // Check if unselected slider block has given class (eg. 'current') set.
          // If it is, then remove that class.
          if ($slide.classList.contains($selectedBlockClass)) {
            $slide.classList.remove($selectedBlockClass);
          }
        }
      }
    };
  }
};
