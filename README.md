<p align="center">
  <a href="https://github.com/TheWebSolver/tws-block-slider-carousel">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>
</p>

<h1 align="center">TWS Block Slider Carousel</h1>

CONVERT WORDPRESS GUTENBERG BLOCKS INTO SLIDER CAROUSEL

Convert eligible WordPress blocks into slider carousel as a swiper instance. Eligible blocks means:
- Block that can have inner blocks (such as ***Group*** block `core/group`) which has parent child DOM Element. For example, in ***Group*** block:
	- Parent is the outer `<div>` element with class `wp-block-group`, and
	- Child is the inner `<div>` element with class `wp-block-group__inner-container`.

## Installation (via Composer):
To install this plugin, edit your `composer.json` file:
```json
"require": {
	"thewebsolver/tws-block-slider-carousel": "dev-master"
}
```
Then from terminal, run:
```sh
$ composer install
```

## Usage
### Add support for custom blocks
If you want to convert any other block to slider carousel which implements similar parent/child DOM Element as core ***Group*** block, you can add them with the filter hook.
```php
<?php // Filename: functions.php

/**
 * Make custom block eligible for converting to slider carousel.
 *
 * @param string[] $blocks The eligible blocks to convert to slider carousel.
 * @return string[] The modified eligible block names.
 */
function add_eligible_block_for_slider( array $blocks ): array {
	$blocks[] = 'namespace/custom-block';

	return $blocks;
}
add_filter( 'hzfex_eligible_slider_carousel_blocks', 'add_eligible_block_for_slider' );

/**
 * Make above block converted to slider on frontend.
 *
 * @param string[] $elements The custom block's outer & inner container classnames.
 * @return string[] The modified block element classes.
 */
function convert_block_to_slider( array $elements ): array {
	$elements[] = array(
		'parent'  => 'parent-block-classname',
		'child'   => 'parent-block-inner-container-classname'
	);

	return $elements;
}
add_filter( 'hzfex_slider_carousel_container_element', 'convert_block_to_slider' );
```

### Inside Block Editor Inspector
Once eligible blocks are set, slider carousel can be enabled and options can be configured right from the inspector control panel.

## Filter Hooks

All PHP codes _(including filters)_ are in the main plugin file `tws-block-slider-carousel.php`.

| Filter Name                               | Parameters     | Type         |
|-------------------------------------------|----------------|--------------|
| hzfex_eligible_slider_carousel_blocks     | $blocks        | string[]     |
| hzfex_slider_carousel_container_element   | $elements      | string[]     |
| hzfex_slider_carousel_navigation_arrows   | $buttons       | string[]     |
| hzfex_slider_carousel_bullet_content      | $contents      | string[]     |

## Screenshots
### Core Options
![core]
### General Options
![general]
### Bullet Options
![bullet]
### Responsive Options
![breakpoint]

## Support
```
-----------------------------------
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
 ```

[core]: screenshots/core.png
[general]: screenshots/general.png
[bullet]: screenshots/bullet.png
[breakpoint]: screenshots/breakpoint.png