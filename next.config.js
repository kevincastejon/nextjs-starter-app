const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withProgressBar = require('next-progressbar');

module.exports = withProgressBar(
  withCSS(
    withImages({
      webpack(config) {
        return config;
      },
      exportPathMap() {
        return {
          '/': { page: '/' },
        };
      },
    }),
  ),
);
