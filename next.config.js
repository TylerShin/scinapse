const withSass = require('@zeit/next-sass');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = withSass({
  webpack: (config, options) => {
    config.resolve.plugins = [...config.resolve.plugins, new TsconfigPathsPlugin()];
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  target: 'serverless',
});
