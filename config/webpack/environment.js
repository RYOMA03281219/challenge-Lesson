const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
encironment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jquery: 'jquery/src/jquery',
    swiper: 'swiper/swiper-bundle'
  })
)

module.exports = environment
