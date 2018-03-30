const webpack = require('webpack');

module.exports = (env) => {
  const apiHost = env && env.production
    ? 'http://localhost:8000'
    : 'http://localhost:8080/http://localhost:8000';
  
  return {
    entry: './app/App.jsx',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: '/public',
      filename: 'bundle.js',                      //normally bundle.js is bundled via webpack build, in this case it is but it
                                                  // hidden as well.
    },
    devServer: {
      inline: true,
      contentBase: '/public',
      port: 3333,
    },
    plugins: [
      new webpack.DefinePlugin({
        API_HOST: JSON.stringify(apiHost),
      }),
    ],
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
  };
};