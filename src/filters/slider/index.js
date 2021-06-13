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

import sliderCarouselControls from './view/inspector';
import saveContainer from './view/save';
import { eligibleBlocks, sliderCarouselAttributes } from './controller/props';

const { addFilter } = wp.hooks;
const { assign } = lodash;

/**
 * Add data attributes to slider carousel container blocks.
 *
 * @param {object} block Current block block.
 * @param {string} name Name of the block.
 *
 * @returns {object} Modified block block.
 */
const addDataAttributes = (block, name) => {
  // Bail early if not slider Carousel container.
  if (!eligibleBlocks.includes(name)) {
    return block;
  }

  block.attributes = assign(block.attributes, sliderCarouselAttributes);

  return block;
};

// Modify the core Blocks.
addFilter(
  'blocks.registerBlockType',
  'tws/sliderCarousel/register',
  addDataAttributes
);

// Add controls to inspector panel.
addFilter(
  'editor.BlockEdit',
  'tws/sliderCarousel/edit',
  sliderCarouselControls
);

// Add data attributes to container block element on save.
addFilter(
  'blocks.getSaveContent.extraProps',
  'tws/sliderCarousel/save',
  saveContainer
);
