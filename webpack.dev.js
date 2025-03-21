const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',    
    open: true,          
    hot: true,           
    port: 3000,          
    proxy: {

      '/api': {
        target: 'http://localhost:3001', 
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
