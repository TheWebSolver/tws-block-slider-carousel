/**
 * Slider Carousel Filter
 *
 * @package TheWebSolver\Core\Blocks_Filter
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
 * Gets all filters `index.js` files and imports them.
 *
 * @param {Function} request function `webpackContext()` to request
 *                           all `index.js` file found inside `src/filters` directory.
 */
const importAll = request => {
  request.keys().forEach(request);
};
// Modified blocks using filters.
importAll(require.context('./filters', true, /index\.js$/));
