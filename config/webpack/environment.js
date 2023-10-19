const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
encironment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jquery: 'jquery/src/jquery',
  })
)
module.exports = environment
