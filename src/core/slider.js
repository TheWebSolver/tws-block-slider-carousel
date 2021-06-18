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
 * Localized arrow contents indexed by slider container ID and array of arrrow render contents.
 */
const { arrows } = twsSliderCarousel;

/**
 * Creates navigation bullets for the slider.
 *
 * @param   {Element} container The slider container element.
 * @param   {string}  bulletId  The bullet ID.
 * @param   {boolean} hasRender Whether bullet has custom content to render.
 * @returns {object}            The bullets node object.
 */
export const createBullets = (container, bulletId, hasRender) => {
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
 * @param   {string[]} options   Bullets render options.
 * @param   {number}   count     Total number of slides.
 * @param   {number}   index     The current bullet position.
 * @param   {string}   className The current bullet class name.
 * @returns {string}             HTML output with `span` tag for rendering bullet.
 */
export const setBullets = (options, count, index, className) => {
  let $bulletContent = options.length === count ? options[index] : '',
    $bulletCount = index + 1;

  return `<span class="${className} bullet__${$bulletCount}">${$bulletContent}</span>`;
};

/**
 * Creates navigation arrows for the slider.
 *
 * @param   {Element} container The slider container element.
 * @param   {string}  prev      The button ID for previous slide.
 * @param   {string}  next      The button ID for next slide.
 * @returns {object}            The appended prev/next arrow DOM objects.
 */
export const createArrows = (container, prev, next) => {
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
 * Adds responsive enabled/disabled classes to slider container.
 *
 * @param {string} container   The slider container class.
 * @param {object} breakpoints The brekpoints data.
 */
export const addBreakpointClasses = (container, breakpoints) => {
  Object.entries(breakpoints).forEach(breakpoint => {
    const [Pixel, Responsive] = breakpoint;
    container.classList.add(Responsive.enabled ? `isEnabled__${Pixel}` : `isDisabled__${Pixel}`);
  });
};

/**
 * Creates a swiper instance.
 *
 * @param {string} instance The swiper main container class.
 * @param {object} options  The swiper options.
 */
export const createSlider = (instance, options) => {
  new Swiper(instance, options); // eslint-disable-line  no-new
};
