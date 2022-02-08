/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['react-github-btn']);

module.exports = withBundleAnalyzer(
  withTM({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
  })
);
