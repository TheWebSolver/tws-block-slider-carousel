// Require path.
const path = require('path');

module.exports = {
  entry: {
    index: {
      import: path.resolve(__dirname, 'src/index.js')
    },
    slider: {
      import: path.resolve(__dirname, 'src/slider.js'),
      library: {
        name: 'twsSlider',
        type: 'umd',
        umdNamedDefine: true
      }
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: 'babel-loader'
      }
    ]
  },
  devtool: false
};
