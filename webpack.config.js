const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const babelConfig = require('./babel.config');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: __dirname + '/dst',
    filename: '[name].[hash:8].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: babelConfig.presets,
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          'svg-transform-loader',
          'svgo-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [require('postcss-flexbugs-fixes'), require('precss'), require('autoprefixer')];
              },
            },
          },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['src/styles/variables.scss'],
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html', inject: 'body' }), new CopyPlugin([{ from: 'public/**/*', to: '' }])],
  devServer: {
    contentBase: path.join(__dirname, 'dst'),
    compress: true,
    host: '0.0.0.0',
    allowedHosts: ['localhost'],
    hot: true,
    historyApiFallback: true,
  },
};
