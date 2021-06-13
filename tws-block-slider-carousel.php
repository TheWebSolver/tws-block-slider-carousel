<?php
/**
 * Plugin Name: The Web Solver Block Slider Carousel
 * Plugin URI: https://github.com/TheWebSolver/tws-block-slider-carousel
 * Description: Convert gutenberg core blocks into slider carousel.
 * Version: 1.0
 * Author: Shesh Ghimire
 * Author URI: https://www.linkedin.com/in/sheshgh/
 * Requires at least: 5.3
 * Requires PHP: 5.6
 * Text Domain: tws-blockfilter
 * License: GNU General Public License v3.0 (or later)
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package   TheWebSolver\Core\Blocks_Filter
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

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Get eligible blocks.
 *
 * @return string[]
 */
function tws_bfsc_eligible_blocks() {
	/**
	 * WPHOOK: Filter -> eligible blocks as slider carousel container.
	 *
	 * @param string[] $blocks The block names in an array.
	 * @var   string[]
	 */
	$eligible_blocks = apply_filters(
		'hzfex_eligible_slider_carousel_blocks',
		array( 'core/group' )
	);

	return $eligible_blocks;
}

/**
 * Gets slider container element.
 *
 * @return string[]
 */
function tws_bfsc_get_elements() {
	$blocks   = tws_bfsc_eligible_blocks();
	$elements = array();

	// Set container element for group block.
	if ( in_array( 'core/group', $blocks, true ) ) {
		$elements[] = array(
			'parent' => 'wp-block-group',
			'child'  => 'wp-block-group__inner-container',
		);
	}

	/**
	 * WPHOOK: Filter -> slider carousel container elements.
	 *
	 * @param string[] $blocks The block name as key, main container as value.
	 * @var   string[]
	 */
	$containers = apply_filters( 'hzfex_slider_carousel_container_element', $elements );

	return $containers;
}

/**
 * Initializes block files.
 */
function tws_bfsc_init() {
	// Register the block editor stylesheet.
	wp_register_style(
		'tws-blockfilter-editor-styles',
		plugins_url( 'build/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
	);

	// Retister the block editor script.
	wp_register_script(
		'tws-blockfilter-editor-script',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		false
	);

	// Register the slider styling.
	wp_register_style(
		'tws-slick-style',
		'https://unpkg.com/swiper/swiper-bundle.min.css',
		array(),
		'6.6.2'
	);

	// Register the slider script.
	wp_register_script(
		'tws-slick-script',
		'https://unpkg.com/swiper/swiper-bundle.min.js',
		array(),
		'6.6.2',
		true
	);

	wp_localize_script(
		'tws-blockfilter-editor-script',
		'twsSliderCarousel',
		array(
			'blocks' => tws_bfsc_eligible_blocks(),
		)
	);

	wp_register_script(
		'tws-slider-carousel-script',
		plugins_url( 'build/slider.js', __FILE__ ),
		array( 'jquery', 'tws-slick-script' ),
		'1.0.0',
		true
	);

	/**
	 * WPHOOK: Filter -> slider navigation arrows.
	 *
	 * @param string[] $arrows The arrow icons/images.
	 * @var   string[]
	 */
	$arrows = apply_filters(
		'hzfex_slider_carousel_navigation_arrows',
		array(
			'prev' => '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"></path></svg>',
			'next' => '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path></svg>',
		)
	);

	wp_localize_script(
		'tws-slider-carousel-script',
		'twsSliderCarousel',
		array(
			'containers' => tws_bfsc_get_elements(),
			'arrows'     => $arrows,
		)
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * Adds internationalization support.
		 *
		 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/internationalization/
		 * @link https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'tws-blockfilter-editor-script', 'tws-blockfilter', plugin_dir_path( __FILE__ ) . 'languages' );
	}
}
add_action( 'init', 'tws_bfsc_init' );

/**
 * Enqueues registered block assets.
 */
function tws_bfsc_enqueue_block_assets() {
	wp_enqueue_style( 'tws-blockfilter-editor-styles' );
	wp_enqueue_script( 'tws-blockfilter-editor-script' );
}
add_action( 'enqueue_block_editor_assets', 'tws_bfsc_enqueue_block_assets' );

/**
 * Enqueues slider carousel styles and scripts.
 */
function tws_enqueue_slider_scripts() {
	global $post;

	foreach ( parse_blocks( $post->post_content ) as $block ) {
		// Verify that at least one block has slider enabled.
		if (
			in_array( $block['blockName'], tws_bfsc_eligible_blocks(), true )
			&& isset( $block['attrs']['sliderEnabled'] )
			&& $block['attrs']['sliderEnabled']
		) {
			// Block is a slider. Enqueue styles and sripts.
			wp_enqueue_script( 'tws-slider-carousel-script' );
			wp_enqueue_style( 'tws-slick-style' );

			// One check is enough, exit the loop.
			break;
		}
	}
}
add_action( 'wp_enqueue_scripts', 'tws_enqueue_slider_scripts' );
