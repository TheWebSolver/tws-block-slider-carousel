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

import createSliderCarousel from './core/container';

import {
  props,
  setProps,
  getNode,
  getNodes,
  getSliders,
  isValidString,
  hasContent,
  toArray,
  setSelected,
  getBlockWithId,
  getSliderInstance,
  setCurrentSlideClassName,
  createInfoHolder,
  setSlidesAdditionalInfo,
  removeHolderContent,
  addHolderContent,
  toggleHolderContent,
  getHolderWithInfo,
  init,
  resetSliderHolder,
  toggleSlider
} from './core/component';
import { createBullets, setBullets, createArrows, addBreakpointClasses, createSlider } from './core/slider';

createSliderCarousel();

// Expose components as library to be used on other js files.
export {
  props,
  setProps,
  getNode,
  getNodes,
  getSliders,
  isValidString,
  hasContent,
  toArray,
  setSelected,
  getBlockWithId,
  getSliderInstance,
  setCurrentSlideClassName,
  createInfoHolder,
  setSlidesAdditionalInfo,
  removeHolderContent,
  addHolderContent,
  toggleHolderContent,
  getHolderWithInfo,
  init,
  resetSliderHolder,
  toggleSlider,
  createBullets,
  setBullets,
  createArrows,
  addBreakpointClasses,
  createSlider
};
