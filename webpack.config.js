const path = require('path');

module.exports = (env, argv) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimize: argv.mode !== 'development'
  },
  watch: argv.mode == 'development',
  output: {
    path: __dirname + '/dist',
    filename: `teste${argv.mode == 'development' ? '' : '.min'}.js`
  }
});
