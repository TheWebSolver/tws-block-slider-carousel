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
 * Checks if given list has all values.
 *
 * @param {string[]} list                The list to check all against.
 * @param {string[]|DOMTokenList} values The values to check. If not passed, `list` will be used.
 * @param {boolean} isDOM                Whether param `values` are DOM elements. Defaults to `false`.
 * @param {boolean} error                Throw error message.
 * @returns {boolean}                    True if list has all values, false otherwise.
 */
const hasContent = (list, values = [], isDOM = false, error = '') => {
	let $isValid = list.every((value, index, listAsValues) => {
		let $values = Array.isArray(values) && values.length === 0 ? listAsValues : values;

		// Verify that value is non-empty and is included in list.
		return isDOM ? $values.contains(value) : value.length > 0 && $values.includes(value);
	});

	if (error !== '' && !$isValid ) {
		throw new Error(error);
	}

	return $isValid;
}

/**
 * Checks if given thing is a non-empty string.
 *
 * @param {any} thing The thing to check for.
 * @returns {boolean} True if is a string and is not empty, false otherwise.
 */
const isValidString = string => {
	return typeof string === 'string' && string !== '';
}

/**
 * Converts classes to an array list.
 *
 * @param {string} thing The thing to be converted.
 * @param {string} separator The separator between the thing.
 * @returns {string[]} values in an array, false if not valid string.
 */
const toArray = (thing, separator) => {
	if (!isValidString(thing)) {
		return [];
	}

	return thing.split(separator).map(item => item.trim());
}

/**
 * Verifies if element has given class(es).
 *
 * @param {DOMTokenList} classList List of given element's classes.
 * @param {string} targetList The classes to check.
 * @returns {boolean} True if DOMTokenList contains the targetList, false otherwise.
 */
const hasClass = (classList, targetList) => {
	return hasContent(targetList.split(' '), classList, true);
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
 * @param {Element} block         The block where slider is applied.
 * @param {Element} container     The block inner container class which will
 *                                actually be the slider container.
 * @param {string} containerClass The unique classname for the container.
 * @throws {Error}
 */
const prepareData = (block, container, containerClass) => {
	// Get slider wrapper.
	let $wrapper = block.dataset.wrapper,
		$wrapperEl = container.querySelector($wrapper);

		// Case where invalid wrapper element given.
		if ($wrapperEl === null) {
			throw new Error(`Inside slider container with unique class "${containerClass}", wrapper element "${$wrapper}" not found.`);
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
		$bulletRender = toArray($bullet.render, ',');
	}

	// Start preparing slider carousel options.
	const sliderOptions = JSON.parse(block.dataset.sliderdefault);

	if (Object.keys($breakpoints).length > 0) {
		sliderOptions['breakpoints'] = $breakpoints;
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

	let $wrapperTag = $wrapperEl.tagName.toLowerCase(),
		$wrapperClassList = toArray($wrapperClass, ' '),
		$slideNumber = 0;

	try {
		// Case where slider wrapper class to remove doesn't exist.
		if (isValidString($wrapperClass) && !hasClass($wrapperEl.classList, $wrapperClass)) {
			throw new Error(`Inside slider container with unique class "${containerClass}", slider wrapper element "<${$wrapperTag}>" for which "${$wrapperClass}" class(es) is set for removal doesn't exist.`);
		}

		// Add the slider wrapper class.
		$wrapperEl.classList.add('swiper-wrapper');
	} catch (error) {
		throw new Error(error);
	} finally {
		// Remove default class, if given and exists in current wrapper element.
		if (hasClass($wrapperEl.classList, $wrapperClass) && Array.isArray($wrapperClassList)) {
			$wrapperEl.classList.remove(...$wrapperClassList);
		}
	}

	let $wrapperChildNodes = $wrapperEl.childNodes,
		$slideCount = $wrapperEl.children.length;

	// Bail if slide count is less than two.
	if ($slideCount < 2) {
		throw new Error(`Inside slider container with unique class "${containerClass}", there must be atleast 2 slide elements inside the wrapper element to initialize the slider.`);
	}
	console.log($bulletRender)

	if ($bullet.enabled) {
		let $bulletId = `${containerClass}--bullets`,
		$invalidBulletMsg = `Inside slider container with unique class "${containerClass}", bullets can't be rendered from the given value. There are total "${$slideCount}" slides but given value is "${$bullet.render}".`;

		createBullets(container, $bulletId);

		sliderOptions['pagination'] = {
			el: `#${$bulletId}`,
			clickable: $bullet.clickable,
			dynamicBullets: $bullet.dynamicBullets,
			...(hasContent($bulletRender, $bulletRender, false, $invalidBulletMsg) && {
				renderBullet: (index, className) => {
					// Given bullet content is not equal to number of slides, rendering is not possible.
					if ($bulletRender.length > 0 && $bulletRender.length !== $slideCount) {
						console.error($invalidBulletMsg);
					}

					let $bulletContent = $bulletRender.length === $slideCount ? $bulletRender[index] : '';
					return '<span class="' + className + '">' + $bulletContent + '</span>';
				}
			})
		}
	}

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
			$slideClassList = toArray($slideClass, ' '),
			$getSlide = toArray($slide, '.'); // eg: "div.wp-block-column" => ['div', 'wp-block-column].

		try {
			// Case where slide element tag does not match.
			if ($getSlide[0] !== $nodeTag) {
				throw new Error(`Inside slider container with unique class "${containerClass}", the slide elements do not match. Element set on slider option is "<${$getSlide[0]}>" but "<${$nodeTag}>" found.`);
			}

			// An info message if slide is empty.
			if ($slideNode.innerHTML === '') {
				console.info(`Inside slider container with unique class "${containerClass}", slide number "${$slideNumber}" has no content. Is that on purpose?`);
			}

			// Case where slide class to remove doesn't exist.
			if (isValidString($slideClass) && !hasClass($slideNode.classList, $slideClass)) {
				throw new Error(`Inside slider container with unique class "${containerClass}", slide element "<${$nodeTag}>" for which "${$slideClass}" class(es) is set for removal doesn't exist.`);
			}

			// Add the slide class.
			$slideNode.classList.add('swiper-slide');
		} catch (error) {
			throw new Error(error);
		} finally {
			// Remove default class, if given and exists in current slide element.
			if (hasClass($slideNode.classList, $slideClass) && Array.isArray($slideClassList)) {
				$slideNode.classList.remove(...$slideClassList);
			}
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
					if (error instanceof TypeError) {
						console.error(`The block element with classname "${$blockClass}" does not have any slider wrapper element. Add a slider wrapper element inside block element and slide elements inside the wrapper element. Eg - Add a columns block with two column layout: <div class="wp-block-columns"><div class="wp-block-column"></div><div class="wp-block-column"></div></div>`);
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