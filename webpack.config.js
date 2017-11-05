module.exports = {
  entry: {
    app: './app/app.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: 'dist/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'source-map'
}

