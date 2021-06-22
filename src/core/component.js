/* eslint-disable eqeqeq */
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
 * Default properties.
 */
export const props = {
  selectorClass: '',
  enabledSelectorClass: 'enabled',
  clickedSelectorClass: 'current',
  selectedBlockClass: 'current',
  holderClass: 'slideDetails',
  blockClass: '',
  slideClass: 'current',
  resetSelector: true,
  resetHolder: true,
  holderContent: {},
  holderAppendToWindow: false
};

/**
 * Sets property value.
 *
 * @param {object} attributes The new properties in key/value pair.
 */
export const setProps = attributes => {
  for (const [key, value] of Object.entries(attributes)) props[key] = value;
};

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
  return getNodes(`.tws-block__sliderCarousel${isValidString(className) ? '.' + className : ''}`);
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
 * Sets `data-selected` attribute and new class to currently clicked selector element.
 *
 * @param {number} index The currently clicked element index.
 */
export const setSelected = (selectors, index) => {
  Array.from(selectors).forEach((selector, position) => {
    if (props.resetSelector) selector.classList.toggle(props.clickedSelectorClass);
    if (position === index) {
      selector.setAttribute('data-selected', 'yes');
      if (!props.resetSelector) selector.classList.add(props.clickedSelectorClass);
    } else {
      selector.setAttribute('data-selected', 'no');
      if (!props.resetSelector) {
        selector.classList.remove(props.clickedSelectorClass);
      } else {
        if (selector.dataset.selected === 'no' && selector.classList.contains(props.clickedSelectorClass)) {
          selector.classList.remove(props.clickedSelectorClass);
        }
      }
    }
  });
};

/**
 * Gets the slider that has the id attribute set.
 *
 * @param   {string|DOMTokenList} selector The selector for the slider block.
 * - Either by selector as the slider block ID.
 * - Or by selector that has id set in it's classlist.
 * @returns {object|Node} Node element if found, empty object otherwise.
 */
export const getBlockWithId = selector => {
  return Array.from(getSliders(props.blockClass)).filter(slider => (isValidString(selector) ? selector === slider.id : selector.contains(slider.id)))[0];
};

/**
 * Gets the slider instance by id attribute.
 *
 * @param {string}             id The `id` attribute of the slider instance (without `#`).
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
 * @param {object} slider       The slider instance.
 * @param {Node}   currentSlide The currently clicked slide.
 */
export const setCurrentSlideClassName = (slider, currentSlide) => {
  slider.slides.forEach(slide => (currentSlide.getAttribute('aria-label') === slide.getAttribute('aria-label') ? slide.classList.add(props.slideClass) : slide.classList.remove(props.slideClass)));
};

/**
 * Creates an element where slider info will be shown when a slide is clicked.
 *
 * Following attributes will be added:
 * * class           -> The classname passed in param.
 * * data-slideindex -> 0
 * * data-sliderid   -> The slider instance ID attribute.
 *
 * @param   {string}         id The slider instance ID attribute.
 * @returns {HTMLDivElement}    The holder element with applied class and dataset.
 */
export const createInfoHolder = id => {
  let $holder = document.createElement('div');

  $holder.setAttribute('class', props.holderClass);
  $holder.setAttribute('data-slideindex', 0);
  $holder.setAttribute('data-sliderid', id);

  return $holder;
};

/**
 * Sets each slide additional contents to the holder and removes the child.
 *
 * @param   {object}   slider  The slider instance.
 * @param   {Function} getInfo The callback function returns slide info. Gets `slide` as param.
 * @returns {object}           The slider info holder with contents.
 */
export const setSlidesAdditionalInfo = (slider, getInfo) => {
  slider.slides.forEach((slide, index) => {
    let $info = getInfo(slide);

    if ($info instanceof Node) {
      try {
        // Remove the info element if it is a DOM element inside each slide & exists.
        props.holderContent[slider.el.id][index] = slide.removeChild($info);
      } catch (error) {
        props.holderContent[slider.el.id][index] = $info;
      }
    } else {
      props.holderContent[slider.el.id][index] = $info;
    }
  });

  return props.holderContent;
};

/**
 * Removes holder content.
 *
 * @param   {Node} holder The holder element.
 * @returns {Node}        The empty holder element.
 */
export const removeHolderContent = holder => {
  holder.innerHTML = '';
  holder.classList.remove('hasContent');
  holder.removeAttribute('data-slideindex');

  return holder;
};

/**
 * Adds holder content.
 *
 * @param   {string} sliderId The id attribute of the current slider instance.
 * @param   {Node}   holder   The holder element.
 * @param   {number} index    The current index.
 * @returns {Node}            The holder element with appended contents.
 */
export const addHolderContent = (sliderId, holder, index) => {
  holder.innerHTML = props.holderContent[sliderId][index].innerHTML;
  holder.classList.add('hasContent', 'animate');
  requestAnimationFrame(() => holder.classList.remove('animate'));
  holder.setAttribute('data-slideindex', index);
  holder.setAttribute('data-sliderid', sliderId);

  return holder;
};

/**
 * Sets holder content by checking if it already has content or not.
 *
 * @param {string}  sliderId The id attribute of the current slider instance.
 * @param {Node}    holder   The holder element.
 * @param {number}  index    The current index.
 * @param {boolean} add      Whether to add content to holder or remove.
 */
export const toggleHolderContent = (sliderId, holder, index, add) => {
  return add ? addHolderContent(sliderId, holder, index) : removeHolderContent(holder);
};

/**
 * Gets the holder with clicked slide additional content.
 *
 * @param   {string}         sliderId The id attribute of the current slider instance.
 * @param   {HTMLDivElement} holder   The info holder element.
 * @param   {number}         index    The current slide index.
 * @returns {HTMLDivElement}          The holder with slide additional content.
 */
export const getHolderWithInfo = (sliderId, holder, index) => {
  // Same slide clicked multiple times, toggle holder contents, else add content.
  return sliderId == holder.dataset.sliderid ? toggleHolderContent(sliderId, holder, index, index == holder.dataset.slideindex ? holder.innerHTML === '' : true) : removeHolderContent(holder);
};

/**
 * Initializes sliders.
 *
 * @param {Function} holderInfoCallback The callback function to display each slide's additional content.
 *                                      The `slide` param is passed.
 * @param {Function} sliderCallback     The callback function to perform task on the slider.
 *                                      The `slider` param (swiper instance) is passed.
 */
export const init = (holderInfoCallback, sliderCallback) => {
  let $sliders = getSliders(props.blockClass);

  for (let slider = 0; slider < $sliders.length; slider++) {
    try {
      let $current = $sliders[slider],
        $container = $current.children[0],
        $slider = getSliderInstance($container.id),
        $holder = createInfoHolder($container.id);

      // Toggles info content for each slide of the current slider instance.
      if (holderInfoCallback) {
        props.holderContent[$container.id] = [];
        setSlidesAdditionalInfo($slider, holderInfoCallback);

        $slider.on('click', (instance, event) => {
          let $slide = instance.clickedSlide;

          // Make sure that click triggered on one of the slide inside slider.
          if (typeof $slide === 'undefined') return;

          setCurrentSlideClassName(instance, $slide);

          let $content = getHolderWithInfo($container.id, $holder, instance.clickedIndex),
            $appendTo = props.holderAppendToWindow ? document.body : $current;

          if (props.resetHolder && !props.holderAppendToWindow) resetSliderHolder(instance);

          $appendTo.append($content);

          if ($content.innerHTML === '') $slide.classList.remove(props.slideClass);
        });
      }

      // Allows third party developers to perform any swiper API events.
      if (sliderCallback) sliderCallback($slider);
    } catch (error) {
      console.error(error);
    }
  }
};

/**
 * Resets all info content holders.
 *
 * @param {object} currentSlider If it is passed, all other holders except this will reset.
 */
export const resetSliderHolder = (currentSlider = {}) => {
  let $slides = getNodes(`.swiper-slide.${props.slideClass}`),
    $holders = getNodes(`.${props.holderClass}`);

  for (let slide = 0; slide < $slides.length; slide++) {
    let $currentSlide = $slides[slide],
      $slider = $currentSlide.parentElement.parentElement;

    // Ignore if reset is to be done for all other holders except current.
    if (currentSlider.el && currentSlider.el.id === $slider.id) continue;

    if ($currentSlide instanceof Node) $currentSlide.classList.remove(props.slideClass);
  }

  // Clear any contents on the slider holder.
  for (let holder = 0; holder < $holders.length; holder++) {
    let $currentHolder = $holders[holder],
      $sliderId = $currentHolder.dataset.sliderid;

    // Ignore if reset is to be done for all other holders except current.
    if (currentSlider.el && currentSlider.el.id === $sliderId) continue;

    if ($currentHolder instanceof Node) removeHolderContent($currentHolder);
  }
};

/**
 * Shows/hides the slider block when respective selector is clicked.
 *
 * Adds `data-selected` attribute with value as `yes` or `no` when selector element is clicked.
 */
export const toggleSlider = () => {
  let $selectors = getNodes(`.${props.selectorClass}`),
    $sliders = getSliders(props.blockClass);

  for (let selector = 0; selector < $selectors.length; selector++) {
    $selectors[selector].onclick = event => {
      let $classList = event.currentTarget.classList,
        $target = getBlockWithId($classList);

      // Bail early if no slider block found for the selector.
      if (!$target) return;

      setSelected($selectors, selector);

      if (props.resetHolder && !props.holderAppendToWindow) resetSliderHolder();

      // Will set given class (eg. 'current') to the matched slider block.
      if ($target instanceof Node) $target.classList.toggle(props.selectedBlockClass);

      for (let slider = 0; slider < $sliders.length; slider++) {
        let $slider = $sliders[slider];

        // Case when target block is the selected slider block.
        if ($slider.id === $target.id) {
          // Check if selector is enabled to trigger the selection.
          if ($classList.contains(props.enabledSelectorClass) && $target instanceof Node) {
            $target.setAttribute('data-selected', 'yes');
          }
        } else {
          // Case when target block is not the selected slider block.
          // Check if selector is enabled to trigger the selection.
          if ($classList.contains(props.enabledSelectorClass) && $target instanceof Node) {
            // Set selected value by reset & clicked status of the slide.
            $slider.setAttribute('data-selected', props.resetSelector && !$target.classList.contains(props.selectedBlockClass) ? 'yes' : 'no');
          }

          // Unselected slider block has selected class, remove it.
          if ($slider.classList.contains(props.selectedBlockClass)) {
            $slider.classList.remove(props.selectedBlockClass);
          }
        }
      }
    };
  }
};
