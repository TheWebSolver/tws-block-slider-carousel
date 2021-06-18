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

import { hasContent, toArray } from './component';
import prepareData from './data';

/**
 * Localized WordPress block container parent/child classes object.
 */
const { containers } = twsSliderCarousel;

/**
 * Check if slider carousel block elements is an array.
 * Iterate over slider carousel blocks and initialize slider creation.
 */
export default () => {
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
};
