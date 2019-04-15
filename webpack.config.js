const webpack = require('webpack');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'IPFS Lighthouse',
      short_name: 'IPFSLighthouse',
      description: 'Test IPFS on Lighthouse.',
      background_color: '#ffffff'
    }),
    new GenerateSW()
  ]
}

module.exports = config;
