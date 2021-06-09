const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
// Require path.
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		index: './src/index.js',
		slider: './src/slider.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "url-loader"]
			}
		]
	}
};
