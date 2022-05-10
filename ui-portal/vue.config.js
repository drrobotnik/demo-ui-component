const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  devServer: {
    host: 'localhost'
  },
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
};
