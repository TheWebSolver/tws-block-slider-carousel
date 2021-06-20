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
  slideInfoHolder,
  getNode,
  getNodes,
  getSliders,
  isValidString,
  hasContent,
  toArray,
  setSelected,
  getSliderBlockWithId,
  getSliderInstance,
  setCurrentSlideClassName,
  createInfoHolder,
  setSlidesAdditionalInfo,
  removeHolderContent,
  addHolderContent,
  toggleHolderContent,
  getHolderWithInfo,
  showSlideContent,
  resetSliderHolder,
  toggleSlider
} from './core/component';
import { createBullets, setBullets, createArrows, addBreakpointClasses, createSlider } from './core/slider';

createSliderCarousel();

// Expose components as library to be used on other js files.
export {
  slideInfoHolder,
  getNode,
  getNodes,
  getSliders,
  isValidString,
  hasContent,
  toArray,
  setSelected,
  getSliderBlockWithId,
  getSliderInstance,
  setCurrentSlideClassName,
  createInfoHolder,
  setSlidesAdditionalInfo,
  removeHolderContent,
  addHolderContent,
  toggleHolderContent,
  getHolderWithInfo,
  showSlideContent,
  resetSliderHolder,
  toggleSlider,
  createBullets,
  setBullets,
  createArrows,
  addBreakpointClasses,
  createSlider
};
