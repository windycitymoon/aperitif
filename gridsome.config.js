// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/**/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gridsome',
  settings: {
    // Place site-wide settings here and query them from the GraphQL layer's metadata {settings} key.
    likes: {
      language: 'JavaScript',
      frameworks: [
        'Vue',
        'Gridsome',
        'Tailwind'
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: 'gridsome-plugin-svg'
    },
    {
      use: 'gridsome-plugin-base-components'
    }
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}
}
