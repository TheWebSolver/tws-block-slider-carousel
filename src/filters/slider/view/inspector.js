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

import { eligibleBlocks, sliderEffects } from "../controller/props";
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	Panel,
	TabPanel,
	ToggleControl,
	TextControl,
	SelectControl,
	BaseControl,
	Button,
	ButtonGroup,
} = wp.components;
const { __ } = wp.i18n;

/**
 * Create HOC to add custom attributes to the slider carousel.
 */
export default createHigherOrderComponent(BlockEdit => {
	return props => {
		// Bail early if not slider Carousel container.
		if (!eligibleBlocks.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const {
			sliderEnabled,
			defaultEnabled,
			defaultSlideNumber,
			defaultSpace,
			wrapperElement,
			slideElement,
			slideEffect,
			slideDirection,
			loopSlides,
			autoHeight,
			removeWrapperClass,
			removeSlideClass,
			wrapperClassNameToRemove,
			slideClassNameToRemove,
			enableInteraction,
			enableBullets,
			bulletClickable,
			bulletDynamic,
			bulletRender,
			enableArrows,
			enableBreakpoints,
			enableOneBreakpoint,
			breakOnePixels,
			breakOneSlides,
			breakOneSpace,
			breakOneEnabled,
			enableTwoBreakpoint,
			breakTwoPixels,
			breakTwoSlides,
			breakTwoSpace,
			breakTwoEnabled,
			enableThreeBreakpoint,
			breakThreePixels,
			breakThreeSlides,
			breakThreeSpace,
			breakThreeEnabled,
			enableFourBreakpoint,
			breakFourPixels,
			breakFourSlides,
			breakFourSpace,
			breakFourEnabled,
		} = props.attributes;

		/**
		 * On the frontend, when parsing post's blocks, the attributes set here will be
		 * displayed as values under key "attrs". However, it may only show the
		 * attributes in a key/value pair if the attribute's default value is changed.
		 *
		 * USE CASE FOR CONVERTING BLOCK INTO SLIDER CAROUSEL:
		 * ---------------------------------------------------
		 * On the frontend, the PHP function "parse_blocks()" is used to verify
		 * whether a given block is used as a slider carousel or not.
		 * Loop over all blocks and get the {$block['attrs']} value in an array.
		 * This array value will contain attributes set here using "props.setAttributes()".
		 * However, all attributes may not get displayed on the PHP side.
		 *
		 * So, it is important to verify whether a given block is converted to slider
		 * using the "isset()" as well as attribute value.
		 *
		 * For eg: to check whether a group block is converted to slider or not, use this:
		 * if( isset( $block['attrs']['sliderEnabled'] ) && block['attrs']['sliderEnabled'] ) {
		 * 	// This {$block} has slider enabled, enqueue frontend styles and scripts.
		 * }
		 */
		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<ToggleControl
						className="tws-slider-carousel__enable tws-blockfilter__toggle"
						label={__('Enable Slider Carousel', 'tws-blockfilter')}
						help={sliderEnabled ? __('This block will be converted to a slider. It can only be previewed on frontend', 'tws-blockfilter') : __('This block is not a slider', 'tws-blockfilter')}
						checked={sliderEnabled}
						onChange={() => props.setAttributes({ sliderEnabled: !sliderEnabled })}
					/>
					{sliderEnabled && (
						// Main toggle controls.
						<>
							<ToggleControl
								className="tws-slider-carousel__enable-slider tws-blockfilter__toggle"
								label={__('Enable interactions', 'tws-blockfilter')}
								help={defaultEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter")}
								checked={defaultEnabled}
								onChange={() => props.setAttributes({ defaultEnabled: !defaultEnabled })}
							/>
							<ToggleControl
								className="tws-slider-carousel__enable-interaction tws-blockfilter__toggle"
								label={__('Allow Touch Move', 'tws-blockfilter')}
								help={enableInteraction ? __('Enable slider interact with touch, drag, etc.', 'tws-blockfilter') : __('Disable slider touch interaction. Useful in case where only bullet/arrow navigation is preferred', 'tws-blockfilter')}
								checked={enableInteraction}
								onChange={() => props.setAttributes({ enableInteraction: !enableInteraction })}
							/>
							<ToggleControl
								className="tws-slider-carousel__enable-bullets tws-blockfilter__toggle"
								label={__('Show bullet pagination', 'tws-blockfilter')}
								help={enableBullets ? __('Enable slider carousel bullet navigation controls. Set each breakpoint details in PanelBody "Bullet Options"', 'tws-blockfilter') : __('Disable bullet navigation controls', 'tws-blockfilter')}
								checked={enableBullets}
								onChange={() => props.setAttributes({ enableBullets: !enableBullets })}
							/>
							<ToggleControl
								className="tws-slider-carousel__enable-arrows tws-blockfilter__toggle"
								label={__('Show arrow navigation', 'tws-blockfilter')}
								help={enableArrows ? __('Enable slider carousel arrow navigation controls. Set each breakpoint details in PanelBody "Arrow Options"', 'tws-blockfilter') : __('Disable arrow navigation controls', 'tws-blockfilter')}
								checked={enableArrows}
								onChange={() => props.setAttributes({ enableArrows: !enableArrows })}
							/>
							<ToggleControl
								className="tws-slider-carousel__enable-breakpoint tws-blockfilter__toggle"
								label={__('Make slider responsive', 'tws-blockfilter')}
								help={enableBreakpoints ? __('Enable slider carousel breakpoint and makes slides responsive. Set each breakpoint details in PanelBody "Slider Breakpoints"', 'tws-blockfilter') : __('Disable slider breakpoint', 'tws-blockfilter')}
								checked={enableBreakpoints}
								onChange={() => props.setAttributes({ enableBreakpoints: !enableBreakpoints })}
							/>
							<PanelBody
								title={__("Slider Default Options", 'tws-blockfilter')}
								initialOpen={false}
								className='tws-slider-carousel__panelBody'
							>
								<NumberControl
									label={__('Number of slides to show', 'tws-blockfilter')}
									className='components-base-control'
									dragDirection='e'
									dragThreshold={1}
									labelPosition='top'
									step={1}
									value={defaultSlideNumber}
									onChange={value => props.setAttributes({ defaultSlideNumber: value })}
								/>
								<NumberControl
									label={__('Gap (margins) between slides', 'tws-blockfilter')}
									className='components-base-control'
									dragDirection='e'
									dragThreshold={1}
									labelPosition='top'
									step={1}
									value={defaultSpace}
									onChange={value => props.setAttributes({ defaultSpace: value })}
								/>
								<SelectControl
									label={__('Slide Effect', 'tws-blockfilter')}
									labelPosition='top'
									value={slideEffect}
									options={sliderEffects}
									onChange={value => props.setAttributes({ slideEffect: value })}
								/>
								<BaseControl help={__('Select sliding direction for the slides.', 'tws-blockfilter')}>
									<BaseControl.VisualLabel>
										{__('Slide Direction', 'tws-blockfilter')}
									</BaseControl.VisualLabel>
									<ButtonGroup
										aria-label={__('Slide Direction', 'tws-blockfilter')}
										className="tws-sliderCarousel__slide-direction"
									>
										<Button
											isSecondary={slideDirection === 'vertical'}
											isPrimary={slideDirection === 'horizontal'}
											aria-pressed={slideDirection === 'horizontal'}
											onClick={() => props.setAttributes({ slideDirection: 'horizontal' })}
										>
											{__('Horizontal', 'tws-blockfilter')}
										</Button>
										<Button
											isSecondary={slideDirection === 'horizontal'}
											isPrimary={slideDirection === 'vertical'}
											aria-pressed={slideDirection === 'vertical'}
											onClick={() => props.setAttributes({ slideDirection: 'vertical' })}
										>
											{__('Vertical', 'tws-blockfilter')}
										</Button>
									</ButtonGroup>
								</BaseControl>
								<ToggleControl
									className="tws-slider-carousel__loop-slide tws-blockfilter__toggle-inner"
									label={__('Loop slides', 'tws-blockfilter')}
									help={loopSlides ? __('Will loop the slides continuously', 'tws-blockfilter') : __("Won't loop the slides", "tws-blockfilter")}
									checked={loopSlides}
									onChange={() => props.setAttributes({ loopSlides: !loopSlides })}
								/>
								<ToggleControl
									className="tws-slider-carousel__auto-height tws-blockfilter__toggle-inner"
									label={__('Auto Height', 'tws-blockfilter')}
									help={autoHeight ? __('Container height adjust to the slide height', 'tws-blockfilter') : __("Won't adjust container to the slide height", "tws-blockfilter")}
									checked={autoHeight}
									onChange={() => props.setAttributes({ autoHeight: !autoHeight })}
								/>
								<TextControl
									label="Wrapper Element"
									value={wrapperElement || ''}
									onChange={value => props.setAttributes({ wrapperElement: value })}
									help={__('The wrapper element is an element that contains one or more slides. Best used with WordPress Columns Block.', 'tws-blockfilter')}
								/>
								<TextControl
									label="Slide Element"
									value={slideElement || ''}
									onChange={value => props.setAttributes({ slideElement: value })}
									help={__("The slide element is an element that will be a single slide container. Best used with WordPress Columns' column Block.", "tws-blockfilter")}
								/>
								<ToggleControl
									className="tws-slider-carousel__remove-wrapper-class tws-blockfilter__toggle-inner"
									label={__('Remove default wrapper class', 'tws-blockfilter')}
									help={removeWrapperClass ? __('Remove classes from the slider wrapper', 'tws-blockfilter') : __("Won't remove any slider wrapper class", "tws-blockfilter")}
									checked={removeWrapperClass}
									onChange={() => props.setAttributes({ removeWrapperClass: !removeWrapperClass })}
								/>
								{removeWrapperClass && (
									<TextControl
										value={wrapperClassNameToRemove || ''}
										onChange={value => props.setAttributes({ wrapperClassNameToRemove: value })}
										help={__('Enter default classnames applied to slides wrapper element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')}
									/>
								)}
								<ToggleControl
									className="tws-slider-carousel__remove-slide-class tws-blockfilter__toggle-inner"
									label={__('Remove default slide class', 'tws-blockfilter')}
									help={removeSlideClass ? __('Remove classes from each slide element', 'tws-blockfilter') : __("Won't remove any slide class", "tws-blockfilter")}
									checked={removeSlideClass}
									onChange={() => props.setAttributes({ removeSlideClass: !removeSlideClass })}
								/>
								{removeSlideClass && (
									<TextControl
										value={slideClassNameToRemove || ''}
										onChange={value => props.setAttributes({ slideClassNameToRemove: value })}
										help={__('Enter default classnames applied to each slide element to be removed once slider is initialized. This is to prevent WordPress default and/or theme styling interference with slider. Separate multiple classes with spaces.', 'tws-blockfilter')}
									/>
								)}
							</PanelBody>
							{enableBullets && (
								<PanelBody
									title={__('Slider Bullet Options', 'tws-blockfilter')}
									initialOpen={false}
									className='tws-slider-carousel__panelBody'
								>
									<ToggleControl
										className="tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner"
										label={__('Make bullets clickable', 'tws-blockfilter')}
										help={bulletClickable ? __('Clicking bullet will change slide', 'tws-blockfilter') : __("Clicking bullet won't change slide", "tws-blockfilter")}
										checked={bulletClickable}
										onChange={() => props.setAttributes({ bulletClickable: !bulletClickable })}
									/>
									<ToggleControl
										className="tws-slider-carousel__bulletOptions tws-blockfilter__toggle-inner"
										label={__('Make bullets dynamic', 'tws-blockfilter')}
										help={bulletDynamic ? __('Keep only few bullets visible', 'tws-blockfilter') : __("Keep all bullets visible", "tws-blockfilter")}
										checked={bulletDynamic}
										onChange={() => props.setAttributes({ bulletDynamic: !bulletDynamic })}
									/>
									{!bulletDynamic && (
										<TextControl
											label={__('Enter render callback for bullets separated by comma. The number of values enter here must match the total number of slides.', 'tws-blockfilter')}
											value={bulletRender || ''}
											onChange={value => props.setAttributes({ bulletRender: value })}
										/>
									)}
								</PanelBody>
							)}
							{enableBreakpoints && (
								<PanelBody
									title={__('Slider Breakpoints', 'tws-blockfilter')}
									initialOpen={false}
									className='tws-slider-carousel__panelBody'
								>
									{/* First breakpoint options */}
									<ToggleControl
										className="tws-slider-carousel__enable-first-breakpoint tws-blockfilter__toggle-inner"
										label={__('Enable first breakpoint', 'tws-blockfilter')}
										help={__('(mobile device portrait)', 'tws-blockfilter')}
										checked={enableOneBreakpoint}
										onChange={() => props.setAttributes({ enableOneBreakpoint: !enableOneBreakpoint })}
									/>
									{enableOneBreakpoint && (
										<Panel className="tws-slider-carousel__panel">
											<NumberControl
												label={__('Enter window width (in px)', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={10}
												labelPosition='top'
												isShiftStepEnabled={true}
												step={5}
												shiftStep={50}
												value={breakOnePixels}
												onChange={value => props.setAttributes({ breakOnePixels: value })}
											/>
											<NumberControl
												label={__('Number of slides to show', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={1}
												labelPosition='top'
												step={1}
												value={breakOneSlides}
												onChange={value => props.setAttributes({ breakOneSlides: value })}
											/>
											<NumberControl
												label={__('Gap (margins) between slides', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={1}
												labelPosition='top'
												step={1}
												value={breakOneSpace}
												onChange={value => props.setAttributes({ breakOneSpace: value })}
											/>
											<ToggleControl
												className="tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2"
												label={__('Enable interactions', 'tws-blockfilter')}
												help={breakOneEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter")}
												checked={breakOneEnabled}
												onChange={() => props.setAttributes({ breakOneEnabled: !breakOneEnabled })}
											/>
										</Panel>
									)}

									{/* Second breakpoint options */}
									<ToggleControl
										className="tws-slider-carousel__enable-second-breakpoint tws-blockfilter__toggle-inner"
										label={__('Enable second breakpoint', 'tws-blockfilter')}
										help={__('(Mobile device ladscape/phablet)', 'tws-blockfilter')}
										checked={enableTwoBreakpoint}
										onChange={() => props.setAttributes({ enableTwoBreakpoint: !enableTwoBreakpoint })}
									/>
									{enableTwoBreakpoint && (
										<Panel className="tws-slider-carousel__panel">
											<NumberControl
												label={__('Enter window width (in px)', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={10}
												labelPosition='top'
												isShiftStepEnabled={true}
												step={5}
												shiftStep={50}
												value={breakTwoPixels}
												onChange={value => props.setAttributes({ breakTwoPixels: value })}
											/>
											<NumberControl
												label={__('Number of slides to show', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={1}
												labelPosition='top'
												step={1}
												value={breakTwoSlides}
												onChange={value => props.setAttributes({ breakTwoSlides: value })}
											/>
											<NumberControl
												label={__('Gap (margins) between slides', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={8}
												labelPosition='top'
												step={2}
												value={breakTwoSpace}
												onChange={value => props.setAttributes({ breakTwoSpace: value })}
											/>
											<ToggleControl
												className="tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2"
												label={__('Enable interactions', 'tws-blockfilter')}
												help={breakTwoEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter")}
												checked={breakTwoEnabled}
												onChange={() => props.setAttributes({ breakTwoEnabled: !breakTwoEnabled })}
											/>
										</Panel>
									)}
									{/* Third breakpoint options */}
									<ToggleControl
										className="tws-slider-carousel__enable-third-breakpoint tws-blockfilter__toggle-inner"
										label={__('Enable third breakpoint', 'tws-blockfilter')}
										help={__('(tablet portrait)', 'tws-blockfilter')}
										checked={enableThreeBreakpoint}
										onChange={() => props.setAttributes({ enableThreeBreakpoint: !enableThreeBreakpoint })}
									/>
									{enableThreeBreakpoint && (
										<Panel className="tws-slider-carousel__panel">
											<NumberControl
												label={__('Enter window width (in px)', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={10}
												labelPosition='top'
												isShiftStepEnabled={true}
												step={5}
												shiftStep={50}
												value={breakThreePixels}
												onChange={value => props.setAttributes({ breakThreePixels: value })}
											/>
											<NumberControl
												label={__('Number of slides to show', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={1}
												labelPosition='top'
												step={1}
												value={breakThreeSlides}
												onChange={value => props.setAttributes({ breakThreeSlides: value })}
											/>
											<NumberControl
												label={__('Gap (margins) between slides', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={3}
												labelPosition='top'
												step={1}
												value={breakThreeSpace}
												onChange={value => props.setAttributes({ breakThreeSpace: value })}
											/>
											<ToggleControl
												className="tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2"
												label={__('Enable interactions', 'tws-blockfilter')}
												help={breakThreeEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter")}
												checked={breakThreeEnabled}
												onChange={() => props.setAttributes({ breakThreeEnabled: !breakThreeEnabled })}
											/>
										</Panel>
									)}

									{/* Fourth breakpoint options */}
									<ToggleControl
										className="tws-slider-carousel__enable-four-breakpoint tws-blockfilter__toggle-inner"
										label={__('Enable forth breakpoint', 'tws-blockfilter')}
										help={__('(Tablet landspace/laptop)', 'tws-blockfilter')}
										checked={enableFourBreakpoint}
										onChange={() => props.setAttributes({ enableFourBreakpoint: !enableFourBreakpoint })}
									/>
									{enableFourBreakpoint && (
										<Panel className="tws-slider-carousel__panel">
											<NumberControl
												label={__('Enter window width (in px)', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={10}
												labelPosition='top'
												isShiftStepEnabled={true}
												step={5}
												shiftStep={50}
												value={breakFourPixels}
												onChange={value => props.setAttributes({ breakFourPixels: value })}
											/>
											<NumberControl
												label={__('Number of slides to show', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={1}
												labelPosition='top'
												step={1}
												value={breakFourSlides}
												onChange={value => props.setAttributes({ breakFourSlides: value })}
											/>
											<NumberControl
												label={__('Gap (margins) between slides', 'tws-blockfilter')}
												dragDirection='e'
												dragThreshold={8}
												labelPosition='top'
												step={2}
												value={breakFourSpace}
												onChange={value => props.setAttributes({ breakFourSpace: value })}
											/>
											<ToggleControl
												className="tws-slider-carousel__enable-slider tws-blockfilter__toggle-inner-2"
												label={__('Enable interactions', 'tws-blockfilter')}
												help={breakFourEnabled ? __('Will respond to all events/interactions', 'tws-blockfilter') : __("Won't respond to any event/interaction", "tws-blockfilter")}
												checked={breakFourEnabled}
												onChange={() => props.setAttributes({ breakFourEnabled: !breakFourEnabled })}
											/>
										</Panel>
									)}
								</PanelBody>
							)}
						</>
					)}
				</InspectorControls>
			</Fragment>
		);
	};
}, "withSliderCarouselControls");