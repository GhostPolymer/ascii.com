module.exports = {
  entry: './app/App.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'index.html',
  },
  devServer: {
    inline: true,
    contentBase: `${__dirname}/public`,
    port: 3333,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
    }],
},