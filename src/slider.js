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
const SliderElements = twsSliderCarousel.containers;

/**
 * Creates a swiper instance.
 *
 * @param {string} instance The swiper main container class.
 * @param {object} options The swiper options.
 */
const createSlider = (instance, options) => {
	new Swiper(instance, options);
}

/**
 * Creates navigation bullets for the slider.
 *
 * @param {Element} container The slider container element.
 * @param {string} bulletId   The bullet ID.
 */
const createBullets = (container, bulletId) => {
	let $element = document.createElement('div');

	$element.setAttribute('id', bulletId);
	$element.setAttribute('class', 'tws-sliderCarousel__bullets swiper-pagination');

	container.classList.add('tws-sliderCarousel__with-bullets');
	container.append($element);
}

/**
 * Creates navigation arrows for the slider.
 *
 * @param {Element} container The slider container element.
 * @param {string} prev The button ID for previous slide.
 * @param {string} next The button ID for next slide.
 */
const createArrows = (container, prev, next) => {
	let $prevBtn = document.createElement('span'),
		$nextBtn = document.createElement('span');

	$prevBtn.setAttribute('id', prev);
	$prevBtn.setAttribute('class', 'tws-sliderCarousel__arrow arrow--prev swiper-navigation');
	$nextBtn.setAttribute('id', next);
	$nextBtn.setAttribute('class', 'tws-sliderCarousel__arrow arrow--next swiper-navigation');

	container.classList.add('tws-sliderCarousel__with-arrows');
	container.append($prevBtn);
	container.append($nextBtn);
}

/**
 * Checks if given array has non-empy value.
 *
 * @param {string[]} value The array to check if any value is empty.
 * @returns {boolean} True if array has non-empty values, false otherwise.
 */
const hasContent = value => {
	for (var i = 0; i < value.length; i++) {
		if (value[i] === "")
			return false;
	}
	return true;
}

/**
 * Adds class by responsive enabled per breakpoint.
 *
 * @param {string} container The slider container class.
 * @param {object} breakpoints The brekpoints data.
 */
const addBreakpointClasses = (container, breakpoints) => {
	Object.entries(breakpoints).forEach(breakpoint => {
		const [Pixel, Responsive] = breakpoint;
		container.classList.add(Responsive.enabled ? `isEnabled__${Pixel}` : `isDisabled__${Pixel}`);
	});
}

/**
 * Prepare slider options from data attribute of the block.
 *
 * @param {Element} block      The block where slider is applied.
 * @param {Element} container  The block inner container class which will
 *                            actually be the slider container.
 * @throws {Error}
 */
const prepareData = (block, container, containerClass) => {
	// Get slider wrapper.
	let $wrapper = block.dataset.wrapper,
		$wrapperEl = container.querySelector($wrapper),
		$slideCount = $wrapperEl.children.length;

	// Bail if slide count is less than two.
	if ($slideCount < 2) {
		throw new Error('There must be atleast 2 slide elements inside the wrapper element to initialize the slider.');
	}

	// Get other slider data.
	let $slide = block.dataset.slide,
		$wrapperClass = block.dataset.wrapperclass,
		$slideClass = block.dataset.slideclass,
		$bullet = JSON.parse(block.dataset.bulletcontrol),
		$bulletRender = [],
		$arrow = JSON.parse(block.dataset.arrowcontrol),
		$breakpoints = JSON.parse(block.dataset.breakpoints);

	if (typeof $bullet.render === 'string') {
		$bulletRender = $bullet.render.split(',').map(item => item.trim());
	}

	// Start preparing slider carousel options.
	const sliderOptions = JSON.parse(block.dataset.sliderdefault);

	if (Object.keys($breakpoints).length > 0) {
		sliderOptions['breakpoints'] = $breakpoints;
	}

	if ($bullet.enabled) {
		let $bulletId = `${containerClass}--bullets`;

		createBullets(container, $bulletId);

		sliderOptions['pagination'] = {
			el: `#${$bulletId}`,
			clickable: $bullet.clickable,
			dynamicBullets: $bullet.dynamicBullets,
			...(hasContent($bulletRender) && {
				renderBullet: (index, className) => {
					// Given bullet content is not equal to number of slides, rendering is not possible.
					let $bulletContent = $bulletRender.length === $slideCount ? $bulletRender[index] : '';
					return '<span class="' + className + '">' + $bulletContent + '</span>';
				}
			})
		}
	}

	if ($arrow.enabled) {
		let $arrowIdNext = `${containerClass}--next`,
			$arrowIdPrev = `${containerClass}--prev`;

		createArrows(container, $arrowIdNext, $arrowIdPrev);

		sliderOptions['navigation'] = {
			nextEl: `#${$arrowIdNext}`,
			prevEl: `#${$arrowIdPrev}`
		}
	}

	addBreakpointClasses(container, $breakpoints);

	// Remove default class (if given), add swiperjs classes to wrapper and slides.
	let $wrapperChildNodes = $wrapperEl.childNodes,
		$slideNumber = 0;

	// Add the slider wrapper class.
	$wrapperEl.classList.add('swiper-wrapper');

	// Remove default applied class to slider wrapper, if given.
	try {
		if (typeof $wrapperClass === 'string' && $wrapperEl.classList.contains($wrapperClass)) {
			$wrapperEl.classList.remove($wrapperClass);
		}
	} catch (error) {
		// Not a big issue, just notify on console if something goes wrong.
		console.error(error);
	}

	// Iterate over all child nodes of the slider wrapper to get the slides.
	for (let slide = 0; slide < $wrapperChildNodes.length; slide++) {
		$slideNumber = slide + 1;
		let $sliderSlide = $wrapperChildNodes[slide],
			$slideClasses = $sliderSlide.className;

		// Ignore elements that has no classes applied.
		if (typeof $slideClasses === 'undefined') {
			continue;
		}

		let $slideTag = $sliderSlide.tagName.toLowerCase(),
			$slideName = `${$slideTag}.${$slideClasses}`;

		// Ignore elements that are not slides.
		if (!$slideName.includes($slide)) {
			continue;
		}

		// An info message if slide is empty.
		if ($sliderSlide.innerHTML === '') {
			console.info(`The container with classname "${containerClass}" has slide "${$slideNumber}" with no content. Is it on purpose?`);
		}

		// Add the slide class.
		$sliderSlide.classList.add('swiper-slide');

		// Remove default applied class to the slides, if given.
		try {
			if (typeof $slideClass === 'string' && $sliderSlide.className.includes($slideClass)) {
				$sliderSlide.classList.remove($slideClass);
			}
		} catch (error) {
			// Not a big issue, just notify on console if something goes wrong.
			console.error(error);
		}
	}

	createSlider(`.${containerClass}`, sliderOptions);
}

/**
 * Check if slider carousel block elements is an array.
 * Iterate over slider carousel blocks and initialize slider creation.
 */
if (Array.isArray(SliderElements)) {
	let $blockIndex = 0, $innerIndex = 0;
	// Iterate over all block elements to inject slider classes.
	SliderElements.forEach((container, index) => {
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

				// The block element must have only one inner element.
				// This inner element will be the main container for slider carousel.
				if (1 !== $blockElement[block].children.length) {
					console.error(`The block element with classname "${$blockClass}" does not have any inner HTML element to instantiate the slider. Use block that creates an inner container like WordPress default "group" block.`);

					continue;
				}

				// Get the inner element of the block element to apply class to.
				let $innerElement = $blockElement[block].children[0];

				if (!$innerElement.classList.contains($blockChildClass)) {
					console.error(`The block element with classname "${container.parent}" does not have inner container element with classname as "${$blockChildClass}". Slider can't be initialized. These are passed inside function "tws_bfsc_get_elements()". If filter is used to modify it, make sure the returned elements are valid.`);

					continue;
				}

				try {
					$blockElement[block].classList.add($blockClass);
					$innerElement.classList.add($innerClass);
					prepareData($blockElement[block], $innerElement, $innerClass);
				} catch (error) {
					if (error.name === 'TypeError') {
						console.error(`The block element with classname "${$blockClass}" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>`);
					}

					if (error.name === 'Error') {
						console.error(error.message);
					}
				}
			}
		}
	});
}